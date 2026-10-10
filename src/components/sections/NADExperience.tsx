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
          initial={reducedMotion ? { scale: 1 } : { scale: 1.03 }}
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,15,31,0.30)_0%,rgba(6,15,31,0.46)_35%,rgba(6,15,31,0.78)_72%,#060F1F_100%)]" />

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
          className="absolute right-[-12%] top-[2%] h-[70vw] max-h-[820px] w-[70vw] max-w-[820px] opacity-[0.10] md:right-[-5%]"
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

      <div className="relative z-10 mx-auto max-w-[1680px] px-5 pb-6 pt-16 sm:px-8 md:px-10 md:pb-8 md:pt-8 lg:px-14">

        {/* ====================================================
            TOP LABEL
        ==================================================== */}

        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 14 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-7 bg-[#C9A227]" />

          <span className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E] md:text-[9px]">
            The Flagship · Cellular & Longevity
          </span>
        </motion.div>

        {/* ====================================================
            NADx HERO COPY
        ==================================================== */}

        <div className="mt-5 max-w-[900px]">

          <motion.h2
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-[var(--font-heading)] text-[clamp(3.4rem,6vw,6rem)] font-light leading-[0.88] tracking-[-0.065em]"
          >
            NADx—
            the cellular <br/> key to
            longivity.
          </motion.h2>

          <motion.p
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 14 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.75,
              delay: reducedMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 max-w-[640px] text-[13px] leading-[1.65] text-white/65 md:text-[14px]"
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
                : { opacity: 0, y: 14 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.7,
              delay: reducedMotion ? 0 : 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6"
          >
            <a
              href="/nadx"
              className="group inline-flex items-center gap-4 border-b border-[#C9A227]/60 pb-2.5 text-[10px] uppercase tracking-[0.24em] text-[#E3CE8E] transition-colors duration-300 hover:text-white md:text-[9px]"
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
            duration: reducedMotion ? 0.01 : 0.8,
            delay: reducedMotion ? 0 : 0.25,
          }}
          className="mt-10 flex items-center justify-between border-t border-white/15 pt-3 md:mt-12"
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

        <div className="mt-10 border-t border-white/10 md:mt-12">
          <div className="grid md:grid-cols-3">
            {evidence.map((item, index) => (
              <motion.div
                key={item.label}
                initial={
                  reducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 14 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.7,
                  delay: reducedMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-white/10 py-6 md:border-r md:px-7 md:py-7 md:last:border-r-0"
              >
                <div className="font-[var(--font-heading)] text-[clamp(2.5rem,4vw,4.4rem)] font-light leading-none tracking-[-0.055em] text-[#C9A227]">
                  {item.value}
                </div>

                <p className="mt-3 max-w-xs text-[8px] uppercase leading-5 tracking-[0.18em] text-white/45">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        
       
      </div>
    </section>
  );
}