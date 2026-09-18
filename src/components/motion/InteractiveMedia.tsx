"use client";

import {
  type CSSProperties,
  type ReactNode,
  useRef,
  useState,
} from "react";

type InteractiveMediaProps = {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
};

export default function InteractiveMedia({
  children,
  className = "",
  intensity = "subtle",
}: InteractiveMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (!ref.current || event.pointerType === "touch") return;

    const rect = ref.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const centerX = x / rect.width - 0.5;
    const centerY = y / rect.height - 0.5;

    const strength =
      intensity === "strong"
        ? 8
        : intensity === "medium"
          ? 5
          : 3;

    const rotateX = centerY * -strength;
    const rotateY = centerX * strength;

    ref.current.style.setProperty(
      "--dl-pointer-x",
      `${percentX}%`,
    );

    ref.current.style.setProperty(
      "--dl-pointer-y",
      `${percentY}%`,
    );

    ref.current.style.setProperty(
      "--dl-rotate-x",
      `${rotateX}deg`,
    );

    ref.current.style.setProperty(
      "--dl-rotate-y",
      `${rotateY}deg`,
    );

    ref.current.style.setProperty(
      "--dl-shift-x",
      `${centerX * 5}px`,
    );

    ref.current.style.setProperty(
      "--dl-shift-y",
      `${centerY * 5}px`,
    );
  }

  function handlePointerLeave() {
    if (!ref.current) return;

    ref.current.style.setProperty("--dl-pointer-x", "50%");
    ref.current.style.setProperty("--dl-pointer-y", "50%");
    ref.current.style.setProperty("--dl-rotate-x", "0deg");
    ref.current.style.setProperty("--dl-rotate-y", "0deg");
    ref.current.style.setProperty("--dl-shift-x", "0px");
    ref.current.style.setProperty("--dl-shift-y", "0px");

    setHovered(false);
  }

  return (
    <div
      ref={ref}
      className={`driplabs-interactive-media ${
        hovered ? "is-hovered" : ""
      } ${className}`}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") {
          setHovered(true);
        }
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}
