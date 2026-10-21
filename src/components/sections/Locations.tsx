"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  MapPin,
  Search,
  ArrowUpRight,
  Activity,
  Building2,
  Stethoscope,
} from "lucide-react";

type Location = {
  id?: string;
  name?: string;
  city?: string;
  state?: string;
  status?: string;
  address?: string;
};

type DisplayLocation = {
  number: string;
  city: string;
  description: string;
  state?: string;
  status?: string;
  address?: string;
};

const fallbackLocations: DisplayLocation[] = [
  {
    number: "01",
    city: "Delhi NCR",
    description: "Discover the DRIPLABS experience in Delhi NCR.",
    state: "Delhi NCR",
    status: "Open",
  },
  {
    number: "02",
    city: "Mumbai",
    description: "Discover the DRIPLABS experience in Mumbai.",
    state: "Maharashtra",
    status: "Open",
  },
  {
    number: "03",
    city: "Bengaluru",
    description: "Discover the DRIPLABS experience in Bengaluru.",
    state: "Karnataka",
    status: "Open",
  },
  {
    number: "04",
    city: "Hyderabad",
    description: "Discover the DRIPLABS experience in Hyderabad.",
    state: "Telangana",
    status: "Open",
  },
  {
    number: "05",
    city: "Pune",
    description: "Discover the DRIPLABS experience in Pune.",
    state: "Maharashtra",
    status: "Open",
  },
  {
    number: "06",
    city: "Chandigarh",
    description: "Discover the DRIPLABS experience in Chandigarh.",
    state: "Chandigarh",
    status: "Open",
  },
];

const easeLuxury = [0.22, 1, 0.36, 1] as const;

export default function Locations() {
  const reducedMotion = useReducedMotion();

  const [locations, setLocations] =
    useState<DisplayLocation[]>(fallbackLocations);

  const [search, setSearch] = useState("");
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadLocations() {
      try {
        const response = await fetch("/api/locations", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const payload = await response.json();

        const incoming: Location[] = Array.isArray(payload?.locations)
          ? payload.locations
          : Array.isArray(payload?.data)
            ? payload.data
            : [];

        if (!mounted || incoming.length === 0) return;

        const mapped: DisplayLocation[] = incoming
          .filter((location) => location && (location.city || location.name))
          .map((location, index) => ({
            number: String(index + 1).padStart(2, "0"),
            city: location.city || location.name || "Location",
            description:
              location.address ||
              `Discover the DRIPLABS experience in ${
                location.city || location.name || "your city"
              }.`,
            state: location.state,
            status: location.status || "Open",
            address: location.address,
          }));

        if (mounted && mapped.length > 0) {
          setLocations(mapped);
        }
      } catch {
        // Keep the fallback locations if the API is unavailable.
      }
    }

    void loadLocations();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredLocations = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return locations;

    return locations.filter((location) =>
      `${location.city} ${location.state || ""} ${location.address || ""}`
        .toLowerCase()
        .includes(query)
    );
  }, [locations, search]);

  return (
    <main
      id="locations"
      className="relative isolate min-h-screen overflow-hidden bg-[#F7F4EC] text-[#091A32]"
    >
      {/* Ambient luxury background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-40 top-0 h-[650px] w-[650px] rounded-full bg-[#1683FF]/[0.12] blur-[150px]" />
        <div className="absolute -left-48 top-[35%] h-[520px] w-[520px] rounded-full bg-[#C9DFFF]/50 blur-[150px]" />
        <div className="absolute right-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-white/80 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.24]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(9,26,50,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(9,26,50,0.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1540px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16 md:px-12 md:pb-24 md:pt-20">
        {/* Top label */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
            ease: easeLuxury,
          }}
          className="flex items-center justify-between border-b border-[#091A32]/10 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-[#1683FF]/30 motion-reduce:animate-none" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#0066FF] shadow-[0_0_12px_rgba(0,102,255,0.7)]" />
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#091A32]/55">
              DRIPLABS / INDIA
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#0066FF]">
            {String(locations.length).padStart(2, "0")} DESTINATIONS
          </span>
        </motion.div>

        {/* Hero */}
        <div className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.9,
              ease: easeLuxury,
            }}
            className="lg:col-span-7"
          >
            <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-[#0066FF]">
              FIND YOUR DRIPLABS
            </p>

            <h1 className="max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.88] tracking-[-0.065em]">
              Wellness,
              <br />
              <span className="text-[#091A32]/35">
                wherever you are.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#263D59]/75 md:text-base md:leading-8">
              Explore the DRIPLABS network and find a destination designed
              around physician-supervised wellness, precision protocols and a
              considered experience.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0066FF] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white shadow-[0_8px_28px_rgba(0,102,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0053D6] hover:shadow-[0_12px_34px_rgba(0,102,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="#destinations"
                className="inline-flex items-center gap-2 px-2 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#091A32]/65 transition-colors hover:text-[#0066FF]"
              >
                Explore destinations
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Network graphic */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reducedMotion ? 0 : 1,
              ease: easeLuxury,
            }}
            className="relative flex min-h-[300px] items-center justify-center sm:min-h-[390px] lg:col-span-5"
          >
            <div className="absolute h-[290px] w-[290px] rounded-full border border-[#0066FF]/10 sm:h-[350px] sm:w-[350px]" />
            <div className="absolute h-[220px] w-[220px] rounded-full border border-[#0066FF]/15 sm:h-[265px] sm:w-[265px]" />
            <div className="absolute h-[140px] w-[140px] rounded-full bg-[#1683FF]/10 blur-3xl" />

            <svg
              viewBox="0 0 420 420"
              className="relative h-full max-h-[370px] w-full max-w-[370px]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="networkLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0.12" />
                  <stop offset="50%" stopColor="#1683FF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity="0.12" />
                </linearGradient>
              </defs>

              <path
                d="M115 95 L195 145 L275 105 L310 190 L255 275 L180 250 L115 305 L85 210 Z"
                fill="none"
                stroke="url(#networkLine)"
                strokeWidth="1.3"
              />

              <path
                d="M195 145 L180 250 L310 190 M115 95 L255 275 M85 210 L275 105"
                fill="none"
                stroke="#1683FF"
                strokeOpacity="0.17"
                strokeWidth="1"
              />

              {[
                [115, 95],
                [195, 145],
                [275, 105],
                [310, 190],
                [255, 275],
                [180, 250],
                [115, 305],
                [85, 210],
              ].map(([cx, cy], index) => (
                <g key={`${cx}-${cy}`}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r="12"
                    fill="#1683FF"
                    fillOpacity="0.08"
                  />
                  <circle
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="#0066FF"
                    fillOpacity={index % 2 === 0 ? 1 : 0.65}
                  />
                  <circle cx={cx} cy={cy} r="1.5" fill="#FFFFFF" />
                </g>
              ))}

              <circle
                cx="205"
                cy="205"
                r="34"
                fill="#FFFFFF"
                fillOpacity="0.55"
                stroke="#0066FF"
                strokeOpacity="0.25"
              />
              <circle
                cx="205"
                cy="205"
                r="22"
                fill="#0066FF"
                fillOpacity="0.08"
              />
              <circle cx="205" cy="205" r="5" fill="#0066FF" />
            </svg>

            <div className="absolute bottom-1 right-1 font-mono text-[8px] uppercase tracking-[0.2em] text-[#091A32]/35">
              NETWORK / 01
            </div>
          </motion.div>
        </div>

        {/* Search */}
        <motion.div
          id="destinations"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
            ease: easeLuxury,
          }}
          className="scroll-mt-24 border-y border-[#091A32]/10 py-6"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#091A32]/45">
                EXPLORE DESTINATIONS
              </p>
              <p className="mt-2 text-sm text-[#263D59]/65">
                {filteredLocations.length} destination
                {filteredLocations.length === 1 ? "" : "s"} available
              </p>
            </div>

            <div className="relative w-full md:max-w-[360px]">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0066FF]/65"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search a city..."
                aria-label="Search locations"
                className="w-full rounded-full border border-[#091A32]/10 bg-white/65 px-5 py-3.5 pr-12 text-sm text-[#091A32] outline-none transition-all duration-300 placeholder:text-[#091A32]/40 focus:border-[#0066FF]/55 focus:bg-white focus:shadow-[0_8px_28px_rgba(0,102,255,0.08)]"
              />
            </div>
          </div>
        </motion.div>

        {/* Location cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLocations.map((location, index) => {
            const isActive = activeLocation === location.city;

            return (
              <motion.article
                key={`${location.city}-${location.number}`}
                initial={reducedMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.65,
                  delay: reducedMotion ? 0 : Math.min(index * 0.06, 0.3),
                  ease: easeLuxury,
                }}
                whileHover={reducedMotion ? undefined : { y: -5 }}
                onMouseEnter={() => setActiveLocation(location.city)}
                onMouseLeave={() => setActiveLocation(null)}
                onFocus={() => setActiveLocation(location.city)}
                onBlur={() => setActiveLocation(null)}
                className="group relative"
              >
                <Link
                  href="/book"
                  aria-label={`Book a consultation in ${location.city}`}
                  className="relative flex min-h-[330px] flex-col overflow-hidden rounded-lg border border-[#091A32]/10 bg-gradient-to-br from-white via-white/90 to-[#E8F2FF]/75 p-7 shadow-[0_10px_40px_rgba(9,26,50,0.035)] outline-none transition-[border-color,box-shadow,background-color] duration-500 hover:border-[#1683FF]/50 hover:shadow-[0_24px_60px_rgba(0,102,255,0.11)] focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 md:p-8"
                >
                  {/* Hover lighting */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#1683FF]/15 blur-3xl transition-opacity duration-700 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Blue accent rail */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 top-0 w-[3px] origin-bottom bg-gradient-to-b from-[#0066FF] to-[#78B7FF] shadow-[0_0_20px_rgba(0,102,255,0.35)] transition-transform duration-500 ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-[#0066FF]">
                      {location.number}
                    </span>

                    <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[#263D59]/55">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_8px_rgba(22,131,255,0.5)]" />
                      {location.status || "Open"}
                    </span>
                  </div>

                  <div className="relative mt-auto pt-16">
                    <p className="mb-3 text-[8px] uppercase tracking-[0.24em] text-[#263D59]/50">
                      DRIPLABS DESTINATION
                    </p>

                    <h2 className="font-[var(--font-heading)] text-[clamp(2rem,3.3vw,3.1rem)] font-light leading-[1] tracking-[-0.055em] text-[#091A32]/90 transition-colors duration-300 group-hover:text-[#0066FF]">
                      {location.city}
                    </h2>

                    {location.state && (
                      <p className="mt-2 text-[10px] tracking-wide text-[#263D59]/55">
                        {location.state}
                      </p>
                    )}
                  </div>

                  <p className="relative mt-5 max-w-sm text-xs leading-6 text-[#263D59]/65">
                    {location.description}
                  </p>

                  <div className="relative mt-6 flex items-center justify-between border-t border-[#091A32]/10 pt-5">
                    <span className="text-[9px] uppercase tracking-[0.16em] text-[#263D59]/65 transition-colors group-hover:text-[#0066FF]">
                      Explore destination
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0066FF]/20 text-[#0066FF] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Empty search state */}
        {filteredLocations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 rounded-lg border border-[#091A32]/10 bg-white/65 px-6 py-16 text-center"
          >
            <MapPin className="mx-auto h-7 w-7 text-[#0066FF]/65" />

            <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-light">
              No destination found.
            </h2>

            <p className="mt-3 text-sm text-[#263D59]/65">
              Try searching for another city.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-6 rounded-full bg-[#0066FF] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#0053D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
            >
              View all destinations
            </button>
          </motion.div>
        )}

        {/* Three-step experience */}
        <motion.section
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
            ease: easeLuxury,
          }}
          className="mt-16 grid overflow-hidden rounded-lg border border-[#091A32]/10 bg-white/45 md:grid-cols-3"
        >
          <div className="border-b border-[#091A32]/10 p-7 transition-colors duration-300 hover:bg-white/80 md:border-b-0 md:border-r md:p-9">
            <Activity className="h-5 w-5 text-[#0066FF]" />
            <p className="mt-6 font-mono text-[9px] tracking-[0.2em] text-[#0066FF]">
              01
            </p>
            <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em]">
              Choose your destination.
            </h3>
            <p className="mt-3 text-xs leading-6 text-[#263D59]/65">
              Find the DRIPLABS experience closest to you.
            </p>
          </div>

          <div className="border-b border-[#091A32]/10 p-7 transition-colors duration-300 hover:bg-white/80 md:border-b-0 md:border-r md:p-9">
            <Stethoscope className="h-5 w-5 text-[#0066FF]" />
            <p className="mt-6 font-mono text-[9px] tracking-[0.2em] text-[#0066FF]">
              02
            </p>
            <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em]">
              Meet your physician.
            </h3>
            <p className="mt-3 text-xs leading-6 text-[#263D59]/65">
              Begin with a considered, physician-supervised consultation.
            </p>
          </div>

          <div className="p-7 transition-colors duration-300 hover:bg-white/80 md:p-9">
            <Building2 className="h-5 w-5 text-[#0066FF]" />
            <p className="mt-6 font-mono text-[9px] tracking-[0.2em] text-[#0066FF]">
              03
            </p>
            <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em]">
              Begin your journey.
            </h3>
            <p className="mt-3 text-xs leading-6 text-[#263D59]/65">
              Experience DRIPLABS through a personalised wellness pathway.
            </p>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reducedMotion ? 0 : 0.8,
            ease: easeLuxury,
          }}
          className="relative mt-20 overflow-hidden rounded-xl border border-[#0066FF]/15 bg-gradient-to-br from-white via-[#F4F8FF] to-[#E2EEFF] px-7 py-12 sm:px-10 md:py-16 lg:px-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full bg-[#1683FF]/15 blur-[110px]"
          />

          <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#0066FF]">
                BEGIN YOUR JOURNEY
              </p>

              <h2 className="mt-6 max-w-3xl font-[var(--font-heading)] text-[clamp(2.7rem,5.5vw,5.2rem)] font-light leading-[0.92] tracking-[-0.06em]">
                Your destination
                <br />
                <span className="text-[#091A32]/35">
                  is only the beginning.
                </span>
              </h2>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                href="/book"
                className="group inline-flex items-center gap-4 rounded-full border border-[#0066FF]/20 bg-white/80 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0053D6] shadow-[0_8px_25px_rgba(0,102,255,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0066FF]/50 hover:bg-[#0066FF] hover:text-white hover:shadow-[0_15px_35px_rgba(0,102,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
              >
                Begin your journey
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}