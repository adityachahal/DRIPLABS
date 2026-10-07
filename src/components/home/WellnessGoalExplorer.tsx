"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type Category =
  | "Skin & Beauty"
  | "Cellular & Longevity"
  | "Metabolic & Performance"
  | "Digestive & Systemic"
  | "Women's Wellness"
  | "Recovery & Immune"
  | "Cognitive & Neuro"
  | "Musculoskeletal";

type Protocol = {
  id: string;
  name: string;
  family: Category;
  eyebrow: string;
  description: string;
  duration: string;
  image: string;
  href: string;
};

/* =========================================================
   WELLNESS FAMILIES
========================================================= */

const categories: Category[] = [
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
   PROTOCOL DATA
========================================================= */

const protocols: Protocol[] = [
  /* =======================================================
     SKIN & BEAUTY
  ======================================================= */

  {
    id: "glamour",
    name: "GLAMOUR",
    family: "Skin & Beauty",
    eyebrow: "SKIN & BEAUTY",
    description:
      "Antioxidant + cellular nourishment for radiant skin.",
    duration: "45–60 min",
    image: "/images/protocols/glamour.png",
    href: "/protocols/glamour",
  },

  {
    id: "radiance",
    name: "RADIANCE",
    family: "Skin & Beauty",
    eyebrow: "SKIN & BEAUTY",
    description:
      "Energy, metabolism and vitality support.",
    duration: "45–60 min",
    image: "/images/protocols/radiance.png",
    href: "/protocols/radiance",
  },

  {
    id: "restore",
    name: "RESTORE",
    family: "Skin & Beauty",
    eyebrow: "RECOVERY",
    description:
      "Immune support + cellular repair for total recovery.",
    duration: "45–60 min",
    image: "/images/protocols/restore.png",
    href: "/protocols/restore",
  },

  /* =======================================================
     CELLULAR & LONGEVITY
  ======================================================= */

  {
    id: "renew",
    name: "RENEW",
    family: "Cellular & Longevity",
    eyebrow: "CELLULAR",
    description:
      "Cellular renewal and longevity-focused nutritional support.",
    duration: "45–60 min",
    image: "/images/protocols/renew.webp",
    href: "/protocols/renew",
  },

  {
    id: "nadex",
    name: "NADEX",
    family: "Cellular & Longevity",
    eyebrow: "NADx",
    description:
      "NAD+-pathway nutritional support within a physician-led journey.",
    duration: "3–4 hrs",
    image: "/images/protocols/nadex.webp",
    href: "/protocols/nadex",
  },

  {
    id: "methylblu",
    name: "METHYBLU",
    family: "Cellular & Longevity",
    eyebrow: "CELLULAR",
    description:
      "Methylation and cellular nutritional support.",
    duration: "45–60 min",
    image: "/images/protocols/methylblu.webp",
    href: "/protocols/methylblu",
  },

  {
    id: "apex",
    name: "APEX",
    family: "Cellular & Longevity",
    eyebrow: "LONGEVITY",
    description:
      "NAD+-pathway and cellular-longevity wellness support.",
    duration: "45–60 min",
    image: "/images/protocols/apex.webp",
    href: "/protocols/apex",
  },

  /* =======================================================
     METABOLIC & PERFORMANCE
  ======================================================= */

  {
    id: "shrink",
    name: "SHRINK",
    family: "Metabolic & Performance",
    eyebrow: "METABOLIC",
    description:
      "Metabolic and nutritional wellness support.",
    duration: "45–60 min",
    image: "/images/protocols/shrink.webp",
    href: "/protocols/shrink",
  },

  {
    id: "refuel",
    name: "REFUEL",
    family: "Metabolic & Performance",
    eyebrow: "ENERGY",
    description:
      "Nutritional support for energy and active lifestyles.",
    duration: "45–60 min",
    image: "/images/protocols/refuel.webp",
    href: "/protocols/refuel",
  },

  {
    id: "fit",
    name: "FIT",
    family: "Metabolic & Performance",
    eyebrow: "PERFORMANCE",
    description:
      "Support for active lifestyles and metabolic wellness.",
    duration: "45–60 min",
    image: "/images/protocols/fit.webp",
    href: "/protocols/fit",
  },

  {
    id: "rebuild",
    name: "REBUILD",
    family: "Metabolic & Performance",
    eyebrow: "REBUILD",
    description:
      "Nutritional support for active recovery and rebuilding.",
    duration: "45–60 min",
    image: "/images/protocols/rebuild.webp",
    href: "/protocols/rebuild",
  },

  {
    id: "performance-x",
    name: "PERFORMANCE X",
    family: "Metabolic & Performance",
    eyebrow: "PERFORMANCE",
    description:
      "Advanced nutritional support for performance-focused journeys.",
    duration: "45–60 min",
    image: "/images/protocols/performance-x.webp",
    href: "/protocols/performance-x",
  },

  /* =======================================================
     DIGESTIVE & SYSTEMIC
  ======================================================= */

  {
    id: "gut-plus",
    name: "GUT+",
    family: "Digestive & Systemic",
    eyebrow: "DIGESTIVE",
    description:
      "Gut-focused amino-acid and micronutrient support.",
    duration: "45–60 min",
    image: "/images/protocols/gut-plus.webp",
    href: "/protocols/gut-plus",
  },

  /* =======================================================
     WOMEN'S WELLNESS
  ======================================================= */

  {
    id: "femme",
    name: "FEMME",
    family: "Women's Wellness",
    eyebrow: "WOMEN'S WELLNESS",
    description:
      "Nutritional support designed around women's wellness.",
    duration: "45–60 min",
    image: "/images/protocols/femme.webp",
    href: "/protocols/femme",
  },

  /* =======================================================
     RECOVERY & IMMUNE
  ======================================================= */

  {
    id: "reactivate",
    name: "REACTIVATE",
    family: "Recovery & Immune",
    eyebrow: "RECOVERY",
    description:
      "Rehydration and nutritional support for recovery.",
    duration: "45–60 min",
    image: "/images/protocols/reactivate.webp",
    href: "/protocols/reactivate",
  },

  {
    id: "bounce-back",
    name: "BOUNCE BACK",
    family: "Recovery & Immune",
    eyebrow: "RECOVERY",
    description:
      "Support for hydration and post-exertion recovery.",
    duration: "45–60 min",
    image: "/images/protocols/bounce-back.webp",
    href: "/protocols/bounce-back",
  },

  {
    id: "recover-plus",
    name: "RECOVER+",
    family: "Recovery & Immune",
    eyebrow: "RECOVERY",
    description:
      "Systemic nutritional support for recovery journeys.",
    duration: "45–60 min",
    image: "/images/protocols/recover-plus.webp",
    href: "/protocols/recover-plus",
  },

  /* =======================================================
     COGNITIVE & NEURO
  ======================================================= */

  {
    id: "focus",
    name: "FOCUS",
    family: "Cognitive & Neuro",
    eyebrow: "COGNITIVE",
    description:
      "Cognitive and neuronal nutritional wellness support.",
    duration: "45–60 min",
    image: "/images/protocols/focus.webp",
    href: "/protocols/focus",
  },

  /* =======================================================
     MUSCULOSKELETAL
  ======================================================= */

  {
    id: "move",
    name: "MOVE",
    family: "Musculoskeletal",
    eyebrow: "MUSCULOSKELETAL",
    description:
      "Bone, muscle and connective-tissue nutritional support.",
    duration: "45–60 min",
    image: "/images/protocols/move.webp",
    href: "/protocols/move",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WhatAreYouLookingFor() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Skin & Beauty");

  const [direction, setDirection] =
    useState<1 | -1>(1);

  const filteredProtocols = useMemo(() => {
    return protocols.filter(
      (protocol) =>
        protocol.family === activeCategory,
    );
  }, [activeCategory]);

  const handleCategoryChange = (
    category: Category,
  ) => {
    const currentIndex =
      categories.indexOf(activeCategory);

    const nextIndex =
      categories.indexOf(category);

    setDirection(
      nextIndex >= currentIndex
        ? 1
        : -1,
    );

    setActiveCategory(category);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#020914]
        text-white
      "
    >
      {/* ===================================================
          SUBTLE BACKGROUND GRID
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.055]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ===================================================
          BLUE ATMOSPHERIC GLOW
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[420px]
          w-[720px]
          -translate-x-1/2
          rounded-full
          bg-[#006BFF]/[0.055]
          blur-[120px]
        "
      />

      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1800px]
          px-4
          py-7
          sm:px-6
          sm:py-8
          lg:px-10
          lg:py-9
          xl:px-14
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <p
              className="
                mb-2
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#1683FF]
              "
            >
              DRIPLABS
            </p>

            <h2
              className="
                font-[var(--font-heading)]
                text-[clamp(2rem,3.2vw,3.4rem)]
                font-light
                leading-[0.9]
                tracking-[-0.045em]
                text-white
              "
            >
              What are you looking for?
            </h2>

            <p
              className="
                mt-2
                max-w-[560px]
                text-[11px]
                leading-5
                text-white/45
                sm:text-[12px]
              "
            >
              Choose your wellness goal and explore
              our curated protocols.
            </p>
          </div>

          <Link
            href="/protocols"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              border-b
              border-white/20
              pb-1
              text-[8px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-white/65
              transition-all
              duration-300
              hover:border-[#1683FF]
              hover:text-[#1683FF]
            "
          >
            <span>
              View all protocols
            </span>

            <span
              className="
                text-[12px]
                leading-none
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>

        {/* =================================================
            CATEGORY NAVIGATION
        ================================================= */}

        <div
          className="
            mt-5
            overflow-x-auto
            pb-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div
            className="
              flex
              min-w-max
              items-center
              gap-1.5
            "
          >
            {categories.map((category) => {
              const active =
                category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  aria-pressed={active}
                  className={[
                    "relative",
                    "min-h-[32px]",
                    "rounded-full",
                    "border",
                    "px-3.5",
                    "text-[8px]",
                    "font-medium",
                    "tracking-[0.01em]",
                    "transition-all",
                    "duration-300",
                    "whitespace-nowrap",
                    "focus:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-[#1683FF]/60",

                    active
                      ? [
                          "border-[#1683FF]",
                          "bg-[#1683FF]",
                          "text-white",
                          "shadow-[0_6px_20px_rgba(0,107,255,.22)]",
                        ].join(" ")
                      : [
                          "border-white/[0.08]",
                          "bg-white/[0.025]",
                          "text-white/45",
                          "hover:border-white/20",
                          "hover:bg-white/[0.05]",
                          "hover:text-white/80",
                        ].join(" "),
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            PROTOCOL GRID
        ================================================= */}

        <div className="relative mt-4">
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.div
              key={activeCategory}
              initial={{
                opacity: 0,
                x:
                  direction === 1
                    ? 18
                    : -18,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x:
                  direction === 1
                    ? -18
                    : 18,
              }}
              transition={{
                duration: 0.3,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                grid
                grid-cols-2
                gap-2
                sm:gap-2.5
                lg:grid-cols-3
              "
            >
              {filteredProtocols.map(
                (protocol, index) => (
                  <ProtocolCard
                    key={protocol.id}
                    protocol={protocol}
                    index={index}
                  />
                ),
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROTOCOL CARD
========================================================= */

function ProtocolCard({
  protocol,
  index,
}: {
  protocol: Protocol;
  index: number;
}) {
  return (
    <Link
      href={protocol.href}
      aria-label={`Explore ${protocol.name} protocol`}
      className="
        group
        relative
        block
        aspect-[4/3]
        overflow-hidden
        rounded-[7px]
        border
        border-white/[0.07]
        bg-[#07111D]
        shadow-[0_10px_35px_rgba(0,0,0,.18)]
        transition-all
        duration-500
        hover:-translate-y-[2px]
        hover:border-[#1683FF]/40
        hover:shadow-[0_18px_45px_rgba(0,0,0,.28)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#1683FF]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#020914]
      "
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="absolute inset-0">
        <Image
          src={protocol.image}
          alt={protocol.name}
          fill
          priority={index < 3}
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 1024px) 33vw,
            30vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:scale-[1.035]
          "
        />
      </div>

      {/* =================================================
          IMAGE DARKENING
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#020914]/95
          via-[#020914]/25
          to-transparent
          opacity-95
          transition-opacity
          duration-500
          group-hover:opacity-90
        "
      />

      {/* =================================================
          BLUE EDGE ACCENT
      ================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[2px]
          origin-left
          scale-x-0
          bg-[#1683FF]
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

      {/* =================================================
          TOP META
      ================================================= */}

      <div
        className="
          absolute
          left-2.5
          right-2.5
          top-2.5
          flex
          items-start
          justify-between
        "
      >
        <span
          className="
            rounded-full
            border
            border-white/15
            bg-black/20
            px-2
            py-1
            text-[6px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-white/65
            backdrop-blur-md
          "
        >
          {protocol.eyebrow}
        </span>

        <span
          className="
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-black/20
            text-[7px]
            text-white/55
            backdrop-blur-md
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-3
          sm:p-3.5
        "
      >
        <h3
          className="
            font-[var(--font-heading)]
            text-[clamp(1.15rem,2vw,1.75rem)]
            font-light
            leading-[0.9]
            tracking-[-0.035em]
            text-white
            transition-colors
            duration-300
            group-hover:text-[#6EAEFF]
          "
        >
          {protocol.name}
        </h3>

        <p
          className="
            mt-1.5
            max-w-[300px]
            text-[7px]
            leading-[1.45]
            text-white/55
            sm:text-[8px]
          "
        >
          {protocol.description}
        </p>

        {/* =============================================
            BOTTOM META
        ============================================= */}

        <div
          className="
            mt-2.5
            flex
            items-center
            justify-between
            gap-2
          "
        >
          <div
            className="
              flex
              items-center
              gap-1.5
              text-[7px]
              text-white/50
            "
          >
            <span
              className="
                h-2.5
                w-2.5
                rounded-full
                border
                border-white/30
              "
            />

            <span>
              {protocol.duration}
            </span>
          </div>

          <span
            className="
              inline-flex
              items-center
              gap-1
              text-[7px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-white/65
              transition-colors
              duration-300
              group-hover:text-[#1683FF]
            "
          >
            Explore
            <span
              className="
                text-[10px]
                leading-none
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}