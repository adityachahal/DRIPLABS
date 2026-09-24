"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const molecularNodes = [
  { x: 18, y: 30, size: 5, delay: 0 },
  { x: 31, y: 18, size: 3, delay: 0.8 },
  { x: 44, y: 28, size: 4, delay: 1.4 },
  { x: 57, y: 16, size: 3, delay: 0.3 },
  { x: 70, y: 29, size: 5, delay: 1.1 },
  { x: 82, y: 21, size: 3, delay: 0.6 },
  { x: 22, y: 65, size: 3, delay: 1.6 },
  { x: 35, y: 76, size: 5, delay: 0.4 },
  { x: 51, y: 67, size: 3, delay: 1.2 },
  { x: 66, y: 78, size: 4, delay: 0.7 },
  { x: 80, y: 65, size: 3, delay: 1.8 },
];

const rings = [
  { size: 360, duration: 28, direction: 1 },
  { size: 285, duration: 22, direction: -1 },
  { size: 215, duration: 17, direction: 1 },
];

export default function NADFeature() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const visualX = useTransform(smoothX, [-500, 500], [-12, 12]);
  const visualY = useTransform(smoothY, [-500, 500], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    mouseX.set(event.clientX - (rect.left + rect.width / 2));
    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#050b11] text-white"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-amber-200/[0.025] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto min-h-[720px] max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="font-mono text-[10px] tracking-[0.28em] text-white/40">
            06 — CELLULAR LONGEVITY
          </span>

          <span className="h-px w-20 bg-white/10" />

          <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-200/50">
            NAD+ / CELLULAR ENERGY
          </span>
        </motion.div>

        <div className="grid min-h-[570px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-4">
          {/* LEFT — Editorial content */}
          <div className="relative z-10 max-w-[590px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-[11px] uppercase tracking-[0.28em] text-amber-100/60"
            >
              The molecule
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-[clamp(4rem,8vw,8.5rem)] font-light leading-[0.78] tracking-[-0.055em]"
            >
              NAD
              <span className="relative -top-[0.08em] ml-1 text-[0.48em] align-top text-cyan-100/80">
                +
              </span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-7 max-w-[500px] text-[clamp(1.7rem,3vw,3rem)] font-light leading-[1.05] tracking-[-0.035em] text-white/90"
            >
              The molecule behind
              <br />
              cellular energy.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-7 max-w-[470px] text-sm leading-7 text-white/45"
            >
              NAD+ is a naturally occurring coenzyme involved in cellular
              energy metabolism and redox processes. DRIPLABS approaches NAD+
              through physician-guided wellness protocols and a precision-led
              clinical experience.
            </motion.p>

            {/* Clinical principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-9 grid max-w-[500px] grid-cols-3 border-y border-white/10"
            >
              {[
                ["01", "PHYSICIAN\nGUIDED"],
                ["02", "PRECISION\nDOSING"],
                ["03", "TRACEABLE\nCARE"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="border-r border-white/10 px-3 py-4 first:pl-0 last:border-r-0"
                >
                  <span className="block font-mono text-[8px] tracking-[0.2em] text-cyan-200/50">
                    {number}
                  </span>

                  <span className="mt-2 block whitespace-pre-line text-[9px] leading-4 tracking-[0.13em] text-white/55">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8"
            >
              <Link
                href="/protocols"
                className="group inline-flex items-center gap-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-100/25 transition-all duration-500 group-hover:border-amber-100/60 group-hover:bg-amber-100/10">
                  <span className="text-sm transition-transform duration-500 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>

                <span className="text-[10px] tracking-[0.2em] text-white/70 transition-colors group-hover:text-white">
                  EXPLORE NAD+ PROTOCOLS
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Biotech visual */}
          <motion.div
            style={{
              x: visualX,
              y: visualY,
            }}
            className="relative mx-auto h-[480px] w-full max-w-[700px] lg:h-[600px]"
          >
            {/* Technical frame */}
            <div className="absolute inset-[7%] border border-white/[0.07]" />

            <div className="absolute left-[7%] top-[7%] h-3 w-3 border-l border-t border-cyan-100/30" />
            <div className="absolute right-[7%] top-[7%] h-3 w-3 border-r border-t border-cyan-100/30" />
            <div className="absolute bottom-[7%] left-[7%] h-3 w-3 border-b border-l border-cyan-100/30" />
            <div className="absolute bottom-[7%] right-[7%] h-3 w-3 border-b border-r border-cyan-100/30" />

            {/* Molecular particles */}
            {molecularNodes.map((node, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full bg-cyan-100/50 shadow-[0_0_16px_rgba(150,240,255,.35)]"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  width: node.size,
                  height: node.size,
                }}
                animate={{
                  opacity: [0.25, 0.9, 0.25],
                  scale: [0.8, 1.25, 0.8],
                }}
                transition={{
                  duration: 3.5,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Connecting molecular lines */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 700 600"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M125 180 L215 110 L310 168 L400 95 L490 175 L575 125" stroke="rgba(190,240,255,.5)" />
              <path d="M155 390 L250 455 L355 400 L465 470 L560 390" stroke="rgba(190,240,255,.5)" />
              <path d="M215 110 L250 455" stroke="rgba(190,240,255,.25)" />
              <path d="M310 168 L355 400" stroke="rgba(190,240,255,.25)" />
              <path d="M490 175 L465 470" stroke="rgba(190,240,255,.25)" />
            </svg>

            {/* Central molecular field */}
            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 sm:h-[470px] sm:w-[470px]">
              {/* Glow */}
              <div className="absolute inset-[22%] rounded-full bg-cyan-300/[0.045] blur-[65px]" />

              {/* Rotating rings */}
              {rings.map((ring, index) => (
                <motion.div
                  key={ring.size}
                  className="absolute left-1/2 top-1/2 rounded-full border border-cyan-100/[0.12]"
                  style={{
                    width: ring.size,
                    height: ring.size,
                    marginLeft: -ring.size / 2,
                    marginTop: -ring.size / 2,
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
                  <span
                    className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/70 shadow-[0_0_12px_rgba(170,240,255,.7)]"
                  />
                </motion.div>
              ))}

              {/* Inner orbital rings */}
              <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rotate-[25deg] rounded-[45%] border border-amber-100/15" />
              <div className="absolute left-1/2 top-1/2 h-[150px] w-[220px] -translate-x-1/2 -translate-y-1/2 -rotate-[35deg] rounded-[50%] border border-cyan-100/10" />

              {/* Central NAD+ core */}
              <motion.div
                animate={{
                  scale: [1, 1.025, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-100/20 bg-[#07121a]/90 shadow-[0_0_80px_rgba(110,220,255,.10)] backdrop-blur-xl"
              >
                <div className="absolute inset-3 rounded-full border border-amber-100/10" />

                <div className="text-center">
                  <div className="font-serif text-4xl font-light tracking-[-0.05em]">
                    NAD<span className="align-top text-lg">+</span>
                  </div>

                  <div className="mt-1 font-mono text-[7px] tracking-[0.3em] text-cyan-100/40">
                    MOLECULAR FIELD
                  </div>
                </div>
              </motion.div>

              {/* Floating data labels */}
              <div className="absolute left-[3%] top-[27%] border-l border-cyan-100/20 pl-3">
                <span className="block font-mono text-[7px] tracking-[0.18em] text-white/30">
                  CELLULAR
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.08em] text-white/60">
                  ENERGY
                </span>
              </div>

              <div className="absolute right-[-3%] top-[39%] border-r border-cyan-100/20 pr-3 text-right">
                <span className="block font-mono text-[7px] tracking-[0.18em] text-white/30">
                  REDOX
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.08em] text-white/60">
                  PATHWAYS
                </span>
              </div>

              <div className="absolute bottom-[12%] left-[17%] border-l border-amber-100/20 pl-3">
                <span className="block font-mono text-[7px] tracking-[0.18em] text-white/30">
                  METABOLIC
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.08em] text-white/60">
                  SUPPORT
                </span>
              </div>
            </div>

            {/* Technical coordinates */}
            <div className="absolute left-[8%] top-[12%] font-mono text-[7px] tracking-[0.18em] text-white/20">
              28.6139° N
              <br />
              77.2090° E
            </div>

            <div className="absolute bottom-[10%] right-[8%] text-right font-mono text-[7px] tracking-[0.18em] text-white/20">
              DRIPLABS / NAD+
              <br />
              CELLULAR SYSTEM
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}