"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";

/* =========================================================
   COLORS
========================================================= */

const C = {
  midnight: "#020812",
  deep: "#06152B",
  ocean: "#08203A",
  black: "#01050B",

  blue: "#0066FF",
  blueBright: "#1683FF",
  blueSoft: "#4D9BFF",
  ice: "#8CCBFF",

  white: "#F7FAFF",
  soft: "rgba(247,250,255,.68)",
  muted: "rgba(247,250,255,.42)",
  faint: "rgba(247,250,255,.12)",
  faintBlue: "rgba(140,203,255,.14)",
};

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
    details: [
      "Physician-led wellness",
      "Considered clinical environment",
      "Personalised protocol pathway",
      "Verified administration",
    ],
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
    details: [
      "Wellness delivered to your home",
      "Physician-led pathway",
      "Same considered experience",
      "Designed around your schedule",
    ],
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
    details: [
      "Dedicated women's pathway",
      "Considered nutritional support",
      "Personalised wellness approach",
      "Physician-led experience",
    ],
  },
];

const journey = [
  {
    number: "01",
    title: "Consult",
    short: "Understand your goals",
    description:
      "Begin with a considered conversation around your individual wellness context and goals.",
  },
  {
    number: "02",
    title: "Personalise",
    short: "A protocol designed for you",
    description:
      "Your wellness pathway is shaped around your needs rather than selected from a one-size-fits-all menu.",
  },
  {
    number: "03",
    title: "Experience",
    short: "In-centre or at home",
    description:
      "Experience DRIPLABS within our centres or through the home-wellness pathway.",
  },
  {
    number: "04",
    title: "Follow-up",
    short: "Track your progress",
    description:
      "The relationship continues beyond the session through follow-up and an ongoing wellness journey.",
  },
];

const wellnessPaths = [
  {
    name: "Skin & Beauty",
    number: "01",
    protocols: "GLAMOUR® · RADIANCE® · RESTORE®",
    description:
      "Antioxidant, collagen and micronutrient support for skin & hair.",
  },
  {
    name: "Longevity & Cellular Health",
    number: "02",
    protocols: "RENEW® · APEX® · NADEX® · METHYBLU®",
    description:
      "NAD⁺-pathway, mitochondrial and healthy-aging nutrition.",
  },
  {
    name: "Metabolic & Performance",
    number: "03",
    protocols:
      "SHRINK® · REFUEL® · FIT® · REBUILD® · PERFORMANCE X®",
    description:
      "Energy metabolism, active-lifestyle and post-exertion nutrition.",
  },
  {
    name: "Digestive & Systemic",
    number: "04",
    protocols: "GUT+®",
    description:
      "Gut-mucosal amino acid & micronutrient nutrition.",
  },
  {
    name: "Women's Wellness",
    number: "05",
    protocols: "FEMME®",
    description:
      "Iron, folate & B12 nutrition for women's wellbeing.",
  },
  {
    name: "Recovery & Immune",
    number: "06",
    protocols: "REACTIVATE® · BOUNCE BACK® · RECOVER+®",
    description:
      "Rehydration, immune-nutritional and systemic recovery support.",
  },
  {
    name: "Cognitive & Neuro",
    number: "07",
    protocols: "FOCUS®",
    description:
      "Neuronal energy metabolism & mental-clarity nutrition.",
  },
  {
    name: "Musculoskeletal",
    number: "08",
    protocols: "MOVE®",
    description:
      "Bone, muscle & connective-tissue nutrition.",
  },
];

const trustPillars = [
  {
    number: "01",
    title: "Physician-led",
    description: "Care by experts",
  },
  {
    number: "02",
    title: "Pharma-grade",
    description: "Premium quality",
  },
  {
    number: "03",
    title: "Traceable",
    description: "Full transparency",
  },
  {
    number: "04",
    title: "Made in India",
    description: "Global standards",
  },
];

const standardSteps = [
  {
    number: "01",
    title: "Medical Intake & Lab",
  },
  {
    number: "02",
    title: "Bespoke Wellness Plan",
  },
  {
    number: "03",
    title: "Manufacturer Traceability",
  },
  {
    number: "04",
    title: "Testing",
  },
  {
    number: "05",
    title: "Select",
  },
  {
    number: "06",
    title: "Documentation",
  },
  {
    number: "07",
    title: "Physician Supervision",
  },
  {
    number: "08",
    title: "Follow-up",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ExperiencePage() {
  const reducedMotion = useReducedMotion();

  const [selectedExperience, setSelectedExperience] = useState(0);
  const [selectedJourney, setSelectedJourney] = useState(0);
  const [selectedPath, setSelectedPath] = useState(1);
  const [selectedStandard, setSelectedStandard] = useState(0);

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: C.midnight,
        color: C.white,
      }}
    >
      <Navbar />

      {/* =====================================================
          01 — HERO
      ===================================================== */}

      <section className="relative min-h-[88vh] overflow-hidden bg-[#020812]">
        {/* Deep background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 78% 22%,
                rgba(0,102,255,.18),
                transparent 28%
              ),
              radial-gradient(
                circle at 15% 80%,
                rgba(22,131,255,.07),
                transparent 28%
              ),
              linear-gradient(
                135deg,
                ${C.midnight} 0%,
                ${C.deep} 52%,
                ${C.black} 100%
              )
            `,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(140,203,255,.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(140,203,255,.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Vertical blue atmosphere */}
        <div
          className="pointer-events-none absolute right-[8%] top-[12%] h-[65vh] w-px opacity-60"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0066FF, transparent)",
          }}
        />

        <div
          className="pointer-events-none absolute right-[4%] top-[28%] h-[400px] w-[400px] rounded-full blur-[150px]"
          style={{
            background: "rgba(0,102,255,.07)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-[35%]"
          style={{
            background:
              "linear-gradient(to top, #020812, transparent)",
          }}
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1680px] flex-col justify-end px-5 pb-14 pt-32 sm:px-6 md:px-10 md:pb-20 lg:px-14">
          <Reveal reducedMotion={reducedMotion}>
            <div className="mb-7 flex items-center gap-4">
              <span
                className="h-px w-12"
                style={{ background: C.blue }}
              />

              <span
                className="text-[9px] uppercase tracking-[.3em]"
                style={{ color: C.ice }}
              >
                01 — EXPERIENCE DRIPLABS
              </span>
            </div>

            <div className="grid gap-12 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <h1
                  className="font-[var(--font-heading)] text-[clamp(5rem,12vw,12rem)] font-light leading-[.72] tracking-[-.075em]"
                  style={{ color: C.white }}
                >
                  Experience
                  <br />
                  <span style={{ color: C.blueSoft }}>
                    DRIPLABS.
                  </span>
                </h1>
              </div>

              <div className="md:col-span-4 md:pb-2">
                <p
                  className="max-w-md text-[14px] leading-7"
                  style={{ color: C.soft }}
                >
                  A physician-led wellness experience designed around how
                  you want to experience DRIPLABS — in-centre, at home, or
                  through a dedicated women&apos;s wellness pathway.
                </p>

                <a
                  href="#choose"
                  className="group mt-8 inline-flex items-center gap-5 text-[8px] uppercase tracking-[.28em]"
                  style={{ color: C.white }}
                >
                  Explore the experience

                  <span
                    className="transition-transform duration-300 group-hover:translate-y-1"
                    style={{ color: C.blueSoft }}
                  >
                    ↓
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 border-t border-[rgba(140,203,255,.12)] pt-5 sm:grid-cols-4">
              <HeroMeta
                label="APPROACH"
                value="PHYSICIAN-LED"
              />
              <HeroMeta
                label="FORMAT"
                value="IN-CENTRE / HOME"
              />
              <HeroMeta
                label="PATHWAY"
                value="PERSONALISED"
              />
              <HeroMeta
                label="DRIPLABS"
                value="01 / EXPERIENCE"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          02 — CHOOSE EXPERIENCE
      ===================================================== */}

      <section
        id="choose"
        className="relative px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-14 lg:py-40"
        style={{
          background: C.deep,
        }}
      >
        <Glow />

        <div className="relative mx-auto max-w-[1680px]">
          <SectionLabel
            number="02"
            text="CHOOSE HOW YOU EXPERIENCE DRIPLABS"
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Selector */}
            <div className="lg:col-span-4">
              <h2
                className="max-w-lg font-[var(--font-heading)] text-[clamp(2.8rem,5vw,5.5rem)] font-light leading-[.86] tracking-[-.06em]"
                style={{ color: C.white }}
              >
                Your wellness.
                <br />
                <span style={{ color: "rgba(247,250,255,.28)" }}>
                  Your way.
                </span>
              </h2>

              <div className="mt-12 space-y-1">
                {experiences.map((item, index) => {
                  const active = selectedExperience === index;

                  return (
                    <button
                      key={item.number}
                      onClick={() => setSelectedExperience(index)}
                      className="group flex w-full items-center border-b py-5 text-left transition-all duration-500"
                      style={{
                        borderColor: active
                          ? C.blue
                          : C.faintBlue,
                      }}
                    >
                      <span
                        className="mr-5 text-[9px] tracking-[.2em]"
                        style={{
                          color: active
                            ? C.blueSoft
                            : C.muted,
                        }}
                      >
                        {item.number}
                      </span>

                      <span
                        className="text-[11px] uppercase tracking-[.18em] transition-colors duration-300"
                        style={{
                          color: active
                            ? C.white
                            : C.muted,
                        }}
                      >
                        {item.eyebrow}
                      </span>

                      <span
                        className="ml-auto transition-transform duration-300"
                        style={{
                          color: active
                            ? C.blueSoft
                            : C.muted,
                          transform: active
                            ? "translateX(3px)"
                            : "none",
                        }}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic panel */}
            <motion.div
              key={selectedExperience}
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 20,
                    }
              }
              animate={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                    }
              }
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-8"
            >
              <div
                className="grid overflow-hidden border md:grid-cols-2"
                style={{
                  borderColor: C.faintBlue,
                  background: "rgba(1,5,11,.35)",
                }}
              >
                {/* Image */}
                <div className="group relative min-h-[420px] overflow-hidden">
                  <Image
                    src={experiences[selectedExperience].image}
                    alt={experiences[selectedExperience].title}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  />

                  {/* Midnight treatment */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                        linear-gradient(
                          to bottom,
                          rgba(2,8,18,.12),
                          rgba(2,8,18,.18) 35%,
                          rgba(2,8,18,.88) 100%
                        )
                      `,
                    }}
                  />

                  {/* Blue atmosphere */}
                  <div
                    className="absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 70% 20%, rgba(0,102,255,.18), transparent 42%)",
                    }}
                  />

                  {/* Blue side rail */}
                  <div
                    className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 transition-transform duration-700 group-hover:scale-y-100"
                    style={{
                      background: C.blue,
                    }}
                  />

                  <div className="absolute bottom-6 left-6">
                    <span
                      className="text-[8px] uppercase tracking-[.3em]"
                      style={{ color: C.ice }}
                    >
                      {experiences[selectedExperience].number} /{" "}
                      {experiences[selectedExperience].eyebrow}
                    </span>
                  </div>
                </div>

                {/* Information */}
                <div className="flex min-h-[420px] flex-col justify-between p-7 md:p-10">
                  <div>
                    <span
                      className="text-[8px] uppercase tracking-[.3em]"
                      style={{ color: C.muted }}
                    >
                      THE EXPERIENCE
                    </span>

                    <h3
                      className="mt-6 font-[var(--font-heading)] text-[clamp(2.2rem,3.5vw,4rem)] font-light leading-[.9] tracking-[-.05em]"
                      style={{ color: C.white }}
                    >
                      {experiences[selectedExperience].title}
                    </h3>

                    <p
                      className="mt-7 text-[13px] leading-7"
                      style={{ color: C.soft }}
                    >
                      {experiences[selectedExperience].description}
                    </p>

                    <div className="mt-8 space-y-3">
                      {experiences[selectedExperience].details.map(
                        (detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-3 text-[10px] uppercase tracking-[.15em]"
                            style={{ color: C.soft }}
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{
                                background: C.blue,
                                boxShadow:
                                  "0 0 12px rgba(0,102,255,.65)",
                              }}
                            />

                            {detail}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <Link
                    href={experiences[selectedExperience].href}
                    className="group mt-12 flex items-center justify-between border-t pt-5 text-[8px] uppercase tracking-[.25em]"
                    style={{
                      borderColor: C.faintBlue,
                      color: C.white,
                    }}
                  >
                    <span>
                      {experiences[selectedExperience].cta}
                    </span>

                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: C.blueSoft }}
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — YOUR JOURNEY
      ===================================================== */}

      <section
        className="relative overflow-hidden px-5 py-24 sm:px-6 md:px-10 md:py-36 lg:px-14 lg:py-44"
        style={{
          background: C.black,
        }}
      >
        <div
          className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{
            background: "rgba(0,102,255,.12)",
          }}
        />

        <div className="relative mx-auto max-w-[1680px]">
          <SectionLabel number="03" text="YOUR JOURNEY" />

          <div className="mt-10 grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2
                className="font-[var(--font-heading)] text-[clamp(3.2rem,6vw,6.5rem)] font-light leading-[.84] tracking-[-.065em]"
                style={{ color: C.white }}
              >
                From first
                <br />
                conversation
                <br />
                <span style={{ color: C.blueSoft }}>
                  to follow-up.
                </span>
              </h2>

              <p
                className="mt-8 max-w-md text-[13px] leading-7"
                style={{ color: C.muted }}
              >
                Four considered steps create a clear path through the DRIPLABS
                experience.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div
                className="border-t"
                style={{ borderColor: C.faintBlue }}
              >
                {journey.map((step, index) => {
                  const active = selectedJourney === index;

                  return (
                    <button
                      key={step.number}
                      onClick={() => setSelectedJourney(index)}
                      className="w-full border-b text-left transition-all duration-500"
                      style={{
                        borderColor: C.faintBlue,
                      }}
                    >
                      <div className="flex items-start gap-5 py-7 md:gap-8 md:py-9">
                        <span
                          className="pt-1 text-[9px] tracking-[.2em]"
                          style={{
                            color: active
                              ? C.blueSoft
                              : C.muted,
                          }}
                        >
                          {step.number}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-5">
                            <div>
                              <h3
                                className="font-[var(--font-heading)] text-[clamp(2rem,3vw,3rem)] font-light leading-none tracking-[-.04em]"
                                style={{
                                  color: active
                                    ? C.white
                                    : "rgba(247,250,255,.58)",
                                }}
                              >
                                {step.title}
                              </h3>

                              <p
                                className="mt-2 text-[9px] uppercase tracking-[.18em]"
                                style={{
                                  color: active
                                    ? C.blueSoft
                                    : C.muted,
                                }}
                              >
                                {step.short}
                              </p>
                            </div>

                            <span
                              className="text-lg transition-transform duration-500"
                              style={{
                                color: active
                                  ? C.blueSoft
                                  : C.muted,
                                transform: active
                                  ? "rotate(45deg)"
                                  : "none",
                              }}
                            >
                              +
                            </span>
                          </div>

                          <motion.div
                            initial={false}
                            animate={{
                              height: active ? "auto" : 0,
                              opacity: active ? 1 : 0,
                            }}
                            className="overflow-hidden"
                          >
                            <p
                              className="max-w-xl pt-5 text-[12px] leading-6"
                              style={{ color: C.muted }}
                            >
                              {step.description}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — WELLNESS PATHS
      ===================================================== */}

      <section
        className="relative px-5 py-24 sm:px-6 md:px-10 md:py-36 lg:px-14 lg:py-44"
        style={{
          background: C.deep,
        }}
      >
        <div
          className="pointer-events-none absolute left-[30%] top-0 h-[500px] w-[500px] rounded-full blur-[170px]"
          style={{
            background: "rgba(0,102,255,.055)",
          }}
        />

        <div className="relative mx-auto max-w-[1680px]">
          <SectionLabel
            number="04"
            text="FIND YOUR WELLNESS PATH"
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2
                className="font-[var(--font-heading)] text-[clamp(3rem,5vw,5.5rem)] font-light leading-[.85] tracking-[-.06em]"
                style={{ color: C.white }}
              >
                Eight paths.
                <br />
                <span style={{ color: "rgba(247,250,255,.28)" }}>
                  One system.
                </span>
              </h2>

              <p
                className="mt-8 max-w-sm text-[13px] leading-7"
                style={{ color: C.muted }}
              >
                Explore the wellness families that form the DRIPLABS protocol
                system.
              </p>

              <Link
                href="/protocols"
                className="group mt-8 inline-flex items-center gap-6 border px-6 py-4 text-[8px] uppercase tracking-[.25em] transition-all duration-300 hover:border-[#0066FF] hover:bg-[#0066FF]/[.05]"
                style={{
                  borderColor: C.faintBlue,
                  color: C.white,
                }}
              >
                Explore all protocols

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: C.blueSoft }}
                >
                  →
                </span>
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div
                className="grid border-l border-t sm:grid-cols-2"
                style={{ borderColor: C.faintBlue }}
              >
                {wellnessPaths.map((path, index) => {
                  const active = selectedPath === index;

                  return (
                    <button
                      key={path.name}
                      onClick={() => setSelectedPath(index)}
                      className="group min-h-[190px] border-b border-r p-6 text-left transition-all duration-500 md:p-8"
                      style={{
                        borderColor: C.faintBlue,
                        background: active
                          ? "linear-gradient(145deg, rgba(0,102,255,.12), rgba(0,102,255,.035))"
                          : "transparent",
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className="text-[8px] tracking-[.25em]"
                          style={{
                            color: active
                              ? C.blueSoft
                              : C.muted,
                          }}
                        >
                          {path.number}
                        </span>

                        <span
                          className="text-lg transition-transform duration-500"
                          style={{
                            color: active
                              ? C.blueSoft
                              : C.muted,
                            transform: active
                              ? "rotate(45deg)"
                              : "none",
                          }}
                        >
                          +
                        </span>
                      </div>

                      <h3
                        className="mt-8 font-[var(--font-heading)] text-[clamp(1.7rem,2.5vw,2.5rem)] font-light leading-[.95] tracking-[-.035em]"
                        style={{
                          color: active
                            ? C.white
                            : "rgba(247,250,255,.72)",
                        }}
                      >
                        {path.name}
                      </h3>

                      <motion.div
                        initial={false}
                        animate={{
                          height: active ? "auto" : 0,
                          opacity: active ? 1 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pt-5 text-[10px] leading-5"
                          style={{ color: C.muted }}
                        >
                          {path.description}
                        </p>

                        <p
                          className="pt-3 text-[8px] uppercase tracking-[.14em]"
                          style={{ color: C.blueSoft }}
                        >
                          {path.protocols}
                        </p>
                      </motion.div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — WHY DRIPLABS
      ===================================================== */}

      <section
        className="relative overflow-hidden px-5 py-24 sm:px-6 md:px-10 md:py-36 lg:px-14 lg:py-44"
        style={{
          background: C.midnight,
        }}
      >
        <div
          className="absolute right-[-250px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-[170px]"
          style={{
            background: "rgba(0,102,255,.09)",
          }}
        />

        <div className="relative mx-auto max-w-[1680px]">
          <SectionLabel
            number="05"
            text="WHY DRIPLABS"
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2
                className="font-[var(--font-heading)] text-[clamp(3rem,5vw,5.5rem)] font-light leading-[.85] tracking-[-.06em]"
                style={{ color: C.white }}
              >
                A system you can
                <br />
                <span style={{ color: C.blueSoft }}>
                  understand.
                </span>
              </h2>

              <p
                className="mt-8 max-w-md text-[13px] leading-7"
                style={{ color: C.muted }}
              >
                The experience is designed around clarity, quality,
                transparency and physician-led care.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div
                className="grid border-l border-t sm:grid-cols-2"
                style={{ borderColor: C.faintBlue }}
              >
                {trustPillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="group min-h-[220px] border-b border-r p-7 transition-all duration-500 hover:bg-[#06152B] md:p-9"
                    style={{ borderColor: C.faintBlue }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[8px] tracking-[.25em]"
                        style={{ color: C.blueSoft }}
                      >
                        {pillar.number}
                      </span>

                      <span
                        className="h-px w-8 transition-all duration-500 group-hover:w-14"
                        style={{ background: C.blue }}
                      />
                    </div>

                    <h3
                      className="mt-12 font-[var(--font-heading)] text-[2.4rem] font-light leading-none tracking-[-.04em]"
                      style={{ color: C.white }}
                    >
                      {pillar.title}
                    </h3>

                    <p
                      className="mt-4 text-[9px] uppercase tracking-[.2em]"
                      style={{ color: C.muted }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — INSIDE THE EXPERIENCE
      ===================================================== */}

      <section
        className="relative overflow-hidden px-5 py-24 sm:px-6 md:px-10 md:py-36 lg:px-14 lg:py-44"
        style={{
          background: `
            radial-gradient(
              circle at 50% 40%,
              rgba(0,102,255,.13),
              transparent 32%
            ),
            ${C.ocean}
          `,
        }}
      >
        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(140,203,255,.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(140,203,255,.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative mx-auto max-w-[1680px]">
          <SectionLabel
            number="06"
            text="INSIDE THE EXPERIENCE"
          />

          <div className="mt-10 text-center">
            <h2
              className="mx-auto max-w-5xl font-[var(--font-heading)] text-[clamp(3.2rem,7vw,7rem)] font-light leading-[.82] tracking-[-.065em]"
              style={{ color: C.white }}
            >
              Not just a drip.
              <br />
              <span style={{ color: C.blueSoft }}>
                A considered journey.
              </span>
            </h2>

            <p
              className="mx-auto mt-8 max-w-xl text-[13px] leading-7"
              style={{ color: C.muted }}
            >
              From arrival to follow-up, every stage contributes to the
              experience.
            </p>
          </div>

          <div className="relative mx-auto mt-20 max-w-5xl">
            <div
              className="absolute left-0 right-0 top-1/2 hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(140,203,255,.18), transparent)",
              }}
            />

            <div className="grid gap-10 md:grid-cols-6">
              {[
                ["01", "ARRIVE"],
                ["02", "CONSULT"],
                ["03", "SELECT"],
                ["04", "RECEIVE"],
                ["05", "RESET"],
                ["06", "FOLLOW-UP"],
              ].map(([number, title], index) => (
                <motion.div
                  key={number}
                  initial={
                    reducedMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
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
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: reducedMotion
                      ? 0
                      : index * 0.07,
                  }}
                  className="relative text-center"
                >
                  <div
                    className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border bg-[#08203A] shadow-[0_0_30px_rgba(0,102,255,.08)]"
                    style={{
                      borderColor: C.blue,
                    }}
                  >
                    <span
                      className="text-[8px] tracking-[.15em]"
                      style={{ color: C.blueSoft }}
                    >
                      {number}
                    </span>
                  </div>

                  <p
                    className="mt-5 text-[8px] uppercase tracking-[.22em]"
                    style={{ color: C.soft }}
                  >
                    {title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — DRIPLABS STANDARD
      ===================================================== */}

      <section
        className="relative px-5 py-24 sm:px-6 md:px-10 md:py-36 lg:px-14 lg:py-44"
        style={{
          background: C.black,
        }}
      >
        <div className="mx-auto max-w-[1680px]">
          <SectionLabel
            number="07"
            text="THE DRIPLABS STANDARD"
          />

          <div className="mt-10 grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2
                className="font-[var(--font-heading)] text-[clamp(3rem,5vw,5.5rem)] font-light leading-[.84] tracking-[-.06em]"
                style={{ color: C.white }}
              >
                Proof is part
                <br />
                of the
                <br />
                <span style={{ color: C.blueSoft }}>
                  experience.
                </span>
              </h2>

              <p
                className="mt-8 max-w-md text-[13px] leading-7"
                style={{ color: C.muted }}
              >
                The DRIPLABS Standard is built around an eight-stage approach
                spanning intake, personalisation, traceability, testing,
                documentation, physician supervision and follow-up.
              </p>

              <Link
                href="/standard"
                className="group mt-9 inline-flex items-center gap-7 text-[8px] uppercase tracking-[.25em]"
                style={{ color: C.white }}
              >
                Explore the standard

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: C.blueSoft }}
                >
                  →
                </span>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div
                className="border-t"
                style={{ borderColor: C.faintBlue }}
              >
                {standardSteps.map((step) => {
                  const active =
                    selectedStandard ===
                    Number(step.number) - 1;

                  return (
                    <button
                      key={step.number}
                      onClick={() =>
                        setSelectedStandard(
                          Number(step.number) - 1
                        )
                      }
                      className="group flex w-full items-center border-b py-5 text-left transition-all duration-500"
                      style={{
                        borderColor: C.faintBlue,
                        background: active
                          ? "rgba(0,102,255,.06)"
                          : "transparent",
                      }}
                    >
                      <span
                        className="w-12 text-[8px] tracking-[.2em]"
                        style={{
                          color: active
                            ? C.blueSoft
                            : C.muted,
                        }}
                      >
                        {step.number}
                      </span>

                      <span
                        className="flex-1 text-[11px] uppercase tracking-[.13em]"
                        style={{
                          color: active
                            ? C.white
                            : C.soft,
                        }}
                      >
                        {step.title}
                      </span>

                      <span
                        className="text-sm transition-transform duration-300"
                        style={{
                          color: active
                            ? C.blueSoft
                            : C.muted,
                          transform: active
                            ? "translateX(3px)"
                            : "none",
                        }}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              <div
                className="mt-5 border p-6 md:p-8"
                style={{
                  borderColor: C.faintBlue,
                  background:
                    "linear-gradient(135deg, rgba(0,102,255,.08), rgba(0,102,255,.015))",
                }}
              >
                <span
                  className="text-[8px] uppercase tracking-[.25em]"
                  style={{ color: C.muted }}
                >
                  STANDARD /{" "}
                  {standardSteps[selectedStandard].number}
                </span>

                <p
                  className="mt-4 font-[var(--font-heading)] text-2xl font-light"
                  style={{ color: C.white }}
                >
                  {standardSteps[selectedStandard].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — STARTING POINT
      ===================================================== */}

      <section
        className="relative overflow-hidden px-5 py-28 sm:px-6 md:px-10 md:py-40 lg:px-14 lg:py-48"
        style={{
          background: C.deep,
        }}
      >
        <div
          className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{
            background: "rgba(0,102,255,.13)",
          }}
        />

        <div className="relative mx-auto max-w-[1680px]">
          <div className="text-center">
            <span
              className="text-[9px] uppercase tracking-[.3em]"
              style={{ color: C.blueSoft }}
            >
              08 — BEGIN YOUR JOURNEY
            </span>

            <h2
              className="mx-auto mt-8 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[.8] tracking-[-.07em]"
              style={{ color: C.white }}
            >
              Where would you
              <br />
              <span style={{ color: "rgba(247,250,255,.3)" }}>
                like to begin?
              </span>
            </h2>

            <p
              className="mx-auto mt-8 max-w-xl text-[13px] leading-7"
              style={{ color: C.muted }}
            >
              Whether you know what you want, want help finding your path, or
              simply want to speak with our team — there is a place to start.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-3">
            <StartCard
              number="01"
              title="I know what I want."
              description="Explore the DRIPLABS protocol system."
              href="/protocols"
              cta="EXPLORE PROTOCOLS"
            />

            <StartCard
              number="02"
              title="I'm not sure yet."
              description="Explore wellness paths and discover where to begin."
              href="/protocols"
              cta="FIND MY PATH"
              featured
            />

            <StartCard
              number="03"
              title="I want to speak to someone."
              description="Begin a conversation around your wellness journey."
              href="/locations"
              cta="BEGIN A CONSULTATION"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="border-t"
        style={{
          background: C.black,
          borderColor: C.faintBlue,
        }}
      >
        <div className="mx-auto flex max-w-[1680px] flex-col gap-5 px-5 py-7 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <span
            className="text-[8px] uppercase tracking-[.22em]"
            style={{ color: C.muted }}
          >
            DRIPLABS® — Physician-led wellness
          </span>

          <Link
            href="/"
            className="text-[8px] uppercase tracking-[.22em] transition-colors duration-300 hover:text-[#8CCBFF]"
            style={{ color: C.muted }}
          >
            ← Back to DRIPLABS
          </Link>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  reducedMotion,
}: {
  children: React.ReactNode;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 25,
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
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="h-px w-10"
        style={{
          background: C.blue,
          boxShadow: "0 0 14px rgba(0,102,255,.35)",
        }}
      />

      <span
        className="text-[9px] uppercase tracking-[.3em]"
        style={{
          color: C.ice,
        }}
      >
        {number} — {text}
      </span>
    </div>
  );
}

/* =========================================================
   HERO META
========================================================= */

function HeroMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="border-r px-4 first:pl-0 last:border-0"
      style={{
        borderColor: C.faintBlue,
      }}
    >
      <span
        className="block text-[7px] uppercase tracking-[.2em]"
        style={{ color: C.muted }}
      >
        {label}
      </span>

      <span
        className="mt-2 block text-[8px] uppercase tracking-[.15em]"
        style={{ color: C.soft }}
      >
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   GLOW
========================================================= */

function Glow() {
  return (
    <>
      <div
        className="pointer-events-none absolute right-[-250px] top-1/3 h-[600px] w-[600px] rounded-full blur-[170px]"
        style={{
          background: "rgba(0,102,255,.08)",
        }}
      />

      <div
        className="pointer-events-none absolute left-[-300px] bottom-[-250px] h-[500px] w-[500px] rounded-full blur-[160px]"
        style={{
          background: "rgba(22,131,255,.045)",
        }}
      />
    </>
  );
}

/* =========================================================
   START CARD
========================================================= */

function StartCard({
  number,
  title,
  description,
  href,
  cta,
  featured = false,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative min-h-[280px] overflow-hidden border p-7 transition-all duration-500 hover:-translate-y-1 md:p-8"
      style={{
        borderColor: featured
          ? "rgba(0,102,255,.65)"
          : C.faintBlue,
        background: featured
          ? "linear-gradient(145deg, rgba(0,102,255,.14), rgba(0,102,255,.025))"
          : "rgba(255,255,255,.012)",
        boxShadow: featured
          ? "inset 0 0 70px rgba(0,102,255,.035)"
          : "none",
      }}
    >
      {/* Hover atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(0,102,255,.12), transparent 40%)",
        }}
      />

      {/* Blue hover rail */}
      <div
        className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
        style={{
          background: C.blue,
        }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <span
          className="text-[8px] tracking-[.25em]"
          style={{ color: C.blueSoft }}
        >
          {number}
        </span>

        <span
          className="transition-transform duration-500 group-hover:translate-x-1"
          style={{ color: C.muted }}
        >
          →
        </span>
      </div>

      <div className="relative z-10 mt-16">
        <h3
          className="max-w-xs font-[var(--font-heading)] text-[2.1rem] font-light leading-[.95] tracking-[-.04em]"
          style={{ color: C.white }}
        >
          {title}
        </h3>

        <p
          className="mt-5 max-w-sm text-[11px] leading-6"
          style={{ color: C.muted }}
        >
          {description}
        </p>
      </div>

      <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between md:left-8 md:right-8">
        <span
          className="text-[8px] uppercase tracking-[.22em] transition-colors duration-300 group-hover:text-white"
          style={{ color: C.muted }}
        >
          {cta}
        </span>

        <span
          className="h-px w-8 transition-all duration-500 group-hover:w-14"
          style={{
            background: C.blue,
          }}
        />
      </div>
    </Link>
  );
}