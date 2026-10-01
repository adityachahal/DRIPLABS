"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/* =========================================================
   EXPERIENCE DATA
========================================================= */

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

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

export default function ExperienceSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-5 pb-3 pt-8 sm:px-6 md:px-10 md:pb-4 md:pt-10 lg:px-14 lg:pb-5 lg:pt-12"
      style={{
        background: "#020812",
        color: "#F7FAFF",
      }}
    >
      {/* =====================================================
          AMBIENT BLUE LIGHT
      ===================================================== */}

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

      {/* =====================================================
          TECHNICAL GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(140,203,255,0.6) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(140,203,255,0.6) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "90px 90px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 92%)",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1680px]">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

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
          className="mb-8 grid gap-5 md:mb-10 md:grid-cols-12 md:items-end"
        >
          {/* =================================================
    LEFT LABEL
================================================= */}

<div className="md:col-span-5">
  <div className="relative -top-5 flex items-center gap-4">
    <span
      className="h-px w-10 shrink-0"
      style={{
        background: "#0066FF",
        boxShadow: "0 0 14px rgba(0,102,255,0.5)",
      }}
    />

    <span
      className="text-[9px] font-medium uppercase tracking-[0.28em] leading-none"
      style={{
        color: "rgba(140,203,255,0.75)",
      }}
    >
      02 — CHOOSE HOW YOU EXPERIENCE DRIPLABS
    </span>
  </div>
</div>

          {/* =================================================
              RIGHT TITLE
          ================================================= */}

          <div className="relative -top-5 md:-top-7 lg:-top-10 md:col-span-7 md:text-right">
            <h2
              className="font-[var(--font-heading)] text-[clamp(2.4rem,4.5vw,5rem)] font-light leading-[0.94] tracking-[-0.045em]"
              style={{
                color: "#F7FAFF",
              }}
            >
              Your wellness.
              <br />

              <span
                style={{
                  color: "#4D9BFF",
                }}
              >
                Your way.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* ===================================================
            EXPERIENCE CARDS
        =================================================== */}

        <div className="relative -top-10 grid gap-3 lg:grid-cols-3">
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
                delay: reducedMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[310px] overflow-hidden bg-[#06152B] sm:min-h-[330px] lg:min-h-[360px]"
            >
              {/* =================================================
                  WHOLE CARD LINK
              ================================================= */}

              <Link
                href={experience.href}
                className="absolute inset-0 z-30"
                aria-label={experience.cta}
              />

              {/* =================================================
                  IMAGE
              ================================================= */}

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

              {/* =================================================
                  DARK BLUE IMAGE TREATMENT
              ================================================= */}

              <div
                className="absolute inset-0 transition-all duration-700"
                style={{
                  background: "rgba(2,8,18,0.25)",
                }}
              />

              {/* =================================================
                  MAIN GRADIENT
              ================================================= */}

              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(
                      to bottom,
                      rgba(2,8,18,0.48) 0%,
                      rgba(2,8,18,0.08) 30%,
                      rgba(2,8,18,0.22) 48%,
                      rgba(2,8,18,0.94) 100%
                    )
                  `,
                }}
              />

              {/* =================================================
                  BLUE SIDE ATMOSPHERE
              ================================================= */}

              <div
                className="absolute inset-0 opacity-80 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: `
                    radial-gradient(
                      circle at 75% 18%,
                      rgba(0,102,255,0.22),
                      transparent 38%
                    ),
                    linear-gradient(
                      135deg,
                      rgba(0,102,255,0.04),
                      transparent 55%
                    )
                  `,
                }}
              />

              {/* =================================================
                  LEFT ELECTRIC BLUE EDGE
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  top-0
                  z-10
                  w-[2px]
                  origin-bottom
                  scale-y-0
                  transition-transform
                  duration-700
                  group-hover:scale-y-100
                "
                style={{
                  background:
                    "linear-gradient(to bottom, #4D9BFF, #0066FF, #1683FF)",
                  boxShadow: "0 0 20px rgba(0,102,255,0.65)",
                }}
              />

              {/* =================================================
                  TOP ELECTRIC BLUE LINE
              ================================================= */}

              <div
                className="absolute inset-x-0 top-0 z-10 h-px opacity-80"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(77,155,255,0.9), transparent)",
                }}
              />

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="relative z-20 flex h-full min-h-[310px] flex-col justify-between p-5 text-white sm:min-h-[330px] sm:p-6 lg:min-h-[360px] lg:p-7">

                {/* =================================================
                    TEXT GLOW
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[18%] left-[-10%] h-[48%] w-[80%] rounded-full opacity-80 blur-[65px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,102,255,0.26) 0%, rgba(22,131,255,0.13) 38%, transparent 72%)",
                  }}
                />

                {/* =================================================
                    TOP META
                ================================================= */}

                <div className="relative z-10 flex items-start justify-between">
                  <span
                    className="text-[10px] font-medium tracking-[0.22em]"
                    style={{
                      color: "rgba(247,250,255,0.72)",
                    }}
                  >
                    {experience.number}
                  </span>

                  <span
                    className="rounded-full border px-3 py-1.5 text-[8px] uppercase tracking-[0.22em] backdrop-blur-md"
                    style={{
                      borderColor: "rgba(140,203,255,0.25)",
                      background: "rgba(2,8,18,0.28)",
                      color: "rgba(247,250,255,0.72)",
                    }}
                  >
                    {experience.eyebrow === "IN-CENTRE"
                      ? "In-Centre"
                      : experience.eyebrow === "DRIPLABS HOME"
                        ? "Mobile IV / Home"
                        : "Women’s Wellness"}
                  </span>
                </div>

                {/* =================================================
                    BOTTOM CONTENT

                    EYEBROW REMOVED
                ================================================= */}

                <div className="relative z-10">

                  {/* =================================================
                      TITLE
                  ================================================= */}

                  <h3
                    className="max-w-[430px] font-[var(--font-heading)] text-[clamp(2rem,3vw,3.4rem)] font-light leading-[0.96] tracking-[-0.035em] drop-shadow-[0_2px_20px_rgba(0,102,255,0.38)]"
                    style={{
                      color: "#F7FAFF",
                    }}
                  >
                    {experience.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <div className="mt-4 max-w-[350px]">
                    <p
                      className="text-sm leading-6 drop-shadow-[0_1px_12px_rgba(0,0,0,0.9)]"
                      style={{
                        color: "rgba(247,250,255,0.72)",
                      }}
                    >
                      {experience.description}
                    </p>
                  </div>

                  {/* =================================================
                      CTA
                  ================================================= */}

                  <div className="mt-5 flex items-center gap-4">

                    {/* INTERACTIVE CIRCLE */}

                    <span
                      className="
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        border
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:scale-105
                      "
                      style={{
                        borderColor: "rgba(140,203,255,0.38)",
                        background: "rgba(2,8,18,0.24)",
                      }}
                    >
                      {/* Blue expanding circle */}

                      <span
                        className="
                          absolute
                          h-2
                          w-2
                          rounded-full
                          transition-all
                          duration-500
                          group-hover:scale-[5]
                        "
                        style={{
                          background: "#0066FF",
                        }}
                      />

                      {/* Arrow */}

                      <svg
                        viewBox="0 0 24 24"
                        className="relative z-10 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        style={{
                          color: "#F7FAFF",
                        }}
                      >
                        <path
                          d="M5 12h13M13 6l6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    {/* CTA TEXT */}

                    <span
                      className="text-[9px] font-medium uppercase tracking-[0.24em] transition-colors duration-500 group-hover:text-white"
                      style={{
                        color: "rgba(247,250,255,0.75)",
                      }}
                    >
                      {experience.cta}
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  HOVER LIGHT SWEEP
              ================================================= */}

              <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div
                  className="
                    absolute
                    -left-[30%]
                    top-0
                    h-full
                    w-[35%]
                    rotate-[18deg]
                    blur-2xl
                    transition-transform
                    duration-[1400ms]
                    group-hover:translate-x-[390%]
                  "
                  style={{
                    background: "rgba(140,203,255,0.09)",
                  }}
                />
              </div>

              {/* =================================================
                  HOVER BORDER
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  border
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
                style={{
                  borderColor: "rgba(0,102,255,0.62)",
                  boxShadow:
                    "inset 0 0 35px rgba(0,102,255,0.035)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM MICRO INFORMATION
        ===================================================== */}

        <motion.div
  initial={reducedMotion ? false : { opacity: 0 }}
  whileInView={reducedMotion ? undefined : { opacity: 1 }}
  viewport={{ once: true }}
  transition={{
    delay: 0.45,
    duration: 0.7,
  }}
  className="relative -top-18 mt-0 flex items-center justify-between pt-3"
>

</motion.div>
          
       
      </div>

      {/* =====================================================
          BOTTOM ELECTRIC BLUE DIVIDER
      ===================================================== */}

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