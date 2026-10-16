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
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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

type Ingredient = { name: string; amount?: string; detail?: string };
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
  descriptor: string;
  image: string;
};

const FAMILY_DATA: FamilyData[] = [
  { id: "Skin & Beauty", descriptor: "RADIANCE · REPAIR · RESTORATION", image: "/images/wellness/skin-beauty.png" },
  { id: "Cellular & Longevity", descriptor: "RENEWAL · ENERGY · VITALITY", image: "/images/wellness/cellular-longevity.png" },
  { id: "Metabolic & Performance", descriptor: "ENERGY · STAMINA · RESILIENCE", image: "/images/wellness/metabolic-performance.png" },
  { id: "Digestive & Systemic", descriptor: "GUT HEALTH · BALANCE · IMMUNITY", image: "/images/wellness/digestive-systemic.png" },
  { id: "Women's Wellness", descriptor: "HORMONAL · REPRODUCTIVE · VITALITY", image: "/images/wellness/womens-nutritional.png" },
  { id: "Recovery & Immune", descriptor: "RECOVERY · RESILIENCE · IMMUNE SUPPORT", image: "/images/wellness/recovery-immune.png" },
  { id: "Cognitive & Neuro", descriptor: "FOCUS · CLARITY · NEURO SUPPORT", image: "/images/wellness/cognitive-neuro.png" },
  { id: "Musculoskeletal", descriptor: "MOBILITY · MOVEMENT · RECOVERY", image: "/images/wellness/musculoskeletal.png" },
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

// Minimal fallback catalogue only keeps the component functional while the API loads.
const FALLBACK_PROTOCOLS: Protocol[] = [
  { slug: "glamour", name: "GLAMOUR DRIP", number: "01", family: "Skin & Beauty", description: "A premium skin and beauty wellness protocol within the DRIPLABS Skin & Beauty pathway." },
  { slug: "renew", name: "RENEW DRIP", number: "02", family: "Cellular & Longevity", description: "A restorative wellness formulation within the DRIPLABS protocol collection." },
  { slug: "radiance", name: "RADIANCE DRIP", number: "03", family: "Skin & Beauty", description: "A considered wellness protocol designed around the DRIPLABS beauty and radiance pathway." },
  { slug: "shrink", name: "SHRINK DRIP", number: "04", family: "Metabolic & Performance", description: "A metabolic wellness protocol within the DRIPLABS protocol collection." },
  { slug: "restore", name: "RESTORE DRIP", number: "05", family: "Skin & Beauty", description: "A restorative wellness protocol designed around the DRIPLABS beauty pathway." },
  { slug: "bounce-back", name: "BOUNCE BACK DRIP", number: "06", family: "Recovery & Immune", description: "A recovery-focused protocol designed within the DRIPLABS wellness system." },
  { slug: "reactivate", name: "REACTIVATE DRIP", number: "07", family: "Recovery & Immune", description: "A recovery-oriented wellness formulation within the DRIPLABS wellness system." },
  { slug: "fit", name: "FIT DRIP", number: "08", family: "Metabolic & Performance", description: "A performance and recovery-focused protocol within the DRIPLABS system." },
  { slug: "refuel", name: "REFUEL DRIP", number: "09", family: "Metabolic & Performance", description: "A performance-oriented formulation within the DRIPLABS recovery system." },
  { slug: "nadx", name: "NADx DRIP", number: "10", family: "Cellular & Longevity", description: "Cellular Energy Protocol. A physician-directed infusion composed of NAD+ and selected nutritional adjuncts." },
  { slug: "gut-plus", name: "GUT+ DRIP", number: "11", family: "Digestive & Systemic", description: "A digestive and systemic wellness protocol within the DRIPLABS protocol collection." },
  { slug: "rebuild", name: "REBUILD DRIP", number: "12", family: "Metabolic & Performance", description: "Protein Recovery Protocol. A physician-supervised infusion composed of amino acids and metabolic cofactors." },
  { slug: "move", name: "MOVE DRIP", number: "13", family: "Musculoskeletal", description: "A formulation designed around the DRIPLABS musculoskeletal wellness pathway." },
  { slug: "femme", name: "FEMME DRIP", number: "14", family: "Women's Wellness", description: "A women’s wellness formulation within the DRIPLABS protocol collection." },
  { slug: "recover-plus", name: "RECOVER+ DRIP", number: "15", family: "Recovery & Immune", description: "An advanced recovery formulation within the DRIPLABS wellness system." },
  { slug: "performance-x", name: "PERFORMANC-X DRIP", number: "16", family: "Metabolic & Performance", description: "A performance-focused formulation within the DRIPLABS metabolic and performance pathway." },
  { slug: "methyblu", name: "METHYBLU DRIP", number: "17", family: "Cellular & Longevity", description: "A specialised formulation within the DRIPLABS protocol collection." },
  { slug: "focus", name: "FOCUS DRIP", number: "18", family: "Cognitive & Neuro", description: "Cognitive Wellness Protocol. A physician-guided infusion designed around cognitive and neurological nutritional wellness." },
  { slug: "apex", name: "APEX DRIP", number: "19", family: "Cellular & Longevity", description: "Healthy Aging Protocol. A physician-directed infusion composed of NAD+ precursors and cellular support cofactors." },
];

const SKIN_PROTOCOL_ORDER = ["radiance", "glamour", "restore"] as const;

const FORMULATION_FALLBACKS: Record<string, Ingredient[]> = {
  glamour: [
    { name: "Glutathione", amount: "4200 mg", detail: "Primary active" },
    { name: "Vitamin C", amount: "6300 mg", detail: "Micronutrient support" },
    { name: "NAC", amount: "400 mg", detail: "Formulation component" },
    { name: "B-Complex", detail: "Vitamin support" },
  ],
  radiance: [
    { name: "Glutathione", amount: "3000 mg", detail: "Primary active" },
    { name: "Vitamin C", amount: "4700 mg", detail: "Micronutrient support" },
    { name: "NAC", amount: "400 mg", detail: "Formulation component" },
    { name: "Zinc", detail: "Trace mineral" },
  ],
  restore: [
    { name: "Glutathione", amount: "1800 mg", detail: "Primary active" },
    { name: "Vitamin C", amount: "1500 mg", detail: "Micronutrient support" },
    { name: "NAC", amount: "400 mg", detail: "Formulation component" },
    { name: "B-Complex", detail: "Vitamin support" },
  ],
  renew: [
    { name: "Glutathione", amount: "3600 mg", detail: "Primary active" },
    { name: "Vitamin C", amount: "6200 mg", detail: "Micronutrient support" },
    { name: "NAC", amount: "400 mg", detail: "Formulation component" },
    { name: "Essential Amino Acid Blend", detail: "9 amino acids" },
  ],
  nadx: [
    { name: "NAD+", amount: "500 mg", detail: "Protocol formulation" },
    { name: "Electrolyte Hydration Base", detail: "Hydration base" },
  ],
  shrink: [
    { name: "Glutathione", amount: "2400 mg", detail: "Primary active" },
    { name: "Vitamin C", amount: "3000 mg", detail: "Micronutrient support" },
    { name: "L-Carnitine", amount: "3000 mg", detail: "Formulation component" },
    { name: "Thiamine", amount: "100 mg", detail: "Vitamin component" },
  ],
  "bounce-back": [
    { name: "Glutathione", amount: "2400 mg", detail: "Primary active" },
    { name: "Vitamin C", amount: "1500 mg", detail: "Micronutrient support" },
    { name: "NAC", amount: "200 mg", detail: "Formulation component" },
    { name: "B-Complex", detail: "Vitamin support" },
  ],
  fit: [
    { name: "Glutathione", amount: "2400 mg", detail: "Primary active" },
    { name: "Vitamin C", amount: "1500 mg", detail: "Micronutrient support" },
    { name: "L-Carnitine", amount: "1000 mg", detail: "Formulation component" },
    { name: "Magnesium Sulfate", amount: "500 mg", detail: "Mineral component" },
  ],
  refuel: [
    { name: "L-Alanyl-L-Glutamine", amount: "10000 mg", detail: "Formulation component" },
    { name: "Vitamin C", amount: "1500 mg", detail: "Micronutrient support" },
    { name: "NAC", amount: "200 mg", detail: "Formulation component" },
  ],
  "gut-plus": [
    { name: "Vitamin C", detail: "Micronutrient support" },
    { name: "NAC", detail: "Formulation component" },
  ],
  rebuild: [
    { name: "L-Alanyl-L-Glutamine", amount: "10000 mg", detail: "Formulation component" },
    { name: "Vitamin C", amount: "3000 mg", detail: "Micronutrient support" },
    { name: "NAC", amount: "200 mg", detail: "Formulation component" },
  ],
  move: [
    { name: "Magnesium Sulfate", amount: "1000 mg", detail: "Mineral component" },
    { name: "Vitamin C", amount: "3000 mg", detail: "Micronutrient support" },
    { name: "Vitamin D3", amount: "600,000 IU", detail: "Vitamin support" },
    { name: "NAC", amount: "400 mg", detail: "Formulation component" },
  ],
  femme: [
    { name: "Iron", amount: "500 mg", detail: "Mineral component" },
    { name: "Vitamin C", amount: "3000 mg", detail: "Micronutrient support" },
    { name: "B12 + Folic Acid + Niacinamide", detail: "Vitamin complex" },
  ],
  methyblu: [
    { name: "Methylene Blue", amount: "200 mg", detail: "Formulation component" },
    { name: "B12 + Folic Acid + Niacinamide", detail: "Vitamin complex" },
    { name: "B-Complex", detail: "Vitamin support" },
  ],
};


function slugify(value: unknown): string {
  return String(value ?? "").trim().toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function protocolIdentity(value: unknown): string {
  const slug = slugify(value).replace(/-drip$/, "");
  if (slug.startsWith("glamour")) return "glamour";
  if (slug.startsWith("radiance")) return "radiance";
  if (slug.startsWith("restore")) return "restore";
  if (slug.startsWith("renew")) return "renew";
  if (slug.startsWith("apex")) return "apex";
  if (slug.startsWith("nadx") || slug.startsWith("cellular-energy")) return "nadx";
  if (slug.startsWith("methyblu")) return "methyblu";
  if (slug.startsWith("shrink")) return "shrink";
  if (slug.startsWith("bounce-back")) return "bounce-back";
  if (slug.startsWith("reactivate")) return "reactivate";
  if (slug.startsWith("fit")) return "fit";
  if (slug.startsWith("refuel")) return "refuel";
  if (slug.startsWith("gut-plus") || slug === "gut") return "gut-plus";
  if (slug.startsWith("rebuild")) return "rebuild";
  if (slug.startsWith("move")) return "move";
  if (slug.startsWith("femme")) return "femme";
  if (slug.startsWith("recover-plus")) return "recover-plus";
  if (slug.startsWith("performance-x")) return "performance-x";
  return slug;
}

function normalizeFamily(value: unknown, slug = ""): WellnessFamily {
  const identity = protocolIdentity(slug);
  if (["glamour", "radiance", "restore"].includes(identity)) return "Skin & Beauty";
  if (["renew", "apex", "nadx", "methyblu"].includes(identity)) return "Cellular & Longevity";
  if (["shrink", "fit", "refuel", "rebuild", "performance-x"].includes(identity)) return "Metabolic & Performance";
  if (identity === "gut-plus") return "Digestive & Systemic";
  if (identity === "femme") return "Women's Wellness";
  if (["bounce-back", "reactivate", "recover-plus"].includes(identity)) return "Recovery & Immune";
  if (identity === "move") return "Musculoskeletal";

  const family = String(value ?? "").toLowerCase();
  if (family.includes("skin") || family.includes("beauty") || family.includes("radiance")) return "Skin & Beauty";
  if (family.includes("cellular") || family.includes("longevity") || family.includes("nad")) return "Cellular & Longevity";
  if (family.includes("metabolic") || family.includes("performance") || family.includes("weight") || family.includes("athletic") || family.includes("sports")) return "Metabolic & Performance";
  if (family.includes("digestive") || family.includes("systemic") || family.includes("gut")) return "Digestive & Systemic";
  if (family.includes("women") || family.includes("femme")) return "Women's Wellness";
  if (family.includes("recovery") || family.includes("immune") || family.includes("bounce") || family.includes("recover")) return "Recovery & Immune";
  if (family.includes("cognitive") || family.includes("neuro")) return "Cognitive & Neuro";
  if (family.includes("musculoskeletal") || family.includes("mobility")) return "Musculoskeletal";
  return "Cellular & Longevity";
}

function parseProtocol(raw: Record<string, unknown>, index: number): Protocol | null {
  const name = String(raw.name ?? raw.title ?? "").trim();
  if (!name || raw.active === false) return null;
  const slug = slugify(raw.slug ?? raw.id ?? name);
  if (!slug) return null;
  return {
    id: String(raw.id ?? slug),
    slug,
    name,
    number: String(raw.number ?? String(index + 1).padStart(2, "0")),
    family: normalizeFamily(raw.family ?? raw.category, slug),
    description: String(raw.description ?? raw.shortDescription ?? raw.summary ?? "Protocol details are available through the DRIPLABS protocol collection."),
    shortDescription: typeof raw.shortDescription === "string" ? raw.shortDescription : undefined,
    category: typeof raw.category === "string" ? raw.category : undefined,
    active: raw.active !== false,
    ingredients: raw.ingredients,
    formulation: raw.formulation,
  };
}

function protocolIngredients(protocol: Protocol): Ingredient[] {
  const formulation = protocol.formulation as { ingredients?: unknown } | undefined;
  const raw = protocol.ingredients ?? formulation?.ingredients;
  if (Array.isArray(raw)) {
    const mapped = raw.map((value): Ingredient | null => {
      if (typeof value === "string") return { name: value };
      if (!value || typeof value !== "object") return null;
      const item = value as Record<string, unknown>;
      const name = String(item.name ?? item.title ?? "").trim();
      if (!name) return null;
      const amount = item.amount ?? item.dose ?? item.quantity;
      return {
        name,
        ...(amount ? { amount: String(amount) } : {}),
        ...(item.detail ? { detail: String(item.detail) } : {}),
      };
    }).filter((item): item is Ingredient => Boolean(item)).slice(0, 4);
    if (mapped.length) return mapped;
  }
  return FORMULATION_FALLBACKS[protocolIdentity(protocol.slug)] ?? [];
}

export default function UnifiedWellnessObservatory() {
  const reducedMotion = useReducedMotion();
  const [protocols, setProtocols] = useState<Protocol[]>(FALLBACK_PROTOCOLS);
  const [activeFamily, setActiveFamily] = useState<WellnessFamily>("Skin & Beauty");
  const [activeSlug, setActiveSlug] = useState("radiance");
  const [paused, setPaused] = useState(false);
  const familyViewportRef = useRef<HTMLDivElement | null>(null);
  const familyCardRefs = useRef(new Map<WellnessFamily, HTMLButtonElement>());
  const stageRef = useRef<HTMLDivElement | null>(null);
  const orbitNodeRefs = useRef(new Map<string, HTMLDivElement>());
  const orbitAngleRef = useRef(0);
  const frontSlugRef = useRef("");
  const orbitSignatureRef = useRef("");
  const pauseFamilyRotationUntil = useRef(0);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;
    async function loadProtocols() {
      try {
        const response = await fetch("/api/protocols", { cache: "no-store", signal: controller.signal });
        if (!response.ok) return;
        const payload: unknown = await response.json();
        const root = payload as { data?: unknown; protocols?: unknown };
        const list = Array.isArray(payload) ? payload : Array.isArray(root?.protocols) ? root.protocols : Array.isArray(root?.data) ? root.data : [];
        const parsed = list.map((item, index) => item && typeof item === "object" ? parseProtocol(item as Record<string, unknown>, index) : null).filter((item): item is Protocol => Boolean(item));
        if (!cancelled && parsed.length) {
          // API entries win; fallback entries only fill protocols not included by the endpoint.
          const merged = new Map<string, Protocol>();
          parsed.forEach((protocol) => {
            const key = protocolIdentity(protocol.slug);
            const canonical = FALLBACK_PROTOCOLS.find((item) => protocolIdentity(item.slug) === key);
            merged.set(key, canonical ? { ...protocol, slug: canonical.slug, name: canonical.name, number: canonical.number, family: canonical.family } : protocol);
          });
          FALLBACK_PROTOCOLS.forEach((protocol) => {
            const key = protocolIdentity(protocol.slug);
            if (!merged.has(key)) merged.set(key, protocol);
          });
          setProtocols(Array.from(merged.values()));
        }
      } catch {
        // The local fallback catalogue remains available if the API is offline.
      }
    }
    void loadProtocols();
    return () => { cancelled = true; controller.abort(); };
  }, []);

  const familyProtocols = useMemo(() => {
    const filtered = protocols.filter(
      (protocol) => protocol.active !== false && protocol.family === activeFamily,
    );

    // The Skin & Beauty carousel is deliberately kept to these three distinct
    // signature protocols: RADIANCE, GLAMOUR and RESTORE. No duplicated orbit cards.
    if (activeFamily === "Skin & Beauty") {
      return [...filtered].sort((a, b) => {
        const ai = SKIN_PROTOCOL_ORDER.indexOf(protocolIdentity(a.slug) as (typeof SKIN_PROTOCOL_ORDER)[number]);
        const bi = SKIN_PROTOCOL_ORDER.indexOf(protocolIdentity(b.slug) as (typeof SKIN_PROTOCOL_ORDER)[number]);
        return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
      }).filter((protocol, index, list) =>
        list.findIndex((item) => protocolIdentity(item.slug) === protocolIdentity(protocol.slug)) === index
      ).filter((protocol) => SKIN_PROTOCOL_ORDER.includes(protocolIdentity(protocol.slug) as (typeof SKIN_PROTOCOL_ORDER)[number]));
    }

    // Deduplicate by protocol identity and keep every protocol assigned to this family.
    return filtered.filter((protocol, index, list) =>
      list.findIndex((item) => protocolIdentity(item.slug) === protocolIdentity(protocol.slug)) === index
    );
  }, [protocols, activeFamily]);

  const activeProtocol = useMemo(
    () => familyProtocols.find((protocol) => protocol.slug === activeSlug) ?? familyProtocols[0] ?? protocols[0] ?? FALLBACK_PROTOCOLS[0],
    [familyProtocols, activeSlug, protocols],
  );
  const ingredients = useMemo(() => protocolIngredients(activeProtocol), [activeProtocol]);
  // Exactly one card for each unique protocol in the selected family. Never pad the orbit with copies.
  const orbitProtocols = familyProtocols;

  const chooseFamily = useCallback((family: WellnessFamily) => {
    pauseFamilyRotationUntil.current = Date.now() + 11000;
    setActiveFamily(family);
  }, []);

  const chooseProtocol = useCallback((protocol: Protocol) => {
    pauseFamilyRotationUntil.current = Date.now() + 11000;
    setActiveFamily(protocol.family);
    setActiveSlug(protocol.slug);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (paused || Date.now() < pauseFamilyRotationUntil.current) return;
      setActiveFamily((current) => {
        const index = FAMILY_ORDER.indexOf(current);
        return FAMILY_ORDER[(index + 1) % FAMILY_ORDER.length];
      });
    }, 16000);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const element = familyCardRefs.current.get(activeFamily);
    const viewport = familyViewportRef.current;
    if (!element || !viewport) return;
    const left = element.offsetLeft - viewport.offsetLeft;
    if (reducedMotion) viewport.scrollLeft = left;
    else viewport.scrollTo({ left, behavior: "smooth" });
  }, [activeFamily, reducedMotion]);

  useEffect(() => {
    if (familyProtocols.some((protocol) => protocol.slug === activeSlug)) return;
    if (familyProtocols[0]) setActiveSlug(familyProtocols[0].slug);
  }, [familyProtocols, activeSlug]);

  // True elliptical orbit: each card has its own position and never rotates
  // upside down. Cards in the rear pass behind the model and soften; the front
  // card comes forward, brightens and drives the detail panel.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !orbitProtocols.length) return;

    let frame = 0;
    let lastTime = 0;
    const reduced = Boolean(reducedMotion);
    const signature = orbitProtocols.map((protocol) => protocol.slug).join("|");
    if (orbitSignatureRef.current !== signature) {
      orbitSignatureRef.current = signature;
      frontSlugRef.current = "";
    }

    const placeCards = (now: number, advance: boolean) => {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      if (advance && lastTime && !paused && !reduced) {
        orbitAngleRef.current += Math.min(now - lastTime, 40) * 0.00013;
      }
      lastTime = now;

      const count = orbitProtocols.length;
      const cardWidth = Math.min(198, Math.max(132, rect.width * 0.205));
      const centerX = rect.width * 0.51;
      const centerY = rect.height * 0.59;
      const radiusX = Math.max(72, Math.min(rect.width * 0.365, rect.width / 2 - cardWidth * 0.58));
      const radiusY = Math.max(62, rect.height * 0.175);
      const positions = orbitProtocols.map((protocol, index) => {
        const angle = Math.PI / 2 + orbitAngleRef.current + (index * Math.PI * 2) / count;
        const delta = Math.abs(Math.atan2(Math.sin(angle - Math.PI / 2), Math.cos(angle - Math.PI / 2)));
        return { protocol, angle, delta, depth: (Math.sin(angle) + 1) / 2 };
      });

      let nearestIndex = 0;
      let nearestDelta = Infinity;
      positions.forEach((position, index) => {
        if (position.delta < nearestDelta) {
          nearestDelta = position.delta;
          nearestIndex = index;
        }
      });

      positions.forEach(({ protocol, angle, depth }, index) => {
        const node = orbitNodeRefs.current.get(protocol.slug);
        if (!node) return;

        const x = centerX + Math.cos(angle) * radiusX;
        const y = centerY + Math.sin(angle) * radiusY;
        const scale = 0.78 + depth * 0.22;
        node.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
        node.style.opacity = String(0.12 + depth * 0.88);
        node.style.filter = `blur(${(1 - depth) * 0.45}px)`;
        node.style.zIndex = depth > 0.52 ? "5" : "2";
        node.style.visibility = "visible";

        const card = node.querySelector(".uw-orbit-card");
        if (card) {
          card.classList.toggle("front", index === nearestIndex);
          card.classList.toggle("rear", depth < 0.25);
        }
      });

      const frontProtocol = positions[nearestIndex]?.protocol;
      if (frontProtocol && frontSlugRef.current !== frontProtocol.slug) {
        frontSlugRef.current = frontProtocol.slug;
        if (!paused) setActiveSlug(frontProtocol.slug);
      }

      if (advance && !paused && !reduced) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    const tick = (now: number) => placeCards(now, true);
    const start = () => {
      window.cancelAnimationFrame(frame);
      placeCards(performance.now(), false);
      if (!paused && !reduced) frame = window.requestAnimationFrame(tick);
    };
    const onResize = () => start();

    start();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, [orbitProtocols, paused, reducedMotion]);

  const activeFamilyIndex = FAMILY_ORDER.indexOf(activeFamily);
  const statCount = Math.max(protocols.length, 19);

  return (
    <section className={`uw-observatory ${reducedMotion ? "uw-reduced-motion" : ""}`} id="wellness-observatory">
      <style>{`
        .uw-observatory{--uw-blue:#1677f8;--uw-ice:#f5f9ff;--uw-ink:#101d38;--uw-muted:#63718a;--uw-amber:#f0ad63;position:relative;isolation:isolate;overflow:hidden;background:linear-gradient(135deg,#fbfdff 0%,#edf5ff 49%,#f9fbff 100%);color:var(--uw-ink);padding:clamp(42px,5vw,82px) clamp(18px,4vw,66px) clamp(54px,6vw,94px)}
        .uw-observatory:before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(ellipse at 74% 8%,rgba(72,160,255,.2),transparent 32%),radial-gradient(ellipse at 4% 38%,rgba(186,217,255,.42),transparent 35%),radial-gradient(ellipse at 78% 88%,rgba(240,173,99,.09),transparent 27%)}
        .uw-shell{max-width:1660px;margin:0 auto;position:relative}.uw-top{display:grid;grid-template-columns:minmax(240px,.76fr) minmax(0,2.24fr);gap:clamp(22px,3vw,52px);align-items:center;padding-bottom:clamp(28px,3.4vw,48px);border-bottom:1px solid rgba(33,101,190,.16)}
        .uw-kicker{display:flex;align-items:center;gap:12px;margin-bottom:18px;color:#226bd0;font-size:9px;font-weight:700;letter-spacing:.31em;text-transform:uppercase}.uw-kicker-line{width:35px;height:1px;background:linear-gradient(90deg,#146df0,#9ccaff)}
        .uw-intro h2{font-family:var(--font-heading,Georgia,serif);font-size:clamp(2.8rem,4.2vw,5rem);font-weight:400;line-height:.88;letter-spacing:-.065em;margin:0;color:#101b37}.uw-intro h2 em{display:block;color:#176cf3;font-weight:400;margin-top:.06em}.uw-intro p{max-width:300px;margin:18px 0 0;color:#536582;font-size:13px;line-height:1.65}.uw-family-meta{display:flex;align-items:center;gap:9px;margin-top:24px;color:#55708f;font-size:8px;letter-spacing:.2em;text-transform:uppercase}.uw-family-meta strong{color:#1268ef;font-size:12px;font-weight:600;letter-spacing:.05em}.uw-family-meta i{display:inline-block;width:5px;height:5px;border-radius:50%;background:#2387ff;box-shadow:0 0 12px #66b2ff}
        .uw-family-wrap{min-width:0;position:relative}.uw-family-viewport{display:flex;gap:13px;overflow-x:auto;scrollbar-width:none;scroll-snap-type:x mandatory;padding:9px 5px 14px;overscroll-behavior-x:contain;scroll-behavior:smooth}.uw-family-viewport::-webkit-scrollbar{display:none}.uw-family-card{position:relative;isolation:isolate;overflow:hidden;flex:0 0 calc((100% - 26px)/3);min-width:0;aspect-ratio:.91/1;max-height:340px;scroll-snap-align:start;border:1px solid rgba(255,255,255,.86);border-radius:15px;background:#d9e8fb;text-align:left;box-shadow:0 14px 36px rgba(34,83,146,.10);cursor:pointer;transition:border-color .65s cubic-bezier(.22,1,.36,1),box-shadow .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1)}.uw-family-card:hover{transform:translateY(-4px);box-shadow:0 20px 44px rgba(22,104,230,.16)}.uw-family-card.active{border-color:rgba(22,119,248,.95);box-shadow:0 0 0 1px rgba(22,119,248,.42),0 0 0 5px rgba(93,169,255,.12),0 18px 48px rgba(22,119,248,.22);transform:translateY(-3px)}.uw-family-image{position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover;transition:transform 1.3s cubic-bezier(.22,1,.36,1),filter .8s ease}.uw-family-card:hover .uw-family-image{transform:scale(1.045)}.uw-family-card:after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(3,18,42,.02) 5%,rgba(5,24,52,.04) 36%,rgba(5,24,52,.79) 100%),linear-gradient(135deg,rgba(255,255,255,.20),transparent 50%)}.uw-family-card.active:before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 10%,rgba(91,173,255,.28),transparent 52%);z-index:0}.uw-family-number{position:absolute;left:14px;top:14px;color:white;font-family:Georgia,serif;font-size:15px;text-shadow:0 1px 8px rgba(0,0,0,.2)}.uw-family-state{position:absolute;right:12px;top:13px;width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.58);border:1px solid rgba(255,255,255,.8)}.uw-family-card.active .uw-family-state{background:#fff;box-shadow:0 0 0 4px rgba(22,119,248,.25),0 0 18px #69b4ff}.uw-family-copy{position:absolute;left:15px;right:13px;bottom:16px;color:white;z-index:1}.uw-family-copy h3{font-family:var(--font-heading,Georgia,serif);font-size:clamp(17px,1.55vw,25px);font-weight:400;letter-spacing:-.045em;line-height:1.02;margin:0;text-shadow:0 2px 15px rgba(0,0,0,.2)}.uw-family-copy p{margin:9px 0 0;color:rgba(255,255,255,.8);font-size:7px;font-weight:600;letter-spacing:.15em;line-height:1.5}.uw-family-arrow{position:absolute;right:12px;bottom:13px;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;border:1px solid rgba(255,255,255,.75);color:white;background:rgba(13,41,78,.16);backdrop-filter:blur(10px);transition:background .45s ease,transform .45s ease}.uw-family-card:hover .uw-family-arrow,.uw-family-card.active .uw-family-arrow{background:#1677f8;transform:translateX(2px)}.uw-family-controls{display:flex;align-items:center;justify-content:space-between;padding:0 5px;margin-top:4px}.uw-family-dots{display:flex;align-items:center;gap:8px}.uw-family-dot{height:4px;width:4px;border-radius:9px;background:#b8cbe4;transition:all .4s ease;border:0;padding:0;cursor:pointer}.uw-family-dot.active{width:22px;background:#1677f8}.uw-family-nav{display:flex;gap:7px}.uw-icon-btn{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;border:1px solid rgba(31,100,194,.22);color:#1769da;background:rgba(255,255,255,.55);transition:background .35s ease,color .35s ease,box-shadow .35s ease,transform .35s ease;cursor:pointer}.uw-icon-btn:hover{background:#176cf3;color:white;box-shadow:0 8px 20px rgba(22,108,243,.2);transform:translateY(-1px)}
        .uw-lower{display:grid;grid-template-columns:minmax(270px,.72fr) minmax(0,1.65fr);gap:clamp(24px,3.2vw,54px);padding-top:clamp(28px,3.8vw,52px);align-items:stretch}.uw-detail{display:flex;flex-direction:column;min-width:0;padding:8px 0 5px}.uw-detail-kicker{display:flex;align-items:center;gap:10px;color:#176bd7;font-size:8px;font-weight:700;letter-spacing:.32em;text-transform:uppercase;margin-bottom:18px}.uw-detail-kicker:before{content:"";width:27px;height:1px;background:#1683ff;box-shadow:0 0 10px rgba(22,131,255,.45)}.uw-detail h3{font-family:var(--font-heading,Georgia,serif);font-weight:400;font-size:clamp(2.55rem,4vw,4.7rem);line-height:.84;letter-spacing:-.07em;margin:0;color:#101b37;text-wrap:balance}.uw-detail h3 span{color:#176cf3}.uw-detail-description{max-width:470px;margin:18px 0 0;color:#566783;font-size:13px;line-height:1.65}.uw-data-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:18px}.uw-data-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(41,111,197,.18);background:rgba(255,255,255,.54);border-radius:999px;padding:7px 10px;color:#526987;font-size:8px;letter-spacing:.08em}.uw-data-chip svg{color:#1677f8}.uw-ingredients-head{display:flex;align-items:center;gap:10px;margin:25px 0 13px;color:#216bd0;font-size:8px;font-weight:700;letter-spacing:.28em;text-transform:uppercase}.uw-ingredients-head:after{content:"";flex:1;height:1px;background:linear-gradient(90deg,rgba(35,105,194,.22),transparent)}.uw-ingredient-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.uw-ingredient{min-width:0;display:flex;align-items:center;gap:9px;border:1px solid rgba(41,111,197,.14);background:rgba(255,255,255,.46);padding:10px 9px;border-radius:10px;transition:border-color .4s ease,background .4s ease,transform .4s ease}.uw-ingredient:hover{border-color:rgba(22,119,248,.4);background:rgba(255,255,255,.8);transform:translateY(-2px)}.uw-ingredient-mark{display:grid;place-items:center;flex:0 0 26px;width:26px;height:26px;color:#1677f8;border-radius:8px;background:linear-gradient(135deg,rgba(22,119,248,.12),rgba(166,214,255,.28));border:1px solid rgba(22,119,248,.16)}.uw-ingredient strong{display:block;color:#1c2d4c;font-size:10px;font-weight:600;line-height:1.25;overflow-wrap:anywhere}.uw-ingredient small{display:block;color:#75839b;font-size:8px;line-height:1.3;margin-top:3px}.uw-no-ingredients{font-size:10px;line-height:1.5;color:#74829a;background:rgba(255,255,255,.5);border:1px dashed rgba(41,111,197,.23);padding:13px;border-radius:10px}.uw-cta{display:inline-flex;align-items:center;justify-content:space-between;gap:20px;align-self:flex-start;margin-top:23px;min-height:44px;padding:0 9px 0 17px;border:1px solid rgba(255,255,255,.72);border-radius:999px;background:linear-gradient(110deg,#0e56de,#1683ff 75%,#59adff);box-shadow:0 10px 24px rgba(22,105,238,.2),inset 0 1px 0 rgba(255,255,255,.35);color:white;text-decoration:none;font-size:10px;font-weight:600;letter-spacing:.03em;transition:transform .4s ease,box-shadow .4s ease}.uw-cta:hover{transform:translateY(-2px);box-shadow:0 15px 33px rgba(22,105,238,.28),inset 0 1px 0 rgba(255,255,255,.35)}.uw-cta span{display:grid;place-items:center;width:27px;height:27px;border-radius:50%;background:rgba(2,35,125,.24);border:1px solid rgba(255,255,255,.28)}.uw-stats{display:flex;align-items:center;gap:13px;margin-top:auto;padding-top:22px;color:#71819b;font-size:7px;letter-spacing:.17em;text-transform:uppercase}.uw-stats strong{display:block;color:#142646;font-family:var(--font-heading,Georgia,serif);font-size:27px;line-height:1;font-weight:400;letter-spacing:-.04em;margin-bottom:5px}.uw-stats strong em{font-style:normal;color:#1677f8}.uw-stats-divider{width:1px;height:36px;background:rgba(41,111,197,.18)}
        .uw-stage{position:relative;isolation:isolate;min-height:600px;overflow:hidden;border-radius:20px;border:1px solid rgba(255,255,255,.88);background:radial-gradient(ellipse at 50% 42%,rgba(168,209,255,.58),transparent 39%),linear-gradient(135deg,#dcecff 0%,#f9fcff 50%,#cfe3fb 100%);box-shadow:0 20px 55px rgba(23,72,137,.11)}
        .uw-stage-bg{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:.17;mix-blend-mode:multiply;pointer-events:none}.uw-stage-glow{position:absolute;z-index:0;left:31%;top:9%;width:62%;height:70%;border-radius:50%;background:radial-gradient(ellipse,rgba(109,185,255,.39),rgba(155,207,255,.12) 42%,transparent 70%);filter:blur(29px);animation:uw-breathe 9s ease-in-out infinite}.uw-stage-orbit{position:absolute;z-index:1;left:7%;right:7%;top:38%;height:38%;border:1px solid rgba(39,130,244,.45);border-radius:50%;transform:rotate(-5deg);box-shadow:0 0 25px rgba(80,162,255,.19),inset 0 0 16px rgba(255,255,255,.25);pointer-events:none}.uw-stage-orbit:before,.uw-stage-orbit:after{content:"";position:absolute;width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 0 3px rgba(43,140,255,.18),0 0 15px #1683ff}.uw-stage-orbit:before{left:9%;top:21%}.uw-stage-orbit:after{right:12%;bottom:12%;background:#f6bb79;box-shadow:0 0 0 3px rgba(246,187,121,.2),0 0 13px #f2a65a}
        .uw-model-portrait{position:absolute;display:block;left:51%;bottom:-2%;width:auto;height:102%;max-width:70%;object-fit:contain;object-position:center bottom;transform:translateX(-50%);z-index:3;filter:drop-shadow(0 12px 28px rgba(16,53,98,.16));pointer-events:none;user-select:none}.uw-stage-top{position:absolute;left:24px;right:24px;top:20px;display:flex;align-items:center;justify-content:space-between;gap:15px;z-index:7}.uw-stage-label{display:flex;align-items:center;gap:9px;color:#2469bc;font-size:8px;font-weight:700;letter-spacing:.24em;text-transform:uppercase}.uw-stage-label i{width:6px;height:6px;background:#258cff;border-radius:50%;box-shadow:0 0 12px #65b8ff}.uw-stage-counter{color:#526d90;font-size:8px;letter-spacing:.19em;text-align:right;text-transform:uppercase}.uw-stage-counter strong{color:#176cf3;font-weight:700}.uw-model-caption{position:absolute;z-index:6;top:13%;left:50%;transform:translateX(-50%);width:max-content;max-width:90%;border:1px solid rgba(255,255,255,.8);border-radius:999px;background:rgba(248,252,255,.52);backdrop-filter:blur(18px);padding:8px 12px;color:#3c5a81;font-size:7px;letter-spacing:.22em;text-transform:uppercase}
        .uw-orbit-track{position:absolute;z-index:auto;inset:0;pointer-events:none;overflow:visible}.uw-orbit-position{position:absolute;left:0;top:0;width:clamp(145px,18vw,198px);transform:translate(-50%,-50%);pointer-events:auto;will-change:transform,opacity,filter;transition:opacity .3s ease,filter .3s ease}.uw-orbit-counter{transform:none;transform-origin:center;pointer-events:auto}.uw-orbit-card{position:relative;isolation:isolate;display:flex;flex-direction:column;justify-content:space-between;width:100%;aspect-ratio:1/1;min-height:0;overflow:hidden;padding:0;border:1px solid rgba(255,255,255,.95);border-radius:15px;background:#f7f9fc;box-shadow:0 12px 32px rgba(37,93,157,.17),inset 0 1px 0 white;backdrop-filter:blur(24px);text-align:left;color:#152546;cursor:pointer;transition:transform .5s cubic-bezier(.22,1,.36,1),border-color .45s ease,box-shadow .45s ease,background .45s ease}.uw-protocol-card-art{object-fit:cover;display:block;transition:filter .45s ease,transform .6s cubic-bezier(.22,1,.36,1)}.uw-orbit-card:hover .uw-protocol-card-art,.uw-orbit-card.selected .uw-protocol-card-art{filter:saturate(1.04);transform:scale(1.015)}.uw-orbit-card:hover,.uw-orbit-card.selected{transform:translateY(-7px) scale(1.025);border-color:rgba(29,126,255,.95);background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(224,241,255,.88));box-shadow:0 0 0 1px rgba(22,119,248,.25),0 18px 44px rgba(22,119,248,.24),inset 0 1px 0 white}.uw-orbit-card.front{border-color:rgba(29,126,255,.96);background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(224,241,255,.9));box-shadow:0 0 0 1px rgba(22,119,248,.22),0 0 28px rgba(22,119,248,.2),0 18px 44px rgba(22,119,248,.16),inset 0 1px 0 white}.uw-orbit-card.rear{box-shadow:0 7px 18px rgba(37,93,157,.07),inset 0 1px 0 rgba(255,255,255,.55)}.uw-orbit-card:focus-visible{outline:2px solid #1677f8;outline-offset:3px}.uw-card-glint{position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 78% 8%,rgba(94,176,255,.24),transparent 36%),linear-gradient(135deg,rgba(255,255,255,.35),transparent 48%);pointer-events:none}.uw-card-head{display:flex;align-items:center;justify-content:space-between;gap:10px;color:#5e7392;font-size:8px;letter-spacing:.16em}.uw-card-head strong{font-weight:600;color:#1d5fc4}.uw-protocol-glyph{display:grid;place-items:center;width:52px;height:52px;margin:10px auto;color:#1475f5;background:radial-gradient(circle,rgba(107,184,255,.22),rgba(255,255,255,.18) 70%);border:1px solid rgba(22,119,248,.15);border-radius:50%;box-shadow:inset 0 0 19px rgba(255,255,255,.9),0 5px 18px rgba(22,119,248,.11)}.uw-protocol-title{display:block;font-family:var(--font-heading,Georgia,serif);font-size:20px;line-height:1.03;letter-spacing:-.045em;color:#122344;font-weight:400}.uw-protocol-family{display:block;margin-top:6px;color:#3d6caa;font-size:7px;line-height:1.4;letter-spacing:.13em;text-transform:uppercase}.uw-protocol-ingredients{display:block;margin-top:8px;padding-top:8px;border-top:1px solid rgba(37,101,183,.16);color:#637997;font-size:8px;line-height:1.4;min-height:28px;overflow-wrap:anywhere}.uw-card-bottom{display:flex;align-items:center;justify-content:space-between;gap:9px;margin-top:10px;color:#53739b;font-size:7px;letter-spacing:.13em;text-transform:uppercase}.uw-card-bottom span:last-child{display:grid;place-items:center;width:23px;height:23px;border-radius:50%;background:#1677f8;color:white;box-shadow:0 5px 12px rgba(22,119,248,.22)}
        .uw-active-detail{position:absolute;z-index:7;top:63px;right:22px;max-width:180px;padding:12px 13px;border:1px solid rgba(255,255,255,.87);border-radius:12px;background:rgba(250,253,255,.68);backdrop-filter:blur(20px);box-shadow:0 12px 34px rgba(54,105,163,.12)}.uw-active-detail small{display:block;color:#2770cd;font-size:7px;letter-spacing:.2em;text-transform:uppercase}.uw-active-detail strong{display:block;margin-top:5px;font-family:var(--font-heading,Georgia,serif);font-size:18px;font-weight:400;line-height:1.05;letter-spacing:-.035em;color:#182946}.uw-active-detail span{display:block;margin-top:5px;color:#6a7e99;font-size:8px;line-height:1.4}.uw-stage-footer{position:absolute;z-index:7;left:24px;right:24px;bottom:17px;display:flex;align-items:center;justify-content:space-between;gap:12px;color:#56749b;font-size:7px;letter-spacing:.18em;text-transform:uppercase}.uw-stage-footer b{color:#176cf3;font-weight:600}.uw-stage-footer span:last-child{display:flex;align-items:center;gap:7px}.uw-stage-footer span:last-child:before{content:"";width:4px;height:4px;background:#f2a65a;border-radius:50%;box-shadow:0 0 9px rgba(242,166,90,.7)}
        @keyframes uw-breathe{0%,100%{opacity:.48;transform:scale(.94)}50%{opacity:.88;transform:scale(1.04)}}
        .uw-reduced-motion .uw-stage-glow{animation:none!important}.uw-reduced-motion *{scroll-behavior:auto!important;transition-duration:.01ms!important}
        @media(max-width:1200px){.uw-model-portrait{height:96%;max-width:72%}.uw-top{grid-template-columns:minmax(210px,.7fr) minmax(0,2fr);gap:24px}.uw-family-card{flex-basis:calc((100% - 18px)/2);aspect-ratio:1/1.05}.uw-lower{grid-template-columns:minmax(245px,.75fr) minmax(0,1.35fr);gap:25px}.uw-stage{min-height:560px}.uw-orbit-position{width:clamp(150px,17vw,185px)}.uw-orbit-card{min-height:0;padding:0}.uw-model-portrait{height:96%;max-width:72%}}
        @media(max-width:850px){.uw-observatory{padding:42px 20px 58px}.uw-top{grid-template-columns:1fr;gap:24px}.uw-intro p{max-width:510px}.uw-family-card{flex-basis:calc((100% - 26px)/3);aspect-ratio:.85/1;min-width:165px}.uw-lower{grid-template-columns:1fr;gap:28px}.uw-detail{max-width:720px}.uw-stage{min-height:570px}.uw-model-portrait{height:98%;max-width:78%}.uw-orbit-position{width:clamp(145px,25vw,190px)}}
        @media(max-width:560px){.uw-observatory{padding:36px 15px 44px}.uw-intro h2{font-size:clamp(2.65rem,13vw,4rem)}.uw-intro p{font-size:12px}.uw-family-card{flex-basis:76%;min-width:0;max-height:none;aspect-ratio:.92/1}.uw-family-copy h3{font-size:24px}.uw-lower{padding-top:28px}.uw-detail h3{font-size:clamp(2.65rem,13vw,4rem)}.uw-ingredient-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.uw-stage{min-height:510px;border-radius:15px}.uw-model-portrait{height:90%;max-width:96%;bottom:1%;left:50%}.uw-stage-top{left:14px;right:14px;top:14px}.uw-stage-counter{font-size:7px}.uw-model-caption{top:12%;font-size:6px}.uw-orbit-track{transform-origin:50% 60%}.uw-orbit-position{width:clamp(124px,39vw,155px)}.uw-orbit-card{min-height:0;padding:0;border-radius:12px}.uw-active-detail{top:48px;right:10px;max-width:139px;padding:9px}.uw-active-detail strong{font-size:15px}.uw-stage-footer{left:12px;right:12px;bottom:12px;font-size:6px;letter-spacing:.08em}.uw-stats{gap:9px}.uw-stats strong{font-size:23px}}
        @media(prefers-reduced-motion:reduce){.uw-stage-glow{animation:none!important}.uw-family-viewport{scroll-behavior:auto!important}}
      `}</style>

      <div className="uw-shell">
        <div className="uw-top">
          <motion.div className="uw-intro" initial={reducedMotion ? false : { opacity: 0, y: 18, filter: "blur(7px)" }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="uw-kicker"><span className="uw-kicker-line" />WELLNESS PATHWAYS</div>
            <h2>Explore by <em>wellness.</em></h2>
            <p>Explore physician-guided wellness pathways designed around different areas of wellbeing.</p>
            <div className="uw-family-meta"><i /><strong>{String(activeFamilyIndex + 1).padStart(2, "0")}</strong><span>/ {FAMILY_DATA.length} wellness families</span></div>
          </motion.div>

          <div className="uw-family-wrap">
            <div className="uw-family-viewport" ref={familyViewportRef} aria-label="Wellness family carousel">
              {FAMILY_DATA.map((family, index) => {
                const selected = family.id === activeFamily;
                return (
                  <button key={family.id} ref={(element) => { if (element) familyCardRefs.current.set(family.id, element); else familyCardRefs.current.delete(family.id); }} type="button" className={`uw-family-card ${selected ? "active" : ""}`} onClick={() => chooseFamily(family.id)} aria-pressed={selected} aria-label={`Show ${family.id} protocols`}>
                    <Image src={family.image} alt="" fill sizes="(max-width: 560px) 76vw, (max-width: 850px) 31vw, 22vw" className="uw-family-image" priority={index < 3} />
                    <span className="uw-family-number">{String(index + 1).padStart(2, "0")}</span><span className="uw-family-state" />
                    <span className="uw-family-copy"><h3>{family.id}</h3><p>{family.descriptor}</p></span>
                    <span className="uw-family-arrow"><ArrowRight size={15} strokeWidth={1.5} /></span>
                  </button>
                );
              })}
            </div>
            <div className="uw-family-controls">
              <div className="uw-family-dots" aria-label="Select wellness family">
                {FAMILY_DATA.map((family) => <button key={family.id} type="button" className={`uw-family-dot ${activeFamily === family.id ? "active" : ""}`} onClick={() => chooseFamily(family.id)} aria-label={`Select ${family.id}`} aria-pressed={activeFamily === family.id} />)}
              </div>
              <div className="uw-family-nav">
                <button type="button" className="uw-icon-btn" aria-label="Previous family" onClick={() => chooseFamily(FAMILY_ORDER[(activeFamilyIndex - 1 + FAMILY_ORDER.length) % FAMILY_ORDER.length])}><ArrowLeft size={15} /></button>
                <button type="button" className="uw-icon-btn" aria-label="Next family" onClick={() => chooseFamily(FAMILY_ORDER[(activeFamilyIndex + 1) % FAMILY_ORDER.length])}><ArrowRight size={15} /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="uw-lower">
          <aside className="uw-detail">
            <div className="uw-detail-kicker">Selected protocol</div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={`${activeFamily}-${activeProtocol.slug}`} initial={reducedMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={reducedMotion ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }} transition={{ duration: reducedMotion ? 0.01 : 0.52, ease: [0.22, 1, 0.36, 1] }}>
                <h3>{activeProtocol.name.split(/\s+/).length > 1 ? <>{activeProtocol.name.split(/\s+/).slice(0, -1).join(" ")}<br /><span>{activeProtocol.name.split(/\s+/).slice(-1).join("")}</span></> : <span>{activeProtocol.name}</span>}</h3>
                <p className="uw-detail-description">{activeProtocol.description}</p>
                <div className="uw-data-row"><span className="uw-data-chip"><ShieldCheck size={12} />Physician-guided</span><span className="uw-data-chip"><Atom size={12} />{activeFamily}</span></div>
                <div className="uw-ingredients-head">Key ingredients</div>
                {ingredients.length ? <div className="uw-ingredient-grid">{ingredients.map((ingredient) => <div className="uw-ingredient" key={`${activeProtocol.slug}-${ingredient.name}`}><span className="uw-ingredient-mark"><Atom size={15} strokeWidth={1.2} /></span><span><strong>{ingredient.name}</strong><small>{ingredient.amount ?? ingredient.detail ?? "Formulation component"}</small></span></div>)}</div> : <p className="uw-no-ingredients">Formulation ingredients are shown here when provided in the protocol data. Visit the protocol page for available formulation details.</p>}
              </motion.div>
            </AnimatePresence>
            <Link className="uw-cta" href={`/protocols/${activeProtocol.slug}`}>Explore protocol<span><ArrowRight size={15} /></span></Link>
            <div className="uw-stats"><div><strong>{statCount}<em>+</em></strong>PROTOCOLS</div><span className="uw-stats-divider" /><div><strong>{FAMILY_DATA.length}</strong>FAMILIES</div><span className="uw-stats-divider" /><div><strong>01</strong>PHYSICIAN-LED</div></div>
          </aside>

          <div className="uw-stage" ref={stageRef}>
            <Image src="/images/credibility/driplabs-credibility-background.png" alt="" fill sizes="(max-width: 850px) 100vw, 65vw" className="uw-stage-bg" />
            <div className="uw-stage-glow" aria-hidden="true" /><div className="uw-stage-orbit" aria-hidden="true" />

            {/* Foreground model: place the supplied transparent portrait at this public path. */}
            <img src="/images/unified-wellness/clinical-model.png" alt="DRIPLABS clinical wellness model" className="uw-model-portrait" draggable={false} />

            <div className="uw-stage-top"><div className="uw-stage-label"><i />Protocol observatory</div><div className="uw-stage-counter"><strong>{String(familyProtocols.length).padStart(2, "0")}</strong> protocols<br />in this family</div></div>
            <div className="uw-model-caption">DRIPLABS · Clinical wellness, considered</div>

            {/* Each unique family protocol follows an elliptical path around the foreground model. */}
            <div className="uw-orbit-track" aria-label="Orbiting family protocols">
              {orbitProtocols.map((protocol) => {
                const selected = protocol.slug === activeProtocol.slug;
                const cardArtSlug = protocolIdentity(protocol.slug);
                return (
                  <div
                    key={protocol.slug}
                    ref={(element) => {
                      if (element) orbitNodeRefs.current.set(protocol.slug, element);
                      else orbitNodeRefs.current.delete(protocol.slug);
                    }}
                    className="uw-orbit-position"
                    style={{ visibility: "hidden" }}
                  >
                    <div className="uw-orbit-counter">
                      <button
                        type="button"
                        className={`uw-orbit-card ${selected ? "selected" : ""}`}
                        onClick={() => chooseProtocol(protocol)}
                        onMouseEnter={() => {
                          setPaused(true);
                          pauseFamilyRotationUntil.current = Date.now() + 11000;
                        }}
                        onMouseLeave={() => setPaused(false)}
                        onFocus={() => {
                          setPaused(true);
                          pauseFamilyRotationUntil.current = Date.now() + 11000;
                        }}
                        onBlur={() => setPaused(false)}
                        aria-pressed={selected}
                        aria-label={`View ${protocol.name} protocol details`}
                      >
                        <Image
                          src={`/images/unified-wellness/protocol-cards/${cardArtSlug}.webp`}
                          alt={`${protocol.name} protocol card`}
                          fill
                          sizes="(max-width: 560px) 155px, (max-width: 1200px) 185px, 198px"
                          className="uw-protocol-card-art"
                          draggable={false}
                          priority={selected}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="uw-active-detail" aria-live="polite"><small>Selected protocol · {activeProtocol.number}</small><strong>{activeProtocol.name}</strong><span>{activeFamily}</span></div>
            <div className="uw-stage-footer"><span><b>{activeFamily}</b> · FAMILY SELECTED</span><span>Hover cards to pause · Select to explore</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
