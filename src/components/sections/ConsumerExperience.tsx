"use client";



import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import {
  Stethoscope,
  ClipboardCheck,
  Droplets,
  HeartPulse,
} from "lucide-react";



const steps = [

  {

    number: "01",
    icon: Stethoscope,

    title: "Consultation & Assessment",

    shortTitle: "Consultation.",

    description:

      "A physician reviews your goals, health history and suitability before any protocol is confirmed.",

    detail:

      "Every DRIPLABS journey begins with professional assessment. Your goals, relevant health information and suitability are reviewed before a protocol is confirmed.",

    image: "/images/journey/step-01-consultation.jpg",

    imagePosition: "60% center",

  },

  {

    number: "02",
    icon: ClipboardCheck,

    title: "Personalised Recommendation",

    shortTitle: "Recommendation.",

    description:

      "Your protocol is selected around your profile, body weight and wellness goals.",

    detail:

      "Following assessment, the treating physician determines the appropriate protocol, dosage and treatment plan for your individual profile.",

    image: "/images/journey/step-02-recommendation.jpg",

    imagePosition: "48% center",

  },

  {

    number: "03",
    icon: Droplets,

    title: "Comfortable IV Session",

    shortTitle: "IV Session.",

    description:

      "Your treatment is administered by trained medical professionals in a comfortable, monitored setting.",

    detail:

      "Your selected protocol is administered by trained medical professionals in a carefully monitored environment designed around comfort and care.",

    image: "/images/journey/step-03-iv-session.jpg",

    imagePosition: "55% center",

  },

  {

    number: "04",
    icon: HeartPulse,

    title: "Recovery & Follow-Up",

    shortTitle: "Follow-Up.",

    description:

      "Your experience continues with structured recovery guidance and follow-up.",

    detail:

      "DRIPLABS considers the journey beyond the infusion, with appropriate recovery guidance and structured follow-up forming part of the experience.",

    image: "/images/journey/step-04-follow-up.jpg",

    imagePosition: "66% center",

  },

];



const FALLBACK_IMAGE = "/images/hero/driplabs-hero.jpg";

const AUTO_ADVANCE = 6500;



export default function ConsumerExperience() {

  const [activeStep, setActiveStep] = useState(0);

  const [paused, setPaused] = useState(false);

  const [imageSrc, setImageSrc] = useState(steps[0].image);



  const active = steps[activeStep];



  /*

   * Automatically move through the roadmap.

   * Pauses while the user is interacting with the section.

   */

  useEffect(() => {

    if (paused) return;



    const interval = window.setInterval(() => {

      setActiveStep((current) => (current + 1) % steps.length);

    }, AUTO_ADVANCE);



    return () => window.clearInterval(interval);

  }, [paused]);



  /*

   * Update image whenever roadmap step changes.

   */

  useEffect(() => {

    setImageSrc(active.image);

  }, [active]);



  const selectStep = (index: number) => {

    setActiveStep(index);

    setImageSrc(steps[index].image);

  };



  return (

    <section

      className="

        relative

        overflow-hidden

        bg-[#f5f1e8]

        text-[#0b1b33]

        lg:h-[calc(100svh-80px)]

        lg:min-h-[680px]

      "

      onMouseEnter={() => setPaused(true)}

      onMouseLeave={() => setPaused(false)}

    >

      {/* ============================================================

          ATMOSPHERE

      ============================================================ */}



      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[8%] top-[15%] h-[260px] w-[260px] rounded-full bg-[#1683FF]/[0.045] blur-[100px]" />



        <div className="absolute bottom-[5%] right-[8%] h-[240px] w-[240px] rounded-full bg-[#10233c]/[0.035] blur-[100px]" />

      </div>



      {/* ============================================================

          MAIN CONTAINER



          Desktop:

          The complete Journey section is locked to the viewport.



          Mobile:

          Natural height is preserved for readability.

      ============================================================ */}



      <div

        className="

          relative

          mx-auto

          flex

          min-h-[calc(100svh-80px)]

          max-w-[1500px]

          flex-col

          px-5

          py-7

          sm:px-7

          md:px-9

          lg:h-full

          lg:min-h-0

          lg:px-12

          lg:py-6

          xl:px-16

        "

      >

        {/* ============================================================

            HEADER

        ============================================================ */}



        <header

          className="

            grid

            shrink-0

            gap-3

            lg:grid-cols-[0.4fr_1.6fr]

            lg:items-end

            lg:gap-8

          "

        >

          {/* Section label */}



          <div className="flex items-center gap-3">

            <span className="h-px w-7 bg-[#1683FF]" />



            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#77766f]">

              Your journey

            </span>



            <span className="font-mono text-[8px] tracking-[0.18em] text-[#9a9890]">

              04

            </span>

          </div>



          {/* Main heading */}



          <h2

  className="

    whitespace-nowrap

    font-serif

    text-[clamp(2.8rem,4vw,5rem)]

    font-light

    leading-none

    tracking-[-0.055em]

  "

>

  From first conversation{" "}

  <span className="text-[#7d7c75]">to follow-up.</span>

</h2>

        </header>



        {/* ============================================================

            ROADMAP

        ============================================================ */}



        <div className="mt-5 shrink-0 lg:mt-5">

          {/* ========================================================

              DESKTOP ROADMAP

          ======================================================== */}



          <div className="relative hidden md:block">

            {/* Base roadmap line */}



            <div className="absolute left-[6.5%] right-[6.5%] top-[20px] h-px bg-[#0b1b33]/10" />



            {/* Active roadmap progress */}



            <motion.div

              className="absolute left-[6.5%] top-[20px] h-px bg-[#1683FF]"

              animate={{

                width: `${activeStep * 29.1}%`,

              }}

              transition={{

                duration: 0.65,

                ease: [0.22, 1, 0.36, 1],

              }}

            />



            {/* Milestones */}



            <div className="grid grid-cols-4">

              {steps.map((step, index) => {

                const isActive = index === activeStep;

                const isCompleted = index < activeStep;



                return (

                  <button

                    key={step.number}

                    type="button"

                    onMouseEnter={() => selectStep(index)}

                    onClick={() => selectStep(index)}

                    className="group relative text-left focus:outline-none"

                    aria-label={`View ${step.title}`}

                  >

                    {/* Node */}



                    <div className="relative z-10 flex h-[42px] items-center justify-center">

                      <motion.div

                        animate={{

                          scale: isActive ? 1 : 0.82,

                        }}

                        transition={{

                          duration: 0.35,

                          ease: [0.22, 1, 0.36, 1],

                        }}

                        className={[

                          "relative flex h-10 w-10 items-center justify-center rounded-full border bg-[#f5f1e8]",

                          isActive

                            ? "border-[#1683FF]"

                            : "border-[#0b1b33]/15",

                        ].join(" ")}

                      >

                        {isActive && (

                          <motion.span

                            initial={{ opacity: 0 }}

                            animate={{ opacity: 1 }}

                            className="absolute inset-[4px] rounded-full border border-[#1683FF]/30"

                          />

                        )}



                        <step.icon

                          aria-hidden="true"

                          strokeWidth={1.5}

                          className={[

                            "relative z-10 h-4 w-4 transition-colors duration-300",

                            isActive || isCompleted

                              ? "text-[#1683FF]"

                              : "text-[#77766f]",

                          ].join(" ")}

                        />

                        <span

                          className={[

                            "absolute -bottom-4 font-mono text-[6px] tracking-[0.14em]",

                            isActive || isCompleted

                              ? "text-[#1683FF]"

                              : "text-[#99978f]",

                          ].join(" ")}

                        >

                          {step.number}

                        </span>



                        {isActive && (

                          <motion.span

                            initial={{

                              opacity: 0,

                              scale: 0,

                            }}

                            animate={{

                              opacity: 1,

                              scale: 1,

                            }}

                            className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#1683FF]"

                          />

                        )}

                      </motion.div>

                    </div>



                    {/* Step label */}



                    <div className="mt-2 px-2 text-center">

                      <div className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#9b9991]">

                        Stage {step.number}

                      </div>



                      <motion.div

                        animate={{

                          color: isActive

                            ? "#0b1b33"

                            : "#85847e",

                        }}

                        transition={{

                          duration: 0.3,

                        }}

                        className="

                          mt-1

                          font-serif

                          text-[clamp(1.15rem,1.55vw,1.65rem)]

                          font-light

                          leading-none

                          tracking-[-0.03em]

                        "

                      >

                        {step.shortTitle}

                      </motion.div>

                    </div>

                  </button>

                );

              })}

            </div>

          </div>



          {/* ========================================================

              MOBILE ROADMAP

          ======================================================== */}



          <div className="md:hidden">

            <div className="relative">

              {/* Vertical line */}



              <div className="absolute left-[20px] top-5 h-[calc(100%-40px)] w-px bg-[#0b1b33]/10" />



              <div className="space-y-5">

                {steps.map((step, index) => {

                  const isActive = index === activeStep;



                  return (

                    <button

                      key={step.number}

                      type="button"

                      onClick={() => selectStep(index)}

                      className="relative flex w-full items-center gap-4 text-left"

                    >

                      {/* Node */}



                      <motion.div

                        animate={{

                          scale: isActive ? 1 : 0.85,

                        }}

                        className={[

                          "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-[#f5f1e8]",

                          isActive

                            ? "border-[#1683FF]"

                            : "border-[#0b1b33]/15",

                        ].join(" ")}

                      >

                        <step.icon

                          aria-hidden="true"

                          strokeWidth={1.5}

                          className={[

                            "h-4 w-4 transition-colors duration-300",

                            isActive

                              ? "text-[#1683FF]"

                              : "text-[#77766f]",

                          ].join(" ")}

                        />

                        <span className="sr-only">

                          Step {step.number}

                        </span>

                      </motion.div>



                      {/* Label */}



                      <div>

                        <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#9b9991]">

                          Stage {step.number}

                        </span>



                        <div

                          className={[

                            "mt-1 font-serif text-[1.45rem] font-light leading-none",

                            isActive

                              ? "text-[#0b1b33]"

                              : "text-[#77766f]",

                          ].join(" ")}

                        >

                          {step.shortTitle}

                        </div>

                      </div>

                    </button>

                  );

                })}

              </div>

            </div>

          </div>

        </div>



        {/* ============================================================

            ACTIVE EXPERIENCE



            Desktop:

            This absorbs all remaining viewport height.

        ============================================================ */}



        <div

          className="

            mt-5

            min-h-0

            flex-1

            lg:mt-5

          "

        >

          <AnimatePresence mode="wait">

            <motion.div

              key={active.number}

              initial={{

                opacity: 0,

                y: 8,

              }}

              animate={{

                opacity: 1,

                y: 0,

              }}

              exit={{

                opacity: 0,

                y: -8,

              }}

              transition={{

                duration: 0.45,

                ease: [0.22, 1, 0.36, 1],

              }}

              className="

                grid

                min-h-[430px]

                overflow-hidden

                border-y

                border-[#0b1b33]/10

                lg:h-full

                lg:min-h-0

                lg:grid-cols-[0.88fr_1.12fr]

              "

            >

              {/* ======================================================

                  LEFT — ACTIVE STEP

              ====================================================== */}



              <div

                className="

                  flex

                  min-h-0

                  flex-col

                  justify-between

                  py-6

                  lg:py-5

                  lg:pr-10

                  xl:pr-12

                "

              >

                <div>

                  {/* Current stage */}



                  <div className="flex items-center gap-3">

                    <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#99978f]">

                      Current stage

                    </span>



                    <span className="h-px w-5 bg-[#1683FF]" />



                    <span className="font-mono text-[7px] tracking-[0.2em] text-[#99978f]">

                      {active.number} / 04

                    </span>

                  </div>



                  {/* Title */}



                  <div className="relative mt-4">

                    {/* Oversized number */}



                    <div

                      className="

                        pointer-events-none

                        absolute

                        -left-1

                        top-[-12px]

                        font-mono

                        text-[clamp(3.5rem,5vw,5.5rem)]

                        font-light

                        leading-none

                        tracking-[-0.08em]

                        text-[#0b1b33]/[0.055]

                      "

                    >

                      {active.number}

                    </div>



                    <h3

                      className="

                        relative

                        max-w-[560px]

                        font-serif

                        text-[clamp(2rem,3vw,3.25rem)]

                        font-light

                        leading-[0.9]

                        tracking-[-0.045em]

                      "

                    >

                      {active.title}

                    </h3>

                  </div>



                  {/* Detail */}



                  <p

                    className="

                      mt-4

                      max-w-[500px]

                      text-[12px]

                      leading-[1.55]

                      text-[#5c5e59]

                      lg:text-[13px]

                    "

                  >

                    {active.detail}

                  </p>

                </div>



                {/* Treatment metadata */}



                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">

                  <div>

                    <div className="font-mono text-[6px] uppercase tracking-[0.25em] text-[#9b9991]">

                      Standard IV

                    </div>



                    <div className="mt-1 font-serif text-[13px]">

                      45–60 min

                    </div>

                  </div>



                  <div className="h-6 w-px bg-[#0b1b33]/10" />



                  <div>

                    <div className="font-mono text-[6px] uppercase tracking-[0.25em] text-[#9b9991]">

                      NADx

                    </div>



                    <div className="mt-1 font-serif text-[13px]">

                      3–4 hrs

                    </div>

                  </div>



                  <div className="h-6 w-px bg-[#0b1b33]/10" />



                  <div>

                    <div className="font-mono text-[6px] uppercase tracking-[0.25em] text-[#9b9991]">

                      Setting

                    </div>



                    <div className="mt-1 font-serif text-[13px]">

                      Monitored care

                    </div>

                  </div>

                </div>

              </div>



              {/* ======================================================

                  RIGHT — CINEMATIC IMAGE

              ====================================================== */}



              <div className="relative min-h-[280px] overflow-hidden lg:min-h-0">

                <AnimatePresence mode="wait">

                  <motion.img

                    key={active.image}

                    src={imageSrc}

                    alt={active.title}

                    initial={{

                      opacity: 0,

                      scale: 1.04,

                    }}

                    animate={{

                      opacity: 1,

                      scale: 1,

                    }}

                    exit={{

                      opacity: 0,

                      scale: 1.02,

                    }}

                    transition={{

                      duration: 0.65,

                      ease: [0.22, 1, 0.36, 1],

                    }}

                    onError={() => {

                      if (imageSrc !== FALLBACK_IMAGE) {

                        setImageSrc(FALLBACK_IMAGE);

                      }

                    }}

                    className="absolute inset-0 h-full w-full object-cover"

                    style={{

                      objectPosition: active.imagePosition,

                    }}

                  />

                </AnimatePresence>



                {/* Dark luxury overlay */}



                <div className="absolute inset-0 bg-[#08111c]/20" />



                {/* Gradient */}



                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b33]/30 via-transparent to-transparent" />



                {/* Fine architectural frame */}



                <div className="absolute inset-4 border border-white/25 lg:inset-5" />



                {/* Top technical label */}



                <div className="absolute left-6 top-6 font-mono text-[6px] uppercase tracking-[0.3em] text-white/75 lg:left-7 lg:top-7 lg:text-[7px]">

                  DRIPLABS / JOURNEY

                </div>



                {/* Step number */}



                <div className="absolute bottom-6 right-6 font-mono text-[7px] tracking-[0.25em] text-white/70 lg:bottom-7 lg:right-7 lg:text-[8px]">

                  {active.number}

                </div>



                {/* Image crosshair */}



                <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2">

                  <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-white/55" />

                  <span className="absolute bottom-0 left-1/2 h-2 w-px -translate-x-1/2 bg-white/55" />

                  <span className="absolute left-0 top-1/2 h-px w-2 -translate-y-1/2 bg-white/55" />

                  <span className="absolute right-0 top-1/2 h-px w-2 -translate-y-1/2 bg-white/55" />

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>



        {/* ============================================================

            FOOTER

        ============================================================ */}



        <div

          className="

            mt-4

            flex

            shrink-0

            flex-col

            gap-3

            sm:flex-row

            sm:items-center

            sm:justify-between

            lg:mt-3

          "

        >

          {/* Progress */}



          <div className="flex items-center gap-3">

            <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#99978f]">

              {paused ? "Paused" : "Auto progression"}

            </span>



            <span className="h-1 w-1 rounded-full bg-[#1683FF]" />



            <div className="flex items-center gap-1">

              {steps.map((step, index) => (

                <button

                  key={step.number}

                  type="button"

                  onClick={() => selectStep(index)}

                  className="p-1"

                  aria-label={`Go to step ${step.number}`}

                >

                  <span

                    className={[

                      "block h-px transition-all duration-300",

                      index === activeStep

                        ? "w-6 bg-[#1683FF]"

                        : "w-2 bg-[#0b1b33]/20",

                    ].join(" ")}

                  />

                </button>

              ))}

            </div>

          </div>



          {/* CTA */}



          <Link

            href="/book"

            className="

              group

              inline-flex

              items-center

              gap-5

              border-b

              border-[#0b1b33]

              pb-1.5

              transition-colors

              duration-300

              hover:border-[#1683FF]

            "

          >

            <span className="font-mono text-[8px] uppercase tracking-[0.25em]">

              Begin your journey

            </span>



            <span className="text-base text-[#1683FF] transition-transform duration-300 group-hover:translate-x-1">

              →

            </span>

          </Link>

        </div>

      </div>

    </section>

  );

}