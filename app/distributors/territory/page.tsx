"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const marginBands = [
  {
    number: "01",
    title: "Clinic-direct",
    margin: "≈ 10%",
    commitment: "Lower volume",
    description:
      "Direct-to-clinic fulfilment for partners starting with a focused network and lower initial volume.",
  },
  {
    number: "02",
    title: "Regional distributor",
    margin: "≈ 12–13%",
    commitment: "Multi-clinic",
    description:
      "A structured territory model designed around multiple clinic relationships and recurring reorders.",
  },
  {
    number: "03",
    title: "Super-stockist",
    margin: "≈ 14–15%",
    commitment: "Highest volume",
    description:
      "Fuller territory ownership with the highest stated volume commitment in the distributor framework.",
  },
];

const protection = [
  {
    number: "01",
    title: "Controlled distribution",
    text: "Selective, territory-based onboarding rather than blanket stocking across every possible partner.",
  },
  {
    number: "02",
    title: "Pricing discipline",
    text: "The commercial framework is designed to protect premium positioning rather than encourage market-crashing discounting.",
  },
  {
    number: "03",
    title: "Territory allocation",
    text: "Exclusivity can be available for qualifying partners in defined metro and regional zones, subject to commitments.",
  },
  {
    number: "04",
    title: "Batch-linked protection",
    text: "Expiry-approaching stock is covered by a defined return and replacement policy described in the distributor framework.",
  },
  {
    number: "05",
    title: "Demand generation",
    text: "DRIPLABS telesales and BD teams support physician and clinic awareness within the assigned territory.",
  },
  {
    number: "06",
    title: "Documentation",
    text: "Each batch is accompanied by traceability documentation including batch information, expiry and COA.",
  },
];

const onboarding = [
  {
    number: "01",
    title: "Territory & Fit Review",
    text: "Review the existing pharma or wellness distribution network, territory coverage and storage capability.",
  },
  {
    number: "02",
    title: "Commercial Terms",
    text: "Margin slabs, MOQ, credit terms and applicable territory exclusivity are finalised and contracted.",
  },
  {
    number: "03",
    title: "Onboarding & Training",
    text: "The sales team is briefed on protocols, positioning and compliance documentation, followed by the first stock order.",
  },
  {
    number: "04",
    title: "Go-to-Market Support",
    text: "Telesales and BD outreach begins alongside the first shipment to seed physician demand.",
  },
];

export default function Page() {
  const [stockValue, setStockValue] = useState(33);
  const [margin, setMargin] = useState(14);

  const economics = useMemo(() => {
    const value = stockValue * 100000;
    const grossValue = value * (margin / 100);

    return {
      value,
      grossValue,
    };
  }, [stockValue, margin]);

  return (
    <main className="min-h-screen bg-[#F7F4EC] text-[#0B1B33]">
      {/* HERO */}
      <section className="overflow-hidden border-b border-[#0B1B33]/10">
        <div className="mx-auto grid min-h-[84vh] max-w-[1680px] items-end gap-16 px-5 pb-16 pt-28 md:px-10 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:pb-24 lg:pt-36">
          <div>
            <p className="text-[9px] uppercase tracking-[0.30em] text-[#B8901F]">
              DRIPLABS · TERRITORY PARTNERSHIP
            </p>

            <h1 className="mt-7 max-w-[1150px] font-[var(--font-heading)] text-[clamp(3.8rem,9.8vw,9.5rem)] font-light leading-[0.82] tracking-[-0.065em]">
              Your
              <br />
              territory.
              <br />
              Your network.
            </h1>

            <div className="mt-10 max-w-xl border-l border-[#C9A227] pl-5 text-[13px] leading-7 text-[#5A6B82] md:pl-6">
              A territory-led distribution model designed for partners who
              already understand healthcare, clinic relationships and regional
              fulfilment.
            </div>
          </div>

          <div className="lg:pb-3 lg:pl-14">
            <p className="max-w-md font-[var(--font-heading)] text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.02] tracking-[-0.04em]">
              Stock.
              <br />
              Fulfil.
              <br />
              Build demand.
            </p>

            <div className="mt-10 border-t border-[#0B1B33]/15 pt-5">
              <p className="text-[10px] uppercase tracking-[0.20em] text-[#5A6B82]">
                TERRITORY · VOLUME · PARTNERSHIP TIER
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERRITORY ECONOMICS */}
      <section className="border-b border-[#0B1B33]/10 bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                COMMERCIAL FRAMEWORK
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.86] tracking-[-0.06em]">
                The tier
                <br />
                follows the
                <br />
                territory.
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-white/55">
                The distributor framework uses different commercial tiers
                according to territory coverage and volume commitment.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {marginBands.map((band) => (
                <article
                  key={band.number}
                  className="border border-white/10 p-6 md:p-7"
                >
                  <span className="text-[10px] tracking-[0.22em] text-[#E3CE8E]">
                    {band.number}
                  </span>

                  <p className="mt-7 font-[var(--font-heading)] text-4xl font-light">
                    {band.margin}
                  </p>

                  <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-light">
                    {band.title}
                  </h3>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-white/30">
                    {band.commitment}
                  </p>

                  <p className="mt-6 text-[12px] leading-6 text-white/50">
                    {band.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="max-w-4xl text-[10px] uppercase leading-6 tracking-[0.14em] text-white/30">
              Indicative only. Exact slabs depend on territory, volume
              commitment and partnership tier and are shared and contracted
              during commercial discussions.
            </p>
          </div>
        </div>
      </section>

      {/* ILLUSTRATIVE MODEL */}
      <section className="border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                ILLUSTRATIVE MODEL
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,5.8vw,6rem)] font-light leading-[0.87] tracking-[-0.06em]">
                Model the
                <br />
                stock cycle.
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-[#5A6B82]">
                The source deck includes one directional example based on
                ₹33 lakh of stock value and a 14% illustrative margin. Use the
                controls to explore the arithmetic rather than treating it as
                a commercial projection.
              </p>
            </div>

            <div className="border border-[#0B1B33]/10 bg-[#EDF0F5]">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-[#0B1B33]/10 p-7 md:border-b-0 md:border-r md:p-9">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.22em] text-[#B8901F]">
                        STOCK VALUE
                      </p>

                      <p className="mt-4 font-[var(--font-heading)] text-5xl font-light">
                        ₹{stockValue}L
                      </p>
                    </div>
                  </div>

                  <input
                    aria-label="Illustrative stock value in lakhs"
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={stockValue}
                    onChange={(event) =>
                      setStockValue(Number(event.target.value))
                    }
                    className="mt-8 w-full accent-[#C9A227]"
                  />

                  <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.18em] text-[#5A6B82]">
                    <span>₹5L</span>
                    <span>₹100L</span>
                  </div>
                </div>

                <div className="border-b border-[#0B1B33]/10 p-7 md:border-b-0 md:p-9">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.22em] text-[#B8901F]">
                      ILLUSTRATIVE MARGIN
                    </p>

                    <p className="mt-4 font-[var(--font-heading)] text-5xl font-light">
                      {margin}%
                    </p>
                  </div>

                  <input
                    aria-label="Illustrative margin percentage"
                    type="range"
                    min="10"
                    max="15"
                    step="1"
                    value={margin}
                    onChange={(event) => setMargin(Number(event.target.value))}
                    className="mt-8 w-full accent-[#C9A227]"
                  />

                  <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.18em] text-[#5A6B82]">
                    <span>10%</span>
                    <span>15%</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#0B1B33]/10 bg-[#F7F4EC] p-7 md:p-9">
                <p className="text-[9px] uppercase tracking-[0.24em] text-[#5A6B82]">
                  ILLUSTRATIVE GROSS MARGIN VALUE
                </p>

                <p className="mt-4 font-[var(--font-heading)] text-[clamp(3rem,6vw,6rem)] font-light leading-none tracking-[-0.05em]">
                  ₹{(economics.grossValue / 100000).toFixed(2)}L
                </p>

                <p className="mt-5 max-w-2xl text-[11px] leading-6 text-[#5A6B82]">
                  Arithmetic only: stock value × illustrative margin. This does
                  not account for freight, warehousing, salaries, taxes,
                  financing, returns, discounts, working capital or other
                  operating costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RISK PROTECTION */}
      <section className="bg-[#EDF0F5]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="mb-14 max-w-4xl">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
              RISK-PROTECTION MODEL
            </p>

            <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(3.2rem,6.6vw,7rem)] font-light leading-[0.84] tracking-[-0.06em]">
              Protect the
              <br />
              territory.
            </h2>

            <p className="mt-7 max-w-2xl text-[13px] leading-7 text-[#5A6B82]">
              The distributor framework is structured around controlled
              distribution, pricing discipline, traceability and demand
              support.
            </p>
          </div>

          <div className="grid border-t border-[#0B1B33]/15 md:grid-cols-2 lg:grid-cols-3">
            {protection.map((item) => (
              <article
                key={item.number}
                className="border-b border-[#0B1B33]/10 py-8 md:px-7 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+2)]:border-x lg:[&:nth-child(3n+2)]:px-7 lg:[&:nth-child(3n)]:pr-0"
              >
                <span className="text-[10px] tracking-[0.22em] text-[#B8901F]">
                  {item.number}
                </span>

                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-[12px] leading-6 text-[#5A6B82]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                BECOMING A PARTNER
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,5.8vw,6rem)] font-light leading-[0.87] tracking-[-0.06em]">
                From
                <br />
                conversation
                <br />
                to shipment.
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-[#5A6B82]">
                The distributor source describes a four-step process typically
                completed within a few weeks of first contact.
              </p>
            </div>

            <div className="border-t border-[#0B1B33]/15">
              {onboarding.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-b border-[#0B1B33]/10 py-8 md:grid-cols-[75px_0.8fr_1.2fr] md:items-start"
                >
                  <span className="text-[10px] tracking-[0.22em] text-[#B8901F]">
                    {step.number}
                  </span>

                  <h3 className="font-[var(--font-heading)] text-3xl font-light">
                    {step.title}
                  </h3>

                  <p className="text-[12px] leading-6 text-[#5A6B82]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                TERRITORY ENQUIRY
              </p>

              <h2 className="mt-6 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
                Let's define
                <br />
                the territory.
              </h2>

              <p className="mt-7 max-w-xl text-[13px] leading-7 text-white/55">
                Review territory availability, commercial terms, volume
                requirements and the full distribution dossier with the
                DRIPLABS partnerships team.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center bg-[#C9A227] px-7 text-[10px] uppercase tracking-[0.22em] text-[#0B1B33] transition-colors duration-300 hover:bg-[#E3CE8E]"
              >
                Request Territory Review
              </Link>

              <Link
                href="/distributors"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:border-[#E3CE8E] hover:bg-[#E3CE8E] hover:text-[#0B1B33]"
              >
                Back to Distribution
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
