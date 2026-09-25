"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: "glamour",
    number: "01",
    name: "GLAMOUR DRIP",
    category: "BEAUTY & RADIANCE",
    description:
      "A premium skin and beauty wellness protocol within the DRIPLABS Skin & Beauty pathway.",
    image: "/images/decode-vial/products/Glamour-drip.png",
  },
  {
    id: "radiance",
    number: "02",
    name: "RADIANCE DRIP",
    category: "SKIN & GLOW",
    description:
      "A considered wellness protocol designed around the DRIPLABS beauty and radiance pathway.",
    image: "/images/decode-vial/products/Radiance-Drip.png",
  },
  {
    id: "nadx",
    number: "03",
    name: "NADx BOOST DRIP",
    category: "LONGEVITY & NAD+",
    description:
      "A cellular wellness experience within the DRIPLABS Cellular & Longevity pathway.",
    image: "/images/decode-vial/products/NADx-Boost-Drip.png",
  },
  {
    id: "mega-boost",
    number: "04",
    name: "MEGA BOOST DRIP",
    category: "ULTIMATE WELLNESS",
    description:
      "A comprehensive wellness formulation within the DRIPLABS protocol collection.",
    image: "/images/decode-vial/products/Mega-Boost-Drip.png",
  },
  {
    id: "restore",
    number: "05",
    name: "RESTORE DRIP",
    category: "HAIR & REGROWTH",
    description:
      "A restorative wellness protocol designed around the DRIPLABS beauty pathway.",
    image: "/images/decode-vial/products/Restore-drip.png",
  },
  {
    id: "refuel",
    number: "06",
    name: "REFUEL DRIP",
    category: "ATHLETIC RECOVERY",
    description:
      "A performance-oriented formulation within the DRIPLABS recovery system.",
    image: "/images/decode-vial/products/Refuel-drip.png",
  },
  {
    id: "fit",
    number: "07",
    name: "FIT DRIP",
    category: "SPORTS RECOVERY",
    description:
      "A performance and recovery-focused protocol within the DRIPLABS system.",
    image: "/images/decode-vial/products/Fit-drip.png",
  },
  {
    id: "reactivate",
    number: "08",
    name: "REACTIVATE DRIP",
    category: "IMMUNITY SUPPORT",
    description:
      "A recovery-oriented wellness formulation within the DRIPLABS wellness system.",
    image: "/images/decode-vial/products/Reactivate-drip.png",
  },
  {
    id: "bounce-back",
    number: "09",
    name: "BOUNCE BACK DRIP",
    category: "RECOVERY",
    description:
      "A recovery-focused protocol designed within the DRIPLABS wellness system.",
    image: "/images/decode-vial/products/Bounce-Back-Drip.png",
  },
  {
    id: "shrink",
    number: "10",
    name: "SHRINK DRIP",
    category: "WEIGHT MANAGEMENT",
    description:
      "A metabolic wellness protocol within the DRIPLABS protocol collection.",
    image: "/images/decode-vial/products/Shrink-drip.png",
  },
];

export default function VialProductTransition() {
  const reducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);

  const active = PRODUCTS[activeIndex];

  /*
   * ==========================================================
   * AUTOMATIC PRODUCT TRANSITION
   * ==========================================================
   */

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === PRODUCTS.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  /*
   * ==========================================================
   * PRELOAD
   * ==========================================================
   */

  useEffect(() => {
    PRODUCTS.forEach((product) => {
      const img = new Image();
      img.src = product.image;
    });
  }, []);

  return (
    <section
      id="decode-a-vial"
      className="decode-vial"
      aria-label="Decode a Vial"
    >
      {/* ====================================================
          BACKGROUND
      ==================================================== */}

      <div className="decode-vial-bg" />

      <div className="decode-vial-glow" />

      {/* ====================================================
          TOP LABEL
      ==================================================== */}

      <div className="decode-vial-header">
        <div className="decode-vial-label">
          <span />
          DECODE A VIAL
        </div>

        <div className="decode-vial-index">
          DRIPLABS® / PROTOCOL COLLECTION
        </div>
      </div>

      {/* ====================================================
          INTRO
      ==================================================== */}

      <div className="decode-vial-intro">
        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2>
            Every formulation
            <br />
            has an <em>identity.</em>
          </h2>

          <p>
            Explore the DRIPLABS protocol collection through a
            considered sequence of formulations.
          </p>
        </motion.div>
      </div>

      {/* ====================================================
          PRODUCT EXPERIENCE
      ==================================================== */}

      <div className="decode-vial-product">
        {/* -----------------------------------------------
            PRODUCT NUMBER
        ------------------------------------------------ */}

        <div className="decode-vial-number">
          <span>PROTOCOL</span>

          <strong>{active.number}</strong>
        </div>

        {/* -----------------------------------------------
            PRODUCT IMAGE
        ------------------------------------------------ */}

        <div className="decode-vial-image-stage">
          <div className="decode-vial-orbit decode-vial-orbit-one" />
          <div className="decode-vial-orbit decode-vial-orbit-two" />

          <div className="decode-vial-crosshair horizontal" />
          <div className="decode-vial-crosshair vertical" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="decode-vial-image"
              initial={
                reducedMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      scale: 1.04,
                      y: 20,
                      filter: "blur(8px)",
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={
                reducedMotion
                  ? {
                      opacity: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0.98,
                      y: -15,
                      filter: "blur(6px)",
                    }
              }
              transition={{
                duration: reducedMotion ? 0.01 : 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src={active.image}
                alt={active.name}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          <div className="decode-vial-shadow" />
        </div>

        {/* -----------------------------------------------
            PRODUCT INFORMATION
        ------------------------------------------------ */}

        <div className="decode-vial-info">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={
                reducedMotion
                  ? { opacity: 1, x: 0 }
                  : {
                      opacity: 0,
                      x: 24,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={
                reducedMotion
                  ? {
                      opacity: 0,
                    }
                  : {
                      opacity: 0,
                      x: -18,
                    }
              }
              transition={{
                duration: reducedMotion ? 0.01 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="decode-vial-category">
                {active.category}
              </div>

              <h3>{active.name}</h3>

              <div className="decode-vial-rule" />

              <p>{active.description}</p>

              <div className="decode-vial-meta">
                <div>
                  <span>PROTOCOL</span>
                  <strong>{active.number}</strong>
                </div>

                <div>
                  <span>PATHWAY</span>
                  <strong>DRIPLABS</strong>
                </div>

                <div>
                  <span>FORMAT</span>
                  <strong>IV WELLNESS</strong>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ====================================================
          PRODUCT NAVIGATION
      ==================================================== */}

      <div className="decode-vial-navigation">
        <div className="decode-vial-navigation-top">
          <span>PROTOCOL COLLECTION</span>

          <span>
            {active.number} / {String(PRODUCTS.length).padStart(2, "0")}
          </span>
        </div>

        <div className="decode-vial-products">
          {PRODUCTS.map((product, index) => {
            const activeItem = index === activeIndex;

            return (
              <button
                key={product.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={
                  activeItem
                    ? "decode-vial-product-item active"
                    : "decode-vial-product-item"
                }
              >
                <span className="decode-vial-product-number">
                  {product.number}
                </span>

                <span className="decode-vial-product-name">
                  {product.name}
                </span>

                <span className="decode-vial-product-line">
                  {activeItem && !reducedMotion && (
                    <motion.i
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 6,
                        ease: "linear",
                      }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ====================================================
          FOOTER NOTE
      ==================================================== */}

      <div className="decode-vial-footer">
        <span>PHYSICIAN-DIRECTED</span>

        <span className="decode-vial-footer-line" />

        <span>DRIPLABS® PROTOCOL SYSTEM</span>
      </div>

      {/* ====================================================
          CORNER DETAILS
      ==================================================== */}

      <div className="decode-corner top-left" />
      <div className="decode-corner top-right" />
      <div className="decode-corner bottom-left" />
      <div className="decode-corner bottom-right" />

      {/* ====================================================
          CSS
      ==================================================== */}

      <style jsx>{`
        .decode-vial {
          position: relative;
          isolation: isolate;

          min-height: 900px;

          overflow: hidden;

          background: #050b13;

          color: #f5f2e9;
        }

        /* ==================================================
           BACKGROUND
        ================================================== */

        .decode-vial-bg {
          position: absolute;
          inset: 0;

          z-index: -10;

          background:
            radial-gradient(
              ellipse at 50% 48%,
              rgba(52, 70, 78, 0.3),
              transparent 38%
            ),
            linear-gradient(
              180deg,
              #03080e 0%,
              #07111b 55%,
              #03080e 100%
            );
        }

        .decode-vial-glow {
          position: absolute;

          z-index: -8;

          left: 50%;
          top: 43%;

          width: 520px;
          height: 520px;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(214, 197, 140, 0.075),
              transparent 68%
            );

          filter: blur(20px);
        }

        /* ==================================================
           HEADER
        ================================================== */

        .decode-vial-header {
          position: relative;

          display: flex;

          justify-content: space-between;
          align-items: center;

          height: 58px;

          padding: 0 5vw;

          border-bottom:
            1px solid rgba(255, 255, 255, 0.08);
        }

        .decode-vial-label {
          display: flex;

          align-items: center;

          gap: 11px;

          color: #d6c58c;

          font-size: 8px;

          letter-spacing: 0.28em;
        }

        .decode-vial-label span {
          width: 27px;
          height: 1px;

          background: #c9a227;
        }

        .decode-vial-index {
          color:
            rgba(255, 255, 255, 0.27);

          font-size: 7px;

          letter-spacing: 0.2em;
        }

        /* ==================================================
           INTRO
        ================================================== */

        .decode-vial-intro {
          position: relative;

          width: min(1200px, 90%);

          margin: 0 auto;

          padding-top: 75px;
        }

        .decode-vial-intro h2 {
          margin: 0;

          font-family:
            var(--font-heading),
            Georgia,
            serif;

          font-size:
            clamp(3rem, 5.5vw, 6.5rem);

          font-weight: 300;

          line-height: 0.86;

          letter-spacing: -0.065em;
        }

        .decode-vial-intro h2 em {
          color: #d6c58c;

          font-style: italic;
        }

        .decode-vial-intro p {
          max-width: 410px;

          margin-top: 25px;

          color:
            rgba(255, 255, 255, 0.43);

          font-size: 12px;

          line-height: 1.8;
        }

        /* ==================================================
           PRODUCT AREA
        ================================================== */

        .decode-vial-product {
          position: relative;

          display: grid;

          grid-template-columns:
            0.8fr
            1.6fr
            0.8fr;

          align-items: center;

          width: min(1500px, 90%);

          min-height: 470px;

          margin: 15px auto 0;
        }

        /* ==================================================
           PRODUCT NUMBER
        ================================================== */

        .decode-vial-number {
          display: flex;

          flex-direction: column;

          align-self: center;

          padding-left: 5px;
        }

        .decode-vial-number span {
          color:
            rgba(255, 255, 255, 0.25);

          font-size: 7px;

          letter-spacing: 0.22em;
        }

        .decode-vial-number strong {
          margin-top: 5px;

          color: #d6c58c;

          font-family:
            var(--font-heading),
            Georgia,
            serif;

          font-size: clamp(5rem, 9vw, 9rem);

          font-weight: 300;

          line-height: 0.8;

          letter-spacing: -0.08em;
        }

        /* ==================================================
           IMAGE STAGE
        ================================================== */

        .decode-vial-image-stage {
          position: relative;

          height: 470px;

          display: flex;

          align-items: center;
          justify-content: center;
        }

        .decode-vial-image {
          position: absolute;

          inset: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          z-index: 4;
        }

        .decode-vial-image img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: contain;

          user-select: none;

          filter:
            contrast(1.04)
            saturate(0.94)
            drop-shadow(
              0 35px 45px rgba(0, 0, 0, 0.6)
            );
        }

        .decode-vial-shadow {
          position: absolute;

          left: 50%;
          bottom: 45px;

          width: 45%;
          height: 35px;

          transform: translateX(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(0, 0, 0, 0.8),
              transparent 70%
            );

          filter: blur(12px);
        }

        /* ==================================================
           ORBITS
        ================================================== */

        .decode-vial-orbit {
          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          pointer-events: none;
        }

        .decode-vial-orbit-one {
          width: 360px;
          height: 360px;

          border:
            1px solid rgba(214, 197, 140, 0.12);
        }

        .decode-vial-orbit-two {
          width: 450px;
          height: 450px;

          border:
            1px dashed rgba(214, 197, 140, 0.06);
        }

        /* ==================================================
           CROSSHAIR
        ================================================== */

        .decode-vial-crosshair {
          position: absolute;

          background:
            rgba(214, 197, 140, 0.1);
        }

        .decode-vial-crosshair.horizontal {
          left: 18%;
          right: 18%;

          top: 50%;

          height: 1px;
        }

        .decode-vial-crosshair.vertical {
          top: 10%;
          bottom: 10%;

          left: 50%;

          width: 1px;
        }

        /* ==================================================
           INFO
        ================================================== */

        .decode-vial-info {
          max-width: 320px;

          justify-self: end;
        }

        .decode-vial-category {
          color: #d6c58c;

          font-size: 7px;

          letter-spacing: 0.24em;
        }

        .decode-vial-info h3 {
          margin: 13px 0 0;

          font-family:
            var(--font-heading),
            Georgia,
            serif;

          font-size:
            clamp(2.1rem, 3.2vw, 4rem);

          font-weight: 300;

          line-height: 0.9;

          letter-spacing: -0.055em;
        }

        .decode-vial-rule {
          width: 45px;
          height: 1px;

          margin-top: 24px;

          background: #c9a227;
        }

        .decode-vial-info p {
          max-width: 280px;

          margin-top: 22px;

          color:
            rgba(255, 255, 255, 0.43);

          font-size: 11px;

          line-height: 1.8;
        }

        /* ==================================================
           META
        ================================================== */

        .decode-vial-meta {
          margin-top: 30px;

          border-top:
            1px solid rgba(255, 255, 255, 0.09);
        }

        .decode-vial-meta div {
          display: flex;

          justify-content: space-between;
          align-items: center;

          padding: 12px 0;

          border-bottom:
            1px solid rgba(255, 255, 255, 0.07);
        }

        .decode-vial-meta span {
          color:
            rgba(255, 255, 255, 0.23);

          font-size: 6px;

          letter-spacing: 0.18em;
        }

        .decode-vial-meta strong {
          color:
            rgba(255, 255, 255, 0.68);

          font-size: 7px;

          font-weight: 400;

          letter-spacing: 0.12em;
        }

        /* ==================================================
           NAVIGATION
        ================================================== */

        .decode-vial-navigation {
          width: min(1500px, 90%);

          margin: 10px auto 0;
        }

        .decode-vial-navigation-top {
          display: flex;

          justify-content: space-between;

          padding-bottom: 13px;

          border-bottom:
            1px solid rgba(255, 255, 255, 0.1);

          color:
            rgba(255, 255, 255, 0.26);

          font-size: 6px;

          letter-spacing: 0.2em;
        }

        .decode-vial-products {
          display: grid;

          grid-template-columns:
            repeat(10, 1fr);

          gap: 10px;
        }

        .decode-vial-product-item {
          position: relative;

          display: flex;

          flex-direction: column;

          gap: 8px;

          min-width: 0;

          padding: 15px 0 0;

          border: 0;

          background: transparent;

          color:
            rgba(255, 255, 255, 0.25);

          text-align: left;

          cursor: pointer;
        }

        .decode-vial-product-item:hover {
          color:
            rgba(255, 255, 255, 0.65);
        }

        .decode-vial-product-item.active {
          color: #d6c58c;
        }

        .decode-vial-product-number {
          font-size: 6px;

          letter-spacing: 0.12em;
        }

        .decode-vial-product-name {
          overflow: hidden;

          font-size: 7px;

          letter-spacing: 0.08em;

          text-overflow: ellipsis;

          white-space: nowrap;
        }

        .decode-vial-product-line {
          position: relative;

          width: 100%;
          height: 1px;

          overflow: hidden;

          background:
            rgba(255, 255, 255, 0.1);
        }

        .decode-vial-product-line i {
          position: absolute;

          inset: 0;

          display: block;

          transform-origin: left;

          background: #d6c58c;
        }

        /* ==================================================
           FOOTER
        ================================================== */

        .decode-vial-footer {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 15px;

          margin-top: 35px;

          padding-bottom: 28px;

          color:
            rgba(255, 255, 255, 0.19);

          font-size: 6px;

          letter-spacing: 0.2em;
        }

        .decode-vial-footer-line {
          width: 25px;
          height: 1px;

          background:
            rgba(214, 197, 140, 0.35);
        }

        /* ==================================================
           CORNERS
        ================================================== */

        .decode-corner {
          position: absolute;

          width: 24px;
          height: 24px;

          opacity: 0.5;
        }

        .decode-corner.top-left {
          top: 72px;
          left: 18px;

          border-top:
            1px solid #c9a227;

          border-left:
            1px solid #c9a227;
        }

        .decode-corner.top-right {
          top: 72px;
          right: 18px;

          border-top:
            1px solid #c9a227;

          border-right:
            1px solid #c9a227;
        }

        .decode-corner.bottom-left {
          bottom: 18px;
          left: 18px;

          border-bottom:
            1px solid #c9a227;

          border-left:
            1px solid #c9a227;
        }

        .decode-corner.bottom-right {
          bottom: 18px;
          right: 18px;

          border-bottom:
            1px solid #c9a227;

          border-right:
            1px solid #c9a227;
        }

        /* ==================================================
           TABLET
        ================================================== */

        @media (max-width: 1100px) {
          .decode-vial-product {
            grid-template-columns:
              0.55fr
              1.6fr
              0.75fr;
          }

          .decode-vial-number strong {
            font-size: 6rem;
          }

          .decode-vial-image-stage {
            height: 410px;
          }

          .decode-vial-products {
            gap: 6px;
          }

          .decode-vial-product-name {
            font-size: 6px;
          }
        }

        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 760px) {
          .decode-vial {
            min-height: 950px;
          }

          .decode-vial-header {
            padding: 0 20px;
          }

          .decode-vial-index {
            display: none;
          }

          .decode-vial-intro {
            width: calc(100% - 40px);

            padding-top: 55px;
          }

          .decode-vial-intro h2 {
            font-size:
              clamp(3rem, 13vw, 5rem);
          }

          .decode-vial-intro p {
            max-width: 330px;
          }

          .decode-vial-product {
            display: flex;

            flex-direction: column;

            width: calc(100% - 40px);

            min-height: auto;

            margin-top: 10px;
          }

          .decode-vial-number {
            position: absolute;

            top: 25px;
            left: 0;

            z-index: 5;
          }

          .decode-vial-number strong {
            font-size: 5rem;
          }

          .decode-vial-image-stage {
            width: 100%;

            height: 420px;

            margin-top: 15px;
          }

          .decode-vial-orbit-one {
            width: 290px;
            height: 290px;
          }

          .decode-vial-orbit-two {
            width: 360px;
            height: 360px;
          }

          .decode-vial-info {
            align-self: stretch;

            max-width: none;

            margin-top: 5px;
          }

          .decode-vial-info h3 {
            font-size: 2.6rem;
          }

          .decode-vial-meta {
            margin-top: 22px;
          }

          .decode-vial-navigation {
            width: calc(100% - 40px);

            margin-top: 35px;

            overflow-x: auto;

            scrollbar-width: none;
          }

          .decode-vial-navigation::-webkit-scrollbar {
            display: none;
          }

          .decode-vial-products {
            display: flex;

            width: max-content;

            gap: 18px;
          }

          .decode-vial-product-item {
            width: 90px;
          }

          .decode-vial-footer {
            margin-top: 30px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .decode-vial-product-item,
          .decode-vial-product-item:hover {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}