"use client";

import Image from "next/image";
import Link from "next/link";

type WellnessFamily = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
};

const wellnessFamilies: WellnessFamily[] = [
  {
    id: "skin-beauty",
    name: "Skin & Beauty",
    shortName: "Skin",
    description:
      "Advanced support for skin health, radiance and restoration.",
    image: "/images/wellness/skin-beauty.png",
  },
  {
    id: "cellular-longevity",
    name: "Cellular & Longevity",
    shortName: "Longevity",
    description:
      "Protocols focused on cellular health, metabolic resilience and longevity.",
    image: "/images/wellness/cellular-longevity.png",
  },
  {
    id: "metabolic-performance",
    name: "Metabolic & Performance",
    shortName: "Performance",
    description:
      "Nutritional support for performance, metabolic goals and physical output.",
    image: "/images/wellness/metabolic-performance.png",
  },
  {
    id: "digestive-systemic",
    name: "Digestive & Systemic",
    shortName: "Digestive",
    description:
      "Targeted support for digestive and systemic wellness.",
    image: "/images/wellness/digestive-systemic.png",
  },
  {
    id: "womens-wellness",
    name: "Women's Nutritional",
    shortName: "Women's",
    description:
      "Purpose-built nutritional support for women's wellness.",
    image: "/images/wellness/womens-nutritional.png",
  },
  {
    id: "recovery-immune",
    name: "Recovery & Immune",
    shortName: "Recovery",
    description:
      "Support for recovery, resilience and immune wellness.",
    image: "/images/wellness/recovery-immune.png",
  },
  {
    id: "cognitive-neuro",
    name: "Cognitive & Neuro",
    shortName: "Cognitive",
    description:
      "Nutritional support for cognitive and neurological wellness.",
    image: "/images/wellness/cognitive-neuro.png",
  },
  {
    id: "musculoskeletal",
    name: "Musculoskeletal",
    shortName: "Movement",
    description:
      "Targeted nutritional support for movement and musculoskeletal wellness.",
    image: "/images/wellness/musculoskeletal.png",
  },
];

export default function WellnessGoalExplorer() {
  return (
    <section
      id="wellness-pathways"
      className="relative w-full overflow-hidden bg-[#F5F1E8]"
    >
      <div className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        {/* BACKGROUND VIDEO */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover opacity-[2]"
            aria-hidden="true"
          >
            <source
              src="/videos/wellness-pathways.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-[#F5F1E8]/[0.42]" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/60 via-[#F5F1E8]/25 to-[#F5F1E8]/65" />

          <div className="absolute left-[-180px] top-[-180px] h-[480px] w-[480px] rounded-full bg-[#1683FF]/[0.055] blur-[140px]" />

          <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#CFC4B1]/[0.12] blur-[120px]" />
        </div>

        {/* BACKGROUND GRID */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20,30,40,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20,30,40,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          {/* HEADER */}
          <div className="flex -translate-y-8 flex-col justify-between gap-6 sm:flex-row sm:items-end lg:-translate-y-10">
            <div className="max-w-[760px]">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#1683FF]" />

                <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#1683FF]">
                  WELLNESS PATHWAYS
                </span>
              </div>

              <h2 className="font-serif text-[38px] leading-[0.88] tracking-[-0.045em] text-[#17202A] sm:text-[46px] lg:text-[58px]">
                Explore by
                <br />
                <span className="italic text-[#1683FF]">wellness.</span>
              </h2>

              <p className="mt-4 max-w-[560px] text-[11px] leading-5 text-[#626863] sm:text-[12px]">
                Explore physician-guided wellness pathways designed around
                different areas of wellbeing.
              </p>
            </div>

            <div className="hidden pb-1 sm:block">
              <span className="text-[8px] uppercase tracking-[0.25em] text-[#858984]">
                {wellnessFamilies.length} WELLNESS FAMILIES
              </span>
            </div>
          </div>

          {/* FAMILY CARDS */}
          <div className="relative mt-2 sm:mt-3 lg:mt-5">
            {/* RIGHT FADE */}
            <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-20 bg-gradient-to-l from-[#F5F1E8] to-transparent" />

            {/* HORIZONTAL SCROLL */}
            <div className="flex gap-4 overflow-x-auto overscroll-x-contain pb-5 pr-20 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {wellnessFamilies.map((family, index) => (
                <Link
                  key={family.id}
                  href={`/protocols?family=${family.id}`}
                  className="
                    group relative w-[64vw] max-w-[330px] shrink-0 snap-start
                    overflow-hidden border border-white/45 bg-[#17202A]
                    shadow-[0_20px_55px_rgba(20,25,25,0.14)]
                    transition-all duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]
                    hover:-translate-y-2
                    hover:border-[#8CCBFF]/70
                    hover:shadow-[0_30px_75px_rgba(20,28,35,0.2)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#1683FF]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#F5F1E8]
                    sm:w-[38vw]
                    lg:w-[25vw]
                    lg:max-w-[340px]
                    xl:w-[22vw]
                    xl:max-w-[350px]
                  "
                >
                  <div className="relative aspect-[0.82/1] overflow-hidden">
                    {/* FAMILY IMAGE */}
                    <Image
                      src={family.image}
                      alt={family.name}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 64vw, (max-width: 1024px) 38vw, 25vw"
                      className="
                        object-cover
                        transition-transform
                        duration-[1400ms]
                        ease-[cubic-bezier(.22,1,.36,1)]
                        group-hover:scale-[1.055]
                      "
                    />

                    {/* IMAGE OVERLAYS */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020812]/10 via-transparent to-[#020812]/90" />

                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-[#1683FF]/[0.12]" />

                    <div className="absolute bottom-[-80px] left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-[#1683FF]/[0.12] blur-[80px] transition-opacity duration-700 group-hover:bg-[#1683FF]/[0.2]" />

                   
                    {/* INDEX */}
                    <span className="absolute left-5 top-5 flex h-7 min-w-7 items-center justify-center border border-white/40 bg-[#020812]/20 px-2 text-[6px] font-medium tracking-[0.18em] text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* ARROW */}
                    <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-[#020812]/20 text-white backdrop-blur-md transition-all duration-500 group-hover:border-[#8CCBFF] group-hover:bg-[#1683FF] group-hover:shadow-[0_0_25px_rgba(22,131,255,0.4)]">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 6H10M6.5 2.5L10 6L6.5 9.5"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    {/* CARD CONTENT */}
                    <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-20">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-px w-6 bg-[#8CCBFF]" />

                        <span className="text-[7px] font-medium uppercase tracking-[0.24em] text-[#BBDFFF]">
                          {family.shortName}
                        </span>
                      </div>

                      <h3 className="max-w-[280px] font-serif text-[27px] leading-[0.92] tracking-[-0.035em] text-white transition-transform duration-700 group-hover:-translate-y-1 sm:text-[30px]">
                        {family.name}
                      </h3>

                      <p className="mt-3 max-w-[275px] text-[9px] leading-[1.6] text-white/65">
                        {family.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">
                        <span className="text-[6.5px] uppercase tracking-[0.2em] text-white/50">
                          Explore pathway
                        </span>

                        <span className="text-[10px] text-white/70 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#8CCBFF]">
                          →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* HOVER BLUE LINE */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[2px] origin-left scale-x-0 bg-[#1683FF] shadow-[0_0_18px_rgba(22,131,255,0.8)] transition-transform duration-600 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>

            {/* SCROLL INDICATOR */}
            <div className="mt-0 flex items-center justify-between">
              <span className="text-[7px] uppercase tracking-[0.2em] text-[#858984]">
                Explore wellness families
              </span>

              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-[#CFC8BC]" />

                <span className="text-[9px] text-[#858984]">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}