"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const C = {
  black: "#01050B",
  midnight: "#020812",
  deep: "#06152B",
  blue: "#0066FF",
  bright: "#1683FF",
  soft: "#4D9BFF",
  ice: "#8CCBFF",
  white: "#F7FAFF",
  muted: "rgba(247,250,255,0.68)",
  faint: "rgba(247,250,255,0.14)",
};

const families = [
  {
    name: "Cellular & Longevity",
    protocols: ["RENEW®", "APEX®", "NADEX®", "METHYBLU®"],
    description:
      "NAD⁺-pathway, mitochondrial and healthy-aging nutrition.",
  },
  {
    name: "Skin & Beauty",
    protocols: ["GLAMOUR®", "RADIANCE®", "RESTORE®"],
    description:
      "Antioxidant, collagen and micronutrient support for skin & hair.",
  },
  {
    name: "Metabolic & Performance",
    protocols: [
      "SHRINK®",
      "REFUEL®",
      "FIT®",
      "REBUILD®",
      "PERFORMANCE X®",
    ],
    description:
      "Energy metabolism, active-lifestyle and post-exertion nutrition.",
  },
  {
    name: "Recovery & Immune",
    protocols: ["REACTIVATE®", "BOUNCE BACK®", "RECOVER+®"],
    description:
      "Rehydration, immune-nutritional and systemic recovery support.",
  },
  {
    name: "Cognitive & Neuro",
    protocols: ["FOCUS®"],
    description:
      "Neuronal energy metabolism and mental-clarity nutrition.",
  },
  {
    name: "Digestive & Systemic",
    protocols: ["GUT+®"],
    description:
      "Gut-mucosal amino acid and micronutrient nutrition.",
  },
  {
    name: "Musculoskeletal",
    protocols: ["MOVE®"],
    description:
      "Bone, muscle and connective-tissue nutrition.",
  },
  {
    name: "Women's Wellness",
    protocols: ["FEMME®"],
    description:
      "Iron, folate and B12 nutrition for women's wellbeing.",
  },
];

const evidence = [
  {
    value: "45+",
    label: "Peer-reviewed NAD⁺ pathway studies",
  },
  {
    value: "19",
    label: "Physician-directed DRIPLABS protocols",
  },
  {
    value: "8",
    label: "Clinical & wellness families",
  },
  {
    value: "1st",
    label: "Licensed pharma-grade NAD⁺ IV brand in India",
  },
];

const programme = [
  {
    number: "01",
    title: "Clinical evaluation",
    body: "Your NADx journey begins with physician-led assessment and an understanding of your goals.",
  },
  {
    number: "02",
    title: "Protocol & dosage",
    body: "The supervising physician determines the appropriate protocol, dosage and infusion parameters.",
  },
  {
    number: "03",
    title: "NADx infusion",
    body: "The infusion is delivered directly under clinical supervision in a controlled environment.",
  },
  {
    number: "04",
    title: "Observation",
    body: "The experience continues with appropriate observation following the infusion.",
  },
  {
    number: "05",
    title: "Aftercare",
    body: "Follow-up keeps the experience connected to the broader DRIPLABS wellness journey.",
  },
];

const evidenceSources = [
  ["Berven", "2026"],
  ["Wu", "2025"],
  ["McDermott", "2024"],
  ["Conze", "2019"],
  ["Martens", "2018"],
  ["Zhou", "2020"],
  ["Christen", "2026"],
  ["Reyna", "2026"],
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={
        reduced
          ? { opacity: 1 }
          : { opacity: 0, y: 28 }
      }
      whileInView={
        reduced
          ? { opacity: 1 }
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduced ? 0 : 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MolecularField({
  intensity = 1,
}: {
  intensity?: number;
}) {
  const nodes = useMemo(
    () => [
      [18, 20],
      [31, 13],
      [46, 23],
      [62, 12],
      [77, 28],
      [87, 44],
      [70, 47],
      [52, 39],
      [36, 48],
      [17, 42],
      [28, 67],
      [46, 62],
      [63, 70],
      [80, 66],
      [55, 86],
      [34, 84],
      [89, 83],
    ],
    []
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.20), rgba(0,102,255,0.04) 42%, transparent 72%)",
          opacity: intensity,
        }}
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-[0.25]"
      >
        {nodes.map(([x1, y1], i) => {
          const target = nodes[(i + 3) % nodes.length];

          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={target[0]}
              y2={target[1]}
              stroke={C.soft}
              strokeWidth="0.08"
            />
          );
        })}

        {nodes.map(([x, y], i) => (
          <circle
            key={`node-${i}`}
            cx={x}
            cy={y}
            r={i % 4 === 0 ? 0.42 : 0.22}
            fill={C.ice}
          />
        ))}
      </svg>

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[min(80vw,900px)] w-[min(80vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1683FF]/10"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 110,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[min(62vw,680px)] w-[min(62vw,680px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8CCBFF]/10"
      />
    </div>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-white/40">
      <span className="text-[#4D9BFF]">{number}</span>
      <span className="h-px w-10 bg-[#0066FF]/50" />
      <span>{children}</span>
    </div>
  );
}

export default function NADxPage() {
  const reducedMotion = useReducedMotion();
  const [activeFamily, setActiveFamily] = useState(0);
  const [scienceMode, setScienceMode] = useState<
    "patient" | "physician"
  >("patient");
  const [activeProgramme, setActiveProgramme] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#01050B] text-[#F7FAFF] selection:bg-[#0066FF] selection:text-white"
      style={{
        fontFamily:
          "var(--font-dm-sans), Arial, sans-serif",
      }}
    >
      {/* =====================================================
          NADx NAVIGATION
      ====================================================== */}

      <header
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.07] bg-[#01050B]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1800px] items-center justify-between px-5 md:px-10 lg:px-14">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              DRIPLABS
            </span>

            <span className="h-3 w-px bg-white/20" />

            <span className="text-[11px] uppercase tracking-[0.28em] text-[#8CCBFF]">
              NADx
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["THE MOLECULE", "#molecule"],
              ["SCIENCE", "#science"],
              ["WHY IV", "#why-iv"],
              ["PROGRAMME", "#programme"],
              ["EVIDENCE", "#evidence"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[9px] uppercase tracking-[0.22em] text-white/45 transition-colors duration-300 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <Link
            href="/book"
            className="group relative overflow-hidden border border-[#1683FF]/50 px-4 py-2.5 text-[9px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[#1683FF] hover:bg-[#0066FF]"
          >
            <span className="relative z-10">
              Begin NADx
            </span>
          </Link>
        </div>
      </header>

      {/* =====================================================
          01 — ENTRY
      ====================================================== */}

      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <video
          src="/videos/NADx.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-[#01050B]/65" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,102,255,0.12),transparent_36%,rgba(1,5,11,0.92)_82%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#01050B]/80 via-transparent to-[#01050B]" />

        <MolecularField intensity={0.7} />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-20 pt-36 md:px-10 lg:px-16">
          <div className="max-w-[1100px]">
            <Reveal>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#1683FF]" />
                <span className="text-[10px] uppercase tracking-[0.34em] text-[#8CCBFF]">
                  The cellular flagship
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1
                className="font-light leading-[0.78] tracking-[-0.08em]"
                style={{
                  fontFamily:
                    "var(--font-cormorant), Georgia, serif",
                  fontSize:
                    "clamp(6rem, 17vw, 16rem)",
                }}
              >
                NAD
                <span className="text-[#1683FF]">x</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-[650px] text-[clamp(1rem,1.5vw,1.35rem)] font-light leading-[1.7] text-white/65">
                NAD⁺ Infusion Therapy.
                <br />
                India&apos;s first physician-led,
                pharmacopoeia-documented NAD⁺ IV
                programme — bringing hospital-grade
                cellular medicine into a clinically
                supervised wellness experience.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#molecule"
                  className="group flex items-center gap-5 bg-[#0066FF] px-6 py-4 text-[10px] uppercase tracking-[0.24em] transition-all duration-500 hover:bg-[#1683FF]"
                >
                  Enter the cellular world
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↓
                  </span>
                </a>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Physician supervised
                </span>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 flex items-end justify-between">
            <div className="text-[9px] uppercase tracking-[0.25em] text-white/30">
              DRIPLABS / NADx / 01
            </div>

            <motion.a
              href="#molecule"
              animate={
                reducedMotion
                  ? {}
                  : { y: [0, 7, 0] }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden text-[9px] uppercase tracking-[0.3em] text-white/35 md:block"
            >
              Scroll to enter
            </motion.a>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — MOLECULE
      ====================================================== */}

      <section
        id="molecule"
        className="relative min-h-[100svh] overflow-hidden border-t border-white/[0.06]"
      >
        <MolecularField intensity={0.9} />

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1500px] items-center gap-16 px-5 py-28 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
          <Reveal>
            <div>
              <SectionLabel number="02">
                The molecule
              </SectionLabel>

              <h2
                className="max-w-[700px] text-[clamp(3.6rem,7vw,8rem)] font-light leading-[0.86] tracking-[-0.065em]"
                style={{
                  fontFamily:
                    "var(--font-cormorant), Georgia, serif",
                }}
              >
                One molecule.
                <br />
                <span className="text-[#4D9BFF]">
                  A cellular story.
                </span>
              </h2>

              <p className="mt-9 max-w-[540px] text-[15px] leading-[1.9] text-white/55">
                NAD⁺ sits at the intersection of
                cellular energy, mitochondrial biology
                and pathways involved in everyday
                cellular processes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto flex aspect-square w-full max-w-[720px] items-center justify-center">
              <motion.div
                animate={
                  reducedMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[74%] w-[74%] rounded-full border border-[#1683FF]/20"
              />

              <motion.div
                animate={
                  reducedMotion
                    ? {}
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[52%] w-[52%] rounded-full border border-[#8CCBFF]/20"
              />

              <div className="absolute h-[34%] w-[34%] rounded-full bg-[#0066FF]/10 blur-[50px]" />

              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#1683FF]/60 bg-[#020812]/80 shadow-[0_0_100px_rgba(0,102,255,0.2)] backdrop-blur-xl md:h-52 md:w-52">
                <div className="text-center">
                  <div className="text-[clamp(3rem,7vw,6rem)] font-light tracking-[-0.08em]">
                    NAD
                    <span className="text-[#1683FF]">⁺</span>
                  </div>

                  <div className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/35">
                    Cellular cofactor
                  </div>
                </div>
              </div>

              {[
                ["CELLULAR ENERGY", "top-[8%] left-[8%]"],
                ["MITOCHONDRIA", "top-[15%] right-[3%]"],
                ["SIRTUINS", "bottom-[18%] right-[5%]"],
                ["PARP", "bottom-[10%] left-[12%]"],
              ].map(([label, pos]) => (
                <div
                  key={label}
                  className={`absolute ${pos} flex items-center gap-2`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_14px_#1683FF]" />
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          03 — SCIENCE
      ====================================================== */}

      <section
        id="science"
        className="relative border-t border-white/[0.06] bg-[#020812]"
      >
        <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40 lg:px-16">
          <Reveal>
            <SectionLabel number="03">
              The science, simply
            </SectionLabel>

            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <h2
                className="max-w-[850px] text-[clamp(3.8rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.07em]"
                style={{
                  fontFamily:
                    "var(--font-cormorant), Georgia, serif",
                }}
              >
                One molecule.
                <br />
                <span className="text-white/35">
                  Two ways to understand it.
                </span>
              </h2>

              <div className="flex border border-white/10 p-1">
                {(["patient", "physician"] as const).map(
                  (mode) => (
                    <button
                      key={mode}
                      onClick={() =>
                        setScienceMode(mode)
                      }
                      className={`px-5 py-3 text-[9px] uppercase tracking-[0.22em] transition-all duration-300 ${
                        scienceMode === mode
                          ? "bg-[#0066FF] text-white"
                          : "text-white/35 hover:text-white"
                      }`}
                    >
                      {mode}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mt-20 grid min-h-[440px] border border-white/[0.08] lg:grid-cols-[0.42fr_0.58fr]">
              <div className="relative overflow-hidden border-b border-white/[0.08] p-8 md:p-12 lg:border-b-0 lg:border-r">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#0066FF]/10 blur-[70px]" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-[#4D9BFF]">
                  {scienceMode === "patient"
                    ? "For the patient"
                    : "For the physician"}
                </span>

                <div className="relative mt-12">
                  <div
                    className="text-[clamp(4rem,8vw,7rem)] font-light leading-none tracking-[-0.08em]"
                    style={{
                      fontFamily:
                        "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    NAD
                    <span className="text-[#1683FF]">
                      ⁺
                    </span>
                  </div>

                  <div className="mt-5 h-px w-20 bg-[#0066FF]" />
                </div>
              </div>

              <div className="flex items-center p-8 md:p-12 lg:p-16">
                {scienceMode === "patient" ? (
                  <motion.div
                    key="patient"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-[720px]"
                  >
                    <p className="text-[clamp(1.4rem,2.5vw,2.4rem)] font-light leading-[1.45] tracking-[-0.03em] text-white/85">
                      NAD⁺ is what your cells use
                      in essential energy and
                      everyday cellular processes.
                    </p>

                    <p className="mt-8 max-w-[620px] text-sm leading-[1.9] text-white/45">
                      The NADx experience translates
                      this cellular story into a
                      physician-supervised wellness
                      programme designed around
                      the individual.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="physician"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-[720px]"
                  >
                    <p className="text-[clamp(1.3rem,2.2vw,2rem)] font-light leading-[1.55] text-white/85">
                      NAD⁺ is a required cofactor
                      for Complex I of the electron
                      transport chain and a substrate
                      for sirtuins (SIRT1–7) and PARP
                      enzymes involved in DNA-damage
                      response.
                    </p>

                    <p className="mt-8 text-sm leading-[1.9] text-white/45">
                      NADx is positioned as a
                      metabolic-support and
                      mitochondrial-optimisation
                      platform, adjunct to — not a
                      replacement for — conventional
                      therapy.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          04 — WHY IV
      ====================================================== */}

      <section
        id="why-iv"
        className="relative overflow-hidden border-t border-white/[0.06]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40 lg:px-16">
          <Reveal>
            <SectionLabel number="04">
              Why IV
            </SectionLabel>

            <h2
              className="max-w-[1000px] text-[clamp(4rem,8vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]"
              style={{
                fontFamily:
                  "var(--font-cormorant), Georgia, serif",
              }}
            >
              Why direct
              <br />
              <span className="text-[#1683FF]">
                NAD⁺?
              </span>
            </h2>

            <p className="mt-9 max-w-[650px] text-[15px] leading-[1.9] text-white/50">
              The NADx programme uses direct IV
              delivery rather than asking the body
              to first digest and convert an oral
              precursor.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            <Reveal>
              <div className="relative min-h-[560px] bg-[#030911] p-8 md:p-14">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Oral precursors
                </span>

                <div className="mt-16 space-y-0">
                  {[
                    "DIGEST",
                    "ABSORB",
                    "CONVERT",
                    "BECOME AVAILABLE",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="relative flex items-center gap-6 border-l border-white/10 py-7 pl-7"
                    >
                      <span className="absolute -left-[4px] h-2 w-2 rounded-full bg-white/25" />

                      <span className="text-[10px] tracking-[0.18em] text-white/35">
                        0{i + 1}
                      </span>

                      <span className="text-lg font-light text-white/60">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative min-h-[560px] bg-[#06152B] p-8 md:p-14">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#0066FF]/10 blur-[100px]" />

                <span className="relative text-[9px] uppercase tracking-[0.25em] text-[#8CCBFF]">
                  NADx direct IV
                </span>

                <div className="relative mt-16 space-y-0">
                  {[
                    "NAD⁺",
                    "DIRECT IV DELIVERY",
                    "PHYSICIAN CONTROL",
                    "INFUSION",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="relative flex items-center gap-6 border-l border-[#1683FF]/40 py-7 pl-7"
                    >
                      <span className="absolute -left-[5px] h-2.5 w-2.5 rounded-full bg-[#1683FF] shadow-[0_0_16px_#1683FF]" />

                      <span className="text-[10px] tracking-[0.18em] text-[#4D9BFF]">
                        0{i + 1}
                      </span>

                      <span className="text-lg font-light text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[820px] text-xs leading-[1.8] text-white/30">
              The supplied NADx programme material describes
              direct IV delivery as bypassing digestive
              absorption and enabling physician-controlled
              dosage and infusion rate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          05 — NUMBERS
      ====================================================== */}

      <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#01050B]">
        <MolecularField intensity={0.45} />

        <div className="relative z-10">
          {evidence.map((item, index) => (
            <div
              key={item.value}
              className="group relative flex min-h-[70vh] items-center overflow-hidden border-b border-white/[0.06] px-5 md:px-10 lg:px-16"
            >
              <div className="mx-auto grid w-full max-w-[1500px] items-center gap-10 md:grid-cols-[0.7fr_0.3fr]">
                <Reveal>
                  <div
                    className="text-[clamp(8rem,25vw,25rem)] font-light leading-[0.7] tracking-[-0.1em] text-white transition-colors duration-700 group-hover:text-[#1683FF]"
                    style={{
                      fontFamily:
                        "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    {item.value}
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="max-w-[300px]">
                    <div className="mb-5 h-px w-12 bg-[#0066FF]" />
                    <p className="text-[11px] uppercase tracking-[0.2em] leading-[1.8] text-white/45">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="pointer-events-none absolute bottom-8 right-8 text-[9px] uppercase tracking-[0.3em] text-white/15">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          06 — NADx UNIVERSE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#020812]">
        <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40 lg:px-16">
          <Reveal>
            <SectionLabel number="06">
              The protocol universe
            </SectionLabel>

            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <h2
                  className="max-w-[900px] text-[clamp(4rem,8vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]"
                  style={{
                    fontFamily:
                      "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  19 protocols.
                  <br />
                  <span className="text-[#1683FF]">
                    8 worlds.
                  </span>
                </h2>

                <p className="mt-8 max-w-[620px] text-sm leading-[1.9] text-white/45">
                  NADx exists within a wider physician-directed
                  DRIPLABS protocol system spanning eight
                  clinical and wellness families.
                </p>
              </div>

              <div className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                Explore the system
              </div>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal>
              <div className="sticky top-32 border border-white/[0.08] bg-[#01050B] p-7 md:p-9">
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#4D9BFF]">
                    Family
                  </span>

                  <span className="text-[9px] tracking-[0.2em] text-white/20">
                    {String(activeFamily + 1).padStart(
                      2,
                      "0"
                    )}{" "}
                    / 08
                  </span>
                </div>

                <h3
                  className="text-[clamp(2.5rem,4vw,4.5rem)] font-light leading-[0.9] tracking-[-0.06em]"
                  style={{
                    fontFamily:
                      "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  {families[activeFamily].name}
                </h3>

                <p className="mt-7 text-sm leading-[1.8] text-white/45">
                  {families[activeFamily].description}
                </p>

                <div className="mt-10 flex flex-wrap gap-2">
                  {families[activeFamily].protocols.map(
                    (protocol) => (
                      <span
                        key={protocol}
                        className="border border-[#1683FF]/25 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-[#8CCBFF]"
                      >
                        {protocol}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
                {families.map((family, index) => (
                  <button
                    key={family.name}
                    onClick={() =>
                      setActiveFamily(index)
                    }
                    className={`group relative min-h-[210px] overflow-hidden p-7 text-left transition-all duration-500 md:p-9 ${
                      activeFamily === index
                        ? "bg-[#06152B]"
                        : "bg-[#020812] hover:bg-[#06152B]/70"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-[2px] transition-transform duration-500 ${
                        activeFamily === index
                          ? "scale-y-100 bg-[#0066FF]"
                          : "scale-y-0 bg-[#0066FF] group-hover:scale-y-100"
                      }`}
                    />

                    <div className="flex items-start justify-between">
                      <span className="text-[9px] tracking-[0.2em] text-white/20">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="text-[#1683FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>

                    <h4
                      className="mt-12 text-[clamp(1.7rem,2.5vw,2.5rem)] font-light leading-[0.95] tracking-[-0.04em]"
                      style={{
                        fontFamily:
                          "var(--font-cormorant), Georgia, serif",
                      }}
                    >
                      {family.name}
                    </h4>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — PROGRAMME
      ====================================================== */}

      <section
        id="programme"
        className="relative border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40 lg:px-16">
          <Reveal>
            <SectionLabel number="07">
              The programme
            </SectionLabel>

            <h2
              className="max-w-[1050px] text-[clamp(4rem,8vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]"
              style={{
                fontFamily:
                  "var(--font-cormorant), Georgia, serif",
              }}
            >
              A programme.
              <br />
              <span className="text-white/30">
                Not simply a drip.
              </span>
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-14 lg:grid-cols-[0.4fr_0.6fr]">
            <Reveal>
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="border border-white/[0.08] bg-[#020812] p-8 md:p-10">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#4D9BFF]">
                    Current programme framework
                  </span>

                  <div
                    className="mt-8 text-[clamp(4rem,8vw,7rem)] font-light leading-none tracking-[-0.08em]"
                    style={{
                      fontFamily:
                        "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    ₹6,000
                  </div>

                  <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Starting per 100mg NAD⁺
                  </p>

                  <div className="mt-10 grid grid-cols-2 gap-px bg-white/[0.08]">
                    <div className="bg-[#020812] p-5">
                      <span className="text-2xl font-light">
                        5
                      </span>
                      <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-white/30">
                        Recommended sessions
                      </p>
                    </div>

                    <div className="bg-[#020812] p-5">
                      <span className="text-2xl font-light">
                        3–4h
                      </span>
                      <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-white/30">
                        Session duration
                      </p>
                    </div>
                  </div>

                  <p className="mt-8 text-xs leading-[1.8] text-white/35">
                    Final dosage and pricing are confirmed
                    by the supervising physician following
                    clinical evaluation.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative">
                <div className="absolute left-[15px] top-0 h-full w-px bg-white/[0.08]" />

                <div className="space-y-3">
                  {programme.map((step, index) => {
                    const active =
                      activeProgramme === index;

                    return (
                      <button
                        key={step.number}
                        onClick={() =>
                          setActiveProgramme(index)
                        }
                        className="group relative block w-full text-left"
                      >
                        <div className="flex gap-8">
                          <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#01050B]">
                            <span
                              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                active
                                  ? "bg-[#1683FF] shadow-[0_0_12px_#1683FF]"
                                  : "bg-white/20"
                              }`}
                            />
                          </div>

                          <div
                            className={`flex-1 border border-white/[0.08] p-7 transition-all duration-500 md:p-10 ${
                              active
                                ? "bg-[#06152B]"
                                : "bg-[#020812] group-hover:bg-[#06152B]/50"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-8">
                              <div>
                                <span className="text-[9px] tracking-[0.22em] text-[#4D9BFF]">
                                  {step.number}
                                </span>

                                <h3
                                  className="mt-4 text-[clamp(2rem,3vw,3.2rem)] font-light leading-none tracking-[-0.04em]"
                                  style={{
                                    fontFamily:
                                      "var(--font-cormorant), Georgia, serif",
                                  }}
                                >
                                  {step.title}
                                </h3>
                              </div>

                              <span className="text-xl font-light text-white/20">
                                {active ? "−" : "+"}
                              </span>
                            </div>

                            <motion.div
                              initial={false}
                              animate={{
                                height: active
                                  ? "auto"
                                  : 0,
                                opacity: active
                                  ? 1
                                  : 0,
                              }}
                              className="overflow-hidden"
                            >
                              <p className="max-w-[650px] pt-7 text-sm leading-[1.9] text-white/45">
                                {step.body}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — EVIDENCE
      ====================================================== */}

      <section
        id="evidence"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#F7FAFF] text-[#020812]"
      >
        <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40 lg:px-16">
          <Reveal>
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <div className="mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-[#0066FF]">
                  <span>08</span>
                  <span className="h-px w-10 bg-[#0066FF]" />
                  <span>The evidence room</span>
                </div>

                <h2
                  className="max-w-[900px] text-[clamp(4rem,8vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]"
                  style={{
                    fontFamily:
                      "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  Go deeper.
                  <br />
                  <span className="text-black/25">
                    Ask harder questions.
                  </span>
                </h2>
              </div>

              <p className="max-w-[360px] text-xs leading-[1.8] text-black/45">
                A physician-facing evidence layer keeps
                the science accessible without turning the
                consumer experience into a research paper.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-20 border-y border-black/10">
              {evidenceSources.map(([author, year], index) => (
                <details
                  key={author}
                  className="group border-b border-black/10 last:border-b-0"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-9">
                    <div className="flex items-center gap-7">
                      <span className="text-[9px] tracking-[0.2em] text-black/25">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span
                        className="text-[clamp(1.7rem,3vw,3rem)] font-light tracking-[-0.04em]"
                        style={{
                          fontFamily:
                            "var(--font-cormorant), Georgia, serif",
                        }}
                      >
                        {author}
                      </span>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-[9px] uppercase tracking-[0.18em] text-black/35">
                        {year}
                      </span>

                      <span className="text-xl font-light text-black/30 transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <div className="pb-8 pl-12 md:pl-16">
                    <p className="max-w-[650px] text-sm leading-[1.8] text-black/45">
                      Published NAD⁺ / NAD-related literature
                      referenced in the supplied NADx evidence
                      framework. Full source interpretation should
                      be handled in the physician-facing dossier.
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          09 — HONESTY
      ====================================================== */}

      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#01050B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1150px] px-5 py-32 text-center md:px-10">
          <Reveal>
            <div className="mx-auto mb-9 h-px w-16 bg-[#0066FF]" />

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#4D9BFF]">
              The important distinction
            </p>

            <h2
              className="mt-10 text-[clamp(3.2rem,7vw,7rem)] font-light leading-[0.9] tracking-[-0.065em]"
              style={{
                fontFamily:
                  "var(--font-cormorant), Georgia, serif",
              }}
            >
              NAD⁺ is not yet a universally
              accepted frontline pharmaceutical
              treatment.
            </h2>

            <p className="mx-auto mt-10 max-w-[760px] text-sm leading-[1.9] text-white/40">
              Current evidence supports its role as a
              metabolic-support and
              mitochondrial-optimisation platform —
              adjunct to, not a replacement for,
              conventional therapy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          10 — EXPERIENCE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#06152B]">
        <video
          src="/videos/NADx.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-[#06152B]/80" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40 lg:px-16">
          <Reveal>
            <SectionLabel number="09">
              Inside NADx
            </SectionLabel>

            <h2
              className="max-w-[1000px] text-[clamp(4rem,8vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]"
              style={{
                fontFamily:
                  "var(--font-cormorant), Georgia, serif",
              }}
            >
              The room.
              <br />
              <span className="text-[#8CCBFF]">
                The physician.
              </span>
              <br />
              The infusion.
            </h2>
          </Reveal>

          <div className="mt-24 grid border border-white/10 md:grid-cols-4">
            {[
              ["01", "ARRIVE"],
              ["02", "ASSESS"],
              ["03", "INFUSE"],
              ["04", "FOLLOW"],
            ].map(([number, title]) => (
              <Reveal
                key={number}
                delay={Number(number) * 0.05}
              >
                <div className="group relative min-h-[230px] border-b border-white/10 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-9">
                  <span className="text-[9px] tracking-[0.2em] text-[#4D9BFF]">
                    {number}
                  </span>

                  <h3
                    className="mt-16 text-[clamp(2rem,3vw,3rem)] font-light tracking-[-0.04em]"
                    style={{
                      fontFamily:
                        "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    {title}
                  </h3>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0066FF] transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          11 — LUMORA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#01050B]">
        <div className="mx-auto grid max-w-[1500px] items-center gap-16 px-5 py-28 md:px-10 md:py-40 lg:grid-cols-2 lg:px-16">
          <Reveal>
            <div>
              <SectionLabel number="10">
                Beyond the clinic
              </SectionLabel>

              <h2
                className="text-[clamp(4rem,8vw,8rem)] font-light leading-[0.82] tracking-[-0.075em]"
                style={{
                  fontFamily:
                    "var(--font-cormorant), Georgia, serif",
                }}
              >
                NADx can
                <br />
                <span className="text-[#1683FF]">
                  travel.
                </span>
              </h2>

              <p className="mt-9 max-w-[560px] text-sm leading-[1.9] text-white/45">
                Also available through LUMORA —
                DRIPLABS&apos; concierge home-wellness
                platform, bringing physician-led IV
                protocols to your home, office or hotel
                under the same clinical safeguards.
              </p>

              <Link
                href="/experience/home"
                className="mt-9 inline-flex border border-white/15 px-6 py-4 text-[9px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[#1683FF] hover:bg-[#0066FF]"
              >
                Explore LUMORA
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <video
                src="/videos/NADx.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#01050B] via-transparent to-[#01050B]/20" />

              <div className="absolute bottom-8 left-8">
                <div className="text-[9px] uppercase tracking-[0.28em] text-[#8CCBFF]">
                  LUMORA / NADx
                </div>

                <div
                  className="mt-3 text-4xl font-light tracking-[-0.04em]"
                  style={{
                    fontFamily:
                      "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  The cellular experience,
                  <br />
                  wherever you are.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          12 — FINAL
      ====================================================== */}

      <section className="relative flex min-h-[90vh] items-center overflow-hidden border-t border-white/[0.06] bg-[#020812]">
        <MolecularField intensity={0.85} />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-32 text-center md:px-10">
          <Reveal>
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#4D9BFF]">
              Begin your NADx journey
            </p>

            <h2
              className="mt-8 text-[clamp(5rem,14vw,14rem)] font-light leading-[0.72] tracking-[-0.09em]"
              style={{
                fontFamily:
                  "var(--font-cormorant), Georgia, serif",
              }}
            >
              NAD
              <span className="text-[#1683FF]">x</span>
            </h2>

            <p className="mx-auto mt-12 max-w-[560px] text-sm leading-[1.9] text-white/40">
              Begin with a physician assessment and
              discover whether the NADx programme is
              appropriate for you.
            </p>

            <Link
              href="/book"
              className="group mt-10 inline-flex items-center gap-6 bg-[#0066FF] px-8 py-5 text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-[#1683FF]"
            >
              Begin your NADx journey

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>

            <div className="mt-8 text-[8px] uppercase tracking-[0.22em] text-white/20">
              Physician assessment required
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          NADx FOOTER
      ====================================================== */}

      <footer className="border-t border-white/[0.06] bg-[#01050B]">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 px-5 py-8 md:flex-row md:items-center md:px-10 lg:px-16">
          <Link
            href="/"
            className="text-[9px] uppercase tracking-[0.28em] text-white/35 transition-colors hover:text-white"
          >
            ← Return to DRIPLABS
          </Link>

          <div className="text-[8px] uppercase tracking-[0.22em] text-white/15">
            DRIPLABS / NADx / Cellular & Longevity
          </div>
        </div>
      </footer>
    </main>
  );
}