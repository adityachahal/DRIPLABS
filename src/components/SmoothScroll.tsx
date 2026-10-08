"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,

      // Slightly less interpolation work while
      // keeping the premium smooth-scroll feel.
      lerp: 0.16,

      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,

      anchors: true,
      stopInertiaOnNavigate: true,

      respectReducedMotion: true,

      // Let the browser handle native overscroll.
      overscroll: false,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}