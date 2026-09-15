import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    await db.connect();

    return NextResponse.json({
      success: true,
      message: "DRIPLABS database connection successful.",
    });
  } catch (error) {
    console.error("Database connection error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "DRIPLABS database connection failed.",
      },
      { status: 500 }
    );
  }
}