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

  // Listen for native custom-element load and error events, and remove watermark
  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;

    const cleanWatermark = () => {
      try {
        const shadow = el.shadowRoot;
        if (!shadow) return;

        // Hide and remove logo elements in shadow DOM
        const logo =
          shadow.querySelector("#logo") ||
          shadow.querySelector('a[href*="spline.design"]') ||
          shadow.querySelector("#spline-watermark");
        if (logo) {
          logo.remove();
        }

        // Inject persistent anti-watermark style in shadow DOM
        if (!shadow.querySelector("#hide-spline-logo-style")) {
          const style = document.createElement("style");
          style.id = "hide-spline-logo-style";
          style.textContent = `
            #logo,
            a[href*="spline.design"],
            #spline-watermark,
            .spline-watermark,
            [class*="watermark"],
            [class*="logo"] {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
              pointer-events: none !important;
              clip-path: polygon(0 0, 0 0, 0 0, 0 0) !important;
              transform: scale(0) !important;
              width: 0 !important;
              height: 0 !important;
              position: absolute !important;
              left: -9999px !important;
            }
          `;
          shadow.appendChild(style);
        }
      } catch {
        // Safe fail
      }
    };

    cleanWatermark();

    const handleLoad = () => {
      setIsLoaded(true);
      cleanWatermark();
    };
    const handleError = () => setHasError(true);

    el.addEventListener("load-complete", handleLoad);
    el.addEventListener("load", handleLoad);
    el.addEventListener("error", handleError);

    // Mutation observer on shadowRoot if available
    let observer: MutationObserver | null = null;
    if (el.shadowRoot) {
      observer = new MutationObserver(() => cleanWatermark());
      observer.observe(el.shadowRoot, { childList: true, subtree: true });
    }

    // Interval to catch late-rendered watermarks
    const interval = setInterval(() => {
      cleanWatermark();
      if (!observer && el.shadowRoot) {
        observer = new MutationObserver(() => cleanWatermark());
        observer.observe(el.shadowRoot, { childList: true, subtree: true });
      }
    }, 150);

    // Stop aggressive polling after 8 seconds
    const stopTimeout = setTimeout(() => {
      clearInterval(interval);
    }, 8000);

    return () => {
      el.removeEventListener("load-complete", handleLoad);
      el.removeEventListener("load", handleLoad);
      el.removeEventListener("error", handleError);
      observer?.disconnect();
      clearInterval(interval);
      clearTimeout(stopTimeout);
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
