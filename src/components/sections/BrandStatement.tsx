"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLHeadingElement>(null);
  const bottomTextRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const topText = topTextRef.current;
    const bottomText = bottomTextRef.current;
    const eyebrow = eyebrowRef.current;

    if (!section || !image || !topText || !bottomText || !eyebrow) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(image, {
        scale: 1.15,
      });

      gsap.set(topText, {
        yPercent: 18,
        opacity: 0.35,
      });

      gsap.set(bottomText, {
        yPercent: -18,
        opacity: 0.35,
      });

      gsap.set(eyebrow, {
        y: 20,
        opacity: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(
          image,
          {
            scale: 1,
            duration: 1,
            ease: "none",
          },
          0,
        )
        .to(
          topText,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "none",
          },
          0.1,
        )
        .to(
          bottomText,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "none",
          },
          0.15,
        )
        .to(
          eyebrow,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "none",
          },
          0.25,
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#171714] text-[#f4f1eb]"
    >
      {/* Image */}
      <div
        ref={imageRef}
        className="absolute inset-[-6%] will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/driplabs-hero.jpg')",
            backgroundPosition: "58% center",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/65" />
      </div>

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.6'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top details */}
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-[1600px] items-start justify-between px-6 pt-8 md:px-10 lg:px-14">
          <p
            ref={eyebrowRef}
            className="text-[9px] uppercase tracking-[0.3em] text-white/70"
          >
            The DRIPLABS philosophy
          </p>

          <p className="text-right text-[9px] uppercase leading-5 tracking-[0.22em] text-white/55">
            Wellness
            <br />
            Reimagined
          </p>
        </div>
      </div>

      {/* Main statement */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-14">
          <div className="overflow-hidden">
            <h2
              ref={topTextRef}
              className="text-[clamp(4.5rem,12vw,13rem)] font-light leading-[0.76] tracking-[-0.075em]"
            >
              In health,
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2
              ref={bottomTextRef}
              className="ml-[8vw] text-[clamp(4.5rem,12vw,13rem)] font-light leading-[0.76] tracking-[-0.075em] md:ml-[12vw]"
            >
              get dripp&apos;d.
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-[1600px] items-end justify-between border-t border-white/20 px-6 pb-7 pt-5 md:px-10 lg:px-14">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/45">
            DRIPLABS
          </p>

          <p className="max-w-[190px] text-right text-[9px] uppercase leading-5 tracking-[0.18em] text-white/50">
            A considered approach
            <br />
            to personal wellness
          </p>
        </div>
      </div>
    </section>
  );
}