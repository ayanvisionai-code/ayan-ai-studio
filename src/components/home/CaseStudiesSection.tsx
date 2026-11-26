"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CaseStudiesSection.module.css";

interface CaseStudyItem {
  id: string;
  client: string;
  category: string;
  accent: string;
  image: string;
  alt: string;
  href: string;
  description: string;
  params: {
    label: string;
    value: string;
  }[];
}

const caseStudiesData: CaseStudyItem[] = [
  {
    id: "agencyos",
    client: "AgencyOS",
    category: "Custom Applications",
    accent: "#3CFBD2",
    image: "/agencyos-dashboard.png",
    alt: "AgencyOS client portal and executive operations dashboard",
    href: "/transformations/custom-applications",
    description:
      "All-in-one operating platform unifying client onboarding, automated contracts, and revenue pipelines, replacing 4 disconnected SaaS tools.",
    params: [
      { label: "Onboarding", value: "-70%" },
      { label: "Time Saved", value: "15h/wk" },
      { label: "Workflows", value: "Unified" },
      { label: "Efficiency", value: "3.5x" },
    ],
  },
  {
    id: "rongdhonu",
    client: "Rongdhonu",
    category: "Website + Applications",
    accent: "#7DFF32",
    image: "/rongdhonu-public-website.png",
    alt: "Rongdhonu cultural digital exhibition platform and curation system",
    href: "/transformations/website-plus-applications",
    description:
      "Global art exhibition and archival platform with automated cataloging, self-serve curatorial submissions, and international payments.",
    params: [
      { label: "Coverage", value: "100%" },
      { label: "Cataloging", value: "Instant" },
      { label: "Curation", value: "Autonomous" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "lead-routing",
    client: "Intelligent Lead Pipeline",
    category: "Automation & AI Agents",
    accent: "#FD6BC4",
    image: "/lab_lead_pipeline_1784544885964.png",
    alt: "Intelligent lead qualification and routing automation architecture",
    href: "/transformations/automations",
    description:
      "Multi-stage autonomous pipeline parsing inquiry intent, enriching firmographics, and scheduling high-value consultations in seconds.",
    params: [
      { label: "Response", value: "3 mins" },
      { label: "Triage Rate", value: "100%" },
      { label: "Availability", value: "24/7" },
      { label: "Conversion", value: "+45%" },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className={styles.section} id="cases">
      {/* Background pattern */}
      <div className={styles.bgPattern} aria-hidden="true" />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.subtitleWrapper}>
            <div className={`${styles.laserLine} ${styles.laserLineLeft}`} />
            <span className={styles.subtitleText}>Case Studies</span>
            <div className={`${styles.laserLine} ${styles.laserLineRight}`} />
          </div>

          <h2 className={styles.title}>
            Architected for <br />
            <span className={styles.titleGradient}>Transformative Scale.</span>
          </h2>

          <p className={styles.description}>
            Explore the comprehensive outcomes of our engineering engagements, highlighting measurable operational breakthroughs and reliable business systems.
          </p>
        </div>

        {/* 3 Staggered Column Case Study Cards */}
        <div className={styles.resultsGrid}>
          {caseStudiesData.map((item, idx) => {
            const staggerClass =
              idx === 0
                ? styles.staggerCol1
                : idx === 1
                ? styles.staggerCol2
                : styles.staggerCol3;

            return (
              <div key={item.id} className={staggerClass}>
                <Link
                  href={item.href}
                  className={styles.caseCard}
                  style={{ "--card-accent": item.accent } as React.CSSProperties}
                >
                  {/* Glowing Neon Ambient Shadow */}
                  <div
                    className={styles.neonShadow}
                    style={{ backgroundColor: item.accent }}
                    aria-hidden="true"
                  />

                  {/* Card Container */}
                  <div className={styles.cardWrapper}>
                    {/* Top Neon Tab */}
                    <div
                      className={styles.neonTopTab}
                      style={{
                        backgroundColor: item.accent,
                        boxShadow: `0 0 16px ${item.accent}`,
                      }}
                      aria-hidden="true"
                    />

                    {/* Poster Frame */}
                    <div className={styles.posterFrame}>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className={styles.posterImage}
                      />
                      <div className={styles.posterOverlay} />
                      <span className={styles.categoryBadge}>{item.category}</span>
                    </div>

                    {/* Content Body */}
                    <div className={styles.contentArea}>
                      <h3 className={styles.cardTitle}>{item.client}</h3>
                      <p className={styles.cardDescription}>{item.description}</p>

                      {/* 4-Column Parameter Grid */}
                      <div className={styles.paramsGrid}>
                        {item.params.map((param, pIdx) => (
                          <div key={pIdx} className={styles.paramBox}>
                            <span className={styles.paramLabel}>{param.label}</span>
                            <span className={styles.paramValue}>{param.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA link */}
                      <div className={styles.ctaRow}>
                        <span className={styles.ctaText}>
                          View Full Case Study →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className={styles.viewAllBtnWrapper}>
          <Link href="/transformations" className="btn-growrev-secondary">
            Explore All Client Transformations →
          </Link>
        </div>
      </div>
    </section>
  );
}
