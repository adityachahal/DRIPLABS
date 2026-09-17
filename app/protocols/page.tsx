"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useState, type MouseEvent } from "react";

import { treatments, type TreatmentFamily } from "@/data/treatments";
import Navbar from "@/components/navigation/Navbar";

const families: Array<"All" | TreatmentFamily> = [
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

const familyShortNames: Record<"All" | TreatmentFamily, string> = {
  All: "All",
  "Skin & Beauty": "Skin",
  "Cellular & Longevity": "Longevity",
  "Metabolic & Performance": "Performance",
  "Digestive & Systemic": "Digestive",
  "Women's Wellness": "Women's",
  "Recovery & Immune": "Recovery",
  "Cognitive & Neuro": "Cognitive",
  Musculoskeletal: "Musculoskeletal",
};

const protocolImages: Record<string, string> = {
  glamour: "/images/treatments/glamour.png",
  radiance: "/images/treatments/radiance.png",
  restore: "/images/treatments/restore.png",
};

function getProtocolImage(slug: string) {
  return protocolImages[slug] ?? "/images/hero/driplabs-hero.jpg";
}

export default function ProtocolsPage() {
  const activeTreatments = useMemo(
    () => treatments.filter((treatment) => treatment.active),
    [],
  );

  const [activeFamily, setActiveFamily] =
    useState<"All" | TreatmentFamily>("All");

  const [selectedSlug, setSelectedSlug] = useState(
    activeTreatments[0]?.slug ?? "",
  );

  const visibleTreatments = useMemo(() => {
    if (activeFamily === "All") {
      return activeTreatments;
    }

    return activeTreatments.filter(
      (treatment) => treatment.family === activeFamily,
    );
  }, [activeFamily, activeTreatments]);

  const selectedProtocol =
    visibleTreatments.find((treatment) => treatment.slug === selectedSlug) ??
    visibleTreatments[0] ??
    activeTreatments[0];

  const selectedIndex = activeTreatments.findIndex(
    (treatment) => treatment.slug === selectedProtocol?.slug,
  );

  const imageX = useMotionValue(0);
  const imageY = useMotionValue(0);

  const smoothX = useSpring(imageX, {
    stiffness: 70,
    damping: 20,
    mass: 0.7,
  });

  const smoothY = useSpring(imageY, {
    stiffness: 70,
    damping: 20,
    mass: 0.7,
  });

  const imageOffsetX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const imageOffsetY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    imageX.set(x * 2 - 1);
    imageY.set(y * 2 - 1);
  };

  const resetParallax = () => {
    imageX.set(0);
    imageY.set(0);
  };

  const goToProtocol = (slug: string) => {
    setSelectedSlug(slug);

    const protocol = activeTreatments.find(
      (treatment) => treatment.slug === slug,
    );

    if (protocol) {
      setActiveFamily(protocol.family);
    }
  };

  const goNext = () => {
    if (!selectedProtocol || activeTreatments.length === 0) {
      return;
    }

    const nextIndex = (selectedIndex + 1) % activeTreatments.length;
    goToProtocol(activeTreatments[nextIndex].slug);
  };

  const goPrevious = () => {
    if (!selectedProtocol || activeTreatments.length === 0) {
      return;
    }

    const previousIndex =
      (selectedIndex - 1 + activeTreatments.length) % activeTreatments.length;

    goToProtocol(activeTreatments[previousIndex].slug);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#F7F4EC] text-[#0B1B33]">
        {/* HERO */}
        <section className="relative min-h-[88svh] overflow-hidden bg-[#0B1B33] text-[#F7F4EC]">
          <div className="absolute inset-0">
            <Image
              src="/images/hero/driplabs-hero.jpg"
              alt="DRIPLABS wellness experience"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45"
            />

            <div className="absolute inset-0 bg-[#060F1F]/55" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#060F1F]/15 via-[#060F1F]/30 to-[#060F1F]" />
          </div>

          <div className="relative mx-auto flex min-h-[88svh] max-w-[1680px] flex-col justify-end px-5 pb-12 pt-32 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
            <div className="max-w-5xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[9px] uppercase tracking-[0.30em] text-[#E3CE8E]"
              >
                THE DRIPLABS SYSTEM
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 font-[var(--font-heading)] text-[clamp(4.3rem,10vw,10.5rem)] font-light leading-[0.78] tracking-[-0.075em]"
              >
                Wellness,
                <br />
                considered.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-xl border-l border-[#C9A227] pl-5 text-[13px] leading-7 text-white/60 md:pl-6"
              >
                Nineteen physician-directed protocols across eight wellness
                families. Explore the system one considered protocol at a time.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="mt-16 flex items-center justify-between border-t border-white/15 pt-5"
            >
              <div className="flex gap-8">
                <div>
                  <p className="font-[var(--font-heading)] text-3xl font-light">
                    19
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.22em] text-white/35">
                    Protocols
                  </p>
                </div>

                <div>
                  <p className="font-[var(--font-heading)] text-3xl font-light">
                    08
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.22em] text-white/35">
                    Families
                  </p>
                </div>
              </div>

              <span className="hidden text-[8px] uppercase tracking-[0.24em] text-white/30 md:block">
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-[#0B1B33]/10 bg-[#F7F4EC]">
          <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr]">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                  EXPLORE THE SYSTEM
                </p>

                <div className="mt-7 h-px w-12 bg-[#C9A227]" />
              </div>

              <p className="max-w-5xl font-[var(--font-heading)] text-[clamp(2.5rem,5vw,5.8rem)] font-light leading-[0.92] tracking-[-0.055em]">
                A protocol is a starting point.
                <br />
                The physician decides the path.
              </p>
            </div>
          </div>
        </section>

        {/* FAMILY NAV */}
        <section className="sticky top-[78px] z-40 border-b border-white/10 bg-[#060F1F]/95 text-white backdrop-blur-xl">
          <div className="mx-auto max-w-[1680px] px-5 md:px-10 lg:px-14">
            <div className="flex gap-7 overflow-x-auto py-5 [scrollbar-width:none]">
              {families.map((family) => {
                const active = activeFamily === family;

                return (
                  <button
                    key={family}
                    type="button"
                    onClick={() => {
                      setActiveFamily(family);

                      const familyProtocols =
                        family === "All"
                          ? activeTreatments
                          : activeTreatments.filter(
                              (treatment) => treatment.family === family,
                            );

                      if (familyProtocols[0]) {
                        setSelectedSlug(familyProtocols[0].slug);
                      }
                    }}
                    className={`relative shrink-0 pb-2 text-[9px] uppercase tracking-[0.20em] transition-colors duration-300 ${
                      active
                        ? "text-[#E3CE8E]"
                        : "text-white/35 hover:text-white/75"
                    }`}
                  >
                    {familyShortNames[family]}

                    {active && (
                      <motion.span
                        layoutId="family-line"
                        className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A227]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* CINEMATIC SHOWCASE */}
        <section className="bg-[#F7F4EC]">
          <div className="mx-auto max-w-[1680px] px-5 py-10 md:px-10 lg:px-14 lg:py-16">
            {selectedProtocol && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProtocol.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative overflow-hidden bg-[#0B1B33]"
                >
                  <div className="grid min-h-[720px] lg:grid-cols-[0.88fr_1.12fr]">
                    {/* EDITORIAL SIDE */}
                    <div className="relative z-10 flex flex-col justify-between p-7 text-[#F7F4EC] md:p-10 lg:p-14">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex items-center justify-between gap-6"
                        >
                          <p className="text-[9px] uppercase tracking-[0.27em] text-[#E3CE8E]">
                            {selectedProtocol.family}
                          </p>

                          <p className="font-[var(--font-heading)] text-2xl font-light text-white/30">
                            {String(selectedProtocol.number).padStart(2, "0")}
                            <span className="mx-2 text-white/10">/</span>
                            19
                          </p>
                        </motion.div>

                        <div className="mt-14 overflow-hidden">
                          <motion.h2
                            initial={{ opacity: 0, y: 38 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.72,
                              delay: 0.10,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-xl font-[var(--font-heading)] text-[clamp(4rem,7.5vw,8rem)] font-light leading-[0.76] tracking-[-0.07em]"
                          >
                            {selectedProtocol.name}
                          </motion.h2>
                        </div>

                        <motion.p
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.55,
                            delay: 0.24,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="mt-6 text-[9px] uppercase tracking-[0.20em] text-white/35"
                        >
                          {selectedProtocol.category}
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.30,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="mt-9 max-w-lg text-[13px] leading-7 text-white/55"
                        >
                          {selectedProtocol.shortDescription}
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-14"
                      >
                        <div className="flex items-center gap-4">
                          <span className="h-px w-10 bg-[#C9A227]" />

                          <span className="text-[8px] uppercase tracking-[0.24em] text-white/35">
                            Physician-directed wellness
                          </span>
                        </div>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                          <Link
                            href={`/protocols/${selectedProtocol.slug}`}
                            className="group inline-flex min-h-12 items-center justify-between bg-[#C9A227] px-6 text-[9px] uppercase tracking-[0.20em] text-[#0B1B33] transition-colors duration-300 hover:bg-[#E3CE8E]"
                          >
                            View protocol
                            <span className="ml-8 transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </Link>

                          <Link
                            href="/book"
                            className="inline-flex min-h-12 items-center justify-center border border-white/20 px-6 text-[9px] uppercase tracking-[0.20em] text-white/75 transition-colors duration-300 hover:border-white/45 hover:text-white"
                          >
                            Book consultation
                          </Link>
                        </div>
                      </motion.div>
                    </div>

                    {/* IMAGE SIDE */}
                    <div
                      className="relative min-h-[500px] overflow-hidden"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={resetParallax}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedProtocol.slug}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute inset-[-12px]"
                          style={{
                            x: imageOffsetX,
                            y: imageOffsetY,
                          }}
                        >
                          <Image
                            src={getProtocolImage(selectedProtocol.slug)}
                            alt={`${selectedProtocol.name} protocol`}
                            fill
                            sizes="(min-width: 1024px) 56vw, 100vw"
                            className="object-cover"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#060F1F]/75 via-transparent to-transparent" />

                          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33]/25 via-transparent to-transparent" />
                        </motion.div>
                      </AnimatePresence>

                      <div className="pointer-events-none absolute inset-5 border border-white/10 md:inset-7" />

                      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between md:bottom-10 md:left-10 md:right-10">
                        <div>
                          <p className="text-[8px] uppercase tracking-[0.24em] text-white/35">
                            Selected
                          </p>

                          <AnimatePresence mode="wait">
                            <motion.p
                              key={selectedProtocol.slug}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.35 }}
                              className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#E3CE8E]"
                            >
                              {selectedProtocol.name}
                            </motion.p>
                          </AnimatePresence>
                        </div>

                        <div className="hidden items-center gap-3 md:flex">
                          <span className="h-px w-10 bg-white/25" />

                          <span className="text-[8px] uppercase tracking-[0.18em] text-white/35">
                            Move to explore
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CONTROL RAIL */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#060F1F]/60 backdrop-blur-md">
                    <div className="flex items-center justify-between px-5 py-3.5 md:px-7">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#C9A227]" />

                        <span className="text-[8px] uppercase tracking-[0.20em] text-white/35">
                          {familyShortNames[selectedProtocol.family]}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={goPrevious}
                          aria-label="Previous protocol"
                          className="flex h-9 w-9 items-center justify-center border border-white/15 text-[14px] text-white/60 transition-colors duration-300 hover:border-[#E3CE8E] hover:text-[#E3CE8E]"
                        >
                          ←
                        </button>

                        <button
                          type="button"
                          onClick={goNext}
                          aria-label="Next protocol"
                          className="flex h-9 w-9 items-center justify-center border border-white/15 text-[14px] text-white/60 transition-colors duration-300 hover:border-[#E3CE8E] hover:text-[#E3CE8E]"
                        >
                          →
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </section>

        {/* INDEX */}
        <section className="border-t border-[#0B1B33]/10 bg-[#EDF0F5]">
          <div className="mx-auto max-w-[1680px] px-5 py-16 md:px-10 lg:px-14 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                  THE INDEX
                </p>

                <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(3rem,5vw,5.5rem)] font-light leading-[0.87] tracking-[-0.055em]">
                  The complete
                  <br />
                  system.
                </h2>

                <p className="mt-6 max-w-sm text-[12px] leading-6 text-[#5A6B82]">
                  Select any protocol to bring it into the main showcase.
                </p>
              </div>

              <div className="border-t border-[#0B1B33]/15">
                {visibleTreatments.map((treatment) => {
                  const active = treatment.slug === selectedProtocol?.slug;

                  return (
                    <button
                      key={treatment.slug}
                      type="button"
                      onClick={() => goToProtocol(treatment.slug)}
                      className="group grid w-full grid-cols-[50px_1fr_auto] items-center gap-4 border-b border-[#0B1B33]/10 py-5 text-left md:grid-cols-[70px_1fr_1fr_auto]"
                    >
                      <span
                        className={`text-[9px] tracking-[0.20em] ${
                          active ? "text-[#B8901F]" : "text-[#5A6B82]"
                        }`}
                      >
                        {String(treatment.number).padStart(2, "0")}
                      </span>

                      <span
                        className={`font-[var(--font-heading)] text-2xl font-light tracking-[-0.02em] transition-colors duration-300 ${
                          active
                            ? "text-[#0B1B33]"
                            : "text-[#0B1B33]/55 group-hover:text-[#0B1B33]"
                        }`}
                      >
                        {treatment.name}
                      </span>

                      <span className="hidden text-[8px] uppercase tracking-[0.18em] text-[#5A6B82] md:block">
                        {treatment.family}
                      </span>

                      <span
                        className={`text-xl transition-all duration-300 ${
                          active
                            ? "translate-x-1 text-[#C9A227]"
                            : "text-[#0B1B33]/30 group-hover:translate-x-1 group-hover:text-[#B8901F]"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* STANDARD */}
        <section className="bg-[#F7F4EC]">
          <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8901F]">
                  ONE STANDARD
                </p>

                <h2 className="mt-6 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
                  Not a treatment menu.
                  <br />
                  A wellness system.
                </h2>

                <p className="mt-8 max-w-2xl text-[13px] leading-7 text-[#5A6B82]">
                  Protocol names describe a wellness focus, not a guaranteed
                  medical outcome. Final protocol selection, dosage and
                  administration remain subject to physician assessment and the
                  applicable professional clinical framework.
                </p>
              </div>

              <div className="border-t border-[#0B1B33]/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#B8901F]">
                  THE DRIPLABS STANDARD
                </p>

                <p className="mt-5 max-w-sm font-[var(--font-heading)] text-3xl font-light leading-tight tracking-[-0.03em]">
                  Documented.
                  <br />
                  Physician-directed.
                  <br />
                  Considered.
                </p>

                <Link
                  href="/standard"
                  className="mt-8 inline-flex min-h-12 items-center border border-[#0B1B33] px-6 text-[9px] uppercase tracking-[0.20em] transition-colors duration-300 hover:bg-[#0B1B33] hover:text-[#F7F4EC]"
                >
                  Explore the Standard →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1B33] text-[#F7F4EC]">
          <div className="mx-auto max-w-[1680px] px-5 py-20 md:px-10 lg:px-14 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-[#E3CE8E]">
                  YOUR NEXT STEP
                </p>

                <h2 className="mt-6 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.06em]">
                  Start with
                  <br />
                  the physician.
                </h2>

                <p className="mt-7 max-w-xl text-[13px] leading-7 text-white/55">
                  Explore the system, then speak with the DRIPLABS team about
                  the protocol path appropriate to you.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/book"
                  className="inline-flex min-h-12 items-center justify-center bg-[#C9A227] px-7 text-[10px] uppercase tracking-[0.22em] text-[#0B1B33] transition-colors duration-300 hover:bg-[#E3CE8E]"
                >
                  Book a Physician Consultation
                </Link>

                <Link
                  href="/circle"
                  className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:border-[#E3CE8E] hover:bg-[#E3CE8E] hover:text-[#0B1B33]"
                >
                  Explore Membership
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-[#060F1F] text-[#F7F4EC]">
          <div className="mx-auto flex max-w-[1680px] flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/40">
              DRIPLABS® — A WELLNESS-PROTOCOL BRAND OF SNNYLO WELLNESS SCIENCES
            </p>

            <p className="text-[9px] uppercase tracking-[0.20em] text-white/30">
              PHYSICIAN-SUPERVISED WELLNESS · MANUFACTURED IN INDIA
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
