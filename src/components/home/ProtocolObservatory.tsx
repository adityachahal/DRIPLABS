"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/* =========================================================
   TYPES
========================================================= */

type WellnessFamily =
  | "Skin & Beauty"
  | "Cellular & Longevity"
  | "Metabolic & Performance"
  | "Digestive & Systemic"
  | "Women's Wellness"
  | "Recovery & Immune"
  | "Cognitive & Neuro"
  | "Musculoskeletal";

type Protocol = {
  slug: string;
  name: string;
  number: string;
  family: WellnessFamily;
  description: string;
};

/* =========================================================
   VIDEO
========================================================= */

const VIDEO_SRC = "/videos/Protocol%20Observatory.mp4";

/* =========================================================
   PROTOCOL ICONS
========================================================= */

const PROTOCOL_ICONS: Record<string, string> = {
  shrink: "/images/protocol-icons/shrink.png",
  restore: "/images/protocol-icons/restore.png",
  renew: "/images/protocol-icons/renew.png",
  refuel: "/images/protocol-icons/refeul.png",
  reactivate: "/images/protocol-icons/reactive.png",
  radiance: "/images/protocol-icons/radiance.png",
  nadx: "/images/protocol-icons/nad-plus.png",
  "mega-boost": "/images/protocol-icons/mega-boost.png",
  glamour: "/images/protocol-icons/glamour.png",
  fit: "/images/protocol-icons/fit.png",
  "bounce-back": "/images/protocol-icons/bounce-back.png",
};

function normalizeSlug(value: unknown): string {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function getProtocolIcon(slug: string): string | undefined {
  return PROTOCOL_ICONS[normalizeSlug(slug)];
}

/* Family-level fallback icons ensure every family always has a
   meaningful visual identity, even when a protocol-specific icon
   has not been added yet. */
const FAMILY_ICON_FALLBACKS: Record<WellnessFamily, string> = {
  "Skin & Beauty": "/images/protocol-icons/glamour.png",
  "Cellular & Longevity": "/images/protocol-icons/nad-plus.png",
  "Metabolic & Performance": "/images/protocol-icons/fit.png",
  "Digestive & Systemic": "/images/protocol-icons/restore.png",
  "Women's Wellness": "/images/protocol-icons/radiance.png",
  "Recovery & Immune": "/images/protocol-icons/bounce-back.png",
  "Cognitive & Neuro": "/images/protocol-icons/renew.png",
  Musculoskeletal: "/images/protocol-icons/move.png",
};

function getFamilyIcon(family: WellnessFamily): string {
  return FAMILY_ICON_FALLBACKS[family];
}

/* =========================================================
   FALLBACK PROTOCOL DATA
========================================================= */

const FALLBACK_PROTOCOLS: Protocol[] = [
  {
    slug: "glamour",
    name: "GLAMOUR",
    number: "01",
    family: "Skin & Beauty",
    description:
      "A considered skin and beauty protocol designed around antioxidant support and cellular nourishment.",
  },
  {
    slug: "radiance",
    name: "RADIANCE",
    number: "02",
    family: "Skin & Beauty",
    description:
      "A focused wellness experience centred around antioxidant and nutritional support.",
  },
  {
    slug: "restore",
    name: "RESTORE",
    number: "10",
    family: "Skin & Beauty",
    description:
      "A restorative formulation designed around replenishment and recovery.",
  },
  {
    slug: "renew",
    name: "RENEW",
    number: "03",
    family: "Cellular & Longevity",
    description:
      "A restorative protocol designed around nutritional replenishment and cellular support.",
  },
  {
    slug: "longevity x",
    name: "LONGEVITY X",
    number: "04",
    family: "Cellular & Longevity",
    description:
      "An advanced longevity-oriented experience built around personalised physician guidance.",
  },
  {
    slug: "nadx",
    name: "NADx",
    number: "05",
    family: "Cellular & Longevity",
    description:
      "A physician-led NAD+ experience within the DRIPLABS longevity programme.",
  },
  {
    slug: "methyblu",
    name: "METHYBLU",
    number: "06",
    family: "Cellular & Longevity",
    description:
      "A specialised protocol designed around a clinically directed formulation.",
  },
  {
    slug: "fit",
    name: "FIT",
    number: "07",
    family: "Metabolic & Performance",
    description:
      "A performance-oriented nutritional protocol designed around metabolic support.",
  },
  {
    slug: "shrink",
    name: "SHRINK",
    number: "08",
    family: "Metabolic & Performance",
    description:
      "A metabolic wellness protocol designed around nutritional and performance support.",
  },
  {
    slug: "refuel",
    name: "REFUEL",
    number: "09",
    family: "Metabolic & Performance",
    description:
      "A replenishment-focused experience designed around hydration and nutritional support.",
  },
  {
    slug: "rebuild",
    name: "REBUILD",
    number: "12",
    family: "Metabolic & Performance",
    description:
      "A nutritional rebuilding protocol designed around recovery and replenishment.",
  },
  {
    slug: "performance-x",
    name: "PERFORMANCE X",
    number: "12",
    family: "Metabolic & Performance",
    description:
      "Advanced performance nutritional wellness support.",
  },
  
  {
    slug: "gut-plus",
    name: "GUT+",
    number: "11",
    family: "Digestive & Systemic",
    description:
      "A digestive and systemic wellness experience designed around targeted nutritional support.",
  },
  
  {
    slug: "femme",
    name: "FEMME",
    number: "13",
    family: "Women's Wellness",
    description:
      "A considered women's wellness pathway built around individual nutritional requirements.",
  },
  {
    slug: "bounce-back",
    name: "BOUNCE BACK",
    number: "14",
    family: "Recovery & Immune",
    description:
      "A recovery-focused experience designed around hydration and physician-directed support.",
  },
  {
    slug: "recover-plus",
    name: "RECOVER+",
    number: "15",
    family: "Recovery & Immune",
    description:
      "An advanced recovery protocol designed around nutritional replenishment.",
  },
  {
    slug: "reactivate",
    name: "REACTIVATE",
    number: "16",
    family: "Recovery & Immune",
    description:
      "A revitalisation-focused protocol designed around nutritional and metabolic support.",
  },
  {
    slug: "move",
    name: "MOVE",
    number: "17",
    family: "Musculoskeletal",
    description:
      "A mobility-focused protocol designed around nutritional support for an active lifestyle.",
  },
   
  {
    slug: "focus",
    name: "FOCUS",
    number: "18",
    family: "Cognitive & Neuro",
    description:
      "Cognitive and neuronal nutritional wellness support.",
  },
];

/* =========================================================
   VIDEO CUES
========================================================= */

const VIDEO_CUES = [
  { time: 0, protocol: "glamour" },
  { time: 4, protocol: "radiance" },
  { time: 8, protocol: "renew" },
  { time: 12, protocol: "apex" },
  { time: 16, protocol: "nadx" },
  { time: 21, protocol: "methyblu" },
  { time: 25, protocol: "fit" },
  { time: 29, protocol: "shrink" },
  { time: 33, protocol: "refuel" },
  { time: 37, protocol: "restore" },
  { time: 41, protocol: "gut-plus" },
  { time: 45, protocol: "rebuild" },
  { time: 49, protocol: "femme" },
  { time: 53, protocol: "bounce-back" },
  { time: 57, protocol: "recover-plus" },
  { time: 61, protocol: "reactivate" },
  { time: 65, protocol: "move" },
];

const AUTO_FAMILY_SEQUENCE: WellnessFamily[] = [
  "Skin & Beauty",
  "Cellular & Longevity",
  "Metabolic & Performance",
  "Digestive & Systemic",
  "Women's Wellness",
  "Recovery & Immune",
  "Cognitive & Neuro",
  "Musculoskeletal",
];

/* =========================================================
   HELPERS
========================================================= */

function normalizeFamily(value?: string): WellnessFamily {
  const normalized = value?.toLowerCase().trim() ?? "";

  if (normalized.includes("skin") || normalized.includes("beauty")) {
    return "Skin & Beauty";
  }

  if (
    normalized.includes("cellular") ||
    normalized.includes("longevity")
  ) {
    return "Cellular & Longevity";
  }

  if (
    normalized.includes("metabolic") ||
    normalized.includes("performance")
  ) {
    return "Metabolic & Performance";
  }

  if (
    normalized.includes("digestive") ||
    normalized.includes("systemic") ||
    normalized.includes("gut")
  ) {
    return "Digestive & Systemic";
  }

  if (
    normalized.includes("women") ||
    normalized.includes("femme")
  ) {
    return "Women's Wellness";
  }

  if (
    normalized.includes("recovery") ||
    normalized.includes("immune")
  ) {
    return "Recovery & Immune";
  }

  if (
    normalized.includes("cognitive") ||
    normalized.includes("neuro")
  ) {
    return "Cognitive & Neuro";
  }

  if (
    normalized.includes("musculoskeletal") ||
    normalized.includes("mobility")
  ) {
    return "Musculoskeletal";
  }

  return "Cellular & Longevity";
}

function getActiveCue(currentTime: number) {
  let active = VIDEO_CUES[0];

  for (const cue of VIDEO_CUES) {
    if (cue.time <= currentTime) {
      active = cue;
    } else {
      break;
    }
  }

  return active;
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ProtocolObservatory() {
  const searchParams = useSearchParams();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [protocols, setProtocols] =
    useState<Protocol[]>(FALLBACK_PROTOCOLS);

  const [activeSlug, setActiveSlug] =
    useState("glamour");


  const [isVisible, setIsVisible] =
    useState(false);

  const [family, setFamily] =
    useState<"All" | WellnessFamily>("Skin & Beauty");

  const [focusedSlug, setFocusedSlug] = useState<string>("");

  // Family auto-rotation pauses briefly after a manual selection so
  // the interaction still feels fully user-controlled.
  const familyPauseUntilRef = useRef(0);
  const initialFamilyAppliedRef = useRef(false);
  const pointerFrameRef = useRef<number | null>(null);
  const pointerTargetRef = useRef({ x: 50, y: 48 });
  const pointerCurrentRef = useRef({ x: 50, y: 48 });

  /* =====================================================
     CONNECT FROM WELLNESS PATHWAYS
     A family selected above can open this observatory already
     focused on the same wellness family.
  ===================================================== */

  useEffect(() => {
    if (initialFamilyAppliedRef.current) return;

    const requestedFamily = searchParams.get("family");

    if (!requestedFamily) {
      initialFamilyAppliedRef.current = true;
      return;
    }

    const resolvedFamily = normalizeFamily(requestedFamily);

    setFamily(resolvedFamily);
    familyPauseUntilRef.current = Date.now() + 12000;
    initialFamilyAppliedRef.current = true;
  }, [searchParams]);

  /* =====================================================
     LOAD API DATA
  ===================================================== */

  useEffect(() => {
    let cancelled = false;

    async function loadProtocols() {
      try {
        const response = await fetch("/api/protocols", {
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        const source =
          Array.isArray(data)
            ? data
            : Array.isArray(data?.protocols)
              ? data.protocols
              : [];

        if (!source.length || cancelled) {
          return;
        }

        const mapped: Protocol[] = source
          .map((item: any, index: number) => {
            const slug = normalizeSlug(
              item?.slug ??
                item?.id ??
                `protocol-${index + 1}`
            );

            return {
              slug,
              name: String(
                item?.name ??
                  item?.title ??
                  slug
              ).toUpperCase(),
              number: String(
                item?.number ??
                  String(index + 1).padStart(2, "0")
              ).padStart(2, "0"),
              family: normalizeFamily(
                item?.family
              ),
              description: String(
                item?.description ??
                  "A physician-led DRIPLABS wellness experience."
              ),
            };
          })
          .filter(Boolean);

        if (mapped.length) {
          setProtocols(mapped);
        }
      } catch {
        /* Keep fallback data */
      }
    }

    loadProtocols();

    return () => {
      cancelled = true;
    };
  }, []);

  /* =====================================================
     VISIBILITY
  ===================================================== */

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =====================================================
     AUTOPLAY WHEN VISIBLE
  ===================================================== */

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !isVisible) {
      return;
    }

    video.play().catch(() => {});
  }, [isVisible]);

  /* =====================================================
     VIDEO EVENTS
  ===================================================== */

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const time = video.currentTime;
    const cue = getActiveCue(time);

    if (cue?.protocol) {
      setActiveSlug((previous) =>
        previous === cue.protocol
          ? previous
          : cue.protocol
      );
    }
  }, []);

  /* =====================================================
     SELECT PROTOCOL
  ===================================================== */

  const selectProtocol = useCallback(
    (slug: string) => {
      setActiveSlug(slug);

      const video = videoRef.current;

      if (!video) {
        return;
      }

      const cue = VIDEO_CUES.find(
        (item) => item.protocol === slug
      );

      if (cue) {
        video.currentTime = cue.time;

        if (video.paused) {
          video.play().catch(() => {});
        }
      }
    },
    []
  );

  /* =====================================================
     FILTERED PROTOCOLS
  ===================================================== */

  const visibleProtocols = useMemo(() => {
    if (family === "All") {
      return protocols;
    }

    return protocols.filter(
      (protocol) => protocol.family === family
    );
  }, [family, protocols]);

  /* =====================================================
     ORBIT POSITIONS
  ===================================================== */

  const orbitPositions = useMemo(() => {
    const count = Math.max(
      visibleProtocols.length,
      1
    );

    return visibleProtocols.map(
      (protocol, index) => {
        const angle =
          (360 / count) * index - 90;

        // Keep every protocol well outside the nucleus so
        // the icon field has enough breathing room.
        const radius =
          index % 2 === 0
            ? "var(--orbit-radius)"
            : "var(--orbit-radius-outer)";

        return {
          protocol,
          angle,
          radius,
        };
      }
    );
  }, [family, visibleProtocols]);

  /* =====================================================
     ORBIT FOCUS TRACKER
     Only the protocol crossing the top/center focus point
     reveals its name.
  ===================================================== */

  useEffect(() => {
    if (!visibleProtocols.length) {
      setFocusedSlug("");
      return;
    }

    let frame = 0;
    const startedAt = performance.now();
    const duration = 52000;

    const normalize = (value: number) =>
      ((value % 360) + 360) % 360;

    const angleDistance = (a: number, b: number) => {
      const delta = Math.abs(normalize(a) - normalize(b));
      return Math.min(delta, 360 - delta);
    };

    const tick = (now: number) => {
      const rotation =
        ((now - startedAt) / duration) * 360;

      let closestSlug = visibleProtocols[0].slug;
      let closestDistance = Infinity;

      orbitPositions.forEach(({ protocol, angle }) => {
        const distance = angleDistance(angle + rotation, -90);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSlug = protocol.slug;
        }
      });

      setFocusedSlug((previous) =>
        previous === closestSlug ? previous : closestSlug
      );

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [orbitPositions, visibleProtocols]);

  /* =====================================================
     ACTIVE PROTOCOL
  ===================================================== */

  const activeProtocol =
    protocols.find(
      (protocol) => protocol.slug === activeSlug
    ) ?? protocols[0];

  /* =====================================================
     FAMILIES
  ===================================================== */

  const families = [
    "All",
    "Skin & Beauty",
    "Cellular & Longevity",
    "Metabolic & Performance",
    "Digestive & Systemic",
    "Women's Wellness",
    "Recovery & Immune",
    "Cognitive & Neuro",
    "Musculoskeletal",
  ] as const;

  /* =====================================================
     AUTOMATIC FAMILY ROTATION
     Every family gets its own protocol set and therefore its
     own revolving icon field. Manual selection pauses the
     automation for a few seconds.
  ===================================================== */

  useEffect(() => {
    if (!isVisible) return;

    const interval = window.setInterval(() => {
      if (Date.now() < familyPauseUntilRef.current) return;

      setFamily((current) => {
        const currentIndex = AUTO_FAMILY_SEQUENCE.indexOf(
          current as WellnessFamily
        );

        const nextIndex =
          currentIndex === -1
            ? 0
            : (currentIndex + 1) % AUTO_FAMILY_SEQUENCE.length;

        return AUTO_FAMILY_SEQUENCE[nextIndex];
      });
    }, 7000);

    return () => window.clearInterval(interval);
  }, [isVisible]);

  /* Keep the information panel synchronized with the selected
     family. */
  useEffect(() => {
    if (!visibleProtocols.length) return;

    const stillVisible = visibleProtocols.some(
      (protocol) => protocol.slug === activeSlug
    );

    if (!stillVisible) {
      setActiveSlug(visibleProtocols[0].slug);
    }
  }, [activeSlug, visibleProtocols]);

  useEffect(() => {
    return () => {
      if (pointerFrameRef.current !== null) {
        cancelAnimationFrame(pointerFrameRef.current);
      }
    };
  }, []);

  const handleObservatoryPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const element = sectionRef.current;
      if (!element || event.pointerType === "touch") return;

      const rect = element.getBoundingClientRect();
      pointerTargetRef.current.x = ((event.clientX - rect.left) / rect.width) * 100;
      pointerTargetRef.current.y = ((event.clientY - rect.top) / rect.height) * 100;

      if (pointerFrameRef.current !== null) return;

      const tick = () => {
        const current = pointerCurrentRef.current;
        const target = pointerTargetRef.current;
        current.x += (target.x - current.x) * 0.12;
        current.y += (target.y - current.y) * 0.12;
        element.style.setProperty("--pointer-x", `${current.x}%`);
        element.style.setProperty("--pointer-y", `${current.y}%`);

        if (Math.abs(target.x - current.x) > 0.08 || Math.abs(target.y - current.y) > 0.08) {
          pointerFrameRef.current = requestAnimationFrame(tick);
        } else {
          pointerFrameRef.current = null;
        }
      };
      pointerFrameRef.current = requestAnimationFrame(tick);
    },
    []
  );

  const handleObservatoryPointerLeave = useCallback(() => {
    pointerTargetRef.current.x = 50;
    pointerTargetRef.current.y = 48;
    if (pointerFrameRef.current !== null) return;
    const element = sectionRef.current;
    if (!element) return;

    const tick = () => {
      const current = pointerCurrentRef.current;
      const target = pointerTargetRef.current;
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      element.style.setProperty("--pointer-x", `${current.x}%`);
      element.style.setProperty("--pointer-y", `${current.y}%`);

      if (Math.abs(target.x - current.x) > 0.08 || Math.abs(target.y - current.y) > 0.08) {
        pointerFrameRef.current = requestAnimationFrame(tick);
      } else {
        pointerFrameRef.current = null;
      }
    };
    pointerFrameRef.current = requestAnimationFrame(tick);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={[
          "protocol-observatory",
          "protocol-observatory-connected",
          isVisible ? "is-visible" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onPointerMove={handleObservatoryPointerMove}
        onPointerLeave={handleObservatoryPointerLeave}
      >
        {/* =================================================
            WELLNESS → PROTOCOL OBSERVATORY CONNECTION
        ================================================= */}

        <div
          className="observatory-entry-bridge"
          aria-hidden="true"
        >
          <span className="handoff-horizon" />
          <span className="handoff-horizon-glow" />
          <span className="handoff-spine" />
          <span className="handoff-spine-glow" />
          <span className="handoff-orbit handoff-orbit-a" />
          <span className="handoff-orbit handoff-orbit-b" />
          <span className="handoff-packet handoff-packet-a" />
          <span className="handoff-packet handoff-packet-b" />
          <span className="handoff-packet handoff-packet-c" />
          <span className="observatory-entry-point" />
        </div>
        {/* =================================================
            ATMOSPHERE
        ================================================= */}

        <div
          className="observatory-atmosphere"
          aria-hidden="true"
        />

        <div
          className="observatory-pointer-field"
          aria-hidden="true"
        />

        <div
          className="observatory-grid"
          aria-hidden="true"
        />

        <div
          className="observatory-vignette"
          aria-hidden="true"
        />

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="observatory-header">
          <div>
            <div className="observatory-eyebrow">
              <span />
              PROTOCOL OBSERVATORY
            </div>

            <h2>
              A system of
              <span> considered wellness.</span>
            </h2>

            <p>
              Explore the DRIPLABS protocol architecture.
              Each formulation is physician-directed and
              designed around a specific wellness pathway.
            </p>

            <div className="observatory-live-family">
              <span className="observatory-live-dot" />
              <span>LIVE FAMILY</span>
              <strong>{family === "All" ? "ALL PROTOCOLS" : family}</strong>
              <small>AUTO ROTATES</small>
            </div>
          </div>

          <div className="observatory-index">
            <span>DRIPLABS</span>
            <strong>19</strong>
            <small>PROTOCOLS</small>
          </div>
        </div>

        {/* =================================================
            FAMILY FILTER
        ================================================= */}

        <div className="observatory-filters">
          {families.map((item) => {
            const selected =
              family === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => {
                  if (item !== "All") {
                    familyPauseUntilRef.current =
                      Date.now() + 12000;
                  }

                  setFamily(item);

                  // Restart the orbit whenever the family changes
                  // so the new family enters as one clean system.
                  requestAnimationFrame(() => {
                    const orbit = document.querySelector(
                      ".orbit-spin"
                    ) as HTMLElement | null;

                    if (!orbit) return;

                    orbit.style.animation = "none";
                    void orbit.offsetWidth;
                    orbit.style.animation =
                      "observatory-orbit 52s linear infinite";
                  });
                }}
                className={
                  selected
                    ? "observatory-filter active"
                    : "observatory-filter"
                }
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* =================================================
            MAIN SYSTEM
        ================================================= */}

        <div
          className={[
            "observatory-system",
            family !== "All"
              ? "family-orbit-active"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="observatory-system-beam" aria-hidden="true" />
          <div className="observatory-system-sweep" aria-hidden="true" />

          {/* ===============================================
              ORBITAL RINGS
          =============================================== */}

          <div
            className="orbit-ring orbit-ring-one"
            aria-hidden="true"
          />

          <div
            className="orbit-ring orbit-ring-two"
            aria-hidden="true"
          />

          <div
            className="orbit-ring orbit-ring-three"
            aria-hidden="true"
          />

          <div
            className="orbit-ticks"
            aria-hidden="true"
          />

          {/* ===============================================
              ROTATING PROTOCOL SYSTEM
          =============================================== */}

          <div className="orbit-spin">
            {orbitPositions.map(
              ({
                protocol,
                angle,
                radius,
              }) => {
                const isActive =
                  protocol.slug ===
                  activeSlug;

                const isFocused =
                  protocol.slug ===
                  focusedSlug;

                const icon =
  getProtocolIcon(protocol.slug) ??
  getFamilyIcon(protocol.family);

                return (
                  <button
                    key={protocol.slug}
                    type="button"
                    onClick={() =>
                      selectProtocol(
                        protocol.slug
                      )
                    }
                    aria-label={`View ${protocol.name}`}
                    className={[
                      "orbit-node",
                      isActive ? "active" : "",
                      isFocused ? "focused" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={
                      {
                        "--node-angle": `${angle}deg`,
                        "--node-radius": radius,
                      } as React.CSSProperties
                    }
                  >
                    <span className="orbit-node-counter">
                      <span className="orbit-node-connector" />

                      <span className="orbit-icon">
                        {icon ? (
                          <img
                            src={icon}
                            alt={`${protocol.name} protocol icon`}
                            draggable={false}
                            loading="eager"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <span className="fallback-icon">
                            {protocol.number}
                          </span>
                        )}
                      </span>

                      <span
                        className={
                          isFocused
                            ? "orbit-node-info visible"
                            : "orbit-node-info"
                        }
                      >
                        <small>
                          {protocol.number}
                        </small>

                        <strong>
                          {protocol.name}
                        </strong>
                      </span>
                    </span>
                  </button>
                );
              }
            )}
          </div>

          {/* ===============================================
              CENTRAL NUCLEUS
          =============================================== */}

          <div className="observatory-core">
            <div
              className="core-energy"
              aria-hidden="true"
            />

            <div
              className="core-ring core-ring-one"
              aria-hidden="true"
            />

            <div
              className="core-ring core-ring-two"
              aria-hidden="true"
            />

            <div className="core-video-shell">
              <video
                ref={videoRef}
                className="core-video"
                src={VIDEO_SRC}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
              />

              <div
                className="core-video-overlay"
                aria-hidden="true"
              />

              <div
                className="core-scanline"
                aria-hidden="true"
              />

              <div className="core-label">
                <span>LIVE PROTOCOL</span>

                <strong>
                  {activeProtocol?.name}
                </strong>
              </div>

              <div className="core-corner core-corner-tl" />
              <div className="core-corner core-corner-tr" />
              <div className="core-corner core-corner-bl" />
              <div className="core-corner core-corner-br" />
            </div>

            {/* CORE METADATA */}

            <div className="core-metadata">
              <span>
                {activeProtocol?.number}
              </span>

              <i />

              <span>
                {activeProtocol?.family}
              </span>
            </div>
          </div>

          {/* ===============================================
              ENERGY PARTICLES
          =============================================== */}

          <div
            className="energy-orbit energy-orbit-one"
            aria-hidden="true"
          >
            <span />
          </div>

          <div
            className="energy-orbit energy-orbit-two"
            aria-hidden="true"
          >
            <span />
          </div>

          <div
            className="energy-orbit energy-orbit-three"
            aria-hidden="true"
          >
            <span />
          </div>
        </div>

        {/* =================================================
            ACTIVE PROTOCOL INFORMATION
        ================================================= */}

        <div className="observatory-information">
          <div className="information-number">
            <span>
              {activeProtocol?.number}
            </span>

            <i />
          </div>

          <div className="information-copy">
            <div className="information-family">
              {activeProtocol?.family}
            </div>

            <h3>
              {activeProtocol?.name}
            </h3>

            <p>
              {activeProtocol?.description}
            </p>
          </div>

          <Link
            href={
              activeProtocol
                ? `/protocols/${activeProtocol.slug}`
                : "/protocols"
            }
            className="information-link"
          >
            Explore protocol
            <span>→</span>
          </Link>
        </div>

        {/* =================================================
            MOBILE SELECTOR
        ================================================= */}

        <div className="mobile-protocol-selector">
          <div>
            <span>SELECT PROTOCOL</span>

            <strong>
              {activeProtocol?.name}
            </strong>
          </div>

          <select
            value={activeSlug}
            onChange={(event) =>
              selectProtocol(
                event.target.value
              )
            }
            aria-label="Select protocol"
          >
            {protocols.map((protocol) => (
              <option
                key={protocol.slug}
                value={protocol.slug}
              >
                {protocol.name}
              </option>
            ))}
          </select>
        </div>

      </section>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`
        /* =================================================
           ROOT
        ================================================= */

        .protocol-observatory {
          --midnight: #020812;
          --deep: #06152b;
          --blue: #0066ff;
          --blue-bright: #1683ff;
          --blue-soft: #4d9bff;
          --ice: #8ccbff;
          --white: #f7faff;

          position: relative;
          width: 100%;
          min-height: calc(100svh - 82px);
          height: calc(100svh - 82px);
          overflow: hidden;

          padding:
            clamp(22px, 3vh, 34px)
            clamp(24px, 4vw, 72px)
            clamp(24px, 3vh, 34px);

          background:
            radial-gradient(
              circle at 50% 47%,
              rgba(0,102,255,.085),
              transparent 24%
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(22,131,255,.035),
              transparent 52%
            ),
            #020812;

          color: var(--white);
        }

        /* =================================================
           WELLNESS → OBSERVATORY HANDOFF
        ================================================= */

        .protocol-observatory-connected {
          --pointer-x: 50%;
          --pointer-y: 48%;
          margin-top: -1px;
          border-top: 1px solid rgba(140,203,255,.055);
          background:
            linear-gradient(180deg, rgba(22,131,255,.075), transparent 13%),
            radial-gradient(circle at 50% 0%, rgba(140,203,255,.11), transparent 17%),
            radial-gradient(circle at 50% 47%, rgba(0,102,255,.085), transparent 24%),
            radial-gradient(circle at 50% 50%, rgba(22,131,255,.035), transparent 52%),
            #020812;
        }

        .observatory-entry-bridge {
          position: absolute;
          z-index: 45;
          top: 0;
          left: 50%;
          width: min(100vw,1500px);
          height: 150px;
          transform: translateX(-50%);
          pointer-events: none;
          overflow: visible;
        }

        .handoff-horizon {
          position: absolute;
          left: 2%; right: 2%; top: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(140,203,255,.08) 14%, rgba(140,203,255,.82) 50%, rgba(140,203,255,.08) 86%, transparent);
          transform: scaleX(0); transform-origin: center; opacity: 0;
        }

        .handoff-horizon-glow {
          position: absolute;
          left: 15%; right: 15%; top: -9px; height: 20px;
          border-radius: 999px;
          background: radial-gradient(ellipse, rgba(22,131,255,.22), transparent 70%);
          filter: blur(12px); opacity: 0;
        }

        .handoff-spine {
          position: absolute;
          left: 50%; top: 0; width: 1px; height: 132px;
          transform: translateX(-50%) scaleY(0); transform-origin: top;
          background: linear-gradient(to bottom, rgba(247,250,255,.9), rgba(140,203,255,.68) 16%, rgba(22,131,255,.24) 62%, transparent);
          box-shadow: 0 0 22px rgba(22,131,255,.5); opacity: .85;
        }

        .handoff-spine-glow {
          position: absolute;
          left: 50%; top: 0; width: 34px; height: 130px;
          transform: translateX(-50%) scaleY(.3); transform-origin: top;
          background: linear-gradient(to bottom, rgba(22,131,255,.18), transparent 80%);
          filter: blur(9px); opacity: 0;
        }

        .handoff-orbit {
          position: absolute;
          left: 50%; top: 58px; width: 76px; height: 76px;
          border: 1px solid rgba(140,203,255,.08); border-radius: 50%;
          transform: translate(-50%,-50%) scale(.55); opacity: 0;
        }

        .handoff-orbit-a { animation: handoff-orbit-a 9s linear infinite; }
        .handoff-orbit-b { width: 112px; height: 112px; border-color: rgba(22,131,255,.06); animation: handoff-orbit-b 13s linear infinite reverse; }

        .handoff-packet {
          position: absolute;
          left: 50%; top: 0; width: 3px; height: 18px;
          border-radius: 999px;
          background: linear-gradient(to bottom, transparent, #8ccbff, transparent);
          box-shadow: 0 0 12px rgba(140,203,255,.9);
          opacity: 0; transform: translateX(-50%) translateY(-10px);
        }

        .handoff-packet-a { animation: handoff-packet 3.8s 1.2s ease-in infinite; }
        .handoff-packet-b { animation: handoff-packet 4.7s 2.4s ease-in infinite; }
        .handoff-packet-c { animation: handoff-packet 5.4s 3.3s ease-in infinite; }

        .observatory-entry-point {
          position: absolute;
          top: 58px; left: 50%; width: 6px; height: 6px;
          transform: translateX(-50%) scale(.7); border-radius: 50%;
          background: #f7faff;
          box-shadow: 0 0 8px rgba(247,250,255,.95), 0 0 28px rgba(22,131,255,.75), 0 0 55px rgba(22,131,255,.25);
          opacity: 0;
        }

        .protocol-observatory-connected.is-visible .handoff-horizon { animation: handoff-horizon 1.4s .08s cubic-bezier(.16,1,.3,1) forwards; }
        .protocol-observatory-connected.is-visible .handoff-horizon-glow { animation: handoff-glow 3.6s .45s ease-in-out infinite; }
        .protocol-observatory-connected.is-visible .handoff-spine { animation: handoff-spine 1.25s .42s cubic-bezier(.16,1,.3,1) forwards; }
        .protocol-observatory-connected.is-visible .handoff-spine-glow { animation: handoff-spine-glow 3.8s .8s ease-in-out infinite; }
        .protocol-observatory-connected.is-visible .handoff-orbit { opacity: 1; }
        .protocol-observatory-connected.is-visible .observatory-entry-point { animation: handoff-point 2.8s .95s ease-in-out infinite; }

        @keyframes handoff-horizon { from { transform: scaleX(0); opacity: 0; } to { transform: scaleX(1); opacity: 1; } }
        @keyframes handoff-glow { 0%,100% { opacity:.2; transform:scaleX(.7); } 50% { opacity:.8; transform:scaleX(1); } }
        @keyframes handoff-spine { from { transform:translateX(-50%) scaleY(0); } to { transform:translateX(-50%) scaleY(1); } }
        @keyframes handoff-spine-glow { 0%,100% { opacity:.18; transform:translateX(-50%) scaleY(.72); } 50% { opacity:.55; transform:translateX(-50%) scaleY(1); } }
        @keyframes handoff-point { 0%,100% { opacity:.55; transform:translateX(-50%) scale(.75); } 50% { opacity:1; transform:translateX(-50%) scale(1.35); } }
        @keyframes handoff-orbit-a { from { transform:translate(-50%,-50%) rotate(0deg) scale(.78); } to { transform:translate(-50%,-50%) rotate(360deg) scale(1); } }
        @keyframes handoff-orbit-b { from { transform:translate(-50%,-50%) rotate(0deg) scale(.92); } to { transform:translate(-50%,-50%) rotate(-360deg) scale(1); } }
        @keyframes handoff-packet { 0% { opacity:0; transform:translateX(-50%) translateY(-10px) scale(.7); } 12% { opacity:.95; } 78% { opacity:.7; } 100% { opacity:0; transform:translateX(-50%) translateY(138px) scale(.35); } }

        /* =================================================
           ATMOSPHERE
        ================================================= */

        .observatory-atmosphere {
          position: absolute;
          inset: 0;
          pointer-events: none;

          background:
            radial-gradient(
              circle at 50% 48%,
              rgba(77,155,255,.11),
              transparent 20%
            ),
            radial-gradient(
              circle at 15% 10%,
              rgba(0,102,255,.055),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 85%,
              rgba(22,131,255,.04),
              transparent 30%
            );
        }

        .observatory-pointer-field {
          position: absolute; inset: 0; pointer-events: none; opacity: .75;
          background: radial-gradient(520px circle at var(--pointer-x) var(--pointer-y), rgba(77,155,255,.065), transparent 70%);
          mix-blend-mode: screen; transition: opacity .6s ease;
        }

        .observatory-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;

          opacity: .17;

          background-image:
            linear-gradient(
              rgba(140,203,255,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(140,203,255,.035) 1px,
              transparent 1px
            );

          background-size:
            70px 70px;

          mask-image:
            radial-gradient(
              ellipse at center,
              black 15%,
              transparent 76%
            );
        }

        .observatory-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;

          background:
            radial-gradient(
              ellipse at center,
              transparent 42%,
              rgba(0,0,0,.58) 100%
            );
        }

        /* =================================================
           HEADER
        ================================================= */

        .observatory-header {
          position: relative;
          z-index: 30;

          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          max-width: 1500px;
          margin: 0 auto;

          gap: 40px;
        }

        .observatory-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-bottom: 18px;

          font-family:
            "Space Mono",
            monospace;

          font-size: 9px;
          letter-spacing: .24em;

          color: rgba(
            140,
            203,
            255,
            .72
          );
        }

        .observatory-eyebrow span {
          width: 34px;
          height: 1px;

          background:
            var(--blue-soft);
        }

        .observatory-header h2 {
          max-width: 750px;

          margin: 0;

          font-family:
            "Instrument Serif",
            Georgia,
            serif;

          font-size:
            clamp(
              40px,
              4.6vw,
              70px
            );

          font-weight: 400;

          line-height: .94;

          letter-spacing:
            -.045em;
        }

        .observatory-header h2 span {
          color: var(--blue-soft);
        }

        .observatory-header p {
          max-width: 610px;

          margin: 14px 0 0;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 14px;
          line-height: 1.7;

          color:
            rgba(
              247,
              250,
              255,
              .55
            );
        }

        .observatory-live-family {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
          font-family: "Space Mono", monospace;
          font-size: 7px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: rgba(247,250,255,.34);
        }

        .observatory-live-family strong {
          color: rgba(140,203,255,.9);
          font-weight: 500;
        }

        .observatory-live-family small {
          padding-left: 7px;
          border-left: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.22);
        }

        .observatory-live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4D9BFF;
          box-shadow: 0 0 10px rgba(77,155,255,.75);
          animation: family-pulse 1.8s ease-in-out infinite;
        }

        @keyframes family-pulse {
          0%, 100% { opacity: .45; transform: scale(.8); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        .observatory-index {
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          font-family:
            "Space Mono",
            monospace;

          color:
            rgba(
              247,
              250,
              255,
              .4
            );
        }

        .observatory-index span {
          font-size: 8px;
          letter-spacing: .2em;
        }

        .observatory-index strong {
          margin: 2px 0;

          font-size: 40px;
          font-weight: 400;

          line-height: 1;

          color:
            rgba(
              140,
              203,
              255,
              .82
            );
        }

        .observatory-index small {
          font-size: 7px;
          letter-spacing: .18em;
        }

        /* =================================================
           FILTERS
        ================================================= */

        .observatory-filters {
          position: relative;
          z-index: 40;

          display: flex;
          flex-wrap: wrap;
          gap: 8px;

          max-width: 1500px;
          margin: 18px auto 0;
        }

        .observatory-filter {
          border: 1px solid
            rgba(
              247,
              250,
              255,
              .1
            );

          border-radius: 999px;

          padding:
            8px 13px;

          background:
            rgba(
              247,
              250,
              255,
              .025
            );

          font-family:
            "Manrope",
            sans-serif;

          font-size: 9px;
          letter-spacing: .06em;

          color:
            rgba(
              247,
              250,
              255,
              .48
            );

          cursor: pointer;

          transition:
            color .3s ease,
            border-color .3s ease,
            background .3s ease;
        }

        .observatory-filter:hover {
          color: var(--white);

          border-color:
            rgba(
              77,
              155,
              255,
              .38
            );
        }

        .observatory-filter.active {
          color: white;

          border-color:
            rgba(
              22,
              131,
              255,
              .65
            );

          background:
            rgba(
              0,
              102,
              255,
              .12
            );
        }

        .observatory-filter.active { position:relative; overflow:hidden; box-shadow:0 0 0 1px rgba(22,131,255,.05),0 8px 24px rgba(0,102,255,.08); }
        .observatory-filter.active::after { content:""; position:absolute; left:-35%; top:0; width:35%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent); transform:skewX(-20deg); animation:filter-sheen 3.8s ease-in-out infinite; }
        @keyframes filter-sheen { 0%,55% { transform:translateX(0) skewX(-20deg); opacity:0; } 65% { opacity:1; } 100% { transform:translateX(390%) skewX(-20deg); opacity:0; } }
        /* =================================================
           SYSTEM
        ================================================= */

        .observatory-system {
          --orbit-radius: clamp(190px, 25vw, 285px);
          --orbit-radius-outer: clamp(220px, 30vw, 335px);

          position: relative;

          width: min(
            100%,
            1120px
          );

          aspect-ratio: 1 / .76;

          margin:
            18px auto 0;

          isolation: isolate;
        }

        .observatory-system-beam {
          position:absolute; left:50%; top:-8%; width:1px; height:72%; transform:translateX(-50%);
          background:linear-gradient(to bottom, transparent, rgba(140,203,255,.18) 18%, rgba(22,131,255,.1) 70%, transparent);
          box-shadow:0 0 28px rgba(22,131,255,.12); pointer-events:none; opacity:.8;
        }

        .observatory-system-sweep {
          position:absolute; left:50%; top:50%; width:86%; aspect-ratio:1; transform:translate(-50%,-50%); border-radius:50%;
          border:1px solid transparent;
          background:conic-gradient(from 0deg, transparent 0deg, rgba(140,203,255,.16) 24deg, transparent 44deg, transparent 360deg) border-box;
          -webkit-mask:linear-gradient(#000 0 0) padding-box,linear-gradient(#000 0 0);
          -webkit-mask-composite:xor; mask-composite:exclude; opacity:.45; animation:observatory-sweep 18s linear infinite; pointer-events:none;
        }

        @keyframes observatory-sweep { to { transform:translate(-50%,-50%) rotate(360deg); } }

        /* =================================================
           RINGS
        ================================================= */

        .orbit-ring {
          position: absolute;

          left: 50%;
          top: 50%;

          border:
            1px solid
            rgba(
              140,
              203,
              255,
              .095
            );

          border-radius: 50%;

          transform:
            translate(-50%, -50%);

          pointer-events: none;
        }

        .orbit-ring-one {
          width: 55%;
          aspect-ratio: 1;
        }

        .orbit-ring-two {
          width: 72%;
          aspect-ratio: 1;

          border-color:
            rgba(
              140,
              203,
              255,
              .065
            );
        }

        .orbit-ring-three {
          width: 89%;
          aspect-ratio: 1;

          border-style: dashed;

          border-color:
            rgba(
              140,
              203,
              255,
              .045
            );
        }

        .orbit-ticks {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 88%;
          aspect-ratio: 1;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background:
            repeating-conic-gradient(
              from 0deg,
              rgba(
                140,
                203,
                255,
                .13
              )
              0deg
              .4deg,
              transparent
              .4deg
              8deg
            );

          mask:
            radial-gradient(
              transparent 0 48%,
              black 48.2% 48.45%,
              transparent 48.6%
            );

          opacity: .45;
          pointer-events: none;
        }

        /* =================================================
           ROTATING ORBIT
        ================================================= */

        .orbit-spin {
          position: absolute;
          inset: 0;

          transform-origin:
            50% 50%;

          animation:
            observatory-orbit
            52s
            linear
            infinite;

          z-index: 15;
        }

        /* =================================================
           FAMILY ORBIT MODE
        ================================================= */

        .orbit-spin {
          will-change: transform;
        }

        .observatory-system.family-orbit-active
          .orbit-node-counter {
          transition:
            transform .8s cubic-bezier(.22, 1, .36, 1),
            opacity .5s ease;
        }

        .observatory-system.family-orbit-active
          .orbit-icon {
          box-shadow:
            0 0 0 1px rgba(140, 203, 255, .08),
            0 0 24px rgba(22, 131, 255, .08);

          transition:
            width .6s cubic-bezier(.22, 1, .36, 1),
            height .6s cubic-bezier(.22, 1, .36, 1),
            box-shadow .6s ease,
            border-color .6s ease;
        }

        .observatory-system.family-orbit-active
          .orbit-node.active
          .orbit-icon {
          border-color:
            rgba(140, 203, 255, .48);

          box-shadow:
            0 0 0 1px rgba(140, 203, 255, .12),
            0 0 28px rgba(22, 131, 255, .2),
            inset 0 0 22px rgba(22, 131, 255, .08);
        }

        .observatory-system.family-orbit-active
          .orbit-node::before {
          content: "";

          position: absolute;
          left: 50%;
          top: 50%;

          width: 5px;
          height: 5px;

          border-radius: 50%;
          background: rgba(140, 203, 255, .65);
          box-shadow: 0 0 10px rgba(22, 131, 255, .5);
          transform: translate(-50%, -50%);
          opacity: .35;
        }

        @keyframes observatory-orbit {
          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }
        }

        /* =================================================
           NODE
        ================================================= */

        .orbit-node {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 0;
          height: 0;

          padding: 0;

          border: 0;

          background: transparent;

          cursor: pointer;

          transform:
            rotate(var(--node-angle))
            translateY(
              calc(
                var(--node-radius) * -1
              )
            );

          transform-origin:
            center center;
        }

        .orbit-node-counter {
          position: absolute;

          left: 50%;
          top: 50%;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 9px;

          transform:
            translate(-50%, -50%);

          animation:
            observatory-counter
            52s
            linear
            infinite
            reverse;

          white-space: nowrap;
        }

        @keyframes observatory-counter {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        .orbit-icon {
          position: relative;

          display: grid;
          place-items: center;

          width: 64px;
          height: 64px;

          border:
            1px solid
            rgba(
              140,
              203,
              255,
              .12
            );

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 35% 28%,
              rgba(180, 225, 255, .16),
              rgba(36, 126, 255, .10) 32%,
              rgba(2, 8, 18, .94) 72%
            );

          box-shadow:
            inset 0 0 24px rgba(77, 155, 255, .16),
            0 0 0 1px rgba(77, 155, 255, .12),
            0 0 18px rgba(0, 102, 255, .16),
            0 0 42px rgba(77, 155, 255, .08);

          backdrop-filter:
            blur(10px);

          transition:
            width .55s
              cubic-bezier(
                .16,
                1,
                .3,
                1
              ),
            height .55s
              cubic-bezier(
                .16,
                1,
                .3,
                1
              ),
            border-color .4s ease,
            box-shadow .4s ease;
        }

        .orbit-icon::before {
          content: "";

          position: absolute;
          inset: -7px;

          border:
            1px solid
            rgba(
              77,
              155,
              255,
              .08
            );

          border-radius: 50%;

          opacity: .48;

          transform:
            scale(.94);

          box-shadow: 0 0 18px rgba(77, 155, 255, .28);

          transition:
            opacity .4s ease,
            transform .5s
              cubic-bezier(
                .16,
                1,
                .3,
                1
              );
        }

        .orbit-icon img {
          width: 37px;
          height: 37px;

          object-fit: contain;

          opacity: .92;

          filter:
            grayscale(.05)
            brightness(1.12)
            drop-shadow(0 0 7px rgba(77, 155, 255, .42))
            drop-shadow(0 0 18px rgba(77, 155, 255, .16));

          transition:
            width .55s
              cubic-bezier(
                .16,
                1,
                .3,
                1
              ),
            height .55s
              cubic-bezier(
                .16,
                1,
                .3,
                1
              ),
            opacity .4s ease,
            filter .4s ease;
        }

        .fallback-icon {
          font-family:
            "Space Mono",
            monospace;

          font-size: 10px;

          color:
            rgba(
              140,
              203,
              255,
              .55
            );
        }

        /* =================================================
           FOCUSED ORBIT NODE
        ================================================= */

        .orbit-node.focused {
          z-index: 24;
        }

        .orbit-node.focused .orbit-icon {
          width: 78px;
          height: 78px;
          border-color: rgba(77, 155, 255, .42);
          box-shadow:
            0 0 0 1px rgba(77, 155, 255, .12),
            0 0 30px rgba(0, 102, 255, .16),
            inset 0 0 24px rgba(77, 155, 255, .06);
        }

        .orbit-node.focused .orbit-icon::before {
          opacity: .95;
          transform: scale(1.08);
          box-shadow: 0 0 24px rgba(77, 155, 255, .42);
        }

        .orbit-node.focused .orbit-icon img {
          width: 47px;
          height: 47px;
          opacity: 1;
          filter:
            grayscale(0)
            brightness(1.08)
            drop-shadow(0 0 12px rgba(77, 155, 255, .34));
        }

        .orbit-node.focused .orbit-node-info strong {
          color: #fff;
        }

        /* =================================================
           ACTIVE NODE
        ================================================= */

        .orbit-node.active {
          z-index: 20;
        }

        .orbit-node.active .orbit-icon {
          width: 92px;
          height: 92px;

          border-color:
            rgba(
              77,
              155,
              255,
              .8
            );

          background:
            radial-gradient(
              circle at 35% 30%,
              rgba(
                77,
                155,
                255,
                .13
              ),
              rgba(
                2,
                8,
                18,
                .94
              )
            );

          box-shadow:
            0 0 0 1px
              rgba(
                22,
                131,
                255,
                .18
              ),
            0 0 35px
              rgba(
                0,
                102,
                255,
                .23
              ),
            0 0 90px
              rgba(
                0,
                102,
                255,
                .11
              );
        }

        .orbit-node.active .orbit-icon::before {
          opacity: 1;

          transform:
            scale(1);
        }

        .orbit-node.active .orbit-icon img {
          width: 53px;
          height: 53px;

          opacity: 1;

          filter:
            grayscale(0)
            brightness(1.08)
            drop-shadow(
              0 0 12px
              rgba(
                77,
                155,
                255,
                .38
              )
            );
        }

        .orbit-node.active .orbit-icon::after {
          content:""; position:absolute; inset:-15px; border-radius:50%; border:1px solid rgba(77,155,255,.14);
          box-shadow:0 0 30px rgba(22,131,255,.18); opacity:.8; animation:active-node-breathe 2.8s ease-in-out infinite; pointer-events:none;
        }
        @keyframes active-node-breathe { 0%,100% { transform:scale(.9); opacity:.3; } 50% { transform:scale(1.06); opacity:.85; } }

        /* =================================================
           NODE INFORMATION
        ================================================= */

        .orbit-node-info {
          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 3px;
          padding: 5px 10px 6px;
          border: 1px solid rgba(140, 203, 255, .08);
          border-radius: 999px;
          background: rgba(2, 8, 18, .72);
          box-shadow: 0 8px 26px rgba(0, 0, 0, .22);
          backdrop-filter: blur(12px);

          opacity: 0;
          transform: translateY(-4px) scale(.94);
          pointer-events: none;
          transition:
            opacity .45s ease,
            transform .55s cubic-bezier(.16, 1, .3, 1),
            border-color .45s ease,
            background .45s ease;
        }

        .orbit-node-info.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .orbit-node-info small {
          font-family:
            "Space Mono",
            monospace;

          font-size: 7px;

          letter-spacing: .18em;

          color:
            rgba(
              140,
              203,
              255,
              .4
            );
        }

        .orbit-node-info strong {
          font-family:
            "Manrope",
            sans-serif;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: .14em;

          color:
            rgba(
              247,
              250,
              255,
              .5
            );

          transition:
            color .35s ease;
        }

        .orbit-node.active
          .orbit-node-info strong {
          color: white;
        }

        .orbit-node-connector {
          position: absolute;

          width: 1px;
          height: 38px;

          top: 70px;

          background:
            linear-gradient(
              to bottom,
              rgba(
                77,
                155,
                255,
                .4
              ),
              transparent
            );

          opacity: 0;

          transition:
            opacity .4s ease;
        }

        .orbit-node.active
          .orbit-node-connector {
          opacity: 1;
        }

        /* =================================================
           CENTRAL CORE
        ================================================= */

        .observatory-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width:
            clamp(
              240px,
              29vw,
              390px
            );

          aspect-ratio: 1;

          transform:
            translate(-50%, -50%);

          z-index: 25;
        }

        .core-energy {
          position: absolute;
          inset: -14%;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(
                0,
                102,
                255,
                .18
              ),
              rgba(
                0,
                102,
                255,
                .045
              ) 42%,
              transparent 70%
            );

          filter:
            blur(20px);

          animation:
            core-breathe
            4s
            ease-in-out
            infinite;
        }

        @keyframes core-breathe {
          0%,
          100% {
            opacity: .55;
            transform: scale(.97);
          }

          50% {
            opacity: .9;
            transform: scale(1.03);
          }
        }

        .core-ring {
          position: absolute;
          inset: -9%;

          border-radius: 50%;

          border:
            1px solid
            rgba(
              77,
              155,
              255,
              .15
            );

          pointer-events: none;
        }

        .core-ring-one {
          animation:
            core-ring-spin
            28s
            linear
            infinite;
        }

        .core-ring-two {
          inset: -14%;

          border-style: dashed;

          border-color:
            rgba(
              140,
              203,
              255,
              .07
            );

          animation:
            core-ring-spin
            42s
            linear
            infinite
            reverse;
        }

        @keyframes core-ring-spin {
          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }
        }

        .core-video-shell {
          position: absolute;
          inset: 0;

          overflow: hidden;

          border:
            1px solid
            rgba(
              140,
              203,
              255,
              .24
            );

          border-radius: 50%;

          background:
            #020812;

          box-shadow:
            0 0 0 1px
              rgba(
                0,
                102,
                255,
                .08
              ),
            0 0 60px
              rgba(
                0,
                102,
                255,
                .12
              ),
            inset 0 0 60px
              rgba(
                0,
                0,
                0,
                .65
              );
        }

        .core-video-shell::before {
          content:""; position:absolute; inset:-1px; border-radius:50%;
          background:conic-gradient(from 205deg,transparent 0 36%,rgba(140,203,255,.65) 41%,rgba(22,131,255,.18) 47%,transparent 55% 100%);
          -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0); -webkit-mask-composite:xor; mask-composite:exclude;
          padding:1px; opacity:.8; animation:core-iris 9s linear infinite; pointer-events:none; z-index:4;
        }
        .core-video-shell::after {
          content:""; position:absolute; inset:9%; border-radius:50%; border:1px solid rgba(140,203,255,.06);
          box-shadow:inset 0 0 45px rgba(0,102,255,.08); opacity:.7; pointer-events:none; z-index:3;
        }
        @keyframes core-iris { to { transform:rotate(360deg); } }

        .core-video {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          filter:
            saturate(.9)
            contrast(1.04)
            brightness(.78);
        }

        .core-video-overlay {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at center,
              transparent 24%,
              rgba(
                2,
                8,
                18,
                .35
              ) 75%,
              rgba(
                2,
                8,
                18,
                .85
              ) 100%
            ),
            linear-gradient(
              135deg,
              rgba(
                0,
                102,
                255,
                .08
              ),
              transparent 50%
            );

          pointer-events: none;
        }

        .core-scanline {
          position: absolute;

          left: 0;
          right: 0;

          height: 1px;

          top: 0;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(
                140,
                203,
                255,
                .7
              ),
              transparent
            );

          box-shadow:
            0 0 14px
              rgba(
                77,
                155,
                255,
                .5
              );

          opacity: .5;

          animation:
            scanline
            5s
            linear
            infinite;
        }

        @keyframes scanline {
          from {
            transform:
              translateY(0);
          }

          to {
            transform:
              translateY(500px);
          }
        }

        .core-label {
          position: absolute;

          left: 50%;
          bottom: 17%;

          display: flex;
          flex-direction: column;
          align-items: center;

          transform:
            translateX(-50%);

          text-align: center;
        }

        .core-label span {
          font-family:
            "Space Mono",
            monospace;

          font-size: 7px;

          letter-spacing: .22em;

          color:
            rgba(
              140,
              203,
              255,
              .62
            );
        }

        .core-label strong {
          margin-top: 5px;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 14px;
          font-weight: 600;

          letter-spacing: .12em;

          color: white;
        }

        .core-corner {
          position: absolute;

          width: 18px;
          height: 18px;

          border-color:
            rgba(
              140,
              203,
              255,
              .65
            );

          border-style: solid;
        }

        .core-corner-tl {
          top: 24px;
          left: 24px;

          border-width:
            1px 0 0 1px;
        }

        .core-corner-tr {
          top: 24px;
          right: 24px;

          border-width:
            1px 1px 0 0;
        }

        .core-corner-bl {
          bottom: 24px;
          left: 24px;

          border-width:
            0 0 1px 1px;
        }

        .core-corner-br {
          bottom: 24px;
          right: 24px;

          border-width:
            0 1px 1px 0;
        }

        .core-metadata {
          position: absolute;

          left: 50%;
          bottom: -42px;

          display: flex;
          align-items: center;
          gap: 11px;

          transform:
            translateX(-50%);

          white-space: nowrap;

          font-family:
            "Space Mono",
            monospace;

          font-size: 7px;

          letter-spacing: .13em;

          color:
            rgba(
              247,
              250,
              255,
              .4
            );
        }

        .core-metadata i {
          width: 18px;
          height: 1px;

          background:
            rgba(
              77,
              155,
              255,
              .45
            );
        }

        /* =================================================
           ENERGY ORBITS
        ================================================= */

        .energy-orbit {
          position: absolute;

          left: 50%;
          top: 50%;

          border-radius: 50%;

          pointer-events: none;

          transform:
            translate(-50%, -50%);
        }

        .energy-orbit span {
          position: absolute;

          top: 0;
          left: 50%;

          width: 4px;
          height: 4px;

          margin-left: -2px;

          border-radius: 50%;

          background:
            var(--blue-soft);

          box-shadow:
            0 0 12px
              rgba(
                77,
                155,
                255,
                .85
              );
        }

        .energy-orbit-one {
          width: 56%;
          aspect-ratio: 1;

          animation:
            energy-spin
            13s
            linear
            infinite;
        }

        .energy-orbit-two {
          width: 70%;
          aspect-ratio: 1;

          animation:
            energy-spin
            20s
            linear
            infinite
            reverse;
        }

        .energy-orbit-three {
          width: 88%;
          aspect-ratio: 1;

          animation:
            energy-spin
            31s
            linear
            infinite;
        }

        .energy-orbit-two span {
          width: 3px;
          height: 3px;

          opacity: .55;
        }

        .energy-orbit-three span {
          width: 2px;
          height: 2px;

          opacity: .35;
        }

        @keyframes energy-spin {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        /* =================================================
           INFORMATION
        ================================================= */

        .observatory-information {
          position: relative;
          z-index: 30;

          display: grid;

          grid-template-columns:
            90px
            minmax(0, 1fr)
            auto;

          align-items: end;

          gap: 30px;

          max-width: 1120px;

          margin:
            -5px auto 0;

          padding:
            28px 0;

          border-top:
            1px solid
            rgba(
              247,
              250,
              255,
              .08
            );

          border-bottom:
            1px solid
            rgba(
              247,
              250,
              255,
              .08
            );
        }

        .information-number {
          display: flex;
          align-items: center;
          gap: 13px;

          font-family:
            "Space Mono",
            monospace;
        }

        .information-number span {
          font-size: 28px;

          color:
            rgba(
              140,
              203,
              255,
              .8
            );
        }

        .information-number i {
          width: 24px;
          height: 1px;

          background:
            rgba(
              77,
              155,
              255,
              .5
            );
        }

        .information-family {
          margin-bottom: 7px;

          font-family:
            "Space Mono",
            monospace;

          font-size: 8px;

          letter-spacing: .18em;

          color:
            rgba(
              140,
              203,
              255,
              .58
            );
        }

        .information-copy h3 {
          margin: 0;

          font-family:
            "Manrope",
            sans-serif;

          font-size:
            clamp(
              22px,
              2.5vw,
              34px
            );

          font-weight: 500;

          letter-spacing:
            -.035em;
        }

        .information-copy p {
          max-width: 650px;

          margin:
            7px 0 0;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 12px;

          line-height: 1.65;

          color:
            rgba(
              247,
              250,
              255,
              .48
            );
        }

        .information-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;

          min-height: 42px;

          padding:
            0 18px;

          border:
            1px solid
            rgba(
              77,
              155,
              255,
              .35
            );

          border-radius: 999px;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: .08em;

          color: white;

          text-decoration: none;

          transition:
            border-color .35s ease,
            background .35s ease,
            transform .35s ease;
        }

        .information-link:hover {
          border-color:
            rgba(
              77,
              155,
              255,
              .8
            );

          background:
            rgba(
              0,
              102,
              255,
              .1
            );

          transform:
            translateY(-2px);
        }

        .information-link span {
          color:
            var(--blue-soft);

          font-size: 15px;
        }

        .observatory-information::before {
          content:""; position:absolute; left:0; top:-1px; width:90px; height:1px;
          background:linear-gradient(90deg,transparent,rgba(140,203,255,.8),transparent); box-shadow:0 0 16px rgba(22,131,255,.4);
          animation:information-sweep 5.5s ease-in-out infinite;
        }
        @keyframes information-sweep { 0%,25% { transform:translateX(0); opacity:0; } 35% { opacity:1; } 70% { opacity:.45; } 100% { transform:translateX(460px); opacity:0; } }

        /* =================================================
           MOBILE SELECTOR
        ================================================= */

        .mobile-protocol-selector {
          display: none;
        }

        /* =================================================
           DESKTOP EDITORIAL LAYOUT
        ================================================= */

        @media (min-width: 901px) {
          .protocol-observatory {
            display: grid;
            grid-template-columns: minmax(320px, .72fr) minmax(520px, 1.28fr);
            grid-template-rows: auto auto minmax(0, 1fr);
            column-gap: clamp(34px, 5vw, 84px);
            row-gap: 0;
            align-items: center;
            min-height: 0;
            height: 100%;
            padding-top: 0;
            padding-bottom: 0;
          }

          .observatory-header {
            grid-column: 1 / -1;
            grid-row: 1;
            width: 100%;
            align-self: start;
          }

          .observatory-filters {
            grid-column: 1 / -1;
            grid-row: 2;
            width: 100%;
            margin-top: 14px;
          }

          .observatory-information {
            grid-column: 1;
            grid-row: 3;
            width: 100%;
            max-width: 560px;
            margin: 0;
            padding: 18px 0;
            grid-template-columns: 68px minmax(0, 1fr);
            gap: 18px;
            align-self: center;
          }

          .information-number {
            align-self: start;
          }

          .information-number span {
            font-size: clamp(30px, 3vw, 44px);
          }

          .information-copy h3 {
            font-size: clamp(30px, 2.8vw, 42px);
            line-height: 1;
          }

          .information-copy p {
            max-width: 480px;
            margin-top: 10px;
            font-size: 12px;
            line-height: 1.75;
          }

          .information-link {
            grid-column: 2;
            justify-self: start;
            margin-top: 14px;
          }

          .observatory-system {
            grid-column: 2;
            grid-row: 3;
            width: 100%;
            max-width: 660px;
            max-height: 100%;
            aspect-ratio: 1 / .86;
            margin: 0 auto;
            align-self: center;
          }

          .observatory-core {
            width: clamp(260px, 24vw, 390px);
          }
        }

        /* =================================================
           RESPONSIVE
        ================================================= */

        @media (max-width: 900px) {
          .observatory-entry-bridge { height: 92px; width: 100vw; }
          .handoff-spine { height:82px; }
          .handoff-spine-glow { height:80px; }
          .handoff-orbit-a { width:56px; height:56px; }
          .handoff-orbit-b { width:82px; height:82px; }
          .observatory-entry-point { top:58px; }

          .protocol-observatory {
            min-height: auto;
            height: auto;
            padding:
              80px 18px 50px;
          }

          .observatory-header {
            align-items: flex-start;
          }

          .observatory-index {
            display: none;
          }

          .observatory-header h2 {
            font-size:
              clamp(
                42px,
                12vw,
                68px
              );
          }

          .observatory-system {
            --orbit-radius: clamp(155px, 26vw, 225px);
            --orbit-radius-outer: clamp(185px, 32vw, 270px);

            width: 100%;

            aspect-ratio: 1 / 1;

            margin-top: 10px;
          }

          .orbit-ring-one {
            width: 62%;
          }

          .orbit-ring-two {
            width: 82%;
          }

          .orbit-ring-three {
            width: 98%;
          }

          .orbit-icon {
            width: 50px;
            height: 50px;
          }

          .orbit-icon img {
            width: 30px;
            height: 30px;
          }

          .orbit-node.active
            .orbit-icon {
            width: 72px;
            height: 72px;
          }

          .orbit-node.active
            .orbit-icon img {
            width: 42px;
            height: 42px;
          }

          .orbit-node-info strong {
            font-size: 7px;
          }

          .observatory-core {
            width:
              min(
                42vw,
                285px
              );
          }

          .observatory-information {
            grid-template-columns:
              55px
              minmax(0, 1fr);

            gap: 16px;
          }

          .information-link {
            grid-column: 2;

            width: fit-content;
          }
        }

        @media (max-width: 640px) {
          .protocol-observatory {
            min-height: auto;
            height: auto;
            padding:
              68px 16px 40px;
          }

          .observatory-header p {
            font-size: 12px;
          }

          .observatory-filters {
            flex-wrap: nowrap;

            overflow-x: auto;

            padding-bottom: 5px;

            scrollbar-width: none;
          }

          .observatory-filters::-webkit-scrollbar {
            display: none;
          }

          .observatory-filter {
            flex: 0 0 auto;
          }

          .observatory-system {
            display: none;
          }

          .mobile-protocol-selector {
            position: relative;
            z-index: 30;

            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 20px;

            margin-top: 30px;

            padding:
              18px;

            border:
              1px solid
              rgba(
                247,
                250,
                255,
                .1
              );

            background:
              rgba(
                6,
                21,
                43,
                .55
              );
          }

          .mobile-protocol-selector > div {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .mobile-protocol-selector span {
            font-family:
              "Space Mono",
              monospace;

            font-size: 7px;

            letter-spacing: .18em;

            color:
              rgba(
                140,
                203,
                255,
                .55
              );
          }

          .mobile-protocol-selector strong {
            font-family:
              "Manrope",
              sans-serif;

            font-size: 17px;
            font-weight: 600;
          }

          .mobile-protocol-selector select {
            max-width: 145px;

            padding:
              9px 10px;

            border:
              1px solid
              rgba(
                77,
                155,
                255,
                .3
              );

            border-radius: 4px;

            outline: none;

            background:
              #020812;

            color: white;

            font-size: 10px;
          }

          .observatory-information {
            margin-top: 28px;

            padding:
              22px 0;

            grid-template-columns:
              48px
              minmax(0, 1fr);
          }

          .information-number span {
            font-size: 20px;
          }

          .information-copy h3 {
            font-size: 24px;
          }

          .information-copy p {
            font-size: 11px;
          }

        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .orbit-spin,
          .orbit-node-counter,
          .core-energy,
          .core-ring-one,
          .core-ring-two,
          .core-scanline,
          .energy-orbit-one,
          .energy-orbit-two,
          .energy-orbit-three,
          .observatory-entry-point {
            animation: none !important;
          }

          .orbit-node,
          .orbit-icon,
          .orbit-icon img {
            transition: none !important;
          }

          .observatory-entry-bridge *,
          .observatory-system-sweep,
          .core-video-shell::before,
          .orbit-node.active .orbit-icon::after,
          .observatory-information::before,
          .observatory-filter.active::after {
            animation:none !important;
          }
        }
      `}</style>
    </>
  );
}