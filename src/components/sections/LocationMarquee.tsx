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
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[10%] top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#C9A646]/[0.045] blur-[80px]" />

        <div className="absolute right-[8%] top-1/2 h-[160px] w-[160px] -translate-y-1/2 rounded-full bg-[#71829A]/[0.04] blur-[70px]" />
      </div>

      {/* Top metadata */}
      <div className="relative z-10 mx-auto flex max-w-[1480px] items-center justify-between px-5 pb-5 pt-6 sm:px-8 md:px-12 md:pb-6 md:pt-7 lg:px-16">
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
          className="flex items-center gap-2.5"
        >
          <span className="h-px w-6 bg-[#C9A646]" />

          <p className="text-[7px] uppercase tracking-[0.28em] text-[#0B1D35]/50 md:text-[8px]">
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
          className="hidden font-mono text-[6px] uppercase tracking-[0.2em] text-[#0B1D35]/25 md:block"
        >
          011 — 011
        </motion.span>
      </div>

      {/* Marquee */}
      <div className="relative z-10 overflow-hidden border-y border-[#0B1D35]/10 py-5 md:py-7">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#F5F0E7] via-[#F5F0E7]/90 to-transparent md:w-32" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#F5F0E7] via-[#F5F0E7]/90 to-transparent md:w-32" />

        {/* Gold sweep */}
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
              {/* Location */}
              <span
                className="
                  whitespace-nowrap
                  px-4
                  font-[var(--font-heading)]
                  text-[clamp(1.6rem,3vw,3.2rem)]
                  font-light
                  leading-none
                  tracking-[-0.06em]
                  text-[#0B1D35]
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:-translate-y-1
                  md:px-7
                "
              >
                {location}
              </span>

              {/* Gold node */}
              <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                <span
                  className="
                    absolute
                    h-2.5
                    w-2.5
                    rounded-full
                    border
                    border-[#C9A646]/30
                    transition-transform
                    duration-700
                    group-hover:scale-[1.7]
                  "
                />

                <span className="h-1 w-1 rounded-full bg-[#C9A646]" />
              </span>

              {/* DRIPLABS label */}
              <span className="px-4 font-mono text-[6px] uppercase tracking-[0.28em] text-[#0B1D35]/25 md:px-7">
                DRIPLABS
              </span>

              {/* Divider */}
              <span className="h-px w-10 bg-[#0B1D35]/10 md:w-16" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom metadata */}
      <div className="relative z-10 mx-auto flex max-w-[1480px] items-center justify-between px-5 py-5 sm:px-8 md:px-12 md:py-7 lg:px-16">
        <div className="flex items-center gap-2.5">
          <span className="h-px w-4 bg-[#C9A646]/50" />

          <span className="font-mono text-[6px] uppercase tracking-[0.18em] text-[#0B1D35]/25">
            11 locations
          </span>
        </div>

        <p className="text-right text-[7px] uppercase tracking-[0.2em] text-[#0B1D35]/30">
          Physician-led wellness experiences across India
        </p>
      </div>
    </section>
  );
}