
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

type BookingRequest = {
  customerName?: unknown;
  email?: unknown;
  phone?: unknown;
  location?: unknown;
  protocol?: unknown;
  date?: unknown;
  time?: unknown;
  membership?: unknown;
};

type DbError = Error & {
  code?: string;
  meta?: unknown;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function fail(error: string, status = 400) {
  return NextResponse.json(
    { success: false, error },
    { status }
  );
}

function validEmail(value: string): boolean {
  if (!value || value.length > 254 || /\s/.test(value)) {
    return false;
  }

  const parts = value.split("@");
  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  if (
    !local ||
    local.length > 64 ||
    !domain ||
    local.startsWith(".") ||
    local.endsWith(".") ||
    local.includes("..")
  ) {
    return false;
  }

  const labels = domain.split(".");

  return (
    /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local) &&
    labels.length >= 2 &&
    labels.every(
      (label) =>
        label.length > 0 &&
        label.length <= 63 &&
        /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/.test(
          label
        )
    ) &&
    /^[A-Za-z]{2,63}$/.test(labels[labels.length - 1])
  );
}

/**
 * Accept exactly 10 digits for an Indian mobile number.
 * No country code, spaces, hyphens, or other characters.
 * The first digit must be 6, 7, 8, or 9.
 */
function validPhone(value: string): boolean {
  return /^[6-9]\d{9}$/.test(value);
}

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));

  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
}

function validTime(value: string): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

function reference(): string {
  return `DRIP-${crypto
    .randomUUID()
    .replace(/-/g, "")
    .slice(0, 8)
    .toUpperCase()}`;
}

function isUniqueError(error: unknown): boolean {
  if (!error || typeof error !== "object") {
    return false;
  }

  const code = (error as DbError).code;

  return (
    code === "P2002" ||
    code === "DRIVER.UNIQUE_CONSTRAINT" ||
    code === "RUNTIME.UNIQUE_CONSTRAINT"
  );
}

export async function POST(request: Request) {
  let stage = "parse request";

  try {
    let body: BookingRequest;

    try {
      body = (await request.json()) as BookingRequest;
    } catch {
      return fail(
        "Please check your booking details and try again."
      );
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return fail("Invalid booking request.");
    }

    const customerName = clean(body.customerName);
    const email = clean(body.email).toLowerCase();
    const phone = clean(body.phone);
    const location = clean(body.location);
    const protocol = clean(body.protocol);
    const date = clean(body.date);
    const time = clean(body.time);
    const membership = clean(body.membership);

    stage = "validate request";

    if (
      !customerName ||
      !email ||
      !phone ||
      !location ||
      !protocol ||
      !date ||
      !time
    ) {
      return fail(
        "Please complete all required booking details."
      );
    }

    if (
      customerName.length < 2 ||
      customerName.length > 100
    ) {
      return fail(
        "Enter a name between 2 and 100 characters."
      );
    }

    if (!validEmail(email)) {
      return fail("Enter a valid email address.");
    }

    // Reject invalid phone numbers before accessing the database.
    if (!validPhone(phone)) {
      return fail(
        "Enter a valid mobile number."
      );
    }

    if (!validDate(date)) {
      return fail("Choose a valid booking date.");
    }

    const earliestDate = new Date();
    earliestDate.setDate(earliestDate.getDate() + 1);

    const minimumDate = [
      earliestDate.getFullYear(),
      String(earliestDate.getMonth() + 1).padStart(2, "0"),
      String(earliestDate.getDate()).padStart(2, "0"),
    ].join("-");

    if (date < minimumDate) {
      return fail(
        "Please choose a date at least one day from today."
      );
    }

    if (!validTime(time)) {
      return fail("Choose a valid booking time.");
    }

    stage = "find location";

    const locations = await db.orm.public.Location.where({
      city: location,
      bookingEnabled: true,
    }).all();

    const selectedLocation = locations[0];

    if (!selectedLocation) {
      return fail(
        "That location is not currently accepting booking requests."
      );
    }

    stage = "find protocol";

    const protocols = await db.orm.public.Protocol.where({
      name: protocol,
      active: true,
    }).all();

    const selectedProtocol = protocols[0];

    if (!selectedProtocol) {
      return fail(
        "That protocol is no longer available. Please choose another."
      );
    }

    stage = "find membership";

    let selectedMembership = null;

    if (membership) {
      const memberships =
        await db.orm.public.Membership.where({
          name: membership,
          active: true,
        }).all();

      selectedMembership = memberships[0] ?? null;

      if (!selectedMembership) {
        return fail(
          "That membership is no longer available. Please choose another."
        );
      }
    }

    stage = "find customer";

    const customers = await db.orm.public.Customer.where({
      email,
    }).all();

    let customer = customers[0];

    if (!customer) {
      stage = "create customer";

      customer = await db.orm.public.Customer.create({
        id: crypto.randomUUID(),
        name: customerName,
        email,
        phone,
      });
    }

    stage = "create booking";

    let booking = null;

    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        booking = await db.orm.public.Booking.create({
          id: crypto.randomUUID(),
          reference: reference(),
          customerId: customer.id,
          locationId: selectedLocation.id,
          protocolId: selectedProtocol.id,
          membershipId: selectedMembership?.id ?? null,
          date,
          time,
          customerName,
          email,
          phone,
          membershipName: selectedMembership?.name ?? null,
          status: "PENDING",
        });

        break;
      } catch (error) {
        if (!isUniqueError(error) || attempt === 2) {
          throw error;
        }
      }
    }

    if (!booking) {
      throw new Error(
        "Booking record was not returned after creation."
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your booking request has been received. Our team will contact you to confirm the appointment.",
        booking: {
          reference: booking.reference,
          customerName: booking.customerName,
          email: booking.email,
          phone: booking.phone,
          location: selectedLocation.city,
          protocol: selectedProtocol.name,
          date: booking.date,
          time: booking.time,
          membership: booking.membershipName,
          status: booking.status,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const dbError =
      error instanceof Error ? (error as DbError) : null;

    console.error(
      "[BOOKING API] Failed at stage:",
      stage
    );
    console.error("[BOOKING API] Error:", error);

    if (process.env.NODE_ENV === "development") {
      return NextResponse.json(
        {
          success: false,
          error: "The booking request could not be saved.",
          debug: {
            stage,
            message: dbError?.message ?? String(error),
            code: dbError?.code,
          },
        },
        { status: 500 }
      );
    }

    return fail(
      "We couldn't submit your request right now. Please try again shortly.",
      500
    );
  }
}
