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
      className="relative overflow-hidden bg-[#F7F4EC] px-5 py-20 text-[#111318] sm:px-6 md:px-10 md:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1680px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          whileInView={
            reducedMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:items-end"
        >
          {/* LEFT LABEL */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B79A58]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-black/45">
                02 — CHOOSE HOW YOU EXPERIENCE DRIPLABS
              </span>
            </div>
          </div>

          {/* RIGHT TITLE */}
          <div className="md:col-span-7 md:text-right">
            <h2 className="font-[var(--font-heading)] text-[clamp(2.4rem,4.5vw,5rem)] font-light leading-[0.94] tracking-[-0.045em]">
              Your wellness.
              <br />
              <span className="italic text-black/55">
                Your way.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* EXPERIENCE CARDS */}
        <div className="grid gap-3 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.number}
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
                    }
              }
              whileInView={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[500px] overflow-hidden bg-[#111318] sm:min-h-[560px] lg:min-h-[620px]"
            >
              {/* WHOLE CARD LINK */}
              <Link
                href={experience.href}
                className="absolute inset-0 z-30"
                aria-label={experience.cta}
              />

              {/* IMAGE */}
              <motion.div
                className="absolute inset-0"
                initial={false}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        scale: 1.045,
                      }
                }
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${experience.image})`,
                  }}
                />
              </motion.div>

              {/* IMAGE DARKENING */}
              <div className="absolute inset-0 bg-black/20 transition-all duration-700 group-hover:bg-black/5" />

              {/* MAIN GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/5 to-black/90" />

              {/* SIDE GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

              {/* GOLD TOP LINE */}
              <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#D6BD78]/80 to-transparent opacity-80" />

              {/* CARD CONTENT */}
              <div className="relative z-20 flex h-full min-h-[500px] flex-col justify-between p-6 text-white sm:min-h-[560px] sm:p-8 lg:min-h-[620px] lg:p-9">

                {/* TOP META */}
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-medium tracking-[0.22em] text-white/65">
                    {experience.number}
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[8px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                    DRIPLABS
                  </span>
                </div>

                {/* BOTTOM CONTENT */}
                <div>

                  {/* EYEBROW */}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-7 bg-[#D6BD78]" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#E4D29A]">
                      {experience.eyebrow}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="max-w-[430px] font-[var(--font-heading)] text-[clamp(2rem,3vw,3.4rem)] font-light leading-[0.96] tracking-[-0.035em]">
                    {experience.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <div className="mt-5 max-w-[350px]">
                    <p className="text-sm leading-6 text-white/68">
                      {experience.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-7 flex items-center gap-4">

                    {/* INTERACTIVE CIRCLE */}
                    <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-[#D6BD78] group-hover:bg-[#D6BD78]">

                      <span className="absolute h-2 w-2 rounded-full bg-white transition-all duration-500 group-hover:scale-[5] group-hover:bg-[#111318]" />

                      <svg
                        viewBox="0 0 24 24"
                        className="relative z-10 h-4 w-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M5 12h13M13 6l6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    {/* CTA TEXT */}
                    <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/75 transition-colors duration-500 group-hover:text-white">
                      {experience.cta}
                    </span>
                  </div>
                </div>
              </div>

              {/* HOVER LIGHT SWEEP */}
              <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute -left-[30%] top-0 h-full w-[35%] rotate-[18deg] bg-white/10 blur-2xl transition-transform duration-[1400ms] group-hover:translate-x-[390%]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM MICRO INFORMATION */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={
            reducedMotion
              ? undefined
              : {
                  opacity: 1,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.45,
            duration: 0.7,
          }}
          className="mt-6 flex items-center justify-between border-t border-black/10 pt-5"
        >
          <p className="text-[8px] uppercase tracking-[0.24em] text-black/35">
            Physician-led wellness
          </p>

          <p className="text-[8px] uppercase tracking-[0.24em] text-black/35">
            India
          </p>
        </motion.div>
      </div>
    </section>
  );
}