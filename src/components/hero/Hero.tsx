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
    "Functional" | "Cellular"
  >("Functional");

  const [protocolMenuOpen, setProtocolMenuOpen] = useState(false);

  const trustPoints = [
    "Indian Pharmacopoeia compliant",
    "Pharma grade formulations",
    "Third party lab tested",
  ];

  const [activeTrustPoint, setActiveTrustPoint] = useState(0);

  // Functional / Cellular rotation
  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveWord((current) =>
        current === "Functional" ? "Cellular" : "Functional"
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  // Bottom-right trust point rotation
  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveTrustPoint((current) =>
        current === trustPoints.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, [reducedMotion, trustPoints.length]);

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
            <p>Snnylo Life Sciences</p>

            <p className="mt-1 text-white/30">
              Made in India
            </p>
          </div>
        </motion.div>

        {/* =======================================================
            HERO COPY
        ======================================================= */}
        <div className="mt-16 pb-5 md:mt-20 md:pb-7">
          {/* Eyebrow */}
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
              delay: reducedMotion ? 0 : 0.1,
              duration: reducedMotion ? 0.01 : 0.8,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="mb-5 text-[8px] font-medium uppercase tracking-[0.3em] text-white/55 sm:text-[9px]"
          >
            NOURISH • RECHARGE • RESTORE •
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
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
            className="relative top-[45px] max-w-[850px] text-[clamp(2.2rem,4.2vw,5rem)] font-light leading-[0.9] tracking-[-0.05em] text-[#F5F0E7]"
          >
            <span className="block">
              Precision Nutrition.
            </span>

            <span className="block">
              <span className="inline-flex items-baseline">
                {/* Functional / Cellular */}
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
                            y: 0,
                          }
                        : {
                            opacity: 0,
                            y: 18,
                            filter: "blur(6px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={
                      reducedMotion
                        ? {
                            opacity: 0,
                          }
                        : {
                            opacity: 0,
                            y: -18,
                            filter: "blur(6px)",
                          }
                    }
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.65,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="text-[#28B8C8]"
                  >
                    {activeWord}
                  </motion.span>
                </AnimatePresence>

                <span className="text-[#F5F0E7]">
                  &nbsp;Wellness.
                </span>
              </span>
            </span>

            <span className="block pl-[4vw]">
              Healthy Aging.
            </span>
          </motion.h1>

          {/* =====================================================
              SUPPORTING COPY
          ===================================================== */}
          <div className="mt-16 grid gap-8 md:grid-cols-12 md:items-end md:gap-8">
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
              className="mt-10 whitespace-nowrap text-[18px] font-light not-italic leading-none tracking-[-0.01em] text-white/75 sm:text-[16px] md:text-[16px]"
            >
              Physician-led Advanced{" "}
              <span className="italic">
                IV wellness
              </span>{" "}
              and{" "}
              <span className="italic">
                NAD+
              </span>{" "}
              experiences
            </motion.p>
          </div>
        </div>

        {/* =======================================================
            BOTTOM AREA
        ======================================================= */}
        <div className="mt-auto grid grid-cols-2 items-end gap-6 pt-4 md:grid-cols-12">
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
              className="mb-5 flex items-center gap-3"
            >
              {/* BOOK YOUR DRIP */}
              <motion.a
                href="#booking"
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -3,
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
                className="group relative inline-flex min-h-[44px] items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#67E8E8_0%,#28C7D5_38%,#159BBF_72%,#08749F_100%)] px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-[#071525] shadow-[0_8px_35px_rgba(35,190,210,0.24)] sm:px-7 sm:text-[11px]"
              >
                {/* Hover shine */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                {/* Highlight */}
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_15%,rgba(255,255,255,0.35),transparent_42%)] opacity-90" />

                {/* Bottom depth */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-full bg-gradient-to-t from-[#075F86]/20 to-transparent" />

                <span className="relative z-10 flex items-center gap-3">
                  Book Your Drip

                  <span className="text-[13px] transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </motion.a>

              {/* =================================================
                  VIEW IV PROTOCOLS
              ================================================= */}
              <motion.button
                type="button"
                onClick={() => setProtocolMenuOpen(true)}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -3,
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
                className="group inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/35 bg-white/[0.06] px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-500 hover:border-white/60 hover:bg-white/[0.12] sm:px-7 sm:text-[11px]"
              >
                <span className="flex items-center gap-3">
                  View IV Protocols

                  <span className="text-[13px] transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </motion.button>
            </motion.div>

            {/* Physician / legal line */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.7,
                duration: reducedMotion ? 0.01 : 0.7,
              }}
              className="text-[7px] uppercase leading-[1.8] tracking-[0.22em] text-white/45 sm:text-[8px]"
            >
              Physician supervised use only
              <br />
              Professional clinical setting
            </motion.p>
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
            className="flex justify-end md:col-span-3 md:justify-center"
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
              BOTTOM RIGHT — ROTATING TRUST POINTS
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
              delay: reducedMotion ? 0 : 0.8,
              duration: reducedMotion ? 0.01 : 0.7,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="hidden text-right md:col-span-4 md:block"
          >
            <div className="flex min-h-[18px] items-center justify-end">
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.span
                  key={activeTrustPoint}
                  initial={
                    reducedMotion
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                          y: 8,
                          filter: "blur(4px)",
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={
                    reducedMotion
                      ? {
                          opacity: 0,
                        }
                      : {
                          opacity: 0,
                          y: -8,
                          filter: "blur(4px)",
                        }
                  }
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.5,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="text-[8px] uppercase tracking-[0.2em] text-white/55 sm:text-[9px]"
                >
                  {trustPoints[activeTrustPoint]}
                </motion.span>
              </AnimatePresence>
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