"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function SolutionsPage() {
  const [activeStage, setActiveStage] = useState(0);

  const workflowStages = [
    {
      title: "Customer Inquiry",
      action: "A customer reaches out — by phone, chat, or web form.",
      value: "Captures their interest at the exact moment it happens, instead of waiting for someone to notice and respond.",
      benefit: "No lead goes cold waiting for a callback.",
    },
    {
      title: "AI Receptionist",
      action: "The system responds immediately, in natural conversation.",
      value: "Provides an instant, human-like response any time of day, without adding staff.",
      benefit: "Handles unlimited conversations at once.",
    },
    {
      title: "Qualification",
      action: "It asks the right questions and checks the answers against criteria you define.",
      value: "Filters out unqualified prospects automatically, before a person is involved.",
      benefit: "Keeps your sales team focused on leads worth their time.",
    },
    {
      title: "CRM Update",
      action: "The conversation is organized into a clean summary and saved straight into your CRM.",
      value: "Creates a single, accurate record instantly — nobody has to type it in later.",
      benefit: "Zero manual data entry.",
    },
    {
      title: "Calendar Booking",
      action: "It checks real availability and books the appointment directly.",
      value: "Removes the back-and-forth emails between \"interested\" and \"on the calendar.\"",
      benefit: "Deals move faster because nothing sits waiting in between.",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      {/* Page Header */}
      <header className="page-header" style={{ padding: "11rem 5vw 4rem" }}>
        <SectionEyebrow label="Services &amp; Architecture" variant="teal" />
        <h1 className="page-title">
          Engineered for <br />
          <span className="title-gradient">Measurable Outcomes.</span>
        </h1>
        <p className="page-subtitle" style={{ color: "var(--growrev-text-muted)" }}>
          Four interconnected disciplines. Each is engineered to the same high standard, whether it stands alone or anchors a complete operating system.
        </p>
      </header>

      {/* Quick navigation pill bar */}
      <section style={{ padding: "0 5vw 3rem" }}>
        <div className="container" style={{ maxWidth: "1200px", display: "flex", justifyContent: "center", gap: "0.85rem", flexWrap: "wrap" }}>
          <a href="#websites" className="btn-pill-arrow">01 · Websites</a>
          <a href="#automation" className="btn-pill-arrow">02 · Automation &amp; AI Agents</a>
          <a href="#applications" className="btn-pill-arrow">03 · Custom Applications</a>
          <a href="#integrated" className="btn-pill-arrow">04 · Integrated Systems</a>
        </div>
      </section>

      {/* Solutions Stack */}
      <section style={{ padding: "2rem 5vw 8rem" }}>
        <div className="container" style={{ maxWidth: "1240px", display: "flex", flexDirection: "column", gap: "5rem" }}>

          {/* 01. Websites */}
          <div id="websites" className="growrev-card" style={{ padding: "clamp(2rem, 5vw, 4rem)", scrollMarginTop: "6rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--growrev-cyan)", fontWeight: 600 }}>01 · Available Standalone</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "#FFFFFF", marginTop: "0.5rem" }}>
                  Premium, High-Converting Websites
                </h2>
              </div>
              <Link href="/start" className="btn-growrev-primary" style={{ padding: "0.65rem 1.4rem", fontSize: "0.88rem" }}>
                Commission Website →
              </Link>
            </div>

            <p style={{ maxWidth: "880px", color: "var(--growrev-text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              Not every business needs an automation layer or a custom application on day one. Some simply need a website that looks premium, loads instantly, and converts high-ticket visitors into qualified leads. We build that — on its own, or as the front door to a larger system later.
            </p>

            <div style={{ position: "relative", width: "100%", height: "clamp(240px, 35vw, 420px)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--growrev-border)" }}>
              <Image src="/blueice-hero.jpg" alt="Premium luxury website design" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(10, 10, 14, 0.7) 100%)" }} />
            </div>

            <div>
              <h5 style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#FFFFFF", marginBottom: "0.85rem", fontWeight: 600 }}>What&apos;s Included</h5>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                <span className="chip">Custom Design System</span>
                <span className="chip">Conversion-Focused UX</span>
                <span className="chip">Semantic SEO Architecture</span>
                <span className="chip">Next.js 16 &amp; React 19</span>
                <span className="chip">Edge Global Hosting</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--growrev-border)" }}>
              <div>
                <span style={{ display: "block", fontSize: "0.78rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Best For</span>
                <span style={{ color: "#FFFFFF", fontSize: "0.95rem" }}>Established businesses, rebrands, or replacing an outdated site with an editorial flagship.</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.78rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Combines With</span>
                <a href="#automation" style={{ color: "var(--growrev-cyan)", fontSize: "0.95rem", textDecoration: "underline" }}>Intelligent Automation →</a>
              </div>
            </div>
          </div>

          {/* 02. Automation & AI Agents */}
          <div id="automation" className="growrev-card" style={{ padding: "clamp(2rem, 5vw, 4rem)", scrollMarginTop: "6rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--growrev-cyan)", fontWeight: 600 }}>02 · Revenue Systems</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "#FFFFFF", marginTop: "0.5rem" }}>
                  Automation &amp; AI Agents
                </h2>
              </div>
              <Link href="/start" className="btn-growrev-primary" style={{ padding: "0.65rem 1.4rem", fontSize: "0.88rem" }}>
                Build Automation Pipeline →
              </Link>
            </div>

            <p style={{ maxWidth: "880px", color: "var(--growrev-text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              If your website already works, but your team is buried in repetitive administrative tasks, we do not rebuild what works — we automate what drains your time. Below is a live interactive workflow demonstrating autonomous lead triage and instant meeting booking.
            </p>

            <div style={{ position: "relative", width: "100%", height: "clamp(220px, 30vw, 360px)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--growrev-border)" }}>
              <Image src="/solutions_automation_1784545471642.png" alt="Automation pipeline and intelligent routing" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(10, 10, 14, 0.7) 100%)" }} />
            </div>

            {/* Interactive Workflow Explorer */}
            <div style={{ border: "1px solid var(--growrev-border)", borderRadius: "16px", background: "rgba(10, 10, 14, 0.9)", overflow: "hidden" }}>
              <div style={{ padding: "1.25rem 2rem", background: "rgba(255, 255, 255, 0.03)", borderBottom: "1px solid var(--growrev-border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.85rem", color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                  Interactive Demonstration: Workflow Explorer
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--growrev-cyan)" }}>
                  Click a stage below to inspect execution logic
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0" }}>
                {/* Sidebar Timeline */}
                <div style={{ borderRight: "1px solid var(--growrev-border)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {workflowStages.map((stage, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      style={{
                        padding: "1rem 1.25rem",
                        borderRadius: "12px",
                        background: activeStage === idx ? "linear-gradient(95deg, rgba(15, 182, 184, 0.15) 0%, rgba(116, 102, 223, 0.1) 100%)" : "transparent",
                        border: `1px solid ${activeStage === idx ? "var(--growrev-cyan)" : "transparent"}`,
                        color: activeStage === idx ? "#FFFFFF" : "var(--growrev-text-muted)",
                        textAlign: "left",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <span style={{ fontSize: "0.8rem", color: activeStage === idx ? "var(--growrev-cyan)" : "var(--growrev-text-dim)", fontWeight: 600 }}>0{idx + 1}</span>
                      <span style={{ fontSize: "0.95rem", fontWeight: activeStage === idx ? 500 : 400 }}>{stage.title}</span>
                    </button>
                  ))}
                </div>

                {/* Content Area */}
                <div style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div>
                    <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--growrev-cyan)", fontWeight: 600 }}>
                      Stage 0{activeStage + 1}
                    </span>
                    <h4 style={{ fontSize: "1.45rem", color: "#FFFFFF", margin: "0.4rem 0 1.5rem" }}>
                      {workflowStages[activeStage].title}
                    </h4>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                      <div>
                        <h5 style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--growrev-text-dim)", marginBottom: "0.35rem" }}>What Happens</h5>
                        <p style={{ color: "#FFFFFF", fontSize: "1.05rem", lineHeight: 1.6 }}>{workflowStages[activeStage].action}</p>
                      </div>

                      <div>
                        <h5 style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--growrev-text-dim)", marginBottom: "0.35rem" }}>Business Value</h5>
                        <p style={{ color: "var(--growrev-text-muted)", fontSize: "0.98rem", lineHeight: 1.6 }}>{workflowStages[activeStage].value}</p>
                      </div>

                      <div style={{ padding: "1.25rem", borderRadius: "12px", background: "rgba(15, 182, 184, 0.08)", border: "1px solid rgba(15, 182, 184, 0.25)", marginTop: "0.5rem" }}>
                        <h5 style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--growrev-cyan)", marginBottom: "0.3rem" }}>Operational Benefit</h5>
                        <p style={{ fontSize: "1.1rem", color: "#FFFFFF", fontWeight: 500, margin: 0 }}>{workflowStages[activeStage].benefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--growrev-border)" }}>
              <div>
                <span style={{ display: "block", fontSize: "0.78rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Related Transformation</span>
                <Link href="/transformations/automations" style={{ color: "var(--growrev-cyan)", fontSize: "0.95rem", textDecoration: "underline" }}>Intelligent Lead Routing →</Link>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.78rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Core Methodology</span>
                <Link href="/methodologies" style={{ color: "var(--growrev-cyan)", fontSize: "0.95rem", textDecoration: "underline" }}>Intelligent Orchestration →</Link>
              </div>
            </div>
          </div>

          {/* 03. Custom Applications */}
          <div id="applications" className="growrev-card" style={{ padding: "clamp(2rem, 5vw, 4rem)", scrollMarginTop: "6rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--growrev-cyan)", fontWeight: 600 }}>03 · Custom Software</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "#FFFFFF", marginTop: "0.5rem" }}>
                  Custom Applications &amp; Portals
                </h2>
              </div>
              <Link href="/start" className="btn-growrev-primary" style={{ padding: "0.65rem 1.4rem", fontSize: "0.88rem" }}>
                Engineer Application →
              </Link>
            </div>

            <p style={{ maxWidth: "880px", color: "var(--growrev-text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              When your operational model outgrows off-the-shelf software, we engineer purpose-built tools: client portals, internal dashboards, and fulfillment engines designed around your exact business logic.
            </p>

            <div style={{ position: "relative", width: "100%", height: "clamp(240px, 35vw, 420px)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--growrev-border)" }}>
              <Image src="/agencyos-dashboard.png" alt="AgencyOS custom client portal" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(10, 10, 14, 0.7) 100%)" }} />
            </div>

            {/* Architecture Flow Visual */}
            <div style={{ padding: "2rem", background: "rgba(10, 10, 14, 0.9)", border: "1px solid var(--growrev-border)", borderRadius: "16px" }}>
              <h5 style={{ fontSize: "0.82rem", color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem", fontWeight: 600 }}>
                Provisioning Architecture Flow
              </h5>
              <div style={{ overflowX: "auto" }}>
                <svg width="100%" height="160" viewBox="0 0 800 160" preserveAspectRatio="xMidYMid meet" style={{ minWidth: "640px" }}>
                  <path d="M 150 80 L 270 80" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                  <path d="M 370 80 L 490 80" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                  <path d="M 590 80 L 690 80" stroke="var(--growrev-cyan)" strokeWidth="2" />

                  <rect x="50" y="50" width="100" height="60" rx="10" fill="#13131A" stroke="var(--growrev-cyan)" strokeWidth="1.5" />
                  <text x="100" y="85" fill="#FFFFFF" fontSize="12" textAnchor="middle" fontWeight="500">Client Portal</text>

                  <rect x="270" y="50" width="100" height="60" rx="10" fill="#13131A" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                  <text x="320" y="85" fill="#FFFFFF" fontSize="12" textAnchor="middle">Auth &amp; Session</text>

                  <circle cx="540" cy="80" r="38" fill="rgba(15, 182, 184, 0.15)" stroke="var(--growrev-cyan)" strokeWidth="2" />
                  <text x="540" y="85" fill="#FFFFFF" fontSize="12" textAnchor="middle" fontWeight="600">Logic Core</text>

                  <rect x="690" y="50" width="110" height="60" rx="10" fill="#13131A" stroke="var(--growrev-iris)" strokeWidth="1.5" />
                  <text x="745" y="85" fill="#FFFFFF" fontSize="12" textAnchor="middle">CRM Provisioned</text>
                </svg>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--growrev-border)" }}>
              <div>
                <span style={{ display: "block", fontSize: "0.78rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Related Transformation</span>
                <Link href="/transformations/custom-applications" style={{ color: "var(--growrev-cyan)", fontSize: "0.95rem", textDecoration: "underline" }}>AgencyOS Case Study →</Link>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.78rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Core Methodology</span>
                <Link href="/methodologies" style={{ color: "var(--growrev-cyan)", fontSize: "0.95rem", textDecoration: "underline" }}>System Architecture Runbook →</Link>
              </div>
            </div>
          </div>

          {/* 04. Integrated Systems */}
          <div id="integrated" className="growrev-card" style={{ padding: "clamp(2rem, 5vw, 4rem)", scrollMarginTop: "6rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--growrev-cyan)", fontWeight: 600 }}>04 · The Combined Studio</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "#FFFFFF", marginTop: "0.5rem" }}>
                  Integrated Business Systems
                </h2>
              </div>
              <Link href="/start" className="btn-growrev-primary" style={{ padding: "0.65rem 1.4rem", fontSize: "0.88rem" }}>
                Unify Company Systems →
              </Link>
            </div>

            <p style={{ maxWidth: "880px", color: "var(--growrev-text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              This is what happens when a website, an application, and automation are engineered to run as one unified operational core instead of separate purchases. Information moves effortlessly across departments without human team members acting as the connective glue.
            </p>

            <div style={{ position: "relative", width: "100%", height: "clamp(240px, 35vw, 420px)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--growrev-border)" }}>
              <Image src="/home_hero_architecture_1784545430311.png" alt="Integrated business systems architecture" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(10, 10, 14, 0.7) 100%)" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--growrev-border)" }}>
              <div>
                <span style={{ display: "block", fontSize: "0.78rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Related Transformation</span>
                <Link href="/transformations/website-plus-applications" style={{ color: "var(--growrev-cyan)", fontSize: "0.95rem", textDecoration: "underline" }}>Rongdhonu Operating System →</Link>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.78rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Related Insight</span>
                <Link href="/insights" style={{ color: "var(--growrev-cyan)", fontSize: "0.95rem", textDecoration: "underline" }}>The Cost of Fragmented Logic →</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
