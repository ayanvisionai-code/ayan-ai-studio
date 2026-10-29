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
  number: string;
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
    number: "01",
    name: "AI AUTOMATION",
    lines: ["AI AUTOMATION"],
    concept:
      "Intelligent workflows that eliminate manual friction, sync business tools, and orchestrate operations autonomously.",
    href: "/solutions#automation",
    accent: "#00F0C8",
    isPrimary: true,
    IconComponent: AutomationIcon,
  },
  {
    id: "websites",
    number: "02",
    name: "HIGH-CONVERTING WEB DEVELOPMENT",
    lines: ["HIGH-CONVERTING", "WEB DEVELOPMENT"],
    concept:
      "Ultra-fast architectural front-doors designed to command trust, captivate visitors, and convert pipeline at scale.",
    href: "/solutions#websites",
    accent: "#3984F6",
    IconComponent: WebDevIcon,
  },
  {
    id: "localseo",
    number: "03",
    name: "LOCAL SEO",
    lines: ["LOCAL SEO"],
    concept:
      "Dominate local map packs, strengthen regional search authority, and capture high-intent geographic customers.",
    href: "/solutions#applications",
    accent: "#10B981",
    IconComponent: LocalSeoIcon,
  },
  {
    id: "assistants",
    number: "04",
    name: "AI CHAT ASSISTANTS",
    lines: ["AI CHAT ASSISTANTS"],
    concept:
      "Autonomous conversational agents that triage inquiries, qualify lead criteria, and book appointments 24/7.",
    href: "/solutions#integrated",
    accent: "#8B5CF6",
    IconComponent: ChatAssistantsIcon,
  },
];

// GrowRev 12-band equalizer signal bars between circular radar node and processor
const signalBars = [
  { color: "#8EFFEA", delay: "0.1s" },
  { color: "#40DDE1", delay: "0.45s" },
  { color: "#2568D1", delay: "0.2s" },
  { color: "#FD6BC4", delay: "0.75s" },
  { color: "#FFDA5C", delay: "0.3s" },
  { color: "#FF864C", delay: "0.55s" },
  { color: "#7DFF32", delay: "0.25s" },
  { color: "#19CBAC", delay: "0.65s" },
  { color: "#8EFFEA", delay: "0.4s" },
  { color: "#40DDE1", delay: "0.8s" },
  { color: "#2568D1", delay: "0.35s" },
  { color: "#FD6BC4", delay: "0.15s" },
];

export default function ServiceNetworkSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className={styles.section} id="services">
      {/* 01. Background ambient radiant glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* 02. Section Header */}
      <div className={styles.sectionHeader}>
        <SectionEyebrow label="Connected Systems" variant="teal" />
        <h2 className={styles.sectionTitle}>
          Four Disciplines. <br />
          <span className="title-gradient">One Connected Engine.</span>
        </h2>
        <p className={styles.sectionDescription}>
          From autonomous workflow orchestration to high-conversion digital architecture,
          we forge the interconnected intelligence systems powering high-growth modern enterprises.
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
            {/* Active Trace Linear Gradients */}
            <linearGradient id="trace-cyan" x1="370" y1="180" x2="522" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F0C8" />
              <stop offset="1" stopColor="#0FB6B8" />
            </linearGradient>
            <linearGradient id="trace-blue" x1="830" y1="180" x2="678" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#3984F6" />
            </linearGradient>
            <linearGradient id="trace-green" x1="370" y1="500" x2="522" y2="370" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7DFF32" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="trace-violet" x1="830" y1="500" x2="678" y2="370" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FD6BC4" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>

            {/* Glowing Drop-shadow Filters */}
            <filter id="pulseGlowCyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="pulseGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 1: DENSE INACTIVE BACKGROUND PCB TRACES (Motherboard traces)
             ════════════════════════════════════════════════════════════════════ */}
          {/* Card 1 (Top Left: AI Automation) Secondary Tracks */}
          <path d="M 370 150 H 464 Q 480 150 480 166 V 269 Q 480 285 496 285 H 522" className={styles.traceBase} />
          <path d="M 370 210 H 420 Q 436 210 436 226 V 300 Q 436 315 452 315 H 522" className={styles.traceBase} />
          <path d="M 540 140 H 440 Q 420 140 420 160 V 230 Q 420 240 400 240 H 370" className={styles.traceBase} />

          {/* Card 2 (Top Right: Web Dev) Secondary Tracks */}
          <path d="M 830 150 H 736 Q 720 150 720 166 V 269 Q 720 285 704 285 H 678" className={styles.traceBase} />
          <path d="M 830 210 H 780 Q 764 210 764 226 V 300 Q 764 315 748 315 H 678" className={styles.traceBase} />
          <path d="M 660 140 H 760 Q 780 140 780 160 V 230 Q 780 240 800 240 H 830" className={styles.traceBase} />

          {/* Card 3 (Bottom Left: Local SEO) Secondary Tracks */}
          <path d="M 370 535 H 414 Q 430 535 430 519 V 406 Q 430 390 446 390 H 522" className={styles.traceBase} />
          <path d="M 370 470 H 450 Q 460 470 460 460 V 385 Q 460 370 475 370 H 522" className={styles.traceBase} />
          <path d="M 575 418 V 474 Q 575 490 559 490 H 446 Q 430 490 430 506 V 555 H 370" className={styles.traceBase} />

          {/* Card 4 (Bottom Right: Chat Assistants) Secondary Tracks */}
          <path d="M 830 535 H 786 Q 770 535 770 519 V 406 Q 770 390 754 390 H 678" className={styles.traceBase} />
          <path d="M 830 470 H 750 Q 740 470 740 460 V 385 Q 740 370 725 370 H 678" className={styles.traceBase} />
          <path d="M 625 418 V 474 Q 625 490 641 490 H 754 Q 770 490 770 506 V 555 H 830" className={styles.traceBase} />

          {/* Downward Motherboard Bus Lines */}
          <path d="M 590 418 V 640" className={styles.traceBase} />
          <path d="M 600 418 V 660" className={styles.traceBase} />
          <path d="M 610 418 V 640" className={styles.traceBase} />

          {/* PCB Solder Pads / Test Points */}
          <circle cx="430" cy="270" r="3" className={styles.solderPad} />
          <circle cx="460" cy="330" r="3" className={styles.solderPad} />
          <circle cx="770" cy="270" r="3" className={styles.solderPad} />
          <circle cx="740" cy="330" r="3" className={styles.solderPad} />
          <circle cx="440" cy="420" r="3" className={styles.solderPad} />
          <circle cx="760" cy="420" r="3" className={styles.solderPad} />
          <circle cx="590" cy="640" r="3" className={styles.solderPad} />
          <circle cx="600" cy="660" r="3" className={styles.solderPad} />
          <circle cx="610" cy="640" r="3" className={styles.solderPad} />

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 2: PRIMARY ACTIVE CONNECTED CIRCUITS (Illuminated)
             ════════════════════════════════════════════════════════════════════ */}
          {/* Path 1: AI Automation (Top-Left -> Processor) */}
          <path
            id="path-automation"
            d="M 370 180 H 454 Q 470 180 470 196 V 284 Q 470 300 486 300 H 522"
            stroke="url(#trace-cyan)"
            className={`${styles.traceActive} ${hoveredCard === "automation" ? styles.highlighted : ""}`}
            style={{ color: "#00F0C8" }}
          />

          {/* Path 2: Web Dev (Top-Right -> Processor) */}
          <path
            id="path-websites"
            d="M 830 180 H 746 Q 730 180 730 196 V 284 Q 730 300 714 300 H 678"
            stroke="url(#trace-blue)"
            className={`${styles.traceActive} ${hoveredCard === "websites" ? styles.highlighted : ""}`}
            style={{ color: "#3984F6" }}
          />

          {/* Path 3: Local SEO (Bottom-Left -> Processor) */}
          <path
            id="path-localseo"
            d="M 370 500 H 454 Q 470 500 470 484 V 386 Q 470 370 486 370 H 522"
            stroke="url(#trace-green)"
            className={`${styles.traceActive} ${hoveredCard === "localseo" ? styles.highlighted : ""}`}
            style={{ color: "#10B981" }}
          />

          {/* Path 4: AI Chat Assistants (Bottom-Right -> Processor) */}
          <path
            id="path-assistants"
            d="M 830 500 H 746 Q 730 500 730 484 V 386 Q 730 370 714 370 H 678"
            stroke="url(#trace-violet)"
            className={`${styles.traceActive} ${hoveredCard === "assistants" ? styles.highlighted : ""}`}
            style={{ color: "#8B5CF6" }}
          />

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 3: ANIMATED SIGNAL PULSES TRAVELING INTO CHIP
             ════════════════════════════════════════════════════════════════════ */}
          {/* Signal 1: Cyan Pulse (AI Automation -> Processor) */}
          <circle r="4" className={styles.pulseDot} style={{ color: "#00F0C8" }}>
            <animateMotion
              dur="3.2s"
              repeatCount="indefinite"
              path="M 370 180 H 454 Q 470 180 470 196 V 284 Q 470 300 486 300 H 522"
              keyPoints="0;1"
              keyTimes="0;1"
            />
          </circle>

          {/* Signal 2: Blue Pulse (Web Dev -> Processor) */}
          <circle r="4" className={styles.pulseDot} style={{ color: "#38BDF8" }}>
            <animateMotion
              dur="3.6s"
              begin="0.8s"
              repeatCount="indefinite"
              path="M 830 180 H 746 Q 730 180 730 196 V 284 Q 730 300 714 300 H 678"
              keyPoints="0;1"
              keyTimes="0;1"
            />
          </circle>

          {/* Signal 3: Green Pulse (Local SEO -> Processor) */}
          <circle r="4" className={styles.pulseDot} style={{ color: "#7DFF32" }}>
            <animateMotion
              dur="3.4s"
              begin="1.5s"
              repeatCount="indefinite"
              path="M 370 500 H 454 Q 470 500 470 484 V 386 Q 470 370 486 370 H 522"
              keyPoints="0;1"
              keyTimes="0;1"
            />
          </circle>

          {/* Signal 4: Magenta/Violet Pulse (Chat Assistants -> Processor) */}
          <circle r="4" className={styles.pulseDot} style={{ color: "#FD6BC4" }}>
            <animateMotion
              dur="3.5s"
              begin="2.2s"
              repeatCount="indefinite"
              path="M 830 500 H 746 Q 730 500 730 484 V 386 Q 730 370 714 370 H 678"
              keyPoints="0;1"
              keyTimes="0;1"
            />
          </circle>

          {/* Secondary Pulse from Bottom Bus */}
          <circle r="3" className={styles.pulseDot} style={{ color: "#40DDE1" }}>
            <animateMotion
              dur="2.8s"
              begin="1.1s"
              repeatCount="indefinite"
              path="M 600 660 V 418"
              keyPoints="0;1"
              keyTimes="0;1"
            />
          </circle>
        </svg>

        {/* ─── 04. Circular Radar Node Above Processor ─── */}
        <div className={styles.nodeAbove} aria-hidden="true">
          <div className={styles.circularNode}>
            {/* Concentric layered rings */}
            <div className={styles.nodeRingOuter} />
            <div className={styles.nodeRingMid} />
            <div className={styles.nodeRingInner} />

            {/* Rotating radar sweep scanner */}
            <div className={styles.radarScanner} />

            {/* Glowing core center */}
            <div className={styles.nodeCore}>
              <div className={styles.nodeCoreDot} />
            </div>
          </div>

          {/* 12-Band Equalizer Signal Bars */}
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

        {/* ─── 05. Central Hub (Hardware Microprocessor Chip) ─── */}
        <div className={styles.centralHub}>
          {/* Top IC Pins (11 Pins) */}
          <div className={styles.chipPinsTop}>
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={`pin-t-${i}`} className={styles.pinV} />
            ))}
          </div>

          {/* Bottom IC Pins (11 Pins) */}
          <div className={styles.chipPinsBottom}>
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={`pin-b-${i}`} className={styles.pinV} />
            ))}
          </div>

          {/* Left IC Pins (11 Pins) */}
          <div className={styles.chipPinsLeft}>
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={`pin-l-${i}`} className={styles.pinH} />
            ))}
          </div>

          {/* Right IC Pins (11 Pins) */}
          <div className={styles.chipPinsRight}>
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={`pin-r-${i}`} className={styles.pinH} />
            ))}
          </div>

          {/* Microprocessor Physical Body */}
          <div className={styles.chipBody}>
            {/* Corner mounting hex studs */}
            <span className={styles.chipCornerTL} />
            <span className={styles.chipCornerTR} />
            <span className={styles.chipCornerBL} />
            <span className={styles.chipCornerBR} />

            {/* Recessed Center Core with Brand Logo & OS Label */}
            <div className={styles.chipCore}>
              <div className={styles.chipLogoWrapper}>
                <Image
                  src="/ayan-ai-studio-logo.png"
                  alt="Ayan AI Studio Core"
                  fill
                  sizes="52px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <span className={styles.chipBrandLabel}>AYAN OS</span>
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
                <span className={styles.coreServiceBadge}>CORE ENGINE</span>
              )}

              {/* Card Header: 3D Icon + Numeric Index */}
              <div className={styles.cardHeader}>
                <div className={styles.cardIconWrap}>
                  <IconComponent />
                </div>
                <span className={styles.cardNumber}>{svc.number}</span>
              </div>

              {/* Card Body: Anton Title + Concept + Link */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  {svc.lines.map((line, lIdx) => (
                    <React.Fragment key={lIdx}>
                      {line}
                      {lIdx < svc.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className={styles.cardConcept}>{svc.concept}</p>
                <div className={styles.cardAction}>
                  <span>Explore Architecture</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
