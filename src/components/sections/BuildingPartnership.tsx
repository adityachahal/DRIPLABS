"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

type Partnership = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  details: string[];
  cta: string;
  href: string;
};

const partnerships: Partnership[] = [
  {
    number: "01",
    eyebrow: "CLINICAL PARTNERSHIP",
    title: "Bring DRIPLABS into your practice.",
    description:
      "Flexible structures for physicians, clinics and healthcare groups looking to build a physician-directed wellness vertical.",
    details: [
      "Consult & Dispense",
      "Clinic-in-Clinic",
      "Equity / Retainer Partnership",
      "MSO / Franchise-Style Model",
    ],
    cta: "EXPLORE CLINICAL PARTNERSHIPS",
    href: "/physicians",
  },
  {
    number: "02",
    eyebrow: "DISTRIBUTION PARTNERSHIP",
    title: "Build the territory.",
    description:
      "A structured commercial model for distribution partners, matched to territory, volume and existing pharma or wellness networks.",
    details: [
      "Super-Stockist",
      "Regional Distributor",
      "Clinic-Direct Partner",
      "Territory opportunities",
    ],
    cta: "EXPLORE DISTRIBUTION",
    href: "/distributors",
  },
  {
    number: "03",
    eyebrow: "MULTI-LOCATION",
    title: "Scale a consistent wellness standard.",
    description:
      "For established clinic groups seeking a standardised wellness vertical across multiple locations.",
    details: [
      "Standardised protocols",
      "Staff training",
      "Launch support",
      "Ongoing medical-affairs contact",
    ],
    cta: "DISCUSS YOUR MODEL",
    href: "/contact",
  },
];

export default function BuildingPartnership() {
  const [active, setActive] = useState(0);

  const current = partnerships[active];

  return (
    <section
      id="partnerships"
      className="relative overflow-hidden bg-[#071019] text-[#F7F4EC]"
    >
      {/* =====================================================
          AMBIENT FIELD
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#C9A227]/[0.035] blur-[140px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-300/[0.025] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-32">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-12 md:gap-10 md:pb-14">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C9A227]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                14 — BUILDING PARTNERSHIPS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-[900px] font-[var(--font-heading)] text-[clamp(3rem,6vw,6.4rem)] font-light leading-[0.9] tracking-[-0.06em]"
            >
              Build with
              <br />
              DRIPLABS.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="flex items-end md:col-span-5"
          >
            <p className="max-w-md text-[13px] leading-6 text-white/50 md:text-sm">
              From physician-led clinical partnerships to structured
              distribution, DRIPLABS provides the clinical framework,
              documentation and commercial infrastructure to build a
              considered wellness business.
            </p>
          </motion.div>
        </div>

        {/* ===================================================
            PARTNERSHIP SELECTOR
        =================================================== */}

        <div className="grid md:grid-cols-12">
          {/* =================================================
              LEFT — NAVIGATION
          ================================================= */}

          <div className="border-b border-white/10 md:col-span-4 md:border-b-0 md:border-r">
            {partnerships.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group flex w-full items-start gap-5 border-b border-white/10 py-6 text-left last:border-b-0 md:pr-8"
                >
                  {/* Number */}

                  <span
                    className={[
                      "font-mono text-[9px] tracking-[0.18em] transition-colors duration-500",
                      isActive
                        ? "text-[#E3CE8E]"
                        : "text-white/25 group-hover:text-white/55",
                    ].join(" ")}
                  >
                    {item.number}
                  </span>

                  {/* Title */}

                  <span className="flex-1">
                    <span
                      className={[
                        "block text-[10px] uppercase tracking-[0.18em] transition-colors duration-500",
                        isActive
                          ? "text-white"
                          : "text-white/45 group-hover:text-white/75",
                      ].join(" ")}
                    >
                      {item.eyebrow}
                    </span>

                    <span
                      className={[
                        "mt-2 block font-[var(--font-heading)] text-xl font-light tracking-[-0.02em] transition-colors duration-500",
                        isActive
                          ? "text-[#F7F4EC]"
                          : "text-white/35 group-hover:text-white/70",
                      ].join(" ")}
                    >
                      {item.title}
                    </span>
                  </span>

                  {/* Indicator */}

                  <span
                    className={[
                      "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                      isActive
                        ? "border-[#C9A227]/60 bg-[#C9A227]/10 text-[#E3CE8E]"
                        : "border-white/10 text-white/20 group-hover:border-white/30",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "text-xs transition-transform duration-500",
                        isActive ? "translate-x-0.5" : "",
                      ].join(" ")}
                    >
                      →
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* =================================================
              RIGHT — ACTIVE PARTNERSHIP
          ================================================= */}

          <div className="relative min-h-[420px] md:col-span-8 md:min-h-[500px]">
            {/* Technical frame */}

            <div className="pointer-events-none absolute inset-5 border border-white/[0.06] md:inset-8" />

            <div className="pointer-events-none absolute right-8 top-8 hidden font-mono text-[7px] tracking-[0.22em] text-white/20 md:block">
              DRIPLABS / PARTNERSHIPS
              <br />
              INDIA
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex min-h-[420px] flex-col justify-between p-10 md:min-h-[500px] md:p-14"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-cyan-300/60" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-200/55">
                      {current.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-7 max-w-[650px] font-[var(--font-heading)] text-[clamp(2rem,4vw,4.4rem)] font-light leading-[0.94] tracking-[-0.05em]">
                    {current.title}
                  </h3>

                  <p className="mt-6 max-w-[560px] text-[13px] leading-6 text-white/48 md:text-sm">
                    {current.description}
                  </p>
                </div>

                {/* Detail list */}

                <div className="mt-10 grid gap-x-8 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                  {current.details.map((detail, index) => (
                    <div
                      key={detail}
                      className="flex items-center gap-3"
                    >
                      <span className="font-mono text-[7px] tracking-[0.18em] text-[#C9A227]/70">
                        0{index + 1}
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.14em] text-white/55">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}

                <div className="mt-8">
                  <Link
                    href={current.href}
                    className="group inline-flex items-center gap-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/35 bg-[#C9A227]/[0.04] transition-all duration-500 group-hover:border-[#C9A227]/70 group-hover:bg-[#C9A227]/10"
                    >
                      <span className="text-sm transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#E3CE8E] transition-colors duration-300 group-hover:text-white">
                      {current.cta}
                    </span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ===================================================
            OPERATING PRINCIPLE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-white/35">
              THE DRIPLABS PARTNERSHIP STANDARD
            </span>
          </div>

          <p className="max-w-xl text-right font-[var(--font-heading)] text-[clamp(1.15rem,2vw,1.7rem)] font-light tracking-[-0.02em] text-white/75">
            Built around clinical rigour, structured growth and long-term relationships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}