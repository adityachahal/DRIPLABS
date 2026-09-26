"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
};

const createVariants = (
  reducedMotion: boolean,
  y: number,
  duration: number,
): Variants => ({
  hidden: {
    opacity: 0,
    y: reducedMotion ? 0 : y,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? 0 : duration,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 20,
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  const variants = createVariants(
    reducedMotion,
    y,
    duration,
  );

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -80px 0px",
      }}
      transition={{
        delay: reducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}