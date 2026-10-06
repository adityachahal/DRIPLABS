"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is IV therapy?",
    answer:
      "IV therapy delivers fluids and selected nutrients through an intravenous infusion. Treatment suitability is determined through a professional consultation.",
  },
  {
    question: "How does a DRIPLABS appointment work?",
    answer:
      "You select your preferred treatment and location, book an appointment, complete the required consultation, and then receive your infusion in a DRIPLABS setting.",
  },
  {
    question: "How long does an appointment take?",
    answer:
      "Appointment duration can vary depending on the treatment and your individual consultation. Your DRIPLABS team will guide you through the expected timing.",
  },
  {
    question: "Can everyone receive IV therapy?",
    answer:
      "Not necessarily. Treatment suitability depends on individual circumstances and professional assessment. Our team will determine whether a treatment is appropriate for you.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended so our team can prepare for your visit and provide the appropriate consultation and treatment experience.",
  },
  {
    question: "Where can I find DRIPLABS?",
    answer:
      "DRIPLABS operates across multiple locations in India. Visit our locations section to find the destination nearest to you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#030507] text-white"
    >
      {/* =========================================================
          ELECTRIC BLUE ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main electric-blue glow */}
        <div
          className="
            absolute
            left-[58%]
            top-[22%]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#0066FF]/[0.055]
            blur-[150px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            right-[-250px]
            top-[55%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#00A8FF]/[0.035]
            blur-[140px]
          "
        />

        {/* Very subtle technical grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(0,102,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.5)_1px,transparent_1px)]
            [background-size:90px_90px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_55%_30%,transparent_0%,rgba(3,5,7,0.25)_45%,rgba(3,5,7,0.9)_100%)]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1380px] px-6 py-24 md:px-10 md:py-28 lg:px-0 lg:py-3">
        {/* =======================================================
            TOP HEADER
        ======================================================= */}

        <div className="grid grid-cols-12">
          {/* FAQ label */}
          <div className="col-span-12 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#00A8FF]
                  shadow-[0_0_12px_rgba(0,168,255,0.9)]
                "
              />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  text-[#00A8FF]
                "
              >
                [FAQ]
              </span>
            </motion.div>
          </div>

          {/* Main heading */}
          <div className="col-span-12 mt-10 md:col-span-9 md:mt-0">
            <motion.h2
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
  max-w-[850px]
  text-[clamp(3.2rem,6vw,6.4rem)]
  font-light
  leading-[0.84]
  tracking-[-0.065em]
  text-white
              "
              style={{
                fontFamily:
                  "var(--font-driplabs-manrope), sans-serif",
              }}
            >
              FREQUENTLY
              <br />
              <span className="text-white/75">
                ASKED QUESTIONS
              </span>
            </motion.h2>
          </div>
        </div>

        {/* =======================================================
            LARGE BREATHING SPACE
        ======================================================= */}

        <div className="h-8 md:h-10 lg:h-12" />

        {/* =======================================================
            FAQ CONTENT
        ======================================================= */}

        <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4">
          {/* =====================================================
              LEFT CONTACT CARD
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              col-span-12
              md:col-span-4
              lg:col-span-3
            "
          >
            <div
              className="
                relative
                min-h-[274px]
                overflow-hidden
                rounded-[18px]
                border
                border-white/[0.09]
                bg-[#070A0F]
                p-6
                md:p-7
              "
            >
              {/* Card blue glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#0066FF]/[0.08]
                  blur-[70px]
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#00A8FF]/25
                  bg-[#0066FF]/[0.06]
                  text-[#00A8FF]
                "
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8
                    8.5 8.5 0 0 1-7.6 4.7
                    8.38 8.38 0 0 1-3.8-.9
                    L3 21l1.9-5.7
                    A8.38 8.38 0 0 1 4 11.5
                    a8.5 8.5 0 1 1 17 0Z"
                  />

                  <path d="M9.8 9.2a2.1 2.1 0 1 1 3.7 1.4c-.9.8-1.5 1.1-1.5 2.2" />

                  <circle cx="12" cy="16.2" r=".5" fill="currentColor" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <h3
                  className="
                    text-[25px]
                    font-medium
                    tracking-[-0.04em]
                    text-white
                  "
                  style={{
                    fontFamily:
                      "var(--font-driplabs-manrope), sans-serif",
                  }}
                >
                  Talk to us
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[230px]
                    text-[14px]
                    leading-[1.55]
                    text-white/45
                  "
                  style={{
                    fontFamily:
                      "var(--font-driplabs-manrope), sans-serif",
                  }}
                >
                  Our team is here to help you personally
                  with any questions.
                </p>
              </div>

              {/* Contact button */}
              <a
                href="#booking"
                className="
                  group
                  relative
                  mt-6
                  flex
                  h-[52px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#00A8FF]/30
                  bg-[#0066FF]
                  text-[14px]
                  font-medium
                  text-white
                  shadow-[0_0_25px_rgba(0,102,255,0.18)]
                  transition-all
                  duration-300
                  hover:bg-[#00A8FF]
                  hover:shadow-[0_0_35px_rgba(0,168,255,0.28)]
                "
              >
                <span className="relative z-10">
                  Contact Us
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />
              </a>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT FAQ CARDS
          ===================================================== */}

          <div
            className="
              col-span-12
              mt-2
              space-y-2
              md:col-span-8
              md:mt-0
              lg:col-span-9
            "
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <div
                    className={`
                      relative
                      overflow-hidden
                      rounded-[17px]
                      border
                      transition-all
                      duration-500
                      ${
                        isOpen
                          ? "border-[#0066FF]/45 bg-[#07101C] shadow-[0_0_35px_rgba(0,102,255,0.08)]"
                          : "border-white/[0.08] bg-[#07090D] hover:border-[#0066FF]/30 hover:bg-[#080C12]"
                      }
                    `}
                  >
                    {/* Active blue edge */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                      }}
                      className="
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[2px]
                        bg-[#00A8FF]
                        shadow-[0_0_16px_rgba(0,168,255,0.75)]
                      "
                    />

                    {/* Question button */}
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        min-h-[84px]
                        w-full
                        items-center
                        justify-between
                        gap-8
                        px-6
                        py-5
                        text-left
                        md:min-h-[86px]
                        md:px-7
                      "
                    >
                      <div className="flex min-w-0 items-center gap-5">
                        {/* Number */}
                        <span
                          className={`
                            hidden
                            text-[8px]
                            tracking-[0.15em]
                            sm:block
                            ${
                              isOpen
                                ? "text-[#00A8FF]"
                                : "text-white/20"
                            }
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Question */}
                        <span
                          className={`
                            text-[16px]
                            font-medium
                            tracking-[-0.025em]
                            transition-colors
                            duration-300
                            md:text-[17px]
                            ${
                              isOpen
                                ? "text-white"
                                : "text-white/80"
                            }
                          `}
                          style={{
                            fontFamily:
                              "var(--font-driplabs-manrope), sans-serif",
                          }}
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* Plus */}
                      <span
                        className={`
                          relative
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-[23px]
                          font-light
                          leading-none
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "text-[#00A8FF]"
                              : "text-white/75 group-hover:text-[#00A8FF]"
                          }
                        `}
                      >
                        <motion.span
                          animate={{
                            rotate: isOpen ? 45 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="block"
                        >
                          +
                        </motion.span>
                      </span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-7 md:px-7 md:pb-8">
                            <div className="mb-5 h-px w-10 bg-[#00A8FF]/40" />

                            <p
                              className="
                                max-w-2xl
                                text-[13px]
                                leading-6
                                text-white/45
                                md:text-[14px]
                                md:leading-7
                              "
                              style={{
                                fontFamily:
                                  "var(--font-driplabs-manrope), sans-serif",
                              }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            BOTTOM TECHNICAL LINE
        ======================================================= */}

      </div>
    </section>
  );
}