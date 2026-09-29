"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is IV therapy?",
    answer:
      "IV therapy delivers fluids and selected nutrients through an intravenous infusion. Treatment suitability is determined through a professional consultation.",
  },
  {
    question: "How does a DRIPLABS appointment work?",
    answer:
      "You select your preferred treatment and location, book an appointment, complete the required consultation, and then receive your infusion in a DRIPLABS setting.",
  },
  {
    question: "How long does an appointment take?",
    answer:
      "Appointment duration can vary depending on the treatment and your individual consultation. Your DRIPLABS team will guide you through the expected timing.",
  },
  {
    question: "Can everyone receive IV therapy?",
    answer:
      "Not necessarily. Treatment suitability depends on individual circumstances and professional assessment. Our team will determine whether a treatment is appropriate for you.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended so our team can prepare for your visit and provide the appropriate consultation and treatment experience.",
  },
  {
    question: "Where can I find DRIPLABS?",
    answer:
      "DRIPLABS operates across multiple locations in India. Visit our locations section to find the destination nearest to you.",
  },
];

const easeLuxury = [0.22, 1, 0.36, 1] as const;

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={[
        "relative flex h-10 w-10 shrink-0 items-center justify-center",
        "rounded-full border",
        "transition-all duration-500",
        open
          ? "rotate-45 border-[#1683FF]/60 bg-[#1683FF]/10 text-[#4D9BFF]"
          : "border-white/[0.14] text-white/35 group-hover:border-white/30 group-hover:text-white/70",
      ].join(" ")}
    >
      <span className="absolute h-px w-3 bg-current" />
      <span className="absolute h-3 w-px bg-current" />
    </span>
  );
}

export default function FAQPage() {
  const reducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020812] text-[#F7FAFF]">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
      >
        {/* Electric blue glow */}
        <div className="absolute right-[-12%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#0066FF]/[0.07] blur-[150px]" />

        <div className="absolute bottom-[-15%] left-[-12%] h-[500px] w-[500px] rounded-full bg-[#1683FF]/[0.045] blur-[140px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,8,18,0.35)_75%,rgba(2,8,18,0.7)_100%)]" />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <div className="relative z-50">
        {/* Keep your global Navbar here if desired */}
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-44 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            {/* Eyebrow */}

            <motion.div
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease: easeLuxury,
              }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3">
                <span className="h-[5px] w-[5px] rounded-full bg-[#1683FF] shadow-[0_0_14px_rgba(22,131,255,0.75)]" />

                <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/45 md:text-[9px]">
                  Frequently asked
                </span>
              </div>

              <div className="mt-7 h-px w-16 bg-gradient-to-r from-[#1683FF] to-transparent" />

              <p className="mt-7 max-w-[230px] text-xs leading-6 text-white/40">
                Straight answers for the questions people ask before
                beginning their DRIPLABS journey.
              </p>

              <div className="mt-10 hidden items-center gap-3 lg:flex">
                <span className="font-mono text-[8px] tracking-[0.18em] text-white/20">
                  DRIPLABS / KNOWLEDGE
                </span>

                <span className="h-px w-8 bg-white/10" />
              </div>
            </motion.div>

            {/* Heading */}

            <motion.div
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 28, filter: "blur(7px)" }
              }
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 1,
                ease: easeLuxury,
              }}
              className="lg:col-span-8 lg:col-start-5"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
                  Before your visit
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#4D9BFF]/70">
                  {String(faqs.length).padStart(2, "0")} Answers
                </span>
              </div>

              <h1 className="font-[var(--font-heading)] text-[clamp(4rem,8vw,8.5rem)] font-light leading-[0.82] tracking-[-0.07em] text-[#F7FAFF]">
                Questions,
                <br />
                <span className="text-white/35">answered.</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ LIST
      ========================================================= */}

      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-36 lg:px-14">
          <div className="border-t border-white/[0.09]">
            {/* Technical heading */}

            <div className="hidden grid-cols-12 border-b border-white/[0.06] px-4 py-4 md:grid md:px-6">
              <span className="col-span-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                No.
              </span>

              <span className="col-span-10 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                Question
              </span>

              <span className="col-span-1 text-right font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                +
              </span>
            </div>

            {faqs.map((faq, index) => {
              const open = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={
                    reducedMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 18 }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-8% 0px",
                  }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.65,
                    delay: reducedMotion
                      ? 0
                      : Math.min(index * 0.04, 0.2),
                    ease: easeLuxury,
                  }}
                  className="group relative border-b border-white/[0.09]"
                >
                  {/* Active background */}

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: open ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0066FF]/[0.06] via-[#0066FF]/[0.018] to-transparent"
                  />

                  {/* Active rail */}

                  <motion.span
                    initial={false}
                    animate={{
                      scaleY: open ? 1 : 0,
                      opacity: open ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: easeLuxury,
                    }}
                    className="absolute bottom-0 left-0 top-0 w-[2px] origin-center bg-[#1683FF] shadow-[0_0_18px_rgba(22,131,255,0.55)]"
                  />

                  {/* Question button */}

                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(open ? null : index)
                    }
                    aria-expanded={open}
                    className="relative flex w-full items-center justify-between gap-6 px-4 py-7 text-left md:min-h-[120px] md:px-6 md:py-8"
                  >
                    <div className="flex min-w-0 items-start gap-5 md:gap-7">
                      {/* Number */}

                      <span
                        className={[
                          "pt-1 font-mono text-[8px] tracking-[0.22em]",
                          "transition-colors duration-500",
                          open
                            ? "text-[#4D9BFF]"
                            : "text-white/25",
                        ].join(" ")}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}

                      <span
                        className={[
                          "font-[var(--font-heading)]",
                          "text-[1.45rem] font-light",
                          "leading-[1.05] tracking-[-0.03em]",
                          "transition-all duration-500",
                          "md:text-2xl lg:text-3xl",
                          open
                            ? "translate-x-1 text-[#F7FAFF]"
                            : "text-white/68 group-hover:text-[#F7FAFF]",
                        ].join(" ")}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <PlusIcon open={open} />
                  </button>

                  {/* Answer */}

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={
                          reducedMotion
                            ? {
                                opacity: 1,
                                height: "auto",
                              }
                            : {
                                opacity: 0,
                                height: 0,
                              }
                        }
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={
                          reducedMotion
                            ? {
                                opacity: 0,
                              }
                            : {
                                opacity: 0,
                                height: 0,
                              }
                        }
                        transition={{
                          duration: reducedMotion ? 0.01 : 0.5,
                          ease: easeLuxury,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="relative pb-8 pl-[2.1rem] pr-4 md:pb-10 md:pl-[4rem] md:pr-16">
                          <div className="mb-5 h-px w-12 bg-[#1683FF]/45" />

                          <p className="max-w-3xl text-sm leading-7 text-white/45 md:text-base md:leading-8">
                            {faq.answer}
                          </p>

                          <div className="mt-6 flex items-center gap-3">
                            <span className="h-[3px] w-[3px] rounded-full bg-[#1683FF]/75" />

                            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
                              DRIPLABS / INFORMATION
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom rail */}

          <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
              Information before consultation
            </p>

            <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.2em] text-[#4D9BFF]/55">
              <span className="h-[4px] w-[4px] rounded-full bg-[#1683FF]/75 shadow-[0_0_8px_rgba(22,131,255,0.45)]" />
              Physician-supervised wellness
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          STILL HAVE QUESTIONS
      ========================================================= */}

      <section className="relative border-t border-white/[0.07]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28 lg:px-14">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-5 font-mono text-[8px] uppercase tracking-[0.25em] text-[#4D9BFF]/70">
                Need more information?
              </p>

              <h2 className="max-w-2xl font-[var(--font-heading)] text-[clamp(2.8rem,5vw,5rem)] font-light leading-[0.9] tracking-[-0.055em]">
                Begin with a
                <br />
                <span className="text-white/35">conversation.</span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[10px] border border-[#1683FF]/70 bg-[#0066FF] px-7 text-[9px] font-medium uppercase tracking-[0.17em] text-white transition-all duration-500 hover:bg-[#1683FF] hover:shadow-[0_12px_40px_rgba(0,102,255,0.25)]"
            >
              <span>CONTACT US</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}