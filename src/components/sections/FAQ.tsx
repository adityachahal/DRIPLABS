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
    <section id="faq" className="bg-[#e8e3da] text-[#171714]">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#77736a]">
              Frequently asked
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(4rem,8vw,9rem)] font-light leading-[0.8] tracking-[-0.07em]"
            >
              Questions,
              <br />
              answered.
            </motion.h2>
          </div>
        </div>

        <div className="mt-20 border-t border-black/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-black/15"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-8 py-7 text-left"
                >
                  <div className="flex items-start gap-6">
                    <span className="pt-1 text-[9px] tracking-[0.2em] text-[#99958c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xl font-light tracking-[-0.02em] md:text-3xl">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/20 text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 pl-[3.25rem] text-sm leading-7 text-[#666259] md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}