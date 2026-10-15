
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Atom,
  Brain,
  Dna,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Waves,
  type LucideIcon,
} from "lucide-react";

type WellnessFamily =
  | "Skin & Beauty"
  | "Cellular & Longevity"
  | "Metabolic & Performance"
  | "Digestive & Systemic"
  | "Women's Wellness"
  | "Recovery & Immune"
  | "Cognitive & Neuro"
  | "Musculoskeletal";

type Ingredient = {
  name: string;
  amount?: string;
  detail?: string;
};

type Protocol = {
  id?: string;
  slug: string;
  name: string;
  number: string;
  family: WellnessFamily;
  description: string;
  shortDescription?: string;
  category?: string;
  active?: boolean;
  ingredients?: unknown;
  formulation?: unknown;
};

type FamilyData = {
  id: WellnessFamily;
  shortName: string;
  descriptor: string;
  image: string;
};

const FAMILY_DATA: FamilyData[] = [
  {
    id: "Skin & Beauty",
    shortName: "Skin",
    descriptor: "RADIANCE · REPAIR · RESTORATION",
    image: "/images/wellness/skin-beauty.png",
  },
  {
    id: "Cellular & Longevity",
    shortName: "Longevity",
    descriptor: "RENEWAL · ENERGY · VITALITY",
    image: "/images/wellness/cellular-longevity.png",
  },
  {
    id: "Metabolic & Performance",
    shortName: "Performance",
    descriptor: "ENERGY · STAMINA · RESILIENCE",
    image: "/images/wellness/metabolic-performance.png",
  },
  {
    id: "Digestive & Systemic",
    shortName: "Digestive",
    descriptor: "GUT HEALTH · BALANCE · IMMUNITY",
    image: "/images/wellness/digestive-systemic.png",
  },
  {
    id: "Women's Wellness",
    shortName: "Women's",
    descriptor: "HORMONAL · REPRODUCTIVE · VITALITY",
    image: "/images/wellness/womens-nutritional.png",
  },
  {
    id: "Recovery & Immune",
    shortName: "Recovery",
    descriptor: "RECOVERY · RESILIENCE · IMMUNE SUPPORT",
    image: "/images/wellness/recovery-immune.png",
  },
  {
    id: "Cognitive & Neuro",
    shortName: "Cognitive",
    descriptor: "FOCUS · CLARITY · NEURO SUPPORT",
    image: "/images/wellness/cognitive-neuro.png",
  },
  {
    id: "Musculoskeletal",
    shortName: "Movement",
    descriptor: "MOBILITY · MOVEMENT · RECOVERY",
    image: "/images/wellness/musculoskeletal.png",
  },
];

const FAMILY_ORDER = FAMILY_DATA.map((family) => family.id);

const FAMILY_ICONS: Record<WellnessFamily, LucideIcon> = {
  "Skin & Beauty": Sparkles,
  "Cellular & Longevity": Atom,
  "Metabolic & Performance": Activity,
  "Digestive & Systemic": Waves,
  "Women's Wellness": HeartPulse,
  "Recovery & Immune": ShieldCheck,
  "Cognitive & Neuro": Brain,
  Musculoskeletal: Dna,
};

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
    slug: "longevity-x",
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
    number: "16",
    family: "Metabolic & Performance",
    description: "Advanced performance nutritional wellness support.",
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
    description: "Cognitive and neuronal nutritional wellness support.",
  },
];

/* Ingredient information reused from the existing Decode a Vial collection.
   Values are only shown where formulation data is available. */

const SIGNATURE_INGREDIENTS: Record<string, Ingredient[]> = {
  glamour: [
    { name: "Glutathione", amount: "4200 mg" },
    { name: "Vitamin C", amount: "6300 mg" },
    { name: "NAC", amount: "400 mg" },
    { name: "B-Complex", detail: "Vitamin support" },
  ],
  renew: [
    { name: "Glutathione", amount: "3600 mg" },
    { name: "Vitamin C", amount: "6200 mg" },
    { name: "NAC", amount: "400 mg" },
    { name: "Essential Amino Acid Blend", detail: "9 amino acids" },
  ],
  radiance: [
    { name: "Glutathione", amount: "3000 mg" },
    { name: "Vitamin C", amount: "4700 mg" },
    { name: "NAC", amount: "400 mg" },
    { name: "B-Complex", detail: "Vitamin support" },
  ],
  shrink: [
    { name: "Glutathione", amount: "2400 mg" },
    { name: "Vitamin C", amount: "3000 mg" },
    { name: "L-Carnitine", amount: "3000 mg" },
    { name: "Thiamine", amount: "100 mg" },
  ],
  restore: [
    { name: "Glutathione", amount: "1800 mg" },
    { name: "Vitamin C", amount: "1500 mg" },
    { name: "NAC", amount: "400 mg" },
    { name: "B-Complex", detail: "Vitamin support" },
  ],
  reactivate: [
    { name: "Glutathione", amount: "2400 mg" },
    { name: "Vitamin C", amount: "3000 mg" },
    { name: "Thiamine", amount: "100 mg" },
    { name: "NAC", amount: "400 mg" },
  ],
  fit: [
    { name: "Glutathione", amount: "2400 mg" },
    { name: "Vitamin C", amount: "1500 mg" },
    { name: "L-Carnitine", amount: "1000 mg" },
    { name: "Magnesium Sulfate", amount: "500 mg" },
  ],
  refuel: [
    { name: "Glutathione", amount: "2400 mg" },
    { name: "Vitamin C", amount: "1500 mg" },
    { name: "L-Alanyl-L-Glutamine", amount: "10000 mg" },
    { name: "NAC", amount: "200 mg" },
  ],
  nadx: [
    { name: "NAD+", amount: "500 mg" },
    { name: "Electrolyte Hydration Base", detail: "Hydration base" },
  ],
  rebuild: [
    { name: "L-Alanyl-L-Glutamine", amount: "10000 mg" },
    { name: "Vitamin C", amount: "3000 mg" },
    { name: "NAC", amount: "200 mg" },
    { name: "Essential Amino Acid Blend", detail: "Amino acid blend" },
  ],
  move: [
    { name: "Magnesium Sulfate", amount: "1000 mg" },
    { name: "Vitamin C", amount: "3000 mg" },
    { name: "Vitamin D3", amount: "600,000 IU" },
    { name: "NAC", amount: "400 mg" },
  ],
  femme: [
    { name: "Iron", amount: "500 mg" },
    { name: "Vitamin C", amount: "3000 mg" },
    { name: "NAC", amount: "200 mg" },
    { name: "B12 + Folic Acid + Niacinamide", detail: "Vitamin complex" },
  ],
  methyblu: [
    { name: "Methylene Blue", amount: "200 mg" },
    { name: "B12 + Folic Acid + Niacinamide", detail: "Vitamin complex" },
    { name: "B-Complex", detail: "Vitamin support" },
    { name: "Dextrose 5%", detail: "Formulation component" },
  ],
};

function normalizeSlug(value: unknown): string {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeFamily(value: unknown): WellnessFamily {
  const family = String(value ?? "").toLowerCase();

  if (family.includes("skin") || family.includes("beauty") || family.includes("glamour")) {
    return "Skin & Beauty";
  }

  if (family.includes("cellular") || family.includes("longevity") || family.includes("nad") || family.includes("methyblu")) {
    return "Cellular & Longevity";
  }

  if (family.includes("metabolic") || family.includes("performance") || family.includes("weight") || family.includes("shrink")) {
    return "Metabolic & Performance";
  }

  if (family.includes("digestive") || family.includes("systemic") || family.includes("gut")) {
    return "Digestive & Systemic";
  }

  if (family.includes("women") || family.includes("femme")) {
    return "Women's Wellness";
  }

  if (family.includes("recovery") || family.includes("immune") || family.includes("bounce") || family.includes("recover")) {
    return "Recovery & Immune";
  }

  if (family.includes("cognitive") || family.includes("neuro") || family.includes("focus")) {
    return "Cognitive & Neuro";
  }

  if (family.includes("musculoskeletal") || family.includes("mobility") || family.includes("move")) {
    return "Musculoskeletal";
  }

  return "Cellular & Longevity";
}

function getIngredients(protocol: Protocol): Ingredient[] {
  const formulation = protocol.formulation as
    | { ingredients?: unknown }
    | undefined;

  const raw = protocol.ingredients ?? formulation?.ingredients;

  if (Array.isArray(raw)) {
    const mapped = raw
      .map((item): Ingredient | null => {
        if (typeof item === "string") return { name: item };
        if (!item || typeof item !== "object") return null;

        const source = item as Record<string, unknown>;
        const name = String(source.name ?? source.title ?? "").trim();

        if (!name) return null;

        const amount = source.amount ?? source.dose ?? source.quantity;

        return {
          name,
          ...(amount ? { amount: String(amount) } : {}),
          ...(source.detail ? { detail: String(source.detail) } : {}),
        };
      })
      .filter((item): item is Ingredient => Boolean(item));

    if (mapped.length) return mapped.slice(0, 4);
  }

  return SIGNATURE_INGREDIENTS[normalizeSlug(protocol.slug)] ?? [];
}

function toProtocol(
  raw: Record<string, unknown>,
  index: number,
): Protocol | null {
  const name = String(raw.name ?? raw.title ?? "").trim();

  if (!name || raw.active === false) return null;

  const slug = normalizeSlug(raw.slug ?? raw.id ?? name);

  if (!slug) return null;

  return {
    id: String(raw.id ?? slug),
    slug,
    name,
    number: String(raw.number ?? String(index + 1).padStart(2, "0")),
    family: normalizeFamily(raw.family ?? raw.category),
    description: String(
      raw.description ??
        raw.shortDescription ??
        raw.summary ??
        "Protocol details are available through the DRIPLABS protocol collection.",
    ),
    shortDescription:
      typeof raw.shortDescription === "string"
        ? raw.shortDescription
        : undefined,
    category:
      typeof raw.category === "string" ? raw.category : undefined,
    active: raw.active !== false,
    ingredients: raw.ingredients,
    formulation: raw.formulation,
  };
}

export default function UnifiedWellnessObservatory() {
  const reducedMotion = useReducedMotion();

  const [protocols, setProtocols] =
    useState<Protocol[]>(FALLBACK_PROTOCOLS);

  const [activeFamily, setActiveFamily] =
    useState<WellnessFamily>("Cellular & Longevity");

  const [activeSlug, setActiveSlug] = useState("nadx");
  const [protocolsPaused, setProtocolsPaused] = useState(false);

  const familyViewportRef = useRef<HTMLDivElement | null>(null);

  const familyCardRefs = useRef(
    new Map<WellnessFamily, HTMLButtonElement>(),
  );

  const pauseFamilyRotationUntil = useRef(0);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function loadProtocols() {
      try {
        const response = await fetch("/api/protocols", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) return;

        const payload: unknown = await response.json();
        const root = payload as {
          data?: unknown;
          protocols?: unknown;
        };

        const list = Array.isArray(payload)
          ? payload
          : Array.isArray(root?.protocols)
            ? root.protocols
            : Array.isArray(root?.data)
              ? root.data
              : [];

        const parsed = list
          .map((item, index) =>
            item && typeof item === "object"
              ? toProtocol(item as Record<string, unknown>, index)
              : null,
          )
          .filter((item): item is Protocol => Boolean(item));

        if (!cancelled && parsed.length) {
          const merged = new Map<string, Protocol>(
            FALLBACK_PROTOCOLS.map(
              (protocol) => [protocol.slug, protocol] as [string, Protocol],
            ),
          );

          parsed.forEach((protocol) => merged.set(protocol.slug, protocol));

          setProtocols(Array.from(merged.values()));
        }
      } catch {
        // Keep the local catalogue visible if the API is unavailable.
      }
    }

    void loadProtocols();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  const activeFamilyData = useMemo(
    () => FAMILY_DATA.find((item) => item.id === activeFamily) ?? FAMILY_DATA[1],
    [activeFamily],
  );

  const familyProtocols = useMemo(
    () =>
      protocols.filter(
        (protocol) =>
          protocol.active !== false && protocol.family === activeFamily,
      ),
    [protocols, activeFamily],
  );

  const activeProtocol = useMemo(
    () =>
      familyProtocols.find((protocol) => protocol.slug === activeSlug) ??
      familyProtocols[0] ??
      protocols.find((protocol) => protocol.slug === activeSlug) ??
      protocols[0] ??
      FALLBACK_PROTOCOLS[5],
    [familyProtocols, activeSlug, protocols],
  );

  const activeIngredients = useMemo(
    () => getIngredients(activeProtocol),
    [activeProtocol],
  );

  const repeatedCount = Math.max(
    4,
    Math.ceil(8 / Math.max(familyProtocols.length, 1)),
  );

  const loopProtocols = useMemo(
    () => Array.from({ length: repeatedCount }, () => familyProtocols).flat(),
    [familyProtocols, repeatedCount],
  );

  const setFamilyAndPause = useCallback((family: WellnessFamily) => {
    pauseFamilyRotationUntil.current = Date.now() + 11000;
    setActiveFamily(family);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (
        protocolsPaused ||
        Date.now() < pauseFamilyRotationUntil.current
      ) {
        return;
      }

      setActiveFamily((current) => {
        const index = FAMILY_ORDER.indexOf(current);

        return FAMILY_ORDER[(index + 1) % FAMILY_ORDER.length];
      });
    }, 7200);

    return () => window.clearInterval(timer);
  }, [protocolsPaused]);

  useEffect(() => {
    const element = familyCardRefs.current.get(activeFamily);
    const viewport = familyViewportRef.current;

    if (!element || !viewport) return;

    const target = element.offsetLeft - viewport.offsetLeft;

    if (reducedMotion) {
      viewport.scrollLeft = target;
    } else {
      viewport.scrollTo({
        left: target,
        behavior: "smooth",
      });
    }
  }, [activeFamily, reducedMotion]);

  useEffect(() => {
    if (!familyProtocols.length) return;

    if (
      !familyProtocols.some(
        (protocol) => protocol.slug === activeSlug,
      )
    ) {
      setActiveSlug(familyProtocols[0].slug);
    }
  }, [familyProtocols, activeSlug]);

  const selectProtocol = useCallback((protocol: Protocol) => {
    pauseFamilyRotationUntil.current = Date.now() + 11000;
    setActiveFamily(protocol.family);
    setActiveSlug(protocol.slug);
  }, []);

  const familyCount = FAMILY_DATA.length;
  const protocolCount = protocols.length;

  return (
    <section
      className={`uw-observatory ${
        reducedMotion ? "uw-reduced-motion" : ""
      }`}
      id="wellness-observatory"
    >
      <style>{`
        .uw-observatory {
          --uw-navy: #07152a;
          --uw-blue: #1677f8;
          --uw-blue-2: #48a0ff;
          --uw-ice: #f5f9ff;
          --uw-ink: #101d38;
          --uw-muted: #63718a;
          --uw-amber: #f0ad63;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: linear-gradient(135deg,#fbfdff 0%,#edf5ff 49%,#f9fbff 100%);
          color: var(--uw-ink);
          padding: clamp(42px,5vw,82px) clamp(18px,4vw,66px) clamp(54px,6vw,94px);
        }

        .uw-observatory:before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 74% 8%,rgba(72,160,255,.2),transparent 32%),
            radial-gradient(ellipse at 4% 38%,rgba(186,217,255,.42),transparent 35%),
            radial-gradient(ellipse at 78% 88%,rgba(240,173,99,.09),transparent 27%);
        }

        .uw-shell { max-width:1660px; margin:0 auto; position:relative; }

        .uw-top {
          display:grid;
          grid-template-columns:minmax(240px,.76fr) minmax(0,2.24fr);
          gap:clamp(22px,3vw,52px);
          align-items:center;
          padding-bottom:clamp(28px,3.4vw,48px);
          border-bottom:1px solid rgba(33,101,190,.16);
        }

        .uw-kicker {
          display:flex;
          align-items:center;
          gap:12px;
          margin-bottom:18px;
          color:#226bd0;
          font-size:9px;
          font-weight:700;
          letter-spacing:.31em;
          text-transform:uppercase;
        }

        .uw-kicker-line { width:35px; height:1px; background:linear-gradient(90deg,#146df0,#9ccaff); }

        .uw-intro h2 {
          font-family:var(--font-heading,Georgia,serif);
          font-size:clamp(2.8rem,4.2vw,5rem);
          font-weight:400;
          line-height:.88;
          letter-spacing:-.065em;
          margin:0;
          color:#101b37;
        }

        .uw-intro h2 em { display:block; color:#176cf3; font-weight:400; margin-top:.06em; }

        .uw-intro p { max-width:300px; margin:18px 0 0; color:#536582; font-size:13px; line-height:1.65; }

        .uw-family-meta {
          display:flex;
          align-items:center;
          gap:9px;
          margin-top:24px;
          color:#55708f;
          font-size:8px;
          letter-spacing:.2em;
          text-transform:uppercase;
        }

        .uw-family-meta strong { color:#1268ef; font-size:12px; font-weight:600; letter-spacing:.05em; }

        .uw-family-meta i {
          display:inline-block;
          width:5px;
          height:5px;
          border-radius:50%;
          background:#2387ff;
          box-shadow:0 0 12px #66b2ff;
        }

        .uw-family-wrap { min-width:0; position:relative; }

        .uw-family-viewport {
          display:flex;
          gap:13px;
          overflow-x:auto;
          scrollbar-width:none;
          scroll-snap-type:x mandatory;
          padding:9px 5px 14px;
          overscroll-behavior-x:contain;
          scroll-behavior:smooth;
        }

        .uw-family-viewport::-webkit-scrollbar { display:none; }

        .uw-family-card {
          position:relative;
          isolation:isolate;
          overflow:hidden;
          flex:0 0 calc((100% - 26px)/3);
          min-width:0;
          aspect-ratio:.91/1;
          max-height:340px;
          scroll-snap-align:start;
          border:1px solid rgba(255,255,255,.86);
          border-radius:15px;
          background:#d9e8fb;
          text-align:left;
          box-shadow:0 14px 36px rgba(34,83,146,.10);
          cursor:pointer;
          transition:
            border-color .65s cubic-bezier(.22,1,.36,1),
            box-shadow .65s cubic-bezier(.22,1,.36,1),
            transform .65s cubic-bezier(.22,1,.36,1);
        }

        .uw-family-card:hover { transform:translateY(-4px); box-shadow:0 20px 44px rgba(22,104,230,.16); }

        .uw-family-card.active {
          border-color:rgba(22,119,248,.95);
          box-shadow:0 0 0 1px rgba(22,119,248,.42),0 0 0 5px rgba(93,169,255,.12),0 18px 48px rgba(22,119,248,.22);
          transform:translateY(-3px);
        }

        .uw-family-image {
          position:absolute;
          inset:0;
          z-index:-2;
          width:100%;
          height:100%;
          object-fit:cover;
          transition:transform 1.3s cubic-bezier(.22,1,.36,1),filter .8s ease;
        }

        .uw-family-card:hover .uw-family-image { transform:scale(1.045); }

        .uw-family-card:after {
          content:"";
          position:absolute;
          inset:0;
          z-index:-1;
          background:
            linear-gradient(180deg,rgba(3,18,42,.02) 5%,rgba(5,24,52,.04) 36%,rgba(5,24,52,.79) 100%),
            linear-gradient(135deg,rgba(255,255,255,.20),transparent 50%);
        }

        .uw-family-card.active:before {
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          background:radial-gradient(circle at 50% 10%,rgba(91,173,255,.28),transparent 52%);
          z-index:0;
        }

        .uw-family-number {
          position:absolute;
          left:14px;
          top:14px;
          color:white;
          font-family:Georgia,serif;
          font-size:15px;
          text-shadow:0 1px 8px rgba(0,0,0,.2);
        }

        .uw-family-state {
          position:absolute;
          right:12px;
          top:13px;
          width:8px;
          height:8px;
          border-radius:50%;
          background:rgba(255,255,255,.58);
          border:1px solid rgba(255,255,255,.8);
        }

        .uw-family-card.active .uw-family-state {
          background:#fff;
          box-shadow:0 0 0 4px rgba(22,119,248,.25),0 0 18px #69b4ff;
        }

        .uw-family-copy {
          position:absolute;
          left:15px;
          right:13px;
          bottom:16px;
          color:white;
          z-index:1;
        }

        .uw-family-copy h3 {
          font-family:var(--font-heading,Georgia,serif);
          font-size:clamp(17px,1.55vw,25px);
          font-weight:400;
          letter-spacing:-.045em;
          line-height:1.02;
          margin:0;
          text-shadow:0 2px 15px rgba(0,0,0,.2);
        }

        .uw-family-copy p {
          margin:9px 0 0;
          color:rgba(255,255,255,.8);
          font-size:7px;
          font-weight:600;
          letter-spacing:.15em;
          line-height:1.5;
        }

        .uw-family-arrow {
          position:absolute;
          right:12px;
          bottom:13px;
          display:grid;
          place-items:center;
          width:28px;
          height:28px;
          border-radius:50%;
          border:1px solid rgba(255,255,255,.75);
          color:white;
          background:rgba(13,41,78,.16);
          backdrop-filter:blur(10px);
          transition:background .45s ease,transform .45s ease;
        }

        .uw-family-card:hover .uw-family-arrow,
        .uw-family-card.active .uw-family-arrow {
          background:#1677f8;
          transform:translateX(2px);
        }

        .uw-family-controls { display:flex; align-items:center; justify-content:space-between; padding:0 5px; margin-top:4px; }

        .uw-family-dots { display:flex; align-items:center; gap:8px; }

        .uw-family-dot {
          height:4px;
          width:4px;
          border-radius:9px;
          background:#b8cbe4;
          transition:all .4s ease;
          border:0;
          padding:0;
          cursor:pointer;
        }

        .uw-family-dot.active { width:22px; background:#1677f8; }

        .uw-family-nav { display:flex; gap:7px; }

        .uw-icon-btn {
          display:grid;
          place-items:center;
          width:34px;
          height:34px;
          border-radius:50%;
          border:1px solid rgba(31,100,194,.22);
          color:#1769da;
          background:rgba(255,255,255,.55);
          transition:background .35s ease,color .35s ease,box-shadow .35s ease,transform .35s ease;
          cursor:pointer;
        }

        .uw-icon-btn:hover {
          background:#176cf3;
          color:white;
          box-shadow:0 8px 20px rgba(22,108,243,.2);
          transform:translateY(-1px);
        }

        .uw-lower {
          display:grid;
          grid-template-columns:minmax(270px,.72fr) minmax(0,1.65fr);
          gap:clamp(24px,3.2vw,54px);
          padding-top:clamp(28px,3.8vw,52px);
          align-items:stretch;
        }

        .uw-detail { display:flex; flex-direction:column; min-width:0; padding:8px 0 5px; }

        .uw-detail-kicker {
          display:flex;
          align-items:center;
          gap:10px;
          color:#176bd7;
          font-size:8px;
          font-weight:700;
          letter-spacing:.32em;
          text-transform:uppercase;
          margin-bottom:18px;
        }

        .uw-detail-kicker:before { content:""; width:27px; height:1px; background:#1683ff; box-shadow:0 0 10px rgba(22,131,255,.45); }

        .uw-detail h3 {
          font-family:var(--font-heading,Georgia,serif);
          font-weight:400;
          font-size:clamp(2.55rem,4vw,4.7rem);
          line-height:.84;
          letter-spacing:-.07em;
          margin:0;
          color:#101b37;
          text-wrap:balance;
        }

        .uw-detail h3 span { color:#176cf3; }

        .uw-detail-description { max-width:470px; margin:18px 0 0; color:#566783; font-size:13px; line-height:1.65; }

        .uw-data-row { display:flex; flex-wrap:wrap; gap:7px; margin-top:18px; }

        .uw-data-chip {
          display:inline-flex;
          align-items:center;
          gap:6px;
          border:1px solid rgba(41,111,197,.18);
          background:rgba(255,255,255,.54);
          border-radius:999px;
          padding:7px 10px;
          color:#526987;
          font-size:8px;
          letter-spacing:.08em;
        }

        .uw-data-chip svg { color:#1677f8; }

        .uw-ingredients-head {
          display:flex;
          align-items:center;
          gap:10px;
          margin:25px 0 13px;
          color:#216bd0;
          font-size:8px;
          font-weight:700;
          letter-spacing:.28em;
          text-transform:uppercase;
        }

        .uw-ingredients-head:after { content:""; flex:1; height:1px; background:linear-gradient(90deg,rgba(35,105,194,.22),transparent); }

        .uw-ingredient-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:8px; }

        .uw-ingredient {
          min-width:0;
          display:flex;
          align-items:center;
          gap:9px;
          border:1px solid rgba(41,111,197,.14);
          background:rgba(255,255,255,.46);
          padding:10px 9px;
          border-radius:10px;
          transition:border-color .4s ease,background .4s ease,transform .4s ease;
        }

        .uw-ingredient:hover { border-color:rgba(22,119,248,.4); background:rgba(255,255,255,.8); transform:translateY(-2px); }

        .uw-ingredient-mark {
          display:grid;
          place-items:center;
          flex:0 0 26px;
          width:26px;
          height:26px;
          color:#1677f8;
          border-radius:8px;
          background:linear-gradient(135deg,rgba(22,119,248,.12),rgba(166,214,255,.28));
          border:1px solid rgba(22,119,248,.16);
        }

        .uw-ingredient strong { display:block; color:#1c2d4c; font-size:10px; font-weight:600; line-height:1.25; overflow-wrap:anywhere; }

        .uw-ingredient small { display:block; color:#75839b; font-size:8px; line-height:1.3; margin-top:3px; }

        .uw-no-ingredients {
          font-size:10px;
          line-height:1.5;
          color:#74829a;
          background:rgba(255,255,255,.5);
          border:1px dashed rgba(41,111,197,.23);
          padding:13px;
          border-radius:10px;
        }

        .uw-cta {
          display:inline-flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          align-self:flex-start;
          margin-top:23px;
          min-height:44px;
          padding:0 9px 0 17px;
          border:1px solid rgba(255,255,255,.72);
          border-radius:999px;
          background:linear-gradient(110deg,#0e56de,#1683ff 75%,#59adff);
          box-shadow:0 10px 24px rgba(22,105,238,.2),inset 0 1px 0 rgba(255,255,255,.35);
          color:white;
          text-decoration:none;
          font-size:10px;
          font-weight:600;
          letter-spacing:.03em;
          transition:transform .4s ease,box-shadow .4s ease;
        }

        .uw-cta:hover { transform:translateY(-2px); box-shadow:0 15px 33px rgba(22,105,238,.28),inset 0 1px 0 rgba(255,255,255,.35); }

        .uw-cta span {
          display:grid;
          place-items:center;
          width:27px;
          height:27px;
          border-radius:50%;
          background:rgba(2,35,125,.24);
          border:1px solid rgba(255,255,255,.28);
        }

        .uw-stats { display:flex; align-items:center; gap:13px; margin-top:auto; padding-top:22px; color:#71819b; font-size:7px; letter-spacing:.17em; text-transform:uppercase; }

        .uw-stats strong { display:block; color:#142646; font-family:var(--font-heading,Georgia,serif); font-size:27px; line-height:1; font-weight:400; letter-spacing:-.04em; margin-bottom:5px; }

        .uw-stats strong em { font-style:normal; color:#1677f8; }

        .uw-stats-divider { width:1px; height:36px; background:rgba(41,111,197,.18); }

        .uw-stage {
          position:relative;
          isolation:isolate;
          min-height:590px;
          overflow:hidden;
          border-radius:20px;
          border:1px solid rgba(255,255,255,.78);
          background:linear-gradient(135deg,#dfeeff,#f9fbff 50%,#dceaff);
          box-shadow:0 20px 55px rgba(23,72,137,.11);
        }

        .uw-stage-image {
          position:absolute;
          inset:0;
          z-index:-3;
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center 42%;
          opacity:.78;
          filter:saturate(.82) contrast(.96);
        }

        .uw-stage:before {
          content:"";
          position:absolute;
          inset:0;
          z-index:-2;
          background:
            linear-gradient(90deg,rgba(241,248,255,.48),rgba(238,247,255,.03) 48%,rgba(230,241,255,.24)),
            linear-gradient(180deg,rgba(255,255,255,.15),rgba(218,235,255,.12) 58%,rgba(233,244,255,.5));
        }

        .uw-stage:after {
          content:"";
          position:absolute;
          z-index:-1;
          left:8%;
          right:7%;
          bottom:11%;
          height:35%;
          border:1px solid rgba(39,130,244,.38);
          border-color:rgba(39,130,244,.3) transparent transparent;
          border-radius:50%;
          transform:rotate(-5deg);
          box-shadow:0 -5px 24px rgba(63,152,255,.14);
          pointer-events:none;
        }

        .uw-stage-top {
          position:absolute;
          left:24px;
          right:24px;
          top:20px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:15px;
          z-index:2;
        }

        .uw-stage-label { display:flex; align-items:center; gap:9px; color:#2469bc; font-size:8px; font-weight:700; letter-spacing:.24em; text-transform:uppercase; }

        .uw-stage-label i { width:6px; height:6px; background:#258cff; border-radius:50%; box-shadow:0 0 12px #65b8ff; }

        .uw-stage-counter { color:#526d90; font-size:8px; letter-spacing:.19em; text-align:right; text-transform:uppercase; }

        .uw-stage-counter strong { color:#176cf3; font-weight:700; }

        .uw-stage-glow {
          position:absolute;
          z-index:0;
          left:48%;
          top:23%;
          width:42%;
          height:56%;
          border-radius:50%;
          background:radial-gradient(ellipse,rgba(109,185,255,.34),rgba(155,207,255,.11) 42%,transparent 70%);
          filter:blur(28px);
          animation:uw-breathe 9s ease-in-out infinite;
        }

        .uw-stage-orbit {
          position:absolute;
          z-index:0;
          left:12%;
          right:8%;
          top:37%;
          height:44%;
          border:1px solid rgba(255,255,255,.65);
          border-radius:50%;
          transform:rotate(-8deg);
          box-shadow:0 0 25px rgba(80,162,255,.13),inset 0 0 16px rgba(255,255,255,.25);
          pointer-events:none;
        }

        .uw-stage-orbit:before,.uw-stage-orbit:after {
          content:"";
          position:absolute;
          width:7px;
          height:7px;
          border-radius:50%;
          background:#fff;
          box-shadow:0 0 0 3px rgba(43,140,255,.18),0 0 15px #1683ff;
        }

        .uw-stage-orbit:before { left:9%; top:21%; }

        .uw-stage-orbit:after { right:12%; bottom:12%; background:#f6bb79; box-shadow:0 0 0 3px rgba(246,187,121,.2),0 0 13px #f2a65a; }

        .uw-model-caption {
          position:absolute;
          z-index:1;
          top:22%;
          left:50%;
          transform:translateX(-50%);
          width:max-content;
          max-width:90%;
          border:1px solid rgba(255,255,255,.68);
          border-radius:999px;
          background:rgba(248,252,255,.52);
          backdrop-filter:blur(18px);
          padding:8px 12px;
          color:#3c5a81;
          font-size:7px;
          letter-spacing:.22em;
          text-transform:uppercase;
        }

        .uw-marquee-shell {
          position:absolute;
          z-index:3;
          left:0;
          right:0;
          bottom:11%;
          overflow:hidden;
          padding:9px 0 16px;
          mask-image:linear-gradient(90deg,transparent 0%,#000 5%,#000 95%,transparent 100%);
        }

        .uw-protocol-track {
          display:flex;
          align-items:center;
          gap:14px;
          width:max-content;
          animation:uw-protocol-marquee 54s linear infinite;
          will-change:transform;
          padding:0 12px;
        }

        .uw-marquee-shell:hover .uw-protocol-track,
        .uw-marquee-shell:focus-within .uw-protocol-track {
          animation-play-state:paused;
        }

        .uw-protocol-card {
          position:relative;
          isolation:isolate;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          flex:0 0 218px;
          width:218px;
          min-height:224px;
          overflow:hidden;
          padding:15px 15px 14px;
          border:1px solid rgba(255,255,255,.86);
          border-radius:16px;
          background:linear-gradient(145deg,rgba(255,255,255,.83),rgba(238,247,255,.57));
          box-shadow:0 12px 30px rgba(37,93,157,.12),inset 0 1px 0 rgba(255,255,255,.9);
          backdrop-filter:blur(24px);
          text-align:left;
          color:#152546;
          cursor:pointer;
          transform:translateY(0);
          transition:transform .55s cubic-bezier(.22,1,.36,1),border-color .45s ease,box-shadow .45s ease,background .45s ease;
        }

        .uw-protocol-card:nth-child(4n+1) { transform:translateY(12px) rotate(-1deg); }

        .uw-protocol-card:nth-child(4n+2) { transform:translateY(-3px) rotate(.4deg); }

        .uw-protocol-card:nth-child(4n+3) { transform:translateY(8px) rotate(1deg); }

        .uw-protocol-card:hover,.uw-protocol-card.selected {
          transform:translateY(-8px) rotate(0deg);
          border-color:rgba(29,126,255,.92);
          background:linear-gradient(145deg,rgba(255,255,255,.96),rgba(229,243,255,.79));
          box-shadow:0 0 0 1px rgba(22,119,248,.24),0 18px 44px rgba(22,119,248,.2),inset 0 1px 0 white;
        }

        .uw-protocol-card:focus-visible { outline:2px solid #1677f8; outline-offset:3px; }

        .uw-card-glint {
          position:absolute;
          inset:0;
          z-index:-1;
          background:radial-gradient(circle at 78% 8%,rgba(94,176,255,.22),transparent 36%),linear-gradient(135deg,rgba(255,255,255,.35),transparent 48%);
          pointer-events:none;
        }

        .uw-card-head { display:flex; align-items:center; justify-content:space-between; gap:10px; color:#5e7392; font-size:8px; letter-spacing:.16em; }

        .uw-card-head strong { font-weight:500; color:#1d5fc4; }

        .uw-protocol-glyph {
          display:grid;
          place-items:center;
          width:63px;
          height:63px;
          margin:15px auto 12px;
          color:#1475f5;
          background:radial-gradient(circle,rgba(107,184,255,.22),rgba(255,255,255,.18) 70%);
          border:1px solid rgba(22,119,248,.15);
          border-radius:50%;
          box-shadow:inset 0 0 19px rgba(255,255,255,.9),0 5px 18px rgba(22,119,248,.11);
        }

        .uw-protocol-title { display:block; font-family:var(--font-heading,Georgia,serif); font-size:20px; line-height:1.03; letter-spacing:-.045em; color:#122344; font-weight:400; }

        .uw-protocol-family { display:block; margin-top:7px; color:#3d6caa; font-size:7px; line-height:1.4; letter-spacing:.16em; text-transform:uppercase; }

        .uw-protocol-ingredients { display:block; margin-top:9px; padding-top:9px; border-top:1px solid rgba(37,101,183,.16); color:#637997; font-size:8px; line-height:1.4; min-height:30px; }

        .uw-card-bottom { display:flex; align-items:center; justify-content:space-between; gap:9px; margin-top:11px; color:#53739b; font-size:7px; letter-spacing:.13em; text-transform:uppercase; }

        .uw-card-bottom span:last-child { display:grid; place-items:center; width:24px; height:24px; border-radius:50%; background:#1677f8; color:white; box-shadow:0 5px 12px rgba(22,119,248,.22); }

        .uw-active-detail {
          position:absolute;
          z-index:4;
          top:68px;
          right:23px;
          max-width:190px;
          padding:13px 14px;
          border:1px solid rgba(255,255,255,.82);
          border-radius:12px;
          background:rgba(250,253,255,.58);
          backdrop-filter:blur(20px);
          box-shadow:0 12px 34px rgba(54,105,163,.1);
        }

        .uw-active-detail small { display:block; color:#2770cd; font-size:7px; letter-spacing:.2em; text-transform:uppercase; }

        .uw-active-detail strong { display:block; margin-top:5px; font-family:var(--font-heading,Georgia,serif); font-size:19px; font-weight:400; line-height:1.05; letter-spacing:-.035em; color:#182946; }

        .uw-active-detail span { display:block; margin-top:5px; color:#6a7e99; font-size:8px; line-height:1.4; }

        .uw-stage-footer {
          position:absolute;
          z-index:4;
          left:24px;
          right:24px;
          bottom:17px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          color:#56749b;
          font-size:7px;
          letter-spacing:.18em;
          text-transform:uppercase;
        }

        .uw-stage-footer b { color:#176cf3; font-weight:600; }

        .uw-stage-footer span:last-child { display:flex; align-items:center; gap:7px; }

        .uw-stage-footer span:last-child:before { content:""; width:4px; height:4px; background:#f2a65a; border-radius:50%; box-shadow:0 0 9px rgba(242,166,90,.7); }

        .uw-observatory.uw-reduced-motion * { scroll-behavior:auto!important; animation-duration:.01ms!important; animation-iteration-count:1!important; transition-duration:.01ms!important; }

        @keyframes uw-protocol-marquee {
          from { transform:translate3d(0,0,0); }
          to { transform:translate3d(calc(var(--uw-shift,25%) * -1),0,0); }
        }

        @keyframes uw-breathe {
          0%,100% { opacity:.48; transform:scale(.94); }
          50% { opacity:.88; transform:scale(1.04); }
        }

        @media (max-width:1200px) {
          .uw-top { grid-template-columns:minmax(210px,.7fr) minmax(0,2fr); gap:24px; }
          .uw-family-card { flex-basis:calc((100% - 18px)/2); aspect-ratio:1/1.05; }
          .uw-lower { grid-template-columns:minmax(245px,.75fr) minmax(0,1.35fr); gap:25px; }
          .uw-stage { min-height:560px; }
          .uw-protocol-card { flex-basis:200px; width:200px; min-height:210px; }
        }

        @media (max-width:850px) {
          .uw-observatory { padding:42px 20px 58px; }
          .uw-top { grid-template-columns:1fr; gap:24px; }
          .uw-intro p { max-width:510px; }
          .uw-family-card { flex-basis:calc((100% - 26px)/3); aspect-ratio:.85/1; min-width:165px; }
          .uw-lower { grid-template-columns:1fr; gap:28px; }
          .uw-detail { max-width:720px; }
          .uw-stage { min-height:560px; }
          .uw-stats { margin-top:22px; }
        }

        @media (max-width:560px) {
          .uw-observatory { padding:36px 15px 44px; }
          .uw-intro h2 { font-size:clamp(2.65rem,13vw,4rem); }
          .uw-intro p { font-size:12px; }
          .uw-family-card { flex-basis:76%; min-width:0; max-height:none; aspect-ratio:.92/1; }
          .uw-family-copy h3 { font-size:24px; }
          .uw-lower { padding-top:28px; }
          .uw-detail h3 { font-size:clamp(2.65rem,13vw,4rem); }
          .uw-ingredient-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
          .uw-stage { min-height:505px; border-radius:15px; }
          .uw-stage-image { object-position:center center; }
          .uw-stage-top { left:14px; right:14px; top:14px; }
          .uw-stage-counter { font-size:7px; }
          .uw-model-caption { top:16%; font-size:6px; }
          .uw-active-detail { top:55px; right:12px; max-width:150px; padding:10px; }
          .uw-active-detail strong { font-size:16px; }
          .uw-marquee-shell { bottom:14%; }
          .uw-protocol-track { gap:10px; }
          .uw-protocol-card { flex-basis:185px; width:185px; min-height:196px; padding:12px; }
          .uw-protocol-glyph { width:50px; height:50px; margin:10px auto; }
          .uw-protocol-title { font-size:18px; }
          .uw-stage-footer { left:14px; right:14px; bottom:12px; font-size:6px; }
          .uw-stats { gap:9px; }
          .uw-stats strong { font-size:23px; }
        }

        @media (prefers-reduced-motion:reduce) {
          .uw-protocol-track,.uw-stage-glow { animation:none!important; }
          .uw-family-viewport { scroll-behavior:auto!important; }
        }
      `}</style>

      <div className="uw-shell">
        {/* UPPER HALF — WELLNESS FAMILIES */}

        <div className="uw-top">
          <motion.div
            className="uw-intro"
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 18, filter: "blur(7px)" }
            }
            whileInView={
              reducedMotion
                ? undefined
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="uw-kicker">
              <span className="uw-kicker-line" />
              WELLNESS PATHWAYS
            </div>

            <h2>
              Explore by <em>wellness.</em>
            </h2>

            <p>
              Explore physician-guided wellness pathways designed around
              different areas of wellbeing.
            </p>

            <div className="uw-family-meta">
              <i />
              <strong>
                {String(FAMILY_ORDER.indexOf(activeFamily) + 1).padStart(2, "0")}
              </strong>
              <span> / {familyCount} wellness families</span>
            </div>
          </motion.div>

          <div className="uw-family-wrap">
            <div
              className="uw-family-viewport"
              ref={familyViewportRef}
              aria-label="Wellness family carousel"
            >
              {FAMILY_DATA.map((family, index) => {
                const selected = family.id === activeFamily;

                return (
                  <button
                    key={family.id}
                    ref={(element) => {
                      if (element) {
                        familyCardRefs.current.set(family.id, element);
                      } else {
                        familyCardRefs.current.delete(family.id);
                      }
                    }}
                    type="button"
                    className={`uw-family-card ${selected ? "active" : ""}`}
                    onClick={() => setFamilyAndPause(family.id)}
                    aria-pressed={selected}
                    aria-label={`Show ${family.id} protocols`}
                  >
                    <Image
                      src={family.image}
                      alt=""
                      fill
                      sizes="(max-width: 560px) 76vw, (max-width: 850px) 31vw, 22vw"
                      className="uw-family-image"
                      priority={index < 3}
                    />

                    <span className="uw-family-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="uw-family-state" />

                    <span className="uw-family-copy">
                      <h3>{family.id}</h3>
                      <p>{family.descriptor}</p>
                    </span>

                    <span className="uw-family-arrow">
                      <ArrowRight size={15} strokeWidth={1.5} />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="uw-family-controls">
              <div className="uw-family-dots" aria-label="Select wellness family">
                {FAMILY_DATA.map((family) => (
                  <button
                    key={family.id}
                    type="button"
                    className={`uw-family-dot ${
                      activeFamily === family.id ? "active" : ""
                    }`}
                    onClick={() => setFamilyAndPause(family.id)}
                    aria-label={`Select ${family.id}`}
                    aria-pressed={activeFamily === family.id}
                  />
                ))}
              </div>

              <div className="uw-family-nav">
                <button
                  type="button"
                  className="uw-icon-btn"
                  aria-label="Previous family"
                  onClick={() =>
                    setFamilyAndPause(
                      FAMILY_ORDER[
                        (FAMILY_ORDER.indexOf(activeFamily) -
                          1 +
                          FAMILY_ORDER.length) %
                          FAMILY_ORDER.length
                      ],
                    )
                  }
                >
                  <ArrowLeft size={15} />
                </button>

                <button
                  type="button"
                  className="uw-icon-btn"
                  aria-label="Next family"
                  onClick={() =>
                    setFamilyAndPause(
                      FAMILY_ORDER[
                        (FAMILY_ORDER.indexOf(activeFamily) + 1) %
                          FAMILY_ORDER.length
                      ],
                    )
                  }
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER HALF — PROTOCOL DETAILS + MOVING GLASS CARDS */}

        <div className="uw-lower">
          <aside className="uw-detail">
            <div className="uw-detail-kicker">Selected protocol</div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeFamily}-${activeProtocol.slug}`}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 12, filter: "blur(6px)" }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={
                  reducedMotion
                    ? undefined
                    : { opacity: 0, y: -8, filter: "blur(4px)" }
                }
                transition={{
                  duration: reducedMotion ? 0.01 : 0.52,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3>
                  {activeProtocol.name.split(/\s+/).length > 1 ? (
                    <>
                      {activeProtocol.name
                        .split(/\s+/)
                        .slice(0, -1)
                        .join(" ")}
                      <br />
                      <span>
                        {activeProtocol.name.split(/\s+/).slice(-1).join("")}
                      </span>
                    </>
                  ) : (
                    <span>{activeProtocol.name}</span>
                  )}
                </h3>

                <p className="uw-detail-description">
                  {activeProtocol.description}
                </p>

                <div className="uw-data-row">
                  <span className="uw-data-chip">
                    <ShieldCheck size={12} />
                    Physician-guided
                  </span>

                  <span className="uw-data-chip">
                    <Atom size={12} />
                    {activeFamilyData.shortName} pathway
                  </span>
                </div>

                <div className="uw-ingredients-head">Key ingredients</div>

                {activeIngredients.length > 0 ? (
                  <div className="uw-ingredient-grid">
                    {activeIngredients.slice(0, 4).map((ingredient) => (
                      <div
                        className="uw-ingredient"
                        key={`${activeProtocol.slug}-${ingredient.name}`}
                      >
                        <span className="uw-ingredient-mark">
                          <Atom size={15} strokeWidth={1.2} />
                        </span>

                        <span>
                          <strong>{ingredient.name}</strong>
                          <small>
                            {ingredient.amount ??
                              ingredient.detail ??
                              "Formulation component"}
                          </small>
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="uw-no-ingredients">
                    Formulation details are available on the dedicated protocol
                    page.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            <Link
              className="uw-cta"
              href={`/protocols/${activeProtocol.slug}`}
            >
              Explore protocol
              <span>
                <ArrowRight size={15} />
              </span>
            </Link>

            <div className="uw-stats">
              <div>
                <strong>
                  {protocolCount}<em>+</em>
                </strong>
                PROTOCOLS
              </div>

              <span className="uw-stats-divider" />

              <div>
                <strong>{familyCount}</strong>
                FAMILIES
              </div>

              <span className="uw-stats-divider" />

              <div>
                <strong>01</strong>
                PHYSICIAN-LED
              </div>
            </div>
          </aside>

          <div
            className="uw-stage"
            onMouseEnter={() => setProtocolsPaused(true)}
            onMouseLeave={() => setProtocolsPaused(false)}
            onFocusCapture={() => setProtocolsPaused(true)}
            onBlurCapture={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget as Node | null,
                )
              ) {
                setProtocolsPaused(false);
              }
            }}
          >
            <Image
              src="/images/credibility/driplabs-credibility-background.png"
              alt=""
              fill
              sizes="(max-width: 850px) 100vw, 65vw"
              className="uw-stage-image"
            />

            <div className="uw-stage-glow" aria-hidden="true" />
            <div className="uw-stage-orbit" aria-hidden="true" />

            <div className="uw-stage-top">
              <div className="uw-stage-label">
                <i />
                Protocol observatory
              </div>

              <div className="uw-stage-counter">
                <strong>
                  {String(familyProtocols.length).padStart(2, "0")}
                </strong>{" "}
                protocols
                <br />
                in this family
              </div>
            </div>

            <div className="uw-model-caption">
              DRIPLABS · Clinical wellness, considered
            </div>

            <div className="uw-active-detail" aria-live="polite">
              <small>Selected protocol · {activeProtocol.number}</small>
              <strong>{activeProtocol.name}</strong>
              <span>{activeFamilyData.id}</span>
            </div>

            <div
              className="uw-marquee-shell"
              aria-label="Continuously moving protocol cards. Hover or focus a card to pause the carousel."
            >
              <div
                className="uw-protocol-track"
                style={
                  {
                    "--uw-shift": `${100 / repeatedCount}%`,
                    animationPlayState:
                      protocolsPaused || reducedMotion ? "paused" : "running",
                  } as CSSProperties
                }
              >
                {loopProtocols.map((protocol, index) => {
                  const selected = protocol.slug === activeProtocol.slug;
                  const ingredients = getIngredients(protocol);
                  const Icon = FAMILY_ICONS[protocol.family];

                  return (
                    <button
                      key={`${protocol.slug}-${index}`}
                      type="button"
                      className={`uw-protocol-card ${
                        selected ? "selected" : ""
                      }`}
                      onClick={() => selectProtocol(protocol)}
                      aria-pressed={selected}
                      aria-label={`View ${protocol.name} protocol details`}
                    >
                      <span className="uw-card-glint" />

                      <span className="uw-card-head">
                        <strong>{protocol.number}</strong>
                        <span>{selected ? "ACTIVE" : "DRIPLABS®"}</span>
                      </span>

                      <span className="uw-protocol-glyph">
                        <Icon size={29} strokeWidth={1.15} />
                      </span>

                      <span className="uw-protocol-title">
                        {protocol.name}
                      </span>

                      <span className="uw-protocol-family">
                        {protocol.family}
                      </span>

                      <span className="uw-protocol-ingredients">
                        {ingredients.length
                          ? ingredients
                              .slice(0, 2)
                              .map((item) => item.name)
                              .join(" · ")
                          : protocol.shortDescription || protocol.description}
                      </span>

                      <span className="uw-card-bottom">
                        <span>View protocol</span>
                        <span>
                          <ArrowDownRight size={13} />
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="uw-stage-footer">
              <span>
                <b>{activeFamilyData.shortName}</b> · FAMILY SELECTED
              </span>
              <span>Hover cards to pause · Select to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
