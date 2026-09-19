"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Protocol {
  id: string | number;
  slug: string;
  number?: number;
  name: string;
  family: string;
  category?: string;
  shortDescription?: string;
  description?: string;
  duration?: string | number;
  price?: string | number;
  evidenceTier?: string;
  active?: boolean;
}

interface ProtocolMenuProps {
  open: boolean;
  onClose: () => void;
}

const FALLBACK_FAMILIES = [
  "Skin & Beauty",
  "Cellular & Longevity",
  "Metabolic & Performance",
  "Digestive & Systemic",
  "Women's Wellness",
  "Recovery & Immune",
  "Cognitive & Neuro",
  "Musculoskeletal",
];

export default function ProtocolMenu({
  open,
  onClose,
}: ProtocolMenuProps) {
  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [activeFamily, setActiveFamily] = useState("");
  const [activeProtocol, setActiveProtocol] =
    useState<Protocol | null>(null);

  /* ---------------------------------------------
     LOCK PAGE SCROLL
  --------------------------------------------- */

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  /* ---------------------------------------------
     ESCAPE TO CLOSE
  --------------------------------------------- */

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  /* ---------------------------------------------
     LOAD PROTOCOLS
  --------------------------------------------- */

  useEffect(() => {
    if (!open) return;

    let cancelled = false;

    async function loadProtocols() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch("/api/protocols", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load protocols");
        }

        const payload = await response.json();

        const data = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
            ? payload.data
            : [];

        if (cancelled) return;

        const activeProtocols = data.filter(
          (protocol: Protocol) => protocol.active !== false
        );

        setProtocols(activeProtocols);

        if (activeProtocols.length > 0) {
          const firstFamily =
            activeProtocols[0].family || FALLBACK_FAMILIES[0];

          setActiveFamily(firstFamily);
          setActiveProtocol(activeProtocols[0]);
        } else {
          setActiveFamily(FALLBACK_FAMILIES[0]);
          setActiveProtocol(null);
        }
      } catch (err) {
        console.error("Protocol menu error:", err);

        if (!cancelled) {
          setError(true);
          setProtocols([]);
          setActiveFamily(FALLBACK_FAMILIES[0]);
          setActiveProtocol(null);
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
  }, [open]);

  /* ---------------------------------------------
     BUILD FAMILY LIST
  --------------------------------------------- */

  const families = useMemo(() => {
    const apiFamilies = Array.from(
      new Set(
        protocols
          .map((protocol) => protocol.family)
          .filter(Boolean)
      )
    );

    if (apiFamilies.length > 0) {
      return apiFamilies;
    }

    return FALLBACK_FAMILIES;
  }, [protocols]);

  /* ---------------------------------------------
     ACTIVE FAMILY PROTOCOLS
  --------------------------------------------- */

  const familyProtocols = useMemo(() => {
    if (!activeFamily) return [];

    return protocols.filter(
      (protocol) => protocol.family === activeFamily
    );
  }, [protocols, activeFamily]);

  /* ---------------------------------------------
     SELECT FAMILY
  --------------------------------------------- */

  const handleFamilySelect = (family: string) => {
    setActiveFamily(family);

    const firstProtocol = protocols.find(
      (protocol) => protocol.family === family
    );

    setActiveProtocol(firstProtocol || null);
  };

  /* ---------------------------------------------
     VIEW PROTOCOL
  --------------------------------------------- */

  const handleViewProtocol = () => {
    if (!activeProtocol?.slug) return;

    window.location.href = `/protocols/${activeProtocol.slug}`;
  };

  /* ---------------------------------------------
     CLOSE HANDLER
  --------------------------------------------- */

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/75
            backdrop-blur-xl
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={handleClose}
        >
          {/* =========================================
              MAIN MENU
          ========================================= */}

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="DRIPLABS IV Protocols"
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-[76vh]
              w-[calc(100%-40px)]
              max-w-[1180px]
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              overflow-hidden
              rounded-[20px]
              border
              border-white/[0.10]
              bg-[#070a0c]/95
              shadow-[0_30px_100px_rgba(0,0,0,0.65)]
            "
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.985,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {/* =========================================
                HEADER
            ========================================= */}

            <header
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-white/[0.08]
                px-5
                py-4
                md:px-7
                lg:px-8
              "
            >
              <div>
                <div className="mb-1 flex items-center gap-2.5">
                  <span className="h-px w-6 bg-[#28B8C8]" />

                  <p className="text-[8px] uppercase tracking-[0.35em] text-[#28B8C8]">
                    DRIPLABS
                  </p>
                </div>

                <h2 className="text-lg font-light tracking-[0.04em] text-white md:text-xl">
                  Precision Protocols
                </h2>
              </div>

              {/* CLOSE BUTTON */}

              <button
                type="button"
                aria-label="Close protocols"
                title="Close"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleClose();
                }}
                className="
                  group
                  relative
                  z-[100]
                  flex
                  h-9
                  w-9
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-transparent
                  text-white/50
                  transition-all
                  duration-300
                  hover:border-[#28B8C8]/50
                  hover:bg-[#28B8C8]/10
                  hover:text-white
                  focus:outline-none
                  focus:ring-1
                  focus:ring-[#28B8C8]/50
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    text-xl
                    font-light
                    leading-none
                    transition-transform
                    duration-300
                    group-hover:rotate-90
                  "
                >
                  ×
                </span>
              </button>
            </header>

            {/* =========================================
                MAIN CONTENT
            ========================================= */}

            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
              {/* =======================================
                  FAMILY NAVIGATION
              ======================================= */}

              <aside
                className="
                  shrink-0
                  border-b
                  border-white/[0.08]
                  lg:w-[240px]
                  lg:border-b-0
                  lg:border-r
                "
              >
                <div className="hidden px-6 pb-3 pt-6 lg:block">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    Wellness Families
                  </p>
                </div>

                <div
                  className="
                    flex
                    gap-1.5
                    overflow-x-auto
                    px-4
                    py-3
                    lg:flex-col
                    lg:gap-0.5
                    lg:overflow-y-auto
                    lg:px-3
                    lg:py-0
                  "
                >
                  {families.map((family) => {
                    const selected = family === activeFamily;

                    const familyCount = protocols.filter(
                      (protocol) => protocol.family === family
                    ).length;

                    return (
                      <button
                        key={family}
                        type="button"
                        onClick={() =>
                          handleFamilySelect(family)
                        }
                        className={`
                          group
                          relative
                          flex
                          min-w-max
                          items-center
                          justify-between
                          gap-4
                          rounded-md
                          px-3
                          py-2.5
                          text-left
                          transition-all
                          duration-300
                          lg:w-full
                          ${
                            selected
                              ? "bg-white/[0.055] text-white"
                              : "text-white/35 hover:bg-white/[0.025] hover:text-white/75"
                          }
                        `}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`
                              h-1
                              w-1
                              rounded-full
                              transition-all
                              duration-300
                              ${
                                selected
                                  ? "scale-100 bg-[#28B8C8] shadow-[0_0_9px_rgba(40,184,200,0.7)]"
                                  : "scale-0 bg-white/30 group-hover:scale-100"
                              }
                            `}
                          />

                          <span className="text-[9px] uppercase tracking-[0.12em]">
                            {family}
                          </span>
                        </span>

                        {familyCount > 0 && (
                          <span
                            className={`
                              hidden
                              text-[8px]
                              tracking-[0.15em]
                              lg:block
                              ${
                                selected
                                  ? "text-[#28B8C8]"
                                  : "text-white/15"
                              }
                            `}
                          >
                            {String(familyCount).padStart(
                              2,
                              "0"
                            )}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* =======================================
                  PROTOCOL LIST
              ======================================= */}

              <section className="min-h-0 flex-1 overflow-y-auto">
                <div className="px-5 py-6 md:px-7 lg:px-8 lg:py-7">
                  <div className="mb-5 flex items-end justify-between gap-5">
                    <div>
                      <p className="mb-1.5 text-[8px] uppercase tracking-[0.3em] text-[#28B8C8]">
                        Protocol Family
                      </p>

                      <h3 className="text-xl font-light tracking-wide text-white md:text-2xl">
                        {activeFamily || "Protocols"}
                      </h3>
                    </div>

                    {familyProtocols.length > 0 && (
                      <p className="hidden text-[8px] uppercase tracking-[0.25em] text-white/20 md:block">
                        {familyProtocols.length}{" "}
                        {familyProtocols.length === 1
                          ? "Protocol"
                          : "Protocols"}
                      </p>
                    )}
                  </div>

                  {/* LOADING */}

                  {loading && (
                    <div className="flex min-h-[220px] items-center justify-center">
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#28B8C8]" />

                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                          Loading protocols
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ERROR */}

                  {!loading && error && (
                    <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
                      <p className="mb-2 text-xs text-white/50">
                        Protocol data could not be loaded.
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          window.location.reload()
                        }
                        className="text-[9px] uppercase tracking-[0.25em] text-[#28B8C8] transition hover:text-white"
                      >
                        Reload
                      </button>
                    </div>
                  )}

                  {/* EMPTY */}

                  {!loading &&
                    !error &&
                    familyProtocols.length === 0 && (
                      <div className="flex min-h-[220px] items-center justify-center">
                        <p className="text-xs text-white/25">
                          No protocols available in this family.
                        </p>
                      </div>
                    )}

                  {/* PROTOCOL CARDS */}

                  {!loading &&
                    !error &&
                    familyProtocols.length > 0 && (
                      <div className="space-y-1.5">
                        {familyProtocols.map((protocol) => {
                          const selected =
                            activeProtocol?.id ===
                            protocol.id;

                          return (
                            <motion.button
                              key={protocol.id}
                              type="button"
                              onMouseEnter={() =>
                                setActiveProtocol(protocol)
                              }
                              onClick={() =>
                                setActiveProtocol(protocol)
                              }
                              className={`
                                group
                                relative
                                w-full
                                overflow-hidden
                                rounded-lg
                                border
                                px-4
                                py-3.5
                                text-left
                                transition-all
                                duration-300
                                md:px-5
                                ${
                                  selected
                                    ? "border-[#28B8C8]/30 bg-white/[0.055]"
                                    : "border-white/[0.055] bg-white/[0.012] hover:border-white/[0.12] hover:bg-white/[0.03]"
                                }
                              `}
                            >
                              <span
                                className={`
                                  absolute
                                  bottom-0
                                  left-0
                                  top-0
                                  w-px
                                  transition-all
                                  duration-500
                                  ${
                                    selected
                                      ? "bg-[#28B8C8] shadow-[0_0_14px_rgba(40,184,200,0.7)]"
                                      : "bg-transparent"
                                  }
                                `}
                              />

                              <div className="flex items-center justify-between gap-4">
                                <div className="min-w-0">
                                  <div className="mb-1.5 flex items-center gap-2.5">
                                    {protocol.number !==
                                      undefined && (
                                      <span className="text-[8px] tracking-[0.2em] text-[#28B8C8]/65">
                                        {String(
                                          protocol.number
                                        ).padStart(
                                          2,
                                          "0"
                                        )}
                                      </span>
                                    )}

                                    {protocol.category && (
                                      <span className="text-[7px] uppercase tracking-[0.18em] text-white/15">
                                        {protocol.category}
                                      </span>
                                    )}
                                  </div>

                                  <h4
                                    className={`
                                      truncate
                                      text-xs
                                      font-light
                                      tracking-wide
                                      transition-colors
                                      duration-300
                                      md:text-sm
                                      ${
                                        selected
                                          ? "text-white"
                                          : "text-white/60 group-hover:text-white"
                                      }
                                    `}
                                  >
                                    {protocol.name}
                                  </h4>

                                  {protocol.shortDescription && (
                                    <p className="mt-1.5 line-clamp-1 max-w-xl text-[10px] leading-5 text-white/25">
                                      {
                                        protocol.shortDescription
                                      }
                                    </p>
                                  )}
                                </div>

                                <span
                                  className={`
                                    shrink-0
                                    text-base
                                    transition-all
                                    duration-300
                                    ${
                                      selected
                                        ? "translate-x-0 text-[#28B8C8]"
                                        : "-translate-x-1 text-white/15 group-hover:translate-x-0 group-hover:text-white/45"
                                    }
                                  `}
                                >
                                  →
                                </span>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    )}
                </div>
              </section>

              {/* =======================================
                  DETAIL PANEL
              ======================================= */}

              <aside
                className="
                  hidden
                  shrink-0
                  border-l
                  border-white/[0.08]
                  bg-white/[0.012]
                  lg:flex
                  lg:w-[300px]
                  lg:flex-col
                "
              >
                <AnimatePresence mode="wait">
                  {activeProtocol ? (
                    <motion.div
                      key={activeProtocol.id}
                      className="flex h-full flex-col p-6"
                      initial={{
                        opacity: 0,
                        x: 12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -8,
                      }}
                      transition={{
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div>
                        <p className="mb-2 text-[8px] uppercase tracking-[0.3em] text-[#28B8C8]">
                          Selected Protocol
                        </p>

                        <h3 className="text-xl font-light leading-tight text-white">
                          {activeProtocol.name}
                        </h3>

                        {activeProtocol.category && (
                          <p className="mt-1.5 text-[8px] uppercase tracking-[0.25em] text-white/20">
                            {activeProtocol.category}
                          </p>
                        )}
                      </div>

                      {/* DESCRIPTION */}

                      <div className="mt-6">
                        <p className="text-xs leading-6 text-white/40">
                          {activeProtocol.description ||
                            activeProtocol.shortDescription ||
                            "Physician-directed wellness protocol designed around specific health goals and pathways."}
                        </p>
                      </div>

                      {/* METADATA */}

                      {(activeProtocol.duration !==
                        undefined ||
                        activeProtocol.price !==
                          undefined) && (
                        <div className="mt-6 grid grid-cols-2 border-y border-white/[0.08]">
                          {activeProtocol.duration !==
                            undefined && (
                            <div className="border-r border-white/[0.08] py-4 pr-3">
                              <p className="mb-1.5 text-[7px] uppercase tracking-[0.25em] text-white/20">
                                Duration
                              </p>

                              <p className="text-xs text-white/65">
                                {activeProtocol.duration}
                              </p>
                            </div>
                          )}

                          {activeProtocol.price !==
                            undefined && (
                            <div className="py-4 pl-3">
                              <p className="mb-1.5 text-[7px] uppercase tracking-[0.25em] text-white/20">
                                Price
                              </p>

                              <p className="text-xs text-white/65">
                                {activeProtocol.price}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* EVIDENCE */}

                      {activeProtocol.evidenceTier && (
                        <div className="mt-4">
                          <p className="mb-1.5 text-[7px] uppercase tracking-[0.25em] text-white/20">
                            Evidence Tier
                          </p>

                          <p className="text-[11px] text-white/45">
                            {activeProtocol.evidenceTier}
                          </p>
                        </div>
                      )}

                      {/* VIEW BUTTON */}

                      <div className="mt-auto pt-6">
                        <button
                          type="button"
                          onClick={handleViewProtocol}
                          className="
                            group
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-full
                            border
                            border-[#28B8C8]/35
                            bg-[#28B8C8]/10
                            px-4
                            py-3
                            text-[8px]
                            uppercase
                            tracking-[0.25em]
                            text-[#28B8C8]
                            transition-all
                            duration-300
                            hover:border-[#28B8C8]
                            hover:bg-[#28B8C8]
                            hover:text-black
                          "
                        >
                          <span>View Protocol</span>

                          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex h-full items-center justify-center p-6 text-center">
                      <p className="max-w-[190px] text-[10px] leading-5 text-white/20">
                        Select a protocol to explore its
                        details.
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </aside>
            </div>

            {/* =========================================
                MOBILE DETAIL
            ========================================= */}

            <AnimatePresence>
              {activeProtocol && (
                <motion.div
                  className="
                    border-t
                    border-white/[0.08]
                    bg-[#080b0d]
                    p-4
                    lg:hidden
                  "
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
                    y: 15,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <div className="mb-3">
                    <p className="mb-1 text-[7px] uppercase tracking-[0.25em] text-[#28B8C8]">
                      Selected
                    </p>

                    <p className="text-xs font-light text-white">
                      {activeProtocol.name}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleViewProtocol}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-full
                      bg-[#28B8C8]
                      px-4
                      py-3
                      text-[8px]
                      uppercase
                      tracking-[0.22em]
                      text-black
                    "
                  >
                    <span>View Protocol</span>

                    <span>→</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =========================================
                FOOTER
            ========================================= */}

            <footer className="hidden shrink-0 border-t border-white/[0.08] px-7 py-2.5 lg:block">
              <div className="flex items-center justify-between">
                <p className="text-[7px] uppercase tracking-[0.28em] text-white/15">
                  Physician-directed wellness protocols
                </p>

                <p className="text-[7px] uppercase tracking-[0.28em] text-white/10">
                  ESC TO CLOSE
                </p>
              </div>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}