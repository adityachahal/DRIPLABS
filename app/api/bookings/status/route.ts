import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const VALID_STATUSES = [
  "PENDING",
  "CONFIRMED",
  "COMPLETED",
  "CANCELLED",
  "REJECTED",
] as const;

type BookingStatus = (typeof VALID_STATUSES)[number];

type UpdateBookingStatusRequest = {
  bookingId?: unknown;
  status?: unknown;
};

function isBookingStatus(value: unknown): value is BookingStatus {
  return (
    typeof value === "string" &&
    VALID_STATUSES.includes(value as BookingStatus)
  );
}

export async function PATCH(request: Request) {
  try {
    let body: UpdateBookingStatusRequest;

    try {
      body = (await request.json()) as UpdateBookingStatusRequest;
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON request body.",
        },
        { status: 400 },
      );
    }

    const bookingId =
      typeof body.bookingId === "string" ? body.bookingId.trim() : "";

    if (!bookingId) {
      return NextResponse.json(
        {
          success: false,
          error: "bookingId is required.",
        },
        { status: 400 },
      );
    }

    if (!isBookingStatus(body.status)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid booking status. Allowed values: PENDING, CONFIRMED, COMPLETED, CANCELLED, REJECTED.",
        },
        { status: 400 },
      );
    }

    const existingBookings = await db.orm.public.Booking
      .where({
        id: bookingId,
      })
      .all();

    const existingBooking = existingBookings[0];

    if (!existingBooking) {
      return NextResponse.json(
        {
          success: false,
          error: "Booking not found.",
        },
        { status: 404 },
      );
    }

    const updatedBooking = await db.orm.public.Booking.upsert({
      create: {
        id: existingBooking.id,
        reference: existingBooking.reference,
        customerId: existingBooking.customerId,
        locationId: existingBooking.locationId,
        protocolId: existingBooking.protocolId,
        membershipId: existingBooking.membershipId,
        date: existingBooking.date,
        time: existingBooking.time,
        customerName: existingBooking.customerName,
        email: existingBooking.email,
        phone: existingBooking.phone,
        membershipName: existingBooking.membershipName,
        status: body.status,
      },
      update: {
        status: body.status,
      },
      conflictOn: {
        id: bookingId,
      },
    });

    if (!updatedBooking) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to update booking.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Booking status updated.",
      booking: {
        id: updatedBooking.id,
        reference: updatedBooking.reference,
        status: updatedBooking.status,
      },
    });
  } catch (error) {
    console.error("Admin booking status update error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to update booking status.",
      },
      { status: 500 },
    );
  }
}