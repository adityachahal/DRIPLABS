"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Protocol = {
  id?: string;
  slug?: string;
  number?: number | string;
  name: string;
  family?: string;
  category?: string;
  shortDescription?: string;
  description?: string;
  duration?: string;
  price?: number | string | null;
  evidenceTier?: string | null;
  active?: boolean;
};

const fallbackFamilies = [
  "Skin & Beauty",
  "Cellular & Longevity",
  "Metabolic & Performance",
  "Digestive & Systemic",
  "Women's Wellness",
  "Recovery & Immune",
  "Cognitive & Neuro",
  "Musculoskeletal",
];

export default function ProtocolObservatory() {
  const reducedMotion = useReducedMotion();

  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [activeFamily, setActiveFamily] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadProtocols() {
      try {
        const response = await fetch("/api/protocols", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load protocols.");
        }

        const payload = await response.json();

        const incoming = Array.isArray(payload?.data)
          ? payload.data
          : [];

        if (mounted) {
          setProtocols(
            incoming.filter(
              (item: Protocol) => item && item.name,
            ),
          );
        }
      } catch {
        if (mounted) {
          setProtocols([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProtocols();

    return () => {
      mounted = false;
    };
  }, []);

  const families = useMemo(() => {
    const discovered = protocols
      .map((protocol) => protocol.family)
      .filter(
        (family): family is string =>
          Boolean(family && family.trim()),
      );

    return [
      "All",
      ...Array.from(new Set([...discovered, ...fallbackFamilies])),
    ];
  }, [protocols]);

  const filteredProtocols = useMemo(() => {
    if (activeFamily === "All") {
      return protocols;
    }

    return protocols.filter(
      (protocol) => protocol.family === activeFamily,
    );
  }, [activeFamily, protocols]);

  return (
    <section
      id="protocol-system"
      className="relative overflow-hidden bg-[#0B1B33] text-[#F7F4EC]"
    >
      {/* ======================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[12%] h-[30rem] w-[30rem] rounded-full bg-[#C9A227]/[0.045] blur-[120px]" />

        <div className="absolute left-[-15%] bottom-[8%] h-[26rem] w-[26rem] rounded-full bg-[#E3CE8E]/[0.025] blur-[110px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,transparent_0%,rgba(6,15,31,0.12)_62%,rgba(6,15,31,0.4)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-24 md:px-10 md:py-36 lg:px-14">

        {/* ====================================================
            INTRO
        ==================================================== */}

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#C9A227]" />

              <p className="text-[8px] uppercase tracking-[0.28em] text-[#E3CE8E] md:text-[9px]">
                The Protocol System
              </p>
            </div>

            <p className="mt-7 max-w-[230px] text-xs leading-6 text-white/40">
              Eight wellness families. Nineteen physician-directed protocols.
              Explore the system before choosing your path.
            </p>
          </motion.div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.h2
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-6xl font-[var(--font-heading)] text-[clamp(3.25rem,7vw,7.8rem)] font-light leading-[0.84] tracking-[-0.065em]"
            >
              Not a treatment menu.
              <br />
              A wellness system.
            </motion.h2>

            <motion.p
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-2xl text-sm leading-7 text-white/55"
            >
              Protocols are selected under physician supervision according to
              the individual's context. Protocol names describe a wellness
              focus, not a medical claim.
            </motion.p>
          </div>
        </div>

        {/* ====================================================
            FAMILY FILTER
        ==================================================== */}

        <div className="mt-16 overflow-x-auto border-y border-white/10 py-4 md:mt-24">
          <div className="flex min-w-max items-center gap-3">
            {families.map((family) => {
              const active = family === activeFamily;

              return (
                <button
                  key={family}
                  type="button"
                  onClick={() => setActiveFamily(family)}
                  className={[
                    "border px-4 py-2.5 text-[8px] uppercase tracking-[0.18em]",
                    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    active
                      ? "border-[#C9A227] bg-[#C9A227] text-[#0B1B33]"
                      : "border-white/15 text-white/50 hover:border-white/35 hover:text-white",
                  ].join(" ")}
                >
                  {family}
                </button>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            COUNT
        ==================================================== */}

        <div className="mt-7 flex items-center justify-between">
          <p className="text-[8px] uppercase tracking-[0.23em] text-white/30">
            {loading
              ? "Loading protocols"
              : `${filteredProtocols.length} protocols`}
          </p>

          <p className="text-[8px] uppercase tracking-[0.23em] text-[#C9A227]">
            Physician-directed
          </p>
        </div>

        {/* ====================================================
            PROTOCOL GRID
        ==================================================== */}

        <div className="mt-6 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {loading &&
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="min-h-[290px] border-b border-white/10 p-7 md:p-8"
              >
                <div className="h-2 w-10 animate-pulse bg-white/10" />
                <div className="mt-20 h-7 w-2/3 animate-pulse bg-white/10" />
                <div className="mt-5 h-2 w-full animate-pulse bg-white/10" />
                <div className="mt-2 h-2 w-4/5 animate-pulse bg-white/10" />
              </div>
            ))}

          {!loading &&
            filteredProtocols.map((protocol, index) => (
              <motion.a
                key={
                  protocol.id ||
                  protocol.slug ||
                  `${protocol.name}-${index}`
                }
                href={
                  protocol.slug
                    ? `/protocols/${protocol.slug}`
                    : "/protocols"
                }
                initial={
                  reducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.75,
                  delay: reducedMotion
                    ? 0
                    : Math.min(index * 0.035, 0.24),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group relative min-h-[300px]
                  border-b border-white/10
                  p-7 md:min-h-[330px] md:p-8
                "
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-[8px] tracking-[0.22em] text-[#C9A227]">
                    {String(
                      protocol.number ?? index + 1,
                    ).padStart(2, "0")}
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/25 transition-colors duration-500 group-hover:text-[#E3CE8E]">
                    {protocol.family || "DRIPLABS"}
                  </span>
                </div>

                <div className="absolute inset-x-7 bottom-7 md:inset-x-8 md:bottom-8">
                  <h3 className="max-w-[90%] font-[var(--font-heading)] text-[clamp(1.8rem,3vw,3rem)] font-light leading-[0.92] tracking-[-0.045em]">
                    {protocol.name}
                  </h3>

                  {protocol.category && (
                    <p className="mt-3 text-[8px] uppercase tracking-[0.2em] text-[#E3CE8E]/65">
                      {protocol.category}
                    </p>
                  )}

                  <p className="mt-5 max-w-md text-xs leading-6 text-white/45">
                    {protocol.shortDescription ||
                      protocol.description ||
                      "Physician-directed wellness protocol."}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-[8px] uppercase tracking-[0.22em] text-white/50 transition-colors duration-500 group-hover:text-white">
                      Explore protocol
                    </span>

                    <span className="text-[#C9A227] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="mt-5 h-px w-0 bg-[#C9A227] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                </div>
              </motion.a>
            ))}

          {!loading && filteredProtocols.length === 0 && (
            <div className="col-span-full border-b border-white/10 py-20 text-center">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                No protocols available in this family.
              </p>
            </div>
          )}
        </div>

        {/* ====================================================
            FOOTNOTE
        ==================================================== */}

        <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-start">
          <p className="md:col-span-7 text-[10px] italic leading-6 text-white/35">
            Full nutrient composition for every protocol is disclosed to your
            physician before administration. Protocol names describe a
            wellness focus, not a medical claim.
          </p>

          <a
            href="/protocols"
            className="md:col-span-4 md:col-start-9 md:justify-self-end group inline-flex items-center gap-5 text-[8px] uppercase tracking-[0.22em] text-[#E3CE8E]"
          >
            View all protocols

            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
