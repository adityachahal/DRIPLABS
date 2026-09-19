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

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function CredibilitySection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="standard"
      className="relative overflow-hidden bg-[#F7F4EC] text-[#0B1B33]"
    >
      {/* ======================================================
          GLOBAL ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
      >
        <div className="absolute -left-[20%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#C9A227]/[0.055] blur-[130px]" />
        <div className="absolute -right-[15%] top-[38%] h-[600px] w-[600px] rounded-full bg-[#6E829C]/[0.045] blur-[150px]" />
      </div>

      {/* ======================================================
          GOLD ENTRY RULE
      ====================================================== */}

      <motion.div
        initial={{ scaleX: reducedMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0.01 : 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 h-px w-full origin-left bg-[#C9A227]"
      />

      {/* ======================================================
          INTRO
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 pb-24 pt-28 sm:px-8 md:pb-36 md:pt-40 lg:px-12 xl:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <motion.div
            variants={reveal}
            initial={reducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />

              <p className="text-[8px] uppercase tracking-[0.32em] text-[#B8901F] md:text-[9px]">
                The DRIPLABS standard
              </p>
            </div>

            <div className="mt-10 hidden lg:block">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#B8901F]">
                  STD / 01
                </span>

                <span className="h-px w-12 bg-[#0B1B33]/10" />
              </div>

              <p className="max-w-[230px] text-xs leading-6 text-[#5A6B82]">
                Proof is part of the experience. Documentation should feel as
                considered as everything around it.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.h2
              variants={reveal}
              initial={reducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1050px] font-[var(--font-heading)] text-[clamp(3.5rem,8vw,8.4rem)] font-light leading-[0.82] tracking-[-0.07em]"
            >
              Wellness,
              <br />
              built the way
              <br />
              medicine is built.
            </motion.h2>

            <motion.div
              initial={{
                opacity: reducedMotion ? 1 : 0,
                width: reducedMotion ? "100%" : "0%",
              }}
              whileInView={{
                opacity: 1,
                width: "100%",
              }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 1,
                delay: reducedMotion ? 0 : 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 h-px max-w-[620px] bg-[#0B1B33]/10"
            />

            <motion.p
              variants={reveal}
              initial={reducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.18,
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
          METRICS / PROOF BAND
      ====================================================== */}

      <div className="relative z-10 border-y border-[#0B1B33]/10">
        <div className="mx-auto grid max-w-[1480px] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "group relative px-5 py-10 md:px-10 md:py-14 lg:px-12 lg:py-16",
                index !== metrics.length - 1
                  ? "border-b border-[#0B1B33]/10 lg:border-b-0 lg:border-r"
                  : "",
              ].join(" ")}
            >
              {/* hover wash */}
              <div className="pointer-events-none absolute inset-0 bg-[#C9A227]/0 transition-colors duration-700 group-hover:bg-[#C9A227]/[0.025]" />

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <span className="font-[var(--font-heading)] text-[clamp(3.4rem,5.5vw,6.4rem)] font-light leading-[0.82] tracking-[-0.07em] text-[#0B1B33] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                    {metric.value}
                  </span>

                  <span className="mt-2 flex h-5 w-5 items-center justify-center rounded-full border border-[#C9A227]/30 transition-all duration-700 group-hover:border-[#C9A227] group-hover:rotate-45">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                  </span>
                </div>

                <div className="mt-8 h-px w-full overflow-hidden bg-[#0B1B33]/10">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.9,
                      delay: reducedMotion ? 0 : 0.15 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full w-full origin-left bg-[#C9A227]/50"
                  />
                </div>

                <p className="mt-5 max-w-[220px] text-[8px] uppercase leading-5 tracking-[0.2em] text-[#5A6B82] md:text-[9px]">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================
          TRUST PILLARS
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 py-28 sm:px-8 md:py-40 lg:px-12 xl:px-16">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <motion.div
              variants={reveal}
              initial={reducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:sticky lg:top-32"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#C9A227]" />

                <p className="text-[8px] uppercase tracking-[0.28em] text-[#B8901F] md:text-[9px]">
                  Why it feels different
                </p>
              </div>

              <h3 className="mt-8 max-w-lg font-[var(--font-heading)] text-[clamp(2.8rem,4.8vw,5.5rem)] font-light leading-[0.86] tracking-[-0.06em]">
                A system you can understand, review and trust.
              </h3>

              <p className="mt-8 max-w-md text-sm leading-7 text-[#5A6B82]">
                The DRIPLABS proposition is built around documentation and
                traceability rather than an unstructured menu of wellness
                treatments.
              </p>

              <div className="mt-12 hidden lg:block">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#B8901F]">
                    SYSTEM / VERIFIED
                  </span>

                  <span className="h-px w-16 bg-[#0B1B33]/10" />
                </div>
              </div>
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
                      : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.8,
                    delay: reducedMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative border-b border-[#0B1B33]/10 py-9 md:py-11"
                >
                  <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#C9A227]/70 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

                  <div className="grid gap-6 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-2">
                      <span className="font-mono text-[9px] tracking-[0.24em] text-[#B8901F]">
                        {point.number}
                      </span>
                    </div>

                    <div className="md:col-span-4">
                      <h4 className="font-[var(--font-heading)] text-[1.9rem] font-light leading-none tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                        {point.title}
                      </h4>
                    </div>

                    <div className="md:col-span-6">
                      <p className="max-w-xl text-sm leading-6 text-[#5A6B82]">
                        {point.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex items-center gap-3 opacity-40 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="h-px w-5 bg-[#C9A227]" />
                    <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#B8901F]">
                      Verified standard
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          DECODE A VIAL
      ====================================================== */}

      <div className="relative z-10 overflow-hidden border-t border-[#0B1B33]/10 bg-[#070C13] text-[#F7F4EC]">
        {/* cinematic atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[12%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#C9A227]/[0.055] blur-[150px]" />
          <div className="absolute right-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#71829A]/[0.04] blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1480px] px-5 py-28 sm:px-8 md:py-40 lg:px-12 xl:px-16">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-14">
            {/* ==================================================
                VIAL VISUAL
            ================================================== */}

            <div className="lg:col-span-5">
              <motion.div
                initial={
                  reducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24, filter: "blur(6px)" }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: reducedMotion ? 0.01 : 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0B1119]"
              >
                {/* scanning grid */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,162,39,0.15),transparent_40%)]" />

                {/* top technical label */}
                <div className="absolute left-6 top-6 right-6 z-20 flex items-center justify-between md:left-8 md:right-8 md:top-8">
                  <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-[#E3CE8E]">
                    <span className="h-px w-7 bg-[#C9A227]" />
                    Specimen
                  </div>

                  <span className="font-mono text-[7px] tracking-[0.18em] text-white/30">
                    DL / GLT / 1200
                  </span>
                </div>

                {/* scan line */}
                <motion.div
                  aria-hidden="true"
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                          y: ["0%", "400%", "0%"],
                        }
                  }
                  transition={
                    reducedMotion
                      ? undefined
                      : {
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="absolute left-0 right-0 top-[15%] z-10 h-px bg-gradient-to-r from-transparent via-[#C9A227]/70 to-transparent"
                />

                {/* vial */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={
                      reducedMotion
                        ? undefined
                        : {
                            y: [0, -8, 0],
                            rotateZ: [0, 0.6, 0],
                          }
                    }
                    transition={
                      reducedMotion
                        ? undefined
                        : {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                    }
                    className="relative w-[54%] max-w-[235px]"
                  >
                    <div className="absolute -inset-16 rounded-full bg-[#C9A227]/[0.06] blur-3xl transition-opacity duration-700 group-hover:bg-[#C9A227]/[0.1]" />

                    <div className="relative border border-[#E3CE8E]/30 bg-gradient-to-br from-[#EFE8D9]/[0.12] via-[#A77E22]/[0.07] to-transparent px-6 py-10 backdrop-blur-sm transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]">
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

                {/* bottom labels */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between border-t border-white/10 pt-4 text-[7px] uppercase tracking-[0.18em] text-white/35 md:bottom-8 md:left-8 md:right-8">
                  <span>Traceable</span>
                  <span>Documented</span>
                  <span>Physician-led</span>
                </div>
              </motion.div>
            </div>

            {/* ==================================================
                DECODE CONTENT
            ================================================== */}

            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div
                variants={reveal}
                initial={reducedMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-[#C9A227]" />

                  <p className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E] md:text-[9px]">
                    Decode a vial
                  </p>
                </div>

                <h3 className="mt-8 font-[var(--font-heading)] text-[clamp(3rem,5.5vw,6rem)] font-light leading-[0.84] tracking-[-0.065em]">
                  Every product
                  <br />
                  has an identity.
                </h3>

                <p className="mt-9 max-w-xl text-sm leading-7 text-white/55">
                  Branded terminology is decoded into the pharmaceutical
                  identity supplied to the physician before administration.
                </p>
              </motion.div>

              <div className="mt-14 border-t border-white/10">
                {decodeRows.map(([brand, identity], index) => (
                  <motion.div
                    key={brand}
                    initial={
                      reducedMotion
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-8% 0px" }}
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.7,
                      delay: reducedMotion ? 0 : index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative grid gap-4 border-b border-white/10 py-6 md:grid-cols-[0.75fr_1.25fr] md:gap-8"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#C9A227]/70 transition-transform duration-700 group-hover:scale-x-100" />

                    <span className="font-[var(--font-heading)] text-lg font-light tracking-[-0.025em] text-[#E3CE8E] transition-transform duration-500 group-hover:translate-x-1">
                      {brand}
                    </span>

                    <span className="text-xs leading-6 text-white/55 md:text-sm">
                      {identity}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={reveal}
                initial={reducedMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  delay: reducedMotion ? 0 : 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-9 max-w-xl font-[var(--font-heading)] text-xl font-light italic tracking-[-0.02em] text-[#E3CE8E]"
              >
                Every vial, traceable to a generic name and a batch. Not a
                claim — a document.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          QUALITY FOOTER STRIP
      ====================================================== */}

      <div className="relative z-10 border-t border-[#C9A227]/20 bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#C9A227]" />

              <p className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                Quality & traceability
              </p>
            </div>

            <p className="mt-4 max-w-2xl text-xs leading-6 text-white/50 md:text-sm">
              Every kit is supported by documented quality controls, batch
              traceability and Certificate of Analysis documentation.
            </p>
          </div>

          <a
            href="/standard"
            className="group inline-flex shrink-0 items-center gap-5 text-[8px] uppercase tracking-[0.23em] text-white md:text-[9px]"
          >
            Explore the standard

            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#C9A227] group-hover:text-[#0B1B33]">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#C9A227] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />

              <span className="relative z-10 text-base transition-transform duration-500 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}