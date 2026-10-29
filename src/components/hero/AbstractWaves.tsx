"use client";

import { useEffect, useRef } from "react";

/**
 * AbstractWaves — iridescent flowing light ribbons for the bottom-left
 * of the hero, inspired by the GrowRev visual.
 *
 * Rendered via a lightweight 2D canvas with layered sine-based curves,
 * blended with screen compositing to create the iridescent silk effect.
 *
 * Animation speed fix: uses real elapsed time (seconds) with very slow
 * speed multipliers so the ribbons drift gently over 30-60 second cycles.
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
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Wave configuration: each wave is a flowing luminous ribbon
    // speed = radians per second of phase drift (very slow)
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
      // Deep violet base — wide soft glows
      { color: "138, 92, 246", amplitude: 70, frequency: 0.004, speed: 0.12, yOffset: 0.68, lineWidth: 110, opacity: 0.12, phase: 0 },
      { color: "116, 102, 223", amplitude: 55, frequency: 0.005, speed: 0.09, yOffset: 0.74, lineWidth: 85, opacity: 0.10, phase: 1.2 },
      // Cyan / turquoise mid-layer
      { color: "24, 217, 208", amplitude: 45, frequency: 0.006, speed: 0.14, yOffset: 0.78, lineWidth: 65, opacity: 0.14, phase: 2.4 },
      { color: "15, 182, 184", amplitude: 38, frequency: 0.007, speed: 0.11, yOffset: 0.81, lineWidth: 50, opacity: 0.12, phase: 0.8 },
      // Blue accent
      { color: "57, 132, 246", amplitude: 42, frequency: 0.005, speed: 0.10, yOffset: 0.76, lineWidth: 60, opacity: 0.11, phase: 3.6 },
      // Warm highlights — thin bright strands
      { color: "255, 120, 50", amplitude: 22, frequency: 0.008, speed: 0.16, yOffset: 0.84, lineWidth: 16, opacity: 0.06, phase: 1.8 },
      { color: "230, 60, 120", amplitude: 18, frequency: 0.009, speed: 0.13, yOffset: 0.82, lineWidth: 10, opacity: 0.05, phase: 4.2 },
      // Bright cyan highlight strands
      { color: "24, 217, 208", amplitude: 28, frequency: 0.01, speed: 0.18, yOffset: 0.83, lineWidth: 7, opacity: 0.20, phase: 5.0 },
      { color: "57, 200, 246", amplitude: 20, frequency: 0.012, speed: 0.15, yOffset: 0.85, lineWidth: 5, opacity: 0.16, phase: 2.0 },
    ];

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      // Elapsed time in seconds
      const elapsed = reducedMotion.current
        ? 0
        : (timestamp - startTimeRef.current) / 1000;

      ctx.clearRect(0, 0, width, height);

      // Use screen compositing for soft glow
      ctx.globalCompositeOperation = "screen";

      for (const wave of waves) {
        ctx.beginPath();

        const baseY = height * wave.yOffset;

        // Start from left edge
        ctx.moveTo(0, baseY);

        for (let x = 0; x <= width * 0.7; x += 2) {
          const normalizedX = x / width;
          // Main wave: frequency × position + slow time drift
          const y1 =
            Math.sin(x * wave.frequency + elapsed * wave.speed + wave.phase) *
            wave.amplitude;
          // Secondary modulation for organic feel
          const y2 =
            Math.sin(
              x * wave.frequency * 0.5 +
                elapsed * wave.speed * 0.6 +
                wave.phase * 1.5
            ) *
            wave.amplitude *
            0.35;
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
        ctx.filter =
          wave.lineWidth > 40
            ? "blur(18px)"
            : wave.lineWidth > 15
              ? "blur(7px)"
              : "blur(2px)";
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
