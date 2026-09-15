"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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

  const active = featuredProtocols[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === featuredProtocols.length - 1
          ? 0
          : current + 1,
      );
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="signature-protocols"
      className="overflow-hidden bg-[#F5F0E7] text-[#0B1D35]"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}
      <div className="mx-auto max-w-[1680px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Left metadata */}
          <div className="md:col-span-3">
            <p className="driplabs-label text-[#77736A]">
              Signature protocols
            </p>

            <div className="mt-6 h-px w-12 bg-[#C9A646]" />

            <p className="mt-6 max-w-[190px] text-[9px] uppercase leading-5 tracking-[0.18em] text-[#99958C]">
              A closer look at
              <br />
              the DRIPLABS system.
            </p>
          </div>

          {/* Main heading */}
          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1050px] text-[clamp(4rem,7.8vw,8.8rem)] font-light leading-[0.78] tracking-[-0.075em]"
            >
              Designed around
              <br />
              how you want
              <br />
              to feel.
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-9 max-w-xl text-sm leading-7 text-[#59616B] md:text-base"
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
      ========================================================= */}
      <div className="mx-auto max-w-[1680px] px-6 pb-28 md:px-10 md:pb-40 lg:px-14">
        <div className="relative overflow-hidden bg-[#0B1D35]">
          <div className="grid lg:grid-cols-12">
            {/* =====================================================
                IMAGE
            ===================================================== */}
            <div className="relative min-h-[62vh] overflow-hidden lg:col-span-8 lg:min-h-[760px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{
                    opacity: 0,
                    scale: 1.045,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.015,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/hero/driplabs-hero.jpg"
                    alt={`${active.name} protocol`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    style={{
                      objectPosition:
                        active.imagePosition,
                    }}
                  />

                  <div className="absolute inset-0 bg-[#071525]/20" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/85 via-[#071525]/10 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/20 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Top metadata */}
              <div className="absolute left-6 right-6 top-6 z-10 flex items-start justify-between md:left-10 md:right-10 md:top-10">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.28em] text-white/55">
                    DRIPLABS
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#C9A646]">
                    Signature protocol
                  </p>
                </div>

                <p className="text-[8px] uppercase tracking-[0.22em] text-white/45">
                  {active.number} / 03
                </p>
              </div>

              {/* Bottom image text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
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
                    y: -15,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                  className="absolute bottom-7 left-6 right-6 z-10 md:bottom-10 md:left-10 md:right-10"
                >
                  <p className="text-[8px] uppercase tracking-[0.22em] text-white/45">
                    {active.family}
                  </p>

                  <h3 className="mt-3 text-[clamp(4rem,7vw,8rem)] font-light leading-[0.76] tracking-[-0.075em] text-[#F5F0E7]">
                    {active.name}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =====================================================
                INFORMATION PANEL
            ===================================================== */}
            <div className="flex flex-col justify-between bg-[#122845] text-[#F5F0E7] lg:col-span-4">
              <div>
                {/* Category */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-9">
                  <p className="text-[8px] uppercase tracking-[0.24em] text-white/35">
                    Protocol
                  </p>

                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#C9A646]">
                    {active.tag}
                  </p>
                </div>

                {/* Main copy */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name}
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
                      y: -12,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="px-6 py-10 md:px-9 md:py-12 lg:px-10 lg:py-14"
                  >
                    <p className="text-[8px] uppercase tracking-[0.22em] text-white/30">
                      {active.number} / {active.family}
                    </p>

                    <h4 className="mt-8 text-[clamp(2.8rem,4vw,4.8rem)] font-light leading-[0.86] tracking-[-0.06em]">
                      {active.category}
                    </h4>

                    <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
                      {active.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-9 flex flex-wrap gap-2">
                      <span className="border border-white/10 px-3 py-2 text-[7px] uppercase tracking-[0.18em] text-white/35">
                        Physician supervised
                      </span>

                      <span className="border border-white/10 px-3 py-2 text-[7px] uppercase tracking-[0.18em] text-white/35">
                        Documented protocol
                      </span>

                      <span className="border border-white/10 px-3 py-2 text-[7px] uppercase tracking-[0.18em] text-white/35">
                        Professional use
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =================================================
                  NAVIGATION
              ================================================= */}
              <div className="border-t border-white/10">
                <div className="grid grid-cols-3">
                  {featuredProtocols.map((protocol, index) => {
                    const selected =
                      index === activeIndex;

                    return (
                      <button
                        key={protocol.name}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`View ${protocol.name}`}
                        aria-pressed={selected}
                        className="relative min-h-[105px] border-r border-white/10 px-4 py-5 text-left last:border-r-0"
                        style={{
                          backgroundColor: selected
                            ? "rgba(245,240,231,0.06)"
                            : "transparent",
                        }}
                      >
                        {selected && (
                          <span className="absolute left-0 right-0 top-0 h-[2px] bg-[#C9A646]" />
                        )}

                        <span
                          className="text-[8px] tracking-[0.2em]"
                          style={{
                            color: selected
                              ? "#C9A646"
                              : "rgba(245,240,231,0.28)",
                          }}
                        >
                          {protocol.number}
                        </span>

                        <span
                          className="mt-4 block text-[10px] uppercase tracking-[0.14em]"
                          style={{
                            color: selected
                              ? "#F5F0E7"
                              : "rgba(245,240,231,0.45)",
                          }}
                        >
                          {protocol.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Progress */}
                <div className="h-px bg-white/10">
                  <motion.div
                    className="h-px bg-[#C9A646]"
                    animate={{
                      width: `${((activeIndex + 1) / featuredProtocols.length) * 100}%`,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>

                {/* CTA */}
                <div className="px-6 py-6 md:px-9 lg:px-10">
                  <a
                    href="#protocol-system"
                    className="group flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-white/65"
                  >
                    <span className="relative">
                      Explore all protocols

                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C9A646] transition-all duration-500 group-hover:w-full" />
                    </span>

                    <span className="text-[#C9A646] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting note */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <p className="max-w-3xl text-[8px] leading-5 text-[#99958C]">
            Protocol selection, dosage and administration remain subject to
            physician assessment and the applicable DRIPLABS clinical
            framework.
          </p>

          <p className="text-[8px] uppercase tracking-[0.2em] text-[#99958C]">
            03 / Signature protocols
          </p>
        </div>
      </div>
    </section>
  );
}