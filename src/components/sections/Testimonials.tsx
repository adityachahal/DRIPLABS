"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "The entire experience felt calm, considered and incredibly professional.",
    name: "DRIPLABS Guest",
    location: "India",
  },
  {
    quote:
      "From the consultation to the treatment itself, everything felt effortless.",
    name: "DRIPLABS Guest",
    location: "India",
  },
  {
    quote:
      "A completely different kind of wellness experience. Beautiful space and attentive care.",
    name: "DRIPLABS Guest",
    location: "India",
  },
];

const stats = [
  {
    value: "06",
    label: "Locations across India",
  },
  {
    value: "4.8",
    label: "Google rating",
  },
  {
    value: "6K+",
    label: "Infusions delivered",
  },
];

const socialPlatforms = [
  {
    name: "Google Reviews",
    type: "google",
    detail: "★★★★★",
  },
  {
    name: "Instagram",
    type: "instagram",
    detail: "Community",
  },
  {
    name: "X",
    type: "x",
    detail: "Social",
  },
  {
    name: "Facebook",
    type: "facebook",
    detail: "Community",
  },
  {
    name: "LinkedIn",
    type: "linkedin",
    detail: "Professional",
  },
];

function SocialIcon({ type }: { type: string }) {
  if (type === "google") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
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
          d="M6.54 13.59A5.86 5.86 0 0 1 6.23 12c0-.55.1-1.08.31-1.59V7.89H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.06 1.05 4.11l3.24-2.52Z"
          fill="currentColor"
          opacity=".58"
        />
        <path
          d="M12 6.38c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.48 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.7 5.39l3.24 2.52C7.31 8.1 9.46 6.38 12 6.38Z"
          fill="currentColor"
          opacity=".92"
        />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.47 22H3.36l7.25-8.29L3 2h6.4l4.42 5.84L18.9 2Zm-1.09 17.77h1.72L8.47 4.12H6.63L17.81 19.77Z" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.92c0-.9.25-1.52 1.56-1.52h1.66V4.63c-.29-.04-1.28-.13-2.43-.13-2.4 0-4.05 1.47-4.05 4.17v2.23H8.03V14h2.2v8h3.27Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function SocialMarqueeItem({
  platform,
}: {
  platform: (typeof socialPlatforms)[number];
}) {
  return (
    <div className="flex shrink-0 items-center gap-4">
      <span className="text-white/35">
        <SocialIcon type={platform.type} />
      </span>

      <span className="text-[9px] uppercase tracking-[0.2em] text-white/65">
        {platform.name}
      </span>

      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#D6C39A]/70">
        {platform.detail}
      </span>

      <span className="mx-5 h-1 w-1 rounded-full bg-white/20" />
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const active = testimonials[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1,
      );
    }, 6500);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const marqueeItems = [...socialPlatforms, ...socialPlatforms];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-[#F2F0EA]">
      {/* =========================================================
          TESTIMONIAL INTRO
      ========================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Eyebrow */}

          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#D6C39A]" />

              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                Guest experiences
              </p>
            </div>
          </div>

          {/* Heading */}

          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 50,
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
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1000px] text-[clamp(4rem,8vw,9rem)] font-light leading-[0.78] tracking-[-0.075em]"
            >
              Feel the
              <br />
              difference.
            </motion.h2>
          </div>
        </div>

        {/* =========================================================
            FEATURED TESTIMONIAL
        ========================================================== */}

        <div className="relative mt-20 border-t border-white/[0.1]">
          {/* Meta */}

          <div className="flex items-center justify-between py-5">
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
              Guest / {String(activeIndex + 1).padStart(2, "0")}
            </p>

            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
              {String(testimonials.length).padStart(2, "0")} experiences
            </p>
          </div>

          {/* Quote */}

          <div className="relative min-h-[420px] overflow-hidden border-b border-white/[0.1] md:min-h-[500px]">
            {/* Decorative quotation */}

            <div className="pointer-events-none absolute -left-5 top-[-55px] select-none text-[18rem] font-light leading-none tracking-[-0.1em] text-white/[0.025] md:-left-8 md:top-[-90px] md:text-[28rem]">
              “
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 70,
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
                        x: -70,
                      }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex min-h-[420px] flex-col justify-center py-16 md:min-h-[500px] md:py-24"
              >
                <div className="max-w-[1180px]">
                  <blockquote className="text-[clamp(2.6rem,5.5vw,6.5rem)] font-light leading-[0.95] tracking-[-0.055em] text-[#F2F0EA]">
                    “{active.quote}”
                  </blockquote>
                </div>

                <div className="mt-14 flex items-center gap-5 md:mt-20">
                  <div className="h-px w-10 bg-[#D6C39A]" />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/55">
                      {active.name}
                    </p>

                    <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-white/25">
                      {active.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}

          <div className="flex flex-col justify-between gap-7 py-6 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => {
                const selected = index === activeIndex;

                return (
                  <button
                    key={testimonial.quote}
                    type="button"
                    aria-label={`View testimonial ${index + 1}`}
                    aria-pressed={selected}
                    onClick={() => setActiveIndex(index)}
                    className="group flex h-8 items-center"
                  >
                    <span
                      className={`h-px transition-all duration-500 ${
                        selected
                          ? "w-12 bg-[#D6C39A]"
                          : "w-5 bg-white/20 group-hover:w-8 group-hover:bg-white/40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-8">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() =>
                  setActiveIndex(
                    (current) =>
                      (current - 1 + testimonials.length) %
                      testimonials.length,
                  )
                }
                className="text-[9px] uppercase tracking-[0.22em] text-white/35 transition-colors duration-300 hover:text-white"
              >
                Previous
              </button>

              <span className="h-3 w-px bg-white/15" />

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() =>
                  setActiveIndex(
                    (current) => (current + 1) % testimonials.length,
                  )
                }
                className="text-[9px] uppercase tracking-[0.22em] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SOCIAL PROOF MARQUEE
      ========================================================== */}

      <div className="relative overflow-hidden border-y border-white/[0.1]">
        {/* Left fade */}

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0A0A0B] to-transparent md:w-40" />

        {/* Right fade */}

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0A0A0B] to-transparent md:w-40" />

        {/* Label */}

        <div className="border-b border-white/[0.07] px-6 py-4 md:px-10 lg:px-14">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between">
            <p className="text-[8px] uppercase tracking-[0.28em] text-white/25">
              DRIPLABS / Community
            </p>

            <p className="font-mono text-[7px] uppercase tracking-[0.22em] text-white/20">
              Social proof
            </p>
          </div>
        </div>

        {/* Moving track */}

        <div className="group relative flex overflow-hidden py-7">
          <motion.div
            className="flex shrink-0 items-center whitespace-nowrap"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: ["0%", "-50%"],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 28,
                    ease: "linear",
                    repeat: Infinity,
                  }
            }
          >
            {marqueeItems.map((platform, index) => (
              <SocialMarqueeItem
                key={`${platform.name}-${index}`}
                platform={platform}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          STATISTICS
      ========================================================== */}

      <div className="border-t border-white/[0.1]">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid md:grid-cols-12">
            {/* Brand */}

            <div className="border-b border-white/[0.1] px-6 py-10 md:col-span-3 md:border-b-0 md:border-r md:px-10 md:py-14 lg:px-14">
              <p className="text-[9px] uppercase tracking-[0.28em] text-white/35">
                DRIPLABS
              </p>

              <p className="mt-3 max-w-[150px] text-[9px] uppercase leading-5 tracking-[0.18em] text-white/25">
                Growing across India
              </p>
            </div>

            {/* Stats */}

            <div className="grid md:col-span-9 md:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 35,
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-white/[0.1] px-6 py-12 last:border-b-0 md:border-b-0 md:border-r md:px-10 md:py-14 md:last:border-r-0 lg:px-14"
                >
                  <div className="text-[clamp(5rem,9vw,9rem)] font-light leading-[0.78] tracking-[-0.085em] text-[#F2F0EA]">
                    {stat.value}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-px w-5 bg-[#D6C39A]/70" />

                    <p className="text-[8px] uppercase tracking-[0.22em] text-white/35">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Supporting copy */}

          <div className="border-t border-white/[0.1] px-6 py-10 md:px-10 lg:px-14 lg:py-14">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
                DRIPLABS / EXPERIENCE
              </p>

              <p className="max-w-lg text-sm leading-7 text-white/35">
                Every number represents a growing community of guests
                choosing a more considered approach to their wellness
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}