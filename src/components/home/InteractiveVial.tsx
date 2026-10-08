"use client";

import { useEffect, useRef, useState } from "react";

type VialStep = {
  number: string;
  title: string;
  short: string;
  status: string;
  caption: string;
  liquid: number;
};

const STEPS: VialStep[] = [
  {
    number: "01",
    title: "Physician-Led",
    short: "CLINICAL",
    status: "PHYSICIAN REVIEW",
    caption: "Every protocol begins with clinical oversight.",
    liquid: 72,
  },
  {
    number: "02",
    title: "Licensed & Pharma-Grade",
    short: "PHARMA",
    status: "QUALITY CONTROL",
    caption: "Formulations follow pharmaceutical discipline.",
    liquid: 62,
  },
  {
    number: "03",
    title: "Clinical Evidence & Documented Protocols",
    short: "EVIDENCE",
    status: "DOCUMENTED",
    caption: "Protocols are connected to documented evidence.",
    liquid: 78,
  },
  {
    number: "04",
    title: "Batch Traceable",
    short: "TRACE",
    status: "BATCH VERIFIED",
    caption: "Every vial carries a traceable product record.",
    liquid: 54,
  },
  {
    number: "05",
    title: "Third-Party Tested",
    short: "TESTED",
    status: "LAB VERIFIED",
    caption: "Quality verification forms part of the product record.",
    liquid: 68,
  },
  {
    number: "06",
    title: "Researched & Science Backed",
    short: "SCIENCE",
    status: "RESEARCH LINKED",
    caption: "Formulation decisions connect to scientific references.",
    liquid: 88,
  },
];

export default function InteractiveVial() {
  const [activeStep, setActiveStep] = useState(0);

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const step = STEPS[activeStep];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        setActiveStep((prev) => (prev + 1) % STEPS.length);
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        setActiveStep(
          (prev) => (prev - 1 + STEPS.length) % STEPS.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setRotation({
      x: -y * 7,
      y: x * 7,
    });
  };

  const resetRotation = () => {
    setRotation({
      x: 0,
      y: 0,
    });
  };

  return (
    <div
      ref={containerRef}
      className="
        relative
        flex
        h-full
        min-h-[430px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#020914]
        [perspective:1200px]
      "
      onPointerMove={handlePointerMove}
      onPointerLeave={resetRotation}
    >
      {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* =========================================================
          ATMOSPHERIC BLUE LIGHT
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#006BFF]/[0.08]
          blur-[90px]
        "
      />

      {/* =========================================================
          TOP SYSTEM LABEL
      ========================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-7
          -translate-x-1/2
          whitespace-nowrap
          text-[9px]
          uppercase
          tracking-[0.32em]
          text-[#6EA8E8]
        "
      >
        DRIPLABS STANDARD
      </div>

      {/* =========================================================
          STATUS — LEFT
      ========================================================= */}

      <div
        className="
          absolute
          left-6
          top-12
          hidden
          text-[7px]
          uppercase
          tracking-[0.18em]
          text-white/25
          sm:block
        "
      >
        PRODUCT RECORD
        <div className="mt-1 text-white/50">
          {step.short}
        </div>
      </div>

      {/* =========================================================
          STATUS — RIGHT
      ========================================================= */}

      <div
        className="
          absolute
          right-6
          top-12
          hidden
          text-right
          text-[7px]
          uppercase
          tracking-[0.18em]
          text-white/25
          sm:block
        "
      >
        VERIFICATION
        <div className="mt-1 text-[#1683FF]">
          READY
        </div>
      </div>

      {/* =========================================================
          ROTATING SYSTEM RINGS
      ========================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[285px]
          w-[285px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#1683FF]/20
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[235px]
          w-[235px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#1683FF]/15
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[185px]
          w-[185px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-[#1683FF]/15
          animate-[spin_30s_linear_infinite]
        "
      />

      {/* =========================================================
          ORBIT DOTS
      ========================================================= */}

      <div
        className="
          absolute
          left-[calc(50%+138px)]
          top-[calc(50%-3px)]
          h-1.5
          w-1.5
          rounded-full
          bg-[#1683FF]
          shadow-[0_0_12px_#1683FF]
        "
      />

      <div
        className="
          absolute
          left-[calc(50%-95px)]
          top-[calc(50%-95px)]
          h-1
          w-1
          rounded-full
          bg-[#8BC1FF]
        "
      />

      <div
        className="
          absolute
          left-[calc(50%-125px)]
          top-[calc(50%+80px)]
          h-1
          w-1
          rounded-full
          bg-[#1683FF]
        "
      />

      {/* =========================================================
          VIAL 3D GROUP
      ========================================================= */}

      <div
        className="
          relative
          z-20
          h-[270px]
          w-[150px]
          transition-transform
          duration-300
          ease-out
        "
        style={{
          transform: `
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
          `,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Vial shadow */}

        <div
          className="
            absolute
            bottom-[-30px]
            left-1/2
            h-5
            w-[110px]
            -translate-x-1/2
            rounded-[50%]
            bg-black/60
            blur-xl
          "
        />

        {/* =======================================================
            VIAL CAP
        ======================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[34px]
            w-[72px]
            -translate-x-1/2
            rounded-t-[10px]
            rounded-b-[4px]
            border
            border-white/20
            bg-gradient-to-b
            from-white/20
            to-white/[0.04]
            shadow-[inset_0_1px_0_rgba(255,255,255,.25)]
            backdrop-blur-md
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[30px]
            h-[15px]
            w-[86px]
            -translate-x-1/2
            rounded-md
            border
            border-white/15
            bg-[#13243A]
          "
        />

        {/* =======================================================
            GLASS BODY
        ======================================================= */}

        <div
          className="
            absolute
            bottom-[8px]
            left-1/2
            h-[225px]
            w-[105px]
            -translate-x-1/2
            overflow-hidden
            rounded-[24px]
            border
            border-white/20
            bg-gradient-to-r
            from-white/[0.12]
            via-white/[0.025]
            to-white/[0.10]
            shadow-[inset_10px_0_25px_rgba(255,255,255,.06),inset_-10px_0_25px_rgba(0,0,0,.25),0_25px_60px_rgba(0,0,0,.35)]
            backdrop-blur-md
          "
        >
          {/* =====================================================
              LIQUID
          ===================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              transition-all
              duration-1000
              ease-[cubic-bezier(.22,1,.36,1)]
            "
            style={{
              height: `${step.liquid}%`,
            }}
          >
            {/* Liquid body */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0055D9]
                via-[#0878FF]/80
                to-[#1683FF]/30
              "
            />

            {/* Liquid glow */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-5
                w-[120px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#1683FF]/40
                blur-md
              "
            />

            {/* Floating particles */}

            <span
              className="
                absolute
                left-[28%]
                top-[25%]
                h-1
                w-1
                rounded-full
                bg-white/70
                animate-[float_3s_ease-in-out_infinite]
              "
            />

            <span
              className="
                absolute
                left-[62%]
                top-[45%]
                h-1.5
                w-1.5
                rounded-full
                bg-white/50
                animate-[float_4s_ease-in-out_infinite]
              "
            />

            <span
              className="
                absolute
                left-[45%]
                top-[70%]
                h-1
                w-1
                rounded-full
                bg-white/60
                animate-[float_3.5s_ease-in-out_infinite]
              "
            />
          </div>

          {/* =====================================================
              GLASS HIGHLIGHT
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-3
              left-3
              top-3
              w-[12px]
              rounded-full
              bg-gradient-to-b
              from-white/30
              via-white/10
              to-transparent
              blur-[1px]
            "
          />

          {/* =====================================================
              LABEL
          ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-[88px]
              w-[42px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              border
              border-white/10
              bg-[#020914]/90
              shadow-[0_10px_30px_rgba(0,0,0,.35)]
              backdrop-blur-md
            "
          >
            <span
              className="
                rotate-[-90deg]
                whitespace-nowrap
                text-[8px]
                font-medium
                tracking-[0.32em]
                text-white
              "
            >
              DRIPLABS
            </span>
          </div>
        </div>

        {/* =======================================================
            BASE
        ======================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[20px]
            w-[125px]
            -translate-x-1/2
            rounded-full
            border
            border-[#1683FF]/25
            bg-[#07182B]
            shadow-[0_0_25px_rgba(0,107,255,.12)]
          "
        />
      </div>

      {/* =========================================================
          STEP STATUS
      ========================================================= */}

      <div
        key={activeStep}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          text-center
          animate-[fadeUp_.45s_ease-out]
        "
      >
        <div
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-[#1683FF]
          "
        >
          {step.status}
        </div>

        <div
          className="
            mt-2
            font-serif
            text-[19px]
            text-white
          "
        >
          {step.caption}
        </div>
      </div>

      {/* =========================================================
          STEP INDICATOR
      ========================================================= */}

      <div
        className="
          absolute
          bottom-4
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-1.5
        "
      >
        {STEPS.map((item, index) => (
          <button
            key={item.number}
            type="button"
            aria-label={`Show step ${item.number}: ${item.title}`}
            onClick={() => setActiveStep(index)}
            className={`
              h-1
              rounded-full
              transition-all
              duration-500
              ${
                activeStep === index
                  ? "w-6 bg-[#1683FF]"
                  : "w-1.5 bg-white/20 hover:bg-white/50"
              }
            `}
          />
        ))}
      </div>

      {/* =========================================================
          BOTTOM SYSTEM LABEL
      ========================================================= */}

      <div
        className="
          absolute
          bottom-3
          left-7
          hidden
          text-[6px]
          uppercase
          tracking-[0.22em]
          text-white/20
          sm:block
        "
      >
        CLINICAL SYSTEM
      </div>

      <div
        className="
          absolute
          bottom-3
          right-7
          hidden
          text-[6px]
          uppercase
          tracking-[0.22em]
          text-white/20
          sm:block
        "
      >
        {String(activeStep + 1).padStart(2, "0")} / 06
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }

          50% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translate(-50%, 8px);
          }

          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[spin_30s_linear_infinite\\],
          .animate-\\[float_3s_ease-in-out_infinite\\],
          .animate-\\[float_4s_ease-in-out_infinite\\],
          .animate-\\[float_3\\.5s_ease-in-out_infinite\\],
          .animate-\\[fadeUp_\\.45s_ease-out\\] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}