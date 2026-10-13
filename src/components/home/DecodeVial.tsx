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



      amount: "4200 mg",



      detail: "Primary active",



    },



    {



      name: "Vitamin C",



      amount: "6300 mg",



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



      amount: "3600 mg",



      detail: "Primary active",



    },



    {



      name: "Vitamin C",



      amount: "6200 mg",



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



      amount: "3000 mg",



      detail: "Primary active",



    },



    {



      name: "Vitamin C",



      amount: "4700 mg",



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



      amount: "2400 mg",



      detail: "Primary active",



    },



    {



      name: "Vitamin C",



      amount: "3000 mg",



      detail: "Micronutrient support",



    },



    {



      name: "L-Carnitine",



      amount: "3000 mg",



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



      amount: "1800 mg",



      detail: "Primary active",



    },



    {



      name: "Vitamin C",



      amount: "1500 mg",



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



      amount: "2400 mg",



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



      amount: "1500 mg",



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



      amount: "2400 mg",



      detail: "Primary active",



    },



    {



      name: "Vitamin C",



      amount: "3000 mg",



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



      amount: "2400 mg",



      detail: "Primary active",



    },



    {



      name: "Vitamin C",



      amount: "1500 mg",



      detail: "Micronutrient support",



    },



    {



      name: "L-Carnitine",



      amount: "1000 mg",



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



      amount: "2400 mg",



      detail: "Primary active",



    },



    {



      name: "Vitamin C",



      amount: "1500 mg",



      detail: "Micronutrient support",



    },



    {



      name: "L-Alanyl-L-Glutamine",



      amount: "10000 mg",



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



      amount: "10000 mg",



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



      amount: "10000 mg",



      detail: "Amino acid component",



    },



    {



      name: "Vitamin C",



      amount: "3000 mg",



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



      amount: "1000 mg",



      detail: "Mineral component",



    },



    {



      name: "Vitamin C",



      amount: "3000 mg",



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



      amount: "3000 mg",



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



      amount: "2400 mg",



      detail: "Primary active",



    },



    {



      name: "Vitamin C",



      amount: "3000 mg",



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



      amount: "20000 mg",



      detail: "Amino acid component",



    },



    {



      name: "Magnesium Sulfate",



      amount: "1500 mg",



      detail: "Mineral component",



    },



    {



      name: "Vitamin C",



      amount: "3000 mg",



      detail: "Micronutrient support",



    },



    {



      name: "L-Carnitine",



      amount: "2000 mg",



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



    }, 6000);







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
      className="relative h-auto overflow-hidden bg-[#F3EDE2] text-[#171411] lg:h-[calc(100svh-88px)] lg:min-h-[680px]"
      onMouseEnter={() => {
        if (!reducedMotion) setIsPaused(true);
      }}
      onMouseLeave={() => {
        if (!reducedMotion) setIsPaused(false);
      }}
    >
      {/* =========================================================
          WARM IVORY BACKGROUND
      ========================================================= */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.48]"
          style={{
            backgroundImage:
              "url('/images/decode-vial/protocol-observatory-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#F3EDE2]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.72),transparent_46%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(120,82,43,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(120,82,43,0.25)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* =========================================================
          COMPACT CONTENT FRAME
      ========================================================= */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1900px] flex-col px-5 py-5 sm:px-7 lg:px-10 lg:py-6 xl:px-14">
        {/* HEADER */}
        <div className="flex shrink-0 items-start justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-9 bg-[#6E4927]" />
              <span className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#6E4927] sm:text-[9px]">
                PROTOCOL COLLECTION · 19
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-[clamp(3rem,5.4vw,5.8rem)] font-semibold leading-[0.78] tracking-[-0.065em] text-[#15120F]">
              Know what goes
              <br />
              <em className="font-semibold not-italic text-[#A16F39]">
                inside.
              </em>
            </h2>
          </div>

          <div className="hidden max-w-[250px] pt-10 text-right md:block">
            <p className="text-[9px] font-semibold uppercase leading-[1.55] tracking-[0.18em] text-[#5F5144]">
              Explore the DRIPLABS protocol collection through its formulation architecture.
            </p>
            <div className="mt-4 flex items-center justify-end gap-2">
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#8C6032]">
                {active.number} / {String(PRODUCTS.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous protocol"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#6E4927]/20 bg-white/45 text-[#5F5144] transition hover:bg-white hover:text-[#6E4927]"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next protocol"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#6E4927]/20 bg-white/45 text-[#5F5144] transition hover:bg-white hover:text-[#6E4927]"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            PROTOCOL TILES
        ========================================================= */}
        <div className="mt-5 shrink-0 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex min-w-max gap-2">
            {PRODUCTS.map((product, index) => {
              const selected = index === activeIndex;

              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => changeProtocol(index)}
                  aria-current={selected ? "true" : undefined}
                  className={`group relative flex h-[66px] w-[105px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[10px] border px-2 transition-all duration-500 ease-out sm:h-[72px] sm:w-[112px] ${
                    selected
                      ? "border-[#B88952] bg-[#E9D6B8]/75 shadow-[0_10px_28px_rgba(126,86,43,0.14)]"
                      : "border-[#7A5A3A]/10 bg-white/45 hover:border-[#B88952]/40 hover:bg-white/70"
                  }`}
                >
                  <img
                    src={product.image}
                    alt=""
                    aria-hidden="true"
                    className="mb-1 h-7 w-9 object-contain transition-transform duration-500 ease-out group-hover:scale-105 sm:h-8"
                  />
                  <span className="font-mono text-[6px] tracking-[0.15em] text-[#6E4927]/70">
                    {product.number}
                  </span>
                  <span className="max-w-full truncate text-[7px] font-bold uppercase tracking-[0.02em] text-[#2B2118]">
                    {product.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-opacity ${
                      selected ? "bg-[#A16F39] opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            MAIN THREE-COLUMN EXPERIENCE
        ========================================================= */}
        <div className="mt-4 grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-[0.78fr_1.34fr_1fr]">
          {/* LEFT PROTOCOL CARD */}
          <div className="relative min-h-[270px] overflow-hidden rounded-[18px] border border-[#6E4927]/12 bg-white/48 p-5 shadow-[0_18px_55px_rgba(92,63,34,0.08)] backdrop-blur-sm sm:p-6 lg:min-h-0">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#765436]">
                  PROTOCOL
                </span>
                <div className="mt-1 font-[var(--font-heading)] text-[4.2rem] font-light leading-none tracking-[-0.06em] text-[#191512]">
                  {active.number}
                </div>
              </div>
              <span className="mt-1 rounded-full border border-[#A16F39]/25 bg-[#E8D5B8]/50 px-2 py-1 text-[6px] font-bold uppercase tracking-[0.18em] text-[#79542F]">
                {active.category}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {visibleIngredients.slice(0, 2).map((ingredient) => (
                <div key={ingredient.name} className="border-b border-[#6E4927]/10 pb-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#211A14]">
                      <span className="h-2 w-2 rounded-full bg-[#B88952]" />
                      {ingredient.name}
                    </span>
                    {ingredient.amount && (
                      <span className="font-mono text-[8px] font-bold text-[#8B5F31]">
                        {ingredient.amount}
                      </span>
                    )}
                  </div>
                  {ingredient.detail && (
                    <p className="mt-1 pl-4 text-[7px] text-[#6E6255]">
                      {ingredient.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[6px] font-semibold uppercase tracking-[0.2em] text-[#765436] sm:left-6 sm:bottom-6">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#A16F39]/25 bg-white/55">
                ◇
              </span>
              PHYSICIAN-DIRECTED FORMULATION
            </div>
          </div>

          {/* CENTER VIAL STAGE */}
          <div className="relative min-h-[340px] overflow-hidden rounded-[18px] border border-[#6E4927]/10 bg-white/38 shadow-[0_22px_70px_rgba(92,63,34,0.09)] backdrop-blur-sm lg:min-h-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.85),transparent_48%)]" />
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B88952]/15" />
            <div className="absolute left-1/2 top-1/2 h-[82%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#B88952]/10" />

            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={active.id}
                initial={
                  reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 0.985, y: 5, filter: "blur(4px)" }
                }
                animate={
                  reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
                }
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 1.01, y: -4, filter: "blur(4px)" }
                }
                transition={{
                  duration: reducedMotion ? 0.01 : 0.68,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 z-20 flex items-center justify-center will-change-transform will-change-opacity"
              >
                <img
                  src={active.image}
                  alt={active.name}
                  draggable={false}
                  className="max-h-[68%] w-auto max-w-[65%] select-none object-contain drop-shadow-[0_25px_35px_rgba(70,45,25,0.20)]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Ingredient callouts */}
            <AnimatePresence mode="sync" initial={false}>
              {visibleIngredients.slice(2, 4).map((ingredient, index) => {
              const right = index === 0;
              return (
                <motion.div
                  key={`${active.id}-callout-${ingredient.name}`}
                  initial={
                    reducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, x: right ? 8 : -8, filter: "blur(3px)" }
                  }
                  animate={
                    reducedMotion
                      ? { opacity: 1 }
                      : { opacity: 1, x: 0, filter: "blur(0px)" }
                  }
                  exit={
                    reducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: right ? -6 : 6, filter: "blur(3px)" }
                  }
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.55,
                    delay: reducedMotion ? 0 : 0.08 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute z-30 top-[25%] max-w-[145px] ${right ? "right-[5%] text-left" : "left-[5%] text-right"}`}
                >
                  <div className={`flex items-start gap-2 ${right ? "" : "flex-row-reverse"}`}>
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#B88952] shadow-[0_0_12px_rgba(184,137,82,0.45)]" />
                    <div>
                      <span className="block text-[7px] font-bold uppercase tracking-[0.08em] text-[#2B2118]">
                        {ingredient.name}
                      </span>
                      {ingredient.amount && (
                        <span className="mt-1 block font-mono text-[8px] font-bold text-[#8B5F31]">
                          {ingredient.amount}
                        </span>
                      )}
                      {ingredient.detail && (
                        <span className="mt-0.5 block text-[6px] leading-[1.4] text-[#75695D]">
                          {ingredient.detail}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
              })}
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full border border-[#A16F39]/20 bg-white/55 px-4 py-1.5 text-[7px] font-bold uppercase tracking-[0.22em] text-[#6E4927] backdrop-blur-md">
              {active.name}
            </div>
          </div>

          {/* RIGHT INFORMATION */}
          <div className="relative min-h-[300px] lg:min-h-0 lg:pt-2">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={active.id}
                initial={
                  reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 6, filter: "blur(3px)" }
                }
                animate={
                  reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, filter: "blur(0px)" }
                }
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -5, filter: "blur(3px)" }
                }
                transition={{
                  duration: reducedMotion ? 0.01 : 0.62,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="will-change-transform will-change-opacity"
              >
                <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8B5F31]">
                  {active.category}
                </span>

                <h3 className="mt-2 font-[var(--font-heading)] text-[clamp(2.7rem,4.1vw,4.8rem)] font-semibold leading-[0.78] tracking-[-0.06em] text-[#15120F]">
                  {active.name.split(" DRIP")[0]}
                  <span className="text-[#A16F39]"> DRIP</span>
                </h3>

                <div className="mt-4 h-px w-10 bg-[#A16F39]" />

                <p className="mt-3 max-w-[500px] text-[9px] font-semibold leading-[1.65] text-[#51463B] sm:text-[10px]">
                  {active.description}
                </p>

                <div className="mt-4 overflow-hidden rounded-[15px] border border-[#6E4927]/12 bg-white/50 shadow-[0_15px_45px_rgba(92,63,34,0.06)]">
                  <div className="flex items-center justify-between border-b border-[#6E4927]/10 px-4 py-3">
                    <span className="text-[7px] font-bold uppercase tracking-[0.24em] text-[#765436]">
                      FORMULATION DETAILS
                    </span>
                    <span className="font-mono text-[6px] font-bold tracking-[0.14em] text-[#806B55]">
                      {activeIngredients.length} COMPONENTS
                    </span>
                  </div>

                  <div className="grid grid-cols-2">
                    {visibleIngredients.map((ingredient, index) => (
                      <div
                        key={`${active.id}-detail-${ingredient.name}`}
                        className={`px-4 py-3 ${index % 2 === 0 ? "border-r border-[#6E4927]/10" : ""} ${index > 1 ? "border-t border-[#6E4927]/10" : ""}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="block text-[7px] font-bold leading-[1.35] text-[#2B2118]">
                              {ingredient.name}
                            </span>
                            {ingredient.detail && (
                              <span className="mt-1 block text-[6px] leading-[1.35] text-[#76695D]">
                                {ingredient.detail}
                              </span>
                            )}
                          </div>
                          {ingredient.amount && (
                            <span className="shrink-0 font-mono text-[7px] font-bold text-[#8B5F31]">
                              {ingredient.amount}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {remainingIngredients.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowMore((current) => !current)}
                      className="flex w-full items-center justify-between border-t border-[#6E4927]/10 px-4 py-3 text-left transition hover:bg-[#E8D5B8]/25"
                    >
                      <span className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#765436]">
                        {showMore
                          ? "Hide remaining details"
                          : `+ ${remainingIngredients.length} more formulation components`}
                      </span>
                      <span className="text-[13px] font-light text-[#A16F39]">
                        {showMore ? "−" : "+"}
                      </span>
                    </button>
                  )}

                  <AnimatePresence initial={false}>
                    {showMore && remainingIngredients.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reducedMotion ? 0.01 : 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 border-t border-[#6E4927]/10">
                          {remainingIngredients.map((ingredient) => (
                            <div key={`${active.id}-more-${ingredient.name}`} className="border-b border-[#6E4927]/10 px-4 py-3">
                              <div className="flex items-start justify-between gap-2">
                                <span className="text-[7px] font-semibold text-[#51463B]">
                                  {ingredient.name}
                                </span>
                                {ingredient.amount && (
                                  <span className="font-mono text-[7px] text-[#8B5F31]">
                                    {ingredient.amount}
                                  </span>
                                )}
                              </div>
                              {ingredient.detail && (
                                <span className="mt-1 block text-[6px] text-[#76695D]">
                                  {ingredient.detail}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goPrevious}
                    className="group flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.2em] text-[#67584A] transition hover:text-[#8B5F31]"
                  >
                    <span className="transition-transform group-hover:-translate-x-1">←</span>
                    Previous
                  </button>

                  <span className="font-mono text-[7px] tracking-[0.2em] text-[#8B5F31]">
                    {isPaused ? "PAUSED" : "AUTO"}
                  </span>

                  <button
                    type="button"
                    onClick={goNext}
                    className="group flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.2em] text-[#67584A] transition hover:text-[#8B5F31]"
                  >
                    Next
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE NAV */}
        <div className="mt-3 flex shrink-0 items-center justify-between border-t border-[#6E4927]/10 pt-3 md:hidden">
          <span className="font-mono text-[7px] tracking-[0.18em] text-[#8B5F31]">
            {active.number} / {String(PRODUCTS.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous protocol"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#6E4927]/20 bg-white/50 text-[#67584A]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next protocol"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#6E4927]/20 bg-white/50 text-[#67584A]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




