import Link from "next/link";

const valueCards = [
  {
    number: "01",
    title: "Made & licensed in India",
    text: "Branded injectables are manufactured under Indian pharmaceutical licences, supporting a domestic supply model.",
  },
  {
    number: "02",
    title: "Batch-traceable, always",
    text: "Kits ship with batch information, expiry details and Certificate of Analysis documentation.",
  },
  {
    number: "03",
    title: "A documented range",
    text: "The DRIPLABS commercial architecture spans a broad protocol portfolio supported by physician-facing documentation.",
  },
  {
    number: "04",
    title: "Built-in demand generation",
    text: "DRIPLABS supports territory growth through physician education, telesales and business-development activity.",
  },
  {
    number: "05",
    title: "Category-defining positioning",
    text: "A physician-led, pharmacopoeia-documented IV wellness system designed for premium clinic environments.",
  },
  {
    number: "06",
    title: "Multi-brand portfolio access",
    text: "Qualifying partners may also access AEVUM and LUMORA opportunities within the broader DRIPLABS ecosystem.",
  },
];

const rollout = [
  {
    number: "01",
    title: "Metro Anchors",
    cities: "Delhi NCR · Mumbai · Bengaluru · Hyderabad · Pune · Chennai",
  },
  {
    number: "02",
    title: "Tier-1 Expansion",
    cities: "Ahmedabad · Kolkata · Chandigarh · Jaipur · Kochi",
  },
  {
    number: "03",
    title: "Channel Diversification",
    cities: "Longevity clinics · Derm chains · IVF centres · Sports recovery",
  },
  {
    number: "04",
    title: "International Corridors",
    cities: "Europe · MENA · GCC · CIS / ROW",
  },
];

const channelPoints = [
  "Territory-led clinic expansion",
  "Physician and clinic education support",
  "Structured documentation and batch records",
  "Premium positioning rather than commodity distribution",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F4EC] text-[#0B1B33]">
      {/* HERO */}
      <section className="overflow-hidden border-b border-[#0B1B33]/10">
        <div className="mx-auto grid min-h-[84vh] max-w-[1680px] items-end gap-16 px-5 pb-16 pt-28 md:px-10 md:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:pb-24 lg:pt-36">
          <div>
            <p className="text-[9px] uppercase tracking-[0.30em] text-[#B8901F]">
              DRIPLABS · DISTRIBUTOR / STOCKIST
            </p>

            <h1 className="mt-7 max-w-[1150px] font-[var(--font-heading)] text-[clamp(3.8rem,9.8vw,9.5rem)] font-light leading-[0.82] tracking-[-0.065em]">
              Distribute
              <br />
              the
              <br />
              system.
            </h1>

            <div className="mt-10 max-w-xl border-l border-[#C9A227] pl-5 text-[13px] leading-7 text-[#5A6B82] md:pl-6">
              A premium physician-led IV wellness platform built for clinics,
              longevity practices, aesthetic networks and emerging wellness
              markets across India.
            </div>
          </div>

          <div className="lg:pb-3 lg:pl-14">
            <p className="max-w-md font-[var(--font-heading)] text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.02] tracking-[-0.04em]">
              Stock with confidence.
              <br />
              Build territory demand.
              <br />
              Scale the category.
            </p>

            <div className="mt-10 border-t border-[#0B1B33]/15 pt-5">
              <p className="text-[10px] uppercase tracking-[0.20em] text-[#5A6B82]">
                PHYSICIAN-LED · DOCUMENTED · TRACEABLE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="border-b border-[#0B1B33]/10 bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                WHY DRIPLABS · WHY NOW
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3.1rem,6vw,6.5rem)] font-light leading-[0.86] tracking-[-0.06em]">
                A category
                <br />
                being built.
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-white/55">
                The distributor deck describes a market shaped by expanding
                aesthetic, longevity and executive-health clinics, alongside
                growing consumer awareness of IV wellness and related actives.
              </p>
            </div>

            <div className="grid gap-0 border-t border-white/15 md:grid-cols-2">
              <div className="border-b border-white/10 py-8 md:border-r md:pr-8">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#E3CE8E]">
                  01
                </p>
                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  Aesthetic clinic growth
                </h3>
                <p className="mt-3 text-[12px] leading-6 text-white/50">
                  Expansion of dermatology, longevity and executive-health
                  clinics across metro and Tier-1 markets.
                </p>
              </div>

              <div className="border-b border-white/10 py-8 md:pl-8">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#E3CE8E]">
                  02
                </p>
                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  Anti-aging awareness
                </h3>
                <p className="mt-3 text-[12px] leading-6 text-white/50">
                  NAD+, glutathione and cellular-health conversations have
                  moved further into mainstream wellness.
                </p>
              </div>

              <div className="border-b border-white/10 py-8 md:border-r md:pr-8">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#E3CE8E]">
                  03
                </p>
                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  Preventive healthcare
                </h3>
                <p className="mt-3 text-[12px] leading-6 text-white/50">
                  The source material describes increasing interest in
                  proactive, IV-delivered micronutrient support.
                </p>
              </div>

              <div className="border-b border-white/10 py-8 md:pl-8">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#E3CE8E]">
                  04
                </p>
                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  Beyond the metros
                </h3>
                <p className="mt-3 text-[12px] leading-6 text-white/50">
                  The rollout framework explicitly includes Tier-2 and Tier-3
                  expansion as the distribution network develops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="mb-14 max-w-4xl">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
              THE DISTRIBUTOR VALUE
            </p>

            <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
              Built to be
              <br />
              stocked.
            </h2>

            <p className="mt-7 max-w-2xl text-[13px] leading-7 text-[#5A6B82]">
              The distributor system is designed around product documentation,
              traceability, physician confidence and territory demand rather
              than a conventional unbranded IV-bar supply model.
            </p>
          </div>

          <div className="grid border-t border-[#0B1B33]/15 md:grid-cols-2 lg:grid-cols-3">
            {valueCards.map((card) => (
              <article
                key={card.number}
                className="border-b border-[#0B1B33]/10 px-0 py-8 md:px-7 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+2)]:border-r lg:[&:nth-child(3n+2)]:px-7"
              >
                <span className="text-[10px] tracking-[0.22em] text-[#B8901F]">
                  {card.number}
                </span>

                <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                  {card.title}
                </h3>

                <p className="mt-3 max-w-md text-[12px] leading-6 text-[#5A6B82]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNEL */}
      <section className="bg-[#EDF0F5]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                HOW THE CHANNEL WORKS
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,5.8vw,6.2rem)] font-light leading-[0.87] tracking-[-0.06em]">
                You build the
                <br />
                territory.
              </h2>
            </div>

            <div>
              <div className="border-t border-[#0B1B33]/15">
                {channelPoints.map((point, index) => (
                  <div
                    key={point}
                    className="grid grid-cols-[55px_1fr] border-b border-[#0B1B33]/10 py-7"
                  >
                    <span className="text-[9px] tracking-[0.2em] text-[#B8901F]">
                      0{index + 1}
                    </span>

                    <p className="text-[14px] leading-7 text-[#0B1B33]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-[11px] leading-6 text-[#5A6B82]">
                The distributor deck describes DRIPLABS as supporting physician
                demand generation through telesales and business development
                so the distributor is not positioned as selling into a purely
                cold market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROLLOUT */}
      <section className="border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                FOUR-PHASE CITY ROLLOUT
              </p>

              <h2 className="mt-6 max-w-4xl font-[var(--font-heading)] text-[clamp(3.3rem,6.7vw,7.5rem)] font-light leading-[0.84] tracking-[-0.06em]">
                From anchor
                <br />
                cities outward.
              </h2>
            </div>

            <p className="max-w-sm text-[12px] leading-6 text-[#5A6B82] lg:pb-2">
              The territory framework starts with metro anchors and expands
              through Tier-1 markets, channel diversification and defined
              international corridors.
            </p>
          </div>

          <div className="border-t border-[#0B1B33]/15">
            {rollout.map((phase) => (
              <div
                key={phase.number}
                className="grid gap-6 border-b border-[#0B1B33]/10 py-8 md:grid-cols-[90px_0.8fr_1.2fr] md:items-center"
              >
                <span className="text-[10px] tracking-[0.22em] text-[#B8901F]">
                  PHASE {phase.number}
                </span>

                <h3 className="font-[var(--font-heading)] text-3xl font-light md:text-4xl">
                  {phase.title}
                </h3>

                <p className="text-[12px] leading-6 text-[#5A6B82]">
                  {phase.cities}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERRITORY CTA */}
      <section className="bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                TERRITORY PARTNERSHIP
              </p>

              <h2 className="mt-6 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
                Own the next
                <br />
                territory.
              </h2>

              <p className="mt-7 max-w-xl text-[13px] leading-7 text-white/55">
                Review the territory structure, rollout framework and
                commercial model before beginning a distributor conversation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/distributors/territory"
                className="inline-flex min-h-12 items-center justify-center bg-[#C9A227] px-7 text-[10px] uppercase tracking-[0.22em] text-[#0B1B33] transition-colors duration-300 hover:bg-[#E3CE8E]"
              >
                Explore Territory
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:border-[#E3CE8E] hover:bg-[#E3CE8E] hover:text-[#0B1B33]"
              >
                Distributor Enquiry
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
