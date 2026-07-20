import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Lab | Ayan AI Studio",
  description: "Our internal research and development division. We continuously study, design, and validate intelligent business architectures.",
};

const evolutionSteps = [
  "Business Observation",
  "Operational Analysis",
  "Research",
  "Architecture",
  "Prototype",
  "Internal Validation",
  "Production",
  "Business Transformation"
];

const principles = [
  {
    title: "Understand operations before technology.",
    desc: "Technology cannot fix broken processes. We always begin by mapping the physical flow of data and human decision-making before any code is written."
  },
  {
    title: "Business architecture precedes implementation.",
    desc: "The structural design of an organization must dictate its software. We define the operational architecture first, ensuring technology serves the business, not the other way around."
  },
  {
    title: "Prototype before production.",
    desc: "Assumptions are dangerous in complex environments. We isolate operational friction and test isolated architectural solutions before scaling them across a business."
  },
  {
    title: "Validate ideas through practical use.",
    desc: "Theories rarely survive operational reality. We build and deploy systems within our own closed environments to measure their actual impact before presenting them to clients."
  },
  {
    title: "Technology should support organizational workflows.",
    desc: "Humans should not have to adapt their workflows to match rigid software. We engineer flexible systems designed specifically to enhance existing organizational workflows."
  },
  {
    title: "Build systems that continuously evolve.",
    desc: "Static systems degrade as businesses grow. We engineer modular, decoupled architectures designed to adapt effortlessly as operational complexity increases."
  }
];

const labProjects = [
  {
    category: "Internal Operating Systems",
    name: "AgencyOS",
    badge: "Primary Operational Platform",
    metadata: [
      { label: "Current Status", value: "Production" },
      { label: "Research Phase", value: "Continuous Expansion" },
      { label: "Current Focus", value: "Workflow Intelligence Layer" }
    ],
    purpose: "Centralize all agency operations into a single connected platform.",
    problem: "As digital agencies grow, operational complexity increases exponentially. Different departments begin relying on isolated tools for sales, project delivery, and client communication. This fragmentation forces highly paid specialists into manual data transfer, creating severe administrative bottlenecks and destroying leadership visibility.",
    focus: "Rather than introducing yet another SaaS product to bridge the gaps, we architected a single, unified database and workflow layer. AgencyOS was built from the ground up to handle leads, clients, projects, and reporting natively without manual synchronization.",
    progress: "AgencyOS is currently deployed as the primary operating system for our studio. It handles every aspect of our daily operations, proving that centralized architecture eliminates repetitive administration.",
    evolution: "The system is continuously refined as our operations scale. The current research focuses on integrating an intelligence layer to passively predict project delays and automate client reporting before human intervention is required.",
    relatedTransformation: "Digital Agencies (AgencyOS)",
    liveLink: "https://agency-application-fckg.vercel.app",
    liveButtonLabel: "Explore AgencyOS",
    isInternal: true,
    screenshotPlaceholder: true
  },
  {
    category: "Internal Operating Systems",
    name: "Autonomous Multi-Platform Publishing System",
    metadata: [
      { label: "Current Status", value: "Production" },
      { label: "Research Phase", value: "Optimization" },
      { label: "Current Focus", value: "Cross-Platform Analytics" }
    ],
    purpose: "Automate content distribution without manual intervention.",
    problem: "Content publishing traditionally creates highly repetitive administrative work. In a busy studio, managing different formats, scheduling interfaces, and platform requirements fragments workflows and consumes valuable operational hours that should be spent on deep analytical work.",
    focus: "The system was designed to centralize scheduling, preparation, and distribution into one automated operational workflow. We built a robust orchestration pipeline that ingests raw markdown, validates formatting, and handles cross-platform APIs entirely behind the scenes.",
    progress: "The pipeline is actively deployed in production, reliably processing and distributing 100% of the studio's outbound communication across LinkedIn, Instagram, and X without human supervision.",
    evolution: "We are currently researching how to integrate predictive engagement analytics. The goal is to allow the system to dynamically optimize its own publishing schedules based on real-time audience telemetry.",
    image: "/lab_publishing_workflow_1784544869366.png",
    imageAlt: "Digital publishing workflow pipeline architecture"
  },
  {
    category: "Research Prototypes",
    name: "Lead Intelligence Pipeline",
    metadata: [
      { label: "Current Status", value: "Internal Testing" },
      { label: "Research Phase", value: "Validation" },
      { label: "Current Focus", value: "Deterministic Parsing" }
    ],
    purpose: "Asynchronously evaluate and score inbound inquiries based on deterministic business rules.",
    problem: "In premium environments, high-value prospects are frequently delayed or lost entirely when human agents must manually sort through unqualified leads in a chronological inbox. Synchronous human evaluation is fundamentally incompatible with high-volume intake.",
    focus: "We are exploring the deployment of deterministic parsing logic capable of instantly evaluating business parameters (budget, timeline, intent) the moment an inquiry arrives, effectively removing the human from the initial sorting phase.",
    progress: "The prototype is deployed internally, silently analyzing inbound requests and routing only high-intent, qualified inquiries directly to senior architects while filtering noise.",
    evolution: "Future iterations will expand parameter extraction capabilities to handle unstructured data formats, such as automated transcription parsing, before being adapted into commercial intake systems.",
    relatedTransformation: "Intelligent Lead Routing Systems",
    image: "/lab_lead_pipeline_1784544885964.png",
    imageAlt: "Lead intelligence data pipeline routing network"
  },
  {
    category: "Research Prototypes",
    name: "Autonomous Client Diagnostics (AI Reception)",
    metadata: [
      { label: "Current Status", value: "Prototype" },
      { label: "Research Phase", value: "Experimentation" },
      { label: "Current Focus", value: "Conversational Fluidity" }
    ],
    purpose: "Perform preliminary operational audits via conversational reasoning.",
    problem: "Initial consulting discovery calls require highly expensive senior operational time simply to gather basic structural data about a client's business. This is an inefficient allocation of human analytical capital.",
    focus: "We are training an LLM orchestration layer to act as an intelligent operational analyst. The research focuses on whether an AI can dynamically extract structural bottlenecks and business context during a natural, fluid conversation without a rigid questionnaire.",
    progress: "The system is currently undergoing testing within closed environments. We are measuring its parameter extraction accuracy and conversational adaptability against recorded human consulting sessions.",
    evolution: "Once validated, this reasoning layer will be integrated into our Customer Communication System architectures, serving as the frontline intake mechanism for complex service businesses.",
    relatedTransformation: "Intelligent Lead Routing Systems",
    image: "/lab_ai_reception_1784544895819.png",
    imageAlt: "AI interacting with human communication nodes"
  },
  {
    category: "Experimental AI Systems",
    name: "Workflow Intelligence Engine",
    metadata: [
      { label: "Current Status", value: "Research" },
      { label: "Research Phase", value: "Data Aggregation" },
      { label: "Current Focus", value: "Predictive Modeling" }
    ],
    purpose: "Predict and suggest workflow optimizations based on real-time operational metadata.",
    problem: "Operational bottlenecks are often completely invisible until they cause severe process failures. Leadership is forced to manage reactively, diagnosing problems only after deadlines are missed or margins degrade.",
    focus: "We are exploring whether machine learning models can be applied to the passive metadata generated by internal operating systems to autonomously identify friction points, latency anomalies, and resource misallocations.",
    progress: "The initiative is in its earliest research stages. We are currently building pipelines to safely aggregate anonymized workflow data across internal systems to train the initial predictive model.",
    evolution: "If successful, the engine will be deployed as a passive, invisible analytical layer inside future client transformations, continuously monitoring organizational health and suggesting structural improvements.",
    image: "/lab_workflow_engine_1784544909517.png",
    imageAlt: "Automated machine learning workflow system blueprint"
  }
];

export default function LabPage() {
  const categories = ["Internal Operating Systems", "Research Prototypes", "Experimental AI Systems"];

  return (
    <main>
      {/* Hero Section */}
      <header className="page-header">
        <span className="section-eyebrow animate-fade-up">Innovation Lab</span>
        <h1 className="page-title animate-fade-up delay-1" style={{ fontSize: "4.5rem", maxWidth: "900px" }}>Research & Architecture.</h1>
        <p className="page-subtitle animate-fade-up delay-2" style={{ maxWidth: "800px", fontSize: "1.25rem", lineHeight: 1.7 }}>
          This laboratory is dedicated to operational research, business architecture, and workflow experimentation. Every transformation we deliver begins here through rigorous internal validation and continuous structural refinement.
        </p>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          {/* Research Philosophy */}
          <div style={{ marginBottom: "8rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "3rem", color: "var(--foreground)", marginBottom: "1.5rem" }}>The Lifecycle of Innovation</h2>
              <p style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                Every transformation begins with observation. We do not believe in random experimentation or building software in a vacuum. Our research division continuously conducts operational analysis, tests architectural hypotheses through rapid prototyping, validates systems internally, and refines them into production-grade infrastructure.
              </p>
            </div>
            
            {/* Visual Evolution Model */}
            <div className="glass-panel" style={{ padding: "3rem 2rem", overflowX: "auto" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {evolutionSteps.map((step, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <div style={{ 
                      width: "30px", 
                      height: "30px", 
                      borderRadius: "50%", 
                      background: idx === evolutionSteps.length - 1 ? "var(--foreground)" : "rgba(255,255,255,0.05)",
                      border: idx === evolutionSteps.length - 1 ? "none" : "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: idx === evolutionSteps.length - 1 ? "var(--background)" : "var(--muted-foreground)",
                      fontSize: "0.8rem",
                      fontWeight: 600
                    }}>
                      {idx + 1}
                    </div>
                    <span style={{ fontSize: "1.05rem", color: idx === evolutionSteps.length - 1 ? "var(--foreground)" : "var(--muted-foreground)", fontWeight: idx === evolutionSteps.length - 1 ? 500 : 400 }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Research Principles */}
          <div style={{ marginBottom: "10rem" }}>
            <span className="section-eyebrow">Operating Standard</span>
            <h2 style={{ fontSize: "2.5rem", color: "var(--foreground)", marginBottom: "3rem" }}>Research Principles</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {principles.map((p, i) => (
                <div key={i} className="glass-panel" style={{ padding: "2.5rem" }}>
                  <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "1rem" }}>{p.title}</h4>
                  <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects by Category */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
            {categories.map((category) => (
              <div key={category}>
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem", marginBottom: "4rem" }}>
                  <h2 style={{ fontSize: "2rem", color: "var(--foreground)", margin: 0 }}>{category}</h2>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
                  {labProjects.filter(p => p.category === category).map((project, idx) => (
                    <article key={idx} className="glass-panel" style={{ padding: "4rem" }}>
                      
                      {/* Header */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                            <h3 style={{ fontSize: "2.5rem", color: "var(--foreground)", margin: 0 }}>{project.name}</h3>
                            {(project as any).badge && (
                              <span style={{ padding: "0.4rem 1rem", background: "var(--foreground)", color: "var(--background)", borderRadius: "100px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                                {(project as any).badge}
                              </span>
                            )}
                          </div>

                          {/* Metadata Grid */}
                          {project.metadata && (
                            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                              {project.metadata.map((meta, mIdx) => (
                                <div key={mIdx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)" }}>{meta.label}:</span>
                                  <span style={{ fontSize: "0.85rem", color: "var(--foreground)", fontWeight: 500 }}>{meta.value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        {project.liveLink && (
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "1rem 2rem", fontSize: "0.95rem" }}>
                            {project.liveButtonLabel}
                          </Link>
                        )}
                      </div>

                      {/* Body Grid */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
                        
                        <div>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "1rem" }}>Purpose</h5>
                          <p style={{ fontSize: "1.15rem", color: "var(--foreground)", lineHeight: 1.6 }}>{project.purpose}</p>
                        </div>
                        
                        <div>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "1rem" }}>Business Problem</h5>
                          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{project.problem}</p>
                        </div>
                        
                        <div>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "1rem" }}>Research Focus & Strategy</h5>
                          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{project.focus}</p>
                        </div>
                        
                        <div>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "1rem" }}>Current Validation</h5>
                          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{project.progress}</p>
                        </div>
                        
                      </div>

                      {/* Visual Architecture Section */}
                      {((project as any).image || (project as any).screenshotPlaceholder) && (
                        <div style={{ marginBottom: "4rem" }}>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>System Architecture & Evidence</h5>
                          
                          {(project as any).image && (
                            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", background: "#050505" }}>
                              <Image 
                                src={(project as any).image} 
                                alt={(project as any).imageAlt} 
                                fill 
                                style={{ objectFit: "cover", opacity: 0.8 }} 
                              />
                            </div>
                          )}

                          {(project as any).screenshotPlaceholder && (
                            <div className="browser-mockup" style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", background: "#000", position: "relative" }}>
                              {/* Browser Header */}
                              <div style={{ padding: "0.75rem 1rem", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid var(--border)", display: "flex", gap: "0.5rem" }}>
                                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--border-hover)" }} />
                                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--border-hover)" }} />
                                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--border-hover)" }} />
                              </div>
                              {/* Content Area */}
                              <div style={{ width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
                                <div style={{ width: "40px", height: "40px", border: "1px dashed var(--border)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted-foreground)" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                                </div>
                                <span style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Insert AgencyOS Dashboard Screenshot</span>
                                <span style={{ fontSize: "0.75rem", color: "var(--border-hover)" }}>Recommended Size: 1920x1080</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Footer Grid */}
                      <div style={{ padding: "3rem", background: "rgba(255,255,255,0.01)", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)", marginBottom: "0.5rem" }}>Expected Evolution</h5>
                          <p style={{ fontSize: "1.1rem", color: "var(--foreground)", lineHeight: 1.6, margin: 0 }}>{project.evolution}</p>
                        </div>
                        
                        {project.relatedTransformation && (
                          <div style={{ marginTop: "1rem" }}>
                            <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Informs Transformation</span>
                            <Link href="/transformations" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>{project.relatedTransformation} →</Link>
                          </div>
                        )}
                      </div>

                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Closing Reflection */}
          <div style={{ marginTop: "8rem", padding: "6rem 4rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "24px", textAlign: "center" }}>
            <span className="section-eyebrow">Why This Laboratory Exists</span>
            <h2 style={{ fontSize: "2.5rem", color: "var(--foreground)", margin: "2rem auto", maxWidth: "800px" }}>Every transformation begins as structured research.</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto 3rem" }}>
              Our internal systems are continuously analyzed, challenged, and improved through practical daily use. The most successful architectural ideas mature into production operating systems, eventually forming the foundational methodology for our client transformations.
            </p>
          </div>

          {/* Global CTA */}
          <div style={{ textAlign: "center", marginTop: "8rem" }}>
             <h3 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Ready to redesign your business architecture?</h3>
             <Link href="/start" className="btn-primary">Schedule a Business Analysis</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
