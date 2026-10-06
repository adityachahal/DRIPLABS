"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Manrope } from "next/font/google";
import Link from "next/link";
import ProtocolMenu from "./ProtocolMenu";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-driplabs-manrope",
  display: "swap",
});

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const [activeWord, setActiveWord] = useState<
    "Functional" | "Medical" | "Cellular"
  >("Functional");

  const [protocolMenuOpen, setProtocolMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  /* =========================================================
     FUNCTIONAL / CELLULAR ROTATION
  ========================================================= */

  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveWord((prev) => {
        if (prev === "Functional") return "Medical";
        if (prev === "Medical") return "Cellular";
        return "Functional";
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section
      className={`${manrope.variable} relative min-h-[100svh] overflow-hidden bg-[#071525] text-[#F5F0E7]`}
      style={{
        fontFamily: "var(--font-driplabs-manrope), sans-serif",
      }}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        <video
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[60%_center]
            brightness-[1.1]
            saturate-[1.08]
            contrast-[1.02]
          "
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero/driplabs-hero.jpg"
          aria-hidden="true"
        >
          <source
            src="/videos/driplabs-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* General dark overlay */}
        <div className="absolute inset-0 bg-[#071525]/20" />

        {/* Left readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/90 via-[#071525]/45 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#071525] via-[#071525]/70 to-transparent" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[#071525]/70 to-transparent" />

        {/* Blue atmospheric glow */}
        <div className="pointer-events-none absolute right-[8%] top-[18%] h-[25vw] w-[25vw] rounded-full bg-[#28B8C8]/[0.06] blur-[80px]" />

        {/* Subtle film grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* =========================================================
          TOP ELECTRIC BLUE ACCENT
      ========================================================= */}

      <motion.div
        initial={{
          scaleX: reducedMotion ? 1 : 0,
          opacity: reducedMotion ? 1 : 0,
        }}
        animate={{
          scaleX: 1,
          opacity: 1,
        }}
        transition={{
          duration: reducedMotion ? 0.01 : 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          left-0
          top-0
          z-30
          h-px
          w-[30vw]
          origin-left
          bg-[#1683FF]
        "
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          max-w-[1600px]
          flex-col
          justify-start
          px-5
          pb-6
          pt-[2rem]
          sm:px-6
          md:px-10
          md:pb-8
          md:pt-[2.5rem]
          lg:px-14
        "
      >
        {/* =======================================================
            TOP RIGHT BRAND DETAIL
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0,
            duration: reducedMotion ? 0.01 : 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-start justify-end"
        >
          <div className="text-right text-[8px] tracking-[0.22em] text-white/45 sm:text-[9px]">
            <p />
            <p className="mt-1 text-white/30" />
          </div>
        </motion.div>

        {/* =======================================================
            HERO COPY
        ======================================================= */}

        <div className="mt-14 pb-5 md:mt-20 md:pb-7">
          {/* =====================================================
              EYEBROW
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 10,
            }}
            animate={{
              opacity: 1,
              y: 1,
            }}
            transition={{
              delay: reducedMotion ? 0 : 0.1,
              duration: reducedMotion ? 0.01 : 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-6 flex w-fit items-center"
          >
            {/* Left editorial mark */}
            <motion.span
              initial={{
                opacity: reducedMotion ? 1 : 0,
                x: reducedMotion ? 0 : 8,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.18,
                duration: reducedMotion ? 0.01 : 0.5,
              }}
              className="relative top-[44px] mr-2 flex items-center"
              aria-hidden="true"
            >
              <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#28B8C8]/70" />

              <span className="ml-[-1px] text-[15px] font-light leading-none text-[#28B8C8]">
                ‹
              </span>
            </motion.span>

            {/* Eyebrow */}
            <span
              className="
                relative
                top-[44px]
                mt-0
                whitespace-nowrap
                text-[8px]
                font-medium
                tracking-[0.30em]
                text-white/60
                sm:text-[9px]
              "
            >
              Nourish • Recharge • Restore
            </span>

            {/* Right editorial mark */}
            <motion.span
              initial={{
                opacity: reducedMotion ? 1 : 0,
                x: reducedMotion ? 0 : -8,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.18,
                duration: reducedMotion ? 0.01 : 0.5,
              }}
              className="relative top-[44px] ml-2 flex items-center"
              aria-hidden="true"
            >
              <span className="mr-[-1px] text-[15px] font-light leading-none text-[#28B8C8]">
                ›
              </span>

              <span className="h-px w-5 bg-gradient-to-l from-transparent to-[#28B8C8]/70" />
            </motion.span>
          </motion.div>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

         <motion.h1
  initial={{
    opacity: 0,
    y: reducedMotion ? 0 : 18,
  }}
  animate={{
    opacity: 1,
    y: -2,
  }}
  transition={{
    delay: reducedMotion ? 0 : 0.18,
    duration: reducedMotion ? 0.01 : 0.8,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    relative
    top-[40px]
    mt-4
    flex
    max-w-[720px]
    flex-col
    gap-[0.10em]
    text-[clamp(3rem,5.2vw,6.8rem)]
    font-semibold
    leading-[0.91]
    tracking-[-0.065em]
    text-[#F5F0E7]
  "
>
  <span className="block">
    Precision Nutrition.
  </span>

  <span className="block">
    <span className="inline-flex items-baseline">

      <span className="relative inline-block h-[1em] w-[10ch] shrink-0 align-baseline">
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.span
            key={activeWord}
            initial={
              reducedMotion
                ? {
                    opacity: 1,
                    y: -2,
                  }
                : {
                    opacity: 0,
                    y: 18,
                    filter: "blur(6px)",
                  }
            }
            animate={{
              opacity: 1,
              y: -2,
              filter: "blur(0px)",
            }}
            exit={
              reducedMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    y: -20,
                    filter: "blur(6px)",
                  }
            }
            transition={{
              duration: reducedMotion ? 0.01 : 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              left-0
              top-0
              whitespace-nowrap
              font-semibold
              text-[#4D9BFF]
            "
          >
            {activeWord}
          </motion.span>
        </AnimatePresence>

        <span
          aria-hidden="true"
          className="
            absolute
            bottom-[-0.08em]
            left-0
            h-[2px]
            w-[3.5ch]
            bg-[#1683FF]
          "
        />
      </span>

      <span
        className="
          relative
          -ml-[1.87em]
          inline-flex
          items-baseline
          -translate-y-[0.20em]
          font-semibold
          text-[#F5F0E7]
        "
      >
        Wellness.
      </span>

    </span>
  </span>

  <span className="block">
    Longevity.
  </span>
</motion.h1>
          {/* =====================================================
              SUPPORTING COPY
          ===================================================== */}

          <motion.div
  initial={{
    opacity: 0,
    y: reducedMotion ? 0 : 14,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: reducedMotion ? 0 : 0.4,
    duration: reducedMotion ? 0.01 : 0.7,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    relative
    mt-8
    max-w-[820px]
    md:mt-14
    lg:mt-16
  "
>
  {/* =====================================================
      PRIMARY SUPPORTING LINE
  ===================================================== */}

  <p
    className="
      whitespace-normal
      text-[16px]
      font-normal
      leading-[1.45]
      tracking-[-0.015em]
      text-white/85
      sm:text-[17px]
      md:text-[19px]
      lg:text-[20px]
    "
  >
    Physician-led advanced{" "}
    <span className="font-style: italic font-semibold text-white">
      IV wellness
    </span>{" "}
    and{" "}
    <span className="font-style: italic font-semibold text-white">
      NAD+
    </span>{" "}
    personalised experiences
  </p>

  {/* =====================================================
      SECONDARY LINE
  ===================================================== */}

  <p
    className="
      mt-2
      max-w-[760px]
      text-[13px]
      font-normal
      leading-[1.55]
      tracking-[-0.005em]
      text-white/65
      sm:text-[14px]
      md:text-[15px]
    "
  >
    Delivered in a considered{" "}
    <span className="font-medium text-white/85">
      clinical environment
    </span>{" "}
    or at your{" "}
    <span className="font-medium text-white/85">
      home
    </span>
    .
  </p>

  {/* =====================================================
      RESEARCH / SCIENCE LINE
  ===================================================== */}

  <p
    className="
      mt-2
      max-w-[780px]
      text-[12px]
      font-normal
      leading-[1.6]
      tracking-[0.005em]
      text-white/50
      sm:text-[13px]
      md:text-[14px]
    "
  >
    Research &amp; Science backed documented protocols with batch<br></br>
    traceability and third party lab tested.
  </p>
</motion.div>
        </div>

        {/* =======================================================
            BOTTOM AREA
        ======================================================= */}

        <div className="mt-auto grid grid-cols-1 items-end gap-6 pt-0 md:grid-cols-12">
          {/* =====================================================
              BOTTOM LEFT — CTA
          ===================================================== */}

          <div className="md:col-span-5">
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.55,
                duration: reducedMotion ? 0.01 : 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mb-0
                flex
                flex-nowrap
                items-center
                gap-3
                md:translate-y-[8px]
              "
            >
              {/* Explore DRIPLABS */}
              <motion.button
               type="button"
                onClick={() => setExploreOpen((prev) => !prev)}

                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: 4,
                        scale: 1.02,
                      }
                }
                whileTap={
                  reducedMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
               className="
  group
  relative
  inline-flex
  min-h-[48px]
  items-center
  justify-center
  overflow-hidden
  rounded-full
  border
  border-[#1683FF]/80
  bg-[#0066FF]
  px-8
  text-[15px]
  font-medium
  tracking-[0.055em]
  text-white
  shadow-[0_8px_35px_rgba(0,102,255,0.22)]
  transition-all
  duration-500
  hover:bg-[#1683FF]
  hover:border-[#4D9BFF]
  hover:shadow-[0_12px_45px_rgba(0,102,255,0.32)]
  sm:px-9
"
              >
                {/* Hover shine */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                {/* Highlight */}
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_15%,rgba(255,255,255,0.35),transparent_42%)] opacity-90" />

                {/* Bottom depth */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-full bg-gradient-to-t from-[#075F86]/20 to-transparent" />

                <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                  Explore DRIPLABS

                  <span className="text-[15px] transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                
              </motion.button>
              <AnimatePresence>
  {exploreOpen && (
    <motion.div
      initial={
        reducedMotion
          ? undefined
          : { opacity: 0, y: -8 }
      }
      animate={
        reducedMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      exit={
        reducedMotion
          ? undefined
          : { opacity: 0, y: -6 }
      }
      transition={{
        duration: reducedMotion ? 0.01 : 0.28,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        absolute
        bottom-[calc(100%+14px)]
        left-0
        z-[100]
        w-[min(92vw,680px)]
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[24px]
          border
          border-white/[0.13]
          bg-[#071525]/[0.97]
          shadow-[0_28px_80px_rgba(0,0,0,0.48)]
          backdrop-blur-2xl
        "
      >
        {/* =====================================================
            VERY SUBTLE TOP HIGHLIGHT
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-8
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#28B8C8]/50
            to-transparent
          "
        />

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="relative px-6 pb-5 pt-6">

          {/* TOP LABEL */}

          <div className="flex items-center gap-2 pr-10">
            <span className="h-px w-5 bg-[#28B8C8]/80" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#28B8C8]
              "
            >
              Partnership and Collaboration
            </span>
          </div>

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={() => setExploreOpen(false)}
            aria-label="Close menu"
            className="
              absolute
              right-5
              top-5
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              text-[22px]
              font-light
              leading-none
              text-white/45
              transition-all
              duration-300
              hover:border-[#28B8C8]/40
              hover:bg-[#28B8C8]/[0.08]
              hover:text-[#28B8C8]
            "
          >
            ×
          </button>

          {/* MAIN HEADING */}

          <div className="mt-3">
            <h3
              className="
                text-[21px]
                font-medium
                leading-[1.1]
                tracking-[-0.035em]
                text-[#F5F0E7]
              "
            >
              Explore the ecosystem
            </h3>

            <p
              className="
                mt-3
                max-w-[440px]
                text-[10px]
                leading-[1.6]
                text-white/40
              "
            >
              Build meaningful relationships across healthcare,
              wellness, clinical expertise and strategic collaboration.
            </p>
          </div>
        </div>

        {/* =====================================================
            SECTION 01
            BECOME DRIPLABS DISTRIBUTOR
        ===================================================== */}

        <div className="px-6 pb-3 pt-2">
          <div className="flex items-center gap-2">
            <span className="h-px w-5 bg-[#28B8C8]/70" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-[#28B8C8]
              "
            >
              Become DRIPLABS Distributor
            </span>
          </div>
        </div>

        {/* DISTRIBUTOR OPTIONS */}

        <div
          className="
            mx-3
            overflow-hidden
            rounded-[16px]
            border
            border-white/[0.07]
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* =================================================
                01 — FRANCHISE / CHANNEL PARTNER
            ================================================= */}

            <Link
              href="/partners"
              onClick={() => setExploreOpen(false)}
              className="
                group
                relative
                flex
                min-h-[92px]
                items-center
                justify-between
                border-b
                border-white/[0.07]
                px-5
                py-4
                transition-all
                duration-300
                hover:bg-white/[0.035]
                sm:border-r
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    text-[7px]
                    tracking-[0.18em]
                    text-white/20
                  "
                >
                  01
                </span>

                <div>
                  <h4
                    className="
                      text-[11px]
                      font-medium
                      text-white/80
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    Franchise / Channel Partner
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      text-white/30
                    "
                  >
                    Build and grow with DRIPLABS.
                  </p>
                </div>
              </div>

              <span
                className="
                  text-[11px]
                  text-white/20
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#28B8C8]
                "
              >
                →
              </span>
            </Link>

            {/* =================================================
                02 — HEALTHCARE PROFESSIONALS
            ================================================= */}

            <Link
              href="/physicians"
              onClick={() => setExploreOpen(false)}
              className="
                group
                relative
                flex
                min-h-[92px]
                items-center
                justify-between
                border-b
                border-white/[0.07]
                px-5
                py-4
                transition-all
                duration-300
                hover:bg-white/[0.035]
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    text-[7px]
                    tracking-[0.18em]
                    text-white/20
                  "
                >
                  02
                </span>

                <div>
                  <h4
                    className="
                      text-[11px]
                      font-medium
                      text-white/80
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    Healthcare Professionals
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      text-white/30
                    "
                  >
                    Physicians and healthcare specialists.
                  </p>
                </div>
              </div>

              <span
                className="
                  text-[11px]
                  text-white/20
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#28B8C8]
                "
              >
                →
              </span>
            </Link>

            {/* =================================================
                03 — CLINICS AND HOSPITALS
            ================================================= */}

            <Link
              href="/partners#clinics"
              onClick={() => setExploreOpen(false)}
              className="
                group
                relative
                flex
                min-h-[92px]
                items-center
                justify-between
                border-b
                border-white/[0.07]
                px-5
                py-4
                transition-all
                duration-300
                hover:bg-white/[0.035]
                sm:border-r
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    text-[7px]
                    tracking-[0.18em]
                    text-white/20
                  "
                >
                  03
                </span>

                <div>
                  <h4
                    className="
                      text-[11px]
                      font-medium
                      text-white/80
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    Clinics and Hospitals
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      text-white/30
                    "
                  >
                    Introduce DRIPLABS to your environment.
                  </p>
                </div>
              </div>

              <span
                className="
                  text-[11px]
                  text-white/20
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#28B8C8]
                "
              >
                →
              </span>
            </Link>

            {/* =================================================
                04 — RESEARCH AND INSTITUTION
            ================================================= */}

            <Link
              href="/partners"
              onClick={() => setExploreOpen(false)}
              className="
                group
                relative
                flex
                min-h-[92px]
                items-center
                justify-between
                border-b
                border-white/[0.07]
                px-5
                py-4
                transition-all
                duration-300
                hover:bg-white/[0.035]
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    text-[7px]
                    tracking-[0.18em]
                    text-white/20
                  "
                >
                  04
                </span>

                <div>
                  <h4
                    className="
                      text-[11px]
                      font-medium
                      text-white/80
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    Research and Institution
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      text-white/30
                    "
                  >
                    Collaborate on the future of wellness.
                  </p>
                </div>
              </div>

              <span
                className="
                  text-[11px]
                  text-white/20
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#28B8C8]
                "
              >
                →
              </span>
            </Link>

          </div>
        </div>

        {/* =====================================================
            SECTION 02
            CONSUMERS AND CORPORATE WELLNESS
        ===================================================== */}

        <div className="px-6 pb-3 pt-6">
          <div className="flex items-center gap-2">
            <span className="h-px w-5 bg-[#28B8C8]/70" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-[#28B8C8]
              "
            >
              Consumers and Corporate Wellness
            </span>
          </div>
        </div>

        {/* CONSUMER OPTIONS */}

        <div
          className="
            mx-3
            mb-4
            overflow-hidden
            rounded-[16px]
            border
            border-white/[0.07]
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* =================================================
                01 — CONSUMERS
            ================================================= */}

            <Link
              href="/"
              onClick={() => setExploreOpen(false)}
              className="
                group
                relative
                flex
                min-h-[92px]
                items-center
                justify-between
                border-b
                border-white/[0.07]
                px-5
                py-4
                transition-all
                duration-300
                hover:bg-white/[0.035]
                sm:border-b-0
                sm:border-r
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    text-[7px]
                    tracking-[0.18em]
                    text-white/20
                  "
                >
                  01
                </span>

                <div>
                  <h4
                    className="
                      text-[11px]
                      font-medium
                      text-white/80
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    Consumers
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      text-white/30
                    "
                  >
                    Discover the DRIPLABS experience.
                  </p>
                </div>
              </div>

              <span
                className="
                  text-[11px]
                  text-white/20
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#28B8C8]
                "
              >
                →
              </span>
            </Link>

            {/* =================================================
                02 — CORPORATE WELLNESS
            ================================================= */}

            <Link
              href="/partners"
              onClick={() => setExploreOpen(false)}
              className="
                group
                relative
                flex
                min-h-[92px]
                items-center
                justify-between
                px-5
                py-4
                transition-all
                duration-300
                hover:bg-white/[0.035]
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    text-[7px]
                    tracking-[0.18em]
                    text-white/20
                  "
                >
                  02
                </span>

                <div>
                  <h4
                    className="
                      text-[11px]
                      font-medium
                      text-white/80
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    Corporate Wellness
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      text-white/30
                    "
                  >
                    Wellness solutions for organisations and teams.
                  </p>
                </div>
              </div>

              <span
                className="
                  text-[11px]
                  text-white/20
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#28B8C8]
                "
              >
                →
              </span>
            </Link>

          </div>
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>


              {/* Explore protocols */}
              <motion.button
                type="button"
                onClick={() => setProtocolMenuOpen(true)}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: 4,
                        scale: 1.02,
                      }
                }
                whileTap={
                  reducedMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/35
                  bg-white/[0.06]
                  px-8
                  text-[12px]
                  font-medium
                  tracking-[0.055em]
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:border-white/60
                  hover:bg-white/[0.12]
                  sm:px-9
                "
              >
                <span className="flex items-center gap-3 whitespace-nowrap">
                  Explore protocols

                  <span className="text-[12px] transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* =====================================================
              CENTER — SCROLL
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reducedMotion ? 0 : 0.75,
              duration: reducedMotion ? 0.01 : 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hidden md:col-span-1 md:flex md:justify-center"
          >
            <a
              href="#about"
              className="
                group
                flex
                flex-col
                items-center
                gap-2
                text-[7px]
                font-medium
                tracking-[0.28em]
                text-white/45
                transition-colors
                duration-300
                hover:text-white/80
                sm:text-[8px]
              "
            >
              <span>Scroll</span>

              <span className="relative flex h-8 w-px overflow-hidden bg-white/20">
                <motion.span
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                          y: ["-100%", "100%"],
                        }
                  }
                  transition={
                    reducedMotion
                      ? undefined
                      : {
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="absolute left-0 top-0 h-1/2 w-px bg-[#1683FF]"
                />
              </span>
            </a>
          </motion.div>

          {/* =====================================================
              BOTTOM RIGHT — TRUST STRIP
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reducedMotion ? 0 : 0.8,
              duration: reducedMotion ? 0.01 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-6"
          >
            <div className="flex w-full items-stretch justify-between">
              {/* =================================================
                  01 — PHARMA-GRADE
              ================================================= */}

              <div className="flex min-w-0 flex-1 items-center justify-center px-2 sm:px-3">
                <div className="flex flex-col items-center text-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2 h-7 w-7 text-white/65 sm:h-8 sm:w-8"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 3.5L27 8V14.5C27 21.5 22.4 27 16 29C9.6 27 5 21.5 5 14.5V8L16 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M11.5 16L14.5 19L20.8 12.7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="whitespace-nowrap text-[7px] font-medium leading-[1.7] tracking-[0.10em] text-white/70 sm:text-[8px]">
                    Pharma-grade
                    <br />
                    formulations
                  </span>
                </div>
              </div>

              <div className="my-1 w-px bg-white/25" />

              {/* =================================================
                  02 — PHYSICIAN GUIDED
              ================================================= */}

              <div className="flex min-w-0 flex-1 items-center justify-center px-2 sm:px-3">
                <div className="flex flex-col items-center text-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2 h-7 w-7 text-white/65 sm:h-8 sm:w-8"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 3.5H19L25 9.5V28.5H8V3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M19 3.5V9.5H25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M12 15H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M12 19H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M12 23H18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="whitespace-nowrap text-[7px] font-medium leading-[1.7] tracking-[0.10em] text-white/70 sm:text-[8px]">
                    Physician
                    <br />
                    guided
                  </span>
                </div>
              </div>

              <div className="my-1 w-px bg-white/25" />

              {/* =================================================
                  03 — INDIAN PHARMACOPOEIA
              ================================================= */}

              <div className="flex min-w-0 flex-1 items-center justify-center px-2 sm:px-3">
                <div className="flex flex-col items-center text-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2 h-7 w-7 text-white/65 sm:h-8 sm:w-8"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 3V29"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4.74 9.5L27.26 22.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4.74 22.5L27.26 9.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M16 3L13.5 6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M16 3L18.5 6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M16 29L13.5 26"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M16 29L18.5 26"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4.74 9.5L8.5 9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4.74 9.5L6.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M27.26 22.5L23.5 23"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M27.26 22.5L25.5 19.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M27.26 9.5L23.5 9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M27.26 9.5L25.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4.74 22.5L8.5 23"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4.74 22.5L6.5 19.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="whitespace-nowrap text-[7px] font-medium leading-[1.7] tracking-[0.10em] text-white/70 sm:text-[8px]">
                    Indian Pharmacopoeia
                    <br />
                    compliant
                  </span>
                </div>
              </div>

              <div className="my-1 w-px bg-white/25" />

              {/* =================================================
                  04 — WHO-GMP-GLP
              ================================================= */}

              <div className="flex min-w-0 flex-1 items-center justify-center px-2 sm:px-3">
                <div className="flex flex-col items-center text-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2 h-7 w-7 text-white/65 sm:h-8 sm:w-8"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 4H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M14 4V12L7 24C6.1 25.55 7.22 27.5 9 27.5H23C24.78 27.5 25.9 25.55 25 24L18 12V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M10 21H22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M11.5 18.5H20.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="whitespace-nowrap text-[7px] font-medium leading-[1.7] tracking-[0.10em] text-white/70 sm:text-[8px]">
                    WHO-GMP-GLP
                    <br />
                    certified
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          PROTOCOL MENU
      ========================================================= */}

      <ProtocolMenu
        open={protocolMenuOpen}
        onClose={() => setProtocolMenuOpen(false)}
      />
    </section>
  );
}