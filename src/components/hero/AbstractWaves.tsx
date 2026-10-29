"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./AbstractWaves.module.css";

/**
 * AbstractWaves — High-end iridescent flowing light ribbon system for
 * the bottom-left of the hero, faithfully recreating the GrowRev visual.
 *
 * Multilayered composition:
 * 1. Base Layer: Authentic high-resolution 3D iridescent ribbon with translucent
 *    glass/silk folds and refractive body.
 * 2. Ambient Warmth Glow: Deep amber-magenta-cyan radial radiance at bottom-left.
 * 3. Specular Filaments Canvas: Ultra-fine, flowing light trails and caustic
 *    filaments undulating gently (30-60s cycles) to bring the ribbon alive with
 *    glistening optical reflections.
 */
export default function AbstractWaves({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const reducedMotion = useRef(false);
  const startTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Controlled specular filaments that accentuate the ribbon contours
    interface SpecularStrand {
      color: string;
      baseYRel: number;
      amplitude: number;
      frequency: number;
      speed: number;
      phase: number;
      lineWidth: number;
      opacity: number;
      blur: number;
    }

    const strands: SpecularStrand[] = [
      // Deep violet/magenta ribbon support
      { color: "130, 87, 255", baseYRel: 0.62, amplitude: 38, frequency: 0.0035, speed: 0.04, phase: 0.0, lineWidth: 8, opacity: 0.18, blur: 12 },
      { color: "239, 72, 216", baseYRel: 0.68, amplitude: 32, frequency: 0.0042, speed: 0.05, phase: 1.4, lineWidth: 6, opacity: 0.22, blur: 8 },

      // Luminous cyan and turquoise edge piping
      { color: "0, 217, 255", baseYRel: 0.74, amplitude: 26, frequency: 0.0055, speed: 0.06, phase: 2.8, lineWidth: 3.5, opacity: 0.45, blur: 4 },
      { color: "0, 240, 200", baseYRel: 0.78, amplitude: 22, frequency: 0.0062, speed: 0.05, phase: 0.9, lineWidth: 2.5, opacity: 0.50, blur: 3 },
      { color: "36, 107, 255", baseYRel: 0.72, amplitude: 30, frequency: 0.0048, speed: 0.04, phase: 3.7, lineWidth: 4.0, opacity: 0.35, blur: 6 },

      // Warm highlight accents (amber/coral/gold) concentrated near crests
      { color: "255, 179, 92", baseYRel: 0.60, amplitude: 20, frequency: 0.0070, speed: 0.07, phase: 1.8, lineWidth: 2.0, opacity: 0.55, blur: 3 },
      { color: "255, 90, 104", baseYRel: 0.65, amplitude: 18, frequency: 0.0065, speed: 0.06, phase: 4.2, lineWidth: 1.8, opacity: 0.45, blur: 2.5 },

      // Fine specular filaments (razor-sharp fiber optic glints)
      { color: "255, 255, 255", baseYRel: 0.74, amplitude: 25, frequency: 0.0055, speed: 0.06, phase: 2.85, lineWidth: 1.0, opacity: 0.70, blur: 1 },
      { color: "0, 217, 255", baseYRel: 0.77, amplitude: 21, frequency: 0.0068, speed: 0.08, phase: 5.1, lineWidth: 1.2, opacity: 0.60, blur: 1.5 },
      { color: "255, 200, 140", baseYRel: 0.59, amplitude: 19, frequency: 0.0072, speed: 0.07, phase: 1.85, lineWidth: 1.0, opacity: 0.75, blur: 1 },
    ];

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = reducedMotion.current ? 0 : (timestamp - startTimeRef.current) / 1000;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "screen";

      for (const s of strands) {
        ctx.beginPath();
        const baseY = height * s.baseYRel;
        const maxDist = width * 0.72;

        ctx.moveTo(0, baseY);

        for (let x = 0; x <= maxDist; x += 3) {
          const normX = x / maxDist;
          // Fluid organic curve with secondary harmonic
          const wave1 = Math.sin(x * s.frequency + elapsed * s.speed + s.phase) * s.amplitude;
          const wave2 = Math.cos(x * s.frequency * 0.45 + elapsed * s.speed * 0.7 + s.phase * 1.3) * (s.amplitude * 0.35);

          // Fade out smoothly towards the center
          const fade = 1 - Math.pow(normX, 1.4);
          const y = baseY + (wave1 + wave2) * fade;
          ctx.lineTo(x, y);
        }

        // Gradient along stroke: vibrant near left edge, fading to 0 towards center
        const grad = ctx.createLinearGradient(0, 0, maxDist, 0);
        grad.addColorStop(0, `rgba(${s.color}, ${s.opacity})`);
        grad.addColorStop(0.35, `rgba(${s.color}, ${s.opacity * 0.85})`);
        grad.addColorStop(0.70, `rgba(${s.color}, ${s.opacity * 0.25})`);
        grad.addColorStop(1, `rgba(${s.color}, 0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = s.lineWidth;
        ctx.lineCap = "round";
        ctx.filter = `blur(${s.blur}px)`;
        ctx.stroke();
      }

      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`${styles.wavesContainer} ${className || ""}`} aria-hidden="true">
      {/* 1. Ambient Warmth Glow at Bottom-Left */}
      <div className={styles.ambientGlow} />

      {/* 2. High-Resolution 3D Iridescent Liquid-Silk Ribbon */}
      <div className={styles.ribbonImageWrapper}>
        <Image
          src="/hero-bg-growrev-clean.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 75vw"
          className={styles.ribbonImage}
        />
      </div>

      {/* 3. Specular Filaments & Caustic Glow Overlay */}
      <canvas ref={canvasRef} className={styles.specularCanvas} />
    </div>
  );
}
