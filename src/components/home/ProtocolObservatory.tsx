"use client";

import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
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

type RegionTarget = {
  camera: [number, number, number];
  lookAt: [number, number, number];
  fov: number;
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
   REGION TARGETS — where the camera flies to per protocol
   family, and where the on-body target marker sits. These
   are approximate anatomical coordinates in the model's
   local space; tune them once against your actual .glb
   geometry (open the model in a viewer and note real
   surface coordinates for a perfect fit).
   ========================================================= */

const regionTargets: Record<Family, RegionTarget> = {
  Neutral: { camera: [0, 0, 7], lookAt: [0, 0, 0], fov: 31 },
  All: { camera: [0, 0, 7], lookAt: [0, 0, 0], fov: 31 },
  "Skin & Beauty": {
    camera: [0, 0.55, 3.1],
    lookAt: [0, 0.65, 0.35],
    fov: 26,
  },
  "Cellular & Longevity": {
    camera: [1.7, 0.25, 3.9],
    lookAt: [0, 0, 0.5],
    fov: 27,
  },
  "Metabolic & Performance": {
    camera: [0, -0.05, 2.5],
    lookAt: [0, -0.45, 0.75],
    fov: 24,
  },
  "Digestive & Systemic": {
    camera: [0.55, -0.25, 2.7],
    lookAt: [0, -0.7, 0.6],
    fov: 24,
  },
  "Women's Wellness": {
    camera: [0, -0.85, 2.5],
    lookAt: [0, -1.05, 0.7],
    fov: 24,
  },
  "Recovery & Immune": {
    camera: [-1.6, 0.15, 3.9],
    lookAt: [0, 0.1, 0.6],
    fov: 27,
  },
  "Cognitive & Neuro": {
    camera: [0, 1.0, 2.3],
    lookAt: [0, 1.0, 0.55],
    fov: 22,
  },
  Musculoskeletal: {
    camera: [1.9, -0.15, 4.3],
    lookAt: [0, -0.3, 0.4],
    fov: 29,
  },
};

/* =========================================================
   HELPERS
   ========================================================= */

function normalizeFamily(value?: string): Family {
  if (!value) return "Neutral";

  const normalized = value.toLowerCase().trim();

  if (normalized.includes("skin") || normalized.includes("beauty")) {
    return "Skin & Beauty";
  }

  if (normalized.includes("cellular") || normalized.includes("longevity")) {
    return "Cellular & Longevity";
  }

  if (normalized.includes("metabolic") || normalized.includes("performance")) {
    return "Metabolic & Performance";
  }

  if (
    normalized.includes("digestive") ||
    normalized.includes("systemic") ||
    normalized.includes("gut")
  ) {
    return "Digestive & Systemic";
  }

  if (normalized.includes("women") || normalized.includes("femme")) {
    return "Women's Wellness";
  }

  if (normalized.includes("recovery") || normalized.includes("immune")) {
    return "Recovery & Immune";
  }

  if (normalized.includes("cognitive") || normalized.includes("neuro")) {
    return "Cognitive & Neuro";
  }

  if (normalized.includes("musculoskeletal") || normalized.includes("mobility")) {
    return "Musculoskeletal";
  }

  return "Neutral";
}

function getProtocolImage(protocol: Protocol) {
  if (protocol.image) return protocol.image;
  if (!protocol.slug) return "";
  return `/images/treatments/${protocol.slug}.jpg`;
}

/**
 * Reads a CSS custom property from :root at runtime and returns its
 * resolved value (e.g. "#28b8c8"). Needed because three.js/THREE.Color
 * cannot parse raw `var(--token)` strings — passing them directly (as the
 * previous version of this file did) silently fails.
 */
function useCssVariable(name: string, fallback: string) {
  const [value, setValue] = useState(fallback);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const resolved = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();

    if (resolved) setValue(resolved);
  }, [name]);

  return value;
}

/* =========================================================
   THREE.JS HELPERS
   ========================================================= */

function cloneScene(scene: THREE.Object3D) {
  return scene.clone(true);
}

/**
 * Rebuilds a source material as a MeshPhysicalMaterial tuned per tissue
 * type — this is the single biggest lever for perceived realism, since
 * flat MeshStandardMaterial clones (the previous approach) always read
 * as "plastic" regardless of lighting.
 */
function buildRealisticMaterial(
  source: THREE.Material,
  options: {
    color?: string;
    opacity?: number;
    transparent?: boolean;
    kind?: "skin" | "organ" | "vessel";
  }
) {
  const physical = new THREE.MeshPhysicalMaterial();
  const src = source as THREE.MeshStandardMaterial;

  if (src?.map) physical.map = src.map;
  if (src?.normalMap) physical.normalMap = src.normalMap;

  physical.color = new THREE.Color(
    options.color ?? (src?.color ? `#${src.color.getHexString()}` : "#ffffff")
  );

  physical.opacity = options.opacity ?? 1;
  physical.transparent = options.transparent ?? physical.opacity < 1;
  physical.depthWrite = physical.opacity > 0.85;

  if (options.kind === "skin") {
    physical.roughness = 0.42;
    physical.metalness = 0;
    physical.clearcoat = 0.12;
    physical.clearcoatRoughness = 0.35;
    physical.transmission = 0.06;
    physical.thickness = 0.6;
    physical.ior = 1.35;
    physical.sheen = 0.15;
    physical.sheenColor = new THREE.Color("#ffe3d1");
  } else if (options.kind === "organ") {
    physical.roughness = 0.55;
    physical.metalness = 0.05;
    physical.clearcoat = 0.25;
    physical.clearcoatRoughness = 0.4;
    physical.sheen = 0.08;
  } else if (options.kind === "vessel") {
    physical.roughness = 0.3;
    physical.metalness = 0.1;
    physical.emissive = physical.color.clone();
    physical.emissiveIntensity = 0.9;
  } else {
    physical.roughness = 0.5;
    physical.metalness = 0.12;
  }

  return physical;
}

function setSceneAppearance(
  root: THREE.Object3D,
  options: {
    opacity?: number;
    color?: string;
    transparent?: boolean;
    kind?: "skin" | "organ" | "vessel";
  }
) {
  root.traverse((child: THREE.Object3D) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh) return;

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const rebuilt = materials.map((material) => buildRealisticMaterial(material, options));

    mesh.material = rebuilt.length === 1 ? rebuilt[0] : rebuilt;
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
  kind = "organ",
}: {
  url: string;
  color: string;
  opacity: number;
  scale?: number;
  kind?: "skin" | "organ" | "vessel";
}) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => cloneScene(scene), [scene]);

  useEffect(() => {
    setSceneAppearance(cloned, {
      color,
      opacity,
      transparent: opacity < 1,
      kind,
    });
  }, [cloned, color, opacity, kind]);

  return <primitive object={cloned} scale={scale} position={[0, -0.15, 0]} />;
}

/* =========================================================
   PHYSIOLOGY PARTICLES
   ========================================================= */

function PhysiologyParticles({
  active,
  color,
  count = 46,
}: {
  active: boolean;
  color: string;
  count?: number;
}) {
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 0.7 + Math.random() * 1.45;
      const y = -2 + Math.random() * 4;

      array[i * 3] = Math.cos(theta) * radius;
      array[i * 3 + 1] = y;
      array[i * 3 + 2] = Math.sin(theta) * radius * 0.5;
    }

    return array;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        color={color}
        size={active ? 0.026 : 0.012}
        transparent
        opacity={active ? 0.5 : 0.035}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

/* =========================================================
   NEURAL FIELD
   ========================================================= */

function NeuralField({ active, accentHex }: { active: boolean; accentHex: string }) {
  const lines = useMemo(() => {
    return Array.from({ length: 8 }).map((_, index) => {
      const y = 1.05 - index * 0.22;

      return [
        new THREE.Vector3(-0.35, y, 0.52),
        new THREE.Vector3(0, y + 0.07, 0.66),
        new THREE.Vector3(0.35, y - 0.02, 0.52),
      ];
    });
  }, []);

  if (!active) return null;

  return (
    <group>
      {lines.map((points, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  points[0].x, points[0].y, points[0].z,
                  points[1].x, points[1].y, points[1].z,
                  points[2].x, points[2].y, points[2].z,
                ]),
                3,
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial color={accentHex} transparent opacity={0.48} />
        </line>
      ))}
    </group>
  );
}

/* =========================================================
   METABOLIC CORE
   ========================================================= */

function MetabolicCore({ active, accentHex }: { active: boolean; accentHex: string }) {
  if (!active) return null;

  return (
    <group position={[0, -0.45, 0.75]}>
      {[0.45, 0.62, 0.78].map((radius, index) => (
        <mesh key={index}>
          <torusGeometry args={[radius, index === 0 ? 0.014 : 0.009, 8, 48]} />
          <meshBasicMaterial color={accentHex} transparent opacity={0.34 - index * 0.07} />
        </mesh>
      ))}
    </group>
  );
}

/* =========================================================
   WOMEN'S WELLNESS
   ========================================================= */

function WomensCycle({ active, accentHex }: { active: boolean; accentHex: string }) {
  if (!active) return null;

  return (
    <group position={[0, -1.05, 0.7]}>
      <mesh>
        <torusGeometry args={[0.5, 0.018, 8, 48]} />
        <meshBasicMaterial color={accentHex} transparent opacity={0.6} />
      </mesh>

      <mesh>
        <torusGeometry args={[0.78, 0.008, 8, 48]} />
        <meshBasicMaterial color={accentHex} transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

/* =========================================================
   HUD RINGS
   ========================================================= */

function HUDRings({ active, color }: { active: boolean; color: string }) {
  return (
    <group>
      <mesh>
        <torusGeometry args={[2.15, 0.005, 8, 72]} />
        <meshBasicMaterial color={color} transparent opacity={active ? 0.28 : 0.1} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.78, 0.0035, 8, 72]} />
        <meshBasicMaterial color={color} transparent opacity={active ? 0.18 : 0.055} />
      </mesh>

      <mesh rotation={[0.3, 0.8, 0]}>
        <torusGeometry args={[2.5, 0.0025, 8, 72]} />
        <meshBasicMaterial color={color} transparent opacity={active ? 0.14 : 0.04} />
      </mesh>
    </group>
  );
}

/* =========================================================
   SURFACE SNAP — instead of trusting a hand-guessed lookAt
   coordinate, cast a ray from the target camera position toward
   that guess and snap to wherever it actually hits the skin
   mesh. This is what fixes markers floating off the body or
   sinking inside it — accuracy now depends on the ray finding a
   real surface, not on the guessed coordinate being perfect.
   ========================================================= */

function useSurfaceSnap(
  surfaceRef: React.RefObject<THREE.Object3D | null>,
  origin: [number, number, number],
  lookAt: [number, number, number]
) {
  const [point, setPoint] = useState<THREE.Vector3>(
    () => new THREE.Vector3(...lookAt)
  );
  const raycaster = useMemo(() => new THREE.Raycaster(), []);

  useEffect(() => {
    if (!surfaceRef.current) {
      setPoint(new THREE.Vector3(...lookAt));
      return;
    }

    const originVec = new THREE.Vector3(...origin);
    const lookAtVec = new THREE.Vector3(...lookAt);
    const direction = lookAtVec.clone().sub(originVec).normalize();

    raycaster.set(originVec, direction);
    const hits = raycaster.intersectObject(surfaceRef.current, true);

    if (hits.length > 0) {
      const hit = hits[0];
      const normal = hit.face
        ? hit.face.normal
            .clone()
            .transformDirection(hit.object.matrixWorld)
            .normalize()
        : direction.clone().negate();

      setPoint(hit.point.clone().add(normal.multiplyScalar(0.015)));
    } else {
      // no surface found along this ray — keep the hand-guessed
      // point as a fallback so the marker never just disappears
      setPoint(lookAtVec);
    }
  }, [surfaceRef, origin, lookAt, raycaster]);

  return point;
}

/* =========================================================
   TARGET MARKER — the "this is what we're targeting" reticle,
   placed in 3D space at the active protocol family's region.
   ========================================================= */

function TargetMarker({
  position,
  color,
}: {
  position: THREE.Vector3 | [number, number, number];
  color: string;
}) {
  const ringRef = useRef<THREE.Mesh>(null);
  const pulse = useRef(0);

  useFrame((_, delta) => {
    pulse.current = (pulse.current + delta * 0.6) % 1;

    if (ringRef.current) {
      const scale = 1 + pulse.current * 1.6;
      ringRef.current.scale.setScalar(scale);

      const material = ringRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = Math.max(0, 0.85 - pulse.current * 0.85);
    }
  });

  return (
    <group position={position}>
      {/* core */}
      <mesh>
        <sphereGeometry args={[0.028, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      {/* expanding radar ping */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.05, 0.062, 48]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.85}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>

      {/* static outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.09, 0.096, 48]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>

      {/* vertical scan beam */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.0015, 0.0015, 1.2, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} toneMapped={false} />
      </mesh>
    </group>
  );
}

function SnappedTargetMarker({
  active,
  skinRef,
  camera,
  lookAt,
  color,
}: {
  active: boolean;
  skinRef: React.RefObject<THREE.Group | null>;
  camera: [number, number, number];
  lookAt: [number, number, number];
  color: string;
}) {
  // hook runs every render regardless of `active` — hooks can't be
  // called conditionally — the marker mesh itself is what's gated
  const snapped = useSurfaceSnap(skinRef, camera, lookAt);

  if (!active) return null;

  return <TargetMarker position={snapped} color={color} />;
}

/* =========================================================
   CAMERA CONTROLLER — smoothly flies the camera to the active
   protocol family's region target every time selection changes.
   Frame-rate-independent exponential easing (no jank on slow
   devices), with a gentle idle drift when nothing is selected.
   ========================================================= */

function CameraController({ activeFamily }: { activeFamily: Family }) {
  const { camera } = useThree();
  const lookAtRef = useRef(new THREE.Vector3(...regionTargets.Neutral.lookAt));
  const idleAngle = useRef(0);

  useFrame((_, delta) => {
    const target = regionTargets[activeFamily] ?? regionTargets.Neutral;
    const targetPos = new THREE.Vector3(...target.camera);
    const targetLook = new THREE.Vector3(...target.lookAt);

    if (activeFamily === "Neutral") {
      idleAngle.current += delta * 0.05;
      targetPos.x += Math.sin(idleAngle.current) * 0.15;
      targetPos.y += Math.cos(idleAngle.current * 0.7) * 0.05;
    }

    const smoothing = 1 - Math.pow(0.0015, delta);

    camera.position.lerp(targetPos, smoothing);
    lookAtRef.current.lerp(targetLook, smoothing);
    camera.lookAt(lookAtRef.current);

    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = THREE.MathUtils.lerp(camera.fov, target.fov, smoothing);
      camera.updateProjectionMatrix();
    }
  });

  return null;
}

/* =========================================================
   ANATOMY SCENE
   ========================================================= */

function AnatomyScene({
  activeFamily,
  accentHex,
  calibrating = false,
  onCalibratePoint,
}: {
  activeFamily: Family;
  accentHex: string;
  calibrating?: boolean;
  onCalibratePoint?: (point: [number, number, number]) => void;
}) {
  const active = activeFamily !== "Neutral" && activeFamily !== "All";
  const color = active ? accentHex : "#D8E0E8";

  const skinRef = useRef<THREE.Group>(null);
  const bodyGroupRef = useRef<THREE.Group>(null);

  const skinOpacity =
    activeFamily === "Skin & Beauty" ? 0.92 : active ? 0.16 : 0.32;

  const internalOpacity = active ? 0.82 : 0.72;

  const vesselsOpacity =
    activeFamily === "Cellular & Longevity" || activeFamily === "Recovery & Immune"
      ? 0.8
      : 0.24;

  const target = regionTargets[activeFamily] ?? regionTargets.Neutral;

  return (
    <>
      <ambientLight intensity={0.55} />

      <directionalLight
        position={[3.4, 4.5, 5]}
        intensity={2.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <pointLight position={[-3, 1, 4]} intensity={16} distance={10} color={color} />
      <pointLight position={[3, -2, 2]} intensity={9} distance={8} color="#8BA7C7" />
      <pointLight position={[0, 2.5, -3]} intensity={6} distance={9} color="#4A6FA0" />

      {/* studio environment map for realistic PBR reflections — pulls a
          small HDR from drei's CDN at runtime, needs client-side network */}
      <Environment preset="studio" />

      <HUDRings active={active} color={color} />

      <group
        ref={bodyGroupRef}
        onPointerDown={(event) => {
          if (!calibrating || !onCalibratePoint) return;
          event.stopPropagation();
          const p = event.point;
          onCalibratePoint([
            Number(p.x.toFixed(3)),
            Number(p.y.toFixed(3)),
            Number(p.z.toFixed(3)),
          ]);
        }}
      >
        <group ref={skinRef}>
          <AnatomyAsset
            url="/models/hra/skin.glb"
            kind="skin"
            color={activeFamily === "Skin & Beauty" ? "#E5CFC2" : "#D6DEE7"}
            opacity={skinOpacity}
            scale={1}
          />
        </group>

        <AnatomyAsset url="/models/hra/heart.glb" kind="organ" color={color} opacity={internalOpacity} scale={1} />
        <AnatomyAsset url="/models/hra/lungs.glb" kind="organ" color={color} opacity={internalOpacity} scale={1} />
        <AnatomyAsset
          url="/models/hra/liver.glb"
          kind="organ"
          color={color}
          opacity={internalOpacity * 0.85}
          scale={1}
        />
        <AnatomyAsset url="/models/hra/vessels.glb" kind="vessel" color={accentHex} opacity={vesselsOpacity} scale={1} />
      </group>

      <PhysiologyParticles
        active={
          activeFamily === "Cellular & Longevity" ||
          activeFamily === "Recovery & Immune" ||
          activeFamily === "Digestive & Systemic"
        }
        color={color}
      />

      <NeuralField active={activeFamily === "Cognitive & Neuro"} accentHex={accentHex} />
      <MetabolicCore active={activeFamily === "Metabolic & Performance"} accentHex={accentHex} />
      <WomensCycle active={activeFamily === "Women's Wellness"} accentHex={accentHex} />

      <SnappedTargetMarker
        active={active}
        skinRef={skinRef}
        camera={target.camera}
        lookAt={target.lookAt}
        color={accentHex}
      />

      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.45}
        scale={8}
        blur={2.6}
        far={3}
        resolution={512}
        color="#000000"
      />

      <PerspectiveCamera
        makeDefault
        position={regionTargets.Neutral.camera}
        fov={regionTargets.Neutral.fov}
      />

      <CameraController activeFamily={activeFamily} />
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
      initial={{ opacity: 0, x: side === "left" ? 22 : -22 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: side === "left" ? -18 : 18 }}
      transition={{ duration: 0.32, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      className={`dl-protocol-card ${side}`}
      style={{ ["--protocol-accent" as string]: color }}
    >
      <div className="dl-protocol-card-glow" />

      {image && (
        <div className="dl-protocol-image">
          <img src={image} alt="" loading="lazy" decoding="async" />
        </div>
      )}

      <div className="dl-protocol-content">
        <span className="dl-protocol-number">
          {String(protocol.number ?? index + 1).padStart(2, "0")}
        </span>

        <div>
          <span className="dl-protocol-name">{protocol.name}</span>
          <span className="dl-protocol-category">
            {protocol.category || protocol.family || "Wellness protocol"}
          </span>
        </div>
      </div>

      <span className="dl-protocol-arrow">↗</span>
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
      style={{ top: `${y}%` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 0.7 : 0.3 }}
    >
      <span className="dl-connector-line" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
      <span
        className="dl-connector-dot"
        style={{ borderColor: color, background: color, boxShadow: `0 0 12px ${color}` }}
      />
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ProtocolObservatory() {
  const reducedMotion = useReducedMotion();
  const accentHex = useCssVariable("--color-accent-primary", "#28B8C8");

  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [hoveredFamily, setHoveredFamily] = useState<Family>("Neutral");
  const [selectedFamily, setSelectedFamily] = useState<Family>("Neutral");
  const [hoveredProtocol, setHoveredProtocol] = useState<string | number | null>(null);
  const [calibrating, setCalibrating] = useState(false);
  const [lastCalibratedPoint, setLastCalibratedPoint] = useState<[number, number, number] | null>(null);

  const activeFamily = selectedFamily !== "Neutral" ? selectedFamily : hoveredFamily;
  const familyConfig = families.find((family) => family.label === activeFamily);

  useEffect(() => {
    let cancelled = false;

    async function loadProtocols() {
      try {
        const response = await fetch("/api/protocols", { cache: "no-store" });
        if (!response.ok) throw new Error("Unable to load protocols");

        const payload = await response.json();
        const incoming = Array.isArray(payload?.protocols)
          ? payload.protocols
          : Array.isArray(payload?.data)
            ? payload.data
            : [];

        if (!cancelled) {
          setProtocols(incoming.filter((protocol: Protocol) => protocol.active !== false));
        }
      } catch {
        if (!cancelled) setProtocols([]);
      }
    }

    loadProtocols();
    return () => {
      cancelled = true;
    };
  }, []);

  const visibleProtocols = useMemo(() => {
    if (!protocols.length) return [];

    if (activeFamily === "Neutral" || activeFamily === "All") {
      return protocols.slice(0, 6);
    }

    let familyProtocols = protocols.filter(
      (protocol) => normalizeFamily(protocol.family) === activeFamily
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

        return keywords.some((keyword) => text.includes(keyword));
      });
    }

    return familyProtocols.slice(0, 6);
  }, [protocols, activeFamily]);

  const leftProtocols = visibleProtocols.filter((_, index) => index % 2 === 0);
  const rightProtocols = visibleProtocols.filter((_, index) => index % 2 !== 0);

  function handleFamilyHover(family: Family) {
    if (selectedFamily === "Neutral") setHoveredFamily(family);
  }

  function handleFamilyLeave() {
    if (selectedFamily === "Neutral") setHoveredFamily("Neutral");
  }

  function handleFamilyClick(family: Family) {
    if (family === "Neutral") {
      setSelectedFamily("Neutral");
      setHoveredFamily("Neutral");
      return;
    }

    if (selectedFamily === family) {
      setSelectedFamily("Neutral");
      setHoveredFamily("Neutral");
      return;
    }

    setSelectedFamily(family);
    setHoveredFamily(family);
  }

  const accent = accentHex;

  const leftAnchors: Anchor[] = [
    { x: 0, y: 33, side: "left" },
    { x: 0, y: 52, side: "left" },
    { x: 0, y: 71, side: "left" },
  ];

  const rightAnchors: Anchor[] = [
    { x: 0, y: 33, side: "right" },
    { x: 0, y: 52, side: "right" },
    { x: 0, y: 71, side: "right" },
  ];

  return (
    <section id="wellness-paths" className="dl-observatory">
      <div className="dl-observatory-grid" />
      <div className="dl-observatory-noise" />

      <div className="dl-observatory-interface">
        <aside className="dl-family-nav">
          <div className="dl-family-list">
            {[...families, allFamily].map((family) => {
              const isAll = family.label === "All";
              const familyValue = family.label as Family;
              const isActive = activeFamily === familyValue;
              const isLocked = selectedFamily === familyValue;

              return (
                <div key={family.code} className={`dl-family-item-wrap ${isAll ? "all" : ""}`}>
                  <button
                    type="button"
                    className={`dl-family-item ${isActive ? "active" : ""} ${isLocked ? "locked" : ""} ${isAll ? "all" : ""}`}
                    onMouseEnter={() => handleFamilyHover(familyValue)}
                    onMouseLeave={handleFamilyLeave}
                    onFocus={() => handleFamilyHover(familyValue)}
                    onBlur={handleFamilyLeave}
                    onClick={() => handleFamilyClick(familyValue)}
                  >
                    <span className="dl-family-code">{family.code}</span>
                    <span className="dl-family-name">{isAll ? "ALL" : family.label}</span>
                    <span className="dl-family-indicator">{isLocked ? "●" : isActive ? "↗" : ""}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </aside>

        <div className="dl-anatomy-stage">
          <div className="dl-stage-topline">
            <span>{familyConfig ? familyConfig.code : "00"}</span>
            <span className="dl-stage-line" />
            <span>{activeFamily === "Neutral" ? "WHOLE BODY" : activeFamily.toUpperCase()}</span>
          </div>

          <div className="dl-anatomy-hud">
            <span className="hud-label top">SYSTEM / 01</span>
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
            <span className="hud-label bottom">DRIPLABS / PRECISION</span>
          </div>

          <div
            className="dl-canvas"
            style={{
              pointerEvents: calibrating ? "auto" : "none",
              cursor: calibrating ? "crosshair" : "default",
            }}
          >
            <Canvas
              dpr={[1, 1.5]}
              shadows
              frameloop="always"
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.05,
              }}
              performance={{ min: 0.5, max: 1, debounce: 180 }}
            >
              <Suspense fallback={null}>
                <AnatomyScene
                  activeFamily={activeFamily}
                  accentHex={accentHex}
                  calibrating={calibrating}
                  onCalibratePoint={(point) => {
                    setLastCalibratedPoint(point);
                    // eslint-disable-next-line no-console
                    console.log(
                      `${activeFamily} lookAt →`,
                      `[${point[0]}, ${point[1]}, ${point[2]}]`
                    );
                  }}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="dl-calibrate">
            <button
              type="button"
              onClick={() => setCalibrating((prev) => !prev)}
              style={{
                padding: "8px 14px",
                borderRadius: 999,
                border: `1px solid ${calibrating ? accentHex : "rgba(255,255,255,0.25)"}`,
                background: calibrating ? `${accentHex}22` : "rgba(0,0,0,0.4)",
                color: calibrating ? accentHex : "rgba(255,255,255,0.7)",
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {calibrating ? "Click the body to read coordinates" : "Calibrate targets"}
            </button>

            {lastCalibratedPoint && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 8,
                  padding: "6px 10px",
                  borderRadius: 6,
                  background: "rgba(0,0,0,0.6)",
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: accentHex,
                }}
              >
                <span>
                  [{lastCalibratedPoint[0]}, {lastCalibratedPoint[1]}, {lastCalibratedPoint[2]}]
                </span>
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard?.writeText(
                      `[${lastCalibratedPoint[0]}, ${lastCalibratedPoint[1]}, ${lastCalibratedPoint[2]}]`
                    )
                  }
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "inherit",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontSize: 9,
                  }}
                >
                  copy
                </button>
              </div>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFamily}
              className="dl-anatomy-caption"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0 : 0.35 }}
            >
              <span className="dl-caption-line" style={{ background: accent }} />
              <div>
                <span>{activeFamily === "Neutral" ? "DRIPLABS ANATOMY" : activeFamily}</span>
                <p>{familyConfig?.description || "Explore the DRIPLABS wellness architecture."}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="dl-protocol-zone left">
            <AnimatePresence mode="popLayout">
              {leftProtocols.map((protocol, index) => {
                const anchor = leftAnchors[index % leftAnchors.length];
                const protocolId = protocol.id ?? protocol.slug ?? `${protocol.name}-${index}`;

                return (
                  <div
                    key={protocolId}
                    className="dl-protocol-position"
                    style={{ top: `${anchor.y}%` }}
                    onMouseEnter={() => setHoveredProtocol(protocolId)}
                    onMouseLeave={() => setHoveredProtocol(null)}
                  >
                    <Connector side="left" y={50} color={accent} active={hoveredProtocol === protocolId} />
                    <ProtocolCard
                      protocol={protocol}
                      side="left"
                      index={index}
                      active={hoveredProtocol === protocolId}
                      color={accent}
                      onClick={() => setHoveredProtocol(protocolId)}
                    />
                  </div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="dl-protocol-zone right">
            <AnimatePresence mode="popLayout">
              {rightProtocols.map((protocol, index) => {
                const anchor = rightAnchors[index % rightAnchors.length];
                const protocolId = protocol.id ?? protocol.slug ?? `${protocol.name}-${index}`;

                return (
                  <div
                    key={protocolId}
                    className="dl-protocol-position"
                    style={{ top: `${anchor.y}%` }}
                    onMouseEnter={() => setHoveredProtocol(protocolId)}
                    onMouseLeave={() => setHoveredProtocol(null)}
                  >
                    <Connector side="right" y={50} color={accent} active={hoveredProtocol === protocolId} />
                    <ProtocolCard
                      protocol={protocol}
                      side="right"
                      index={index}
                      active={hoveredProtocol === protocolId}
                      color={accent}
                      onClick={() => setHoveredProtocol(protocolId)}
                    />
                  </div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="dl-stage-status">
            <span className="dl-status-dot" style={{ background: accent, boxShadow: `0 0 10px ${accent}` }} />
            <span>
              {selectedFamily !== "Neutral"
                ? selectedFamily === "All"
                  ? "ALL PROTOCOLS"
                  : "PATH LOCKED"
                : "EXPLORATION MODE"}
            </span>
            <span className="dl-status-separator">/</span>
            <span>{visibleProtocols.length} PROTOCOLS SHOWN</span>
          </div>
        </div>
      </div>

      <div className="dl-mobile-protocols">
        <div className="dl-mobile-protocol-header">
          <span>
            {activeFamily === "Neutral"
              ? "FEATURED PROTOCOLS"
              : activeFamily === "All"
                ? "ALL PROTOCOLS"
                : activeFamily.toUpperCase()}
          </span>
          <span>{visibleProtocols.length.toString().padStart(2, "0")}</span>
        </div>

        <div className="dl-mobile-protocol-grid">
          {visibleProtocols.map((protocol, index) => (
            <ProtocolCard
              key={protocol.id ?? protocol.slug ?? index}
              protocol={protocol}
              side={index % 2 === 0 ? "left" : "right"}
              index={index}
              active={false}
              color={accent}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .dl-observatory {
          position: relative;
          isolation: isolate;
          min-height: 100svh;
          height: 100svh;
          max-height: 980px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 46%, rgba(23, 48, 73, 0.72), transparent 32%),
            radial-gradient(circle at 72% 50%, rgba(24, 91, 103, 0.12), transparent 28%),
            #050b13;
          color: #eef3f6;
        }

        .dl-observatory-grid {
          position: absolute;
          inset: 0;
          z-index: -3;
          opacity: 0.16;
          background-image:
            linear-gradient(rgba(184, 205, 219, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184, 205, 219, 0.06) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at center, black, transparent 82%);
        }

        .dl-observatory-noise {
          position: absolute;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          opacity: 0.018;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
        }

        .dl-observatory-interface {
          position: absolute;
          inset: 0;
        }

        .dl-family-nav {
          position: absolute;
          z-index: 40;
          left: clamp(24px, 4vw, 70px);
          top: clamp(115px, 15vh, 155px);
          width: clamp(180px, 14vw, 235px);
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
          grid-template-columns: 25px 1fr 18px;
          align-items: center;
          padding: 12px 0;
          border: 0;
          border-bottom: 1px solid rgba(218, 229, 237, 0.075);
          background: transparent;
          color: rgba(225, 233, 238, 0.45);
          text-align: left;
          cursor: pointer;
          transition: color 0.35s ease, padding 0.35s ease;
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
          background: var(--family-accent, var(--color-accent-primary));
          box-shadow: 0 0 10px var(--family-accent, var(--color-accent-primary));
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
          color: var(--color-accent-primary);
          letter-spacing: 0.11em;
        }

        .dl-family-item.all .dl-family-code {
          color: var(--color-accent-primary);
          opacity: 0.75;
        }

        .dl-family-indicator {
          text-align: right;
          font-size: 8px;
          color: var(--color-accent-primary);
        }

        .dl-anatomy-stage {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .dl-stage-topline {
          position: absolute;
          z-index: 20;
          top: clamp(62px, 9vh, 92px);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          width: 270px;
          font-size: 7px;
          letter-spacing: 0.22em;
          color: rgba(220, 230, 237, 0.35);
        }

        .dl-stage-line {
          flex: 1;
          height: 1px;
          background: rgba(220, 230, 237, 0.12);
        }

        .dl-canvas {
          position: absolute;
          left: 50%;
          top: 51%;
          width: min(50vw, 760px);
          height: min(76vh, 720px);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .dl-canvas canvas {
          width: 100% !important;
          height: 100% !important;
        }

        .dl-anatomy-hud {
          position: absolute;
          z-index: 10;
          left: 50%;
          top: 51%;
          width: min(38vw, 550px);
          height: min(66vh, 650px);
          transform: translate(-50%, -50%);
          pointer-events: none;
          border: 1px solid rgba(197, 218, 229, 0.06);
          border-radius: 50%;
          opacity: 0.8;
        }

        .dl-anatomy-hud::before,
        .dl-anatomy-hud::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(197, 218, 229, 0.055);
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
          color: rgba(220, 230, 237, 0.27);
        }

        .hud-label.top {
          left: 50%;
          top: -22px;
          transform: translateX(-50%);
        }

        .hud-label.left {
          left: -52px;
          top: 50%;
          transform: translateY(-50%);
        }

        .hud-label.right {
          right: -52px;
          top: 50%;
          text-align: right;
          transform: translateY(-50%);
        }

        .hud-label.bottom {
          left: 50%;
          bottom: -22px;
          transform: translateX(-50%);
        }

        .dl-anatomy-caption {
          position: absolute;
          z-index: 60;
          left: clamp(28px, 3.5vw, 58px);
          top: clamp(52px, 7vh, 78px);
          transform: none;
          display: flex;
          align-items: flex-start;
          width: min(520px, 38vw);
          gap: 16px;
        }

        .dl-caption-line {
          width: 1px;
          min-width: 1px;
          height: 62px;
        }

        .dl-anatomy-caption span {
          display: block;
          margin-bottom: 10px;
          font-size: clamp(22px, 2.25vw, 36px);
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: -0.045em;
          text-transform: uppercase;
          color: rgba(241, 245, 247, 0.96);
        }

        .dl-anatomy-caption p {
          margin: 0;
          max-width: 430px;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 400;
          letter-spacing: 0.005em;
          color: rgba(220, 230, 237, 0.58);
        }

        .dl-protocol-zone {
          position: absolute;
          z-index: 50;
          top: 0;
          bottom: 0;
          width: min(28vw, 390px);
          pointer-events: none;
        }

        .dl-protocol-zone.left {
          left: clamp(260px, 27vw, 440px);
        }

        .dl-protocol-zone.right {
          right: clamp(80px, 8vw, 145px);
        }

        .dl-protocol-position {
          position: absolute;
          width: 100%;
          transform: translateY(-50%);
          pointer-events: auto;
        }

        .dl-connector {
          position: absolute;
          top: 50%;
          display: flex;
          align-items: center;
          width: clamp(45px, 5vw, 90px);
          transform: translateY(-50%);
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

        .dl-connector.left .dl-connector-dot {
          left: 0;
        }

        .dl-connector.right .dl-connector-dot {
          right: 0;
        }

        .dl-protocol-card {
          position: relative;
          width: 100%;
          height: 88px;
          display: flex;
          align-items: stretch;
          overflow: hidden;
          border: 1px solid rgba(218, 229, 237, 0.12);
          background: linear-gradient(110deg, rgba(14, 27, 40, 0.9), rgba(6, 14, 23, 0.86));
          box-shadow: 0 14px 42px rgba(0, 0, 0, 0.24);
          color: #f1f4f5;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .dl-protocol-card:hover {
          border-color: color-mix(in srgb, var(--protocol-accent) 50%, rgba(218, 229, 237, 0.12));
          box-shadow:
            0 20px 65px rgba(0, 0, 0, 0.4),
            0 0 35px color-mix(in srgb, var(--protocol-accent) 12%, transparent);
        }

        .dl-protocol-card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--glow-x, 20%) 50%,
            color-mix(in srgb, var(--protocol-accent) 15%, transparent),
            transparent 58%
          );
          pointer-events: none;
        }

        .dl-protocol-image {
          width: 82px;
          min-width: 82px;
          overflow: hidden;
          border-right: 1px solid rgba(218, 229, 237, 0.08);
        }

        .dl-protocol-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.68;
          filter: saturate(0.7) contrast(1.08);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
        }

        .dl-protocol-card:hover .dl-protocol-image img {
          transform: scale(1.045);
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
          color: var(--protocol-accent);
        }

        .dl-protocol-name {
          display: block;
          font-family: Georgia, "Times New Roman", serif;
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
          color: rgba(220, 230, 237, 0.36);
        }

        .dl-protocol-card:hover .dl-protocol-category {
          color: color-mix(in srgb, var(--protocol-accent) 65%, #dce6ed 35%);
        }

        .dl-protocol-arrow {
          position: absolute;
          right: 11px;
          bottom: 9px;
          font-size: 12px;
          color: var(--protocol-accent);
          opacity: 0.55;
        }

        .dl-calibrate {
          position: absolute;
          z-index: 70;
          right: clamp(16px, 3vw, 40px);
          bottom: clamp(56px, 8vh, 80px);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .dl-stage-status {
          position: absolute;
          z-index: 30;
          left: 50%;
          bottom: 28px;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          font-size: 6px;
          letter-spacing: 0.18em;
          color: rgba(220, 230, 237, 0.3);
        }

        .dl-status-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
        }

        .dl-status-separator {
          opacity: 0.4;
        }

        .dl-mobile-protocols {
          display: none;
        }

        @media (max-width: 1050px) {
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
            grid-template-columns: repeat(2, 1fr);
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
            left: 20px;
            top: 18px;
            width: calc(100% - 40px);
          }

          .dl-anatomy-caption span {
            font-size: 22px;
          }

          .dl-anatomy-caption p {
            font-size: 9px;
            max-width: 300px;
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
            border-bottom: 1px solid rgba(218, 229, 237, 0.1);
            font-size: 7px;
            letter-spacing: 0.18em;
            color: rgba(220, 230, 237, 0.45);
          }

          .dl-mobile-protocol-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            margin-top: 14px;
          }

          .dl-mobile-protocol-grid .dl-protocol-card {
            height: 76px;
          }

          .dl-mobile-protocol-grid .dl-protocol-image {
            width: 55px;
            min-width: 55px;
          }

          .dl-mobile-protocol-grid .dl-protocol-name {
            font-size: 11px;
          }

          .dl-mobile-protocol-grid .dl-protocol-category {
            font-size: 5px;
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

useGLTF.preload("/models/hra/skin.glb");
useGLTF.preload("/models/hra/heart.glb");
useGLTF.preload("/models/hra/lungs.glb");
useGLTF.preload("/models/hra/liver.glb");
useGLTF.preload("/models/hra/vessels.glb");