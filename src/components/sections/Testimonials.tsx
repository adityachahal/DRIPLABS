"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    number: "01",
    quote:
      "The entire experience felt calm, considered and incredibly professional.",
    name: "Rahul S.",
    location: "Mumbai",
    clientType: "NAD+ Client",
    rating: "★★★★★",
    experience: ["CALM", "CONSIDERED", "PROFESSIONAL"],
  },
  {
    number: "02",
    quote:
      "From the consultation to the treatment itself, everything felt effortless.",
    name: "DRIPLABS Guest",
    location: "India",
    clientType: "DRIPLABS Guest",
    rating: "★★★★★",
    experience: ["EFFORTLESS", "ATTENTIVE", "COMFORTABLE"],
  },
  {
    number: "03",
    quote:
      "A completely different kind of wellness experience. Beautiful space and attentive care.",
    name: "DRIPLABS Guest",
    location: "India",
    clientType: "DRIPLABS Guest",
    rating: "★★★★★",
    experience: ["BEAUTIFUL", "ATTENTIVE", "DIFFERENT"],
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const active = testimonials[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const previous = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative min-h-[100svh] overflow-hidden bg-[#080A0D] text-[#F3F0E8]"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft central glow */}
        <div
          className="absolute left-1/2 top-[42%] h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(205,183,135,0.16) 0%, rgba(205,183,135,0.04) 35%, transparent 72%)",
          }}
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vertical editorial line */}
        <div className="absolute left-[7%] top-0 hidden h-full w-px bg-white/[0.055] lg:block" />

        <div className="absolute right-[7%] top-0 hidden h-full w-px bg-white/[0.055] lg:block" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 py-7 sm:px-7 md:px-10 md:py-9 lg:px-16">
        {/* =======================================================
            TOP BAR
        ======================================================== */}

        <header className="flex items-center justify-between border-b border-white/[0.09] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#D6C39A]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/45">
              07 / Guest Experiences
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Live indicator */}
            <div className="hidden items-center gap-2 sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D6C39A]/30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D6C39A]" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
                Community Experience
              </span>
            </div>

            <span className="font-mono text-[8px] tracking-[0.18em] text-white/25">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </header>

        {/* =======================================================
            CONTENT
        ======================================================== */}

        <div className="flex flex-1 flex-col justify-center">
          {/* Intro */}
          <div className="grid gap-7 py-10 md:grid-cols-12 md:items-end md:gap-8 md:py-12 lg:py-14">
            <div className="md:col-span-3">
              <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/25">
                DRIPLABS / PEOPLE
              </p>

              <p className="mt-3 max-w-[190px] text-[10px] uppercase leading-5 tracking-[0.16em] text-white/40">
                Real experiences from the people who choose a more considered
                approach to wellness.
              </p>
            </div>

            <div className="md:col-span-9">
              <motion.h2
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 30,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[1100px] text-[clamp(3.2rem,7.5vw,8.5rem)] font-light leading-[0.84] tracking-[-0.075em]"
              >
                People remember
                <br />
                <span className="text-white/35">how it felt.</span>
              </motion.h2>
            </div>
          </div>

          {/* =====================================================
              TESTIMONIAL AREA
          ====================================================== */}

          <div className="border-y border-white/[0.09]">
            <div className="grid min-h-[390px] md:grid-cols-12 lg:min-h-[430px]">
              {/* Left index */}
              <div className="hidden border-r border-white/[0.08] md:col-span-2 md:flex md:flex-col md:justify-between md:p-6 lg:p-8">
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
                    Experience
                  </span>
                </div>

                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.number}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 15,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              y: -15,
                            }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                      }}
                      className="text-[clamp(4rem,7vw,7rem)] font-light leading-none tracking-[-0.08em] text-white/[0.13]"
                    >
                      {active.number}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Main quote */}
              <div className="relative flex flex-col justify-center px-1 py-10 sm:px-3 md:col-span-7 md:px-9 md:py-12 lg:px-12">
                {/* Live label */}
                <div className="mb-7 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D6C39A]/30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D6C39A]" />
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.26em] text-[#D6C39A]/70">
                    Guest perspective
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: 35,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            x: -35,
                          }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <blockquote className="max-w-[900px] text-[clamp(2rem,4.4vw,5.2rem)] font-light leading-[0.96] tracking-[-0.055em] text-[#F3F0E8]">
                      “{active.quote}”
                    </blockquote>

                    {/* Customer information */}
                    <div className="mt-9 flex flex-wrap items-end justify-between gap-7 md:mt-12">
                      <div className="flex items-start gap-4">
                        <span className="mt-2 h-px w-8 bg-[#D6C39A]" />

                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-white/80">
                            {active.name}
                          </p>

                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
                              {active.location}
                            </span>

                            <span className="h-2 w-px bg-white/15" />

                            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#D6C39A]/70">
                              {active.clientType}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-[12px] tracking-[0.16em] text-[#D6C39A]">
                        {active.rating}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right experience signals */}
              <div className="border-t border-white/[0.08] md:col-span-3 md:border-l md:border-t-0">
                <div className="flex h-full flex-col justify-between">
                  <div className="p-5 md:p-7 lg:p-8">
                    <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
                      What they noticed
                    </span>
                  </div>

                  <div className="px-5 pb-6 md:px-7 md:pb-7 lg:px-8 lg:pb-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 20,
                              }
                        }
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={
                          shouldReduceMotion
                            ? undefined
                            : {
                                opacity: 0,
                                y: -20,
                              }
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.5,
                        }}
                        className="space-y-3"
                      >
                        {active.experience.map((item, index) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 border-b border-white/[0.07] pb-3"
                          >
                            <span className="font-mono text-[7px] text-[#D6C39A]/50">
                              0{index + 1}
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.22em] text-white/55">
                              {item}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <div className="flex flex-col gap-6 py-7 sm:py-8 md:flex-row md:items-center md:justify-between">
            {/* Progress */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                Guest {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-1.5">
                {testimonials.map((testimonial, index) => {
                  const selected = index === activeIndex;

                  return (
                    <button
                      key={testimonial.number}
                      type="button"
                      aria-label={`View guest experience ${index + 1}`}
                      aria-pressed={selected}
                      onClick={() => goTo(index)}
                      className="group flex h-6 items-center"
                    >
                      <span
                        className={`block h-px transition-all duration-500 ${
                          selected
                            ? "w-12 bg-[#D6C39A]"
                            : "w-5 bg-white/20 group-hover:w-8 group-hover:bg-white/45"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
                {String(testimonials.length).padStart(2, "0")} experiences
              </span>
            </div>

            {/* Previous / Next */}
            <div className="flex items-center gap-7">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous guest experience"
                className="group flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.24em] text-white/35 transition-colors duration-300 hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Previous
              </button>

              <span className="h-3 w-px bg-white/15" />

              <button
                type="button"
                onClick={next}
                aria-label="Next guest experience"
                className="group flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.24em] text-white/60 transition-colors duration-300 hover:text-white"
              >
                Next
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM SIGNATURE
        ======================================================== */}

        <footer className="border-t border-white/[0.07] pt-5">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
              DRIPLABS / Guest Experience
            </p>

            <p className="font-mono text-[7px] uppercase tracking-[0.22em] text-white/15">
              Personal. Considered. Human.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}