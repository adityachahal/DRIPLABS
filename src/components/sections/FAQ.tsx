"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const reducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#EEE8DC] text-[#0B1B33]">
      <div className="mx-auto max-w-[1680px] px-5 py-24 md:px-10 md:py-36 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />

              <p className="text-[8px] uppercase tracking-[0.28em] text-[#B8901F] md:text-[9px]">
                Frequently asked
              </p>
            </div>

            <p className="mt-8 max-w-[220px] text-xs leading-6 text-[#5A6B82]">
              Straight answers for the questions people ask before beginning
              their DRIPLABS journey.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <motion.h2
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-[var(--font-heading)] text-[clamp(3.5rem,7vw,8rem)] font-light leading-[0.84] tracking-[-0.065em]"
            >
              Questions,
              <br />
              answered.
            </motion.h2>
          </div>
        </div>

        <div className="mt-16 border-t border-[#0B1B33]/15 md:mt-24">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.7,
                  delay: reducedMotion ? 0 : Math.min(index * 0.035, 0.18),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-[#0B1B33]/15"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
                >
                  <div className="flex min-w-0 items-start gap-5 md:gap-7">
                    <span className="pt-1 text-[8px] tracking-[0.22em] text-[#B8901F]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-[var(--font-heading)] text-[1.45rem] font-light leading-[1.05] tracking-[-0.03em] md:text-2xl lg:text-3xl">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0B1B33]/20 text-lg",
                      "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      open ? "rotate-45" : "",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{
                        duration: reducedMotion ? 0.01 : 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-8 pl-[2.1rem] text-sm leading-7 text-[#5A6B82] md:pl-[3.3rem] md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
