export type GlamourIngredient = {
  name: string;
  evidence: "Tier 1" | "Tier 2" | "Tier 3";
  role: string;
};

export const glamourOverview = {
  eyebrow: "01 / 19 · Skin & Beauty Wellness",
  family: "Skin & Beauty Wellness",
  protocol: "GLAMOUR®",
  classification: "Cellular Radiance Protocol™",
  evidence: "Emerging",
  specialty: "Dermatology & Aesthetic Medicine · Executive Health",
  targetFocus: [
    "Antioxidant balance",
    "Skin physiology",
    "Micronutrient replenishment",
    "Pre-event glow",
  ],
  rationale:
    "Vitamin C drives collagen synthesis; glutathione and NAC support antioxidant-recycling pathways; B-complex and trace elements support standard cellular metabolism.",
  immediateEffects:
    "The source material describes immediate effects in the 0–2 hour post-infusion window.",
  cumulativeEffects:
    "The source material frames cumulative effects across a course rather than as a same-day cosmetic guarantee.",
  evidenceReality:
    "Vitamin C, B-complex and trace elements sit at an established, deficiency-correction level. The skin-radiance/lightening effect from glutathione is the least proven part — frame as antioxidant support, not a guaranteed brightening outcome.",
  baselineTesting: [
    "LFT",
    "CBC",
    "Vitamin D & B12 levels",
    "Renal function panel",
  ],
  retesting:
    "Repeat LFT if course extends beyond 6–8 sessions; Vitamin D & B12 re-check at 6–8 weeks.",
  sessionFramework:
    "Course of 4–6 sessions, 1–2 weeks apart, then physician-reviewed maintenance every 4–6 weeks. No special contraindication flagged beyond standard physician evaluation.",
};

export const glamourIngredients: GlamourIngredient[] = [
  {
    name: "Glutathione (Reduced) — 4200mg total",
    evidence: "Tier 3",
    role:
      "The body's master antioxidant; recycles free radicals and supports Phase-II liver detox. Skin-brightening reputation is the weakest-evidenced part — strong data exists for hepatic/oncology use, not cosmetic lightening via IV.",
  },
  {
    name: "High-dose Vitamin C",
    evidence: "Tier 1",
    role:
      "Cofactor for collagen hydroxylation and catecholamine synthesis; potent antioxidant. High-dose IV lacks confirmed outcome benefit in critical illness — here it is a nutritional/antioxidant cofactor.",
  },
  {
    name: "Trace Element Complex (Zn, Se, Cu, Mn)",
    evidence: "Tier 1",
    role:
      "Cofactors for wound-healing, immune and antioxidant-enzyme function; standard-of-care deficiency repletion.",
  },
  {
    name: "B12 / Folate / Niacinamide",
    evidence: "Tier 1",
    role:
      "Cofactor for methylation, DNA synthesis and myelin maintenance; deficiency-repletion is standard practice.",
  },
  {
    name: "Core B-Complex",
    evidence: "Tier 1",
    role:
      "B12, B6, B3 and B5 form the neuro-metabolic base, supporting methylation and energy metabolism.",
  },
  {
    name: "12-in-1 Multivitamin",
    evidence: "Tier 1",
    role:
      "Broad-spectrum repletion; a general micronutrient safety net rather than a targeted claim.",
  },
  {
    name: "N-Acetylcysteine (NAC)",
    evidence: "Tier 1",
    role:
      "Glutathione precursor and direct radical scavenger; established antidote use, with context-dependent wellness benefit.",
  },
];
