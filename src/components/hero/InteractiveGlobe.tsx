"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { generateLandPoints, generateOrbitalArc } from "./globe-data";

// ─── Shaders ──────────────────────────────────────────────
const atmosphereVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    float intensity = pow(0.72 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
    vec3 cyan = vec3(0.094, 0.714, 0.722);
    vec3 blue = vec3(0.224, 0.518, 0.965);
    vec3 color = mix(cyan, blue, 0.35);
    gl_FragColor = vec4(color, intensity * 0.55);
  }
`;

const dotVertexShader = `
  attribute float aOpacity;
  varying float vOpacity;
  void main() {
    vOpacity = aOpacity;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.8, 2.6 * (280.0 / -mvPosition.z));
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const dotFragmentShader = `
  varying float vOpacity;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.2, dist) * vOpacity;
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
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotRef = useRef({ x: 0, y: 0 });
  const currentRotRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(true);
  const reducedMotionRef = useRef(false);

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
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.2);
    cameraRef.current = camera;

    // Globe group
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    const GLOBE_RADIUS = 1;

    // ─── A. Dark sphere base ───
    const sphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x0a0a12,
      shininess: 5,
      transparent: true,
      opacity: 0.92,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphere);

    // ─── B. Dotted continents ───
    const landPositions = generateLandPoints(2800, GLOBE_RADIUS * 1.005);
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(landPositions, 3));

    // Opacity variation
    const opacities = new Float32Array(landPositions.length / 3);
    let seed = 7;
    const rng = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let i = 0; i < opacities.length; i++) {
      opacities[i] = 0.4 + rng() * 0.6;
    }
    dotGeo.setAttribute("aOpacity", new THREE.BufferAttribute(opacities, 1));

    const dotMat = new THREE.ShaderMaterial({
      vertexShader: dotVertexShader,
      fragmentShader: dotFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    globeGroup.add(dots);

    // ─── C. Orbital arcs ───
    const arcConfigs = [
      { tilt: 30, rotY: 0, r: 1.25, color: 0x18d9d0 },
      { tilt: 55, rotY: 45, r: 1.35, color: 0x3984f6 },
      { tilt: 70, rotY: -30, r: 1.18, color: 0x8b5cf6 },
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
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const arcLine = new THREE.LineLoop(arcGeo, arcMat);
      globeGroup.add(arcLine);
    });

    // ─── D. Atmosphere glow ───
    const atmosGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.14, 64, 64);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    globeGroup.add(atmosphere);

    // ─── E. Small orbital particles ───
    const particleCount = 12;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const phi = rng() * Math.PI * 2;
      const theta = rng() * Math.PI;
      const r = GLOBE_RADIUS * (1.2 + rng() * 0.3);
      particlePositions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = r * Math.cos(theta);
      particlePositions[i * 3 + 2] = r * Math.sin(theta) * Math.sin(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x18d9d0,
      size: 0.025,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);

    // ─── F. Lighting ───
    const ambientLight = new THREE.AmbientLight(0x404060, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x6688cc, 0.6);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x18d9d0, 0.3);
    rimLight.position.set(-3, -2, -3);
    scene.add(rimLight);

    // ─── Initial tilt ───
    globeGroup.rotation.x = 0.25;
    globeGroup.rotation.y = -0.5;
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    const globe = globeGroupRef.current;
    if (globe && !reducedMotionRef.current) {
      // Idle rotation
      globe.rotation.y += 0.0012;

      // Pointer-responsive smooth interpolation
      const damping = 0.03;
      currentRotRef.current.x +=
        (targetRotRef.current.x - currentRotRef.current.x) * damping;
      currentRotRef.current.y +=
        (targetRotRef.current.y - currentRotRef.current.y) * damping;

      // Apply pointer influence additively
      globe.rotation.x = 0.25 + currentRotRef.current.x;
      globe.rotation.y += currentRotRef.current.y * 0.01;
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
      mouseRef.current = { x, y };
      targetRotRef.current = { x: y * 0.15, y: x * 0.15 };
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
      rendererRef.current.setSize(w, h);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

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
