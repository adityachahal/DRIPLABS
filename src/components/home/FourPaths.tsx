"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const paths = [
  {
    number: "01",
    eyebrow: "MEMBERS",
    title: "Personal wellness.",
    description:
      "Explore physician-directed protocols, personalised wellness journeys and the DRIPLABS experience.",
    detail: "For those exploring wellness for themselves.",
    href: "/protocols",
  },
  {
    number: "02",
    eyebrow: "PHYSICIANS / CLINICS",
    title: "Clinical partnership.",
    description:
      "Access the physician dossier, clinical framework, economics and partnership model built around the DRIPLABS standard.",
    detail: "For physicians, clinics and healthcare partners.",
    href: "/physicians",
  },
  {
    number: "03",
    eyebrow: "DISTRIBUTORS / STOCKISTS",
    title: "Build the territory.",
    description:
      "Explore the portfolio, territory opportunities, stockist information and the commercial infrastructure behind DRIPLABS.",
    detail: "For distribution and commercial partners.",
    href: "/distributors",
  },
  {
    number: "04",
    eyebrow: "THE CIRCLE",
    title: "Stay within the world.",
    description:
      "A closer relationship with DRIPLABS through member access, ongoing education and a more considered wellness routine.",
    detail: "For existing members and the wider DRIPLABS community.",
    href: "/circle",
  },
];

export default function FourPaths() {
  const [selected, setSelected] = useState("01");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("driplabs-path");

      if (stored && paths.some((path) => path.number === stored)) {
        setSelected(stored);
      }
    } catch {}
  }, []);

  function choosePath(path: string) {
    setSelected(path);

    try {
      localStorage.setItem("driplabs-path", path);
    } catch {}
  }

  return (
    <section
      id="paths"
      className="relative overflow-hidden bg-[var(--dl-navy)] text-[var(--dl-bone)]"
    >
      {/* Ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-[var(--dl-gold)]/[0.035] blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:px-10 md:py-24 lg:px-14 lg:py-28">
        {/* Section heading */}
        <div className="grid items-end gap-8 border-b border-white/10 pb-8 md:grid-cols-12 md:gap-10 md:pb-10">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--dl-gold)]" />

              <p className="text-[8px] uppercase tracking-[0.3em] text-[var(--dl-gold-soft)]">
                The DRIPLABS entry point
              </p>
            </div>

            <h2 className="mt-6 max-w-4xl font-[var(--font-heading)] text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.86] tracking-[-0.06em]">
              Choose how you
              <br />
              <span className="text-white/45">experience DRIPLABS.</span>
            </h2>
          </div>

          <div className="md:col-span-4 md:pb-1">
            <p className="max-w-sm text-[11px] leading-6 text-white/45 md:ml-auto">
              Whether you are entering DRIPLABS for yourself, your practice or
              your territory, the standard remains the same.
            </p>
          </div>
        </div>

        {/* Pathways */}
        <div className="mt-8 md:mt-10">
          {paths.map((path) => {
            const isSelected = selected === path.number;

            return (
              <motion.a
                key={path.number}
                href={path.href}
                onClick={() => choosePath(path.number)}
                onMouseEnter={() => setSelected(path.number)}
                onFocus={() => setSelected(path.number)}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: isSelected ? 1 : 0.58,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative block border-b border-white/10 first:border-t focus-visible:outline-none"
                aria-current={isSelected ? "true" : undefined}
              >
                {/* Active gold marker */}
                <motion.div
                  initial={false}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scaleY: isSelected ? 1 : 0,
                          opacity: isSelected ? 1 : 0,
                        }
                  }
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-y-0 left-0 w-[2px] origin-center bg-[var(--dl-gold)]"
                />

                <div className="grid min-h-[108px] items-center gap-5 py-6 md:min-h-[118px] md:grid-cols-12 md:gap-6 md:py-7 lg:min-h-[124px]">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span
                      className={[
                        "font-[var(--font-heading)] text-2xl font-light tracking-[-0.04em] transition-colors duration-500 md:text-3xl",
                        isSelected
                          ? "text-[var(--dl-gold)]"
                          : "text-white/25",
                      ].join(" ")}
                    >
                      {path.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-5">
                    <p
                      className={[
                        "text-[8px] uppercase tracking-[0.28em] transition-colors duration-500",
                        isSelected
                          ? "text-[var(--dl-gold-soft)]"
                          : "text-white/30",
                      ].join(" ")}
                    >
                      {path.eyebrow}
                    </p>

                    <h3
                      className={[
                        "mt-2 font-[var(--font-heading)] text-[clamp(2rem,3.4vw,4rem)] font-light leading-[0.9] tracking-[-0.055em] transition-colors duration-500",
                        isSelected ? "text-white" : "text-white/55",
                      ].join(" ")}
                    >
                      {path.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <motion.div
                      initial={false}
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : {
                              opacity: isSelected ? 1 : 0.32,
                              y: isSelected ? 0 : 3,
                            }
                      }
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="max-w-xl"
                    >
                      <p className="text-[11px] leading-5 text-white/50 md:text-xs md:leading-6">
                        {path.description}
                      </p>

                      <div className="mt-2 flex items-center justify-between gap-4">
                        <p className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                          {path.detail}
                        </p>

                        <motion.span
                          animate={
                            prefersReducedMotion
                              ? undefined
                              : {
                                  x: isSelected ? 5 : 0,
                                  opacity: isSelected ? 1 : 0.35,
                                }
                          }
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="shrink-0 text-xl font-light text-[var(--dl-gold-soft)]"
                        >
                          →
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Active progress line */}
                <motion.div
                  initial={false}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scaleX: isSelected ? 1 : 0,
                          opacity: isSelected ? 1 : 0,
                        }
                  }
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-[var(--dl-gold)]"
                />
              </motion.a>
            );
          })}
        </div>

        {/* Footer cue */}
        <div className="mt-7 flex flex-col gap-3 text-[7px] uppercase tracking-[0.2em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>Physician-led · considered · traceable</span>

          <span>
            Selected path:{" "}
            <span className="text-[var(--dl-gold-soft)]">
              {paths.find((path) => path.number === selected)?.eyebrow}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}