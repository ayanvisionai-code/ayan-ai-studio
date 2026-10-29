"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./SplineSceneViewer.module.css";

interface SplineSceneViewerProps {
  url?: string;
  className?: string;
}

export default function SplineSceneViewer({
  url = "https://prod.spline.design/asbzzgfkFPt8bELG/scene.splinecode",
  className = "",
}: SplineSceneViewerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const viewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);

    // Dynamically inject Spline Viewer web component script once
    const SCRIPT_ID = "spline-viewer-runtime-script";
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "module";
      script.src =
        "https://cdn.spline.design/@splinetool/viewer@2.0.120/build/spline-viewer.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Fallback timer so placeholder gracefully fades even on slow networks
    const loadTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 4500);

    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);

  // Listen for native custom-element load and error events
  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    el.addEventListener("load-complete", handleLoad);
    el.addEventListener("load", handleLoad);
    el.addEventListener("error", handleError);

    return () => {
      el.removeEventListener("load-complete", handleLoad);
      el.removeEventListener("load", handleLoad);
      el.removeEventListener("error", handleError);
    };
  }, [isMounted]);

  return (
    <div className={`${styles.splineWrapper} ${className}`}>
      {/* Background ambient radial glow matching scene's purple/white radiance */}
      <div className={styles.ambientBackdrop} aria-hidden="true" />

      {/* Loading Skeleton / Placeholder */}
      {!isLoaded && !hasError && (
        <div className={styles.loadingPlaceholder} aria-hidden="true">
          <div className={styles.loadingSpinner} />
          <span className={styles.loadingText}>Initializing 3D Core...</span>
        </div>
      )}

      {/* Spline Custom Element Viewer */}
      {isMounted &&
        !hasError &&
        React.createElement("spline-viewer", {
          ref: viewerRef,
          url: url,
          "loading-anim-type": "none",
          "events-target": "none",
          className: `${styles.splineElement} ${
            isLoaded ? styles.splineVisible : styles.splineHidden
          }`,
        })}

      {/* Fallback if WebGL/Spline fails */}
      {hasError && (
        <div className={styles.errorFallback}>
          <div className={styles.fallbackOrb} />
        </div>
      )}
    </div>
  );
}
