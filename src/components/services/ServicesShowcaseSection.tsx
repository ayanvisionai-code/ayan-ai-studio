"use client";

import React from "react";
import Link from "next/link";
import SplineSceneViewer from "./SplineSceneViewer";
import {
  WebArchitectureVisual,
  LocalSeoVisual,
  ChatAssistantsVisual,
} from "./ServiceShowcaseVisuals";
import styles from "./ServicesShowcaseSection.module.css";

interface ServiceShowcaseItem {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  accent: string;
  blocks: {
    label: string;
    text: string;
  }[];
  ctaText: string;
  ctaHref: string;
  visualAlignment: "left" | "right";
  VisualComponent: React.ComponentType;
}

const showcaseServices: ServiceShowcaseItem[] = [
  {
    id: "ai-automation",
    eyebrow: "01 / CORE SERVICE",
    headline: "AI Automation",
    description:
      "We connect your business tools, automate repetitive workflows, and build intelligent systems that turn manual operations into seamless, reliable processes.",
    accent: "#9333EA",
    blocks: [
      {
        label: "WHAT WE AUTOMATE",
        text: "Lead capture, data entry, follow-ups, reporting, appointment workflows, and repetitive tasks across the tools your team already uses.",
      },
      {
        label: "HOW IT WORKS",
        text: "We connect your existing apps, configure reliable triggers and workflows, and add AI where it genuinely improves decision-making or customer interactions.",
      },
      {
        label: "THE OUTCOME",
        text: "Less manual work, fewer disconnected processes, and more time for your team to focus on growing the business.",
      },
    ],
    ctaText: "Explore AI Automation →",
    ctaHref: "/solutions#automation",
    visualAlignment: "left",
    VisualComponent: () => (
      <SplineSceneViewer url="https://prod.spline.design/asbzzgfkFPt8bELG/scene.splinecode" />
    ),
  },
  {
    id: "web-development",
    eyebrow: "02 / DIGITAL EXPERIENCE",
    headline: "High-Converting Web Development",
    description:
      "We build fast, polished websites designed to communicate your value clearly, build trust, and turn relevant visitors into qualified enquiries.",
    accent: "#38BDF8",
    blocks: [
      {
        label: "STRATEGIC STRUCTURE",
        text: "Clear messaging, intuitive navigation, and carefully structured pages that help visitors understand your offer.",
      },
      {
        label: "PERFORMANCE FIRST",
        text: "Responsive layouts, optimized assets, and accessible interactions designed for a smooth experience across devices.",
      },
      {
        label: "BUILT FOR ACTION",
        text: "Purposeful calls to action and conversion-focused page structure that make the next step clear.",
      },
    ],
    ctaText: "Explore Web Development →",
    ctaHref: "/solutions#websites",
    visualAlignment: "right",
    VisualComponent: WebArchitectureVisual,
  },
  {
    id: "local-seo",
    eyebrow: "03 / LOCAL VISIBILITY",
    headline: "Local SEO",
    description:
      "We help local businesses strengthen their visibility in relevant local searches and make it easier for nearby customers to discover and contact them.",
    accent: "#10B981",
    blocks: [
      {
        label: "LOCAL PRESENCE",
        text: "Improve the structure and consistency of your website and local business information.",
      },
      {
        label: "SEARCH RELEVANCE",
        text: "Build useful location-focused pages and improve the signals that help search engines understand your services and service areas.",
      },
      {
        label: "MEASURABLE PROGRESS",
        text: "Monitor relevant search visibility, website enquiries, and other useful local performance indicators.",
      },
    ],
    ctaText: "Explore Local SEO →",
    ctaHref: "/solutions#applications",
    visualAlignment: "left",
    VisualComponent: LocalSeoVisual,
  },
  {
    id: "chat-assistants",
    eyebrow: "04 / INTELLIGENT CONVERSATIONS",
    headline: "AI Chat Assistants",
    description:
      "We create AI-powered assistants that answer common customer questions, qualify enquiries, recommend relevant next steps, and help businesses respond more efficiently.",
    accent: "#FD6BC4",
    blocks: [
      {
        label: "CUSTOMER SUPPORT",
        text: "Provide useful answers to common questions using approved business information.",
      },
      {
        label: "LEAD QUALIFICATION",
        text: "Collect relevant enquiry details and guide potential customers through the next step.",
      },
      {
        label: "CONNECTED WORKFLOWS",
        text: "Connect conversations with suitable business tools and human handoff processes when needed.",
      },
    ],
    ctaText: "Explore AI Chat Assistants →",
    ctaHref: "/solutions#integrated",
    visualAlignment: "right",
    VisualComponent: ChatAssistantsVisual,
  },
];

export default function ServicesShowcaseSection() {
  return (
    <section className={styles.sectionContainer} id="showcase">
      {/* Background ambient lighting */}
      <div className={styles.sectionAmbientGlow} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        {showcaseServices.map((service, index) => {
          const Visual = service.VisualComponent;
          const isVisualLeft = service.visualAlignment === "left";

          return (
            <article
              key={service.id}
              className={`${styles.serviceRow} ${isVisualLeft ? styles.visualLeftRow : styles.visualRightRow}`}
              style={{ "--service-accent": service.accent } as React.CSSProperties}
            >
              {/* Visual Column */}
              <div className={styles.visualCol}>
                <Visual />
              </div>

              {/* Editorial Copy Column */}
              <div className={styles.copyCol}>
                {/* Eyebrow */}
                <span className={styles.eyebrow}>{service.eyebrow}</span>

                {/* Main Headline */}
                <h3 className={styles.headline}>{service.headline}</h3>

                {/* Introductory Description */}
                <p className={styles.description}>{service.description}</p>

                {/* 3 Supporting Information Blocks */}
                <div className={styles.blocksGrid}>
                  {service.blocks.map((block, bIdx) => (
                    <div key={bIdx} className={styles.blockItem}>
                      <h4 className={styles.blockLabel}>{block.label}</h4>
                      <p className={styles.blockText}>{block.text}</p>
                    </div>
                  ))}
                </div>

                {/* Primary CTA */}
                <div className={styles.ctaRow}>
                  <Link href={service.ctaHref} className={styles.primaryCta}>
                    <span>{service.ctaText}</span>
                  </Link>
                </div>
              </div>

              {/* Row subtle divider */}
              {index < showcaseServices.length - 1 && (
                <div className={styles.rowDivider} aria-hidden="true" />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
