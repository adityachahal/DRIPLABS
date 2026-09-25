"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const molecularNodes = [
  { x: 15, y: 27, size: 4, delay: 0 },
  { x: 27, y: 18, size: 3, delay: 0.6 },
  { x: 40, y: 25, size: 5, delay: 1.1 },
  { x: 53, y: 15, size: 3, delay: 0.3 },
  { x: 66, y: 27, size: 4, delay: 0.9 },
  { x: 79, y: 20, size: 3, delay: 0.5 },
  { x: 20, y: 67, size: 3, delay: 1.4 },
  { x: 34, y: 78, size: 4, delay: 0.4 },
  { x: 49, y: 69, size: 3, delay: 1 },
  { x: 65, y: 78, size: 5, delay: 0.7 },
  { x: 81, y: 65, size: 3, delay: 1.7 },
];

const orbitalRings = [
  {
    size: 390,
    duration: 30,
    direction: 1,
    opacity: 0.11,
  },
  {
    size: 315,
    duration: 23,
    direction: -1,
    opacity: 0.09,
  },
  {
    size: 245,
    duration: 18,
    direction: 1,
    opacity: 0.13,
  },
];

const clinicalPrinciples = [
  ["01", "PHYSICIAN\nGUIDED"],
  ["02", "PRECISION\nDOSING"],
  ["03", "TRACEABLE\nCARE"],
];

export default function NADFeature() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 65,
    damping: 22,
    mass: 0.7,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 65,
    damping: 22,
    mass: 0.7,
  });

  const objectX = useTransform(smoothX, [-600, 600], [-18, 18]);
  const objectY = useTransform(smoothY, [-600, 600], [-14, 14]);

  const glowX = useTransform(smoothX, [-600, 600], [-40, 40]);
  const glowY = useTransform(smoothY, [-600, 600], [-30, 30]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    mouseX.set(
      event.clientX - (rect.left + rect.width / 2)
    );

    mouseY.set(
      event.clientY - (rect.top + rect.height / 2)
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#04080c] text-white"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Primary cyan atmosphere */}
        <motion.div
          style={{
            x: glowX,
            y: glowY,
          }}
          className="absolute left-[48%] top-[35%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.035] blur-[150px]"
        />

        {/* Secondary warm atmosphere */}
        <div className="absolute right-[-15%] top-[5%] h-[650px] w-[650px] rounded-full bg-amber-100/[0.018] blur-[170px]" />

        {/* Lower atmosphere */}
        <div className="absolute bottom-[-30%] left-[15%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.018] blur-[150px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.65) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top gradient */}
        <div className="absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-black/25 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1680px] px-6 py-20 sm:px-10 md:py-24 lg:px-16 lg:py-28 xl:px-20">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 flex items-center gap-4 md:mb-20"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/35">
            06 — CELLULAR LONGEVITY
          </span>

          <span className="h-px w-12 bg-white/10 md:w-20" />

          <span className="font-mono text-[8px] tracking-[0.24em] text-cyan-100/45">
            NAD+ / CELLULAR ENERGY
          </span>
        </motion.div>

        {/* =======================================================
            EDITORIAL GRID
        ======================================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-0">
          {/* =====================================================
              LEFT — EDITORIAL
          ===================================================== */}

          <div className="relative z-20 max-w-[620px]">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 text-[10px] uppercase tracking-[0.32em] text-amber-100/55"
            >
              The molecule
            </motion.p>

            {/* NAD+ */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <h2 className="font-serif text-[clamp(5.5rem,11vw,11rem)] font-light leading-[0.72] tracking-[-0.07em] text-white">
                NAD
                <span className="relative -top-[0.12em] ml-2 align-top text-[0.34em] tracking-[-0.04em] text-cyan-100/75">
                  +
                </span>
              </h2>

              {/* tiny molecular designation */}
              <div className="absolute bottom-[5%] left-[2px] hidden translate-y-full items-center gap-3 pt-5 sm:flex">
                <span className="h-px w-8 bg-cyan-100/20" />
                <span className="font-mono text-[7px] tracking-[0.25em] text-white/25">
                  NICOTINAMIDE ADENINE DINUCLEOTIDE
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 max-w-[540px] text-[clamp(1.8rem,3.3vw,3.35rem)] font-light leading-[1.03] tracking-[-0.045em] text-white/90"
            >
              The molecule behind
              <br />
              <span className="text-white/45">
                cellular energy.
              </span>
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.22,
              }}
              className="mt-8 max-w-[480px] text-[13px] leading-7 text-white/40"
            >
              NAD+ is a naturally occurring coenzyme involved in
              cellular energy metabolism and redox processes.
              DRIPLABS approaches NAD+ through physician-guided
              wellness protocols and a precision-led clinical
              experience.
            </motion.p>

            {/* =================================================
                CLINICAL PRINCIPLES
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-10 grid max-w-[510px] grid-cols-3 border-y border-white/[0.09]"
            >
              {clinicalPrinciples.map(([number, label], index) => (
                <div
                  key={number}
                  className={[
                    "group relative px-3 py-5",
                    index !== 2
                      ? "border-r border-white/[0.08]"
                      : "",
                    index === 0 ? "pl-0" : "",
                  ].join(" ")}
                >
                  <span className="font-mono text-[8px] tracking-[0.22em] text-cyan-100/45">
                    {number}
                  </span>

                  <span className="mt-2 block whitespace-pre-line text-[8px] leading-4 tracking-[0.16em] text-white/50 transition-colors duration-500 group-hover:text-white/80">
                    {label}
                  </span>

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-100/40 transition-all duration-700 group-hover:w-full" />
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.48,
              }}
              className="mt-9"
            >
              <Link
                href="/protocols"
                className="group inline-flex items-center gap-4"
              >
                <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-amber-100/20 transition-all duration-700 group-hover:border-amber-100/55 group-hover:bg-amber-100/[0.06]">
                  <span className="absolute inset-0 scale-0 rounded-full bg-amber-100/[0.08] transition-transform duration-700 group-hover:scale-100" />

                  <span className="relative text-sm text-white/80 transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="text-[9px] tracking-[0.24em] text-white/55 transition-colors duration-500 group-hover:text-white">
                  EXPLORE NAD+ PROTOCOLS
                </span>
              </Link>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — MOLECULAR ARTWORK
          ===================================================== */}

          <motion.div
            style={{
              x: objectX,
              y: objectY,
            }}
            className="relative mx-auto mt-4 h-[500px] w-full max-w-[760px] sm:h-[620px] lg:mt-0 lg:h-[700px]"
          >
            {/* Outer technical frame */}
            <div className="absolute inset-[5%] border border-white/[0.055]" />

            {/* Frame corners */}
            <div className="absolute left-[5%] top-[5%] h-4 w-4 border-l border-t border-cyan-100/20" />
            <div className="absolute right-[5%] top-[5%] h-4 w-4 border-r border-t border-cyan-100/20" />
            <div className="absolute bottom-[5%] left-[5%] h-4 w-4 border-b border-l border-cyan-100/20" />
            <div className="absolute bottom-[5%] right-[5%] h-4 w-4 border-b border-r border-cyan-100/20" />

            {/* Technical vertical axis */}
            <div className="absolute left-1/2 top-[5%] h-[90%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.035] to-transparent" />

            {/* Technical horizontal axis */}
            <div className="absolute left-[5%] top-1/2 h-px w-[90%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />

            {/* =================================================
                MOLECULAR FIELD
            ================================================= */}

            <div className="absolute inset-0">
              {/* ambient glow */}
              <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.025] blur-[100px]" />

              {/* warmer inner glow */}
              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/[0.018] blur-[80px]" />

              {/* =================================================
                  MOLECULAR NODES
              ================================================= */}

              {molecularNodes.map((node, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full bg-cyan-100/50 shadow-[0_0_18px_rgba(170,235,255,.32)]"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    width: node.size,
                    height: node.size,
                  }}
                  animate={{
                    opacity: [0.2, 0.85, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3.8,
                    delay: node.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* =================================================
                  CONNECTING MOLECULAR STRUCTURE
              ================================================= */}

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.24]"
                viewBox="0 0 700 700"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M115 205 L205 125 L305 180 L405 105 L510 185 L600 130"
                  stroke="rgba(185,235,255,.45)"
                  strokeWidth="0.7"
                />

                <path
                  d="M140 470 L235 540 L350 475 L465 545 L570 455"
                  stroke="rgba(185,235,255,.4)"
                  strokeWidth="0.7"
                />

                <path
                  d="M205 125 L235 540"
                  stroke="rgba(185,235,255,.2)"
                  strokeWidth="0.6"
                />

                <path
                  d="M305 180 L350 475"
                  stroke="rgba(185,235,255,.2)"
                  strokeWidth="0.6"
                />

                <path
                  d="M510 185 L465 545"
                  stroke="rgba(185,235,255,.2)"
                  strokeWidth="0.6"
                />
              </svg>

              {/* =================================================
                  ORBITAL SYSTEM
              ================================================= */}

              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 sm:h-[510px] sm:w-[510px]">
                {/* outer orbit */}
                {orbitalRings.map((ring) => (
                  <motion.div
                    key={ring.size}
                    className="absolute left-1/2 top-1/2 rounded-full border"
                    style={{
                      width: ring.size,
                      height: ring.size,
                      marginLeft: -ring.size / 2,
                      marginTop: -ring.size / 2,
                      borderColor: `rgba(190,235,255,${ring.opacity})`,
                    }}
                    animate={{
                      rotate: ring.direction * 360,
                    }}
                    transition={{
                      duration: ring.duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {/* orbital point */}
                    <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/75 shadow-[0_0_14px_rgba(170,240,255,.75)]" />
                  </motion.div>
                ))}

                {/* elliptical orbit 1 */}
                <motion.div
                  animate={{
                    rotate: [25, 385],
                  }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-[185px] w-[365px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-amber-100/[0.11]"
                />

                {/* elliptical orbit 2 */}
                <motion.div
                  animate={{
                    rotate: [-35, -395],
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-[320px] w-[175px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-100/[0.09]"
                />

                {/* =================================================
                    CENTRAL OBJECT
                ================================================= */}

                <motion.div
                  animate={{
                    scale: [1, 1.018, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 sm:h-[205px] sm:w-[205px]"
                >
                  {/* outer glow */}
                  <div className="absolute inset-[-25px] rounded-full bg-cyan-200/[0.025] blur-[35px]" />

                  {/* glass shell */}
                  <div className="absolute inset-0 rounded-full border border-white/[0.13] bg-[#071118]/80 shadow-[0_0_100px_rgba(90,210,240,.08)] backdrop-blur-2xl" />

                  {/* inner ring */}
                  <div className="absolute inset-[10px] rounded-full border border-cyan-100/[0.12]" />

                  {/* warm inner ring */}
                  <div className="absolute inset-[27px] rounded-full border border-amber-100/[0.08]" />

                  {/* subtle crosshair */}
                  <div className="absolute left-1/2 top-[12px] h-[calc(100%-24px)] w-px -translate-x-1/2 bg-white/[0.035]" />

                  <div className="absolute left-[12px] top-1/2 h-px w-[calc(100%-24px)] -translate-y-1/2 bg-white/[0.035]" />

                  {/* central content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="font-serif text-[3.4rem] font-light leading-none tracking-[-0.08em] text-white sm:text-[4.2rem]">
                      NAD
                      <span className="relative -top-5 ml-1 text-[1.35rem] tracking-normal text-cyan-100/80">
                        +
                      </span>
                    </div>

                    <div className="mt-4 h-px w-8 bg-cyan-100/20" />

                    <div className="mt-3 font-mono text-[6px] tracking-[0.32em] text-white/30">
                      MOLECULAR FIELD
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    FLOATING LABELS
                ================================================= */}

                <div className="absolute left-[-3%] top-[26%] border-l border-cyan-100/[0.18] pl-3">
                  <span className="block font-mono text-[6px] tracking-[0.22em] text-white/25">
                    CELLULAR
                  </span>

                  <span className="mt-1 block text-[9px] tracking-[0.1em] text-white/55">
                    ENERGY
                  </span>
                </div>

                <div className="absolute right-[-3%] top-[38%] border-r border-cyan-100/[0.18] pr-3 text-right">
                  <span className="block font-mono text-[6px] tracking-[0.22em] text-white/25">
                    REDOX
                  </span>

                  <span className="mt-1 block text-[9px] tracking-[0.1em] text-white/55">
                    PATHWAYS
                  </span>
                </div>

                <div className="absolute bottom-[12%] left-[10%] border-l border-amber-100/[0.18] pl-3">
                  <span className="block font-mono text-[6px] tracking-[0.22em] text-white/25">
                    METABOLIC
                  </span>

                  <span className="mt-1 block text-[9px] tracking-[0.1em] text-white/55">
                    SUPPORT
                  </span>
                </div>
              </div>

              {/* =================================================
                  TECHNICAL INFORMATION
              ================================================= */}

              <div className="absolute left-[8%] top-[10%] font-mono text-[6px] leading-4 tracking-[0.2em] text-white/[0.22]">
                28.6139° N
                <br />
                77.2090° E
              </div>

              <div className="absolute right-[8%] top-[10%] text-right font-mono text-[6px] leading-4 tracking-[0.2em] text-white/[0.2]">
                DRIPLABS
                <br />
                CELLULAR SYSTEM
              </div>

              <div className="absolute bottom-[10%] right-[8%] text-right font-mono text-[6px] leading-4 tracking-[0.2em] text-white/[0.2]">
                NAD+
                <br />
                06 / 08
              </div>

              <div className="absolute bottom-[10%] left-[8%] font-mono text-[6px] tracking-[0.2em] text-white/[0.2]">
                PRECISION
                <br />
                WELLNESS
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM SIGNATURE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mt-10 flex items-center justify-between border-t border-white/[0.07] pt-5"
        >
          <span className="font-mono text-[7px] tracking-[0.25em] text-white/20">
            DRIPLABS / CELLULAR LONGEVITY
          </span>

          <span className="font-mono text-[7px] tracking-[0.25em] text-white/20">
            NAD+ / PRECISION PROTOCOL
          </span>
        </motion.div>
      </div>
    </section>
  );
}