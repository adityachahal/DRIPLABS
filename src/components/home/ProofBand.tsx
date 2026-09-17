"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "19",
    label: "Physician-directed IV protocols",
  },
  {
    value: "100%",
    label: "Physician assessment required",
  },
  {
    value: "24",
    label: "Pharmacopoeial-grade branded injectables",
  },
  {
    value: "India",
    label: "Manufactured, lyophilised and quality-tested",
  },
];

export default function ProofBand() {
  return (
    <section className="relative overflow-hidden bg-[#060F1F] py-16 text-[#F7F4EC] md:py-24">
      <div className="mx-auto max-w-[1680px] px-5 md:px-10 lg:px-14">
        <div className="grid border-y border-white/10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:py-12 last:border-0"
            >
              <div className="font-[var(--font-heading)] text-[clamp(3.5rem,6vw,6.5rem)] font-light leading-none tracking-[-0.06em] text-[#C9A227]">
                {stat.value}
              </div>

              <p className="mt-5 max-w-[230px] text-[10px] uppercase leading-5 tracking-[0.18em] text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
