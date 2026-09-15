import { NextResponse } from "next/server";

import { getActiveTreatments } from "@/data/treatments";

export async function GET() {
  try {
    const protocols = getActiveTreatments();

    return NextResponse.json({
      success: true,
      count: protocols.length,
      data: protocols,
    });
  } catch (error) {
    console.error("Failed to fetch protocols:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to fetch protocols",
      },
      {
        status: 500,
      },
    );
  }
}