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

export default function ConsumerExperience() {
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F7F4EC] text-[#0B1B33]"
    >
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
              <span className="h-px w-8 bg-[#C9A227]" />

              <p className="text-[8px] uppercase tracking-[0.28em] text-[#B8901F] md:text-[9px]">
                How it works
              </p>
            </div>

            <p className="mt-8 max-w-[220px] text-xs leading-6 text-[#5A6B82]">
              Four steps. One considered experience — from first conversation
              through follow-up.
            </p>
          </motion.div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.h2
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-6xl font-[var(--font-heading)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.065em]"
            >
              From first
              <br />
              conversation
              <br />
              to follow-up.
            </motion.h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#5A6B82] md:text-base">
              A physician-led journey designed to keep assessment,
              recommendation, treatment and follow-up connected.
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border border-[#0B1B33]/10 lg:mt-24">
          <div className="grid lg:grid-cols-12">
            {/* ==================================================
                MOBILE / DESKTOP STEP SELECTOR
            ================================================== */}

            <div className="bg-[#0B1B33] lg:col-span-5">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-9">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.28em] text-white/35">
                    Your DRIPLABS journey
                  </p>

                  <div className="mt-3 h-px w-8 bg-[#C9A227]" />
                </div>

                <span className="text-[8px] uppercase tracking-[0.22em] text-[#E3CE8E]">
                  {active.number} / 04
                </span>
              </div>

              <div>
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
                        "transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        selected
                          ? "bg-[#122845]"
                          : "bg-[#0B1B33] hover:bg-[#10213B]",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "absolute left-0 top-0 h-full w-[2px] origin-top bg-[#C9A227]",
                          "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          selected ? "scale-y-100" : "scale-y-0",
                        ].join(" ")}
                      />

                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <span
                            className={[
                              "text-[8px] tracking-[0.24em]",
                              selected ? "text-[#C9A227]" : "text-white/25",
                            ].join(" ")}
                          >
                            {step.number}
                          </span>

                          <h3
                            className={[
                              "mt-5 max-w-md font-[var(--font-heading)] text-[1.8rem] font-light leading-[0.95] tracking-[-0.04em] md:text-[2.15rem]",
                              "transition-colors duration-500",
                              selected
                                ? "text-[#F7F4EC]"
                                : "text-white/48 group-hover:text-white/80",
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
                            "pt-1 text-sm transition-all duration-500",
                            selected
                              ? "translate-x-0 text-[#C9A227]"
                              : "translate-x-1 text-white/15 group-hover:translate-x-0",
                          ].join(" ")}
                        >
                          →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-white/10 px-6 py-6 md:px-9">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[7px] uppercase leading-4 tracking-[0.15em] text-white/30">
                      Physician
                      <br />
                      assessment
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-4">
                    <p className="text-[7px] uppercase leading-4 tracking-[0.15em] text-white/30">
                      Professional
                      <br />
                      supervision
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-4">
                    <p className="text-[7px] uppercase leading-4 tracking-[0.15em] text-white/30">
                      Structured
                      <br />
                      follow-up
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                EXPERIENCE IMAGE
            ================================================== */}

            <div className="relative min-h-[520px] overflow-hidden bg-[#0B1B33] lg:col-span-7 lg:min-h-[720px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.number}
                  initial={
                    reducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 16 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    reducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -16 }
                  }
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.7,
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

                  <div className="absolute inset-0 bg-[#060F1F]/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060F1F]/95 via-[#060F1F]/15 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-6 right-6 top-6 z-10 flex items-start justify-between md:left-9 md:right-9 md:top-9">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.28em] text-white/55">
                    DRIPLABS
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#E3CE8E]">
                    The experience
                  </p>
                </div>

                <span className="text-[8px] uppercase tracking-[0.22em] text-white/40">
                  {active.number} / 04
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-10 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.number}
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="text-[8px] uppercase tracking-[0.24em] text-white/40">
                      Step {active.number}
                    </p>

                    <h3 className="mt-4 max-w-2xl font-[var(--font-heading)] text-[clamp(3.2rem,6vw,6.5rem)] font-light leading-[0.8] tracking-[-0.065em] text-[#F7F4EC]">
                      {active.shortTitle}
                    </h3>

                    <p className="mt-6 max-w-xl border-t border-white/20 pt-5 text-sm leading-7 text-white/65 md:text-base">
                      {active.detail}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Session timing */}
        <div className="mt-16 border-t border-[#0B1B33]/10 pt-10 md:mt-24 md:pt-14">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-[8px] uppercase tracking-[0.26em] text-[#B8901F]">
                Session timing
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <div className="grid border-t border-[#0B1B33]/10 sm:grid-cols-2">
                <div className="border-b border-[#0B1B33]/10 py-7 sm:border-b-0 sm:border-r sm:pr-8">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#77736A]">
                    Standard IV
                  </p>

                  <p className="mt-4 font-[var(--font-heading)] text-[clamp(3.5rem,5vw,5.5rem)] font-light leading-none tracking-[-0.06em]">
                    45–60
                    <span className="ml-2 text-xl tracking-normal text-[#77736A]">
                      min
                    </span>
                  </p>
                </div>

                <div className="py-7 sm:pl-8">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#77736A]">
                    NADx
                  </p>

                  <p className="mt-4 font-[var(--font-heading)] text-[clamp(3.5rem,5vw,5.5rem)] font-light leading-none tracking-[-0.06em]">
                    3–4
                    <span className="ml-2 text-xl tracking-normal text-[#77736A]">
                      hrs
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="/book"
            className="group inline-flex items-center gap-5 border-b border-[#C9A227]/50 pb-3 text-[8px] uppercase tracking-[0.23em] text-[#B8901F]"
          >
            Begin with a consultation

            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
