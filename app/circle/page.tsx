"use client";

import Link from "next/link";
import { useState } from "react";

const packages = [
  {
    id: "glow",
    number: "01",
    name: "Glow Start",
    price: "₹60,000",
    sessions: "5 sessions",
    descriptor: "SKIN & BEAUTY + RECOVERY MIX",
    bestFor: "First-time members exploring the DRIPLABS system",
    includes: [
      "RADIANCE® or GLAMOUR®",
      "RESTORE®",
      "REACTIVATE®",
      "BOUNCE BACK®",
      "FIT®",
    ],
    gift: "1 complimentary REACTIVATE® session",
  },
  {
    id: "signature",
    number: "02",
    name: "Signature Wellness",
    price: "₹1,00,000",
    sessions: "8 sessions",
    descriptor: "SKIN, RECOVERY & A FIRST TASTE OF LONGEVITY",
    bestFor: "Members wanting a structured, multi-goal program",
    includes: [
      "2× Skin & Beauty protocols",
      "2× Recovery & Immune protocols",
      "2× Metabolic & Performance protocols",
      "2× flexible physician-selected sessions",
    ],
    gift: "1 complimentary NADEX® session",
  },
  {
    id: "elite",
    number: "03",
    name: "Elite Performance",
    price: "₹1,50,000",
    sessions: "10 sessions",
    descriptor: "PERFORMANCE-FORWARD, LONGEVITY-ANCHORED",
    bestFor: "Athletes, executives & frequent travellers",
    includes: [
      "2× NADEX® within the core plan",
      "REFUEL®",
      "FIT®",
      "REBUILD®",
      "PERFORMANCE X®",
      "4× physician-selected recovery / skin sessions",
    ],
    gift: "2 complimentary bonus sessions",
  },
  {
    id: "longevity",
    number: "04",
    name: "Longevity Circle",
    price: "₹2,50,000",
    sessions: "12 sessions",
    descriptor: "CELLULAR LONGEVITY + FULL-SPECTRUM WELLNESS",
    bestFor: "Longevity-focused executives & biohackers",
    includes: [
      "APEX® + METHYBLU® cellular longevity track",
      "Skin, recovery & performance blend",
      "Quarterly physician review built in",
    ],
    gift: "3 complimentary sessions + 1 complimentary LUMORA® at-home session",
  },
  {
    id: "prestige",
    number: "05",
    name: "Prestige Circle",
    price: "₹3,00,000",
    sessions: "15 sessions",
    descriptor: "FULL ACCESS ACROSS ALL 8 WELLNESS FAMILIES",
    bestFor: "Members who want the complete DRIPLABS experience",
    includes: [
      "Unlimited protocol switching within your plan",
      "Dedicated physician relationship",
      "Up to 4 concierge LUMORA® home visits",
      "Annual biomarker panel",
    ],
    gift: "4 complimentary sessions — 2× APEX® + 2× NADEX®",
  },
];

const circleBenefits = [
  {
    number: "01",
    title: "Priority Booking",
    text: "First access to physician appointments and popular session slots at partner clinics.",
  },
  {
    number: "02",
    title: "Member Pricing",
    text: "Preferential rates on individual top-up sessions and future package upgrades.",
  },
  {
    number: "03",
    title: "Quarterly Physician Check-In",
    text: "A standing check-in to review your progress and adjust the protocol mix as your goals change.",
  },
  {
    number: "04",
    title: "Early Access",
    text: "First access to new protocols as the DRIPLABS system expands, plus seasonal complimentary sessions.",
  },
];

const journey = [
  {
    number: "01",
    title: "Consult",
    text: "Every package begins with a physician consultation. Your adviser helps you identify the appropriate starting programme; your physician confirms the protocol mix.",
  },
  {
    number: "02",
    title: "Personalise",
    text: "Your package creates the framework. The physician determines the specific protocol selection within that framework.",
  },
  {
    number: "03",
    title: "Experience",
    text: "Sessions are administered through DRIPLABS partner clinics or, where available, LUMORA concierge delivery under physician-supervised safeguards.",
  },
  {
    number: "04",
    title: "Continue",
    text: "Once the package is complete, Circle keeps the relationship active through priority access, member pricing and ongoing physician check-ins.",
  },
];

export default function Page() {
  const [activePackage, setActivePackage] = useState("signature");

  const selected =
    packages.find((item) => item.id === activePackage) ?? packages[1];

  return (
    <main className="min-h-screen bg-[#F7F4EC] text-[#0B1B33]">
      {/* HERO */}
      <section className="overflow-hidden border-b border-[#0B1B33]/10">
        <div className="mx-auto grid min-h-[84vh] max-w-[1680px] items-end gap-16 px-5 pb-16 pt-28 md:px-10 md:pb-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-14 lg:pb-24 lg:pt-36">
          <div>
            <p className="text-[9px] uppercase tracking-[0.30em] text-[#B8901F]">
              DRIPLABS · MEMBERSHIP & THE CIRCLE
            </p>

            <h1 className="mt-7 max-w-[1150px] font-[var(--font-heading)] text-[clamp(4rem,10vw,10rem)] font-light leading-[0.82] tracking-[-0.065em]">
              Wellness,
              <br />
              as a
              <br />
              ritual.
            </h1>

            <div className="mt-10 max-w-xl border-l border-[#C9A227] pl-5 text-[13px] leading-7 text-[#5A6B82] md:pl-6">
              Structured physician-led programmes for members who want more
              than a single session — followed by Circle continuity when the
              programme is complete.
            </div>
          </div>

          <div className="lg:pb-3 lg:pl-14">
            <p className="max-w-md font-[var(--font-heading)] text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.02] tracking-[-0.04em]">
              Choose a programme.
              <br />
              Build your rhythm.
              <br />
              Stay connected.
            </p>

            <div className="mt-10 border-t border-[#0B1B33]/15 pt-5">
              <p className="text-[10px] uppercase tracking-[0.20em] text-[#5A6B82]">
                PHYSICIAN-LED · PROGRAMMED · CONTINUOUS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b border-[#0B1B33]/10 bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                THE PROGRAMME
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.86] tracking-[-0.06em]">
                Not a drip.
                <br />
                A system.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="border-t border-white/15 pt-6">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#E3CE8E]">
                  01
                </p>
                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  Physician-planned
                </h3>
                <p className="mt-3 text-[12px] leading-6 text-white/50">
                  Every package begins with physician consultation and final
                  protocol selection.
                </p>
              </div>

              <div className="border-t border-white/15 pt-6">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#E3CE8E]">
                  02
                </p>
                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  Structured
                </h3>
                <p className="mt-3 text-[12px] leading-6 text-white/50">
                  Packages organise multiple sessions into a defined programme
                  rather than a one-off menu.
                </p>
              </div>

              <div className="border-t border-white/15 pt-6">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#E3CE8E]">
                  03
                </p>
                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  Continuous
                </h3>
                <p className="mt-3 text-[12px] leading-6 text-white/50">
                  Circle follows a completed package with ongoing member
                  access and physician connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="mb-14">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
              THE MEMBER JOURNEY
            </p>

            <h2 className="mt-6 max-w-5xl font-[var(--font-heading)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
              From first
              <br />
              consultation onward.
            </h2>
          </div>

          <div className="grid border-t border-[#0B1B33]/15 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => (
              <article
                key={step.number}
                className="border-b border-[#0B1B33]/10 py-8 md:px-7 lg:border-b-0 lg:border-r lg:px-7 lg:[&:last-child]:border-r-0"
              >
                <span className="text-[10px] tracking-[0.22em] text-[#B8901F]">
                  {step.number}
                </span>

                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  {step.title}
                </h3>

                <p className="mt-4 text-[12px] leading-6 text-[#5A6B82]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-[#EDF0F5]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="mb-14 max-w-4xl">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
              FIVE PROGRAMMES
            </p>

            <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
              Choose your
              <br />
              starting point.
            </h2>

            <p className="mt-7 max-w-2xl text-[13px] leading-7 text-[#5A6B82]">
              Every tier includes physician consultation and scheduled
              sessions. The final protocol mix is confirmed by your physician,
              not predetermined by the package price.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="border-t border-[#0B1B33]/15">
              {packages.map((item) => {
                const active = item.id === activePackage;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActivePackage(item.id)}
                    className={`group grid w-full grid-cols-[45px_1fr_auto] gap-4 border-b border-[#0B1B33]/10 py-6 text-left transition-all duration-300 ${
                      active ? "pl-3" : ""
                    }`}
                  >
                    <span
                      className={`text-[10px] tracking-[0.2em] ${
                        active ? "text-[#B8901F]" : "text-[#5A6B82]"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span>
                      <span className="block font-[var(--font-heading)] text-2xl font-light">
                        {item.name}
                      </span>

                      <span className="mt-1 block text-[9px] uppercase tracking-[0.17em] text-[#5A6B82]">
                        {item.sessions}
                      </span>
                    </span>

                    <span className="font-[var(--font-heading)] text-xl font-light">
                      {item.price}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="border border-[#0B1B33]/10 bg-[#F7F4EC] p-7 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#B8901F]">
                    {selected.descriptor}
                  </p>

                  <h3 className="mt-4 font-[var(--font-heading)] text-[clamp(3rem,5vw,5.5rem)] font-light leading-[0.87] tracking-[-0.05em]">
                    {selected.name}
                  </h3>
                </div>

                <p className="font-[var(--font-heading)] text-3xl font-light">
                  {selected.price}
                </p>
              </div>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#5A6B82]">
                    BEST FOR
                  </p>

                  <p className="mt-4 max-w-md text-[13px] leading-7">
                    {selected.bestFor}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#5A6B82]">
                    COMPLIMENTARY GIFT
                  </p>

                  <p className="mt-4 max-w-md text-[13px] leading-7">
                    {selected.gift}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-[#0B1B33]/10 pt-7">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5A6B82]">
                  INCLUDED
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {selected.includes.map((item) => (
                    <div
                      key={item}
                      className="border-t border-[#0B1B33]/10 pt-3 text-[11px] leading-5 text-[#5A6B82]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 border-t border-[#0B1B33]/10 pt-6">
                <p className="text-[10px] uppercase leading-5 tracking-[0.14em] text-[#B8901F]">
                  PHYSICIAN-SUPERVISED USE ONLY · FINAL PROTOCOL MIX CONFIRMED
                  AFTER CONSULTATION
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIRCLE */}
      <section className="border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                AFTER YOUR PACKAGE
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3.3rem,6vw,6.5rem)] font-light leading-[0.85] tracking-[-0.06em]">
                Enter
                <br />
                the Circle.
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-[#5A6B82]">
                DRIPLABS Circle is the continuity layer that follows a completed
                package — keeping your wellness plan active without requiring
                another full package upfront.
              </p>

              <p className="mt-7 max-w-md text-[10px] uppercase leading-5 tracking-[0.15em] text-[#B8901F]">
                CIRCLE MEMBERSHIP IS OFFERED AFTER A PACKAGE IS COMPLETED.
              </p>
            </div>

            <div className="border-t border-[#0B1B33]/15">
              {circleBenefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="grid gap-5 border-b border-[#0B1B33]/10 py-8 md:grid-cols-[70px_0.65fr_1.35fr]"
                >
                  <span className="text-[10px] tracking-[0.22em] text-[#B8901F]">
                    {benefit.number}
                  </span>

                  <h3 className="font-[var(--font-heading)] text-3xl font-light">
                    {benefit.title}
                  </h3>

                  <p className="text-[12px] leading-6 text-[#5A6B82]">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY + FINANCING */}
      <section className="bg-[#EDF0F5]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="border border-[#0B1B33]/10 bg-[#F7F4EC] p-7 md:p-10">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#B8901F]">
                DELIVERY
              </p>

              <h2 className="mt-6 font-[var(--font-heading)] text-4xl font-light leading-none tracking-[-0.04em] md:text-5xl">
                Designed around your life.
              </h2>

              <p className="mt-6 max-w-lg text-[13px] leading-7 text-[#5A6B82]">
                Sessions are delivered through DRIPLABS partner clinics or,
                where available, through LUMORA concierge home delivery under
                physician-supervised safeguards.
              </p>
            </article>

            <article className="border border-[#0B1B33]/10 bg-[#0B1B33] p-7 text-[#F7F4EC] md:p-10">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#E3CE8E]">
                FINANCING
              </p>

              <h2 className="mt-6 font-[var(--font-heading)] text-4xl font-light leading-none tracking-[-0.04em] md:text-5xl">
                Pay over time.
              </h2>

              <p className="mt-6 max-w-lg text-[13px] leading-7 text-white/55">
                The member guide describes package financing through healthcare
                EMI partner networks, subject to financing partner approval.
              </p>

              <p className="mt-7 text-[9px] uppercase leading-5 tracking-[0.16em] text-white/30">
                EMI IS A CONVENIENCE, NEVER A REQUIREMENT.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                BEGIN YOUR PROGRAM
              </p>

              <h2 className="mt-6 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
                Start with
                <br />
                a conversation.
              </h2>

              <p className="mt-7 max-w-xl text-[13px] leading-7 text-white/55">
                Speak with the DRIPLABS team about the programme that fits your
                goals. Your physician confirms the protocol mix before the
                first session.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center bg-[#C9A227] px-7 text-[10px] uppercase tracking-[0.22em] text-[#0B1B33] transition-colors duration-300 hover:bg-[#E3CE8E]"
              >
                Speak With an Adviser
              </Link>

              <Link
                href="/protocols"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:border-[#E3CE8E] hover:bg-[#E3CE8E] hover:text-[#0B1B33]"
              >
                Explore Protocols
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#060F1F] text-[#F7F4EC]">
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
