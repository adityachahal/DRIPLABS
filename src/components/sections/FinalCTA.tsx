"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="book"
      className="relative min-h-[82svh] overflow-hidden bg-[#060607] text-[#F2F0EA]"
    >
      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Primary glow */}
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.75, 0.5],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[34%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#C9A646]/[0.055] blur-[130px]"
        />

        {/* Secondary atmosphere */}
        <div className="absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#AFC7C2]/[0.025] blur-[130px]" />

        {/* Radial darkening */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(6,6,7,0.2)_45%,rgba(6,6,7,0.82)_100%)]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto flex min-h-[82svh] max-w-[1400px] flex-col justify-between px-6 py-7 md:px-10 md:py-9 lg:px-14">
        {/* =======================================================
            TOP RAIL
        ======================================================= */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -10 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.7,
            ease: easeLuxury,
          }}
          className="flex items-center justify-between border-b border-white/[0.09] pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-[5px] w-[5px] rounded-full bg-[#C9A646] shadow-[0_0_14px_rgba(201,166,70,0.7)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.26em] text-[#C9A646]">
              DRIPLABS®
            </span>
          </div>

          <span className="text-[8px] uppercase tracking-[0.22em] text-white/25">
            Physician-led wellness
          </span>
        </motion.div>

        {/* =======================================================
            MAIN CTA
        ======================================================= */}

        <div className="py-24 md:py-32 lg:py-36">
          <motion.p
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.8,
              ease: easeLuxury,
            }}
            className="flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-[#C9A646] md:text-[9px]"
          >
            <span className="h-px w-8 bg-[#C9A646]/60" />

            Begin with a consultation
          </motion.p>

          <motion.h2
            initial={
              reducedMotion
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 30,
                    filter: "blur(8px)",
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              margin: "-10% 0px",
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 1.1,
              delay: reducedMotion ? 0 : 0.08,
              ease: easeLuxury,
            }}
            className="mt-8 max-w-6xl font-[var(--font-heading)] text-[clamp(4rem,9vw,10rem)] font-light leading-[0.78] tracking-[-0.075em]"
          >
            Your wellness,
            <br />
            <span className="text-white/38">
              considered.
            </span>
          </motion.h2>

          {/* =====================================================
              CTA SUPPORT + BUTTON
          ===================================================== */}

          <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.18,
                ease: easeLuxury,
              }}
              className="max-w-xl text-sm leading-7 text-white/40 md:text-base"
            >
              Start with a physician consultation and discover
              a more considered approach to IV wellness.
            </motion.p>

            <motion.a
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.25,
                ease: easeLuxury,
              }}
              href="/book"
              className="group relative inline-flex w-full items-center justify-between overflow-hidden border border-[#C9A646]/65 bg-[#C9A646] px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-[#060607] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#E5D39A] hover:bg-[#E5D39A] sm:w-auto sm:min-w-[280px]"
            >
              {/* Hover sweep */}
              <span className="absolute inset-y-0 left-0 w-0 bg-white/20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />

              <span className="relative z-10">
                Book a Physician Consultation
              </span>

              <span className="relative z-10 text-base transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          </div>

          {/* =====================================================
              SCAN LINE
          ===================================================== */}

          <div className="relative mt-16 h-px w-full overflow-hidden bg-white/[0.06]">
            <motion.span
              animate={
                reducedMotion
                  ? undefined
                  : {
                      x: ["-10%", "110%"],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-px w-[18%] bg-gradient-to-r from-transparent via-[#C9A646] to-transparent opacity-60"
            />
          </div>
        </div>

        {/* =======================================================
            BOTTOM RAIL
        ======================================================= */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 10 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.7,
            ease: easeLuxury,
          }}
          className="flex items-end justify-between border-t border-white/[0.09] pt-5"
        >
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
            Nourish. Recharge. Restore.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-[4px] w-[4px] rounded-full bg-[#C9A646]/70 shadow-[0_0_8px_rgba(201,166,70,0.45)]" />

            <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              India
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}