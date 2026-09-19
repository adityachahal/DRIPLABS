"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageScaleRef = useRef<HTMLDivElement>(null);
  const imageOverlayRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLHeadingElement>(null);
  const bottomTextRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const philosophyRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const imageScale = imageScaleRef.current;
    const imageOverlay = imageOverlayRef.current;
    const topText = topTextRef.current;
    const bottomText = bottomTextRef.current;
    const eyebrow = eyebrowRef.current;
    const philosophy = philosophyRef.current;
    const line = lineRef.current;

    if (
      !section ||
      !image ||
      !imageScale ||
      !imageOverlay ||
      !topText ||
      !bottomText ||
      !eyebrow ||
      !philosophy ||
      !line
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(imageScale, {
          scale: 1,
        });

        gsap.set(image, {
          y: 0,
        });

        gsap.set(topText, {
          x: 0,
          opacity: 1,
        });

        gsap.set(bottomText, {
          x: 0,
          opacity: 1,
        });

        gsap.set(eyebrow, {
          opacity: 1,
          y: 0,
        });

        gsap.set(philosophy, {
          opacity: 1,
          y: 0,
        });

        gsap.set(line, {
          scaleX: 1,
        });

        return;
      }

      /* --------------------------------
         Initial states
      -------------------------------- */

      gsap.set(imageScale, {
        scale: 1.12,
      });

      gsap.set(image, {
        y: 0,
      });

      gsap.set(topText, {
        x: "-7vw",
        opacity: 0.25,
      });

      gsap.set(bottomText, {
        x: "7vw",
        opacity: 0.25,
      });

      gsap.set(eyebrow, {
        y: 18,
        opacity: 0,
      });

      gsap.set(philosophy, {
        y: 18,
        opacity: 0,
      });

      gsap.set(line, {
        scaleX: 0,
        transformOrigin: "center center",
      });

      gsap.set(imageOverlay, {
        opacity: 0,
      });

      /* --------------------------------
         Scroll animation
      -------------------------------- */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* Image scale */

      timeline.to(
        imageScale,
        {
          scale: 1,
          duration: 1,
          ease: "none",
        },
        0,
      );

      /* Cinematic image movement */

      timeline.to(
        image,
        {
          y: "-3%",
          duration: 1,
          ease: "none",
        },
        0,
      );

      /* First line */

      timeline.to(
        topText,
        {
          x: 0,
          opacity: 1,
          duration: 0.72,
          ease: "power2.out",
        },
        0.08,
      );

      /* Second line */

      timeline.to(
        bottomText,
        {
          x: 0,
          opacity: 1,
          duration: 0.72,
          ease: "power2.out",
        },
        0.15,
      );

      /* Eyebrow */

      timeline.to(
        eyebrow,
        {
          y: 0,
          opacity: 1,
          duration: 0.42,
          ease: "power2.out",
        },
        0.28,
      );

      /* Center line */

      timeline.to(
        line,
        {
          scaleX: 1,
          duration: 0.45,
          ease: "power2.out",
        },
        0.36,
      );

      /* Bottom copy */

      timeline.to(
        philosophy,
        {
          y: 0,
          opacity: 1,
          duration: 0.42,
          ease: "power2.out",
        },
        0.4,
      );

      /* Final cinematic darkening */

      timeline.to(
        imageOverlay,
        {
          opacity: 0.12,
          duration: 0.5,
          ease: "none",
        },
        0.45,
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[680px] overflow-hidden bg-[#11110F] text-[#F4F1EA]"
    >
      {/* =========================================
          CINEMATIC IMAGE
      ========================================== */}

      <div
        ref={imageRef}
        className="absolute inset-[-7%] will-change-transform"
      >
        <div
          ref={imageScaleRef}
          className="absolute inset-0 will-change-transform"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/hero/driplabs-hero.jpg')",
              backgroundPosition: "58% center",
            }}
          />
        </div>

        {/* Primary dark scrim */}
        <div className="absolute inset-0 bg-black/42" />

        {/* Top-to-bottom cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/70" />

        {/* Side contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />

        {/* Very subtle warm atmosphere */}
        <div className="absolute inset-0 bg-[#D8C6A5]/[0.025] mix-blend-screen" />
      </div>

      {/* =========================================
          DYNAMIC OVERLAY
      ========================================== */}

      <div
        ref={imageOverlayRef}
        className="pointer-events-none absolute inset-0 z-[2] bg-black opacity-0"
      />

      {/* =========================================
          SUBTLE GRAIN
      ========================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-[3] opacity-[0.045]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* =========================================
          TOP CONTENT
      ========================================== */}

      <div className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-[1500px] items-start justify-between px-6 pt-8 md:px-10 lg:px-14">
          <p
            ref={eyebrowRef}
            className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/70"
          >
            The DRIPLABS philosophy
          </p>

          <p className="text-right text-[9px] uppercase leading-[1.7] tracking-[0.22em] text-white/55">
            Wellness
            <br />
            Reimagined
          </p>
        </div>
      </div>

      {/* =========================================
          MAIN BRAND STATEMENT
      ========================================== */}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-14">
          <div className="relative">
            {/* Subtle vertical guide */}

            <div className="pointer-events-none absolute left-0 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-white/20 md:block" />

            {/* IN HEALTH */}

            <div className="overflow-hidden pl-0 md:pl-8">
              <h2
                ref={topTextRef}
                className="whitespace-nowrap text-[clamp(4rem,11.5vw,12.5rem)] font-light leading-[0.8] tracking-[-0.075em] text-[#F4F1EA]"
              >
                In health,
              </h2>
            </div>

            {/* GET DRIPP'D */}

            <div className="overflow-hidden pl-[7vw] md:pl-[12vw]">
              <h2
                ref={bottomTextRef}
                className="whitespace-nowrap text-[clamp(4rem,11.5vw,12.5rem)] font-light leading-[0.8] tracking-[-0.075em] text-[#F4F1EA]"
              >
                get dripp&apos;d.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          CENTER ACCENT
      ========================================== */}

      <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div
          ref={lineRef}
          className="h-px w-20 bg-[#F4F1EA]/50 md:w-28"
        />
      </div>

      {/* =========================================
          BOTTOM CONTENT
      ========================================== */}

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-[1500px] items-end justify-between px-6 pb-7 md:px-10 lg:px-14">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/45">
            DRIPLABS
          </p>

          <p
            ref={philosophyRef}
            className="max-w-[220px] text-right text-[9px] uppercase leading-[1.8] tracking-[0.18em] text-white/55"
          >
            A considered approach
            <br />
            to personal wellness
          </p>
        </div>
      </div>
    </section>
  );
}