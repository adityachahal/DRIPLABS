"use client";

import { motion } from "framer-motion";

const locations = [
  {
    number: "01",
    city: "Delhi NCR",
    description: "Discover the DRIPLABS experience in Delhi NCR.",
  },
  {
    number: "02",
    city: "Mumbai",
    description: "Premium IV therapy in the heart of Mumbai.",
  },
  {
    number: "03",
    city: "Bengaluru",
    description: "A considered wellness experience in Bengaluru.",
  },
  {
    number: "04",
    city: "Hyderabad",
    description: "Visit DRIPLABS for personalised IV therapy in Hyderabad.",
  },
  {
    number: "05",
    city: "Pune",
    description: "Experience DRIPLABS in Pune.",
  },
  {
    number: "06",
    city: "Chandigarh",
    description: "Your local DRIPLABS wellness destination in Chandigarh.",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="bg-[#f4f1eb] text-[#171714]"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#77736a]">
              Locations
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9 }}
              className="text-[clamp(4rem,8vw,9rem)] font-light leading-[0.8] tracking-[-0.07em]"
            >
              Find your
              <br />
              nearest drip.
            </motion.h2>
          </div>
        </div>

        <div className="mt-20 border-t border-black/15">
          {locations.map((location, index) => (
            <motion.a
              key={location.city}
              href="#book"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              className="group grid grid-cols-12 border-b border-black/15 py-7 transition-opacity hover:opacity-60"
            >
              <span className="col-span-2 text-[9px] tracking-[0.22em] text-[#99958c] md:col-span-1">
                {location.number}
              </span>

              <span className="col-span-6 text-2xl font-light tracking-[-0.03em] md:col-span-5 md:text-4xl">
                {location.city}
              </span>

              <span className="col-span-3 hidden max-w-sm text-sm leading-6 text-[#77736a] md:block">
                {location.description}
              </span>

              <span className="col-span-4 text-right text-xl transition-transform duration-300 group-hover:translate-x-2 md:col-span-3">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}