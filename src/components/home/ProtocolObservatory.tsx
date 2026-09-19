"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
      className="relative overflow-hidden bg-[#080D14] text-[#F7F4EC]"
    >
      {/* ======================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-[12%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-[#C9A227]/[0.045] blur-[140px]" />

        <div className="absolute -left-[14%] bottom-[18%] h-[30rem] w-[30rem] rounded-full bg-[#657A94]/[0.035] blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(201,162,39,0.05),transparent_32%),radial-gradient(circle_at_20%_70%,rgba(116,137,163,0.035),transparent_34%)]" />

        {/* technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* ======================================================
          ENTRY LINE
      ====================================================== */}

      <motion.div
        initial={{ scaleX: reducedMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0.01 : 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 h-px w-full origin-left bg-[#C9A227]"
      />

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 py-28 sm:px-8 md:py-40 lg:px-12 xl:px-16">
        {/* ====================================================
            INTRO
        ==================================================== */}

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24, filter: "blur(6px)" }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />

              <p className="text-[8px] uppercase tracking-[0.3em] text-[#E3CE8E] md:text-[9px]">
                The Protocol System
              </p>
            </div>

            <div className="mt-10 hidden lg:block">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                  SYSTEM / 08
                </span>

                <span className="h-px w-12 bg-white/10" />
              </div>

              <p className="mt-7 max-w-[235px] text-xs leading-6 text-white/40">
                Eight wellness families. Nineteen physician-directed protocols.
                Explore the system before choosing your path.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.h2
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24, filter: "blur(6px)" }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-6xl font-[var(--font-heading)] text-[clamp(3.4rem,7.5vw,8rem)] font-light leading-[0.81] tracking-[-0.07em]"
            >
              Not a treatment menu.
              <br />
              A wellness system.
            </motion.h2>

            <motion.p
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 max-w-2xl text-sm leading-7 text-white/55"
            >
              Protocols are selected under physician supervision according to
              the individual's context. Protocol names describe a wellness
              focus, not a medical claim.
            </motion.p>
          </div>
        </div>

        {/* ====================================================
            SYSTEM STATUS
        ==================================================== */}

        <motion.div
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.8,
            delay: reducedMotion ? 0 : 0.2,
          }}
          className="mt-20 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3"
        >
          <div className="bg-[#080D14] px-5 py-5 md:px-7">
            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
              Architecture
            </p>

            <p className="mt-3 font-[var(--font-heading)] text-xl font-light tracking-[-0.03em]">
              08 families
            </p>
          </div>

          <div className="bg-[#080D14] px-5 py-5 md:px-7">
            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
              Protocol count
            </p>

            <p className="mt-3 font-[var(--font-heading)] text-xl font-light tracking-[-0.03em]">
              19 protocols
            </p>
          </div>

          <div className="bg-[#080D14] px-5 py-5 md:px-7">
            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
              Selection
            </p>

            <p className="mt-3 flex items-center gap-3 font-[var(--font-heading)] text-xl font-light tracking-[-0.03em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227] shadow-[0_0_14px_rgba(201,162,39,0.55)]" />
              Physician-directed
            </p>
          </div>
        </motion.div>

        {/* ====================================================
            FAMILY FILTER
        ==================================================== */}

        <div className="relative mt-16 md:mt-24">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-mono text-[7px] uppercase tracking-[0.24em] text-white/25">
              Filter / Wellness family
            </p>

            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
              Scroll to explore →
            </p>
          </div>

          <div className="overflow-x-auto border-y border-white/10 scrollbar-none">
            <div className="flex min-w-max items-center gap-2 py-3">
              {families.map((family) => {
                const active = family === activeFamily;

                return (
                  <button
                    key={family}
                    type="button"
                    onClick={() => setActiveFamily(family)}
                    className="group relative shrink-0 px-4 py-3 text-[8px] uppercase tracking-[0.18em]"
                  >
                    {/* active background */}
                    <span
                      className={[
                        "absolute inset-0 border transition-all duration-500",
                        active
                          ? "border-[#C9A227]/70 bg-[#C9A227]/[0.08]"
                          : "border-transparent group-hover:border-white/15",
                      ].join(" ")}
                    />

                    {/* active marker */}
                    {active && (
                      <motion.span
                        layoutId="protocolFamilyIndicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A227]"
                        transition={{
                          duration: reducedMotion ? 0.01 : 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    )}

                    <span
                      className={[
                        "relative z-10 transition-colors duration-500",
                        active
                          ? "text-[#E3CE8E]"
                          : "text-white/40 group-hover:text-white/80",
                      ].join(" ")}
                    >
                      {family}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ====================================================
            COUNT
        ==================================================== */}

        <div className="mt-7 flex items-center justify-between border-b border-white/10 pb-5">
          <p className="font-mono text-[7px] uppercase tracking-[0.23em] text-white/30">
            {loading
              ? "Loading protocols"
              : `${filteredProtocols.length} protocols`}
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#C9A227]/50" />

            <p className="font-mono text-[7px] uppercase tracking-[0.23em] text-[#C9A227]">
              Physician-directed
            </p>
          </div>
        </div>

        {/* ====================================================
            PROTOCOL GRID
        ==================================================== */}

        <div className="relative mt-0 grid border-l border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {loading &&
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="relative min-h-[330px] overflow-hidden border-b border-r border-white/10 p-7 md:p-8"
              >
                <div className="h-2 w-10 animate-pulse bg-white/10" />

                <div className="mt-24 h-7 w-2/3 animate-pulse bg-white/10" />

                <div className="mt-5 h-2 w-full animate-pulse bg-white/10" />

                <div className="mt-2 h-2 w-4/5 animate-pulse bg-white/10" />

                <div className="absolute bottom-8 left-8 right-8 h-px overflow-hidden bg-white/5">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-full w-1/2 bg-[#C9A227]/30"
                  />
                </div>
              </div>
            ))}

          {!loading &&
            filteredProtocols.map((protocol, index) => (
              <motion.a
                layout
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
                    : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  layout: {
                    duration: reducedMotion ? 0.01 : 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    duration: reducedMotion ? 0.01 : 0.65,
                    delay: reducedMotion
                      ? 0
                      : Math.min(index * 0.035, 0.24),
                  },
                  y: {
                    duration: reducedMotion ? 0.01 : 0.65,
                    delay: reducedMotion
                      ? 0
                      : Math.min(index * 0.035, 0.24),
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="group relative min-h-[330px] overflow-hidden border-b border-r border-white/10 p-7 md:p-8"
              >
                {/* ==================================================
                    CARD HOVER FIELD
                ================================================== */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C9A227]/0 via-transparent to-[#C9A227]/0 transition-all duration-700 group-hover:from-[#C9A227]/[0.045] group-hover:to-[#C9A227]/[0.015]" />

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#C9A227]/0 blur-[60px] transition-all duration-700 group-hover:bg-[#C9A227]/[0.07]" />

                {/* technical corner */}
                <div className="absolute right-6 top-6 h-4 w-4 opacity-30 transition-opacity duration-500 group-hover:opacity-100 md:right-7 md:top-7">
                  <span className="absolute right-0 top-0 h-px w-4 bg-[#C9A227]" />
                  <span className="absolute right-0 top-0 h-4 w-px bg-[#C9A227]" />
                </div>

                {/* ==================================================
                    CARD HEADER
                ================================================== */}

                <div className="relative z-10 flex items-start justify-between gap-5">
                  <span className="font-mono text-[8px] tracking-[0.22em] text-[#C9A227]">
                    {String(
                      protocol.number ?? index + 1,
                    ).padStart(2, "0")}
                  </span>

                  <span className="max-w-[55%] text-right text-[7px] uppercase tracking-[0.18em] text-white/25 transition-colors duration-500 group-hover:text-[#E3CE8E]/70">
                    {protocol.family || "DRIPLABS"}
                  </span>
                </div>

                {/* ==================================================
                    CARD CONTENT
                ================================================== */}

                <div className="absolute inset-x-7 bottom-7 z-10 md:inset-x-8 md:bottom-8">
                  {protocol.category && (
                    <p className="mb-3 font-mono text-[7px] uppercase tracking-[0.2em] text-[#E3CE8E]/60">
                      {protocol.category}
                    </p>
                  )}

                  <h3 className="max-w-[90%] font-[var(--font-heading)] text-[clamp(1.8rem,3vw,3rem)] font-light leading-[0.9] tracking-[-0.05em] transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                    {protocol.name}
                  </h3>

                  <p className="mt-5 max-w-md text-xs leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/55">
                    {protocol.shortDescription ||
                      protocol.description ||
                      "Physician-directed wellness protocol."}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-[8px] uppercase tracking-[0.22em] text-white/45 transition-colors duration-500 group-hover:text-white">
                      Explore protocol
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[#C9A227] transition-all duration-500 group-hover:border-[#C9A227]/60 group-hover:bg-[#C9A227] group-hover:text-[#080D14]">
                      <span className="transition-transform duration-500 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>

                  {/* bottom progress line */}
                  <div className="mt-5 h-px w-full overflow-hidden bg-white/5">
                    <div className="h-full w-0 bg-[#C9A227] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                  </div>
                </div>
              </motion.a>
            ))}

          {!loading && filteredProtocols.length === 0 && (
            <div className="col-span-full border-b border-r border-white/10 py-24 text-center">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                No protocols available in this family.
              </p>
            </div>
          )}
        </div>

        {/* ====================================================
            FOOTNOTE
        ==================================================== */}

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="md:col-span-7 text-[10px] italic leading-6 text-white/35">
            Full nutrient composition for every protocol is disclosed to your
            physician before administration. Protocol names describe a
            wellness focus, not a medical claim.
          </p>

          <a
            href="/protocols"
            className="group md:col-span-4 md:col-start-9 inline-flex items-center justify-end gap-5 text-[8px] uppercase tracking-[0.22em] text-[#E3CE8E]"
          >
            View all protocols

            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15 transition-all duration-500 group-hover:border-[#C9A227] group-hover:text-[#080D14]">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#C9A227] transition-transform duration-500 group-hover:scale-y-100" />

              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}