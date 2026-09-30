"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";

/* =========================================================
   STANDARD DATA
   ========================================================= */

const trustPoints = [
  {
    number: "01",
    title: "Physician-Led",
    short:
      "Every protocol begins with a physician assessment. Never a menu you self-select.",
    detail:
      "Protocol selection begins with professional assessment and supervision rather than a self-selected treatment menu.",
  },
  {
    number: "02",
    title: "Licensed & Pharma-Grade",
    short:
      "IP/BP/USP pharmacopoeial standards and pharmaceutical manufacturing discipline.",
    detail:
      "The product framework incorporates pharmacopoeial standards including IP, BP and USP.",
  },
  {
    number: "03",
    title: "Clinical Evidence & Documented Protocols",
    short:
      "Formulations and protocols are structured around documented clinical information.",
    detail:
      "Clinical information and documented protocols form part of the framework behind the DRIPLABS experience.",
  },
  {
    number: "04",
    title: "Batch Traceable",
    short:
      "Every kit carries a batch number, expiry information and Certificate of Analysis.",
    detail:
      "Batch identification, expiry information and Certificate of Analysis documentation create a traceable product record.",
  },
  {
    number: "05",
    title: "Third-Party Tested",
    short:
      "Quality verification forms part of the product documentation and formulation story.",
    detail:
      "Product quality verification is represented as part of the broader documentation layer.",
  },
  {
    number: "06",
    title: "Researched & Science Backed",
    short:
      "Formulation decisions are connected to documented research and scientific references.",
    detail:
      "Research, scientific pathways and documented references provide the foundation for the science layer.",
  },
];

/* =========================================================
   CENTRAL STATES
   ========================================================= */

const standardStates = {
  "01": {
    eyebrow: "01 / 06",
    title: "Physician-Led",
    sub: "Professional supervision",
    formulation: "ASSESSMENT",
    formulationValue: "PHYSICIAN",
    leftLabel: "PERSONALISED",
    leftValue: "PROTOCOL",
    rightLabel: "ADMINISTRATION",
    rightValue: "SUPERVISED",
    bottom: "Every protocol begins with professional assessment.",
    mode: "physician",
  },

  "02": {
    eyebrow: "02 / 06",
    title: "Licensed & Pharma-Grade",
    sub: "Pharmacopoeial framework",
    formulation: "STANDARD",
    formulationValue: "IP / BP / USP",
    leftLabel: "MANUFACTURING",
    leftValue: "PHARMA",
    rightLabel: "QUALITY",
    rightValue: "DOCUMENTED",
    bottom: "A formulation framework built around pharmaceutical standards.",
    mode: "pharma",
  },

  "03": {
    eyebrow: "03 / 06",
    title: "Clinical Evidence",
    sub: "Documented protocols",
    formulation: "FRAMEWORK",
    formulationValue: "CLINICAL",
    leftLabel: "PROTOCOLS",
    leftValue: "DOCUMENTED",
    rightLabel: "REFERENCES",
    rightValue: "SCIENCE",
    bottom: "Protocols are structured around documented clinical information.",
    mode: "evidence",
  },

  "04": {
    eyebrow: "04 / 06",
    title: "Batch Traceable",
    sub: "Product record",
    formulation: "BATCH",
    formulationValue: "TRACEABLE",
    leftLabel: "MFG / EXP",
    leftValue: "RECORDED",
    rightLabel: "CERTIFICATE",
    rightValue: "OF ANALYSIS",
    bottom: "Every formulation carries a record.",
    mode: "batch",
  },

  "05": {
    eyebrow: "05 / 06",
    title: "Third-Party Tested",
    sub: "Quality verification",
    formulation: "VERIFICATION",
    formulationValue: "TESTED",
    leftLabel: "IDENTITY",
    leftValue: "CHECKED",
    rightLabel: "QUALITY",
    rightValue: "VERIFIED",
    bottom: "Quality verification forms part of the product documentation.",
    mode: "tested",
  },

  "06": {
    eyebrow: "06 / 06",
    title: "Researched & Science Backed",
    sub: "Scientific foundation",
    formulation: "RESEARCH",
    formulationValue: "DOCUMENTED",
    leftLabel: "PATHWAYS",
    leftValue: "SCIENCE",
    rightLabel: "REFERENCES",
    rightValue: "AVAILABLE",
    bottom: "Research and scientific references connect to the formulation story.",
    mode: "research",
  },
} as const;

type StandardKey = keyof typeof standardStates;

type ClinicalVisualProps = {
  activePoint: StandardKey | null;
  reducedMotion: boolean | null;
};

/* =========================================================
   SMALL HUD DATA BLOCK
   ========================================================= */

function HudData({
  label,
  value,
  side,
  active,
  delay = 0,
}: {
  label: string;
  value: string;
  side: "left" | "right";
  active: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        opacity: active ? 1 : 0.22,
        scale: active ? 1 : 0.96,
        x: active ? 0 : side === "left" ? -8 : 8,
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        "absolute z-30",
        "w-[108px] md:w-[132px]",
        side === "left" ? "left-[4%] md:left-[6%]" : "right-[4%] md:right-[6%]",
      ].join(" ")}
    >
      <div
        className={[
          "relative overflow-hidden",
          "border px-3 py-2.5 md:px-4 md:py-3",
          "backdrop-blur-md",
          "transition-all duration-500",
          active
            ? "border-[#1683FF]/70 bg-[#06152B]/90 shadow-[0_0_35px_rgba(0,102,255,.20)]"
            : "border-white/[0.08] bg-[#020812]/65",
        ].join(" ")}
      >
        {active && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "linear",
            }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#1683FF]/20 to-transparent"
          />
        )}

        <p className="relative text-[6px] font-medium uppercase tracking-[0.22em] text-[#8CCBFF]/55 md:text-[7px]">
          {label}
        </p>

        <p
          className={[
            "relative mt-1 text-[9px] font-medium tracking-[0.08em] md:text-[11px]",
            active ? "text-[#F7FAFF]" : "text-white/35",
          ].join(" ")}
        >
          {value}
        </p>

        <span
          className={[
            "absolute bottom-0 left-0 h-px transition-all duration-500",
            active
              ? "w-full bg-[#1683FF] shadow-[0_0_10px_rgba(22,131,255,.9)]"
              : "w-0",
          ].join(" ")}
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   CONNECTOR
   ========================================================= */

function Connector({
  side,
  active,
}: {
  side: "left" | "right";
  active: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={[
        "absolute top-1/2 z-10 hidden h-px md:block",
        side === "left"
          ? "left-0 right-[49%]"
          : "left-[49%] right-0",
      ].join(" ")}
    >
      <motion.div
        animate={{
          opacity: active ? 1 : 0.18,
          scaleX: active ? 1 : 0.85,
        }}
        transition={{ duration: 0.5 }}
        className={[
          "h-px origin-center",
          active
            ? "bg-[#1683FF] shadow-[0_0_12px_rgba(22,131,255,.9)]"
            : "bg-[#8CCBFF]/20",
        ].join(" ")}
      />

      <motion.span
        animate={{
          opacity: active ? 1 : 0.25,
          scale: active ? 1 : 0.7,
        }}
        transition={{ duration: 0.4 }}
        className={[
          "absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border",
          side === "left" ? "right-0" : "left-0",
          active
            ? "border-[#8CCBFF] bg-[#1683FF] shadow-[0_0_16px_rgba(22,131,255,.95)]"
            : "border-[#8CCBFF]/30 bg-[#06152B]",
        ].join(" ")}
      />
    </div>
  );
}

/* =========================================================
   PREMIUM VIAL
   ========================================================= */

function PremiumVial({
  active,
  reducedMotion,
}: {
  active: boolean;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.div
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -4, 0],
              rotate: active ? [0, 1.5, -1.5, 0] : [0, 0.4, -0.4, 0],
            }
      }
      transition={
        reducedMotion
          ? undefined
          : {
              duration: active ? 4 : 7,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      className="absolute left-1/2 top-[46%] z-20 h-[260px] w-[118px] -translate-x-1/2 -translate-y-1/2 md:h-[330px] md:w-[150px]"
    >
      {/* Glass aura */}
      <motion.div
        animate={{
          opacity: active ? [0.3, 0.65, 0.3] : 0.18,
          scale: active ? [1, 1.08, 1] : 1,
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-12 rounded-full bg-[#0066FF]/20 blur-[45px]"
      />

      {/* Outer glass silhouette */}
      <div className="absolute left-1/2 top-[14%] h-[78%] w-[78%] -translate-x-1/2 overflow-hidden rounded-[30px_30px_24px_24px] border border-white/35 bg-gradient-to-r from-white/[0.16] via-white/[0.025] to-white/[0.14] shadow-[inset_12px_0_30px_rgba(255,255,255,.06),inset_-12px_0_30px_rgba(0,102,255,.10),0_25px_70px_rgba(0,0,0,.55)]">
        {/* Glass highlight */}
        <div className="absolute bottom-0 left-[10%] top-4 w-[8%] rounded-full bg-white/20 blur-[4px]" />

        {/* Liquid */}
        <motion.div
          animate={{
            height: active ? ["54%", "60%", "54%"] : ["50%", "54%", "50%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-[3%] right-[3%] overflow-hidden rounded-[0_0_22px_22px] bg-gradient-to-t from-[#0047FF]/80 via-[#008CFF]/35 to-[#1683FF]/10"
        >
          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    x: ["-30%", "20%", "-30%"],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-5 h-10 w-[150%] rounded-[50%] bg-[#8CCBFF]/25 blur-md"
          />

          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#0066FF]/50 to-transparent" />

          {/* Micro bubbles */}
          <motion.div
            animate={{ y: [-5, -50], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
            className="absolute bottom-5 left-[30%] h-1.5 w-1.5 rounded-full bg-[#C9E9FF] shadow-[0_0_10px_#1683FF]"
          />

          <motion.div
            animate={{ y: [-5, -70], opacity: [0, 1, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1.4 }}
            className="absolute bottom-3 left-[62%] h-1 w-1 rounded-full bg-white shadow-[0_0_8px_#1683FF]"
          />

          <motion.div
            animate={{ y: [-5, -42], opacity: [0, 1, 0] }}
            transition={{ duration: 2.7, repeat: Infinity, delay: 2 }}
            className="absolute bottom-6 left-[76%] h-1 w-1 rounded-full bg-white shadow-[0_0_8px_#1683FF]"
          />
        </motion.div>

        {/* Inner reflection */}
        <div className="absolute inset-y-3 left-[18%] w-px bg-white/25 blur-[1px]" />

        {/* Label */}
        <div className="absolute left-1/2 top-[37%] flex h-[92px] w-[48px] -translate-x-1/2 items-center justify-center border border-white/15 bg-[#020812]/80 backdrop-blur-md md:h-[120px] md:w-[58px]">
          <span className="-rotate-90 whitespace-nowrap text-[10px] font-medium tracking-[0.28em] text-white/80 md:text-[12px]">
            DRIPLABS
          </span>

          <span className="absolute bottom-3 text-[6px] tracking-[0.2em] text-[#8CCBFF]">
            NAD+
          </span>
        </div>
      </div>

      {/* Neck */}
      <div className="absolute left-1/2 top-[5%] h-[18%] w-[42%] -translate-x-1/2 rounded-t-[12px] border border-white/35 bg-gradient-to-r from-white/20 via-white/5 to-white/20 shadow-[inset_5px_0_10px_rgba(255,255,255,.12)]" />

      {/* Metallic cap */}
      <div className="absolute left-1/2 top-0 h-[14%] w-[58%] -translate-x-1/2 rounded-[10px_10px_5px_5px] border border-white/45 bg-gradient-to-b from-white/55 via-[#8B9BB0]/40 to-[#26394F]/70 shadow-[0_8px_25px_rgba(0,0,0,.45),inset_0_2px_4px_rgba(255,255,255,.5)]">
        <div className="absolute inset-x-3 top-2 h-px bg-white/55" />
        <div className="absolute inset-x-4 bottom-2 h-px bg-[#1683FF]/50" />
      </div>

      {/* Bottom glass base */}
      <div className="absolute bottom-[3%] left-1/2 h-[8%] w-[88%] -translate-x-1/2 rounded-full border border-[#8CCBFF]/25 bg-[#06152B]/70 shadow-[0_0_30px_rgba(0,102,255,.25)]" />
    </motion.div>
  );
}

/* =========================================================
   CENTRAL VISUAL
   ========================================================= */

function ClinicalVisual({
  activePoint,
  reducedMotion,
}: ClinicalVisualProps) {
  const active =
    activePoint !== null ? standardStates[activePoint] : null;

  const isActive = activePoint !== null;

  return (
    <div className="relative h-full min-h-[650px] overflow-hidden border border-[#8CCBFF]/15 bg-[#030B17]">
      {/* Atmospheric light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[40%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/10 blur-[110px]" />

        <div className="absolute left-1/2 top-[50%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1683FF]/10 blur-[70px]" />

        <div className="absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#0066FF]/10 blur-[100px]" />
      </div>

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(140,203,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140,203,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Vertical cinematic gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06152B]/40 via-transparent to-[#01050B]/80" />

      {/* Top heading */}
      <div className="absolute left-1/2 top-7 z-40 -translate-x-1/2 text-center">
        <p className="text-[7px] uppercase tracking-[0.35em] text-[#8CCBFF]/50">
          {active?.eyebrow ?? "DRIPLABS STANDARD"}
        </p>

        <p className="mt-2 whitespace-nowrap text-[12px] font-medium tracking-[0.34em] text-white/75 md:text-[14px]">
          DRIPLABS STANDARD
        </p>

        <div className="mx-auto mt-3 flex items-center justify-center gap-2">
          <span className="h-px w-7 bg-[#1683FF]/40" />
          <span className="text-[6px] uppercase tracking-[0.3em] text-[#8CCBFF]/40">
            Clinical · Transparent · Traceable
          </span>
          <span className="h-px w-7 bg-[#1683FF]/40" />
        </div>
      </div>

      {/* Rotating outer ring */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }
        }
        className="absolute left-1/2 top-[45%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8CCBFF]/10 md:h-[510px] md:w-[510px]"
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1683FF] shadow-[0_0_20px_#1683FF]" />

        <span className="absolute bottom-[9%] left-[14%] h-1.5 w-1.5 rounded-full bg-[#8CCBFF] shadow-[0_0_14px_#8CCBFF]" />

        <span className="absolute right-[9%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_14px_#1683FF]" />
      </motion.div>

      {/* Dashed ring */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: -360,
              }
        }
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }
        }
        className="absolute left-1/2 top-[45%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8CCBFF]/20 md:h-[420px] md:w-[420px]"
      />

      {/* Inner ring */}
      <div className="absolute left-1/2 top-[45%] h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1683FF]/20 md:h-[340px] md:w-[340px]" />

      {/* Scanning beam */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                y: ["-80%", "220%"],
              }
        }
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 4.5,
                repeat: Infinity,
                ease: "linear",
              }
        }
        className="pointer-events-none absolute left-1/2 top-[18%] z-10 h-[2px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1683FF]/70 to-transparent blur-[1px]"
      />

      {/* Left HUD */}
      <HudData
        label={active?.leftLabel ?? "PRODUCT RECORD"}
        value={active?.leftValue ?? "READY"}
        side="left"
        active={isActive}
        delay={0.05}
      />

      {/* Right HUD */}
      <HudData
        label={active?.rightLabel ?? "VERIFICATION"}
        value={active?.rightValue ?? "READY"}
        side="right"
        active={isActive}
        delay={0.1}
      />

      {/* Batch / CoA special modules */}
      <AnimatePresence>
        {activePoint === "04" && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="absolute left-[5%] top-[51%] z-40 w-[128px] border border-[#1683FF]/50 bg-[#020812]/85 p-3 backdrop-blur-xl md:left-[7%] md:w-[145px]"
            >
              <p className="text-[6px] uppercase tracking-[0.25em] text-[#8CCBFF]/60">
                Batch
              </p>

              <p className="mt-2 text-[9px] tracking-[0.12em] text-white/75">
                PRODUCT RECORD
              </p>

              <div className="mt-3 space-y-2 border-t border-white/10 pt-2">
                <div>
                  <p className="text-[5px] uppercase tracking-[0.2em] text-white/30">
                    Manufactured
                  </p>
                  <p className="mt-0.5 text-[7px] text-[#8CCBFF]">
                    RECORDED
                  </p>
                </div>

                <div>
                  <p className="text-[5px] uppercase tracking-[0.2em] text-white/30">
                    Expiry
                  </p>
                  <p className="mt-0.5 text-[7px] text-[#8CCBFF]">
                    RECORDED
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              className="absolute right-[5%] top-[50%] z-40 flex w-[112px] flex-col items-center border border-[#1683FF]/50 bg-[#020812]/85 p-4 text-center backdrop-blur-xl md:right-[7%] md:w-[125px]"
            >
              <div className="grid h-12 w-12 place-items-center border border-[#8CCBFF]/30">
                <div className="grid h-8 w-8 grid-cols-5 gap-[2px] opacity-80">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span
                      key={i}
                      className={[
                        "h-1 w-1",
                        [0, 1, 4, 5, 9, 10, 14, 15, 19, 20, 21, 24].includes(i)
                          ? "bg-[#F7FAFF]"
                          : "bg-[#1683FF]/30",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-3 text-[6px] uppercase tracking-[0.2em] text-[#8CCBFF]">
                Certificate
              </p>

              <p className="mt-1 text-[6px] uppercase tracking-[0.16em] text-white/35">
                Of Analysis
              </p>

              <div className="mt-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_8px_#1683FF]" />
                <span className="text-[6px] uppercase tracking-[0.18em] text-white/60">
                  Documented
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Vial */}
      <PremiumVial
        active={isActive}
        reducedMotion={reducedMotion}
      />

      {/* Vial base / platform */}
      <div className="absolute left-1/2 top-[70%] z-10 h-[100px] w-[300px] -translate-x-1/2 rounded-full border border-[#1683FF]/20 bg-[#0066FF]/[0.025] shadow-[0_0_80px_rgba(0,102,255,.12)]">
        <div className="absolute left-1/2 top-1/2 h-[58px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8CCBFF]/15" />

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  opacity: [0.25, 0.65, 0.25],
                  scaleX: [0.85, 1, 0.85],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-px w-[180px] -translate-x-1/2 bg-[#1683FF] shadow-[0_0_18px_#1683FF]"
        />
      </div>

      {/* Dynamic bottom statement */}
      <div className="absolute bottom-7 left-1/2 z-50 w-[88%] -translate-x-1/2 text-center md:w-[75%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePoint ?? "idle"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-[7px] uppercase tracking-[0.3em] text-[#8CCBFF]/65">
              {active?.title ?? "CLINICAL SYSTEM"}
            </p>

            <h3 className="mt-2 font-[var(--font-heading)] text-[25px] font-light leading-[0.95] tracking-[-0.04em] text-[#F7FAFF] md:text-[34px]">
              {active?.bottom ?? "Precision by design."}
            </h3>

            <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#1683FF] to-transparent shadow-[0_0_12px_rgba(22,131,255,.5)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom index */}
      <div className="absolute bottom-3 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3">
        {trustPoints.map((point) => (
          <span
            key={point.number}
            className={[
              "text-[6px] tracking-[0.15em] transition-all duration-500",
              activePoint === point.number
                ? "scale-125 text-[#8CCBFF]"
                : "text-white/20",
            ].join(" ")}
          >
            {point.number}
          </span>
        ))}
      </div>

      {/* Connectors */}
      <Connector side="left" active={activePoint === "01" || activePoint === "03" || activePoint === "05"} />
      <Connector side="right" active={activePoint === "02" || activePoint === "04" || activePoint === "06"} />

      {/* Active glow */}
      <AnimatePresence>
        {activePoint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(circle_at_50%_48%,rgba(0,102,255,0.13),transparent_34%)]"
          />
        )}
      </AnimatePresence>

      {/* Bottom electric line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#1683FF]/80 to-transparent shadow-[0_0_12px_rgba(22,131,255,.45)]" />
    </div>
  );
}

/* =========================================================
   TRUST CARD
   ========================================================= */

function TrustCard({
  point,
  side,
  active,
  onActivate,
  reducedMotion,
}: {
  point: (typeof trustPoints)[number];
  side: "left" | "right";
  active: boolean;
  onActivate: () => void;
  reducedMotion: boolean | null;
}) {
  return (
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full"
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      <button
        type="button"
        onClick={onActivate}
        className={[
          "relative flex h-full w-full cursor-pointer flex-col overflow-hidden text-left",
          "border p-6 md:p-7 lg:p-8",
          "transition-all duration-700",
          "focus:outline-none",
          active
            ? "border-[#1683FF]/75 bg-[#08203A] shadow-[0_25px_80px_rgba(0,70,150,.30)]"
            : "border-[#8CCBFF]/12 bg-[#06152B] hover:border-[#1683FF]/45",
        ].join(" ")}
      >
        {/* Background glow */}
        <motion.div
          animate={{
            opacity: active ? 1 : 0,
            scale: active ? 1 : 0.8,
          }}
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0066FF]/15 blur-[70px]"
        />

        {/* Technical corner */}
        <span className="absolute right-5 top-5 text-[14px] text-[#8CCBFF]/25 transition-colors duration-500 group-hover:text-[#8CCBFF]/70">
          +
        </span>

        <div className="relative flex items-start justify-between">
          <span
            className={[
              "text-[9px] font-medium tracking-[0.2em]",
              active ? "text-[#8CCBFF]" : "text-[#8CCBFF]/40",
            ].join(" ")}
          >
            {point.number}
          </span>

          <motion.span
            animate={{
              rotate: active ? 90 : 0,
              scale: active ? 1.1 : 1,
            }}
            className={[
              "flex h-7 w-7 items-center justify-center rounded-full border text-[11px]",
              active
                ? "border-[#1683FF] bg-[#0066FF] text-white shadow-[0_0_20px_rgba(0,102,255,.45)]"
                : "border-white/10 text-white/30",
            ].join(" ")}
          >
            +
          </motion.span>
        </div>

        <div className="relative mt-auto pt-10">
          <h3
            className={[
              "max-w-[430px] font-[var(--font-heading)] text-[1.65rem] font-light leading-[0.98] tracking-[-0.04em] transition-all duration-500 md:text-[1.9rem]",
              active ? "text-white" : "text-[#F7FAFF]",
            ].join(" ")}
          >
            {point.title}
          </h3>

          <p className="mt-4 max-w-[390px] text-[12px] leading-6 text-white/50 md:text-[13px]">
            {point.short}
          </p>

          <div className="mt-7 flex items-center gap-3">
            <motion.span
              animate={{
                width: active ? 44 : 20,
              }}
              className="h-px bg-[#1683FF] shadow-[0_0_10px_rgba(22,131,255,.55)]"
            />

            <span
              className={[
                "text-[7px] font-medium uppercase tracking-[0.24em] transition-colors duration-500",
                active ? "text-[#8CCBFF]" : "text-white/25",
              ].join(" ")}
            >
              {active ? "Inspecting" : "Explore"}
            </span>
          </div>
        </div>

        {/* Active bottom line */}
        <motion.span
          animate={{
            width: active ? "100%" : "0%",
          }}
          className={[
            "absolute bottom-0 h-px bg-[#1683FF]",
            side === "left" ? "left-0" : "right-0",
          ].join(" ")}
          style={{
            boxShadow: "0 0 18px rgba(22,131,255,.75)",
          }}
        />

        {/* Active side line */}
        <motion.span
          animate={{
            opacity: active ? 1 : 0,
          }}
          className={[
            "absolute bottom-0 top-0 w-px bg-[#1683FF]",
            side === "left" ? "left-0" : "right-0",
          ].join(" ")}
        />
      </button>
    </motion.div>
  );
}

/* =========================================================
   MAIN SECTION
   ========================================================= */

export default function CredibilitySection() {
  const reducedMotion = useReducedMotion();

  const [activePoint, setActivePoint] =
    useState<StandardKey | null>(null);

  return (
    <section
      id="standard"
      className="relative overflow-hidden bg-[#020812] text-[#F7FAFF]"
    >
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#0066FF]/[0.055] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-250px] right-[-180px] h-[600px] w-[600px] rounded-full bg-[#1683FF]/[0.045] blur-[130px]"
      />

      {/* Global technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(140,203,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140,203,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0066FF]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1700px] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:px-14 lg:py-28">
        {/* Header */}
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 md:mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#0066FF] shadow-[0_0_10px_rgba(0,102,255,.4)]" />

            <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#8CCBFF]/65 md:text-[9px]">
              04 — WHY DRIPLABS
            </span>
          </div>

          <h2 className="mt-7 max-w-[950px] font-[var(--font-heading)] text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em] text-[#F7FAFF]">
            Built around the
            <br />
            <span className="text-[#8CCBFF]/75">
              details that matter.
            </span>
          </h2>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-12 bg-white/10" />

            <p className="max-w-[480px] text-[10px] uppercase leading-5 tracking-[0.18em] text-white/30">
              A clinical system designed around precision,
              transparency and supervision.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            PREMIUM INTERACTIVE GRID
           ================================================= */}

        <div className="grid gap-3 lg:grid-cols-[1fr_1.3fr_1fr] lg:grid-rows-[1fr_1fr_1fr]">
          {/* 01 */}
          <TrustCard
            point={trustPoints[0]}
            side="left"
            active={activePoint === "01"}
            onActivate={() => setActivePoint("01")}
            reducedMotion={reducedMotion}
          />

          {/* CENTER */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.985,
                  }
            }
            whileInView={
              reducedMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-start-2 lg:row-span-3"
            onMouseLeave={() => setActivePoint(null)}
          >
            <ClinicalVisual
              activePoint={activePoint}
              reducedMotion={reducedMotion}
            />
          </motion.div>

          {/* 02 */}
          <TrustCard
            point={trustPoints[1]}
            side="right"
            active={activePoint === "02"}
            onActivate={() => setActivePoint("02")}
            reducedMotion={reducedMotion}
          />

          {/* 03 */}
          <TrustCard
            point={trustPoints[2]}
            side="left"
            active={activePoint === "03"}
            onActivate={() => setActivePoint("03")}
            reducedMotion={reducedMotion}
          />

          {/* 04 */}
          <TrustCard
            point={trustPoints[3]}
            side="right"
            active={activePoint === "04"}
            onActivate={() => setActivePoint("04")}
            reducedMotion={reducedMotion}
          />

          {/* 05 */}
          <TrustCard
            point={trustPoints[4]}
            side="left"
            active={activePoint === "05"}
            onActivate={() => setActivePoint("05")}
            reducedMotion={reducedMotion}
          />

          {/* 06 */}
          <TrustCard
            point={trustPoints[5]}
            side="right"
            active={activePoint === "06"}
            onActivate={() => setActivePoint("06")}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Footer descriptor */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={
            reducedMotion
              ? undefined
              : {
                  opacity: 1,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="mt-6 flex flex-col gap-3 border-t border-[#8CCBFF]/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
            Physician-supervised wellness
          </p>

          <p className="text-[8px] uppercase tracking-[0.25em] text-[#8CCBFF]/40 sm:text-right">
            Manufactured · Lyophilised · Quality-tested · India
          </p>
        </motion.div>
      </div>
    </section>
  );
}