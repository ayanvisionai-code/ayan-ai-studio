import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "Innovation Lab | Ayan AI Studio",
  description: "Our internal research and development division. We continuously study, design, and validate intelligent business architectures.",
};

interface LabProject {
  category: string;
  name: string;
  badge?: string;
  metadata?: { label: string; value: string }[];
  purpose: string;
  problem: string;
  focus: string;
  progress: string;
  evolution: string;
  relatedTransformation?: string;
  liveLink?: string;
  liveButtonLabel?: string;
  isInternal?: boolean;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

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

const labProjects: LabProject[] = [
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
    image: "/agencyos-dashboard.png",
    imageAlt: "AgencyOS unified dashboard showing leads, clients, active projects and outstanding invoices",
    imageWidth: 1906,
    imageHeight: 953
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
      <header className="page-header" style={{ padding: "11rem 5vw 4rem" }}>
        <SectionEyebrow label="R&amp;D Division" variant="teal" />
        <h1 className="page-title" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", maxWidth: "900px" }}>
          Research &amp; <span className="title-gradient">Architecture Lab.</span>
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "800px", fontSize: "1.25rem", lineHeight: 1.7, color: "var(--growrev-text-muted)" }}>
          Dedicated to operational research, business architecture, and workflow experimentation. Every commercial transformation we deliver begins here through rigorous internal validation.
        </p>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          {/* Research Philosophy */}
          <div className="grid-2col lab-philosophy" style={{ alignItems: "center" }}>
            <div>
              <h2 className="heading-lg" style={{ color: "var(--foreground)", marginBottom: "1.5rem" }}>The Lifecycle of Innovation</h2>
              <p style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                Every transformation begins with observation. We do not believe in random experimentation or building software in a vacuum. Our research division continuously conducts operational analysis, tests architectural hypotheses through rapid prototyping, validates systems internally, and refines them into production-grade infrastructure.
              </p>
            </div>

            {/* Visual Evolution Model */}
            <div className="glass-panel lab-evolution-panel" style={{ overflowX: "auto" }}>
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
          <div className="lab-principles">
            <span className="section-eyebrow">Operating Standard</span>
            <h2 className="heading-md" style={{ color: "var(--foreground)", marginBottom: "3rem" }}>Research Principles</h2>
            <div className="grid-auto-md lab-principles-grid">
              {principles.map((p, i) => (
                <div key={i} className="glass-panel panel-pad-sm">
                  <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "1rem" }}>{p.title}</h4>
                  <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects by Category */}
          <div className="lab-categories-stack" style={{ display: "flex", flexDirection: "column" }}>
            {categories.map((category) => (
              <div key={category}>
                <div className="lab-category-header" style={{ borderBottom: "1px solid var(--border)" }}>
                  <h2 className="lab-category-title" style={{ color: "var(--foreground)", margin: 0 }}>{category}</h2>
                </div>

                <div className="lab-projects-stack" style={{ display: "flex", flexDirection: "column" }}>
                  {labProjects.filter(p => p.category === category).map((project, idx) => (
                    <article key={idx} className="glass-panel panel-pad-lg">

                      {/* Header */}
                      <div className="lab-project-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem" }}>
                        <div>
                          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                            <h3 className="heading-md" style={{ color: "var(--foreground)", margin: 0 }}>{project.name}</h3>
                            {project.badge && (
                              <span style={{ padding: "0.4rem 1rem", background: "var(--foreground)", color: "var(--background)", borderRadius: "100px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                                {project.badge}
                              </span>
                            )}
                          </div>

                          {/* Metadata Grid */}
                          {project.metadata && (
                            <div className="lab-project-meta" style={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem" }}>
                              {project.metadata.map((meta, mIdx) => (
                                <div key={mIdx} className="lab-meta-item">
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
                      <div className="grid-2col lab-project-body">
                        
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
                      {project.image && (
                        <div className="lab-project-visual">
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>System Architecture & Evidence</h5>

                          {project.imageWidth ? (
                            // Real product screenshot (e.g. AgencyOS dashboard) — sized to its
                            // true aspect ratio with object-fit: contain so no interface chrome
                            // is ever cropped, matching the same shot's treatment on the
                            // Transformations → Custom Applications page.
                            <div className="lab-evidence-shot" style={{ position: "relative", width: "100%", aspectRatio: `${project.imageWidth} / ${project.imageHeight}`, borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", background: "#050505" }}>
                              <Image
                                src={project.image}
                                alt={project.imageAlt ?? ""}
                                fill
                                sizes="(max-width: 768px) 100vw, 700px"
                                style={{ objectFit: "contain" }}
                              />
                            </div>
                          ) : (
                            // Illustrative architecture diagram — square source asset.
                            <div className="lab-visual-image" style={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", background: "#050505" }}>
                              <Image
                                src={project.image}
                                alt={project.imageAlt ?? ""}
                                fill
                                style={{ objectFit: "cover", opacity: 0.8 }}
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {/* Footer Grid */}
                      <div className="panel-pad-md lab-project-footer" style={{ background: "rgba(255,255,255,0.01)", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
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
          <div className="panel-pad-callout lab-reflection" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "24px", textAlign: "center" }}>
            <span className="section-eyebrow">Why This Laboratory Exists</span>
            <h2 className="heading-md" style={{ color: "var(--foreground)", margin: "2rem auto", maxWidth: "800px" }}>Every transformation begins as structured research.</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto 3rem" }}>
              Our internal systems are continuously analyzed, challenged, and improved through practical daily use. The most successful architectural ideas mature into production operating systems, eventually forming the foundational methodology for our client transformations.
            </p>
          </div>

          {/* Global CTA */}
          <div className="lab-cta" style={{ textAlign: "center" }}>
             <h3 className="lab-cta-title">Ready to redesign your business architecture?</h3>
             <Link href="/start" className="btn-primary lab-cta-button">Schedule a Business Analysis →</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
