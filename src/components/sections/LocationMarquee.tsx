"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Home,
  Hotel,
  MapPin,
} from "lucide-react";

const locations = [
  "Delhi NCR",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Chandigarh",
];

const homeServices = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Hotel",
    icon: Hotel,
  },
  {
    label: "Office",
    icon: Building2,
  },
  {
    label: "Events",
    icon: CalendarDays,
  },
];

export default function LocationMarquee() {
  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-[#F5F1E8] px-4 py-6 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-4 lg:grid-cols-[1.28fr_1fr]">

          {/* =========================================================
              LEFT — OUR LOCATIONS
          ========================================================= */}

          <div className="group relative min-h-[310px] overflow-hidden rounded-[6px] bg-[#06152B] sm:min-h-[330px] lg:min-h-[350px]">

            {/* Background image */}
            {/* LOCATION BACKGROUND */}
<div
  aria-hidden="true"
  className="absolute inset-0 overflow-hidden"
>
  <img
    src="/images/locations/location-bg.png"
    alt=""
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
    "
  />
</div>

{/* DARK OVERLAY FOR READABILITY */}
<div
  aria-hidden="true"
  className="
    absolute
    inset-0
    bg-gradient-to-r
    from-[#020812]/90
    via-[#020812]/55
    to-[#020812]/20
  "
/>

<div
  aria-hidden="true"
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-[#020812]/80
    via-transparent
    to-[#020812]/10
  "
/>

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#020812]/90 via-transparent to-[#020812]/20"
            />

            {/* Subtle DRIPLABS blue tint */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#0066FF]/[0.035]"
            />

            {/* Content */}
            <div className="relative z-10 flex min-h-[310px] flex-col justify-between p-6 sm:min-h-[330px] sm:p-7 lg:min-h-[350px] lg:p-8">

              {/* Heading */}
              <div className="max-w-[430px]">
                <p className="font-[var(--font-heading)] text-[clamp(1.8rem,3vw,2.7rem)] font-medium leading-[0.95] tracking-[-0.045em] text-[#F7FAFF]">
                  Our Locations
                </p>

                <p className="mt-2 text-[12px] font-medium tracking-[-0.01em] text-white/80 sm:text-[13px]">
                  Six cities. One standard of care.
                </p>

                <p className="mt-5 max-w-[360px] text-[11px] leading-[1.55] text-white/75 sm:text-[12px]">
                  Find a centre near you or book a home visit.
                </p>

                {/* CTA */}
                <Link
                  href="/locations"
                  className="mt-5 inline-flex h-[38px] items-center gap-3 rounded-full bg-[#F7FAFF] px-5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#06152B] transition-all duration-300 hover:bg-[#1683FF] hover:text-white"
                >
                  Find Locations

                  <ArrowRight
                    className="h-3.5 w-3.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>

              {/* City navigation */}
              <div className="mt-7 border-t border-white/15 pt-4">
                <div
                  className="flex items-center gap-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {locations.map((city, index) => (
                    <Link
                      key={city}
                      href="/locations"
                      aria-label={`Explore DRIPLABS ${city}`}
                      className={`group/city relative flex min-w-fit items-center px-3 text-[9px] font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:text-white sm:px-4 sm:text-[10px] ${
                        index === 0 ? "pl-0" : ""
                      }`}
                    >
                      {index === 0 && (
                        <MapPin
                          className="mr-1.5 h-3 w-3 text-white"
                          strokeWidth={1.8}
                        />
                      )}

                      {/* City name — solid white */}
                      <span className="whitespace-nowrap text-white">
                        {city}
                      </span>

                      {index === 0 && (
                        <ArrowRight
                          className="ml-1.5 h-3 w-3 text-white/75 transition-transform duration-300 group-hover/city:translate-x-0.5"
                          strokeWidth={1.8}
                        />
                      )}

                      {index < locations.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="ml-3 h-3 w-px bg-white/20 sm:ml-4"
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT — DRIPLABS HOME
          ========================================================= */}

          <div className="group relative min-h-[310px] overflow-hidden rounded-[6px] bg-[#F7F4EC] text-[#06152B] sm:min-h-[330px] lg:min-h-[350px]">

            {/* Home image */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-[48%] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                style={{
                  backgroundImage:
                    "url('/images/experience/driplabs-home.png')",
                  backgroundPosition: "62% center",
                }}
              />

              {/* Fade image into ivory content area */}
              <div className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-[#F7F4EC] via-[#F7F4EC]/80 to-transparent" />

              {/* Very subtle image wash */}
              <div className="absolute inset-0 bg-[#F7F4EC]/[0.025]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-[310px] w-full flex-col justify-between p-6 sm:min-h-[330px] sm:p-7 lg:min-h-[350px] lg:p-8">

              {/* Main content */}
              <div className="max-w-[440px]">

                {/* Heading */}
                <p className="font-[var(--font-heading)] text-[clamp(1.65rem,2.7vw,2.45rem)] font-medium leading-[0.95] tracking-[-0.045em] text-[#06152B]">
                  DRIPLABS Home
                </p>

                <p className="mt-2 text-[12px] font-medium tracking-[-0.01em] text-[#1683FF] sm:text-[13px]">
                  IV wellness, at your convenience.
                </p>

                {/* Service options */}
                <div className="mt-7 flex max-w-[430px] items-start gap-5 sm:gap-7">
                  {homeServices.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex min-w-[42px] flex-col items-center gap-2"
                    >
                      <div className="flex h-8 w-8 items-center justify-center text-[#173B5E]">
                        <Icon
                          className="h-[22px] w-[22px]"
                          strokeWidth={1.45}
                        />
                      </div>

                      <span className="text-[9px] font-medium tracking-[-0.01em] text-[#173B5E] sm:text-[10px]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="mt-6 h-px w-[min(100%,330px)] bg-[#173B5E]/10" />

                {/* CTA */}
                <Link
                  href="/experience"
                  className="mt-5 inline-flex h-[38px] items-center gap-3 rounded-full bg-white px-5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#06152B] transition-all duration-300 hover:bg-[#1683FF] hover:text-white"
                >
                  Request Home Visit

                  <ArrowRight
                    className="h-3.5 w-3.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>

              {/* Bottom label */}
              <div className="relative z-10 flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-[#173B5E]/40">
                <span className="h-px w-5 bg-[#1683FF]/50" />
                DRIPLABS HOME
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}