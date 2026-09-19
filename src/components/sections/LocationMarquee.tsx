"use client";

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
    <section className="relative overflow-hidden border-y border-[#0B1D35]/10 bg-[#F5F0E7] text-[#0B1D35]">
      {/* ======================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[10%] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#C9A646]/[0.045] blur-[100px]" />

        <div className="absolute right-[8%] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-[#71829A]/[0.04] blur-[90px]" />
      </div>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="relative z-10 mx-auto flex max-w-[1480px] items-center justify-between px-5 pb-7 pt-9 sm:px-8 md:px-12 md:pb-8 md:pt-11 lg:px-16">
        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -16 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#C9A646]" />

          <p className="text-[8px] uppercase tracking-[0.3em] text-[#0B1D35]/50 md:text-[9px]">
            DRIPLABS / India
          </p>
        </motion.div>

        <motion.span
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.7,
            delay: reducedMotion ? 0 : 0.15,
          }}
          className="hidden font-mono text-[7px] uppercase tracking-[0.22em] text-[#0B1D35]/25 md:block"
        >
          011 — 011
        </motion.span>
      </div>

      {/* ======================================================
          MARQUEE
      ====================================================== */}

      <div className="relative z-10 overflow-hidden border-y border-[#0B1D35]/10 py-8 md:py-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#F5F0E7] via-[#F5F0E7]/90 to-transparent md:w-40" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#F5F0E7] via-[#F5F0E7]/90 to-transparent md:w-40" />

        {/* moving hairline */}
        <motion.div
          aria-hidden="true"
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 2.2,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-0 top-0 z-30 h-px w-1/3 bg-gradient-to-r from-transparent via-[#C9A646]/70 to-transparent"
        />

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
          whileHover={
            reducedMotion
              ? undefined
              : {
                  scale: 0.995,
                }
          }
        >
          {marqueeItems.map((location, index) => (
            <div
              key={`${location}-${index}`}
              className="group flex items-center"
            >
              {/* location */}
              <span className="whitespace-nowrap px-5 font-[var(--font-heading)] text-[clamp(2.6rem,5vw,5.5rem)] font-light leading-none tracking-[-0.065em] text-[#0B1D35] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 md:px-9">
                {location}
              </span>

              {/* node */}
              <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
                <span className="absolute h-3 w-3 rounded-full border border-[#C9A646]/30 transition-transform duration-700 group-hover:scale-[1.7]" />

                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A646]" />
              </span>

              {/* brand marker */}
              <span className="px-5 font-mono text-[7px] uppercase tracking-[0.3em] text-[#0B1D35]/25 md:px-9">
                DRIPLABS
              </span>

              <span className="h-px w-14 bg-[#0B1D35]/10 md:w-20" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ======================================================
          FOOTER LINE
      ====================================================== */}

      <div className="relative z-10 mx-auto flex max-w-[1480px] items-center justify-between px-5 py-7 sm:px-8 md:px-12 md:py-9 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-5 bg-[#C9A646]/50" />

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#0B1D35]/25">
            11 locations
          </span>
        </div>

        <p className="text-right text-[8px] uppercase tracking-[0.22em] text-[#0B1D35]/30">
          Physician-led wellness experiences across India
        </p>
      </div>
    </section>
  );
}