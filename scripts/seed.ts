import "dotenv/config";
import postgres from "@prisma/orm-postgres/runtime";

import { getActiveTreatments } from "../src/data/treatments";
import { membershipPlans, circleMemberships } from "../src/data/memberships";

import type { Contract } from "../prisma/contract.d";
import contractJson from "../prisma/contract.json" with { type: "json" };

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured.");
}

const db = postgres<Contract>({
  contractJson,
  url: databaseUrl,
});

type SeedLocation = {
  id: string;
  city: string;
  region: string;
  country: string;
  status: "ACTIVE" | "EXPANSION";
  phase: number;
  type: string;
  address: string | null;
  landmark: string | null;
  phone: string;
  bookingEnabled: boolean;
  clinicEnabled: boolean;
  atHomeEnabled: boolean;
  nadxEnabled: boolean;
};

type SeedMembership = {
  id: string;
  name: string;
  type: "PACKAGE" | "UNLIMITED" | "CIRCLE";
  monthlyPrice: number | null;
  packagePrice: number | null;
  gst: number | null;
  totalPrice: number | null;
  description: string | null;
  active: boolean;
};

const locations: SeedLocation[] = [
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    region: "National Capital Region",
    country: "India",
    status: "ACTIVE",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    clinicEnabled: true,
    atHomeEnabled: true,
    nadxEnabled: true,
  },
  {
    id: "mumbai",
    city: "Mumbai",
    region: "Maharashtra",
    country: "India",
    status: "ACTIVE",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    clinicEnabled: true,
    atHomeEnabled: true,
    nadxEnabled: true,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    region: "Karnataka",
    country: "India",
    status: "ACTIVE",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    clinicEnabled: true,
    atHomeEnabled: true,
    nadxEnabled: true,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    region: "Telangana",
    country: "India",
    status: "ACTIVE",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    clinicEnabled: true,
    atHomeEnabled: true,
    nadxEnabled: true,
  },
  {
    id: "pune",
    city: "Pune",
    region: "Maharashtra",
    country: "India",
    status: "ACTIVE",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    clinicEnabled: true,
    atHomeEnabled: true,
    nadxEnabled: true,
  },
  {
    id: "chennai",
    city: "Chennai",
    region: "Tamil Nadu",
    country: "India",
    status: "ACTIVE",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    clinicEnabled: true,
    atHomeEnabled: true,
    nadxEnabled: true,
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    region: "Gujarat",
    country: "India",
    status: "EXPANSION",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    clinicEnabled: false,
    atHomeEnabled: false,
    nadxEnabled: false,
  },
  {
    id: "kolkata",
    city: "Kolkata",
    region: "West Bengal",
    country: "India",
    status: "EXPANSION",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    clinicEnabled: false,
    atHomeEnabled: false,
    nadxEnabled: false,
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    region: "Chandigarh",
    country: "India",
    status: "EXPANSION",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    clinicEnabled: false,
    atHomeEnabled: false,
    nadxEnabled: false,
  },
  {
    id: "jaipur",
    city: "Jaipur",
    region: "Rajasthan",
    country: "India",
    status: "EXPANSION",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    clinicEnabled: false,
    atHomeEnabled: false,
    nadxEnabled: false,
  },
  {
    id: "kochi",
    city: "Kochi",
    region: "Kerala",
    country: "India",
    status: "EXPANSION",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    clinicEnabled: false,
    atHomeEnabled: false,
    nadxEnabled: false,
  },
];

const memberships: SeedMembership[] = [
  ...membershipPlans.map((membership) => ({
    id: membership.slug,
    name: membership.name,
    type:
      membership.type === "package"
        ? ("PACKAGE" as const)
        : ("UNLIMITED" as const),
    monthlyPrice: null,
    packagePrice: membership.price,
    gst: membership.gst,
    totalPrice: membership.total,
    description: membership.summary,
    active: true,
  })),

  ...circleMemberships.map((membership) => ({
    id: membership.slug,
    name: membership.name,
    type: "CIRCLE" as const,
    monthlyPrice: membership.monthlyPrice,
    packagePrice: null,
    gst: null,
    totalPrice: null,
    description: membership.summary,
    active: true,
  })),
];

function decimalValue(value: number | null | undefined): string | null {
  if (value === null || value === undefined) {
    return null;
  }

  return String(value);
}

async function main() {
  console.log("Connecting to DRIPLABS PostgreSQL...");

  await db.connect();

  try {
    console.log("Seeding locations...");

    for (const location of locations) {
      await db.orm.public.Location.upsert({
        create: location,
        update: {
          city: location.city,
          region: location.region,
          country: location.country,
          status: location.status,
          phase: location.phase,
          type: location.type,
          address: location.address,
          landmark: location.landmark,
          phone: location.phone,
          bookingEnabled: location.bookingEnabled,
          clinicEnabled: location.clinicEnabled,
          atHomeEnabled: location.atHomeEnabled,
          nadxEnabled: location.nadxEnabled,
        },
        conflictOn: {
          id: location.id,
        },
      });
    }

    console.log(`✓ ${locations.length} locations seeded`);

    console.log("Seeding protocols...");

    const protocols = getActiveTreatments();

    for (const protocol of protocols) {
      await db.orm.public.Protocol.upsert({
        create: {
          id: protocol.id,
          slug: protocol.slug,
          number: Number(protocol.number),
          name: protocol.name,
          family: protocol.family,
          category: protocol.category,
          shortDescription: protocol.shortDescription,
          description: protocol.description,
          duration: protocol.duration,
          price: decimalValue(protocol.price),
          image: protocol.image,
          evidenceTier: protocol.evidenceTier,
          active: protocol.active,
        },
        update: {
          slug: protocol.slug,
          number: Number(protocol.number),
          name: protocol.name,
          family: protocol.family,
          category: protocol.category,
          shortDescription: protocol.shortDescription,
          description: protocol.description,
          duration: protocol.duration,
          price: decimalValue(protocol.price),
          image: protocol.image,
          evidenceTier: protocol.evidenceTier,
          active: protocol.active,
        },
        conflictOn: {
          id: protocol.id,
        },
      });
    }

    console.log(`✓ ${protocols.length} protocols seeded`);

    console.log("Seeding memberships...");

    for (const membership of memberships) {
      await db.orm.public.Membership.upsert({
        create: {
          id: membership.id,
          name: membership.name,
          type: membership.type,
          monthlyPrice: decimalValue(membership.monthlyPrice),
          packagePrice: decimalValue(membership.packagePrice),
          gst: decimalValue(membership.gst),
          totalPrice: decimalValue(membership.totalPrice),
          description: membership.description,
          active: membership.active,
        },
        update: {
          name: membership.name,
          type: membership.type,
          monthlyPrice: decimalValue(membership.monthlyPrice),
          packagePrice: decimalValue(membership.packagePrice),
          gst: decimalValue(membership.gst),
          totalPrice: decimalValue(membership.totalPrice),
          description: membership.description,
          active: membership.active,
        },
        conflictOn: {
          id: membership.id,
        },
      });
    }

    console.log(`✓ ${memberships.length} memberships seeded`);

    console.log("");
    console.log("=================================");
    console.log("DRIPLABS DATABASE SEED COMPLETE");
    console.log("=================================");
    console.log(`Locations:   ${locations.length}`);
    console.log(`Protocols:   ${protocols.length}`);
    console.log(`Memberships: ${memberships.length}`);
    console.log("Customers:   existing records preserved");
    console.log("Bookings:    existing records preserved");
  } finally {
    await db.close();
  }
}

main().catch((error) => {
  console.error("");
  console.error("❌ DRIPLABS DATABASE SEED FAILED");
  console.error(error);
  process.exit(1);
});