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

// 12-Band Equalizer Signal Bars connecting Circular Node and Processor
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
            {/* Soft Glow Filter for Moving Light Segments */}
            <filter id="segmentGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="pinGlintGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Linear Gradients for Elongated Signal Segments */}
            <linearGradient id="seg-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F0C8" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#00F0C8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#E0FFFF" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="seg-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2568D1" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="seg-green" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#7DFF32" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F0FDF4" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="seg-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#FD6BC4" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FDF2F8" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="seg-amber" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF864C" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#FFDA5C" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFFBEB" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="seg-violet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#A855F7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FAF5FF" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 1: DENSE INACTIVE PCB TRACES (Subdued dark graphite #12181C)
              Tightened gap: card inner edges at x=400 (left) and x=800 (right).
              Processor pins at x=506 (left) and x=694 (right).
             ════════════════════════════════════════════════════════════════════ */}
          <g className={styles.baseTracesGroup}>
            {/* ── QUADRANT 1: UPPER-LEFT (AI AUTOMATION) ── */}
            {/* Trace A1: Main bus into Left Pin 1 (y=296) */}
            <path d="M 400 130 H 450 Q 460 130 460 140 V 286 Q 460 296 470 296 H 506" className={styles.traceBase} />
            {/* Trace A2: Parallel into Left Pin 2 (y=308) */}
            <path d="M 400 150 H 430 Q 440 150 440 160 V 298 Q 440 308 450 308 H 506" className={styles.traceBase} />
            {/* Trace A3: Parallel into Left Pin 3 (y=320) */}
            <path d="M 400 170 H 420 Q 430 170 430 180 V 310 Q 430 320 440 320 H 506" className={styles.traceBase} />
            {/* Trace A4: Into Left Pin 4 (y=332) */}
            <path d="M 400 190 H 470 Q 480 190 480 200 V 322 Q 480 332 490 332 H 506" className={styles.traceBase} />
            {/* Trace A5: Route connecting into Top Pin 2 (x=552, y=266) */}
            <path d="M 400 115 H 490 Q 500 115 500 125 V 220 Q 500 230 510 230 H 542 Q 552 230 552 240 V 266" className={styles.traceBase} />
            {/* Trace A6: Stepped branch into Left Pin 5 (y=344) */}
            <path d="M 370 210 H 435 Q 445 210 445 220 V 250 Q 445 260 455 260 H 475 Q 485 260 485 270 V 334 Q 485 344 495 344 H 506" className={styles.traceBase} />
            {/* Trace A7: Fine nested trace into Left Pin 1 */}
            <path d="M 400 140 H 442 Q 452 140 452 150 V 278 Q 452 288 462 288 H 506" className={styles.traceBase} />
            {/* Trace A8: Auxiliary branch with test pad */}
            <path d="M 400 180 H 425 Q 435 180 435 190 V 240" className={styles.traceBase} />

            {/* ── QUADRANT 2: UPPER-RIGHT (WEB DEVELOPMENT) ── */}
            {/* Trace B1: Main bus into Right Pin 1 (y=296) */}
            <path d="M 800 130 H 750 Q 740 130 740 140 V 286 Q 740 296 730 296 H 694" className={styles.traceBase} />
            {/* Trace B2: Parallel into Right Pin 2 (y=308) */}
            <path d="M 800 150 H 770 Q 760 150 760 160 V 298 Q 760 308 750 308 H 694" className={styles.traceBase} />
            {/* Trace B3: Parallel into Right Pin 3 (y=320) */}
            <path d="M 800 170 H 780 Q 770 170 770 180 V 310 Q 770 320 760 320 H 694" className={styles.traceBase} />
            {/* Trace B4: Into Right Pin 4 (y=332) */}
            <path d="M 800 190 H 730 Q 720 190 720 200 V 322 Q 720 332 710 332 H 694" className={styles.traceBase} />
            {/* Trace B5: Route connecting into Top Pin 9 (x=648, y=266) */}
            <path d="M 800 115 H 710 Q 700 115 700 125 V 220 Q 700 230 690 230 H 658 Q 648 230 648 240 V 266" className={styles.traceBase} />
            {/* Trace B6: Stepped branch into Right Pin 5 (y=344) */}
            <path d="M 830 210 H 765 Q 755 210 755 220 V 250 Q 755 260 745 260 H 725 Q 715 260 715 270 V 334 Q 715 344 705 344 H 694" className={styles.traceBase} />
            {/* Trace B7: Fine nested trace into Right Pin 1 */}
            <path d="M 800 140 H 758 Q 748 140 748 150 V 278 Q 748 288 738 288 H 694" className={styles.traceBase} />
            {/* Trace B8: Auxiliary branch with test pad */}
            <path d="M 800 180 H 775 Q 765 180 765 190 V 240" className={styles.traceBase} />

            {/* ── QUADRANT 3: LOWER-LEFT (LOCAL SEO) ── */}
            {/* Trace C1: Main bus into Left Pin 11 (y=416) */}
            <path d="M 400 570 H 450 Q 460 570 460 560 V 426 Q 460 416 470 416 H 506" className={styles.traceBase} />
            {/* Trace C2: Parallel into Left Pin 10 (y=404) */}
            <path d="M 400 550 H 430 Q 440 550 440 540 V 414 Q 440 404 450 404 H 506" className={styles.traceBase} />
            {/* Trace C3: Parallel into Left Pin 9 (y=392) */}
            <path d="M 400 530 H 420 Q 430 530 430 520 V 402 Q 430 392 440 392 H 506" className={styles.traceBase} />
            {/* Trace C4: Into Left Pin 8 (y=380) */}
            <path d="M 400 510 H 470 Q 480 510 480 500 V 390 Q 480 380 490 380 H 506" className={styles.traceBase} />
            {/* Trace C5: Route connecting into Bottom Pin 2 (x=552, y=454) */}
            <path d="M 400 585 H 480 Q 490 585 490 575 V 490 Q 490 480 500 480 H 542 Q 552 480 552 470 V 454" className={styles.traceBase} />
            {/* Trace C6: Stepped branch into Left Pin 7 (y=368) */}
            <path d="M 370 490 H 435 Q 445 490 445 480 V 450 Q 445 440 455 440 H 475 Q 485 440 485 430 V 378 Q 485 368 495 368 H 506" className={styles.traceBase} />
            {/* Trace C7: Fine nested trace into Left Pin 11 */}
            <path d="M 400 560 H 442 Q 452 560 452 550 V 434 Q 452 424 462 424 H 506" className={styles.traceBase} />
            {/* Trace C8: Auxiliary branch with test pad */}
            <path d="M 400 520 H 435 Q 445 520 445 510 V 460" className={styles.traceBase} />

            {/* ── QUADRANT 4: LOWER-RIGHT (AI CHAT ASSISTANTS) ── */}
            {/* Trace D1: Main bus into Right Pin 11 (y=416) */}
            <path d="M 800 570 H 750 Q 740 570 740 560 V 426 Q 740 416 730 416 H 694" className={styles.traceBase} />
            {/* Trace D2: Parallel into Right Pin 10 (y=404) */}
            <path d="M 800 550 H 770 Q 760 550 760 540 V 414 Q 760 404 750 404 H 694" className={styles.traceBase} />
            {/* Trace D3: Parallel into Right Pin 9 (y=392) */}
            <path d="M 800 530 H 780 Q 770 530 770 520 V 402 Q 770 392 760 392 H 694" className={styles.traceBase} />
            {/* Trace D4: Into Right Pin 8 (y=380) */}
            <path d="M 800 510 H 730 Q 720 510 720 500 V 390 Q 720 380 710 380 H 694" className={styles.traceBase} />
            {/* Trace D5: Route connecting into Bottom Pin 9 (x=648, y=454) */}
            <path d="M 800 585 H 720 Q 710 585 710 575 V 490 Q 710 480 700 480 H 658 Q 648 480 648 470 V 454" className={styles.traceBase} />
            {/* Trace D6: Stepped branch into Right Pin 7 (y=368) */}
            <path d="M 830 490 H 765 Q 755 490 755 480 V 450 Q 755 440 745 440 H 725 Q 715 440 715 430 V 378 Q 715 368 705 368 H 694" className={styles.traceBase} />
            {/* Trace D7: Fine nested trace into Right Pin 11 */}
            <path d="M 800 560 H 758 Q 748 560 748 550 V 434 Q 748 424 738 424 H 694" className={styles.traceBase} />
            {/* Trace D8: Auxiliary branch with test pad */}
            <path d="M 800 520 H 765 Q 755 520 755 510 V 460" className={styles.traceBase} />

            {/* ── DOWNWARD MOTHERBOARD BUS LINES ── */}
            <path d="M 588 454 V 660" className={styles.traceBase} />
            <path d="M 600 454 V 675" className={styles.traceBase} />
            <path d="M 612 454 V 660" className={styles.traceBase} />

            {/* Solder Test Pads / Hardware Vias */}
            <circle cx="435" cy="240" r="2.5" className={styles.solderPad} />
            <circle cx="765" cy="240" r="2.5" className={styles.solderPad} />
            <circle cx="445" cy="460" r="2.5" className={styles.solderPad} />
            <circle cx="755" cy="460" r="2.5" className={styles.solderPad} />
            <circle cx="588" cy="660" r="2.5" className={styles.solderPad} />
            <circle cx="600" cy="675" r="2.5" className={styles.solderPad} />
            <circle cx="612" cy="660" r="2.5" className={styles.solderPad} />
          </g>

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 2: ELONGATED COLORED SIGNAL SEGMENTS (DATA STREAMS)
              Direction: Strictly FROM SERVICE CARD ORIGIN -> INWARD TO PROCESSOR
              Length: 40–50px illuminated line segments traveling at medium speed (1.9s–2.4s)
             ════════════════════════════════════════════════════════════════════ */}
          {/* Segment 1A: Cyan Pulse (AI Automation -> Left Pin 1) */}
          <path
            d="M 400 130 H 450 Q 460 130 460 140 V 286 Q 460 296 470 296 H 506"
            stroke="url(#seg-cyan)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.seg1}`}
            filter="url(#segmentGlow)"
          />
          {/* Segment 1B: Amber Pulse (AI Automation -> Left Pin 3) */}
          <path
            d="M 400 170 H 420 Q 430 170 430 180 V 310 Q 430 320 440 320 H 506"
            stroke="url(#seg-amber)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.seg2}`}
            filter="url(#segmentGlow)"
          />

          {/* Segment 2A: Electric Blue Pulse (Web Dev -> Right Pin 1) */}
          <path
            d="M 800 130 H 750 Q 740 130 740 140 V 286 Q 740 296 730 296 H 694"
            stroke="url(#seg-blue)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.seg3}`}
            filter="url(#segmentGlow)"
          />
          {/* Segment 2B: Cyan Pulse (Web Dev -> Top Pin 9) */}
          <path
            d="M 800 115 H 710 Q 700 115 700 125 V 220 Q 700 230 690 230 H 658 Q 648 230 648 240 V 266"
            stroke="url(#seg-cyan)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.seg4}`}
            filter="url(#segmentGlow)"
          />

          {/* Segment 3A: Emerald Green Pulse (Local SEO -> Left Pin 11) */}
          <path
            d="M 400 570 H 450 Q 460 570 460 560 V 426 Q 460 416 470 416 H 506"
            stroke="url(#seg-green)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.seg5}`}
            filter="url(#segmentGlow)"
          />
          {/* Segment 3B: Cyan Pulse (Local SEO -> Bottom Pin 2) */}
          <path
            d="M 400 585 H 480 Q 490 585 490 575 V 490 Q 490 480 500 480 H 542 Q 552 480 552 470 V 454"
            stroke="url(#seg-cyan)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.seg6}`}
            filter="url(#segmentGlow)"
          />

          {/* Segment 4A: Magenta Pulse (Chat Assistants -> Right Pin 11) */}
          <path
            d="M 800 570 H 750 Q 740 570 740 560 V 426 Q 740 416 730 416 H 694"
            stroke="url(#seg-magenta)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.seg7}`}
            filter="url(#segmentGlow)"
          />
          {/* Segment 4B: Violet Pulse (Chat Assistants -> Right Pin 9) */}
          <path
            d="M 800 530 H 780 Q 770 530 770 520 V 402 Q 770 392 760 392 H 694"
            stroke="url(#seg-violet)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.seg8}`}
            filter="url(#segmentGlow)"
          />

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 3: RESTRAINED PIN ARRIVAL GLINTS
             ════════════════════════════════════════════════════════════════════ */}
          <circle cx="506" cy="296" r="3" fill="#00F0C8" className={styles.pinGlint1} filter="url(#pinGlintGlow)" />
          <circle cx="694" cy="296" r="3" fill="#38BDF8" className={styles.pinGlint2} filter="url(#pinGlintGlow)" />
          <circle cx="506" cy="416" r="3" fill="#7DFF32" className={styles.pinGlint3} filter="url(#pinGlintGlow)" />
          <circle cx="694" cy="416" r="3" fill="#FD6BC4" className={styles.pinGlint4} filter="url(#pinGlintGlow)" />
        </svg>

        {/* ─── 04. Refined Upper Circular Orbital Node (Proportionate ~132px) ─── */}
        <div className={styles.nodeAbove} aria-hidden="true">
          <div className={styles.circularHousing}>
            {/* Concentric Precision Rings */}
            <div className={styles.housingOuterBevel} />
            <div className={styles.housingRingMid} />
            <div className={styles.housingRingInner} />

            {/* Rotating Delicate Cyan Scanning Arc */}
            <div className={styles.scanningArcWrapper}>
              <svg viewBox="0 0 120 120" width="120" height="120" className={styles.arcSvg}>
                <path
                  d="M 60 24 A 36 36 0 0 1 96 60"
                  stroke="#00F0C8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  filter="drop-shadow(0 0 5px #00F0C8)"
                />
              </svg>
            </div>

            {/* Recessed Dark Center Cavity */}
            <div className={styles.glassCavity}>
              {/* CLEARLY VISIBLE, UNOBSTRUCTED BLINKING CYAN CENTER POINT */}
              <div className={styles.cavityCoreDot} />
            </div>
          </div>

          {/* 12-Band Vertical Signal Bars Bridge */}
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

        {/* ─── 05. Enlarged Central AI Microprocessor Hardware Hub (~164px) ─── */}
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

          {/* Dark Matte Processor Physical Enclosure */}
          <div className={styles.chipBody}>
            {/* 4 Corner Fastener Studs */}
            <span className={styles.chipCornerTL} />
            <span className={styles.chipCornerTR} />
            <span className={styles.chipCornerBL} />
            <span className={styles.chipCornerBR} />

            {/* Recessed Dark Square Panel with Transparent Logo (NO WHITE SQUARE!) */}
            <div className={styles.chipCore}>
              <div className={styles.chipLogoWrapper}>
                <Image
                  src="/ayan-ai-studio-logo-transparent.png"
                  alt="Ayan AI Studio Core"
                  fill
                  sizes="68px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 06. Four Compact Charcoal Service Modules (Moved Inward) ─── */}
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
