"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type IngredientGroup =
  | "PRIMARY ACTIVE"
  | "AMINO ACIDS"
  | "MICRONUTRIENTS"
  | "VITAMINS"
  | "HYDRATION";

type Ingredient = {
  name: string;
  amount?: string;
  detail?: string;
  group: IngredientGroup;
};

type Product = {
  id: string;
  number: string;
  name: string;
  protocolName: string;
  category: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
};

const PRODUCTS: Product[] = [
  {
    id: "glamour",
    number: "01",
    name: "GLAMOUR®",
    protocolName: "Cellular Radiance Protocol",
    category: "SKIN & BEAUTY",
    description:
      "A physician-directed formulation built around antioxidant and micronutrient support within the DRIPLABS Skin & Beauty pathway.",
    image: "/images/decode-vial/products/Glamour-drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "4.2 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "6.3 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "N-Acetylcysteine",
        amount: "400 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Multi-Trace Minerals",
        detail:
          "Zinc · Copper · Manganese · Chromium · Selenium · Iodine",
        group: "MICRONUTRIENTS",
      },
      {
        name: "B12 + Folic Acid + Niacinamide",
        detail: "+ Vitamin C",
        group: "VITAMINS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Multivitamin Complex",
        detail: "A · D3 · E · B-Complex · C · Biotin",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "renew",
    number: "02",
    name: "RENEW®",
    protocolName: "Cellular Renewal Protocol",
    category: "CELLULAR & LONGEVITY",
    description:
      "A formulation combining antioxidant, micronutrient and amino-acid components within the DRIPLABS cellular pathway.",
    image: "/images/decode-vial/products/Glamour-drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "3.6 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "6.2 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "N-Acetylcysteine",
        amount: "400 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Zinc",
        detail: "Zinc Chloride",
        group: "MICRONUTRIENTS",
      },
      {
        name: "Essential Amino Acid Blend",
        detail: "9 Amino Acids",
        group: "AMINO ACIDS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "radiance",
    number: "03",
    name: "RADIANCE®",
    protocolName: "Skin Vitality Protocol",
    category: "SKIN & BEAUTY",
    description:
      "A formulation centred on antioxidant and micronutrient components within the DRIPLABS beauty pathway.",
    image: "/images/decode-vial/products/Radiance-Drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "3 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "4.7 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "N-Acetylcysteine",
        amount: "400 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Zinc",
        detail: "Zinc Chloride",
        group: "MICRONUTRIENTS",
      },
      {
        name: "B12 + Folic Acid + Niacinamide",
        detail: "+ Vitamin C",
        group: "VITAMINS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "shrink",
    number: "04",
    name: "SHRINK®",
    protocolName: "Metabolic Wellness Protocol",
    category: "METABOLIC & PERFORMANCE",
    description:
      "A metabolic formulation combining antioxidant, carnitine, vitamin and mineral components.",
    image: "/images/decode-vial/products/Shrink-drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "2.4 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "3 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "L-Carnitine",
        amount: "3 g",
        detail: "Levocarnitine",
        group: "AMINO ACIDS",
      },
      {
        name: "Vitamin B1",
        amount: "100 mg",
        detail: "Thiamine",
        group: "VITAMINS",
      },
      {
        name: "Magnesium Sulfate",
        amount: "500 mg",
        group: "MICRONUTRIENTS",
      },
      {
        name: "N-Acetylcysteine",
        amount: "200 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "restore",
    number: "05",
    name: "RESTORE®",
    protocolName: "Hair Wellness Protocol",
    category: "SKIN & BEAUTY",
    description:
      "A physician-guided formulation built around micronutrients, amino acids and antioxidant components.",
    image: "/images/decode-vial/products/Restore-drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "1.8 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "1.5 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "N-Acetylcysteine",
        amount: "400 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Multi-Trace Minerals",
        detail:
          "Zinc · Copper · Manganese · Chromium · Selenium · Iodine",
        group: "MICRONUTRIENTS",
      },
      {
        name: "B12 + Folic Acid + Niacinamide",
        detail: "+ Vitamin C",
        group: "VITAMINS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Essential Amino Acid Blend",
        detail: "9 Amino Acids",
        group: "AMINO ACIDS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "bounce-back",
    number: "06",
    name: "BOUNCE BACK®",
    protocolName: "Recovery Hydration Protocol",
    category: "RECOVERY & IMMUNE",
    description:
      "A recovery-oriented formulation combining hydration, antioxidant and nutritional components. Certain components are marked for clinical indication in the source formulation.",
    image: "/images/decode-vial/products/Bounce-Back-Drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "2.4 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Pantoprazole",
        amount: "80 mg",
        detail: "Gastric Support · clinically indicated*",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Ondansetron",
        amount: "8 mg",
        detail: "Antiemetic Support · clinically indicated*",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "1.5 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "N-Acetylcysteine",
        amount: "200 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "reactivate",
    number: "07",
    name: "REACTIVATE®",
    protocolName: "Immune Wellness Protocol",
    category: "RECOVERY & IMMUNE",
    description:
      "A physician-directed formulation combining antioxidant, vitamin and micronutrient components.",
    image: "/images/decode-vial/products/Reactivate-drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "2.4 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "3 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin B1",
        amount: "100 mg",
        detail: "Thiamine",
        group: "VITAMINS",
      },
      {
        name: "N-Acetylcysteine",
        amount: "400 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Zinc",
        detail: "Zinc Chloride",
        group: "MICRONUTRIENTS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "fit",
    number: "08",
    name: "FIT®",
    protocolName: "Functional Recovery Protocol",
    category: "METABOLIC & PERFORMANCE",
    description:
      "A functional recovery formulation composed of antioxidant, amino-acid, mineral and vitamin components.",
    image: "/images/decode-vial/products/Fit-drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "2.4 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "1.5 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "L-Carnitine",
        amount: "1 g",
        detail: "Levocarnitine",
        group: "AMINO ACIDS",
      },
      {
        name: "Magnesium Sulfate",
        amount: "500 mg",
        group: "MICRONUTRIENTS",
      },
      {
        name: "N-Acetylcysteine",
        amount: "400 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Zinc",
        detail: "Zinc Chloride",
        group: "MICRONUTRIENTS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "refuel",
    number: "09",
    name: "REFUEL®",
    protocolName: "Performance Recovery Protocol",
    category: "METABOLIC & PERFORMANCE",
    description:
      "A nutritional recovery formulation built around amino acids, antioxidants, vitamins and trace minerals.",
    image: "/images/decode-vial/products/Refuel-drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "2.4 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "1.5 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "L-Alanyl-L-Glutamine",
        amount: "10 g",
        group: "AMINO ACIDS",
      },
      {
        name: "N-Acetylcysteine",
        amount: "200 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Multi-Trace Minerals",
        detail:
          "Zinc · Copper · Manganese · Chromium · Selenium · Iodine",
        group: "MICRONUTRIENTS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "nadx",
    number: "10",
    name: "NADx®",
    protocolName: "Cellular Energy Protocol",
    category: "CELLULAR & LONGEVITY",
    description:
      "A single-active NAD⁺ formulation within the DRIPLABS cellular energy programme.",
    image: "/images/decode-vial/products/NADx-Boost-Drip.png",
    ingredients: [
      {
        name: "NAD⁺",
        amount: "500 mg",
        detail: "Nicotinamide Adenine Dinucleotide",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "gut",
    number: "11",
    name: "GUT+®",
    protocolName: "Gastrointestinal Wellness Protocol",
    category: "DIGESTIVE & SYSTEMIC",
    description:
      "A formulation centred on amino-acid and nutritional components within the DRIPLABS digestive pathway.",
    image: "/images/decode-vial/products/Mega-Boost-Drip.png",
    ingredients: [
      {
        name: "L-Alanyl-L-Glutamine",
        amount: "10 g",
        group: "AMINO ACIDS",
      },
      {
        name: "N-Acetylcysteine",
        amount: "400 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "GI-Targeted Amino Acid Blend",
        detail: "8% w/v · 16 Amino Acids",
        group: "AMINO ACIDS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Zinc",
        detail: "Zinc Chloride",
        group: "MICRONUTRIENTS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "rebuild",
    number: "12",
    name: "REBUILD®",
    protocolName: "Protein Recovery Protocol",
    category: "METABOLIC & PERFORMANCE",
    description:
      "A nutritional recovery formulation built around glutamine, amino acids, vitamin C and trace minerals.",
    image: "/images/decode-vial/products/Refuel-drip.png",
    ingredients: [
      {
        name: "L-Alanyl-L-Glutamine",
        amount: "10 g",
        group: "AMINO ACIDS",
      },
      {
        name: "Vitamin C",
        amount: "3 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "N-Acetylcysteine",
        amount: "200 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Essential Amino Acid Blend",
        detail: "9 Amino Acids",
        group: "AMINO ACIDS",
      },
      {
        name: "Multi-Trace Minerals",
        detail:
          "Zinc · Copper · Manganese · Chromium · Selenium · Iodine",
        group: "MICRONUTRIENTS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "move",
    number: "13",
    name: "MOVE®",
    protocolName: "Musculoskeletal Wellness Protocol",
    category: "MUSCULOSKELETAL",
    description:
      "A formulation combining mineral, vitamin, antioxidant and micronutrient components.",
    image: "/images/decode-vial/products/Fit-drip.png",
    ingredients: [
      {
        name: "Magnesium Sulfate",
        amount: "1 g",
        group: "MICRONUTRIENTS",
      },
      {
        name: "Vitamin C",
        amount: "3 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin D3",
        amount: "600,000 IU",
        detail: "Cholecalciferol · IM*",
        group: "VITAMINS",
      },
      {
        name: "N-Acetylcysteine",
        amount: "400 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Multi-Trace Minerals",
        detail:
          "Zinc · Copper · Manganese · Chromium · Selenium · Iodine",
        group: "MICRONUTRIENTS",
      },
      {
        name: "B12 + Folic Acid + Niacinamide",
        detail: "+ Vitamin C",
        group: "VITAMINS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "femme",
    number: "14",
    name: "FEMME®",
    protocolName: "Women's Nutritional Wellness Protocol",
    category: "WOMEN'S WELLNESS",
    description:
      "A physician-supervised nutritional formulation combining iron, vitamins, antioxidants and hydration support.",
    image: "/images/decode-vial/products/Restore-drip.png",
    ingredients: [
      {
        name: "Iron",
        amount: "500 mg",
        detail: "Ferric Carboxymaltose",
        group: "MICRONUTRIENTS",
      },
      {
        name: "Vitamin C",
        amount: "3 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "N-Acetylcysteine",
        amount: "200 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "B12 + Folic Acid + Niacinamide",
        detail: "+ Vitamin C",
        group: "VITAMINS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Multivitamin Complex",
        detail: "A · D3 · E · B-Complex · C · Biotin",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "recover",
    number: "15",
    name: "RECOVER+®",
    protocolName: "Clinical Recovery Protocol",
    category: "RECOVERY & IMMUNE",
    description:
      "A nutritional recovery formulation combining antioxidant, amino-acid, vitamin and multivitamin components.",
    image: "/images/decode-vial/products/Bounce-Back-Drip.png",
    ingredients: [
      {
        name: "Glutathione",
        amount: "2.4 g",
        detail: "Reduced",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin C",
        amount: "3 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "N-Acetylcysteine",
        amount: "200 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Essential Amino Acid Blend",
        detail: "9 Amino Acids",
        group: "AMINO ACIDS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Multivitamin Complex",
        detail: "A · D3 · E · B-Complex · C · Biotin",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "performance-x",
    number: "16",
    name: "PERFORMANCE-X®",
    protocolName: "Advanced Performance Protocol",
    category: "METABOLIC & PERFORMANCE",
    description:
      "An advanced performance formulation built around amino acids, magnesium, carnitine, antioxidants and vitamins.",
    image: "/images/decode-vial/products/Fit-drip.png",
    ingredients: [
      {
        name: "L-Alanyl-L-Glutamine",
        amount: "20 g",
        group: "AMINO ACIDS",
      },
      {
        name: "Magnesium Sulfate",
        amount: "1.5 g",
        group: "MICRONUTRIENTS",
      },
      {
        name: "Vitamin C",
        amount: "3 g",
        detail: "Ascorbic Acid",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "L-Carnitine",
        amount: "2 g",
        detail: "Levocarnitine",
        group: "AMINO ACIDS",
      },
      {
        name: "N-Acetylcysteine",
        amount: "400 mg",
        detail: "NAC",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Electrolyte Hydration Base",
        detail: "Ringer-Lactate Class",
        group: "HYDRATION",
      },
    ],
  },

  {
    id: "methyblu",
    number: "17",
    name: "METHYBLU®",
    protocolName: "Mitochondrial Wellness Protocol",
    category: "CELLULAR & LONGEVITY",
    description:
      "A mitochondrial wellness formulation featuring methylene blue alongside vitamin components and a dextrose carrier base.",
    image: "/images/decode-vial/products/NADx-Boost-Drip.png",
    ingredients: [
      {
        name: "Methylene Blue",
        amount: "200 mg",
        group: "PRIMARY ACTIVE",
      },
      {
        name: "B12 + Folic Acid + Niacinamide",
        detail: "+ Vitamin C",
        group: "VITAMINS",
      },
      {
        name: "Vitamin B-Complex",
        detail: "B12 · B6 · B3 · B5",
        group: "VITAMINS",
      },
      {
        name: "Dextrose 5%",
        detail: "Carrier Base",
        group: "HYDRATION",
      },
    ],
  },
];

const GROUP_ORDER: IngredientGroup[] = [
  "PRIMARY ACTIVE",
  "AMINO ACIDS",
  "MICRONUTRIENTS",
  "VITAMINS",
  "HYDRATION",
];

export default function VialProductTransition() {
  const reducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIngredient, setActiveIngredient] = useState<string | null>(
    null,
  );

  const active = PRODUCTS[activeIndex];

  const groupedIngredients = useMemo(() => {
    return GROUP_ORDER.map((group) => ({
      group,
      items: active.ingredients.filter(
        (ingredient) => ingredient.group === group,
      ),
    })).filter((group) => group.items.length > 0);
  }, [active]);

  useEffect(() => {
    setActiveIngredient(null);
  }, [activeIndex]);

  useEffect(() => {
    PRODUCTS.forEach((product) => {
      const image = new Image();
      image.src = product.image;
    });
  }, []);

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? PRODUCTS.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === PRODUCTS.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="decode-a-vial"
      className="decode-vial"
      aria-label="Decode a Vial"
    >
      <div className="decode-vial-bg" />
      <div className="decode-vial-grid" />
      <div className="decode-vial-glow" />

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="decode-header">
        <div className="decode-header-left">
          <span className="decode-header-line" />
          <span>DECODE A VIAL</span>
        </div>

        <div className="decode-header-right">
          DRIPLABS® / FORMULATION ARCHITECTURE
        </div>
      </header>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="decode-intro">
        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="decode-eyebrow">
            INSIDE THE FORMULATION
          </span>

          <h2>
            Every protocol
            <br />
            has an <em>architecture.</em>
          </h2>

          <p>
            Go beyond the protocol name. Explore the formulation,
            specified quantities and ingredient architecture behind
            the DRIPLABS system.
          </p>
        </motion.div>
      </div>

      {/* =========================================================
          PROTOCOL SELECTOR — DESKTOP
      ========================================================= */}

      <div className="protocol-selector">
        <div className="selector-heading">
          <span>SELECT PROTOCOL</span>
          <strong>
            {active.number} / {String(PRODUCTS.length).padStart(2, "0")}
          </strong>
        </div>

        <div className="selector-list">
          {PRODUCTS.map((product, index) => {
            const selected = index === activeIndex;

            return (
              <button
                key={product.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`selector-item ${
                  selected ? "selected" : ""
                }`}
                aria-label={`View ${product.name}`}
                aria-current={selected ? "true" : undefined}
              >
                <span className="selector-number">
                  {product.number}
                </span>

                <span className="selector-name">
                  {product.name}
                </span>

                <span className="selector-category">
                  {product.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          ACTIVE PROTOCOL
      ========================================================= */}

      <AnimatePresence mode="wait">
        <motion.article
          key={active.id}
          className="protocol-sheet"
          initial={
            reducedMotion
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          animate={{ opacity: 1 }}
          exit={
            reducedMotion
              ? { opacity: 0 }
              : { opacity: 0 }
          }
          transition={{
            duration: reducedMotion ? 0.01 : 0.5,
          }}
        >
          {/* =====================================================
              PROTOCOL HEADER
          ===================================================== */}

          <div className="protocol-title-block">
            <div className="protocol-title-meta">
              <span>PROTOCOL {active.number}</span>
              <span>DRIPLABS®</span>
            </div>

            <div className="protocol-title-row">
              <div>
                <div className="protocol-category">
                  {active.category}
                </div>

                <h3>{active.name}</h3>

                <div className="protocol-subtitle">
                  {active.protocolName}
                </div>
              </div>

              <div className="protocol-title-index">
                <span>NOW DECODING</span>
                <strong>{active.number}</strong>
                <small>/ {String(PRODUCTS.length).padStart(2, "0")}</small>
              </div>
            </div>

            <p className="protocol-description">
              {active.description}
            </p>
          </div>

          {/* =====================================================
              MAIN PROTOCOL GRID
          ===================================================== */}

          <div className="protocol-main-grid">
            {/* VISUAL */}
            <div className="protocol-visual">
              <div className="visual-label visual-label-top">
                FORMULATION
              </div>

              <div className="visual-label visual-label-bottom">
                PHYSICIAN-DIRECTED
              </div>

              <div className="visual-cross horizontal" />
              <div className="visual-cross vertical" />

              <div className="visual-orbit visual-orbit-one" />
              <div className="visual-orbit visual-orbit-two" />

              <div className="visual-number">
                {active.number}
              </div>

              <motion.div
                className="visual-image"
                initial={
                  reducedMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        scale: 1.04,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src={active.image}
                  alt={`${active.name} formulation`}
                  draggable={false}
                />
              </motion.div>

              <div className="visual-shadow" />
            </div>

            {/* INFORMATION */}
            <div className="protocol-overview">
              <div className="overview-label">
                FORMULATION PROFILE
              </div>

              <div className="overview-title">
                What's
                <br />
                <em>inside.</em>
              </div>

              <p>
                The following composition reflects the supplied
                DRIPLABS nutrient architecture. Quantities are shown
                where specified in the source formulation.
              </p>

              <div className="overview-stats">
                <div>
                  <span>COMPONENTS</span>
                  <strong>{active.ingredients.length}</strong>
                </div>

                <div>
                  <span>PROTOCOL</span>
                  <strong>
                    {active.number} / {PRODUCTS.length}
                  </strong>
                </div>

                <div>
                  <span>FORMAT</span>
                  <strong>IV WELLNESS</strong>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              INGREDIENT ARCHITECTURE
          ===================================================== */}

          <div className="ingredient-section">
            <div className="ingredient-section-header">
              <div>
                <span className="section-index">01</span>

                <span className="section-label">
                  INGREDIENT ARCHITECTURE
                </span>
              </div>

              <p>
                Select an ingredient to inspect its specified
                formulation detail.
              </p>
            </div>

            <div className="ingredient-groups">
              {groupedIngredients.map(
                ({ group, items }, groupIndex) => (
                  <div
                    key={group}
                    className="ingredient-group"
                  >
                    <div className="ingredient-group-title">
                      <span>
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>

                      <strong>{group}</strong>
                    </div>

                    <div className="ingredient-list">
                      {items.map((ingredient, index) => {
                        const ingredientKey = `${active.id}-${ingredient.name}`;

                        const isOpen =
                          activeIngredient === ingredientKey;

                        return (
                          <button
                            key={ingredientKey}
                            type="button"
                            className={`ingredient-row ${
                              isOpen ? "open" : ""
                            }`}
                            onClick={() =>
                              setActiveIngredient(
                                isOpen
                                  ? null
                                  : ingredientKey,
                              )
                            }
                          >
                            <span className="ingredient-count">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="ingredient-content">
                              <strong>
                                {ingredient.name}
                              </strong>

                              {ingredient.detail && (
                                <small>
                                  {ingredient.detail}
                                </small>
                              )}
                            </span>

                            <span className="ingredient-amount">
                              {ingredient.amount || "—"}
                            </span>

                            <span className="ingredient-toggle">
                              {isOpen ? "−" : "+"}
                            </span>

                            <AnimatePresence
                              initial={false}
                            >
                              {isOpen && (
                                <motion.div
                                  className="ingredient-expanded"
                                  initial={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    height: "auto",
                                    opacity: 1,
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  transition={{
                                    duration:
                                      reducedMotion
                                        ? 0.01
                                        : 0.25,
                                  }}
                                >
                                  {ingredient.amount ? (
                                    <>
                                      <strong>
                                        Specified amount
                                      </strong>

                                      <span>
                                        {ingredient.amount}
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <strong>
                                        Formulation detail
                                      </strong>

                                      <span>
                                        This component is
                                        listed as part of
                                        the {active.name}{" "}
                                        formulation.
                                      </span>
                                    </>
                                  )}

                                  {ingredient.detail && (
                                    <>
                                      <strong>
                                        Additional detail
                                      </strong>

                                      <span>
                                        {ingredient.detail}
                                      </span>
                                    </>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* =====================================================
              PROTOCOL SUMMARY
          ===================================================== */}

          <div className="protocol-summary">
            <div className="summary-label">
              02 / PROTOCOL PROFILE
            </div>

            <div className="summary-grid">
              <div className="summary-card">
                <span>PROTOCOL</span>
                <strong>{active.name}</strong>
                <small>{active.protocolName}</small>
              </div>

              <div className="summary-card">
                <span>PATHWAY</span>
                <strong>{active.category}</strong>
                <small>DRIPLABS® Protocol System</small>
              </div>

              <div className="summary-card">
                <span>COMPONENTS</span>
                <strong>
                  {active.ingredients.length}
                </strong>
                <small>
                  Listed formulation components
                </small>
              </div>

              <div className="summary-card">
                <span>ADMINISTRATION</span>
                <strong>PHYSICIAN</strong>
                <small>Directed clinical setting</small>
              </div>
            </div>
          </div>

          {/* =====================================================
              CLINICAL NOTE
          ===================================================== */}

          <div className="protocol-note">
            <div className="protocol-note-mark">i</div>

            <div>
              <span>FORMULATION NOTE</span>

              <p>
                Full nutrient composition for every protocol is
                disclosed to the physician before administration.
                Protocol names describe the wellness focus of the
                formulation and are not medical claims.
              </p>
            </div>
          </div>

          {/* =====================================================
              PREVIOUS / NEXT
          ===================================================== */}

          <div className="protocol-navigation">
            <button
              type="button"
              onClick={goPrevious}
              className="protocol-nav-button"
            >
              <span>←</span>

              <div>
                <small>PREVIOUS</small>
                <strong>
                  {PRODUCTS[
                    activeIndex === 0
                      ? PRODUCTS.length - 1
                      : activeIndex - 1
                  ].name}
                </strong>
              </div>
            </button>

            <div className="protocol-nav-position">
              <strong>{active.number}</strong>
              <span>/</span>
              <span>
                {String(PRODUCTS.length).padStart(2, "0")}
              </span>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="protocol-nav-button next"
            >
              <div>
                <small>NEXT</small>
                <strong>
                  {PRODUCTS[
                    activeIndex === PRODUCTS.length - 1
                      ? 0
                      : activeIndex + 1
                  ].name}
                </strong>
              </div>

              <span>→</span>
            </button>
          </div>
        </motion.article>
      </AnimatePresence>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="decode-footer">
        <span>PHYSICIAN-SUPERVISED USE ONLY</span>

        <i />

        <span>
          * COMPONENTS MARKED IN SOURCE AS CLINICALLY INDICATED
        </span>

        <i />

        <span>DRIPLABS® PROTOCOL SYSTEM</span>
      </footer>

      <div className="decode-corner top-left" />
      <div className="decode-corner top-right" />
      <div className="decode-corner bottom-left" />
      <div className="decode-corner bottom-right" />

      <style jsx>{`
        /* =====================================================
           BASE
        ===================================================== */

        .decode-vial {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          background: #020812;
          color: #f7faff;
        }

        .decode-vial-bg {
          position: absolute;
          inset: 0;
          z-index: -10;
          background:
            radial-gradient(
              ellipse at 50% 18%,
              rgba(0, 102, 255, 0.12),
              transparent 35%
            ),
            radial-gradient(
              ellipse at 10% 65%,
              rgba(22, 131, 255, 0.05),
              transparent 30%
            ),
            linear-gradient(
              180deg,
              #020812 0%,
              #06152b 42%,
              #020812 100%
            );
        }

        .decode-vial-grid {
          position: absolute;
          inset: 0;
          z-index: -9;
          opacity: 0.24;
          background-image:
            linear-gradient(
              rgba(140, 203, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(140, 203, 255, 0.035) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 88%
          );
        }

        .decode-vial-glow {
          position: absolute;
          top: 400px;
          left: 50%;
          z-index: -8;
          width: 700px;
          height: 700px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 102, 255, 0.13),
            transparent 68%
          );
          filter: blur(40px);
          pointer-events: none;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .decode-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 58px;
          padding: 0 5vw;
          border-bottom: 1px solid rgba(247, 250, 255, 0.08);
        }

        .decode-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8ccbff;
          font-size: 8px;
          letter-spacing: 0.28em;
        }

        .decode-header-line {
          width: 28px;
          height: 1px;
          background: #1683ff;
        }

        .decode-header-right {
          color: rgba(247, 250, 255, 0.25);
          font-size: 7px;
          letter-spacing: 0.2em;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .decode-intro {
          width: min(1300px, 90%);
          margin: 0 auto;
          padding: 100px 0 65px;
        }

        .decode-eyebrow {
          display: block;
          margin-bottom: 22px;
          color: #4d9bff;
          font-size: 8px;
          letter-spacing: 0.3em;
        }

        .decode-intro h2 {
          max-width: 950px;
          margin: 0;
          font-family: var(--font-heading), Georgia, serif;
          font-size: clamp(4rem, 7vw, 8rem);
          font-weight: 300;
          line-height: 0.86;
          letter-spacing: -0.07em;
        }

        .decode-intro h2 em {
          color: #8ccbff;
          font-style: italic;
        }

        .decode-intro p {
          max-width: 470px;
          margin: 32px 0 0;
          color: rgba(247, 250, 255, 0.46);
          font-size: 13px;
          line-height: 1.8;
        }

        /* =====================================================
           PROTOCOL SELECTOR
        ===================================================== */

        .protocol-selector {
          width: min(1300px, 90%);
          margin: 0 auto;
        }

        .selector-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 13px;
          border-bottom: 1px solid rgba(247, 250, 255, 0.1);
        }

        .selector-heading span,
        .selector-heading strong {
          color: rgba(247, 250, 255, 0.28);
          font-size: 7px;
          font-weight: 400;
          letter-spacing: 0.2em;
        }

        .selector-list {
          display: grid;
          grid-template-columns: repeat(17, minmax(0, 1fr));
          gap: 7px;
        }

        .selector-item {
          position: relative;
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 7px;
          padding: 16px 5px 13px;
          border: 0;
          border-bottom: 1px solid
            rgba(247, 250, 255, 0.09);
          background: transparent;
          color: rgba(247, 250, 255, 0.27);
          text-align: left;
          cursor: pointer;
          transition:
            color 250ms ease,
            border-color 250ms ease,
            background 250ms ease;
        }

        .selector-item:hover {
          color: rgba(247, 250, 255, 0.7);
          background: rgba(0, 102, 255, 0.035);
        }

        .selector-item.selected {
          color: #8ccbff;
          border-bottom-color: #1683ff;
          background: rgba(0, 102, 255, 0.06);
        }

        .selector-item.selected::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #1683ff;
          box-shadow: 0 0 15px rgba(22, 131, 255, 0.45);
        }

        .selector-number {
          font-size: 6px;
          letter-spacing: 0.14em;
        }

        .selector-name {
          overflow: hidden;
          font-size: 7px;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .selector-category {
          overflow: hidden;
          color: rgba(247, 250, 255, 0.2);
          font-size: 5px;
          line-height: 1.35;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* =====================================================
           PROTOCOL SHEET
        ===================================================== */

        .protocol-sheet {
          width: min(1300px, 90%);
          margin: 80px auto 0;
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .protocol-title-block {
          padding-bottom: 55px;
          border-bottom: 1px solid rgba(247, 250, 255, 0.1);
        }

        .protocol-title-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 35px;
          color: rgba(247, 250, 255, 0.23);
          font-size: 6px;
          letter-spacing: 0.2em;
        }

        .protocol-title-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }

        .protocol-category {
          margin-bottom: 12px;
          color: #4d9bff;
          font-size: 8px;
          letter-spacing: 0.25em;
        }

        .protocol-title-row h3 {
          margin: 0;
          color: #f7faff;
          font-family: var(--font-heading), Georgia, serif;
          font-size: clamp(4rem, 8vw, 8.5rem);
          font-weight: 300;
          line-height: 0.78;
          letter-spacing: -0.075em;
        }

        .protocol-subtitle {
          margin-top: 17px;
          color: rgba(247, 250, 255, 0.42);
          font-size: 11px;
          letter-spacing: 0.08em;
        }

        .protocol-title-index {
          display: flex;
          flex-direction: column;
          min-width: 120px;
          padding-left: 22px;
          border-left: 1px solid #1683ff;
        }

        .protocol-title-index span {
          color: #4d9bff;
          font-size: 6px;
          letter-spacing: 0.2em;
        }

        .protocol-title-index strong {
          margin-top: 7px;
          color: #f7faff;
          font-family: var(--font-heading), Georgia, serif;
          font-size: 50px;
          font-weight: 300;
          line-height: 0.8;
        }

        .protocol-title-index small {
          margin-top: 7px;
          color: rgba(247, 250, 255, 0.25);
          font-size: 7px;
          letter-spacing: 0.15em;
        }

        .protocol-description {
          max-width: 590px;
          margin: 35px 0 0;
          color: rgba(247, 250, 255, 0.45);
          font-size: 12px;
          line-height: 1.85;
        }

        /* =====================================================
           MAIN GRID
        ===================================================== */

        .protocol-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(330px, 0.75fr);
          gap: 80px;
          align-items: center;
          padding: 80px 0;
        }

        /* =====================================================
           VISUAL
        ===================================================== */

        .protocol-visual {
          position: relative;
          min-height: 600px;
          overflow: hidden;
          border: 1px solid rgba(247, 250, 255, 0.07);
          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(0, 102, 255, 0.11),
              transparent 38%
            ),
            rgba(1, 5, 11, 0.7);
        }

        .visual-cross {
          position: absolute;
          z-index: 1;
          background: rgba(140, 203, 255, 0.07);
        }

        .visual-cross.horizontal {
          top: 50%;
          left: 7%;
          right: 7%;
          height: 1px;
        }

        .visual-cross.vertical {
          top: 7%;
          bottom: 7%;
          left: 50%;
          width: 1px;
        }

        .visual-orbit {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
        }

        .visual-orbit-one {
          width: 390px;
          height: 390px;
          border: 1px solid rgba(22, 131, 255, 0.18);
        }

        .visual-orbit-two {
          width: 510px;
          height: 510px;
          border: 1px dashed rgba(140, 203, 255, 0.08);
        }

        .visual-label {
          position: absolute;
          z-index: 8;
          color: rgba(247, 250, 255, 0.2);
          font-size: 6px;
          letter-spacing: 0.25em;
        }

        .visual-label-top {
          top: 28px;
          left: 30px;
        }

        .visual-label-bottom {
          right: 30px;
          bottom: 28px;
        }

        .visual-number {
          position: absolute;
          z-index: 2;
          top: 25px;
          right: 30px;
          color: rgba(247, 250, 255, 0.06);
          font-family: var(--font-heading), Georgia, serif;
          font-size: 90px;
          line-height: 0.7;
          letter-spacing: -0.08em;
        }

        .visual-image {
          position: absolute;
          z-index: 5;
          inset: 9%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          user-select: none;
          filter:
            contrast(1.04)
            saturate(0.94)
            drop-shadow(0 35px 45px rgba(0, 0, 0, 0.7));
        }

        .visual-shadow {
          position: absolute;
          z-index: 4;
          left: 50%;
          bottom: 12%;
          width: 40%;
          height: 30px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(0, 0, 0, 0.8),
            transparent 70%
          );
          filter: blur(12px);
        }

        /* =====================================================
           OVERVIEW
        ===================================================== */

        .protocol-overview {
          min-width: 0;
        }

        .overview-label {
          color: #4d9bff;
          font-size: 7px;
          letter-spacing: 0.24em;
        }

        .overview-title {
          margin-top: 20px;
          color: #f7faff;
          font-family: var(--font-heading), Georgia, serif;
          font-size: clamp(4rem, 6vw, 6.5rem);
          font-weight: 300;
          line-height: 0.83;
          letter-spacing: -0.07em;
        }

        .overview-title em {
          color: #8ccbff;
          font-style: italic;
        }

        .protocol-overview > p {
          max-width: 390px;
          margin: 28px 0 0;
          color: rgba(247, 250, 255, 0.43);
          font-size: 11px;
          line-height: 1.85;
        }

        .overview-stats {
          margin-top: 45px;
          border-top: 1px solid rgba(247, 250, 255, 0.09);
        }

        .overview-stats div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(247, 250, 255, 0.07);
        }

        .overview-stats span {
          color: rgba(247, 250, 255, 0.22);
          font-size: 6px;
          letter-spacing: 0.18em;
        }

        .overview-stats strong {
          color: rgba(247, 250, 255, 0.72);
          font-size: 7px;
          font-weight: 400;
          letter-spacing: 0.13em;
          text-align: right;
        }

        /* =====================================================
           INGREDIENTS
        ===================================================== */

        .ingredient-section {
          padding: 90px 0 100px;
          border-top: 1px solid rgba(247, 250, 255, 0.1);
        }

        .ingredient-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
          margin-bottom: 50px;
        }

        .ingredient-section-header > div {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .section-index {
          color: #1683ff;
          font-family: var(--font-heading), Georgia, serif;
          font-size: 38px;
          line-height: 1;
        }

        .section-label {
          color: rgba(247, 250, 255, 0.3);
          font-size: 7px;
          letter-spacing: 0.2em;
        }

        .ingredient-section-header p {
          max-width: 330px;
          margin: 0;
          color: rgba(247, 250, 255, 0.34);
          font-size: 10px;
          line-height: 1.7;
        }

        .ingredient-groups {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 60px 80px;
        }

        .ingredient-group {
          min-width: 0;
          border-top: 1px solid rgba(247, 250, 255, 0.13);
        }

        .ingredient-group-title {
          display: flex;
          align-items: center;
          gap: 17px;
          min-height: 50px;
          border-bottom: 1px solid rgba(247, 250, 255, 0.07);
        }

        .ingredient-group-title span {
          color: #1683ff;
          font-size: 7px;
        }

        .ingredient-group-title strong {
          color: rgba(247, 250, 255, 0.54);
          font-size: 7px;
          font-weight: 400;
          letter-spacing: 0.2em;
        }

        .ingredient-list {
          width: 100%;
        }

        .ingredient-row {
          position: relative;
          display: grid;
          grid-template-columns: 32px minmax(0, 1fr) auto 20px;
          column-gap: 15px;
          align-items: center;
          width: 100%;
          padding: 17px 0;
          border: 0;
          border-bottom: 1px solid rgba(247, 250, 255, 0.065);
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
          transition:
            background 220ms ease,
            padding 220ms ease;
        }

        .ingredient-row:hover,
        .ingredient-row.open {
          padding-right: 10px;
          padding-left: 10px;
          background: rgba(0, 102, 255, 0.045);
        }

        .ingredient-count {
          color: rgba(247, 250, 255, 0.18);
          font-size: 7px;
        }

        .ingredient-content {
          min-width: 0;
        }

        .ingredient-content strong {
          display: block;
          overflow-wrap: anywhere;
          color: rgba(247, 250, 255, 0.86);
          font-size: 11px;
          font-weight: 400;
          line-height: 1.35;
        }

        .ingredient-content small {
          display: block;
          margin-top: 4px;
          color: rgba(247, 250, 255, 0.28);
          font-size: 7px;
          line-height: 1.45;
        }

        .ingredient-amount {
          color: #8ccbff;
          font-family: var(--font-heading), Georgia, serif;
          font-size: 17px;
          white-space: nowrap;
        }

        .ingredient-toggle {
          color: rgba(247, 250, 255, 0.28);
          font-size: 15px;
        }

        .ingredient-expanded {
          grid-column: 2 / 5;
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 8px 20px;
          overflow: hidden;
          padding: 15px 0 2px;
          color: rgba(247, 250, 255, 0.42);
          font-size: 8px;
          line-height: 1.7;
        }

        .ingredient-expanded strong {
          color: rgba(247, 250, 255, 0.22);
          font-size: 6px;
          font-weight: 400;
          letter-spacing: 0.15em;
        }

        /* =====================================================
           SUMMARY
        ===================================================== */

        .protocol-summary {
          padding: 90px 0;
          border-top: 1px solid rgba(247, 250, 255, 0.1);
        }

        .summary-label {
          margin-bottom: 30px;
          color: #4d9bff;
          font-size: 7px;
          letter-spacing: 0.2em;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid rgba(247, 250, 255, 0.1);
          border-left: 1px solid rgba(247, 250, 255, 0.1);
        }

        .summary-card {
          min-width: 0;
          min-height: 155px;
          padding: 25px;
          border-right: 1px solid rgba(247, 250, 255, 0.1);
          border-bottom: 1px solid rgba(247, 250, 255, 0.1);
        }

        .summary-card span {
          color: rgba(247, 250, 255, 0.22);
          font-size: 6px;
          letter-spacing: 0.18em;
        }

        .summary-card strong {
          display: block;
          margin-top: 25px;
          overflow-wrap: anywhere;
          color: #f7faff;
          font-family: var(--font-heading), Georgia, serif;
          font-size: clamp(1.6rem, 2.5vw, 2.5rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.04em;
        }

        .summary-card small {
          display: block;
          margin-top: 10px;
          color: rgba(247, 250, 255, 0.27);
          font-size: 7px;
          line-height: 1.5;
        }

        /* =====================================================
           NOTE
        ===================================================== */

        .protocol-note {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 20px;
          align-items: start;
          padding: 25px 0;
          border-top: 1px solid rgba(247, 250, 255, 0.08);
          border-bottom: 1px solid rgba(247, 250, 255, 0.08);
        }

        .protocol-note-mark {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: 1px solid rgba(22, 131, 255, 0.5);
          border-radius: 50%;
          color: #8ccbff;
          font-family: Georgia, serif;
          font-size: 13px;
        }

        .protocol-note span {
          color: #4d9bff;
          font-size: 6px;
          letter-spacing: 0.2em;
        }

        .protocol-note p {
          max-width: 780px;
          margin: 9px 0 0;
          color: rgba(247, 250, 255, 0.3);
          font-size: 9px;
          line-height: 1.75;
        }

        /* =====================================================
           PREVIOUS / NEXT
        ===================================================== */

        .protocol-navigation {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 30px;
          padding: 70px 0;
        }

        .protocol-nav-button {
          display: flex;
          align-items: center;
          gap: 18px;
          width: fit-content;
          padding: 0;
          border: 0;
          background: transparent;
          color: #f7faff;
          cursor: pointer;
          text-align: left;
        }

        .protocol-nav-button.next {
          justify-self: end;
          text-align: right;
        }

        .protocol-nav-button > span {
          color: #1683ff;
          font-size: 20px;
          transition: transform 250ms ease;
        }

        .protocol-nav-button:hover > span {
          transform: translateX(-5px);
        }

        .protocol-nav-button.next:hover > span {
          transform: translateX(5px);
        }

        .protocol-nav-button small {
          display: block;
          color: rgba(247, 250, 255, 0.22);
          font-size: 6px;
          letter-spacing: 0.2em;
        }

        .protocol-nav-button strong {
          display: block;
          margin-top: 7px;
          color: rgba(247, 250, 255, 0.78);
          font-family: var(--font-heading), Georgia, serif;
          font-size: 22px;
          font-weight: 300;
        }

        .protocol-nav-position {
          display: flex;
          align-items: baseline;
          gap: 8px;
          color: rgba(247, 250, 255, 0.2);
          font-size: 8px;
        }

        .protocol-nav-position strong {
          color: #8ccbff;
          font-family: var(--font-heading), Georgia, serif;
          font-size: 38px;
          font-weight: 300;
        }

        /* =====================================================
           FOOTER
        ===================================================== */

        .decode-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 14px;
          padding: 30px 20px 45px;
          color: rgba(247, 250, 255, 0.18);
          font-size: 6px;
          letter-spacing: 0.15em;
          text-align: center;
        }

        .decode-footer i {
          width: 22px;
          height: 1px;
          background: rgba(22, 131, 255, 0.35);
        }

        /* =====================================================
           CORNERS
        ===================================================== */

        .decode-corner {
          position: absolute;
          z-index: 20;
          width: 22px;
          height: 22px;
          opacity: 0.6;
          pointer-events: none;
        }

        .decode-corner.top-left {
          top: 72px;
          left: 18px;
          border-top: 1px solid #1683ff;
          border-left: 1px solid #1683ff;
        }

        .decode-corner.top-right {
          top: 72px;
          right: 18px;
          border-top: 1px solid #1683ff;
          border-right: 1px solid #1683ff;
        }

        .decode-corner.bottom-left {
          bottom: 18px;
          left: 18px;
          border-bottom: 1px solid #1683ff;
          border-left: 1px solid #1683ff;
        }

        .decode-corner.bottom-right {
          right: 18px;
          bottom: 18px;
          border-right: 1px solid #1683ff;
          border-bottom: 1px solid #1683ff;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .selector-list {
            display: flex;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 8px;
            scrollbar-width: none;
          }

          .selector-list::-webkit-scrollbar {
            display: none;
          }

          .selector-item {
            flex: 0 0 105px;
          }

          .protocol-main-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 55px;
          }

          .protocol-visual {
            min-height: 600px;
          }

          .protocol-overview {
            max-width: 650px;
          }

          .ingredient-groups {
            gap: 45px;
          }

          .summary-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .decode-header {
            min-height: 52px;
            padding: 0 20px;
          }

          .decode-header-right {
            display: none;
          }

          .decode-intro {
            width: calc(100% - 40px);
            padding: 65px 0 45px;
          }

          .decode-intro h2 {
            font-size: clamp(3.5rem, 15vw, 5.5rem);
          }

          .decode-intro p {
            max-width: 100%;
            margin-top: 25px;
            font-size: 12px;
          }

          .protocol-selector {
            width: calc(100% - 40px);
          }

          .selector-item {
            flex-basis: 95px;
          }

          .selector-category {
            white-space: normal;
          }

          .protocol-sheet {
            width: calc(100% - 40px);
            margin-top: 55px;
          }

          .protocol-title-block {
            padding-bottom: 40px;
          }

          .protocol-title-meta {
            margin-bottom: 25px;
          }

          .protocol-title-row {
            display: block;
          }

          .protocol-title-row h3 {
            font-size: clamp(3.8rem, 18vw, 6rem);
          }

          .protocol-title-index {
            width: fit-content;
            min-width: 100px;
            margin-top: 30px;
          }

          .protocol-title-index strong {
            font-size: 42px;
          }

          .protocol-description {
            margin-top: 28px;
            font-size: 11px;
          }

          .protocol-main-grid {
            display: block;
            padding: 50px 0 65px;
          }

          .protocol-visual {
            min-height: 430px;
          }

          .visual-image {
            inset: 13%;
          }

          .visual-orbit-one {
            width: 270px;
            height: 270px;
          }

          .visual-orbit-two {
            width: 350px;
            height: 350px;
          }

          .visual-number {
            font-size: 70px;
          }

          .protocol-overview {
            margin-top: 50px;
          }

          .overview-title {
            font-size: 4rem;
          }

          .protocol-overview > p {
            max-width: 100%;
          }

          .ingredient-section {
            padding: 65px 0;
          }

          .ingredient-section-header {
            display: block;
            margin-bottom: 40px;
          }

          .ingredient-section-header p {
            margin-top: 22px;
          }

          .ingredient-groups {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .ingredient-row {
            grid-template-columns: 25px minmax(0, 1fr) auto 15px;
            column-gap: 8px;
            padding: 16px 0;
          }

          .ingredient-content strong {
            font-size: 10px;
          }

          .ingredient-content small {
            font-size: 7px;
          }

          .ingredient-amount {
            font-size: 14px;
          }

          .ingredient-expanded {
            grid-column: 2 / 5;
            grid-template-columns: 1fr;
            gap: 4px;
            padding-top: 12px;
          }

          .protocol-summary {
            padding: 65px 0;
          }

          .summary-grid {
            grid-template-columns: 1fr;
          }

          .summary-card {
            min-height: 130px;
          }

          .summary-card strong {
            margin-top: 20px;
          }

          .protocol-note {
            grid-template-columns: 32px 1fr;
            gap: 14px;
          }

          .protocol-note-mark {
            width: 26px;
            height: 26px;
          }

          .protocol-navigation {
            grid-template-columns: 1fr 1fr;
            gap: 30px 15px;
            padding: 55px 0;
          }

          .protocol-nav-position {
            display: none;
          }

          .protocol-nav-button.next {
            justify-self: end;
          }

          .protocol-nav-button strong {
            font-size: 18px;
          }

          .protocol-nav-button > span {
            font-size: 17px;
          }

          .decode-footer {
            flex-direction: column;
            gap: 9px;
            line-height: 1.7;
          }

          .decode-footer i {
            display: none;
          }

          .decode-corner.top-left,
          .decode-corner.top-right {
            top: 64px;
          }
        }

        @media (max-width: 380px) {
          .decode-intro h2 {
            font-size: 3.2rem;
          }

          .protocol-title-row h3 {
            font-size: 3.5rem;
          }

          .protocol-visual {
            min-height: 380px;
          }

          .visual-orbit-one {
            width: 235px;
            height: 235px;
          }

          .visual-orbit-two {
            width: 300px;
            height: 300px;
          }

          .overview-title {
            font-size: 3.4rem;
          }

          .ingredient-row {
            grid-template-columns: 20px minmax(0, 1fr) auto 12px;
          }

          .ingredient-amount {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .selector-item,
          .ingredient-row,
          .protocol-nav-button > span {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}