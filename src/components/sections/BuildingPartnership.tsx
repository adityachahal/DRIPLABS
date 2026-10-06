"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type PartnerType = {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  position: string;
  href: string;
};

const partners: PartnerType[] = [
  {
    id: "physicians",
    number: "01",
    label: "Clinical",
    title: "Physicians",
    description:
      "Extend physician-led wellness through a considered clinical ecosystem.",
    position: "left-[3%] top-[14%]",
    href: "/physicians",
  },
  {
    id: "clinics",
    number: "02",
    label: "Infrastructure",
    title: "Clinics",
    description:
      "Bring the DRIPLABS experience into carefully considered clinical environments.",
    position: "right-[3%] top-[14%]",
    href: "/physicians",
  },
  {
    id: "partners",
    number: "03",
    label: "Growth",
    title: "Partners",
    description:
      "Build new opportunities across distribution, hospitality and strategic growth.",
    position: "left-[17%] bottom-[3%]",
    href: "/partners",
  },
  {
  id: "channel-partners",
  number: "04",
  label: "Channel Partners",
  title: "Channel Partners",
  description:
    "Extend the DRIPLABS ecosystem through aligned channel partnerships and strategic growth.",
  position: "right-[17%] bottom-[3%]",
  href: "/partners",
},
];

export default function BuildSection() {
  const reduceMotion = useReducedMotion();

  const sectionRef = useRef<HTMLElement | null>(null);

  const [active, setActive] = useState<string | null>(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (reduceMotion) return;

    const element = sectionRef.current;

    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width - 0.5) * 2;

      const y =
        ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      setMouse({
        x,
        y,
      });
    };

    const handleMouseLeave = () => {
      setMouse({
        x: 0,
        y: 0,
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="partnerships"
      className="
        relative
        overflow-hidden
        bg-[#020812]
        text-[#F7FAFF]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main atmosphere */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: mouse.x * 20,
                  y: mouse.y * 14,
                }
          }
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
          className="
            absolute
            left-1/2
            top-[46%]
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0066FF]/[0.055]
            blur-[150px]
          "
        />

        {/* Secondary atmosphere */}

        <div
          className="
            absolute
            left-[-15%]
            top-[15%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#1683FF]/[0.025]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            bottom-[-10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#1683FF]/[0.025]
            blur-[150px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(140,203,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(140,203,255,.55)_1px,transparent_1px)]
            [background-size:90px_90px]
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(2,8,18,.72)_100%)]
          "
        />
      </div>

      {/* =========================================================
          TOP HEADER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1540px]
          px-6
          pt-16
          sm:px-10
          lg:px-10
          lg:pt-1
        "
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#1683FF]" />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[#8CCBFF]
              "
            >
              14 — Building Partnerships
            </span>
          </div>

          <div
            className="
              hidden
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/20
              sm:block
            "
          >
            DRIPLABS / Network
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN INTERACTIVE FIELD
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          mt-8
          h-[650px]
          max-w-[1540px]
          px-6
          sm:px-10
          lg:px-12
        "
      >
        {/* =======================================================
            LARGE BACKGROUND WORD
        ======================================================= */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: mouse.x * -8,
                  y: mouse.y * -6,
                }
          }
          transition={{
            type: "spring",
            stiffness: 45,
            damping: 22,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[40%]
            -translate-x-1/2
            -translate-y-1/2
            whitespace-nowrap
            font-serif
            text-[clamp(7rem,18vw,18rem)]
            font-light
            leading-none
            tracking-[-0.09em]
            text-white/[0.018]
          "
        >
          DRIPLABS
        </motion.div>

        {/* =======================================================
            CENTRAL ORBIT SYSTEM
        ======================================================= */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: mouse.x * 12,
                  y: mouse.y * 8,
                }
          }
          transition={{
            type: "spring",
            stiffness: 55,
            damping: 20,
          }}
          className="
            absolute
            left-1/2
            top-[42%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            sm:h-[470px]
            sm:w-[470px]
          "
        >
          {/* Outer orbit */}

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-full
              border
              border-white/[0.045]
            "
          />

          {/* Middle orbit */}

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: -360,
                  }
            }
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-[13%]
              rounded-full
              border
              border-[#1683FF]/[0.12]
            "
          />

          {/* Inner orbit */}

          <div
            className="
              absolute
              inset-[27%]
              rounded-full
              border
              border-white/[0.06]
            "
          />

          {/* Center glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#0066FF]/[0.08]
              blur-[40px]
            "
          />

          {/* Center ring */}

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.04, 1],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-28
              w-28
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#1683FF]/30
              bg-[#020812]/80
              backdrop-blur-sm
            "
          >
            <div
              className="
                absolute
                inset-3
                rounded-full
                border
                border-white/[0.06]
              "
            />

            <span
              className="
                relative
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/60
              "
            >
              DRIPLABS
            </span>
          </motion.div>

          {/* Central pulse */}

          {!reduceMotion && (
            <>
              <motion.span
                animate={{
                  scale: [1, 2.2],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-3
                  w-3
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#1683FF]
                "
              />

              <motion.span
                animate={{
                  scale: [1, 1.8],
                  opacity: [0.2, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-3
                  w-3
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#1683FF]
                "
              />
            </>
          )}
        </motion.div>

        {/* =======================================================
            CONNECTION LINES
        ======================================================= */}

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
        >
          {/* Physicians */}

          <motion.path
            d="M 150 150 C 300 190, 350 260, 500 325"
            fill="none"
            stroke="#1683FF"
            strokeWidth="1"
            strokeOpacity={
              active === "physicians" ? "0.7" : "0.16"
            }
            pathLength="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Clinics */}

          <motion.path
            d="M 850 150 C 700 190, 650 260, 500 325"
            fill="none"
            stroke="#1683FF"
            strokeWidth="1"
            strokeOpacity={
              active === "clinics" ? "0.7" : "0.16"
            }
            pathLength="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Partners */}

          <motion.path
            d="M 300 550 C 370 470, 420 420, 500 325"
            fill="none"
            stroke="#1683FF"
            strokeWidth="1"
            strokeOpacity={
              active === "partners" ? "0.7" : "0.16"
            }
            pathLength="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Membership */}

          <motion.path
            d="M 700 550 C 630 470, 580 420, 500 325"
            fill="none"
            stroke="#1683FF"
            strokeWidth="1"
            strokeOpacity={
              active === "membership" ? "0.7" : "0.16"
            }
            pathLength="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Horizontal architecture */}

          <path
            d="M 70 325 H 930"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.035"
          />

          {/* Vertical architecture */}

          <path
            d="M 500 60 V 590"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.035"
          />
        </svg>

        {/* =======================================================
            FUNCTIONAL PARTNERSHIP NODES
        ======================================================= */}

        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            className={`
              absolute
              ${partner.position}
              z-20
              w-[240px]
              sm:w-[270px]
            `}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -4,
                  }
            }
          >
            <Link
              href={partner.href}
              onMouseEnter={() => setActive(partner.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(partner.id)}
              onBlur={() => setActive(null)}
              className="group block text-left"
            >
              {/* Card */}

              <div
                className={`
                  relative
                  overflow-hidden
                  border
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-700
                  ${
                    active === partner.id
                      ? "border-[#1683FF]/50 bg-[#06152B]/85 shadow-[0_20px_70px_rgba(0,102,255,.12)]"
                      : "border-white/[0.08] bg-[#020812]/65 hover:border-white/[0.16]"
                  }
                `}
              >
                {/* Hover light */}

                <span
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#1683FF]/[0.10]
                    via-transparent
                    to-transparent
                    transition-opacity
                    duration-700
                    ${
                      active === partner.id
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />

                <div className="relative">
                  {/* Top */}

                  <div className="flex items-center justify-between">
                    <span
                      className={`
                        text-[8px]
                        tracking-[0.25em]
                        transition-colors
                        duration-500
                        ${
                          active === partner.id
                            ? "text-[#8CCBFF]"
                            : "text-white/25"
                        }
                      `}
                    >
                      {partner.number}
                    </span>

                    <span
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          active === partner.id
                            ? "bg-[#1683FF] shadow-[0_0_14px_rgba(22,131,255,.9)]"
                            : "bg-white/10"
                        }
                      `}
                    />
                  </div>

                  {/* Label */}

                  <p
                    className="
                      mt-8
                      text-[7px]
                      uppercase
                      tracking-[0.3em]
                      text-[#1683FF]
                    "
                  >
                    {partner.label}
                  </p>

                  {/* Title */}

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-3xl
                      font-light
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    {partner.title}
                  </h3>

                  {/* Description */}

                  <motion.p
                    initial={false}
                    animate={{
                      opacity:
                        active === partner.id ? 1 : 0.45,
                      height:
                        active === partner.id
                          ? "auto"
                          : "3.2rem",
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="
                      mt-3
                      overflow-hidden
                      text-[10px]
                      leading-[1.75]
                      text-white/40
                    "
                  >
                    {partner.description}
                  </motion.p>

                  {/* Bottom */}

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-white/[0.07]
                      pt-4
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-white/20
                      "
                    >
                      Explore
                    </span>

                    <span
                      className="
                        text-sm
                        text-[#1683FF]
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* =======================================================
            CENTER DECORATIVE LABELS
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[42%]
            z-10
            hidden
            -translate-x-1/2
            -translate-y-1/2
            md:block
          "
        >
          <div
            className="
              absolute
              -left-32
              top-[-105px]
              whitespace-nowrap
              text-[7px]
              uppercase
              tracking-[0.28em]
              text-white/15
            "
          >
            Clinical ecosystem
          </div>

          <div
            className="
              absolute
              -right-32
              top-[-105px]
              whitespace-nowrap
              text-[7px]
              uppercase
              tracking-[0.28em]
              text-white/15
            "
          >
            Strategic network
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1540px]
          px-6
          pb-16
          sm:px-10
          lg:px-12
          lg:pb-5
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? { opacity: 1, y: 0 }
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.07]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
              text-[8px]
              uppercase
              tracking-[0.26em]
              text-white/20
            "
          >
            <span>DRIPLABS</span>

            <span className="h-px w-7 bg-white/10" />

            <span>Partnerships</span>
          </div>

          <Link
            href="/partners"
            className="
              group
              inline-flex
              items-center
              gap-4
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/50
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Start a conversation

            <span
              className="
                text-[#1683FF]
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}