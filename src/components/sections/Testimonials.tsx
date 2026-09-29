"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "The entire experience felt calm, considered and incredibly professional.",
    name: "DRIPLABS Guest",
    location: "India",
    theme: "Professional care",
    number: "01",
  },
  {
    quote:
      "From the consultation to the treatment itself, everything felt effortless.",
    name: "DRIPLABS Guest",
    location: "India",
    theme: "Effortless experience",
    number: "02",
  },
  {
    quote:
      "A completely different kind of wellness experience. Beautiful space and attentive care.",
    name: "DRIPLABS Guest",
    location: "India",
    theme: "Attentive care",
    number: "03",
  },
];

const experienceSignals = [
  {
    number: "01",
    title: "Consultation",
    description: "A considered beginning to the experience.",
  },
  {
    number: "02",
    title: "Environment",
    description: "A calm and intentional setting.",
  },
  {
    number: "03",
    title: "Care",
    description: "Attentive throughout the experience.",
  },
];

function GoogleMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M21.35 12.27c0-.71-.06-1.4-.18-2.06H12v3.9h5.24a4.48 4.48 0 0 1-1.94 2.94v2.44h3.14c1.84-1.69 2.91-4.18 2.91-7.22Z"
        fill="currentColor"
      />

      <path
        d="M12 21.5c2.63 0 4.84-.87 6.45-2.37l-3.14-2.44c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.52A9.74 9.74 0 0 0 12 21.5Z"
        fill="currentColor"
        opacity=".78"
      />

      <path
        d="M6.54 12.66A5.85 5.85 0 0 1 6.23 11c0-.58.1-1.14.31-1.66V6.82H3.3A9.74 9.74 0 0 0 2.25 11c0 1.57.38 3.06 1.05 4.18l3.24-2.52Z"
        fill="currentColor"
        opacity=".55"
      />

      <path
        d="M12 5.31c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 2.39 14.63 1.5 12 1.5a9.74 9.74 0 0 0-8.7 5.32l3.24 2.52C7.31 7.03 9.46 5.31 12 5.31Z"
        fill="currentColor"
        opacity=".9"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div
      className="flex items-center gap-[3px]"
      aria-label="5 star review"
    >
      {[0, 1, 2, 3, 4].map((star) => (
        <span
          key={star}
          className="text-[15px] leading-none text-[#FFD45A]"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <>
          <path
            d="M15 10H5"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <path
            d="M9 6L5 10L9 14"
            stroke="currentColor"
            strokeWidth="1.3"
          />
        </>
      ) : (
        <>
          <path
            d="M5 10H15"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <path
            d="M11 6L15 10L11 14"
            stroke="currentColor"
            strokeWidth="1.3"
          />
        </>
      )}
    </svg>
  );
}

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  /*
   * Automatic review rotation.
   * The experience pauses while the user interacts with the
   * navigation, then resumes naturally.
   */
  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1,
      );
    }, 7000);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#020812] text-[#F7FAFF]"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Main electric-blue atmosphere */}
        <div
          className="
            absolute
            left-[50%]
            top-[34%]
            h-[620px]
            w-[620px]
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(0,102,255,0.12)_0%,rgba(0,102,255,0.035)_38%,transparent_70%)]
            blur-[30px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            -right-[180px]
            top-[8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(22,131,255,0.08),transparent_68%)]
            blur-[20px]
          "
        />

        {/* Bottom atmosphere */}
        <div
          className="
            absolute
            bottom-[-260px]
            left-[15%]
            h-[600px]
            w-[700px]
            rounded-full
            bg-[radial-gradient(circle,rgba(77,155,255,0.055),transparent_70%)]
            blur-[30px]
          "
        />

        {/* Editorial grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Vertical center line */}
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-white/[0.035] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-6 py-28 sm:px-8 md:px-12 md:py-36 lg:px-16 lg:py-44">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Section number */}

          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#1683FF]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/45">
                06 / Guest experiences
              </span>
            </div>
          </motion.div>

          {/* Main heading */}

          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 35 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-8 lg:col-start-4"
          >
            <h2 className="max-w-[1050px] text-[clamp(4rem,8.2vw,9.5rem)] font-light leading-[0.8] tracking-[-0.075em]">
              Feel the
              <br />
              <span className="text-white/90">difference.</span>
            </h2>

            <p className="mt-10 max-w-[510px] text-[13px] leading-7 text-white/50 md:text-[14px]">
              A glimpse into how the DRIPLABS experience is described by
              the people who have experienced it.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            REVIEW EXPERIENCE
        ========================================================== */}

        <div className="mt-24 border-t border-white/[0.09] lg:mt-32">
          <div className="grid lg:grid-cols-12">
            {/* =====================================================
                LEFT — GOOGLE CREDIBILITY
            ====================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -25 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                border-b
                border-white/[0.09]
                py-10
                lg:col-span-3
                lg:border-b-0
                lg:border-r
                lg:py-14
                lg:pr-12
              "
            >
              {/* Google heading */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white">
                  <GoogleMark />
                </div>

                <div>
                  <p className="text-[10px] font-medium tracking-[0.04em] text-white/80">
                    Google
                  </p>

                  <p className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-white/35">
                    Guest rating
                  </p>
                </div>
              </div>

              {/* Rating */}

              <div className="mt-10">
                <div className="flex items-end gap-3">
                  <span className="text-[clamp(4rem,6vw,6.5rem)] font-light leading-none tracking-[-0.07em]">
                    4.8
                  </span>

                  <span className="pb-2 text-[11px] text-white/35">
                    / 5
                  </span>
                </div>

                <div className="mt-5">
                  <Stars />
                </div>

                <p className="mt-4 max-w-[190px] text-[10px] leading-5 text-white/35">
                  Google rating shown across the DRIPLABS experience.
                </p>
              </div>

              {/* Thin divider */}

              <div className="my-10 h-px w-full bg-white/[0.08]" />

              {/* Business proof */}

              <div className="space-y-7">
                <div>
                  <div className="text-[28px] font-light tracking-[-0.04em]">
                    06
                  </div>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                    Locations across India
                  </p>
                </div>

                <div>
                  <div className="text-[28px] font-light tracking-[-0.04em]">
                    6K+
                  </div>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                    Infusions delivered
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT — FEATURED REVIEW
            ====================================================== */}

            <div className="relative lg:col-span-9 lg:min-h-[590px]">
              {/* Large ghost number */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`ghost-${active.number}`}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-2
                    select-none
                    text-[clamp(9rem,18vw,18rem)]
                    font-light
                    leading-none
                    tracking-[-0.1em]
                    text-white/[0.025]
                  "
                >
                  {active.number}
                </motion.div>
              </AnimatePresence>

              <div className="relative flex min-h-[590px] flex-col justify-between p-8 sm:p-10 md:p-14 lg:p-16">
                {/* Review top bar */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-[#1683FF]" />

                    <span className="text-[8px] uppercase tracking-[0.25em] text-white/35">
                      Guest review
                    </span>
                  </div>

                  <span className="text-[9px] tabular-nums tracking-[0.2em] text-white/25">
                    {active.number} / 03
                  </span>
                </div>

                {/* Main quote */}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.number}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 25 }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -18 }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-[900px]"
                  >
                    {/* Google rating */}

                    <div className="mb-10 flex items-center gap-4">
                      <Stars />

                      <span className="h-3 w-px bg-white/15" />

                      <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                        Google review
                      </span>
                    </div>

                    {/* Quote */}

                    <blockquote className="text-[clamp(2.2rem,4.2vw,5.2rem)] font-light leading-[0.98] tracking-[-0.055em] text-white">
                      “{active.quote}”
                    </blockquote>

                    {/* Reviewer */}

                    <div className="mt-12 flex items-center gap-4">
                      {/* Initial avatar rather than invented photography */}

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.055]">
                        <span className="text-[11px] font-medium tracking-[0.08em] text-white/65">
                          DG
                        </span>
                      </div>

                      <div>
                        <p className="text-[10px] font-medium tracking-[0.04em] text-white/75">
                          {active.name}
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                            {active.location}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-[#1683FF]" />

                          <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                            {active.theme}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom controls */}

                <div className="mt-16 border-t border-white/[0.08] pt-6">
                  <div className="flex items-center justify-between gap-8">
                    {/* Progress */}

                    <div className="flex flex-1 items-center gap-3">
                      {testimonials.map((testimonial, index) => (
                        <button
                          key={testimonial.number}
                          type="button"
                          aria-label={`View guest review ${index + 1}`}
                          onClick={() => setActiveIndex(index)}
                          className="group relative h-[2px] flex-1 overflow-hidden bg-white/10"
                        >
                          <span
                            className={[
                              "absolute inset-y-0 left-0 bg-[#1683FF]",
                              "transition-all duration-700",
                              index === activeIndex
                                ? "w-full"
                                : "w-0 group-hover:w-full",
                            ].join(" ")}
                          />
                        </button>
                      ))}
                    </div>

                    {/* Navigation */}

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={goPrevious}
                        aria-label="Previous review"
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.025]
                          text-white/55
                          transition-all
                          duration-300
                          hover:border-[#1683FF]/60
                          hover:bg-[#0066FF]/10
                          hover:text-white
                        "
                      >
                        <Arrow direction="left" />
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next review"
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.025]
                          text-white/55
                          transition-all
                          duration-300
                          hover:border-[#1683FF]/60
                          hover:bg-[#0066FF]/10
                          hover:text-white
                        "
                      >
                        <Arrow direction="right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Electric edge */}

              <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-px bg-gradient-to-b from-transparent via-[#1683FF]/40 to-transparent lg:block" />
            </div>
          </div>
        </div>

        {/* =========================================================
            WHAT GUESTS NOTICE
        ========================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 border-t border-white/[0.09] pt-10 md:mt-28 md:pt-12"
        >
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            {/* Label */}

            <div className="md:col-span-3">
              <p className="text-[8px] uppercase tracking-[0.28em] text-white/35">
                What guests notice
              </p>

              <p className="mt-4 max-w-[190px] text-[11px] leading-5 text-white/35">
                The recurring qualities expressed across the guest
                experiences above.
              </p>
            </div>

            {/* Signals */}

            <div className="md:col-span-9">
              <div className="grid border-t border-white/[0.08] sm:grid-cols-3 sm:border-t-0">
                {experienceSignals.map((signal, index) => (
                  <motion.div
                    key={signal.number}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.65,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      border-b
                      border-white/[0.08]
                      py-7
                      sm:border-b-0
                      sm:border-l
                      sm:px-7
                      sm:first:border-l-0
                      sm:first:pl-0
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] tabular-nums tracking-[0.2em] text-[#1683FF]/70">
                        {signal.number}
                      </span>

                      <span className="h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-[#1683FF]/60" />
                    </div>

                    <h3 className="mt-7 text-[18px] font-light tracking-[-0.03em] text-white/90">
                      {signal.title}
                    </h3>

                    <p className="mt-3 max-w-[180px] text-[10px] leading-5 text-white/35">
                      {signal.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 flex flex-col gap-8 border-t border-white/[0.09] pt-8 md:mt-32 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_14px_rgba(0,102,255,0.8)]" />

            <span className="text-[8px] uppercase tracking-[0.25em] text-white/35">
              DRIPLABS / Guest experience
            </span>
          </div>

          <p className="max-w-[460px] text-[10px] leading-5 text-white/30 md:text-right">
            Experience is personal. Every DRIPLABS journey begins with
            physician-led consideration and is shaped around the individual.
          </p>
        </motion.div>
      </div>
    </section>
  );
}