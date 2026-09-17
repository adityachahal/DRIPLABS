"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const systemPillars = [
  {
    number: "01",
    title: "Documented protocols",
    description:
      "A structured commercial system built around protocol documentation, ingredient architecture and physician-facing technical material.",
  },
  {
    number: "02",
    title: "Traceable inputs",
    description:
      "Branded inputs are supported by batch identification, expiry information and Certificates of Analysis within the DRIPLABS documentation framework.",
  },
  {
    number: "03",
    title: "Clinical support",
    description:
      "Physician resources include protocol documentation, training support, patient-facing material and medical-affairs processes.",
  },
  {
    number: "04",
    title: "A complete vertical",
    description:
      "DRIPLABS is designed to be integrated into a practice as a documented wellness vertical rather than treated as an unstructured drip menu.",
  },
];

const practiceBenefits = [
  "Protocol and ingredient documentation",
  "Physician technical dossier",
  "Patient-facing guidance",
  "Protocol-selection framework",
  "Training and setup support",
  "Medical-affairs and reporting infrastructure",
  "Follow-up and repeat-consumption framework",
  "Launch and marketing support",
];

const journey = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review the DRIPLABS system, protocol architecture and documentation available to your practice.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Discuss your specialty, patient segment, operational requirements and the wellness families relevant to your practice.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Move through partnership, training, setup and the operational framework required to introduce the system.",
  },
  {
    number: "04",
    title: "Go live",
    description:
      "Launch with physician oversight, supported documentation and an established framework for follow-up and ongoing support.",
  },
];

export default function PhysiciansPage() {
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
                  Physicians / Clinics
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
                Practise wellness
                <br />
                medicine with
                <br />
                <span className="text-[var(--dl-gold-soft)]">
                  pharmaceutical rigour.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-9 max-w-2xl text-sm leading-7 text-white/50 md:text-base md:leading-8"
              >
                A documented physician-supervised IV wellness system designed
                to integrate into clinical practice with protocol structure,
                technical documentation and operational support.
              </motion.p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/physicians/dossier"
                  className="group inline-flex items-center bg-[var(--dl-gold)] px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-[var(--dl-navy-deep)] transition-all duration-500 hover:bg-[var(--dl-gold-soft)]"
                >
                  Explore the physician dossier
                  <span className="ml-7 transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/physicians/partnership"
                  className="inline-flex items-center border border-white/20 px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-white transition-all duration-500 hover:border-[var(--dl-gold)]"
                >
                  Partnership pathway
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="border-t border-white/10 pt-6">
                <p className="text-[8px] uppercase tracking-[0.23em] text-white/30">
                  The proposition
                </p>

                <p className="mt-4 font-[var(--font-heading)] text-[clamp(2.1rem,3.5vw,3.8rem)] font-light leading-[0.92] tracking-[-0.045em] text-white/80">
                  Not just
                  <br />
                  <span className="text-white/35">
                    another IV product line.
                  </span>
                </p>

                <p className="mt-6 max-w-sm text-xs leading-6 text-white/40">
                  The DRIPLABS model is built as a documented clinical-wellness
                  vertical that can sit inside an existing practice.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid border-t border-white/10 sm:grid-cols-3">
            <Metric value="19" label="Commercial protocols" />
            <Metric value="08" label="Wellness families" />
            <Metric value="01" label="Documented system" />
          </div>
        </div>
      </section>

      {/* WHY DRIPLABS */}
      <section className="bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="driplabs-label text-[var(--dl-slate)]">
                Why DRIPLABS
              </p>

              <div className="mt-7 h-px w-12 bg-[var(--dl-gold)]" />
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="max-w-6xl font-[var(--font-heading)] text-[clamp(2.8rem,5vw,5.7rem)] font-light leading-[0.9] tracking-[-0.06em] text-[var(--dl-navy)]">
                Most systems give you
                <br />
                products.
                <br />
                <span className="text-[var(--dl-gold-dark)]">
                  DRIPLABS builds the framework around them.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--dl-slate)]">
                The physician proposition combines a structured protocol
                library with documentation, training, support and an
                operational pathway for introducing wellness services into
                practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="bg-[var(--dl-mist)]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="flex flex-col gap-8 border-b border-[var(--dl-navy)]/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="driplabs-label text-[var(--dl-slate)]">
                The clinical-wellness system
              </p>

              <h2 className="mt-7 max-w-5xl font-[var(--font-heading)] text-[clamp(3.4rem,7vw,7.5rem)] font-light leading-[0.8] tracking-[-0.065em] text-[var(--dl-navy)]">
                Built to be
                <br />
                <span className="text-[var(--dl-gold-dark)]">
                  documented.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-6 text-[var(--dl-slate)]">
              A physician-focused structure that brings protocol information,
              traceability and operational support into one system.
            </p>
          </div>

          <div className="mt-12 grid border-t border-[var(--dl-navy)]/10 md:grid-cols-2 lg:grid-cols-4">
            {systemPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group border-b border-[var(--dl-navy)]/10 p-7 transition-colors duration-500 hover:bg-white/45 lg:border-r"
              >
                <span className="font-[var(--font-heading)] text-3xl font-light text-[var(--dl-gold-dark)]">
                  {pillar.number}
                </span>

                <h3 className="mt-8 font-[var(--font-heading)] text-[clamp(1.9rem,2.5vw,2.8rem)] font-light leading-[0.9] tracking-[-0.045em] text-[var(--dl-navy)]">
                  {pillar.title}
                </h3>

                <p className="mt-5 text-xs leading-6 text-[var(--dl-slate)]">
                  {pillar.description}
                </p>

                <div className="mt-8 h-px w-8 bg-[var(--dl-gold)] transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE RECEIVES */}
      <section className="bg-[var(--dl-navy)] text-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="driplabs-label text-[var(--dl-gold)]">
                Inside the partnership
              </p>

              <h2 className="mt-8 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,7rem)] font-light leading-[0.8] tracking-[-0.07em]">
                Everything
                <br />
                around the
                <br />
                <span className="text-[var(--dl-gold-soft)]">
                  protocol.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/40">
                The proposition extends beyond the IV itself into the
                documentation, education and infrastructure required to operate
                the wellness vertical.
              </p>

              <Link
                href="/physicians/dossier"
                className="group mt-9 inline-flex items-center border border-[var(--dl-gold)]/45 px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-white transition-all duration-500 hover:bg-[var(--dl-gold)] hover:text-[var(--dl-navy-deep)]"
              >
                Open physician dossier
                <span className="ml-7 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-white/10">
                {practiceBenefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-6 border-b border-white/10 py-6 md:py-7"
                  >
                    <span className="w-8 shrink-0 text-[8px] tracking-[0.2em] text-[var(--dl-gold-soft)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-[var(--font-heading)] text-xl font-light leading-none tracking-[-0.025em] text-white/80 md:text-2xl">
                      {benefit}
                    </span>

                    <span className="ml-auto text-white/20">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="driplabs-label text-[var(--dl-slate)]">
                Partnership pathway
              </p>

              <h2 className="mt-7 max-w-4xl font-[var(--font-heading)] text-[clamp(3.5rem,6vw,6.8rem)] font-light leading-[0.8] tracking-[-0.065em] text-[var(--dl-navy)]">
                From
                <br />
                conversation
                <br />
                <span className="text-[var(--dl-gold-dark)]">
                  to practice.
                </span>
              </h2>

              <Link
                href="/physicians/partnership"
                className="group mt-9 inline-flex items-center border border-[var(--dl-navy)]/20 px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-[var(--dl-navy)] transition-all duration-500 hover:bg-[var(--dl-navy)] hover:text-[var(--dl-bone)]"
              >
                View partnership details
                <span className="ml-7 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-[var(--dl-navy)]/10">
                {journey.map((step) => (
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

      {/* ECONOMICS */}
      <section className="bg-[var(--dl-mist)]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="driplabs-label text-[var(--dl-slate)]">
                Practice economics
              </p>

              <h2 className="mt-7 max-w-6xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.8] tracking-[-0.07em] text-[var(--dl-navy)]">
                Build a wellness
                <br />
                <span className="text-[var(--dl-gold-dark)]">
                  revenue vertical.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--dl-slate)]">
                Explore the commercial model, practice economics and the
                infrastructure around introducing DRIPLABS into a clinical
                setting.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="/physicians/economics"
                className="group inline-flex items-center bg-[var(--dl-navy)] px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-[var(--dl-bone)] transition-all duration-500 hover:bg-[var(--dl-gold)] hover:text-[var(--dl-navy-deep)]"
              >
                Explore economics
                <span className="ml-7 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
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
                Physician access
              </p>

              <h2 className="mt-8 max-w-6xl font-[var(--font-heading)] text-[clamp(3.8rem,7.5vw,8rem)] font-light leading-[0.8] tracking-[-0.07em]">
                Build the
                <br />
                <span className="text-[var(--dl-gold-soft)]">
                  next vertical.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/40">
                Start with the physician dossier, review the partnership model,
                then begin a conversation about your practice.
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
              href="/"
              className="text-[8px] uppercase tracking-[0.2em] text-white/35 transition-colors duration-300 hover:text-[var(--dl-gold-soft)]"
            >
              DRIPLABS®
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-r border-white/10 px-5 py-7 last:border-r-0 md:px-7">
      <div className="font-[var(--font-heading)] text-4xl font-light leading-none tracking-[-0.05em] text-[var(--dl-gold-soft)]">
        {value}
      </div>

      <p className="mt-2 text-[7px] uppercase tracking-[0.21em] text-white/35">
        {label}
      </p>
    </div>
  );
}
