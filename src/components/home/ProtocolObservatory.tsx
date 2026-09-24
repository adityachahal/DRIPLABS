"use client";

import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Line,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";

import * as THREE from "three";

/* =========================================================
   TYPES
   ========================================================= */

type WellnessFamily =
  | "Skin & Beauty"
  | "Cellular & Longevity"
  | "Metabolic & Performance"
  | "Digestive & Systemic"
  | "Women's Wellness"
  | "Recovery & Immune"
  | "Cognitive & Neuro"
  | "Musculoskeletal";

type Family = "Neutral" | "All" | WellnessFamily;

type Protocol = {
  id?: string | number;
  number?: number;
  slug?: string;
  name: string;
  family?: string;
  category?: string;
  shortDescription?: string;
  description?: string;
  duration?: string;
  price?: string | number;
  evidenceTier?: string;
  active?: boolean;
  image?: string;
};

type FamilyConfig = {
  code: string;
  label: WellnessFamily;
  shortLabel: string;
  description: string;
};

type Anchor = {
  x: number;
  y: number;
  side: "left" | "right";
};

/* =========================================================
   DATA
   ========================================================= */

const families: FamilyConfig[] = [
  {
    code: "01",
    label: "Skin & Beauty",
    shortLabel: "Skin",
    description:
      "Protocols designed around skin vitality, radiance and cellular beauty.",
  },
  {
    code: "02",
    label: "Cellular & Longevity",
    shortLabel: "Cellular",
    description:
      "Cellular-focused protocols centred around renewal, energy and longevity.",
  },
  {
    code: "03",
    label: "Metabolic & Performance",
    shortLabel: "Metabolic",
    description:
      "Protocols supporting metabolic wellness, performance and recovery.",
  },
  {
    code: "04",
    label: "Digestive & Systemic",
    shortLabel: "Digestive",
    description:
      "Wellness protocols focused on gastrointestinal and systemic support.",
  },
  {
    code: "05",
    label: "Women's Wellness",
    shortLabel: "Women's",
    description:
      "Protocols designed around women's nutritional wellness and replenishment.",
  },
  {
    code: "06",
    label: "Recovery & Immune",
    shortLabel: "Recovery",
    description:
      "Protocols built around recovery, hydration and immune wellness.",
  },
  {
    code: "07",
    label: "Cognitive & Neuro",
    shortLabel: "Cognitive",
    description:
      "Focused wellness support for cognitive performance and neural pathways.",
  },
  {
    code: "08",
    label: "Musculoskeletal",
    shortLabel: "Mobility",
    description:
      "Protocols supporting mobility, musculoskeletal wellness and recovery.",
  },
];

const allFamily = {
  code: "09",
  label: "All" as const,
  shortLabel: "All",
  description: "Explore the full DRIPLABS protocol collection across every wellness family.",
};

const familyColors: Record<WellnessFamily, string> = {
  "Skin & Beauty": "#E7D49A",
  "Cellular & Longevity": "#9BD9D7",
  "Metabolic & Performance": "#D6B56D",
  "Digestive & Systemic": "#A7D3C0",
  "Women's Wellness": "#D8B8C8",
  "Recovery & Immune": "#A7D0E8",
  "Cognitive & Neuro": "#A9B7E8",
  Musculoskeletal: "#D4C4A1",
};

const familyKeywords: Record<WellnessFamily, string[]> = {
  "Skin & Beauty": [
    "glamour",
    "radiance",
    "restore",
    "skin",
    "hair",
    "beauty",
  ],

  "Cellular & Longevity": [
    "renew",
    "nad",
    "nadx",
    "methyblu",
    "apex",
    "longevity",
    "cellular",
    "mitochond",
  ],

  "Metabolic & Performance": [
    "shrink",
    "refuel",
    "fit",
    "rebuild",
    "performance",
  ],

  "Digestive & Systemic": [
    "gut",
    "gastro",
    "systemic",
    "digestive",
  ],

  "Women's Wellness": [
    "femme",
    "women",
    "womens",
    "female",
  ],

  "Recovery & Immune": [
    "reactivate",
    "bounce",
    "recover",
    "immune",
    "recovery",
    "hydration",
  ],

  "Cognitive & Neuro": [
    "focus",
    "cognitive",
    "neuro",
    "neural",
  ],

  Musculoskeletal: [
    "move",
    "musculoskeletal",
    "mobility",
    "joint",
  ],
};

/* =========================================================
   HELPERS
   ========================================================= */

function normalizeFamily(value?: string): Family {
  if (!value) return "Neutral";

  const normalized = value.toLowerCase().trim();

  if (
    normalized.includes("skin") ||
    normalized.includes("beauty")
  ) {
    return "Skin & Beauty";
  }

  if (
    normalized.includes("cellular") ||
    normalized.includes("longevity")
  ) {
    return "Cellular & Longevity";
  }

  if (
    normalized.includes("metabolic") ||
    normalized.includes("performance")
  ) {
    return "Metabolic & Performance";
  }

  if (
    normalized.includes("digestive") ||
    normalized.includes("systemic") ||
    normalized.includes("gut")
  ) {
    return "Digestive & Systemic";
  }

  if (
    normalized.includes("women") ||
    normalized.includes("femme")
  ) {
    return "Women's Wellness";
  }

  if (
    normalized.includes("recovery") ||
    normalized.includes("immune")
  ) {
    return "Recovery & Immune";
  }

  if (
    normalized.includes("cognitive") ||
    normalized.includes("neuro")
  ) {
    return "Cognitive & Neuro";
  }

  if (
    normalized.includes("musculoskeletal") ||
    normalized.includes("mobility")
  ) {
    return "Musculoskeletal";
  }

  return "Neutral";
}

function getProtocolImage(protocol: Protocol) {
  if (protocol.image) return protocol.image;

  if (!protocol.slug) return "";

  return `/images/treatments/${protocol.slug}.jpg`;
}

/* =========================================================
   THREE.JS HELPERS
   ========================================================= */

function cloneScene(scene: THREE.Object3D) {
  return scene.clone(true);
}

function setSceneAppearance(
  root: THREE.Object3D,
  options: {
    opacity?: number;
    color?: string;
    transparent?: boolean;
    wireframe?: boolean;
  }
) {
  root.traverse((child: THREE.Object3D) => {
    const mesh = child as THREE.Mesh;

    if (!mesh.isMesh) return;

    const materials = Array.isArray(mesh.material)
      ? mesh.material
      : [mesh.material];

    materials.forEach((material) => {
      const mat = material.clone();

      if ("color" in mat && options.color) {
        mat.color = new THREE.Color(options.color);
      }

      if ("opacity" in mat && options.opacity !== undefined) {
        mat.opacity = options.opacity;
      }

      if ("transparent" in mat) {
        mat.transparent =
          options.transparent ??
          (options.opacity !== undefined && options.opacity < 1);
      }

      if ("wireframe" in mat && options.wireframe !== undefined) {
        mat.wireframe = options.wireframe;
      }

      if ("roughness" in mat) {
        mat.roughness = 0.5;
      }

      if ("metalness" in mat) {
        mat.metalness = 0.15;
      }

      mesh.material = mat;
    });
  });
}

/* =========================================================
   ANATOMY ASSET
   ========================================================= */

function AnatomyAsset({
  url,
  color,
  opacity,
  scale = 1,
}: {
  url: string;
  color: string;
  opacity: number;
  scale?: number;
}) {
  const { scene } = useGLTF(url);

  const cloned = useMemo(
    () => cloneScene(scene),
    [scene]
  );

  useEffect(() => {
    setSceneAppearance(cloned, {
      color,
      opacity,
      transparent: opacity < 1,
    });
  }, [cloned, color, opacity]);

  return (
    <primitive
      object={cloned}
      scale={scale}
      position={[0, -0.15, 0]}
    />
  );
}

/* =========================================================
   PHYSIOLOGY PARTICLES
   ========================================================= */

function PhysiologyParticles({
  active,
  color,
  count = 100,
}: {
  active: boolean;
  color: string;
  count?: number;
}) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 0.65 + Math.random() * 1.55;
      const y =
        -2.1 + Math.random() * 4.2;

      array[i * 3] =
        Math.cos(theta) * radius;

      array[i * 3 + 1] = y;

      array[i * 3 + 2] =
        Math.sin(theta) * radius * 0.55;
    }

    return array;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y =
      state.clock.elapsedTime * (active ? 0.12 : 0.025);

    const material =
      ref.current.material as THREE.PointsMaterial;

    material.opacity = THREE.MathUtils.lerp(
      material.opacity,
      active ? 0.72 : 0.08,
      0.035
    );
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color={color}
        size={active ? 0.035 : 0.018}
        transparent
        opacity={active ? 0.72 : 0.08}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

/* =========================================================
   NEURAL FIELD
   ========================================================= */

function NeuralField({
  active,
}: {
  active: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.35) *
      0.04;
  });

  const lines = useMemo(() => {
    return Array.from({ length: 12 }).map(
      (_, index) => {
        const y = 1.15 - index * 0.18;

        return [
          new THREE.Vector3(
            -0.38,
            y,
            0.52
          ),
          new THREE.Vector3(
            0,
            y + 0.08,
            0.68
          ),
          new THREE.Vector3(
            0.38,
            y - 0.03,
            0.52
          ),
        ];
      }
    );
  }, []);

  return (
    <group ref={group}>
      {lines.map((points, index) => (
        <Line
          key={index}
          points={points}
          color="#9BD9D7"
          transparent
          opacity={active ? 0.6 : 0}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

/* =========================================================
   METABOLIC CORE
   ========================================================= */

function MetabolicCore({
  active,
}: {
  active: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.z =
      state.clock.elapsedTime * 0.25;
  });

  return (
    <group
      ref={group}
      position={[0, -0.45, 0.75]}
    >
      {[0.45, 0.62, 0.78].map(
        (radius, index) => (
          <mesh key={index}>
            <torusGeometry
              args={[
                radius,
                0.012,
                8,
                80,
              ]}
            />

            <meshBasicMaterial
              color="#D6B56D"
              transparent
              opacity={
                active
                  ? 0.4 - index * 0.08
                  : 0
              }
            />
          </mesh>
        )
      )}
    </group>
  );
}

/* =========================================================
   WOMEN'S WELLNESS
   ========================================================= */

function WomensCycle({
  active,
}: {
  active: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.z =
      state.clock.elapsedTime * 0.16;
  });

  return (
    <group
      ref={group}
      position={[0, -1.05, 0.7]}
    >
      <mesh>
        <torusGeometry
          args={[
            0.5,
            0.018,
            8,
            64,
          ]}
        />

        <meshBasicMaterial
          color="#D8B8C8"
          transparent
          opacity={active ? 0.7 : 0}
        />
      </mesh>

      <mesh>
        <torusGeometry
          args={[
            0.78,
            0.008,
            8,
            64,
          ]}
        />

        <meshBasicMaterial
          color="#D8B8C8"
          transparent
          opacity={active ? 0.35 : 0}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   HUD RINGS
   ========================================================= */

function HUDRings({
  active,
  color,
}: {
  active: boolean;
  color: string;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.z =
      state.clock.elapsedTime * 0.06;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusGeometry
          args={[
            2.15,
            0.006,
            8,
            128,
          ]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={active ? 0.38 : 0.13}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry
          args={[
            1.78,
            0.004,
            8,
            128,
          ]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={active ? 0.25 : 0.08}
        />
      </mesh>

      <mesh rotation={[0.3, 0.8, 0]}>
        <torusGeometry
          args={[
            2.5,
            0.003,
            8,
            128,
          ]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={active ? 0.2 : 0.06}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   ANATOMY SCENE
   ========================================================= */

function AnatomyScene({
  activeFamily,
}: {
  activeFamily: Family;
}) {
  const color =
    activeFamily === "Neutral" || activeFamily === "All"
      ? "#D8E0E8"
      : familyColors[activeFamily as WellnessFamily];

  const active =
    activeFamily !== "Neutral" && activeFamily !== "All";

  const skinOpacity =
    activeFamily === "Skin & Beauty"
      ? 0.92
      : activeFamily === "Neutral" || activeFamily === "All"
        ? 0.32
        : 0.16;

  const internalOpacity =
    activeFamily === "Neutral" || activeFamily === "All"
      ? 0.72
      : 0.82;

  const vesselsOpacity =
    activeFamily ===
      "Cellular & Longevity" ||
    activeFamily ===
      "Recovery & Immune"
      ? 0.8
      : 0.24;

  return (
    <>
      <ambientLight intensity={1.1} />

      <directionalLight
        position={[3, 4, 5]}
        intensity={2}
      />

      <pointLight
        position={[-3, 1, 4]}
        intensity={18}
        distance={10}
        color={color}
      />

      <pointLight
        position={[3, -2, 2]}
        intensity={10}
        distance={8}
        color="#8BA7C7"
      />

      <HUDRings
        active={active}
        color={color}
      />

      <AnatomyAsset
        url="/models/hra/skin.glb"
        color={
          activeFamily === "Skin & Beauty"
            ? "#E5CFC2"
            : "#D6DEE7"
        }
        opacity={skinOpacity}
        scale={1}
        key={`skin-${activeFamily}`}
      />

      <AnatomyAsset
        url="/models/hra/heart.glb"
        color={color}
        opacity={internalOpacity}
        scale={1}
        key={`heart-${activeFamily}`}
      />

      <AnatomyAsset
        url="/models/hra/lungs.glb"
        color={color}
        opacity={internalOpacity}
        scale={1}
        key={`lungs-${activeFamily}`}
      />

      <AnatomyAsset
        url="/models/hra/liver.glb"
        color={color}
        opacity={internalOpacity * 0.85}
        scale={1}
        key={`liver-${activeFamily}`}
      />

      <AnatomyAsset
        url="/models/hra/vessels.glb"
        color={
          activeFamily ===
          "Recovery & Immune"
            ? "#A7D0E8"
            : "#9BD9D7"
        }
        opacity={vesselsOpacity}
        scale={1}
        key={`vessels-${activeFamily}`}
      />

      <PhysiologyParticles
        active={
          activeFamily ===
            "Cellular & Longevity" ||
          activeFamily ===
            "Recovery & Immune" ||
          activeFamily ===
            "Digestive & Systemic"
        }
        color={color}
      />

      <NeuralField
        active={
          activeFamily ===
          "Cognitive & Neuro"
        }
      />

      <MetabolicCore
        active={
          activeFamily ===
          "Metabolic & Performance"
        }
      />

      <WomensCycle
        active={
          activeFamily ===
          "Women's Wellness"
        }
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />

      <PerspectiveCamera
        makeDefault
        position={[0, 0, 7]}
        fov={31}
      />
    </>
  );
}

/* =========================================================
   PROTOCOL CARD
   ========================================================= */

function ProtocolCard({
  protocol,
  side,
  index,
  active,
  color,
  onClick,
}: {
  protocol: Protocol;
  side: "left" | "right";
  index: number;
  active: boolean;
  color: string;
  onClick: () => void;
}) {
  const image = getProtocolImage(protocol);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{
        opacity: 0,
        x: side === "left" ? 36 : -36,
        scale: 0.92,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: active ? 1.025 : 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        x: side === "left" ? -28 : 28,
        scale: 0.94,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.48,
        delay: index * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.035,
      }}
      className={`dl-protocol-card ${side}`}
      style={{
        ["--protocol-accent" as string]: color,
      }}
    >
      <div className="dl-protocol-card-glow" />

      {image && (
        <div className="dl-protocol-image">
          <img
            src={image}
            alt=""
          />
        </div>
      )}

      <div className="dl-protocol-content">
        <span className="dl-protocol-number">
          {String(
            protocol.number ??
              index + 1
          ).padStart(2, "0")}
        </span>

        <div>
          <span className="dl-protocol-name">
            {protocol.name}
          </span>

          <span className="dl-protocol-category">
            {protocol.category ||
              protocol.family ||
              "Wellness protocol"}
          </span>
        </div>
      </div>

      <span className="dl-protocol-arrow">
        ↗
      </span>
    </motion.button>
  );
}

/* =========================================================
   CONNECTOR
   ========================================================= */

function Connector({
  side,
  y,
  color,
  active,
}: {
  side: "left" | "right";
  y: number;
  color: string;
  active: boolean;
}) {
  return (
    <motion.div
      className={`dl-connector ${side}`}
      style={{
        top: `${y}%`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: active ? 0.7 : 0.3,
      }}
    >
      <span
        className="dl-connector-line"
        style={{
          background: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />

      <span
        className="dl-connector-dot"
        style={{
          borderColor: color,
          background: color,
          boxShadow: `0 0 12px ${color}`,
        }}
      />
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ProtocolObservatory() {
  const reducedMotion = useReducedMotion();

  const [protocols, setProtocols] =
    useState<Protocol[]>([]);

  const [hoveredFamily, setHoveredFamily] =
    useState<Family>("Neutral");

  const [selectedFamily, setSelectedFamily] =
    useState<Family>("Neutral");

  const [hoveredProtocol, setHoveredProtocol] =
    useState<string | number | null>(null);

  const activeFamily =
    selectedFamily !== "Neutral"
      ? selectedFamily
      : hoveredFamily;

  const familyConfig =
    families.find(
      (family) =>
        family.label === activeFamily
    );

  /* -------------------------------------------------------
     FETCH PROTOCOLS
     ------------------------------------------------------- */

  useEffect(() => {
    let cancelled = false;

    async function loadProtocols() {
      try {
        const response = await fetch(
          "/api/protocols",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            "Unable to load protocols"
          );
        }

        const payload =
          await response.json();

        const incoming = Array.isArray(
          payload?.protocols
        )
          ? payload.protocols
          : Array.isArray(payload?.data)
            ? payload.data
            : [];

        if (!cancelled) {
          setProtocols(
            incoming.filter(
              (protocol: Protocol) =>
                protocol.active !== false
            )
          );
        }
      } catch {
        if (!cancelled) {
          setProtocols([]);
        }
      }
    }

    loadProtocols();

    return () => {
      cancelled = true;
    };
  }, []);

  /* -------------------------------------------------------
     VISIBLE PROTOCOLS
     ------------------------------------------------------- */

  const visibleProtocols =
    useMemo(() => {
      if (!protocols.length) return [];

      if (activeFamily === "Neutral" || activeFamily === "All") {
        return protocols.slice(0, 6);
      }

      let familyProtocols = protocols.filter(
        (protocol) =>
          normalizeFamily(protocol.family) === activeFamily
      );

      if (!familyProtocols.length) {
        const keywords = familyKeywords[activeFamily as WellnessFamily];

        familyProtocols = protocols.filter((protocol) => {
          const text = [
            protocol.name,
            protocol.slug,
            protocol.family,
            protocol.category,
            protocol.shortDescription,
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          return keywords.some((keyword) =>
            text.includes(keyword)
          );
        });
      }

      return familyProtocols.slice(0, 6);
    }, [protocols, activeFamily]);

  const leftProtocols =
    visibleProtocols.filter(
      (_, index) => index % 2 === 0
    );

  const rightProtocols =
    visibleProtocols.filter(
      (_, index) => index % 2 !== 0
    );

  /* -------------------------------------------------------
     FAMILY HANDLING
     ------------------------------------------------------- */

  function handleFamilyHover(
    family: Family
  ) {
    if (
      selectedFamily === "Neutral"
    ) {
      setHoveredFamily(family);
    }
  }

  function handleFamilyLeave() {
    if (
      selectedFamily === "Neutral"
    ) {
      setHoveredFamily("Neutral");
    }
  }

  function handleFamilyClick(family: Exclude<Family, "Neutral">) {
    if (selectedFamily === family) {
      setSelectedFamily("Neutral");
      setHoveredFamily("Neutral");
      return;
    }

    setSelectedFamily(family);
    setHoveredFamily(family);
  }


  const accent =
    activeFamily === "Neutral" || activeFamily === "All"
      ? "#D6C58C"
      : familyColors[activeFamily as WellnessFamily];

  /* -------------------------------------------------------
     CARD POSITIONS
     ------------------------------------------------------- */

  const leftAnchors: Anchor[] = [
    {
      x: 0,
      y: 28,
      side: "left",
    },
    {
      x: 0,
      y: 50,
      side: "left",
    },
    {
      x: 0,
      y: 72,
      side: "left",
    },
  ];

  const rightAnchors: Anchor[] = [
    {
      x: 0,
      y: 28,
      side: "right",
    },
    {
      x: 0,
      y: 50,
      side: "right",
    },
    {
      x: 0,
      y: 72,
      side: "right",
    },
  ];

  return (
    <section
      id="wellness-paths"
      className="dl-observatory"
    >
      <div className="dl-observatory-grid" />

      <div className="dl-observatory-noise" />


      {/* --------------------------------------------------
          MAIN INTERFACE
      -------------------------------------------------- */}

      <div className="dl-observatory-interface">

        {/* ------------------------------------------------
            LEFT FAMILY NAV
        ------------------------------------------------ */}

        <aside className="dl-family-nav">
          <div className="dl-family-list">
            {[...families, allFamily].map((family) => {
              const isAll = family.label === "All";
              const familyValue = family.label as Family;
              const isActive = activeFamily === familyValue;
              const isLocked = selectedFamily === familyValue;

              return (
                <div
                  key={family.code}
                  className={`dl-family-item-wrap ${
                    isAll ? "all" : ""
                  }`}
                >
                  <button
                    type="button"
                    className={`dl-family-item ${
                      isActive ? "active" : ""
                    } ${isLocked ? "locked" : ""} ${
                      isAll ? "all" : ""
                    }`}
                    onMouseEnter={() =>
                      handleFamilyHover(familyValue)
                    }
                    onMouseLeave={handleFamilyLeave}
                    onFocus={() =>
                      handleFamilyHover(familyValue)
                    }
                    onBlur={handleFamilyLeave}
                    onClick={() =>
                      handleFamilyClick(familyValue)
                    }
                  >
                    <span className="dl-family-code">
                      {family.code}
                    </span>

                    <span className="dl-family-name">
                      {isAll ? "ALL" : family.label}
                    </span>

                    <span className="dl-family-indicator">
                      {isLocked
                        ? "●"
                        : isActive
                          ? "↗"
                          : ""}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </aside>

        {/* ------------------------------------------------
            CENTRAL ANATOMY STAGE
        ------------------------------------------------ */}

        <div className="dl-anatomy-stage">

          <div className="dl-stage-topline">
            <span>
              {familyConfig
                ? familyConfig.code
                : "00"}
            </span>

            <span className="dl-stage-line" />

            <span>
              {activeFamily ===
              "Neutral"
                ? "WHOLE BODY"
                : activeFamily.toUpperCase()}
            </span>
          </div>

          {/* Anatomical HUD */}

          <div className="dl-anatomy-hud">
            <span className="hud-label top">
              SYSTEM / 01
            </span>

            <span className="hud-label left">
              PHYSIOLOGICAL
              <br />
              MAPPING
            </span>

            <span className="hud-label right">
              LIVE
              <br />
              INTERFACE
            </span>

            <span className="hud-label bottom">
              DRIPLABS / PRECISION
            </span>
          </div>

          {/* Three.js */}

          <div className="dl-canvas">
            <Canvas
              dpr={[1, 1.6]}
              gl={{
                antialias: true,
                alpha: true,
              }}
            >
              <Suspense fallback={null}>
                <AnatomyScene
                  activeFamily={
                    activeFamily
                  }
                />
              </Suspense>
            </Canvas>
          </div>

          {/* Center information */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFamily}
              className="dl-anatomy-caption"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration:
                  reducedMotion
                    ? 0
                    : 0.35,
              }}
            >
              <span
                className="dl-caption-line"
                style={{
                  background:
                    accent,
                }}
              />

              <div>
                <span>
                  {activeFamily ===
                  "Neutral"
                    ? "DRIPLABS ANATOMY"
                    : activeFamily}
                </span>

                <p>
                  {familyConfig?.description ||
                    "Explore the DRIPLABS wellness architecture."}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ------------------------------------------------
              LEFT PROTOCOLS
          ------------------------------------------------ */}

          <div className="dl-protocol-zone left">
            <AnimatePresence mode="popLayout">
              {leftProtocols.map(
                (protocol, index) => {
                  const anchor =
                    leftAnchors[
                      index %
                        leftAnchors.length
                    ];

                  const protocolId =
                    protocol.id ??
                    protocol.slug ??
                    `${protocol.name}-${index}`;

                  return (
                    <div
                      key={protocolId}
                      className="dl-protocol-position"
                      style={{
                        top: `${anchor.y}%`,
                      }}
                      onMouseEnter={() =>
                        setHoveredProtocol(
                          protocolId
                        )
                      }
                      onMouseLeave={() =>
                        setHoveredProtocol(
                          null
                        )
                      }
                    >
                      <Connector
                        side="left"
                        y={50}
                        color={accent}
                        active={
                          hoveredProtocol ===
                          protocolId
                        }
                      />

                      <ProtocolCard
                        protocol={protocol}
                        side="left"
                        index={index}
                        active={
                          hoveredProtocol ===
                          protocolId
                        }
                        color={accent}
                        onClick={() => {
                          setHoveredProtocol(
                            protocolId
                          );
                        }}
                      />
                    </div>
                  );
                }
              )}
            </AnimatePresence>
          </div>

          {/* ------------------------------------------------
              RIGHT PROTOCOLS
          ------------------------------------------------ */}

          <div className="dl-protocol-zone right">
            <AnimatePresence mode="popLayout">
              {rightProtocols.map(
                (protocol, index) => {
                  const anchor =
                    rightAnchors[
                      index %
                        rightAnchors.length
                    ];

                  const protocolId =
                    protocol.id ??
                    protocol.slug ??
                    `${protocol.name}-${index}`;

                  return (
                    <div
                      key={protocolId}
                      className="dl-protocol-position"
                      style={{
                        top: `${anchor.y}%`,
                      }}
                      onMouseEnter={() =>
                        setHoveredProtocol(
                          protocolId
                        )
                      }
                      onMouseLeave={() =>
                        setHoveredProtocol(
                          null
                        )
                      }
                    >
                      <Connector
                        side="right"
                        y={50}
                        color={accent}
                        active={
                          hoveredProtocol ===
                          protocolId
                        }
                      />

                      <ProtocolCard
                        protocol={protocol}
                        side="right"
                        index={index}
                        active={
                          hoveredProtocol ===
                          protocolId
                        }
                        color={accent}
                        onClick={() => {
                          setHoveredProtocol(
                            protocolId
                          );
                        }}
                      />
                    </div>
                  );
                }
              )}
            </AnimatePresence>
          </div>

          {/* ------------------------------------------------
              BOTTOM STATUS
          ------------------------------------------------ */}

          <div className="dl-stage-status">
            <span
              className="dl-status-dot"
              style={{
                background: accent,
                boxShadow:
                  `0 0 10px ${accent}`,
              }}
            />

            <span>
              {selectedFamily !== "Neutral"
                ? selectedFamily === "All"
                  ? "ALL PROTOCOLS"
                  : "PATH LOCKED"
                : "EXPLORATION MODE"}
            </span>

            <span className="dl-status-separator">
              /
            </span>

            <span>
              {visibleProtocols.length}{" "}
              PROTOCOLS SHOWN
            </span>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          MOBILE PROTOCOLS
      -------------------------------------------------- */}

      <div className="dl-mobile-protocols">
        <div className="dl-mobile-protocol-header">
          <span>
            {activeFamily === "Neutral"
              ? "FEATURED PROTOCOLS"
              : activeFamily === "All"
                ? "ALL PROTOCOLS"
                : activeFamily.toUpperCase()}
          </span>

          <span>
            {visibleProtocols.length
              .toString()
              .padStart(2, "0")}
          </span>
        </div>

        <div className="dl-mobile-protocol-grid">
          {visibleProtocols.map(
            (protocol, index) => (
              <ProtocolCard
                key={
                  protocol.id ??
                  protocol.slug ??
                  index
                }
                protocol={protocol}
                side={
                  index % 2 === 0
                    ? "left"
                    : "right"
                }
                index={index}
                active={false}
                color={accent}
                onClick={() => {}}
              />
            )
          )}
        </div>
      </div>

      <style jsx>{`
        /* =================================================
           ROOT
           ================================================= */

        .dl-observatory {
          position: relative;
          isolation: isolate;
          min-height: 100svh;
          height: 100svh;
          max-height: 980px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 46%,
              rgba(23, 48, 73, 0.72),
              transparent 32%
            ),
            radial-gradient(
              circle at 72% 50%,
              rgba(24, 91, 103, 0.12),
              transparent 28%
            ),
            #050b13;
          color: #eef3f6;
        }

        .dl-observatory-grid {
          position: absolute;
          inset: 0;
          z-index: -3;
          opacity: 0.16;
          background-image:
            linear-gradient(
              rgba(184, 205, 219, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(184, 205, 219, 0.06) 1px,
              transparent 1px
            );
          background-size:
            72px 72px;
          mask-image:
            radial-gradient(
              circle at center,
              black,
              transparent 82%
            );
        }

        .dl-observatory-noise {
          position: absolute;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          opacity: 0.035;
          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
        }

        /* =================================================
           INTERFACE
           ================================================= */

        .dl-observatory-interface {
          position: absolute;
          inset: 0;
        }

        /* =================================================
           FAMILY NAV
           ================================================= */

        .dl-family-nav {
          position: absolute;
          z-index: 40;

          left:
            clamp(24px, 4vw, 70px);

          top:
            clamp(70px, 10vh, 105px);

          width:
            clamp(180px, 14vw, 235px);
        }

        .dl-family-list {
          margin-top: 0;
        }

        .dl-family-item-wrap {
          position: relative;
        }

        .dl-family-item {
          position: relative;

          width: 100%;

          display: grid;
          grid-template-columns:
            25px 1fr 18px;

          align-items: center;

          padding:
            12px 0;

          border: 0;
          border-bottom: 1px solid
            rgba(
              218,
              229,
              237,
              0.075
            );

          background: transparent;

          color: rgba(
            225,
            233,
            238,
            0.45
          );

          text-align: left;
          cursor: pointer;

          transition:
            color 0.35s ease,
            padding 0.35s ease;
        }

        .dl-family-item:hover,
        .dl-family-item.active {
          padding-left: 8px;
          color: #f1f4f5;
        }

        .dl-family-item.active::before {
          content: "";

          position: absolute;
          left: -1px;
          top: 20%;
          bottom: 20%;

          width: 1px;

          background:
            var(--family-accent, #d6c58c);

          box-shadow:
            0 0 10px
              var(
                --family-accent,
                #d6c58c
              );
        }

        .dl-family-code {
          font-size: 7px;
          letter-spacing: 0.12em;
          opacity: 0.45;
        }

        .dl-family-name {
          font-size: clamp(13px, 1vw, 16px);
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: 0.045em;
          text-transform: uppercase;
        }

        .dl-family-item.all {
          margin-top: 14px;
          padding-top: 16px;
          border-top: 1px solid rgba(214, 197, 140, 0.22);
          border-bottom-color: rgba(214, 197, 140, 0.16);
        }

        .dl-family-item.all .dl-family-name {
          color: #d6c58c;
          letter-spacing: 0.11em;
        }

        .dl-family-item.all .dl-family-code {
          color: #d6c58c;
          opacity: 0.75;
        }

        .dl-family-indicator {
          text-align: right;
          font-size: 8px;
          color: #d6c58c;
        }

        /* =================================================
           ANATOMY STAGE
           ================================================= */

        .dl-anatomy-stage {
          position: absolute;
          inset: 0;

          overflow: hidden;
        }

        .dl-stage-topline {
          position: absolute;
          z-index: 20;

          top:
            clamp(62px, 9vh, 92px);

          left: 50%;
          transform: translateX(-50%);

          display: flex;
          align-items: center;
          gap: 12px;

          width: 270px;

          font-size: 7px;
          letter-spacing: 0.22em;
          color: rgba(
            220,
            230,
            237,
            0.35
          );
        }

        .dl-stage-line {
          flex: 1;
          height: 1px;
          background:
            rgba(
              220,
              230,
              237,
              0.12
            );
        }

        .dl-canvas {
          position: absolute;

          left: 50%;
          top: 51%;

          width:
            min(50vw, 760px);

          height:
            min(76vh, 720px);

          transform:
            translate(
              -50%,
              -50%
            );

          pointer-events: none;
        }

        .dl-canvas canvas {
          width: 100% !important;
          height: 100% !important;
        }

        /* =================================================
           ANATOMY HUD
           ================================================= */

        .dl-anatomy-hud {
          position: absolute;
          z-index: 10;

          left: 50%;
          top: 51%;

          width:
            min(38vw, 550px);

          height:
            min(66vh, 650px);

          transform:
            translate(
              -50%,
              -50%
            );

          pointer-events: none;

          border:
            1px solid
              rgba(
                197,
                218,
                229,
                0.06
              );

          border-radius: 50%;

          opacity: 0.8;
        }

        .dl-anatomy-hud::before,
        .dl-anatomy-hud::after {
          content: "";

          position: absolute;
          left: 50%;
          top: 50%;

          transform:
            translate(
              -50%,
              -50%
            );

          border-radius: 50%;

          border:
            1px solid
              rgba(
                197,
                218,
                229,
                0.055
              );
        }

        .dl-anatomy-hud::before {
          width: 78%;
          height: 78%;
        }

        .dl-anatomy-hud::after {
          width: 55%;
          height: 55%;
        }

        .hud-label {
          position: absolute;

          font-size: 6px;
          line-height: 1.5;
          letter-spacing: 0.18em;

          color: rgba(
            220,
            230,
            237,
            0.27
          );
        }

        .hud-label.top {
          left: 50%;
          top: -22px;
          transform:
            translateX(-50%);
        }

        .hud-label.left {
          left: -52px;
          top: 50%;
          transform:
            translateY(-50%);
        }

        .hud-label.right {
          right: -52px;
          top: 50%;
          text-align: right;
          transform:
            translateY(-50%);
        }

        .hud-label.bottom {
          left: 50%;
          bottom: -22px;
          transform:
            translateX(-50%);
        }

        /* =================================================
           ANATOMY CAPTION
           ================================================= */

        .dl-anatomy-caption {
          position: absolute;
          z-index: 20;

          left: 50%;
          bottom:
            clamp(70px, 8vh, 90px);

          transform:
            translateX(-50%);

          display: flex;
          align-items: flex-start;

          width:
            min(310px, 25vw);

          gap: 12px;
        }

        .dl-caption-line {
          width: 1px;
          min-width: 1px;
          height: 43px;
        }

        .dl-anatomy-caption span {
          display: block;

          margin-bottom: 5px;

          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .dl-anatomy-caption p {
          margin: 0;

          font-size: 8px;
          line-height: 1.55;

          color: rgba(
            220,
            230,
            237,
            0.42
          );
        }

        /* =================================================
           PROTOCOL ZONES
           ================================================= */

        .dl-protocol-zone {
          position: absolute;
          z-index: 50;

          top: 0;
          bottom: 0;

          width:
            min(28vw, 390px);

          pointer-events: none;
        }

        .dl-protocol-zone.left {
          left:
            clamp(
              260px,
              27vw,
              440px
            );
        }

        .dl-protocol-zone.right {
          right:
            clamp(
              80px,
              8vw,
              145px
            );
        }

        .dl-protocol-position {
          position: absolute;

          width: 100%;

          transform:
            translateY(-50%);

          pointer-events: auto;
        }

        /* =================================================
           CONNECTORS
           ================================================= */

        .dl-connector {
          position: absolute;

          top: 50%;

          display: flex;
          align-items: center;

          width:
            clamp(
              45px,
              5vw,
              90px
            );

          transform:
            translateY(-50%);

          pointer-events: none;
        }

        .dl-connector.left {
          right: 100%;
          justify-content: flex-end;
        }

        .dl-connector.right {
          left: 100%;
          justify-content: flex-start;
        }

        .dl-connector-line {
          width: 100%;
          height: 1px;
          opacity: 0.28;
        }

        .dl-connector-dot {
          position: absolute;

          width: 4px;
          height: 4px;

          border: 1px solid;

          border-radius: 50%;
        }

        .dl-connector.left
          .dl-connector-dot {
          left: 0;
        }

        .dl-connector.right
          .dl-connector-dot {
          right: 0;
        }

        /* =================================================
           PROTOCOL CARDS
           ================================================= */

        .dl-protocol-card {
          position: relative;

          width: 100%;
          height: 88px;

          display: flex;
          align-items: stretch;

          overflow: hidden;

          border:
            1px solid
              rgba(
                218,
                229,
                237,
                0.12
              );

          background:
            linear-gradient(
              110deg,
              rgba(
                14,
                27,
                40,
                0.9
              ),
              rgba(
                6,
                14,
                23,
                0.86
              )
            );

          backdrop-filter:
            blur(18px);

          box-shadow:
            0 15px 50px
              rgba(
                0,
                0,
                0,
                0.28
              );

          color: #f1f4f5;

          text-align: left;

          cursor: pointer;

          transition:
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .dl-protocol-card:hover {
          border-color:
            color-mix(
              in srgb,
              var(--protocol-accent)
                50%,
              rgba(
                218,
                229,
                237,
                0.12
              )
            );

          box-shadow:
            0 20px 65px
              rgba(
                0,
                0,
                0,
                0.4
              ),
            0 0 35px
              color-mix(
                in srgb,
                var(--protocol-accent)
                  12%,
                transparent
              );
        }

        .dl-protocol-card-glow {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at
                var(--glow-x, 20%)
                50%,
              color-mix(
                in srgb,
                var(--protocol-accent)
                  15%,
                transparent
              ),
              transparent 58%
            );

          pointer-events: none;
        }

        .dl-protocol-image {
          width: 82px;
          min-width: 82px;

          overflow: hidden;

          border-right:
            1px solid
              rgba(
                218,
                229,
                237,
                0.08
              );
        }

        .dl-protocol-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          opacity: 0.68;

          filter:
            saturate(0.7)
            contrast(1.08);

          transition:
            transform 0.6s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            opacity 0.35s ease;
        }

        .dl-protocol-card:hover
          .dl-protocol-image
          img {
          transform: scale(1.08);
          opacity: 0.92;
        }

        .dl-protocol-content {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;

          gap: 10px;

          padding: 0 12px;
        }

        .dl-protocol-number {
          align-self: flex-start;

          margin-top: 14px;

          font-size: 6px;
          letter-spacing: 0.15em;

          color:
            var(--protocol-accent);
        }

        .dl-protocol-name {
          display: block;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 15px;
          line-height: 1.05;
          font-weight: 400;
        }

        .dl-protocol-category {
          display: block;

          margin-top: 7px;

          font-size: 6px;
          letter-spacing: 0.14em;
          text-transform: uppercase;

          color: rgba(
            220,
            230,
            237,
            0.36
          );
        }


        .dl-protocol-hover-meta {
          position: absolute;
          left: 12px;
          right: 34px;
          bottom: 8px;

          display: flex;
          gap: 10px;
          align-items: center;

          opacity: 0;
          transform: translateY(5px);

          font-size: 6px;
          line-height: 1;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: color-mix(
            in srgb,
            var(--protocol-accent) 82%,
            #ffffff 18%
          );

          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .dl-protocol-hover-meta span + span::before {
          content: "";
          display: inline-block;
          width: 3px;
          height: 3px;
          margin: 0 8px 1px 0;
          border-radius: 50%;
          background: var(--protocol-accent);
          box-shadow: 0 0 7px var(--protocol-accent);
        }

        .dl-protocol-card:hover .dl-protocol-hover-meta {
          opacity: 0.9;
          transform: translateY(0);
        }

        .dl-protocol-card:hover .dl-protocol-category {
          color: color-mix(
            in srgb,
            var(--protocol-accent) 65%,
            #dce6ed 35%
          );
        }

        .dl-protocol-arrow {
          position: absolute;

          right: 11px;
          bottom: 9px;

          font-size: 12px;

          color:
            var(--protocol-accent);

          opacity: 0.55;
        }

        /* =================================================
           STAGE STATUS
           ================================================= */

        .dl-stage-status {
          position: absolute;
          z-index: 30;

          left: 50%;
          bottom: 28px;

          transform:
            translateX(-50%);

          display: flex;
          align-items: center;
          gap: 8px;

          white-space: nowrap;

          font-size: 6px;
          letter-spacing: 0.18em;

          color: rgba(
            220,
            230,
            237,
            0.3
          );
        }

        .dl-status-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
        }

        .dl-status-separator {
          opacity: 0.4;
        }

        /* =================================================
           MOBILE
           ================================================= */

        .dl-mobile-protocols {
          display: none;
        }

        @media (max-width: 1050px) {
          .dl-header-meta {
            display: none;
          }

          .dl-family-nav {
            left: 24px;
            width: 175px;
          }

          .dl-protocol-zone.left {
            left: 215px;
          }

          .dl-protocol-zone.right {
            right: 24px;
          }

          .dl-protocol-card {
            height: 78px;
          }

          .dl-protocol-image {
            width: 65px;
            min-width: 65px;
          }

          .dl-protocol-name {
            font-size: 12px;
          }

          .dl-anatomy-hud {
            width: 42vw;
          }
        }

        @media (max-width: 760px) {
          .dl-observatory {
            height: auto;
            min-height: 100svh;
            max-height: none;
            overflow: visible;
            padding-bottom: 45px;
          }


          .dl-observatory-interface {
            position: relative;

            height: 760px;
          }

          .dl-family-nav {
            position: absolute;

            left: 20px;
            right: 20px;
            top: 18px;

            width: auto;
          }


          .dl-family-list {
            display: grid;
            grid-template-columns:
              repeat(2, 1fr);

            gap: 0 15px;
          }

          .dl-family-item {
            padding: 10px 0;
          }

          .dl-family-name {
            font-size: 12px;
          }

          .dl-family-item.all {
            margin-top: 10px;
            padding-top: 12px;
          }

          .dl-stage-topline {
            top: 126px;
            width: 220px;
          }

          .dl-anatomy-stage {
            position: absolute;
            top: 125px;
            left: 0;
            right: 0;
            bottom: 0;
          }

          .dl-canvas {
            top: 48%;
            width: 92vw;
            height: 520px;
          }

          .dl-anatomy-hud {
            top: 48%;

            width: 76vw;
            height: 500px;
          }

          .dl-anatomy-caption {
            bottom: 35px;
            width: 70vw;
          }

          .dl-protocol-zone {
            display: none;
          }

          .dl-stage-status {
            bottom: 5px;
          }

          .dl-mobile-protocols {
            display: block;
            padding: 0 20px;
          }

          .dl-mobile-protocol-header {
            display: flex;
            justify-content: space-between;

            padding-bottom: 12px;

            border-bottom:
              1px solid
                rgba(
                  218,
                  229,
                  237,
                  0.1
                );

            font-size: 7px;
            letter-spacing: 0.18em;

            color: rgba(
              220,
              230,
              237,
              0.45
            );
          }

          .dl-mobile-protocol-grid {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 10px;

            margin-top: 14px;
          }

          .dl-mobile-protocol-grid
            .dl-protocol-card {
            height: 76px;
          }

          .dl-mobile-protocol-grid
            .dl-protocol-image {
            width: 55px;
            min-width: 55px;
          }

          .dl-mobile-protocol-grid
            .dl-protocol-name {
            font-size: 11px;
          }

          .dl-mobile-protocol-grid
            .dl-protocol-category {
            font-size: 5px;
          }

          .dl-mobile-protocol-grid
            .dl-protocol-hover-meta {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dl-observatory *,
          .dl-observatory *::before,
          .dl-observatory *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   PRELOAD
   ========================================================= */

useGLTF.preload(
  "/models/hra/skin.glb"
);

useGLTF.preload(
  "/models/hra/heart.glb"
);

useGLTF.preload(
  "/models/hra/lungs.glb"
);

useGLTF.preload(
  "/models/hra/liver.glb"
);

useGLTF.preload(
  "/models/hra/vessels.glb"
);
