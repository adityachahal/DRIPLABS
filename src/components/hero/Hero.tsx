"use client";

import { useRef } from "react";
import ProtocolMenu from "./ProtocolMenu";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.18]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-9%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 0.92, 0]
  );

  const lineWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["18%", "75%"]
  );

  return (
    <section
      ref={heroRef}
      className="driplabs-noise relative min-h-[100svh] overflow-hidden bg-[#08090B] text-[#F4F2EC]"
    >
      {/* =========================================================
          VIDEO SYSTEM
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden bg-[#08090B]">
        <motion.video
          style={{
            scale: videoScale,
            y: videoY,
          }}
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] brightness-[0.72] saturate-[0.62] contrast-[1.12]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero/driplabs-hero.jpg"
          aria-label="DRIPLABS physician-led wellness experience"
        >
          <source
            src="/videos/driplabs-hero.mp4"
            type="video/mp4"
          />
        </motion.video>

        {/* Heavy cinematic treatment */}
        <div className="absolute inset-0 bg-[#08090B]/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/95 via-[#08090B]/58 to-[#08090B]/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#08090B]/65 via-transparent to-transparent" />

        {/* Radial depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_45%,transparent_0%,rgba(8,9,11,.12)_36%,rgba(8,9,11,.72)_100%)]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Film grain */}
        <div className="driplabs-noise pointer-events-none absolute inset-0" />

        {/* Moving light */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: ["-100%", "160%"],
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatDelay: 7,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-y-0 w-[30vw] bg-gradient-to-r from-transparent via-[#C9A646]/10 to-transparent blur-3xl"
        />
      </div>

      {/* =========================================================
          PRECISION FRAME
      ========================================================= */}

      <div className="pointer-events-none absolute inset-4 z-20 border border-white/[0.06] md:inset-6 lg:inset-8" />

      <div className="absolute left-0 top-0 z-30 h-px w-[45vw] bg-gradient-to-r from-[#C9A646] to-transparent" />

      <div className="absolute right-8 top-8 z-30 hidden items-center gap-3 md:flex">
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/35">
          DL / 001
        </span>
        <span className="h-px w-10 bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#C9A646] shadow-[0_0_14px_#C9A646]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-between px-7 pb-7 pt-28 md:px-12 md:pb-10 md:pt-32 lg:px-16"
      >
        {/* =======================================================
            TOP INFORMATION
        ======================================================= */}

        <div className="grid grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C9A646]" />
              <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#C9A646]">
                Physician-led
              </span>
            </div>

            <p className="font-mono text-[8px] uppercase leading-[1.8] tracking-[0.22em] text-white/55 md:text-[9px]">
              Physician-led
              <br />
              IV wellness
              <br />
              &amp; NAD+
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-right"
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/55 md:text-[9px]">
              Snnylo Life Sciences
            </p>

            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.22em] text-[#C9A646] md:text-[9px]">
              Made in India
            </p>
          </motion.div>
        </div>

        {/* =======================================================
            MAIN EDITORIAL HERO
        ======================================================= */}

        <div className="mt-auto pb-7 pt-24 md:pb-10 md:pt-28">
          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-14 bg-[#C9A646]" />

            <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/50 sm:text-[8px] md:text-[9px]">
              PRECISION NUTRITION   •   FUNCTIONAL WELLNESS   •   CELLULAR HEALTH   •  ANTI AGING
            </p>
          </motion.div>

          {/* Giant typography */}

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 1.3,
                delay: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute -top-5 left-0 h-px w-28 origin-left bg-[#C9A646]/60"
            />

            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.35,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-[1250px] text-[clamp(4.2rem,11.5vw,11.5rem)] font-light leading-[0.78] tracking-[-0.075em]"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.58,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Nourish.
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="ml-[7vw] block text-[#EDEBE5]"
              >
                Recharge.
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.82,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Restore<span className="text-[#C9A646]">.</span>
              </motion.span>
            </motion.h1>

            {/* Vertical technical marker */}

            <div className="absolute right-[3%] top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
              <span className="h-20 w-px bg-gradient-to-b from-transparent via-[#C9A646]/60 to-transparent" />
              <span className="font-mono text-[7px] tracking-[0.25em] text-white/30 [writing-mode:vertical-rl]">
                PRECISION WELLNESS
              </span>
            </div>
          </div>

          {/* =====================================================
              SUPPORT + CTA
          ===================================================== */}

          <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[510px] text-[13px] leading-6 text-[#A7A8AC] md:col-span-5 md:text-[15px] md:leading-7"
            >
              Physician-led IV wellness and NAD+ experiences, built around
              documented protocols, professional supervision and a
              pharmaceutical-grade approach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 1.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-3 md:col-start-9"
            >
              <a
                href="#about"
                className="group relative flex w-fit items-center gap-5"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#F4F2EC]">
                  Explore DRIPLABS
                </span>

                <motion.span
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/[0.035] backdrop-blur-xl transition-all duration-500 group-hover:border-[#C9A646] group-hover:bg-[#C9A646] group-hover:text-[#08090B]"
                >
                  <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>

                  <span className="absolute inset-[-7px] rounded-full border border-[#C9A646]/0 transition-all duration-500 group-hover:border-[#C9A646]/25" />
                </motion.span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* =======================================================
            DATA BAR
        ======================================================= */}

        <div className="relative mt-7 grid grid-cols-2 items-end border-t border-white/[0.12] pt-5 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[7px] uppercase leading-5 tracking-[0.18em] text-[#6F7278] md:text-[8px]">
              Physician supervised use only
              <br />
              Professional clinical setting
            </p>
          </div>

          <div className="flex justify-end md:col-span-4 md:justify-center">
            <a
              href="#about"
              className="group flex flex-col items-center gap-2 font-mono text-[7px] uppercase tracking-[0.25em] text-[#6F7278]"
            >
              <span className="transition-colors group-hover:text-[#F4F2EC]">
                Scroll
              </span>

              <motion.span
                animate={{
                  y: [0, 5, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="text-[#C9A646]"
              >
                ↓
              </motion.span>
            </a>
          </div>

          <div className="hidden text-right md:col-span-4 md:block">
            <p className="font-mono text-[8px] uppercase leading-5 tracking-[0.18em] text-[#6F7278]">
              19 commercial protocols
              <br />
              8 wellness families
            </p>
          </div>

          {/* Animated system line */}

          <motion.div
            style={{ width: lineWidth }}
            className="absolute -top-px left-0 h-px bg-gradient-to-r from-[#C9A646] via-[#C9A646]/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
