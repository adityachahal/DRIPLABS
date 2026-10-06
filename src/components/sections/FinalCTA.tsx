"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const visualY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["45px", "0px", "-35px"],
  );

  const visualScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.94, 1, 0.97],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["35px", "0px", "-20px"],
  );

  const glowX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-10%", "0%", "10%"],
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0.05, 0.4, 0.8],
    [0, 1, 1],
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#020406]
        text-[#F5F8FC]
      "
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-[#020406]" />

        {/* Primary electric-blue light */}
        <motion.div
          style={{
            x: reduceMotion ? undefined : glowX,
          }}
          className="
            absolute
            left-[52%]
            top-[25%]
            h-[850px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(0,102,255,0.12)_0%,rgba(0,168,255,0.035)_35%,transparent_70%)]
            blur-[70px]
          "
        />

        {/* Secondary atmospheric light */}
        <div
          className="
            absolute
            bottom-[-300px]
            left-[5%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[radial-gradient(circle,rgba(0,102,255,0.06),transparent_68%)]
            blur-[80px]
          "
        />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,168,255,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,255,.55) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
            maskImage:
              "radial-gradient(circle at 58% 45%, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at 58% 45%, black 0%, transparent 72%)",
          }}
        />

        {/* Horizontal technical beam */}
        <div
          className="
            absolute
            left-1/2
            top-[52%]
            h-px
            w-[100vw]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#0066FF]/20
            to-transparent
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_58%_42%,transparent_15%,rgba(2,4,6,.3)_50%,rgba(2,4,6,.95)_100%)]
          "
        />

        {/* Top edge */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[70vw]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#00A8FF]/45
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1480px]
          px-6
          py-12
          sm:px-8
          md:py-16
          lg:px-12
          lg:py-10
          xl:px-16
        "
      >
        {/* =======================================================
            TOP BAR
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-8
            flex
            items-center
            justify-between
            border-b
            border-white/[0.07]
            pb-4
            lg:mb-10
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#00A8FF]
                shadow-[0_0_16px_rgba(0,168,255,.9)]
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-[#00A8FF]/85
              "
            >
              Begin Your Journey
            </span>
          </div>

          <span
            className="
              hidden
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/20
              sm:block
            "
          >
            DRIPLABS® / PRIVATE WELLNESS
          </span>
        </motion.div>

        {/* =======================================================
            EDITORIAL HEADING
        ======================================================= */}

        <motion.div
          style={{
            y: reduceMotion ? undefined : contentY,
          }}
          className="mb-8 lg:mb-10"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Final step
            </span>

            <span className="h-px w-12 bg-white/[0.1]" />
          </div>

          <h2
            className="
              max-w-[1080px]
              text-[clamp(2.8rem,5.2vw,5.8rem)]
              font-light
              leading-[0.84]
              tracking-[-0.075em]
              text-white
            "
            style={{
              fontFamily:
                "var(--font-driplabs-manrope), sans-serif",
            }}
          >
            Start with a
            <br />
            considered
            <br />
            <span className="text-white/[0.42]">
              conversation.
            </span>
          </h2>

          <motion.div
            style={{
              scaleX: reduceMotion ? 1 : lineScale,
            }}
            className="
              mt-6
              h-px
              w-[min(500px,70vw)]
              origin-left
              bg-gradient-to-r
              from-[#0066FF]
              via-[#00A8FF]/60
              to-transparent
              shadow-[0_0_16px_rgba(0,102,255,.25)]
            "
          />
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* =====================================================
              VISUAL / SCIENCE OBJECT
          ===================================================== */}

          <motion.div
            style={{
              y: reduceMotion ? undefined : visualY,
              scale: reduceMotion ? undefined : visualScale,
            }}
            className="lg:col-span-5"
          >
            <div
              className="
                relative
                aspect-[0.88]
                overflow-hidden
                rounded-[22px]
                border
                border-white/[0.085]
                bg-[#03070D]
              "
            >
              {/* Image-like atmospheric composition */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,.11),transparent_55%)]
                "
              />

              {/* Large outer ring */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 48,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[70%]
                  w-[70%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#0066FF]/20
                "
              >
                <span
                  className="
                    absolute
                    left-[11%]
                    top-[5%]
                    h-2
                    w-2
                    rounded-full
                    bg-[#00A8FF]
                    shadow-[0_0_22px_rgba(0,168,255,1)]
                  "
                />
              </motion.div>

              {/* Inner ring */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[48%]
                  w-[48%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#00A8FF]/15
                "
              >
                <span
                  className="
                    absolute
                    bottom-[2%]
                    right-[15%]
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#0066FF]
                    shadow-[0_0_18px_rgba(0,102,255,1)]
                  "
                />
              </motion.div>

              {/* Central core */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.04, 1],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[30%]
                  w-[30%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#00A8FF]/25
                  bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.2),rgba(0,102,255,.16)_25%,#03070D_70%)]
                  shadow-[0_0_90px_rgba(0,102,255,.2)]
                  backdrop-blur-xl
                "
              >
                <div className="absolute inset-[15%] rounded-full border border-[#00A8FF]/20" />

                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A8FF] shadow-[0_0_25px_rgba(0,168,255,1)]" />
              </motion.div>

              {/* Vertical precision line */}

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-full
                  w-px
                  -translate-x-1/2
                  bg-gradient-to-b
                  from-transparent
                  via-[#00A8FF]/10
                  to-transparent
                "
              />

              {/* Horizontal precision line */}

              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  h-px
                  w-full
                  -translate-y-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#00A8FF]/10
                  to-transparent
                "
              />

              {/* Technical information */}

              <div className="absolute left-6 top-6">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#00A8FF]" />

                  <span className="text-[7px] uppercase tracking-[0.28em] text-white/35">
                    DRIPLABS / 001
                  </span>
                </div>

                <span className="mt-2 block text-[7px] uppercase tracking-[0.2em] text-white/20">
                  Precision wellness
                </span>
              </div>

              <div className="absolute bottom-6 left-6">
                <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                  Science / Experience
                </span>
              </div>

              <div className="absolute bottom-6 right-6 text-right">
                <span className="block text-[7px] uppercase tracking-[0.25em] text-[#00A8FF]/55">
                  ACTIVE
                </span>

                <span className="mt-1 block text-[7px] uppercase tracking-[0.2em] text-white/20">
                  01—01
                </span>
              </div>

              {/* Corner markers */}

              <span className="absolute left-4 top-4 h-3 w-px bg-[#00A8FF]/50" />
              <span className="absolute left-4 top-4 h-px w-3 bg-[#00A8FF]/50" />

              <span className="absolute bottom-4 right-4 h-3 w-px bg-[#00A8FF]/50" />
              <span className="absolute bottom-4 right-4 h-px w-3 bg-[#00A8FF]/50" />
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT CONVERSION PANEL
          ===================================================== */}

          <motion.div
            style={{
              y: reduceMotion ? undefined : contentY,
            }}
            className="
              flex
              flex-col
              justify-end
              lg:col-span-7
              lg:pb-1
            "
          >
            {/* Intro */}

            <div className="max-w-[590px]">
              <div className="flex items-start gap-5">
                <span className="mt-1 text-[15px] text-[#00A8FF]">
                  +
                </span>

                <p
                  className="
                    max-w-[500px]
                    text-[15px]
                    leading-7
                    text-white/50
                    md:text-[16px]
                  "
                  style={{
                    fontFamily:
                      "var(--font-driplabs-manrope), sans-serif",
                  }}
                >
                  Explore the DRIPLABS experience that fits
                  your needs and take the next step with our
                  team.
                </p>
              </div>
            </div>

            {/* Pathways */}

            <div className="mt-7">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Choose your next step
                </span>

                <span className="text-[8px] uppercase tracking-[0.25em] text-[#00A8FF]/45">
                  03 pathways
                </span>
              </div>

              {/* Pathway 01 */}

              <Link
                href="/locations"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.1]
                  py-4
                  transition-colors
                  duration-500
                  hover:border-[#00A8FF]/40
                "
              >
                <div className="flex items-center gap-5">
                  <span className="text-[8px] tracking-[0.2em] text-[#00A8FF]/60">
                    01
                  </span>

                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.28em] text-white/25">
                      Consultation
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[17px]
                        font-light
                        tracking-[-0.025em]
                        text-white/85
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                      style={{
                        fontFamily:
                          "var(--font-driplabs-manrope), sans-serif",
                      }}
                    >
                      Begin your journey
                    </span>
                  </div>
                </div>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.1]
                    text-white/40
                    transition-all
                    duration-500
                    group-hover:border-[#00A8FF]/50
                    group-hover:bg-[#00A8FF]/10
                    group-hover:text-[#00A8FF]
                  "
                >
                  →
                </span>
              </Link>

              {/* Pathway 02 */}

              <Link
                href="/protocols"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.1]
                  py-4
                  transition-colors
                  duration-500
                  hover:border-[#00A8FF]/40
                "
              >
                <div className="flex items-center gap-5">
                  <span className="text-[8px] tracking-[0.2em] text-[#00A8FF]/60">
                    02
                  </span>

                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.28em] text-white/25">
                      Protocols
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[17px]
                        font-light
                        tracking-[-0.025em]
                        text-white/85
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                      style={{
                        fontFamily:
                          "var(--font-driplabs-manrope), sans-serif",
                      }}
                    >
                      Discover our protocols
                    </span>
                  </div>
                </div>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.1]
                    text-white/40
                    transition-all
                    duration-500
                    group-hover:border-[#00A8FF]/50
                    group-hover:bg-[#00A8FF]/10
                    group-hover:text-[#00A8FF]
                  "
                >
                  →
                </span>
              </Link>

              {/* Pathway 03 */}

              <div
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  border-y
                  border-white/[0.1]
                  py-4
                "
              >
                <div className="flex items-center gap-5">
                  <span className="text-[8px] tracking-[0.2em] text-[#00A8FF]/60">
                    03
                  </span>

                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.28em] text-white/25">
                      Care
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[17px]
                        font-light
                        tracking-[-0.025em]
                        text-white/85
                      "
                      style={{
                        fontFamily:
                          "var(--font-driplabs-manrope), sans-serif",
                      }}
                    >
                      Physician-led wellness
                    </span>
                  </div>
                </div>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#00A8FF]/20
                    bg-[#00A8FF]/[0.035]
                    text-[#00A8FF]/60
                  "
                >
                  +
                </span>
              </div>
            </div>

            {/* =================================================
                PRIMARY ACTION
            ================================================= */}

            <div className="mt-7">
              <Link
                href="/locations"
                className="
                  group
                  relative
                  flex
                  min-h-[58px]
                  w-full
                  items-center
                  justify-between
                  overflow-hidden
                  rounded-[10px]
                  bg-[#0066FF]
                  px-7
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.23em]
                  text-white
                  shadow-[0_15px_55px_rgba(0,102,255,.16)]
                  transition-all
                  duration-500
                  hover:bg-[#0088FF]
                  hover:shadow-[0_18px_70px_rgba(0,136,255,.25)]
                "
              >
                {/* Animated sweep */}

                <span
                  className="
                    absolute
                    inset-y-0
                    left-[-40%]
                    w-[40%]
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-1000
                    group-hover:translate-x-[350%]
                  "
                />

                <span className="relative">
                  Begin your journey
                </span>

                <span className="relative flex items-center gap-4">
                  <span className="hidden text-[7px] tracking-[0.2em] text-white/60 sm:inline">
                    CONSULTATION
                  </span>

                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </div>

            {/* Trust */}

            <div className="mt-5 flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#00A8FF]
                  shadow-[0_0_12px_rgba(0,168,255,.85)]
                "
              />

              <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                Physician-led wellness
              </span>

              <span className="h-px flex-1 bg-white/[0.06]" />

              <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
                DRIPLABS®
              </span>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM SIGNATURE
        ======================================================= */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-white/[0.07]
            pt-4
            lg:mt-12
          "
        >
          <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
            Precision / Science / Wellness
          </span>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-px w-8 bg-[#00A8FF]/30" />

            <span className="text-[7px] uppercase tracking-[0.3em] text-[#00A8FF]/40">
              01 — DRIPLABS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}