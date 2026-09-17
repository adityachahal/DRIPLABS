"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
  align?: "left" | "center";
};

export default function SectionIntro({
  eyebrow,
  title,
  body,
  dark = false,
  align = "left",
}: SectionIntroProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={[
        "relative",
        align === "center" ? "mx-auto text-center" : "",
        "max-w-[950px]",
      ].join(" ")}
    >
      <motion.div
        initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{
          duration: reduced ? 0.01 : 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex items-center gap-3"
      >
        <span
          className={[
            "h-px w-8",
            dark ? "bg-[#C9A227]" : "bg-[#C9A227]",
          ].join(" ")}
        />

        <span
          className={[
            "text-[9px] font-medium uppercase tracking-[0.28em]",
            dark ? "text-[#E3CE8E]" : "text-[#B8901F]",
          ].join(" ")}
        >
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{
          duration: reduced ? 0.01 : 0.9,
          delay: reduced ? 0 : 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={[
          "mt-7 font-[var(--font-heading)] text-[clamp(2.8rem,6vw,6.6rem)]",
          "font-light leading-[0.9] tracking-[-0.055em]",
          dark ? "text-[#F7F4EC]" : "text-[#0B1B33]",
        ].join(" ")}
      >
        {title}
      </motion.h2>

      {body && (
        <motion.p
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: reduced ? 0.01 : 0.8,
            delay: reduced ? 0 : 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={[
            "mt-7 max-w-2xl text-[14px] leading-7",
            align === "center" ? "mx-auto" : "",
            dark ? "text-white/65" : "text-[#5A6B82]",
          ].join(" ")}
        >
          {body}
        </motion.p>
      )}
    </div>
  );
}
