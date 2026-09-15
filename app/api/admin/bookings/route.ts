import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const bookings = await db.orm.public.Booking.all();

    return NextResponse.json({
      success: true,
      bookings: bookings.map((booking) => ({
        id: booking.id,
        reference: booking.reference,
        customerId: booking.customerId,
        customerName: booking.customerName,
        email: booking.email,
        phone: booking.phone,
        locationId: booking.locationId,
        protocolId: booking.protocolId,
        membershipId: booking.membershipId,
        membershipName: booking.membershipName,
        date: booking.date,
        time: booking.time,
        status: booking.status,
        createdAt: booking.createdAt,
      })),
      count: bookings.length,
    });
  } catch (error) {
    console.error("Admin bookings fetch error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to fetch bookings.",
      },
      { status: 500 }
    );
  }
}