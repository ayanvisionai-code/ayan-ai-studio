"use client";

import { useEffect, useRef } from "react";

/**
 * AbstractWaves — iridescent flowing light ribbons for the bottom-left
 * of the hero, inspired by the GrowRev visual.
 *
 * Rendered via a lightweight 2D canvas with layered sine-based curves,
 * blended with additive compositing to create the iridescent silk effect.
 */
export default function AbstractWaves({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const reducedMotion = useRef(false);

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
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Wave configuration: each wave is a flowing luminous ribbon
    interface WaveConfig {
      color: string;
      amplitude: number;
      frequency: number;
      speed: number;
      yOffset: number;
      lineWidth: number;
      opacity: number;
      phase: number;
    }

    const waves: WaveConfig[] = [
      // Deep violet base
      { color: "138, 92, 246", amplitude: 80, frequency: 0.004, speed: 0.0003, yOffset: 0.7, lineWidth: 120, opacity: 0.15, phase: 0 },
      { color: "116, 102, 223", amplitude: 60, frequency: 0.005, speed: 0.0004, yOffset: 0.75, lineWidth: 90, opacity: 0.12, phase: 1.2 },
      // Cyan / turquoise mid-layer
      { color: "24, 217, 208", amplitude: 50, frequency: 0.006, speed: 0.0005, yOffset: 0.8, lineWidth: 70, opacity: 0.18, phase: 2.4 },
      { color: "15, 182, 184", amplitude: 40, frequency: 0.007, speed: 0.0006, yOffset: 0.82, lineWidth: 55, opacity: 0.15, phase: 0.8 },
      // Blue accent
      { color: "57, 132, 246", amplitude: 45, frequency: 0.005, speed: 0.0004, yOffset: 0.78, lineWidth: 65, opacity: 0.14, phase: 3.6 },
      // Warm highlights — thin bright strands
      { color: "255, 120, 50", amplitude: 25, frequency: 0.008, speed: 0.0007, yOffset: 0.85, lineWidth: 18, opacity: 0.08, phase: 1.8 },
      { color: "230, 60, 120", amplitude: 20, frequency: 0.009, speed: 0.0006, yOffset: 0.83, lineWidth: 12, opacity: 0.06, phase: 4.2 },
      // Bright cyan highlight strands
      { color: "24, 217, 208", amplitude: 30, frequency: 0.01, speed: 0.0008, yOffset: 0.84, lineWidth: 8, opacity: 0.25, phase: 5.0 },
      { color: "57, 200, 246", amplitude: 22, frequency: 0.012, speed: 0.0009, yOffset: 0.86, lineWidth: 6, opacity: 0.2, phase: 2.0 },
    ];

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Use lighter compositing for glow
      ctx.globalCompositeOperation = "screen";

      for (const wave of waves) {
        ctx.beginPath();

        const baseY = height * wave.yOffset;
        const t = reducedMotion.current ? 0 : time * wave.speed;

        // Start from left edge
        ctx.moveTo(0, baseY);

        for (let x = 0; x <= width * 0.7; x += 2) {
          const normalizedX = x / width;
          // Main wave
          const y1 =
            Math.sin(x * wave.frequency + t * 1000 + wave.phase) *
            wave.amplitude;
          // Secondary modulation
          const y2 =
            Math.sin(x * wave.frequency * 0.5 + t * 600 + wave.phase * 1.5) *
            wave.amplitude *
            0.4;
          // Fade from left to right
          const fadeX = 1 - Math.pow(normalizedX / 0.7, 1.5);
          const y = baseY + (y1 + y2) * fadeX;
          ctx.lineTo(x, y);
        }

        // Gradient along the stroke — brighter on left
        const grad = ctx.createLinearGradient(0, 0, width * 0.7, 0);
        grad.addColorStop(0, `rgba(${wave.color}, ${wave.opacity})`);
        grad.addColorStop(0.3, `rgba(${wave.color}, ${wave.opacity * 0.8})`);
        grad.addColorStop(0.7, `rgba(${wave.color}, ${wave.opacity * 0.2})`);
        grad.addColorStop(1, `rgba(${wave.color}, 0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = wave.lineWidth;
        ctx.lineCap = "round";
        ctx.filter = wave.lineWidth > 40 ? "blur(20px)" : wave.lineWidth > 15 ? "blur(8px)" : "blur(3px)";
        ctx.stroke();
      }

      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";

      if (!reducedMotion.current) {
        time += 16;
      }
      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "70%",
        height: "60%",
        pointerEvents: "none",
        opacity: 0.9,
      }}
    />
  );
}
