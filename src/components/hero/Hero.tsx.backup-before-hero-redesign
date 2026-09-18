"use client";

import { useRef } from "react";
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

const videoScale = useTransform(
scrollYProgress,
[0, 1],
[1.03, 1.12]
);

const videoY = useTransform(
scrollYProgress,
[0, 1],
["0%", "8%"]
);

const contentY = useTransform(
scrollYProgress,
[0, 1],
["0%", "-7%"]
);

const contentOpacity = useTransform(
scrollYProgress,
[0, 0.75, 1],
[1, 0.98, 0]
);

return (
<section
   ref={heroRef}
   className="driplabs-noise relative min-h-[100svh] overflow-hidden bg-[#071525] text-[#F5F0E7]"
 >
{/* =========================================================
BACKGROUND VIDEO
========================================================= */}
<div className="absolute inset-0 overflow-hidden">
<motion.video
style={{
scale: videoScale,
y: videoY,
}}
className="absolute inset-0 h-full w-full origin-center object-cover object-[60%_center] brightness-[1.1] saturate-[1.08] contrast-[1.02]"
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

    {/* Gentle cinematic tone */}
    <div className="absolute inset-0 bg-[#071525]/8 mix-blend-multiply" />

    {/* Very light readability layer */}
    <div className="absolute inset-0 bg-black/[0.035]" />

    {/* Left-side readability for typography */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/28 via-[#071525]/8 to-transparent" />

    {/* Bottom atmosphere */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/60 via-[#071525]/8 to-transparent" />

    {/* Top atmosphere */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#071525]/20 via-transparent to-transparent" />

    {/* Subtle vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_44%,transparent_0%,rgba(7,21,37,0.025)_58%,rgba(7,21,37,0.16)_100%)]" />

    {/* Slow cinematic light movement */}
    <motion.div
      initial={{ opacity: 0, x: "-20%" }}
      animate={{
        opacity: [0, 0.08, 0],
        x: ["-20%", "110%"],
      }}
      transition={{
        duration: 9,
        delay: 1.2,
        repeat: Infinity,
        repeatDelay: 5,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute inset-y-0 left-0 w-[35vw] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent blur-3xl"
    />
  </div>

  {/* =========================================================
      GOLD TOP ACCENT
  ========================================================= */}
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{
      duration: 1.4,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="absolute left-0 top-0 z-30 h-px w-[30vw] origin-left bg-[#C9A646]"
  />

  {/* =========================================================
      CONTENT
  ========================================================= */}
  <motion.div
    style={{
      y: contentY,
      opacity: contentOpacity,
    }}
    className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-6 pb-6 pt-28 md:px-10 md:pb-8 lg:px-14"
  >
    {/* ---------------------------------------------------------
        TOP META
    --------------------------------------------------------- */}
    <div className="grid grid-cols-2 items-start">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="text-[9px] uppercase leading-[1.8] tracking-[0.3em] text-white/72">
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
          duration: 0.9,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-right"
      >
        <p className="text-[9px] uppercase tracking-[0.28em] text-white/72">
          Snnylo Life Sciences
        </p>

        <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-[#E5D39A]">
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
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-6 flex items-center gap-4"
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.52,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-px w-9 origin-left bg-[#C9A646]"
        />

        <p className="text-[8px] uppercase tracking-[0.34em] text-white/68 md:text-[9px]">
          PRECISION NUTRITION   •   FUNCTIONAL WELLNESS   •   CELLULAR HEALTH
        </p>
      </motion.div>

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, y: 85 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.35,
          delay: 0.52,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-[1120px] text-[clamp(4.4rem,10.2vw,11.5rem)] font-light leading-[0.77] tracking-[-0.075em] text-[#F5F0E7]"
      >
        <motion.span
          initial={{ opacity: 0, x: -25 }}
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.68,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="block"
        >
          Recharge.
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.78,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="block pl-[6vw]"
        >
          Restore.
        </motion.span>
      </motion.h1>

      {/* Supporting content */}
      <div className="mt-8 grid gap-7 md:grid-cols-12 md:items-end md:gap-8">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[500px] text-sm leading-6 text-white/76 md:col-span-6 md:text-[15px] md:leading-7"
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
            delay: 1,
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

            <motion.span
              whileHover={{
                scale: 1.08,
                rotate: -3,
              }}
              transition={{
                type: "tween",
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition-all duration-500 group-hover:border-[#C9A646] group-hover:bg-[#C9A646] group-hover:text-[#0B1D35]"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </div>

    {/* ---------------------------------------------------------
        BOTTOM BAR
    --------------------------------------------------------- */}
    <div className="grid grid-cols-2 items-end gap-6 border-t border-white/20 pt-4 md:grid-cols-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="md:col-span-4"
      >
        <p className="text-[8px] uppercase leading-5 tracking-[0.22em] text-white/52">
          Physician supervised use only
          <br />
          Professional clinical setting
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex justify-end md:col-span-4 md:justify-center"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-white/55"
        >
          <span className="transition-colors duration-300 group-hover:text-white">
            Scroll
          </span>

          <motion.span
            animate={{
              y: [0, 6, 0],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="text-[#E5D39A]"
          >
            ↓
          </motion.span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="hidden text-right md:col-span-4 md:block"
      >
        <p className="text-[8px] uppercase leading-5 tracking-[0.22em] text-white/52">
          19 commercial protocols
          <br />
          8 wellness families
        </p>
      </motion.div>
    </div>
  </motion.div>
</section>

);
}










