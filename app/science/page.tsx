"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

/* =========================================================
   TYPES
========================================================= */

type ScienceSection = {
  id: string;
  number: string;
  label: string;
};

/* =========================================================
   SCIENCE NAVIGATION
========================================================= */

const scienceSections: ScienceSection[] = [
  {
    id: "standard",
    number: "01",
    label: "The DRIPLABS Standard",
  },
  {
    id: "nadx",
    number: "02",
    label: "NADx",
  },
  {
    id: "evidence",
    number: "03",
    label: "Evidence & Research",
  },
  {
    id: "ingredients",
    number: "04",
    label: "Ingredients",
  },
  {
    id: "traceability",
    number: "05",
    label: "Quality & Traceability",
  },
  {
    id: "coa",
    number: "06",
    label: "COA Library",
  },
  {
    id: "decode",
    number: "07",
    label: "Decode a Vial",
  },
  {
    id: "dossier",
    number: "08",
    label: "Physician Dossier",
  },
];

/* =========================================================
   STANDARD
========================================================= */

const standardPrinciples = [
  {
    number: "01",
    title: "Physician-led",
    description:
      "DRIPLABS is positioned around physician-directed wellness, with protocol selection and administration subject to clinical assessment.",
  },
  {
    number: "02",
    title: "Pharma-grade",
    description:
      "The system is built around a pharmaceutical-quality positioning rather than an unsupervised retail wellness model.",
  },
  {
    number: "03",
    title: "Traceable",
    description:
      "The DRIPLABS model places documentation, formulation transparency and quality information at the centre of the experience.",
  },
  {
    number: "04",
    title: "Made in India",
    description:
      "The platform is developed around Indian manufacturing and clinical delivery while maintaining a global-standard positioning.",
  },
];

/* =========================================================
   PROTOCOL ARCHITECTURE
========================================================= */

const protocolLayers = [
  {
    number: "01",
    title: "Wellness focus",
    text: "Each protocol begins with a defined wellness pathway rather than a generic infusion menu.",
  },
  {
    number: "02",
    title: "Nutrient architecture",
    text: "The formulation combines selected vitamins, amino acids, antioxidants, minerals, hydration components or other protocol-specific actives.",
  },
  {
    number: "03",
    title: "Clinical context",
    text: "Protocol selection, dosage and administration remain subject to physician assessment and the applicable clinical framework.",
  },
  {
    number: "04",
    title: "Administration",
    text: "The selected formulation is delivered within a physician-supervised DRIPLABS experience.",
  },
];

/* =========================================================
   NADx
========================================================= */

const nadxStats = [
  {
    value: "45+",
    label: "Peer-reviewed NAD⁺ pathway studies",
  },
  {
    value: "19",
    label: "Physician-directed protocols",
  },
  {
    value: "08",
    label: "Wellness families",
  },
  {
    value: "01",
    label: "Licensed pharma-grade NAD⁺ IV brand in India",
  },
];

/* =========================================================
   EVIDENCE
========================================================= */

const evidenceSources = [
  {
    year: "2026",
    author: "Berven et al.",
    topic: "NAD⁺ pathway research",
  },
  {
    year: "2025",
    author: "Wu et al.",
    topic: "NAD⁺ / metabolic research",
  },
  {
    year: "2024",
    author: "McDermott et al.",
    topic: "NAD⁺ research",
  },
  {
    year: "2019",
    author: "Conze et al.",
    topic: "NAD⁺ precursor research",
  },
  {
    year: "2018",
    author: "Martens et al.",
    topic: "NAD⁺ metabolism",
  },
  {
    year: "2020",
    author: "Zhou et al.",
    topic: "NAD⁺ pathway research",
  },
  {
    year: "2026",
    author: "Christen et al.",
    topic: "NAD⁺ research",
  },
  {
    year: "2026",
    author: "Reyna et al.",
    topic: "NAD⁺ research",
  },
];

/* =========================================================
   INGREDIENT GROUPS
========================================================= */

const ingredientGroups = [
  {
    number: "01",
    title: "Antioxidants",
    examples: "Glutathione · Vitamin C · NAC",
    description:
      "Antioxidant-oriented components appearing across multiple DRIPLABS formulations.",
  },
  {
    number: "02",
    title: "Amino acids",
    examples: "L-Alanyl-L-Glutamine · Essential Amino Acids",
    description:
      "Amino-acid architecture varies according to the protocol's intended wellness focus.",
  },
  {
    number: "03",
    title: "Vitamins",
    examples: "B-Complex · B12 · Folate · Vitamin C · Vitamin D3",
    description:
      "Selected vitamin components are incorporated according to the formulation architecture.",
  },
  {
    number: "04",
    title: "Minerals",
    examples: "Zinc · Magnesium · Multi-Trace Minerals",
    description:
      "Mineral components form part of selected protocol formulations.",
  },
  {
    number: "05",
    title: "Protocol-specific actives",
    examples: "NAD⁺ · L-Carnitine · Methylene Blue",
    description:
      "Certain formulations contain more specific actives associated with their individual protocol architecture.",
  },
  {
    number: "06",
    title: "Hydration base",
    examples: "Electrolyte hydration base",
    description:
      "Hydration components form the delivery base for many of the IV formulations.",
  },
];

/* =========================================================
   TRACEABILITY
========================================================= */

const traceabilitySteps = [
  {
    number: "01",
    title: "Formulation",
    text: "The protocol has a defined nutrient architecture.",
  },
  {
    number: "02",
    title: "Documentation",
    text: "The formulation is documented rather than presented as an undisclosed proprietary blend.",
  },
  {
    number: "03",
    title: "Verification",
    text: "Quality and supporting documentation form part of the DRIPLABS transparency framework.",
  },
  {
    number: "04",
    title: "Physician review",
    text: "The final protocol, dosage and administration remain subject to physician assessment.",
  },
];

/* =========================================================
   HELPERS
========================================================= */

const easeLuxury = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={
        reducedMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: easeLuxury,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionNumber({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[9px] uppercase tracking-[0.25em] text-[#4D9BFF]">
        {number}
      </span>

      <span className="h-px w-8 bg-[#1683FF]/60" />

      <span className="text-[9px] uppercase tracking-[0.28em] text-white/40">
        {label}
      </span>
    </div>
  );
}

function MoleculeField() {
  const nodes = [
    [12, 20],
    [24, 42],
    [38, 17],
    [50, 34],
    [63, 14],
    [74, 44],
    [87, 25],
    [30, 72],
    [51, 64],
    [68, 78],
    [86, 66],
    [16, 82],
  ];

  const connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [1, 7],
    [3, 8],
    [5, 9],
    [7, 8],
    [8, 9],
    [9, 10],
    [7, 11],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/[0.07] blur-[110px]" />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-70"
        preserveAspectRatio="none"
      >
        {connections.map(([a, b], index) => {
          const [x1, y1] = nodes[a];
          const [x2, y2] = nodes[b];

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#1683FF"
              strokeOpacity="0.18"
              strokeWidth="0.08"
            />
          );
        })}

        {nodes.map(([x, y], index) => (
          <g key={index}>
            <circle
              cx={x}
              cy={y}
              r="0.7"
              fill="#8CCBFF"
              fillOpacity="0.8"
            />

            <circle
              cx={x}
              cy={y}
              r="1.7"
              fill="none"
              stroke="#1683FF"
              strokeOpacity="0.18"
              strokeWidth="0.08"
            />
          </g>
        ))}
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,8,18,.18)_45%,#020812_100%)]" />
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function SciencePage() {
  const [activeEvidence, setActiveEvidence] = useState(0);

  const currentEvidence = useMemo(
    () => evidenceSources[activeEvidence],
    [activeEvidence],
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020812] text-[#F7FAFF]">
      <Navbar />

      {/* =====================================================
          00 — HERO
      ===================================================== */}

      <section className="relative min-h-[88svh] overflow-hidden bg-[#020812]">
        <MoleculeField />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,203,255,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,203,255,.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-[1800px] flex-col justify-between px-5 pb-8 pt-32 sm:px-8 md:px-10 lg:px-14 lg:pb-12">
          <Reveal>
            <SectionNumber
              number="SCIENCE"
              label="The thinking behind the experience"
            />
          </Reveal>

          <div className="max-w-[1250px]">
            <Reveal delay={0.08}>
              <p className="text-[9px] uppercase tracking-[0.34em] text-[#4D9BFF]">
                DRIPLABS / SCIENCE
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <h1 className="mt-6 max-w-[1200px] font-[var(--font-heading)] text-[clamp(4.4rem,10vw,10.5rem)] font-light leading-[0.78] tracking-[-0.075em]">
                Science,
                <br />
                <span className="text-white/35">made visible.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-9 max-w-2xl border-l border-[#1683FF] pl-5 text-[13px] leading-7 text-white/55 md:text-[14px]">
                Explore how DRIPLABS approaches formulation, evidence,
                ingredients, quality and physician-directed wellness — from
                the protocol architecture to the vial itself.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 border-t border-white/10 pt-5 md:grid-cols-4">
              <div>
                <p className="font-[var(--font-heading)] text-4xl font-light">
                  19
                </p>
                <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-white/30">
                  Protocols
                </p>
              </div>

              <div>
                <p className="font-[var(--font-heading)] text-4xl font-light">
                  08
                </p>
                <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-white/30">
                  Wellness families
                </p>
              </div>

              <div className="mt-6 md:mt-0">
                <p className="font-[var(--font-heading)] text-4xl font-light">
                  45+
                </p>
                <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-white/30">
                  NAD⁺ pathway studies
                </p>
              </div>

              <div className="mt-6 md:mt-0">
                <p className="font-[var(--font-heading)] text-4xl font-light">
                  01
                </p>
                <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-white/30">
                  NAD⁺ programme
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          01 — SCIENCE INDEX
      ===================================================== */}

      <section className="sticky top-0 z-40 border-y border-white/10 bg-[#020812]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 md:px-10 lg:px-14">
          <div className="flex overflow-x-auto [scrollbar-width:none]">
            {scienceSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex shrink-0 items-center gap-3 border-r border-white/10 px-5 py-4 text-[8px] uppercase tracking-[0.2em] text-white/35 transition-colors first:pl-0 hover:text-[#8CCBFF]"
              >
                <span className="text-[#1683FF]/60">
                  {section.number}
                </span>

                <span>{section.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — STANDARD
      ===================================================== */}

      <section id="standard" className="bg-[#F7FAFF] text-[#06152B]">
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <Reveal>
            <SectionNumber
              number="01"
              label="The DRIPLABS Standard"
            />
          </Reveal>

          <div className="mt-12 grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal>
              <h2 className="font-[var(--font-heading)] text-[clamp(3.6rem,7vw,8rem)] font-light leading-[0.82] tracking-[-0.07em]">
                Not just
                <br />
                what is
                <br />
                inside.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <p className="max-w-3xl text-[15px] leading-8 text-[#06152B]/60 md:text-[17px]">
                  The DRIPLABS Standard extends beyond the formulation itself.
                  It brings together physician direction, pharmaceutical
                  quality positioning, traceability and Indian manufacturing
                  into one considered system.
                </p>

                <div className="mt-14 grid gap-px overflow-hidden border border-[#06152B]/10 bg-[#06152B]/10 sm:grid-cols-2">
                  {standardPrinciples.map((item) => (
                    <div
                      key={item.number}
                      className="group bg-[#F7FAFF] p-7 transition-colors duration-500 hover:bg-[#EAF3FF] md:p-9"
                    >
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#0066FF]">
                        {item.number}
                      </span>

                      <h3 className="mt-8 font-[var(--font-heading)] text-3xl font-light tracking-[-0.04em]">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-[12px] leading-6 text-[#06152B]/50">
                        {item.description}
                      </p>

                      <div className="mt-8 h-px w-10 bg-[#0066FF] transition-all duration-500 group-hover:w-20" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — PROTOCOL ARCHITECTURE
      ===================================================== */}

      <section className="relative bg-[#06152B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(0,102,255,.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <Reveal>
            <SectionNumber
              number="HOW IT WORKS"
              label="Protocol architecture"
            />
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <h2 className="font-[var(--font-heading)] text-[clamp(3.5rem,6vw,7rem)] font-light leading-[0.84] tracking-[-0.065em]">
                  From
                  <br />
                  concept
                  <br />
                  to vial.
                </h2>

                <p className="mt-8 max-w-md text-[13px] leading-7 text-white/45">
                  A DRIPLABS protocol is not presented as a single
                  ingredient. It is a structured formulation designed around
                  a defined wellness pathway.
                </p>
              </div>
            </Reveal>

            <div className="border-t border-white/10">
              {protocolLayers.map((layer, index) => (
                <Reveal key={layer.number} delay={index * 0.05}>
                  <div className="grid gap-6 border-b border-white/10 py-8 md:grid-cols-[80px_240px_1fr] md:items-start">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#4D9BFF]">
                      {layer.number}
                    </span>

                    <h3 className="font-[var(--font-heading)] text-3xl font-light">
                      {layer.title}
                    </h3>

                    <p className="max-w-xl text-[12px] leading-6 text-white/45">
                      {layer.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — NADx
      ===================================================== */}

      <section id="nadx" className="relative overflow-hidden bg-[#01050B]">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover opacity-30"
          >
            <source src="/videos/NADx.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[#01050B]/65" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,102,255,.2),transparent_42%)]" />
        </div>

        <div className="relative mx-auto max-w-[1800px] px-5 py-28 sm:px-8 md:px-10 md:py-36 lg:px-14 lg:py-48">
          <Reveal>
            <SectionNumber
              number="02"
              label="NADx · Cellular & Longevity"
            />
          </Reveal>

          <div className="mt-14 max-w-[1100px]">
            <Reveal delay={0.08}>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#4D9BFF]">
                THE FLAGSHIP
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(4rem,9vw,10rem)] font-light leading-[0.78] tracking-[-0.075em]">
                NAD<span className="text-[#1683FF]">x</span>
              </h2>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-8 max-w-2xl text-[14px] leading-7 text-white/55 md:text-[16px]">
                India&apos;s first physician-led, pharmacopoeia-documented
                NAD⁺ IV programme, positioned around direct NAD⁺ infusion
                within a clinically supervised wellness experience.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {nadxStats.map((stat) => (
              <Reveal key={stat.label}>
                <div className="bg-[#01050B]/85 p-7 md:p-9">
                  <p className="font-[var(--font-heading)] text-5xl font-light tracking-[-0.05em]">
                    {stat.value}
                  </p>

                  <p className="mt-4 max-w-[180px] text-[9px] uppercase leading-5 tracking-[0.18em] text-white/35">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/nadx"
                className="inline-flex min-h-12 items-center bg-[#0066FF] px-7 text-[9px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#1683FF]"
              >
                Enter NADx
                <span className="ml-6">→</span>
              </Link>

              <a
                href="#evidence"
                className="inline-flex min-h-12 items-center border border-white/15 px-7 text-[9px] uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:border-[#4D9BFF] hover:text-white"
              >
                Explore evidence
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          05 — EVIDENCE
      ===================================================== */}

      <section id="evidence" className="bg-[#020812]">
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <Reveal>
            <SectionNumber
              number="03"
              label="Evidence & Research"
            />
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <Reveal>
              <div>
                <h2 className="font-[var(--font-heading)] text-[clamp(3.5rem,6.5vw,7.5rem)] font-light leading-[0.82] tracking-[-0.07em]">
                  Evidence
                  <br />
                  before
                  <br />
                  language.
                </h2>

                <p className="mt-8 max-w-md text-[13px] leading-7 text-white/45">
                  The scientific layer is intentionally separated from
                  marketing language. Research should be understood in its
                  own context, including the limits of what current evidence
                  can establish.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <div className="grid gap-6 border-y border-white/10 py-8 md:grid-cols-2">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.24em] text-[#4D9BFF]">
                      CURRENT POSITION
                    </p>

                    <p className="mt-5 text-[13px] leading-7 text-white/55">
                      Current evidence supports NAD⁺ research as an expanding
                      area of metabolic and mitochondrial investigation.
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.24em] text-[#4D9BFF]">
                      IMPORTANT CONTEXT
                    </p>

                    <p className="mt-5 text-[13px] leading-7 text-white/55">
                      NAD⁺ is not presented here as a replacement for
                      conventional therapy or as a universal frontline
                      pharmaceutical treatment.
                    </p>
                  </div>
                </div>

                <div className="mt-10 overflow-hidden border border-white/10">
                  {evidenceSources.map((source, index) => {
                    const active = activeEvidence === index;

                    return (
                      <button
                        key={`${source.author}-${source.year}`}
                        type="button"
                        onClick={() => setActiveEvidence(index)}
                        className={`grid w-full gap-4 border-b border-white/10 p-5 text-left transition-colors duration-300 last:border-b-0 md:grid-cols-[80px_1fr_1fr] md:items-center ${
                          active
                            ? "bg-[#06152B]"
                            : "hover:bg-white/[0.025]"
                        }`}
                      >
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#4D9BFF]">
                          {source.year}
                        </span>

                        <span className="font-[var(--font-heading)] text-2xl font-light">
                          {source.author}
                        </span>

                        <span className="text-[11px] text-white/35">
                          {source.topic}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentEvidence.author}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 border-l border-[#1683FF] pl-5"
                  >
                    <p className="text-[8px] uppercase tracking-[0.25em] text-[#4D9BFF]">
                      SELECTED REFERENCE
                    </p>

                    <p className="mt-3 font-[var(--font-heading)] text-3xl font-light">
                      {currentEvidence.author} · {currentEvidence.year}
                    </p>

                    <p className="mt-3 text-[11px] leading-6 text-white/35">
                      Reference listed in the DRIPLABS evidence dossier.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — INGREDIENTS
      ===================================================== */}

      <section id="ingredients" className="bg-[#F7FAFF] text-[#06152B]">
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <Reveal>
            <SectionNumber
              number="04"
              label="Ingredients"
            />
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">
            <Reveal>
              <div>
                <h2 className="font-[var(--font-heading)] text-[clamp(3.5rem,6.5vw,7.5rem)] font-light leading-[0.82] tracking-[-0.07em]">
                  Know
                  <br />
                  what&apos;s
                  <br />
                  inside.
                </h2>

                <p className="mt-8 max-w-md text-[13px] leading-7 text-[#06152B]/50">
                  DRIPLABS formulations use different combinations of vitamins,
                  amino acids, antioxidants, minerals, hydration components
                  and protocol-specific actives.
                </p>

                <Link
                  href="/#decode-a-vial"
                  className="mt-8 inline-flex min-h-12 items-center border border-[#06152B] px-6 text-[9px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-[#06152B] hover:text-white"
                >
                  Decode every vial
                  <span className="ml-6">→</span>
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-px border border-[#06152B]/10 bg-[#06152B]/10 sm:grid-cols-2">
              {ingredientGroups.map((group, index) => (
                <Reveal key={group.number} delay={index * 0.035}>
                  <div className="group min-h-[230px] bg-[#F7FAFF] p-7 transition-colors duration-500 hover:bg-[#EAF3FF] md:p-9">
                    <div className="flex items-start justify-between">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#0066FF]">
                        {group.number}
                      </span>

                      <span className="h-2 w-2 rounded-full border border-[#0066FF]/50 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#0066FF]" />
                    </div>

                    <h3 className="mt-12 font-[var(--font-heading)] text-3xl font-light tracking-[-0.04em]">
                      {group.title}
                    </h3>

                    <p className="mt-4 text-[10px] uppercase leading-5 tracking-[0.12em] text-[#06152B]/45">
                      {group.examples}
                    </p>

                    <p className="mt-5 text-[11px] leading-6 text-[#06152B]/45">
                      {group.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — TRACEABILITY
      ===================================================== */}

      <section id="traceability" className="bg-[#06152B]">
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <Reveal>
            <SectionNumber
              number="05"
              label="Quality & Traceability"
            />
          </Reveal>

          <div className="mt-14 grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div>
                <h2 className="font-[var(--font-heading)] text-[clamp(3.5rem,6.5vw,7.5rem)] font-light leading-[0.82] tracking-[-0.07em]">
                  Nothing
                  <br />
                  hidden
                  <br />
                  behind a
                  <br />
                  name.
                </h2>

                <p className="mt-8 max-w-md text-[13px] leading-7 text-white/45">
                  Transparency is part of the experience. The formulation,
                  supporting documentation and clinical context should remain
                  understandable to the physician and the person receiving the
                  protocol.
                </p>
              </div>
            </Reveal>

            <div className="border-t border-white/10">
              {traceabilitySteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.05}>
                  <div className="grid gap-5 border-b border-white/10 py-9 md:grid-cols-[80px_260px_1fr] md:items-center">
                    <span className="text-[9px] uppercase tracking-[0.24em] text-[#4D9BFF]">
                      {step.number}
                    </span>

                    <h3 className="font-[var(--font-heading)] text-3xl font-light">
                      {step.title}
                    </h3>

                    <p className="max-w-xl text-[12px] leading-6 text-white/40">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — COA
      ===================================================== */}

      <section id="coa" className="bg-[#020812]">
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <Reveal>
            <SectionNumber
              number="06"
              label="COA Library"
            />
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.82] tracking-[-0.07em]">
                The
                <br />
                paperwork
                <br />
                matters.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="max-w-xl text-[14px] leading-7 text-white/50">
                  The COA layer is where quality documentation becomes
                  accessible rather than remaining an invisible back-office
                  process.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {[
                    "Batch documentation",
                    "Ingredient verification",
                    "Quality records",
                    "Supporting documentation",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="border border-white/10 bg-[#06152B] p-5"
                    >
                      <span className="text-[8px] uppercase tracking-[0.22em] text-[#4D9BFF]">
                        0{index + 1}
                      </span>

                      <p className="mt-7 font-[var(--font-heading)] text-2xl font-light">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-l border-[#1683FF] pl-5">
                  <p className="text-[10px] leading-6 text-white/35">
                    COA documents should be linked here once the final
                    approved document library is connected to the website.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — DECODE
      ===================================================== */}

      <section id="decode" className="bg-[#EAF3FF] text-[#06152B]">
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <Reveal>
            <SectionNumber
              number="07"
              label="Decode a Vial"
            />
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-24">
            <Reveal>
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-[#0066FF]">
                  FROM SYSTEM TO FORMULATION
                </p>

                <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(3.6rem,7vw,8rem)] font-light leading-[0.82] tracking-[-0.07em]">
                  Don&apos;t just
                  <br />
                  choose a
                  <br />
                  protocol.
                  <br />
                  <span className="text-[#0066FF]">
                    Understand it.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-[13px] leading-7 text-[#06152B]/55">
                  Decode a Vial takes the science one level deeper: protocol
                  by protocol, ingredient by ingredient, with the formulation
                  architecture visible in one structured experience.
                </p>

                <Link
                  href="/#decode-a-vial"
                  className="mt-9 inline-flex min-h-12 items-center bg-[#0066FF] px-7 text-[9px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#1683FF]"
                >
                  Open Decode a Vial
                  <span className="ml-6">→</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative mx-auto aspect-square w-full max-w-[520px]">
                <div className="absolute inset-[10%] rounded-full border border-[#0066FF]/20" />
                <div className="absolute inset-[20%] rounded-full border border-[#0066FF]/25" />
                <div className="absolute inset-[30%] rounded-full border border-[#0066FF]/30" />

                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#06152B] text-center text-[8px] uppercase tracking-[0.2em] text-white">
                  FORMULATION
                </div>

                {[
                  ["Vitamins", "top-[4%] left-1/2 -translate-x-1/2"],
                  ["Amino acids", "right-[4%] top-1/2 -translate-y-1/2"],
                  ["Minerals", "bottom-[7%] left-1/2 -translate-x-1/2"],
                  ["Actives", "left-[4%] top-1/2 -translate-y-1/2"],
                ].map(([label, position]) => (
                  <div
                    key={label}
                    className={`absolute ${position} flex h-20 w-20 items-center justify-center rounded-full border border-[#0066FF]/30 bg-white/70 text-center text-[7px] uppercase tracking-[0.14em]`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          10 — PHYSICIAN DOSSIER
      ===================================================== */}

      <section id="dossier" className="bg-[#F7FAFF] text-[#06152B]">
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <Reveal>
            <SectionNumber
              number="08"
              label="Physician Dossier"
            />
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal>
              <div>
                <h2 className="font-[var(--font-heading)] text-[clamp(3.5rem,6.5vw,7.5rem)] font-light leading-[0.82] tracking-[-0.07em]">
                  Built for
                  <br />
                  deeper
                  <br />
                  questions.
                </h2>

                <p className="mt-8 max-w-md text-[13px] leading-7 text-[#06152B]/50">
                  The public experience explains the system. The physician
                  dossier provides the deeper technical and clinical context
                  required for professional review.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Protocol architecture",
                  "Ingredient composition",
                  "Evidence references",
                  "NAD⁺ research",
                  "Clinical framing",
                  "Administration context",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="group border border-[#06152B]/10 p-7 transition-colors duration-500 hover:bg-[#EAF3FF]"
                  >
                    <span className="text-[8px] uppercase tracking-[0.25em] text-[#0066FF]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-10 font-[var(--font-heading)] text-2xl font-light">
                      {item}
                    </h3>

                    <div className="mt-8 h-px w-8 bg-[#0066FF] transition-all duration-500 group-hover:w-16" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          11 — SCIENCE NOTE
      ===================================================== */}

      <section className="bg-[#06152B] text-white">
        <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
              <div>
                <p className="text-[8px] uppercase tracking-[0.28em] text-[#4D9BFF]">
                  IMPORTANT
                </p>
              </div>

              <div>
                <p className="max-w-5xl font-[var(--font-heading)] text-[clamp(2.8rem,5vw,5.8rem)] font-light leading-[0.92] tracking-[-0.055em]">
                  Protocol names describe a wellness focus — not a guaranteed
                  medical outcome.
                </p>

                <p className="mt-8 max-w-2xl text-[12px] leading-6 text-white/40">
                  Final protocol selection, dosage and administration remain
                  subject to physician assessment and the applicable
                  professional clinical framework.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          12 — CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#020812]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,102,255,.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-44">
          <Reveal>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#4D9BFF]">
              YOUR NEXT STEP
            </p>

            <h2 className="mt-7 max-w-[1100px] font-[var(--font-heading)] text-[clamp(4rem,8vw,9rem)] font-light leading-[0.8] tracking-[-0.075em]">
              Understand
              <br />
              the system.
              <br />
              <span className="text-white/30">
                Then begin.
              </span>
            </h2>

            <p className="mt-9 max-w-xl text-[13px] leading-7 text-white/45">
              Explore the science, decode the formulations, then speak with
              the DRIPLABS team about the path appropriate to you.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center bg-[#0066FF] px-7 text-[9px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#1683FF]"
              >
                Book a Physician Consultation
                <span className="ml-6">→</span>
              </Link>

              <Link
                href="/protocols"
                className="inline-flex min-h-12 items-center border border-white/15 px-7 text-[9px] uppercase tracking-[0.22em] text-white/55 transition-colors duration-300 hover:border-[#4D9BFF] hover:text-white"
              >
                Explore Protocols
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}