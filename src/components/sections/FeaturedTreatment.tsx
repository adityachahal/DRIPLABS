"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const featuredProtocols = [
  {
    number: "01",
    name: "GLAMOUR",
    family: "Skin & Beauty",
    category: "Cellular Radiance Protocol",
    description:
      "A premium skin and beauty wellness protocol with antioxidant and micronutrient support.",
    imagePosition: "58% center",
    tag: "Skin & Beauty",
  },
  {
    number: "02",
    name: "RENEW",
    family: "Cellular & Longevity",
    category: "Cellular Renewal Protocol",
    description:
      "A cellular renewal and longevity-focused protocol within the DRIPLABS system.",
    imagePosition: "48% center",
    tag: "Cellular & Longevity",
  },
  {
    number: "03",
    name: "RECOVER+",
    family: "Recovery & Immune",
    category: "Clinical Recovery Protocol",
    description:
      "A systemic nutritional recovery protocol designed within the DRIPLABS recovery family.",
    imagePosition: "64% center",
    tag: "Recovery & Immune",
  },
];

export default function FeaturedTreatment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const active = featuredProtocols[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === featuredProtocols.length - 1 ? 0 : current + 1,
      );
    }, 6500);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section
      id="signature-protocols"
      className="relative overflow-hidden bg-[#0A0A0B] text-[#F2F0EA]"
    >
      {/* =========================================================
          INTRO
      ========================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Metadata */}

          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#D6C39A]" />

              <p className="text-[9px] uppercase tracking-[0.3em] text-white/45">
                Signature protocols
              </p>
            </div>

            <p className="mt-7 max-w-[190px] text-[9px] uppercase leading-5 tracking-[0.18em] text-white/30">
              A closer look at
              <br />
              the DRIPLABS system.
            </p>
          </div>

          {/* Heading */}

          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 55,
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
              className="max-w-[1100px] text-[clamp(4rem,8vw,9rem)] font-light leading-[0.78] tracking-[-0.075em]"
            >
              Designed around
              <br />
              how you want
              <br />
              to feel.
            </motion.h2>

            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
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
                delay: 0.15,
              }}
              className="mt-10 max-w-xl text-sm leading-7 text-white/45 md:text-base"
            >
              Explore selected protocols from across the DRIPLABS wellness
              system. Each protocol sits within a defined wellness family and
              is considered within a physician-led journey.
            </motion.p>
          </div>
        </div>
      </div>

      {/* =========================================================
          FEATURED EXPERIENCE
      ========================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 pb-28 md:px-10 md:pb-40 lg:px-14">
        <div className="relative overflow-hidden border border-white/[0.08] bg-[#111214]">
          <div className="grid lg:grid-cols-12">
            {/* =====================================================
                IMAGE / CINEMATIC PANEL
            ====================================================== */}

            <div className="relative min-h-[65vh] overflow-hidden lg:col-span-8 lg:min-h-[760px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 1.06,
                        }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          scale: 1.025,
                        }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/hero/driplabs-hero.jpg"
                    alt={`${active.name} protocol`}
                    fill
                    priority={activeIndex === 0}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    style={{
                      objectPosition: active.imagePosition,
                    }}
                  />

                  {/* Cinematic image treatment */}

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20" />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/10" />

                  {/* Soft atmospheric highlight */}

                  <div className="absolute -left-[10%] top-[15%] h-[40vw] w-[40vw] rounded-full bg-[#D6C39A]/[0.035] blur-[120px]" />
                </motion.div>
              </AnimatePresence>

              {/* Image frame */}

              <div className="pointer-events-none absolute inset-5 border border-white/[0.12] md:inset-8" />

              {/* Top metadata */}

              <div className="absolute left-7 right-7 top-7 z-10 flex items-start justify-between md:left-10 md:right-10 md:top-10">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/50">
                    DRIPLABS
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-px w-5 bg-[#D6C39A]" />

                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#D6C39A]">
                      Signature protocol
                    </p>
                  </div>
                </div>

                <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/40">
                  {active.number} / 03
                </p>
              </div>

              {/* Protocol number */}

              <div className="absolute bottom-7 right-7 z-10 md:bottom-10 md:right-10">
                <p className="font-mono text-[8px] tracking-[0.22em] text-white/30">
                  PROTOCOL / {active.number}
                </p>
              </div>

              {/* Large protocol title */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 25,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: -15,
                        }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-8 left-7 z-10 max-w-[85%] md:bottom-10 md:left-10"
                >
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/45">
                    {active.family}
                  </p>

                  <h3 className="mt-3 text-[clamp(4rem,8vw,8.5rem)] font-light leading-[0.72] tracking-[-0.08em] text-[#F2F0EA]">
                    {active.name}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =====================================================
                INFORMATION PANEL
            ====================================================== */}

            <div className="relative flex flex-col justify-between bg-[#111214] lg:col-span-4">
              {/* Accent edge */}

              <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-white/[0.08] lg:block" />

              <div>
                {/* Protocol header */}

                <div className="flex items-center justify-between border-b border-white/[0.08] px-7 py-6 md:px-9">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                    Protocol
                  </p>

                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#D6C39A]">
                    {active.tag}
                  </p>
                </div>

                {/* Information */}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 18,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: -12,
                          }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="px-7 py-10 md:px-9 md:py-12 lg:px-10 lg:py-14"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[8px] text-[#D6C39A]">
                        {active.number}
                      </span>

                      <span className="h-px w-8 bg-white/15" />

                      <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                        {active.family}
                      </span>
                    </div>

                    <h4 className="mt-9 text-[clamp(2.8rem,4.5vw,5rem)] font-light leading-[0.86] tracking-[-0.065em] text-[#F2F0EA]">
                      {active.category}
                    </h4>

                    <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
                      {active.description}
                    </p>

                    {/* Protocol attributes */}

                    <div className="mt-10 space-y-3 border-t border-white/[0.08] pt-7">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                          Physician supervised
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#D6C39A]" />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                          Documented protocol
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#D6C39A]" />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                          Professional use
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#D6C39A]" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =================================================
                  NAVIGATION
              ================================================= */}

              <div className="border-t border-white/[0.08]">
                <div className="grid grid-cols-3">
                  {featuredProtocols.map((protocol, index) => {
                    const selected = index === activeIndex;

                    return (
                      <button
                        key={protocol.name}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`View ${protocol.name}`}
                        aria-pressed={selected}
                        className="group relative min-h-[105px] border-r border-white/[0.08] px-4 py-5 text-left last:border-r-0"
                      >
                        {/* Active progress */}

                        <span
                          className={`absolute left-0 right-0 top-0 h-px origin-left transition-transform duration-500 ${
                            selected ? "scale-x-100" : "scale-x-0"
                          } bg-[#D6C39A]`}
                        />

                        <span
                          className={`font-mono text-[8px] tracking-[0.2em] transition-colors duration-300 ${
                            selected
                              ? "text-[#D6C39A]"
                              : "text-white/25 group-hover:text-white/50"
                          }`}
                        >
                          {protocol.number}
                        </span>

                        <span
                          className={`mt-4 block text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                            selected
                              ? "text-[#F2F0EA]"
                              : "text-white/35 group-hover:text-white/65"
                          }`}
                        >
                          {protocol.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Overall progress */}

                <div className="relative h-px bg-white/[0.08]">
                  <motion.div
                    className="absolute left-0 top-0 h-px bg-[#D6C39A]"
                    animate={{
                      width: `${
                        ((activeIndex + 1) / featuredProtocols.length) * 100
                      }%`,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>

                {/* CTA */}

                <div className="px-7 py-6 md:px-9 lg:px-10">
                  <a
                    href="#protocol-system"
                    className="group flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-white/55"
                  >
                    <span className="relative">
                      Explore all protocols

                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#D6C39A] transition-all duration-500 group-hover:w-full" />
                    </span>

                    <span className="text-[#D6C39A] transition-transform duration-500 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            SUPPORTING NOTE
        ========================================================== */}

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <p className="max-w-3xl text-[8px] leading-5 text-white/25">
            Protocol selection, dosage and administration remain subject to
            physician assessment and the applicable DRIPLABS clinical
            framework.
          </p>

          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
            03 / Signature protocols
          </p>
        </div>
      </div>
    </section>
  );
}