"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type SignatureProtocol = {
  number: string;
  slug: string;
  name: string;
  family: string;
  category: string;
  description: string;
  image: string;
};

/* =========================================================
   SIGNATURE PROTOCOLS
   Only uses assets that physically exist in public/images.
========================================================= */

const SIGNATURE_PROTOCOLS: SignatureProtocol[] = [
  {
    number: "01",
    slug: "glamour",
    name: "GLAMOUR",
    family: "Skin & Beauty",
    category: "Cellular Radiance Protocol",
    description:
      "A considered infusion experience centred on skin vitality, antioxidant support and cellular radiance.",
    image: "/images/brand/glamour_molecular.png",
  },
  {
    number: "02",
    slug: "renew",
    name: "RENEW",
    family: "Cellular & Longevity",
    category: "Cellular Renewal Protocol",
    description:
      "A cellular-focused protocol centred around renewal, energy and longevity-oriented wellness support.",
    image: "/images/brand/renew_molecular.png",
  },
  {
    number: "03",
    slug: "nadx",
    name: "NADx",
    family: "Cellular & Longevity",
    category: "NAD+ Infusion Programme",
    description:
      "An extended NAD+ infusion programme designed around cellular wellness, energy metabolism and longevity.",
    image: "/images/decode-vial/nad-molecular.png",
  },
  {
    number: "04",
    slug: "recover-plus",
    name: "RECOVER+",
    family: "Recovery & Immune",
    category: "Clinical Recovery Protocol",
    description:
      "A recovery-focused protocol centred around hydration, nutritional replenishment and systemic recovery.",
    image: "/images/brand/recover_molecular.png",
  },
];

/* =========================================================
   PARTICLES
========================================================= */

const PARTICLES = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  x: (index * 37.7) % 100,
  y: (index * 61.3) % 100,
  size: index % 5 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
  duration: 5 + (index % 7),
  delay: (index % 9) * 0.45,
}));

/* =========================================================
   ACCENTS
========================================================= */

const ACCENTS: Record<string, string> = {
  "Skin & Beauty": "#4D9BFF",
  "Cellular & Longevity": "#1683FF",
  "Recovery & Immune": "#8CCBFF",
};

function accentFor(protocol: SignatureProtocol) {
  return ACCENTS[protocol.family] ?? "#1683FF";
}

/* =========================================================
   COMPONENT
========================================================= */

export default function SignatureProtocols() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const active = SIGNATURE_PROTOCOLS[activeIndex];

  /* =======================================================
     SCROLL → ACTIVE PROTOCOL
  ======================================================= */

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (value) => {
      const clamped = Math.min(0.999999, Math.max(0, value));

      const nextIndex = Math.min(
        SIGNATURE_PROTOCOLS.length - 1,
        Math.floor(clamped * SIGNATURE_PROTOCOLS.length),
      );

      setActiveIndex((current) =>
        current === nextIndex ? current : nextIndex,
      );
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  /* =======================================================
     MOUSE PARALLAX
  ======================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });

  const productX = useTransform(smoothMouseX, [-1, 1], [-18, 18]);
  const productY = useTransform(smoothMouseY, [-1, 1], [-14, 14]);

  const productRotate = useTransform(
    smoothMouseX,
    [-1, 1],
    [-2.5, 2.5],
  );

  const glowX = useTransform(smoothMouseX, [-1, 1], ["42%", "58%"]);
  const glowY = useTransform(smoothMouseY, [-1, 1], ["42%", "58%"]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* =======================================================
     ACTIVE INDEX HELPERS
  ======================================================= */

  const activeNumber = useMemo(
    () => String(activeIndex + 1).padStart(2, "0"),
    [activeIndex],
  );

  /* =======================================================
     JUMP TO PROTOCOL
  ======================================================= */

  const jumpToProtocol = (index: number) => {
    const section = sectionRef.current;

    if (!section) return;

    const boundedIndex = Math.max(
      0,
      Math.min(SIGNATURE_PROTOCOLS.length - 1, index),
    );

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    const sectionHeight = section.offsetHeight;

    const viewportHeight = window.innerHeight;

    const usableHeight = Math.max(
      1,
      sectionHeight - viewportHeight,
    );

    const progress =
      boundedIndex / SIGNATURE_PROTOCOLS.length;

    const targetY = sectionTop + usableHeight * progress;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  /* =======================================================
     NEXT / PREVIOUS
  ======================================================= */

  const goNext = () => {
    jumpToProtocol(
      Math.min(
        SIGNATURE_PROTOCOLS.length - 1,
        activeIndex + 1,
      ),
    );
  };

  const goPrevious = () => {
    jumpToProtocol(Math.max(0, activeIndex - 1));
  };

  /* =======================================================
     IMAGE ENTER ANIMATION
  ======================================================= */

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.94,
      y: 22,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      scale: 1.025,
      y: -12,
      filter: "blur(8px)",
    },
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] bg-[#020812] text-[#F7FAFF]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ===================================================
            BACKGROUND
        =================================================== */}

        <div className="absolute inset-0 overflow-hidden">
          {/* Base */}
          <div className="absolute inset-0 bg-[#020812]" />

          {/* Deep blue atmosphere */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(0,102,255,0.13),transparent_36%),radial-gradient(circle_at_15%_80%,rgba(22,131,255,0.07),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(77,155,255,0.06),transparent_28%)]" />

          {/* Interactive glow */}
          <motion.div
            className="absolute h-[52vw] w-[52vw] rounded-full blur-[120px]"
            style={{
              left: glowX,
              top: glowY,
              translateX: "-50%",
              translateY: "-50%",
              background:
                "radial-gradient(circle, rgba(0,102,255,0.11) 0%, rgba(0,102,255,0.035) 38%, transparent 70%)",
            }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(140,203,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(140,203,255,.4) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage:
                "radial-gradient(circle at center, black 20%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 20%, transparent 78%)",
            }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,8,18,.72)_100%)]" />

          {/* Particles */}
          {!reduceMotion &&
            PARTICLES.map((particle) => (
              <motion.span
                key={particle.id}
                className="absolute rounded-full bg-[#8CCBFF]"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: particle.size,
                  height: particle.size,
                }}
                animate={{
                  opacity: [0.08, 0.45, 0.08],
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
        </div>

        {/* ===================================================
            TOP LABEL
        =================================================== */}

        <div className="absolute left-6 right-6 top-6 z-30 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8 lg:left-12 lg:right-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#1683FF]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.26em] text-[#8CCBFF]/75">
              Signature Protocols
            </span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
              DRIPLABS
            </span>

            <span className="h-px w-10 bg-white/10" />

            <span className="text-[9px] tabular-nums tracking-[0.2em] text-white/45">
              {activeNumber} / {String(SIGNATURE_PROTOCOLS.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ===================================================
            GIANT BACKGROUND NUMBER
        =================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={`number-${active.slug}`}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 30 }
            }
            animate={
              reduceMotion
                ? { opacity: 0.035 }
                : { opacity: 0.035, y: 0 }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -20 }
            }
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute left-[2%] top-[8%] z-[1] select-none font-serif text-[clamp(13rem,31vw,38rem)] leading-none tracking-[-0.08em] text-[#8CCBFF]"
          >
            {active.number}
          </motion.div>
        </AnimatePresence>

        {/* ===================================================
            MAIN STAGE
        =================================================== */}

        <div
          className="relative z-10 flex h-full items-center justify-center px-6 pt-20 sm:px-8 lg:px-12"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          onMouseEnter={() => setIsHovering(true)}
        >
          {/* =================================================
              ORBITAL SYSTEM
          ================================================= */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(76vw,780px)] -translate-x-1/2 -translate-y-1/2">
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#1683FF]/10"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: 360 }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            />

            {/* Middle ring */}
            <motion.div
              className="absolute inset-[9%] rounded-full border border-[#4D9BFF]/10"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: -360 }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 32,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            />

            {/* Inner ring */}
            <motion.div
              className="absolute inset-[21%] rounded-full border border-[#8CCBFF]/[0.07]"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: 360 }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            />

            {/* Orbital markers */}
            <motion.span
              className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1683FF] shadow-[0_0_18px_rgba(22,131,255,.9)]"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: 360 }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            />

            <motion.span
              className="absolute bottom-[9%] right-[9%] h-1 w-1 rounded-full bg-[#8CCBFF] shadow-[0_0_14px_rgba(140,203,255,.9)]"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: -360 }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 32,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            />
          </div>

          {/* =================================================
              PRODUCT VISUAL
          ================================================= */}

          <motion.div
            className="pointer-events-none absolute left-1/2 top-[45%] z-[3] w-[min(65vw,650px)] -translate-x-1/2 -translate-y-1/2 sm:top-[47%]"
            style={
              reduceMotion
                ? undefined
                : {
                    x: productX,
                    y: productY,
                    rotateZ: productRotate,
                  }
            }
          >
            {/* Glow behind image */}
            <div
              className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
              style={{
                background: `radial-gradient(circle, ${accentFor(active)}26 0%, transparent 68%)`,
              }}
            />

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`product-${active.slug}`}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: reduceMotion ? 0.2 : 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto aspect-square w-full"
              >
                <Image
                  src={active.image}
                  alt={`${active.name} molecular visual`}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 65vw, 650px"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Product halo */}
            <div
              className="absolute left-1/2 top-1/2 aspect-square w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                borderColor: `${accentFor(active)}18`,
              }}
            />
          </motion.div>

          {/* =================================================
              LEFT METADATA
          ================================================= */}

          <div className="absolute left-6 top-1/2 z-20 hidden w-[220px] -translate-y-1/2 lg:block xl:left-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={`meta-${active.slug}`}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -18 }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, x: 0 }
                }
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 18 }
                }
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="h-px w-8"
                    style={{
                      backgroundColor: accentFor(active),
                    }}
                  />

                  <span className="text-[9px] uppercase tracking-[0.24em] text-white/40">
                    Protocol
                  </span>
                </div>

                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8CCBFF]/65">
                  {active.family}
                </p>

                <p className="mt-3 max-w-[180px] text-[11px] leading-6 text-white/40">
                  {active.description}
                </p>

                <Link
                  href={`/protocols/${active.slug}`}
                  className="group mt-7 inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white"
                >
                  Explore protocol

                  <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#1683FF]/70 group-hover:bg-[#1683FF]/10">
                    <span className="h-px w-2.5 bg-current transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =================================================
              RIGHT IDENTITY
          ================================================= */}

          <div className="absolute bottom-[17%] left-6 right-6 z-20 text-center sm:bottom-[14%] lg:bottom-[15%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`identity-${active.slug}`}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 18 }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0 }
                }
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -15 }
                }
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-3 flex items-center justify-center gap-3">
                  <span className="text-[9px] uppercase tracking-[0.26em] text-white/35">
                    {active.category}
                  </span>
                </div>

                <h2 className="font-serif text-[clamp(3.8rem,9vw,8rem)] font-normal leading-[0.78] tracking-[-0.055em] text-white">
                  {active.name}
                </h2>

                <p className="mx-auto mt-5 max-w-[420px] text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Physician-directed wellness protocol
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =================================================
              MOBILE DESCRIPTION
          ================================================= */}

          <div className="absolute bottom-[8%] left-6 right-6 z-20 text-center lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-copy-${active.slug}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mx-auto max-w-[390px] text-[11px] leading-5 text-white/40">
                  {active.description}
                </p>

                <Link
                  href={`/protocols/${active.slug}`}
                  className="mt-4 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#8CCBFF]"
                >
                  Explore protocol
                  <span>→</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ===================================================
            DESKTOP PROTOCOL INDEX
        =================================================== */}

        <div className="absolute bottom-8 left-6 right-6 z-30 hidden lg:block xl:left-12 xl:right-12">
          <div className="flex items-end justify-between gap-10">
            <div className="flex items-center gap-2">
              {SIGNATURE_PROTOCOLS.map((protocol, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={protocol.slug}
                    type="button"
                    onClick={() => jumpToProtocol(index)}
                    className="group relative flex items-center gap-3 px-2 py-2 text-left"
                    aria-label={`View ${protocol.name}`}
                  >
                    <span
                      className={[
                        "text-[9px] tabular-nums tracking-[0.18em] transition-colors duration-300",
                        isActive
                          ? "text-white"
                          : "text-white/25 group-hover:text-white/60",
                      ].join(" ")}
                    >
                      {protocol.number}
                    </span>

                    <span
                      className={[
                        "text-[9px] uppercase tracking-[0.16em] transition-all duration-300",
                        isActive
                          ? "text-[#8CCBFF]"
                          : "text-white/25 group-hover:text-white/55",
                      ].join(" ")}
                    >
                      {protocol.name}
                    </span>

                    <span
                      className={[
                        "absolute bottom-0 left-2 right-2 h-px origin-left transition-transform duration-500",
                        isActive
                          ? "scale-x-100 bg-[#1683FF]"
                          : "scale-x-0 bg-white/20 group-hover:scale-x-100",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrevious}
                disabled={activeIndex === 0}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-white/30 hover:text-white disabled:pointer-events-none disabled:opacity-20"
                aria-label="Previous protocol"
              >
                ←
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={
                  activeIndex === SIGNATURE_PROTOCOLS.length - 1
                }
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-white/30 hover:text-white disabled:pointer-events-none disabled:opacity-20"
                aria-label="Next protocol"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE PROTOCOL INDEX
        =================================================== */}

        <div className="absolute bottom-5 left-6 right-6 z-30 lg:hidden">
          <div className="flex items-center justify-center gap-2">
            {SIGNATURE_PROTOCOLS.map((protocol, index) => (
              <button
                key={protocol.slug}
                type="button"
                onClick={() => jumpToProtocol(index)}
                aria-label={`View ${protocol.name}`}
                className={[
                  "h-1 rounded-full transition-all duration-500",
                  index === activeIndex
                    ? "w-8 bg-[#1683FF]"
                    : "w-2 bg-white/20",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* ===================================================
            PROGRESS LINE
        =================================================== */}

        <motion.div
          className="absolute bottom-0 left-0 z-40 h-px origin-left bg-[#1683FF]"
          style={{
            scaleX: smoothProgress,
            width: "100%",
          }}
        />

        {/* ===================================================
            CORNER DETAILS
        =================================================== */}

        <div className="pointer-events-none absolute bottom-8 left-6 z-20 hidden flex-col gap-1 text-[7px] uppercase tracking-[0.22em] text-white/20 xl:flex">
          <span>DRIPLABS / PROTOCOL SYSTEM</span>
          <span>PHYSICIAN DIRECTED</span>
        </div>

        <div className="pointer-events-none absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 text-[7px] uppercase tracking-[0.28em] text-white/15 xl:block">
          CELLULAR WELLNESS / PRECISION / CARE
        </div>

        {/* ===================================================
            HOVER INDICATOR
        =================================================== */}

        {!reduceMotion && isHovering && (
          <motion.div
            className="pointer-events-none absolute right-6 top-20 z-30 hidden items-center gap-2 text-[7px] uppercase tracking-[0.22em] text-white/20 lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="h-1 w-1 rounded-full bg-[#1683FF]" />
            Move to explore
          </motion.div>
        )}
      </div>
    </section>
  );
}