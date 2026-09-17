"use client";

import { motion, useReducedMotion } from "framer-motion";

const trustPoints = [
  {
    number: "01",
    title: "Physician-Led",
    description:
      "Every protocol begins with a physician assessment. Never a menu you self-select.",
  },
  {
    number: "02",
    title: "Pharma-Grade",
    description:
      "IP/BP/USP pharmacopoeial standards, manufactured under Indian pharmaceutical licenses.",
  },
  {
    number: "03",
    title: "Traceable",
    description:
      "Every kit carries a batch number, expiry date and Certificate of Analysis.",
  },
  {
    number: "04",
    title: "Made in India",
    description:
      "Manufactured, lyophilised and quality-tested in India.",
  },
];

const metrics = [
  {
    value: "19",
    label: "Physician-directed IV protocols",
  },
  {
    value: "8",
    label: "Wellness families",
  },
  {
    value: "24",
    label: "Pharmacopoeial-grade branded injectables",
  },
  {
    value: "INDIA",
    label: "Manufactured, lyophilised and quality-tested",
  },
];

const decodeRows = [
  ["Glutalight 1200", "L-Glutathione (Reduced) 1200mg"],
  ["NADx", "Nicotinamide Adenine Dinucleotide 500mg"],
  ["VITA-C", "Ascorbic Acid (Vitamin C)"],
  ["Nac-Vital", "N-Acetylcysteine"],
];

export default function CredibilitySection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="standard"
      className="relative overflow-hidden bg-[#F7F4EC] text-[#0B1B33]"
    >
      {/* ======================================================
          GOLD ENTRY RULE
      ====================================================== */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0.01 : 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-px w-full origin-left bg-[#C9A227]"
      />

      {/* ======================================================
          INTRO
      ====================================================== */}

      <div className="mx-auto max-w-[1680px] px-5 pb-20 pt-24 md:px-10 md:pb-32 md:pt-36 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#C9A227]" />

              <p className="text-[8px] uppercase tracking-[0.28em] text-[#B8901F] md:text-[9px]">
                The DRIPLABS standard
              </p>
            </div>

            <p className="mt-8 hidden max-w-[230px] text-xs leading-6 text-[#5A6B82] lg:block">
              Proof is part of the experience. Documentation should feel as
              considered as everything around it.
            </p>
          </motion.div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.h2
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1050px] font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.065em]"
            >
              Wellness,
              <br />
              built the way
              <br />
              medicine is built.
            </motion.h2>

            <motion.p
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 max-w-2xl text-[13px] leading-7 text-[#5A6B82] md:text-sm"
            >
              DRIPLABS is positioned as a physician-led IV wellness system:
              documented protocols, professional supervision, pharmaceutical
              manufacturing standards and traceable products from manufacture
              through administration.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ======================================================
          METRICS
      ====================================================== */}

      <div className="border-y border-[#0B1B33]/10">
        <div className="mx-auto grid max-w-[1680px] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "group px-5 py-9 md:px-10 md:py-12 lg:px-14 lg:py-14",
                index !== metrics.length - 1
                  ? "border-b border-[#0B1B33]/10 lg:border-b-0 lg:border-r"
                  : "",
              ].join(" ")}
            >
              <div className="flex items-end justify-between gap-5">
                <span className="font-[var(--font-heading)] text-[clamp(3.2rem,5.5vw,6.4rem)] font-light leading-none tracking-[-0.065em] text-[#0B1B33]">
                  {metric.value}
                </span>

                <span className="mb-2 h-1.5 w-1.5 rounded-full bg-[#C9A227] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[2]" />
              </div>

              <p className="mt-5 max-w-[200px] text-[8px] uppercase leading-5 tracking-[0.2em] text-[#5A6B82] md:text-[9px]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================
          TRUST PILLARS
      ====================================================== */}

      <div className="mx-auto max-w-[1680px] px-5 py-24 md:px-10 md:py-36 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <motion.div
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[8px] uppercase tracking-[0.28em] text-[#B8901F] md:text-[9px]">
                Why it feels different
              </p>

              <h3 className="mt-7 max-w-lg font-[var(--font-heading)] text-[clamp(2.7rem,4.7vw,5.5rem)] font-light leading-[0.87] tracking-[-0.055em]">
                A system you can understand, review and trust.
              </h3>

              <p className="mt-8 max-w-md text-sm leading-7 text-[#5A6B82]">
                The DRIPLABS proposition is built around documentation and
                traceability rather than an unstructured menu of wellness
                treatments.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-[#0B1B33]/10">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.number}
                  initial={
                    reducedMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.8,
                    delay: reducedMotion ? 0 : index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group border-b border-[#0B1B33]/10 py-8 md:py-10"
                >
                  <div className="grid gap-6 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-2">
                      <span className="text-[9px] tracking-[0.24em] text-[#B8901F]">
                        {point.number}
                      </span>
                    </div>

                    <div className="md:col-span-4">
                      <h4 className="font-[var(--font-heading)] text-[1.8rem] font-light leading-none tracking-[-0.04em] md:text-3xl">
                        {point.title}
                      </h4>
                    </div>

                    <div className="md:col-span-6">
                      <p className="max-w-xl text-sm leading-6 text-[#5A6B82]">
                        {point.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.8,
                      delay: reducedMotion ? 0 : index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-7 h-px w-full origin-left scale-x-0 bg-[#C9A227]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          DECODE A VIAL — SIGNATURE VISUAL
      ====================================================== */}

      <div className="border-t border-[#0B1B33]/10 bg-[#060F1F] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-24 md:px-10 md:py-36 lg:px-14">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={
                  reducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative aspect-[4/5] overflow-hidden border border-[#C9A227]/25 bg-[#0B1B33]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,162,39,0.13),transparent_42%)]" />

                <div className="absolute left-5 top-5 flex items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-[#E3CE8E] md:left-7 md:top-7">
                  <span className="h-px w-7 bg-[#C9A227]" />
                  Specimen
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={
                      reducedMotion
                        ? undefined
                        : {
                            y: [0, -7, 0],
                          }
                    }
                    transition={
                      reducedMotion
                        ? undefined
                        : {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                    }
                    className="relative w-[54%] max-w-[235px]"
                  >
                    <div className="absolute -inset-12 rounded-full bg-[#C9A227]/[0.06] blur-3xl" />

                    <div className="relative border border-[#E3CE8E]/35 bg-gradient-to-br from-[#EFE8D9]/[0.12] via-[#A77E22]/[0.08] to-transparent px-6 py-10 backdrop-blur-sm">
                      <div className="border-b border-[#E3CE8E]/20 pb-5">
                        <p className="text-center text-[8px] uppercase tracking-[0.3em] text-[#E3CE8E]">
                          DRIPLABS
                        </p>

                        <p className="mt-2 text-center font-[var(--font-heading)] text-2xl font-light tracking-[-0.03em] text-[#F7F4EC]">
                          Glutalight
                        </p>
                      </div>

                      <div className="py-7 text-center">
                        <span className="font-[var(--font-heading)] text-4xl font-light tracking-[-0.05em] text-[#C9A227]">
                          1200
                        </span>

                        <p className="mt-2 text-[7px] uppercase tracking-[0.22em] text-white/45">
                          Batch documented
                        </p>
                      </div>

                      <div className="border-t border-[#E3CE8E]/20 pt-5 text-center">
                        <p className="text-[7px] uppercase tracking-[0.2em] text-white/40">
                          Certificate of Analysis
                        </p>

                        <div className="mx-auto mt-4 h-px w-20 bg-[#C9A227]/50" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex justify-between border-t border-white/10 pt-4 text-[7px] uppercase tracking-[0.18em] text-white/35 md:bottom-7 md:left-7 md:right-7 md:pt-5">
                  <span>Traceable</span>
                  <span>Documented</span>
                  <span>Physician-led</span>
                </div>
              </motion.div>
            </div>

            {/* Decode content */}
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div
                initial={
                  reducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E] md:text-[9px]">
                  Decode a vial
                </p>

                <h3 className="mt-7 font-[var(--font-heading)] text-[clamp(2.8rem,5vw,5.8rem)] font-light leading-[0.86] tracking-[-0.055em]">
                  Every product
                  <br />
                  has an identity.
                </h3>

                <p className="mt-8 max-w-xl text-sm leading-7 text-white/55">
                  Branded terminology is decoded into the pharmaceutical
                  identity supplied to the physician before administration.
                </p>
              </motion.div>

              <div className="mt-12 border-t border-white/10">
                {decodeRows.map(([brand, identity], index) => (
                  <motion.div
                    key={brand}
                    initial={
                      reducedMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 16 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-8% 0px" }}
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.7,
                      delay: reducedMotion ? 0 : index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="grid gap-3 border-b border-white/10 py-5 md:grid-cols-[0.75fr_1.25fr] md:gap-7"
                  >
                    <span className="font-[var(--font-heading)] text-lg font-light text-[#E3CE8E]">
                      {brand}
                    </span>

                    <span className="text-xs leading-6 text-white/55 md:text-sm">
                      {identity}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-8 font-[var(--font-heading)] text-xl font-light italic tracking-[-0.02em] text-[#E3CE8E]">
                Every vial, traceable to a generic name and a batch. Not a
                claim — a document.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          QUALITY FOOTER STRIP
      ====================================================== */}

      <div className="border-t border-[#C9A227]/20 bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-7 px-5 py-9 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <div>
            <p className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E]">
              Quality & traceability
            </p>

            <p className="mt-3 max-w-2xl text-xs leading-6 text-white/50 md:text-sm">
              Every kit is supported by documented quality controls, batch
              traceability and Certificate of Analysis documentation.
            </p>
          </div>

          <a
            href="/standard"
            className="group inline-flex shrink-0 items-center gap-5 text-[8px] uppercase tracking-[0.23em] text-white md:text-[9px]"
          >
            Explore the standard

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#0B1B33]">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
