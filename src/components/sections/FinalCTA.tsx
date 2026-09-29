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

  const orbY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "12%"],
  );

  const orbScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.92, 1.08, 0.96],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["35px", "0px", "-20px"],
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0.05, 0.45, 0.9],
    [0, 1, 1],
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[78svh] overflow-hidden bg-[#020812] text-[#F7FAFF]"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Deep background */}
        <div className="absolute inset-0 bg-[#020812]" />

        {/* Central electric atmosphere */}
        <motion.div
          style={{
            y: reduceMotion ? undefined : orbY,
            scale: reduceMotion ? undefined : orbScale,
          }}
          className="absolute left-1/2 top-1/2 aspect-square w-[85vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.18)_0%,rgba(22,131,255,0.08)_28%,transparent_68%)] blur-[45px]" />

          <div className="absolute inset-[14%] rounded-full border border-[#1683FF]/10" />

          <div className="absolute inset-[24%] rounded-full border border-[#4D9BFF]/[0.08]" />

          <div className="absolute inset-[34%] rounded-full bg-[radial-gradient(circle,rgba(77,155,255,0.12),transparent_70%)] blur-3xl" />
        </motion.div>

        {/* Horizontal light */}
        <div className="absolute left-1/2 top-[48%] h-px w-[75vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1683FF]/25 to-transparent" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(140,203,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(140,203,255,.6) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
            maskImage:
              "radial-gradient(circle at center, black 20%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 20%, transparent 78%)",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(2,8,18,.82)_100%)]" />

        {/* Top glow */}
        <div className="absolute left-1/2 top-0 h-px w-[55vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1683FF]/50 to-transparent" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <motion.div
        style={{
          y: reduceMotion ? undefined : contentY,
        }}
        className="relative z-10 mx-auto flex min-h-[78svh] max-w-[1680px] flex-col justify-center px-6 py-28 sm:px-8 lg:px-16"
      >
        {/* Eyebrow */}
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-10 bg-[#1683FF]" />

          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#8CCBFF]/75">
            Begin Your Journey
          </span>
        </div>

        {/* Main layout */}
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          {/* =================================================
              HEADLINE
          ================================================= */}

          <div className="lg:col-span-8">
            <h2 className="max-w-[1050px] font-serif text-[clamp(4rem,8.7vw,9.5rem)] font-normal leading-[0.78] tracking-[-0.065em] text-white">
              Start with a
              <br />
              considered
              <br />
              <span className="relative inline-block text-[#4D9BFF]">
                conversation.
              </span>
            </h2>

            {/* Animated underline */}
            <motion.div
              style={{
                scaleX: reduceMotion ? 1 : lineScale,
              }}
              className="mt-10 h-px w-[min(420px,55vw)] origin-left bg-gradient-to-r from-[#1683FF] via-[#4D9BFF]/60 to-transparent"
            />
          </div>

          {/* =================================================
              COPY + CTA
          ================================================= */}

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-[13px] leading-7 text-white/50">
              Explore the DRIPLABS experience that fits your needs
              and take the next step with our team.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              {/* Primary CTA */}
              <Link
                href="/locations"
                className="group relative inline-flex min-h-[52px] items-center justify-center overflow-hidden rounded-[10px] bg-[#0066FF] px-7 text-[9px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#1683FF] hover:shadow-[0_15px_50px_rgba(0,102,255,.28)]"
              >
                {/* Sweep */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  Begin your journey
                </span>

                <span className="relative ml-7 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* Secondary */}
              <Link
                href="/protocols"
                className="group inline-flex min-h-[52px] items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.025] px-7 text-[9px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-md transition-all duration-500 hover:border-[#1683FF]/50 hover:bg-[#1683FF]/[0.06] hover:text-white"
              >
                Explore protocols

                <span className="ml-7 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM SIGNATURE
        ================================================= */}

        <div className="mt-20 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1683FF] shadow-[0_0_14px_rgba(22,131,255,.8)]" />

            <span className="text-[8px] uppercase tracking-[0.25em] text-white/30">
              Physician-led wellness
            </span>
          </div>

          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
            DRIPLABS®
          </span>
        </div>
      </motion.div>
    </section>
  );
}