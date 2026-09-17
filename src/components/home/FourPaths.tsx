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
      {/* Ambient field */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[var(--dl-gold)]/[0.035] blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-8%] h-[26rem] w-[26rem] rounded-full bg-white/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* Header */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-12 md:pb-16">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--dl-gold)]" />

              <p className="text-[8px] uppercase tracking-[0.3em] text-[var(--dl-gold-soft)]">
                The DRIPLABS entry point
              </p>
            </div>

            <h2 className="mt-8 max-w-5xl font-[var(--font-heading)] text-[clamp(3.8rem,8vw,8rem)] font-light leading-[0.82] tracking-[-0.065em]">
              One institution.
              <br />
              <span className="text-white/45">Four ways in.</span>
            </h2>
          </div>

          <div className="flex items-end md:col-span-4 md:justify-end">
            <div className="max-w-sm">
              <p className="text-[9px] uppercase tracking-[0.24em] text-white/30">
                Start here
              </p>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Whether you are entering DRIPLABS for yourself, your practice
                or your territory, the standard remains the same.
              </p>
            </div>
          </div>
        </div>

        {/* Pathway navigation */}
        <div className="mt-10 md:mt-14">
          {paths.map((path, index) => {
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
                        opacity: isSelected ? 1 : 0.68,
                      }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative block border-b border-white/10 first:border-t focus-visible:outline-none"
                aria-current={isSelected ? "true" : undefined}
              >
                {/* Active sweep */}
                <motion.div
                  initial={false}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: isSelected ? 1 : 0,
                        }
                  }
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-[var(--dl-gold)]"
                />

                <div className="grid min-h-[150px] items-center gap-8 py-8 md:min-h-[180px] md:grid-cols-12 md:gap-6 md:py-10 lg:py-12">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span
                      className={[
                        "font-[var(--font-heading)] text-3xl font-light tracking-[-0.04em] transition-colors duration-500 md:text-4xl",
                        isSelected
                          ? "text-[var(--dl-gold)]"
                          : "text-white/25",
                      ].join(" ")}
                    >
                      {path.number}
                    </span>
                  </div>

                  {/* Main title */}
                  <div className="md:col-span-6">
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
                        "mt-4 font-[var(--font-heading)] text-[clamp(2.4rem,4.5vw,5.2rem)] font-light leading-[0.88] tracking-[-0.055em] transition-colors duration-500",
                        isSelected ? "text-white" : "text-white/60",
                      ].join(" ")}
                    >
                      {path.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <motion.div
                      initial={false}
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : {
                              opacity: isSelected ? 1 : 0.42,
                              y: isSelected ? 0 : 4,
                            }
                      }
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <p className="max-w-md text-xs leading-6 text-white/50 md:text-sm md:leading-7">
                        {path.description}
                      </p>

                      <p className="mt-4 text-[8px] uppercase tracking-[0.2em] text-white/25">
                        {path.detail}
                      </p>
                    </motion.div>
                  </div>

                  {/* Arrow / action */}
                  <div className="flex items-center justify-between md:col-span-1 md:justify-end">
                    <span className="text-[8px] uppercase tracking-[0.22em] text-white/25 md:hidden">
                      Enter
                    </span>

                    <motion.span
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : {
                              x: isSelected ? 4 : 0,
                              opacity: isSelected ? 1 : 0.35,
                            }
                      }
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-2xl font-light text-[var(--dl-gold-soft)]"
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Gold progress line */}
                <motion.div
                  initial={false}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          width: isSelected ? "100%" : "0%",
                          opacity: isSelected ? 1 : 0,
                        }
                  }
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-0 h-px bg-[var(--dl-gold)]"
                />
              </motion.a>
            );
          })}
        </div>

        {/* Footer cue */}
        <div className="mt-10 flex flex-col gap-4 text-[8px] uppercase tracking-[0.2em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
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
