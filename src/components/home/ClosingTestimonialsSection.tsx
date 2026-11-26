"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ClosingTestimonialsSection.module.css";

export default function ClosingTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "center 45%"],
  });

  // Transform for left half word "TESTIM" (glides in from left to touch center)
  const xLeft = useTransform(scrollYProgress, [0, 1], ["-18vw", "0vw"]);
  
  // Transform for right half word "ONIALS" (glides in from right to touch center)
  const xRight = useTransform(scrollYProgress, [0, 1], ["18vw", "0vw"]);

  // Flare scale & opacity (pulses as the two sides meet)
  const flareOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.1, 0.8, 0.25]);
  const flareScale = useTransform(scrollYProgress, [0, 0.7, 1], [0.6, 1.3, 0.8]);

  // Testimonial card entrance: smoothly fades in as words connect
  const cardOpacity = useTransform(scrollYProgress, [0.35, 0.9], [0.4, 1]);
  const cardY = useTransform(scrollYProgress, [0.35, 0.9], [30, 0]);

  return (
    <section ref={sectionRef} className={styles.section} id="testimonials">
      {/* Background dotted matrix */}
      <div className={styles.dottedBg} aria-hidden="true" />
      <div className={styles.centerFlare} aria-hidden="true" />

      {/* Section Pill Header */}
      <div className={styles.headerPill}>
        <div className={`${styles.laserLine} ${styles.laserLineLeft}`} />
        <span className={styles.pillText}>Client Endorsements</span>
        <div className={`${styles.laserLine} ${styles.laserLineRight}`} />
      </div>

      {/* ─── Massive Splitting & Closing Title ─── */}
      <div className={styles.splitTitleRow}>
        {/* Left half: TESTIM */}
        <motion.span
          className={`${styles.halfWord} ${styles.halfWordLeft}`}
          style={{ x: xLeft }}
        >
          Testim
        </motion.span>

        {/* Central Optical Energy Flare */}
        <motion.div
          className={styles.centerAperture}
          style={{
            opacity: flareOpacity,
            scale: flareScale,
          }}
          aria-hidden="true"
        />

        {/* Right half: ONIALS */}
        <motion.span
          className={`${styles.halfWord} ${styles.halfWordRight}`}
          style={{ x: xRight }}
        >
          onials
        </motion.span>
      </div>

      {/* ─── Revealed Testimonial Card ─── */}
      <motion.div
        className={styles.testimonialContainer}
        style={{
          opacity: cardOpacity,
          y: cardY,
        }}
      >
        <div className={styles.testimonialCard}>
          <div className={styles.cardNeonLine} aria-hidden="true" />

          {/* 5 Stars */}
          <div className={styles.starRow}>
            {"★★★★★".split("").map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>

          {/* Quote */}
          <blockquote className={styles.quoteText}>
            &ldquo;Ayan AI Studio transformed our chaotic multi-tool stack into an effortless automated machine. What used to take our operations team 15+ manual hours a week now happens autonomously in seconds.&rdquo;
          </blockquote>

          {/* Client Author */}
          <div className={styles.authorDetails}>
            <div className={styles.avatarRing}>
              <div className={styles.avatarInner}>MV</div>
            </div>
            <div className={styles.authorMeta}>
              <p className={styles.authorName}>Marcus Vance</p>
              <p className={styles.authorRole}>Head of Operations &middot; Apex Global Partners</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
