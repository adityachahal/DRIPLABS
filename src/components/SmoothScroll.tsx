"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,

      // More responsive than 0.085 / 0.12
      lerp: 0.12,

      // Natural mouse-wheel movement
      smoothWheel: true,
      wheelMultiplier: 1,

      // Touch
      touchMultiplier: 1,

      // Navigation
      anchors: true,
      stopInertiaOnNavigate: true,

      // Accessibility
      respectReducedMotion: true,

      // Natural edge resistance
      overscroll: true,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}