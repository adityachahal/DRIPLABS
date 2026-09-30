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
import Footer from "@/components/sections/Footer";

type FamilyFilter = "All" | TreatmentFamily;

const families: FamilyFilter[] = [
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

const familyNames: Record<FamilyFilter, string> = {
  All: "All",
  "Skin & Beauty": "Skin & Beauty",
  "Cellular & Longevity": "Cellular & Longevity",
  "Metabolic & Performance": "Metabolic & Performance",
  "Digestive & Systemic": "Digestive & Systemic",
  "Women's Wellness": "Women's Wellness",
  "Recovery & Immune": "Recovery & Immune",
  "Cognitive & Neuro": "Cognitive & Neuro",
  Musculoskeletal: "Musculoskeletal",
};

const getImage = (treatment: Treatment) =>
  treatment.image || `/images/treatments/${treatment.slug}.jpg`;

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProtocolsPage() {
  const [activeFamily, setActiveFamily] =
    useState<FamilyFilter>("All");

  const activeTreatments = useMemo(
    () => treatments.filter((treatment) => treatment.active),
    [],
  );

  const visibleTreatments = useMemo(() => {
    if (activeFamily === "All") return activeTreatments;

    return activeTreatments.filter(
      (treatment) => treatment.family === activeFamily,
    );
  }, [activeFamily, activeTreatments]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020812] text-white">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#020812]">

          <div className="mx-auto max-w-[1600px] px-5 pb-16 pt-32 sm:px-8 md:px-10 md:pb-20 lg:px-14 lg:pt-40">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-[#1683FF]" />

                <span className="text-[8px] tracking-[0.28em] text-[#8CCBFF]">
                  THE DRIPLABS SYSTEM
                </span>

              </div>

              <h1
                className="
                  mt-7
                  max-w-[1000px]
                  font-serif
                  text-[clamp(4rem,9vw,9rem)]
                  font-light
                  leading-[0.78]
                  tracking-[-0.075em]
                "
              >
                Wellness,
                <br />
                <span className="text-white/40">
                  considered.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-[12px] leading-6 text-white/50 md:text-[13px]">
                Nineteen physician-directed protocols across eight wellness
                families. Explore the system one considered protocol at a time.
              </p>
            </motion.div>

          </div>

        </section>


        {/* =====================================================
            FAMILY FILTER
        ===================================================== */}

        <section
          className="
            sticky
            top-[60px]
            z-40
            border-y
            border-white/[0.09]
            bg-[#020812]/95
            backdrop-blur-xl
          "
        >

          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14">

            <div className="flex overflow-x-auto [scrollbar-width:none]">

              {families.map((family) => {
                const active = activeFamily === family;

                return (
                  <button
                    key={family}
                    type="button"
                    onClick={() => setActiveFamily(family)}
                    className={`
                      relative
                      shrink-0
                      px-4
                      py-5
                      text-[8px]
                      tracking-[0.16em]
                      transition-colors
                      duration-300
                      first:pl-0
                      md:px-6
                      ${
                        active
                          ? "text-white"
                          : "text-white/35 hover:text-white/80"
                      }
                    `}
                  >
                    {familyNames[family]}

                    {active && (
                      <motion.span
                        layoutId="protocol-filter"
                        transition={{
                          duration: 0.45,
                          ease,
                        }}
                        className="
                          absolute
                          bottom-0
                          left-4
                          right-4
                          h-[2px]
                          bg-[#1683FF]
                          shadow-[0_0_15px_rgba(22,131,255,.65)]
                          first:left-0
                          md:left-6
                          md:right-6
                        "
                      />
                    )}
                  </button>
                );
              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="bg-[#06152B]">

          <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 md:px-10 md:py-24 lg:px-14">

            <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">

              <div>

                <span className="text-[8px] tracking-[0.28em] text-[#4D9BFF]">
                  {activeFamily === "All"
                    ? "ALL PROTOCOLS"
                    : familyNames[activeFamily]}
                </span>

                <div className="mt-5 h-px w-10 bg-[#1683FF]" />

              </div>

              <AnimatePresence mode="wait">

                <motion.h2
                  key={activeFamily}
                  initial={{
                    opacity: 0,
                    y: 15,
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
                    duration: 0.45,
                    ease,
                  }}
                  className="
                    max-w-[1000px]
                    font-serif
                    text-[clamp(2.6rem,5vw,5.5rem)]
                    font-light
                    leading-[0.88]
                    tracking-[-0.06em]
                  "
                >
                  {activeFamily === "All"
                    ? "Nineteen physician-directed protocols across eight wellness families."
                    : `${visibleTreatments.length} protocols within ${familyNames[activeFamily]}.`}
                </motion.h2>

              </AnimatePresence>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROTOCOL GRID
        ===================================================== */}

        <section className="bg-[#020812]">

          <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-14 lg:py-20">

            <div className="mb-8 flex items-end justify-between border-b border-white/[0.09] pb-4">

              <div>
                <p className="text-[8px] tracking-[0.25em] text-white/40">
                  THE COLLECTION
                </p>

                <p className="mt-2 text-[10px] text-white/25">
                  {visibleTreatments.length}{" "}
                  {visibleTreatments.length === 1
                    ? "protocol"
                    : "protocols"}
                </p>
              </div>

              <span className="hidden text-[7px] tracking-[0.25em] text-white/20 md:block">
                PHYSICIAN-DIRECTED WELLNESS
              </span>

            </div>


            <motion.div
              layout
              className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              <AnimatePresence mode="popLayout">

                {visibleTreatments.map((treatment, index) => (

                  <motion.div
                    key={treatment.slug}
                    layout
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 20,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.035, 0.2),
                      ease,
                    }}
                  >

                    <ProtocolCard treatment={treatment} />

                  </motion.div>

                ))}

              </AnimatePresence>

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            PHYSICIAN SECTION
        ===================================================== */}

        <section className="border-t border-white/[0.08] bg-[#06152B]">

          <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14">

            <div className="grid gap-12 lg:grid-cols-[250px_1fr] lg:gap-20">

              <div>

                <div className="flex items-center gap-3">

                  <span className="text-[8px] tracking-[0.28em] text-[#4D9BFF]">
                    ONE STANDARD
                  </span>

                  <span className="h-px w-8 bg-[#1683FF]" />

                </div>

              </div>

              <div>

                <h2
                  className="
                    max-w-[1000px]
                    font-serif
                    text-[clamp(3rem,6vw,7rem)]
                    font-light
                    leading-[0.84]
                    tracking-[-0.065em]
                  "
                >
                  A protocol is a
                  <br />
                  starting point.
                  <br />
                  <span className="text-white/35">
                    The physician decides the path.
                  </span>
                </h2>

                <div className="mt-12 grid gap-8 border-t border-white/10 pt-6 md:grid-cols-3">

                  {[
                    ["01", "Physician-led"],
                    ["02", "Considered"],
                    ["03", "Personalised"],
                  ].map(([number, title]) => (
                    <div key={number}>

                      <span className="text-[8px] tracking-[0.22em] text-[#4D9BFF]">
                        {number}
                      </span>

                      <p className="mt-3 font-serif text-2xl font-light">
                        {title}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#01050B]">

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#0066FF]/10
              blur-[140px]
            "
          />

          <div className="relative mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14">

            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

              <div>

                <span className="text-[8px] tracking-[0.3em] text-[#8CCBFF]">
                  YOUR NEXT STEP
                </span>

                <h2
                  className="
                    mt-7
                    font-serif
                    text-[clamp(3.5rem,7vw,8rem)]
                    font-light
                    leading-[0.8]
                    tracking-[-0.07em]
                  "
                >
                  Start with
                  <br />
                  the physician.
                </h2>

              </div>

              <Link
                href="/book"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-5
                  rounded-[10px]
                  border
                  border-[#1683FF]/70
                  bg-[#0066FF]
                  px-8
                  text-[8px]
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-500
                  hover:bg-[#1683FF]
                  hover:shadow-[0_12px_40px_rgba(0,102,255,.25)]
                "
              >
                BEGIN YOUR JOURNEY

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </section>

        <Footer />

      </main>
    </>
  );
}


/* =========================================================
   PROTOCOL CARD
========================================================= */

function ProtocolCard({
  treatment,
}: {
  treatment: Treatment;
}) {
  return (
    <Link
      href={`/protocols/${treatment.slug}`}
      className="
        group
        relative
        block
        aspect-[0.88]
        overflow-hidden
        rounded-[12px]
        bg-[#06152B]
        outline-none
        focus-visible:ring-2
        focus-visible:ring-[#1683FF]
      "
    >

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={getImage(treatment)}
        alt={`${treatment.name} protocol`}
        fill
        sizes="
          (min-width: 1024px) 33vw,
          (min-width: 768px) 50vw,
          100vw
        "
        className="
          object-cover
          object-center
          transition-transform
          duration-[1400ms]
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:scale-[1.055]
        "
      />


      {/* =====================================================
          BASE OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[#020812]/20
          transition-colors
          duration-700
          group-hover:bg-[#020812]/45
        "
      />


      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#020812]/95
          via-[#020812]/20
          to-transparent
        "
      />


      {/* =====================================================
          ELECTRIC EDGE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          top-0
          w-[2px]
          origin-bottom
          scale-y-0
          bg-[#1683FF]
          shadow-[0_0_18px_rgba(22,131,255,.7)]
          transition-transform
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:scale-y-100
        "
      />


      {/* =====================================================
          TOP NUMBER
      ===================================================== */}

      <div className="absolute left-5 right-5 top-5 flex justify-between md:left-6 md:right-6 md:top-6">

        <span className="text-[7px] tracking-[0.24em] text-white/45">
          {String(treatment.number).padStart(2, "0")}
        </span>

        <span className="text-[7px] tracking-[0.20em] text-[#8CCBFF]/80">
          {treatment.family}
        </span>

      </div>


      {/* =====================================================
          CONTENT
          
          THIS IS THE IMPORTANT PART.
          
          The movement is deliberately simple:
          title sits low,
          then the entire content group rises on hover.
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          flex
          flex-col
          items-center
          px-6
          pb-7
          text-center
          transition-transform
          duration-[800ms]
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:-translate-y-[30px]
        "
      >

        {/* Category */}

        <p
          className="
            mb-4
            text-[7px]
            tracking-[0.25em]
            text-white/45
            transition-all
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:text-white/65
          "
        >
          {treatment.category}
        </p>


        {/* Title */}

        <h2
          className="
            max-w-full
            font-serif
            text-[clamp(2.6rem,4vw,4.5rem)]
            font-light
            leading-[0.78]
            tracking-[-0.065em]
            text-white
          "
        >
          {treatment.name}
        </h2>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <div
          className="
            grid
            grid-rows-[0fr]
            transition-all
            duration-[700ms]
            ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:grid-rows-[1fr]
          "
        >

          <div className="overflow-hidden">

            <p
              className="
                mx-auto
                max-w-[420px]
                pt-5
                text-[11px]
                leading-5
                text-white/60
                opacity-0
                transition-opacity
                delay-100
                duration-500
                group-hover:opacity-100
              "
            >
              {treatment.shortDescription}
            </p>

          </div>

        </div>


        {/* =================================================
            RESERVE / EXPLORE BUTTON
        ================================================= */}

        <div
          className="
            mt-5
            flex
            min-h-[46px]
            w-full
            items-center
            justify-center
            border
            border-white/45
            bg-black/5
            text-[8px]
            tracking-[0.18em]
            text-white
            backdrop-blur-[2px]
            transition-all
            duration-500
            group-hover:border-[#1683FF]
            group-hover:bg-[#0066FF]/20
          "
        >
          EXPLORE PROTOCOL

          <span
            className="
              ml-4
              translate-x-0
              opacity-60
              transition-all
              duration-500
              group-hover:translate-x-1
              group-hover:opacity-100
            "
          >
            →
          </span>

        </div>

      </div>

    </Link>
  );
}