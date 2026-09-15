import { NextResponse } from "next/server";

type LocationStatus = "active" | "expansion";

interface DripLabsLocation {
  id: string;
  city: string;
  region: string;
  country: string;
  status: LocationStatus;
  phase: 1 | 2;
  type: "Central Location" | "Expansion Market";
  address: string | null;
  landmark: string | null;
  phone: string;
  bookingEnabled: boolean;
  services: {
    clinic: boolean;
    atHome: boolean;
    nadx: boolean;
  };
}

/*
 * DRIPLABS location network
 *
 * Source-supported market structure:
 * Phase 1:
 * Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai
 *
 * Phase 2:
 * Ahmedabad, Kolkata, Chandigarh, Jaipur, Kochi
 *
 * We intentionally do not fabricate street addresses or branch names.
 * Those can be added later when the operational location data is finalized.
 */

const locations: DripLabsLocation[] = [
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    region: "National Capital Region",
    country: "India",
    status: "active",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    services: {
      clinic: true,
      atHome: true,
      nadx: true,
    },
  },
  {
    id: "mumbai",
    city: "Mumbai",
    region: "Maharashtra",
    country: "India",
    status: "active",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    services: {
      clinic: true,
      atHome: true,
      nadx: true,
    },
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    region: "Karnataka",
    country: "India",
    status: "active",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    services: {
      clinic: true,
      atHome: true,
      nadx: true,
    },
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    region: "Telangana",
    country: "India",
    status: "active",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    services: {
      clinic: true,
      atHome: true,
      nadx: true,
    },
  },
  {
    id: "pune",
    city: "Pune",
    region: "Maharashtra",
    country: "India",
    status: "active",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    services: {
      clinic: true,
      atHome: true,
      nadx: true,
    },
  },
  {
    id: "chennai",
    city: "Chennai",
    region: "Tamil Nadu",
    country: "India",
    status: "active",
    phase: 1,
    type: "Central Location",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: true,
    services: {
      clinic: true,
      atHome: true,
      nadx: true,
    },
  },

  // Phase 2 expansion markets
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    region: "Gujarat",
    country: "India",
    status: "expansion",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    services: {
      clinic: false,
      atHome: false,
      nadx: false,
    },
  },
  {
    id: "kolkata",
    city: "Kolkata",
    region: "West Bengal",
    country: "India",
    status: "expansion",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    services: {
      clinic: false,
      atHome: false,
      nadx: false,
    },
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    region: "Chandigarh",
    country: "India",
    status: "expansion",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    services: {
      clinic: false,
      atHome: false,
      nadx: false,
    },
  },
  {
    id: "jaipur",
    city: "Jaipur",
    region: "Rajasthan",
    country: "India",
    status: "expansion",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    services: {
      clinic: false,
      atHome: false,
      nadx: false,
    },
  },
  {
    id: "kochi",
    city: "Kochi",
    region: "Kerala",
    country: "India",
    status: "expansion",
    phase: 2,
    type: "Expansion Market",
    address: null,
    landmark: null,
    phone: "+91 (931) 911-9009",
    bookingEnabled: false,
    services: {
      clinic: false,
      atHome: false,
      nadx: false,
    },
  },
];

export async function GET() {
  const activeLocations = locations.filter(
    (location) => location.status === "active"
  );

  const expansionLocations = locations.filter(
    (location) => location.status === "expansion"
  );

  return NextResponse.json({
    success: true,
    count: locations.length,
    activeCount: activeLocations.length,
    expansionCount: expansionLocations.length,
    data: locations,
  });
}