import { NextResponse } from "next/server";
import { db } from "@/lib/db";

type ProtocolUpdate = {
  id?: unknown;
  name?: unknown;
  family?: unknown;
  category?: unknown;
  shortDescription?: unknown;
  description?: unknown;
  duration?: unknown;
  price?: unknown;
  image?: unknown;
  evidenceTier?: unknown;
  active?: unknown;
};

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : undefined;
}

function cleanPrice(value: unknown) {
  if (value === null || value === "" || value === undefined) {
    return null;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }

  if (typeof value === "string") {
    const parsed = Number(value);

    if (Number.isFinite(parsed)) {
      return String(parsed);
    }
  }

  return undefined;
}

function cleanBoolean(value: unknown) {
  return typeof value === "boolean" ? value : undefined;
}

function serializeProtocol(protocol: any) {
  return {
    id: protocol.id,
    number: protocol.number,
    slug: protocol.slug,
    name: protocol.name,
    family: protocol.family,
    category: protocol.category,
    shortDescription: protocol.shortDescription,
    description: protocol.description,
    duration: protocol.duration,
    price:
      protocol.price === null || protocol.price === undefined
        ? null
        : Number(protocol.price),
    image: protocol.image,
    evidenceTier: protocol.evidenceTier,
    active: protocol.active,
  };
}

export async function GET() {
  try {
    const protocols = await db.orm.public.Protocol.all();

    return NextResponse.json({
      success: true,
      protocols: protocols.map(serializeProtocol),
      count: protocols.length,
    });
  } catch (error) {
    console.error("Admin protocols fetch error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to fetch protocols.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = (await request.json()) as ProtocolUpdate;

    const id = cleanString(body.id);

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Protocol id is required.",
        },
        { status: 400 }
      );
    }

    const protocols = await db.orm.public.Protocol.all();
    const current = protocols.find((protocol) => protocol.id === id);

    if (!current) {
      return NextResponse.json(
        {
          success: false,
          error: "Protocol not found.",
        },
        { status: 404 }
      );
    }

    const update = {
      name: cleanString(body.name) ?? current.name,
      family: cleanString(body.family) ?? current.family,
      category: cleanString(body.category) ?? current.category,
      shortDescription:
        cleanString(body.shortDescription) ??
        current.shortDescription,
      description:
        cleanString(body.description) ?? current.description,
      duration:
        cleanString(body.duration) ?? current.duration,
      price:
        body.price !== undefined
          ? cleanPrice(body.price)
          : current.price,
      image:
        cleanString(body.image) ?? current.image,
      evidenceTier:
        cleanString(body.evidenceTier) ??
        current.evidenceTier,
      active:
        cleanBoolean(body.active) ?? current.active,
    };

    const updated = await db.orm.public.Protocol.upsert({
      create: {
        id: current.id,
        number: current.number,
        slug: current.slug,
        ...update,
      },
      update,
      conflictOn: {
        id: current.id,
      },
    });

    return NextResponse.json({
      success: true,
      protocol: serializeProtocol(updated),
    });
  } catch (error) {
    console.error("Admin protocol update error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to update protocol.",
      },
      { status: 500 }
    );
  }
}
