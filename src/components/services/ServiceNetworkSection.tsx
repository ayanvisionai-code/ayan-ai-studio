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

// 12-Band Equalizer Signal Bars bridging Circular Node and Processor
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
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Linear Gradients for Elongated Signal Segments */}
            <linearGradient id="seg-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F0C8" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#00F0C8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#E0FFFF" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="seg-mint" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#19CBAC" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#8EFFEA" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="seg-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2568D1" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="seg-green" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#7DFF32" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F0FDF4" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="seg-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#FD6BC4" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FDF2F8" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="seg-amber" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF864C" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#FFDA5C" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFFBEB" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="seg-violet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#A855F7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FAF5FF" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="seg-vert-cyan" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0FB6B8" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#00F0C8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="seg-vert-blue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2568D1" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#40DDE1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="seg-vert-magenta" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9333EA" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#FD6BC4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 1: DENSE INACTIVE PCB TRACES (Dark graphite #12181C)
              Full bridge from service cards (x=400, x=800) into processor pins.
              Continuous vertical tracks from circular node (y=130) to top pins.
             ════════════════════════════════════════════════════════════════════ */}
          <g className={styles.baseTracesGroup}>
            {/* ── QUADRANT 1: UPPER-LEFT (AI AUTOMATION) ── */}
            {/* Route A1: Main bus into Left Pin 1 (y=296) */}
            <path d="M 400 125 H 445 Q 455 125 455 135 V 286 Q 455 296 465 296 H 506" className={styles.traceBase} />
            {/* Route A2: Parallel into Left Pin 2 (y=308) */}
            <path d="M 400 145 H 420 Q 430 145 430 155 V 298 Q 430 308 440 308 H 506" className={styles.traceBase} />
            {/* Route A3: Parallel into Left Pin 3 (y=320) */}
            <path d="M 400 165 H 400 Q 410 165 410 175 V 310 Q 410 320 420 320 H 506" className={styles.traceBase} />
            {/* Route A4: Connecting to Top Pin 1 (x=540, y=266) */}
            <path d="M 400 105 H 470 Q 480 105 480 115 V 215 Q 480 225 490 225 H 530 Q 540 225 540 235 V 266" className={styles.traceBase} />
            {/* Route A5: Into Left Pin 4 (y=332) */}
            <path d="M 400 185 H 455 Q 465 185 465 195 V 322 Q 465 332 475 332 H 506" className={styles.traceBase} />
            {/* Route A6: Stepped branch into Left Pin 5 (y=344) */}
            <path d="M 375 205 H 430 Q 440 205 440 215 V 240 Q 440 250 450 250 H 470 Q 480 250 480 260 V 334 Q 480 344 490 344 H 506" className={styles.traceBase} />
            {/* Route A7: Fine nested trace into Left Pin 1 */}
            <path d="M 400 135 H 430 Q 440 135 440 145 V 276 Q 440 286 450 286 H 506" className={styles.traceBase} />
            {/* Route A8: Auxiliary branch with test pad */}
            <path d="M 400 175 H 415 Q 425 175 425 185 V 240" className={styles.traceBase} />

            {/* ── QUADRANT 2: UPPER-RIGHT (WEB DEVELOPMENT) ── */}
            {/* Route B1: Main bus into Right Pin 1 (y=296) */}
            <path d="M 800 125 H 755 Q 745 125 745 135 V 286 Q 745 296 735 296 H 694" className={styles.traceBase} />
            {/* Route B2: Parallel into Right Pin 2 (y=308) */}
            <path d="M 800 145 H 780 Q 770 145 770 155 V 298 Q 770 308 760 308 H 694" className={styles.traceBase} />
            {/* Route B3: Parallel into Right Pin 3 (y=320) */}
            <path d="M 800 165 H 800 Q 790 165 790 175 V 310 Q 790 320 780 320 H 694" className={styles.traceBase} />
            {/* Route B4: Connecting to Top Pin 11 (x=660, y=266) */}
            <path d="M 800 105 H 730 Q 720 105 720 115 V 215 Q 720 225 710 225 H 670 Q 660 225 660 235 V 266" className={styles.traceBase} />
            {/* Route B5: Into Right Pin 4 (y=332) */}
            <path d="M 800 185 H 745 Q 735 185 735 195 V 322 Q 735 332 725 332 H 694" className={styles.traceBase} />
            {/* Route B6: Stepped branch into Right Pin 5 (y=344) */}
            <path d="M 825 205 H 770 Q 760 205 760 215 V 240 Q 760 250 750 250 H 730 Q 720 250 720 260 V 334 Q 720 344 710 344 H 694" className={styles.traceBase} />
            {/* Route B7: Fine nested trace into Right Pin 1 */}
            <path d="M 800 135 H 770 Q 760 135 760 145 V 276 Q 760 286 750 286 H 694" className={styles.traceBase} />
            {/* Route B8: Auxiliary branch with test pad */}
            <path d="M 800 175 H 785 Q 775 175 775 185 V 240" className={styles.traceBase} />

            {/* ── QUADRANT 3: LOWER-LEFT (LOCAL SEO) ── */}
            {/* Route C1: Main bus into Left Pin 11 (y=416) */}
            <path d="M 400 575 H 445 Q 455 575 455 565 V 426 Q 455 416 465 416 H 506" className={styles.traceBase} />
            {/* Route C2: Parallel into Left Pin 10 (y=404) */}
            <path d="M 400 555 H 420 Q 430 555 430 545 V 414 Q 430 404 440 404 H 506" className={styles.traceBase} />
            {/* Route C3: Parallel into Left Pin 9 (y=392) */}
            <path d="M 400 535 H 400 Q 410 535 410 525 V 402 Q 410 392 420 392 H 506" className={styles.traceBase} />
            {/* Route C4: Connecting to Bottom Pin 1 (x=540, y=454) */}
            <path d="M 400 595 H 465 Q 475 595 475 585 V 505 Q 475 495 485 495 H 530 Q 540 495 540 485 V 454" className={styles.traceBase} />
            {/* Route C5: Into Left Pin 8 (y=380) */}
            <path d="M 400 515 H 455 Q 465 515 465 505 V 390 Q 465 380 475 380 H 506" className={styles.traceBase} />
            {/* Route C6: Stepped branch into Left Pin 7 (y=368) */}
            <path d="M 375 495 H 430 Q 440 495 440 485 V 470 Q 440 460 450 460 H 470 Q 480 460 480 450 V 378 Q 480 368 490 368 H 506" className={styles.traceBase} />
            {/* Route C7: Fine nested trace into Left Pin 11 */}
            <path d="M 400 565 H 430 Q 440 565 440 555 V 434 Q 440 424 450 424 H 506" className={styles.traceBase} />
            {/* Route C8: Auxiliary branch with test pad */}
            <path d="M 400 525 H 415 Q 425 525 425 515 V 470" className={styles.traceBase} />

            {/* ── QUADRANT 4: LOWER-RIGHT (AI CHAT ASSISTANTS) ── */}
            {/* Route D1: Main bus into Right Pin 11 (y=416) */}
            <path d="M 800 575 H 755 Q 745 575 745 565 V 426 Q 745 416 735 416 H 694" className={styles.traceBase} />
            {/* Route D2: Parallel into Right Pin 10 (y=404) */}
            <path d="M 800 555 H 780 Q 770 555 770 545 V 414 Q 770 404 760 404 H 694" className={styles.traceBase} />
            {/* Route D3: Parallel into Right Pin 9 (y=392) */}
            <path d="M 800 535 H 800 Q 790 535 790 525 V 402 Q 790 392 780 392 H 694" className={styles.traceBase} />
            {/* Route D4: Connecting to Bottom Pin 11 (x=660, y=454) */}
            <path d="M 800 595 H 735 Q 725 595 725 585 V 505 Q 725 495 715 495 H 670 Q 660 495 660 485 V 454" className={styles.traceBase} />
            {/* Route D5: Into Right Pin 8 (y=380) */}
            <path d="M 800 515 H 745 Q 735 515 735 505 V 390 Q 735 380 725 380 H 694" className={styles.traceBase} />
            {/* Route D6: Stepped branch into Right Pin 7 (y=368) */}
            <path d="M 825 495 H 770 Q 760 495 760 485 V 470 Q 760 460 750 460 H 730 Q 720 460 720 450 V 378 Q 720 368 710 368 H 694" className={styles.traceBase} />
            {/* Route D7: Fine nested trace into Right Pin 11 */}
            <path d="M 800 565 H 770 Q 760 565 760 555 V 434 Q 760 424 750 424 H 694" className={styles.traceBase} />
            {/* Route D8: Auxiliary branch with test pad */}
            <path d="M 800 525 H 785 Q 775 525 775 515 V 470" className={styles.traceBase} />

            {/* ── 9 CONTINUOUS VERTICAL TRACES (CIRCULAR NODE -> CHIP TOP PINS) ── */}
            <path d="M 552 130 V 266" className={styles.traceBase} />
            <path d="M 564 130 V 266" className={styles.traceBase} />
            <path d="M 576 130 V 266" className={styles.traceBase} />
            <path d="M 588 130 V 266" className={styles.traceBase} />
            <path d="M 600 130 V 266" className={styles.traceBase} />
            <path d="M 612 130 V 266" className={styles.traceBase} />
            <path d="M 624 130 V 266" className={styles.traceBase} />
            <path d="M 636 130 V 266" className={styles.traceBase} />
            <path d="M 648 130 V 266" className={styles.traceBase} />

            {/* ── DOWNWARD MOTHERBOARD BUS LINES ── */}
            <path d="M 588 454 V 670" className={styles.traceBase} />
            <path d="M 600 454 V 685" className={styles.traceBase} />
            <path d="M 612 454 V 670" className={styles.traceBase} />

            {/* Solder Test Pads / Hardware Vias */}
            <circle cx="425" cy="240" r="2.5" className={styles.solderPad} />
            <circle cx="775" cy="240" r="2.5" className={styles.solderPad} />
            <circle cx="425" cy="470" r="2.5" className={styles.solderPad} />
            <circle cx="775" cy="470" r="2.5" className={styles.solderPad} />
            <circle cx="588" cy="670" r="2.5" className={styles.solderPad} />
            <circle cx="600" cy="685" r="2.5" className={styles.solderPad} />
            <circle cx="612" cy="670" r="2.5" className={styles.solderPad} />
          </g>

          {/* ════════════════════════════════════════════════════════════════════
              LAYER 2: 20 CONCURRENT ELONGATED MOVING LIGHT SEGMENTS
              Direction: Strictly FROM SERVICE CARDS / NODE -> INWARD TO PROCESSOR
              Length: 45–60px illuminated segments traveling at medium speed (1.8s–2.3s)
             ════════════════════════════════════════════════════════════════════ */}
          {/* ── QUADRANT 1 ACTIVE SIGNALS (AI AUTOMATION -> PROCESSOR) ── */}
          <path
            d="M 400 125 H 445 Q 455 125 455 135 V 286 Q 455 296 465 296 H 506"
            stroke="url(#seg-cyan)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH1}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 400 145 H 420 Q 430 145 430 155 V 298 Q 430 308 440 308 H 506"
            stroke="url(#seg-mint)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH2}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 400 165 H 400 Q 410 165 410 175 V 310 Q 410 320 420 320 H 506"
            stroke="url(#seg-amber)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH3}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 400 105 H 470 Q 480 105 480 115 V 215 Q 480 225 490 225 H 530 Q 540 225 540 235 V 266"
            stroke="url(#seg-blue)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH4}`}
            filter="url(#segmentGlow)"
          />

          {/* ── QUADRANT 2 ACTIVE SIGNALS (WEB DEV -> PROCESSOR) ── */}
          <path
            d="M 800 125 H 755 Q 745 125 745 135 V 286 Q 745 296 735 296 H 694"
            stroke="url(#seg-blue)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH5}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 800 145 H 780 Q 770 145 770 155 V 298 Q 770 308 760 308 H 694"
            stroke="url(#seg-cyan)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH6}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 800 165 H 800 Q 790 165 790 175 V 310 Q 790 320 780 320 H 694"
            stroke="url(#seg-green)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH7}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 800 105 H 730 Q 720 105 720 115 V 215 Q 720 225 710 225 H 670 Q 660 225 660 235 V 266"
            stroke="url(#seg-amber)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH8}`}
            filter="url(#segmentGlow)"
          />

          {/* ── QUADRANT 3 ACTIVE SIGNALS (LOCAL SEO -> PROCESSOR) ── */}
          <path
            d="M 400 575 H 445 Q 455 575 455 565 V 426 Q 455 416 465 416 H 506"
            stroke="url(#seg-green)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH9}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 400 555 H 420 Q 430 555 430 545 V 414 Q 430 404 440 404 H 506"
            stroke="url(#seg-cyan)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH10}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 400 535 H 400 Q 410 535 410 525 V 402 Q 410 392 420 392 H 506"
            stroke="url(#seg-mint)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH11}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 400 595 H 465 Q 475 595 475 585 V 505 Q 475 495 485 495 H 530 Q 540 495 540 485 V 454"
            stroke="url(#seg-amber)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH12}`}
            filter="url(#segmentGlow)"
          />

          {/* ── QUADRANT 4 ACTIVE SIGNALS (CHAT ASSISTANTS -> PROCESSOR) ── */}
          <path
            d="M 800 575 H 755 Q 745 575 745 565 V 426 Q 745 416 735 416 H 694"
            stroke="url(#seg-magenta)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH13}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 800 555 H 780 Q 770 555 770 545 V 414 Q 770 404 760 404 H 694"
            stroke="url(#seg-violet)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH14}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 800 535 H 800 Q 790 535 790 525 V 402 Q 790 392 780 392 H 694"
            stroke="url(#seg-cyan)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH15}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 800 595 H 735 Q 725 595 725 585 V 505 Q 725 495 715 495 H 670 Q 660 495 660 485 V 454"
            stroke="url(#seg-blue)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegment} ${styles.segH16}`}
            filter="url(#segmentGlow)"
          />

          {/* ── 4 ACTIVE DOWNWARD SIGNALS (CIRCULAR NODE -> CHIP TOP PINS) ── */}
          <path
            d="M 564 130 V 266"
            stroke="url(#seg-vert-cyan)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegmentVert} ${styles.segV1}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 588 130 V 266"
            stroke="url(#seg-amber)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegmentVert} ${styles.segV2}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 612 130 V 266"
            stroke="url(#seg-vert-blue)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegmentVert} ${styles.segV3}`}
            filter="url(#segmentGlow)"
          />
          <path
            d="M 636 130 V 266"
            stroke="url(#seg-vert-magenta)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className={`${styles.signalSegmentVert} ${styles.segV4}`}
            filter="url(#segmentGlow)"
          />
        </svg>

        {/* ─── 04. Refined Upper Circular Orbital Node (~132px) ─── */}
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

          {/* 12-Band Vertical Signal Bars Overlay */}
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
