"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation & Assessment",
    shortTitle: "Consultation.",
    description:
      "A physician reviews your goals, health history and suitability before any protocol is confirmed.",
    detail:
      "Every DRIPLABS journey begins with professional assessment. Your goals, relevant health information and suitability are reviewed before a protocol is confirmed.",
    imagePosition: "60% center",
  },
  {
    number: "02",
    title: "Personalised Recommendation",
    shortTitle: "Recommendation.",
    description:
      "Your protocol is selected around your profile, body weight and wellness goals.",
    detail:
      "Following assessment, the treating physician determines the appropriate protocol, dosage and treatment plan for your individual profile.",
    imagePosition: "48% center",
  },
  {
    number: "03",
    title: "Comfortable IV Session",
    shortTitle: "IV Session.",
    description:
      "Your treatment is administered by trained medical professionals in a comfortable, monitored setting.",
    detail:
      "Your selected protocol is administered by trained medical professionals in a carefully monitored environment designed around comfort and care.",
    imagePosition: "55% center",
  },
  {
    number: "04",
    title: "Recovery & Follow-Up",
    shortTitle: "Follow-Up.",
    description:
      "Your experience continues with structured recovery guidance and follow-up.",
    detail:
      "DRIPLABS considers the journey beyond the infusion, with appropriate recovery guidance and structured follow-up forming part of the experience.",
    imagePosition: "66% center",
  },
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

export default function ConsumerExperience() {
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F7F4EC] text-[#0B1B33]"
    >
      {/* ======================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#C9A227]/[0.035] blur-[130px]" />

        <div className="absolute -right-[10%] bottom-[15%] h-[550px] w-[550px] rounded-full bg-[#73849A]/[0.035] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,27,51,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,51,0.3) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* ======================================================
          ENTRY RULE
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

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 pb-28 pt-28 sm:px-8 md:pb-40 md:pt-40 lg:px-12 xl:px-16">
        {/* ======================================================
            INTRO
        ====================================================== */}

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <motion.div
            variants={reveal}
            initial={reducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />

              <p className="text-[8px] uppercase tracking-[0.3em] text-[#B8901F] md:text-[9px]">
                How it works
              </p>
            </div>

            <div className="mt-10 hidden lg:block">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#0B1B33]/30">
                  JOURNEY / 04
                </span>

                <span className="h-px w-12 bg-[#0B1B33]/10" />
              </div>

              <p className="mt-7 max-w-[220px] text-xs leading-6 text-[#5A6B82]">
                Four steps. One considered experience — from first conversation
                through follow-up.
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
              className="max-w-6xl font-[var(--font-heading)] text-[clamp(3.5rem,7.5vw,8.2rem)] font-light leading-[0.82] tracking-[-0.07em]"
            >
              From first
              <br />
              conversation
              <br />
              to follow-up.
            </motion.h2>

            <motion.div
              initial={{
                opacity: reducedMotion ? 1 : 0,
                scaleX: reducedMotion ? 1 : 0,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                delay: reducedMotion ? 0 : 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 h-px max-w-[600px] origin-left bg-[#0B1B33]/10"
            />

            <motion.p
              variants={reveal}
              initial={reducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 max-w-xl text-sm leading-7 text-[#5A6B82] md:text-base"
            >
              A physician-led journey designed to keep assessment,
              recommendation, treatment and follow-up connected.
            </motion.p>
          </div>
        </div>

        {/* ======================================================
            EXPERIENCE SYSTEM
        ====================================================== */}

        <div className="relative mt-20 overflow-hidden border border-[#0B1B33]/10 lg:mt-28">
          <div className="grid lg:grid-cols-12">
            {/* ==================================================
                JOURNEY NAVIGATION
            ================================================== */}

            <div className="relative overflow-hidden bg-[#080E16] lg:col-span-5">
              {/* subtle grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "70px 70px",
                }}
              />

              <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-6 md:px-9">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.28em] text-white/35">
                    Your DRIPLABS journey
                  </p>

                  <div className="mt-3 h-px w-8 bg-[#C9A227]" />
                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#E3CE8E]">
                  {active.number} / 04
                </span>
              </div>

              <div className="relative z-10">
                {steps.map((step, index) => {
                  const selected = activeStep === index;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-pressed={selected}
                      className={[
                        "group relative w-full border-b border-white/10 px-6 py-8 text-left last:border-b-0 md:px-9 md:py-9",
                        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        selected
                          ? "bg-[#101E2D]"
                          : "bg-[#080E16] hover:bg-[#0D1722]",
                      ].join(" ")}
                    >
                      {/* active rail */}
                      <motion.span
                        animate={{
                          scaleY: selected ? 1 : 0,
                          opacity: selected ? 1 : 0,
                        }}
                        transition={{
                          duration: reducedMotion ? 0.01 : 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-0 left-0 top-0 w-[2px] origin-top bg-[#C9A227]"
                      />

                      {/* hover sweep */}
                      <span className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-[#C9A227]/[0.025] transition-all duration-700 group-hover:w-full" />

                      <div className="relative z-10 flex items-start justify-between gap-6">
                        <div>
                          <div className="flex items-center gap-3">
                            <span
                              className={[
                                "font-mono text-[8px] tracking-[0.24em]",
                                selected
                                  ? "text-[#C9A227]"
                                  : "text-white/25",
                              ].join(" ")}
                            >
                              {step.number}
                            </span>

                            {selected && (
                              <span className="flex items-center gap-2">
                                <span className="h-px w-4 bg-[#C9A227]/50" />

                                <span className="font-mono text-[6px] uppercase tracking-[0.18em] text-[#E3CE8E]/60">
                                  Active
                                </span>
                              </span>
                            )}
                          </div>

                          <h3
                            className={[
                              "mt-5 max-w-md font-[var(--font-heading)] text-[1.8rem] font-light leading-[0.94] tracking-[-0.045em] md:text-[2.15rem]",
                              "transition-colors duration-500",
                              selected
                                ? "text-[#F7F4EC]"
                                : "text-white/45 group-hover:text-white/80",
                            ].join(" ")}
                          >
                            {step.title}
                          </h3>

                          <p
                            className={[
                              "mt-4 max-w-md text-xs leading-6",
                              "transition-colors duration-500",
                              selected
                                ? "text-white/62"
                                : "text-white/28 group-hover:text-white/42",
                            ].join(" ")}
                          >
                            {step.description}
                          </p>
                        </div>

                        <span
                          className={[
                            "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                            selected
                              ? "border-[#C9A227]/60 bg-[#C9A227] text-[#080E16]"
                              : "border-white/10 text-white/20 group-hover:border-white/25 group-hover:text-white/60",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "transition-transform duration-500",
                              selected
                                ? "translate-x-0.5"
                                : "group-hover:translate-x-0.5",
                            ].join(" ")}
                          >
                            →
                          </span>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* system footer */}
              <div className="relative z-10 border-t border-white/10 px-6 py-7 md:px-9">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-mono text-[6px] uppercase leading-4 tracking-[0.15em] text-white/30">
                      Physician
                      <br />
                      assessment
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-4">
                    <p className="font-mono text-[6px] uppercase leading-4 tracking-[0.15em] text-white/30">
                      Professional
                      <br />
                      supervision
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-4">
                    <p className="font-mono text-[6px] uppercase leading-4 tracking-[0.15em] text-white/30">
                      Structured
                      <br />
                      follow-up
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                CINEMATIC EXPERIENCE STAGE
            ================================================== */}

            <div className="relative min-h-[540px] overflow-hidden bg-[#0B1B33] lg:col-span-7 lg:min-h-[760px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.number}
                  initial={
                    reducedMotion
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 1.035 }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={
                    reducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 1.015 }
                  }
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/hero/driplabs-hero.jpg"
                    alt="DRIPLABS wellness experience"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    style={{
                      objectPosition: active.imagePosition,
                    }}
                  />

                  {/* cinematic grade */}
                  <div className="absolute inset-0 bg-[#050B13]/25" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B13] via-[#050B13]/25 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#050B13]/35 via-transparent to-transparent" />

                  {/* subtle image movement */}
                  {!reducedMotion && (
                    <motion.div
                      initial={{ scale: 1.04 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* scan line */}
              {!reducedMotion && (
                <motion.div
                  aria-hidden="true"
                  animate={{
                    y: ["0%", "700%", "0%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute left-0 right-0 top-[8%] z-10 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent"
                />
              )}

              {/* top metadata */}
              <div className="absolute left-6 right-6 top-6 z-20 flex items-start justify-between md:left-9 md:right-9 md:top-9">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.28em] text-white/55">
                    DRIPLABS
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#E3CE8E]">
                    The experience
                  </p>
                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/40">
                  {active.number} / 04
                </span>
              </div>

              {/* corner markers */}
              <span className="absolute right-6 top-24 z-20 h-5 w-5 border-r border-t border-white/20 md:right-9" />

              <span className="absolute bottom-32 left-6 z-20 h-5 w-5 border-b border-l border-white/20 md:left-9" />

              {/* active content */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-10 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.number}
                    initial={
                      reducedMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 18, filter: "blur(5px)" }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={
                      reducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -12 }
                    }
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-px w-7 bg-[#C9A227]" />

                      <p className="font-mono text-[7px] uppercase tracking-[0.24em] text-white/45">
                        Step {active.number}
                      </p>
                    </div>

                    <h3 className="mt-5 max-w-2xl font-[var(--font-heading)] text-[clamp(3.3rem,6vw,6.5rem)] font-light leading-[0.8] tracking-[-0.07em] text-[#F7F4EC]">
                      {active.shortTitle}
                    </h3>

                    <p className="mt-7 max-w-xl border-t border-white/20 pt-5 text-sm leading-7 text-white/65 md:text-base">
                      {active.detail}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            SESSION TIMING
        ====================================================== */}

        <div className="mt-20 border-t border-[#0B1B33]/10 pt-10 md:mt-28 md:pt-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#C9A227]" />

                <p className="text-[8px] uppercase tracking-[0.26em] text-[#B8901F]">
                  Session timing
                </p>
              </div>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <div className="grid border-t border-[#0B1B33]/10 sm:grid-cols-2">
                <motion.div
                  whileHover={reducedMotion ? undefined : { y: -2 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group border-b border-[#0B1B33]/10 py-8 sm:border-b-0 sm:border-r sm:pr-10"
                >
                  <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#77736A]">
                    Standard IV
                  </p>

                  <p className="mt-4 font-[var(--font-heading)] text-[clamp(3.5rem,5vw,5.5rem)] font-light leading-none tracking-[-0.065em]">
                    45–60
                    <span className="ml-2 text-xl tracking-normal text-[#77736A]">
                      min
                    </span>
                  </p>

                  <div className="mt-6 h-px w-0 bg-[#C9A227] transition-all duration-700 group-hover:w-full" />
                </motion.div>

                <motion.div
                  whileHover={reducedMotion ? undefined : { y: -2 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group py-8 sm:pl-10"
                >
                  <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#77736A]">
                    NADx
                  </p>

                  <p className="mt-4 font-[var(--font-heading)] text-[clamp(3.5rem,5vw,5.5rem)] font-light leading-none tracking-[-0.065em]">
                    3–4
                    <span className="ml-2 text-xl tracking-normal text-[#77736A]">
                      hrs
                    </span>
                  </p>

                  <div className="mt-6 h-px w-0 bg-[#C9A227] transition-all duration-700 group-hover:w-full" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            CTA
        ====================================================== */}

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
          className="mt-12 flex justify-end"
        >
          <a
            href="/book"
            className="group inline-flex items-center gap-5 border-b border-[#C9A227]/50 pb-3 text-[8px] uppercase tracking-[0.23em] text-[#B8901F]"
          >
            Begin with a consultation

            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#C9A227]/30 transition-all duration-500 group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#0B1B33]">
              <span className="transition-transform duration-500 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}