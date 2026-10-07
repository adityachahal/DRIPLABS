"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Protocol = {
  id: string;
  name: string;
  family: string;
  eyebrow: string;
  description: string;
  duration: string;
  image: string;
  href: string;
};

type WellnessFamily = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  protocols: Protocol[];
};

const wellnessFamilies: WellnessFamily[] = [
  {
    id: "skin-beauty",
    name: "Skin & Beauty",
    shortName: "Skin",
    description: "Advanced support for skin health, radiance and restoration.",
    protocols: [
      {
        id: "glamour",
        name: "GLAMOUR",
        family: "Skin & Beauty",
        eyebrow: "SKIN + BEAUTY",
        description: "Beauty-focused nutritional support for a refined, radiant appearance.",
        duration: "45–60 min",
        image: "/images/protocols/glamour.png",
        href: "/protocols/glamour",
      },
      {
        id: "radiance",
        name: "RADIANCE",
        family: "Skin & Beauty",
        eyebrow: "SKIN + BEAUTY",
        description: "Targeted nutritional support designed around skin radiance and vitality.",
        duration: "45–60 min",
        image: "/images/protocols/radiance.png",
        href: "/protocols/radiance",
      },
      {
        id: "restore",
        name: "RESTORE",
        family: "Skin & Beauty",
        eyebrow: "RECOVERY",
        description: "Immune support + cellular repair for total recovery.",
        duration: "45–60 min",
        image: "/images/protocols/restore.png",
        href: "/protocols/restore",
      },
    ],
  },

  {
    id: "cellular-longevity",
    name: "Cellular & Longevity",
    shortName: "Longevity",
    description: "Protocols focused on cellular health, metabolic resilience and longevity.",
    protocols: [
      {
        id: "renew",
        name: "RENEW",
        family: "Cellular & Longevity",
        eyebrow: "CELLULAR HEALTH",
        description: "A foundational protocol designed around cellular nutritional support.",
        duration: "45–60 min",
        image: "/images/protocols/renew.webp",
        href: "/protocols/renew",
      },
      {
        id: "nadx",
        name: "NADx",
        family: "Cellular & Longevity",
        eyebrow: "CELLULAR FLAGSHIP",
        description: "A physician-led NAD+ experience focused on cellular and metabolic support.",
        duration: "3–4 hrs",
        image: "/images/protocols/nadx.webp",
        href: "/protocols/nadx",
      },
      {
        id: "methylblu",
        name: "METHYBLU",
        family: "Cellular & Longevity",
        eyebrow: "CELLULAR HEALTH",
        description: "Targeted nutritional support within the cellular longevity pathway.",
        duration: "45–60 min",
        image: "/images/protocols/methylblu.webp",
        href: "/protocols/methylblu",
      },
      {
        id: "apex",
        name: "APEX",
        family: "Cellular & Longevity",
        eyebrow: "LONGEVITY",
        description: "Advanced support designed around cellular health and longevity.",
        duration: "45–60 min",
        image: "/images/protocols/apex.webp",
        href: "/protocols/apex",
      },
    ],
  },

  {
    id: "metabolic-performance",
    name: "Metabolic & Performance",
    shortName: "Performance",
    description: "Nutritional support for performance, metabolic goals and physical output.",
    protocols: [
      {
        id: "shrink",
        name: "SHRINK",
        family: "Metabolic & Performance",
        eyebrow: "METABOLIC",
        description: "Designed to complement a structured metabolic wellness pathway.",
        duration: "45–60 min",
        image: "/images/protocols/shrink.webp",
        href: "/protocols/shrink",
      },
      {
        id: "refuel",
        name: "REFUEL",
        family: "Metabolic & Performance",
        eyebrow: "PERFORMANCE",
        description: "Nutritional support for replenishment and physical readiness.",
        duration: "45–60 min",
        image: "/images/protocols/refuel.webp",
        href: "/protocols/refuel",
      },
      {
        id: "fit",
        name: "FIT",
        family: "Metabolic & Performance",
        eyebrow: "PERFORMANCE",
        description: "A targeted nutritional protocol supporting an active lifestyle.",
        duration: "45–60 min",
        image: "/images/protocols/fit.webp",
        href: "/protocols/fit",
      },
      {
        id: "rebuild",
        name: "REBUILD",
        family: "Metabolic & Performance",
        eyebrow: "REBUILD",
        description: "Nutritional support designed around recovery and rebuilding.",
        duration: "45–60 min",
        image: "/images/protocols/rebuild.webp",
        href: "/protocols/rebuild",
      },
      {
        id: "performance-x",
        name: "PERFORMANCE X",
        family: "Metabolic & Performance",
        eyebrow: "ADVANCED PERFORMANCE",
        description: "Advanced nutritional support for performance-oriented wellness goals.",
        duration: "45–60 min",
        image: "/images/protocols/performance-x.webp",
        href: "/protocols/performance-x",
      },
    ],
  },

  {
    id: "digestive-systemic",
    name: "Digestive & Systemic",
    shortName: "Digestive",
    description: "Targeted support for digestive and systemic wellness.",
    protocols: [
      {
        id: "gut-plus",
        name: "GUT+",
        family: "Digestive & Systemic",
        eyebrow: "DIGESTIVE",
        description: "A targeted protocol within the digestive and systemic wellness pathway.",
        duration: "45–60 min",
        image: "/images/protocols/gut-plus.webp",
        href: "/protocols/gut-plus",
      },
    ],
  },

  {
    id: "womens-wellness",
    name: "Women's Nutritional",
    shortName: "Women's",
    description: "Purpose-built nutritional support for women's wellness.",
    protocols: [
      {
        id: "femme",
        name: "FEMME",
        family: "Women's Nutritional",
        eyebrow: "WOMEN'S WELLNESS",
        description: "A dedicated nutritional wellness protocol designed for women.",
        duration: "45–60 min",
        image: "/images/protocols/femme.webp",
        href: "/protocols/femme",
      },
    ],
  },

  {
    id: "recovery-immune",
    name: "Recovery & Immune",
    shortName: "Recovery",
    description: "Support for recovery, resilience and immune wellness.",
    protocols: [
      {
        id: "reactivate",
        name: "REACTIVATE",
        family: "Recovery & Immune",
        eyebrow: "RECOVERY",
        description: "Designed to support recovery and nutritional replenishment.",
        duration: "45–60 min",
        image: "/images/protocols/reactivate.webp",
        href: "/protocols/reactivate",
      },
      {
        id: "bounce-back",
        name: "BOUNCE BACK",
        family: "Recovery & Immune",
        eyebrow: "RECOVERY",
        description: "A recovery-focused nutritional wellness experience.",
        duration: "45–60 min",
        image: "/images/protocols/bounce-back.webp",
        href: "/protocols/bounce-back",
      },
      {
        id: "recover-plus",
        name: "RECOVER+",
        family: "Recovery & Immune",
        eyebrow: "RECOVERY + IMMUNE",
        description: "Targeted nutritional support for recovery and resilience.",
        duration: "45–60 min",
        image: "/images/protocols/recover-plus.webp",
        href: "/protocols/recover-plus",
      },
    ],
  },

  {
    id: "cognitive-neuro",
    name: "Cognitive & Neuro",
    shortName: "Cognitive",
    description: "Nutritional support for cognitive and neurological wellness.",
    protocols: [
      {
        id: "focus",
        name: "FOCUS",
        family: "Cognitive & Neuro",
        eyebrow: "COGNITIVE",
        description: "Designed around cognitive wellness and nutritional support.",
        duration: "45–60 min",
        image: "/images/protocols/focus.webp",
        href: "/protocols/focus",
      },
    ],
  },

  {
    id: "musculoskeletal",
    name: "Musculoskeletal",
    shortName: "Movement",
    description: "Targeted nutritional support for movement and musculoskeletal wellness.",
    protocols: [
      {
        id: "move",
        name: "MOVE",
        family: "Musculoskeletal",
        eyebrow: "MUSCULOSKELETAL",
        description: "A targeted wellness pathway supporting movement and recovery.",
        duration: "45–60 min",
        image: "/images/protocols/move.webp",
        href: "/protocols/move",
      },
    ],
  },
];

export default function WellnessGoalExplorer() {
  const [activeFamily, setActiveFamily] = useState("skin-beauty");

  const activeData =
    wellnessFamilies.find((family) => family.id === activeFamily) ??
    wellnessFamilies[0];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#020914]
        py-12
        sm:py-14
        lg:py-16
      "
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* blue atmospheric glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#006BFF]/[0.06]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            right-[-150px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#1683FF]/[0.04]
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            HEADER
        ============================================================ */}

        <div className="mb-7 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[700px]">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-8 bg-[#1683FF]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#1683FF]">
                WELLNESS PATHWAYS
              </span>
            </div>

            <h2
              className="
                font-serif
                text-[34px]
                leading-[0.95]
                tracking-[-0.025em]
                text-white
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              What are you
              <br />
              looking for?
            </h2>

            <p className="mt-3 max-w-[600px] text-[13px] leading-6 text-white/50 sm:text-[14px]">
              Explore physician-guided wellness pathways designed around what
              matters to you.
            </p>
          </div>

          <div className="hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.24em] text-white/30">
              {activeData.protocols.length} protocols
            </span>
          </div>
        </div>

        {/* ============================================================
            FAMILY NAVIGATION
        ============================================================ */}

        <div
          className="
            mb-7
            flex
            gap-2
            overflow-x-auto
            pb-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {wellnessFamilies.map((family) => {
            const isActive = activeFamily === family.id;

            return (
              <button
                key={family.id}
                type="button"
                onClick={() => setActiveFamily(family.id)}
                className={`
                  group
                  relative
                  shrink-0
                  whitespace-nowrap
                  rounded-full
                  border
                  px-4
                  py-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.13em]
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-[#1683FF] bg-[#006BFF]/15 text-white"
                      : "border-white/[0.10] bg-white/[0.025] text-white/45 hover:border-white/20 hover:text-white/80"
                  }
                `}
              >
                {family.shortName}

                {isActive && (
                  <span className="absolute inset-x-4 -bottom-[1px] h-px bg-[#1683FF]" />
                )}
              </button>
            );
          })}
        </div>

        {/* ============================================================
            ACTIVE FAMILY DESCRIPTION
        ============================================================ */}

        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[15px] font-medium tracking-[-0.01em] text-white sm:text-[16px]">
              {activeData.name}
            </h3>

            <p className="mt-1 text-[11px] leading-5 text-white/35">
              {activeData.description}
            </p>
          </div>

          <span className="shrink-0 text-[9px] uppercase tracking-[0.2em] text-white/25">
            {String(activeData.protocols.length).padStart(2, "0")} OPTIONS
          </span>
        </div>

        {/* ============================================================
            PROTOCOL CARDS
        ============================================================ */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-4
            xl:gap-4
          "
        >
          {activeData.protocols.map((protocol) => (
            <Link
              key={protocol.id}
              href={protocol.href}
              className="
                group
                relative
                block
                aspect-[4/3]
                overflow-hidden
                rounded-[10px]
                border
                border-white/[0.10]
                bg-[#07111F]
                shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#1683FF]/50
                hover:shadow-[0_25px_70px_rgba(0,107,255,0.15)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#1683FF]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#020914]
              "
            >
              {/* ========================================================
                  IMAGE
              ======================================================== */}

              <div className="absolute inset-0">
                <Image
                  src={protocol.image}
                  alt={protocol.name}
                  fill
                  unoptimized={protocol.image.endsWith(".png")}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]
                    group-hover:scale-[1.035]
                  "
                />
              </div>

              {/* ========================================================
                  IMAGE GRADIENT
              ======================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#020914]
                  via-[#020914]/20
                  to-transparent
                  opacity-90
                "
              />

              {/* ========================================================
                  TOP BLUE DETAIL
              ======================================================== */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#1683FF]/70
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* ========================================================
                  CONTENT
              ======================================================== */}

              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="h-px w-4 bg-[#1683FF]" />

                  <span className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#62A4FF] sm:text-[8px]">
                    {protocol.eyebrow}
                  </span>
                </div>

                <h4
                  className="
                    font-serif
                    text-[18px]
                    leading-none
                    tracking-[0.01em]
                    text-white
                    sm:text-[21px]
                  "
                >
                  {protocol.name}
                </h4>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.12em] text-white/45">
                    {protocol.duration}
                  </span>

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/20
                      text-white/70
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:border-[#1683FF]
                      group-hover:bg-[#006BFF]
                      group-hover:text-white
                    "
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 5H8.5M5.5 2L8.5 5L5.5 8"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ============================================================
            FOOTER MICRO CTA
        ============================================================ */}

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
          <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Physician-guided protocols
          </span>

          <Link
            href="/protocols"
            className="
              group
              flex
              items-center
              gap-2
              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-white/55
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Explore all protocols

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}