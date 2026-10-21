"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  treatments,
  type Treatment,
  type TreatmentFamily,
} from "@/data/treatments";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

type FamilyFilter = "All" | TreatmentFamily;

const families: FamilyFilter[] = [
  "All",
  "Skin & Beauty",
  "Cellular & Longevity",
  "Metabolic & Performance",
  "Digestive & Systemic",
  "Women's Wellness",
  "Recovery & Immune",
  "Cognitive & Neuro",
  "Musculoskeletal",
];

const familyDescriptions: Record<TreatmentFamily, string> = {
  "Skin & Beauty": "Explore protocols in the skin and beauty collection.",
  "Cellular & Longevity": "Explore protocols focused on cellular health and longevity.",
  "Metabolic & Performance": "Explore protocols for metabolic health and performance.",
  "Digestive & Systemic": "Explore protocols for digestive and systemic wellness.",
  "Women's Wellness": "Explore protocols in the women's wellness collection.",
  "Recovery & Immune": "Explore protocols focused on recovery and immune support.",
  "Cognitive & Neuro": "Explore protocols for cognitive and neurological wellness.",
  Musculoskeletal: "Explore protocols for musculoskeletal wellness.",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProtocolsPage() {
  const [activeFamily, setActiveFamily] = useState<FamilyFilter>("All");
  const activeTreatments = useMemo(
    () => treatments.filter((treatment) => treatment.active),
    [],
  );

  const groupedTreatments = useMemo(
    () =>
      families
        .filter((family): family is TreatmentFamily => family !== "All")
        .map((family) => ({
          family,
          items: activeTreatments.filter((treatment) => treatment.family === family),
        }))
        .filter((group) => group.items.length > 0),
    [activeTreatments],
  );

  const visibleGroups = activeFamily === "All"
    ? groupedTreatments
    : groupedTreatments.filter((group) => group.family === activeFamily);

  function selectFamily(family: FamilyFilter) {
    setActiveFamily(family);
    window.setTimeout(() => {
      document.getElementById(family === "All" ? "protocol-families" : `family-${slugify(family)}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#FCFAF5] text-[#101D32]">
        {/* Compact family selector, matching the reference image */}
        <nav aria-label="Protocol families" className="relative z-20 border-b border-[#17263A]/[0.08] bg-[#FCFAF5]">
          <div className="mx-auto max-w-[1800px] px-5 pt-7 pb-5 sm:px-8 lg:px-10">
            <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {families.map((family) => {
                const selected = activeFamily === family;
                return (
                  <button
                    key={family}
                    type="button"
                    onClick={() => selectFamily(family)}
                    aria-pressed={selected}
                    className={`shrink-0 rounded-full border px-5 py-3 text-[12px] transition-all duration-300 ${selected ? "border-[#1672EE] bg-[#1672EE] text-white shadow-[0_5px_16px_rgba(22,114,238,.18)]" : "border-[#17263A]/15 bg-transparent text-[#27364A] hover:border-[#1672EE]/50 hover:text-[#1672EE]"}`}
                  >
                    {family}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Family-first protocol showcase */}
        <section id="protocol-families" className="scroll-mt-32 bg-[#FCFAF5]">
          <div className="mx-auto max-w-[1800px] px-5 pt-7 pb-14 sm:px-8 lg:px-10">
            {visibleGroups.length === 0 ? (
              <p className="py-16 text-center text-sm text-[#273B55]/65">No active protocols are available in this family.</p>
            ) : (
              <div className="space-y-14 md:space-y-16">
                {visibleGroups.map((group, index) => (
                  <FamilySection key={group.family} family={group.family} items={group.items} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="border-t border-[#14223A]/10 bg-[linear-gradient(110deg,#FFF8EB_0%,#F1F6FB_60%,#DCEBFA_100%)]">
          <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-14 sm:px-8 md:px-10 lg:grid-cols-[220px_1fr] lg:px-14 lg:py-20">
            <p className="text-[9px] uppercase tracking-[0.26em] text-[#0066FF]">ONE STANDARD</p>
            <div>
              <h2 className="max-w-4xl font-serif text-[clamp(2.7rem,5.5vw,6rem)] font-light leading-[0.9] tracking-[-0.06em]">A protocol is a starting point.<br /><span className="text-[#6F849E]">The physician decides the path.</span></h2>
              <div className="mt-9 grid gap-5 border-t border-[#14223A]/15 pt-5 sm:grid-cols-3">
                {["Physician-led", "Considered", "Personalised"].map((label, i) => <div key={label}><p className="text-[9px] tracking-[0.2em] text-[#0066FF]">0{i + 1}</p><p className="mt-2 font-serif text-2xl font-light">{label}</p></div>)}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function FamilySection({ family, items, index }: { family: TreatmentFamily; items: Treatment[]; index: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTrack = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction === "right" ? Math.max(track.clientWidth * 0.82, 300) : -Math.max(track.clientWidth * 0.82, 300), behavior: "smooth" });
  };

  return (
    <motion.section
      id={`family-${slugify(family)}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, ease }}
      className="scroll-mt-32 min-w-0"
    >
      <div className="mb-6 flex items-center gap-4">
        <h2 className="shrink-0 bg-[#FCFAF5] pr-1 font-serif text-[clamp(2rem,2.8vw,2.9rem)] font-medium leading-none tracking-[-0.045em] text-[#20231F]">{family}</h2>
        <div className="h-px flex-1 bg-[#20231F]/85" />
        <div className="flex shrink-0 gap-2 pl-1">
          <button type="button" aria-label={`Previous ${family} protocols`} onClick={() => scrollTrack("left")} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#14223A]/15 bg-transparent text-[#14223A]/55 transition hover:border-[#1672EE] hover:text-[#1672EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1672EE]"><ArrowIcon direction="left" /></button>
          <button type="button" aria-label={`Next ${family} protocols`} onClick={() => scrollTrack("right")} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#14223A]/20 bg-transparent text-[#14223A] transition hover:border-[#1672EE] hover:bg-[#1672EE] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1672EE]"><ArrowIcon direction="right" /></button>
        </div>
      </div>

      <div ref={trackRef} onScroll={(event) => setScrollPosition(event.currentTarget.scrollLeft)} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((treatment, cardIndex) => (
          <div key={treatment.slug} className="w-[84vw] min-w-[300px] max-w-[460px] shrink-0 snap-start sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-60px)/4)]">
            <ProtocolCard treatment={treatment} index={cardIndex} />
          </div>
        ))}
      </div>
      {items.length > 4 && (
        <div className="mt-3 h-px w-full bg-[#14223A]/10">
          <div className="h-px bg-[#1672EE] transition-[width] duration-200" style={{ width: `${Math.min(100, Math.max(12, ((scrollPosition + (trackRef.current?.clientWidth ?? 1)) / Math.max(1, trackRef.current?.scrollWidth ?? 1)) * 100))}%` }} />
        </div>
      )}
    </motion.section>
  );
}

function ProtocolCard({ treatment, index }: { treatment: Treatment; index: number }) {
  const bagColors = [
    { fluid: "#F59BA6", edge: "#D87988", glow: "rgba(245,155,166,.24)" },
    { fluid: "#F3C77C", edge: "#D69B40", glow: "rgba(243,199,124,.28)" },
    { fluid: "#83C5FF", edge: "#4E9BEA", glow: "rgba(131,197,255,.3)" },
    { fluid: "#C9A1F5", edge: "#A77BE1", glow: "rgba(201,161,245,.28)" },
  ];
  const color = bagColors[index % bagColors.length];

  return (
    <Link href={`/protocols/${treatment.slug}`} className="group relative block h-[330px] overflow-hidden rounded-[28px] border border-white/80 bg-[#F3EEE6] shadow-[0_4px_18px_rgba(21,35,52,.025)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(22,114,238,.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1672EE] sm:h-[360px] xl:h-[390px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_83%_82%,rgba(255,255,255,.95),transparent_43%),linear-gradient(135deg,#F5EFE6_0%,#F7F2EA_58%,#E9F1F8_100%)]" />
      <div className="relative z-10 h-full p-5 sm:p-6">
        <span className="text-[10px] font-light tracking-[0.14em] text-[#1764B9]">{String(treatment.number ?? index + 1).padStart(2, "0")}</span>
        <span className="mt-4 block h-px w-10 bg-gradient-to-r from-[#1672EE] to-[#9BCBFF]" />
        <div className="relative z-20 mt-7 w-[57%]">
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#2877BD]">DRIPLABS PROTOCOL</p>
          <h3 className="mt-4 font-serif text-[clamp(1.45rem,1.7vw,2rem)] font-medium leading-[.98] tracking-[-.05em] text-[#111E32]">{treatment.name}</h3>
          <p className="mt-3 line-clamp-3 text-[10px] leading-[1.5] text-[#192A3E] sm:text-[11px]">{treatment.shortDescription}</p>
          <p className="mt-4 text-[8px] leading-[1.5] text-[#273B55]/65">{treatment.family}</p>
          <span className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#17263A]/35 bg-white/55 px-3.5 py-2.5 text-[8px] font-medium text-[#15263C] transition-all duration-300 group-hover:border-[#1672EE] group-hover:bg-white/90 sm:text-[9px]">Explore protocol <span className="text-[#1764B9] transition-transform group-hover:translate-x-1">→</span></span>
        </div>

        {/* CSS-rendered IV bag so package thumbnails from treatment.image cannot appear here */}
        <div className="pointer-events-none absolute bottom-5 right-2 top-8 z-10 flex w-[48%] items-center justify-center sm:right-3">
          <div className="absolute bottom-1 right-0 h-10 w-[90%] rounded-full blur-xl" style={{ background: color.glow }} />
          <div className="relative h-[75%] w-[70%] max-w-[155px] min-w-[105px] transition-transform duration-700 ease-out group-hover:scale-[1.035]">
            <div className="absolute left-[36%] top-[-5px] h-3 w-[28%] rounded-t-md border border-white/80 bg-white/75 shadow-sm" />
            <div className="absolute inset-x-0 top-0 bottom-[7%] overflow-hidden rounded-[19px_19px_24px_24px] border-[2px] bg-white/45 shadow-[inset_0_0_14px_rgba(255,255,255,.95),0_12px_25px_rgba(50,70,90,.12)]" style={{ borderColor: `${color.edge}90`, background: `linear-gradient(110deg,rgba(255,255,255,.95) 0%,${color.fluid}55 16%,rgba(255,255,255,.78) 32%,${color.fluid}88 58%,rgba(255,255,255,.85) 78%,${color.edge}45 100%)` }}>
              <div className="absolute inset-x-1 top-1 h-[23%] rounded-[15px_15px_7px_7px] border border-white/80 bg-white/25" />
              <div className="absolute inset-x-1 bottom-0 h-[59%] rounded-b-[20px] opacity-85" style={{ background: `linear-gradient(180deg,${color.fluid}75,${color.fluid}CC)` }} />
              <div className="absolute left-[13%] top-[13%] h-[66%] w-[8%] rounded-full bg-white/65 blur-[1px]" />
              <div className="absolute right-[13%] top-[18%] h-[57%] w-[4%] rounded-full bg-white/45" />
              {Array.from({ length: 9 }).map((_, bubble) => (
                <span key={bubble} className="absolute rounded-full border border-white/90 bg-white/45 shadow-[0_0_4px_rgba(255,255,255,.8)]" style={{ width: bubble % 3 === 0 ? 5 : 3, height: bubble % 3 === 0 ? 5 : 3, left: `${16 + ((bubble * 19) % 67)}%`, top: `${27 + ((bubble * 13) % 52)}%` }} />
              ))}
              <div className="absolute left-[9%] right-[9%] top-[39%] flex min-h-[25%] flex-col items-center justify-center border-y border-white/70 bg-white/75 px-1 text-center shadow-[0_3px_9px_rgba(25,55,85,.08)] backdrop-blur-sm">
                <span className="text-[7px] font-semibold tracking-[.2em] text-[#1A2D47] sm:text-[8px]">DRIPLABS</span>
                <span className="mt-1 max-w-full truncate text-[5px] font-medium tracking-[.12em] text-[#284A70] sm:text-[6px]">{treatment.name.toUpperCase()}</span>
                <span className="mt-1 text-[4px] tracking-[.15em] text-[#536D89]">IV PROTOCOL</span>
              </div>
            </div>
            <div className="absolute bottom-[-2%] left-[39%] h-[9%] w-[22%] border-x border-white/90" style={{ background: `linear-gradient(90deg,${color.edge},#E9F6FF,${color.edge})` }} />
            <div className="absolute bottom-[-11%] left-[43%] h-[11%] w-[14%] rounded-b-md border border-white/90" style={{ background: `linear-gradient(90deg,${color.edge},#EAF6FF,${color.edge})` }} />
            <div className="absolute bottom-[-15%] left-[45%] h-[5%] w-[10%] rounded-b-sm bg-[#1683E8] shadow-[0_2px_4px_rgba(0,80,160,.25)]" />
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/40 to-transparent" />
      </div>
    </Link>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} /></svg>;
}
