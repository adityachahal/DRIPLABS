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

/* =========================================================
   CLINICAL VISUAL
   ========================================================= */

function ClinicalVisual({
  reducedMotion,
}: {
  reducedMotion: boolean | null;
}) {
  return (
    <div
      className="
        relative h-full min-h-[380px]
        overflow-hidden
        border border-[rgba(140,203,255,0.14)]
        bg-[#06152B]
      "
    >
      {/* Atmospheric blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[360px] w-[360px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#0066FF]/[0.12]
          blur-[90px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-24 -top-24
          h-[300px] w-[300px]
          rounded-full
          bg-[#1683FF]/[0.08]
          blur-[70px]
        "
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(140,203,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140,203,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Fine radial field */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          opacity-70
          [background:radial-gradient(circle_at_50%_50%,rgba(22,131,255,0.10),transparent_42%)]
        "
      />

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
        className="
          absolute left-1/2 top-1/2
          h-[270px] w-[270px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-[rgba(140,203,255,0.20)]
        "
      >
        <span
          className="
            absolute left-1/2 top-0
            h-2 w-2
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#1683FF]
            shadow-[0_0_18px_rgba(22,131,255,0.9)]
          "
        />

        <span
          className="
            absolute bottom-[12%] left-[8%]
            h-1.5 w-1.5
            rounded-full
            bg-[#8CCBFF]
            shadow-[0_0_12px_rgba(140,203,255,0.8)]
          "
        />
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
        className="
          absolute left-1/2 top-1/2
          h-[205px] w-[205px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-dashed
          border-[rgba(140,203,255,0.20)]
        "
      />

      {/* Inner ring */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[145px] w-[145px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-[rgba(22,131,255,0.18)]
        "
      />

      {/* Central molecular structure */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: [45, 47, 45],
              }
        }
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="
          absolute left-1/2 top-1/2
          h-[112px] w-[112px]
          -translate-x-1/2 -translate-y-1/2
          rotate-45
          border
          border-[rgba(140,203,255,0.35)]
        "
      >
        <div
          className="
            absolute inset-[17px]
            border
            border-[rgba(22,131,255,0.35)]
          "
        />

        <div
          className="
            absolute inset-[32px]
            bg-[#0066FF]/20
            shadow-[0_0_35px_rgba(0,102,255,0.25)]
          "
        />
      </motion.div>

      {/* Connecting lines */}
      <div
        aria-hidden="true"
        className="
          absolute left-[24%] top-[34%]
          h-px w-[52%]
          rotate-[8deg]
          bg-[rgba(140,203,255,0.18)]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute left-[28%] top-[37%]
          h-[35%] w-px
          rotate-[25deg]
          bg-[rgba(140,203,255,0.14)]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute right-[28%] top-[37%]
          h-[35%] w-px
          -rotate-[25deg]
          bg-[rgba(140,203,255,0.14)]
        "
      />

      {/* Nodes */}
      <div
        className="
          absolute left-[24%] top-[32%]
          h-2.5 w-2.5
          rounded-full
          border border-[rgba(140,203,255,0.5)]
          bg-[#06152B]
          shadow-[0_0_12px_rgba(22,131,255,0.25)]
        "
      />

      <div
        className="
          absolute right-[23%] top-[34%]
          h-2.5 w-2.5
          rounded-full
          border border-[#1683FF]/70
          bg-[#1683FF]
          shadow-[0_0_16px_rgba(22,131,255,0.75)]
        "
      />

      <div
        className="
          absolute bottom-[30%] left-[28%]
          h-2.5 w-2.5
          rounded-full
          border border-[rgba(140,203,255,0.5)]
          bg-[#06152B]
        "
      />

      <div
        className="
          absolute bottom-[27%] right-[28%]
          h-2.5 w-2.5
          rounded-full
          border border-[rgba(140,203,255,0.5)]
          bg-[#06152B]
        "
      />

      {/* Top technical label */}
      <div className="absolute left-6 top-6 flex items-center gap-3">
        <span className="h-px w-7 bg-[#0066FF]" />

        <span
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-[#8CCBFF]
          "
        >
          DRIPLABS STANDARD
        </span>
      </div>

      {/* Top right status */}
      <div
        className="
          absolute right-6 top-6
          flex items-center gap-2
          text-[7px]
          uppercase
          tracking-[0.24em]
          text-white/30
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_8px_rgba(22,131,255,0.8)]" />
        SYSTEM ACTIVE
      </div>

      {/* Centre label */}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
        <div>
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-white/35
            "
          >
            Clinical system
          </p>

          <p
            className="
              mt-2
              font-[var(--font-heading)]
              text-2xl
              font-light
              tracking-[-0.035em]
              text-[#F7FAFF]
            "
          >
            Precision by design.
          </p>
        </div>

        <span
          className="
            text-[8px]
            tracking-[0.18em]
            text-[#8CCBFF]/45
          "
        >
          04
        </span>
      </div>

      {/* Bottom technical line */}
      <div
        aria-hidden="true"
        className="
          absolute bottom-0 left-0
          h-px w-full
          bg-gradient-to-r
          from-transparent
          via-[#0066FF]/60
          to-transparent
        "
      />
    </div>
  );
}

/* =========================================================
   TRUST CARD
   ========================================================= */

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
      className="group relative h-full"
    >
      <div
        className="
          relative
          h-full
          overflow-hidden
          border
          border-[rgba(140,203,255,0.14)]
          bg-[#06152B]
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:border-[rgba(22,131,255,0.55)]
          group-hover:bg-[#08203A]
          group-hover:shadow-[0_22px_70px_rgba(0,35,90,0.30)]
        "
      >
        {/* Hover atmosphere */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-48
            w-48
            rounded-full
            bg-[#0066FF]/0
            blur-[60px]
            transition-all
            duration-700
            group-hover:bg-[#0066FF]/[0.12]
          "
        />

        {/* Card content */}
        <div className="relative p-6 md:p-7 lg:p-8">
          <div className="flex items-start justify-between">
            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.2em]
                text-[#8CCBFF]/45
              "
            >
              {point.number}
            </span>

            <span
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-full
                border
                border-[rgba(140,203,255,0.16)]
                text-[12px]
                text-white/35
                transition-all
                duration-500
                group-hover:border-[#1683FF]
                group-hover:bg-[#0066FF]
                group-hover:text-white
                group-hover:shadow-[0_0_20px_rgba(0,102,255,0.35)]
              "
            >
              +
            </span>
          </div>

          <h3
            className="
              mt-8
              font-[var(--font-heading)]
              text-[1.75rem]
              font-light
              leading-none
              tracking-[-0.04em]
              text-[#F7FAFF]
              md:text-[2rem]
            "
          >
            {point.title}
          </h3>

          <p
            className="
              mt-4
              max-w-[380px]
              text-[12px]
              leading-6
              text-white/55
              md:text-[13px]
            "
          >
            {point.short}
          </p>

          {/* Hover indicator */}
          <div className="mt-6 flex items-center gap-3">
            <span
              className="
                h-px
                w-5
                bg-[#0066FF]
                shadow-[0_0_8px_rgba(0,102,255,0.25)]
                transition-all
                duration-500
                group-hover:w-10
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.23em]
                text-white/30
                transition-colors
                duration-500
                group-hover:text-[#8CCBFF]
              "
            >
              Hover to explore
            </span>
          </div>
        </div>

        {/* Expanding detail */}
        <div
          className="
            grid
            grid-rows-[0fr]
            transition-[grid-template-rows]
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:grid-rows-[1fr]
          "
        >
          <div className="overflow-hidden">
            <div
              className="
                border-t
                border-[rgba(140,203,255,0.10)]
                px-6
                pb-0
                pt-0
                transition-all
                duration-700
                group-hover:px-6
                group-hover:pb-7
                group-hover:pt-6
                md:group-hover:px-7
                lg:group-hover:px-8
              "
            >
              <div className="flex gap-4">
                <span
                  className="
                    mt-1
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#1683FF]
                    shadow-[0_0_10px_rgba(22,131,255,0.7)]
                  "
                />

                <p
                  className="
                    text-[12px]
                    leading-6
                    text-white/55
                    md:text-[13px]
                  "
                >
                  {point.detail}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom electric accent */}
        <span
          aria-hidden="true"
          className={[
            `
              absolute
              bottom-0
              h-px
              w-0
              bg-[#0066FF]
              shadow-[0_0_12px_rgba(0,102,255,0.55)]
              transition-all
              duration-700
              group-hover:w-full
            `,
            side === "left" ? "left-0" : "right-0",
          ].join(" ")}
        />

        {/* Left/right edge accent */}
        <span
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            top-0
            w-px
            bg-[#0066FF]
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN SECTION
   ========================================================= */

export default function CredibilitySection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="standard"
      className="
        relative
        overflow-hidden
        bg-[#020812]
        text-[#F7FAFF]
      "
    >
      {/* =================================================
          ATMOSPHERE
         ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[560px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#0066FF]/[0.055]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          right-[-120px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#1683FF]/[0.045]
          blur-[120px]
        "
      />

      {/* Technical background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.18]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(140,203,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140,203,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* =================================================
          TOP ACCENT
         ================================================= */}

      <div
        aria-hidden="true"
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#0066FF]/70
          to-transparent
        "
      />

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:px-14 lg:py-28">
        {/* =================================================
            HEADER
           ================================================= */}

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
            <span
              className="
                h-px
                w-8
                bg-[#0066FF]
                shadow-[0_0_10px_rgba(0,102,255,0.4)]
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#8CCBFF]/65
                md:text-[9px]
              "
            >
              04 — WHY DRIPLABS
            </span>
          </div>

          <h2
            className="
              mt-7
              max-w-[950px]
              font-[var(--font-heading)]
              text-[clamp(3rem,6vw,6.5rem)]
              font-light
              leading-[0.9]
              tracking-[-0.06em]
              text-[#F7FAFF]
            "
          >
            Built around the
            <br />

            <span className="text-[#8CCBFF]/75">
              details that matter.
            </span>
          </h2>

          {/* Small editorial descriptor */}
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-12 bg-white/10" />

            <p
              className="
                max-w-[480px]
                text-[10px]
                uppercase
                leading-5
                tracking-[0.18em]
                text-white/30
              "
            >
              A clinical system designed around
              precision, transparency and supervision.
            </p>
          </div>
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

        <div
          className="
            grid
            gap-3
            lg:grid-cols-[1fr_1.15fr_1fr]
            lg:grid-rows-[1fr_1fr]
          "
        >
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
            className="
              min-h-[420px]
              lg:row-span-2
            "
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

        {/* =================================================
            BOTTOM DESCRIPTOR
           ================================================= */}

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
          className="
            mt-6
            flex
            flex-col
            gap-3
            border-t
            border-[rgba(140,203,255,0.10)]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            Physician-supervised wellness
          </p>

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-[#8CCBFF]/40
              sm:text-right
            "
          >
            Manufactured · Lyophilised · Quality-tested · India
          </p>
        </motion.div>
      </div>
    </section>
  );
}