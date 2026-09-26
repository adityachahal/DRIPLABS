"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import ProtocolMenu from "./ProtocolMenu";

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const [activeWord, setActiveWord] = useState<
  "Functional" | "Medical" | "Cellular"
>("Functional");

  const [protocolMenuOpen, setProtocolMenuOpen] = useState(false);

  // =========================================================
  // FUNCTIONAL / CELLULAR ROTATION
  // =========================================================

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
    <section className="driplabs-noise relative min-h-[100svh] overflow-hidden bg-[#071525] text-[#F5F0E7]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] brightness-[1.1] saturate-[1.08] contrast-[1.02]"
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

        {/* Left-side readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/90 via-[#071525]/45 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#071525] via-[#071525]/70 to-transparent" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[#071525]/70 to-transparent" />

        {/* Subtle ocean glow */}
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
          TOP GOLD ACCENT
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
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="absolute left-0 top-0 z-30 h-px w-[30vw] origin-left bg-[#C9A646]"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-start px-5 pb-6 pt-[2rem] sm:px-6 md:px-10 md:pb-8 md:pt-[2.5rem] lg:px-14">
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
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="flex items-start justify-end"
        >
          <div className="text-right text-[8px] uppercase tracking-[0.22em] text-white/45 sm:text-[9px]">
            <p></p>

            <p className="mt-1 text-white/30"></p>
          </div>
        </motion.div>

        {/* =======================================================
            HERO COPY
        ======================================================= */}

        <div className="mt-16 pb-5 md:mt-20 md:pb-7">
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
    y: 0,
  }}
  transition={{
    delay: reducedMotion ? 0 : 0.1,
    duration: reducedMotion ? 0.01 : 0.7,
    ease: [0.16, 1, 0.3, 1] as const,
  }}
  className="mb-6 flex w-fit items-center"
>
  {/* LEFT EDITORIAL MARK */}
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
    className="relative top-[32px] mr-2 flex items-center"
    aria-hidden="true"
  >
    <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#28B8C8]/70" />

    <span className="ml-[-1px] text-[15px] font-light leading-none text-[#28B8C8]">
      ‹
    </span>
  </motion.span>

  {/* EYEBROW */}
  <span className="relative top-[32px] whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.32em] text-white/60 sm:text-[9px]">
  NOURISH • RECHARGE • RESTORE
</span>

 {/* RIGHT EDITORIAL MARK */}
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
    className="relative top-[32px] ml-2 flex items-center"
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
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            style={{
              fontFamily:
                '"Inter", "Helvetica Neue", Arial, sans-serif',
            }}
            className="mt-6 relative top-[24px] flex max-w-[px] flex-col gap-[0.10em] text-[clamp(2.2rem,4.2vw,5rem)] font-light leading-[0.9] tracking-[-0.05em] text-[#F5F0E7]"
          >
            {/* Precision Nutrition */}
            <span className="block">
              Precision Nutrition.
            </span>

            {/* =================================================
                FUNCTIONAL / CELLULAR + WELLNESS
            ================================================= */}

            <span className="block">
              <span className="inline-flex items-baseline">
                {/* Animated word */}
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
                        duration: reducedMotion
                          ? 0.01
                          : 0.65,
                        ease: [0.16, 1, 0.3, 1] as const,
                      }}
                      className="absolute left-0 top-0 whitespace-nowrap text-[#28B8C8]"
                    >
                      {activeWord}
                    </motion.span>
                  </AnimatePresence>

                  {/* Fixed ocean underline */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[-0.08em] left-0 h-[2px] w-[3.5ch] bg-[#28B8C8]"
                  />
                </span>

                {/* Wellness */}
                <span className="relative -ml-[1.05em] inline-flex items-baseline -translate-y-[0.20em] text-[#F5F0E7]">
                  Wellness.
                </span>
              </span>
            </span>

            {/* Longevity */}
            <span className="block pl-[0vw]">
              Longevity.
            </span>
          </motion.h1>

          {/* =====================================================
              SUPPORTING COPY
          ===================================================== */}

          <div className="mt-13 grid gap-8 md:grid-cols-12 md:items-end md:gap-8">
            <motion.p
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.4,
                duration: reducedMotion ? 0.01 : 0.7,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="mt-0 whitespace-nowrap text-[19px] font-light not-italic leading-[1.10] tracking-[-0.01em] text-white/80 sm:text-[17px] md:text-[19px]"
            >
              {/* First supporting line */}
              Physician-led advanced{" "}
              <span className="font-semibold italic text-white">
                IV wellness
              </span>{" "}
              and{" "}
              <span className="font-semibold italic text-white">
                NAD+
              </span>{" "}
              personalised experiences

              {/* Clinical environment / home line */}
              <span className="mt-2 block text-white/75 sm:text-[13px] md:text-[15px]">
  Delivered in a considered{" "}
  <span className="font-semibold text-white">clinical environment</span>{" "}
  or at your{" "}
  <span className="font-semibold text-white"> home</span>.
</span>

              {/* Research / science line */}
              <span className="mt-7 block sm:text-[13px] md:text-[15px]">
                {"Research  &  Science  backed  documented  protocols  with  batch"}
                <br />
                {" traceability  and  third  party  lab  tested."}
              </span>
            </motion.p>
          </div>
        </div>

        {/* =======================================================
            BOTTOM AREA
        ======================================================= */}

        <div className="mt-auto grid grid-cols-1 items-end gap-6 pt-4 md:grid-cols-12">
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
      ease: [0.16, 1, 0.3, 1] as const,
    }}
    className="mb-0 flex flex-nowrap items-center gap-3 md:translate-y-[2px]"
  >
    {/* =================================================
        BEGIN YOUR JOURNEY
    ================================================= */}

    <motion.a
      href="#booking"
      whileHover={
        reducedMotion
          ? undefined
          : {
              y:8,
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
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group relative inline-flex min-h-[30px] items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#67E8E8_0%,#28C7D5_38%,#159BBF_72%,#08749F_100%)] px-7 text-[13px] font-medium uppercase tracking-[0.16em] text-[#071525] shadow-[0_8px_35px_rgba(35,190,210,0.24)] sm:px-7"
    >
      {/* Hover shine */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      {/* Highlight */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_15%,rgba(255,255,255,0.35),transparent_42%)] opacity-90" />

      {/* Bottom depth */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-full bg-gradient-to-t from-[#075F86]/20 to-transparent" />

      <span className="relative z-10 flex items-center gap-3">
        BEGIN YOUR JOURNEY

        <span className="text-[13px] transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </span>
    </motion.a>

    {/* =================================================
        EXPLORE PROTOCOLS
    ================================================= */}

    <motion.button
      type="button"
      onClick={() => setProtocolMenuOpen(true)}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: 8,
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
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group inline-flex min-h-[30px] items-center justify-center rounded-full border border-white/35 bg-white/[0.06] px-7 text-[13px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-500 hover:border-white/60 hover:bg-white/[0.12]"
    >
      <span className="flex items-center gap-3">
        EXPLORE PROTOCOLS

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
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="hidden md:col-span-1 md:flex md:justify-center"
          >
            <a
              href="#about"
              className="group flex flex-col items-center gap-2 text-[7px] uppercase tracking-[0.28em] text-white/45 transition-colors duration-300 hover:text-white/80 sm:text-[8px]"
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
                  className="absolute left-0 top-0 h-1/2 w-px bg-[#28B8C8]"
                />
              </span>
            </a>
          </motion.div>

          {/* =====================================================
              BOTTOM RIGHT — VERIFICATION / TRUST STRIP
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
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="md:col-span-6"
          >
            <div className="flex w-full items-stretch justify-between">
              {/* =================================================
                  01 — PHARMA-GRADE FORMULATIONS
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

                  <span className="whitespace-nowrap text-[7px] font-medium uppercase leading-[1.7] tracking-[0.12em] text-white/70 sm:text-[8px]">
                    PHARMA-GRADE
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

                  <span className="whitespace-nowrap text-[7px] font-medium uppercase leading-[1.7] tracking-[0.12em] text-white/70 sm:text-[8px]">
                    PHYSICIAN
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

                  <span className="whitespace-nowrap text-[7px] font-medium uppercase leading-[1.7] tracking-[0.12em] text-white/70 sm:text-[8px]">
                    INDIAN PHARMACOPOEIA
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

                  <span className="whitespace-nowrap text-[7px] font-medium uppercase leading-[1.7] tracking-[0.12em] text-white/70 sm:text-[8px]">
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
          PRODUCTS / PROTOCOL MENU
      ========================================================= */}

      <ProtocolMenu
        open={protocolMenuOpen}
        onClose={() => setProtocolMenuOpen(false)}
      />
    </section>
  );
}