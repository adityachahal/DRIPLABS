"use client";

import { motion } from "framer-motion";

const trustPoints = [
  {
    number: "01",
    title: "Physician-Reviewed",
    description:
      "Every protocol begins with professional assessment and physician oversight before administration.",
  },
  {
    number: "02",
    title: "Pharma-Grade",
    description:
      "Protocols are supported by pharmaceutical manufacturing standards and documented ingredient information.",
  },
  {
    number: "03",
    title: "Batch-Traceable",
    description:
      "Each kit is linked to manufacturing documentation including batch information, expiry and Certificate of Analysis.",
  },
  {
    number: "04",
    title: "Documented",
    description:
      "Physician dossiers, patient guidance and evidence-graded ingredient documentation are built into the system.",
  },
];

const metrics = [
  {
    value: "19",
    label: "Commercial protocols",
  },
  {
    value: "8",
    label: "Wellness families",
  },
  {
    value: "19",
    label: "Detailed technical IV kits",
  },
  {
    value: "IN",
    label: "Manufactured in India",
  },
];

export default function CredibilitySection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F0E7] text-[#0B1D35]">
      {/* =========================================================
          GOLD EDGE
      ========================================================= */}
      <div className="h-px w-full bg-[#C9A646]" />

      {/* =========================================================
          INTRO
      ========================================================= */}
      <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-36 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Eyebrow */}
          <div className="md:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="driplabs-label text-[#77736A]"
            >
              The DRIPLABS standard
            </motion.p>
          </div>

          {/* Heading */}
          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1100px] text-[clamp(4rem,7.5vw,8.5rem)] font-light leading-[0.79] tracking-[-0.07em]"
            >
              Wellness,
              <br />
              built the way
              <br />
              medicine is built.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-10 max-w-2xl text-sm leading-7 text-[#4D535D] md:text-base"
            >
              DRIPLABS is positioned as a physician-led IV wellness system:
              documented protocols, professional supervision, pharmaceutical
              manufacturing standards and traceable products from manufacture
              through administration.
            </motion.p>
          </div>
        </div>
      </div>

      {/* =========================================================
          METRICS
      ========================================================= */}
      <div className="mx-auto max-w-[1600px] border-y border-[#0B1D35]/10 md:mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`px-6 py-10 md:px-10 md:py-12 lg:px-14 ${
                index !== metrics.length - 1
                  ? "border-b border-[#0B1D35]/10 lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <div className="flex items-end justify-between gap-5">
                <span className="text-[clamp(4rem,6vw,6.5rem)] font-light leading-none tracking-[-0.07em]">
                  {metric.value}
                </span>

                <span className="mb-2 text-[#C9A646]">✦</span>
              </div>

              <p className="mt-5 max-w-[180px] text-[9px] uppercase leading-5 tracking-[0.22em] text-[#77736A]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================================
          TRUST SYSTEM
      ========================================================= */}
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36 lg:px-14">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          {/* Left */}
          <div className="md:col-span-4">
            <p className="driplabs-label text-[#77736A]">
              Why it feels different
            </p>

            <h3 className="mt-7 max-w-md text-4xl font-light leading-[0.9] tracking-[-0.045em] md:text-5xl">
              A system you can understand, review and trust.
            </h3>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#4D535D]">
              The DRIPLABS proposition is built around documentation and
              traceability rather than an unstructured menu of wellness
              treatments.
            </p>
          </div>

          {/* Right */}
          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-[#0B1D35]/10">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  className="group grid gap-8 border-b border-[#0B1D35]/10 py-9 md:grid-cols-12 md:items-start"
                >
                  <div className="md:col-span-2">
                    <span className="text-[9px] tracking-[0.25em] text-[#C9A646]">
                      {point.number}
                    </span>
                  </div>

                  <div className="md:col-span-5">
                    <h4 className="text-2xl font-light tracking-[-0.035em] md:text-3xl">
                      {point.title}
                    </h4>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-sm leading-6 text-[#666B73]">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          QUALITY STRIP
      ========================================================= */}
      <div className="border-t border-[#0B1D35]/10 bg-[#0B1D35] text-[#F5F0E7]">
        <div className="mx-auto max-w-[1600px] px-6 py-10 md:px-10 lg:px-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="driplabs-label text-white/40">
                Quality & traceability
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
                Every released kit is supported by documented quality
                controls, batch traceability and Certificate of Analysis
                documentation.
              </p>
            </div>

            <a
              href="#about"
              className="group inline-flex shrink-0 items-center gap-5 text-[9px] uppercase tracking-[0.23em]"
            >
              Explore our standards

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#C9A646] group-hover:bg-[#C9A646] group-hover:text-[#0B1D35]">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}