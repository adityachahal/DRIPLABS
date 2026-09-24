"use client";

import { motion, useReducedMotion } from "framer-motion";

const trustPoints = [
  {
    number: "01",
    title: "Physician-Led",
    short:
      "Every protocol begins with a physician assessment. Never a menu you self-select.",
    detail:
      "Protocol selection is guided by professional assessment rather than a self-selected treatment menu. The experience begins with understanding the individual before a protocol is considered.",
  },
  {
    number: "02",
    title: "Pharma-Grade",
    short:
      "IP/BP/USP pharmacopoeial standards, manufactured under Indian pharmaceutical licenses.",
    detail:
      "DRIPLABS formulations are positioned around pharmacopoeial standards and pharmaceutical manufacturing discipline, with IP/BP/USP standards forming part of the product framework.",
  },
  {
    number: "03",
    title: "Traceable",
    short:
      "Every kit carries a batch number, expiry date and Certificate of Analysis.",
    detail:
      "Batch identification, expiry information and Certificate of Analysis documentation create a traceable product record from manufacture through administration.",
  },
  {
    number: "04",
    title: "Made in India",
    short:
      "Manufactured, lyophilised and quality-tested in India.",
    detail:
      "DRIPLABS products are manufactured, lyophilised and quality-tested in India, keeping the manufacturing story and product origin visible throughout the experience.",
  },
];

function ClinicalVisual({
  reducedMotion,
}: {
  reducedMotion: boolean | null;
}) {
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-[1px] bg-[#E9E9E7]">
      {/* Fine grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17,19,24,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,19,24,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Soft central atmosphere */}
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[55px]" />

      {/* Outer precision ring */}
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
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }
        }
        className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10"
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B8901F]" />
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
                duration: 36,
                repeat: Infinity,
                ease: "linear",
              }
        }
        className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/15"
      />

      {/* Molecular / clinical structure */}
      <div className="absolute left-1/2 top-1/2 h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-black/20">
        <div className="absolute inset-[17px] border border-black/10" />
        <div className="absolute inset-[32px] bg-[#D7D7D5]" />
      </div>

      {/* Nodes */}
      <div className="absolute left-[24%] top-[32%] h-2.5 w-2.5 rounded-full border border-black/25 bg-[#F7F4EC]" />
      <div className="absolute right-[23%] top-[34%] h-2.5 w-2.5 rounded-full border border-black/25 bg-[#F7F4EC]" />
      <div className="absolute bottom-[30%] left-[28%] h-2.5 w-2.5 rounded-full border border-black/25 bg-[#F7F4EC]" />
      <div className="absolute bottom-[27%] right-[28%] h-2.5 w-2.5 rounded-full border border-black/25 bg-[#F7F4EC]" />

      {/* Connecting lines */}
      <div className="absolute left-[26%] top-[34%] h-px w-[48%] rotate-[8deg] bg-black/10" />
      <div className="absolute left-[28%] top-[37%] h-[35%] w-px rotate-[25deg] bg-black/10" />
      <div className="absolute right-[28%] top-[37%] h-[35%] w-px -rotate-[25deg] bg-black/10" />

      {/* Label */}
      <div className="absolute left-6 top-6 flex items-center gap-3">
        <span className="h-px w-6 bg-[#B8901F]" />

        <span className="text-[8px] font-medium uppercase tracking-[0.26em] text-black/45">
          DRIPLABS STANDARD
        </span>
      </div>

      {/* Centre label */}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
        <div>
          <p className="text-[8px] uppercase tracking-[0.22em] text-black/35">
            Clinical system
          </p>

          <p className="mt-2 font-[var(--font-heading)] text-2xl font-light tracking-[-0.035em] text-[#111318]">
            Precision by design.
          </p>
        </div>

        <span className="text-[8px] tracking-[0.18em] text-black/30">
          04
        </span>
      </div>
    </div>
  );
}

function TrustCard({
  point,
  side,
  reducedMotion,
}: {
  point: (typeof trustPoints)[number];
  side: "left" | "right";
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
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-[1px] border border-black/10 bg-[#F7F7F5] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-black/20 group-hover:bg-white group-hover:shadow-[0_18px_55px_rgba(17,19,24,0.08)]">

        {/* Card content */}
        <div className="relative p-6 md:p-7 lg:p-8">
          <div className="flex items-start justify-between">
            <span className="text-[9px] font-medium tracking-[0.2em] text-black/35">
              {point.number}
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-[12px] text-black/35 transition-all duration-500 group-hover:border-[#B8901F] group-hover:bg-[#B8901F] group-hover:text-white">
              +
            </span>
          </div>

          <h3 className="mt-8 font-[var(--font-heading)] text-[1.75rem] font-light leading-none tracking-[-0.04em] text-[#111318] md:text-[2rem]">
            {point.title}
          </h3>

          <p className="mt-4 max-w-[380px] text-[12px] leading-6 text-black/55 md:text-[13px]">
            {point.short}
          </p>

          {/* Hover indicator */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-5 bg-[#B8901F] transition-all duration-500 group-hover:w-10" />

            <span className="text-[8px] font-medium uppercase tracking-[0.23em] text-black/35 transition-colors duration-500 group-hover:text-[#B8901F]">
              Hover to explore
            </span>
          </div>
        </div>

        {/* EXPANDING DETAIL */}
        <div
          className={[
            "grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "grid-rows-[0fr] group-hover:grid-rows-[1fr]",
          ].join(" ")}
        >
          <div className="overflow-hidden">
            <div
              className={[
                "border-t border-black/10 px-6 pb-0 pt-0",
                "transition-all duration-700",
                "group-hover:px-6 group-hover:pb-7 group-hover:pt-6",
                "md:group-hover:px-7",
                "lg:group-hover:px-8",
              ].join(" ")}
            >
              <div className="flex gap-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8901F]" />

                <p className="text-[12px] leading-6 text-black/60 md:text-[13px]">
                  {point.detail}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <span
          aria-hidden="true"
          className={[
            "absolute bottom-0 h-px w-0 bg-[#B8901F]",
            "transition-all duration-700 group-hover:w-full",
            side === "left" ? "left-0" : "right-0",
          ].join(" ")}
        />
      </div>
    </motion.div>
  );
}

export default function CredibilitySection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="standard"
      className="relative overflow-hidden bg-[#F7F4EC] text-[#111318]"
    >
      {/* Gold entry line */}
      <div className="h-px w-full bg-[#B8901F]/50" />

      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:px-14 lg:py-28">

        {/* HEADER */}
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
          className="mb-10 md:mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B8901F]" />

            <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-black/45 md:text-[9px]">
              04 — WHY DRIPLABS
            </span>
          </div>

          <h2 className="mt-7 max-w-[850px] font-[var(--font-heading)] text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em]">
            Built around the
            <br />
            <span className="text-black/50">
              details that matter.
            </span>
          </h2>
        </motion.div>

        {/* =================================================
            DESKTOP EDITORIAL GRID

            ┌──────────────┬──────────────┬──────────────┐
            │ PHYSICIAN    │              │ PHARMA       │
            │ LED          │    VISUAL    │ GRADE        │
            ├──────────────┤              ├──────────────┤
            │ TRACEABLE    │              │ MADE IN      │
            │              │              │ INDIA        │
            └──────────────┴──────────────┴──────────────┘
        ================================================= */}

        <div className="grid gap-3 lg:grid-cols-[1fr_1.15fr_1fr] lg:grid-rows-[1fr_1fr]">

          {/* TOP LEFT */}
          <TrustCard
            point={trustPoints[0]}
            side="left"
            reducedMotion={reducedMotion}
          />

          {/* CENTRAL VISUAL */}
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-h-[420px] lg:row-span-2"
          >
            <ClinicalVisual reducedMotion={reducedMotion} />
          </motion.div>

          {/* TOP RIGHT */}
          <TrustCard
            point={trustPoints[1]}
            side="right"
            reducedMotion={reducedMotion}
          />

          {/* BOTTOM LEFT */}
          <TrustCard
            point={trustPoints[2]}
            side="left"
            reducedMotion={reducedMotion}
          />

          {/* BOTTOM RIGHT */}
          <TrustCard
            point={trustPoints[3]}
            side="right"
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Bottom descriptor */}
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
          className="mt-6 flex flex-col gap-3 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[8px] uppercase tracking-[0.25em] text-black/35">
            Physician-supervised wellness
          </p>

          <p className="text-[8px] uppercase tracking-[0.25em] text-black/35">
            Manufactured · Lyophilised · Quality-tested · India
          </p>
        </motion.div>
      </div>
    </section>
  );
}