"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import {
  treatments,
  type Treatment,
  type TreatmentFamily,
} from "@/data/treatments";

import Navbar from "@/components/navigation/Navbar";

/* =========================================================
   FAMILIES
========================================================= */

const families: Array<"All" | TreatmentFamily> = [
  "All",
  "Skin & Beauty",
  "Cellular & Longevity",
  "Metabolic & Performance",
  "Digestive & Systemic",
  "Women's Wellness",
  "Recovery & Immune",
  "Cognitive & Neuro",
  "Musculoskeletal",
];

/* =========================================================
   SHORT FAMILY NAMES
========================================================= */

const familyShortNames: Record<"All" | TreatmentFamily, string> = {
  All: "All",
  "Skin & Beauty": "Skin",
  "Cellular & Longevity": "Longevity",
  "Metabolic & Performance": "Performance",
  "Digestive & Systemic": "Digestive",
  "Women's Wellness": "Women's",
  "Recovery & Immune": "Recovery",
  "Cognitive & Neuro": "Cognitive",
  Musculoskeletal: "Mobility",
};

/* =========================================================
   FAMILY DESCRIPTIONS
========================================================= */

const familyDescriptions: Record<TreatmentFamily, string> = {
  "Skin & Beauty":
    "Antioxidant, collagen and micronutrient-focused nutritional wellness.",
  "Cellular & Longevity":
    "Cellular-energy, longevity and mitochondrial wellness positioning.",
  "Metabolic & Performance":
    "Performance, recovery and metabolic wellness support.",
  "Digestive & Systemic":
    "Digestive and systemic nutritional wellness support.",
  "Women's Wellness":
    "Women's nutritional wellness within a physician-led framework.",
  "Recovery & Immune":
    "Recovery, hydration and immune-nutritional wellness support.",
  "Cognitive & Neuro":
    "Cognitive and neuronal nutritional wellness positioning.",
  Musculoskeletal:
    "Bone, muscle and connective-tissue nutritional wellness support.",
};

/* =========================================================
   IMAGE HELPER
   IMPORTANT:
   Uses the image already defined inside treatments.ts.
========================================================= */

function getProtocolImage(treatment: Treatment) {
  return treatment.image || `/images/treatments/${treatment.slug}.jpg`;
}

/* =========================================================
   MOTION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

/* =========================================================
   PAGE
========================================================= */

export default function ProtocolsPage() {
  const [activeFamily, setActiveFamily] =
    useState<"All" | TreatmentFamily>("All");

  /* ---------------------------------------------------------
     ACTIVE PROTOCOLS
  --------------------------------------------------------- */

  const activeTreatments = useMemo(() => {
    return treatments.filter((treatment) => treatment.active);
  }, []);

  /* ---------------------------------------------------------
     FILTERED PROTOCOLS
  --------------------------------------------------------- */

  const visibleTreatments = useMemo(() => {
    if (activeFamily === "All") {
      return activeTreatments;
    }

    return activeTreatments.filter(
      (treatment) => treatment.family === activeFamily,
    );
  }, [activeFamily, activeTreatments]);

  /* ---------------------------------------------------------
     DESCRIPTION
  --------------------------------------------------------- */

  const activeDescription =
    activeFamily === "All"
      ? "Nineteen physician-directed protocols across eight wellness families."
      : familyDescriptions[activeFamily];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#11100E] text-[#F3EEE5]">
        {/* =====================================================
            01 — HERO
        ===================================================== */}

        <section className="relative min-h-[78svh] overflow-hidden bg-[#11100E]">
          {/* Background */}

          <div className="absolute inset-0">
            <Image
              src="/images/hero/driplabs-hero.jpg"
              alt="DRIPLABS wellness experience"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Cinematic grading */}

            <div className="absolute inset-0 bg-[#080706]/50" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#080706]/15 via-[#080706]/35 to-[#080706]" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/70 via-[#080706]/25 to-transparent" />
          </div>

          {/* Hero content */}

          <div className="relative mx-auto flex min-h-[78svh] max-w-[1800px] flex-col justify-end px-5 pb-10 pt-32 sm:px-8 md:px-10 md:pb-14 lg:px-14 lg:pb-16">
            <div className="max-w-[1050px]">
              {/* Eyebrow */}

              <motion.p
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[8px] uppercase tracking-[0.32em] text-[#D5BE8A]"
              >
                THE DRIPLABS SYSTEM
              </motion.p>

              {/* Heading */}

              <motion.h1
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 max-w-[900px] font-serif text-[clamp(4.5rem,10vw,10rem)] font-light leading-[0.78] tracking-[-0.075em] text-[#F3EEE5]"
              >
                Wellness,
                <br />
                considered.
              </motion.h1>

              {/* Description */}

              <motion.div
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.7,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-xl border-l border-[#C9A227] pl-5"
              >
                <p className="text-[12px] leading-6 text-white/55 md:text-[13px]">
                  Nineteen physician-directed protocols across eight wellness
                  families. Explore the system one considered protocol at a
                  time.
                </p>
              </motion.div>
            </div>

            {/* Bottom metadata */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
              }}
              className="mt-16 flex items-end justify-between border-t border-white/15 pt-5"
            >
              <div className="flex gap-10 md:gap-14">
                <div>
                  <p className="font-serif text-3xl font-light leading-none text-[#F3EEE5]">
                    19
                  </p>

                  <p className="mt-2 text-[7px] uppercase tracking-[0.25em] text-white/35">
                    Protocols
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl font-light leading-none text-[#F3EEE5]">
                    08
                  </p>

                  <p className="mt-2 text-[7px] uppercase tracking-[0.25em] text-white/35">
                    Families
                  </p>
                </div>
              </div>

              <span className="hidden text-[7px] uppercase tracking-[0.28em] text-white/30 md:block">
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            02 — INTRODUCTION
        ===================================================== */}

        <section className="bg-[#F3EEE5] text-[#17130F]">
          <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
              {/* Left */}

              <div>
                <p className="text-[8px] uppercase tracking-[0.28em] text-[#A47D1B]">
                  THE PROTOCOL SYSTEM
                </p>

                <div className="mt-7 h-px w-12 bg-[#C9A227]" />
              </div>

              {/* Right */}

              <div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeFamily}
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-[1100px] font-serif text-[clamp(2.8rem,5.5vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em]"
                  >
                    {activeDescription}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            03 — FAMILY FILTER
        ===================================================== */}

        <section className="sticky top-[70px] z-40 border-y border-white/10 bg-[#11100E]/95 backdrop-blur-xl">
          <div className="mx-auto max-w-[1800px] px-5 sm:px-8 md:px-10 lg:px-14">
            <div className="flex overflow-x-auto [scrollbar-width:none]">
              {families.map((family) => {
                const active = activeFamily === family;

                return (
                  <button
                    key={family}
                    type="button"
                    onClick={() => setActiveFamily(family)}
                    className={`relative shrink-0 px-4 py-5 text-[7px] uppercase tracking-[0.22em] transition-colors duration-300 first:pl-0 md:px-5 ${
                      active
                        ? "text-[#E3CE8E]"
                        : "text-white/35 hover:text-white/80"
                    }`}
                  >
                    {familyShortNames[family]}

                    {active && (
                      <motion.span
                        layoutId="protocol-family-line"
                        className="absolute bottom-0 left-4 right-4 h-px bg-[#C9A227] first:left-0 md:left-5 md:right-5"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            04 — PROTOCOL COLLECTION
        ===================================================== */}

        <section className="bg-[#11100E]">
          <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-14 lg:py-24">
            {/* Collection heading */}

            <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-5 md:mb-14">
              <div>
                <p className="text-[8px] uppercase tracking-[0.28em] text-[#D5BE8A]">
                  {activeFamily === "All"
                    ? "THE COMPLETE COLLECTION"
                    : familyShortNames[activeFamily]}
                </p>

                <p className="mt-2 text-[10px] text-white/30">
                  {visibleTreatments.length}{" "}
                  {visibleTreatments.length === 1
                    ? "protocol"
                    : "protocols"}
                </p>
              </div>

              <span className="hidden text-[7px] uppercase tracking-[0.25em] text-white/25 md:block">
                Physician-directed wellness
              </span>
            </div>

            {/* =================================================
                GRID
            ================================================= */}

            <motion.div
              layout
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {visibleTreatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.slug}
                    layout
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.035, 0.25),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={`/protocols/${treatment.slug}`}
                      className="group relative block aspect-[0.84] overflow-hidden bg-[#1B1916] outline-none focus-visible:ring-1 focus-visible:ring-[#D5BE8A]"
                    >
                      {/* =================================================
                          ACTUAL PROTOCOL IMAGE
                          Comes directly from treatments.ts
                      ================================================= */}

                      <Image
                        src={getProtocolImage(treatment)}
                        alt={`${treatment.name} protocol`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                      />

                      {/* Image grading */}

                      <div className="absolute inset-0 bg-[#080706]/10 transition-colors duration-500 group-hover:bg-[#080706]/25" />

                      {/* Bottom cinematic gradient */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/95 via-[#080706]/20 to-transparent" />

                      {/* Hover veil */}

                      <div className="absolute inset-0 bg-[#0B0D0F]/0 transition-colors duration-500 group-hover:bg-[#0B0D0F]/30" />

                      {/* =================================================
                          TOP META
                      ================================================= */}

                      <div className="absolute left-5 right-5 top-5 flex items-start justify-between md:left-6 md:right-6 md:top-6">
                        <span className="text-[7px] uppercase tracking-[0.25em] text-white/55">
                          {String(treatment.number).padStart(2, "0")} /{" "}
                          {String(activeTreatments.length).padStart(2, "0")}
                        </span>

                        <span className="text-[7px] uppercase tracking-[0.22em] text-[#E3CE8E]/80">
                          {familyShortNames[treatment.family]}
                        </span>
                      </div>

                      {/* =================================================
                          CARD CONTENT
                      ================================================= */}

                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                        <div>
                          {/* Category */}

                          <p className="mb-3 text-[7px] uppercase tracking-[0.25em] text-white/45">
                            {treatment.category}
                          </p>

                          {/* Protocol name */}

                          <h2 className="font-serif text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[0.78] tracking-[-0.065em] text-[#F3EEE5]">
                            {treatment.name}
                          </h2>

                          {/* =================================================
                              DESKTOP HOVER DESCRIPTION
                          ================================================= */}

                          <div className="grid grid-rows-[0fr] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                              <p className="max-w-md pt-5 text-[11px] leading-6 text-white/60 md:text-[12px]">
                                {treatment.shortDescription}
                              </p>

                              <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                                <span className="text-[7px] uppercase tracking-[0.23em] text-white/45">
                                  Explore protocol
                                </span>

                                <span className="text-lg text-[#E3CE8E] transition-transform duration-500 group-hover:translate-x-1">
                                  →
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* =================================================
                              MOBILE CTA
                          ================================================= */}

                          <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 sm:hidden">
                            <span className="text-[7px] uppercase tracking-[0.23em] text-white/45">
                              Explore protocol
                            </span>

                            <span className="text-lg text-[#E3CE8E]">
                              →
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* =================================================
                          HOVER CORNER ICON
                      ================================================= */}

                      <div className="absolute right-5 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 opacity-0 transition-all duration-500 group-hover:flex group-hover:opacity-100">
                        <span className="text-sm text-[#E3CE8E]">
                          ↗
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* =================================================
                EMPTY STATE
            ================================================= */}

            {visibleTreatments.length === 0 && (
              <div className="flex min-h-[300px] items-center justify-center border border-white/10">
                <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                  No active protocols in this family
                </p>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            05 — PHYSICIAN STATEMENT
        ===================================================== */}

        <section className="bg-[#F3EEE5] text-[#17130F]">
          <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
              {/* Left */}

              <div>
                <p className="text-[8px] uppercase tracking-[0.28em] text-[#A47D1B]">
                  ONE STANDARD
                </p>

                <div className="mt-7 h-px w-12 bg-[#C9A227]" />
              </div>

              {/* Right */}

              <div>
                <h2 className="max-w-[1100px] font-serif text-[clamp(3rem,6vw,7rem)] font-light leading-[0.86] tracking-[-0.065em]">
                  A protocol is a
                  <br />
                  starting point.
                  <br />

                  <span className="text-[#7B6756]">
                    The physician decides the path.
                  </span>
                </h2>

                {/* Principles */}

                <div className="mt-12 grid gap-8 border-t border-[#17130F]/15 pt-7 md:grid-cols-3">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.22em] text-[#A47D1B]">
                      01
                    </p>

                    <p className="mt-3 font-serif text-2xl font-light">
                      Physician-led
                    </p>
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.22em] text-[#A47D1B]">
                      02
                    </p>

                    <p className="mt-3 font-serif text-2xl font-light">
                      Considered
                    </p>
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.22em] text-[#A47D1B]">
                      03
                    </p>

                    <p className="mt-3 font-serif text-2xl font-light">
                      Personalised
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            06 — FINAL CTA
        ===================================================== */}

        <section className="bg-[#17130F] text-[#F3EEE5]">
          <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              {/* Copy */}

              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-[#D5BE8A]">
                  YOUR NEXT STEP
                </p>

                <h2 className="mt-7 max-w-[1000px] font-serif text-[clamp(3.8rem,7vw,8rem)] font-light leading-[0.8] tracking-[-0.07em]">
                  Start with
                  <br />
                  the physician.
                </h2>

                <p className="mt-8 max-w-xl text-[12px] leading-6 text-white/45">
                  Explore the system, then speak with the DRIPLABS team about
                  the protocol path appropriate to you.
                </p>
              </div>

              {/* Buttons */}

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/book"
                  className="group inline-flex min-h-12 items-center justify-center bg-[#C9A227] px-7 text-[8px] uppercase tracking-[0.22em] text-[#17130F] transition-colors duration-300 hover:bg-[#E3CE8E]"
                >
                  Book a Physician Consultation

                  <span className="ml-6 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/standard"
                  className="inline-flex min-h-12 items-center justify-center border border-white/20 px-7 text-[8px] uppercase tracking-[0.22em] text-white/65 transition-colors duration-300 hover:border-[#E3CE8E] hover:text-[#E3CE8E]"
                >
                  Explore the DRIPLABS Standard
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            07 — FOOTER
        ===================================================== */}

        <footer className="border-t border-white/10 bg-[#0B0A09] text-[#F3EEE5]">
          <div className="mx-auto flex max-w-[1800px] flex-col gap-4 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
            <p className="text-[7px] uppercase tracking-[0.24em] text-white/30">
              DRIPLABS® — A WELLNESS-PROTOCOL BRAND OF SNNYLO WELLNESS SCIENCES
            </p>

            <p className="text-[7px] uppercase tracking-[0.20em] text-white/20">
              PHYSICIAN-SUPERVISED WELLNESS · MANUFACTURED IN INDIA
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}