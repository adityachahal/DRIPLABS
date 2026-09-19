"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Location = {
  id?: string;
  name?: string;
  city?: string;
  state?: string;
  status?: string;
  address?: string;
};

const fallbackLocations = [
  {
    number: "01",
    city: "Delhi NCR",
    description: "Discover the DRIPLABS experience in Delhi NCR.",
  },
  {
    number: "02",
    city: "Mumbai",
    description: "Discover the DRIPLABS experience in Mumbai.",
  },
  {
    number: "03",
    city: "Bengaluru",
    description: "Discover the DRIPLABS experience in Bengaluru.",
  },
  {
    number: "04",
    city: "Hyderabad",
    description: "Discover the DRIPLABS experience in Hyderabad.",
  },
  {
    number: "05",
    city: "Pune",
    description: "Discover the DRIPLABS experience in Pune.",
  },
  {
    number: "06",
    city: "Chandigarh",
    description: "Discover the DRIPLABS experience in Chandigarh.",
  },
];

const easeLuxury = [0.22, 1, 0.36, 1] as const;

export default function Locations() {
  const reducedMotion = useReducedMotion();
  const [locations, setLocations] = useState(fallbackLocations);

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
          payload?.locations,
        )
          ? payload.locations
          : Array.isArray(payload?.data)
            ? payload.data
            : [];

        if (!mounted || incoming.length === 0) return;

        const mapped = incoming
          .filter(
            (location) =>
              location &&
              (location.city || location.name),
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
          }));

        if (mapped.length > 0) {
          setLocations(mapped);
        }
      } catch {
        // Keep the grounded fallback locations.
      }
    }

    loadLocations();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-[#0A0A0B] text-[#F2F0EA]"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Central atmospheric glow */}
        <div className="absolute left-[62%] top-[8%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#C9A646]/[0.035] blur-[150px]" />

        {/* Secondary cool glow */}
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#9DB9B3]/[0.025] blur-[140px]" />

        {/* Fine technical grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-10% 0px",
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.9,
              ease: easeLuxury,
            }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-[#C9A646] shadow-[0_0_14px_rgba(201,166,70,0.65)]" />

              <p className="text-[8px] uppercase tracking-[0.28em] text-white/40 md:text-[9px]">
                Locations
              </p>
            </div>

            <div className="mt-7 h-px w-16 bg-gradient-to-r from-[#C9A646] to-transparent" />

            <p className="mt-7 max-w-[220px] text-xs leading-6 text-white/35">
              Explore current DRIPLABS destinations and begin
              your consultation journey.
            </p>

            {/* Technical marker */}
            <div className="mt-12 hidden items-center gap-3 lg:flex">
              <span className="font-mono text-[8px] tracking-[0.18em] text-white/20">
                IN / NETWORK
              </span>

              <span className="h-px w-8 bg-white/10" />
            </div>
          </motion.div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.div
              initial={
                reducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              whileInView={{ opacity: 1 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
              }}
              className="mb-7 flex items-center justify-between"
            >
              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
                DRIPLABS / INDIA
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#C9A646]/60">
                {String(locations.length).padStart(
                  2,
                  "0",
                )}{" "}
                DESTINATIONS
              </span>
            </motion.div>

            <motion.h2
              initial={
                reducedMotion
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 28,
                      filter: "blur(7px)",
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                margin: "-10% 0px",
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 1,
                ease: easeLuxury,
              }}
              className="max-w-[1050px] font-[var(--font-heading)] text-[clamp(3.7rem,7.5vw,8.2rem)] font-light leading-[0.82] tracking-[-0.07em] text-[#F2F0EA]"
            >
              Find your
              <br />
              nearest{" "}
              <span className="text-white/38">
                DRIPLABS.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* =======================================================
            LOCATION NETWORK
        ======================================================= */}

        <div className="mt-20 border-t border-white/[0.09] md:mt-28">
          {/* Table heading */}
          <div className="hidden grid-cols-12 border-b border-white/[0.06] px-4 py-4 md:grid md:px-6">
            <span className="col-span-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              No.
            </span>

            <span className="col-span-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              Destination
            </span>

            <span className="col-span-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              Experience
            </span>

            <span className="col-span-1 text-right font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              →
            </span>
          </div>

          {locations.map((location, index) => (
            <motion.a
              key={`${location.city}-${location.number}`}
              href="/book"
              initial={
                reducedMotion
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-8% 0px",
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.75,
                delay: reducedMotion
                  ? 0
                  : Math.min(index * 0.055, 0.3),
                ease: easeLuxury,
              }}
              className="group relative block overflow-hidden border-b border-white/[0.09]"
            >
              {/* =================================================
                  HOVER ATMOSPHERE
              ================================================= */}

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#C9A646]/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              {/* Gold active rail */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#C9A646] shadow-[0_0_18px_rgba(201,166,70,0.55)] transition-transform duration-700 ease-out group-hover:scale-y-100"
              />

              <div className="relative grid min-h-[112px] grid-cols-12 items-center gap-3 px-4 py-6 md:min-h-[136px] md:px-6 md:py-8">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-[8px] tracking-[0.22em] text-[#C9A646] transition-opacity duration-500 group-hover:opacity-100 md:opacity-55">
                    {location.number}
                  </span>
                </div>

                {/* City */}
                <div className="col-span-7 md:col-span-5">
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-2 w-2 items-center justify-center">
                      <span className="absolute h-2 w-2 rounded-full border border-[#C9A646]/30 transition-all duration-500 group-hover:h-3 group-hover:w-3 group-hover:border-[#C9A646]/60" />

                      <span className="h-[3px] w-[3px] rounded-full bg-[#C9A646] opacity-50 shadow-[0_0_8px_rgba(201,166,70,0.5)] transition-opacity duration-500 group-hover:opacity-100" />
                    </span>

                    <span className="font-[var(--font-heading)] text-[clamp(1.8rem,3.2vw,3.5rem)] font-light leading-none tracking-[-0.05em] text-white/72 transition-all duration-600 group-hover:translate-x-1 group-hover:text-[#F2F0EA]">
                      {location.city}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="col-span-3 hidden md:col-span-5 md:block">
                  <p className="max-w-sm text-xs leading-6 text-white/28 transition-colors duration-500 group-hover:text-white/45">
                    {location.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="col-span-3 flex justify-end md:col-span-1">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] text-sm text-white/25 transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#C9A646]/45 group-hover:bg-[#C9A646]/[0.07] group-hover:text-[#C9A646]">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* =======================================================
            BOTTOM INFORMATION RAIL
        ======================================================= */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 15 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.7,
            ease: easeLuxury,
          }}
          className="mt-7 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-[4px] w-[4px] rounded-full bg-[#C9A646]/70" />

            <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              Physician-supervised wellness
            </p>
          </div>

          <a
            href="/book"
            className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.2em] text-[#C9A646]"
          >
            <span className="relative">
              Check availability
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A646] transition-all duration-500 group-hover:w-full" />
            </span>

            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}