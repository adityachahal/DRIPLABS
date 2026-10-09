"use client";



import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { useState } from "react";




/* =========================================================

   STANDARD DATA

   ========================================================= */



const trustPoints = [

  {

    number: "01",

    title: "Physician-Led",

    short:

      "Every protocol begins with a physician assessment. Never a menu you self-select.",

    detail:

      "Protocol selection begins with professional assessment and supervision rather than a self-selected treatment menu.",

  },

  {

    number: "02",

    title: "Licensed & Pharma-Grade",

    short:

      "IP/BP/USP pharmacopoeial standards and pharmaceutical manufacturing discipline.",

    detail:

      "The product framework incorporates pharmacopoeial standards including IP, BP and USP.",

  },

  {

    number: "03",

    title: "Clinical Evidence & Documented Protocols",

    short:

      "Formulations and protocols are structured around documented data.",

    detail:

      "Clinical information and documented protocols form part of the framework behind the DRIPLABS experience.",

  },

  {

    number: "04",

    title: "Batch Traceable",

    short:

      "Every kit carries a batch number, expiry information and Certificate of Analysis.",

    detail:

      "Batch identification, expiry information and Certificate of Analysis documentation create a traceable product record.",

  },

  {

    number: "05",

    title: "Third-Party Tested",

    short:

      "Quality verification forms part of the product documentation and formulation story.",

    detail:

      "Product quality verification is represented as part of the broader documentation layer.",

  },

  {

    number: "06",

    title: "Researched & Science Backed",

    short:

      "Formulation decisions are connected to documented research and scientific references.",

    detail:

      "Research, scientific pathways and documented references provide the foundation for the science layer.",

  },

] as const;



const standardStates = {

  "01": {

    eyebrow: "01 / 06",

    title: "Physician-Led",

    sub: "Professional supervision",

    formulation: "ASSESSMENT",

    formulationValue: "PHYSICIAN",

    leftLabel: "PERSONALISED",

    leftValue: "PROTOCOL",

    rightLabel: "ADMINISTRATION",

    rightValue: "SUPERVISED",

    bottom: "Every protocol begins with professional assessment.",

  },



  "02": {

    eyebrow: "02 / 06",

    title: "Licensed & Pharma-Grade",

    sub: "Pharmacopoeial framework",

    formulation: "STANDARD",

    formulationValue: "IP / BP / USP",

    leftLabel: "MANUFACTURING",

    leftValue: "PHARMA",

    rightLabel: "QUALITY",

    rightValue: "DOCUMENTED",

    bottom: "A formulation framework built around pharmaceutical standards.",

  },



  "03": {

    eyebrow: "03 / 06",

    title: "Clinical Evidence",

    sub: "Documented protocols",

    formulation: "FRAMEWORK",

    formulationValue: "CLINICAL",

    leftLabel: "PROTOCOLS",

    leftValue: "DOCUMENTED",

    rightLabel: "REFERENCES",

    rightValue: "SCIENCE",

    bottom: "Protocols are structured around documented clinical information.",

  },



  "04": {

    eyebrow: "04 / 06",

    title: "Batch Traceable",

    sub: "Product record",

    formulation: "BATCH",

    formulationValue: "TRACEABLE",

    leftLabel: "MFG / EXP",

    leftValue: "RECORDED",

    rightLabel: "CERTIFICATE",

    rightValue: "OF ANALYSIS",

    bottom: "Every formulation carries a record.",

  },



  "05": {

    eyebrow: "05 / 06",

    title: "Third-Party Tested",

    sub: "Quality verification",

    formulation: "VERIFICATION",

    formulationValue: "TESTED",

    leftLabel: "IDENTITY",

    leftValue: "CHECKED",

    rightLabel: "QUALITY",

    rightValue: "VERIFIED",

    bottom: "Quality verification forms part of the product documentation.",

  },



  "06": {

    eyebrow: "06 / 06",

    title: "Researched & Science Backed",

    sub: "Scientific foundation",

    formulation: "RESEARCH",

    formulationValue: "DOCUMENTED",

    leftLabel: "PATHWAYS",

    leftValue: "SCIENCE",

    rightLabel: "REFERENCES",

    rightValue: "AVAILABLE",

    bottom:

      "Research and scientific references connect to the formulation story.",

  },

} as const;



type StandardKey = keyof typeof standardStates;



/* =========================================================

   HUD DATA

   ========================================================= */



function HudData({

  label,

  value,

  side,

  active,

}: {

  label: string;

  value: string;

  side: "left" | "right";

  active: boolean;

}) {

  return (

    <motion.div

      animate={{

        opacity: active ? 1 : 0.18,

        x: active ? 0 : side === "left" ? -5 : 5,

      }}

      transition={{

        duration: 0.35,

        ease: [0.22, 1, 0.36, 1],

      }}

      className={[

        "absolute z-30 w-[92px] sm:w-[108px]",

        side === "left"

          ? "left-[4%] sm:left-[7%]"

          : "right-[4%] sm:right-[7%]",

      ].join(" ")}

    >

      <div

        className={[

          "relative overflow-hidden border px-2.5 py-2 sm:px-3 sm:py-2.5",

          "transition-colors duration-300",

          active

            ? "border-[#1683FF]/65 bg-[#06152B]/90"

            : "border-white/[0.07] bg-[#020812]/60",

        ].join(" ")}

      >

        <p className="text-[5px] font-medium uppercase tracking-[0.2em] text-[#8CCBFF]/55 sm:text-[6px]">

          {label}

        </p>



        <p

          className={[

            "mt-1 text-[8px] font-medium tracking-[0.06em] sm:text-[9px]",

            active ? "text-[#F7FAFF]" : "text-white/30",

          ].join(" ")}

        >

          {value}

        </p>



        <span

          className={[

            "absolute bottom-0 left-0 h-px transition-all duration-300",

            active

              ? "w-full bg-[#1683FF]"

              : "w-0",

          ].join(" ")}

        />

      </div>

    </motion.div>

  );

}



/* =========================================================

   CONNECTOR

   ========================================================= */



function Connector({

  side,

  active,

}: {

  side: "left" | "right";

  active: boolean;

}) {

  return (

    <div

      aria-hidden="true"

      className={[

        "absolute top-1/2 z-10 hidden h-px md:block",

        side === "left"

          ? "left-0 right-[49%]"

          : "left-[49%] right-0",

      ].join(" ")}

    >

      <motion.div

        animate={{

          opacity: active ? 1 : 0.16,

          scaleX: active ? 1 : 0.9,

        }}

        transition={{ duration: 0.35 }}

        className={[

          "h-px origin-center",

          active

            ? "bg-[#1683FF] shadow-[0_0_10px_rgba(22,131,255,.8)]"

            : "bg-[#8CCBFF]/15",

        ].join(" ")}

      />



      <span

        className={[

          "absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border",

          side === "left" ? "right-0" : "left-0",

          active

            ? "border-[#8CCBFF] bg-[#1683FF] shadow-[0_0_12px_rgba(22,131,255,.9)]"

            : "border-[#8CCBFF]/25 bg-[#06152B]",

        ].join(" ")}

      />

    </div>

  );

}



/* =========================================================

   PREMIUM VIAL

   ========================================================= */



function PremiumVial({

  active,

  reducedMotion,

}: {

  active: boolean;

  reducedMotion: boolean | null;

}) {

  return (

    <motion.div

      animate={

        reducedMotion

          ? undefined

          : {

              y: [0, -3, 0],

              rotate: active ? [0, 0.8, -0.8, 0] : [0, 0.25, -0.25, 0],

            }

      }

      transition={

        reducedMotion

          ? undefined

          : {

              duration: active ? 5 : 7,

              repeat: Infinity,

              ease: "easeInOut",

            }

      }

      className="

        absolute

        left-1/2

        top-[47%]

        z-20

        h-[190px]

        w-[88px]

        -translate-x-1/2

        -translate-y-1/2

        sm:h-[225px]

        sm:w-[102px]

        md:h-[260px]

        md:w-[118px]

      "

    >

      {/* Aura */}

      <div

        className={[

          "absolute -inset-8 rounded-full bg-[#0066FF]/10 blur-[35px]",

          active ? "opacity-80" : "opacity-40",

        ].join(" ")}

      />



      {/* Glass body */}

      <div

        className="

          absolute

          left-1/2

          top-[14%]

          h-[76%]

          w-[78%]

          -translate-x-1/2

          overflow-hidden

          rounded-[22px_22px_18px_18px]

          border

          border-white/30

          bg-gradient-to-r

          from-white/[0.14]

          via-white/[0.025]

          to-white/[0.12]

          shadow-[inset_8px_0_18px_rgba(255,255,255,.05),inset_-8px_0_18px_rgba(0,102,255,.08),0_18px_45px_rgba(0,0,0,.5)]

        "

      >

        {/* Highlight */}

        <div className="absolute bottom-0 left-[10%] top-3 w-[7%] rounded-full bg-white/15 blur-[3px]" />



        {/* Liquid */}

        <motion.div

          animate={{

            scaleY: active ? [0.91, 1, 0.91] : 0.88,

          }}

          transition={{

            duration: 5,

            repeat: Infinity,

            ease: "easeInOut",

          }}
            style={{ transformOrigin: "bottom" }}


          className="

            absolute

            bottom-0

            left-[3%]

            right-[3%]

            h-[57%]

            overflow-hidden

            rounded-[0_0_17px_17px]

            bg-gradient-to-t

            from-[#0047FF]/85

            via-[#008CFF]/35

            to-[#1683FF]/10

          "

        >

          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#0066FF]/45 to-transparent" />



          {!reducedMotion && (

            <>

              <motion.span

                animate={{

                  y: [-5, -35],

                  opacity: [0, 0.9, 0],

                }}

                transition={{

                  duration: 3.5,

                  repeat: Infinity,

                  delay: 0.5,

                }}

                className="absolute bottom-4 left-[30%] h-1 w-1 rounded-full bg-white"

              />



              <motion.span

                animate={{

                  y: [-5, -42],

                  opacity: [0, 0.8, 0],

                }}

                transition={{

                  duration: 4,

                  repeat: Infinity,

                  delay: 1.4,

                }}

                className="absolute bottom-3 left-[65%] h-1 w-1 rounded-full bg-[#C9E9FF]"

              />

            </>

          )}

        </motion.div>



        {/* Label */}

        <div

          className="

            absolute

            left-1/2

            top-[37%]

            flex

            h-[65px]

            w-[34px]

            -translate-x-1/2

            items-center

            justify-center

            border

            border-white/10

            bg-[#020812]/85

            sm:h-[75px]

            sm:w-[38px]

          "

        >

          <span className="-rotate-90 whitespace-nowrap text-[7px] font-medium tracking-[0.25em] text-white/75 sm:text-[8px]">

            DRIPLABS

          </span>



          <span className="absolute bottom-2 text-[5px] tracking-[0.16em] text-[#8CCBFF]">

            NAD+

          </span>

        </div>



        <div className="absolute inset-y-2 left-[18%] w-px bg-white/20" />

      </div>



      {/* Neck */}

      <div

        className="

          absolute

          left-1/2

          top-[5%]

          h-[18%]

          w-[42%]

          -translate-x-1/2

          rounded-t-[8px]

          border

          border-white/30

          bg-gradient-to-r

          from-white/15

          via-white/5

          to-white/15

        "

      />



      {/* Cap */}

      <div

        className="

          absolute

          left-1/2

          top-0

          h-[14%]

          w-[58%]

          -translate-x-1/2

          rounded-[7px_7px_4px_4px]

          border

          border-white/40

          bg-gradient-to-b

          from-white/50

          via-[#8B9BB0]/35

          to-[#26394F]/65

        "

      >

        <div className="absolute inset-x-2 top-1 h-px bg-white/45" />

        <div className="absolute inset-x-2 bottom-1 h-px bg-[#1683FF]/45" />

      </div>



      {/* Base */}

      <div

        className="

          absolute

          bottom-[3%]

          left-1/2

          h-[8%]

          w-[88%]

          -translate-x-1/2

          rounded-full

          border

          border-[#8CCBFF]/20

          bg-[#06152B]/70

          shadow-[0_0_25px_rgba(0,102,255,.18)]

        "

      />

    </motion.div>

  );

}



/* =========================================================

   CENTRAL VISUAL

   ========================================================= */



function ClinicalVisual({

  activePoint,

  reducedMotion,

}: {

  activePoint: StandardKey | null;

  reducedMotion: boolean | null;

}) {

  const active =

    activePoint !== null ? standardStates[activePoint] : null;



  const isActive = activePoint !== null;



  return (

    <div

      className="

        relative

        h-full

        min-h-[300px]

        overflow-hidden

        border

        border-[#8CCBFF]/12

        bg-[#030B17]

      "

    >

      {/* Atmosphere */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[42%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/10 blur-[75px]" />



        <div className="absolute left-1/2 top-[55%] h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1683FF]/10 blur-[55px]" />

      </div>



      {/* Technical grid */}

      <div

        aria-hidden="true"

        className="pointer-events-none absolute inset-0 opacity-[0.24]"

        style={{

          backgroundImage: `

            linear-gradient(rgba(140,203,255,0.045) 1px, transparent 1px),

            linear-gradient(90deg, rgba(140,203,255,0.045) 1px, transparent 1px)

          `,

          backgroundSize: "36px 36px",

        }}

      />



      {/* Top label */}

      <div className="absolute left-1/2 top-4 z-40 -translate-x-1/2 text-center">

        <p className="text-[6px] uppercase tracking-[0.3em] text-[#8CCBFF]/45">

          {active?.eyebrow ?? "DRIPLABS STANDARD"}

        </p>



        <p className="mt-1.5 whitespace-nowrap text-[9px] font-medium tracking-[0.28em] text-white/70 sm:text-[11px]">

          DRIPLABS STANDARD

        </p>



        <div className="mx-auto mt-2 flex items-center justify-center gap-1.5">

          <span className="h-px w-5 bg-[#1683FF]/35" />



          <span className="text-[5px] uppercase tracking-[0.22em] text-[#8CCBFF]/35">

            Clinical · Transparent · Traceable

          </span>



          <span className="h-px w-5 bg-[#1683FF]/35" />

        </div>

      </div>



      {/* Outer ring */}

      <motion.div

        animate={

          reducedMotion

            ? undefined

            : {

                rotate: 360,

              }

        }

        transition={

          reducedMotion

            ? undefined

            : {

                duration: 38,

                repeat: Infinity,

                ease: "linear",

              }

        }

        className="

          absolute

          left-1/2

          top-[48%]

          h-[240px]

          w-[240px]

          -translate-x-1/2

          -translate-y-1/2

          rounded-full

          border

          border-[#8CCBFF]/10

          sm:h-[285px]

          sm:w-[285px]

          md:h-[330px]

          md:w-[330px]

        "

      >

        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1683FF] shadow-[0_0_14px_#1683FF]" />



        <span className="absolute bottom-[8%] left-[14%] h-1 w-1 rounded-full bg-[#8CCBFF] shadow-[0_0_10px_#8CCBFF]" />



        <span className="absolute right-[9%] top-[22%] h-1 w-1 rounded-full bg-[#1683FF] shadow-[0_0_10px_#1683FF]" />

      </motion.div>



      {/* Inner dashed ring */}

      <motion.div

        animate={

          reducedMotion

            ? undefined

            : {

                rotate: -360,

              }

        }

        transition={

          reducedMotion

            ? undefined

            : {

                duration: 30,

                repeat: Infinity,

                ease: "linear",

              }

        }

        className="

          absolute

          left-1/2

          top-[48%]

          h-[185px]

          w-[185px]

          -translate-x-1/2

          -translate-y-1/2

          rounded-full

          border

          border-dashed

          border-[#8CCBFF]/15

          sm:h-[225px]

          sm:w-[225px]

          md:h-[260px]

          md:w-[260px]

        "

      />



      {/* Inner ring */}

      <div

        className="

          absolute

          left-1/2

          top-[48%]

          h-[145px]

          w-[145px]

          -translate-x-1/2

          -translate-y-1/2

          rounded-full

          border

          border-[#1683FF]/15

          sm:h-[175px]

          sm:w-[175px]

          md:h-[210px]

          md:w-[210px]

        "

      />



      {/* Scanning beam */}

      {!reducedMotion && (

        <motion.div

          animate={{

            y: ["-100%", "250%"],

          }}

          transition={{

            duration: 7,

            repeat: Infinity,

            ease: "linear",

          }}

          className="

            pointer-events-none

            absolute

            left-1/2

            top-[22%]

            z-10

            h-px

            w-[62%]

            -translate-x-1/2

            bg-gradient-to-r

            from-transparent

            via-[#1683FF]/55

            to-transparent

          "

        />

      )}



      {/* HUD */}

      <HudData

        label={active?.leftLabel ?? "PRODUCT RECORD"}

        value={active?.leftValue ?? "READY"}

        side="left"

        active={isActive}

      />



      <HudData

        label={active?.rightLabel ?? "VERIFICATION"}

        value={active?.rightValue ?? "READY"}

        side="right"

        active={isActive}

      />



      {/* Special batch modules */}

      <AnimatePresence>

        {activePoint === "04" && (

          <>

            <motion.div

              initial={{ opacity: 0, x: -8 }}

              animate={{ opacity: 1, x: 0 }}

              exit={{ opacity: 0, x: -8 }}

              className="

                absolute

                left-[5%]

                top-[52%]

                z-40

                hidden

                w-[110px]

                border

                border-[#1683FF]/45

                bg-[#020812]/90

                p-2.5

                sm:block

              "

            >

              <p className="text-[5px] uppercase tracking-[0.2em] text-[#8CCBFF]/55">

                Batch

              </p>



              <p className="mt-1.5 text-[7px] tracking-[0.1em] text-white/70">

                PRODUCT RECORD

              </p>



              <div className="mt-2 space-y-1.5 border-t border-white/10 pt-1.5">

                <div>

                  <p className="text-[4px] uppercase tracking-[0.16em] text-white/25">

                    Manufactured

                  </p>



                  <p className="mt-0.5 text-[6px] text-[#8CCBFF]">

                    RECORDED

                  </p>

                </div>



                <div>

                  <p className="text-[4px] uppercase tracking-[0.16em] text-white/25">

                    Expiry

                  </p>



                  <p className="mt-0.5 text-[6px] text-[#8CCBFF]">

                    RECORDED

                  </p>

                </div>

              </div>

            </motion.div>



            <motion.div

              initial={{ opacity: 0, x: 8 }}

              animate={{ opacity: 1, x: 0 }}

              exit={{ opacity: 0, x: 8 }}

              className="

                absolute

                right-[5%]

                top-[51%]

                z-40

                hidden

                w-[92px]

                border

                border-[#1683FF]/45

                bg-[#020812]/90

                p-2.5

                text-center

                sm:block

              "

            >

              <div className="mx-auto grid h-9 w-9 place-items-center border border-[#8CCBFF]/25">

                <div className="grid h-6 w-6 grid-cols-5 gap-[1px] opacity-75">

                  {Array.from({ length: 25 }).map((_, i) => (

                    <span

                      key={i}

                      className={[

                        "h-[3px] w-[3px]",

                        [0, 1, 4, 5, 9, 10, 14, 15, 19, 20, 21, 24].includes(

                          i,

                        )

                          ? "bg-[#F7FAFF]"

                          : "bg-[#1683FF]/30",

                      ].join(" ")}

                    />

                  ))}

                </div>

              </div>



              <p className="mt-2 text-[5px] uppercase tracking-[0.16em] text-[#8CCBFF]">

                Certificate

              </p>



              <p className="mt-0.5 text-[5px] uppercase tracking-[0.13em] text-white/30">

                Of Analysis

              </p>

            </motion.div>

          </>

        )}

      </AnimatePresence>



      {/* Vial */}

      <PremiumVial

        active={isActive}

        reducedMotion={reducedMotion}

      />



      {/* Platform */}

      <div

        className="

          absolute

          left-1/2

          top-[72%]

          z-10

          h-[50px]

          w-[150px]

          -translate-x-1/2

          rounded-full

          border

          border-[#1683FF]/15

          bg-[#0066FF]/[0.025]

          shadow-[0_0_45px_rgba(0,102,255,.10)]

          sm:h-[60px]

          sm:w-[190px]

        "

      >

        <div className="absolute left-1/2 top-1/2 h-[30px] w-[115px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8CCBFF]/10 sm:h-[36px] sm:w-[145px]" />



        <div className="absolute left-1/2 top-1/2 h-px w-[90px] -translate-x-1/2 bg-[#1683FF]/65 shadow-[0_0_12px_#1683FF] sm:w-[120px]" />

      </div>



      {/* Bottom statement */}

      <div className="absolute bottom-3 left-1/2 z-50 w-[86%] -translate-x-1/2 text-center">

        <AnimatePresence mode="wait">

          <motion.div

            key={activePoint ?? "idle"}

            initial={{ opacity: 0, y: 5 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0, y: -5 }}

            transition={{

              duration: 0.3,

              ease: [0.22, 1, 0.36, 1],

            }}

          >

            <p className="text-[5px] uppercase tracking-[0.25em] text-[#8CCBFF]/55">

              {active?.title ?? "CLINICAL SYSTEM"}

            </p>



            <p className="mt-1 font-[var(--font-heading)] text-[13px] font-light leading-[1] tracking-[-0.03em] text-[#F7FAFF] sm:text-[16px]">

              {active?.bottom ?? "Precision by design."}

            </p>

          </motion.div>

        </AnimatePresence>

      </div>



      {/* Index */}

      <div className="absolute bottom-2 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">

        {trustPoints.map((point) => (

          <span

            key={point.number}

            className={[

              "text-[5px] tracking-[0.12em] transition-all duration-300",

              activePoint === point.number

                ? "scale-125 text-[#8CCBFF]"

                : "text-white/15",

            ].join(" ")}

          >

            {point.number}

          </span>

        ))}

      </div>



      {/* Connectors */}

      <Connector

        side="left"

        active={

          activePoint === "01" ||

          activePoint === "03" ||

          activePoint === "05"

        }

      />



      <Connector

        side="right"

        active={

          activePoint === "02" ||

          activePoint === "04" ||

          activePoint === "06"

        }

      />



      {/* Active glow */}

      <AnimatePresence>

        {activePoint && (

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(circle_at_50%_48%,rgba(0,102,255,0.10),transparent_38%)]"

          />

        )}

      </AnimatePresence>



      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#1683FF]/70 to-transparent" />

    </div>

  );

}



/* =========================================================

   TRUST CARD

   ========================================================= */



function TrustCard({

  point,

  side,

  active,

  onActivate,

  reducedMotion,

}: {

  point: (typeof trustPoints)[number];

  side: "left" | "right";

  active: boolean;

  onActivate: () => void;

  reducedMotion: boolean | null;

}) {

  return (

    <motion.div

      initial={

        reducedMotion

          ? false

          : {

              opacity: 0,

              y: 12,

            }

      }

      whileInView={

        reducedMotion

          ? undefined

          : {

              opacity: 1,

              y: 0,

            }

      }

      viewport={{

        once: true,

        amount: 0.15,

      }}

      transition={{

        duration: 0.5,

        ease: [0.22, 1, 0.36, 1],

      }}

      className="group relative h-full min-h-0"

      onMouseEnter={onActivate}

      onFocus={onActivate}

    >

      <button

        type="button"

        onClick={onActivate}

        className={[

          "relative flex h-full w-full cursor-pointer flex-col overflow-hidden text-left",

          "border p-4 sm:p-4.5 md:p-5",

          "transition-all duration-500",

          "focus:outline-none",

          active

            ? "border-[#1683FF]/70 bg-[#08203A] shadow-[0_18px_45px_rgba(0,70,150,.20)]"

            : "border-[#8CCBFF]/10 bg-[#06152B]/90 hover:border-[#1683FF]/40 hover:bg-[#071A32]",

        ].join(" ")}

      >

        {/* Small glow */}

        <div

          className={[

            "pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#0066FF]/10 blur-[45px] transition-opacity duration-500",

            active ? "opacity-100" : "opacity-0",

          ].join(" ")}

        />



        {/* Number + action */}

        <div className="relative flex items-start justify-between">

          <span

            className={[

              "text-[7px] font-medium tracking-[0.18em] sm:text-[8px]",

              active ? "text-[#8CCBFF]" : "text-[#8CCBFF]/35",

            ].join(" ")}

          >

            {point.number}

          </span>



          <span

            className={[

              "flex h-6 w-6 items-center justify-center rounded-full border text-[9px] transition-all duration-300",

              active

                ? "rotate-90 border-[#1683FF] bg-[#0066FF] text-white shadow-[0_0_15px_rgba(0,102,255,.35)]"

                : "border-white/10 text-white/25",

            ].join(" ")}

          >

            +

          </span>

        </div>



        {/* Content */}

        <div className="relative mt-auto pt-3">

          <h3

            className={[

              "font-[var(--font-heading)] font-light leading-[0.98] tracking-[-0.04em]",

              "text-[1.18rem] sm:text-[1.28rem] md:text-[1.38rem]",

              point.number === "03" || point.number === "06"

                ? "max-w-[280px]"

                : "max-w-[310px]",

              active ? "text-white" : "text-[#F7FAFF]",

            ].join(" ")}

          >

            {point.title}

          </h3>



          <p className="mt-2 max-w-[320px] text-[9px] leading-[1.45] text-white/45 sm:text-[10px] md:text-[10px]">

            {point.short}

          </p>



          <div className="mt-2.5 flex items-center gap-2">

            <span

              className={[

                "h-px bg-[#1683FF] transition-all duration-300",

                active

                  ? "w-8 shadow-[0_0_8px_rgba(22,131,255,.55)]"

                  : "w-4",

              ].join(" ")}

            />



          </div>

        </div>



        {/* Active bottom line */}

        <motion.span

          animate={{

            width: active ? "100%" : "0%",

          }}

          transition={{ duration: 0.35 }}

          className={[

            "absolute bottom-0 h-px bg-[#1683FF] shadow-[0_0_12px_rgba(22,131,255,.65)]",

            side === "left" ? "left-0" : "right-0",

          ].join(" ")}

        />



        {/* Side line */}

        <motion.span

          animate={{

            opacity: active ? 1 : 0,

          }}

          className={[

            "absolute bottom-0 top-0 w-px bg-[#1683FF]",

            side === "left" ? "left-0" : "right-0",

          ].join(" ")}

        />

      </button>

    </motion.div>

  );

}



/* =========================================================

   MAIN SECTION

   ========================================================= */



export default function CredibilitySection() {

  const reducedMotion = useReducedMotion();



  const [activePoint, setActivePoint] =

    useState<StandardKey | null>(null);



  return (

    <section

      id="standard"

      className="relative overflow-hidden bg-[#020812] text-[#F7FAFF]"

    >

      {/* Background atmosphere */}

      <div

        aria-hidden="true"

        className="

          pointer-events-none

          absolute

          left-1/2

          top-[-220px]

          h-[500px]

          w-[850px]

          -translate-x-1/2

          rounded-full

          bg-[#0066FF]/[0.045]

          blur-[110px]

        "

      />



      <div

        aria-hidden="true"

        className="

          pointer-events-none

          absolute

          bottom-[-200px]

          right-[-180px]

          h-[500px]

          w-[500px]

          rounded-full

          bg-[#1683FF]/[0.035]

          blur-[110px]

        "

      />



      {/* Technical background */}

      <div

        aria-hidden="true"

        className="pointer-events-none absolute inset-0 opacity-[0.10]"

        style={{

          backgroundImage: `

            linear-gradient(rgba(140,203,255,0.045) 1px, transparent 1px),

            linear-gradient(90deg, rgba(140,203,255,0.045) 1px, transparent 1px)

          `,

          backgroundSize: "64px 64px",

        }}

      />



      {/* Top line */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0066FF]/65 to-transparent" />



      {/* =====================================================

          CONTROLLED VIEWPORT CONTAINER



          Desktop:

          navbar + section content are deliberately compact.

          The grid has a fixed viewport-aware height.

         ===================================================== */}



      <div

        className="

          relative

          mx-auto

          flex

          max-w-[1700px]

          flex-col

          px-4

          py-7

          sm:px-6

          sm:py-8

          md:px-8

          md:py-9

          lg:h-[calc(100svh-80px)]

          lg:min-h-[650px]

          lg:max-h-[900px]

          lg:px-10

          lg:py-7

          xl:px-12

        "

      >

        {/* Header */}

        <motion.div

          initial={

            reducedMotion

              ? false

              : {

                  opacity: 0,

                  y: 10,

                }

          }

          whileInView={

            reducedMotion

              ? undefined

              : {

                  opacity: 1,

                  y: 0,

                }

          }

          viewport={{

            once: true,

            amount: 0.2,

          }}

          transition={{

            duration: 0.55,

            ease: [0.22, 1, 0.36, 1],

          }}

          className="

            shrink-0

            pb-5

            sm:pb-6

            lg:pb-5

          "

        >

          <div className="flex items-center gap-2">

            <span className="h-px w-6 bg-[#0066FF] shadow-[0_0_8px_rgba(0,102,255,.35)]" />



            <span className="text-[7px] font-medium uppercase tracking-[0.25em] text-[#8CCBFF]/60">

              04 — WHY DRIPLABS

            </span>

          </div>



          <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">

            <h2

              className="

                max-w-[700px]

                font-[var(--font-heading)]

                text-[clamp(2.4rem,4vw,4.8rem)]

                font-light

                leading-[0.88]

                tracking-[-0.06em]

                text-[#F7FAFF]

              "

            >

              Built around the

              <br />

              <span className="text-[#8CCBFF]/70">

                details that matter.

              </span>

            </h2>



            <p
  className="

                max-w-[700px]

                font-[var(--font-heading)]

                text-[clamp(2.4rem,4vw,4.8rem)]

                font-light

                leading-[0.88]

                tracking-[-0.06em]

                text-[#F7FAFF]

              "
>
  Innovation 
  <br />

              <span className="text-[#8CCBFF]/70">
meets integrity
 </span>
</p>


          </div>

        </motion.div>



        {/* =================================================

            DESKTOP GRID



            3 compact rows.

            Center spans all 3.

           ================================================= */}



        <div

          className="

            grid

            min-h-0

            flex-1

            gap-2.5

            lg:grid-cols-[0.95fr_1.25fr_0.95fr]

            lg:grid-rows-[repeat(3,minmax(0,1fr))]

          "

        >

          {/* 01 */}

          <TrustCard

            point={trustPoints[0]}

            side="left"

            active={activePoint === "01"}

            onActivate={() => setActivePoint("01")}

            reducedMotion={reducedMotion}

          />



          {/* CENTRAL VISUAL */}

          <motion.div

            initial={

              reducedMotion

                ? false

                : {

                    opacity: 0,

                    scale: 0.99,

                  }

            }

            whileInView={

              reducedMotion

                ? undefined

                : {

                    opacity: 1,

                    scale: 1,

                  }

            }

            viewport={{

              once: true,

              amount: 0.1,

            }}

            transition={{

              duration: 0.7,

              ease: [0.22, 1, 0.36, 1],

            }}

            className="min-h-0 lg:col-start-2 lg:row-span-3"

            onMouseLeave={() => setActivePoint(null)}

          >

            <ClinicalVisual

              activePoint={activePoint}

              reducedMotion={reducedMotion}

            />

          </motion.div>



          {/* 02 */}

          <TrustCard

            point={trustPoints[1]}

            side="right"

            active={activePoint === "02"}

            onActivate={() => setActivePoint("02")}

            reducedMotion={reducedMotion}

          />



          {/* 03 */}

          <TrustCard

            point={trustPoints[2]}

            side="left"

            active={activePoint === "03"}

            onActivate={() => setActivePoint("03")}

            reducedMotion={reducedMotion}

          />



          {/* 04 */}

          <TrustCard

            point={trustPoints[3]}

            side="right"

            active={activePoint === "04"}

            onActivate={() => setActivePoint("04")}

            reducedMotion={reducedMotion}

          />



          {/* 05 */}

          <TrustCard

            point={trustPoints[4]}

            side="left"

            active={activePoint === "05"}

            onActivate={() => setActivePoint("05")}

            reducedMotion={reducedMotion}

          />



          {/* 06 */}

          <TrustCard

            point={trustPoints[5]}

            side="right"

            active={activePoint === "06"}

            onActivate={() => setActivePoint("06")}

            reducedMotion={reducedMotion}

          />

        </div>



        {/* Footer descriptor */}

        <motion.div

          initial={

            reducedMotion

              ? false

              : {

                  opacity: 0,

                }

          }

          whileInView={

            reducedMotion

              ? undefined

              : {

                  opacity: 1,

                }

          }

          viewport={{

            once: true,

          }}

          transition={{

            delay: 0.25,

            duration: 0.5,

          }}

          className="

            mt-3

            flex

            shrink-0

            items-center

            justify-between

            border-t

            border-[#8CCBFF]/[0.08]

            pt-3

          "

        >

          <p className="text-[6px] uppercase tracking-[0.22em] text-white/25 sm:text-[7px]">

            Physician-supervised wellness

          </p>



          <p className="text-right text-[6px] uppercase tracking-[0.22em] text-[#8CCBFF]/35 sm:text-[7px]">

            Manufactured · Lyophilised · Quality-tested · India

          </p>

        </motion.div>

      </div>

    </section>

  );

}
