export type ProtocolDetail = {
  specialty: string;
  focus: string[];
  rationale: string;
  evidenceReality: string;
  baseline: string;
  retest: string;
  session: string;
  ingredients: {
    name: string;
    tier: string;
    role: string;
  }[];
};

export const protocolDetails: Record<string, ProtocolDetail> = {
  glamour: {
    specialty: "Dermatology & Aesthetic Medicine · Executive Health",
    focus: [
      "Antioxidant balance",
      "Skin physiology",
      "Micronutrient replenishment",
      "Pre-event glow",
    ],
    rationale:
      "Vitamin C drives collagen synthesis; glutathione and NAC support antioxidant-recycling pathways; B-complex and trace elements support standard cellular metabolism.",
    evidenceReality:
      "Vitamin C, B-complex and trace elements sit at an established, deficiency-correction level. The skin-radiance/lightening effect from glutathione is the least proven part — frame as antioxidant support, not a guaranteed brightening outcome.",
    baseline:
      "LFT (baseline + periodic) · CBC · Vitamin D & B12 levels · Renal function panel",
    retest:
      "Repeat LFT if course extends beyond 6–8 sessions · Vitamin D & B12 re-check at 6–8 weeks",
    session:
      "Course of 4–6 sessions, 1–2 weeks apart, then physician-reviewed maintenance every 4–6 weeks.",
    ingredients: [
      {
        name: "Glutathione (Reduced) — 4200mg total",
        tier: "Tier 3",
        role:
          "Master antioxidant; recycles free radicals and supports Phase-II liver detox. The cosmetic-lightening component carries the weakest evidence.",
      },
      {
        name: "High-dose Vitamin C",
        tier: "Tier 1",
        role:
          "Cofactor for collagen hydroxylation and catecholamine synthesis; nutritional and antioxidant role.",
      },
      {
        name: "Trace Element Complex",
        tier: "Tier 1",
        role:
          "Zinc, selenium, copper and manganese contribute to wound-healing, immune and antioxidant-enzyme function.",
      },
      {
        name: "B12 / Folate / Niacinamide",
        tier: "Tier 1",
        role:
          "Methylation, DNA-synthesis and myelin-maintenance cofactors.",
      },
      {
        name: "Core B-Complex",
        tier: "Tier 1",
        role:
          "Neuro-metabolic base supporting methylation and energy metabolism.",
      },
      {
        name: "12-in-1 Multivitamin",
        tier: "Tier 1",
        role:
          "Broad-spectrum micronutrient safety net rather than a targeted therapeutic claim.",
      },
    ],
  },

  radiance: {
    specialty: "Dermatology & Aesthetic Medicine",
    focus: [
      "Skin maintenance",
      "Antioxidant support",
      "Nutritional continuity",
    ],
    rationale:
      "Vitamin C and zinc support structural-protein formation and skin-barrier physiology; glutathione and NAC sustain redox balance between core protocols.",
    evidenceReality:
      "A lighter, maintenance-tier version of GLAMOUR®. Zinc's dermal/mucosal role is reasonably well supported; the glutathione vitality claim carries the same cosmetic-evidence caveat.",
    baseline: "LFT · CBC · Vitamin D",
    retest:
      "Periodic LFT if used long-term · Zinc level if maintained beyond 3 months",
    session:
      "Every 3–4 weeks as a maintenance infusion between core protocols.",
    ingredients: [
      {
        name: "Glutathione — 2400mg",
        tier: "Tier 3",
        role:
          "Master antioxidant and Phase-II liver detox support; cosmetic-lightening claims have limited evidence.",
      },
      {
        name: "High-dose Vitamin C",
        tier: "Tier 1",
        role:
          "Collagen-hydroxylation cofactor and antioxidant.",
      },
      {
        name: "Zinc Chloride",
        tier: "Tier 1",
        role:
          "Cofactor for wound-healing, immune-cell function and skin/GI mucosal integrity.",
      },
      {
        name: "Core B-Complex",
        tier: "Tier 1",
        role:
          "Neuro-metabolic base supporting methylation and coenzyme-A energy metabolism.",
      },
      {
        name: "N-Acetylcysteine",
        tier: "Tier 1",
        role:
          "Glutathione precursor and direct radical scavenger.",
      },
    ],
  },

  restore: {
    specialty: "Dermatology & Trichology · Aesthetic Medicine",
    focus: [
      "Hair-structure nutrition",
      "Scalp micronutrient balance",
      "Protein-metabolism support",
    ],
    rationale:
      "Biotin, zinc and folate participate in keratin/protein-metabolism pathways relevant to hair structure; amino acids support structural protein synthesis.",
    evidenceReality:
      "Deficiency-driven hair thinning has the strongest rationale for micronutrient repletion. In nutritionally replete patients, incremental benefit is less established, and there is no direct hair-growth clinical trial evidence for the IV route.",
    baseline:
      "Serum Ferritin · Zinc level · Vitamin D · TSH · Biotin level, if available",
    retest:
      "Repeat ferritin and zinc at 8–12 weeks · TSH if not already ruled out",
    session:
      "6–8 sessions across 8–12 weeks, then monthly maintenance.",
    ingredients: [
      {
        name: "Glutathione — 1800mg",
        tier: "Tier 3",
        role:
          "Master antioxidant and Phase-II detox support.",
      },
      {
        name: "High-dose Vitamin C",
        tier: "Tier 1",
        role:
          "Collagen and catecholamine-synthesis cofactor and antioxidant.",
      },
      {
        name: "Trace Elements",
        tier: "Tier 1",
        role:
          "Zinc, copper, manganese and selenium for deficiency repletion.",
      },
      {
        name: "Biotin (B7)",
        tier: "Tier 2",
        role:
          "Keratin and protein-metabolism cofactor relevant to hair and nail structure; most useful where a genuine deficiency exists.",
      },
      {
        name: "Amino Acid Adjunct",
        tier: "Tier 1",
        role:
          "L-cysteine and L-methionine support protein-synthesis and tissue-repair pathways.",
      },
    ],
  },

  renew: {
    specialty: "Longevity & Executive Health · IVF/Fertility (adjunct)",
    focus: [
      "Cellular nutrition",
      "Connective-tissue support",
      "Healthy-aging wellness",
    ],
    rationale:
      "Amino acids support standard protein metabolism; the antioxidant load supports oxidative-stress balance in adults on structured wellness and healthy-aging programmes.",
    evidenceReality:
      "Tier-1 antioxidant and amino-acid backbone repositioned for connective-tissue and cellular-nutrition support rather than a cosmetic claim.",
    baseline: "LFT · CBC · hs-CRP · Vitamin D",
    retest:
      "hs-CRP re-check at 6–8 weeks · LFT if course is extended",
    session:
      "4–6 session course, biweekly, then monthly maintenance.",
    ingredients: [
      {
        name: "Glutathione — 3600mg",
        tier: "Tier 3",
        role:
          "Master antioxidant positioned for cellular and connective-tissue nutrition.",
      },
      {
        name: "High-dose Vitamin C",
        tier: "Tier 1",
        role:
          "Collagen-hydroxylation and antioxidant cofactor.",
      },
      {
        name: "Essential Amino Acid Matrix",
        tier: "Tier 1",
        role:
          "Protein-synthesis and tissue-repair support.",
      },
      {
        name: "Alpha-Lipoic Acid",
        tier: "Tier 2",
        role:
          "Mitochondrial cofactor and antioxidant with context-dependent evidence.",
      },
      {
        name: "Coenzyme Q10",
        tier: "Tier 2",
        role:
          "Supports the mitochondrial electron-transport chain as an adjunctive antioxidant.",
      },
    ],
  },

  nadx: {
    specialty:
      "Longevity & Executive Health · Neurology · Cardiology (adjunct) · IVF/Fertility",
    focus: [
      "Cellular energy",
      "Mitochondrial nutrition",
      "Healthy-aging frameworks",
    ],
    rationale:
      "NAD+ is a required cofactor in cellular energy metabolism and mitochondrial redox reactions.",
    evidenceReality:
      "Emerging and investigational positioning. The physician playbook states that controlled human outcome trials of IV/IM NAD+ for anti-aging or wellness endpoints are not established; the protocol should be presented as mechanistically grounded and under active research.",
    baseline:
      "Comprehensive metabolic panel (fasting glucose/HbA1c) · LFT · RFT · Lipid profile · Vitamin D & B12 · hs-CRP · baseline fatigue/energy questionnaire",
    retest:
      "Fasting glucose/HbA1c and lipid profile at 8–12 weeks if part of a longevity programme · subjective energy/fatigue questionnaire re-score",
    session:
      "Flagship course of 5 weekly sessions, then maintenance every 4–6 weeks. Always slow and physician-controlled with a standardised pre-medication safety protocol.",
    ingredients: [
      {
        name: "Nicotinamide Adenine Dinucleotide (NAD+) — 500mg",
        tier: "Tier 3",
        role:
          "Central redox cofactor for mitochondrial ATP generation and sirtuin/DNA-repair signalling; wellness and anti-aging outcome evidence for IV/IM use remains immature.",
      },
      {
        name: "Isotonic Hydration Base",
        tier: "Tier 1",
        role:
          "Restores normal fluid balance and provides the foundation for other actives.",
      },
      {
        name: "Physician-selected adjuncts",
        tier: "Tier 3",
        role:
          "Glutathione and B-complex may form an adjunctive antioxidant and micronutrient layer under physician selection.",
      },
    ],
  },

  apex: {
    specialty: "Physician-led wellness setting",
    focus: [
      "Cellular longevity",
      "NAD+-pathway wellness",
      "Physician-directed cellular support",
    ],
    rationale:
      "APEX is currently represented in the application data as a Cellular & Longevity protocol with NAD+-pathway and cellular-longevity positioning.",
    evidenceReality:
      "The current application data marks APEX as emerging. The physician playbook uses the name LONGEVITY X® for protocol 06, so this page does not equate the two names.",
    baseline:
      "Testing and suitability assessment should be determined by the supervising physician.",
    retest:
      "Follow-up testing should be determined by the supervising physician based on the selected protocol and clinical context.",
    session:
      "Treatment cadence and duration remain subject to physician assessment.",
    ingredients: [
      {
        name: "Protocol composition",
        tier: "Emerging",
        role:
          "Review the final protocol composition with the supervising physician before administration.",
      },
    ],
  },

  methyblu: {
    specialty: "Advanced Longevity Clinics · Neurology (emerging)",
    focus: [
      "ATP-production support",
      "Mitochondrial resilience",
      "Cellular redox balance",
    ],
    rationale:
      "At low, physician-controlled concentrations, methylene blue acts as an alternative mitochondrial electron carrier.",
    evidenceReality:
      "More mechanistically direct than NAD+, but still an off-label use requiring strict dose control. The playbook specifies mandatory screening and close physician supervision.",
    baseline:
      "MANDATORY: G6PD enzyme screening · full medication reconciliation for serotonergic medicines · LFT · RFT",
    retest:
      "Routine LFT/RFT monitoring during use · confirm no new serotonergic medication has been started between sessions",
    session:
      "Highly individualised, low-frequency use with close monitoring. Never a self-directed or walk-in protocol.",
    ingredients: [
      {
        name: "Methylene Blue 1% w/v",
        tier: "Tier 3",
        role:
          "Alternative mitochondrial electron carrier at low, physician-controlled concentrations.",
      },
      {
        name: "Methylation-support B-Complex",
        tier: "Tier 1",
        role:
          "Neuro-metabolic base for methylation and energy metabolism.",
      },
      {
        name: "Folate derivatives & Niacinamide",
        tier: "Tier 1",
        role:
          "Works alongside B12 in methylation and red-cell production.",
      },
      {
        name: "Cellular antioxidant adjuncts",
        tier: "Tier 3",
        role:
          "Alpha-lipoic acid and glutathione precursors provide antioxidant support with evidence caveats.",
      },
    ],
  },

  shrink: {
    specialty: "Internal Medicine · Executive Health · Sports Medicine",
    focus: [
      "Energy metabolism",
      "Active-lifestyle support",
      "Physiological recovery",
    ],
    rationale:
      "Levocarnitine supports fatty-acid transport into mitochondria; B-vitamins and thiamine support energy-yielding metabolism; magnesium supports neuromuscular function.",
    evidenceReality:
      "Thiamine and magnesium are well-established metabolic cofactors. General-population weight-management efficacy data for parenteral carnitine remains limited.",
    baseline:
      "Fasting lipid profile · fasting glucose/HbA1c · thyroid profile · LFT · serum magnesium",
    retest:
      "Fasting lipid profile and HbA1c at 6–8 weeks · serum magnesium recheck",
    session:
      "6–8 session course over 6–8 weeks alongside a structured lifestyle programme, then monthly maintenance.",
    ingredients: [
      {
        name: "Glutathione — 1800mg",
        tier: "Tier 3",
        role: "Master antioxidant support.",
      },
      {
        name: "Levocarnitine — 3g",
        tier: "Tier 2",
        role:
          "Transports long-chain fatty acids into mitochondria; general-population fat-loss efficacy data is more limited.",
      },
      {
        name: "Thiamine (B1)",
        tier: "Tier 1",
        role:
          "Core carbohydrate and energy-metabolism cofactor.",
      },
      {
        name: "Magnesium Sulfate",
        tier: "Tier 1",
        role:
          "Established cofactor with supportive recovery data.",
      },
    ],
  },

  refuel: {
    specialty: "Sports Medicine & Orthopedics",
    focus: [
      "Exercise recovery",
      "Muscle nutritional wellness",
      "Hydration & electrolyte balance",
    ],
    rationale:
      "Amino acids and glutamine derivatives support standard protein-metabolism pathways; magnesium and electrolytes support neuromuscular function.",
    evidenceReality:
      "The Ala-Gln evidence base is deep in catabolic and ICU populations but thinner when extrapolated to general athletic recovery.",
    baseline:
      "Electrolyte panel · renal function · creatine kinase after heavy exertion · serum magnesium",
    retest:
      "Electrolytes and CK after heavy training blocks · renal function periodically with frequent use",
    session:
      "1–2x weekly during high training load; otherwise as-needed post-event.",
    ingredients: [
      {
        name: "L-Alanyl-L-Glutamine Dipeptide",
        tier: "Tier 1",
        role:
          "Evidence-dense for gut-mucosal integrity and nitrogen balance, reasonably extrapolated to recovery.",
      },
      {
        name: "Branched-Chain / Essential Amino Acid Blend",
        tier: "Tier 1",
        role:
          "Protein-synthesis and tissue-repair support.",
      },
      {
        name: "Magnesium Sulfate",
        tier: "Tier 1",
        role:
          "Neuromuscular function with supportive post-exertional data.",
      },
      {
        name: "Zinc Sulfate",
        tier: "Tier 1",
        role:
          "Wound-healing and mucosal-integrity cofactor.",
      },
    ],
  },

  fit: {
    specialty: "Sports Medicine · Internal Medicine",
    focus: [
      "Functional recovery",
      "Hydration support",
      "General wellness",
    ],
    rationale:
      "Amino acids support protein metabolism; magnesium supports neuromuscular function; multivitamins and trace minerals contribute to nutritional balance.",
    evidenceReality:
      "General-purpose recovery formula: each active is well characterised, but the combination itself is supportive/adjunctive rather than outcome-proven as a stack.",
    baseline:
      "Electrolytes · renal function · serum magnesium",
    retest:
      "Electrolytes and renal function periodically",
    session:
      "As-needed, or weekly during active training blocks.",
    ingredients: [
      {
        name: "Glutathione — 2400mg",
        tier: "Tier 3",
        role: "Master antioxidant support.",
      },
      {
        name: "Levocarnitine — 1g",
        tier: "Tier 2",
        role:
          "Fatty-acid transport into mitochondria.",
      },
      {
        name: "Zinc Chloride",
        tier: "Tier 1",
        role:
          "Wound-healing and mucosal-integrity cofactor.",
      },
      {
        name: "Magnesium Sulfate",
        tier: "Tier 1",
        role:
          "Neuromuscular support.",
      },
      {
        name: "Core B-Complex",
        tier: "Tier 1",
        role:
          "Neuro-metabolic nutritional base.",
      },
    ],
  },

  rebuild: {
    specialty: "Sports Medicine & Orthopedics",
    focus: [
      "Protein-synthesis support",
      "Tissue-repair nutrition",
      "Anabolic balance",
    ],
    rationale:
      "Essential and branched-chain amino acids support normal protein-synthesis pathways.",
    evidenceReality:
      "The evidence base is strongest in catabolic, surgical or high-training-load states, with antioxidant support layered alongside the nutritional matrix.",
    baseline:
      "Total protein / albumin · electrolytes · renal function",
    retest:
      "Total protein/albumin if used repeatedly · renal function",
    session:
      "Short 1–2x weekly courses around intense training or physical recovery.",
    ingredients: [
      {
        name: "Essential Amino-Acid Matrix",
        tier: "Tier 1",
        role:
          "Pharmacopoeial-grade nutritional component of the shared architecture.",
      },
      {
        name: "L-Alanyl-L-Glutamine Dipeptide",
        tier: "Tier 1",
        role:
          "Supports gut-mucosal integrity and nitrogen balance.",
      },
      {
        name: "Branched-Chain Amino Acids",
        tier: "Tier 1",
        role:
          "Protein-synthesis and tissue-repair support in catabolic/convalescent states.",
      },
      {
        name: "High-dose Vitamin C",
        tier: "Tier 1",
        role:
          "Nutritional and antioxidant cofactor.",
      },
    ],
  },

  "performance-x": {
    specialty: "Sports Medicine · High-Performance/Endurance Clinics",
    focus: [
      "Energy-utilisation efficiency",
      "Muscular endurance",
      "Lactate-clearance support",
    ],
    rationale:
      "Amino acids and carnitine derivatives support energy-utilisation and lactate-clearance pathways; electrolytes and B-vitamins support muscular-endurance processes.",
    evidenceReality:
      "A rational advanced stack for high-training-load athletes, but the exact combination has not been established by objective performance-outcome trials.",
    baseline:
      "Electrolytes/magnesium · renal function · CK · lactate, if available",
    retest:
      "Electrolytes/magnesium, CK and renal function through a training cycle",
    session:
      "Structured with the training cycle — typically weekly during peak-load periods.",
    ingredients: [
      {
        name: "L-Alanyl-L-Glutamine (x2)",
        tier: "Tier 1",
        role:
          "Evidence-dense for gut-mucosal integrity and nitrogen balance, extrapolated to general recovery.",
      },
      {
        name: "Magnesium Sulfate (x3)",
        tier: "Tier 1",
        role:
          "Strong evidence base for approved indications.",
      },
      {
        name: "Levocarnitine — 2g",
        tier: "Tier 2",
        role:
          "Fatty-acid transport into mitochondria.",
      },
      {
        name: "N-Acetylcysteine",
        tier: "Tier 1",
        role:
          "Glutathione precursor and radical scavenger.",
      },
    ],
  },

  "gut-plus": {
    specialty: "Gastroenterology · Internal Medicine",
    focus: [
      "Gut barrier support",
      "Nutrient-absorption efficiency",
      "Digestive recovery",
    ],
    rationale:
      "L-Alanyl-L-Glutamine is a primary fuel source for enterocytes and supports mucosal-barrier nutrition; zinc contributes to enzymatic processes relevant to gut tissue.",
    evidenceReality:
      "The playbook describes this as the best-matched active-to-claim protocol in the range, with the strongest glutamine evidence concentrated in gut-mucosal integrity and absorptive-capacity preservation.",
    baseline:
      "CBC · serum albumin · electrolytes · hs-CRP · GI work-up as clinically indicated",
    retest:
      "CBC and albumin at 4–6 weeks · repeat hs-CRP if inflammation was elevated at baseline",
    session:
      "4–6 sessions over 4–6 weeks, then as-needed.",
    ingredients: [
      {
        name: "L-Alanyl-L-Glutamine Dipeptide",
        tier: "Tier 1",
        role:
          "Evidence-dense for gut-mucosal integrity and nitrogen balance.",
      },
      {
        name: "Gastro-formulation Amino Acid Matrix",
        tier: "Tier 1",
        role:
          "Protein-synthesis and tissue-repair pathway support.",
      },
      {
        name: "Core B-Complex",
        tier: "Tier 1",
        role:
          "Neuro-metabolic nutritional base.",
      },
      {
        name: "Zinc Chloride",
        tier: "Tier 1",
        role:
          "Cofactor for wound-healing and skin/GI mucosal integrity.",
      },
    ],
  },

  femme: {
    specialty: "Women's Health/OB-GYN · Internal Medicine",
    focus: [
      "Energy-metabolism support",
      "Haematologic balance",
      "Hormonal wellness",
    ],
    rationale:
      "Iron, folate and B12 support standard haematologic and energy-metabolism pathways; Vitamin D cofactors and magnesium support hormonal and metabolic balance.",
    evidenceReality:
      "A high-confidence protocol specifically when iron deficiency is laboratory-confirmed beforehand; substantially weaker when deficiency is absent.",
    baseline:
      "MANDATORY before iron component: CBC · serum ferritin · iron studies · B12 & folate · TSH · Vitamin D",
    retest:
      "Repeat CBC and ferritin at 4–6 weeks · iron studies if ferritin has not normalised",
    session:
      "Iron repletion typically 1–2 sessions per deficit-correction cycle, physician-dosed by body weight/deficit; multivitamin component may be repeated periodically.",
    ingredients: [
      {
        name: "Ferric Carboxymaltose — 500mg where clinically indicated",
        tier: "Tier 1",
        role:
          "Rapid, guideline-endorsed parenteral iron repletion for iron-deficiency anaemia.",
      },
      {
        name: "B12 / Folate / Niacinamide",
        tier: "Tier 1",
        role:
          "Methylation, DNA-synthesis and myelin-maintenance cofactors.",
      },
      {
        name: "High-dose Vitamin C",
        tier: "Tier 1",
        role:
          "Collagen and antioxidant cofactor.",
      },
      {
        name: "Vitamin D3 Cofactor",
        tier: "Tier 1",
        role:
          "Established high-dose IM repletion approach for deficiency.",
      },
      {
        name: "Magnesium Sulfate",
        tier: "Tier 1",
        role:
          "Hormonal and metabolic balance support.",
      },
    ],
  },

  reactivate: {
    specialty: "Internal Medicine · Immunology & Recovery Clinics",
    focus: [
      "Immune-nutritional support",
      "Antioxidant balance",
      "Recovery support",
    ],
    rationale:
      "Vitamin C and zinc support standard immune-related biochemical processes; glutathione and NAC sustain endogenous antioxidant pathways.",
    evidenceReality:
      "This is immune-nutrition cofactor support, not a treatment for active infection.",
    baseline:
      "CBC · hs-CRP / ESR · zinc & Vitamin C levels, if available",
    retest:
      "CBC and hs-CRP/ESR around an illness episode · zinc/Vitamin C levels if available",
    session:
      "As-needed during periods of increased demand: 2–3 sessions spaced days apart, or 2–4x/year as seasonal maintenance.",
    ingredients: [
      {
        name: "Glutathione — 2400mg",
        tier: "Tier 3",
        role: "Master antioxidant support.",
      },
      {
        name: "High-dose Vitamin C",
        tier: "Tier 1",
        role:
          "Nutritional and antioxidant cofactor; not an established anti-infective treatment.",
      },
      {
        name: "Zinc Chloride",
        tier: "Tier 1",
        role:
          "Immune-cell function and mucosal-integrity cofactor.",
      },
      {
        name: "Thiamine (B1)",
        tier: "Tier 1",
        role:
          "Core energy-metabolism cofactor.",
      },
      {
        name: "Alpha-Lipoic Acid",
        tier: "Tier 2",
        role:
          "Mitochondrial cofactor and antioxidant with context-dependent evidence.",
      },
    ],
  },

  "bounce-back": {
    specialty:
      "Internal Medicine · Addiction Recovery Centres · Travel Medicine",
    focus: [
      "Hydration restoration",
      "Nutritional recovery",
      "General recovery support",
    ],
    rationale:
      "Hydration fluids and electrolytes restore normal fluid balance; gastric-support and antiemetic adjuncts are used only where clinically indicated.",
    evidenceReality:
      "A single-event recovery protocol built around rehydration with clinically indicated adjunctive medicines, not a standing maintenance protocol.",
    baseline:
      "Electrolytes (Na/K/Cl) · renal function · blood glucose",
    retest:
      "Electrolytes and renal function if repeated within a short period",
    session:
      "Single session, as-needed for an acute event.",
    ingredients: [
      {
        name: "Electrolyte Complex",
        tier: "Tier 1",
        role:
          "Isotonic hydration and electrolyte base supporting fluid balance.",
      },
      {
        name: "Pantoprazole adjunct",
        tier: "Tier 1",
        role:
          "Approved PPI used only where clinically indicated.",
      },
      {
        name: "Ondansetron adjunct",
        tier: "Tier 1",
        role:
          "Approved antiemetic used only where clinically indicated.",
      },
      {
        name: "High-dose Vitamin C",
        tier: "Tier 1",
        role:
          "Nutritional and antioxidant cofactor.",
      },
    ],
  },

  "recover-plus": {
    specialty:
      "Internal Medicine · Immunology & Recovery Clinics · Addiction Recovery",
    focus: [
      "Systemic recovery",
      "Hydration balance",
      "Metabolic normalisation",
    ],
    rationale:
      "Electrolytes and multivitamins support hydration and metabolic-normalisation pathways; Vitamin C and zinc support normal immune-related nutrition.",
    evidenceReality:
      "Broad-spectrum convalescent support rather than a condition-specific therapy.",
    baseline:
      "CBC · comprehensive metabolic panel · hs-CRP",
    retest:
      "CBC and comprehensive metabolic panel post-course",
    session:
      "Short course of 2–4 sessions during an active recovery period.",
    ingredients: [
      {
        name: "Glutathione — 2400mg",
        tier: "Tier 3",
        role: "Master antioxidant support.",
      },
      {
        name: "Essential Amino-Acid Matrix",
        tier: "Tier 1",
        role:
          "Pharmacopoeial-grade nutritional and hydration support.",
      },
      {
        name: "12-in-1 Multivitamin",
        tier: "Tier 1",
        role:
          "General micronutrient safety net.",
      },
      {
        name: "Core B-Complex",
        tier: "Tier 1",
        role:
          "Neuro-metabolic base.",
      },
    ],
  },

  focus: {
    specialty:
      "Neurology · Executive Health · Cognitive Wellness Clinics",
    focus: [
      "Cognitive clarity",
      "Attention-pathway nutrition",
      "Neuronal energy metabolism",
    ],
    rationale:
      "B-complex vitamins and magnesium support standard neuronal energy metabolism; amino-acid precursors and phospholipids contribute to neurotransmitter balance and membrane stability.",
    evidenceReality:
      "B-complex and magnesium have established roles in neuronal metabolism. Cognitive claims around amino-acid precursors and phospholipids should be framed as nutritional support, not a cognitive-enhancement guarantee.",
    baseline:
      "B12 & folate · homocysteine · TSH · Vitamin D · serum magnesium",
    retest:
      "Homocysteine and B12/folate re-check at 6–8 weeks",
    session:
      "Custom cadence — typically a 4-session weekly course, then biweekly maintenance.",
    ingredients: [
      {
        name: "High-dose B-Complex",
        tier: "Tier 1",
        role:
          "Neuro-metabolic base; methylation and neurotransmitter support.",
      },
      {
        name: "Magnesium Sulfate",
        tier: "Tier 1",
        role:
          "Strong evidence base for approved indications with supportive neurological use.",
      },
      {
        name: "Amino-Acid Precursors",
        tier: "Tier 2",
        role:
          "Precursors to catecholamine neurotransmitters with limited direct IV-route outcome data.",
      },
      {
        name: "Phosphatidylcholine",
        tier: "Tier 2",
        role:
          "Phospholipid contributing to neuronal membrane stability and neurotransmitter-pathway support.",
      },
      {
        name: "Antioxidant Compounds",
        tier: "Tier 1",
        role:
          "Alpha-lipoic acid and Vitamin C provide nutritional and antioxidant support.",
      },
    ],
  },

  move: {
    specialty:
      "Sports Medicine & Orthopedics · Musculoskeletal Clinics",
    focus: [
      "Structural protein synthesis",
      "Joint-tissue metabolism",
      "Mobility wellness",
    ],
    rationale:
      "Glycine, proline and lysine support structural-protein and collagen-formation pathways; zinc and manganese contribute to connective-tissue and enzymatic function.",
    evidenceReality:
      "The playbook identifies IM Vitamin D3 plus IV magnesium sulfate as the strongest-evidenced actives in this specific protocol.",
    baseline:
      "Serum Vitamin D (25-OH) · serum magnesium · serum calcium · ALP · renal function",
    retest:
      "Repeat Vitamin D (25-OH) at 8–12 weeks · serum magnesium and calcium re-check",
    session:
      "Correction course of 3–4 sessions over 4–6 weeks if deficient, then quarterly maintenance dosing.",
    ingredients: [
      {
        name: "Magnesium Sulfate (x2)",
        tier: "Tier 1",
        role:
          "One of the stronger evidence bases in the range for approved indications, with supportive post-exertional data.",
      },
      {
        name: "High-dose Vitamin C",
        tier: "Tier 1",
        role:
          "Collagen-hydroxylation and antioxidant cofactor.",
      },
      {
        name: "Trace Elements (x2)",
        tier: "Tier 1",
        role:
          "Zinc, copper, manganese and selenium for deficiency repletion.",
      },
      {
        name: "Vitamin D3",
        tier: "Tier 1",
        role:
          "Established repletion approach where deficiency is present.",
      },
      {
        name: "Core B-Complex",
        tier: "Tier 1",
        role:
          "Neuro-metabolic base.",
      },
    ],
  },
};
