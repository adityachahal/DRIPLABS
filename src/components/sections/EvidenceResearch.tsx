"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const evidenceLayers = [
  {
    number: "01",
    label: "Clinical Evidence",
    title: "What does the research actually support?",
    description:
      "Understand the evidence behind the ingredients, pathways and protocols rather than reducing science to marketing language.",
    meta: "RESEARCH / CLINICAL",
  },
  {
    number: "02",
    label: "Evidence Tiers",
    title: "Not every claim carries the same weight.",
    description:
      "The DRIPLABS evidence framework distinguishes stronger established evidence from emerging or investigational areas.",
    meta: "EVIDENCE / CONFIDENCE",
  },
  {
    number: "03",
    label: "Claim Discipline",
    title: "Clear science. Responsible positioning.",
    description:
      "Wellness positioning remains distinct from diagnosis, treatment, cure or prevention claims.",
    meta: "SAFETY / POSITIONING",
  },
  {
    number: "04",
    label: "Research Library",
    title: "Go deeper when you want to.",
    description:
      "Explore the underlying clinical and scientific material supporting the DRIPLABS system.",
    meta: "LIBRARY / SOURCES",
  },
];

const evidenceSignals = [
  {
    label: "Established",
    description:
      "Evidence-supported foundations and established biological functions.",
  },
  {
    label: "Moderate",
    description:
      "Useful supporting evidence, while interpretation remains contextual.",
  },
  {
    label: "Emerging",
    description:
      "Promising or mechanistically grounded areas still under active research.",
  },
];

export default function EvidenceResearch() {
  const [activeLayer, setActiveLayer] = useState(0);

  const active = evidenceLayers[activeLayer];

  return (
    <section className="relative overflow-hidden bg-[#071019] text-[#f3eee4]">

      {/* ============================================================
          ATMOSPHERE
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[12%] top-[10%] h-[360px] w-[360px] rounded-full bg-[#b99755]/[0.045] blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[8%] h-[420px] w-[420px] rounded-full bg-[#31556b]/[0.08] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

      </div>

      {/* ============================================================
          MAIN
      ============================================================ */}

      <div className="relative mx-auto max-w-[1500px] px-6 py-20 sm:px-8 md:px-10 lg:px-14 lg:py-24 xl:px-16">

        {/* ============================================================
            HEADER
        ============================================================ */}

        <header className="grid gap-10 lg:grid-cols-[0.5fr_1.5fr] lg:items-end">

          <div className="flex items-start gap-4">

            <span className="mt-2 h-px w-9 bg-[#b99755]" />

            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.32em] text-white/50">
                Evidence & Research
              </div>

              <div className="mt-2 font-mono text-[9px] tracking-[0.2em] text-[#b99755]/80">
                12
              </div>
            </div>

          </div>

          <div>

            <h2 className="max-w-[900px] font-serif text-[clamp(3rem,6.5vw,7rem)] font-light leading-[0.84] tracking-[-0.055em]">
              Science,
              <br />
              <span className="text-white/45">
                without the noise.
              </span>
            </h2>

            <p className="mt-7 max-w-[620px] text-[14px] leading-7 text-white/55 md:text-[15px]">
              Explore the research and clinical evidence behind the
              DRIPLABS system — with the distinction between established,
              moderate and emerging evidence kept visible.
            </p>

          </div>

        </header>

        {/* ============================================================
            MAIN RESEARCH PANEL
        ============================================================ */}

        <div className="mt-16 border-y border-white/10 lg:mt-20">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* ========================================================
                LEFT — RESEARCH VISUAL
            ======================================================== */}

            <div className="relative min-h-[390px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">

              {/* Laboratory image */}

              <motion.div
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <img
                  src="/images/research/evidence-research.jpg"
                  alt="Clinical research laboratory"
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </motion.div>

              {/* Fallback atmosphere */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(191,160,92,.18),transparent_28%),linear-gradient(135deg,#152532,#071019_65%)]" />

              {/* Image overlay */}

              <div className="absolute inset-0 bg-black/25" />

              {/* Technical frame */}

              <div className="absolute inset-7 border border-white/15" />

              {/* Technical information */}

              <div className="absolute left-10 top-10">

                <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/45">
                  DRIPLABS / RESEARCH
                </div>

                <div className="mt-3 font-mono text-[9px] tracking-[0.18em] text-[#b99755]">
                  SCIENCE / 12
                </div>

              </div>

              {/* Crosshair */}

              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2">

                <span className="absolute left-1/2 top-0 h-4 w-px bg-white/30" />

                <span className="absolute bottom-0 left-1/2 h-4 w-px bg-white/30" />

                <span className="absolute left-0 top-1/2 h-px w-4 bg-white/30" />

                <span className="absolute right-0 top-1/2 h-px w-4 bg-white/30" />

                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b99755]" />

              </div>

              {/* Bottom label */}

              <div className="absolute bottom-8 left-10 right-10 flex items-end justify-between">

                <div>
                  <div className="font-mono text-[7px] uppercase tracking-[0.28em] text-white/40">
                    Research library
                  </div>

                  <div className="mt-1 font-serif text-xl font-light text-white/90">
                    Evidence, decoded.
                  </div>
                </div>

                <div className="font-mono text-[8px] tracking-[0.2em] text-white/40">
                  2026
                </div>

              </div>

            </div>

            {/* ========================================================
                RIGHT — ACTIVE EVIDENCE
            ======================================================== */}

            <div className="flex flex-col justify-between">

              {/* Active content */}

              <div className="p-7 sm:p-9 lg:p-12">

                <AnimatePresence mode="wait">

                  <motion.div
                    key={active.number}
                    initial={{
                      opacity: 0,
                      y: 12,
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
                      duration: 0.4,
                    }}
                  >

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/35">
                        {active.meta}
                      </span>

                      <span className="h-px w-6 bg-[#b99755]" />

                      <span className="font-mono text-[8px] tracking-[0.18em] text-[#b99755]">
                        {active.number}
                      </span>

                    </div>

                    <h3 className="mt-8 max-w-[650px] font-serif text-[clamp(2rem,3.4vw,3.7rem)] font-light leading-[0.92] tracking-[-0.045em]">
                      {active.title}
                    </h3>

                    <p className="mt-6 max-w-[570px] text-[13px] leading-7 text-white/50 md:text-[14px]">
                      {active.description}
                    </p>

                  </motion.div>

                </AnimatePresence>

              </div>

              {/* Evidence confidence */}

              <div className="border-t border-white/10 px-7 py-7 sm:px-9 lg:px-12">

                <div className="mb-6 flex items-center justify-between">

                  <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/35">
                    Evidence confidence
                  </span>

                  <span className="font-mono text-[8px] tracking-[0.2em] text-white/30">
                    FRAMEWORK
                  </span>

                </div>

                <div className="space-y-4">

                  {evidenceSignals.map((signal, index) => {

                    const isHighlighted =
                      activeLayer === index;

                    return (
                      <button
                        key={signal.label}
                        type="button"
                        onClick={() => setActiveLayer(index)}
                        className="group flex w-full items-center gap-5 text-left"
                      >

                        {/* Indicator */}

                        <div className="relative h-5 w-5 shrink-0">

                          <motion.span
                            animate={{
                              scale: isHighlighted ? 1 : 0.65,
                              opacity: isHighlighted ? 1 : 0.4,
                            }}
                            className="absolute inset-0 rounded-full border border-[#b99755]"
                          />

                          {isHighlighted && (
                            <motion.span
                              layoutId="evidence-dot"
                              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b99755]"
                            />
                          )}

                        </div>

                        {/* Label */}

                        <div className="min-w-[90px]">

                          <span
                            className={[
                              "font-serif text-[17px] font-light transition-colors duration-300",
                              isHighlighted
                                ? "text-white"
                                : "text-white/45 group-hover:text-white/70",
                            ].join(" ")}
                          >
                            {signal.label}
                          </span>

                        </div>

                        {/* Description */}

                        <div className="hidden flex-1 border-l border-white/10 pl-5 sm:block">

                          <span
                            className={[
                              "text-[11px] leading-5 transition-colors duration-300",
                              isHighlighted
                                ? "text-white/55"
                                : "text-white/25",
                            ].join(" ")}
                          >
                            {signal.description}
                          </span>

                        </div>

                        <span
                          className={[
                            "font-mono text-[9px] transition-all duration-300",
                            isHighlighted
                              ? "translate-x-0 text-[#b99755]"
                              : "-translate-x-2 text-white/20",
                          ].join(" ")}
                        >
                          →
                        </span>

                      </button>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ============================================================
            FOUR RESEARCH LAYERS
        ============================================================ */}

        <div className="mt-10 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {evidenceLayers.map((layer, index) => {

            const isActive = index === activeLayer;

            return (
              <button
                key={layer.number}
                type="button"
                onMouseEnter={() => setActiveLayer(index)}
                onClick={() => setActiveLayer(index)}
                className={[
                  "group relative min-h-[145px] border-b border-white/10 p-6 text-left transition-colors duration-500 sm:nth-[2n]:border-l lg:border-b-0 lg:border-l lg:first:border-l-0",
                  isActive
                    ? "bg-white/[0.035]"
                    : "hover:bg-white/[0.02]",
                  index >= 2 ? "lg:border-t-0" : "",
                ].join(" ")}
              >

                {/* Gold active line */}

                <motion.span
                  animate={{
                    width: isActive ? "28px" : "0px",
                  }}
                  className="absolute left-6 top-0 h-px bg-[#b99755]"
                />

                <div className="flex items-start justify-between">

                  <span
                    className={[
                      "font-mono text-[9px] tracking-[0.2em]",
                      isActive
                        ? "text-[#b99755]"
                        : "text-white/25",
                    ].join(" ")}
                  >
                    {layer.number}
                  </span>

                  <span
                    className={[
                      "text-sm transition-all duration-300",
                      isActive
                        ? "translate-x-0 text-[#b99755]"
                        : "-translate-x-1 text-white/15",
                    ].join(" ")}
                  >
                    ↗
                  </span>

                </div>

                <div className="mt-8">

                  <div
                    className={[
                      "font-mono text-[8px] uppercase tracking-[0.23em] transition-colors duration-300",
                      isActive
                        ? "text-white/75"
                        : "text-white/35",
                    ].join(" ")}
                  >
                    {layer.label}
                  </div>

                  <div className="mt-2 text-[11px] leading-5 text-white/30">
                    {index === 0 &&
                      "Ingredients, pathways and clinical context."}

                    {index === 1 &&
                      "Understand differences in evidence strength."}

                    {index === 2 &&
                      "Responsible boundaries around wellness claims."}

                    {index === 3 &&
                      "Go deeper into the underlying material."}
                  </div>

                </div>

              </button>
            );
          })}

        </div>

        {/* ============================================================
            FOOTER CTA
        ============================================================ */}

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="max-w-[600px]">

            <p className="text-[11px] leading-5 text-white/30">
              The evidence framework is designed to keep established,
              moderate and emerging areas distinct rather than presenting
              all scientific claims as equivalent.
            </p>

          </div>

          <Link
            href="/science"
            className="group inline-flex shrink-0 items-center gap-7 border-b border-white/35 pb-2 transition-colors duration-300 hover:border-[#b99755]"
          >

            <span className="font-mono text-[9px] uppercase tracking-[0.27em] text-white/80">
              Explore the research
            </span>

            <span className="text-lg text-[#b99755] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
}