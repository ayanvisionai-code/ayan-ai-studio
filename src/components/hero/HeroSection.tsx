"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./HeroSection.module.css";

// Dynamically import 3D components (browser-only)
const InteractiveGlobe = dynamic(() => import("./InteractiveGlobe"), {
  ssr: false,
  loading: () => (
    <div className={styles.globeFallback}>
      <div className={styles.globeFallbackCircle} />
    </div>
  ),
});

const AbstractWaves = dynamic(() => import("./AbstractWaves"), {
  ssr: false,
});

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Test WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) setWebGLSupported(false);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  const handleScrollClick = () => {
    const next = sectionRef.current?.nextElementSibling;
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className={styles.heroWrapper}>
      {/* Abstract light waves — bottom-left */}
      <AbstractWaves className={styles.wavesLayer} />

      {/* Main content row */}
      <div className={styles.heroInner}>
        {/* Left: headline + CTA */}
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            AYAN AI STUDIO · BUSINESS SYSTEMS
          </div>

          <h1 className={styles.heroHeadline}>
            Business Systems.
            <br />
            <span className={styles.heroHeadlineGradient}>Reimagined.</span>
          </h1>

          <p className={styles.heroParagraph}>
            We build high-performing websites, intelligent AI systems and
            connected workflows that help businesses operate smarter.
          </p>

          <div className={styles.heroCtaGroup}>
            <Link href="/start" className={styles.heroCtaPrimary}>
              Start a Conversation
            </Link>
            <Link
              href="#transformations"
              className={styles.heroCtaSecondary}
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Right: 3D globe */}
        <div className={styles.heroRight}>
          {webGLSupported ? (
            <div className={styles.globeContainer}>
              <InteractiveGlobe />
            </div>
          ) : (
            <div className={styles.globeFallback}>
              <div className={styles.globeFallbackCircle} />
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <button
        className={styles.scrollCue}
        onClick={handleScrollClick}
        aria-label="Scroll to next section"
        type="button"
      >
        <span>Scroll to explore</span>
        <span className={styles.scrollArrow}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollChevron} />
        </span>
      </button>
    </section>
  );
}
