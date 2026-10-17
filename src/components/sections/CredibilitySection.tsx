"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type TrustPoint = {
  number: "01" | "02" | "03" | "04" | "05" | "06";
  title: string;
  short: string;
  detail: string;
  image: string;
};

const trustPoints: TrustPoint[] = [
  {
    number: "01",
    title: "Physician-Led",
    short:
      "Every protocol begins with a physician assessment. Never a menu you self-select.",
    detail:
      "Protocol selection begins with professional assessment and supervision rather than a self-selected treatment menu.",
    image: "/images/credibility/01-physician-led.png",
  },
  {
    number: "02",
    title: "Licensed & Pharma-Grade",
    short:
      "IP/BP/USP pharmacopoeial standards and pharmaceutical manufacturing discipline.",
    detail:
      "The product framework incorporates pharmacopoeial standards including IP, BP and USP.",
    image: "/images/credibility/02-pharma-grade.png",
  },
  {
    number: "03",
    title: "Clinical Evidence & Documented Protocols",
    short:
      "Formulations and protocols are structured around documented data.",
    detail:
      "Clinical information and documented protocols form part of the framework behind the DRIPLABS experience.",
    image: "/images/credibility/03-clinical-evidence.png",
  },
  {
    number: "04",
    title: "Batch Traceable",
    short:
      "Every kit carries a batch number, expiry information and Certificate of Analysis.",
    detail:
      "Batch identification, expiry information and Certificate of Analysis documentation create a traceable product record.",
    image: "/images/credibility/04-batch-traceable.png",
  },
  {
    number: "05",
    title: "Third-Party Tested",
    short:
      "Quality verification forms part of the product documentation and formulation story.",
    detail:
      "Product quality verification is represented as part of the broader documentation layer.",
    image: "/images/credibility/05-third-party-tested.png",
  },
  {
    number: "06",
    title: "Researched & Science Backed",
    short:
      "Formulation decisions are connected to documented research and scientific references.",
    detail:
      "Research, scientific pathways and documented references provide the foundation for the science layer.",
    image: "/images/credibility/06-science-backed.png",
  },
];

const standardStates = {
  "01": {
    eyebrow: "01 / 06",
    leftLabel: "PERSONALISED",
    leftValue: "PROTOCOL",
    rightLabel: "ADMINISTRATION",
    rightValue: "SUPERVISED",
    title: "Physician-Led",
    bottom: "Every protocol begins with professional assessment.",
  },
  "02": {
    eyebrow: "02 / 06",
    leftLabel: "MANUFACTURING",
    leftValue: "PHARMA",
    rightLabel: "QUALITY",
    rightValue: "DOCUMENTED",
    title: "Licensed & Pharma-Grade",
    bottom: "A formulation framework built around pharmaceutical standards.",
  },
  "03": {
    eyebrow: "03 / 06",
    leftLabel: "PROTOCOLS",
    leftValue: "DOCUMENTED",
    rightLabel: "REFERENCES",
    rightValue: "SCIENCE",
    title: "Clinical Evidence",
    bottom: "Protocols are structured around documented clinical information.",
  },
  "04": {
    eyebrow: "04 / 06",
    leftLabel: "MFG / EXP",
    leftValue: "RECORDED",
    rightLabel: "CERTIFICATE",
    rightValue: "OF ANALYSIS",
    title: "Batch Traceable",
    bottom: "Every formulation carries a record.",
  },
  "05": {
    eyebrow: "05 / 06",
    leftLabel: "IDENTITY",
    leftValue: "CHECKED",
    rightLabel: "QUALITY",
    rightValue: "VERIFIED",
    title: "Third-Party Tested",
    bottom: "Quality verification forms part of the product documentation.",
  },
  "06": {
    eyebrow: "06 / 06",
    leftLabel: "PATHWAYS",
    leftValue: "SCIENCE",
    rightLabel: "REFERENCES",
    rightValue: "AVAILABLE",
    title: "Researched & Science Backed",
    bottom: "Research and scientific references connect to the formulation story.",
  },
} as const;

type StandardKey = keyof typeof standardStates;

const interactiveDetails: Record<StandardKey, { eyebrow: string; heading: string; rows: { label: string; value: string }[]; footer: string }> = {
  "01": { eyebrow: "CARE PATHWAY", heading: "Physician assessment", rows: [{ label: "PROTOCOL", value: "Individually assessed" }, { label: "OVERSIGHT", value: "Physician-led" }], footer: "Assessment precedes protocol selection." },
  "02": { eyebrow: "QUALITY FRAMEWORK", heading: "Pharma-grade standards", rows: [{ label: "STANDARDS", value: "IP · BP · USP" }, { label: "PROCESS", value: "Manufacturing discipline" }], footer: "Refer to product documentation for applicable specifications." },
  "03": { eyebrow: "DOCUMENTATION", heading: "Clinical evidence", rows: [{ label: "PROTOCOLS", value: "Documented" }, { label: "REFERENCES", value: "Research-linked" }], footer: "Explore the supporting protocol documentation." },
  "04": { eyebrow: "PRODUCT RECORD", heading: "Batch traceability", rows: [{ label: "BATCH NUMBER", value: "See product label" }, { label: "EXPIRY", value: "See product label" }, { label: "CERTIFICATE", value: "Certificate of Analysis" }], footer: "Batch-specific values must be verified against the supplied product pack." },
  "05": { eyebrow: "QUALITY ASSURANCE", heading: "Third-party testing", rows: [{ label: "VERIFICATION", value: "Documentation-led" }, { label: "TEST REPORT", value: "Refer to available records" }], footer: "Only verified test reports should be presented as evidence." },
  "06": { eyebrow: "RESEARCH LAYER", heading: "Science & references", rows: [{ label: "FORMULATION", value: "Research-informed" }, { label: "REFERENCES", value: "Documented sources" }], footer: "Review the relevant scientific references for each formulation." },
};

function TrustCard({
  point,
  active,
  onActivate,
  reducedMotion,
}: {
  point: TrustPoint;
  active: boolean;
  onActivate: () => void;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      initial={reducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      whileTap={reducedMotion ? undefined : { scale: 0.995 }}
      className={[
        "group relative min-h-0 overflow-hidden rounded-[2px] border text-left",
        "transition-[border-color,background-color,box-shadow] duration-500",
        active
          ? "border-[#F2A65A]/70 bg-[#071827]/85 shadow-[0_0_35px_rgba(242,166,90,.08)]"
          : "border-white/[0.11] bg-[#071421]/65 hover:border-[#8CCBFF]/35",
      ].join(" ")}
      aria-pressed={active}
    >
      <Image
        src={point.image}
        alt=""
        fill
        sizes="(max-width: 767px) 50vw, 25vw"
        className={[
          "object-cover object-center transition-all duration-700",
          active ? "scale-[1.04] opacity-[0.30]" : "opacity-[0.13] group-hover:scale-[1.025] group-hover:opacity-[0.22]",
        ].join(" ")}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#04101C]/[0.98] via-[#061321]/[0.86] to-[#061321]/[0.34]" />
      <div
        className={[
          "absolute inset-0 transition-opacity duration-500",
          active
            ? "bg-[radial-gradient(circle_at_88%_50%,rgba(242,166,90,.13),transparent_35%)] opacity-100"
            : "opacity-0",
        ].join(" ")}
      />

      <span className="absolute left-4 top-3 z-10 text-[7px] font-medium tracking-[0.18em] text-[#8CCBFF]/65">
        {point.number}
      </span>

      <span
        className={[
          "absolute right-3 top-3 z-10 grid h-7 w-7 place-items-center rounded-full border transition-all duration-500",
          active
            ? "border-[#F2A65A]/75 bg-[#F2A65A]/10 text-[#FFD9A0] shadow-[0_0_18px_rgba(242,166,90,.14)]"
            : "border-white/[0.16] bg-white/[0.02] text-white/45 group-hover:border-[#8CCBFF]/45",
        ].join(" ")}
        aria-hidden="true"
      >
        <span className="relative h-2.5 w-2.5">
          <span className="absolute left-1/2 top-0 h-2.5 w-px -translate-x-1/2 bg-current" />
          <span className="absolute left-0 top-1/2 h-px w-2.5 -translate-y-1/2 bg-current" />
        </span>
      </span>

      <div className="relative z-10 flex h-full min-h-[112px] flex-col justify-end p-4 pr-14 sm:min-h-[124px] sm:p-5 sm:pr-16">
        <h3 className="max-w-[90%] font-[var(--font-heading)] text-[clamp(1rem,1.55vw,1.45rem)] font-light leading-[0.96] tracking-[-0.035em] text-[#F7FAFF]">
          {point.title}
        </h3>

        <p className="mt-2 max-w-[94%] text-[8px] leading-[1.45] tracking-[0.01em] text-white/48 sm:text-[9px]">
          {point.short}
        </p>

        <span
          className={[
            "mt-3 h-px transition-all duration-500",
            active
              ? "w-12 bg-[#F2A65A] shadow-[0_0_10px_rgba(242,166,90,.55)]"
              : "w-5 bg-[#1683FF]/70 group-hover:w-8",
          ].join(" ")}
        />
      </div>
    </motion.button>
  );
}

function ClinicalVisual({
  activePoint,
  reducedMotion,
}: {
  activePoint: StandardKey;
  reducedMotion: boolean | null;
}) {
  const state = standardStates[activePoint];

  return (
    <div className="relative h-full min-h-[330px] overflow-hidden rounded-[2px] border border-white/[0.10] bg-[#020812]">
      <Image
        src="/images/credibility/driplabs-credibility-background.png"
        alt=""
        fill
        priority
        sizes="(max-width: 1023px) 100vw, 42vw"
        className="object-cover object-center opacity-[0.78]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,18,.30),rgba(2,8,18,.12)_42%,rgba(2,8,18,.76))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(22,131,255,.10),transparent_36%)]" />

      {/* Soft ivory-to-ice-blue center field; the outer stage remains dark navy. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[52%] z-[1] h-[78%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-95 blur-[2px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 44%, rgba(255,250,235,0.96) 0%, rgba(236,246,255,0.94) 22%, rgba(176,218,255,0.78) 43%, rgba(67,151,239,0.28) 61%, rgba(2,8,18,0) 76%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(140,203,255,.05) 1px, transparent 1px),linear-gradient(90deg,rgba(140,203,255,.05) 1px,transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <motion.div
        aria-hidden="true"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 48, repeat: Infinity, ease: "linear" }
        }
        className="absolute left-1/2 top-[51%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F2A65A]/50 sm:h-[345px] sm:w-[345px] lg:h-[390px] lg:w-[390px]"
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2A65A] shadow-[0_0_14px_rgba(242,166,90,.9)]" />
        <span className="absolute bottom-[9%] left-[10%] h-1 w-1 rounded-full bg-[#8CCBFF] shadow-[0_0_10px_#8CCBFF]" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 34, repeat: Infinity, ease: "linear" }
        }
        className="absolute left-1/2 top-[51%] h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8CCBFF]/22 sm:h-[255px] sm:w-[255px] lg:h-[285px] lg:w-[285px]"
      />

      <div className="absolute left-1/2 top-[51%] z-[2] h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9EDFF]/55 shadow-[0_0_28px_rgba(214,237,255,.16)] sm:h-[180px] sm:w-[180px] lg:h-[210px] lg:w-[210px]" />

      {!reducedMotion && (
        <motion.div
          aria-hidden="true"
          animate={{ y: ["-10%", "210%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-[20%] z-10 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F2A65A]/60 to-transparent"
        />
      )}

      <div className="absolute left-1/2 top-4 z-30 -translate-x-1/2 text-center">
        <p className="text-[6px] uppercase tracking-[0.32em] text-[#F2A65A]/80">
          {state.eyebrow}
        </p>
        <p className="mt-1 whitespace-nowrap text-[9px] font-medium tracking-[0.30em] text-white/80 sm:text-[11px]">
          DRIPLABS STANDARD
        </p>
        <p className="mt-1 text-[5px] uppercase tracking-[0.24em] text-[#8CCBFF]/45">
          Clinical · Transparent · Traceable
        </p>
      </div>

      <HudPill side="left" label={state.leftLabel} value={state.leftValue} />
      <HudPill side="right" label={state.rightLabel} value={state.rightValue} />

      <div className="absolute left-[8%] top-[29%] z-30 hidden border border-[#F2A65A]/50 bg-[#071525]/70 px-3 py-2 backdrop-blur-md sm:block">
        <p className="text-[5px] uppercase tracking-[0.20em] text-[#F2A65A]/75">
          PERSONALISED
        </p>
        <p className="mt-1 text-[7px] font-medium tracking-[0.12em] text-white/80">
          PROTOCOL
        </p>
      </div>

      <div className="absolute right-[8%] top-[29%] z-30 hidden border border-[#F2A65A]/50 bg-[#071525]/70 px-3 py-2 text-right backdrop-blur-md sm:block">
        <p className="text-[5px] uppercase tracking-[0.20em] text-[#F2A65A]/75">
          ADMINISTRATION
        </p>
        <p className="mt-1 text-[7px] font-medium tracking-[0.12em] text-white/80">
          SUPERVISED
        </p>
      </div>

      <div className="absolute left-0 right-0 top-[51%] h-px bg-gradient-to-r from-transparent via-[#1683FF]/55 to-transparent" />
      <span className="absolute left-[11%] top-[51%] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#1683FF] shadow-[0_0_12px_#1683FF]" />
      <span className="absolute right-[11%] top-[51%] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#F2A65A] shadow-[0_0_12px_rgba(242,166,90,.8)]" />

      <video
        className="absolute left-[43%] top-[49%] z-20 h-[58%] w-[52%] -translate-x-1/2 -translate-y-1/2 object-contain bg-transparent mix-blend-darken [filter:brightness(0.78)_contrast(1.32)_saturate(1.22)] sm:left-[50%] sm:h-[62%] sm:w-[53%] lg:left-[50%] lg:h-[64%] lg:w-[54%]"
        src="/videos/credibility/credibility-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="DRIPLABS product video"
      />

      <div className="absolute right-[2.5%] top-[46%] z-40 w-[38%] max-w-[190px] sm:right-[3%] sm:top-[46%] sm:w-[34%] lg:right-[3%] lg:top-[46%] lg:w-[32%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePoint}
            initial={reducedMotion ? false : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -5, scale: 0.99 }}
            transition={{ duration: reducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[3px] border border-white/[0.22] bg-[#081725]/65 p-2.5 shadow-[0_12px_40px_rgba(0,0,0,.28),inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl sm:p-3"
            aria-live="polite"
          >
            <div className="mb-2 flex items-center justify-between gap-2 border-b border-white/[0.10] pb-2">
              <span className="text-[5px] uppercase tracking-[0.17em] text-[#8CCBFF]/80 sm:text-[6px]">{interactiveDetails[activePoint].eyebrow}</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1683FF] shadow-[0_0_9px_#1683FF]" />
            </div>
            <h3 className="font-[var(--font-heading)] text-[clamp(10px,1vw,14px)] font-light leading-tight tracking-[-0.025em] text-white/95">
              {interactiveDetails[activePoint].heading}
            </h3>
            <div className="mt-2.5 space-y-2">
              {interactiveDetails[activePoint].rows.map((row) => (
                <div key={row.label} className="border-l border-[#1683FF]/70 pl-2">
                  <p className="text-[5px] uppercase tracking-[0.12em] text-white/40 sm:text-[6px]">{row.label}</p>
                  <p className="mt-0.5 text-[7px] leading-snug text-white/85 sm:text-[8px]">{row.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-2.5 border-t border-white/[0.10] pt-2 text-[6px] leading-relaxed text-white/50 sm:text-[7px]">
              {interactiveDetails[activePoint].footer}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-[7%] left-1/2 z-30 w-[88%] -translate-x-1/2 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePoint}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[5px] uppercase tracking-[0.26em] text-[#F2A65A]/70">
              {state.title}
            </p>
            <p className="mt-1 font-[var(--font-heading)] text-[12px] font-light leading-[1] tracking-[-0.03em] text-white/90 sm:text-[15px]">
              {state.bottom}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
        {trustPoints.map((point) => (
          <span
            key={point.number}
            className={[
              "h-1 w-1 rounded-full transition-all duration-300",
              activePoint === point.number
                ? "scale-150 bg-[#F2A65A] shadow-[0_0_8px_rgba(242,166,90,.75)]"
                : "bg-white/20",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}

function HudPill({
  side,
  label,
  value,
}: {
  side: "left" | "right";
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.35 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={[
        "absolute top-[13%] z-30 hidden w-[92px] border border-[#F2A65A]/45 bg-[#071525]/75 px-2.5 py-2 backdrop-blur-md sm:block sm:w-[108px]",
        side === "left" ? "left-[4%]" : "right-[4%]",
      ].join(" ")}
    >
      <p className="text-[5px] uppercase tracking-[0.20em] text-[#F2A65A]/65">
        {label}
      </p>
      <p className="mt-1 text-[8px] font-medium tracking-[0.08em] text-white/80">
        {value}
      </p>
    </motion.div>
  );
}

export default function CredibilitySection() {
  const reducedMotion = useReducedMotion();
  const [activePoint, setActivePoint] = useState<StandardKey>("01");

  const leftPoints = trustPoints.filter((point) =>
    ["01", "03", "05"].includes(point.number),
  );
  const rightPoints = trustPoints.filter((point) =>
    ["02", "04", "06"].includes(point.number),
  );

  return (
    <section
      id="standard"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#02070D] text-[#F7FAFF] lg:h-[100svh] lg:min-h-[700px] lg:max-h-[980px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(242,166,90,.08),transparent_26%),radial-gradient(circle_at_82%_35%,rgba(22,131,255,.06),transparent_28%),linear-gradient(110deg,#02070D_0%,#07121F_48%,#02070D_100%)]"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1750px] flex-col px-4 py-5 sm:px-6 sm:py-6 lg:h-full lg:px-8 lg:py-6 xl:px-10">
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 pb-5 lg:pb-4"
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-7 bg-[#1683FF] shadow-[0_0_9px_rgba(22,131,255,.4)]" />
            <span className="text-[7px] font-medium uppercase tracking-[0.25em] text-[#8CCBFF]/65 sm:text-[8px]">
              04 — WHY DRIPLABS
            </span>
          </div>

          <div className="mt-2 flex items-end justify-between gap-8">
            <h2 className="max-w-[650px] font-[var(--font-heading)] text-[clamp(2.35rem,4.25vw,4.7rem)] font-light leading-[0.86] tracking-[-0.065em] text-[#F7FAFF]">
              Built around the
              <br />
              <span className="text-[#78B8EA]/80">details that matter.</span>
            </h2>

            <p className="max-w-[430px] text-right font-[var(--font-heading)] text-[clamp(2.35rem,4.25vw,4.7rem)] font-light leading-[0.86] tracking-[-0.065em] text-[#F7FAFF]">
              Innovation
              <br />
              <span className="text-[#78B8EA]/80">meets integrity</span>
            </p>
          </div>
        </motion.header>

        <div className="grid min-h-0 flex-1 gap-2 lg:grid-cols-[1fr_1.42fr_1fr] lg:grid-rows-3">
          <div className="grid min-h-0 grid-rows-3 gap-2 lg:col-start-1 lg:row-span-3">
            {leftPoints.map((point) => (
              <TrustCard
                key={point.number}
                point={point}
                active={activePoint === point.number}
                onActivate={() => setActivePoint(point.number)}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          <div className="order-first min-h-[390px] lg:order-none lg:col-start-2 lg:row-span-3">
            <ClinicalVisual
              activePoint={activePoint}
              reducedMotion={reducedMotion}
            />
          </div>

          <div className="grid min-h-0 grid-rows-3 gap-2 lg:col-start-3 lg:row-span-3">
            {rightPoints.map((point) => (
              <TrustCard
                key={point.number}
                point={point}
                active={activePoint === point.number}
                onActivate={() => setActivePoint(point.number)}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>

        <motion.footer
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 flex shrink-0 items-center justify-between border-t border-white/[0.08] pt-2"
        >
          <p className="text-[6px] uppercase tracking-[0.22em] text-white/25 sm:text-[7px]">
            Physician-supervised wellness
          </p>
          <p className="text-right text-[6px] uppercase tracking-[0.22em] text-[#8CCBFF]/35 sm:text-[7px]">
            Manufactured · Lyophilised · Quality-tested · India
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
