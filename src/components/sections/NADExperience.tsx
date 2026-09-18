"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const molecularRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const svg = molecularRef.current;
    if (!svg) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = svg.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      const rotateX = y * -7;
      const rotateY = x * 7;
      const moveX = x * 18;
      const moveY = y * 18;

      svg.style.transform =
        `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;

      svg.style.transformOrigin = "center center";
    };

    const handlePointerLeave = () => {
      svg.style.transform =
        "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    svg.addEventListener("pointermove", handlePointerMove);
    svg.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      svg.removeEventListener("pointermove", handlePointerMove);
      svg.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [reducedMotion]);

  

  return (
    <section
      id="nad"
      className="relative overflow-hidden bg-[#060F1F] text-[#F7F4EC]"
    >
      {/* ======================================================
          MOLECULAR ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[58%] top-[20%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#C9A227]/[0.05] blur-[120px]" />

        <div className="absolute right-[-5%] bottom-[5%] h-[24rem] w-[24rem] rounded-full bg-[#E3CE8E]/[0.025] blur-[110px]" />

        <svg
          ref={molecularRef}
          viewBox="0 0 900 900"
          className="pointer-events-auto absolute right-[-10%] top-[8%] h-[80vw] max-h-[900px] w-[80vw] max-w-[900px] opacity-[0.15] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:right-[-4%]"
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_63%_43%,transparent_0%,rgba(6,15,31,0.08)_45%,rgba(6,15,31,0.68)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-24 md:px-10 md:py-36 lg:px-14">
        {/* ====================================================
            TOP LABEL
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
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#C9A227]" />

          <span className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E] md:text-[9px]">
            The Flagship · Cellular & Longevity
          </span>
        </motion.div>

        {/* ====================================================
            MAIN
        ==================================================== */}

        <div className="mt-10 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.h2
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-6xl font-[var(--font-heading)] text-[clamp(3.4rem,7.6vw,8rem)] font-light leading-[0.83] tracking-[-0.065em]"
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
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 max-w-2xl text-sm leading-7 text-white/58 md:text-base"
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
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9"
            >
              <a
                href="/nadx"
                className="group inline-flex items-center gap-5 border-b border-[#C9A227]/50 pb-3 text-[8px] uppercase tracking-[0.24em] text-[#E3CE8E] md:text-[9px]"
              >
                Explore NADx

                <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* ==================================================
              EVIDENCE
          ================================================== */}

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-white/10">
              {evidence.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={
                    reducedMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.8,
                    delay: reducedMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-white/10 py-7 md:py-8"
                >
                  <div className="font-[var(--font-heading)] text-[clamp(3.3rem,5vw,5.5rem)] font-light leading-none tracking-[-0.06em] text-[#C9A227]">
                    {item.value}
                  </div>

                  <p className="mt-4 max-w-xs text-[9px] uppercase leading-5 tracking-[0.18em] text-white/42">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
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
          className="mt-16 border border-[#C9A227]/20 bg-[#0B1B33]/60 p-6 md:mt-20 md:p-8"
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



