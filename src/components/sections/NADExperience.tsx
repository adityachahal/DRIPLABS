"use client";

import { motion, useReducedMotion } from "framer-motion";

const evidence = [
  {
    value: "45+",
    label: "Peer-reviewed NAD⁺ pathway studies",
  },
  {
    value: "93%",
    label: "Conducted independently of a single manufacturer",
  },
  {
    value: "1st",
    label: "Licensed pharma-grade NAD⁺ IV brand in India",
  },
];

export default function NADExperience() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="nad"
      className="relative isolate overflow-hidden bg-[#060F1F] text-[#F7F4EC]"
    >
      {/* ======================================================
          FULL-BLEED NADx VIDEO BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.video
          src="/videos/NADx.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          initial={reducedMotion ? { scale: 1 } : { scale: 1.04 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 2.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />

        {/* Main cinematic darkening */}
        <div className="absolute inset-0 bg-[#060F1F]/65" />

        {/* Stronger lower fade for readability */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,15,31,0.35)_0%,rgba(6,15,31,0.5)_38%,rgba(6,15,31,0.82)_78%,#060F1F_100%)]" />

        {/* Side vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_32%,transparent_0%,rgba(6,15,31,0.08)_35%,rgba(6,15,31,0.65)_100%)]" />

        {/* Subtle gold atmosphere */}
        <div className="absolute left-[50%] top-[22%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#C9A227]/[0.07] blur-[130px]" />

        {/* Fine cinematic grain */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:url('/images/noise.png')]" />
      </div>

      {/* ======================================================
          MOLECULAR ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <svg
          viewBox="0 0 900 900"
          className="absolute right-[-12%] top-[3%] h-[78vw] max-h-[900px] w-[78vw] max-w-[900px] opacity-[0.10] md:right-[-5%]"
          aria-hidden="true"
        >
          <defs>
            <filter id="nadx-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g
            fill="none"
            stroke="#C9A227"
            strokeWidth="1"
            filter="url(#nadx-glow)"
          >
            <circle cx="450" cy="450" r="155" />
            <circle cx="450" cy="450" r="265" />
            <circle cx="450" cy="450" r="370" />

            <path d="M450 80V820" />
            <path d="M80 450H820" />
            <path d="M188 188L712 712" />
            <path d="M712 188L188 712" />
          </g>

          <g fill="#E3CE8E">
            <circle cx="450" cy="80" r="3" />
            <circle cx="820" cy="450" r="3" />
            <circle cx="450" cy="820" r="3" />
            <circle cx="80" cy="450" r="3" />
            <circle cx="188" cy="188" r="2.5" />
            <circle cx="712" cy="188" r="2.5" />
            <circle cx="188" cy="712" r="2.5" />
            <circle cx="712" cy="712" r="2.5" />
          </g>
        </svg>
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1680px] px-5 py-28 md:px-10 md:py-40 lg:px-14">
        {/* ====================================================
            TOP LABEL
        ==================================================== */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 18 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#C9A227]" />

          <span className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E] md:text-[9px]">
            The Flagship · Cellular & Longevity
          </span>
        </motion.div>

        {/* ====================================================
            NADx HERO COPY
        ==================================================== */}

        <div className="mt-10 max-w-[1100px]">
          <motion.h2
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-[var(--font-heading)] text-[clamp(4rem,9.5vw,9rem)] font-light leading-[0.82] tracking-[-0.07em]"
          >
            NADx —
            <br />
            the cellular
            <br />
            flagship.
          </motion.h2>

          <motion.p
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.85,
              delay: reducedMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 max-w-2xl text-sm leading-7 text-white/65 md:text-base"
          >
            India&apos;s first physician-led, pharmacopoeia-documented
            Nicotinamide Adenine Dinucleotide (NAD⁺) IV programme —
            bringing a documented cellular-wellness experience into a
            clinically supervised setting.
          </motion.p>

          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.8,
              delay: reducedMotion ? 0 : 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9"
          >
            <a
              href="/nadx"
              className="group inline-flex items-center gap-5 border-b border-[#C9A227]/60 pb-3 text-[8px] uppercase tracking-[0.24em] text-[#E3CE8E] transition-colors duration-300 hover:text-white md:text-[9px]"
            >
              Explore NADx

              <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* ====================================================
            VIDEO STATUS / TECHNICAL MARKER
        ==================================================== */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 1,
            delay: reducedMotion ? 0 : 0.35,
          }}
          className="mt-16 flex items-center justify-between border-t border-white/15 pt-4 md:mt-24"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A227]/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C9A227]" />
            </span>

            <span className="text-[7px] uppercase tracking-[0.28em] text-white/45 md:text-[8px]">
              NADx / Cellular Flagship
            </span>
          </div>

          <span className="font-mono text-[7px] tracking-[0.2em] text-white/30 md:text-[8px]">
            DRIPLABS / 01
          </span>
        </motion.div>

        {/* ====================================================
            EVIDENCE
        ==================================================== */}

        <div className="mt-14 border-t border-white/10 md:mt-20">
          <div className="grid md:grid-cols-3">
            {evidence.map((item, index) => (
              <motion.div
                key={item.label}
                initial={
                  reducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 18 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  delay: reducedMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-white/10 py-8 md:border-r md:px-8 md:py-10 md:last:border-r-0"
              >
                <div className="font-[var(--font-heading)] text-[clamp(3.3rem,5vw,5.5rem)] font-light leading-none tracking-[-0.06em] text-[#C9A227]">
                  {item.value}
                </div>

                <p className="mt-4 max-w-xs text-[9px] uppercase leading-5 tracking-[0.18em] text-white/45">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ====================================================
            SCIENCE SPLIT
        ==================================================== */}

        <div className="mt-24 border-t border-white/10 pt-16 md:mt-36 md:pt-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                For the patient
              </p>

              <p className="mt-7 max-w-xl font-[var(--font-heading)] text-[clamp(1.8rem,3vw,3.25rem)] font-light leading-[1.02] tracking-[-0.04em] text-white/90">
                NAD⁺ is part of the chemistry your cells use for energy and
                everyday cellular processes.
              </p>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/48">
                As part of a physician-directed wellness programme, NAD⁺ is
                approached as metabolic and cellular support rather than a
                replacement for conventional therapy.
              </p>
            </motion.div>

            <motion.div
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                For the physician
              </p>

              <p className="mt-7 max-w-xl font-[var(--font-heading)] text-[clamp(1.8rem,3vw,3.25rem)] font-light leading-[1.02] tracking-[-0.04em] text-white/90">
                NAD⁺ participates in pathways involved in cellular energy and
                DNA-damage response.
              </p>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/48">
                NAD⁺ functions as a cofactor for Complex I of the electron
                transport chain and as a substrate for sirtuins and PARP
                enzymes.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ====================================================
            COMPLIANCE RAIL
        ==================================================== */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 16 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 border border-[#C9A227]/20 bg-[#0B1B33]/70 p-6 backdrop-blur-sm md:mt-20 md:p-8"
        >
          <p className="text-[8px] uppercase tracking-[0.24em] text-[#C9A227]">
            Evidence framing
          </p>

          <p className="mt-4 max-w-4xl text-xs leading-6 text-white/48 md:text-sm md:leading-7">
            NAD⁺ is not yet a universally accepted frontline pharmaceutical
            treatment. Current evidence supports its role as a
            metabolic-support and mitochondrial-optimisation platform —
            adjunct to, not a replacement for, conventional therapy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}