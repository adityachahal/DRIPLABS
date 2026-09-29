"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const locations = [
  "Delhi NCR",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Ahmedabad",
  "Kolkata",
  "Chandigarh",
  "Jaipur",
  "Kochi",
];

const marqueeItems = [...locations, ...locations];

export default function LocationMarquee() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-[#020812]/10 bg-[#F7FAFF] text-[#020812]">
      {/* =========================================================
          HEADER
      ========================================================= */}

      <div className="relative z-10 mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-2.5">
          <span className="h-px w-6 bg-[#0066FF]" />

          <p className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#020812]/50 md:text-[8px]">
            DRIPLABS / India
          </p>
        </div>

        <Link
          href="/locations"
          className="group hidden items-center gap-2 text-[7px] font-medium uppercase tracking-[0.2em] text-[#020812]/45 transition-colors duration-300 hover:text-[#0066FF] sm:flex"
        >
          <span>View all locations</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* =========================================================
          MARQUEE
      ========================================================= */}

      <div className="relative overflow-hidden border-y border-[#020812]/[0.08] py-4 md:py-5">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#F7FAFF] via-[#F7FAFF]/90 to-transparent md:w-28" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#F7FAFF] via-[#F7FAFF]/90 to-transparent md:w-28" />

        {/* Electric sweep */}
        <motion.div
          aria-hidden="true"
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 2,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-0 top-0 z-30 h-px w-1/3 bg-gradient-to-r from-transparent via-[#1683FF]/70 to-transparent"
        />

        {/* Moving content */}
        <motion.div
          className="flex w-max items-center"
          animate={
            reducedMotion
              ? undefined
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 34,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        >
          {marqueeItems.map((location, index) => (
            <div
              key={`${location}-${index}`}
              className="group flex items-center"
            >
              {/* Location */}
              <span
                className="
                  whitespace-nowrap
                  px-4
                  font-[var(--font-heading)]
                  text-[clamp(1.5rem,2.7vw,2.8rem)]
                  font-light
                  leading-none
                  tracking-[-0.06em]
                  text-[#020812]
                  transition-all
                  duration-500
                  group-hover:text-[#0066FF]
                  md:px-6
                "
              >
                {location}
              </span>

              {/* Electric node */}
              <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                <span
                  className="
                    absolute
                    h-2.5
                    w-2.5
                    rounded-full
                    border
                    border-[#0066FF]/30
                    transition-transform
                    duration-500
                    group-hover:scale-[1.6]
                  "
                />

                <span className="h-1 w-1 rounded-full bg-[#0066FF]" />
              </span>

              {/* Divider */}
              <span className="mx-4 h-px w-8 bg-[#020812]/10 md:mx-6 md:w-12" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <div className="relative z-10 flex items-center justify-between px-5 py-3 sm:px-8 md:px-12 lg:px-16">
        <span className="font-mono text-[6px] uppercase tracking-[0.18em] text-[#020812]/25">
          11 locations
        </span>

        <p className="text-right text-[6px] uppercase tracking-[0.2em] text-[#020812]/25">
          Across India
        </p>
      </div>
    </section>
  );
}