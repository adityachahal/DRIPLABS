import Link from "next/link";

const models = [
  {
    number: "01",
    eyebrow: "LOWEST COMMITMENT",
    title: "Consult & Dispense",
    description:
      "You assess and supervise; DRIPLABS supplies pre-formulated kits. A straightforward structure for practices looking to introduce the protocol system without creating a dedicated wellness vertical.",
    details: [
      "Physician-led assessment",
      "Pre-formulated DRIPLABS kits",
      "Lower operational commitment",
      "Designed for a faster launch",
    ],
  },
  {
    number: "02",
    eyebrow: "DEDICATED WELLNESS BAY",
    title: "Clinic-in-Clinic",
    description:
      "A dedicated DRIPLABS wellness bay within your existing practice, creating a distinct premium wellness environment with co-branded positioning and trained nursing support.",
    details: [
      "Dedicated wellness environment",
      "Co-branded clinic presence",
      "Trained nursing support",
      "Integrated into existing practice",
    ],
  },
  {
    number: "03",
    eyebrow: "HIGH-VOLUME / FLAGSHIP",
    title: "Equity / Retainer",
    description:
      "For high-volume or flagship clinics, DRIPLABS supports structured retainer or minority-equity arrangements aligned to the scale of the partnership.",
    details: [
      "Designed for larger practices",
      "Structured retainer model",
      "Minority-equity option",
      "Built around long-term partnership",
    ],
  },
  {
    number: "04",
    eyebrow: "MULTI-LOCATION",
    title: "MSO / Franchise-Style",
    description:
      "A management-services structure for multi-location clinic groups seeking to establish a standardised wellness vertical across their network.",
    details: [
      "Management-services structure",
      "Multi-location deployment",
      "Standardised operating model",
      "Built for clinic groups",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Clinical Review Call",
    description:
      "A physician-focused review of the DRIPLABS system, dossier architecture and compliance framework.",
  },
  {
    number: "02",
    title: "Protocol & Model Selection",
    description:
      "Select the protocol range and partnership structure that fits your practice and operating model.",
  },
  {
    number: "03",
    title: "Training & Setup",
    description:
      "Staff training followed by initial kit shipment with the relevant batch documentation and setup support.",
  },
  {
    number: "04",
    title: "Go-Live & Support",
    description:
      "Launch collateral, clinical support and a dedicated medical-affairs contact as the practice goes live.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Dossier-led",
    text: "Protocols are supported by structured physician documentation rather than a conventional spa-style menu.",
  },
  {
    number: "02",
    title: "Traceable",
    text: "Kits are documented with batch information and supporting quality records for clinic use.",
  },
  {
    number: "03",
    title: "Supported",
    text: "Medical-affairs support includes protocol-selection training, adverse-event reporting support and literature updates.",
  },
  {
    number: "04",
    title: "Scalable",
    text: "The partnership architecture accommodates single practices as well as larger clinic groups.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F4EC] text-[#0B1B33]">
      {/* HERO */}
      <section className="overflow-hidden border-b border-[#0B1B33]/10">
        <div className="mx-auto grid min-h-[82vh] max-w-[1680px] items-end gap-16 px-5 pb-16 pt-28 md:px-10 md:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:pb-24 lg:pt-36">
          <div>
            <p className="text-[9px] uppercase tracking-[0.30em] text-[#B8901F]">
              DRIPLABS · PHYSICIAN PARTNERSHIP
            </p>

            <h1 className="mt-7 max-w-[1100px] font-[var(--font-heading)] text-[clamp(4rem,10vw,10rem)] font-light leading-[0.82] tracking-[-0.065em]">
              Build the
              <br />
              wellness
              <br />
              vertical.
            </h1>

            <div className="mt-10 max-w-xl border-l border-[#C9A227] pl-5 text-[13px] leading-7 text-[#5A6B82] md:pl-6">
              A physician-led partnership system for practices that want to
              introduce structured IV wellness with documented protocols,
              clinical support and a premium operating model.
            </div>
          </div>

          <div className="lg:pb-3 lg:pl-14">
            <p className="max-w-md text-[clamp(1.8rem,3vw,3rem)] font-[var(--font-heading)] font-light leading-[1.05] tracking-[-0.035em]">
              Your practice.
              <br />
              The DRIPLABS system.
              <br />
              One clinical framework.
            </p>

            <div className="mt-10 border-t border-[#0B1B33]/15 pt-5">
              <p className="max-w-md text-[11px] uppercase leading-6 tracking-[0.18em] text-[#5A6B82]">
                FOUR PARTNERSHIP STRUCTURES · PHYSICIAN SUPERVISION · CLINICAL
                SUPPORT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DRIPLABS */}
      <section className="border-b border-[#0B1B33]/10 bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                WHY DRIPLABS
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.86] tracking-[-0.06em]">
                Built like a
                <br />
                clinical system.
              </h2>
            </div>

            <div className="grid gap-x-10 gap-y-10 border-t border-white/15 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.number} className="border-b border-white/10 py-7">
                  <span className="text-[10px] tracking-[0.22em] text-[#E3CE8E]">
                    {pillar.number}
                  </span>

                  <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 max-w-md text-[12px] leading-6 text-white/55">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section className="border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="mb-14 max-w-4xl">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
              PARTNERSHIP MODELS
            </p>

            <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
              Four structures.
              <br />
              One standard.
            </h2>

            <p className="mt-7 max-w-2xl text-[13px] leading-7 text-[#5A6B82]">
              Choose the structure according to the way your practice wants to
              introduce, operate and scale physician-supervised wellness.
            </p>
          </div>

          <div className="border-t border-[#0B1B33]/15">
            {models.map((model) => (
              <article
                key={model.number}
                className="grid gap-8 border-b border-[#0B1B33]/10 py-10 lg:grid-cols-[90px_0.9fr_1.1fr]"
              >
                <div>
                  <span className="text-[10px] tracking-[0.22em] text-[#B8901F]">
                    {model.number}
                  </span>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#5A6B82]">
                    {model.eyebrow}
                  </p>

                  <h3 className="mt-3 font-[var(--font-heading)] text-[clamp(2.2rem,4vw,4.5rem)] font-light leading-[0.9] tracking-[-0.04em]">
                    {model.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-xl text-[13px] leading-7 text-[#5A6B82]">
                    {model.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {model.details.map((detail) => (
                      <div
                        key={detail}
                        className="border-t border-[#0B1B33]/10 pt-3 text-[10px] uppercase leading-5 tracking-[0.14em] text-[#5A6B82]"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="bg-[#EDF0F5]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                FROM FIRST CALL TO FIRST PATIENT
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,5.7vw,6rem)] font-light leading-[0.87] tracking-[-0.06em]">
                A defined
                <br />
                path to launch.
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-[#5A6B82]">
                The physician playbook structures onboarding into four stages,
                with the source material describing a go-live timeline of
                approximately 10–14 days.
              </p>
            </div>

            <div className="grid border-t border-[#0B1B33]/15 md:grid-cols-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-b border-[#0B1B33]/10 py-8 md:px-7 md:py-9 md:[&:nth-child(odd)]:border-r"
                >
                  <span className="text-[10px] tracking-[0.22em] text-[#B8901F]">
                    {step.number}
                  </span>

                  <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-light tracking-[-0.02em]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-md text-[12px] leading-6 text-[#5A6B82]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL RESPONSIBILITY */}
      <section className="border-t border-[#0B1B33]/10">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                CLINICAL RESPONSIBILITY
              </p>

              <h2 className="mt-6 max-w-4xl font-[var(--font-heading)] text-[clamp(3.2rem,6.6vw,7.5rem)] font-light leading-[0.84] tracking-[-0.06em]">
                The physician
                <br />
                remains the clinician.
              </h2>

              <p className="mt-8 max-w-2xl text-[13px] leading-7 text-[#5A6B82]">
                DRIPLABS provides the protocol system, documentation, training
                and support framework. Final protocol selection, dosage and
                administration decisions remain the responsibility of the
                treating physician.
              </p>
            </div>

            <div className="border-t border-[#0B1B33]/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10">
              <p className="text-[9px] uppercase tracking-[0.22em] text-[#B8901F]">
                PHYSICIAN PRINCIPLE
              </p>

              <p className="mt-5 font-[var(--font-heading)] text-[2rem] font-light leading-tight tracking-[-0.03em]">
                Assess.
                <br />
                Select.
                <br />
                Supervise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#0B1B33]/10 bg-[#0B1B33] text-[#F7F4EC]">
        <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                BEGIN THE CONVERSATION
              </p>

              <h2 className="mt-6 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
                Bring DRIPLABS
                <br />
                into your practice.
              </h2>

              <p className="mt-7 max-w-xl text-[13px] leading-7 text-white/55">
                Start with the physician dossier, review the economics, or
                begin a direct partnership conversation with the DRIPLABS team.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/physicians/dossier"
                className="inline-flex min-h-12 items-center justify-center border border-white/30 px-7 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:border-[#E3CE8E] hover:bg-[#E3CE8E] hover:text-[#0B1B33]"
              >
                Physician Dossier
              </Link>

              <Link
                href="/physicians/economics"
                className="inline-flex min-h-12 items-center justify-center border border-white/30 px-7 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:border-[#E3CE8E] hover:bg-[#E3CE8E] hover:text-[#0B1B33]"
              >
                Practice Economics
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center bg-[#C9A227] px-7 text-[10px] uppercase tracking-[0.22em] text-[#0B1B33] transition-colors duration-300 hover:bg-[#E3CE8E]"
              >
                Start Partnership
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
