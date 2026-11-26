"use client";

import React from "react";
import Image from "next/image";
import styles from "./AnalyticsResultsSection.module.css";

interface AnalyticsCardData {
  accent: string;
  accentRgba: string;
  stat: string;
  title: string;
  description: string;
  iconSrc: string;
  waveSrc: string;
  alt: string;
}

const analyticsData: AnalyticsCardData[] = [
  {
    accent: "#FB9C55",
    accentRgba: "rgba(251, 156, 85, 0.22)",
    stat: "-70%",
    title: "Client Onboarding Cycle",
    description:
      "Automated workflows eliminate 15+ weekly hours of manual contract chasing, intake typing, and proposal assembly.",
    iconSrc: "/icon-3d-vault.png",
    waveSrc: "/analytics-wave-1.jpg",
    alt: "3D illuminated fluid neon fibers visualization",
  },
  {
    accent: "#FD6BC4",
    accentRgba: "rgba(253, 107, 196, 0.22)",
    stat: "100%",
    title: "Connected System Uptime",
    description:
      "Single event-driven bus routing clean operational state across CRM, databases, and custom applications without brittle zaps.",
    iconSrc: "/icon-3d-chart.png",
    waveSrc: "/analytics-wave-2.jpg",
    alt: "3D cyan emerald feathered fiber optics visualization",
  },
  {
    accent: "#00F2FE",
    accentRgba: "rgba(0, 242, 254, 0.22)",
    stat: "3 mins",
    title: "Autonomous Response Time",
    description:
      "Multi-stage AI agent pipeline parsing inquiry intent, enriching firmographics, and scheduling meetings instantly 24/7.",
    iconSrc: "/icon-3d-badge.png",
    waveSrc: "/analytics-wave-3.jpg",
    alt: "3D illuminated glass prism columns visualization",
  },
];

export default function AnalyticsResultsSection() {
  return (
    <section className={styles.section} id="results">
      {/* Central Dotted Pattern Background */}
      <div className={styles.dottedPattern} aria-hidden="true" />

      {/* Coloring Lights in Background */}
      <div className={styles.ambientGlowOrange} aria-hidden="true" />
      <div className={styles.ambientGlowMagenta} aria-hidden="true" />
      <div className={styles.ambientGlowCyan} aria-hidden="true" />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.subtitleWrapper}>
            <div className={`${styles.laserLine} ${styles.laserLineLeft}`} />
            <span className={styles.subtitleText}>Analytics</span>
            <div className={`${styles.laserLine} ${styles.laserLineRight}`} />
          </div>

          <h2 className={styles.title}>
            Our <span className={styles.titleGradient}>Results</span>
          </h2>

          <p className={styles.description}>
            See the impact of our work through case studies and client transformations, showcasing how our engineering architecture and dedication have driven remarkable growth for businesses across various industries.
          </p>
        </div>

        {/* 3 High-Impact Analytics Cards */}
        <div className={styles.cardsGrid}>
          {analyticsData.map((card, idx) => (
            <div key={idx} className={styles.cardItem}>
              {/* Glowing Neon Shadow Underneath */}
              <div
                className={styles.neonShadow}
                style={{ backgroundColor: card.accent }}
                aria-hidden="true"
              />

              {/* Card Container */}
              <div
                className={styles.cardWrapper}
                style={{
                  "--accent-light": card.accentRgba,
                } as React.CSSProperties}
              >
                {/* Top Neon Tab */}
                <div
                  className={styles.neonTopTab}
                  style={{
                    backgroundColor: card.accent,
                    boxShadow: `0 0 16px ${card.accent}`,
                  }}
                  aria-hidden="true"
                />

                {/* 3D Visual Art (Right side background) */}
                <div className={styles.visualWrapper}>
                  <Image
                    src={card.waveSrc}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 420px"
                    className={styles.visualImage}
                  />
                  <div className={styles.visualGradientOverlay} aria-hidden="true" />
                </div>

                {/* Card Foreground Content */}
                <div className={styles.cardContent}>
                  {/* 3D Glass Box Icon */}
                  <div className={styles.iconBox}>
                    <Image
                      src={card.iconSrc}
                      alt={card.title}
                      width={48}
                      height={48}
                      className={styles.iconImage}
                    />
                  </div>

                  {/* Big Stat */}
                  <div className={styles.statNumber}>{card.stat}</div>

                  {/* Title */}
                  <h3 className={styles.metricTitle}>{card.title}</h3>

                  {/* Description */}
                  <p className={styles.metricDescription}>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
