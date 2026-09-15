export type TreatmentFamily =
  | "Skin & Beauty"
  | "Cellular & Longevity"
  | "Metabolic & Performance"
  | "Digestive & Systemic"
  | "Women's Wellness"
  | "Recovery & Immune"
  | "Cognitive & Neuro"
  | "Musculoskeletal";

export type EvidenceTier =
  | "established"
  | "adjunctive"
  | "emerging";

export interface Treatment {
  id: string;
  slug: string;
  number: string;

  name: string;
  family: TreatmentFamily;

  category: string;

  shortDescription: string;
  description: string;

  duration: string;
  price: number | null;

  image: string;

  benefits: string[];

  evidenceTier: EvidenceTier;

  active: boolean;
}

export const treatments: Treatment[] = [
  /* =========================================================
     01 — SKIN & BEAUTY
  ========================================================= */

  {
    id: "glamour",
    slug: "glamour",
    number: "01",
    name: "GLAMOUR",
    family: "Skin & Beauty",
    category: "Cellular Radiance Protocol",

    shortDescription:
      "Premium skin and beauty wellness positioning with antioxidant and micronutrient support.",

    description:
      "GLAMOUR sits within the DRIPLABS Skin & Beauty family and is positioned around skin and beauty wellness support within a physician-led treatment journey.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/glamour.jpg",

    benefits: [
      "Skin & beauty wellness focus",
      "Physician-led assessment",
      "Professionally administered treatment",
    ],

    evidenceTier: "adjunctive",

    active: true,
  },

  {
    id: "radiance",
    slug: "radiance",
    number: "02",
    name: "RADIANCE",
    family: "Skin & Beauty",
    category: "Skin Vitality Protocol",

    shortDescription:
      "Skin vitality and maintenance-focused nutritional wellness support.",

    description:
      "RADIANCE is part of the DRIPLABS Skin & Beauty family and is positioned around skin vitality within a professionally supervised wellness experience.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/radiance.jpg",

    benefits: [
      "Skin wellness focus",
      "Personalised assessment",
      "Professional administration",
    ],

    evidenceTier: "adjunctive",

    active: true,
  },

  {
    id: "restore",
    slug: "restore",
    number: "03",
    name: "RESTORE",
    family: "Skin & Beauty",
    category: "Hair Wellness Protocol",

    shortDescription:
      "Hair and nutritional wellness support within the DRIPLABS beauty system.",

    description:
      "RESTORE sits within the Skin & Beauty family and provides a hair and nutritional wellness focus within the DRIPLABS physician-led framework.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/restore.jpg",

    benefits: [
      "Hair wellness focus",
      "Professional consultation",
      "Personalised treatment approach",
    ],

    evidenceTier: "adjunctive",

    active: true,
  },

  /* =========================================================
     02 — CELLULAR & LONGEVITY
  ========================================================= */

  {
    id: "renew",
    slug: "renew",
    number: "04",
    name: "RENEW",
    family: "Cellular & Longevity",
    category: "Cellular Renewal Protocol",

    shortDescription:
      "Cellular renewal and longevity-focused nutritional wellness support.",

    description:
      "RENEW belongs to the DRIPLABS Cellular & Longevity family and is positioned around cellular renewal and healthy-ageing wellness.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/renew.jpg",

    benefits: [
      "Cellular wellness focus",
      "Longevity-oriented positioning",
      "Physician-led assessment",
    ],

    evidenceTier: "adjunctive",

    active: true,
  },

  {
    id: "apex",
    slug: "apex",
    number: "05",
    name: "APEX",
    family: "Cellular & Longevity",
    category: "Cellular Longevity Protocol",

    shortDescription:
      "NAD+-pathway and cellular-longevity wellness positioning.",

    description:
      "APEX sits within the Cellular & Longevity family and is positioned around NAD+-pathway and cellular-longevity wellness support.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/apex.jpg",

    benefits: [
      "Cellular longevity focus",
      "Physician assessment",
      "Professional supervision",
    ],

    evidenceTier: "emerging",

    active: true,
  },

  {
    id: "nadx",
    slug: "nadx",
    number: "06",
    name: "NADx",
    family: "Cellular & Longevity",
    category: "NAD+ Infusion Programme",

    shortDescription:
      "A physician-led NAD+ wellness programme focused on cellular-energy pathways.",

    description:
      "NADx is the DRIPLABS NAD+ programme. It begins with physician assessment and remains subject to professional judgement regarding suitability, dosage and treatment duration.",

    duration: "3–4 hours",
    price: null,

    image: "/images/treatments/nadx.jpg",

    benefits: [
      "Physician consultation",
      "Cellular-energy wellness focus",
      "Professionally supervised IV experience",
    ],

    evidenceTier: "emerging",

    active: true,
  },

  {
    id: "methyblu",
    slug: "methyblu",
    number: "07",
    name: "METHYBLU",
    family: "Cellular & Longevity",
    category: "Mitochondrial Wellness Protocol",

    shortDescription:
      "Mitochondrial wellness positioning within the cellular and longevity system.",

    description:
      "METHYBLU sits within the Cellular & Longevity family and requires careful physician-led positioning, assessment and use.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/methyblu.jpg",

    benefits: [
      "Cellular wellness focus",
      "Physician-led assessment",
      "Professional administration",
    ],

    evidenceTier: "emerging",

    active: true,
  },

  /* =========================================================
     03 — METABOLIC & PERFORMANCE
  ========================================================= */

  {
    id: "shrink",
    slug: "shrink",
    number: "08",
    name: "SHRINK",
    family: "Metabolic & Performance",
    category: "Metabolic Wellness Protocol",

    shortDescription:
      "Metabolic wellness positioning within the DRIPLABS performance system.",

    description:
      "SHRINK sits within the Metabolic & Performance family. Naming and external claims remain subject to the applicable compliance framework.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/shrink.jpg",

    benefits: [
      "Metabolic wellness focus",
      "Professional assessment",
      "Physician-led treatment selection",
    ],

    evidenceTier: "adjunctive",

    active: true,
  },

  {
    id: "refuel",
    slug: "refuel",
    number: "09",
    name: "REFUEL",
    family: "Metabolic & Performance",
    category: "Performance Recovery Protocol",

    shortDescription:
      "Performance and recovery nutritional wellness support.",

    description:
      "REFUEL is designed within the Metabolic & Performance family for performance and recovery-focused wellness support.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/refuel.jpg",

    benefits: [
      "Performance support",
      "Recovery focus",
      "Physician-led treatment approach",
    ],

    evidenceTier: "established",

    active: true,
  },

  {
    id: "fit",
    slug: "fit",
    number: "10",
    name: "FIT",
    family: "Metabolic & Performance",
    category: "Functional Recovery Protocol",

    shortDescription:
      "Functional recovery nutritional support within the DRIPLABS performance family.",

    description:
      "FIT is positioned around functional recovery and sits within the Metabolic & Performance wellness family.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/fit.jpg",

    benefits: [
      "Functional recovery focus",
      "Professional consultation",
      "Personalised treatment assessment",
    ],

    evidenceTier: "adjunctive",

    active: true,
  },

  {
    id: "rebuild",
    slug: "rebuild",
    number: "11",
    name: "REBUILD",
    family: "Metabolic & Performance",
    category: "Protein Recovery Protocol",

    shortDescription:
      "Protein and recovery nutritional wellness support.",

    description:
      "REBUILD sits within the Metabolic & Performance family and is positioned around nutritional recovery and rebuilding support.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/rebuild.jpg",

    benefits: [
      "Recovery focus",
      "Performance-oriented wellness",
      "Professional treatment setting",
    ],

    evidenceTier: "established",

    active: true,
  },

  {
    id: "performance-x",
    slug: "performance-x",
    number: "12",
    name: "PERFORMANCE X",
    family: "Metabolic & Performance",
    category: "Advanced Performance Protocol",

    shortDescription:
      "Advanced performance nutritional wellness support.",

    description:
      "PERFORMANCE X is positioned within the DRIPLABS Metabolic & Performance family for an advanced performance-focused wellness experience.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/performance-x.jpg",

    benefits: [
      "Performance focus",
      "Recovery support",
      "Physician-led treatment selection",
    ],

    evidenceTier: "established",

    active: true,
  },

  /* =========================================================
     04 — DIGESTIVE & SYSTEMIC
  ========================================================= */

  {
    id: "gut-plus",
    slug: "gut-plus",
    number: "13",
    name: "GUT+",
    family: "Digestive & Systemic",
    category: "Gastrointestinal Wellness Protocol",

    shortDescription:
      "Gastrointestinal and nutritional wellness support.",

    description:
      "GUT+ belongs to the Digestive & Systemic family and is positioned around gastrointestinal nutritional wellness support.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/gut-plus.jpg",

    benefits: [
      "Digestive wellness focus",
      "Professional consultation",
      "Personalised treatment approach",
    ],

    evidenceTier: "established",

    active: true,
  },

  /* =========================================================
     05 — WOMEN'S WELLNESS
  ========================================================= */

  {
    id: "femme",
    slug: "femme",
    number: "14",
    name: "FEMME",
    family: "Women's Wellness",
    category: "Women's Nutritional Wellness Protocol",

    shortDescription:
      "Women's nutritional wellness support within a physician-led framework.",

    description:
      "FEMME is part of the DRIPLABS Women's Wellness family and is positioned around nutritional wellness support subject to appropriate professional assessment.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/femme.jpg",

    benefits: [
      "Women's wellness focus",
      "Professional consultation",
      "Individual assessment",
    ],

    evidenceTier: "established",

    active: true,
  },

  /* =========================================================
     06 — RECOVERY & IMMUNE
  ========================================================= */

  {
    id: "reactivate",
    slug: "reactivate",
    number: "15",
    name: "REACTIVATE",
    family: "Recovery & Immune",
    category: "Immune Wellness Protocol",

    shortDescription:
      "Immune-nutritional and wellness support.",

    description:
      "REACTIVATE sits within the Recovery & Immune family and is positioned around immune-nutritional wellness support.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/reactivate.jpg",

    benefits: [
      "Immune wellness focus",
      "Professional consultation",
      "Physician-led treatment selection",
    ],

    evidenceTier: "established",

    active: true,
  },

  {
    id: "bounce-back",
    slug: "bounce-back",
    number: "16",
    name: "BOUNCE BACK",
    family: "Recovery & Immune",
    category: "Recovery Hydration Protocol",

    shortDescription:
      "Recovery hydration and nutritional wellness support.",

    description:
      "BOUNCE BACK belongs to the Recovery & Immune family and is positioned around recovery hydration and nutritional wellness.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/bounce-back.jpg",

    benefits: [
      "Recovery focus",
      "Hydration support",
      "Professional administration",
    ],

    evidenceTier: "established",

    active: true,
  },

  {
    id: "recover-plus",
    slug: "recover-plus",
    number: "17",
    name: "RECOVER+",
    family: "Recovery & Immune",
    category: "Clinical Recovery Protocol",

    shortDescription:
      "Systemic nutritional recovery support.",

    description:
      "RECOVER+ is positioned within the Recovery & Immune family as a systemic nutritional recovery-focused wellness protocol.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/recover-plus.jpg",

    benefits: [
      "Systemic recovery focus",
      "Professional assessment",
      "Physician-supervised treatment",
    ],

    evidenceTier: "adjunctive",

    active: true,
  },

  /* =========================================================
     07 — COGNITIVE & NEURO
  ========================================================= */

  {
    id: "focus",
    slug: "focus",
    number: "18",
    name: "FOCUS",
    family: "Cognitive & Neuro",
    category: "Cognitive Wellness Protocol",

    shortDescription:
      "Cognitive and neuronal nutritional wellness support.",

    description:
      "FOCUS sits within the Cognitive & Neuro family and is positioned around cognitive and neuronal nutritional wellness support.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/focus.jpg",

    benefits: [
      "Cognitive wellness focus",
      "Professional consultation",
      "Physician-led treatment selection",
    ],

    evidenceTier: "established",

    active: true,
  },

  /* =========================================================
     08 — MUSCULOSKELETAL
  ========================================================= */

  {
    id: "move",
    slug: "move",
    number: "19",
    name: "MOVE",
    family: "Musculoskeletal",
    category: "Musculoskeletal Wellness Protocol",

    shortDescription:
      "Bone, muscle and connective-tissue nutritional wellness support.",

    description:
      "MOVE belongs to the Musculoskeletal family and is positioned around nutritional wellness support for bone, muscle and connective tissue.",

    duration: "To be confirmed",
    price: null,

    image: "/images/treatments/move.jpg",

    benefits: [
      "Musculoskeletal wellness focus",
      "Professional consultation",
      "Personalised treatment approach",
    ],

    evidenceTier: "established",

    active: true,
  },
];

/* =========================================================
   LOOKUPS
========================================================= */

export function getTreatmentBySlug(
  slug: string,
): Treatment | undefined {
  return treatments.find(
    (treatment) =>
      treatment.slug === slug &&
      treatment.active,
  );
}

export function getTreatmentsByFamily(
  family: TreatmentFamily,
): Treatment[] {
  return treatments.filter(
    (treatment) =>
      treatment.family === family &&
      treatment.active,
  );
}

export function getActiveTreatments(): Treatment[] {
  return treatments.filter(
    (treatment) => treatment.active,
  );
}