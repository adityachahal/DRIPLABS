"use client";

import Image from "next/image";
import {
  Stethoscope,
  ShieldCheck,
  FlaskConical,
  Factory,
  Sparkles,
} from "lucide-react";

const proofPoints = [
  {
    value: "19+",
    label: "Physician-guided protocols",
    icon: Stethoscope,
  },
  {
    value: "100%",
    label: "Physician assessment",
    icon: ShieldCheck,
  },
  {
    value: "36+",
    label: "Pharmacopoeial injectables",
    icon: FlaskConical,
  },
  {
    value: "INDIA",
    label: "Manufactured & quality-tested",
    icon: Factory,
  },
  {
    value: "9",
    label: "Wellness families",
    icon: Sparkles,
  },
];

export default function ProofBand() {
  return (
    <section
      aria-labelledby="proof-band-heading"
      className="relative isolate overflow-hidden bg-[#F3EFE6]"
    >
      {/* =========================================================
          STATIC MAIN VISUAL
      ========================================================= */}

      <div className="relative h-[300px] w-full sm:h-[320px] md:h-[340px] lg:h-[360px]">

        {/* -------------------------------------------------------
            FIXED BACKGROUND IMAGE
        ------------------------------------------------------- */}

        <div className="absolute inset-0">
          <Image
            src="/images/home/Proof%20of%20band.png"
            alt="DRIPLABS clinical wellness environment"
            fill
            sizes="100vw"
            priority={false}
            className="select-none object-cover object-center"
          />
        </div>

        {/* =======================================================
            IMAGE COLOR TREATMENT
        ======================================================= */}

        {/* Warm ivory left side */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-[54%]
            bg-gradient-to-r
            from-[#F8F4EB]/[0.94]
            via-[#F5F1E8]/[0.64]
            to-transparent
          "
        />

        {/* Preserve the blue clinical side */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-10
            w-[48%]
            bg-gradient-to-l
            from-[#020812]/[0.50]
            via-[#06152B]/[0.14]
            to-transparent
          "
        />

        {/* Subtle overall tonal treatment */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#F5F1E8]/[0.025]" />

        {/* Bottom cinematic depth */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-10
            h-[38%]
            bg-gradient-to-t
            from-[#020812]/[0.68]
            via-[#020812]/[0.12]
            to-transparent
          "
        />

        {/* =======================================================
            PREMIUM FRAME
        ======================================================= */}

        {/* =======================================================
            FIXED EDITORIAL CONTENT
        ======================================================= */}

        <div
          className="
            absolute
            left-[3.8%]
            top-[36%]
            z-30
            w-[43%]
            -translate-y-1/2
          "
        >
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-7 bg-[#0066FF]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.34em] text-[#020812]/55">
              Proof of band
            </p>
          </div>

          {/* Main heading */}
          <h2
            id="proof-band-heading"
            className="
              font-[var(--font-heading)]
              text-[clamp(2.3rem,4vw,4rem)]
              font-normal
              leading-[0.87]
              tracking-[-0.055em]
              text-[#020812]
            "
          >
            Trusted by
            <br />
            <span className="text-[066FF#0]">
              those who know.
            </span>
          </h2>

          {/* Supporting copy */}
          <p
            className="
              mt-4
              max-w-[330px]
              text-[17px]
              leading-[1.55]
              tracking-[-0.01em]
              text-[#020812]/55
              sm:text-[16px]
            "
          >
            Physician-guided wellness, considered with clinical precision.
          </p>

          {/* Small brand marker */}
          <div className="mt-6 flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#0066FF]" />

            <span className="text-[10px] uppercase tracking-[0.28em] text-[066FF#0]/40">
              Clinical · Transparent · Traceable
            </span>
          </div>
        </div>

        {/* =======================================================
            FIXED PROOF DETAILS
            CENTERED IN THE SECTION
        ======================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[78%]
            z-30
            w-[70%]
            -translate-x-180
            -translate-y-6
          "
        >
          <div
            className="
              grid
              grid-cols-5
              overflow-hidden
              border
              border-white/[0.24]
              bg-[#020812]/[0.78]
              shadow-[0_18px_50px_rgba(0,0,0,0.22)]
              backdrop-blur-xl
            "
          >
            {proofPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.label}
                  className={`
                    group
                    relative
                    flex
                    min-h-[100px]
                    items-center
                    gap-2
                    overflow-hidden
                    px-4
                    transition-all
                    duration-500
                    ease-out
                    sm:min-h-[90px]
                    sm:px-5
                    lg:px-6

                    hover:bg-[#1683FF]/[0.045]
                    hover:shadow-[inset_0_0_32px_rgba(22,131,255,0.08)]

                    ${
                      index !== proofPoints.length - 1
                        ? "border-r border-white/[0.13]"
                        : ""
                    }
                  `}
                >
                  {/* =================================================
                      LOCAL HOVER LIGHT
                      Does NOT affect layout or positioning.
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      h-24
                      w-24
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#1683FF]/0
                      blur-2xl
                      transition-all
                      duration-500
                      ease-out
                      group-hover:bg-[#1683FF]/[0.16]
                      group-hover:scale-[1.45]
                    "
                  />

                  {/* Fine blue edge highlight */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-px
                      bg-[#1683FF]/0
                      transition-all
                      duration-500
                      ease-out
                      group-hover:bg-[#8CCBFF]/80
                      group-hover:shadow-[0_0_12px_rgba(140,203,255,0.75)]
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[#8CCBFF]/25
                      bg-[#1683FF]/[0.08]
                      transition-all
                      duration-400
                      ease-out
                      group-hover:border-[#8CCBFF]/65
                      group-hover:bg-[#1683FF]/[0.14]
                      group-hover:shadow-[0_0_18px_rgba(22,131,255,0.28)]
                    "
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.2}
                      className="
                        text-[#8CCBFF]
                        transition-all
                        duration-400
                        ease-out
                        group-hover:text-white
                        group-hover:drop-shadow-[0_0_7px_rgba(140,203,255,0.8)]
                      "
                    />
                  </div>

                  {/* Value + label */}
                  <div className="relative z-10 min-w-0">
                    <div
                      className="
                        text-[13px]
                        font-medium
                        tracking-[-0.015em]
                        text-white
                        transition-all
                        duration-400
                        ease-out
                        sm:text-[14px]
                        group-hover:text-[#8CCBFF]
                        group-hover:drop-shadow-[0_0_9px_rgba(140,203,255,0.42)]
                      "
                    >
                      {point.value}
                    </div>

                    <div
                      className="
                        mt-1
                        text-[7px]
                        uppercase
                        leading-[1.35]
                        tracking-[0.13em]
                        text-white/45
                        transition-colors
                        duration-400
                        ease-out
                        sm:text-[8px]
                        group-hover:text-white/75
                      "
                    >
                      {point.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE VERSION
      ========================================================= */}

      <div className="bg-[#F3EFE6] px-5 py-7 md:hidden">
        {/* Heading */}
        <div className="mb-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-6 bg-[#0066FF]" />

            <p className="text-[7px] font-medium uppercase tracking-[0.3em] text-[#020812]/50">
              Proof of band
            </p>
          </div>

          <h3
            className="
              font-[var(--font-heading)]
              text-[2.25rem]
              font-normal
              leading-[0.9]
              tracking-[-0.055em]
              text-[#020812]
            "
          >
            Trusted by
            <br />
            <span className="text-[#0066FF]">
              those who know.
            </span>
          </h3>

          <p className="mt-1 max-w-[300px] text-[10px] leading-[1.55] text-[#020812]/55">
            Physician-guided wellness, considered with clinical precision.
          </p>
        </div>

        {/* Mobile proof grid */}
        <div className="grid grid-cols-2 overflow-hidden border border-[#020812]/10 bg-[#F8F5EE]">
          {proofPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <div
                key={point.label}
                className={`
                  group
                  relative
                  flex
                  min-h-[74px]
                  items-center
                  gap-3
                  overflow-hidden
                  px-3

                  ${
                    index < proofPoints.length - 1
                      ? "border-b border-[#020812]/10"
                      : ""
                  }

                  ${
                    index % 2 === 0
                      ? "border-r border-[#020812]/10"
                      : ""
                  }
                `}
              >
                {/* Mobile local glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-20
                    w-20
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#0066FF]/0
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:bg-[#0066FF]/[0.10]
                    group-hover:scale-125
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-[#0066FF]/20
                    bg-[#0066FF]/[0.05]
                    transition-all
                    duration-400
                    group-hover:border-[#0066FF]/50
                    group-hover:bg-[#0066FF]/[0.10]
                    group-hover:shadow-[0_0_14px_rgba(0,102,255,0.20)]
                  "
                >
                  <Icon
                    size={14}
                    strokeWidth={1.2}
                    className="
                      text-[#0066FF]
                      transition-all
                      duration-400
                      group-hover:text-[#1683FF]
                      group-hover:drop-shadow-[0_0_5px_rgba(0,102,255,0.5)]
                    "
                  />
                </div>

                <div className="relative z-10 min-w-0">
                  <div
                    className="
                      text-[13px]
                      tracking-[-0.01em]
                      text-[#020812]
                      transition-all
                      duration-400
                      group-hover:text-[#0066FF]
                    "
                  >
                    {point.value}
                  </div>

                  <div
                    className="
                      mt-0.5
                      text-[7px]
                      uppercase
                      leading-[1.35]
                      tracking-[0.11em]
                      text-[#020812]/40
                      transition-colors
                      duration-400
                      group-hover:text-[#020812]/65
                    "
                  >
                    {point.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}