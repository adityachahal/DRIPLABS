"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  glamourIngredients,
  glamourOverview,
} from "@/data/glamour";

const ease = [0.22, 1, 0.36, 1] as const;

export default function GlamourExperience() {
  const [activeIngredient, setActiveIngredient] = useState(0);

  const ingredient = glamourIngredients[activeIngredient];

  return (
    <div className="overflow-hidden">

      {/* =========================================================
          TARGET FOCUS
      ========================================================= */}
      <section className="bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">

          <div className="grid gap-14 md:grid-cols-12 md:gap-8">

            <div className="md:col-span-3">
              <p className="driplabs-label text-[var(--dl-slate)]">
                Target focus
              </p>

              <div className="mt-7 h-px w-12 bg-[var(--dl-gold)]" />
            </div>

            <div className="md:col-span-8 md:col-start-5">

              <div className="grid border-t border-[var(--dl-navy)]/10 sm:grid-cols-2">

                {glamourOverview.targetFocus.map((focus, index) => (
                  <motion.div
                    key={focus}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.06,
                      ease,
                    }}
                    className="border-b border-[var(--dl-navy)]/10 py-7 sm:px-6 md:py-9"
                  >
                    <span className="text-[8px] tracking-[0.2em] text-[var(--dl-gold-dark)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-4 font-[var(--font-heading)] text-[clamp(1.7rem,2.7vw,2.7rem)] font-light leading-[0.95] tracking-[-0.035em] text-[var(--dl-navy)]">
                      {focus}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NUTRIENT ARCHITECTURE
      ========================================================= */}
      <section className="bg-[var(--dl-navy)] text-[var(--dl-bone)]">

        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

            <div>
              <p className="driplabs-label text-white/35">
                Nutrient architecture
              </p>

              <h2 className="mt-8 max-w-xl font-[var(--font-heading)] text-[clamp(3.4rem,6vw,6.7rem)] font-light leading-[0.8] tracking-[-0.06em]">
                What sits
                <br />
                inside
                <br />
                GLAMOUR.
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/45">
                Select an ingredient to reveal its documented evidence tier and
                role within the protocol.
              </p>

              <div className="mt-12 border-t border-white/10 pt-5">
                <p className="text-[7px] uppercase tracking-[0.2em] text-white/30">
                  Physician reference
                </p>

                <p className="mt-2 text-[9px] leading-5 text-white/40">
                  Ingredient-level architecture is provided for physician
                  education, packaging verification and regulatory reference.
                </p>
              </div>
            </div>

            <div>

              <div className="border-t border-white/10">

                {glamourIngredients.map((item, index) => {
                  const selected = activeIngredient === index;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveIngredient(index)}
                      className="block w-full border-b border-white/10 text-left"
                    >
                      <div className="flex items-start gap-6 py-6 md:py-7">

                        <span
                          className={`pt-1 text-[8px] tracking-[0.2em] transition-colors duration-500 ${
                            selected
                              ? "text-[var(--dl-gold)]"
                              : "text-white/25"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-6">
                            <span
                              className={`font-[var(--font-heading)] text-[clamp(1.35rem,2.3vw,2.2rem)] font-light leading-[1] tracking-[-0.03em] transition-colors duration-500 ${
                                selected
                                  ? "text-[var(--dl-gold-soft)]"
                                  : "text-[var(--dl-bone)]"
                              }`}
                            >
                              {item.name}
                            </span>

                            <span
                              className={`shrink-0 text-[7px] uppercase tracking-[0.17em] transition-colors duration-500 ${
                                selected
                                  ? "text-[var(--dl-gold)]"
                                  : "text-white/25"
                              }`}
                            >
                              {item.evidence}
                            </span>
                          </div>

                          <AnimatePresence initial={false}>
                            {selected && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{
                                  duration: 0.45,
                                  ease,
                                }}
                              >
                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 md:text-[15px]">
                                  {item.role}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                      </div>
                    </button>
                  );
                })}

              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--dl-gold)]" />
                <p className="text-[7px] uppercase tracking-[0.2em] text-white/30">
                  Select to decode
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FUNCTIONAL RATIONALE
      ========================================================= */}
      <section className="bg-[var(--dl-mist)]">

        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">

          <div className="grid gap-14 md:grid-cols-12 md:gap-8">

            <div className="md:col-span-3">
              <p className="driplabs-label text-[var(--dl-slate)]">
                Functional rationale
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease }}
              className="md:col-span-8 md:col-start-5"
            >
              <div className="mb-8 h-px w-16 bg-[var(--dl-gold)]" />

              <p className="font-[var(--font-heading)] text-[clamp(2.4rem,4.5vw,5rem)] font-light leading-[0.98] tracking-[-0.045em] text-[var(--dl-navy)]">
                {glamourOverview.rationale}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          EVIDENCE
      ========================================================= */}
      <section className="bg-[var(--dl-bone)]">

        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">

          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            <div>
              <p className="driplabs-label text-[var(--dl-slate)]">
                Evidence confidence
              </p>

              <div className="mt-8">
                <span className="font-[var(--font-heading)] text-[clamp(4rem,7vw,7rem)] font-light leading-none tracking-[-0.06em] text-[var(--dl-gold-dark)]">
                  Emerging
                </span>
              </div>
            </div>

            <div>

              <div className="border-t border-[var(--dl-navy)]/10 pt-7">

                <p className="text-[8px] uppercase tracking-[0.21em] text-[var(--dl-slate)]">
                  Clinical reality check
                </p>

                <p className="mt-6 max-w-4xl font-[var(--font-heading)] text-[clamp(1.8rem,3.2vw,3.5rem)] font-light leading-[1.03] tracking-[-0.04em] text-[var(--dl-navy)]">
                  {glamourOverview.evidenceReality}
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          TESTING TIMELINE
      ========================================================= */}
      <section className="border-y border-white/10 bg-[var(--dl-navy-deep)] text-[var(--dl-bone)]">

        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">

            <div className="lg:col-span-4">

              <p className="driplabs-label text-white/35">
                Testing framework
              </p>

              <h2 className="mt-8 font-[var(--font-heading)] text-[clamp(3rem,5vw,5.5rem)] font-light leading-[0.82] tracking-[-0.055em]">
                Before.
                <br />
                During.
                <br />
                After.
              </h2>

            </div>

            <div className="lg:col-span-7 lg:col-start-6">

              <TimelineRow
                number="01"
                title="Before"
                text={glamourOverview.baselineTesting.join(" · ")}
              />

              <TimelineRow
                number="02"
                title="Across the course"
                text={glamourOverview.immediateEffects}
              />

              <TimelineRow
                number="03"
                title="Retest"
                text={glamourOverview.retesting}
              />

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SESSION FRAMEWORK
      ========================================================= */}
      <section className="bg-[var(--dl-bone)]">

        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">

          <div className="grid gap-14 md:grid-cols-12 md:gap-8">

            <div className="md:col-span-3">
              <p className="driplabs-label text-[var(--dl-slate)]">
                Session framework
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">

              <div className="border-t border-[var(--dl-navy)]/10 pt-7">

                <p className="font-[var(--font-heading)] text-[clamp(2.2rem,4vw,4.5rem)] font-light leading-[0.95] tracking-[-0.045em] text-[var(--dl-navy)]">
                  {glamourOverview.sessionFramework}
                </p>

              </div>

              <div className="mt-12 grid border-t border-[var(--dl-navy)]/10 sm:grid-cols-3">

                <SessionStat value="4–6" label="Sessions" />
                <SessionStat value="1–2" label="Weeks apart" />
                <SessionStat value="4–6" label="Weeks reviewed maintenance" />

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

function TimelineRow({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease }}
      className="border-t border-white/10 py-7 md:py-9"
    >
      <div className="grid gap-5 sm:grid-cols-[70px_180px_1fr] sm:items-start">

        <span className="text-[8px] tracking-[0.2em] text-[var(--dl-gold)]">
          {number}
        </span>

        <p className="font-[var(--font-heading)] text-2xl font-light tracking-[-0.03em]">
          {title}
        </p>

        <p className="text-sm leading-7 text-white/45">
          {text}
        </p>

      </div>
    </motion.div>
  );
}

function SessionStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-t border-[var(--dl-navy)]/10 py-7 sm:border-t-0 sm:border-l sm:px-6">
      <div className="font-[var(--font-heading)] text-4xl font-light leading-none tracking-[-0.05em] text-[var(--dl-gold-dark)]">
        {value}
      </div>

      <p className="mt-2 text-[7px] uppercase tracking-[0.18em] text-[var(--dl-slate)]">
        {label}
      </p>
    </div>
  );
}
