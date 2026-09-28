"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

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
    description:
      "Discover the DRIPLABS experience in Delhi NCR.",
    state: "Delhi NCR",
    status: "Open",
  },
  {
    number: "02",
    city: "Mumbai",
    description:
      "Discover the DRIPLABS experience in Mumbai.",
    state: "Maharashtra",
    status: "Open",
  },
  {
    number: "03",
    city: "Bengaluru",
    description:
      "Discover the DRIPLABS experience in Bengaluru.",
    state: "Karnataka",
    status: "Open",
  },
  {
    number: "04",
    city: "Hyderabad",
    description:
      "Discover the DRIPLABS experience in Hyderabad.",
    state: "Telangana",
    status: "Open",
  },
  {
    number: "05",
    city: "Pune",
    description:
      "Discover the DRIPLABS experience in Pune.",
    state: "Maharashtra",
    status: "Open",
  },
  {
    number: "06",
    city: "Chandigarh",
    description:
      "Discover the DRIPLABS experience in Chandigarh.",
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

  const [activeLocation, setActiveLocation] =
    useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadLocations() {
      try {
        const response = await fetch("/api/locations", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const payload = await response.json();

        const incoming: Location[] = Array.isArray(
          payload?.locations
        )
          ? payload.locations
          : Array.isArray(payload?.data)
            ? payload.data
            : [];

        if (!mounted || incoming.length === 0) return;

        const mapped: DisplayLocation[] = incoming
          .filter(
            (location) =>
              location &&
              (location.city || location.name)
          )
          .map((location, index) => ({
            number: String(index + 1).padStart(2, "0"),
            city:
              location.city ||
              location.name ||
              "Location",
            description:
              location.address ||
              location.state ||
              "Discover the DRIPLABS experience.",
            state: location.state,
            status: location.status || "Open",
            address: location.address,
          }));

        if (mapped.length > 0) {
          setLocations(mapped);
        }
      } catch {
        // Keep fallback locations.
      }
    }

    loadLocations();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredLocations = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return locations;

    return locations.filter((location) =>
      `${location.city} ${location.state} ${location.address}`
        .toLowerCase()
        .includes(query)
    );
  }, [locations, search]);

  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-[#020812] text-[#F7FAFF]"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main electric glow */}
        <div className="absolute left-[62%] top-[5%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#0066FF]/[0.09] blur-[170px]" />

        {/* Secondary blue glow */}
        <div className="absolute bottom-[15%] left-[-15%] h-[500px] w-[500px] rounded-full bg-[#1683FF]/[0.055] blur-[160px]" />

        {/* Vertical atmospheric light */}
        <div className="absolute left-1/2 top-0 h-[1000px] w-px -translate-x-1/2 bg-gradient-to-b from-[#1683FF]/20 via-[#1683FF]/[0.03] to-transparent" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "110px 110px",
          }}
        />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,rgba(2,8,18,0.25)_55%,rgba(2,8,18,0.92)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1540px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">

        {/* =========================================================
            TOP LABEL
        ========================================================= */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 18 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.8,
            ease: easeLuxury,
          }}
          className="flex items-center justify-between border-b border-white/[0.08] pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#1683FF]/30" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_14px_rgba(22,131,255,0.9)]" />
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/45">
              DRIPLABS / INDIA
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#4D9BFF]/70">
            {String(locations.length).padStart(2, "0")} DESTINATIONS
          </span>
        </motion.div>

        {/* =========================================================
            HERO
        ========================================================= */}

        <div className="grid gap-16 pt-14 lg:grid-cols-12 lg:gap-12 lg:pt-20">

          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.9,
              ease: easeLuxury,
            }}
            className="lg:col-span-7"
          >
            <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-[#4D9BFF]">
              FIND YOUR DRIPLABS
            </p>

            <h1 className="max-w-5xl font-[var(--font-heading)] text-[clamp(4rem,8.5vw,9rem)] font-light leading-[0.84] tracking-[-0.07em]">
              Wellness,
              <br />
              <span className="text-white/35">
                wherever you are.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/48 md:text-base md:leading-8">
              Explore the DRIPLABS network and find a destination
              designed around physician-supervised wellness,
              precision protocols and a considered experience.
            </p>
          </motion.div>

          {/* =====================================================
              NETWORK GRAPHIC
          ===================================================== */}

          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.94 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reducedMotion ? 0.01 : 1.1,
              ease: easeLuxury,
            }}
            className="relative flex min-h-[390px] items-center justify-center lg:col-span-5"
          >
            <div className="absolute h-[330px] w-[330px] rounded-full border border-white/[0.07]" />

            <div className="absolute h-[240px] w-[240px] rounded-full border border-[#1683FF]/10" />

            <div className="absolute h-[150px] w-[150px] rounded-full bg-[#0066FF]/[0.07] blur-3xl" />

            {/* Network SVG */}
            <svg
              viewBox="0 0 420 420"
              className="relative h-[330px] w-[330px] overflow-visible"
              aria-hidden="true"
            >
              {/* connections */}

              <path
                d="M115 95 L195 145 L275 105 L310 190 L255 275 L180 250 L115 305 L85 210 Z"
                fill="none"
                stroke="rgba(77,155,255,0.18)"
                strokeWidth="1"
              />

              <path
                d="M195 145 L180 250 L310 190"
                fill="none"
                stroke="rgba(77,155,255,0.12)"
                strokeWidth="1"
              />

              {/* nodes */}

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
                    r="9"
                    fill="rgba(0,102,255,0.08)"
                  />

                  <circle
                    cx={cx}
                    cy={cy}
                    r="3"
                    fill="#1683FF"
                  />

                  <circle
                    cx={cx}
                    cy={cy}
                    r="1.5"
                    fill="#F7FAFF"
                  />
                </g>
              ))}

              {/* centre */}

              <circle
                cx="205"
                cy="205"
                r="24"
                fill="rgba(0,102,255,0.06)"
                stroke="rgba(77,155,255,0.22)"
              />

              <circle
                cx="205"
                cy="205"
                r="5"
                fill="#4D9BFF"
              />
            </svg>

            <div className="absolute bottom-2 right-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              NETWORK / 01
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            SEARCH + META
        ========================================================= */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.8,
            ease: easeLuxury,
          }}
          className="mt-20 border-y border-white/[0.08] py-5 md:mt-28"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                EXPLORE DESTINATIONS
              </p>

              <p className="mt-2 text-xs text-white/35">
                {filteredLocations.length} destination
                {filteredLocations.length === 1 ? "" : "s"} available
              </p>
            </div>

            <div className="relative w-full md:max-w-[340px]">
              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search a city..."
                aria-label="Search locations"
                className="w-full border-b border-white/[0.14] bg-transparent px-0 py-3 pr-8 text-sm text-white outline-none placeholder:text-white/25 transition-colors duration-300 focus:border-[#1683FF]"
              />

              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none absolute right-0 top-3 h-4 w-4 text-white/30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16l4 4" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            LOCATION CARDS
        ========================================================= */}

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {filteredLocations.map((location, index) => {
            const isActive =
              activeLocation === location.city;

            return (
              <motion.article
                key={`${location.city}-${location.number}`}
                initial={
                  reducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-8% 0px",
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.7,
                  delay: reducedMotion
                    ? 0
                    : Math.min(index * 0.07, 0.35),
                  ease: easeLuxury,
                }}
                onMouseEnter={() =>
                  setActiveLocation(location.city)
                }
                onMouseLeave={() =>
                  setActiveLocation(null)
                }
                className="group relative"
              >
                <Link
                  href="/book"
                  className="relative block min-h-[330px] overflow-hidden border border-white/[0.09] bg-[#06152B]/55 p-7 transition-all duration-700 hover:-translate-y-1 hover:border-[#1683FF]/35 hover:bg-[#06152B]/85 md:p-8"
                >
                  {/* top glow */}

                  <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0066FF]/10 blur-3xl transition-opacity duration-700 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  {/* left electric rail */}

                  <span
                    className={`absolute bottom-0 left-0 top-0 w-[2px] origin-bottom bg-[#1683FF] shadow-[0_0_20px_rgba(22,131,255,0.65)] transition-transform duration-700 ${
                      isActive
                        ? "scale-y-100"
                        : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />

                  {/* card number */}

                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-[#4D9BFF]/65">
                      {location.number}
                    </span>

                    <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_8px_rgba(22,131,255,0.8)]" />
                      {location.status || "Open"}
                    </span>
                  </div>

                  {/* city */}

                  <div className="relative mt-20">
                    <p className="mb-3 text-[8px] uppercase tracking-[0.25em] text-white/25">
                      DRIPLABS DESTINATION
                    </p>

                    <h2 className="font-[var(--font-heading)] text-[clamp(2.3rem,4vw,3.8rem)] font-light leading-none tracking-[-0.055em] text-white/80 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white">
                      {location.city}
                    </h2>
                  </div>

                  {/* description */}

                  <div className="absolute bottom-8 left-7 right-7 md:left-8 md:right-8">
                    <p className="max-w-sm text-xs leading-6 text-white/35 transition-colors duration-500 group-hover:text-white/55">
                      {location.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5">
                      <span className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                        Explore
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] text-sm text-white/35 transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#1683FF]/50 group-hover:bg-[#0066FF]/10 group-hover:text-[#4D9BFF]">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================================
            EMPTY SEARCH STATE
        ========================================================= */}

        {filteredLocations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-white/[0.08] px-6 py-20 text-center"
          >
            <p className="font-[var(--font-heading)] text-3xl font-light text-white/70">
              No destination found.
            </p>

            <p className="mt-3 text-sm text-white/35">
              Try searching for another city.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-7 border border-[#1683FF]/30 px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-[#4D9BFF] transition-colors hover:bg-[#0066FF]/10"
            >
              View all destinations
            </button>
          </motion.div>
        )}

        {/* =========================================================
            BOTTOM EXPERIENCE STRIP
        ========================================================= */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.8,
            ease: easeLuxury,
          }}
          className="mt-16 grid border border-white/[0.08] md:grid-cols-3"
        >
          <div className="border-b border-white/[0.08] p-7 md:border-b-0 md:border-r md:p-9">
            <span className="font-mono text-[8px] tracking-[0.2em] text-[#4D9BFF]">
              01
            </span>

            <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em]">
              Choose your destination.
            </h3>

            <p className="mt-3 text-xs leading-6 text-white/35">
              Find the DRIPLABS experience closest to you.
            </p>
          </div>

          <div className="border-b border-white/[0.08] p-7 md:border-b-0 md:border-r md:p-9">
            <span className="font-mono text-[8px] tracking-[0.2em] text-[#4D9BFF]">
              02
            </span>

            <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em]">
              Meet your physician.
            </h3>

            <p className="mt-3 text-xs leading-6 text-white/35">
              Begin with a considered, physician-supervised
              consultation.
            </p>
          </div>

          <div className="p-7 md:p-9">
            <span className="font-mono text-[8px] tracking-[0.2em] text-[#4D9BFF]">
              03
            </span>

            <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em]">
              Begin your journey.
            </h3>

            <p className="mt-3 text-xs leading-6 text-white/35">
              Experience DRIPLABS through a personalised wellness
              pathway.
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.9,
            ease: easeLuxury,
          }}
          className="relative mt-24 overflow-hidden border border-[#1683FF]/20 bg-[#06152B]/45 px-7 py-14 md:px-12 md:py-20"
        >
          <div className="absolute right-[-10%] top-[-60%] h-[500px] w-[500px] rounded-full bg-[#0066FF]/10 blur-[120px]" />

          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                BEGIN YOUR JOURNEY
              </p>

              <h2 className="mt-7 max-w-3xl font-[var(--font-heading)] text-[clamp(3rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.06em]">
                Your destination
                <br />
                <span className="text-white/35">
                  is only the beginning.
                </span>
              </h2>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                href="/book"
                className="group inline-flex items-center gap-5 border border-[#1683FF]/45 bg-[#0066FF]/10 px-7 py-4 text-[9px] uppercase tracking-[0.22em] text-[#8CCBFF] transition-all duration-500 hover:bg-[#0066FF]/20 hover:shadow-[0_0_40px_rgba(0,102,255,0.14)]"
              >
                <span>Begin your journey</span>

                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}