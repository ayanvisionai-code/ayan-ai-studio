"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./SplineSceneViewer.module.css";

interface SplineSceneViewerProps {
  url?: string;
  className?: string;
}

export default function SplineSceneViewer({
  url = "/scene.splinecode",
  className = "",
}: SplineSceneViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const appRef = useRef<any>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isCancelled = false;

    const startLoading = async () => {
      if (isInitializedRef.current || isCancelled) return;
      isInitializedRef.current = true;

      const canvas = canvasRef.current;
      if (!canvas) return;

      try {
        // Quick WebGL support check
        const testCanvas = document.createElement("canvas");
        const gl =
          testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");
        if (!gl) {
          throw new Error("WebGL is not supported or context lost");
        }

        // Dynamically import @splinetool/runtime (client-only)
        const { Application } = await import("@splinetool/runtime");
        if (isCancelled || !canvasRef.current) return;

        const app = new Application(canvasRef.current);
        appRef.current = app;

        // Try local model first; fallback to remote URL if needed
        const primaryUrl = url.startsWith("http") ? url : "/scene.splinecode";
        const fallbackUrl =
          "https://prod.spline.design/asbzzgfkFPt8bELG/scene.splinecode";

        try {
          await app.load(primaryUrl);
        } catch (loadErr) {
          console.warn(
            "Primary spline load failed, trying fallback URL:",
            loadErr
          );
          if (primaryUrl !== fallbackUrl && !isCancelled) {
            await app.load(fallbackUrl);
          } else {
            throw loadErr;
          }
        }

        if (!isCancelled) {
          try {
            app.play();
          } catch {
            // ignore if play is not available
          }
          setIsLoaded(true);
        }
      } catch (err) {
        console.warn(
          "Spline runtime failed to initialize, using high-fidelity fallback:",
          err
        );
        if (!isCancelled) {
          setHasError(true);
        }
      }
    };

    // 1. Intersection Observer: start loading when scrolled near (within 400px)
    // and toggle play/stop to optimize background rendering
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isInitializedRef.current) {
            startLoading();
          } else if (appRef.current && typeof appRef.current.play === "function") {
            try {
              appRef.current.play();
            } catch {
              // ignore
            }
          }
        } else {
          // Pause rendering loop when scrolled away to conserve GPU resources
          if (appRef.current && typeof appRef.current.stop === "function") {
            try {
              appRef.current.stop();
            } catch {
              // ignore
            }
          }
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(container);

    // 2. Safety fallback timer: guarantee load starts within 2.5s even if IntersectionObserver delays
    const timer = setTimeout(() => {
      if (!isInitializedRef.current && !isCancelled) {
        startLoading();
      }
    }, 2500);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
      observer.disconnect();
      if (appRef.current) {
        try {
          appRef.current.dispose();
        } catch {
          // ignore
        }
        appRef.current = null;
      }
      isInitializedRef.current = false;
    };
  }, [url]);

  return (
    <div ref={containerRef} className={`${styles.splineWrapper} ${className}`}>
      {/* Background ambient radial glow matching scene's purple radiance */}
      <div className={styles.ambientBackdrop} aria-hidden="true" />

      {/* High-fidelity static illustration fallback (shown while loading or on WebGL failure) */}
      <div
        className={`${styles.fallbackContainer} ${
          isLoaded && !hasError ? styles.fallbackHidden : styles.fallbackVisible
        }`}
        aria-hidden={isLoaded}
      >
        <Image
          src="/services/ai-automation-fallback.png"
          alt="AI Automation 3D Visual"
          width={520}
          height={500}
          priority
          className={styles.fallbackImg}
        />
      </div>

      {/* Native WebGL Canvas for 3D Interactive Model */}
      {!hasError && (
        <canvas
          ref={canvasRef}
          className={`${styles.splineCanvas} ${
            isLoaded ? styles.canvasVisible : styles.canvasHidden
          }`}
        />
      )}
    </div>
  );
}
