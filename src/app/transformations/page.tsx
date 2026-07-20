import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transformations | Ayan AI Studio",
  description: "Executive consulting reports detailing business bottlenecks, system architectures, and measurable outcomes.",
};

const transformations = [
  {
    type: "Commercial Implementation",
    client: "Rongdhonu Operating System",
    summary: "Engineered a comprehensive Digital Operating System for a cultural organization. We decoupled their public digital presence from their internal administration, replacing scattered manual workflows with a single centralized platform that governs artists, members, exhibitions, and historical archives.",
    context: "Rongdhonu is a cultural organization managing artists, exhibitions, artwork, members, public engagement, and organizational history. As the organization expanded, manual coordination became increasingly difficult. Administrative activities—such as tracking artist submissions, managing member renewals, and organizing exhibition data—became severely fragmented across different SaaS tools and paper-based processes.",
    challenges: "The organization experienced severe administrative overhead. Member management was entirely manual, requiring individual tracking in spreadsheets. Artwork tracking was disjointed, making it difficult to maintain an accurate catalog. Furthermore, exhibition preparation was incredibly time-consuming due to disconnected communication, and preserving historical records of past events was nearly impossible.",
    bottlenecks: "The root cause of these challenges was a complete lack of centralized operations. Because information was siloed in different spreadsheets and email inboxes, administrators were forced into repeated manual work just to keep the organization running. The lack of integrations meant there was extremely limited operational visibility, and critical organizational knowledge was trapped in the minds of individual administrators.",
    discovery: "We analyzed the organization by studying how exhibition operations were conducted and evaluating member management workflows. We identified severe administrative pain points caused by redundant data entry. We observed that their public website was completely disconnected from their internal database. Our priority was not to just build a new website, but to redesign their entire operational architecture to support sustainable long-term growth.",
    objectives: "Centralize all organizational information into a single database. Reduce manual administration. Improve collaboration among administrators. Simplify exhibition preparation. Improve the public experience, and create a scalable architecture that preserves historical records indefinitely.",
    strategy: "The chosen strategy was to strictly separate the public experience from internal operations. Rather than building a monolithic website, we architected a connected operating system. By centralizing organizational knowledge in a headless backend, we could reduce repetitive administration and ensure that every piece of data—whether an artist profile or an exhibition record—only needed to be entered once. This architectural decision guarantees future scalability.",
    architecture: [
      "Members", "Artist Portal", "Artwork Catalog", "Exhibitions", "Administration", "Archive", "Public Gallery"
    ],
    implementation: "We built two interconnected environments. The Internal Platform manages member accounts, artist profiles, artwork catalogs, exhibition workflows, notifications, and historical archives via a secure Administration Dashboard. The Public Platform serves as the organization's face, displaying the website, artist showcases, exhibition archives, artwork galleries, public events, and organizational information.",
    results: "The operating system fundamentally transformed how Rongdhonu functions. All organizational information is now centralized, leading to vastly simplified exhibition preparation and improved administrative coordination. Artwork management is now precise and scalable. The public communication is far more consistent, and the organization now possesses a permanent, automated mechanism for the long-term preservation of its history.",
    lessons: "This project proved that technology alone does not solve operational problems. Understanding internal workflows is far more important than merely selecting software. By ensuring business architecture preceded implementation, we delivered operational clarity that creates genuine long-term sustainability.",
    mockups: [
      {
        title: "Public Platform Interface",
        label: "Insert Rongdhonu Public Website Screenshot (1920x1080)"
      },
      {
        title: "Administrative Headless CMS",
        label: "Insert Rongdhonu Admin Dashboard Screenshot (1920x1080)"
      }
    ],
    liveLink: "https://rong-dhonu.vercel.app/en",
    ctaTitle: "11. Experience the Public Platform",
    ctaHeading: "Explore the Rongdhonu Operating System.",
    ctaDescription: "Explore the public-facing experience of the Rongdhonu Operating System. The administrative operating system remains private and is used exclusively by authorized organization administrators.",
    ctaPrimaryButton: "View Live Public Platform",
    ctaSecondaryButton: "Explore System Architecture",
    framework: "Connected Business Architecture",
    relatedInsights: ["Designing for Invisibility", "The Cost of Fragmented Logic"],
    relatedMethodologies: ["System Architecture", "Operational Mapping"],
    relatedSolution: "Data Unification & Intelligence"
  },
  {
    type: "Unified Operating System",
    client: "Digital Agencies (AgencyOS)",
    summary: "Digital agencies often rely on many disconnected tools to manage leads, projects, communication, workflows, reporting, and client relationships. AgencyOS was designed as a unified operating system that brings these operational functions into one connected platform. The objective was not to build another SaaS product. The objective was to redesign how agencies operate.",
    context: "Digital agencies handle sales, client onboarding, project delivery, team collaboration, automation, reporting, and customer communication simultaneously. As agencies grow, operational complexity increases. Different departments begin relying on separate tools, making coordination increasingly difficult.",
    challenges: "Leads are stored in different places. Client onboarding is painfully manual. Project information is scattered across tools, making team coordination difficult. Administrators suffer from repeated work, while leadership has poor visibility into operations. Disconnected reporting and workflow inconsistency fuel growing operational complexity.",
    bottlenecks: "These problems existed because of multiple disconnected platforms. Manual information transfer caused duplicate work and fragmented communication. There was no centralized operational architecture. The lack of standardized workflows inherently limited business visibility.",
    discovery: "We studied agency workflows by analyzing lead acquisition, the sales process, client onboarding, project execution, internal collaboration, and reporting. We mapped operational dependencies and observed that agencies did not need more software. They needed one connected operating model.",
    objectives: "Centralize business operations. Reduce operational complexity. Create one source of truth. Improve collaboration, support automation, increase visibility, and build truly scalable operational processes.",
    strategy: "The architectural thinking prioritized one integrated operating system instead of introducing additional disconnected tools. We designed a modular architecture with unified workflows, connected data, and shared operational intelligence. Future scalability was the primary directive, ensuring technology remained secondary to the business strategy.",
    architecture: [
      "Lead Capture", "Sales Pipeline", "Client Onboarding", "Project Workspace", "Task Automation", "Reporting"
    ],
    implementation: "AgencyOS provides comprehensive business capabilities: Lead Management, CRM, Client Management, Project Workspace, Task Management, Workflow Automation, Internal Dashboard, Reporting, Authentication, Role-based Access, Notifications, Knowledge Management, and Analytics. These operational functions are powered by a headless architecture.",
    results: "Agency operations improved significantly. The platform provided centralized operational visibility, more efficient client onboarding, and better collaboration. Project tracking improved while manual administration was drastically reduced. Connected workflows resulted in scalable operational processes.",
    lessons: "Business architecture should come before software selection. Operational clarity is more valuable than adding more tools. Connected systems outperform disconnected workflows. Technology creates value only when it supports well-designed operations.",
    mockups: [
      {
        title: "Unified Agency Dashboard",
        label: "Insert AgencyOS Dashboard Screenshot (1920x1080)"
      },
      {
        title: "Integrated CRM & Client Management",
        label: "Insert AgencyOS CRM Screen Screenshot (1920x1080)"
      },
      {
        title: "Project Workspace & Workflow",
        label: "Insert AgencyOS Workflow Screen Screenshot (1920x1080)"
      }
    ],
    liveLink: "https://agency-application-fckg.vercel.app",
    ctaTitle: "11. Experience AgencyOS",
    ctaHeading: "AgencyOS represents the practical implementation of the transformation described above.",
    ctaDescription: "Explore the live platform to understand how modern digital agencies can centralize operations, manage client relationships, organize projects, automate workflows, and improve operational visibility through one connected operating system. The platform demonstrates how business architecture is translated into a real operational system.",
    ctaPrimaryButton: "Explore AgencyOS",
    ctaSecondaryButton: "Explore System Architecture (Coming Soon)",
    ctaInfoCardTitle: "Live Demonstration",
    ctaInfoCardContent: "This public platform demonstrates the practical implementation of the AgencyOS operational architecture. Visitors can explore the interface to better understand how the system supports agency operations through one connected platform.",
    endingNote: "This transformation illustrates our approach to designing intelligent business operating systems. Rather than introducing additional software, we begin by understanding operational workflows, identifying structural bottlenecks, and designing an architecture that enables organizations to operate with greater clarity, coordination, and scalability. AgencyOS is the practical outcome of that philosophy.",
    framework: "Connected Business Architecture",
    relatedInsights: ["The Cost of Fragmented Logic", "Designing for Invisibility"],
    relatedMethodologies: ["System Architecture", "Operational Mapping"],
    relatedSolution: "Data Unification & Intelligence"
  },
  {
    type: "Internal Demonstration",
    client: "Intelligent Lead Routing Systems",
    summary: "An internal prototype demonstrating how conversational AI can function as a centralized operational intake layer. The system eliminates manual lead qualification, protects expensive human capital, and ensures instant, accurate routing of high-value prospects.",
    context: "In high-ticket sales environments (such as luxury real estate, premium consulting, and private equity), inbound lead volume frequently outpaces the capacity of the sales team. The existing way of working usually involves human agents reading inquiries chronologically and attempting to decide who is worth calling. The operational environment demands extreme speed and precision.",
    challenges: "The daily reality involved extremely slow customer response times, duplicate work as agents manually sorted through unqualified emails, and a heavy reliance on disjointed spreadsheets to track VIP prospects. Fragmented communication meant that high-value leads were frequently slipping through the cracks while agents wasted time on unqualified inquiries.",
    bottlenecks: "The process lacked any standardized filtering automation. The bottleneck was entirely human: highly skilled closers were forced to perform manual administrative sorting before they could actually sell. Information silos between the website inbox and the CRM meant there was no way to instantly prioritize leads.",
    discovery: "During business discovery for similar clients, we consistently observed that sales agents were acting as expensive receptionists. We asked: 'How much revenue is lost because an agent is busy qualifying the wrong lead?' We analyzed existing workflows and realized that a synchronous, human-driven intake process was fundamentally incompatible with high-volume digital environments. The priority was asynchronous filtering.",
    objectives: "Centralize the intake operation. Simplify administration for the sales team. Improve the customer experience by providing instant responses, and increase operational visibility so leadership can track lead flow in real-time without manual reporting.",
    strategy: "The strategic solution required removing the human from the initial intake phase entirely. We evaluated using offshore virtual assistants but rejected the approach due to latency (time-to-lead must be under 5 minutes for conversion) and privacy concerns. The architectural decision was made to deploy an LLM-driven reasoning layer capable of instantly evaluating intent, querying parameters, and routing data without human delay. The trade-off was accepting a slightly less rigid intake format in exchange for conversational fluidity.",
    architecture: [
      "Visitor Intent", "AI Receptionist", "Parameter Extraction", "Qualification", "CRM Routing", "Agent Alert"
    ],
    implementation: "We built an AI Receptionist as the frontline implementation layer. The system utilizes conversational agents to engage the visitor, extract structured parameters (budget, timeline, requirements), and cross-reference them against internal business rules. Qualified dossiers are pushed directly into the CRM, and the correct agent receives an instant notification containing the summarized data.",
    results: "The system ensures instantaneous communication and faster operations. Agents no longer spend hours qualifying cold leads; they only speak to buyers who match exact criteria. This results in significantly reduced manual effort, better team coordination, and an incredibly scalable intake process that never sleeps.",
    lessons: "In premium environments, speed to qualification is more important than speed to response. A fast 'no' is just as valuable as a fast 'yes'. This project reinforced why centralized operations improve efficiency and why rigid workflows must sometimes give way to intelligent, probabilistic reasoning layers.",
    mockups: [
      {
        title: "AI Reception Logic Parsing",
        label: "Insert AI Conversation / Parameter Extraction Screenshot (1920x1080)"
      },
      {
        title: "CRM Lead Dossier (Automated)",
        label: "Insert CRM Routed Lead Screenshot (1920x1080)"
      }
    ],
    liveLink: "#",
    ctaTitle: "11. Explore the Live Platform",
    ctaHeading: "Experience the transformed system.",
    ctaDescription: "The public website serves as the front-end experience for clients, while the true Operational Core orchestrates data, logic, and reasoning silently behind the scenes for internal administrators.",
    ctaPrimaryButton: "View Live Platform",
    ctaSecondaryButton: "Explore System Architecture",
    framework: "Intelligent Orchestration",
    relatedInsights: ["Agents vs. Automations"],
    relatedMethodologies: ["Agent Integration", "Workflow Automation"],
    relatedSolution: "Customer Communication System"
  }
];

export default function TransformationsPage() {
  return (
    <main>
      <header className="page-header">
        <span className="section-eyebrow animate-fade-up">Evidence & Proof</span>
        <h1 className="page-title animate-fade-up delay-1">Executive Reports.</h1>
        <p className="page-subtitle animate-fade-up delay-2" style={{ maxWidth: "800px" }}>
          We do not build portfolios. We publish comprehensive transformation narratives that demonstrate our operational thinking, analytical process, and system design methodology.
        </p>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10rem" }}>
            {transformations.map((t, i) => (
              <article key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "10rem" }}>
                
                {/* 1. Executive Summary */}
                <header style={{ marginBottom: "6rem" }}>
                  <span className="section-eyebrow" style={{ color: "var(--foreground)", border: "1px solid var(--border)", padding: "0.4rem 1rem", borderRadius: "100px", display: "inline-block", marginBottom: "2rem" }}>
                    {t.type}
                  </span>
                  <h2 style={{ fontSize: "3.5rem", color: "var(--foreground)", marginBottom: "3rem", lineHeight: 1.1, fontWeight: 400 }}>{t.client}</h2>
                  
                  <div className="glass-panel" style={{ padding: "3rem", borderLeft: "4px solid var(--foreground)", background: "rgba(255,255,255,0.01)" }}>
                    <h4 className="section-eyebrow" style={{ color: "var(--foreground)", marginBottom: "1rem" }}>1. Executive Summary</h4>
                    <p style={{ fontSize: "1.3rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{t.summary}</p>
                  </div>
                </header>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
                  
                  {/* 2. Business Context */}
                  <div>
                    <h4 className="section-eyebrow">2. Business Context</h4>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--foreground)" }}>{t.context}</p>
                  </div>
                  
                  {/* 3 & 4. Challenges and Bottlenecks */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
                    <div className="glass-panel" style={{ padding: "2.5rem" }}>
                      <h4 className="section-eyebrow">3. Business Challenges</h4>
                      <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{t.challenges}</p>
                    </div>
                    <div className="glass-panel" style={{ padding: "2.5rem" }}>
                      <h4 className="section-eyebrow">4. Operational Bottlenecks</h4>
                      <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{t.bottlenecks}</p>
                    </div>
                  </div>

                  {/* 5 & 6. Discovery and Objectives */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
                    <div>
                      <h4 className="section-eyebrow">5. Business Discovery</h4>
                      <p style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>{t.discovery}</p>
                    </div>
                    <div>
                      <h4 className="section-eyebrow">6. Transformation Objectives</h4>
                      <p style={{ fontSize: "1.15rem", color: "var(--foreground)", lineHeight: 1.7, fontWeight: 500 }}>{t.objectives}</p>
                    </div>
                  </div>

                  {/* 7. Solution Strategy */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h4 className="section-eyebrow">7. Solution Strategy</h4>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{t.strategy}</p>
                  </div>

                  {/* Operational Workflow Diagram */}
                  <div style={{ marginTop: "1rem", marginBottom: "4rem" }}>
                    {/* Premium Workflow SVG Diagram */}
                    <div className="glass-panel" style={{ padding: "4rem 2rem", overflowX: "auto" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minWidth: "800px" }}>
                        {t.architecture.map((node, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center" }}>
                            {/* Node */}
                            <div style={{ 
                              display: "flex", 
                              flexDirection: "column", 
                              alignItems: "center", 
                              gap: "1rem",
                              width: "120px"
                            }}>
                              <div style={{ 
                                width: "60px", 
                                height: "60px", 
                                borderRadius: "16px", 
                                background: "rgba(10,10,10,0.8)", 
                                border: "1px solid rgba(255,255,255,0.1)",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative"
                              }}>
                                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: index === 0 ? "var(--foreground)" : index === t.architecture.length - 1 ? "var(--foreground)" : "var(--muted-foreground)" }} />
                              </div>
                              <span style={{ fontSize: "0.85rem", color: "var(--foreground)", textAlign: "center", fontWeight: 300 }}>{node}</span>
                            </div>
                            
                            {/* Connector */}
                            {index < t.architecture.length - 1 && (
                              <div style={{ width: "40px", height: "2px", background: "rgba(255,255,255,0.1)", position: "relative" }}>
                                <div style={{ position: "absolute", right: "-4px", top: "-3px", width: "8px", height: "8px", borderTop: "2px solid rgba(255,255,255,0.2)", borderRight: "2px solid rgba(255,255,255,0.2)", transform: "rotate(45deg)" }} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 8 & 9. Implementation and Outcomes */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
                    <div>
                      <h4 className="section-eyebrow">8. System Implementation</h4>
                      <p style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>{t.implementation}</p>
                    </div>
                    <div>
                      <h4 className="section-eyebrow">9. Operational Results</h4>
                      <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--foreground)" }}>{t.results}</p>
                    </div>
                  </div>

                  {/* 10. Lessons Learned */}
                  <div className="glass-panel" style={{ padding: "3rem", borderTop: "1px solid var(--border)" }}>
                    <h4 className="section-eyebrow">10. Lessons Learned</h4>
                    <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{t.lessons}</p>
                  </div>
                  
                  {/* Screenshots / Mockups */}
                  {(t as any).mockups && (
                    <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", gap: "4rem" }}>
                      {(t as any).mockups.map((mockup: any, mIdx: number) => (
                        <div key={mIdx}>
                          <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginBottom: "1rem" }}>{mockup.title}</h5>
                          <div className="browser-mockup" style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", background: "#050505", position: "relative" }}>
                            {/* Browser Header */}
                            <div style={{ padding: "0.75rem 1rem", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid var(--border)", display: "flex", gap: "0.5rem" }}>
                              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--border-hover)" }} />
                              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--border-hover)" }} />
                              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--border-hover)" }} />
                            </div>
                            {/* Content Area */}
                            <div style={{ width: "100%", height: "500px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
                              <div style={{ width: "40px", height: "40px", border: "1px dashed var(--border)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted-foreground)" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                              </div>
                              <span style={{ fontSize: "0.95rem", color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{mockup.label}</span>
                              <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Update image source in code once available.</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 11. Live Experience */}
                  <div style={{ padding: "4rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px", textAlign: "center", marginTop: "2rem" }}>
                    <h4 className="section-eyebrow" style={{ margin: 0, marginBottom: "1.5rem" }}>{t.ctaTitle}</h4>
                    <h3 style={{ fontSize: "2rem", color: "var(--foreground)", marginBottom: "3rem", fontWeight: 400 }}>{t.ctaHeading}</h3>
                    
                    <p style={{ fontSize: "0.95rem", color: "var(--muted-foreground)", marginBottom: "2.5rem", maxWidth: "800px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                      {t.ctaDescription}
                    </p>

                    {(t as any).ctaInfoCardTitle && (t as any).ctaInfoCardContent && (
                      <div className="glass-panel" style={{ maxWidth: "600px", margin: "0 auto 3rem", padding: "2rem", textAlign: "left", background: "rgba(255,255,255,0.03)" }}>
                        <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground)", marginBottom: "0.5rem" }}>{(t as any).ctaInfoCardTitle}</h5>
                        <p style={{ fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.6, margin: 0 }}>{(t as any).ctaInfoCardContent}</p>
                      </div>
                    )}

                    <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                      <Link href={t.liveLink} className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ padding: "1rem 2.5rem" }}>{t.ctaPrimaryButton}</Link>
                      {t.ctaSecondaryButton.includes("Coming Soon") ? (
                        <span className="btn-secondary" style={{ padding: "1rem 2.5rem", opacity: 0.5, cursor: "not-allowed" }}>{t.ctaSecondaryButton}</span>
                      ) : (
                        <Link href="#architecture" className="btn-secondary" style={{ padding: "1rem 2.5rem" }}>{t.ctaSecondaryButton}</Link>
                      )}
                    </div>
                  </div>

                  {(t as any).endingNote && (
                    <div style={{ marginTop: "4rem", padding: "3rem", borderLeft: "4px solid var(--foreground)", background: "rgba(255,255,255,0.01)" }}>
                      <p style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                        {(t as any).endingNote}
                      </p>
                    </div>
                  )}

                </div>

                {/* Ecosystem Links */}
                <div style={{ marginTop: "6rem", paddingTop: "4rem", borderTop: "1px solid var(--border)", display: "flex", gap: "4rem", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "1rem" }}>Related Solution</span>
                    <Link href="/solutions" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>{t.relatedSolution} →</Link>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "1rem" }}>Related Methodology</span>
                    <Link href="/methodologies" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>{t.framework} →</Link>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "1rem" }}>Related Insights</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {t.relatedInsights.map((ins, k) => (
                        <Link key={k} href="/insights" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>{ins} →</Link>
                      ))}
                    </div>
                  </div>
                </div>

              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "8rem" }}>
             <h3 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Is your business experiencing similar friction?</h3>
             <Link href="/start" className="btn-primary">Schedule a Business Analysis</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
