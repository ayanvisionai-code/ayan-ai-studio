"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { generateLandPoints, generateOrbitalArc } from "./globe-data";

// ─── Shaders ──────────────────────────────────────────────

// Atmosphere: subtle cyan-blue rim glow viewed from inside a BackSide sphere.
// The key fix: clamp the Fresnel term properly so edge normals never produce
// values > 1, and use a steeper power curve with low final opacity.
const atmosphereVertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  varying vec3 vNormal;
  void main() {
    // View direction in eye space is (0,0,1) for perspective near center.
    // For BackSide, normals face inward, so dot with view = negative at edges.
    float rim = dot(vNormal, vec3(0.0, 0.0, 1.0));
    // Invert and clamp: edges → 1.0, center → 0.0
    float intensity = clamp(1.0 - rim, 0.0, 1.0);
    // Steep falloff so only the very edge glows
    intensity = pow(intensity, 4.0) * 0.45;

    vec3 cyan = vec3(0.094, 0.714, 0.722);
    vec3 blue = vec3(0.22, 0.52, 0.96);
    vec3 color = mix(cyan, blue, 0.3);
    gl_FragColor = vec4(color, intensity);
  }
`;

// Continent dots: small round points with per-point opacity variation.
// Fix: the point-size formula now produces ~2–3 px dots, not 300 px.
const dotVertexShader = `
  attribute float aOpacity;
  varying float vOpacity;
  void main() {
    vOpacity = aOpacity;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    // Perspective-scaled point size: ~2.2 px at camera distance 3.15
    gl_PointSize = max(1.5, 6.8 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const dotFragmentShader = `
  varying float vOpacity;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.15, dist) * vOpacity;
    vec3 cyan = vec3(0.094, 0.714, 0.722);
    gl_FragColor = vec4(cyan, alpha);
  }
`;

// ─── Component ────────────────────────────────────────────

interface InteractiveGlobeProps {
  className?: string;
}

export default function InteractiveGlobe({ className }: InteractiveGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number>(0);
  const targetRotRef = useRef({ x: 0, y: 0 });
  const currentRotRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(true);
  const reducedMotionRef = useRef(false);
  const lastTimeRef = useRef(0);

  const initScene = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced-motion preference
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.15);
    cameraRef.current = camera;

    // Globe group
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    const GLOBE_RADIUS = 1;

    // ─── A. Dark sphere base ───
    // Opaque dark sphere so dots render correctly on top.
    const sphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x080810,
      shininess: 3,
      transparent: false,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.renderOrder = 0;
    globeGroup.add(sphere);

    // ─── B. Dotted continents ───
    // Place dots slightly above the sphere surface to avoid z-fighting.
    const landPositions = generateLandPoints(4289, GLOBE_RADIUS * 1.008);
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(landPositions, 3));

    // Per-point opacity variation for visual richness
    const opacities = new Float32Array(landPositions.length / 3);
    let seed = 7;
    const rng = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let i = 0; i < opacities.length; i++) {
      opacities[i] = 0.5 + rng() * 0.5;
    }
    dotGeo.setAttribute("aOpacity", new THREE.BufferAttribute(opacities, 1));

    const dotMat = new THREE.ShaderMaterial({
      vertexShader: dotVertexShader,
      fragmentShader: dotFragmentShader,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    dots.renderOrder = 1; // Draw after sphere
    globeGroup.add(dots);

    // ─── C. Orbital arcs ───
    const arcConfigs = [
      { tilt: 30, rotY: 0, r: 1.22, color: 0x18d9d0 },
      { tilt: 55, rotY: 45, r: 1.30, color: 0x3984f6 },
      { tilt: 70, rotY: -30, r: 1.15, color: 0x8b5cf6 },
    ];
    arcConfigs.forEach(({ tilt, rotY, r, color }) => {
      const arcPositions = generateOrbitalArc(tilt, rotY, GLOBE_RADIUS * r, 256);
      const arcGeo = new THREE.BufferGeometry();
      arcGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(arcPositions, 3)
      );
      const arcMat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const arcLine = new THREE.LineLoop(arcGeo, arcMat);
      arcLine.renderOrder = 2;
      globeGroup.add(arcLine);
    });

    // ─── D. Atmosphere glow ───
    // Smaller shell (1.06×) with properly clamped Fresnel for a subtle rim.
    const atmosGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.06, 64, 64);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    atmosphere.renderOrder = 3;
    globeGroup.add(atmosphere);

    // ─── E. Small orbital particles ───
    const particleCount = 10;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const phi = rng() * Math.PI * 2;
      const theta = rng() * Math.PI;
      const pr = GLOBE_RADIUS * (1.15 + rng() * 0.15);
      particlePositions[i * 3] = pr * Math.sin(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = pr * Math.cos(theta);
      particlePositions[i * 3 + 2] = pr * Math.sin(theta) * Math.sin(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x18d9d0,
      size: 0.02,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    particles.renderOrder = 4;
    globeGroup.add(particles);

    // ─── F. Lighting ───
    // Restrained lighting to keep the globe dark and cinematic
    const ambientLight = new THREE.AmbientLight(0x303050, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x4466aa, 0.5);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x18d9d0, 0.15);
    rimLight.position.set(-3, -2, -3);
    scene.add(rimLight);

    // ─── Initial tilt ───
    globeGroup.rotation.x = 0.25;
    globeGroup.rotation.y = -0.5;
  }, []);

  // Frame-rate-independent animation loop
  const animate = useCallback((timestamp: number) => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) {
      frameIdRef.current = requestAnimationFrame(animate);
      return;
    }

    // Delta time in seconds, capped to avoid jumps after tab-switch
    const delta = lastTimeRef.current
      ? Math.min((timestamp - lastTimeRef.current) / 1000, 0.1)
      : 0.016;
    lastTimeRef.current = timestamp;

    const globe = globeGroupRef.current;
    if (globe && !reducedMotionRef.current) {
      // Idle rotation: ~0.07 rad/s → one full turn ≈ 90 seconds
      globe.rotation.y += 0.07 * delta;

      // Pointer-responsive smooth interpolation (frame-rate independent)
      const lerpFactor = 1 - Math.pow(0.03, delta);
      currentRotRef.current.x +=
        (targetRotRef.current.x - currentRotRef.current.x) * lerpFactor;
      currentRotRef.current.y +=
        (targetRotRef.current.y - currentRotRef.current.y) * lerpFactor;

      // Apply pointer influence
      globe.rotation.x = 0.25 + currentRotRef.current.x;
      globe.rotation.y += currentRotRef.current.y * delta * 0.5;
    }

    if (isVisibleRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }

    frameIdRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    initScene();

    // Start animation
    frameIdRef.current = requestAnimationFrame(animate);

    // Pointer handler
    const container = containerRef.current;
    const handlePointerMove = (e: PointerEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetRotRef.current = { x: y * 0.12, y: x * 0.12 };
    };

    const handlePointerLeave = () => {
      targetRotRef.current = { x: 0, y: 0 };
    };

    container?.addEventListener("pointermove", handlePointerMove);
    container?.addEventListener("pointerleave", handlePointerLeave);

    // Resize handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      rendererRef.current.setSize(w, h);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (container) resizeObserver.observe(container);

    // Intersection Observer for visibility-aware rendering
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    if (container) observer.observe(container);

    return () => {
      cancelAnimationFrame(frameIdRef.current);
      container?.removeEventListener("pointermove", handlePointerMove);
      container?.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      if (container) observer.unobserve(container);

      // Dispose Three.js resources
      rendererRef.current?.dispose();
      if (container && rendererRef.current?.domElement) {
        container.removeChild(rendererRef.current.domElement);
      }
    };
  }, [initScene, animate]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%", position: "relative" }}
    />
  );
}
