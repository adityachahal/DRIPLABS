"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export type OrbitSkillItem = {
  label: string;
  icon?: ReactNode;
};

export type OrbitingSkillsProps = {
  items: OrbitSkillItem[];
  radius?: number;
  duration?: number;
  showPath?: boolean;
  followCursor?: boolean;
  children: ReactNode;
  className?: string;
};

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export function OrbitingSkills({
  items,
  radius = 96,
  duration = 18,
  showPath = true,
  followCursor = true,
  children,
  className = "",
}: OrbitingSkillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [cursorOffset, setCursorOffset] = useState({
    x: 0,
    y: 0,
  });

  const [reducedMotion, setReducedMotion] = useState(false);

  /* ------------------------------------------------------------------------ */
  /* REDUCED MOTION                                                           */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const update = () => {
      setReducedMotion(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /* CURSOR FOLLOW                                                            */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (!followCursor || reducedMotion) {
      return;
    }

    const element = containerRef.current;

    if (!element) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width - 0.5) * 2;

      const y =
        ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      setCursorOffset({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      });
    };

    const handlePointerLeave = () => {
      setCursorOffset({
        x: 0,
        y: 0,
      });
    };

    element.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    element.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    return () => {
      element.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      element.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, [followCursor, reducedMotion]);

  /* ------------------------------------------------------------------------ */
  /* ORBIT ITEMS                                                              */
  /* ------------------------------------------------------------------------ */

  const orbitItems = useMemo(() => {
    if (!items.length) {
      return [];
    }

    return items.map((item, index) => {
      const angle =
        (360 / items.length) * index - 90;

      const radians =
        (angle * Math.PI) / 180;

      const x =
        Math.cos(radians) * radius;

      const y =
        Math.sin(radians) * radius;

      return {
        ...item,
        index,
        angle,
        x,
        y,
      };
    });
  }, [items, radius]);

  /* ------------------------------------------------------------------------ */
  /* CENTER CHILD                                                             */
  /* ------------------------------------------------------------------------ */

  const centerContent = useMemo(() => {
    const childArray = Children.toArray(children);

    if (childArray.length === 1) {
      const child = childArray[0];

      if (isValidElement(child)) {
        return cloneElement(
          child as ReactElement<{
            className?: string;
          }>,
          {
            className: [
              "relative z-20",
              (child.props as { className?: string })?.className ?? "",
            ]
              .filter(Boolean)
              .join(" "),
          },
        );
      }
    }

    return children;
  }, [children]);

  /* ------------------------------------------------------------------------ */
  /* STYLES                                                                   */
  /* ------------------------------------------------------------------------ */

  const containerStyle: CSSProperties = {
    "--orbit-radius": `${radius}px`,
    "--orbit-duration": `${duration}s`,
  } as CSSProperties;

  /* ------------------------------------------------------------------------ */
  /* RENDER                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <div
      ref={containerRef}
      className={[
        "relative flex items-center justify-center",
        "isolate",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={containerStyle}
    >
      {/* ------------------------------------------------------------------ */}
      {/* ORBIT PATH                                                          */}
      {/* ------------------------------------------------------------------ */}

      {showPath && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full border border-white/[0.07]"
            style={{
              width: radius * 2,
              height: radius * 2,
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full border border-[#1683ff]/[0.045]"
            style={{
              width: radius * 2 + 18,
              height: radius * 2 + 18,
            }}
          />
        </>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* CURSOR ATMOSPHERE                                                   */}
      {/* ------------------------------------------------------------------ */}

      {!reducedMotion && followCursor && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 h-[220px] w-[220px] rounded-full bg-[#1683ff]/[0.035] blur-[70px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${cursorOffset.x * 18}px, ${
              cursorOffset.y * 18
            }px, 0)`,
          }}
        />
      )}

      {/* ------------------------------------------------------------------ */}
      {/* ORBITING ITEMS                                                       */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(${cursorOffset.x * 5}px, ${
            cursorOffset.y * 5
          }px, 0)`,
          transition:
            "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {orbitItems.map((item) => {
          const isHovered =
            hoveredIndex === item.index;

          const baseTransform =
            `translate3d(${item.x}px, ${item.y}px, 0)`;

          return (
            <div
              key={`${item.label}-${item.index}`}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate3d(-50%, -50%, 0) ${baseTransform}`,
              }}
            >
              <button
                type="button"
                aria-label={`Select ${item.label}`}
                onMouseEnter={() =>
                  setHoveredIndex(item.index)
                }
                onMouseLeave={() =>
                  setHoveredIndex(null)
                }
                onFocus={() =>
                  setHoveredIndex(item.index)
                }
                onBlur={() =>
                  setHoveredIndex(null)
                }
                className={[
                  "group relative flex items-center gap-2",
                  "whitespace-nowrap rounded-full",
                  "border px-3 py-2",
                  "transition-all duration-300",
                  "focus:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-[#1683ff]/50",
                  isHovered
                    ? "border-[#1683ff]/45 bg-[#1683ff]/10 text-white shadow-[0_0_28px_rgba(22,131,255,0.14)]"
                    : "border-white/[0.09] bg-[#030b17]/80 text-white/45 backdrop-blur-md hover:border-[#1683ff]/35 hover:text-white",
                ].join(" ")}
              >
                {/* Active dot */}
                <span
                  className={[
                    "size-1.5 shrink-0 rounded-full transition-all duration-300",
                    isHovered
                      ? "bg-[#5eacff] shadow-[0_0_10px_rgba(94,172,255,0.9)]"
                      : "bg-white/20",
                  ].join(" ")}
                />

                {/* Icon */}
                {item.icon && (
                  <span
                    className={[
                      "flex size-4 items-center justify-center",
                      "text-white/40 transition-colors duration-300",
                      isHovered
                        ? "text-[#70b6ff]"
                        : "",
                    ].join(" ")}
                  >
                    {item.icon}
                  </span>
                )}

                {/* Label */}
                <span className="text-[9px] font-medium tracking-[0.08em]">
                  {item.label}
                </span>

                {/* Hover glow */}
                <span
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute inset-0 -z-10 rounded-full",
                    "bg-[#1683ff]/10 blur-xl",
                    "transition-opacity duration-300",
                    isHovered
                      ? "opacity-100"
                      : "opacity-0",
                  ].join(" ")}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CENTER                                                              */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="relative z-20 flex items-center justify-center"
        style={{
          transform: `translate3d(${cursorOffset.x * -3}px, ${
            cursorOffset.y * -3
          }px, 0)`,
          transition:
            "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {centerContent}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* ORBIT MOTION                                                        */}
      {/* ------------------------------------------------------------------ */}

      {!reducedMotion && (
        <style jsx>{`
          @keyframes orbitingSkillsSpin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      )}
    </div>
  );
}