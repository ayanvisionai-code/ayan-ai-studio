"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionEyebrow from "@/components/SectionEyebrow";
import {
  AutomationIcon,
  WebDevIcon,
  LocalSeoIcon,
  ChatAssistantsIcon,
} from "./ServiceIcons";
import styles from "./ServiceNetworkSection.module.css";

interface ServiceData {
  id: string;
  name: string;
  lines: string[];
  concept: string;
  href: string;
  accent: string;
  isPrimary?: boolean;
  IconComponent: React.ComponentType<{ className?: string }>;
}

const servicesList: ServiceData[] = [
  {
    id: "automation",
    name: "AI AUTOMATION",
    lines: ["AI AUTOMATION"],
    concept:
      "Intelligent workflows that eliminate repetitive chores, sync business tools, and orchestrate operations.",
    href: "/solutions#automation",
    accent: "#00F0C8",
    isPrimary: true,
    IconComponent: AutomationIcon,
  },
  {
    id: "websites",
    name: "HIGH-CONVERTING WEB DEVELOPMENT",
    lines: ["HIGH-CONVERTING", "WEB DEVELOPMENT"],
    concept:
      "Ultra-fast, architectural web front-doors designed to command trust and convert visitors into clients.",
    href: "/solutions#websites",
    accent: "#3984F6",
    IconComponent: WebDevIcon,
  },
  {
    id: "localseo",
    name: "LOCAL SEO",
    lines: ["LOCAL SEO"],
    concept:
      "Dominate local map packs, strengthen local search authority, and capture high-intent regional clients.",
    href: "/solutions#applications",
    accent: "#10B981",
    IconComponent: LocalSeoIcon,
  },
  {
    id: "assistants",
    name: "AI CHAT ASSISTANTS",
    lines: ["AI CHAT ASSISTANTS"],
    concept:
      "Autonomous conversational agents that triage inquiries, qualify criteria, and schedule meetings 24/7.",
    href: "/solutions#integrated",
    accent: "#8B5CF6",
    IconComponent: ChatAssistantsIcon,
  },
];

// Colored vertical equalizer signal bars between circular node and processor
const signalBars = [
  { color: "#8EFFEA", delay: "0.1s" },
  { color: "#40DDE1", delay: "0.4s" },
  { color: "#2568D1", delay: "0.2s" },
  { color: "#FD6BC4", delay: "0.7s" },
  { color: "#FFDA5C", delay: "0.3s" },
  { color: "#FF864C", delay: "0.5s" },
  { color: "#7DFF32", delay: "0.2s" },
  { color: "#19CBAC", delay: "0.6s" },
  { color: "#8EFFEA", delay: "0.4s" },
  { color: "#40DDE1", delay: "0.8s" },
  { color: "#FD6BC4", delay: "0.3s" },
];

export default function ServiceNetworkSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className={styles.section} id="services">
      {/* 01. Background ambient radiant glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* 02. Section Header */}
      <div className={styles.sectionHeader}>
        <SectionEyebrow label="What We Build" variant="teal" />
        <h2 className={styles.sectionTitle}>
          Four Services. <br />
          <span className="title-gradient">One Connected System.</span>
        </h2>
        <p className={styles.sectionDescription}>
          From intelligent automation to high-converting websites, we build the connected digital
          foundations that help businesses grow and operate smarter.
        </p>
      </div>

      {/* 03. Interactive Connected Service Network Diagram */}
      <div className={styles.diagramViewport}>
        {/* SVG Circuit Traces & Signal Pulses Canvas */}
        <svg
          className={styles.circuitSvg}
          viewBox="0 0 1200 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="trace-cyan" x1="364" y1="175" x2="518" y2="315" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F0C8" />
              <stop offset="1" stopColor="#0FB6B8" />
            </linearGradient>
            <linearGradient id="trace-blue" x1="836" y1="175" x2="682" y2="315" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#3984F6" />
            </linearGradient>
            <linearGradient id="trace-green" x1="364" y1="540" x2="518" y2="390" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7DFF32" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="trace-violet" x1="836" y1="540" x2="682" y2="390" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FD6BC4" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* ── Layer 1: Inactive Background PCB Traces ── */}
          {/* Card 1 (Automation) secondary track */}
          <path d="M 364 148 H 424 V 115 H 555" className={styles.traceBase} />
          <path d="M 364 200 H 450 V 270 H 518" className={styles.traceBase} />

          {/* Card 2 (Web Dev) secondary track */}
          <path d="M 836 148 H 776 V 115 H 645" className={styles.traceBase} />
          <path d="M 836 200 H 750 V 270 H 682" className={styles.traceBase} />

          {/* Card 3 (Local SEO) secondary track */}
          <path d="M 364 568 H 430 V 620 H 575 V 436" className={styles.traceBase} />

          {/* Card 4 (Chat Assistants) secondary track */}
          <path d="M 836 568 H 770 V 620 H 625 V 436" className={styles.traceBase} />

          {/* Vertical Bus lines from circular node into chip */}
          <path d="M 580 160 V 272" className={styles.traceBase} />
          <path d="M 590 160 V 272" className={styles.traceBase} />
          <path d="M 600 160 V 272" className={styles.traceBase} />
          <path d="M 610 160 V 272" className={styles.traceBase} />
          <path d="M 620 160 V 272" className={styles.traceBase} />

          {/* ── Layer 2: Primary Active Connected Circuits ── */}
          {/* Path 1: AI Automation (Top-Left) */}
          <path
            id="path-automation"
            d="M 364 175 H 460 V 315 H 518"
            stroke="url(#trace-cyan)"
            className={`${styles.traceActive} ${hoveredCard === "automation" ? styles.highlighted : ""}`}
            style={{ color: "#00F0C8" }}
          />

          {/* Path 2: Web Dev (Top-Right) */}
          <path
            id="path-websites"
            d="M 836 175 H 740 V 315 H 682"
            stroke="url(#trace-blue)"
            className={`${styles.traceActive} ${hoveredCard === "websites" ? styles.highlighted : ""}`}
            style={{ color: "#3984F6" }}
          />

          {/* Path 3: Local SEO (Bottom-Left) */}
          <path
            id="path-localseo"
            d="M 364 540 H 460 V 390 H 518"
            stroke="url(#trace-green)"
            className={`${styles.traceActive} ${hoveredCard === "localseo" ? styles.highlighted : ""}`}
            style={{ color: "#10B981" }}
          />

          {/* Path 4: AI Chat Assistants (Bottom-Right) */}
          <path
            id="path-assistants"
            d="M 836 540 H 740 V 390 H 682"
            stroke="url(#trace-violet)"
            className={`${styles.traceActive} ${hoveredCard === "assistants" ? styles.highlighted : ""}`}
            style={{ color: "#8B5CF6" }}
          />

          {/* ── Layer 3: Animated Signal Pulses Traveling into Center ── */}
          {/* Signal 1: Cyan Pulse (AI Automation -> Processor) */}
          <circle r="3.5" className={styles.pulseDot} style={{ color: "#00F0C8" }}>
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M 364 175 H 460 V 315 H 518" keyPoints="0;1" keyTimes="0;1" />
          </circle>

          {/* Signal 2: Blue Pulse (Web Dev -> Processor) */}
          <circle r="3.5" className={styles.pulseDot} style={{ color: "#38BDF8" }}>
            <animateMotion dur="3.8s" begin="0.8s" repeatCount="indefinite" path="M 836 175 H 740 V 315 H 682" keyPoints="0;1" keyTimes="0;1" />
          </circle>

          {/* Signal 3: Green Pulse (Local SEO -> Processor) */}
          <circle r="3.5" className={styles.pulseDot} style={{ color: "#7DFF32" }}>
            <animateMotion dur="3.5s" begin="1.4s" repeatCount="indefinite" path="M 364 540 H 460 V 390 H 518" keyPoints="0;1" keyTimes="0;1" />
          </circle>

          {/* Signal 4: Magenta/Violet Pulse (Chat Assistants -> Processor) */}
          <circle r="3.5" className={styles.pulseDot} style={{ color: "#FD6BC4" }}>
            <animateMotion dur="3.4s" begin="2.1s" repeatCount="indefinite" path="M 836 540 H 740 V 390 H 682" keyPoints="0;1" keyTimes="0;1" />
          </circle>
        </svg>

        {/* ─── 04. Circular Technical Node Above Processor ─── */}
        <div className={styles.nodeAbove} aria-hidden="true">
          <div className={styles.circularNode}>
            <div className={styles.nodeRingOuter} />
            <div className={styles.nodeRingInner} />
            <div className={styles.nodeCore}>
              <div className={styles.nodeCoreDot} />
            </div>
          </div>

          {/* Rainbow Equalizer Signal Bars */}
          <div className={styles.signalBarsContainer}>
            {signalBars.map((bar, idx) => (
              <span
                key={idx}
                className={styles.signalBar}
                style={
                  {
                    "--bar-color": bar.color,
                    "--bar-delay": bar.delay,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>

        {/* ─── 05. Central Hub (Microprocessor Chip) ─── */}
        <div className={styles.centralHub}>
          {/* Top IC Pins */}
          <div className={styles.chipPinsTop}>
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
          </div>

          {/* Bottom IC Pins */}
          <div className={styles.chipPinsBottom}>
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
            <span className={styles.pinV} />
          </div>

          {/* Left IC Pins */}
          <div className={styles.chipPinsLeft}>
            <span className={styles.pinH} />
            <span className={styles.pinH} />
            <span className={styles.pinH} />
            <span className={styles.pinH} />
            <span className={styles.pinH} />
            <span className={styles.pinH} />
          </div>

          {/* Right IC Pins */}
          <div className={styles.chipPinsRight}>
            <span className={styles.pinH} />
            <span className={styles.pinH} />
            <span className={styles.pinH} />
            <span className={styles.pinH} />
            <span className={styles.pinH} />
            <span className={styles.pinH} />
          </div>

          {/* Microprocessor Physical Body */}
          <div className={styles.chipBody}>
            <span className={styles.chipCornerTL} />
            <span className={styles.chipCornerTR} />
            <span className={styles.chipCornerBL} />
            <span className={styles.chipCornerBR} />

            {/* Recessed Center Core with Brand Logo */}
            <div className={styles.chipCore}>
              <div className={styles.chipLogoWrapper}>
                <Image
                  src="/ayan-ai-studio-logo.png"
                  alt="Ayan AI Studio Core"
                  fill
                  sizes="48px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className={styles.chipBrandLabel}>STUDIO OS</span>
            </div>
          </div>
        </div>

        {/* ─── 06. Floating Service Cards ─── */}
        {servicesList.map((svc, index) => {
          const cardClass = [
            styles.cardBase,
            styles[`card${index + 1}`],
            svc.isPrimary ? styles.cardPrimary : "",
          ]
            .filter(Boolean)
            .join(" ");

          const IconComponent = svc.IconComponent;

          return (
            <Link
              key={svc.id}
              href={svc.href}
              className={cardClass}
              onMouseEnter={() => setHoveredCard(svc.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onFocus={() => setHoveredCard(svc.id)}
              onBlur={() => setHoveredCard(null)}
            >
              {svc.isPrimary && (
                <span className={styles.coreServiceBadge}>CORE SERVICE</span>
              )}

              <div className={styles.cardIconCol}>
                <IconComponent />
              </div>

              <div className={styles.cardTextCol}>
                <h3 className={styles.cardTitle}>
                  {svc.lines.map((line, lIdx) => (
                    <React.Fragment key={lIdx}>
                      {line}
                      {lIdx < svc.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className={styles.cardConcept}>{svc.concept}</p>
                <span className={styles.cardAction}>
                  Explore Solution <span>→</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
