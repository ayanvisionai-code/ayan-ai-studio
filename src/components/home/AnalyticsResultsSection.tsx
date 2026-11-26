"use client";

import React from "react";
import styles from "./AnalyticsResultsSection.module.css";

interface AnalyticsCardData {
  accent: string;
  accentRgba: string;
  stat: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const analyticsData: AnalyticsCardData[] = [
  {
    accent: "#FB9C55",
    accentRgba: "rgba(251, 156, 85, 0.16)",
    stat: "-70%",
    title: "Client Onboarding Cycle",
    description:
      "Automated workflows eliminate 15+ weekly hours of manual contract chasing, intake typing, and proposal assembly.",
    icon: (
      <svg className={styles.iconSvg} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="amberGrad1" x1="12" y1="12" x2="72" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD194" />
            <stop offset="0.5" stopColor="#FB9C55" />
            <stop offset="1" stopColor="#D9530F" />
          </linearGradient>
          <linearGradient id="amberGrad2" x1="42" y1="18" x2="42" y2="66" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2D6" />
            <stop offset="1" stopColor="#FB9C55" />
          </linearGradient>
        </defs>
        {/* Isometric Cube 1 */}
        <path d="M42 14L68 29V55L42 70L16 55V29L42 14Z" fill="#1A1512" stroke="url(#amberGrad1)" strokeWidth="2" />
        <path d="M42 14V42L68 55" stroke="url(#amberGrad1)" strokeWidth="2" />
        <path d="M42 42L16 55" stroke="url(#amberGrad1)" strokeWidth="2" />
        {/* Glowing floating core */}
        <polygon points="42,24 58,33 42,42 26,33" fill="url(#amberGrad2)" opacity="0.85" />
        <circle cx="42" cy="33" r="5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    accent: "#FD6BC4",
    accentRgba: "rgba(253, 107, 196, 0.16)",
    stat: "100%",
    title: "Connected System Uptime",
    description:
      "Single event-driven bus routing clean operational state across CRM, databases, and custom applications without brittle zaps.",
    icon: (
      <svg className={styles.iconSvg} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="magentaGrad1" x1="10" y1="10" x2="74" y2="74" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFA6E3" />
            <stop offset="0.5" stopColor="#FD6BC4" />
            <stop offset="1" stopColor="#9333EA" />
          </linearGradient>
          <linearGradient id="magentaGlow" x1="20" y1="20" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#FD6BC4" />
          </linearGradient>
        </defs>
        {/* Concentric Connected Rings */}
        <circle cx="42" cy="42" r="28" stroke="url(#magentaGrad1)" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="26" y="26" width="32" height="32" rx="8" transform="rotate(45 42 42)" fill="#1B121A" stroke="url(#magentaGrad1)" strokeWidth="2" />
        {/* Core Node with glowing interconnects */}
        <circle cx="42" cy="42" r="8" fill="url(#magentaGlow)" />
        <circle cx="42" cy="18" r="4" fill="#FD6BC4" />
        <circle cx="42" cy="66" r="4" fill="#FD6BC4" />
        <circle cx="18" cy="42" r="4" fill="#FD6BC4" />
        <circle cx="66" cy="42" r="4" fill="#FD6BC4" />
      </svg>
    ),
  },
  {
    accent: "#00F2FE",
    accentRgba: "rgba(0, 242, 254, 0.16)",
    stat: "3 mins",
    title: "Autonomous Response Time",
    description:
      "Multi-stage AI agent pipeline parsing inquiry intent, enriching firmographics, and scheduling meetings instantly 24/7.",
    icon: (
      <svg className={styles.iconSvg} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cyanGrad1" x1="12" y1="12" x2="72" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4FC79" />
            <stop offset="0.4" stopColor="#00F2FE" />
            <stop offset="1" stopColor="#4FACFE" />
          </linearGradient>
        </defs>
        {/* Dynamic Speed Wave / Arrow Array */}
        <path d="M20 42L42 20L64 42L52 42L42 32L32 42H20Z" fill="url(#cyanGrad1)" />
        <path d="M26 56L42 40L58 56L48 56L42 50L36 56H26Z" fill="url(#cyanGrad1)" opacity="0.65" />
        <circle cx="42" cy="68" r="4" fill="#00F2FE" />
      </svg>
    ),
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
            <span className={styles.subtitleText}>Our Results</span>
            <div className={`${styles.laserLine} ${styles.laserLineRight}`} />
          </div>

          <h2 className={styles.title}>
            Engineered for <br />
            <span className={styles.titleGradient}>Measurable Impact.</span>
          </h2>

          <p className={styles.description}>
            See the concrete operational gains delivered across autonomous workflows, digital infrastructure, and integrated software systems.
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

                {/* Subtle Inner Corner Light */}
                <div className={styles.cardInnerLight} aria-hidden="true" />

                {/* 3D Geometric Icon */}
                <div className={styles.iconWrapper}>{card.icon}</div>

                {/* Big Stat */}
                <div className={styles.statNumber}>{card.stat}</div>

                {/* Title */}
                <h3 className={styles.metricTitle}>{card.title}</h3>

                {/* Description */}
                <p className={styles.metricDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
