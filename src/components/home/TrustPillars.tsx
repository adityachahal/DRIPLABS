"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Physician-Led",
    text: "Every protocol begins with a physician assessment. Never a menu you self-select.",
  },
  {
    number: "02",
    title: "Pharma-Grade",
    text: "IP/BP/USP pharmacopoeial standards, manufactured under Indian pharmaceutical licenses.",
  },
  {
    number: "03",
    title: "Traceable",
    text: "Batch number, expiry date and Certificate of Analysis on every kit.",
  },
  {
    number: "04",
    title: "Made in India",
    text: "Manufactured, lyophilised and quality-tested in India.",
  },
];

export default function TrustPillars() {
  return (
    <section
      id="about"
      className="bg-[#F7F4EC] py-24 text-[#0B1B33] md:py-36"
    >
      <div className="mx-auto max-w-[1680px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
              The DripLabs Standard
            </p>

            <h2 className="mt-7 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.88] tracking-[-0.055em]">
              Trust,
              <br />
              made visible.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#5A6B82]">
              A documented wellness system where physician supervision,
              pharmacopoeial standards and batch-level traceability are part
              of the experience.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid border-t border-[#0B1B33]/10 md:grid-cols-2">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group border-b border-[#0B1B33]/10 py-9 md:min-h-[250px] md:border-r md:px-8 md:py-10 last:border-r-0"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#B8901F]">
                      {pillar.number}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227] opacity-60 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-12 font-[var(--font-heading)] text-3xl font-light tracking-[-0.04em]">
                    {pillar.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-[#5A6B82]">
                    {pillar.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
