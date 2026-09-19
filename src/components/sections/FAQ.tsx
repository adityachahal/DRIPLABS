"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
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

export default function FAQ() {
  const reducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(
    null,
  );

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#0A0A0B] text-[#F2F0EA]"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-10%] top-[5%] h-[600px] w-[600px] rounded-full bg-[#C9A646]/[0.035] blur-[150px]" />

        <div className="absolute bottom-[-20%] left-[-15%] h-[500px] w-[500px] rounded-full bg-[#AFC7C2]/[0.025] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-10% 0px",
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.9,
              ease: easeLuxury,
            }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-[#C9A646] shadow-[0_0_14px_rgba(201,166,70,0.65)]" />

              <p className="text-[8px] uppercase tracking-[0.28em] text-white/40 md:text-[9px]">
                Frequently asked
              </p>
            </div>

            <div className="mt-7 h-px w-16 bg-gradient-to-r from-[#C9A646] to-transparent" />

            <p className="mt-7 max-w-[220px] text-xs leading-6 text-white/35">
              Straight answers for the questions people ask
              before beginning their DRIPLABS journey.
            </p>

            <div className="mt-12 hidden items-center gap-3 lg:flex">
              <span className="font-mono text-[8px] tracking-[0.18em] text-white/20">
                DRIPLABS / KNOWLEDGE
              </span>

              <span className="h-px w-8 bg-white/10" />
            </div>
          </motion.div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.div
              initial={
                reducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              whileInView={{ opacity: 1 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
              }}
              className="mb-7 flex items-center justify-between"
            >
              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
                BEFORE YOUR VISIT
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#C9A646]/60">
                {String(faqs.length).padStart(2, "0")}{" "}
                ANSWERS
              </span>
            </motion.div>

            <motion.h2
              initial={
                reducedMotion
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 28,
                      filter: "blur(7px)",
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                margin: "-10% 0px",
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 1,
                ease: easeLuxury,
              }}
              className="font-[var(--font-heading)] text-[clamp(3.8rem,7.5vw,8.2rem)] font-light leading-[0.82] tracking-[-0.07em] text-[#F2F0EA]"
            >
              Questions,
              <br />
              <span className="text-white/38">
                answered.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* =======================================================
            FAQ LIST
        ======================================================= */}

        <div className="mt-20 border-t border-white/[0.09] md:mt-28">
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
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 18,
                      }
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
                  duration: reducedMotion ? 0.01 : 0.7,
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
                    duration: 0.5,
                  }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#C9A646]/[0.045] via-transparent to-transparent"
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
                  className="absolute bottom-0 left-0 top-0 w-[2px] origin-center bg-[#C9A646] shadow-[0_0_18px_rgba(201,166,70,0.55)]"
                />

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
                      className={`pt-1 font-mono text-[8px] tracking-[0.22em] transition-colors duration-500 ${
                        open
                          ? "text-[#C9A646]"
                          : "text-white/25"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`font-[var(--font-heading)] text-[1.45rem] font-light leading-[1.05] tracking-[-0.03em] transition-all duration-500 md:text-2xl lg:text-3xl ${
                        open
                          ? "translate-x-1 text-[#F2F0EA]"
                          : "text-white/68 group-hover:text-[#F2F0EA]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus / close */}
                  <span
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      open
                        ? "rotate-45 border-[#C9A646]/45 bg-[#C9A646]/[0.07] text-[#C9A646]"
                        : "border-white/[0.12] text-white/30 group-hover:border-white/25 group-hover:text-white/65"
                    }`}
                  >
                    <span className="absolute h-px w-3 bg-current" />

                    <span className="absolute h-3 w-px bg-current" />
                  </span>
                </button>

                {/* =================================================
                    ANSWER
                ================================================= */}

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
                        duration: reducedMotion
                          ? 0.01
                          : 0.5,
                        ease: easeLuxury,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="relative pb-8 pl-[2.1rem] pr-4 md:pb-10 md:pl-[4rem] md:pr-16">
                        <div className="mb-5 h-px w-12 bg-[#C9A646]/40" />

                        <p className="max-w-3xl text-sm leading-7 text-white/42 md:text-base md:leading-8">
                          {faq.answer}
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                          <span className="h-[3px] w-[3px] rounded-full bg-[#C9A646]/70" />

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

        {/* =======================================================
            BOTTOM RAIL
        ======================================================= */}

        <div className="mt-7 flex items-center justify-between">
          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
            Information before consultation
          </p>

          <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.2em] text-[#C9A646]/45">
            <span className="h-[4px] w-[4px] rounded-full bg-[#C9A646]/70 shadow-[0_0_8px_rgba(201,166,70,0.45)]" />
            Physician-supervised wellness
          </span>
        </div>
      </div>
    </section>
  );
}