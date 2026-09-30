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
    description:
      "A physician-led beginning, shaped around the individual.",
  },
  {
    number: "02",
    title: "Environment",
    description:
      "A calm clinical setting designed around comfort.",
  },
  {
    number: "03",
    title: "Care",
    description:
      "Attentive support throughout the session.",
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
      aria-label="5 star rating"
    >
      {[0, 1, 2, 3, 4].map((star) => (
        <span
          key={star}
          className="text-[14px] leading-none text-[#FFD45A]"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Arrow({
  direction,
}: {
  direction: "left" | "right";
}) {
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
        {/* Central blue atmosphere */}
        <div
          className="
            absolute
            left-1/2
            top-[28%]
            h-[560px]
            w-[560px]
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(0,102,255,0.10)_0%,rgba(0,102,255,0.025)_42%,transparent_70%)]
            blur-[34px]
          "
        />

        {/* Upper-right glow */}
        <div
          className="
            absolute
            -right-[180px]
            top-[5%]
            h-[460px]
            w-[460px]
            rounded-full
            bg-[radial-gradient(circle,rgba(22,131,255,0.07),transparent_68%)]
            blur-[24px]
          "
        />

        {/* Lower glow */}
        <div
          className="
            absolute
            bottom-[-300px]
            left-[18%]
            h-[600px]
            w-[650px]
            rounded-full
            bg-[radial-gradient(circle,rgba(77,155,255,0.045),transparent_70%)]
            blur-[34px]
          "
        />

        {/* Fine editorial grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:90px_90px]
          "
        />

        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-white/[0.025] lg:block" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1680px]
          px-6
          pt-10
          pb-16
          sm:px-8
          sm:pt-12
          sm:pb-20
          md:px-12
          md:pt-14
          md:pb-24
          lg:px-16
          lg:pt-16
          lg:pb-24
        "
      >
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-7 lg:grid-cols-12 lg:gap-8">
          {/* Section label */}

          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
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
              <span className="h-px w-8 bg-[#1683FF]" />

              <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/40">
                06 / Guest experiences
              </span>
            </div>
          </motion.div>

          {/* Heading */}

          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 28 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.85,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-8 lg:col-start-4"
          >
            <div className="max-w-[1050px]">
              <h2
                className="
                  text-[clamp(3.6rem,7.4vw,8.6rem)]
                  font-light
                  leading-[0.8]
                  tracking-[-0.075em]
                  text-white
                "
              >
                Feel the
                <br />
                <span className="text-white/85">
                  difference.
                </span>
              </h2>

              <p className="mt-6 max-w-[500px] text-[13px] leading-7 text-white/45 md:text-[14px]">
                The experience is designed to feel considered
                from the first consultation through to the final
                moment of care.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            REVIEW EXPERIENCE
        ========================================================== */}

        <div className="mt-10 border-t border-white/[0.08] lg:mt-14">
          <div className="grid lg:grid-cols-12">
            {/* =====================================================
                GOOGLE CREDIBILITY
            ====================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                border-b
                border-white/[0.08]
                py-8
                lg:col-span-3
                lg:border-b-0
                lg:border-r
                lg:py-11
                lg:pr-10
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/90">
                  <GoogleMark />
                </div>

                <div>
                  <p className="text-[10px] font-medium text-white/75">
                    Google
                  </p>

                  <p className="mt-0.5 text-[7px] uppercase tracking-[0.2em] text-white/30">
                    Guest rating
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-end gap-2">
                  <span
                    className="
                      text-[clamp(3.6rem,5.4vw,6rem)]
                      font-light
                      leading-none
                      tracking-[-0.075em]
                      text-white
                    "
                  >
                    4.8
                  </span>

                  <span className="pb-1.5 text-[10px] text-white/30">
                    / 5
                  </span>
                </div>

                <div className="mt-4">
                  <Stars />
                </div>

                <p className="mt-3 max-w-[190px] text-[9px] leading-5 text-white/30">
                  Google rating shown across the DRIPLABS
                  experience.
                </p>
              </div>

              <div className="my-8 h-px w-full bg-white/[0.07]" />

              <div className="grid grid-cols-2 gap-5 lg:grid-cols-1 lg:gap-5">
                <div>
                  <div className="text-[26px] font-light tracking-[-0.04em] text-white/90">
                    06
                  </div>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/30">
                    Locations across India
                  </p>
                </div>

                <div>
                  <div className="text-[26px] font-light tracking-[-0.04em] text-white/90">
                    6K+
                  </div>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/30">
                    Infusions delivered
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                FEATURED EXPERIENCE
            ====================================================== */}

            <div className="relative lg:col-span-9">
              {/* Ghost number */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`ghost-${active.number}`}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    pointer-events-none
                    absolute
                    right-5
                    top-0
                    select-none
                    text-[clamp(8rem,16vw,16rem)]
                    font-light
                    leading-none
                    tracking-[-0.1em]
                    text-white/[0.022]
                  "
                >
                  {active.number}
                </motion.div>
              </AnimatePresence>

              {/* Main review surface */}

              <div
                className="
                  relative
                  flex
                  min-h-[500px]
                  flex-col
                  justify-between
                  overflow-hidden
                  border
                  border-white/[0.07]
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012)_45%,rgba(0,102,255,0.025))]
                  p-7
                  sm:p-9
                  md:p-11
                  lg:p-14
                "
              >
                {/* Fine inner glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    top-[-120px]
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-[radial-gradient(circle,rgba(0,102,255,0.08),transparent_68%)]
                    blur-[25px]
                  "
                />

                {/* Top bar */}

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-[#1683FF]" />

                    <span className="text-[7px] uppercase tracking-[0.25em] text-white/30">
                      Guest experience
                    </span>
                  </div>

                  <span className="text-[8px] tabular-nums tracking-[0.2em] text-white/20">
                    {active.number} / 03
                  </span>
                </div>

                {/* Quote */}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.number}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -15 }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative max-w-[820px]"
                  >
                    <div className="mb-7 flex items-center gap-3">
                      <span className="text-[8px] uppercase tracking-[0.18em] text-[#4D9BFF]/70">
                        {active.theme}
                      </span>

                      <span className="h-px w-8 bg-white/10" />
                    </div>

                    <blockquote
                      className="
                        text-[clamp(2rem,3.8vw,4.8rem)]
                        font-light
                        leading-[1]
                        tracking-[-0.055em]
                        text-white
                      "
                    >
                      “{active.quote}”
                    </blockquote>

                    <div className="mt-8 flex items-center gap-4">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.035]
                        "
                      >
                        <span className="text-[10px] font-medium tracking-[0.08em] text-white/55">
                          DG
                        </span>
                      </div>

                      <div>
                        <p className="text-[9px] font-medium text-white/65">
                          {active.name}
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                            {active.location}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-[#1683FF]" />

                          <span className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                            {active.theme}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Controls */}

                <div className="relative mt-9 border-t border-white/[0.07] pt-5">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex flex-1 items-center gap-3">
                      {testimonials.map((testimonial, index) => (
                        <button
                          key={testimonial.number}
                          type="button"
                          aria-label={`View guest experience ${
                            index + 1
                          }`}
                          onClick={() => setActiveIndex(index)}
                          className="
                            group
                            relative
                            h-[2px]
                            flex-1
                            overflow-hidden
                            bg-white/10
                          "
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

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={goPrevious}
                        aria-label="Previous experience"
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.02]
                          text-white/45
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
                        aria-label="Next experience"
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.02]
                          text-white/45
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

                {/* Electric edge */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    top-0
                    hidden
                    w-px
                    bg-gradient-to-b
                    from-transparent
                    via-[#1683FF]/40
                    to-transparent
                    lg:block
                  "
                />
              </div>
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
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10
            border-t
            border-white/[0.08]
            pt-7
            md:mt-14
            md:pt-9
          "
        >
          <div className="grid gap-7 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="text-[7px] uppercase tracking-[0.28em] text-white/30">
                What guests notice
              </p>

              <p className="mt-3 max-w-[200px] text-[10px] leading-5 text-white/30">
                The qualities that shape the DRIPLABS
                experience.
              </p>
            </div>

            <div className="md:col-span-9">
              <div className="grid border-t border-white/[0.07] sm:grid-cols-3 sm:border-t-0">
                {experienceSignals.map((signal, index) => (
                  <motion.div
                    key={signal.number}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 18 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.6,
                      delay: shouldReduceMotion
                        ? 0
                        : index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      border-b
                      border-white/[0.07]
                      py-6
                      sm:border-b-0
                      sm:border-l
                      sm:px-7
                      sm:first:border-l-0
                      sm:first:pl-0
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] tabular-nums tracking-[0.2em] text-[#1683FF]/65">
                        {signal.number}
                      </span>

                      <span className="h-px w-7 bg-white/10 transition-all duration-500 group-hover:w-12 group-hover:bg-[#1683FF]/60" />
                    </div>

                    <h3 className="mt-5 text-[17px] font-light tracking-[-0.03em] text-white/90">
                      {signal.title}
                    </h3>

                    <p className="mt-2 max-w-[190px] text-[9px] leading-5 text-white/30">
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
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-11
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.08]
            pt-6
            md:mt-14
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_14px_rgba(0,102,255,0.75)]" />

            <span className="text-[7px] uppercase tracking-[0.25em] text-white/30">
              DRIPLABS / Care experience
            </span>
          </div>

          <p className="max-w-[460px] text-[9px] leading-5 text-white/25 md:text-right">
            Experience is personal. Every DRIPLABS journey
            begins with physician-led consideration and is
            shaped around the individual.
          </p>
        </motion.div>
      </div>
    </section>
  );
}