"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOnceOptions = {
  rootMargin?: string;
  threshold?: number;
  disabled?: boolean;
};

export function useInViewOnce({
  rootMargin = "200px 0px",
  threshold = 0.08,
  disabled = false,
}: UseInViewOnceOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (disabled) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    if (
      typeof window !== "undefined" &&
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsInView(true);
        observer.disconnect();
      },
      {
        rootMargin,
        threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disabled, rootMargin, threshold]);

  return {
    ref,
    isInView:
      disabled ||
      (typeof window !== "undefined" &&
        !("IntersectionObserver" in window)) ||
      isInView,
  };
}