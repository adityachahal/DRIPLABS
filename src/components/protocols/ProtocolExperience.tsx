"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import type { Treatment } from "@/data/treatments";
import type { ProtocolDetail } from "@/data/protocolDetails";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProtocolExperience({
  protocol,
  detail,
}: {
  protocol: Treatment;
  detail: ProtocolDetail;
}) {
  const [activeIngredient, setActiveIngredient] = useState(0);

  const ingredient = detail.ingredients[activeIngredient];

  return (
    <div className="overflow-hidden">

      {/* TARGET FOCUS */}
      <section className="bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <div className="grid gap-14 md:grid-cols-12 md:gap-8">

            <div className="md:col-span-3">
              <p className="driplabs-label text-[var(--dl-slate)]">
                Target focus
              </p>

              <div className="mt-7 h-px w-12 bg-[var(--dl-gold)]" />

              <p className="mt-7 max-w-xs text-[10px] uppercase tracking-[0.16em] text-[var(--dl-slate)]">
                {detail.specialty}
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <div className="grid border-t border-[var(--dl-navy)]/10 sm:grid-cols-2">
                {detail.focus.map((focus, index) => (
                  <motion.div
                    key={focus}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.06,
                      ease,
                    }}
                    className="border-b border-[var(--dl-navy)]/10 py-8 sm:px-6 md:py-10"
                  >
                    <span className="text-[8px] tracking-[0.2em] text-[var(--dl-gold-dark)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-5 font-[var(--font-heading)] text-[clamp(1.7rem,2.7vw,2.7rem)] font-light leading-[0.95] tracking-[-0.035em] text-[var(--dl-navy)]">
                      {focus}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INGREDIENT ARCHITECTURE */}
      <section className="bg-[var(--dl-navy)] text-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">

          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

            <div>
              <p className="driplabs-label text-white/35">
                Nutrient architecture
              </p>

              <h2 className="mt-8 font-[var(--font-heading)] text-[clamp(3.3rem,6vw,7rem)] font-light leading-[0.78] tracking-[-0.06em]">
                Inside
                <br />
                {protocol.name}.
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/45">
                Select an ingredient to reveal its evidence tier and documented
                role within the protocol.
              </p>

              <div className="mt-12 border-t border-white/10 pt-5">
                <p className="text-[7px] uppercase tracking-[0.2em] text-white/30">
                  DRIPLABS reference
                </p>

                <p className="mt-2 text-[9px] leading-5 text-white/40">
                  Ingredient-level information is presented for physician
                  education and protocol transparency.
                </p>
              </div>
            </div>

            <div>
              <div className="border-t border-white/10">
                {detail.ingredients.map((item, index) => {
                  const selected = index === activeIngredient;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveIngredient(index)}
                      className="w-full border-b border-white/10 text-left"
                    >
                      <div className="flex gap-6 py-6 md:py-8">

                        <span
                          className={`pt-1 text-[8px] tracking-[0.2em] transition-colors duration-500 ${
                            selected
                              ? "text-[var(--dl-gold)]"
                              : "text-white/25"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-6">
                            <span
                              className={`font-[var(--font-heading)] text-[clamp(1.3rem,2.2vw,2.15rem)] font-light leading-none tracking-[-0.03em] transition-colors duration-500 ${
                                selected
                                  ? "text-[var(--dl-gold-soft)]"
                                  : "text-[var(--dl-bone)]"
                              }`}
                            >
                              {item.name}
                            </span>

                            <span
                              className={`shrink-0 text-[7px] uppercase tracking-[0.17em] ${
                                selected
                                  ? "text-[var(--dl-gold)]"
                                  : "text-white/25"
                              }`}
                            >
                              {item.tier}
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
                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
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
                <span className="text-[7px] uppercase tracking-[0.2em] text-white/30">
                  Select to decode
                </span>
              </div>

              <div className="mt-10 border border-white/10 bg-white/[0.025] p-6 md:p-8">
                <p className="text-[7px] uppercase tracking-[0.2em] text-[var(--dl-gold)]">
                  Selected
                </p>

                <p className="mt-3 font-[var(--font-heading)] text-2xl font-light tracking-[-0.03em]">
                  {ingredient.name}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {ingredient.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RATIONALE */}
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

              <p className="font-[var(--font-heading)] text-[clamp(2.4rem,4.4vw,5rem)] font-light leading-[0.97] tracking-[-0.045em] text-[var(--dl-navy)]">
                {detail.rationale}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">

          <div className="grid gap-14 lg:grid-cols-[0.45fr_1.55fr] lg:gap-20">

            <div>
              <p className="driplabs-label text-[var(--dl-slate)]">
                Evidence confidence
              </p>

              <p className="mt-7 font-[var(--font-heading)] text-5xl font-light tracking-[-0.05em] text-[var(--dl-gold-dark)]">
                {formatEvidence(protocol)}
              </p>
            </div>

            <div className="border-t border-[var(--dl-navy)]/10 pt-7">

              <p className="text-[8px] uppercase tracking-[0.21em] text-[var(--dl-slate)]">
                Clinical reality check
              </p>

              <p className="mt-6 max-w-5xl font-[var(--font-heading)] text-[clamp(1.8rem,3.1vw,3.4rem)] font-light leading-[1.03] tracking-[-0.04em] text-[var(--dl-navy)]">
                {detail.evidenceReality}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* TESTING / TIMELINE */}
      <section className="bg-[var(--dl-navy-deep)] text-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-6 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">

            <div className="lg:col-span-4">
              <p className="driplabs-label text-white/35">
                Testing framework
              </p>

              <h2 className="mt-8 font-[var(--font-heading)] text-[clamp(3.2rem,6vw,6.8rem)] font-light leading-[0.8] tracking-[-0.06em]">
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
                title="Baseline"
                text={detail.baseline}
              />

              <TimelineRow
                number="02"
                title="Treatment course"
                text={detail.session}
              />

              <TimelineRow
                number="03"
                title="Suggested retest"
                text={detail.retest}
              />

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
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease }}
      className="border-t border-white/10 py-8"
    >
      <div className="grid gap-5 sm:grid-cols-[70px_200px_1fr]">
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

function formatEvidence(protocol: Treatment) {
  if (protocol.evidenceTier === "established") {
    return "Established";
  }

  if (protocol.evidenceTier === "adjunctive") {
    return "Adjunctive";
  }

  return "Emerging";
}
