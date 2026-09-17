import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getActiveTreatments,
  getTreatmentBySlug,
} from "@/data/treatments";
import { protocolDetails } from "@/data/protocolDetails";
import ProtocolExperience from "@/components/protocols/ProtocolExperience";

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

  const detail = protocolDetails[protocol.slug];

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--dl-bone)] text-[var(--dl-ink)]">

      {/* HERO */}
      <section className="relative bg-[var(--dl-navy-deep)] text-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px]">

          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8 md:px-10 lg:px-14">
            <div className="flex items-center gap-4">
              <span className="text-[8px] uppercase tracking-[0.28em] text-white/45">
                DRIPLABS®
              </span>

              <span className="h-px w-10 bg-[var(--dl-gold)]" />

              <span className="text-[8px] uppercase tracking-[0.22em] text-[var(--dl-gold-soft)]">
                {protocol.family}
              </span>
            </div>

            <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              {protocol.number} / 19
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">

            <div className="flex min-h-[650px] flex-col justify-between px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-14 lg:py-20">

              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/35">
                  {protocol.category}
                </p>

                <h1 className="mt-9 max-w-5xl font-[var(--font-heading)] text-[clamp(5rem,10vw,10.5rem)] font-light leading-[0.72] tracking-[-0.075em]">
                  {protocol.name}
                </h1>

                <div className="mt-10 h-px w-14 bg-[var(--dl-gold)]" />

                <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                  {protocol.shortDescription}
                </p>
              </div>

              <Link
                href="/book"
                className="group mt-14 inline-flex w-fit items-center border border-[var(--dl-gold)]/55 px-6 py-4 text-[8px] uppercase tracking-[0.23em] transition-all duration-500 hover:bg-[var(--dl-gold)] hover:text-[var(--dl-navy-deep)]"
              >
                Book a Physician Consultation
                <span className="ml-7 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="relative min-h-[62svh] overflow-hidden lg:min-h-[760px]">
              <Image
                src={
  protocol.slug === "glamour"
    ? "/images/treatments/glamour.png"
    : protocol.slug === "radiance"
      ? "/images/treatments/radiance.png"
      : protocol.slug === "restore"
        ? "/images/treatments/restore.png"
        : "/images/hero/driplabs-hero.jpg"
}
                alt={`${protocol.name} protocol`}
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,15,31,0.72)] via-[rgba(6,15,31,0.1)] to-transparent" />

              <div className="absolute inset-5 border border-white/15 md:inset-8 lg:inset-10" />

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between md:bottom-12 md:left-12 md:right-12">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                    DRIPLABS®
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[var(--dl-gold-soft)]">
                    Physician-directed wellness
                  </p>
                </div>

                <span className="font-[var(--font-heading)] text-5xl font-light leading-none tracking-[-0.05em] text-white/60">
                  {protocol.number}
                </span>
              </div>
            </div>

          </div>

          <div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            <Meta label="Family" value={protocol.family} />
            <Meta label="Category" value={protocol.category} />
            <Meta label="Duration" value={protocol.duration} />
            <Meta label="Evidence" value={formatEvidence(protocol)} />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="driplabs-label text-[var(--dl-slate)]">
                About this protocol
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <p className="font-[var(--font-heading)] text-[clamp(2.4rem,4.2vw,4.8rem)] font-light leading-[0.98] tracking-[-0.045em] text-[var(--dl-navy)]">
                {protocol.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RICH EXPERIENCE */}
      <ProtocolExperience
        protocol={protocol}
        detail={detail}
      />

      {/* STANDARD */}
      <section className="bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">
              <p className="driplabs-label text-[var(--dl-slate)]">
                The DripLabs Standard
              </p>

              <h2 className="mt-8 max-w-6xl font-[var(--font-heading)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-[0.8] tracking-[-0.065em] text-[var(--dl-navy)]">
                The protocol is only
                <br />
                <span className="text-[var(--dl-gold-dark)]">
                  one part of the standard.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="/standard"
                className="group inline-flex items-center border border-[var(--dl-navy)]/25 px-6 py-4 text-[8px] uppercase tracking-[0.23em] text-[var(--dl-navy)] transition-all duration-500 hover:bg-[var(--dl-navy)] hover:text-[var(--dl-bone)]"
              >
                Discover the standard
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
                Next step
              </p>

              <h2 className="mt-8 max-w-6xl font-[var(--font-heading)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-[0.8] tracking-[-0.065em]">
                Begin with a
                <br />
                physician
                <br />
                <span className="text-[var(--dl-gold-soft)]">
                  conversation.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/45">
                Final protocol selection, dosage and administration remain
                subject to physician assessment and the applicable professional
                clinical framework.
              </p>

              <Link
                href="/book"
                className="mt-8 inline-flex items-center bg-[var(--dl-gold)] px-7 py-4 text-[8px] uppercase tracking-[0.24em] text-[var(--dl-navy-deep)] transition-all duration-500 hover:bg-[var(--dl-gold-soft)]"
              >
                Book a consultation
                <span className="ml-7">
                  →
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--dl-navy)]/10 bg-[var(--dl-bone)]">
        <div className="mx-auto max-w-[1680px] px-5 py-7 sm:px-8 md:px-10 lg:px-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-4xl text-[8px] leading-5 text-[var(--dl-slate)]">
              Protocol names describe a wellness focus, not a guaranteed medical
              outcome. Final protocol selection, dosage and administration
              remain subject to physician assessment and the applicable
              professional clinical framework.
            </p>

            <Link
              href="/protocols"
              className="text-[8px] uppercase tracking-[0.2em] text-[var(--dl-navy)]"
            >
              ← All protocols
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}

function Meta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-r border-white/10 px-5 py-6 last:border-r-0 sm:px-6 lg:px-8">
      <p className="text-[7px] uppercase tracking-[0.21em] text-white/30">
        {label}
      </p>

      <p className="mt-2 text-[10px] leading-5 text-white/65">
        {value}
      </p>
    </div>
  );
}

function formatEvidence(protocol: {
  evidenceTier: "established" | "adjunctive" | "emerging";
}) {
  if (protocol.evidenceTier === "established") {
    return "Established";
  }

  if (protocol.evidenceTier === "adjunctive") {
    return "Adjunctive";
  }

  return "Emerging";
}
