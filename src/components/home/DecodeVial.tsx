"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

/* ================================================================
   TYPES
================================================================ */

type Product = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

type Ingredient = {
  name: string;
  amount?: string;
  detail?: string;
};

/* ================================================================
   PRODUCTS
================================================================ */

const PRODUCTS: Product[] = [
  {
    id: "glamour",
    number: "01",
    name: "GLAMOUR DRIP",
    category: "BEAUTY & RADIANCE",
    description:
      "A premium skin and beauty wellness protocol within the DRIPLABS Skin & Beauty pathway.",
    image: "/images/decode-vial/products/Glamour-drip.png",
  },

  {
    id: "renew",
    number: "02",
    name: "RENEW DRIP",
    category: "RENEWAL & RECOVERY",
    description:
      "A restorative wellness formulation within the DRIPLABS protocol collection.",
    image: "/images/decode-vial/products/Renew-drip.png",
  },

  {
    id: "radiance",
    number: "03",
    name: "RADIANCE DRIP",
    category: "SKIN & GLOW",
    description:
      "A considered wellness protocol designed around the DRIPLABS beauty and radiance pathway.",
    image: "/images/decode-vial/products/Radiance-Drip.png",
  },

  {
    id: "shrink",
    number: "04",
    name: "SHRINK DRIP",
    category: "WEIGHT MANAGEMENT",
    description:
      "A metabolic wellness protocol within the DRIPLABS protocol collection.",
    image: "/images/decode-vial/products/Shrink-drip.png",
  },

  {
    id: "restore",
    number: "05",
    name: "RESTORE DRIP",
    category: "HAIR & REGROWTH",
    description:
      "A restorative wellness protocol designed around the DRIPLABS beauty pathway.",
    image: "/images/decode-vial/products/Restore-drip.png",
  },

  {
    id: "bounce-back",
    number: "06",
    name: "BOUNCE BACK DRIP",
    category: "RECOVERY",
    description:
      "A recovery-focused protocol designed within the DRIPLABS wellness system.",
    image: "/images/decode-vial/products/Bounce-Back-Drip.png",
  },

  {
    id: "reactivate",
    number: "07",
    name: "REACTIVATE DRIP",
    category: "IMMUNITY SUPPORT",
    description:
      "A recovery-oriented wellness formulation within the DRIPLABS wellness system.",
    image: "/images/decode-vial/products/Reactivate-drip.png",
  },

  {
    id: "fit",
    number: "08",
    name: "FIT DRIP",
    category: "SPORTS RECOVERY",
    description:
      "A performance and recovery-focused protocol within the DRIPLABS system.",
    image: "/images/decode-vial/products/Fit-drip.png",
  },

  {
    id: "refuel",
    number: "09",
    name: "REFUEL DRIP",
    category: "ATHLETIC RECOVERY",
    description:
      "A performance-oriented formulation within the DRIPLABS recovery system.",
    image: "/images/decode-vial/products/Refuel-drip.png",
  },

  {
    id: "nadx",
    number: "10",
    name: "NADx BOOST DRIP",
    category: "LONGEVITY & NAD+",
    description:
      "A cellular wellness experience within the DRIPLABS Cellular & Longevity pathway.",
    image: "/images/decode-vial/products/NADx-Boost-Drip.png",
  },

  {
    id: "gut-plus",
    number: "11",
    name: "GUT+ DRIP",
    category: "DIGESTIVE & SYSTEMIC",
    description:
      "A digestive and systemic wellness protocol within the DRIPLABS protocol collection.",
    image: "/images/decode-vial/products/Gut-plus-drip.png",
  },

  {
    id: "rebuild",
    number: "12",
    name: "REBUILD DRIP",
    category: "RECOVERY & REPAIR",
    description:
      "A restorative formulation within the DRIPLABS recovery and wellness system.",
    image: "/images/decode-vial/products/Rebuild-drip.png",
  },

  {
    id: "move",
    number: "13",
    name: "MOVE DRIP",
    category: "MUSCULOSKELETAL",
    description:
      "A formulation designed around the DRIPLABS musculoskeletal wellness pathway.",
    image: "/images/decode-vial/products/Move-drip.png",
  },

  {
    id: "femme",
    number: "14",
    name: "FEMME DRIP",
    category: "WOMEN'S WELLNESS",
    description:
      "A women’s wellness formulation within the DRIPLABS protocol collection.",
    image: "/images/decode-vial/products/Femme-drip.png",
  },

  {
    id: "recover-plus",
    number: "15",
    name: "RECOVER+ DRIP",
    category: "RECOVERY",
    description:
      "An advanced recovery formulation within the DRIPLABS wellness system.",
    image: "/images/decode-vial/products/Recover-plus-drip.png",
  },

  {
    id: "performance-x",
    number: "16",
    name: "PERFORMANCE-X DRIP",
    category: "METABOLIC & PERFORMANCE",
    description:
      "A performance-focused formulation within the DRIPLABS metabolic and performance pathway.",
    image: "/images/decode-vial/products/Performance-X-drip.png",
  },

  {
    id: "methyblu",
    number: "17",
    name: "METHYBLU DRIP",
    category: "COGNITIVE & CELLULAR",
    description:
      "A specialised formulation within the DRIPLABS protocol collection.",
    image: "/images/decode-vial/products/Methyblu-drip.png",
  },
];

/* ================================================================
   FORMULATION DETAILS
================================================================ */

const INGREDIENTS: Record<string, Ingredient[]> = {
  glamour: [
    {
      name: "Glutathione",
      amount: "4.2 g",
      detail: "Primary active",
    },
    {
      name: "Vitamin C",
      amount: "6.3 g",
      detail: "Micronutrient support",
    },
    {
      name: "NAC",
      amount: "400 mg",
      detail: "Formulation component",
    },
    {
      name: "Multi-Trace Minerals",
      detail: "Trace mineral blend",
    },
    {
      name: "B12 + Folic Acid + Niacinamide",
      detail: "Vitamin complex",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Multivitamin Complex",
      detail: "Micronutrient complex",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Ringer-Lactate Class",
    },
  ],

  renew: [
    {
      name: "Glutathione",
      amount: "3.6 g",
      detail: "Primary active",
    },
    {
      name: "Vitamin C",
      amount: "6.2 g",
      detail: "Micronutrient support",
    },
    {
      name: "NAC",
      amount: "400 mg",
      detail: "Formulation component",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Zinc",
      detail: "Trace mineral",
    },
    {
      name: "Essential Amino Acid Blend",
      detail: "9 amino acids",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  radiance: [
    {
      name: "Glutathione",
      amount: "3 g",
      detail: "Primary active",
    },
    {
      name: "Vitamin C",
      amount: "4.7 g",
      detail: "Micronutrient support",
    },
    {
      name: "NAC",
      amount: "400 mg",
      detail: "Formulation component",
    },
    {
      name: "Zinc",
      detail: "Trace mineral",
    },
    {
      name: "B12 + Folic Acid + Niacinamide",
      detail: "Vitamin complex",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  shrink: [
    {
      name: "Glutathione",
      amount: "2.4 g",
      detail: "Primary active",
    },
    {
      name: "Vitamin C",
      amount: "3 g",
      detail: "Micronutrient support",
    },
    {
      name: "L-Carnitine",
      amount: "3 g",
      detail: "Formulation component",
    },
    {
      name: "Thiamine",
      amount: "100 mg",
      detail: "Vitamin component",
    },
    {
      name: "Magnesium Sulfate",
      amount: "500 mg",
      detail: "Mineral component",
    },
    {
      name: "NAC",
      amount: "200 mg",
      detail: "Formulation component",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  restore: [
    {
      name: "Glutathione",
      amount: "1.8 g",
      detail: "Primary active",
    },
    {
      name: "Vitamin C",
      amount: "1.5 g",
      detail: "Micronutrient support",
    },
    {
      name: "NAC",
      amount: "400 mg",
      detail: "Formulation component",
    },
    {
      name: "Multi-Trace Minerals",
      detail: "Trace mineral blend",
    },
    {
      name: "B12 + Folic Acid + Niacinamide",
      detail: "Vitamin complex",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Essential Amino Acid Blend",
      detail: "Amino acid blend",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  "bounce-back": [
    {
      name: "Glutathione",
      amount: "2.4 g",
      detail: "Primary active",
    },
    {
      name: "Pantoprazole",
      amount: "80 mg*",
      detail: "Clinically indicated",
    },
    {
      name: "Ondansetron",
      amount: "8 mg*",
      detail: "Clinically indicated",
    },
    {
      name: "Vitamin C",
      amount: "1.5 g",
      detail: "Micronutrient support",
    },
    {
      name: "NAC",
      amount: "200 mg",
      detail: "Formulation component",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  reactivate: [
    {
      name: "Glutathione",
      amount: "2.4 g",
      detail: "Primary active",
    },
    {
      name: "Vitamin C",
      amount: "3 g",
      detail: "Micronutrient support",
    },
    {
      name: "Thiamine",
      amount: "100 mg",
      detail: "Vitamin component",
    },
    {
      name: "NAC",
      amount: "400 mg",
      detail: "Formulation component",
    },
    {
      name: "Zinc",
      detail: "Trace mineral",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  fit: [
    {
      name: "Glutathione",
      amount: "2.4 g",
      detail: "Primary active",
    },
    {
      name: "Vitamin C",
      amount: "1.5 g",
      detail: "Micronutrient support",
    },
    {
      name: "L-Carnitine",
      amount: "1 g",
      detail: "Formulation component",
    },
    {
      name: "Magnesium Sulfate",
      amount: "500 mg",
      detail: "Mineral component",
    },
    {
      name: "NAC",
      amount: "400 mg",
      detail: "Formulation component",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Zinc",
      detail: "Trace mineral",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  refuel: [
    {
      name: "Glutathione",
      amount: "2.4 g",
      detail: "Primary active",
    },
    {
      name: "Vitamin C",
      amount: "1.5 g",
      detail: "Micronutrient support",
    },
    {
      name: "L-Alanyl-L-Glutamine",
      amount: "10 g",
      detail: "Amino acid component",
    },
    {
      name: "NAC",
      amount: "200 mg",
      detail: "Formulation component",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Multi-Trace Minerals",
      detail: "Trace mineral blend",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  nadx: [
    {
      name: "NAD+",
      amount: "500 mg",
      detail: "Primary active",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  "gut-plus": [
    {
      name: "L-Alanyl-L-Glutamine",
      amount: "10 g",
      detail: "Amino acid component",
    },
    {
      name: "NAC",
      amount: "400 mg",
      detail: "Formulation component",
    },
    {
      name: "GI-Targeted Amino Acid Blend",
      amount: "8% w/v",
      detail: "16 amino acids",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Zinc",
      detail: "Trace mineral",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  rebuild: [
    {
      name: "L-Alanyl-L-Glutamine",
      amount: "10 g",
      detail: "Amino acid component",
    },
    {
      name: "Vitamin C",
      amount: "3 g",
      detail: "Micronutrient support",
    },
    {
      name: "NAC",
      amount: "200 mg",
      detail: "Formulation component",
    },
    {
      name: "Essential Amino Acid Blend",
      detail: "Amino acid blend",
    },
    {
      name: "Multi-Trace Minerals",
      detail: "Trace mineral blend",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  move: [
    {
      name: "Magnesium Sulfate",
      amount: "1 g",
      detail: "Mineral component",
    },
    {
      name: "Vitamin C",
      amount: "3 g",
      detail: "Micronutrient support",
    },
    {
      name: "Vitamin D3",
      amount: "600,000 IU",
      detail: "Cholecalciferol, IM",
    },
    {
      name: "NAC",
      amount: "400 mg",
      detail: "Formulation component",
    },
    {
      name: "Multi-Trace Minerals",
      detail: "Trace mineral blend",
    },
    {
      name: "B12 + Folic Acid + Niacinamide",
      detail: "Vitamin complex",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  femme: [
    {
      name: "Iron",
      amount: "500 mg",
      detail: "Ferric Carboxymaltose",
    },
    {
      name: "Vitamin C",
      amount: "3 g",
      detail: "Micronutrient support",
    },
    {
      name: "NAC",
      amount: "200 mg",
      detail: "Formulation component",
    },
    {
      name: "B12 + Folic Acid + Niacinamide",
      detail: "Vitamin complex",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Multivitamin Complex",
      detail: "Micronutrient complex",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  "recover-plus": [
    {
      name: "Glutathione",
      amount: "2.4 g",
      detail: "Primary active",
    },
    {
      name: "Vitamin C",
      amount: "3 g",
      detail: "Micronutrient support",
    },
    {
      name: "NAC",
      amount: "200 mg",
      detail: "Formulation component",
    },
    {
      name: "Essential Amino Acid Blend",
      detail: "Amino acid blend",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Multivitamin Complex",
      detail: "Micronutrient complex",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  "performance-x": [
    {
      name: "L-Alanyl-L-Glutamine",
      amount: "20 g",
      detail: "Amino acid component",
    },
    {
      name: "Magnesium Sulfate",
      amount: "1.5 g",
      detail: "Mineral component",
    },
    {
      name: "Vitamin C",
      amount: "3 g",
      detail: "Micronutrient support",
    },
    {
      name: "L-Carnitine",
      amount: "2 g",
      detail: "Performance component",
    },
    {
      name: "NAC",
      amount: "400 mg",
      detail: "Formulation component",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Electrolyte Hydration Base",
      detail: "Hydration base",
    },
  ],

  methyblu: [
    {
      name: "Methylene Blue",
      amount: "200 mg",
      detail: "Primary active",
    },
    {
      name: "B12 + Folic Acid + Niacinamide",
      detail: "Vitamin complex",
    },
    {
      name: "B-Complex",
      detail: "Vitamin support",
    },
    {
      name: "Dextrose 5%",
      detail: "Carrier base",
    },
  ],
};

/* ================================================================
   IMAGE PRELOADING
================================================================ */

const imageCache = new Map<string, HTMLImageElement>();

const preloadImage = (src: string) => {
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src));
  }

  return new Promise<HTMLImageElement>((resolve) => {
    const img = new Image();

    img.decoding = "async";

    img.onload = async () => {
      try {
        if ("decode" in img) {
          await img.decode();
        }
      } catch {
        // Image can still be displayed if decode fails.
      }

      imageCache.set(src, img);
      resolve(img);
    };

    img.onerror = () => {
      resolve(img);
    };

    img.src = src;
  });
};

/* ================================================================
   COMPONENT
================================================================ */

export default function VialProductTransition() {
  const reducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);

  const [previousIndex, setPreviousIndex] =
    useState<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  const [showMore, setShowMore] = useState(false);

  const [imagesReady, setImagesReady] = useState(false);

  const active = PRODUCTS[activeIndex];

  const previous =
    previousIndex !== null
      ? PRODUCTS[previousIndex]
      : null;

  const activeIngredients = useMemo(
    () => INGREDIENTS[active.id] ?? [],
    [active.id],
  );

  const visibleIngredients =
    activeIngredients.slice(0, 4);

  const remainingIngredients =
    activeIngredients.slice(4);

  /* ================================================================
     PRELOAD ALL PROTOCOL IMAGES
  ================================================================ */

  useEffect(() => {
    let mounted = true;

    const loadImages = async () => {
      await Promise.all(
        PRODUCTS.map((product) =>
          preloadImage(product.image),
        ),
      );

      if (mounted) {
        setImagesReady(true);
      }
    };

    loadImages();

    return () => {
      mounted = false;
    };
  }, []);

  /* ================================================================
     AUTO SCROLL
  ================================================================ */

  useEffect(() => {
    if (
      reducedMotion ||
      isPaused ||
      !imagesReady
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setPreviousIndex(activeIndex);

      setActiveIndex((current) =>
        current === PRODUCTS.length - 1
          ? 0
          : current + 1,
      );
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    activeIndex,
    isPaused,
    reducedMotion,
    imagesReady,
  ]);

  /* ================================================================
     RESET FORMULATION EXPANSION
  ================================================================ */

  useEffect(() => {
    setShowMore(false);
  }, [activeIndex]);

  /* ================================================================
     CHANGE PROTOCOL
  ================================================================ */

  const changeProtocol = useCallback(
    (index: number) => {
      if (index === activeIndex) {
        return;
      }

      setPreviousIndex(activeIndex);

      setActiveIndex(index);

      setIsPaused(true);

      window.setTimeout(() => {
        setIsPaused(false);
      }, 5500);
    },
    [activeIndex],
  );

  /* ================================================================
     PREVIOUS
  ================================================================ */

  const goPrevious = () => {
    const index =
      activeIndex === 0
        ? PRODUCTS.length - 1
        : activeIndex - 1;

    changeProtocol(index);
  };

  /* ================================================================
     NEXT
  ================================================================ */

  const goNext = () => {
    const index =
      activeIndex === PRODUCTS.length - 1
        ? 0
        : activeIndex + 1;

    changeProtocol(index);
  };

  return (
    <section
      id="decode-a-vial"
      aria-label="Decode a Vial"
      className="relative overflow-hidden bg-[#020812] text-[#F7FAFF]"
      onMouseEnter={() => {
        if (!reducedMotion) {
          setIsPaused(true);
        }
      }}
      onMouseLeave={() => {
        if (!reducedMotion) {
          setIsPaused(false);
        }
      }}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(0,102,255,0.13),transparent_38%),linear-gradient(180deg,#020812_0%,#06152B_52%,#020812_100%)]" />

        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(140,203,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(140,203,255,0.035)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/[0.06] blur-[90px]" />
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}

      <div className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[#1683FF]" />

          <span className="text-[7px] font-medium tracking-[0.28em] text-[#8CCBFF]">
            DECODE A VIAL
          </span>
        </div>

        <span className="hidden text-[6px] tracking-[0.2em] text-white/25 sm:block">
          DRIPLABS® / FORMULATION ARCHITECTURE
        </span>
      </div>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="relative z-10 mx-auto flex max-w-[1500px] items-end justify-between px-5 pb-7 pt-11 sm:px-8 md:px-12 md:pb-9 md:pt-14 lg:px-16">
        <motion.div
          initial={
            reducedMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 16,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="mb-3 block text-[7px] font-medium tracking-[0.3em] text-[#4D9BFF]">
            INSIDE THE FORMULATION
          </span>

          <h2 className="max-w-[720px] font-[var(--font-heading)] text-[clamp(3rem,6vw,6rem)] font-light leading-[0.84] tracking-[-0.065em]">
            Know what goes
            <br />
            <em className="text-[#8CCBFF]">
              inside.
            </em>
          </h2>
        </motion.div>

        <p className="hidden max-w-[300px] pb-1 text-right text-[10px] leading-[1.7] text-white/40 md:block">
          Explore the DRIPLABS protocol collection through
          its formulation architecture.
        </p>
      </div>

      {/* =========================================================
          PROTOCOL COLLECTION
      ========================================================= */}

      <div className="relative z-20 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[6px] tracking-[0.22em] text-white/25">
            PROTOCOL COLLECTION · 17
          </span>

          <span className="font-mono text-[7px] tracking-[0.18em] text-[#4D9BFF]">
            {active.number} /{" "}
            {String(PRODUCTS.length).padStart(2, "0")}
          </span>
        </div>

        <div className="overflow-x-auto scrollbar-none">
          <div className="flex min-w-max border-y border-white/[0.08]">
            {PRODUCTS.map((product, index) => {
              const selected =
                index === activeIndex;

              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() =>
                    changeProtocol(index)
                  }
                  className={[
                    "group relative flex min-w-[90px] flex-col gap-1 px-3 py-3 text-left transition-colors duration-300",
                    selected
                      ? "bg-[#0066FF]/[0.07] text-[#8CCBFF]"
                      : "text-white/25 hover:bg-white/[0.025] hover:text-white/65",
                  ].join(" ")}
                >
                  <span className="font-mono text-[6px] tracking-[0.12em]">
                    {product.number}
                  </span>

                  <span className="truncate text-[7px] font-medium tracking-[0.03em]">
                    {product.name}
                  </span>

                  <span
                    className={[
                      "absolute bottom-0 left-0 h-px bg-[#1683FF] transition-all duration-300",
                      selected
                        ? "w-full"
                        : "w-0 group-hover:w-full",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN EXPERIENCE
      ========================================================= */}

      <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 gap-7 px-5 pb-6 pt-7 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-9 md:px-12 lg:px-16">
        {/* =====================================================
            IMAGE STAGE
        ===================================================== */}

        <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[480px]">
          <div className="absolute inset-0 overflow-hidden border border-white/[0.07] bg-[#01050B]/60">
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1683FF]/15 sm:h-[330px] sm:w-[330px]" />

            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8CCBFF]/[0.07] sm:h-[430px] sm:w-[430px]" />

            <div className="absolute left-0 right-0 top-1/2 h-px bg-[#8CCBFF]/[0.05]" />

            <div className="absolute bottom-0 left-1/2 top-0 w-px bg-[#8CCBFF]/[0.05]" />
          </div>

          {/* Protocol number */}

          <div className="absolute left-5 top-5 z-30">
            <span className="block text-[6px] tracking-[0.2em] text-white/25">
              PROTOCOL
            </span>

            <strong className="font-[var(--font-heading)] text-[4.5rem] font-light leading-none tracking-[-0.06em] text-white/80">
              {active.number}
            </strong>
          </div>

          {/* Category */}

          <div className="absolute right-5 top-6 z-30 max-w-[150px] text-right">
            <span className="text-[6px] tracking-[0.2em] text-[#4D9BFF]">
              {active.category}
            </span>
          </div>

          {/* ===================================================
              PERFORMANCE OPTIMIZED IMAGE
          =================================================== */}

          {previous && (
            <div
              className="decode-vial-image-layer pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
              aria-hidden="true"
            >
              <img
                src={previous.image}
                alt=""
                draggable={false}
                className="h-[285px] w-auto max-w-[58%] select-none object-contain sm:h-[345px]"
              />
            </div>
          )}

          <motion.div
            key={`active-${active.id}`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.38,
              ease: "easeOut",
            }}
            className="decode-vial-image-layer absolute inset-0 z-20 flex items-center justify-center"
          >
            <img
              src={active.image}
              alt={active.name}
              draggable={false}
              decoding="async"
              className="h-[285px] w-auto max-w-[58%] select-none object-contain sm:h-[345px]"
            />
          </motion.div>

          {/* ===================================================
              INGREDIENT POP-OUTS
          =================================================== */}

          {visibleIngredients.map(
            (ingredient, index) => {
              const positions = [
                "left-[4%] top-[27%]",
                "right-[4%] top-[31%]",
                "left-[7%] bottom-[22%]",
                "right-[7%] bottom-[20%]",
              ];

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${active.id}-${ingredient.name}`}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: reducedMotion
                      ? 0.01
                      : 0.3,
                    delay: reducedMotion
                      ? 0
                      : index * 0.045,
                  }}
                  className={`absolute z-30 ${positions[index]} max-w-[145px]`}
                >
                  <div
                    className={[
                      "flex items-start gap-2",
                      !isLeft
                        ? "flex-row-reverse text-right"
                        : "",
                    ].join(" ")}
                  >
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1683FF] shadow-[0_0_10px_rgba(22,131,255,0.7)]" />

                    <div>
                      <span className="block text-[7px] font-medium uppercase tracking-[0.1em] text-white/75">
                        {ingredient.name}
                      </span>

                      {ingredient.amount && (
                        <span className="mt-1 block font-mono text-[9px] text-[#8CCBFF]">
                          {ingredient.amount}
                        </span>
                      )}

                      {ingredient.detail && (
                        <span className="mt-0.5 block text-[6px] leading-[1.4] text-white/30">
                          {ingredient.detail}
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className={[
                      "absolute top-[7px] h-px w-[40px] bg-[#1683FF]/30",
                      isLeft
                        ? "left-full ml-2"
                        : "right-full mr-2",
                    ].join(" ")}
                  />
                </motion.div>
              );
            },
          )}

          <div className="absolute bottom-5 left-5 z-30">
            <span className="text-[6px] tracking-[0.2em] text-white/25">
              FORMULATION
            </span>
          </div>

          <div className="absolute bottom-5 right-5 z-30">
            <span className="text-[6px] tracking-[0.2em] text-[#4D9BFF]/60">
              PHYSICIAN-DIRECTED
            </span>
          </div>
        </div>

        {/* =====================================================
            PRODUCT INFORMATION
        ===================================================== */}

        <div className="relative md:pr-6">
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: reducedMotion
                  ? 0.01
                  : 0.25,
              }}
            >
              <span className="text-[7px] tracking-[0.25em] text-[#4D9BFF]">
                {active.category}
              </span>

              <h3 className="mt-3 font-[var(--font-heading)] text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.82] tracking-[-0.065em] text-white">
                {active.name}
              </h3>

              <div className="mt-5 h-px w-10 bg-[#1683FF]" />

              <p className="mt-5 max-w-[430px] text-[10px] leading-[1.75] text-white/40 sm:text-[11px]">
                {active.description}
              </p>

              {/* =================================================
                  FORMULATION DETAILS
              ================================================= */}

              <div className="mt-7 max-w-[430px] border-y border-white/[0.08]">
                {/* Header */}

                <div className="flex items-center justify-between py-4">
                  <span className="text-[7px] font-medium tracking-[0.22em] text-[#4D9BFF]">
                    FORMULATION DETAILS
                  </span>

                  <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                    {activeIngredients.length > 0
                      ? `${activeIngredients.length} COMPONENTS`
                      : "PROTOCOL DETAILS"}
                  </span>
                </div>

                {/* Primary formulation items */}

                {activeIngredients.length > 0 ? (
                  <div className="grid grid-cols-1 border-t border-white/[0.08] sm:grid-cols-2">
                    {visibleIngredients.map(
                      (ingredient, index) => (
                        <motion.div
                          key={`${active.id}-detail-${ingredient.name}`}
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                          transition={{
                            duration: reducedMotion
                              ? 0.01
                              : 0.25,
                            delay: reducedMotion
                              ? 0
                              : index * 0.04,
                          }}
                          className={[
                            "group relative py-3.5 pr-4",
                            index < 2
                              ? "border-b border-white/[0.06]"
                              : "",
                            index % 2 === 0
                              ? "sm:border-r sm:border-white/[0.06]"
                              : "",
                            index >= 2
                              ? "sm:border-t sm:border-white/[0.06]"
                              : "",
                          ].join(" ")}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <span className="block text-[7px] leading-[1.4] text-white/65 transition-colors duration-200 group-hover:text-white/90">
                                {ingredient.name}
                              </span>

                              {ingredient.detail && (
                                <span className="mt-1 block text-[6px] leading-[1.4] text-white/25">
                                  {ingredient.detail}
                                </span>
                              )}
                            </div>

                            {ingredient.amount && (
                              <span className="shrink-0 font-mono text-[7px] text-[#8CCBFF]">
                                {ingredient.amount}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>
                ) : (
                  <div className="border-t border-white/[0.08] py-5">
                    <span className="text-[7px] leading-[1.6] text-white/30">
                      Formulation details are available
                      through the physician-directed
                      protocol consultation.
                    </span>
                  </div>
                )}

                {/* =================================================
                    REMAINING FORMULATION DETAILS
                ================================================= */}

                {remainingIngredients.length > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setShowMore(
                        (current) => !current,
                      )
                    }
                    className="group flex w-full items-center justify-between border-t border-white/[0.08] py-3.5 text-left"
                  >
                    <span className="text-[7px] font-medium uppercase tracking-[0.16em] text-white/35 transition-colors duration-200 group-hover:text-white/70">
                      {showMore
                        ? "Hide remaining details"
                        : `+ ${remainingIngredients.length} more formulation components`}
                    </span>

                    <span className="text-[13px] font-light text-[#4D9BFF]">
                      {showMore ? "−" : "+"}
                    </span>
                  </button>
                )}

                <AnimatePresence initial={false}>
                  {showMore &&
                    remainingIngredients.length >
                      0 && (
                      <motion.div
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
                          duration: reducedMotion
                            ? 0.01
                            : 0.25,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 border-t border-white/[0.08] sm:grid-cols-2">
                          {remainingIngredients.map(
                            (ingredient) => (
                              <div
                                key={`${active.id}-more-${ingredient.name}`}
                                className="border-b border-white/[0.06] py-3 pr-4"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <span className="text-[7px] leading-[1.4] text-white/55">
                                    {ingredient.name}
                                  </span>

                                  {ingredient.amount && (
                                    <span className="shrink-0 font-mono text-[7px] text-[#8CCBFF]/70">
                                      {ingredient.amount}
                                    </span>
                                  )}
                                </div>

                                {ingredient.detail && (
                                  <span className="mt-1 block text-[6px] text-white/25">
                                    {ingredient.detail}
                                  </span>
                                )}
                              </div>
                            ),
                          )}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>

              {/* =================================================
                  CONTROLS
              ================================================= */}

              <div className="mt-6 flex max-w-[430px] items-center justify-between">
                <button
                  type="button"
                  onClick={goPrevious}
                  className="text-[7px] font-medium uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-white"
                >
                  ← Previous
                </button>

                <span className="font-mono text-[6px] tracking-[0.18em] text-white/20">
                  {isPaused ? "PAUSED" : "AUTO"}
                </span>

                <button
                  type="button"
                  onClick={goNext}
                  className="group flex items-center gap-2 text-[7px] font-medium uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#4D9BFF]"
                >
                  <span>Next</span>

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =========================================================
          AUTO PROGRESS
      ========================================================= */}

      {!reducedMotion && (
        <div className="relative z-20 mx-auto h-px max-w-[1500px] overflow-hidden bg-white/[0.07]">
          {!isPaused && imagesReady && (
            <motion.div
              key={active.id}
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
              className="h-full origin-left bg-[#1683FF]"
            />
          )}
        </div>
      )}

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <div className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8 md:px-12 lg:px-16">
        <span className="text-[6px] tracking-[0.18em] text-white/20">
          PHYSICIAN-DIRECTED
        </span>

        <span className="hidden h-px w-12 bg-white/[0.08] sm:block" />

        <span className="text-[6px] tracking-[0.18em] text-white/20">
          DRIPLABS® PROTOCOL SYSTEM
        </span>
      </div>

      {/* =========================================================
          CORNER DETAILS
      ========================================================= */}

      <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-[#1683FF]/25" />

      <div className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t border-[#1683FF]/25" />

      <div className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#1683FF]/25" />

      <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[#1683FF]/25" />

      {/* =========================================================
          PERFORMANCE CSS
      ========================================================= */}

      <style jsx>{`
        .scrollbar-none {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }

        .decode-vial-image-layer {
          contain: layout paint;
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: opacity;
        }

        .decode-vial-image-layer img {
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: opacity;
        }

        @media (max-width: 767px) {
          .decode-vial-image-layer img {
            max-width: 54%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .decode-vial-image-layer,
          .decode-vial-image-layer img {
            will-change: auto;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}