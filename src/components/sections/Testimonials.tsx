"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The entire experience felt calm, considered and incredibly professional.",
    name: "DRIPLABS Guest",
    location: "India",
  },
  {
    quote:
      "From the consultation to the treatment itself, everything felt effortless.",
    name: "DRIPLABS Guest",
    location: "India",
  },
  {
    quote:
      "A completely different kind of wellness experience. Beautiful space and attentive care.",
    name: "DRIPLABS Guest",
    location: "India",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#171714] text-[#f4f1eb]">
      <div className="mx-auto max-w-[1600px]">
        {/* Testimonials */}
        <div className="px-6 py-28 md:px-10 md:py-40 lg:px-14">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                Guest experiences
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
                className="text-[clamp(3.8rem,7vw,8rem)] font-light leading-[0.82] tracking-[-0.065em]"
              >
                Feel the
                <br />
                difference.
              </motion.h2>
            </div>
          </div>

          <div className="mt-20 grid border-t border-white/15 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className="border-b border-white/15 px-0 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-12 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] tracking-[0.22em] text-white/30">
                    0{index + 1}
                  </span>

                  <span className="text-sm tracking-[0.15em] text-white/30">
                    ★★★★★
                  </span>
                </div>

                <blockquote className="mt-16 max-w-md text-2xl font-light leading-[1.15] tracking-[-0.025em] md:text-3xl">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-12">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                    {testimonial.name}
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
                    {testimonial.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="border-t border-white/15">
          <div className="grid lg:grid-cols-3">
            <div className="border-b border-white/15 px-6 py-8 lg:border-b-0 lg:border-r lg:px-14">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                DRIPLABS
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-white/30">
                Growing across India
              </p>
            </div>

            <div className="border-b border-white/15 px-6 py-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-14">
              <div className="text-[clamp(5rem,9vw,9rem)] font-light leading-none tracking-[-0.08em]">
                06
              </div>

              <p className="mt-4 text-[9px] uppercase tracking-[0.22em] text-white/40">
                Locations across India
              </p>
            </div>

            <div className="border-b border-white/15 px-6 py-10 lg:border-b-0 lg:px-14 lg:py-14">
              <div className="text-[clamp(5rem,9vw,9rem)] font-light leading-none tracking-[-0.08em]">
                4.8
              </div>

              <p className="mt-4 text-[9px] uppercase tracking-[0.22em] text-white/40">
                Google rating
              </p>
            </div>
          </div>

          <div className="border-t border-white/15">
            <div className="px-6 py-10 md:px-10 lg:px-14 lg:py-14">
              <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
                <div>
                  <div className="text-[clamp(5rem,9vw,9rem)] font-light leading-none tracking-[-0.08em]">
                    6K+
                  </div>

                  <p className="mt-4 text-[9px] uppercase tracking-[0.22em] text-white/40">
                    Infusions delivered
                  </p>
                </div>

                <p className="max-w-sm text-sm leading-6 text-white/40">
                  Every number represents a growing community of guests
                  choosing a more considered approach to their wellness
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}