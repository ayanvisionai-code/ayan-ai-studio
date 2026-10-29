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

interface CircuitRoute {
  id: string;
  source: "automation" | "webdev" | "localseo" | "assistants" | "node" | "bus";
  destPin: string;
  d: string;
  stroke: string;
  strokeWidth: number;
  duration: number;
  delay: number;
  type: "horizontal" | "vertical" | "bus";
}

const circuitRoutes: CircuitRoute[] = [
  // ── QUADRANT 1: UPPER-LEFT (AI AUTOMATION -> PROCESSOR) ──
  {
    id: "route-a1",
    source: "automation",
    destPin: "Left Pin 1 (y=296)",
    d: "M 400 125 H 445 Q 455 125 455 135 V 286 Q 455 296 465 296 H 506",
    stroke: "#00F0C8", // Cyan
    strokeWidth: 2.4,
    duration: 4.0,
    delay: 0.0,
    type: "horizontal",
  },
  {
    id: "route-a2",
    source: "automation",
    destPin: "Left Pin 2 (y=308)",
    d: "M 400 145 H 420 Q 430 145 430 155 V 298 Q 430 308 440 308 H 506",
    stroke: "#8EFFEA", // Turquoise / Mint
    strokeWidth: 2.2,
    duration: 4.2,
    delay: 1.1,
    type: "horizontal",
  },
  {
    id: "route-a3",
    source: "automation",
    destPin: "Left Pin 3 (y=320)",
    d: "M 400 165 H 400 Q 410 165 410 175 V 310 Q 410 320 420 320 H 506",
    stroke: "#FFDA5C", // Amber
    strokeWidth: 2.2,
    duration: 3.9,
    delay: 2.3,
    type: "horizontal",
  },
  {
    id: "route-a4",
    source: "automation",
    destPin: "Top Pin 1 (x=540, y=266)",
    d: "M 400 105 H 470 Q 480 105 480 115 V 215 Q 480 225 490 225 H 530 Q 540 225 540 235 V 266",
    stroke: "#38BDF8", // Electric Blue
    strokeWidth: 2.2,
    duration: 4.1,
    delay: 0.6,
    type: "horizontal",
  },
  {
    id: "route-a5",
    source: "automation",
    destPin: "Left Pin 4 (y=332)",
    d: "M 400 185 H 455 Q 465 185 465 195 V 322 Q 465 332 475 332 H 506",
    stroke: "#10B981", // Emerald Green
    strokeWidth: 2.2,
    duration: 4.3,
    delay: 1.7,
    type: "horizontal",
  },
  {
    id: "route-a6",
    source: "automation",
    destPin: "Left Pin 5 (y=344)",
    d: "M 375 205 H 430 Q 440 205 440 215 V 240 Q 440 250 450 250 H 470 Q 480 250 480 260 V 334 Q 480 344 490 344 H 506",
    stroke: "#7DFF32", // Muted Lime
    strokeWidth: 2.0,
    duration: 4.0,
    delay: 2.9,
    type: "horizontal",
  },
  {
    id: "route-a7",
    source: "automation",
    destPin: "Left Pin 1 nested (y=286)",
    d: "M 400 135 H 430 Q 440 135 440 145 V 276 Q 440 286 450 286 H 506",
    stroke: "#00F0C8", // Cyan
    strokeWidth: 2.0,
    duration: 4.2,
    delay: 3.5,
    type: "horizontal",
  },
  {
    id: "route-a8",
    source: "automation",
    destPin: "Left Pin 6 (y=356)",
    d: "M 400 175 H 415 Q 425 175 425 185 V 240 Q 425 250 435 250 H 475 Q 485 250 485 260 V 346 Q 485 356 495 356 H 506",
    stroke: "#A855F7", // Violet
    strokeWidth: 2.0,
    duration: 4.4,
    delay: 0.3,
    type: "horizontal",
  },

  // ── QUADRANT 2: UPPER-RIGHT (WEB DEVELOPMENT -> PROCESSOR) ──
  {
    id: "route-b1",
    source: "webdev",
    destPin: "Right Pin 1 (y=296)",
    d: "M 800 125 H 755 Q 745 125 745 135 V 286 Q 745 296 735 296 H 694",
    stroke: "#38BDF8", // Electric Blue
    strokeWidth: 2.4,
    duration: 4.1,
    delay: 0.8,
    type: "horizontal",
  },
  {
    id: "route-b2",
    source: "webdev",
    destPin: "Right Pin 2 (y=308)",
    d: "M 800 145 H 780 Q 770 145 770 155 V 298 Q 770 308 760 308 H 694",
    stroke: "#00F0C8", // Cyan
    strokeWidth: 2.2,
    duration: 4.0,
    delay: 2.0,
    type: "horizontal",
  },
  {
    id: "route-b3",
    source: "webdev",
    destPin: "Right Pin 3 (y=320)",
    d: "M 800 165 H 800 Q 790 165 790 175 V 310 Q 790 320 780 320 H 694",
    stroke: "#10B981", // Emerald Green
    strokeWidth: 2.2,
    duration: 4.3,
    delay: 3.1,
    type: "horizontal",
  },
  {
    id: "route-b4",
    source: "webdev",
    destPin: "Top Pin 11 (x=660, y=266)",
    d: "M 800 105 H 730 Q 720 105 720 115 V 215 Q 720 225 710 225 H 670 Q 660 225 660 235 V 266",
    stroke: "#FFDA5C", // Amber
    strokeWidth: 2.2,
    duration: 3.9,
    delay: 1.4,
    type: "horizontal",
  },
  {
    id: "route-b5",
    source: "webdev",
    destPin: "Right Pin 4 (y=332)",
    d: "M 800 185 H 745 Q 735 185 735 195 V 322 Q 735 332 725 332 H 694",
    stroke: "#FD6BC4", // Magenta
    strokeWidth: 2.2,
    duration: 4.2,
    delay: 2.6,
    type: "horizontal",
  },
  {
    id: "route-b6",
    source: "webdev",
    destPin: "Right Pin 5 (y=344)",
    d: "M 825 205 H 770 Q 760 205 760 215 V 240 Q 760 250 750 250 H 730 Q 720 250 720 260 V 334 Q 720 344 710 344 H 694",
    stroke: "#8EFFEA", // Turquoise
    strokeWidth: 2.0,
    duration: 4.4,
    delay: 0.2,
    type: "horizontal",
  },
  {
    id: "route-b7",
    source: "webdev",
    destPin: "Right Pin 1 nested (y=286)",
    d: "M 800 135 H 770 Q 760 135 760 145 V 276 Q 760 286 750 286 H 694",
    stroke: "#38BDF8", // Electric Blue
    strokeWidth: 2.0,
    duration: 4.0,
    delay: 3.7,
    type: "horizontal",
  },
  {
    id: "route-b8",
    source: "webdev",
    destPin: "Right Pin 6 (y=356)",
    d: "M 800 175 H 785 Q 775 175 775 185 V 240 Q 775 250 765 250 H 725 Q 715 250 715 260 V 346 Q 715 356 705 356 H 694",
    stroke: "#7DFF32", // Muted Lime
    strokeWidth: 2.0,
    duration: 4.2,
    delay: 1.8,
    type: "horizontal",
  },

  // ── QUADRANT 3: LOWER-LEFT (LOCAL SEO -> PROCESSOR) ──
  {
    id: "route-c1",
    source: "localseo",
    destPin: "Left Pin 11 (y=416)",
    d: "M 400 575 H 445 Q 455 575 455 565 V 426 Q 455 416 465 416 H 506",
    stroke: "#7DFF32", // Muted Lime
    strokeWidth: 2.4,
    duration: 4.0,
    delay: 0.4,
    type: "horizontal",
  },
  {
    id: "route-c2",
    source: "localseo",
    destPin: "Left Pin 10 (y=404)",
    d: "M 400 555 H 420 Q 430 555 430 545 V 414 Q 430 404 440 404 H 506",
    stroke: "#00F0C8", // Cyan
    strokeWidth: 2.2,
    duration: 4.2,
    delay: 1.6,
    type: "horizontal",
  },
  {
    id: "route-c3",
    source: "localseo",
    destPin: "Left Pin 9 (y=392)",
    d: "M 400 535 H 400 Q 410 535 410 525 V 402 Q 410 392 420 392 H 506",
    stroke: "#8EFFEA", // Turquoise
    strokeWidth: 2.2,
    duration: 4.1,
    delay: 2.8,
    type: "horizontal",
  },
  {
    id: "route-c4",
    source: "localseo",
    destPin: "Bottom Pin 1 (x=540, y=454)",
    d: "M 400 595 H 465 Q 475 595 475 585 V 505 Q 475 495 485 495 H 530 Q 540 495 540 485 V 454",
    stroke: "#FFDA5C", // Amber
    strokeWidth: 2.2,
    duration: 4.3,
    delay: 0.9,
    type: "horizontal",
  },
  {
    id: "route-c5",
    source: "localseo",
    destPin: "Left Pin 8 (y=380)",
    d: "M 400 515 H 455 Q 465 515 465 505 V 390 Q 465 380 475 380 H 506",
    stroke: "#10B981", // Emerald Green
    strokeWidth: 2.2,
    duration: 3.9,
    delay: 2.1,
    type: "horizontal",
  },
  {
    id: "route-c6",
    source: "localseo",
    destPin: "Left Pin 7 (y=368)",
    d: "M 375 495 H 430 Q 440 495 440 485 V 470 Q 440 460 450 460 H 470 Q 480 460 480 450 V 378 Q 480 368 490 368 H 506",
    stroke: "#38BDF8", // Electric Blue
    strokeWidth: 2.0,
    duration: 4.2,
    delay: 3.3,
    type: "horizontal",
  },
  {
    id: "route-c7",
    source: "localseo",
    destPin: "Left Pin 11 nested (y=424)",
    d: "M 400 565 H 430 Q 440 565 440 555 V 434 Q 440 424 450 424 H 506",
    stroke: "#00F0C8", // Cyan
    strokeWidth: 2.0,
    duration: 4.0,
    delay: 0.1,
    type: "horizontal",
  },
  {
    id: "route-c8",
    source: "localseo",
    destPin: "Left Pin 6 (y=356)",
    d: "M 400 525 H 415 Q 425 525 425 515 V 470 Q 425 460 435 460 H 475 Q 485 460 485 450 V 366 Q 485 356 495 356 H 506",
    stroke: "#FD6BC4", // Magenta
    strokeWidth: 2.0,
    duration: 4.4,
    delay: 2.4,
    type: "horizontal",
  },

  // ── QUADRANT 4: LOWER-RIGHT (CHAT ASSISTANTS -> PROCESSOR) ──
  {
    id: "route-d1",
    source: "assistants",
    destPin: "Right Pin 11 (y=416)",
    d: "M 800 575 H 755 Q 745 575 745 565 V 426 Q 745 416 735 416 H 694",
    stroke: "#FD6BC4", // Magenta
    strokeWidth: 2.4,
    duration: 4.1,
    delay: 1.2,
    type: "horizontal",
  },
  {
    id: "route-d2",
    source: "assistants",
    destPin: "Right Pin 10 (y=404)",
    d: "M 800 555 H 780 Q 770 555 770 545 V 414 Q 770 404 760 404 H 694",
    stroke: "#A855F7", // Violet
    strokeWidth: 2.2,
    duration: 4.0,
    delay: 2.5,
    type: "horizontal",
  },
  {
    id: "route-d3",
    source: "assistants",
    destPin: "Right Pin 9 (y=392)",
    d: "M 800 535 H 800 Q 790 535 790 525 V 402 Q 790 392 780 392 H 694",
    stroke: "#00F0C8", // Cyan
    strokeWidth: 2.2,
    duration: 4.3,
    delay: 3.6,
    type: "horizontal",
  },
  {
    id: "route-d4",
    source: "assistants",
    destPin: "Bottom Pin 11 (x=660, y=454)",
    d: "M 800 595 H 735 Q 725 595 725 585 V 505 Q 725 495 715 495 H 670 Q 660 495 660 485 V 454",
    stroke: "#38BDF8", // Electric Blue
    strokeWidth: 2.2,
    duration: 3.9,
    delay: 0.5,
    type: "horizontal",
  },
  {
    id: "route-d5",
    source: "assistants",
    destPin: "Right Pin 8 (y=380)",
    d: "M 800 515 H 745 Q 735 515 735 505 V 390 Q 735 380 725 380 H 694",
    stroke: "#FFDA5C", // Amber
    strokeWidth: 2.2,
    duration: 4.2,
    delay: 1.9,
    type: "horizontal",
  },
  {
    id: "route-d6",
    source: "assistants",
    destPin: "Right Pin 7 (y=368)",
    d: "M 825 495 H 770 Q 760 495 760 485 V 470 Q 760 460 750 460 H 730 Q 720 460 720 450 V 378 Q 720 368 710 368 H 694",
    stroke: "#8EFFEA", // Turquoise
    strokeWidth: 2.0,
    duration: 4.4,
    delay: 3.0,
    type: "horizontal",
  },
  {
    id: "route-d7",
    source: "assistants",
    destPin: "Right Pin 11 nested (y=424)",
    d: "M 800 565 H 770 Q 760 565 760 555 V 434 Q 760 424 750 424 H 694",
    stroke: "#10B981", // Emerald Green
    strokeWidth: 2.0,
    duration: 4.0,
    delay: 0.7,
    type: "horizontal",
  },
  {
    id: "route-d8",
    source: "assistants",
    destPin: "Right Pin 6 (y=356)",
    d: "M 800 525 H 785 Q 775 525 775 515 V 470 Q 775 460 765 460 H 725 Q 715 460 715 450 V 366 Q 715 356 705 356 H 694",
    stroke: "#7DFF32", // Muted Lime
    strokeWidth: 2.0,
    duration: 4.2,
    delay: 2.2,
    type: "horizontal",
  },

  // ── 9 VERTICAL TRACES (UPPER CIRCULAR NODE -> CHIP TOP PINS) ──
  {
    id: "route-v1",
    source: "node",
    destPin: "Top Pin 2 (x=552, y=268)",
    d: "M 552 154 V 268",
    stroke: "#00F0C8", // Cyan
    strokeWidth: 2.2,
    duration: 2.0,
    delay: 0.0,
    type: "vertical",
  },
  {
    id: "route-v2",
    source: "node",
    destPin: "Top Pin 3 (x=564, y=268)",
    d: "M 564 154 V 268",
    stroke: "#8EFFEA", // Turquoise
    strokeWidth: 2.2,
    duration: 1.9,
    delay: 0.45,
    type: "vertical",
  },
  {
    id: "route-v3",
    source: "node",
    destPin: "Top Pin 4 (x=576, y=268)",
    d: "M 576 154 V 268",
    stroke: "#38BDF8", // Electric Blue
    strokeWidth: 2.2,
    duration: 2.1,
    delay: 0.9,
    type: "vertical",
  },
  {
    id: "route-v4",
    source: "node",
    destPin: "Top Pin 5 (x=588, y=268)",
    d: "M 588 154 V 268",
    stroke: "#FFDA5C", // Amber
    strokeWidth: 2.2,
    duration: 2.0,
    delay: 1.35,
    type: "vertical",
  },
  {
    id: "route-v5",
    source: "node",
    destPin: "Top Pin 6 (x=600, y=268)",
    d: "M 600 154 V 268",
    stroke: "#00F0C8", // Cyan
    strokeWidth: 2.4,
    duration: 1.8,
    delay: 0.2,
    type: "vertical",
  },
  {
    id: "route-v6",
    source: "node",
    destPin: "Top Pin 7 (x=612, y=268)",
    d: "M 612 154 V 268",
    stroke: "#10B981", // Emerald Green
    strokeWidth: 2.2,
    duration: 2.2,
    delay: 0.7,
    type: "vertical",
  },
  {
    id: "route-v7",
    source: "node",
    destPin: "Top Pin 8 (x=624, y=268)",
    d: "M 624 154 V 268",
    stroke: "#7DFF32", // Muted Lime
    strokeWidth: 2.2,
    duration: 1.9,
    delay: 1.15,
    type: "vertical",
  },
  {
    id: "route-v8",
    source: "node",
    destPin: "Top Pin 9 (x=636, y=268)",
    d: "M 636 154 V 268",
    stroke: "#FD6BC4", // Magenta
    strokeWidth: 2.2,
    duration: 2.1,
    delay: 1.6,
    type: "vertical",
  },
  {
    id: "route-v9",
    source: "node",
    destPin: "Top Pin 10 (x=648, y=268)",
    d: "M 648 154 V 268",
    stroke: "#A855F7", // Violet
    strokeWidth: 2.2,
    duration: 2.0,
    delay: 0.35,
    type: "vertical",
  },

  // ── DOWNWARD MOTHERBOARD BUS LINES ──
  {
    id: "route-mb1",
    source: "bus",
    destPin: "Bottom Pin 5 (x=588, y=454 to 670)",
    d: "M 588 454 V 670",
    stroke: "#00F0C8", // Cyan
    strokeWidth: 2.2,
    duration: 4.2,
    delay: 0.5,
    type: "bus",
  },
  {
    id: "route-mb2",
    source: "bus",
    destPin: "Bottom Pin 6 (x=600, y=454 to 685)",
    d: "M 600 454 V 685",
    stroke: "#38BDF8", // Electric Blue
    strokeWidth: 2.2,
    duration: 4.0,
    delay: 1.9,
    type: "bus",
  },
  {
    id: "route-mb3",
    source: "bus",
    destPin: "Bottom Pin 7 (x=612, y=454 to 670)",
    d: "M 612 454 V 670",
    stroke: "#FFDA5C", // Amber
    strokeWidth: 2.2,
    duration: 4.4,
    delay: 3.3,
    type: "bus",
  },
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
            {circuitRoutes.map((route) => {
              const baseClass =
                route.type === "vertical"
                  ? styles.traceBaseVert
                  : styles.traceBase;
              return (
                <path
                  key={`base-${route.id}`}
                  d={route.d}
                  className={baseClass}
                />
              );
            })}

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
              LAYER 2: 44 CONCURRENT ELONGATED MOVING LIGHT SEGMENTS
              Direction: Strictly FROM SERVICE CARDS / NODE -> INWARD TO PROCESSOR
              Every single circuit path periodically carries a visible light signal.
             ════════════════════════════════════════════════════════════════════ */}
          <g className={styles.activeSignalsGroup}>
            {circuitRoutes.map((route) => {
              let animClass = styles.signalSegment;
              if (route.type === "vertical") animClass = styles.signalSegmentVert;
              else if (route.type === "bus") animClass = styles.signalSegmentBus;

              return (
                <path
                  key={`sig-${route.id}`}
                  d={route.d}
                  stroke={route.stroke}
                  strokeWidth={route.strokeWidth}
                  strokeLinecap="round"
                  className={animClass}
                  style={{
                    animationDuration: `${route.duration}s`,
                    animationDelay: `${route.delay}s`,
                  }}
                  filter="url(#segmentGlow)"
                />
              );
            })}
          </g>
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
