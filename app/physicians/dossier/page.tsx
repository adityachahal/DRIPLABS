"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const partnershipModels = [
  {
    number: "01",
    title: "Consult & Dispense",
    description:
      "You assess and supervise while DRIPLABS supplies pre-formulated kits.",
    detail: "Lowest commitment · Fastest to start",
  },
  {
    number: "02",
    title: "Clinic-in-Clinic",
    description:
      "A dedicated DRIPLABS wellness bay within your existing practice, with trained support.",
    detail: "Dedicated branded environment",
  },
  {
    number: "03",
    title: "Equity / Retainer",
    description:
      "A structured arrangement designed for higher-volume or flagship clinical environments.",
    detail: "For established high-volume practices",
  },
  {
    number: "04",
    title: "MSO / Franchise-Style",
    description:
      "A management-services structure for multi-location clinic groups seeking a standardised vertical.",
    detail: "For multi-location organisations",
  },
];

const onboarding = [
  {
    number: "01",
    title: "Clinical Review Call",
    description:
      "Review the physician dossier and walk through the clinical and compliance framework.",
  },
  {
    number: "02",
    title: "Protocol & Model Selection",
    description:
      "Choose the relevant protocol range and partnership structure for the practice.",
  },
  {
    number: "03",
    title: "Training & Setup",
    description:
      "Move through staff training, setup and the first kit shipment with batch documentation.",
  },
  {
    number: "04",
    title: "Go-Live & Support",
    description:
      "Launch with collateral and a dedicated medical-affairs contact.",
  },
];

const economicsNotes = [
  "19 commercial protocols across 8 wellness families",
  "Illustrative patient pricing varies by protocol and clinic",
  "Final patient pricing is set by the individual clinic",
  "NADx is treated as a separate premium pathway",
  "Territory and partnership terms are confirmed during commercial discussions",
];

export default function PhysiciansEconomicsPage() {
  const [ivSessions, setIvSessions] = useState(2);
  const [nadSessions, setNadSessions] = useState(4);

  const monthlyRevenue = useMemo(() => {
    const illustrativeIvPerSession = 7800;
    const illustrativeNadPerSession = 12000;

    return (
      ivSessions * 30 * illustrativeIvPerSession +
      nadSessions * illustrativeNadPerSession
    );
  }, [ivSessions, nadSessions]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--dl-bone)] text-[var(--dl-ink)]">
      {/* HERO */}
      <section className="relative bg-[var(--dl-navy-deep)] text-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 pb-24 pt-32 sm:px-8 md:px-10 md:pb-32 md:pt-40 lg:px-14 lg:pb-40 lg:pt-48">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--dl-gold)]" />

                <p className="driplabs-label text-[var(--dl-gold-soft)]">
                  DRIPLABS · Economics
                </p>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-9 max-w-7xl font-[var(--font-heading)] text-[clamp(4.2rem,9vw,9.5rem)] font-light leading-[0.76] tracking-[-0.075em]"
              >
                Practice
                <br />
                economics.
                <br />
                <span className="text-[var(--dl-gold-soft)]">
                  Built around a system.
                </span>
              </motion.h1>

              <p className="mt-9 max-w-2xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                A physician-focused commercial model for integrating a
                documented wellness vertical into an existing practice.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/physicians/dossier"
                  className="inline-flex items-center border border-white/20 px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-white transition-all duration-500 hover:border-[var(--dl-gold)]"
                >
                  Physician dossier
                </Link>

                <Link
                  href="/physicians/partnership"
                  className="group inline-flex items-center bg-[var(--dl-gold)] px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-[var(--dl-navy-deep)] transition-all duration-500 hover:bg-[var(--dl-gold-soft)]"
                >
                  Partnership
                  <span className="ml-7 transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="border-t border-white/10 pt-6">
                <p className="text-[8px] uppercase tracking-[0.24em] text-white/30">
                  The proposition
                </p>

                <p className="mt-4 font-[var(--font-heading)] text-[clamp(2rem,3.4vw,3.8rem)] font-light leading-[0.9] tracking-[-0.045em] text-white/80">
                  Add a
                  <br />
                  wellness
                  <br />
                  <span className="text-white/35">
                    vertical.
                  </span>
                </p>

                <p className="mt-6 max-w-sm text-xs leading-6 text-white/40">
                  The model is designed around documented protocols, physician
                  oversight, operational support and repeat-program structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="driplabs-label text-[var(--dl-slate)]">
                Interactive practice model
              </p>

              <h2 className="mt-7 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,7rem)] font-light leading-[0.8] tracking-[-0.07em] text-[var(--dl-navy)]">
                Explore the
                <br />
                <span className="text-[var(--dl-gold-dark)]">
                  monthly model.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-[var(--dl-slate)]">
                Adjust the illustrative session volume to see how the reference
                revenue model changes.
              </p>

              <div className="mt-8 border-l-2 border-[var(--dl-gold)] pl-5">
                <p className="text-[8px] uppercase tracking-[0.2em] text-[var(--dl-slate)]">
                  Reference scenario
                </p>

                <p className="mt-2 font-[var(--font-heading)] text-2xl font-light text-[var(--dl-navy)]">
                  2 IV sessions / day + 4 NADx sessions / month
                </p>

                <p className="mt-2 text-xs leading-6 text-[var(--dl-slate)]">
                  The source deck's example produces ₹5,16,000 in estimated
                  monthly revenue.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-[var(--dl-navy)]/10 bg-white/35 p-7 md:p-10">
                <div className="flex items-end justify-between border-b border-[var(--dl-navy)]/10 pb-7">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[var(--dl-slate)]">
                      Illustrative monthly revenue
                    </p>

                    <motion.p
                      key={monthlyRevenue}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mt-3 font-[var(--font-heading)] text-[clamp(3rem,6vw,6rem)] font-light leading-none tracking-[-0.06em] text-[var(--dl-navy)]"
                    >
                      {formatCurrency(monthlyRevenue)}
                    </motion.p>
                  </div>

                  <span className="text-[7px] uppercase tracking-[0.18em] text-[var(--dl-gold-dark)]">
                    Indicative
                  </span>
                </div>

                <div className="mt-9 space-y-10">
                  <VolumeSlider
                    label="IV sessions per day"
                    value={ivSessions}
                    min={0}
                    max={8}
                    onChange={setIvSessions}
                    suffix=" sessions / day"
                  />

                  <VolumeSlider
                    label="NADx sessions per month"
                    value={nadSessions}
                    min={0}
                    max={20}
                    onChange={setNadSessions}
                    suffix=" sessions / month"
                  />
                </div>

                <div className="mt-10 grid border-t border-[var(--dl-navy)]/10 pt-7 sm:grid-cols-2">
                  <div>
                    <p className="text-[7px] uppercase tracking-[0.2em] text-[var(--dl-slate)]">
                      IV reference
                    </p>

                    <p className="mt-2 text-xl font-light text-[var(--dl-navy)]">
                      {formatCurrency(ivSessions * 30 * 7800)}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-0 sm:border-l sm:border-[var(--dl-navy)]/10 sm:pl-7">
                    <p className="text-[7px] uppercase tracking-[0.2em] text-[var(--dl-slate)]">
                      NADx reference
                    </p>

                    <p className="mt-2 text-xl font-light text-[var(--dl-navy)]">
                      {formatCurrency(nadSessions * 12000)}
                    </p>
                  </div>
                </div>

                <p className="mt-7 text-[9px] leading-5 text-[var(--dl-slate)]">
                  Indicative model based on the DRIPLABS reference scenario,
                  not a forecast, guarantee or statement of profit. Actual
                  clinic economics depend on patient pricing, geography,
                  staffing, overheads and operating model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CREATES VALUE */}
      <section className="bg-[var(--dl-mist)]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="driplabs-label text-[var(--dl-slate)]">
                The economic structure
              </p>

              <h2 className="mt-7 max-w-4xl font-[var(--font-heading)] text-[clamp(3.2rem,6vw,6.5rem)] font-light leading-[0.8] tracking-[-0.065em] text-[var(--dl-navy)]">
                Value comes
                <br />
                from the
                <br />
                <span className="text-[var(--dl-gold-dark)]">
                  whole system.
                </span>
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-[var(--dl-navy)]/10">
                {economicsNotes.map((item, index) => (
                  <div
                    key={item}
                    className="grid gap-5 border-b border-[var(--dl-navy)]/10 py-6 md:grid-cols-[60px_1fr] md:py-7"
                  >
                    <span className="font-[var(--font-heading)] text-3xl font-light text-[var(--dl-gold-dark)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="font-[var(--font-heading)] text-2xl font-light leading-none tracking-[-0.03em] text-[var(--dl-navy)] md:text-3xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section className="bg-[var(--dl-navy)] text-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="driplabs-label text-[var(--dl-gold)]">
                Four partnership models
              </p>

              <h2 className="mt-7 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.8] tracking-[-0.07em]">
                Choose the
                <br />
                <span className="text-[var(--dl-gold-soft)]">
                  structure.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-6 text-white/40">
              Different practice environments call for different partnership
              structures.
            </p>
          </div>

          <div className="mt-12 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {partnershipModels.map((model) => (
              <div
                key={model.number}
                className="group border-b border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.025] lg:border-r"
              >
                <span className="font-[var(--font-heading)] text-3xl font-light text-[var(--dl-gold-soft)]">
                  {model.number}
                </span>

                <h3 className="mt-8 font-[var(--font-heading)] text-[clamp(2rem,2.7vw,3rem)] font-light leading-[0.9] tracking-[-0.045em] text-white">
                  {model.title}
                </h3>

                <p className="mt-5 text-xs leading-6 text-white/40">
                  {model.description}
                </p>

                <p className="mt-7 text-[7px] uppercase tracking-[0.2em] text-white/25">
                  {model.detail}
                </p>

                <div className="mt-8 h-px w-8 bg-[var(--dl-gold)] transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="driplabs-label text-[var(--dl-slate)]">
                From first call to first patient
              </p>

              <h2 className="mt-7 max-w-5xl font-[var(--font-heading)] text-[clamp(3.4rem,7vw,7rem)] font-light leading-[0.8] tracking-[-0.07em] text-[var(--dl-navy)]">
                A clear
                <br />
                path to
                <br />
                <span className="text-[var(--dl-gold-dark)]">
                  go-live.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-[var(--dl-slate)]">
                The partnership flow is designed to move from clinical review
                through setup and launch.
              </p>

              <Link
                href="/physicians/partnership"
                className="group mt-9 inline-flex items-center border border-[var(--dl-navy)]/20 px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-[var(--dl-navy)] transition-all duration-500 hover:bg-[var(--dl-navy)] hover:text-[var(--dl-bone)]"
              >
                View partnership pathway
                <span className="ml-7 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-[var(--dl-navy)]/10">
                {onboarding.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-6 border-b border-[var(--dl-navy)]/10 py-7 md:grid-cols-[70px_0.8fr_1.5fr] md:py-9"
                  >
                    <span className="font-[var(--font-heading)] text-3xl font-light text-[var(--dl-gold-dark)]">
                      {step.number}
                    </span>

                    <h3 className="font-[var(--font-heading)] text-3xl font-light leading-none tracking-[-0.04em] text-[var(--dl-navy)]">
                      {step.title}
                    </h3>

                    <p className="max-w-xl text-xs leading-6 text-[var(--dl-slate)] md:text-sm md:leading-7">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--dl-navy-deep)] text-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-24 sm:px-8 md:px-10 md:py-36 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="driplabs-label text-[var(--dl-gold)]">
                Physician pathway
              </p>

              <h2 className="mt-8 max-w-6xl font-[var(--font-heading)] text-[clamp(3.8rem,7.5vw,8rem)] font-light leading-[0.8] tracking-[-0.07em]">
                Ready to understand
                <br />
                the model?
                <br />
                <span className="text-[var(--dl-gold-soft)]">
                  Start the conversation.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/40">
                Review the dossier, understand the economics, then move into
                the partnership process.
              </p>

              <Link
                href="/physicians/partnership"
                className="mt-8 inline-flex items-center bg-[var(--dl-gold)] px-7 py-4 text-[8px] uppercase tracking-[0.24em] text-[var(--dl-navy-deep)] transition-all duration-500 hover:bg-[var(--dl-gold-soft)]"
              >
                Request physician access
                <span className="ml-7">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[var(--dl-navy-deep)]">
        <div className="mx-auto max-w-[1680px] px-5 py-7 sm:px-8 md:px-10 lg:px-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              PHYSICIAN-SUPERVISED WELLNESS · MANUFACTURED IN INDIA.
            </p>

            <Link
              href="/physicians"
              className="text-[8px] uppercase tracking-[0.2em] text-white/35 transition-colors duration-300 hover:text-[var(--dl-gold-soft)]"
            >
              ← Physician pathway
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function VolumeSlider({
  label,
  value,
  min,
  max,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  suffix: string;
}) {
  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[8px] uppercase tracking-[0.21em] text-[var(--dl-slate)]">
            {label}
          </p>

          <p className="mt-2 font-[var(--font-heading)] text-3xl font-light text-[var(--dl-navy)]">
            {value}
            <span className="ml-2 text-sm text-[var(--dl-slate)]">
              {suffix}
            </span>
          </p>
        </div>

        <span className="text-[8px] uppercase tracking-[0.2em] text-[var(--dl-gold-dark)]">
          Adjustable
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-5 w-full accent-[var(--dl-gold)]"
        aria-label={label}
      />

      <div className="mt-2 flex justify-between text-[7px] uppercase tracking-[0.18em] text-[var(--dl-slate)]/60">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
