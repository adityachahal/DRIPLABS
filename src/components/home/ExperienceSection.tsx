"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    number: "01",
    eyebrow: "IN-CENTRE",
    title: "A considered clinical wellness experience.",
    description:
      "Experience DRIPLABS within a physician-led clinical environment.",
    cta: "EXPLORE CENTRES",
    href: "/locations",
    image: "/images/experience/in-centre.png",
  },
  {
    number: "02",
    eyebrow: "DRIPLABS HOME",
    title: "Wellness, brought to you.",
    description:
      "A considered DRIPLABS experience delivered in the comfort of your home.",
    cta: "REQUEST A HOME VISIT",
    href: "/experience",
    image: "/images/experience/driplabs-home.png",
  },
  {
    number: "03",
    eyebrow: "WOMEN'S WELLNESS",
    title: "Wellness designed around women.",
    description:
      "A dedicated wellness pathway created around women's nutritional needs.",
    cta: "EXPLORE WOMEN'S WELLNESS",
    href: "/protocols/femme",
    image: "/images/experience/womens-wellness.png",
  },
];

export default function ExperienceSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[#F7FAFF] px-5 pb-3 pt-3 text-[#06152B] sm:px-6 sm:pt-4 md:px-10 md:pb-4 md:pt-5 lg:px-14 lg:pb-5 lg:pt-6"
    >
      {/* Ambient electric-blue light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-300px] h-[700px] w-[900px] -translate-x-1/2 rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.16) 0%, rgba(0,102,255,0.055) 38%, transparent 72%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-250px] left-[-250px] h-[600px] w-[600px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(22,131,255,0.07), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-300px] top-[35%] h-[650px] w-[650px] rounded-full blur-[190px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.08), transparent 70%)",
        }}
      />

      {/* Fine technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,102,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,102,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 92%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1680px]">
        {/* Section header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-4 grid gap-4 sm:mb-5 md:grid-cols-12 md:items-end md:gap-5"
        >
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <span
                className="h-px w-10 shrink-0 bg-[#0066FF]"
                style={{ boxShadow: "0 0 14px rgba(0,102,255,0.5)" }}
              />
              <span className="text-[8px] font-medium uppercase leading-none tracking-[0.24em] text-[#0066FF]/80 sm:text-[9px] sm:tracking-[0.28em]">
                02 — CHOOSE HOW YOU EXPERIENCE DRIPLABS
              </span>
            </div>
          </div>

          <div className="md:col-span-8 md:text-right">
            <h2 className="whitespace-nowrap font-[var(--font-heading)] text-[clamp(1.75rem,4.05vw,4.5rem)] font-light leading-[0.98] tracking-[-0.055em] text-[#06152B]">
              Your wellness{" "}
              <span className="text-[#0066FF]">your way.</span>
            </h2>
          </div>
        </motion.div>

        {/* Experience cards */}
        <div className="grid gap-3 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.number}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: reducedMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reducedMotion ? undefined : { y: -3 }}
              className="
                group relative isolate min-h-[250px] overflow-hidden
                rounded-2xl border border-white/[0.15]
                bg-[#06152B]/65
                shadow-[0_14px_44px_rgba(0,0,0,0.24)]
                backdrop-blur-md
                transition-[border-color,box-shadow] duration-500
                hover:border-white/30
                hover:shadow-[0_22px_54px_rgba(0,0,0,0.34)]
                sm:min-h-[270px] lg:min-h-[290px]
              "
            >
              {/* Background image with restrained zoom */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 z-0 overflow-hidden rounded-2xl"
                initial={false}
                whileHover={reducedMotion ? undefined : { scale: 1.045 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-[filter] duration-700 ease-out group-hover:blur-[3px]"
                  style={{ backgroundImage: `url(${experience.image})` }}
                />
              </motion.div>

              {/* Image contrast and depth */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-[#020812]/25 transition-colors duration-700 group-hover:bg-[#020812]/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[2] rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(2,8,18,.45) 0%, rgba(2,8,18,.08) 30%, rgba(2,8,18,.35) 53%, rgba(2,8,18,.91) 100%)",
                }}
              />

              {/* Electric-blue atmospheric light */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[3] rounded-2xl opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 78% 15%, rgba(0,102,255,.19), transparent 38%), linear-gradient(135deg, rgba(242,166,90,.04), transparent 58%)",
                }}
              />

              {/* Frosted-glass surface */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[4] rounded-2xl border border-white/[0.08] bg-white/[0.025]"
              />

              {/* Fine illuminated top edge */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 z-[5] h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(242,166,90,.8), transparent)",
                }}
              />

              {/* Card content */}
              <div className="relative z-10 flex min-h-[250px] flex-col p-4 text-white sm:min-h-[270px] sm:p-5 lg:min-h-[290px] lg:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[9px] font-medium tracking-[0.22em] text-white/75">
                    {experience.number}
                  </span>

                  <span className="rounded-full border border-[#8CCBFF]/30 bg-[#020812]/35 px-3 py-1.5 text-[7px] uppercase tracking-[0.18em] text-white/75 backdrop-blur-lg sm:text-[8px] sm:tracking-[0.22em]">
                    {experience.eyebrow}
                  </span>
                </div>

                <div className="mt-auto pt-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-7 bg-[#1683FF] shadow-[0_0_10px_rgba(0,102,255,.45)] transition-all duration-500 group-hover:w-11" />
                    <span className="text-[8px] font-medium uppercase tracking-[0.24em] text-[#8CCBFF]">
                      {experience.eyebrow}
                    </span>
                  </div>

                  <h3 className="max-w-[430px] font-[var(--font-heading)] text-[clamp(1.65rem,2.25vw,2.7rem)] font-light leading-[0.98] tracking-[-0.045em] text-[#F7FAFF]">
                    {experience.title}
                  </h3>

                  <p className="mt-3 max-w-[350px] text-[11px] leading-[1.55] text-white/70 sm:text-xs sm:leading-5">
                    {experience.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3 sm:mt-5 sm:gap-4">
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#8CCBFF]/40 bg-[#020812]/35 backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:border-[#8CCBFF]/70 sm:h-10 sm:w-10">
                      <span className="absolute h-2 w-2 rounded-full bg-[#0066FF] transition-transform duration-500 group-hover:scale-[5]" />
                      <svg
                        viewBox="0 0 24 24"
                        className="relative z-10 h-4 w-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12h13M13 6l6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="text-[8px] font-medium uppercase tracking-[0.19em] text-white/80 transition-colors duration-500 group-hover:text-white sm:text-[9px] sm:tracking-[0.22em]">
                      {experience.cta}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover light sweep */}
              <div className="pointer-events-none absolute inset-0 z-[6] overflow-hidden rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div
                  className="absolute -left-[30%] top-0 h-full w-[35%] rotate-[18deg] blur-2xl transition-transform duration-[1400ms] group-hover:translate-x-[390%]"
                  style={{ background: "rgba(140,203,255,0.09)" }}
                />
              </div>

              {/* Hover border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[7] rounded-2xl border border-[#4D9BFF]/0 transition-all duration-500 group-hover:border-[#4D9BFF]/60 group-hover:shadow-[inset_0_0_35px_rgba(0,102,255,.05)]"
              />

              {/* Whole-card destination link */}
              <Link
                href={experience.href}
                className="absolute inset-0 z-20 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#8CCBFF]"
                aria-label={experience.cta}
              />
            </motion.article>
          ))}
        </div>

        {/* Footer micro-information */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="mt-4 flex items-center justify-between border-t border-[#0066FF]/[0.16] pt-3 sm:mt-5 sm:pt-4"
        >
          <p className="text-[7px] uppercase tracking-[0.22em] text-[#06152B]/55 sm:text-[8px] sm:tracking-[0.24em]">
            Physician-led wellness
          </p>

          <p className="text-[7px] uppercase tracking-[0.22em] text-[#06152B]/55 sm:text-[8px] sm:tracking-[0.24em]">
            India
          </p>
        </motion.div>
      </div>

      {/* Bottom electric-blue divider */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,102,255,0.75) 50%, transparent 100%)",
          boxShadow: "0 0 18px rgba(0,102,255,0.18)",
        }}
      />
    </section>
  );
}
