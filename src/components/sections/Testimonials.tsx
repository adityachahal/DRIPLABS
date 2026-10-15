"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "The entire experience felt calm, considered and incredibly professional.",
    name: "DRIPLABS Guest",
    location: "India",
    theme: "Professional care",
    number: "01",
    initials: "DG",
    signal: "A considered experience",
  },
  {
    quote:
      "From the consultation to the treatment itself, everything felt effortless.",
    name: "DRIPLABS Guest",
    location: "India",
    theme: "Effortless experience",
    number: "02",
    initials: "DG",
    signal: "Consultation to treatment",
  },
  {
    quote:
      "A completely different kind of wellness experience. Beautiful space and attentive care.",
    name: "DRIPLABS Guest",
    location: "India",
    theme: "Attentive care",
    number: "03",
    initials: "DG",
    signal: "Thoughtful, attentive care",
  },
];

const experienceStats = [
  { value: "4.8", label: "Google rating" },
  { value: "06", label: "Locations across India" },
  { value: "6K+", label: "Infusions delivered" },
];

const easing = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#F3F7FF] text-[#28143D]"
    >
      {/* Soft lavender-to-ice-blue atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(112deg,#F6E7FC_0%,#F8F7FF_42%,#D9EEFF_100%)]" />
        <div className="absolute -left-[8%] top-[18%] h-[440px] w-[440px] rounded-full bg-[#C9A6FF]/35 blur-[105px]" />
        <div className="absolute right-[-4%] top-[6%] h-[480px] w-[480px] rounded-full bg-[#8BD8FF]/35 blur-[115px]" />
        <div className="absolute bottom-[-250px] left-[36%] h-[430px] w-[520px] rounded-full bg-white/80 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(72,49,105,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(72,49,105,0.07)_1px,transparent_1px)] [background-size:76px_76px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 pb-12 pt-14 sm:px-8 sm:pt-16 md:px-12 md:pb-14 lg:px-16 lg:pt-16">
        {/* Centered editorial heading */}
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, ease: easing }}
          className="mb-10 text-center md:mb-12"
        >
          <span className="mx-auto mb-4 block h-[2px] w-14 bg-[#8064FF]" />
          <p className="mb-3 text-[8px] font-medium uppercase tracking-[0.32em] text-[#7D6B91]">
            Guest experiences
          </p>
          <h2 className="font-light leading-[0.98] tracking-[-0.065em] text-[#351947] text-[clamp(2.5rem,5.2vw,5.2rem)]">
            Feel the difference.
          </h2>
        </motion.header>

        {/* Guest selector + featured glass review */}
        <div className="grid items-center gap-7 lg:grid-cols-[0.31fr_1.69fr] lg:gap-8 xl:gap-12">
          <nav
            aria-label="Choose a guest experience"
            className="order-2 flex items-center justify-center gap-4 lg:order-1 lg:flex-col lg:items-stretch lg:justify-center lg:gap-5"
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={testimonial.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Show ${testimonial.theme} guest experience`}
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  transition={{ duration: 0.35, ease: easing }}
                  className={`group flex min-w-0 items-center gap-3 text-left transition-opacity duration-500 lg:gap-4 ${
                    isActive ? "opacity-100" : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <span
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-[11px] font-medium tracking-[0.04em] transition-all duration-500 sm:h-14 sm:w-14 lg:h-[62px] lg:w-[62px] ${
                      isActive
                        ? "border-white/90 bg-white/65 text-[#8064A5] shadow-[0_8px_35px_rgba(122,87,170,0.16)] ring-1 ring-[#B9A0FF]/70"
                        : "border-white/80 bg-white/35 text-[#8E7CA2] group-hover:bg-white/60"
                    }`}
                  >
                    {testimonial.initials}
                    {isActive && (
                      <motion.span
                        layoutId="guest-active-dot"
                        className="absolute -right-0.5 top-0 h-2.5 w-2.5 rounded-full border-2 border-[#E9E8FF] bg-[#8064FF]"
                      />
                    )}
                  </span>

                  <span className="hidden min-w-0 sm:block">
                    <span
                      className={`block truncate text-[13px] tracking-[-0.02em] lg:text-[15px] ${
                        isActive ? "text-[#351947]" : "text-[#776488]"
                      }`}
                    >
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-[8px] uppercase tracking-[0.15em] text-[#9585A6]">
                      {testimonial.theme}
                    </span>
                  </span>
                  <span className="sr-only">
                    {testimonial.name} — {testimonial.theme}
                  </span>
                </motion.button>
              );
            })}
          </nav>

          <div className="relative order-1 min-w-0 lg:order-2">
            {/* Decorative quote mark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-7 z-10 font-serif text-[76px] leading-none text-[#B5A0FF]/70 sm:-left-3 sm:-top-8 sm:text-[90px]"
            >
              “
            </span>

            <div className="relative overflow-hidden rounded-[26px] border border-white/80 bg-white/[0.58] p-5 shadow-[0_24px_80px_rgba(74,53,110,0.09)] backdrop-blur-2xl sm:rounded-[30px] sm:p-7 md:p-9 lg:p-10 xl:p-11">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(255,255,255,0.24)_52%,rgba(199,220,255,0.18))]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#B8CFFF]/35 blur-[75px]"
              />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.number}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 14, filter: "blur(5px)" }
                  }
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -10, filter: "blur(4px)" }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.55,
                    ease: easing,
                  }}
                  className="relative"
                >
                  {/* Metadata row */}
                  <div className="grid gap-5 border-b border-[#6B5488]/[0.12] pb-6 sm:grid-cols-3 sm:gap-6">
                    <div>
                      <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#9A86AD]">
                        Guest experience
                      </p>
                      <p className="mt-2 text-[15px] leading-snug tracking-[-0.025em] text-[#351947] sm:text-[17px]">
                        {active.theme}
                      </p>
                    </div>
                    <div>
                      <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#9A86AD]">
                        Experience
                      </p>
                      <p className="mt-2 text-[15px] leading-snug tracking-[-0.025em] text-[#351947] sm:text-[17px]">
                        {active.signal}
                      </p>
                    </div>
                    <div>
                      <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#9A86AD]">
                        Guest location
                      </p>
                      <p className="mt-2 text-[15px] leading-snug tracking-[-0.025em] text-[#351947] sm:text-[17px]">
                        {active.location}
                      </p>
                    </div>
                  </div>

                  <blockquote className="mt-6 max-w-[1050px] text-[clamp(1.1rem,1.65vw,1.65rem)] font-medium leading-[1.65] tracking-[-0.025em] text-[#4E3B5C] sm:mt-7">
                    {active.quote}
                  </blockquote>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#6B5488]/[0.12] pt-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white/65 text-[9px] font-medium text-[#8064A5] shadow-sm">
                        {active.initials}
                      </span>
                      <div>
                        <p className="text-[11px] font-medium text-[#4B355D]">
                          {active.name}
                        </p>
                        <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#9B8AAA]">
                          {active.location}
                        </p>
                      </div>
                    </div>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#A091B2]">
                      {active.number} / 03
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress and manual controls */}
              <div className="relative mt-6 flex items-center gap-3 border-t border-[#6B5488]/[0.12] pt-5">
                <div className="flex flex-1 items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.number}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View guest experience ${index + 1}`}
                      aria-pressed={index === activeIndex}
                      className="group relative h-[3px] flex-1 overflow-hidden rounded-full bg-[#6B5488]/[0.12]"
                    >
                      <motion.span
                        className="absolute inset-y-0 left-0 rounded-full bg-[#8064FF]"
                        animate={{ width: index === activeIndex ? "100%" : "0%" }}
                        transition={{
                          duration: shouldReduceMotion ? 0.01 : 0.45,
                          ease: easing,
                        }}
                      />
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous guest experience"
                    onClick={() =>
                      setActiveIndex(
                        (current) =>
                          (current - 1 + testimonials.length) % testimonials.length,
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/90 bg-white/45 text-[#79638F] transition duration-300 hover:border-[#A992FF] hover:bg-white/85 hover:text-[#4A2866]"
                  >
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                      <path d="M15 10H5M9 6L5 10L9 14" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next guest experience"
                    onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/90 bg-white/45 text-[#79638F] transition duration-300 hover:border-[#A992FF] hover:bg-white/85 hover:text-[#4A2866]"
                  >
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                      <path d="M5 10H15M11 6L15 10L11 14" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preserve existing credibility figures */}
        <div className="mt-10 grid grid-cols-3 border-t border-[#6B5488]/15 pt-5 sm:mt-12 sm:pt-6">
          {experienceStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-3 first:pl-0 sm:px-6 ${
                index > 0 ? "border-l border-[#6B5488]/15" : ""
              }`}
            >
              <p className="text-[clamp(1.35rem,2.3vw,2rem)] font-light leading-none tracking-[-0.06em] text-[#351947]">
                {stat.value}
              </p>
              <p className="mt-2 text-[7px] uppercase leading-4 tracking-[0.15em] text-[#8D7A9E] sm:text-[8px] sm:tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
