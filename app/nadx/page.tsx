import Link from "next/link";

const evidence = [
  "Berven 2026",
  "Wu 2025",
  "McDermott 2024",
  "Conze 2019",
  "Martens 2018",
  "Zhou 2020",
  "Christen 2026",
  "Reyna 2026",
];

export default function NADxPage() {
  return (
    <main className="min-h-screen bg-[#060F1F] text-[#F7F4EC]">
      <section className="mx-auto max-w-[1680px] px-5 pb-24 pt-36 md:px-10 md:pb-36 lg:px-14">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#C9A227]" />

          <span className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E] md:text-[9px]">
            The Flagship · Cellular & Longevity
          </span>
        </div>

        <h1 className="mt-10 max-w-6xl font-[var(--font-heading)] text-[clamp(4rem,9vw,9rem)] font-light leading-[0.82] tracking-[-0.065em]">
          NADx —
          <br />
          NAD⁺ Infusion Therapy.
        </h1>

        <p className="mt-9 max-w-3xl text-sm leading-7 text-white/58 md:text-base">
          India&apos;s first physician-led, pharmacopoeia-documented
          Nicotinamide Adenine Dinucleotide (NAD⁺) IV programme — bringing
          a documented cellular-wellness experience into a clinically
          supervised setting.
        </p>

        <div className="mt-12 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["45+", "Studies"],
            ["19", "Protocols"],
            ["8", "Wellness families"],
            ["1st", "Licensed pharma-grade NAD⁺ IV brand in India"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b border-white/10 px-5 py-8 last:border-0 sm:px-7 lg:border-b-0 lg:border-r lg:px-8"
            >
              <div className="font-[var(--font-heading)] text-5xl font-light tracking-[-0.05em] text-[#C9A227]">
                {value}
              </div>

              <p className="mt-4 text-[8px] uppercase leading-5 tracking-[0.2em] text-white/38">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1B33]">
        <div className="mx-auto grid max-w-[1680px] md:grid-cols-2">
          <div className="border-b border-white/10 px-5 py-20 md:border-b-0 md:border-r md:px-10 md:py-28 lg:px-14">
            <p className="text-[8px] uppercase tracking-[0.25em] text-[#E3CE8E]">
              For the patient
            </p>

            <h2 className="mt-7 max-w-2xl font-[var(--font-heading)] text-[clamp(2.4rem,4.5vw,4.8rem)] font-light leading-[0.9] tracking-[-0.05em]">
              The science,
              <br />
              simply.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/50">
              NAD⁺ is part of the chemistry your cells use for energy and
              everyday cellular processes. Within DRIPLABS, it is approached
              as part of a physician-directed wellness programme.
            </p>
          </div>

          <div className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
            <p className="text-[8px] uppercase tracking-[0.25em] text-[#E3CE8E]">
              For the physician
            </p>

            <h2 className="mt-7 max-w-2xl font-[var(--font-heading)] text-[clamp(2.4rem,4.5vw,4.8rem)] font-light leading-[0.9] tracking-[-0.05em]">
              Pathways,
              <br />
              documented.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/50">
              NAD⁺ is a required cofactor for Complex I of the electron
              transport chain and a substrate for sirtuins and PARP enzymes
              involved in cellular processes and DNA-damage response.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1680px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="max-w-5xl">
          <p className="text-[8px] uppercase tracking-[0.25em] text-[#E3CE8E]">
            Programme structure
          </p>

          <h2 className="mt-7 font-[var(--font-heading)] text-[clamp(2.8rem,5vw,5.7rem)] font-light leading-[0.88] tracking-[-0.055em]">
            Starting at ₹6,000
            <br />
            per 100mg NAD⁺.
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50">
            Recommended course of 5 sessions, 3–4 hours each, spaced every
            25–30 days. Book 5 sessions, pay for 4. Final dosage and pricing
            confirmed by the supervising physician after clinical evaluation.
          </p>
        </div>

        <div className="mt-20 border-t border-white/10">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/10 py-8 md:border-r md:border-b-0 md:pr-10">
              <p className="text-[8px] uppercase tracking-[0.23em] text-[#E3CE8E]">
                Evidence base
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {evidence.map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 px-4 py-4 text-[9px] uppercase tracking-[0.12em] text-white/45"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="py-8 md:pl-10">
              <p className="text-[8px] uppercase tracking-[0.23em] text-[#E3CE8E]">
                Important framing
              </p>

              <p className="mt-7 max-w-xl font-[var(--font-heading)] text-2xl font-light leading-[1.12] tracking-[-0.03em] text-white/82">
                NAD⁺ is not yet a universally accepted frontline
                pharmaceutical treatment.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/45">
                Current evidence supports its role as a metabolic-support and
                mitochondrial-optimisation platform — adjunct to, not a
                replacement for, conventional therapy.
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/book"
          className="mt-12 inline-flex border border-[#C9A227] px-7 py-4 text-[8px] uppercase tracking-[0.23em] text-[#E3CE8E] transition-colors duration-500 hover:bg-[#C9A227] hover:text-[#060F1F]"
        >
          Book a Physician Consultation →
        </Link>
      </section>
    </main>
  );
}
