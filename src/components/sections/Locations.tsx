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

        const incoming: Location[] = Array.isArray(payload?.locations)
          ? payload.locations
          : Array.isArray(payload?.data)
            ? payload.data
            : [];

        if (!mounted || incoming.length === 0) return;

        const mapped = incoming
          .filter((location) => location && (location.city || location.name))
          .map((location, index) => ({
            number: String(index + 1).padStart(2, "0"),
            city: location.city || location.name || "Location",
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
      className="relative overflow-hidden bg-[#F7F4EC] text-[#0B1B33]"
    >
      <div className="mx-auto max-w-[1680px] px-5 py-24 md:px-10 md:py-36 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="text-[8px] uppercase tracking-[0.28em] text-[#B8901F] md:text-[9px]">
              Locations
            </p>

            <p className="mt-8 max-w-[220px] text-xs leading-6 text-[#5A6B82]">
              Explore current DRIPLABS destinations and begin your consultation
              journey.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.h2
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.065em]"
            >
              Find your
              <br />
              nearest DRIPLABS.
            </motion.h2>
          </div>
        </div>

        <div className="mt-16 border-t border-[#0B1B33]/10 md:mt-24">
          {locations.map((location, index) => (
            <motion.a
              key={`${location.city}-${location.number}`}
              href="/book"
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.7,
                delay: reducedMotion ? 0 : Math.min(index * 0.045, 0.25),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid grid-cols-12 items-center gap-3 border-b border-[#0B1B33]/10 py-7 md:py-8"
            >
              <span className="col-span-2 text-[8px] tracking-[0.22em] text-[#B8901F] md:col-span-1">
                {location.number}
              </span>

              <span className="col-span-7 font-[var(--font-heading)] text-[clamp(1.8rem,3.1vw,3.4rem)] font-light leading-none tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-1 md:col-span-5">
                {location.city}
              </span>

              <span className="col-span-3 hidden max-w-sm text-xs leading-6 text-[#5A6B82] md:block">
                {location.description}
              </span>

              <span className="col-span-3 text-right text-lg text-[#B8901F] transition-transform duration-500 group-hover:translate-x-1 md:col-span-3">
                →
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between">
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#77736A]">
            Physician-supervised wellness
          </p>

          <a
            href="/book"
            className="text-[8px] uppercase tracking-[0.2em] text-[#B8901F]"
          >
            Check availability →
          </a>
        </div>
      </div>
    </section>
  );
}
