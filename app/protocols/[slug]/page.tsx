import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import {
  getActiveTreatments,
  getTreatmentBySlug,
} from "@/data/treatments";

import { protocolDetails } from "@/data/protocolDetails";

import Navbar from "@/components/navigation/Navbar";

/* =========================================================
   DRIPLABS ELECTRIC BLUE DESIGN SYSTEM
========================================================= */

const COLORS = {
  midnight: "#020812",
  deepBlue: "#06152B",
  oceanBlue: "#08203A",
  oceanDeep: "#01050B",

  electric: "#0066FF",
  electricBright: "#1683FF",
  electricSoft: "#4D9BFF",
  ice: "#8CCBFF",

  white: "#F7FAFF",
  whiteSoft: "rgba(247,250,255,0.68)",
  whiteMuted: "rgba(247,250,255,0.42)",
  whiteFaint: "rgba(247,250,255,0.14)",
};

/* =========================================================
   PARAMS
========================================================= */

type ProtocolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return getActiveTreatments().map((protocol) => ({
    slug: protocol.slug,
  }));
}

export const dynamicParams = true;

/* =========================================================
   PAGE
========================================================= */

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
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.midnight,
        color: COLORS.white,
      }}
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          01 — CINEMATIC HERO
      ===================================================== */}

      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #01050B 0%, #020D1D 48%, #06152B 100%)",
        }}
      >
        {/* Electric blue ambient glow */}

        <div
          className="pointer-events-none absolute -left-40 top-24 h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: COLORS.electric,
            opacity: 0.16,
          }}
        />

        <div
          className="pointer-events-none absolute right-[-180px] top-[-120px] h-[600px] w-[600px] rounded-full blur-[160px]"
          style={{
            background: COLORS.electricBright,
            opacity: 0.12,
          }}
        />

        <div className="relative mx-auto max-w-[1800px]">
          {/* -------------------------------------------------
              TOP META
          ------------------------------------------------- */}

          <div
            className="flex items-center justify-between border-b px-5 py-5 sm:px-8 md:px-10 lg:px-14"
            style={{
              borderColor: COLORS.whiteFaint,
            }}
          >
            <div className="flex items-center gap-4">
              <span
                className="text-[8px] uppercase tracking-[0.32em]"
                style={{
                  color: COLORS.whiteMuted,
                }}
              >
                DRIPLABS®
              </span>

              <span
                className="h-px w-8"
                style={{
                  background: COLORS.electric,
                }}
              />

              <span
                className="text-[8px] uppercase tracking-[0.24em]"
                style={{
                  color: COLORS.ice,
                }}
              >
                {protocol.family}
              </span>
            </div>

            <span
              className="text-[8px] uppercase tracking-[0.22em]"
              style={{
                color: COLORS.whiteMuted,
              }}
            >
              {String(protocol.number).padStart(2, "0")} / 19
            </span>
          </div>

          {/* -------------------------------------------------
              HERO GRID
          ------------------------------------------------- */}

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* =================================================
                LEFT — EDITORIAL CONTENT
            ================================================= */}

            <div className="flex min-h-[620px] flex-col justify-between px-5 py-14 sm:px-8 md:min-h-[700px] md:px-10 md:py-20 lg:px-14 lg:py-24">
              <div>
                {/* Category */}

                <p
                  className="text-[8px] uppercase tracking-[0.3em]"
                  style={{
                    color: COLORS.whiteMuted,
                  }}
                >
                  {protocol.category}
                </p>

                {/* Main heading */}

                <h1
                  className="mt-8 max-w-[850px] font-[var(--font-heading)] text-[clamp(4rem,7.8vw,9rem)] font-light leading-[0.82] tracking-[-0.065em]"
                  style={{
                    color: COLORS.white,
                  }}
                >
                  {protocol.name}
                </h1>

                {/* Electric blue divider */}

                <div
                  className="mt-10 h-px w-14"
                  style={{
                    background: COLORS.electric,
                  }}
                />

                {/* Description */}

                <p
                  className="mt-8 max-w-[520px] text-[13px] leading-7 md:text-[14px] md:leading-7"
                  style={{
                    color: COLORS.whiteSoft,
                  }}
                >
                  {protocol.shortDescription}
                </p>
              </div>

              {/* Hero metadata */}

              <div className="mt-14">
                <div
                  className="mb-7 h-px w-full"
                  style={{
                    background: COLORS.whiteFaint,
                  }}
                />

                <div className="flex flex-wrap gap-x-10 gap-y-5">
                  <HeroMeta
                    label="Duration"
                    value={protocol.duration}
                  />

                  <HeroMeta
                    label="Evidence"
                    value={formatEvidence(protocol)}
                  />

                  <HeroMeta
                    label="Category"
                    value={protocol.category}
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT — HERO IMAGE
            ================================================= */}

            <div
              className="group relative min-h-[520px] overflow-hidden lg:min-h-[700px]"
              style={{
                background: COLORS.deepBlue,
              }}
            >
              <Image
                src={
                  protocol.image ||
                  "/images/hero/driplabs-hero.jpg"
                }
                alt={`${protocol.name} protocol`}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
              />

              {/* Dark cinematic grade */}

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(2,8,18,0.04) 0%, rgba(2,8,18,0.12) 42%, rgba(2,8,18,0.94) 100%)",
                }}
              />

              {/* Electric blue image tint */}

              <div
                className="absolute inset-0 mix-blend-color"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,102,255,0.14), transparent 65%)",
                }}
              />

              {/* Subtle blue light */}

              <div
                className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full blur-[120px]"
                style={{
                  background: COLORS.electric,
                  opacity: 0.12,
                }}
              />

              {/* Inner frame */}

              <div
                className="absolute inset-5 md:inset-8 lg:inset-10"
                style={{
                  border: `1px solid ${COLORS.whiteFaint}`,
                }}
              />

              {/* Image bottom information */}

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between md:bottom-10 md:left-10 md:right-10">
                <div>
                  <p
                    className="text-[7px] uppercase tracking-[0.28em]"
                    style={{
                      color: COLORS.whiteMuted,
                    }}
                  >
                    DRIPLABS®
                  </p>

                  <p
                    className="mt-2 text-[7px] uppercase tracking-[0.25em]"
                    style={{
                      color: COLORS.ice,
                    }}
                  >
                    Physician-directed wellness
                  </p>
                </div>

                <span
                  className="font-[var(--font-heading)] text-5xl font-light leading-none tracking-[-0.04em]"
                  style={{
                    color: "rgba(247,250,255,0.48)",
                  }}
                >
                  {String(protocol.number).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — PROTOCOL PROFILE
      ===================================================== */}

      <section
        style={{
          background: COLORS.deepBlue,
        }}
      >
        <div className="mx-auto max-w-[1800px]">
          <div
            className="grid border-t sm:grid-cols-2 lg:grid-cols-4"
            style={{
              borderColor: COLORS.whiteFaint,
            }}
          >
            <ProfileItem
              number="01"
              label="Family"
              value={protocol.family}
            />

            <ProfileItem
              number="02"
              label="Category"
              value={protocol.category}
            />

            <ProfileItem
              number="03"
              label="Duration"
              value={protocol.duration}
            />

            <ProfileItem
              number="04"
              label="Evidence"
              value={formatEvidence(protocol)}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — INTRODUCTION
      ===================================================== */}

      <section
        style={{
          background: COLORS.midnight,
        }}
      >
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {/* Label */}

            <div className="md:col-span-3">
              <SectionLabel>
                About this protocol
              </SectionLabel>

              <div
                className="mt-7 h-px w-10"
                style={{
                  background: COLORS.electric,
                }}
              />
            </div>

            {/* Description */}

            <div className="md:col-span-8 md:col-start-5">
              <p
                className="max-w-[1050px] font-[var(--font-heading)] text-[clamp(2.4rem,4.4vw,5rem)] font-light leading-[0.94] tracking-[-0.05em]"
                style={{
                  color: COLORS.white,
                }}
              >
                {protocol.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — TARGET FOCUS
      ===================================================== */}

      {detail && (
        <section
          style={{
            background: COLORS.oceanBlue,
          }}
        >
          <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
              {/* Left */}

              <div className="lg:col-span-3">
                <SectionLabel>
                  Target focus
                </SectionLabel>

                <div
                  className="mt-7 h-px w-10"
                  style={{
                    background: COLORS.electric,
                  }}
                />

                <p
                  className="mt-7 max-w-xs text-[10px] uppercase leading-6 tracking-[0.16em]"
                  style={{
                    color: COLORS.whiteMuted,
                  }}
                >
                  {detail.specialty}
                </p>
              </div>

              {/* Focus items */}

              <div className="lg:col-span-8 lg:col-start-5">
                <div
                  className="grid border-t sm:grid-cols-2"
                  style={{
                    borderColor: COLORS.whiteFaint,
                  }}
                >
                  {detail.focus.map((focus, index) => (
                    <div
                      key={focus}
                      className="border-b py-8 sm:px-6 md:py-10"
                      style={{
                        borderColor: COLORS.whiteFaint,
                      }}
                    >
                      <span
                        className="text-[8px] tracking-[0.22em]"
                        style={{
                          color: COLORS.electric,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className="mt-4 font-[var(--font-heading)] text-[clamp(1.6rem,2.5vw,2.4rem)] font-light tracking-[-0.035em]"
                        style={{
                          color: COLORS.white,
                        }}
                      >
                        {focus}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          05 — THE RATIONALE
      ===================================================== */}

      {detail && (
        <section
          style={{
            background: COLORS.midnight,
          }}
        >
          <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionLabel>
                  The rationale
                </SectionLabel>

                <p
                  className="mt-6 text-[10px] uppercase leading-6 tracking-[0.18em]"
                  style={{
                    color: COLORS.whiteMuted,
                  }}
                >
                  Why these components are considered
                </p>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p
                  className="font-[var(--font-heading)] text-[clamp(2.1rem,3.6vw,4.2rem)] font-light leading-[0.98] tracking-[-0.045em]"
                  style={{
                    color: COLORS.white,
                  }}
                >
                  {detail.rationale}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          06 — WHAT'S INSIDE
      ===================================================== */}

      {detail && detail.ingredients.length > 0 && (
        <section
          style={{
            background: COLORS.deepBlue,
          }}
        >
          <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-12">
              {/* Header */}

              <div className="lg:col-span-4">
                <SectionLabel>
                  What's inside
                </SectionLabel>

                <div
                  className="mt-7 h-px w-10"
                  style={{
                    background: COLORS.electric,
                  }}
                />

                <p
                  className="mt-7 max-w-sm text-[13px] leading-7"
                  style={{
                    color: COLORS.whiteMuted,
                  }}
                >
                  The protocol composition is considered as part of the
                  physician-led wellness framework.
                </p>
              </div>

              {/* Ingredients */}

              <div className="lg:col-span-7 lg:col-start-6">
                <div
                  className="border-t"
                  style={{
                    borderColor: COLORS.whiteFaint,
                  }}
                >
                  {detail.ingredients.map((item, index) => (
                    <div
                      key={item.name}
                      className="group border-b py-6 md:py-8"
                      style={{
                        borderColor: COLORS.whiteFaint,
                      }}
                    >
                      <div className="grid gap-4 md:grid-cols-[70px_1fr_auto] md:items-start">
                        {/* Number */}

                        <span
                          className="text-[8px] tracking-[0.22em]"
                          style={{
                            color: COLORS.electric,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Content */}

                        <div>
                          <h3
                            className="font-[var(--font-heading)] text-[clamp(1.35rem,2.2vw,2rem)] font-light tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#8CCBFF]"
                            style={{
                              color: COLORS.white,
                            }}
                          >
                            {item.name}
                          </h3>

                          <p
                            className="mt-3 max-w-2xl text-[12px] leading-6"
                            style={{
                              color: COLORS.whiteMuted,
                            }}
                          >
                            {item.role}
                          </p>
                        </div>

                        {/* Tier */}

                        <span
                          className="text-[8px] uppercase tracking-[0.2em]"
                          style={{
                            color: COLORS.ice,
                          }}
                        >
                          {item.tier}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          07 — EVIDENCE REALITY
      ===================================================== */}

      {detail && (
        <section
          style={{
            background:
              "linear-gradient(135deg, #06152B 0%, #0A2442 100%)",
          }}
        >
          <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionLabel>
                  Evidence reality
                </SectionLabel>

                <div
                  className="mt-7 h-px w-10"
                  style={{
                    background: COLORS.electric,
                  }}
                />
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p
                  className="max-w-3xl text-[15px] leading-8 md:text-[17px] md:leading-9"
                  style={{
                    color: COLORS.whiteSoft,
                  }}
                >
                  {detail.evidenceReality}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          08 — PROTOCOL JOURNEY
      ===================================================== */}

      {detail && (
        <section
          style={{
            background: COLORS.oceanDeep,
          }}
        >
          <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-12">
              {/* Heading */}

              <div className="lg:col-span-5">
                <SectionLabel>
                  Your protocol journey
                </SectionLabel>

                <div
                  className="mt-7 h-px w-10"
                  style={{
                    background: COLORS.electric,
                  }}
                />

                <h2
                  className="mt-9 max-w-xl font-[var(--font-heading)] text-[clamp(3rem,5.8vw,6.5rem)] font-light leading-[0.86] tracking-[-0.06em]"
                  style={{
                    color: COLORS.white,
                  }}
                >
                  Before.
                  <br />
                  During.
                  <br />
                  After.
                </h2>
              </div>

              {/* Timeline */}

              <div className="lg:col-span-7">
                <TimelineRow
                  number="01"
                  title="Baseline"
                  text={detail.baseline}
                />

                <TimelineRow
                  number="02"
                  title="Treatment course"
                  text={detail.session}
                />

                <TimelineRow
                  number="03"
                  title="Suggested retest"
                  text={detail.retest}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          09 — STANDARD
      ===================================================== */}

      <section
        style={{
          background: COLORS.midnight,
        }}
      >
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel>
                The DRIPLABS Standard
              </SectionLabel>

              <div
                className="mt-7 h-px w-10"
                style={{
                  background: COLORS.electric,
                }}
              />

              <h2
                className="mt-9 max-w-[1050px] font-[var(--font-heading)] text-[clamp(3.2rem,6.3vw,7.2rem)] font-light leading-[0.84] tracking-[-0.06em]"
                style={{
                  color: COLORS.white,
                }}
              >
                The protocol is only
                <br />
                <span
                  style={{
                    color: COLORS.electricSoft,
                  }}
                >
                  one part of the standard.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="/standard"
                className="group inline-flex items-center border px-6 py-4 text-[8px] uppercase tracking-[0.23em] transition-all duration-500 hover:border-[#0066FF] hover:bg-[#0066FF]"
                style={{
                  borderColor: "rgba(247,250,255,0.25)",
                  color: COLORS.white,
                }}
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

      {/* =====================================================
          10 — FINAL CTA
      ===================================================== */}

      <section
        style={{
          background:
            "linear-gradient(135deg, #01050B 0%, #06152B 55%, #08203A 100%)",
        }}
      >
        <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 md:px-10 md:py-36 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
            {/* Heading */}

            <div className="lg:col-span-8">
              <SectionLabel>
                Next step
              </SectionLabel>

              <div
                className="mt-7 h-px w-10"
                style={{
                  background: COLORS.electric,
                }}
              />

              <h2
                className="mt-9 max-w-[1000px] font-[var(--font-heading)] text-[clamp(3.5rem,6.7vw,7.5rem)] font-light leading-[0.84] tracking-[-0.065em]"
                style={{
                  color: COLORS.white,
                }}
              >
                Begin with a
                <br />
                physician
                <br />
                <span
                  style={{
                    color: COLORS.electricSoft,
                  }}
                >
                  conversation.
                </span>
              </h2>
            </div>

            {/* CTA */}

            <div className="lg:col-span-4">
              <p
                className="max-w-md text-[13px] leading-7"
                style={{
                  color: COLORS.whiteMuted,
                }}
              >
                Final protocol selection, dosage and administration remain
                subject to physician assessment and the applicable professional
                clinical framework.
              </p>

              <Link
                href="/book"
                className="group mt-8 inline-flex items-center px-7 py-4 text-[8px] uppercase tracking-[0.24em] transition-all duration-500 hover:bg-[#1683FF]"
                style={{
                  background: COLORS.electric,
                  color: COLORS.white,
                }}
              >
                Book a consultation

                <span className="ml-7 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          11 — FOOTER
      ===================================================== */}

      <footer
        style={{
          background: "#010409",
          borderTop: `1px solid ${COLORS.whiteFaint}`,
        }}
      >
        <div className="mx-auto max-w-[1800px] px-5 py-8 sm:px-8 md:px-10 lg:px-14">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p
              className="max-w-4xl text-[8px] leading-5"
              style={{
                color: COLORS.whiteMuted,
              }}
            >
              Protocol names describe a wellness focus, not a guaranteed medical
              outcome. Final protocol selection, dosage and administration
              remain subject to physician assessment and the applicable
              professional clinical framework.
            </p>

            <Link
              href="/protocols"
              className="shrink-0 text-[8px] uppercase tracking-[0.22em] transition-colors duration-300 hover:text-[#1683FF]"
              style={{
                color: COLORS.ice,
              }}
            >
              ← All protocols
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p
      className="text-[8px] uppercase tracking-[0.3em]"
      style={{
        color: COLORS.electric,
      }}
    >
      {children}
    </p>
  );
}

/* =========================================================
   HERO META
========================================================= */

function HeroMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p
        className="text-[7px] uppercase tracking-[0.23em]"
        style={{
          color: COLORS.whiteMuted,
        }}
      >
        {label}
      </p>

      <p
        className="mt-2 max-w-[180px] text-[10px] leading-5"
        style={{
          color: COLORS.white,
        }}
      >
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   PROFILE ITEM
========================================================= */

function ProfileItem({
  number,
  label,
  value,
}: {
  number: string;
  label: string;
  value: string;
}) {
  return (
    <div
      className="border-r px-5 py-7 last:border-r-0 sm:px-8 lg:px-10 lg:py-8"
      style={{
        borderColor: COLORS.whiteFaint,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-[7px] tracking-[0.22em]"
          style={{
            color: COLORS.electric,
          }}
        >
          {number}
        </span>

        <span
          className="text-[7px] uppercase tracking-[0.22em]"
          style={{
            color: COLORS.whiteMuted,
          }}
        >
          {label}
        </span>
      </div>

      <p
        className="mt-5 max-w-[230px] font-[var(--font-heading)] text-[18px] font-light leading-6 tracking-[-0.02em]"
        style={{
          color: COLORS.white,
        }}
      >
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   TIMELINE
========================================================= */

function TimelineRow({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="border-t py-8 md:py-10"
      style={{
        borderColor: COLORS.whiteFaint,
      }}
    >
      <div className="grid gap-5 md:grid-cols-[70px_190px_1fr] md:items-start">
        <span
          className="text-[8px] tracking-[0.22em]"
          style={{
            color: COLORS.electric,
          }}
        >
          {number}
        </span>

        <p
          className="font-[var(--font-heading)] text-[clamp(1.5rem,2.2vw,2.1rem)] font-light tracking-[-0.03em]"
          style={{
            color: COLORS.white,
          }}
        >
          {title}
        </p>

        <p
          className="max-w-xl text-[13px] leading-7"
          style={{
            color: COLORS.whiteMuted,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   EVIDENCE
========================================================= */

function formatEvidence(protocol: {
  evidenceTier:
    | "established"
    | "adjunctive"
    | "emerging";
}) {
  if (protocol.evidenceTier === "established") {
    return "Established";
  }

  if (protocol.evidenceTier === "adjunctive") {
    return "Adjunctive";
  }

  return "Emerging";
}