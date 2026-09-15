import { notFound } from "next/navigation";

import {
  getActiveTreatments,
  getTreatmentBySlug,
} from "@/data/treatments";

type ProtocolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getActiveTreatments().map((protocol) => ({
    slug: protocol.slug,
  }));
}

export default async function ProtocolPage({
  params,
}: ProtocolPageProps) {
  const { slug } = await params;

  const protocol = getTreatmentBySlug(slug);

  if (!protocol) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F0E7] text-[#0B1D35]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[80vh] overflow-hidden bg-[#0B1D35] text-[#F5F0E7]">
        <div className="mx-auto flex min-h-[80vh] max-w-[1680px] flex-col justify-between px-6 pb-10 pt-32 md:px-10 md:pb-14 lg:px-14">
          {/* Top metadata */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.28em] text-white/40">
                DRIPLABS
              </p>

              <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-[#C9A646]">
                {protocol.family}
              </p>
            </div>

            <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              {protocol.number}
            </p>
          </div>

          {/* Hero content */}
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                {protocol.category}
              </p>

              <h1 className="mt-7 max-w-[1000px] text-[clamp(5rem,10vw,12rem)] font-light leading-[0.76] tracking-[-0.08em]">
                {protocol.name}
              </h1>
            </div>

            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/55 md:text-base">
                {protocol.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN DESCRIPTION
      ===================================================== */}
      <section className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          {/* Description */}
          <div className="md:col-span-7">
            <p className="driplabs-label text-[#77736A]">
              About this protocol
            </p>

            <p className="mt-8 max-w-3xl text-2xl font-light leading-[1.35] tracking-[-0.025em] md:text-4xl">
              {protocol.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="md:col-span-4 md:col-start-9">
            <div className="border-t border-[#0B1D35]/10">
              <MetaRow
                label="Wellness family"
                value={protocol.family}
              />

              <MetaRow
                label="Category"
                value={protocol.category}
              />

              <MetaRow
                label="Duration"
                value={protocol.duration}
              />

              <MetaRow
                label="Evidence positioning"
                value={formatEvidence(
                  protocol.evidenceTier,
                )}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INCLUDED FOCUS
      ===================================================== */}
      <section className="border-y border-[#0B1D35]/10 bg-[#EEE8DC]">
        <div className="mx-auto max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="driplabs-label text-[#77736A]">
                Included focus
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <div className="grid sm:grid-cols-2">
                {protocol.benefits.map(
                  (benefit, index) => (
                    <div
                      key={benefit}
                      className="border-t border-[#0B1D35]/10 px-0 py-7 sm:px-6 md:py-9"
                    >
                      <div className="flex items-start gap-5">
                        <span className="text-[8px] tracking-[0.2em] text-[#C9A646]">
                          {String(index + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <p className="max-w-sm text-lg font-light tracking-[-0.025em]">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROTOCOL INFORMATION
      ===================================================== */}
      <section className="bg-[#F5F0E7]">
        <div className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="driplabs-label text-[#77736A]">
                Protocol information
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <div className="grid border-t border-[#0B1D35]/10 sm:grid-cols-2">
                <InfoBlock
                  label="Protocol"
                  value={protocol.name}
                />

                <InfoBlock
                  label="Wellness family"
                  value={protocol.family}
                />

                <InfoBlock
                  label="Category"
                  value={protocol.category}
                />

                <InfoBlock
                  label="Duration"
                  value={protocol.duration}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATION CTA
      ===================================================== */}
      <section className="bg-[#0B1D35] text-[#F5F0E7]">
        <div className="mx-auto max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="driplabs-label text-white/35">
                Next step
              </p>

              <h2 className="mt-6 max-w-4xl text-[clamp(3.5rem,6.5vw,7.5rem)] font-light leading-[0.8] tracking-[-0.07em]">
                Start with a conversation about whether{" "}
                {protocol.name} is right for you.
              </h2>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <p className="text-sm leading-7 text-white/45">
                Protocol selection, dosage and
                administration remain subject to physician
                assessment and the applicable professional
                clinical framework.
              </p>

              <a
                href="/book"
                className="mt-8 inline-flex items-center justify-between bg-[#C9A646] px-6 py-4 text-[9px] uppercase tracking-[0.22em] text-[#0B1D35] transition-colors duration-300 hover:bg-[#E5D39A]"
              >
                <span>Book a consultation</span>

                <span className="ml-6">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER NOTE
      ===================================================== */}
      <div className="border-t border-[#0B1D35]/10 bg-[#F5F0E7]">
        <div className="mx-auto max-w-[1680px] px-6 py-6 md:px-10 lg:px-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-[8px] leading-5 text-[#99958C]">
              Protocol names describe a wellness focus,
              not a guaranteed medical outcome. Final
              protocol selection, dosage and administration
              remain subject to physician assessment and the
              applicable professional clinical framework.
            </p>

            <a
              href="/"
              className="text-[8px] uppercase tracking-[0.2em] text-[#77736A]"
            >
              Back to DRIPLABS
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   METADATA ROW
========================================================= */

function MetaRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-[#0B1D35]/10 py-5">
      <p className="text-[8px] uppercase tracking-[0.2em] text-[#99958C]">
        {label}
      </p>

      <p className="mt-2 text-sm text-[#4D535D]">
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   INFO BLOCK
========================================================= */

function InfoBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-[#0B1D35]/10 py-8 sm:px-6 md:py-10">
      <p className="text-[8px] uppercase tracking-[0.2em] text-[#99958C]">
        {label}
      </p>

      <p className="mt-3 text-xl font-light tracking-[-0.025em] text-[#0B1D35] md:text-2xl">
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   EVIDENCE FORMATTER
========================================================= */

function formatEvidence(
  tier: "established" | "adjunctive" | "emerging",
) {
  if (tier === "established") {
    return "Established positioning";
  }

  if (tier === "adjunctive") {
    return "Adjunctive positioning";
  }

  return "Emerging / R&D positioning";
}