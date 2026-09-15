import { NextResponse } from "next/server";
import { db } from "@/lib/db";

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

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function isValidDate(date: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

function isValidTime(time: string): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(time);
}

function createBookingReference(): string {
  const token = crypto
    .randomUUID()
    .replace(/-/g, "")
    .slice(0, 8)
    .toUpperCase();

  return "DRIP-" + token;
}

function isUniqueConstraintError(error: unknown): boolean {
  if (!error || typeof error !== "object") {
    return false;
  }

  const candidate = error as {
    code?: string;
  };

  return (
    candidate.code === "P2002" ||
    candidate.code === "DRIVER.UNIQUE_CONSTRAINT" ||
    candidate.code === "RUNTIME.UNIQUE_CONSTRAINT"
  );
}

export async function POST(request: Request) {
  try {
    let body: BookingRequest;

    try {
      body = (await request.json()) as BookingRequest;
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON request body.",
        },
        { status: 400 },
      );
    }

    const customerName = asTrimmedString(body.customerName);
    const email = asTrimmedString(body.email).toLowerCase();
    const phone = asTrimmedString(body.phone);
    const location = asTrimmedString(body.location);
    const protocol = asTrimmedString(body.protocol);
    const date = asTrimmedString(body.date);
    const time = asTrimmedString(body.time);
    const membership = asTrimmedString(body.membership);

    if (
      !customerName ||
      !email ||
      !phone ||
      !location ||
      !protocol ||
      !date ||
      !time
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "customerName, email, phone, location, protocol, date and time are required.",
        },
        { status: 400 },
      );
    }

    if (customerName.length < 2 || customerName.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid customer name.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid phone number.",
        },
        { status: 400 },
      );
    }

    if (!isValidDate(date)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid booking date.",
        },
        { status: 400 },
      );
    }

    if (!isValidTime(time)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid booking time.",
        },
        { status: 400 },
      );
    }

    const locationRows = await db.orm.public.Location
      .where({
        city: location,
        bookingEnabled: true,
      })
      .all();

    const selectedLocation = locationRows[0];

    if (!selectedLocation) {
      return NextResponse.json(
        {
          success: false,
          error:
            "The selected location is not currently available for booking.",
        },
        { status: 400 },
      );
    }

    const protocolRows = await db.orm.public.Protocol
      .where({
        name: protocol,
        active: true,
      })
      .all();

    const selectedProtocol = protocolRows[0];

    if (!selectedProtocol) {
      return NextResponse.json(
        {
          success: false,
          error: "The selected protocol could not be found.",
        },
        { status: 400 },
      );
    }

    let selectedMembership = null;

    if (membership) {
      const membershipRows = await db.orm.public.Membership
        .where({
          name: membership,
          active: true,
        })
        .all();

      selectedMembership = membershipRows[0] ?? null;

      if (!selectedMembership) {
        return NextResponse.json(
          {
            success: false,
            error: "The selected membership could not be found.",
          },
          { status: 400 },
        );
      }
    }

    const existingCustomers = await db.orm.public.Customer
      .where({
        email,
      })
      .all();

    let customer = existingCustomers[0];

    if (!customer) {
      customer = await db.orm.public.Customer.create({
        id: crypto.randomUUID(),
        name: customerName,
        email,
        phone,
      });
    }

    let booking = null;

    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        booking = await db.orm.public.Booking.create({
          id: crypto.randomUUID(),
          reference: createBookingReference(),
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
        if (!isUniqueConstraintError(error) || attempt === 2) {
          throw error;
        }
      }
    }

    if (!booking) {
      throw new Error("Unable to generate a unique booking reference.");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking request received.",
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
      { status: 201 },
    );
  } catch (error) {
    console.error("Booking creation error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to create booking. Please try again.",
      },
      { status: 500 },
    );
  }
}