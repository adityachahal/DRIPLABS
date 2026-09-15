"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type EvidenceTier = "established" | "adjunctive" | "emerging";

type Protocol = {
  id: string;
  slug: string;
  number: string;
  name: string;
  family: string;
  category: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: number | null;
  image: string;
  benefits: string[];
  evidenceTier: EvidenceTier;
  active: boolean;
};

type ApiResponse = {
  success: boolean;
  count: number;
  data: Protocol[];
};

type Family = {
  slug: string;
  number: string;
  name: string;
  description: string;
  protocols: Protocol[];
};

const familyDescriptions: Record<string, string> = {
  "Skin & Beauty":
    "Antioxidant, collagen and micronutrient support for skin and hair.",

  "Cellular & Longevity":
    "NAD+-pathway, mitochondrial and healthy-ageing nutritional wellness support.",

  "Metabolic & Performance":
    "Energy metabolism, active-lifestyle and post-exertion nutritional support.",

  "Digestive & Systemic":
    "Gut-mucosal amino-acid and micronutrient nutritional support.",

  "Women's Wellness":
    "Iron, folate and B12 nutritional support for women's wellbeing.",

  "Recovery & Immune":
    "Rehydration, immune-nutritional and systemic recovery support.",

  "Cognitive & Neuro":
    "Neuronal energy metabolism and cognitive nutritional support.",

  Musculoskeletal:
    "Bone, muscle and connective-tissue nutritional support.",
};

const evidenceLabels: Record<EvidenceTier, string> = {
  established: "Established positioning",
  adjunctive: "Adjunctive positioning",
  emerging: "Emerging / R&D positioning",
};

export default function WellnessProfile() {
  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [activeFamilySlug, setActiveFamilySlug] = useState("");
  const [activeProtocolSlug, setActiveProtocolSlug] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================================================
     FETCH FROM OUR OWN API
  ========================================================= */

  useEffect(() => {
    let cancelled = false;

    async function loadProtocols() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/protocols", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Protocol API returned ${response.status}`,
          );
        }

        const result = (await response.json()) as ApiResponse;

        if (!result.success || !Array.isArray(result.data)) {
          throw new Error(
            "Protocol API returned an invalid response.",
          );
        }

        if (cancelled) {
          return;
        }

        setProtocols(result.data);

        if (result.data.length > 0) {
          setActiveProtocolSlug(result.data[0].slug);

          setActiveFamilySlug(
            result.data[0].family,
          );
        }
      } catch (err) {
        console.error(
          "Failed to load DRIPLABS protocols:",
          err,
        );

        if (!cancelled) {
          setError(
            "We couldn't load the DRIPLABS protocol system. Please refresh and try again.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadProtocols();

    return () => {
      cancelled = true;
    };
  }, []);

  /* =========================================================
     GROUP PROTOCOLS INTO WELLNESS FAMILIES
  ========================================================= */

  const families = useMemo<Family[]>(() => {
    const grouped = new Map<string, Protocol[]>();

    for (const protocol of protocols) {
      if (!protocol.active) {
        continue;
      }

      const existing =
        grouped.get(protocol.family) ?? [];

      existing.push(protocol);

      grouped.set(protocol.family, existing);
    }

    return Array.from(grouped.entries()).map(
      ([familyName, familyProtocols], index) => ({
        slug: familyName
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/\s+/g, "-"),

        number: String(index + 1).padStart(2, "0"),

        name: familyName,

        description:
          familyDescriptions[familyName] ??
          "A defined wellness focus within the DRIPLABS protocol system.",

        protocols: familyProtocols,
      }),
    );
  }, [protocols]);

  /* =========================================================
     KEEP FAMILY / PROTOCOL SELECTION IN SYNC
  ========================================================= */

  useEffect(() => {
    if (!families.length) {
      return;
    }

    const currentFamily = families.find(
      (family) => family.slug === activeFamilySlug,
    );

    if (!currentFamily) {
      const firstFamily = families[0];

      setActiveFamilySlug(firstFamily.slug);
      setActiveProtocolSlug(
        firstFamily.protocols[0]?.slug ?? "",
      );

      return;
    }

    const protocolStillExists =
      currentFamily.protocols.some(
        (protocol) =>
          protocol.slug === activeProtocolSlug,
      );

    if (!protocolStillExists) {
      setActiveProtocolSlug(
        currentFamily.protocols[0]?.slug ?? "",
      );
    }
  }, [
    families,
    activeFamilySlug,
    activeProtocolSlug,
  ]);

  const activeFamily =
    families.find(
      (family) => family.slug === activeFamilySlug,
    ) ?? families[0];

  const activeProtocol =
    protocols.find(
      (protocol) =>
        protocol.slug === activeProtocolSlug,
    ) ?? activeFamily?.protocols[0];

  /* =========================================================
     FAMILY SELECTION
  ========================================================= */

  const selectFamily = (family: Family) => {
    setActiveFamilySlug(family.slug);

    setActiveProtocolSlug(
      family.protocols[0]?.slug ?? "",
    );
  };

  /* =========================================================
     LOADING STATE
  ========================================================= */

  if (loading) {
    return (
      <section
        id="protocol-system"
        className="min-h-[700px] bg-[#0B1D35] text-[#F5F0E7]"
      >
        <div className="mx-auto max-w-[1680px] px-6 py-32 md:px-10 lg:px-14">
          <div className="grid min-h-[500px] place-items-center">
            <div className="text-center">
              <div className="mx-auto h-px w-14 bg-[#C9A646]" />

              <p className="mt-7 text-[9px] uppercase tracking-[0.28em] text-white/35">
                Loading the DRIPLABS system
              </p>

              <p className="mt-4 text-2xl font-light text-white/70">
                Preparing 19 protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================
     ERROR STATE
  ========================================================= */

  if (error || !families.length) {
    return (
      <section
        id="protocol-system"
        className="bg-[#0B1D35] text-[#F5F0E7]"
      >
        <div className="mx-auto max-w-[1680px] px-6 py-32 md:px-10 lg:px-14">
          <p className="driplabs-label text-white/35">
            The protocol system
          </p>

          <div className="mt-8 max-w-2xl">
            <h2 className="text-5xl font-light leading-[0.88] tracking-[-0.06em]">
              The protocol system is temporarily unavailable.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/45">
              {error ||
                "No active protocols were returned by the API."}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-8 border border-[#C9A646] px-5 py-4 text-[9px] uppercase tracking-[0.22em] text-[#C9A646] transition-colors duration-300 hover:bg-[#C9A646] hover:text-[#0B1D35]"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================
     MAIN UI
  ========================================================= */

  return (
    <section
      id="protocol-system"
      className="overflow-hidden bg-[#0B1D35] text-[#F5F0E7]"
    >
      {/* =======================================================
          INTRO
      ======================================================= */}

      <div className="mx-auto max-w-[1680px] px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="driplabs-label text-white/40">
              The protocol system
            </p>

            <div className="mt-6 h-px w-12 bg-[#C9A646]" />

            <p className="mt-6 max-w-[200px] text-[9px] uppercase leading-5 tracking-[0.18em] text-white/25">
              19 commercial protocols
              <br />
              8 wellness families
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1050px] text-[clamp(4rem,7.8vw,8.8rem)] font-light leading-[0.78] tracking-[-0.075em]"
            >
              Eight wellness
              <br />
              families.
              <br />
              One system.
            </motion.h2>

            <p className="mt-10 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
              Explore the DRIPLABS commercial architecture by
              wellness family, then select an individual protocol
              to understand its intended positioning.
            </p>
          </div>
        </div>
      </div>

      {/* =======================================================
          EXPLORER
      ======================================================= */}

      <div className="border-y border-white/10">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-12">
          {/* ===================================================
              FAMILIES
          =================================================== */}

          <div className="lg:col-span-5">
            {families.map((family) => {
              const selected =
                activeFamily?.slug === family.slug;

              return (
                <button
                  key={family.slug}
                  type="button"
                  onClick={() =>
                    selectFamily(family)
                  }
                  aria-pressed={selected}
                  className="group relative flex min-h-[116px] w-full items-center border-b border-white/10 px-6 py-7 text-left transition-colors duration-500 md:px-10 lg:min-h-[132px] lg:px-14"
                  style={{
                    backgroundColor: selected
                      ? "#F5F0E7"
                      : "#0B1D35",
                  }}
                >
                  {/* Gold selection rail */}
                  <span
                    className="absolute left-0 top-0 h-full w-[3px] bg-[#C9A646]"
                    style={{
                      opacity: selected ? 1 : 0,
                    }}
                  />

                  <div className="flex w-full items-start gap-5">
                    <span
                      className="mt-1 w-6 shrink-0 text-[8px] tracking-[0.25em]"
                      style={{
                        color: selected
                          ? "#C9A646"
                          : "rgba(245,240,231,0.28)",
                      }}
                    >
                      {family.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-6">
                        <span
                          className="text-[clamp(1.45rem,2vw,2.05rem)] font-light leading-none tracking-[-0.035em]"
                          style={{
                            color: selected
                              ? "#0B1D35"
                              : "#F5F0E7",
                          }}
                        >
                          {family.name}
                        </span>

                        <span
                          className="mt-1 shrink-0 text-base transition-transform duration-300 group-hover:translate-x-1"
                          style={{
                            color: selected
                              ? "#C9A646"
                              : "rgba(245,240,231,0.25)",
                          }}
                        >
                          →
                        </span>
                      </div>

                      <p
                        className="mt-3 max-w-[410px] text-[12px] leading-5"
                        style={{
                          color: selected
                            ? "#59616B"
                            : "rgba(245,240,231,0.35)",
                        }}
                      >
                        {family.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                        {family.protocols.map(
                          (protocol) => (
                            <span
                              key={protocol.slug}
                              className="text-[7px] uppercase tracking-[0.17em]"
                              style={{
                                color: selected
                                  ? "#99958C"
                                  : "rgba(245,240,231,0.22)",
                              }}
                            >
                              {protocol.name}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ===================================================
              DETAIL PANEL
          =================================================== */}

          <div className="lg:col-span-7 lg:border-l lg:border-white/10">
            <div className="min-h-full px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFamily.slug}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="driplabs-label text-white/35">
                      {activeFamily.number} / Family
                    </p>

                    <p className="driplabs-label text-[#C9A646]">
                      {activeFamily.protocols.length}{" "}
                      {activeFamily.protocols.length ===
                      1
                        ? "protocol"
                        : "protocols"}
                    </p>
                  </div>

                  <h3 className="mt-8 max-w-3xl text-[clamp(3.1rem,5vw,5.8rem)] font-light leading-[0.83] tracking-[-0.065em]">
                    {activeFamily.name}
                  </h3>

                  <p className="mt-7 max-w-xl text-sm leading-6 text-white/45">
                    {activeFamily.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* ===============================================
                  PROTOCOL LIST
              =============================================== */}

              <div className="mt-14 border-t border-white/10">
                {activeFamily.protocols.map(
                  (protocol, index) => {
                    const selected =
                      activeProtocol?.slug ===
                      protocol.slug;

                    return (
                      <button
                        key={protocol.slug}
                        type="button"
                        onClick={() =>
                          setActiveProtocolSlug(
                            protocol.slug,
                          )
                        }
                        aria-pressed={selected}
                        className="group flex w-full items-center justify-between border-b border-white/10 py-5 text-left"
                      >
                        <div className="flex items-center gap-5">
                          <span className="text-[8px] tracking-[0.22em] text-[#C9A646]">
                            {String(index + 1).padStart(
                              2,
                              "0",
                            )}
                          </span>

                          <span
                            className="text-lg font-light tracking-[-0.025em] transition-colors duration-300 md:text-xl"
                            style={{
                              color: selected
                                ? "#F5F0E7"
                                : "rgba(245,240,231,0.42)",
                            }}
                          >
                            {protocol.name}
                          </span>
                        </div>

                        <span
                          className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                          style={{
                            color: selected
                              ? "#C9A646"
                              : "rgba(245,240,231,0.22)",
                          }}
                        >
                          →
                        </span>
                      </button>
                    );
                  },
                )}
              </div>

              {/* ===============================================
                  PROTOCOL DETAIL
              =============================================== */}

              {activeProtocol && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProtocol.slug}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-10 bg-[#122845]"
                  >
                    <div className="p-7 md:p-9 lg:p-10">
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="driplabs-label text-white/35">
                          Selected protocol
                        </p>

                        <p className="text-[8px] uppercase tracking-[0.18em] text-[#C9A646]">
                          {
                            evidenceLabels[
                              activeProtocol
                                .evidenceTier
                            ]
                          }
                        </p>
                      </div>

                      {/* Name */}
                      <h4 className="mt-6 text-[clamp(2.8rem,4vw,4.8rem)] font-light leading-[0.85] tracking-[-0.06em]">
                        {activeProtocol.name}
                      </h4>

                      <p className="mt-3 text-[9px] uppercase tracking-[0.19em] text-white/30">
                        {activeProtocol.category}
                      </p>

                      {/* Description */}
                      <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55">
                        {activeProtocol.description}
                      </p>

                      {/* Benefits */}
                      {activeProtocol.benefits
                        .length > 0 && (
                        <div className="mt-8 grid gap-2 sm:grid-cols-2">
                          {activeProtocol.benefits.map(
                            (benefit) => (
                              <div
                                key={benefit}
                                className="border-t border-white/10 pt-3"
                              >
                                <p className="text-[8px] uppercase leading-5 tracking-[0.15em] text-white/35">
                                  {benefit}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      )}

                      {/* Meta */}
                      <div className="mt-9 grid border-t border-white/10 pt-5 sm:grid-cols-2">
                        <div>
                          <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                            Duration
                          </p>

                          <p className="mt-2 text-sm text-white/65">
                            {activeProtocol.duration}
                          </p>
                        </div>

                        <div className="mt-5 sm:mt-0 sm:border-l sm:border-white/10 sm:pl-6">
                          <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                            Family
                          </p>

                          <p className="mt-2 text-sm text-white/65">
                            {activeProtocol.family}
                          </p>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                       <a
  href={`/protocols/${activeProtocol.slug}`}
  className="group flex items-center justify-between bg-[#C9A646] px-5 py-4 text-[9px] uppercase tracking-[0.2em] text-[#0B1D35] transition-all duration-300 hover:bg-[#E5D39A]"
>
  <span>
    Explore this protocol
  </span>

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

                        <a
                          href="#faq"
                          className="group flex items-center justify-between border border-white/15 px-5 py-4 text-[9px] uppercase tracking-[0.2em] text-[#F5F0E7] transition-colors duration-300 hover:border-[#C9A646]"
                        >
                          <span>
                            Safety & FAQs
                          </span>

                          <span className="text-white/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#C9A646]">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          FOOTER NOTE
      ======================================================= */}

      <div className="mx-auto max-w-[1680px] px-6 py-8 md:px-10 lg:px-14">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-start md:justify-between">
          <p className="max-w-4xl text-[8px] leading-5 text-white/25">
            Protocol names describe a wellness focus rather
            than a guaranteed medical outcome. Final protocol
            selection, dosage and administration remain subject
            to physician assessment and the applicable
            professional clinical framework.
          </p>

          <p className="shrink-0 text-[8px] uppercase tracking-[0.2em] text-white/25">
            {protocols.length} protocols ·{" "}
            {families.length} families
          </p>
        </div>
      </div>
    </section>
  );
}