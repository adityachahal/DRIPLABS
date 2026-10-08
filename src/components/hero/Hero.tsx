"use client";

import { type PointerEvent, useEffect, useRef, useState } from "react";

import {

  AnimatePresence,

  motion,

  useReducedMotion,

} from "framer-motion";

import { Manrope } from "next/font/google";

import Image from "next/image";

import Link from "next/link";

import ProtocolMenu from "./ProtocolMenu";

const manrope = Manrope({

  subsets: ["latin"],

  weight: ["300", "400", "500", "600"],

  variable: "--font-driplabs-manrope",

  display: "swap",

});

export default function Hero() {

  const reducedMotion = useReducedMotion();

  const [activeWord, setActiveWord] = useState<

    "Functional" | "Medical" | "Cellular"

  >("Functional");

  const [protocolMenuOpen, setProtocolMenuOpen] = useState(false);

  const [exploreOpen, setExploreOpen] = useState(false);

  /* =========================================================
     CURSOR VELOCITY SYSTEM
  ========================================================= */

  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const flowLayerRef = useRef<HTMLDivElement | null>(null);
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);
  const cursorLabelRef = useRef<HTMLDivElement | null>(null);
  const cursorLabelWordRef = useRef<HTMLSpanElement | null>(null);
  const gridCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const pointerStateRef = useRef({
    x: 0.5,
    y: 0.5,
    speed: 0,
    dx: 0,
    dy: 0,
  });

  const currentVelocityRef = useRef(0);
  const lastPointerRef = useRef({
    x: 0,
    y: 0,
    time: 0,
  });

  const pointerLabelIndexRef = useRef(0);
  const lastPointerLabelChangeRef = useRef(0);

  const wordIndexRef = useRef(0);
  const lastWordChangeRef = useRef(0);

  const words: Array<"Functional" | "Medical" | "Cellular"> = [
    "Functional",
    "Medical",
    "Cellular",
  ];

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    const now = performance.now();

    const previous = lastPointerRef.current;

    if (!previous.time) {
      lastPointerRef.current = {
        x: event.clientX,
        y: event.clientY,
        time: now,
      };
      return;
    }

    const dt = Math.max(8, now - previous.time);
    const dx = event.clientX - previous.x;
    const dy = event.clientY - previous.y;
    const distance = Math.hypot(dx, dy);

    // Normalised velocity. The raw pointer speed is deliberately capped
    // so extreme mouse movements never produce an extreme visual response.
    const speed = Math.min(1, distance / dt / 1.15);

    pointerStateRef.current = {
      x,
      y,
      speed,
      dx: Math.max(-1, Math.min(1, dx / 40)),
      dy: Math.max(-1, Math.min(1, dy / 40)),
    };

    // The pointer word is movement-driven, not speed-tier driven.
    // Every meaningful cursor move advances the editorial vocabulary.
    if (
      distance > 5 &&
      now - lastPointerLabelChangeRef.current > 70
    ) {
      pointerLabelIndexRef.current =
        (pointerLabelIndexRef.current + 1) % 3;

      const pointerWords = ["Nourish", "Recharge", "Restore"];
      const nextLabel =
        pointerWords[pointerLabelIndexRef.current];

      const label = cursorLabelWordRef.current;
      if (label) {
        label.style.opacity = "0";
        label.style.transform = "translateY(5px)";

        window.requestAnimationFrame(() => {
          label.textContent = nextLabel;
          label.style.transform = "translateY(0)";
          label.style.opacity = "1";
        });
      }

      lastPointerLabelChangeRef.current = now;
    }

    lastPointerRef.current = {
      x: event.clientX,
      y: event.clientY,
      time: now,
    };
  };

  const handlePointerLeave = () => {
    pointerStateRef.current.speed = 0;
    pointerStateRef.current.dx = 0;
    pointerStateRef.current.dy = 0;
  };

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = gridCanvasRef.current;
    if (!canvas) return;

    const isDesktop =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isDesktop) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastTime = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      const delta = Math.min(40, now - lastTime);
      lastTime = now;

      const pointer = pointerStateRef.current;
      const speed = currentVelocityRef.current;
      const px = pointer.x * width;
      const py = pointer.y * height;

      context.clearRect(0, 0, width, height);

      const spacing = Math.max(74, Math.min(104, width / 15));
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;
      const offsetX = -spacing;
      const offsetY = -spacing;
      const localRadius = 300;
      const points: Array<Array<{ x: number; y: number }>> = [];

      for (let row = 0; row < rows; row += 1) {
        const rowPoints: Array<{ x: number; y: number }> = [];

        for (let col = 0; col < cols; col += 1) {
          const baseX = offsetX + col * spacing;
          const baseY = offsetY + row * spacing;

          const distance = Math.hypot(baseX - px, baseY - py);
          const influence = Math.max(0, 1 - distance / localRadius);
          const falloff = influence * influence;

          // Only points close to the pointer are displaced.
          // Everything outside the local field remains mathematically still.
          const cursorPush = speed * 58;
          const safeDistance = Math.max(distance, 1);
          const pushX =
            ((baseX - px) / safeDistance) * cursorPush * falloff;
          const pushY =
            ((baseY - py) / safeDistance) * cursorPush * falloff;

          // A tiny local ripple follows the cursor. It disappears completely
          // outside the influence radius instead of moving the whole grid.
          const localRipple =
            Math.sin(distance * 0.045 - now * 0.008) *
            speed *
            5 *
            falloff;

          const driftX = pointer.dx * 14 * falloff;
          const driftY = pointer.dy * 14 * falloff;

          rowPoints.push({
            x: baseX + pushX + driftX + (baseX - px) / safeDistance * localRipple,
            y: baseY + pushY + driftY + (baseY - py) / safeDistance * localRipple,
          });
        }

        points.push(rowPoints);
      }

      // The base grid remains quiet. Interaction intensity is expressed
      // through the local deformation, nodes and cursor field.
      context.lineWidth = 0.65;
      context.strokeStyle = "rgba(140, 203, 255, 0.065)";

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const point = points[row][col];

          if (col + 1 < cols) {
            const right = points[row][col + 1];
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(right.x, right.y);
            context.stroke();
          }

          if (row + 1 < rows) {
            const down = points[row + 1][col];
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(down.x, down.y);
            context.stroke();
          }

          if (row + 1 < rows && col + 1 < cols) {
            const diagonal = points[row + 1][col + 1];
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(diagonal.x, diagonal.y);
            context.stroke();
          }

          if (row + 1 < rows && col > 0) {
            const diagonal = points[row + 1][col - 1];
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(diagonal.x, diagonal.y);
            context.stroke();
          }
        }
      }

      // Fine nodes: these make the mesh read as a designed instrument
      // rather than a generic animated background.
      context.fillStyle = "rgba(140, 203, 255, 0.14)";

      for (let row = 0; row < rows; row += 2) {
        for (let col = 0; col < cols; col += 2) {
          const point = points[row][col];
          const distance = Math.hypot(point.x - px, point.y - py);
          const influence = Math.max(0, 1 - distance / 300);

          if (influence > 0.02) {
            context.beginPath();
            context.arc(
              point.x,
              point.y,
              0.8 + influence * (1.8 + speed * 1.5),
              0,
              Math.PI * 2,
            );
            context.fill();
          }
        }
      }

      // Directional energy lines follow the cursor vector. They are sparse
      // by design so the interaction feels expensive rather than noisy.
      if (speed > 0.025) {
        const directionX = pointer.dx;
        const directionY = pointer.dy;
        const length = 80 + speed * 150;

        context.lineWidth = 0.8;
        context.strokeStyle = `rgba(22, 131, 255, ${0.08 + speed * 0.16})`;

        for (let line = -2; line <= 2; line += 1) {
          const spread = line * 18;
          const startX = px - directionX * length * 0.5 - directionY * spread;
          const startY = py - directionY * length * 0.5 + directionX * spread;
          const endX = px + directionX * length * 0.5 - directionY * spread;
          const endY = py + directionY * length * 0.5 + directionX * spread;

          context.beginPath();
          context.moveTo(startX, startY);
          context.lineTo(endX, endY);
          context.stroke();
        }
      }

      // A restrained cursor bloom makes the mesh feel physically reactive.
      const radius = 60 + speed * 120;
      const gradient = context.createRadialGradient(px, py, 0, px, py, radius);
      gradient.addColorStop(0, `rgba(22, 131, 255, ${0.16 + speed * 0.18})`);
      gradient.addColorStop(0.35, `rgba(22, 131, 255, ${0.06 + speed * 0.08})`);
      gradient.addColorStop(1, "rgba(22, 131, 255, 0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(px, py, radius, 0, Math.PI * 2);
      context.fill();

      if (delta > 0) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    const isDesktop =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isDesktop) return;

    let frame = 0;
    let lastFrame = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(40, now - lastFrame);
      lastFrame = now;

      const targetVelocity = pointerStateRef.current.speed;
      const currentVelocity = currentVelocityRef.current;
      const smoothing = 1 - Math.exp(-delta / 110);
      const velocity =
        currentVelocity + (targetVelocity - currentVelocity) * smoothing;

      currentVelocityRef.current = velocity;

      const { x, y, dx, dy } = pointerStateRef.current;
      const intensity = Math.min(1, velocity);

      const flow = flowLayerRef.current;
      const glow = cursorGlowRef.current;
      const cursorLabel = cursorLabelRef.current;
      const image = heroImageRef.current;

      if (cursorLabel) {
        const labelX = x * 100;
        const labelY = y * 100;
        const offsetX = 18 + dx * 24;
        const offsetY = 18 + dy * 24;

        cursorLabel.style.left = `${labelX}%`;
        cursorLabel.style.top = `${labelY}%`;
        cursorLabel.style.opacity = `${0.62 + intensity * 0.28}`;
        cursorLabel.style.transform =
          `translate(${offsetX}px, ${offsetY}px)`;
      }

      if (flow) {
        // Keep the global grid completely stable. Only the local canvas
        // deformation around the pointer should move.
        flow.style.transform = "translate3d(0, 0, 0)";
        flow.style.opacity = "0.045";
      }

      if (glow) {
        const glowX = x * 100;
        const glowY = y * 100;
        const glowScale = 0.78 + intensity * 0.5;

        glow.style.left = `${glowX}%`;
        glow.style.top = `${glowY}%`;
        glow.style.transform =
          `translate(-50%, -50%) scale(${glowScale})`;
        glow.style.opacity = `${0.12 + intensity * 0.28}`;
      }

      if (image) {
        const parallaxX = (x - 0.5) * -10;
        const parallaxY = (y - 0.5) * -6;
        const parallaxScale = 1.008 + intensity * 0.006;

        image.style.transform =
          `translate3d(${parallaxX}px, ${parallaxY}px, 0) ` +
          `scale(${parallaxScale})`;
      }

      // Cursor velocity controls how quickly the existing hero word changes.
      // At rest it remains slow and editorial; fast movement accelerates it.
      const wordInterval = 620 - intensity * 540;

      if (
        now - lastWordChangeRef.current > wordInterval &&
        velocity > 0.045
      ) {
        wordIndexRef.current =
          (wordIndexRef.current + 1) % words.length;

        setActiveWord(words[wordIndexRef.current]);
        lastWordChangeRef.current = now;
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [reducedMotion]);

  return (

    <section

      className={`${manrope.variable} relative min-h-[100svh] overflow-hidden bg-[#071525] text-[#F5F0E7]`}

      style={{

        fontFamily: "var(--font-driplabs-manrope), sans-serif",

      }}

      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}

    >

      {/* =========================================================

          BACKGROUND

      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden">

        <Image

          ref={heroImageRef}

          src="/images/hero/driplabs-hero-luxury.png"

          alt=""

          fill

          priority

          sizes="100vw"

          className="object-cover object-[60%_center] brightness-[1.1] saturate-[1.08] contrast-[1.02]"

          aria-hidden="true"

        />

        <canvas
          ref={gridCanvasRef}
          className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
          aria-hidden="true"
        />

        {/* General dark overlay */}

        <div className="absolute inset-0 bg-[#071525]/20" />

        {/* Left readability */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/90 via-[#071525]/45 to-transparent" />

        {/* Bottom fade */}

        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#071525] via-[#071525]/70 to-transparent" />

        {/* Top fade */}

        <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[#071525]/70 to-transparent" />

        {/* =========================================================
            CURSOR FLOW / VELOCITY FIELD
            Lightweight CSS layer driven by requestAnimationFrame.
        ========================================================= */}

        <div
          ref={flowLayerRef}
          className="pointer-events-none absolute inset-[-10%] z-[3] overflow-hidden will-change-transform"
          style={{
            backgroundImage:
              "linear-gradient(30deg, rgba(22,131,255,0.13) 1px, transparent 1px), linear-gradient(150deg, rgba(140,203,255,0.08) 1px, transparent 1px)",
            backgroundSize: "54px 54px, 54px 54px",
            opacity: 0.045,
            mixBlendMode: "screen",
          }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-[-20%] opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, rgba(22,131,255,0.07) 48%, transparent 52%, transparent 100%)",
              backgroundSize: "180px 100%",
            }}
          />

          <div
            ref={cursorGlowRef}
            className="absolute left-1/2 top-1/2 h-[32vw] w-[32vw] max-h-[520px] max-w-[520px] rounded-full bg-[#1683FF] blur-[110px] will-change-transform"
            style={{
              opacity: 0.12,
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,8,18,0.06)_48%,rgba(2,8,18,0.3)_100%)]" />
        </div>

        {/* Editorial pointer label — changes on every meaningful cursor move. */}
        <div
          ref={cursorLabelRef}
          className="pointer-events-none absolute left-1/2 top-1/2 z-[8] -translate-y-1/2"
          aria-hidden="true"
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 rounded-full border border-[#1683FF]/55" />
              <span className="h-1 w-1 rounded-full bg-[#8CCBFF] shadow-[0_0_12px_rgba(22,131,255,0.95)]" />
            </span>

            <span
              ref={cursorLabelWordRef}
              className="text-[9px] font-medium uppercase tracking-[0.30em] text-white/80 transition-[opacity,transform] duration-150 ease-out sm:text-[10px]"
            >
              Nourish
            </span>

            <span className="h-px w-8 bg-gradient-to-r from-white/35 to-transparent sm:w-10" />
          </div>
        </div>

        {/* Blue atmospheric glow */}

        <div className="pointer-events-none absolute right-[8%] top-[18%] h-[25vw] w-[25vw] rounded-full bg-[#28B8C8]/[0.06] blur-[80px]" />

        {/* Subtle film grain */}

        <div

          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"

          style={{

            backgroundImage:

              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",

          }}

        />

      </div>

      {/* =========================================================

          TOP ELECTRIC BLUE ACCENT

      ========================================================= */}

      <motion.div

        initial={{

          scaleX: reducedMotion ? 1 : 0,

          opacity: reducedMotion ? 1 : 0,

        }}

        animate={{

          scaleX: 1,

          opacity: 1,

        }}

        transition={{

          duration: reducedMotion ? 0.01 : 1,

          ease: [0.16, 1, 0.3, 1],

        }}

        className="

          absolute

          left-0

          top-0

          z-30

          h-px

          w-[30vw]

          origin-left

          bg-[#1683FF]

        "

      />

      {/* =========================================================

          MAIN CONTENT

      ========================================================= */}

      <div

        className="

          relative

          z-10

          mx-auto

          flex

          min-h-[100svh]

          max-w-[1600px]

          flex-col

          justify-start

          px-5

          pb-6

          pt-[2rem]

          sm:px-6

          md:px-10

          md:pb-8

          md:pt-[2.5rem]

          lg:px-14

        "

      >

        {/* =======================================================

            TOP RIGHT BRAND DETAIL

        ======================================================= */}

        <motion.div

          initial={{

            opacity: 0,

            y: reducedMotion ? 0 : 18,

          }}

          animate={{

            opacity: 1,

            y: 0,

          }}

          transition={{

            delay: 0,

            duration: reducedMotion ? 0.01 : 0.8,

            ease: [0.16, 1, 0.3, 1],

          }}

          className="flex items-start justify-end"

        >

          <div className="text-right text-[8px] tracking-[0.22em] text-white/45 sm:text-[9px]">

            <p />

            <p className="mt-1 text-white/30" />

          </div>

        </motion.div>

        {/* =======================================================

            HERO COPY

        ======================================================= */}

        <div className="mt-14 pb-5 md:mt-20 md:pb-7">

          {/* =====================================================

              EYEBROW

          ===================================================== */}

          <motion.div

            initial={{

              opacity: 0,

              y: reducedMotion ? 0 : 10,

            }}

            animate={{

              opacity: 1,

              y: 1,

            }}

            transition={{

              delay: reducedMotion ? 0 : 0.1,

              duration: reducedMotion ? 0.01 : 0.7,

              ease: [0.16, 1, 0.3, 1],

            }}

            className="mb-6 flex w-fit items-center"

          >

            {/* Left editorial mark */}

            <motion.span

              initial={{

                opacity: reducedMotion ? 1 : 0,

                x: reducedMotion ? 0 : 8,

              }}

              animate={{

                opacity: 1,

                x: 0,

              }}

              transition={{

                delay: reducedMotion ? 0 : 0.18,

                duration: reducedMotion ? 0.01 : 0.5,

              }}

              className="relative top-[44px] mr-2 flex items-center"

              aria-hidden="true"

            >

              <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#28B8C8]/70" />

              <span className="ml-[-1px] text-[15px] font-light leading-none text-[#28B8C8]">

                ‹

              </span>

            </motion.span>

            {/* Eyebrow */}

            <span

              className="

                relative

                top-[44px]

                mt-0

                whitespace-nowrap

                text-[8px]

                font-medium

                tracking-[0.30em]

                text-white/60

                sm:text-[9px]

              "

            >

              Nourish • Recharge • Restore

            </span>

            {/* Right editorial mark */}

            <motion.span

              initial={{

                opacity: reducedMotion ? 1 : 0,

                x: reducedMotion ? 0 : -8,

              }}

              animate={{

                opacity: 1,

                x: 0,

              }}

              transition={{

                delay: reducedMotion ? 0 : 0.18,

                duration: reducedMotion ? 0.01 : 0.5,

              }}

              className="relative top-[44px] ml-2 flex items-center"

              aria-hidden="true"

            >

              <span className="mr-[-1px] text-[15px] font-light leading-none text-[#28B8C8]">

                ›

              </span>

              <span className="h-px w-5 bg-gradient-to-l from-transparent to-[#28B8C8]/70" />

            </motion.span>

          </motion.div>

          {/* =====================================================

              MAIN HEADING

          ===================================================== */}

         <motion.h1

  initial={{

    opacity: 0,

    y: reducedMotion ? 0 : 18,

  }}

  animate={{

    opacity: 1,

    y: -2,

  }}

  transition={{

    delay: reducedMotion ? 0 : 0.18,

    duration: reducedMotion ? 0.01 : 0.8,

    ease: [0.16, 1, 0.3, 1],

  }}

  className="

    relative

    top-[40px]

    mt-4

    flex

    max-w-[720px]

    flex-col

    gap-[0.10em]

    text-[clamp(3rem,5.2vw,6.8rem)]

    font-semibold

    leading-[0.91]

    tracking-[-0.065em]

    text-[#F5F0E7]

  "

>

  <span className="block">

    Precision Nutrition.

  </span>

  <span className="block">

    <span className="inline-flex items-baseline">

      <span className="relative inline-block h-[1em] w-[10ch] shrink-0 align-baseline">

        <AnimatePresence

          mode="wait"

          initial={false}

        >

          <motion.span

            key={activeWord}

            initial={

              reducedMotion

                ? {

                    opacity: 1,

                    y: -2,

                  }

                : {

                    opacity: 0,

                    y: 18,

                    filter: "blur(6px)",

                  }

            }

            animate={{

              opacity: 1,

              y: -2,

              filter: "blur(0px)",

            }}

            exit={

              reducedMotion

                ? {

                    opacity: 0,

                  }

                : {

                    opacity: 0,

                    y: -20,

                    filter: "blur(6px)",

                  }

            }

            transition={{

              duration: reducedMotion ? 0.01 : Math.max(0.14, 0.52 - currentVelocityRef.current * 0.32),

              ease: [0.16, 1, 0.3, 1],

            }}

            className="

              absolute

              left-0

              top-0

              whitespace-nowrap

              font-semibold

              text-[#4D9BFF]

            "

          >

            {activeWord}

          </motion.span>

        </AnimatePresence>

        <span

          aria-hidden="true"

          className="

            absolute

            bottom-[-0.08em]

            left-0

            h-[2px]

            w-[3.5ch]

            bg-[#1683FF]

          "

        />

      </span>

      <span

        className="

          relative

          -ml-[1.87em]

          inline-flex

          items-baseline

          -translate-y-[0.20em]

          font-semibold

          text-[#F5F0E7]

        "

      >

        Wellness.

      </span>

    </span>

  </span>

  <span className="block">

    Longevity.

  </span>

</motion.h1>

          {/* =====================================================

              SUPPORTING COPY

          ===================================================== */}

          <motion.div

  initial={{

    opacity: 0,

    y: reducedMotion ? 0 : 14,

  }}

  animate={{

    opacity: 1,

    y: 0,

  }}

  transition={{

    delay: reducedMotion ? 0 : 0.4,

    duration: reducedMotion ? 0.01 : 0.7,

    ease: [0.16, 1, 0.3, 1],

  }}

  className="

    relative

    mt-8

    max-w-[820px]

    md:mt-14

    lg:mt-16

  "

>

  {/* =====================================================

      PRIMARY SUPPORTING LINE

  ===================================================== */}

  <p

    className="

      whitespace-normal

      text-[16px]

      font-normal

      leading-[1.45]

      tracking-[-0.015em]

      text-white/85

      sm:text-[17px]

      md:text-[19px]

      lg:text-[20px]

    "

  >

    Physician-led advanced{" "}

    <span className="font-style: italic font-semibold text-white">

      IV wellness

    </span>{" "}

    and{" "}

    <span className="font-style: italic font-semibold text-white">

      NAD+

    </span>{" "}

    personalised experiences

  </p>

  {/* =====================================================

      SECONDARY LINE

  ===================================================== */}

  <p

    className="

      mt-2

      max-w-[760px]

      text-[13px]

      font-normal

      leading-[1.55]

      tracking-[-0.005em]

      text-white/65

      sm:text-[14px]

      md:text-[15px]

    "

  >

    Delivered in a considered{" "}

    <span className="font-medium text-white/85">

      clinical environment

    </span>{" "}

    or at your{" "}

    <span className="font-medium text-white/85">

      home

    </span>

    .

  </p>

  {/* =====================================================

      RESEARCH / SCIENCE LINE

  ===================================================== */}

  <p

    className="

      mt-2

      max-w-[780px]

      text-[12px]

      font-normal

      leading-[1.6]

      tracking-[0.005em]

      text-white/50

      sm:text-[13px]

      md:text-[14px]

    "

  >

    Research &amp; Science backed documented protocols with batch<br></br>

    traceability and third party lab tested.

  </p>

</motion.div>

        </div>

        {/* =======================================================

            BOTTOM AREA

        ======================================================= */}

        <div className="mt-auto grid grid-cols-1 items-end gap-6 pt-0 md:grid-cols-12">

          {/* =====================================================

              BOTTOM LEFT — CTA

          ===================================================== */}

          <div className="md:col-span-5">

            <motion.div

              initial={{

                opacity: 0,

                y: reducedMotion ? 0 : 16,

              }}

              animate={{

                opacity: 1,

                y: 0,

              }}

              transition={{

                delay: reducedMotion ? 0 : 0.55,

                duration: reducedMotion ? 0.01 : 0.7,

                ease: [0.16, 1, 0.3, 1],

              }}

              className="

                mb-0

                flex

                flex-nowrap

                items-center

                gap-3

                md:translate-y-[8px]

              "

            >

              {/* Explore DRIPLABS */}

              <motion.button

               type="button"

                onClick={() => setExploreOpen((prev) => !prev)}

                whileHover={

                  reducedMotion

                    ? undefined

                    : {

                        y: 4,

                        scale: 1.02,

                      }

                }

                whileTap={

                  reducedMotion

                    ? undefined

                    : {

                        scale: 0.97,

                      }

                }

                transition={{

                  duration: 0.35,

                  ease: [0.22, 1, 0.36, 1],

                }}

               className="

  group

  relative

  inline-flex

  min-h-[48px]

  items-center

  justify-center

  overflow-hidden

  rounded-full

  border

  border-[#1683FF]/80

  bg-[#0066FF]

  px-8

  text-[15px]

  font-medium

  tracking-[0.055em]

  text-white

  shadow-[0_8px_35px_rgba(0,102,255,0.22)]

  transition-all

  duration-500

  hover:bg-[#1683FF]

  hover:border-[#4D9BFF]

  hover:shadow-[0_12px_45px_rgba(0,102,255,0.32)]

  sm:px-9

"

              >

                {/* Hover shine */}

                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                {/* Highlight */}

                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_15%,rgba(255,255,255,0.35),transparent_42%)] opacity-90" />

                {/* Bottom depth */}

                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-full bg-gradient-to-t from-[#075F86]/20 to-transparent" />

                <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">

                  Explore DRIPLABS

                  <span className="text-[15px] transition-transform duration-500 group-hover:translate-x-1">

                    →

                  </span>

                </span>

              </motion.button>

              <AnimatePresence>

  {exploreOpen && (

    <motion.div

      initial={

        reducedMotion

          ? undefined

          : { opacity: 0, y: -8 }

      }

      animate={

        reducedMotion

          ? undefined

          : { opacity: 1, y: 0 }

      }

      exit={

        reducedMotion

          ? undefined

          : { opacity: 0, y: -6 }

      }

      transition={{

        duration: reducedMotion ? 0.01 : 0.28,

        ease: [0.16, 1, 0.3, 1],

      }}

      className="

        absolute

        bottom-[calc(100%+14px)]

        left-0

        z-[100]

        w-[min(92vw,680px)]

      "

    >

      <div

        className="

          relative

          overflow-hidden

          rounded-[24px]

          border

          border-white/[0.13]

          bg-[#071525]/[0.97]

          shadow-[0_28px_80px_rgba(0,0,0,0.48)]

          backdrop-blur-2xl

        "

      >

        {/* =====================================================

            VERY SUBTLE TOP HIGHLIGHT

        ===================================================== */}

        <div

          className="

            pointer-events-none

            absolute

            inset-x-8

            top-0

            h-px

            bg-gradient-to-r

            from-transparent

            via-[#28B8C8]/50

            to-transparent

          "

        />

        {/* =====================================================

            HEADER

        ===================================================== */}

        <div className="relative px-6 pb-5 pt-6">

          {/* TOP LABEL */}

          <div className="flex items-center gap-2 pr-10">

            <span className="h-px w-5 bg-[#28B8C8]/80" />

            <span

              className="

                text-[10px]

                font-medium

                uppercase

                tracking-[0.28em]

                text-[#28B8C8]

              "

            >

              Partnership and Collaboration

            </span>

          </div>

          {/* CLOSE BUTTON */}

          <button

            type="button"

            onClick={() => setExploreOpen(false)}

            aria-label="Close menu"

            className="

              absolute

              right-5

              top-5

              flex

              h-8

              w-8

              items-center

              justify-center

              rounded-full

              border

              border-white/[0.08]

              text-[22px]

              font-light

              leading-none

              text-white/45

              transition-all

              duration-300

              hover:border-[#28B8C8]/40

              hover:bg-[#28B8C8]/[0.08]

              hover:text-[#28B8C8]

            "

          >

            ×

          </button>

          {/* MAIN HEADING */}

          <div className="mt-3">

            <h3

              className="

                text-[21px]

                font-medium

                leading-[1.1]

                tracking-[-0.035em]

                text-[#F5F0E7]

              "

            >

              Explore the ecosystem

            </h3>

            <p

              className="

                mt-3

                max-w-[440px]

                text-[10px]

                leading-[1.6]

                text-white/40

              "

            >

              Build meaningful relationships across healthcare,

              wellness, clinical expertise and strategic collaboration.

            </p>

          </div>

        </div>

        {/* =====================================================

            SECTION 01

            BECOME DRIPLABS DISTRIBUTOR

        ===================================================== */}

        <div className="px-6 pb-3 pt-2">

          <div className="flex items-center gap-2">

            <span className="h-px w-5 bg-[#28B8C8]/70" />

            <span

              className="

                text-[10px]

                font-medium

                uppercase

                tracking-[0.24em]

                text-[#28B8C8]

              "

            >

              Become DRIPLABS Distributor

            </span>

          </div>

        </div>

        {/* DISTRIBUTOR OPTIONS */}

        <div

          className="

            mx-3

            overflow-hidden

            rounded-[16px]

            border

            border-white/[0.07]

          "

        >

          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* =================================================

                01 — FRANCHISE / CHANNEL PARTNER

            ================================================= */}

            <Link

              href="/partners"

              onClick={() => setExploreOpen(false)}

              className="

                group

                relative

                flex

                min-h-[92px]

                items-center

                justify-between

                border-b

                border-white/[0.07]

                px-5

                py-4

                transition-all

                duration-300

                hover:bg-white/[0.035]

                sm:border-r

              "

            >

              <div className="flex items-center gap-4">

                <span

                  className="

                    text-[7px]

                    tracking-[0.18em]

                    text-white/20

                  "

                >

                  01

                </span>

                <div>

                  <h4

                    className="

                      text-[11px]

                      font-medium

                      text-white/80

                      transition-colors

                      group-hover:text-white

                    "

                  >

                    Franchise / Channel Partner

                  </h4>

                  <p

                    className="

                      mt-1

                      text-[8px]

                      text-white/30

                    "

                  >

                    Build and grow with DRIPLABS.

                  </p>

                </div>

              </div>

              <span

                className="

                  text-[11px]

                  text-white/20

                  transition-all

                  duration-300

                  group-hover:translate-x-1

                  group-hover:text-[#28B8C8]

                "

              >

                →

              </span>

            </Link>

            {/* =================================================

                02 — HEALTHCARE PROFESSIONALS

            ================================================= */}

            <Link

              href="/physicians"

              onClick={() => setExploreOpen(false)}

              className="

                group

                relative

                flex

                min-h-[92px]

                items-center

                justify-between

                border-b

                border-white/[0.07]

                px-5

                py-4

                transition-all

                duration-300

                hover:bg-white/[0.035]

              "

            >

              <div className="flex items-center gap-4">

                <span

                  className="

                    text-[7px]

                    tracking-[0.18em]

                    text-white/20

                  "

                >

                  02

                </span>

                <div>

                  <h4

                    className="

                      text-[11px]

                      font-medium

                      text-white/80

                      transition-colors

                      group-hover:text-white

                    "

                  >

                    Healthcare Professionals

                  </h4>

                  <p

                    className="

                      mt-1

                      text-[8px]

                      text-white/30

                    "

                  >

                    Physicians and healthcare specialists.

                  </p>

                </div>

              </div>

              <span

                className="

                  text-[11px]

                  text-white/20

                  transition-all

                  duration-300

                  group-hover:translate-x-1

                  group-hover:text-[#28B8C8]

                "

              >

                →

              </span>

            </Link>

            {/* =================================================

                03 — CLINICS AND HOSPITALS

            ================================================= */}

            <Link

              href="/partners#clinics"

              onClick={() => setExploreOpen(false)}

              className="

                group

                relative

                flex

                min-h-[92px]

                items-center

                justify-between

                border-b

                border-white/[0.07]

                px-5

                py-4

                transition-all

                duration-300

                hover:bg-white/[0.035]

                sm:border-r

              "

            >

              <div className="flex items-center gap-4">

                <span

                  className="

                    text-[7px]

                    tracking-[0.18em]

                    text-white/20

                  "

                >

                  03

                </span>

                <div>

                  <h4

                    className="

                      text-[11px]

                      font-medium

                      text-white/80

                      transition-colors

                      group-hover:text-white

                    "

                  >

                    Clinics and Hospitals

                  </h4>

                  <p

                    className="

                      mt-1

                      text-[8px]

                      text-white/30

                    "

                  >

                    Introduce DRIPLABS to your environment.

                  </p>

                </div>

              </div>

              <span

                className="

                  text-[11px]

                  text-white/20

                  transition-all

                  duration-300

                  group-hover:translate-x-1

                  group-hover:text-[#28B8C8]

                "

              >

                →

              </span>

            </Link>

            {/* =================================================

                04 — RESEARCH AND INSTITUTION

            ================================================= */}

            <Link

              href="/partners"

              onClick={() => setExploreOpen(false)}

              className="

                group

                relative

                flex

                min-h-[92px]

                items-center

                justify-between

                border-b

                border-white/[0.07]

                px-5

                py-4

                transition-all

                duration-300

                hover:bg-white/[0.035]

              "

            >

              <div className="flex items-center gap-4">

                <span

                  className="

                    text-[7px]

                    tracking-[0.18em]

                    text-white/20

                  "

                >

                  04

                </span>

                <div>

                  <h4

                    className="

                      text-[11px]

                      font-medium

                      text-white/80

                      transition-colors

                      group-hover:text-white

                    "

                  >

                    Research and Institution

                  </h4>

                  <p

                    className="

                      mt-1

                      text-[8px]

                      text-white/30

                    "

                  >

                    Collaborate on the future of wellness.

                  </p>

                </div>

              </div>

              <span

                className="

                  text-[11px]

                  text-white/20

                  transition-all

                  duration-300

                  group-hover:translate-x-1

                  group-hover:text-[#28B8C8]

                "

              >

                →

              </span>

            </Link>

          </div>

        </div>

        {/* =====================================================

            SECTION 02

            CONSUMERS AND CORPORATE WELLNESS

        ===================================================== */}

        <div className="px-6 pb-3 pt-6">

          <div className="flex items-center gap-2">

            <span className="h-px w-5 bg-[#28B8C8]/70" />

            <span

              className="

                text-[10px]

                font-medium

                uppercase

                tracking-[0.24em]

                text-[#28B8C8]

              "

            >

              Consumers and Corporate Wellness

            </span>

          </div>

        </div>

        {/* CONSUMER OPTIONS */}

        <div

          className="

            mx-3

            mb-4

            overflow-hidden

            rounded-[16px]

            border

            border-white/[0.07]

          "

        >

          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* =================================================

                01 — CONSUMERS

            ================================================= */}

            <Link

              href="/"

              onClick={() => setExploreOpen(false)}

              className="

                group

                relative

                flex

                min-h-[92px]

                items-center

                justify-between

                border-b

                border-white/[0.07]

                px-5

                py-4

                transition-all

                duration-300

                hover:bg-white/[0.035]

                sm:border-b-0

                sm:border-r

              "

            >

              <div className="flex items-center gap-4">

                <span

                  className="

                    text-[7px]

                    tracking-[0.18em]

                    text-white/20

                  "

                >

                  01

                </span>

                <div>

                  <h4

                    className="

                      text-[11px]

                      font-medium

                      text-white/80

                      transition-colors

                      group-hover:text-white

                    "

                  >

                    Consumers

                  </h4>

                  <p

                    className="

                      mt-1

                      text-[8px]

                      text-white/30

                    "

                  >

                    Discover the DRIPLABS experience.

                  </p>

                </div>

              </div>

              <span

                className="

                  text-[11px]

                  text-white/20

                  transition-all

                  duration-300

                  group-hover:translate-x-1

                  group-hover:text-[#28B8C8]

                "

              >

                →

              </span>

            </Link>

            {/* =================================================

                02 — CORPORATE WELLNESS

            ================================================= */}

            <Link

              href="/partners"

              onClick={() => setExploreOpen(false)}

              className="

                group

                relative

                flex

                min-h-[92px]

                items-center

                justify-between

                px-5

                py-4

                transition-all

                duration-300

                hover:bg-white/[0.035]

              "

            >

              <div className="flex items-center gap-4">

                <span

                  className="

                    text-[7px]

                    tracking-[0.18em]

                    text-white/20

                  "

                >

                  02

                </span>

                <div>

                  <h4

                    className="

                      text-[11px]

                      font-medium

                      text-white/80

                      transition-colors

                      group-hover:text-white

                    "

                  >

                    Corporate Wellness

                  </h4>

                  <p

                    className="

                      mt-1

                      text-[8px]

                      text-white/30

                    "

                  >

                    Wellness solutions for organisations and teams.

                  </p>

                </div>

              </div>

              <span

                className="

                  text-[11px]

                  text-white/20

                  transition-all

                  duration-300

                  group-hover:translate-x-1

                  group-hover:text-[#28B8C8]

                "

              >

                →

              </span>

            </Link>

          </div>

        </div>

      </div>

    </motion.div>

  )}

</AnimatePresence>

              {/* Explore protocols */}

              <motion.button

                type="button"

                onClick={() => setProtocolMenuOpen(true)}

                whileHover={

                  reducedMotion

                    ? undefined

                    : {

                        y: 4,

                        scale: 1.02,

                      }

                }

                whileTap={

                  reducedMotion

                    ? undefined

                    : {

                        scale: 0.97,

                      }

                }

                transition={{

                  duration: 0.35,

                  ease: [0.22, 1, 0.36, 1],

                }}

                className="

                  group

                  inline-flex

                  min-h-[48px]

                  items-center

                  justify-center

                  rounded-full

                  border

                  border-white/35

                  bg-white/[0.06]

                  px-8

                  text-[12px]

                  font-medium

                  tracking-[0.055em]

                  text-white

                  backdrop-blur-md

                  transition-all

                  duration-500

                  hover:border-white/60

                  hover:bg-white/[0.12]

                  sm:px-9

                "

              >

                <span className="flex items-center gap-3 whitespace-nowrap">

                  Explore protocols

                  <span className="text-[12px] transition-transform duration-500 group-hover:translate-x-1">

                    →

                  </span>

                </span>

              </motion.button>

            </motion.div>

          </div>

          {/* =====================================================

              CENTER — SCROLL

          ===================================================== */}

          <motion.div

            initial={{

              opacity: 0,

              y: reducedMotion ? 0 : 10,

            }}

            animate={{

              opacity: 1,

              y: 0,

            }}

            transition={{

              delay: reducedMotion ? 0 : 0.75,

              duration: reducedMotion ? 0.01 : 0.7,

              ease: [0.16, 1, 0.3, 1],

            }}

            className="hidden md:col-span-1 md:flex md:justify-center"

          >

            <a

              href="#about"

              className="

                group

                flex

                flex-col

                items-center

                gap-2

                text-[7px]

                font-medium

                tracking-[0.28em]

                text-white/45

                transition-colors

                duration-300

                hover:text-white/80

                sm:text-[8px]

              "

            >

              <span>Scroll</span>

              <span className="relative flex h-8 w-px overflow-hidden bg-white/20">

                <motion.span

                  animate={

                    reducedMotion

                      ? undefined

                      : {

                          y: ["-100%", "100%"],

                        }

                  }

                  transition={

                    reducedMotion

                      ? undefined

                      : {

                          duration: 1.8,

                          repeat: Infinity,

                          ease: "easeInOut",

                        }

                  }

                  className="absolute left-0 top-0 h-1/2 w-px bg-[#1683FF]"

                />

              </span>

            </a>

          </motion.div>

          {/* =====================================================

              BOTTOM RIGHT — TRUST STRIP

          ===================================================== */}

          <motion.div

            initial={{

              opacity: 0,

              y: reducedMotion ? 0 : 12,

            }}

            animate={{

              opacity: 1,

              y: 0,

            }}

            transition={{

              delay: reducedMotion ? 0 : 0.8,

              duration: reducedMotion ? 0.01 : 0.8,

              ease: [0.16, 1, 0.3, 1],

            }}

            className="md:col-span-6"

          >

            <div className="flex w-full items-stretch justify-between">

              {/* =================================================

                  01 — PHARMA-GRADE

              ================================================= */}

              <div className="flex min-w-0 flex-1 items-center justify-center px-2 sm:px-3">

                <div className="flex flex-col items-center text-center">

                  <svg

                    width="30"

                    height="30"

                    viewBox="0 0 32 32"

                    fill="none"

                    xmlns="http://www.w3.org/2000/svg"

                    className="mb-2 h-7 w-7 text-white/65 sm:h-8 sm:w-8"

                    aria-hidden="true"

                  >

                    <path

                      d="M16 3.5L27 8V14.5C27 21.5 22.4 27 16 29C9.6 27 5 21.5 5 14.5V8L16 3.5Z"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinejoin="round"

                    />

                    <path

                      d="M11.5 16L14.5 19L20.8 12.7"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinecap="round"

                      strokeLinejoin="round"

                    />

                  </svg>

                  <span className="whitespace-nowrap text-[7px] font-medium leading-[1.7] tracking-[0.10em] text-white/70 sm:text-[8px]">

                    Pharma-grade

                    <br />

                    formulations

                  </span>

                </div>

              </div>

              <div className="my-1 w-px bg-white/25" />

              {/* =================================================

                  02 — PHYSICIAN GUIDED

              ================================================= */}

              <div className="flex min-w-0 flex-1 items-center justify-center px-2 sm:px-3">

                <div className="flex flex-col items-center text-center">

                  <svg

                    width="30"

                    height="30"

                    viewBox="0 0 32 32"

                    fill="none"

                    xmlns="http://www.w3.org/2000/svg"

                    className="mb-2 h-7 w-7 text-white/65 sm:h-8 sm:w-8"

                    aria-hidden="true"

                  >

                    <path

                      d="M8 3.5H19L25 9.5V28.5H8V3.5Z"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinejoin="round"

                    />

                    <path

                      d="M19 3.5V9.5H25"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinejoin="round"

                    />

                    <path

                      d="M12 15H21"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinecap="round"

                    />

                    <path

                      d="M12 19H21"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinecap="round"

                    />

                    <path

                      d="M12 23H18"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinecap="round"

                    />

                  </svg>

                  <span className="whitespace-nowrap text-[7px] font-medium leading-[1.7] tracking-[0.10em] text-white/70 sm:text-[8px]">

                    Physician

                    <br />

                    guided

                  </span>

                </div>

              </div>

              <div className="my-1 w-px bg-white/25" />

              {/* =================================================

                  03 — INDIAN PHARMACOPOEIA

              ================================================= */}

              <div className="flex min-w-0 flex-1 items-center justify-center px-2 sm:px-3">

                <div className="flex flex-col items-center text-center">

                  <svg

                    width="30"

                    height="30"

                    viewBox="0 0 32 32"

                    fill="none"

                    xmlns="http://www.w3.org/2000/svg"

                    className="mb-2 h-7 w-7 text-white/65 sm:h-8 sm:w-8"

                    aria-hidden="true"

                  >

                    <path

                      d="M16 3V29"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M4.74 9.5L27.26 22.5"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M4.74 22.5L27.26 9.5"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M16 3L13.5 6"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M16 3L18.5 6"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M16 29L13.5 26"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M16 29L18.5 26"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M4.74 9.5L8.5 9"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M4.74 9.5L6.5 12.5"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M27.26 22.5L23.5 23"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M27.26 22.5L25.5 19.5"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M27.26 9.5L23.5 9"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M27.26 9.5L25.5 12.5"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M4.74 22.5L8.5 23"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                    <path

                      d="M4.74 22.5L6.5 19.5"

                      stroke="currentColor"

                      strokeWidth="1.4"

                      strokeLinecap="round"

                    />

                  </svg>

                  <span className="whitespace-nowrap text-[7px] font-medium leading-[1.7] tracking-[0.10em] text-white/70 sm:text-[8px]">

                    Indian Pharmacopoeia

                    <br />

                    compliant

                  </span>

                </div>

              </div>

              <div className="my-1 w-px bg-white/25" />

              {/* =================================================

                  04 — WHO-GMP-GLP

              ================================================= */}

              <div className="flex min-w-0 flex-1 items-center justify-center px-2 sm:px-3">

                <div className="flex flex-col items-center text-center">

                  <svg

                    width="30"

                    height="30"

                    viewBox="0 0 32 32"

                    fill="none"

                    xmlns="http://www.w3.org/2000/svg"

                    className="mb-2 h-7 w-7 text-white/65 sm:h-8 sm:w-8"

                    aria-hidden="true"

                  >

                    <path

                      d="M12 4H20"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinecap="round"

                    />

                    <path

                      d="M14 4V12L7 24C6.1 25.55 7.22 27.5 9 27.5H23C24.78 27.5 25.9 25.55 25 24L18 12V4"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinecap="round"

                      strokeLinejoin="round"

                    />

                    <path

                      d="M10 21H22"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinecap="round"

                    />

                    <path

                      d="M11.5 18.5H20.5"

                      stroke="currentColor"

                      strokeWidth="1.5"

                      strokeLinecap="round"

                    />

                  </svg>

                  <span className="whitespace-nowrap text-[7px] font-medium leading-[1.7] tracking-[0.10em] text-white/70 sm:text-[8px]">

                    WHO-GMP-GLP

                    <br />

                    certified

                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* =========================================================

          PROTOCOL MENU

      ========================================================= */}

      <ProtocolMenu

        open={protocolMenuOpen}

        onClose={() => setProtocolMenuOpen(false)}

      />

    </section>

  );

}