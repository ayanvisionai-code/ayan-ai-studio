"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SolutionsPage() {
  const [activeStage, setActiveStage] = useState(0);

  const workflowStages = [
    {
      title: "Customer Inquiry",
      action: "Inbound communication initiated.",
      value: "Captures intent at the exact moment of highest interest.",
      benefit: "Zero lead decay.",
    },
    {
      title: "AI Receptionist",
      action: "Conversational logic layer engages.",
      value: "Provides immediate, human-like response 24/7 without staffing costs.",
      benefit: "Infinite concurrency capability.",
    },
    {
      title: "Qualification",
      action: "Parameters extracted and matched against business rules.",
      value: "Filters out unqualified prospects automatically.",
      benefit: "Protects expensive human capital (Sales Team).",
    },
    {
      title: "CRM Update",
      action: "Structured dossier pushed to database.",
      value: "Creates a single source of truth instantly.",
      benefit: "Zero manual data entry.",
    },
    {
      title: "Calendar Booking",
      action: "Availability synced and appointment secured.",
      value: "Reduces friction to transaction.",
      benefit: "Accelerated sales cycle.",
    }
  ];

  return (
    <main>
      <header className="page-header">
        <span className="section-eyebrow animate-fade-up">Business Solutions</span>
        <h1 className="page-title animate-fade-up delay-1">Engineered for Outcomes.</h1>
        <p className="page-subtitle animate-fade-up delay-2">
          We do not sell software implementations. We sell operational clarity, scalable infrastructure, and intelligent execution.
        </p>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
            
            {/* Solution 1: Customer Communication System */}
            <div className="glass-panel" style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "3rem" }}>
              <div>
                <span className="section-eyebrow" style={{ marginBottom: 0 }}>Revenue Systems</span>
                <h2 style={{ fontSize: "3rem", color: "var(--foreground)", marginTop: "1rem" }}>Customer Communication System</h2>
                <p style={{ fontSize: "1.3rem", maxWidth: "800px", marginTop: "1.5rem", color: "var(--muted-foreground)" }}>
                  We eliminate lead decay. When inbound volume outpaces sales capacity, we engineer intelligent routing systems that qualify prospects instantly and route dossiers to the correct agent.
                </p>
                
                <div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "12px", overflow: "hidden", margin: "2rem 0", border: "1px solid var(--border)" }}>
                  <Image src="/solutions_automation_1784545471642.png" alt="Automation pipeline and intelligent routing" fill style={{ objectFit: "cover", opacity: 0.8 }} />
                </div>
              </div>

              {/* Technology Transparency Sub-section */}
              <div>
                <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)", marginBottom: "1rem" }}>Technology Implementation Layer</h5>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>AI Voice Receptionist</span>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>Calendar Integration</span>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>Enterprise CRM</span>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>Automated Routing Logic</span>
                </div>
              </div>

              {/* Interactive Educational Workflow Explorer */}
              <div style={{ border: "1px solid var(--border)", borderRadius: "12px", background: "#050505", overflow: "hidden", marginTop: "2rem" }}>
                <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.9rem", color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Interactive Demonstration: Workflow Explorer</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Click stages to explore logic</span>
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", minHeight: "400px" }}>
                  
                  {/* Sidebar Timeline */}
                  <div style={{ borderRight: "1px solid var(--border)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", background: "rgba(255,255,255,0.01)" }}>
                    {workflowStages.map((stage, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveStage(idx)}
                        style={{
                          background: activeStage === idx ? "rgba(255,255,255,0.05)" : "transparent",
                          border: `1px solid ${activeStage === idx ? "var(--foreground)" : "transparent"}`,
                          color: activeStage === idx ? "var(--foreground)" : "var(--muted-foreground)",
                          padding: "1rem",
                          borderRadius: "8px",
                          textAlign: "left",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem"
                        }}
                      >
                        <span style={{ fontSize: "0.8rem", opacity: 0.5 }}>0{idx + 1}</span>
                        <span style={{ fontSize: "1rem", fontWeight: activeStage === idx ? 500 : 400 }}>{stage.title}</span>
                      </button>
                    ))}
                  </div>

                  {/* Content Area */}
                  <div style={{ padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ animation: "fadeIn 0.3s ease" }} key={activeStage}>
                      <span className="section-eyebrow">Stage 0{activeStage + 1}: {workflowStages[activeStage].title}</span>
                      
                      <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>What Happens</h5>
                          <p style={{ fontSize: "1.2rem", color: "var(--foreground)" }}>{workflowStages[activeStage].action}</p>
                        </div>
                        
                        <div>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Business Value</h5>
                          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)" }}>{workflowStages[activeStage].value}</p>
                        </div>
                        
                        <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.03)", borderLeft: "3px solid var(--foreground)", borderRadius: "0 8px 8px 0" }}>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)", marginBottom: "0.5rem" }}>Operational Benefit</h5>
                          <p style={{ fontSize: "1.1rem", color: "var(--foreground)", margin: 0 }}>{workflowStages[activeStage].benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Ecosystem Interlinking */}
              <div style={{ display: "flex", gap: "3rem", marginTop: "2rem", borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Related Transformation</span>
                   <Link href="/transformations" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Intelligent Lead Routing (Internal Demo) →</Link>
                </div>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Core Methodology</span>
                   <Link href="/methodologies" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Intelligent Orchestration →</Link>
                </div>
              </div>
            </div>

            {/* Solution 2: White-Glove Onboarding Architecture */}
            <div className="glass-panel" style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "3rem" }}>
              <div>
                <span className="section-eyebrow" style={{ marginBottom: 0 }}>Customer Experience</span>
                <h2 style={{ fontSize: "3rem", color: "var(--foreground)", marginTop: "1rem" }}>White-Glove Onboarding Architecture</h2>
                <p style={{ fontSize: "1.3rem", maxWidth: "800px", marginTop: "1.5rem", color: "var(--muted-foreground)" }}>
                  High-ticket clients expect premium experiences. We replace disjointed email threads and manual data entry with unified client portals that automatically provision resources and update your CRM.
                </p>
              </div>

              {/* Technology Transparency Sub-section */}
              <div>
                <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)", marginBottom: "1rem" }}>Technology Implementation Layer</h5>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>Custom Client Portal (React)</span>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>PostgreSQL Database</span>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>Stripe Billing API</span>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>DocuSign API</span>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div style={{ padding: "3rem", background: "#050505", border: "1px solid var(--border)", borderRadius: "12px", marginTop: "2rem" }}>
                <h5 style={{ fontSize: "0.9rem", color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2rem" }}>Provisioning Architecture Flow</h5>
                <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet">
                  
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
                  
                  <rect x="670" y="70" width="100" height="60" rx="8" fill="rgba(100,255,100,0.05)" stroke="rgba(100,255,100,0.3)" />
                  <text x="720" y="104" fill="rgba(100,255,100,0.8)" fontSize="12" textAnchor="middle">CRM Provisioned</text>
                </svg>
              </div>

              {/* Ecosystem Interlinking */}
              <div style={{ display: "flex", gap: "3rem", marginTop: "2rem", borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Related Transformation</span>
                   <Link href="/transformations" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Global Professional Services Firm →</Link>
                </div>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Core Methodology</span>
                   <Link href="/methodologies" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>System Architecture →</Link>
                </div>
              </div>
            </div>

            {/* Solution 3: Data Unification & Intelligence */}
            <div className="glass-panel" style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "3rem" }}>
              <div>
                <span className="section-eyebrow" style={{ marginBottom: 0 }}>Internal Operations</span>
                <h2 style={{ fontSize: "3rem", color: "var(--foreground)", marginTop: "1rem" }}>Data Unification & Intelligence</h2>
                <p style={{ fontSize: "1.3rem", maxWidth: "800px", marginTop: "1.5rem", color: "var(--muted-foreground)" }}>
                  When data is siloed, decision-making slows down. We build the central nervous system that ensures your billing, project management, and CRM are operating from a single source of truth.
                </p>
              </div>

              {/* Technology Transparency Sub-section */}
              <div>
                <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)", marginBottom: "1rem" }}>Technology Implementation Layer</h5>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>Data Warehouse</span>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>ETL Pipelines</span>
                  <span style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.9rem" }}>Business Dashboards</span>
                </div>
              </div>

              {/* Data Ecosystem Map */}
              <div style={{ padding: "3rem", background: "#050505", border: "1px solid var(--border)", borderRadius: "12px", marginTop: "2rem" }}>
                <h5 style={{ fontSize: "0.9rem", color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2rem" }}>Centralized Data Ecosystem Map</h5>
                <svg width="100%" height="250" viewBox="0 0 800 250" preserveAspectRatio="xMidYMid meet">
                  
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

              {/* Ecosystem Interlinking */}
              <div style={{ display: "flex", gap: "3rem", marginTop: "2rem", borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Core Methodology</span>
                   <Link href="/methodologies" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Operational Mapping →</Link>
                </div>
                <div>
                   <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Related Insight</span>
                   <Link href="/insights" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>The Illusion of Software Solutions →</Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
