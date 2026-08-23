"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    }
  ];

  return (
    <main>
      <header className="page-header">
        <span className="section-eyebrow animate-fade-up">Services</span>
        <h1 className="page-title animate-fade-up delay-1">Engineered for Outcomes.</h1>
        <p className="page-subtitle animate-fade-up delay-2">
          Four ways to work with us. Each is delivered to the same standard whether it stands alone or connects into a larger system.
        </p>
      </header>

      {/* Quick navigation between the four service lines */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: "2rem" }}>
        <div className="container solutions-container quicknav-row" style={{ maxWidth: "1200px" }}>
          <a href="#websites" className="btn-secondary quicknav-btn">Websites</a>
          <a href="#automation" className="btn-secondary quicknav-btn">Automation &amp; AI Agents</a>
          <a href="#applications" className="btn-secondary quicknav-btn">Custom Applications</a>
          <a href="#integrated" className="btn-secondary quicknav-btn">Integrated Systems</a>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container solutions-container" style={{ maxWidth: "1200px" }}>

          <div className="solutions-stack">

            {/* Solution 0: Websites */}
            <div id="websites" className="glass-panel panel-pad-lg service-panel" style={{ display: "flex", flexDirection: "column", scrollMarginTop: "6rem" }}>
              <div>
                <span className="section-eyebrow" style={{ marginBottom: 0 }}>Available Standalone</span>
                <h2 className="heading-lg" style={{ color: "var(--foreground)", marginTop: "1rem" }}>Premium, High-Converting Websites</h2>
                <p className="service-lede" style={{ maxWidth: "800px", color: "var(--muted-foreground)" }}>
                  Not every business needs an automation layer or a custom application on day one. Some simply need a website that looks premium, loads fast, and converts visitors into leads. We build that — on its own, or as the front door to a larger system later.
                </p>
              </div>

              <div>
                <h5 className="field-label" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)" }}>What's Included</h5>
                <div className="chip-group">
                  <span className="chip">Custom Design System</span>
                  <span className="chip">Conversion-Focused UX</span>
                  <span className="chip">SEO Architecture</span>
                  <span className="chip">Performance Budget</span>
                  <span className="chip">Next.js / Vercel</span>
                </div>
              </div>

              <div className="section-links-row section-links-row--tight">
                <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Best For</span>
                  <span style={{ color: "var(--foreground)" }}>New businesses, rebrands, or replacing an outdated site — no existing complexity required.</span>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Can Combine With</span>
                  <a href="#automation" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Automation&nbsp;→</a>
                  <span style={{ margin: "0 0.5rem", color: "var(--muted-foreground)" }}>/</span>
                  <a href="#applications" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Custom Applications&nbsp;→</a>
                </div>
              </div>
            </div>

            {/* Solution 1: Customer Communication System (Automation) */}
            <div id="automation" className="glass-panel panel-pad-lg service-panel" style={{ display: "flex", flexDirection: "column", scrollMarginTop: "6rem" }}>
              <div>
                <span className="section-eyebrow" style={{ marginBottom: 0 }}>Available Standalone · Revenue Systems</span>
                <h2 className="heading-lg" style={{ color: "var(--foreground)", marginTop: "1rem" }}>Automation &amp; AI Agents</h2>
                <p className="service-lede" style={{ maxWidth: "800px", color: "var(--muted-foreground)" }}>
                  If your website and tools already work, but your team is buried in repetitive tasks, we don't rebuild what already works — we automate what's draining it. Example below: eliminating lead decay with intelligent routing that qualifies prospects instantly and routes dossiers to the correct agent.
                </p>

                <div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "12px", overflow: "hidden", margin: "2rem 0", border: "1px solid var(--border)" }}>
                  <Image src="/solutions_automation_1784545471642.png" alt="Automation pipeline and intelligent routing" fill style={{ objectFit: "cover", opacity: 0.8 }} />
                </div>
              </div>

              {/* Technology Transparency Sub-section */}
              <div>
                <h5 className="field-label" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)" }}>Technology Implementation Layer</h5>
                <div className="chip-group">
                  <span className="chip">AI Voice Receptionist</span>
                  <span className="chip">Calendar Integration</span>
                  <span className="chip">Enterprise CRM</span>
                  <span className="chip">Automated Routing Logic</span>
                </div>
              </div>

              {/* Interactive Educational Workflow Explorer */}
              <div style={{ border: "1px solid var(--border)", borderRadius: "12px", background: "#050505", overflow: "hidden", marginTop: "2rem" }}>
                <div className="explorer-header">
                  <span style={{ fontSize: "0.9rem", color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Interactive Demonstration: Workflow Explorer</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Click stages to explore logic</span>
                </div>

                <div className="grid-asym-2col explorer-grid">

                  {/* Sidebar Timeline */}
                  <div className="explorer-sidebar">
                    {workflowStages.map((stage, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStage(idx)}
                        className="explorer-stage-btn"
                        style={{
                          background: activeStage === idx ? "rgba(255,255,255,0.05)" : "transparent",
                          border: `1px solid ${activeStage === idx ? "var(--foreground)" : "transparent"}`,
                          color: activeStage === idx ? "var(--foreground)" : "var(--muted-foreground)",
                        }}
                      >
                        <span style={{ fontSize: "0.8rem", opacity: 0.5 }}>0{idx + 1}</span>
                        <span style={{ fontSize: "1rem", fontWeight: activeStage === idx ? 500 : 400 }}>{stage.title}</span>
                      </button>
                    ))}
                  </div>

                  {/* Content Area */}
                  <div className="panel-pad-explorer" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ animation: "fadeIn 0.3s ease" }} key={activeStage}>
                      <span className="section-eyebrow">Stage 0{activeStage + 1}: {workflowStages[activeStage].title}</span>

                      <div className="explorer-content-body">
                        <div>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>What Happens</h5>
                          <p className="explorer-primary-text">{workflowStages[activeStage].action}</p>
                        </div>

                        <div>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Business Value</h5>
                          <p className="explorer-secondary-text">{workflowStages[activeStage].value}</p>
                        </div>

                        <div className="operational-benefit-box">
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)", marginBottom: "0.5rem" }}>Operational Benefit</h5>
                          <p style={{ fontSize: "1.1rem", color: "var(--foreground)", margin: 0 }}>{workflowStages[activeStage].benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Ecosystem Interlinking */}
              <div className="section-links-row">
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Related Transformation</span>
                   <Link href="/transformations/automations" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Intelligent Lead Routing (Internal Demo)&nbsp;→</Link>
                </div>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Core Methodology</span>
                   <Link href="/methodologies" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Intelligent Orchestration&nbsp;→</Link>
                </div>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Can Combine With</span>
                   <a href="#websites" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Websites&nbsp;→</a>
                   <span style={{ margin: "0 0.5rem", color: "var(--muted-foreground)" }}>/</span>
                   <a href="#applications" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Custom Applications&nbsp;→</a>
                </div>
              </div>
            </div>

            {/* Solution 2: White-Glove Onboarding Architecture (Custom Application) */}
            <div id="applications" className="glass-panel panel-pad-lg service-panel" style={{ display: "flex", flexDirection: "column", scrollMarginTop: "6rem" }}>
              <div>
                <span className="section-eyebrow" style={{ marginBottom: 0 }}>Available Standalone · Customer Experience</span>
                <h2 className="heading-lg" style={{ color: "var(--foreground)", marginTop: "1rem" }}>Custom Applications</h2>
                <p className="service-lede" style={{ maxWidth: "800px", color: "var(--muted-foreground)" }}>
                  When your workflow doesn't fit off-the-shelf software, we build the tool that does — a client portal, an internal dashboard, a booking system, whatever the operation actually needs. Example below: a white-glove onboarding portal that replaces disjointed email threads and manual data entry, provisioning resources and updating your CRM automatically.
                </p>
              </div>

              {/* Technology Transparency Sub-section */}
              <div>
                <h5 className="field-label" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)" }}>Technology Implementation Layer</h5>
                <div className="chip-group">
                  <span className="chip">Custom Client Portal (React)</span>
                  <span className="chip">PostgreSQL Database</span>
                  <span className="chip">Stripe Billing API</span>
                  <span className="chip">DocuSign API</span>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="panel-pad-md" style={{ background: "#050505", border: "1px solid var(--border)", borderRadius: "12px", marginTop: "2rem" }}>
                <h5 style={{ fontSize: "0.9rem", color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2rem" }}>Provisioning Architecture Flow</h5>
                <div className="diagram-desktop-view diagram-scroll">
                <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet" style={{ minWidth: "640px" }}>

                  {/* Connection Lines */}
                  <path d="M 150 100 L 250 100" stroke="var(--border)" strokeWidth="2" />
                  <path d="M 350 100 L 450 100" stroke="var(--border)" strokeWidth="2" />
                  
                  <path d="M 500 50 L 500 20" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 500 150 L 500 180" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Nodes */}
                  <rect x="50" y="60" width="100" height="80" rx="8" fill="var(--background)" stroke="var(--foreground)" strokeWidth="1.5" />
                  <text x="100" y="100" fill="var(--foreground)" fontSize="12" textAnchor="middle">Client</text>
                  <text x="100" y="115" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">Portal</text>

                  <rect x="250" y="60" width="100" height="80" rx="8" fill="rgba(255,255,255,0.02)" stroke="var(--border-hover)" strokeWidth="1" />
                  <text x="300" y="95" fill="var(--foreground)" fontSize="12" textAnchor="middle">Auth &</text>
                  <text x="300" y="110" fill="var(--foreground)" fontSize="12" textAnchor="middle">Session</text>

                  <circle cx="500" cy="100" r="50" fill="rgba(255,255,255,0.05)" stroke="var(--foreground)" strokeWidth="1.5" />
                  <text x="500" y="104" fill="var(--foreground)" fontSize="14" textAnchor="middle" fontWeight="500">Logic Core</text>

                  {/* Satellite APIs */}
                  <rect x="440" y="-10" width="120" height="30" rx="4" fill="var(--background)" stroke="var(--border)" />
                  <text x="500" y="9" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">Stripe Webhook</text>

                  <rect x="440" y="180" width="120" height="30" rx="4" fill="var(--background)" stroke="var(--border)" />
                  <text x="500" y="199" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">DocuSign API</text>

                  {/* Final Output */}
                  <path d="M 550 100 L 650 100" stroke="var(--border)" strokeWidth="2" />
                  <polygon points="650,95 660,100 650,105" fill="var(--border)" />
                  
                  <rect x="670" y="70" width="100" height="60" rx="8" fill="rgba(255,255,255,0.05)" stroke="var(--foreground)" strokeWidth="1.5" />
                  <text x="720" y="104" fill="var(--foreground)" fontSize="12" textAnchor="middle">CRM Provisioned</text>
                </svg>
                </div>

                <div className="diagram-mobile-view flow-mobile">
                  <div className="flow-node">Client Portal</div>
                  <div className="flow-arrow-down">↓</div>
                  <div className="flow-node">Auth &amp; Session</div>
                  <div className="flow-arrow-down">↓</div>
                  <div className="flow-satellites">
                    <div className="flow-node flow-node--sm">Stripe Webhook</div>
                    <div className="flow-node flow-node--sm">DocuSign API</div>
                  </div>
                  <div className="flow-arrow-down">↓</div>
                  <div className="flow-node flow-node--core">Logic Core</div>
                  <div className="flow-arrow-down">↓</div>
                  <div className="flow-node flow-node--output">CRM Provisioned</div>
                </div>
              </div>

              {/* Ecosystem Interlinking */}
              <div className="section-links-row">
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Related Transformation</span>
                   <Link href="/transformations/website-plus-applications" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Rongdhonu Operating System&nbsp;→</Link>
                </div>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Core Methodology</span>
                   <Link href="/methodologies" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>System Architecture&nbsp;→</Link>
                </div>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Can Combine With</span>
                   <a href="#websites" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Websites&nbsp;→</a>
                   <span style={{ margin: "0 0.5rem", color: "var(--muted-foreground)" }}>/</span>
                   <a href="#automation" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Automation&nbsp;→</a>
                </div>
              </div>
            </div>

            {/* Solution 3: Data Unification & Intelligence (Integrated Systems) */}
            <div id="integrated" className="glass-panel panel-pad-lg service-panel" style={{ display: "flex", flexDirection: "column", scrollMarginTop: "6rem" }}>
              <div>
                <span className="section-eyebrow" style={{ marginBottom: 0 }}>The Combined Offer · Internal Operations</span>
                <h2 className="heading-lg" style={{ color: "var(--foreground)", marginTop: "1rem" }}>Integrated Systems</h2>
                <p className="service-lede" style={{ maxWidth: "800px", color: "var(--muted-foreground)" }}>
                  This is what happens when a website, an application, and automation are engineered to run as one system instead of three separate purchases. When data is siloed, decision-making slows down — we build the central nervous system that ensures your billing, project management, and CRM operate from a single source of truth.
                </p>
              </div>

              {/* Technology Transparency Sub-section */}
              <div>
                <h5 className="field-label" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)" }}>Technology Implementation Layer</h5>
                <div className="chip-group">
                  <span className="chip">Data Warehouse</span>
                  <span className="chip">ETL Pipelines</span>
                  <span className="chip">Business Dashboards</span>
                </div>
              </div>

              {/* Data Ecosystem Map */}
              <div className="panel-pad-md" style={{ background: "#050505", border: "1px solid var(--border)", borderRadius: "12px", marginTop: "2rem" }}>
                <h5 style={{ fontSize: "0.9rem", color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2rem" }}>Centralized Data Ecosystem Map</h5>
                <div className="diagram-desktop-view diagram-scroll">
                <svg width="100%" height="250" viewBox="0 0 800 250" preserveAspectRatio="xMidYMid meet" style={{ minWidth: "640px" }}>

                  {/* Central Hub */}
                  <rect x="350" y="75" width="100" height="100" rx="12" fill="rgba(255,255,255,0.05)" stroke="var(--foreground)" strokeWidth="2" />
                  <text x="400" y="125" fill="var(--foreground)" fontSize="14" textAnchor="middle" fontWeight="500">Data</text>
                  <text x="400" y="145" fill="var(--foreground)" fontSize="14" textAnchor="middle" fontWeight="500">Warehouse</text>
                  
                  {/* Left Silos */}
                  <path d="M 200 60 L 350 100" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 200 125 L 350 125" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 200 190 L 350 150" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />

                  <rect x="80" y="40" width="120" height="40" rx="4" fill="var(--background)" stroke="var(--border-hover)" />
                  <text x="140" y="64" fill="var(--muted-foreground)" fontSize="12" textAnchor="middle">Marketing Analytics</text>

                  <rect x="80" y="105" width="120" height="40" rx="4" fill="var(--background)" stroke="var(--border-hover)" />
                  <text x="140" y="129" fill="var(--muted-foreground)" fontSize="12" textAnchor="middle">Sales CRM</text>

                  <rect x="80" y="170" width="120" height="40" rx="4" fill="var(--background)" stroke="var(--border-hover)" />
                  <text x="140" y="194" fill="var(--muted-foreground)" fontSize="12" textAnchor="middle">Billing Software</text>

                  {/* Flow Animation Nodes */}
                  <circle cx="275" cy="80" r="3" fill="var(--foreground)" />
                  <circle cx="275" cy="125" r="3" fill="var(--foreground)" />
                  <circle cx="275" cy="170" r="3" fill="var(--foreground)" />

                  {/* Output to Intelligence */}
                  <path d="M 450 125 L 600 125" stroke="var(--foreground)" strokeWidth="2" />
                  <polygon points="590,120 600,125 590,130" fill="var(--foreground)" />

                  <rect x="620" y="95" width="120" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="var(--foreground)" strokeWidth="1" />
                  <text x="680" y="125" fill="var(--foreground)" fontSize="12" textAnchor="middle">Executive</text>
                  <text x="680" y="140" fill="var(--foreground)" fontSize="12" textAnchor="middle">Dashboard</text>

                </svg>
                </div>

                <div className="diagram-mobile-view flow-mobile">
                  <div className="flow-sources">
                    <div className="flow-node flow-node--sm">Marketing Analytics</div>
                    <div className="flow-node flow-node--sm">Sales CRM</div>
                    <div className="flow-node flow-node--sm">Billing Software</div>
                  </div>
                  <div className="flow-arrow-down">↓</div>
                  <div className="flow-node flow-node--core-rect">Data Warehouse</div>
                  <div className="flow-arrow-down">↓</div>
                  <div className="flow-node flow-node--output">Executive Dashboard</div>
                </div>
              </div>

              {/* Ecosystem Interlinking */}
              <div className="section-links-row">
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Related Transformation</span>
                   <Link href="/transformations/custom-applications" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>AgencyOS&nbsp;→</Link>
                </div>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Core Methodology</span>
                   <Link href="/methodologies" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Operational Mapping&nbsp;→</Link>
                </div>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Related Insight</span>
                   <Link href="/insights" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>The Cost of Fragmented Logic&nbsp;→</Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
