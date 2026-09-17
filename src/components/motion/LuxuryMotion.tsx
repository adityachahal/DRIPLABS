"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const luxuryEase = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={
        reduced
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 16 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{
        duration: reduced ? 0.01 : 0.8,
        delay: reduced ? 0 : delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type LineRevealProps = {
  children: ReactNode;
  className?: string;
};

export function LineReveal({
  children,
  className = "",
}: LineRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={
        reduced
          ? { scaleX: 1 }
          : { scaleX: 0 }
      }
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: reduced ? 0.01 : 0.9,
        ease: luxuryEase,
      }}
      className={`origin-left ${className}`}
    >
      {children}
    </motion.div>
  );
}
