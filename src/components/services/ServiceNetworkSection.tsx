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

interface ServiceItem {
  id: string;
  name: string;
  lines: string[];
  href: string;
  accent: string;
  IconComponent: React.ComponentType<{ className?: string }>;
}

const servicesList: ServiceItem[] = [
  {
    id: "automation",
    name: "AI AUTOMATION",
    lines: ["AI AUTOMATION"],
    href: "/solutions#automation",
    accent: "#00F0C8",
    IconComponent: AutomationIcon,
  },
  {
    id: "websites",
    name: "HIGH-CONVERTING WEB DEVELOPMENT",
    lines: ["HIGH-CONVERTING", "WEB DEVELOPMENT"],
    href: "/solutions#websites",
    accent: "#38BDF8",
    IconComponent: WebDevIcon,
  },
  {
    id: "localseo",
    name: "LOCAL SEO",
    lines: ["LOCAL SEO"],
    href: "/solutions#applications",
    accent: "#7DFF32",
    IconComponent: LocalSeoIcon,
  },
  {
    id: "assistants",
    name: "AI CHAT ASSISTANTS",
    lines: ["AI CHAT ASSISTANTS"],
    href: "/solutions#integrated",
    accent: "#FD6BC4",
    IconComponent: ChatAssistantsIcon,
  },
];

// 12-Band Equalizer Signal Bars between Circular Node and Processor
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
      {/* Background ambient radiant glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* Section Header */}
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

      {/* Interactive Connected Service Network Diagram */}
      <div className={styles.diagramViewport}>
        {/* SVG Circuit Traces & Signal Pulses Canvas */}
        <svg
          className={styles.circuitSvg}
          viewBox="0 0 1200 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft Glow Filters */}
            <filter id="pulseGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="pinGlintGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Signal Pulse Gradients (Moving Head-to-Tail) */}
            <linearGradient id="pulse-grad-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F0C8" stopOpacity="0" />
              <stop offset="70%" stopColor="#00F0C8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="pulse-grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2568D1" stopOpacity="0" />
              <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="pulse-grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="70%" stopColor="#7DFF32" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="pulse-grad-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="70%" stopColor="#FD6BC4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="pulse-grad-amber" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF864C" stopOpacity="0" />
              <stop offset="70%" stopColor="#FFDA5C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 1: 36 SUBTLE, DARK PCB TRACES (UNDERLYING HARDWARE BUS)
              Strictly dark graphite (#131B1F, #162025). 1.2px stroke.
             ════════════════════════════════════════════════════════════════════ */}
          <g className={styles.baseTracesGroup}>
            {/* ── QUADRANT 1: UPPER-LEFT (AI AUTOMATION) ── */}
            {/* Trace A1: Main Bus into Left Pin 1 */}
            <path d="M 350 140 H 430 Q 440 140 440 150 V 296 Q 440 306 450 306 H 518" className={styles.traceBase} />
            {/* Trace A2: Parallel into Left Pin 2 */}
            <path d="M 350 160 H 400 Q 410 160 410 170 V 308 Q 410 318 420 318 H 518" className={styles.traceBase} />
            {/* Trace A3: Parallel into Left Pin 3 */}
            <path d="M 350 180 H 375 Q 385 180 385 190 V 320 Q 385 330 395 330 H 518" className={styles.traceBase} />
            {/* Trace A4: Into Left Pin 4 */}
            <path d="M 350 200 H 450 Q 460 200 460 210 V 332 Q 460 342 470 342 H 518" className={styles.traceBase} />
            {/* Trace A5: Route connecting into Top Pin 2 */}
            <path d="M 350 120 H 470 Q 480 120 480 130 V 230 Q 480 240 490 240 H 548 Q 558 240 558 250 V 278" className={styles.traceBase} />
            {/* Trace A6: Stepped branch into Left Pin 5 */}
            <path d="M 320 220 H 415 Q 425 220 425 230 V 255 Q 425 265 435 265 H 470 Q 480 265 480 275 V 344 Q 480 354 490 354 H 518" className={styles.traceBase} />
            {/* Trace A7: Fine nested trace into Left Pin 1 */}
            <path d="M 350 150 H 422 Q 432 150 432 160 V 288 Q 432 298 442 298 H 518" className={styles.traceBase} />
            {/* Trace A8: Auxiliary branch with test pad */}
            <path d="M 350 190 H 395 Q 405 190 405 200 V 250" className={styles.traceBase} />

            {/* ── QUADRANT 2: UPPER-RIGHT (WEB DEVELOPMENT) ── */}
            {/* Trace B1: Main Bus into Right Pin 1 */}
            <path d="M 850 140 H 770 Q 760 140 760 150 V 296 Q 760 306 750 306 H 682" className={styles.traceBase} />
            {/* Trace B2: Parallel into Right Pin 2 */}
            <path d="M 850 160 H 800 Q 790 160 790 170 V 308 Q 790 318 780 318 H 682" className={styles.traceBase} />
            {/* Trace B3: Parallel into Right Pin 3 */}
            <path d="M 850 180 H 825 Q 815 180 815 190 V 320 Q 815 330 805 330 H 682" className={styles.traceBase} />
            {/* Trace B4: Into Right Pin 4 */}
            <path d="M 850 200 H 750 Q 740 200 740 210 V 332 Q 740 342 730 342 H 682" className={styles.traceBase} />
            {/* Trace B5: Route connecting into Top Pin 9 */}
            <path d="M 850 120 H 730 Q 720 120 720 130 V 230 Q 720 240 710 240 H 652 Q 642 240 642 250 V 278" className={styles.traceBase} />
            {/* Trace B6: Stepped branch into Right Pin 5 */}
            <path d="M 880 220 H 785 Q 775 220 775 230 V 255 Q 775 265 765 265 H 730 Q 720 265 720 275 V 344 Q 720 354 710 354 H 682" className={styles.traceBase} />
            {/* Trace B7: Fine nested trace into Right Pin 1 */}
            <path d="M 850 150 H 778 Q 768 150 768 160 V 288 Q 768 298 758 298 H 682" className={styles.traceBase} />
            {/* Trace B8: Auxiliary branch with test pad */}
            <path d="M 850 190 H 805 Q 795 190 795 200 V 250" className={styles.traceBase} />

            {/* ── QUADRANT 3: LOWER-LEFT (LOCAL SEO) ── */}
            {/* Trace C1: Main Bus into Left Pin 10 */}
            <path d="M 350 520 H 430 Q 440 520 440 510 V 424 Q 440 414 450 414 H 518" className={styles.traceBase} />
            {/* Trace C2: Parallel into Left Pin 9 */}
            <path d="M 350 540 H 400 Q 410 540 410 530 V 412 Q 410 402 420 402 H 518" className={styles.traceBase} />
            {/* Trace C3: Parallel into Left Pin 8 */}
            <path d="M 350 560 H 375 Q 385 560 385 550 V 400 Q 385 390 395 390 H 518" className={styles.traceBase} />
            {/* Trace C4: Into Left Pin 7 */}
            <path d="M 350 500 H 450 Q 460 500 460 490 V 388 Q 460 378 470 378 H 518" className={styles.traceBase} />
            {/* Trace C5: Route connecting into Bottom Pin 2 */}
            <path d="M 350 580 H 460 Q 470 580 470 570 V 490 Q 470 480 480 480 H 548 Q 558 480 558 470 V 442" className={styles.traceBase} />
            {/* Trace C6: Stepped branch into Left Pin 6 */}
            <path d="M 320 480 H 415 Q 425 480 425 470 V 445 Q 425 435 435 435 H 470 Q 480 435 480 425 V 376 Q 480 366 490 366 H 518" className={styles.traceBase} />
            {/* Trace C7: Fine nested trace into Left Pin 10 */}
            <path d="M 350 530 H 422 Q 432 530 432 520 V 432 Q 432 422 442 422 H 518" className={styles.traceBase} />
            {/* Trace C8: Auxiliary branch with test pad */}
            <path d="M 350 570 H 415 Q 425 570 425 560 V 500" className={styles.traceBase} />

            {/* ── QUADRANT 4: LOWER-RIGHT (AI CHAT ASSISTANTS) ── */}
            {/* Trace D1: Main Bus into Right Pin 10 */}
            <path d="M 850 520 H 770 Q 760 520 760 510 V 424 Q 760 414 750 414 H 682" className={styles.traceBase} />
            {/* Trace D2: Parallel into Right Pin 9 */}
            <path d="M 850 540 H 800 Q 790 540 790 530 V 412 Q 790 402 780 402 H 682" className={styles.traceBase} />
            {/* Trace D3: Parallel into Right Pin 8 */}
            <path d="M 850 560 H 825 Q 815 560 815 550 V 400 Q 815 390 805 390 H 682" className={styles.traceBase} />
            {/* Trace D4: Into Right Pin 7 */}
            <path d="M 850 500 H 750 Q 740 500 740 490 V 388 Q 740 378 730 378 H 682" className={styles.traceBase} />
            {/* Trace D5: Route connecting into Bottom Pin 9 */}
            <path d="M 850 580 H 740 Q 730 580 730 570 V 490 Q 730 480 720 480 H 652 Q 642 480 642 470 V 442" className={styles.traceBase} />
            {/* Trace D6: Stepped branch into Right Pin 6 */}
            <path d="M 880 480 H 785 Q 775 480 775 470 V 445 Q 775 435 765 435 H 730 Q 720 435 720 425 V 376 Q 720 366 710 366 H 682" className={styles.traceBase} />
            {/* Trace D7: Fine nested trace into Right Pin 10 */}
            <path d="M 850 530 H 778 Q 768 530 768 520 V 432 Q 768 422 758 422 H 682" className={styles.traceBase} />
            {/* Trace D8: Auxiliary branch with test pad */}
            <path d="M 850 570 H 785 Q 775 570 775 560 V 500" className={styles.traceBase} />

            {/* ── DOWNWARD BUS EXTENSIONS ── */}
            <path d="M 582 442 V 660" className={styles.traceBase} />
            <path d="M 594 442 V 675" className={styles.traceBase} />
            <path d="M 606 442 V 675" className={styles.traceBase} />
            <path d="M 618 442 V 660" className={styles.traceBase} />

            {/* PCB Hardware Solder Test Points */}
            <circle cx="405" cy="250" r="2.5" className={styles.solderPad} />
            <circle cx="795" cy="250" r="2.5" className={styles.solderPad} />
            <circle cx="425" cy="500" r="2.5" className={styles.solderPad} />
            <circle cx="775" cy="500" r="2.5" className={styles.solderPad} />
            <circle cx="582" cy="660" r="2.5" className={styles.solderPad} />
            <circle cx="594" cy="675" r="2.5" className={styles.solderPad} />
            <circle cx="606" cy="675" r="2.5" className={styles.solderPad} />
            <circle cx="618" cy="660" r="2.5" className={styles.solderPad} />
          </g>

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 2: RAPID INWARD LIGHT PULSES (DATA SIGNALS)
              Direction: Strictly FROM SERVICE CARD ORIGIN -> INWARD TO PROCESSOR
              Short 24-32px illuminated capsule traveling over the dark trace.
             ════════════════════════════════════════════════════════════════════ */}
          {/* Signal 1A: Cyan Fast Pulse (AI Automation -> Left Pin 1) */}
          <path
            d="M 350 140 H 430 Q 440 140 440 150 V 296 Q 440 306 450 306 H 518"
            stroke="url(#pulse-grad-cyan)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalPulse} ${styles.pulseFast1}`}
            filter="url(#pulseGlow)"
          />
          {/* Signal 1B: Amber Concurrent Pulse (AI Automation -> Left Pin 3) */}
          <path
            d="M 350 180 H 375 Q 385 180 385 190 V 320 Q 385 330 395 330 H 518"
            stroke="url(#pulse-grad-amber)"
            strokeWidth="2.0"
            strokeLinecap="round"
            className={`${styles.signalPulse} ${styles.pulseFast2}`}
            filter="url(#pulseGlow)"
          />

          {/* Signal 2A: Blue Fast Pulse (Web Dev -> Right Pin 1) */}
          <path
            d="M 850 140 H 770 Q 760 140 760 150 V 296 Q 760 306 750 306 H 682"
            stroke="url(#pulse-grad-blue)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalPulse} ${styles.pulseFast3}`}
            filter="url(#pulseGlow)"
          />
          {/* Signal 2B: Cyan Concurrent Pulse (Web Dev -> Top Pin 9) */}
          <path
            d="M 850 120 H 730 Q 720 120 720 130 V 230 Q 720 240 710 240 H 652 Q 642 240 642 250 V 278"
            stroke="url(#pulse-grad-cyan)"
            strokeWidth="2.0"
            strokeLinecap="round"
            className={`${styles.signalPulse} ${styles.pulseFast4}`}
            filter="url(#pulseGlow)"
          />

          {/* Signal 3A: Emerald Green Fast Pulse (Local SEO -> Left Pin 10) */}
          <path
            d="M 350 520 H 430 Q 440 520 440 510 V 424 Q 440 414 450 414 H 518"
            stroke="url(#pulse-grad-green)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalPulse} ${styles.pulseFast5}`}
            filter="url(#pulseGlow)"
          />
          {/* Signal 3B: Cyan Concurrent Pulse (Local SEO -> Bottom Pin 2) */}
          <path
            d="M 350 580 H 460 Q 470 580 470 570 V 490 Q 470 480 480 480 H 548 Q 558 480 558 470 V 442"
            stroke="url(#pulse-grad-cyan)"
            strokeWidth="2.0"
            strokeLinecap="round"
            className={`${styles.signalPulse} ${styles.pulseFast6}`}
            filter="url(#pulseGlow)"
          />

          {/* Signal 4A: Magenta/Pink Fast Pulse (Chat Assistants -> Right Pin 10) */}
          <path
            d="M 850 520 H 770 Q 760 520 760 510 V 424 Q 760 414 750 414 H 682"
            stroke="url(#pulse-grad-magenta)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalPulse} ${styles.pulseFast7}`}
            filter="url(#pulseGlow)"
          />
          {/* Signal 4B: Blue Concurrent Pulse (Chat Assistants -> Right Pin 8) */}
          <path
            d="M 850 560 H 825 Q 815 560 815 550 V 400 Q 815 390 805 390 H 682"
            stroke="url(#pulse-grad-blue)"
            strokeWidth="2.0"
            strokeLinecap="round"
            className={`${styles.signalPulse} ${styles.pulseFast8}`}
            filter="url(#pulseGlow)"
          />

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 3: LUMINOUS MOVING PARTICLES (HEAD NODES RIDING PATHS)
             ════════════════════════════════════════════════════════════════════ */}
          <circle r="2.2" fill="#FFFFFF" filter="url(#pulseGlow)">
            <animateMotion
              dur="1.2s"
              repeatCount="indefinite"
              path="M 350 140 H 430 Q 440 140 440 150 V 296 Q 440 306 450 306 H 518"
              keyPoints="0;1"
              keyTimes="0;1"
            />
          </circle>
          <circle r="2.2" fill="#FFFFFF" filter="url(#pulseGlow)">
            <animateMotion
              dur="1.35s"
              begin="0.4s"
              repeatCount="indefinite"
              path="M 850 140 H 770 Q 760 140 760 150 V 296 Q 760 306 750 306 H 682"
              keyPoints="0;1"
              keyTimes="0;1"
            />
          </circle>
          <circle r="2.2" fill="#FFFFFF" filter="url(#pulseGlow)">
            <animateMotion
              dur="1.25s"
              begin="0.8s"
              repeatCount="indefinite"
              path="M 350 520 H 430 Q 440 520 440 510 V 424 Q 440 414 450 414 H 518"
              keyPoints="0;1"
              keyTimes="0;1"
            />
          </circle>
          <circle r="2.2" fill="#FFFFFF" filter="url(#pulseGlow)">
            <animateMotion
              dur="1.3s"
              begin="0.2s"
              repeatCount="indefinite"
              path="M 850 520 H 770 Q 760 520 760 510 V 424 Q 760 414 750 414 H 682"
              keyPoints="0;1"
              keyTimes="0;1"
            />
          </circle>

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 4: SUBTLE RECEIVING GLINTS AT PROCESSOR PINS
             ════════════════════════════════════════════════════════════════════ */}
          <circle cx="518" cy="306" r="2.8" fill="#00F0C8" className={styles.pinGlint1} filter="url(#pinGlintGlow)" />
          <circle cx="682" cy="306" r="2.8" fill="#38BDF8" className={styles.pinGlint2} filter="url(#pinGlintGlow)" />
          <circle cx="518" cy="414" r="2.8" fill="#7DFF32" className={styles.pinGlint3} filter="url(#pinGlintGlow)" />
          <circle cx="682" cy="414" r="2.8" fill="#FD6BC4" className={styles.pinGlint4} filter="url(#pinGlintGlow)" />
        </svg>

        {/* ─── 04. Precision Circular Orbital Node Above Processor ─── */}
        <div className={styles.nodeAbove} aria-hidden="true">
          <div className={styles.circularHousing}>
            {/* Concentric Layered Precision Rings */}
            <div className={styles.housingOuterBevel} />
            <div className={styles.housingRingMid} />
            <div className={styles.housingRingInner} />

            {/* Delicate Cyan Rotating Scanning Arc (NO wedge, NO fan!) */}
            <div className={styles.scanningArcWrapper}>
              <svg viewBox="0 0 80 80" width="80" height="80" className={styles.arcSvg}>
                <path
                  d="M 40 14 A 26 26 0 0 1 66 40"
                  stroke="#00F0C8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                  filter="drop-shadow(0 0 4px #00F0C8)"
                />
              </svg>
            </div>

            {/* Dark Glass Central Cavity */}
            <div className={styles.glassCavity}>
              <div className={styles.cavityCoreDot} />
            </div>
          </div>

          {/* 12-Band Equalizer Signal Bars Bridge */}
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

        {/* ─── 05. Central AI Microprocessor Hardware Hub ─── */}
        <div className={styles.centralHub}>
          {/* Top Connection Pins (11 Pins) */}
          <div className={styles.chipPinsTop}>
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={`pin-t-${i}`} className={styles.pinV} />
            ))}
          </div>

          {/* Bottom Connection Pins (11 Pins) */}
          <div className={styles.chipPinsBottom}>
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={`pin-b-${i}`} className={styles.pinV} />
            ))}
          </div>

          {/* Left Connection Pins (11 Pins) */}
          <div className={styles.chipPinsLeft}>
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={`pin-l-${i}`} className={styles.pinH} />
            ))}
          </div>

          {/* Right Connection Pins (11 Pins) */}
          <div className={styles.chipPinsRight}>
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={`pin-r-${i}`} className={styles.pinH} />
            ))}
          </div>

          {/* Dark Matte Processor Physical Body */}
          <div className={styles.chipBody}>
            {/* 4 Corner Fastener Studs */}
            <span className={styles.chipCornerTL} />
            <span className={styles.chipCornerTR} />
            <span className={styles.chipCornerBL} />
            <span className={styles.chipCornerBR} />

            {/* Recessed Center Panel with Clean Studio Logo */}
            <div className={styles.chipCore}>
              <div className={styles.chipLogoWrapper}>
                <Image
                  src="/ayan-ai-studio-logo.png"
                  alt="Ayan AI Studio Core"
                  fill
                  sizes="48px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 06. Compact Charcoal Service Modules (Reference Style) ─── */}
        {servicesList.map((svc, index) => {
          const cardClass = [
            styles.serviceModule,
            styles[`module${index + 1}`],
            hoveredCard === svc.id ? styles.moduleHovered : "",
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
              {/* Left Column: 3D Dimensional Polished Icon */}
              <div className={styles.moduleIconCol}>
                <IconComponent />
              </div>

              {/* Right Column: Bold Condensed Uppercase Service Label */}
              <div className={styles.moduleTextCol}>
                <span className={styles.moduleTitle}>
                  {svc.lines.map((line, lIdx) => (
                    <React.Fragment key={lIdx}>
                      {line}
                      {lIdx < svc.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
