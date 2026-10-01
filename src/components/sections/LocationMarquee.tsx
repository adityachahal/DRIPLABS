"use client";

import Link from "next/link";

const locations = [
  {
    number: "01",
    city: "Delhi NCR",
    position: 0,
    href: "/locations",
  },
  {
    number: "02",
    city: "Mumbai",
    position: 1,
    href: "/locations",
  },
  {
    number: "03",
    city: "Bengaluru",
    position: 2,
    href: "/locations",
  },
  {
    number: "04",
    city: "Hyderabad",
    position: 3,
    href: "/locations",
  },
  {
    number: "05",
    city: "Pune",
    position: 4,
    href: "/locations",
  },
  {
    number: "06",
    city: "Chandigarh",
    position: 5,
    href: "/locations",
  },
];

const marqueeLocations = [...locations, ...locations];

function LocationCard({
  city,
  number,
  position,
  href,
}: {
  city: string;
  number: string;
  position: number;
  href: string;
}) {
  const imagePosition = `-${position * 16.6666667}%`;

  return (
    <Link
      href={href}
      aria-label={`Explore DRIPLABS ${city}`}
      className="
        location-card
        group
        relative
        block
        h-[270px]
        w-[68vw]
        max-w-[340px]
        shrink-0
        overflow-hidden
        border
        border-white/[0.10]
        bg-[#06152B]
        outline-none
        sm:h-[300px]
        sm:w-[48vw]
        sm:max-w-[350px]
        lg:h-[330px]
        lg:w-[320px]
        xl:h-[350px]
        xl:w-[330px]
      "
    >
      {/* IMAGE */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            location-image
            absolute
            inset-y-0
            w-[600%]
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('/images/locations/location-marquee.png')",
            transform: `translateX(${imagePosition})`,
          }}
        />
      </div>

      {/* IMAGE OVERLAY */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#020812]/15
          via-[#020812]/30
          to-[#020812]/95
        "
      />

      {/* BLUE HOVER WASH */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#0066FF]/0
          transition-colors
          duration-500
          group-hover:bg-[#0066FF]/[0.08]
        "
      />

      {/* TOP META */}

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 sm:p-5">
        <span className="font-mono text-[7px] tracking-[0.22em] text-white/55">
          {number}
        </span>

        <span className="text-[7px] font-medium tracking-[0.28em] text-white/60">
          DRIPLABS
        </span>
      </div>

      {/* TOP BLUE LINE */}

      <span
        aria-hidden="true"
        className="
          absolute
          left-0
          right-0
          top-0
          z-20
          h-px
          origin-left
          scale-x-0
          bg-[#1683FF]
          transition-transform
          duration-700
          group-hover:scale-x-100
        "
      />

      {/* BOTTOM CONTENT */}

      <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="h-px w-7 bg-[#1683FF] transition-all duration-500 group-hover:w-12" />

          <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#8CCBFF]">
            India
          </span>
        </div>

        <h3
          className="
            font-[var(--font-heading)]
            text-[clamp(2rem,4vw,3.5rem)]
            font-light
            leading-[0.88]
            tracking-[-0.055em]
            text-white
          "
        >
          {city}
        </h3>

        <div className="mt-3 flex items-center gap-2.5">
          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-[#020812]/40
              transition-all
              duration-500
              group-hover:border-[#1683FF]
              group-hover:bg-[#0066FF]
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                d="M5 12h13M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="text-[7px] font-medium uppercase tracking-[0.23em] text-white/55 transition-colors duration-500 group-hover:text-white">
            Explore location
          </span>
        </div>
      </div>

      {/* BLUE SIDE RAIL */}

      <span
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          top-0
          z-20
          w-[2px]
          origin-bottom
          scale-y-0
          bg-[#1683FF]
          transition-transform
          duration-700
          group-hover:scale-y-100
        "
      />

      {/* HOVER BORDER */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          border
          border-transparent
          transition-colors
          duration-500
          group-hover:border-[#1683FF]/60
        "
      />
    </Link>
  );
}

export default function LocationMarquee() {
  return (
    <section
      id="location-marquee"
      className="
        relative
        overflow-hidden
        bg-[#020812]
        py-8
        text-[#F7FAFF]
        sm:py-10
        lg:py-12
      "
    >
      {/* ATMOSPHERE */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[260px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#0066FF]/[0.045]
        "
      />

      {/* HEADER */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-6
          max-w-[1680px]
          px-5
          sm:mb-7
          sm:px-7
          lg:mb-8
          lg:px-14
        "
      >
        <div className="mb-2.5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#0066FF]" />

          <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#8CCBFF]">
            06 — Locations
          </span>
        </div>

        <div className="flex items-end justify-between gap-8">
          <h2
            className="
              max-w-[650px]
              font-[var(--font-heading)]
              text-[clamp(2.8rem,5.2vw,5.6rem)]
              font-light
              leading-[0.86]
              tracking-[-0.055em]
            "
          >
            Find your
            <br />
            <span className="text-[#4D9BFF]">nearest DRIP.</span>
          </h2>

          <p className="hidden max-w-[250px] pb-1 text-right text-[9px] leading-5 tracking-[0.06em] text-white/40 lg:block">
            Physician-led wellness,
            <br />
            wherever your journey takes you.
          </p>
        </div>
      </div>

      {/* MARQUEE */}

      <div className="relative z-10 overflow-hidden">
        {/* LEFT FADE */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-10
            bg-gradient-to-r
            from-[#020812]
            to-transparent
            sm:w-16
            lg:w-28
          "
        />

        {/* RIGHT FADE */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-10
            bg-gradient-to-l
            from-[#020812]
            to-transparent
            sm:w-16
            lg:w-28
          "
        />

        {/* TRACK */}

        <div className="location-marquee-track flex w-max gap-3 pl-5 sm:gap-4 sm:pl-7 lg:gap-4 lg:pl-14">
          {marqueeLocations.map((location, index) => (
            <LocationCard
              key={`${location.city}-${index}`}
              city={location.city}
              number={location.number}
              position={location.position}
              href={location.href}
            />
          ))}
        </div>
      </div>

      {/* FOOTER MICRO LINE */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-6
          max-w-[1680px]
          px-5
          sm:mt-7
          sm:px-7
          lg:mt-8
          lg:px-14
        "
      >
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-3">
          <span className="text-[7px] uppercase tracking-[0.25em] text-white/30">
            DRIPLABS / INDIA
          </span>

          <span className="text-[7px] uppercase tracking-[0.25em] text-white/30">
            Six locations
          </span>
        </div>
      </div>

      {/* CSS ANIMATION */}

      <style>{`
        .location-marquee-track {
          animation: locationMarquee 42s linear infinite;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        .location-marquee-track:hover {
          animation-play-state: paused;
        }

        .location-card {
          contain: layout paint;
        }

        .location-image {
          will-change: transform;
          transition:
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 600ms ease;
          filter: brightness(0.76) saturate(0.82);
        }

        .location-card:hover .location-image {
          filter: brightness(0.94) saturate(1);
          transform: scale(1.035);
        }

        @keyframes locationMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .location-marquee-track {
            animation-duration: 48s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .location-marquee-track {
            animation: none;
            transform: translate3d(0, 0, 0);
            overflow-x: auto;
            width: 100%;
            padding-right: 20px;
          }

          .location-card {
            scroll-snap-align: start;
          }

          .location-image {
            transition: none;
            filter: brightness(0.9) saturate(0.9);
          }
        }
      `}</style>
    </section>
  );
}