"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="relative overflow-hidden border-y border-[#0B1D35]/10 bg-[#F5F0E7] py-8 md:py-10">
      {/* Small editorial label */}
      <div className="mx-auto mb-6 flex max-w-[1600px] items-center gap-4 px-6 md:px-10 lg:px-14">
        <span className="h-px w-8 bg-[#C9A646]" />

        <p className="text-[8px] uppercase tracking-[0.3em] text-[#0B1D35]/45 md:text-[9px]">
          DRIPLABS / India
        </p>
      </div>

      {/* Marquee window */}
      <div className="relative overflow-hidden">
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F5F0E7] to-transparent md:w-32" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F5F0E7] to-transparent md:w-32" />

        <motion.div
          className="flex w-max items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{
            animationPlayState: "paused",
          }}
        >
          {marqueeItems.map((location, index) => (
            <div
              key={`${location}-${index}`}
              className="flex items-center"
            >
              <span className="px-5 font-serif text-[clamp(2rem,4vw,4.5rem)] font-light leading-none tracking-[-0.04em] text-[#0B1D35] whitespace-nowrap md:px-8"
              >
                {location}
              </span>

              <span className="flex h-2 w-2 shrink-0 rounded-full bg-[#C9A646]" />

              <span className="px-5 text-[8px] uppercase tracking-[0.28em] text-[#0B1D35]/25 md:px-8">
                DRIPLABS
              </span>

              <span className="h-px w-12 bg-[#0B1D35]/10" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Supporting line */}
      <div className="mx-auto mt-6 flex max-w-[1600px] justify-end px-6 md:px-10 lg:px-14">
        <p className="text-[8px] uppercase tracking-[0.22em] text-[#0B1D35]/30">
          Physician-led wellness experiences across India
        </p>
      </div>
    </section>
  );
}
