"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Cellular Energy",
    text: "NAD+ participates in cellular energy metabolism and mitochondrial pathways.",
  },
  {
    number: "02",
    title: "Cellular Pathways",
    text: "NAD+ is involved in important cellular processes including pathways associated with DNA-damage response.",
  },
  {
    number: "03",
    title: "Longevity Research",
    text: "NAD+ remains an active area of research in cellular energy, metabolism and healthy-ageing science.",
  },
];

const experience = [
  "Physician consultation & assessment",
  "Personalised protocol recommendation",
  "Physician-supervised IV session",
  "Structured follow-up",
];

export default function NADExperience() {
  return (
    <section
      id="nad"
      className="relative overflow-hidden bg-[#071525] text-[#F5F0E7]"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#C9A646]/[0.06] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-[#31547D]/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40 lg:px-14">
        {/* Header */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="driplabs-label text-white/35">
              The NAD+ experience
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1050px] text-[clamp(4.2rem,8vw,9rem)] font-light leading-[0.78] tracking-[-0.075em]"
            >
              NAD+
              <br />
              deserves
              <br />
              its own story.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-10 max-w-2xl text-sm leading-7 text-white/50 md:text-base"
            >
              Explore the science, experience and physician-led approach
              behind the DRIPLABS NAD+ programme.
            </motion.p>
          </div>
        </div>

        {/* Science visual */}
        <div className="mt-24 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Orb */}
          <div className="relative min-h-[520px] overflow-hidden border border-white/10 bg-[#0B1D35] lg:col-span-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,166,70,0.18),transparent_24%,rgba(11,29,53,0)_50%)]" />

            {/* Large abstract NAD visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 md:h-[340px] md:w-[340px]"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-[#C9A646]/35"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[16%] rounded-full border border-white/20"
              />

              <div className="absolute inset-[28%] rounded-full bg-[radial-gradient(circle,rgba(201,166,70,0.7),rgba(201,166,70,0.08)_45%,transparent_72%)] shadow-[0_0_100px_rgba(201,166,70,0.25)]" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-5xl font-light tracking-[-0.05em] md:text-7xl">
                  NAD+
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.28em] text-white/40">
                  Cellular coenzyme
                </p>
              </div>
            </motion.div>

            {/* Metadata */}
            <div className="absolute left-6 top-6 md:left-10 md:top-10">
              <p className="driplabs-label text-white/35">
                Cellular & Longevity
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between md:bottom-10 md:left-10 md:right-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Programme
                </p>

                <p className="mt-2 text-2xl font-light tracking-[-0.03em] md:text-3xl">
                  NADx
                </p>
              </div>

              <p className="text-[8px] uppercase tracking-[0.2em] text-[#C9A646]">
                Physician supervised
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div className="border border-white/10 bg-[#0B1D35] p-7 md:p-10 lg:col-span-5 lg:p-12">
            <p className="driplabs-label text-white/35">
              What is NAD+?
            </p>

            <h3 className="mt-7 max-w-md text-4xl font-light leading-[0.9] tracking-[-0.045em] md:text-5xl">
              A molecule found throughout the living cell.
            </h3>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
              Nicotinamide Adenine Dinucleotide, or NAD+, is a coenzyme found
              throughout the body and is involved in cellular energy
              metabolism and several important cellular pathways.
            </p>

            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-[8px] uppercase tracking-[0.22em] text-white/30">
                DRIPLABS approach
              </p>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
                The programme begins with physician assessment. Protocol
                selection, dosage and treatment duration remain subject to
                professional clinical judgement.
              </p>
            </div>
          </div>
        </div>

        {/* Science pillars */}
        <div className="mt-8 grid border-y border-white/10 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className={`px-0 py-10 md:px-8 md:py-12 ${
                index !== pillars.length - 1
                  ? "border-b border-white/10 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <p className="text-[9px] tracking-[0.24em] text-[#C9A646]">
                {pillar.number}
              </p>

              <h4 className="mt-10 text-3xl font-light tracking-[-0.04em] md:text-4xl">
                {pillar.title}
              </h4>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <div className="mt-28 grid gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="driplabs-label text-white/35">
              Your NADx journey
            </p>

            <h3 className="mt-7 max-w-md text-4xl font-light leading-[0.9] tracking-[-0.045em] md:text-5xl">
              Science with a human experience.
            </h3>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-white/10">
              {experience.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.07,
                  }}
                  className="grid grid-cols-12 items-center border-b border-white/10 py-6"
                >
                  <span className="col-span-2 text-[9px] tracking-[0.22em] text-[#C9A646]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="col-span-8 text-lg font-light tracking-[-0.02em]">
                    {item}
                  </span>

                  <span className="col-span-2 text-right text-white/25">
                    →
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.17em] text-white/40">
                Physician assessment
              </span>

              <span className="border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.17em] text-white/40">
                3–4 hour NAD+ session
              </span>

              <span className="border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.17em] text-white/40">
                Professional supervision
              </span>
            </div>

            <a
              href="#book"
              className="mt-9 inline-flex items-center gap-5 bg-[#C9A646] px-6 py-4 text-[9px] uppercase tracking-[0.22em] text-[#071525]"
            >
              Begin a NAD+ consultation
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <p className="max-w-4xl text-[9px] leading-5 text-white/25">
            NAD+ is presented here as an adjunct wellness and cellular-energy
            support programme. Evidence for IV NAD+ wellness and healthy-aging
            outcomes remains an evolving research area. Final protocol
            selection, dosage and duration remain the responsibility of the
            treating physician.
          </p>
        </div>
      </div>
    </section>
  );
}