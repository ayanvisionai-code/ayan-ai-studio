"use client";

import React from "react";
import styles from "./ServiceShowcaseVisuals.module.css";

/**
 * Service 02: High-Converting Web Development Visual
 * Architectural 3D Layered Browser Wireframe with conversion streams
 */
export function WebArchitectureVisual() {
  return (
    <div className={styles.visualContainer} aria-hidden="true">
      <div className={styles.ambientGlowBlue} />
      <div className={styles.browserFrame}>
        {/* Browser Top Chrome */}
        <div className={styles.browserHeader}>
          <div className={styles.windowControls}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <div className={styles.addressBar}>
            <span className={styles.lockIcon}>🔒</span>
            <span className={styles.addressText}>ayanai.studio/enterprise-system</span>
          </div>
        </div>

        {/* Browser Viewport Content */}
        <div className={styles.browserCanvas}>
          {/* Wireframe Hero Strip */}
          <div className={styles.canvasHero}>
            <div className={styles.canvasBadge} />
            <div className={styles.canvasHeading} />
            <div className={styles.canvasSubheading} />
            <div className={styles.canvasBtnRow}>
              <div className={styles.canvasPrimaryBtn} />
              <div className={styles.canvasSecondaryBtn} />
            </div>
          </div>

          {/* Floating Metric Badge 1: 99/100 Lighthouse Performance */}
          <div className={`${styles.floatingMetric} ${styles.metricSpeed}`}>
            <span className={styles.metricVal}>99</span>
            <div className={styles.metricLabelCol}>
              <span className={styles.metricTitle}>Lighthouse Score</span>
              <span className={styles.metricSub}>Sub-second TTI</span>
            </div>
          </div>

          {/* Floating Conversion Card 2: +184% Pipeline Conversion */}
          <div className={`${styles.floatingMetric} ${styles.metricConversion}`}>
            <span className={styles.conversionTag}>HIGH-CONVERTING</span>
            <span className={styles.conversionNum}>+184%</span>
            <span className={styles.conversionLabel}>Lead Capture Velocity</span>
          </div>

          {/* Architectural Grid Lines */}
          <div className={styles.gridOverlay}>
            <span className={styles.gridLineV} />
            <span className={styles.gridLineV} />
            <span className={styles.gridLineH} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Service 03: Local SEO Visual
 * Geographic Telemetry & Local Authority Radar Matrix
 */
export function LocalSeoVisual() {
  return (
    <div className={styles.visualContainer} aria-hidden="true">
      <div className={styles.ambientGlowGreen} />
      <div className={styles.radarMatrix}>
        {/* Concentric Radar Rings */}
        <div className={styles.radarRingOuter} />
        <div className={styles.radarRingMid} />
        <div className={styles.radarRingInner} />

        {/* Sweeping Radar Scanner Line */}
        <div className={styles.radarSweepLine} />

        {/* Central Geographic Hub Pin */}
        <div className={styles.geoHubPin}>
          <div className={styles.pinHead}>
            <div className={styles.pinCoreDot} />
          </div>
          <div className={styles.pinPulseRipple} />
        </div>

        {/* Local Map Pack Rank Badges */}
        <div className={`${styles.geoNode} ${styles.nodeRank1}`}>
          <span className={styles.rankNum}>#1</span>
          <span className={styles.nodeLabel}>Map Pack Leader</span>
        </div>

        <div className={`${styles.geoNode} ${styles.nodeSignals}`}>
          <span className={styles.signalIcon}>✦</span>
          <span className={styles.nodeLabel}>Citation Consistency</span>
        </div>

        <div className={`${styles.geoNode} ${styles.nodeAuthority}`}>
          <span className={styles.signalIcon}>📍</span>
          <span className={styles.nodeLabel}>Geo Proximity Signals</span>
        </div>

        {/* Radial Axis Coordinates */}
        <div className={styles.radarCrosshairH} />
        <div className={styles.radarCrosshairV} />
      </div>
    </div>
  );
}

/**
 * Service 04: AI Chat Assistants Visual
 * Neural Conversational Intelligence & Triage Matrix
 */
export function ChatAssistantsVisual() {
  return (
    <div className={styles.visualContainer} aria-hidden="true">
      <div className={styles.ambientGlowViolet} />
      <div className={styles.dialogueMatrix}>
        {/* Dialogue Bubble 1: Incoming Customer Inquiry */}
        <div className={styles.chatBubbleUser}>
          <div className={styles.bubbleUserAvatar}>👤</div>
          <div className={styles.bubbleUserContent}>
            <span className={styles.bubbleUserText}>
              Can you integrate with our HubSpot CRM and qualify inbound enterprise leads?
            </span>
          </div>
        </div>

        {/* Neural AI Processing Synapse Node */}
        <div className={styles.neuralSynapse}>
          <div className={styles.synapsePill}>
            <span className={styles.synapsePulse} />
            <span className={styles.synapseText}>AI Autonomous Triage &amp; Verification</span>
          </div>
        </div>

        {/* Dialogue Bubble 2: Autonomous Assistant Response */}
        <div className={styles.chatBubbleAi}>
          <div className={styles.bubbleAiAvatar}>✦</div>
          <div className={styles.bubbleAiContent}>
            <div className={styles.bubbleAiHeader}>
              <span className={styles.aiName}>AYAN ASSISTANT</span>
              <span className={styles.aiStatusBadge}>24/7 ACTIVE</span>
            </div>
            <p className={styles.bubbleAiText}>
              Yes. We sync lead parameters directly into your HubSpot pipeline, verify company criteria, and schedule executive consultations automatically.
            </p>
            <div className={styles.bubbleActionRow}>
              <span className={styles.actionPill}>✓ HubSpot Synced</span>
              <span className={styles.actionPill}>✓ Calendar Booked</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
