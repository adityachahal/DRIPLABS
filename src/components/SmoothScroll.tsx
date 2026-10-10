"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

declare global {
  interface Window {
    __driplabsLenis?: Lenis;
  }
}

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.16,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      anchors: true,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
      overscroll: false,
    });

    window.__driplabsLenis = lenis;

    return () => {
      delete window.__driplabsLenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}