"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="driplabs-noise relative min-h-[100svh] overflow-hidden bg-[#0B1D35] text-[#F5F0E7]">
      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================= */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
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
        </video>

        {/* Cinematic colour treatment */}
        <div className="absolute inset-0 bg-[#071525]/30 mix-blend-multiply" />

        {/* Soft contrast */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Bottom atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/95 via-[#071525]/20 to-transparent" />

        {/* Top atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071525]/55 via-transparent to-transparent" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,transparent_0%,rgba(7,21,37,0.08)_45%,rgba(7,21,37,0.42)_100%)]" />
      </div>

      {/* =========================================================
          GOLD TOP ACCENT
      ========================================================= */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.3,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 top-0 z-20 h-px w-[28vw] origin-left bg-[#C9A646]"
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-6 pb-6 pt-28 md:px-10 md:pb-8 lg:px-14">
        {/* ---------------------------------------------------------
            TOP META
        --------------------------------------------------------- */}
        <div className="grid grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-[9px] uppercase leading-[1.8] tracking-[0.3em] text-white/65">
              Physician-led
              <br />
              IV wellness
              <br />
              &amp; NAD+
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-right"
          >
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/60">
              Snnylo Wellness Sciences
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-[#C9A646]">
              Made in India
            </p>
          </motion.div>
        </div>

        {/* ---------------------------------------------------------
            MAIN HERO
        --------------------------------------------------------- */}
        <div className="mt-auto pb-5 pt-20 md:pb-7 md:pt-24">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-9 bg-[#C9A646]" />

            <p className="text-[8px] uppercase tracking-[0.34em] text-white/60 md:text-[9px]">
              Nourish. Recharge. Restore.
            </p>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.15,
              delay: 0.52,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[1120px] text-[clamp(4.4rem,10.2vw,11.5rem)] font-light leading-[0.77] tracking-[-0.075em] text-[#F5F0E7]"
          >
            <span className="block">Nourish.</span>

            <span className="block">Recharge.</span>

            <span className="block pl-[6vw]">Restore.</span>
          </motion.h1>

          {/* Supporting content */}
          <div className="mt-8 grid gap-7 md:grid-cols-12 md:items-end md:gap-8">
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[500px] text-sm leading-6 text-white/68 md:col-span-6 md:text-[15px] md:leading-7"
            >
              Physician-led IV wellness and NAD+ experiences, built around
              documented protocols, professional supervision and a
              pharmaceutical-grade approach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-4 md:col-start-9"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-5 text-[9px] uppercase tracking-[0.27em] text-white"
              >
                <span className="relative">
                  Explore DRIPLABS

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C9A646] transition-all duration-500 group-hover:w-full" />
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all duration-500 group-hover:border-[#C9A646] group-hover:bg-[#C9A646] group-hover:text-[#0B1D35]">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* ---------------------------------------------------------
            BOTTOM BAR
        --------------------------------------------------------- */}
        <div className="grid grid-cols-2 items-end gap-6 border-t border-white/15 pt-4 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="md:col-span-4"
          >
            <p className="text-[8px] uppercase leading-5 tracking-[0.22em] text-white/38">
              Physician supervised use only
              <br />
              Professional clinical setting
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-end md:col-span-4 md:justify-center"
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-white/40"
            >
              <span>Scroll</span>

              <motion.span
                animate={{ y: [0, 5, 0] }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hidden text-right md:col-span-4 md:block"
          >
            <p className="text-[8px] uppercase leading-5 tracking-[0.22em] text-white/38">
              19 commercial protocols
              <br />
              8 wellness families
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}