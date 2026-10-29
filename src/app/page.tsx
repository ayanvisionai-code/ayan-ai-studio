import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import SectionEyebrow from "@/components/SectionEyebrow";
import DiagnosticContactForm from "@/components/DiagnosticContactForm";
import HeroSection from "@/components/hero/HeroSection";
import ServiceNetworkSection from "@/components/services/ServiceNetworkSection";

export const metadata: Metadata = {
  title: "Ayan AI Studio | Business Systems Studio",
  description:
    "We design premium websites, intelligent automation, and custom software that work independently or connect into one coherent business system.",
};

const transformations = [
  {
    client: "AgencyOS",
    category: "Custom Applications",
    href: "/transformations/custom-applications",
    image: "/agencyos-dashboard.png",
    alt: "AgencyOS custom client portal and executive dashboard",
    problem: "Fragmented proposals, manual contract chasing, and disconnected invoice tracking across 4 separate tools.",
    solution: "Designed and engineered an all-in-one operating system unifying client onboarding, contracts, and revenue pipelines.",
    metric: { value: "-70%", label: "Client Onboarding Time" },
  },
  {
    client: "Rongdhonu",
    category: "Website + Applications",
    href: "/transformations/website-plus-applications",
    image: "/rongdhonu-public-website.png",
    alt: "Rongdhonu cultural art exhibition platform and curatorial system",
    problem: "Manual exhibition scheduling, chaotic artist catalog submissions, and disjointed digital archives.",
    solution: "Built a cultural digital exhibition platform with self-serve curatorial workflows and automated cataloging.",
    metric: { value: "100%", label: "Digital Workflow Coverage" },
  },
  {
    client: "Intelligent Lead Routing",
    category: "Automation & AI Agents",
    href: "/transformations/automations",
    image: "/lab_lead_pipeline_1784544885964.png",
    alt: "Intelligent lead qualification and routing automation architecture",
    problem: "High-value inquiries sat in inbox queues for 12+ hours before manual triage by account executives.",
    solution: "Multi-stage autonomous pipeline parsing inquiry intent, enriching firmographics, and scheduling meetings instantly.",
    metric: { value: "3 mins", label: "Average Response Time" },
  },
];

const insights = [
  {
    category: "Business Architecture",
    title: "The Cost of Fragmented Logic",
    blurb: "Why adding another subscription SaaS tool quietly makes your business harder to run.",
    image: "/insight_fragmented_logic_1784545029766.png",
    alt: "Diagram illustrating fragmented software tools consolidating into a unified system",
  },
  {
    category: "AI Strategy",
    title: "Agents vs. Automations",
    blurb: "When to automate fixed, linear tasks versus when to deploy autonomous agents with contextual judgment.",
    image: "/insight_agents_automation_1784545044780.png",
    alt: "Comparative architectural diagram of deterministic workflows versus intelligent AI agents",
  },
  {
    category: "Operational Design",
    title: "Designing for Invisibility",
    blurb: "The highest compliment a business operating system can receive is that your team stops noticing it.",
    image: "/insight_invisible_tech_1784545056312.png",
    alt: "Minimal visual representation of frictionless invisible technology",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* 01 — HERO SECTION (Interactive 3D Globe) */}
      <HeroSection />

      {/* 02 — TECHNOLOGY CAPABILITY STRIP */}
      <div className={styles.techStrip}>
        <span className={styles.techStripLabel}>Core Technologies We Engineer With</span>
        <div className={styles.techStripBadges}>
          <span className={styles.techBadge}>✦ Next.js 16 (React 19)</span>
          <span className={styles.techBadge}>✦ TypeScript &amp; Node</span>
          <span className={styles.techBadge}>✦ Autonomous AI Agents</span>
          <span className={styles.techBadge}>✦ Event-Driven Workflows</span>
          <span className={styles.techBadge}>✦ PostgreSQL &amp; Supabase</span>
          <span className={styles.techBadge}>✦ Resend API Integration</span>
        </div>
      </div>

      {/* 03 — CONNECTED SERVICE NETWORK (GrowRev Microprocessor & Circuit Architecture) */}
      <ServiceNetworkSection />

      {/* 04 — THE BUSINESS PROBLEM & THE OPERATIONAL CORE */}
      <section className={`${styles.section} ${styles.sectionDarker}`} id="approach">
        <div className={styles.sectionHeader}>
          <SectionEyebrow label="The Operational Core" variant="teal" />
          <h2 className={styles.sectionTitle}>
            Disconnected tools quietly <br />
            <span className="title-gradient">drain business momentum.</span>
          </h2>
          <p className={styles.sectionDescription}>
            Most businesses do not have a software shortage. They have an integration breakdown. When your CRM, website, invoices, and spreadsheets do not talk, your team becomes the manual glue holding them together.
          </p>
        </div>

        <div className={styles.coreGrid}>
          {/* Before: Fragmented Silos */}
          <div className={styles.coreCardBefore}>
            <div className={styles.coreCardHeader}>
              <h3 className={styles.coreTitle}>The Fragmented Trap</h3>
              <span className={styles.coreBadgeBefore}>Typical Setup</span>
            </div>
            <ul className={styles.coreList}>
              <li className={styles.coreItem}>
                <span className={styles.coreItemIconBefore}>✕</span>
                <span><strong>Data Silos:</strong> Customer inquiries, contracts, and fulfillment data scattered across 5+ disconnected SaaS tools.</span>
              </li>
              <li className={styles.coreItem}>
                <span className={styles.coreItemIconBefore}>✕</span>
                <span><strong>Human Glue:</strong> Team members wasting 15+ hours weekly copying, re-typing, and chasing client information.</span>
              </li>
              <li className={styles.coreItem}>
                <span className={styles.coreItemIconBefore}>✕</span>
                <span><strong>Brittle Automations:</strong> Fragile one-off zap workflows that quietly break when an API or schema changes.</span>
              </li>
              <li className={styles.coreItem}>
                <span className={styles.coreItemIconBefore}>✕</span>
                <span><strong>Delayed Response:</strong> Inbound leads waiting hours or days for qualification, losing deals to faster competitors.</span>
              </li>
            </ul>
          </div>

          {/* After: The Connected Studio */}
          <div className={styles.coreCardAfter}>
            <div className={styles.coreCardHeader}>
              <h3 className={styles.coreTitle}>The Connected Studio</h3>
              <span className={styles.coreBadgeAfter}>Engineered Core</span>
            </div>
            <ul className={styles.coreList}>
              <li className={styles.coreItem}>
                <span className={styles.coreItemIconAfter}>✓</span>
                <span><strong>Single Source of Truth:</strong> One central database and event bus routing clean operational state across the company.</span>
              </li>
              <li className={styles.coreItem}>
                <span className={styles.coreItemIconAfter}>✓</span>
                <span><strong>Autonomous Agents:</strong> AI agents triaging inquiries, qualifying criteria, and spinning up workspaces in seconds.</span>
              </li>
              <li className={styles.coreItem}>
                <span className={styles.coreItemIconAfter}>✓</span>
                <span><strong>Resilient Code:</strong> Production-grade APIs and error-handled webhooks designed for years of uninterrupted uptime.</span>
              </li>
              <li className={styles.coreItem}>
                <span className={styles.coreItemIconAfter}>✓</span>
                <span><strong>Instant Execution:</strong> Customers receive immediate answers, automated proposals, and seamless onboarding.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 05 — FEATURED TRANSFORMATIONS (Case Studies) */}
      <section className={styles.section} id="transformations">
        <div className={styles.sectionHeader}>
          <SectionEyebrow label="Proven Work" variant="teal" />
          <h2 className={styles.sectionTitle}>
            Engineered for <br />
            <span className="title-gradient">Measurable Impact.</span>
          </h2>
          <p className={styles.sectionDescription}>
            Real systems designed for real businesses. See how operational bottlenecks were diagnosed and resolved into high-performing digital engines.
          </p>
        </div>

        {/* Studio Delivery Statistics */}
        <div className={styles.metricsRow}>
          <div className={styles.metricItem}>
            <div className={styles.metricBig}>-70%</div>
            <div className={styles.metricSub}>Average Onboarding Cycle</div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.metricBig}>100%</div>
            <div className={styles.metricSub}>Connected Workflows</div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.metricBig}>0</div>
            <div className={styles.metricSub}>Fragmented Silos</div>
          </div>
        </div>

        <div className={styles.transformationsGrid}>
          {transformations.map((t) => (
            <Link key={t.client} href={t.href} className={styles.transformationCard}>
              <div className={styles.transformationImageWrapper}>
                <span className={styles.transformationCategoryBadge}>{t.category}</span>
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 420px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.transformationBody}>
                <h3 className={styles.transformationTitle}>{t.client}</h3>
                <p className={styles.transformationProblem}>{t.problem}</p>

                <div className={styles.transformationMetricBox}>
                  <div>
                    <div className={styles.metricValue}>{t.metric.value}</div>
                    <div className={styles.metricLabel}>{t.metric.label}</div>
                  </div>
                  <span className="btn-pill-arrow" style={{ padding: "0 0.9rem", height: "34px" }}>
                    Case Study →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/transformations" className="btn-growrev-secondary">
            View All Transformation Reports →
          </Link>
        </div>
      </section>

      {/* 06 — PROCESS NAVIGATOR (GrowRev Process Style) */}
      <section className={`${styles.section} ${styles.sectionDarker}`} id="methodology">
        <div className={styles.sectionHeader}>
          <SectionEyebrow label="Our Process" variant="teal" />
          <h2 className={styles.sectionTitle}>
            From Bottleneck to <br />
            <span className="title-gradient">Autonomous Flow.</span>
          </h2>
          <p className={styles.sectionDescription}>
            A structured, three-stage engineering methodology designed to identify operational friction and replace it with reliable, intelligent architecture.
          </p>
        </div>

        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <span className={styles.processNumber}>01</span>
            <h3 className={styles.processTitle}>Operational Mapping</h3>
            <p className={styles.processDesc}>
              We conduct a comprehensive audit of how information and work actually travel across your company — identifying manual handoffs, repetitive chores, and silent bottlenecks.
            </p>
          </div>

          <div className={styles.processCard}>
            <span className={styles.processNumber}>02</span>
            <h3 className={styles.processTitle}>System Architecture</h3>
            <p className={styles.processDesc}>
              We engineer the exact technical blueprint: data schemas, API contracts, autonomous agent boundaries, and user interfaces built to scale seamlessly over years.
            </p>
          </div>

          <div className={styles.processCard}>
            <span className={styles.processNumber}>03</span>
            <h3 className={styles.processTitle}>Intelligent Orchestration</h3>
            <p className={styles.processDesc}>
              Custom AI agents and production code go live. Routine operations run autonomously in the background, freeing your human team to focus on high-leverage growth.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link href="/methodologies" style={{ color: "var(--growrev-cyan)", textDecoration: "underline", textUnderlineOffset: "4px", fontSize: "0.95rem" }}>
            Explore the Detailed Methodology Runbook →
          </Link>
        </div>
      </section>

      {/* 07 — OPERATING PRINCIPLES (Why Us) */}
      <section className={styles.section} id="principles">
        <div className={styles.sectionHeader}>
          <SectionEyebrow label="The Philosophy" variant="teal" />
          <h2 className={styles.sectionTitle}>
            Business First. <br />
            <span className="title-gradient">Technology Second.</span>
          </h2>
          <p className={styles.sectionDescription}>
            Technology is a force multiplier, not a magic fix. We engineer for business outcomes, not technical novelty or AI hype.
          </p>
        </div>

        <div className={styles.principlesGrid}>
          <div className={styles.principleCard}>
            <h3 className={styles.principleTitle}>Clarity Before Code</h3>
            <p className={styles.principleDesc}>
              We never write a line of software until the underlying business workflow is fully understood and streamlined. Building on top of broken processes only accelerates chaos.
            </p>
          </div>

          <div className={styles.principleCard}>
            <h3 className={styles.principleTitle}>Invisible Technology</h3>
            <p className={styles.principleDesc}>
              The best digital systems do not require your team to constantly manage them. They eliminate friction silently in the background so work simply happens.
            </p>
          </div>

          <div className={styles.principleCard}>
            <h3 className={styles.principleTitle}>Long-Term Foundations</h3>
            <p className={styles.principleDesc}>
              We build on open, enterprise-grade frameworks (Next.js, TypeScript, PostgreSQL) that you own completely. No vendor lock-in or proprietary traps.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link href="/principles" style={{ color: "var(--growrev-cyan)", textDecoration: "underline", textUnderlineOffset: "4px", fontSize: "0.95rem" }}>
            Read All Operating Principles →
          </Link>
        </div>
      </section>

      {/* 08 — INSIGHTS & RESEARCH */}
      <section className={`${styles.section} ${styles.sectionDarker}`} id="insights">
        <div className={styles.sectionHeader}>
          <SectionEyebrow label="Innovation &amp; Research" variant="teal" />
          <h2 className={styles.sectionTitle}>
            Every Transformation <br />
            <span className="title-gradient">Begins as Research.</span>
          </h2>
          <p className={styles.sectionDescription}>
            We rigorously test new models, workflow engines, and architectural patterns inside our internal <Link href="/lab" style={{ color: "var(--growrev-cyan)" }}>Innovation Lab</Link> before deploying them to production.
          </p>
        </div>

        <div className={styles.transformationsGrid}>
          {insights.map((item) => (
            <Link key={item.title} href="/insights" className={styles.transformationCard}>
              <div className={styles.transformationImageWrapper}>
                <span className={styles.transformationCategoryBadge}>{item.category}</span>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 420px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.transformationBody}>
                <h3 className={styles.transformationTitle}>{item.title}</h3>
                <p className={styles.transformationProblem}>{item.blurb}</p>
                <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                  <span style={{ color: "var(--growrev-cyan)", fontSize: "0.88rem", fontWeight: 500 }}>
                    Read Research Essay →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/insights" className="btn-growrev-secondary">
            Explore All Insights &amp; Research →
          </Link>
        </div>
      </section>

      {/* 09 — FINAL CONVERSION & DIAGNOSTIC FORM (GrowRev Work With Us Style) */}
      <section className={styles.section} id="contact" style={{ paddingBottom: "10rem" }}>
        <div className={styles.sectionHeader} style={{ marginBottom: "3rem" }}>
          <SectionEyebrow label="Work With Us" variant="teal" />
          <h2 className={styles.sectionTitle}>
            Ready to Build Your <br />
            <span className="title-gradient">Operating Advantage?</span>
          </h2>
          <p className={styles.sectionDescription}>
            Tell us about what is slow, manual, or disconnected in your business. We will review your operation and provide direct architectural recommendations.
          </p>
        </div>

        <DiagnosticContactForm
          title="Begin a Business Diagnostic"
          subtitle="Direct founder review · No high-pressure sales · Architectural clarity within 24 hours"
        />
      </section>
    </main>
  );
}
