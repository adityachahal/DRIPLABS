"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation & Assessment",
    shortTitle: "Consultation.",
    description:
      "A physician reviews your goals, health history and suitability before any protocol is confirmed.",
    detail:
      "Every DRIPLABS journey begins with professional assessment. Your goals, relevant health information and suitability are reviewed before a treatment is confirmed.",
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
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];

  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-[#F5F0E7] text-[#0B1D35]"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}
      <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-24 md:px-10 md:pb-24 md:pt-36 lg:px-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Left label */}
          <div className="md:col-span-3">
            <p className="driplabs-label text-[#77736A]">
              How it works
            </p>

            <div className="mt-6 hidden h-px w-14 bg-[#C9A646] md:block" />

            <p className="mt-5 max-w-[190px] text-[9px] uppercase leading-5 tracking-[0.18em] text-[#99958C]">
              Four steps.
              <br />
              One considered experience.
            </p>
          </div>

          {/* Main heading */}
          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1000px] text-[clamp(4rem,7.2vw,8.5rem)] font-light leading-[0.8] tracking-[-0.075em]"
            >
              From first
              <br />
              conversation
              <br />
              to follow-up.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-9 max-w-xl text-sm leading-7 text-[#59616B] md:text-base"
            >
              A physician-led journey designed to keep assessment,
              recommendation, treatment and follow-up connected.
            </motion.p>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN EXPERIENCE
      ========================================================= */}
      <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 md:pb-32 lg:px-14">
        <div className="overflow-hidden border border-[#0B1D35]/12">
          <div className="grid lg:grid-cols-12">
            {/* =====================================================
                LEFT — FULL HEIGHT JOURNEY TIMELINE
            ===================================================== */}
            <div className="flex min-h-[720px] flex-col bg-[#0B1D35] lg:col-span-5">
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-9">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.28em] text-white/35">
                    Your DRIPLABS journey
                  </p>

                  <div className="mt-2 h-px w-9 bg-[#C9A646]" />
                </div>

                <p className="text-[8px] uppercase tracking-[0.22em] text-[#C9A646]">
                  {active.number} / 04
                </p>
              </div>

              {/* =================================================
                  FOUR EQUAL SECTIONS
              ================================================= */}
              <div className="flex flex-1 flex-col">
                {steps.map((step, index) => {
                  const selected = index === activeStep;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-pressed={selected}
                      className={`group relative flex flex-1 flex-col justify-center border-b border-white/10 px-6 py-8 text-left transition-all duration-500 last:border-b-0 md:px-9 ${
                        selected
                          ? "bg-[#122845]"
                          : "bg-[#0B1D35] hover:bg-[#10213B]"
                      }`}
                    >
                      {/* Active gold rail */}
                      <span
                        className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-[#C9A646] transition-transform duration-500 ${
                          selected ? "scale-y-100" : "scale-y-0"
                        }`}
                      />

                      {/* Subtle background number */}
                      <span
                        className={`pointer-events-none absolute right-7 top-1/2 -translate-y-1/2 text-[70px] font-light leading-none tracking-[-0.08em] transition-opacity duration-500 md:text-[90px] ${
                          selected
                            ? "text-white/[0.035]"
                            : "text-white/[0.018]"
                        }`}
                      >
                        {step.number}
                      </span>

                      <div className="relative z-10">
                        {/* Number + state */}
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[9px] tracking-[0.24em] ${
                              selected
                                ? "text-[#C9A646]"
                                : "text-white/25"
                            }`}
                          >
                            {step.number}
                          </span>

                          <span
                            className={`text-sm transition-all duration-300 ${
                              selected
                                ? "translate-x-0 text-[#C9A646]"
                                : "translate-x-2 text-white/15 group-hover:translate-x-0"
                            }`}
                          >
                            →
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`mt-5 max-w-[390px] text-[clamp(1.55rem,2.3vw,2.2rem)] font-light leading-[1.02] tracking-[-0.035em] transition-colors duration-300 ${
                            selected
                              ? "text-[#F5F0E7]"
                              : "text-white/52 group-hover:text-white/85"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`mt-4 max-w-[390px] text-[13px] leading-6 transition-colors duration-300 ${
                            selected
                              ? "text-white/65"
                              : "text-white/30 group-hover:text-white/45"
                          }`}
                        >
                          {step.description}
                        </p>

                        {/* Active label */}
                        <div
                          className={`mt-5 flex items-center gap-3 transition-opacity duration-300 ${
                            selected ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <span className="h-px w-7 bg-[#C9A646]" />

                          <span className="text-[7px] uppercase tracking-[0.2em] text-[#C9A646]">
                            Current step
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* =================================================
                  TRUST STRIP
              ================================================= */}
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

            {/* =====================================================
                RIGHT — CINEMATIC EXPERIENCE
            ===================================================== */}
            <div className="relative min-h-[620px] overflow-hidden bg-[#0B1D35] lg:col-span-7 lg:min-h-[720px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.number}
                  initial={{
                    opacity: 0,
                    scale: 1.045,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.015,
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/hero/driplabs-hero.jpg"
                    alt="DRIPLABS treatment experience"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    style={{
                      objectPosition: active.imagePosition,
                    }}
                  />

                  <div className="absolute inset-0 bg-[#071525]/25" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/95 via-[#071525]/15 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/25 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Top metadata */}
              <div className="absolute left-6 right-6 top-6 z-10 flex items-start justify-between md:left-9 md:right-9 md:top-9">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.28em] text-white/60">
                    DRIPLABS
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#C9A646]">
                    The experience
                  </p>
                </div>

                <p className="text-[8px] uppercase tracking-[0.22em] text-white/45">
                  {active.number} / 04
                </p>
              </div>

              {/* =================================================
                  RIGHT CONTENT
              ================================================= */}
              <div className="absolute inset-x-0 top-0 z-10 px-6 pt-28 md:px-10 md:pt-32 lg:px-12 lg:pt-28">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="w-full max-w-2xl"
                  >
                    <p className="text-[8px] uppercase tracking-[0.28em] text-white/50">
                      Step {active.number}
                    </p>

                    <h3 className="mt-5 max-w-xl text-[clamp(4rem,6.2vw,7rem)] font-light leading-[0.78] tracking-[-0.07em] text-[#F5F0E7]">
                      {active.shortTitle}
                    </h3>

                    <div className="mt-8 max-w-xl border-t border-white/20 pt-5">
                      <p className="text-sm leading-7 text-white/70 md:text-base">
                        {active.detail}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between md:bottom-9 md:left-9 md:right-9">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.22em] text-white/40">
                    Physician-led experience
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    Calm. Personal. Considered.
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/25 md:flex">
                  <span className="text-xs text-[#C9A646]">
                    ✦
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SESSION TIMING
      ========================================================= */}
      <div className="border-t border-[#0B1D35]/10">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24 lg:px-14">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="driplabs-label text-[#77736A]">
                Session timing
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <div className="grid border-t border-[#0B1D35]/10 sm:grid-cols-2">
                <div className="border-b border-[#0B1D35]/10 py-8 sm:border-b-0 sm:border-r sm:pr-10 md:py-10">
                  <p className="text-[8px] uppercase tracking-[0.22em] text-[#99958C]">
                    Standard IV
                  </p>

                  <p className="mt-4 text-[clamp(4rem,6vw,6rem)] font-light leading-none tracking-[-0.07em]">
                    45–60
                    <span className="ml-2 text-xl tracking-normal text-[#77736A]">
                      min
                    </span>
                  </p>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#77736A]">
                    Approximate timing described in the DRIPLABS consumer
                    experience materials.
                  </p>
                </div>

                <div className="py-8 sm:pl-10 md:py-10">
                  <p className="text-[8px] uppercase tracking-[0.22em] text-[#99958C]">
                    NADx
                  </p>

                  <p className="mt-4 text-[clamp(4rem,6vw,6rem)] font-light leading-none tracking-[-0.07em]">
                    3–4
                    <span className="ml-2 text-xl tracking-normal text-[#77736A]">
                      hrs
                    </span>
                  </p>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#77736A]">
                    Separate longer session timing described for the NADx
                    programme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          CTA
      ========================================================= */}
      <div className="bg-[#0B1D35] text-[#F5F0E7]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-7 px-6 py-9 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <div>
            <p className="driplabs-label text-white/35">
              Begin with a consultation
            </p>

            <p className="mt-3 max-w-2xl text-2xl font-light tracking-[-0.035em] md:text-3xl">
              Your journey starts with understanding you.
            </p>
          </div>

          <a
            href="#book"
            className="group inline-flex shrink-0 items-center gap-5 border border-[#C9A646] bg-[#C9A646] px-6 py-4 text-[9px] uppercase tracking-[0.22em] text-[#0B1D35] transition-all duration-300 hover:bg-transparent hover:text-[#C9A646]"
          >
            Book your consultation

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}