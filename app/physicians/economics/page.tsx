"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const IV_RATE = 7800;
const NADX_RATE = 12000;
const DAYS_PER_MONTH = 30;

const currency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("₹", "₹");

const partnershipModels = [
  {
    number: "01",
    title: "Consult & Dispense",
    eyebrow: "LOWEST COMMITMENT",
    body: "You assess and supervise while DRIPLABS supplies pre-formulated kits. Designed for a fast, low-friction launch.",
  },
  {
    number: "02",
    title: "Clinic-in-Clinic",
    eyebrow: "DEDICATED WELLNESS BAY",
    body: "Create a dedicated DRIPLABS wellness bay within your existing practice, with co-branded clinical support.",
  },
  {
    number: "03",
    title: "Equity / Retainer",
    eyebrow: "HIGH-VOLUME CLINICS",
    body: "For flagship or high-volume practices, with structured retainer or minority-equity arrangements.",
  },
  {
    number: "04",
    title: "MSO / Franchise-Style",
    eyebrow: "MULTI-LOCATION",
    body: "A management-services structure for clinic groups seeking a standardised wellness vertical across locations.",
  },
];

const onboarding = [
  {
    number: "01",
    title: "Clinical Review Call",
    body: "Physician dossier and compliance walkthrough.",
  },
  {
    number: "02",
    title: "Protocol & Model Selection",
    body: "Choose your protocol range and partnership structure.",
  },
  {
    number: "03",
    title: "Training & Setup",
    body: "Staff training and first kit shipment with batch documentation.",
  },
  {
    number: "04",
    title: "Go-Live & Support",
    body: "Launch collateral and dedicated medical-affairs contact.",
  },
];

export default function Page() {
  const [ivPerDay, setIvPerDay] = useState(2);
  const [nadxPerMonth, setNadxPerMonth] = useState(4);

  const economics = useMemo(() => {
    const ivSessions = ivPerDay * DAYS_PER_MONTH;
    const ivRevenue = ivSessions * IV_RATE;
    const nadxRevenue = nadxPerMonth * NADX_RATE;
    const total = ivRevenue + nadxRevenue;

    return {
      ivSessions,
      ivRevenue,
      nadxRevenue,
      total,
    };
  }, [ivPerDay, nadxPerMonth]);

  return (
    <main className="min-h-screen bg-[#F7F4EC] text-[#0B1B33]">
      <section className="relative overflow-hidden border-b border-[#0B1B33]/10">
        <div className="mx-auto grid min-h-[82vh] max-w-[1680px] items-end px-5 pb-16 pt-28 md:px-10 md:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:pb-24 lg:pt-36">
          <div>
            <p className="text-[9px] uppercase tracking-[0.30em] text-[#B8901F]">
              DRIPLABS · PHYSICIAN ECONOMICS
            </p>

            <h1 className="mt-7 max-w-[1100px] font-[var(--font-heading)] text-[clamp(4rem,10vw,10rem)] font-light leading-[0.82] tracking-[-0.065em]">
              A new
              <br />
              revenue line.
            </h1>

            <div className="mt-10 max-w-xl border-l border-[#C9A227] pl-5 text-[13px] leading-7 text-[#5A6B82] md:pl-6">
              A structured physician-led wellness vertical designed to sit
              alongside an existing clinic, aesthetic practice, executive-health
              service, or longevity offering.
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:pl-16">
            <div className="border-t border-[#0B1B33]/20 pt-6">
              <p className="text-[9px] uppercase tracking-[0.26em] text-[#5A6B82]">
                REFERENCE SCENARIO
              </p>

              <p className="mt-5 font-[var(--font-heading)] text-[clamp(3.5rem,6vw,6.5rem)] font-light leading-none tracking-[-0.055em]">
                ₹5,16,000
              </p>

              <p className="mt-4 text-[12px] uppercase tracking-[0.20em] text-[#5A6B82]">
                Illustrative monthly revenue
              </p>

              <div className="mt-8 grid grid-cols-2 border-y border-[#0B1B33]/10">
                <div className="py-5 pr-5">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#B8901F]">
                    IV PROTOCOLS
                  </p>
                  <p className="mt-2 text-2xl font-light">₹4,68,000</p>
                </div>

                <div className="border-l border-[#0B1B33]/10 py-5 pl-5">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#B8901F]">
                    NADx
                  </p>
                  <p className="mt-2 text-2xl font-light">₹48,000</p>
                </div>
              </div>

              <p className="mt-5 text-[11px] leading-6 text-[#5A6B82]">
                Reference case only. Revenue is illustrative and is not a
                projection, guarantee, or statement of profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#0B1B33]/10 bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                BUILD YOUR MODEL
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.86] tracking-[-0.06em]">
                Model the
                <br />
                cadence.
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-white/60">
                Adjust the operating cadence below using the DRIPLABS reference
                economics. The result is an illustrative revenue model, not a
                profitability forecast.
              </p>
            </div>

            <div className="border border-white/15">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-9">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.24em] text-[#E3CE8E]">
                        IV SESSIONS
                      </p>
                      <p className="mt-3 font-[var(--font-heading)] text-5xl font-light">
                        {ivPerDay}
                      </p>
                    </div>

                    <span className="pb-1 text-[11px] text-white/45">
                      / day
                    </span>
                  </div>

                  <input
                    aria-label="IV sessions per day"
                    type="range"
                    min="1"
                    max="8"
                    step="1"
                    value={ivPerDay}
                    onChange={(event) => setIvPerDay(Number(event.target.value))}
                    className="mt-8 w-full accent-[#C9A227]"
                  />

                  <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.18em] text-white/35">
                    <span>1</span>
                    <span>8</span>
                  </div>
                </div>

                <div className="border-b border-white/10 p-7 md:border-b-0 md:p-9">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.24em] text-[#E3CE8E]">
                        NADx SESSIONS
                      </p>
                      <p className="mt-3 font-[var(--font-heading)] text-5xl font-light">
                        {nadxPerMonth}
                      </p>
                    </div>

                    <span className="pb-1 text-[11px] text-white/45">
                      / month
                    </span>
                  </div>

                  <input
                    aria-label="NADx sessions per month"
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={nadxPerMonth}
                    onChange={(event) =>
                      setNadxPerMonth(Number(event.target.value))
                    }
                    className="mt-8 w-full accent-[#C9A227]"
                  />

                  <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.18em] text-white/35">
                    <span>0</span>
                    <span>20</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 p-7 md:p-9">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.26em] text-white/40">
                      ILLUSTRATIVE MONTHLY REVENUE
                    </p>

                    <p className="mt-4 font-[var(--font-heading)] text-[clamp(3.5rem,6vw,6.5rem)] font-light leading-none tracking-[-0.055em]">
                      {currency(economics.total)}
                    </p>

                    <p className="mt-4 max-w-xl text-[11px] leading-6 text-white/45">
                      Calculated from a 30-day month using the reference value
                      of ₹7,800 per IV protocol session and approximately
                      ₹12,000 per NADx session.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-right md:min-w-[260px]">
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                        IV
                      </p>
                      <p className="mt-2 text-lg font-light">
                        {currency(economics.ivRevenue)}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                        NADx
                      </p>
                      <p className="mt-2 text-lg font-light">
                        {currency(economics.nadxRevenue)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-7 max-w-4xl text-[10px] uppercase leading-5 tracking-[0.16em] text-white/30">
            Final patient pricing, protocol selection, dosage, administration,
            scheduling, staffing and clinical decisions remain clinic- and
            physician-specific.
          </p>
        </div>
      </section>

      <section className="border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                PARTNERSHIP ARCHITECTURE
              </p>

              <h2 className="mt-6 max-w-lg font-[var(--font-heading)] text-[clamp(3rem,5.7vw,6rem)] font-light leading-[0.87] tracking-[-0.06em]">
                Four ways
                <br />
                to practise.
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-[#5A6B82]">
                DRIPLABS supports different operating structures, from a
                physician-led addition to an existing practice through
                multi-location management models.
              </p>
            </div>

            <div className="border-t border-[#0B1B33]/15">
              {partnershipModels.map((model) => (
                <div
                  key={model.number}
                  className="grid gap-5 border-b border-[#0B1B33]/10 py-7 md:grid-cols-[80px_1fr_1.2fr] md:items-start"
                >
                  <span className="text-[10px] tracking-[0.2em] text-[#B8901F]">
                    {model.number}
                  </span>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.22em] text-[#5A6B82]">
                      {model.eyebrow}
                    </p>

                    <h3 className="mt-2 font-[var(--font-heading)] text-3xl font-light">
                      {model.title}
                    </h3>
                  </div>

                  <p className="max-w-xl text-[12px] leading-6 text-[#5A6B82]">
                    {model.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EDF0F5]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                FROM FIRST CALL TO FIRST PATIENT
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,5.7vw,6rem)] font-light leading-[0.87] tracking-[-0.06em]">
                Four steps
                <br />
                to launch.
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-[#5A6B82]">
                The physician playbook describes the onboarding sequence as
                approximately 10–14 days from review through go-live.
              </p>
            </div>

            <div className="grid border-t border-[#0B1B33]/15 md:grid-cols-2">
              {onboarding.map((step) => (
                <div
                  key={step.number}
                  className="border-b border-[#0B1B33]/10 py-8 md:px-7 md:[&:nth-child(odd)]:border-r md:[&:nth-child(3)]:border-b-0 md:[&:nth-child(4)]:border-b-0"
                >
                  <span className="text-[10px] tracking-[0.2em] text-[#B8901F]">
                    {step.number}
                  </span>

                  <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-[12px] leading-6 text-[#5A6B82]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0B1B33]/10 bg-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                NEXT STEP
              </p>

              <h2 className="mt-6 max-w-4xl font-[var(--font-heading)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
                Bring the
                <br />
                system into practice.
              </h2>

              <p className="mt-7 max-w-xl text-[13px] leading-7 text-[#5A6B82]">
                Review the physician dossier, then move into the partnership
                structure that matches your practice model.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/physicians/dossier"
                className="inline-flex min-h-12 items-center justify-center border border-[#0B1B33] px-7 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-[#0B1B33] hover:text-[#F7F4EC]"
              >
                View Physician Dossier
              </Link>

              <Link
                href="/physicians/partnership"
                className="inline-flex min-h-12 items-center justify-center bg-[#0B1B33] px-7 text-[10px] uppercase tracking-[0.22em] text-[#F7F4EC] transition-colors duration-300 hover:bg-[#C9A227] hover:text-[#0B1B33]"
              >
                Explore Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#0B1B33]/10 bg-[#060F1F] text-[#F7F4EC]">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <p className="text-[9px] uppercase tracking-[0.24em] text-white/40">
            DRIPLABS® — A WELLNESS-PROTOCOL BRAND OF SNNYLO WELLNESS SCIENCES
          </p>

          <p className="text-[9px] uppercase tracking-[0.20em] text-white/30">
            PHYSICIAN-SUPERVISED WELLNESS · MANUFACTURED IN INDIA
          </p>
        </div>
      </footer>
    </main>
  );
}
