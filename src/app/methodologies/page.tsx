import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodologies | Ayan AI Studio",
  description: "Our proprietary frameworks for redesigning how modern businesses operate.",
};

export default function MethodologiesPage() {
  return (
    <main>
      <header className="page-header">
        <span className="section-eyebrow animate-fade-up">Methodologies</span>
        <h1 className="page-title animate-fade-up delay-1">The Architecture of Intelligence.</h1>
        <p className="page-subtitle animate-fade-up delay-2">
          We don't guess. We deploy proven, version-controlled frameworks to systematically rebuild your Operational Core.
        </p>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          {/* Visualizing the Modern Business OS */}
          <div style={{ marginBottom: "8rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="section-eyebrow">The Target State</span>
              <h2 style={{ fontSize: "2.5rem", color: "var(--foreground)" }}>The Synchronized Operational Core</h2>
              <p style={{ maxWidth: "800px", margin: "1rem auto 0" }}>A modern business is not a collection of departments. It is a single, continuous system where strategy, intelligence, and execution flow flawlessly.</p>
            </div>
            
            {/* Massive SVG Diagram of the Modern Business OS */}
            <div className="glass-panel" style={{ padding: "4rem", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", minHeight: "600px" }}>
              <svg width="100%" viewBox="0 0 1000 600" style={{ maxWidth: "900px" }}>
                <defs>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="blur">
                    <feGaussianBlur stdDeviation="3" />
                  </filter>
                </defs>
                
                {/* Central Core */}
                <circle cx="500" cy="300" r="120" stroke="var(--border-hover)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <circle cx="500" cy="300" r="100" stroke="var(--foreground)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <text x="500" y="295" fill="var(--foreground)" fontSize="18" fontWeight="500" textAnchor="middle">THE</text>
                <text x="500" y="320" fill="var(--foreground)" fontSize="18" fontWeight="500" textAnchor="middle">OPERATIONAL CORE</text>
                
                {/* AI / Automation Layers */}
                <rect x="350" y="220" width="300" height="160" rx="80" stroke="var(--border-hover)" fill="none" strokeWidth="1" />
                
                {/* Satellites */}
                <g transform="translate(200, 150)">
                  <rect x="-60" y="-30" width="120" height="60" rx="8" fill="var(--background)" stroke="var(--border)" />
                  <text x="0" y="5" fill="var(--muted-foreground)" fontSize="14" textAnchor="middle">Strategy & Leadership</text>
                </g>
                <path d="M 230 175 L 420 250" stroke="var(--border-hover)" strokeWidth="1.5" />

                <g transform="translate(800, 150)">
                  <rect x="-60" y="-30" width="120" height="60" rx="8" fill="var(--background)" stroke="var(--border)" />
                  <text x="0" y="5" fill="var(--muted-foreground)" fontSize="14" textAnchor="middle">Marketing & Sales</text>
                </g>
                <path d="M 770 175 L 580 250" stroke="var(--border-hover)" strokeWidth="1.5" />

                <g transform="translate(150, 450)">
                  <rect x="-60" y="-30" width="120" height="60" rx="8" fill="var(--background)" stroke="var(--border)" />
                  <text x="0" y="5" fill="var(--muted-foreground)" fontSize="14" textAnchor="middle">Customer Experience</text>
                </g>
                <path d="M 190 425 L 430 340" stroke="var(--border-hover)" strokeWidth="1.5" />

                <g transform="translate(850, 450)">
                  <rect x="-60" y="-30" width="120" height="60" rx="8" fill="var(--background)" stroke="var(--border)" />
                  <text x="0" y="5" fill="var(--muted-foreground)" fontSize="14" textAnchor="middle">Delivery & Finance</text>
                </g>
                <path d="M 810 425 L 570 340" stroke="var(--border-hover)" strokeWidth="1.5" />

                {/* Inner Logic Lines connecting the core */}
                <path d="M 500 150 L 500 200" stroke="url(#glow)" strokeWidth="2" />
                <path d="M 500 400 L 500 450" stroke="url(#glow)" strokeWidth="2" />
                
                <text x="500" y="130" fill="var(--foreground)" fontSize="12" textAnchor="middle" letterSpacing="0.1em">INTELLIGENCE LAYER</text>
                <text x="500" y="480" fill="var(--foreground)" fontSize="12" textAnchor="middle" letterSpacing="0.1em">DATA & AUTOMATION LAYER</text>
                
                {/* Data Flow Particles (Static representation) */}
                <circle cx="340" cy="220" r="3" fill="var(--foreground)" filter="url(#blur)" />
                <circle cx="660" cy="380" r="3" fill="var(--foreground)" filter="url(#blur)" />
              </svg>
            </div>
          </div>
          
          <hr style={{ borderColor: "var(--border)", opacity: 0.5, margin: "6rem 0" }} />

          {/* Framework 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span className="section-eyebrow">Framework 01</span>
                <h2 style={{ fontSize: "3rem", color: "var(--foreground)", marginBottom: "1rem" }}>The Connected Business Architecture (CBA)</h2>
                <p style={{ maxWidth: "600px", fontSize: "1.1rem" }}>Our foundational operating methodology for linking isolated departments, unifying data, and orchestrating enterprise-wide workflows.</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ display: "inline-block", background: "rgba(255,255,255,0.1)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: "0.85rem", color: "var(--foreground)" }}>Version 3.2</span>
                <p style={{ fontSize: "0.85rem", marginTop: "1rem", color: "var(--muted-foreground)", maxWidth: "200px" }}>Evolved over 40+ enterprise deployments. v3 shifted from point-to-point APIs to a centralized logic layer.</p>
              </div>
            </div>

            {/* Engagement Journey with Process Flow Visualization */}
            <div className="glass-panel" style={{ padding: "4rem", marginTop: "2rem" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--foreground)", marginBottom: "3rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>The Architecture Flow</h3>
              
              <div style={{ position: "relative", marginBottom: "4rem" }}>
                {/* SVG Pipeline */}
                <svg width="100%" height="120" viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="var(--foreground)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--muted-foreground)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Base Track */}
                  <path d="M50 60 L950 60" stroke="var(--border)" strokeWidth="4" />
                  
                  {/* Nodes */}
                  <g transform="translate(150, 60)">
                    <circle cx="0" cy="0" r="16" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2" />
                    <circle cx="0" cy="0" r="6" fill="var(--foreground)" />
                  </g>
                  
                  <g transform="translate(400, 60)">
                    <circle cx="0" cy="0" r="16" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2" />
                    <circle cx="0" cy="0" r="6" fill="var(--foreground)" />
                  </g>

                  <g transform="translate(650, 60)">
                    <circle cx="0" cy="0" r="16" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2" />
                    <circle cx="0" cy="0" r="6" fill="var(--foreground)" />
                  </g>

                  <g transform="translate(900, 60)">
                    <circle cx="0" cy="0" r="16" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2" />
                    <circle cx="0" cy="0" r="6" fill="var(--foreground)" />
                    {/* Pulse */}
                    <circle cx="0" cy="0" r="30" fill="none" stroke="var(--foreground)" strokeWidth="1" strokeDasharray="4 4" />
                  </g>

                  {/* Flow animation representation (static gradient) */}
                  <path d="M166 60 L384 60" stroke="url(#flow)" strokeWidth="2" />
                  <path d="M416 60 L634 60" stroke="url(#flow)" strokeWidth="2" />
                  <path d="M666 60 L884 60" stroke="url(#flow)" strokeWidth="2" />
                </svg>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2rem", textAlign: "center" }}>
                <div>
                  <div style={{ color: "var(--foreground)", fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: 500 }}>01. Discovery</div>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>Audit the physical movement of data and human decisions to map operational friction.</p>
                </div>
                <div>
                  <div style={{ color: "var(--foreground)", fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: 500 }}>02. System Blueprint</div>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>Visually map the entire business architecture before writing a single line of code.</p>
                </div>
                <div>
                  <div style={{ color: "var(--foreground)", fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: 500 }}>03. Engineering</div>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>Build the central logic layer, replacing fragile SaaS integrations with enterprise infrastructure.</p>
                </div>
                <div>
                  <div style={{ color: "var(--foreground)", fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: 500 }}>04. Optimization</div>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>Deploy intelligent agents into the layer to execute reasoning and orchestration silently.</p>
                </div>
              </div>
            </div>

            {/* Ecosystem Interlinking */}
            <div style={{ display: "flex", gap: "3rem", justifyContent: "flex-start", borderTop: "1px solid var(--border)", paddingTop: "2rem", flexWrap: "wrap" }}>
              <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Deployed In</span>
                  <Link href="/transformations" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Global Professional Services Firm →</Link>
              </div>
              <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Governed By</span>
                  <Link href="/principles" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Clarity Before Code →</Link>
              </div>
              <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Engineered Using</span>
                  <Link href="/solutions" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Data Unification & Intelligence →</Link>
              </div>
            </div>
          </div>
          
          <hr style={{ borderColor: "var(--border)", opacity: 0.5, margin: "6rem 0" }} />

          {/* Framework 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span className="section-eyebrow">Framework 02</span>
                <h2 style={{ fontSize: "3rem", color: "var(--foreground)", marginBottom: "1rem" }}>Intelligent Orchestration (Decision Trees)</h2>
                <p style={{ maxWidth: "600px", fontSize: "1.1rem" }}>Our methodology for removing humans from deterministic routing and logic evaluation. We utilize LLMs strictly for parameter extraction.</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ display: "inline-block", background: "rgba(255,255,255,0.1)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: "0.85rem", color: "var(--foreground)" }}>Version 2.0</span>
                <p style={{ fontSize: "0.85rem", marginTop: "1rem", color: "var(--muted-foreground)", maxWidth: "200px" }}>Transitioned from rigid heuristic matching to dynamic conversational reasoning.</p>
              </div>
            </div>

            {/* Decision Tree Visual */}
            <div className="glass-panel" style={{ padding: "4rem", marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--foreground)", marginBottom: "3rem", alignSelf: "flex-start", width: "100%", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>Probabilistic to Deterministic Routing</h3>
              
              <svg width="100%" height="300" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet" style={{ maxWidth: "800px" }}>
                {/* Lines */}
                <path d="M 150 150 L 300 150" stroke="var(--border)" strokeWidth="2" />
                <path d="M 450 150 L 550 80" stroke="var(--border)" strokeWidth="2" />
                <path d="M 450 150 L 550 220" stroke="var(--border)" strokeWidth="2" />
                
                <path d="M 670 80 L 730 80" stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 670 220 L 730 220" stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4" />

                {/* Nodes */}
                {/* Input */}
                <rect x="30" y="120" width="120" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="var(--border-hover)" strokeWidth="1.5" />
                <text x="90" y="145" fill="var(--foreground)" fontSize="12" textAnchor="middle">Unstructured Data</text>
                <text x="90" y="160" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">(Human Email / Voice)</text>

                {/* LLM Layer */}
                <rect x="300" y="100" width="150" height="100" rx="12" fill="var(--background)" stroke="var(--foreground)" strokeWidth="1" />
                <text x="375" y="135" fill="var(--foreground)" fontSize="14" textAnchor="middle" fontWeight="500">LLM Engine</text>
                <text x="375" y="155" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">Parameter Extraction</text>
                <text x="375" y="170" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">& Validation</text>

                {/* Output 1 (Qualified) */}
                <rect x="550" y="50" width="120" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(100,255,100,0.3)" strokeWidth="1.5" />
                <text x="610" y="75" fill="var(--foreground)" fontSize="12" textAnchor="middle">Qualified Match</text>
                <text x="610" y="90" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">Structured JSON</text>
                <circle cx="760" cy="80" r="20" fill="rgba(255,255,255,0.05)" stroke="var(--border)" />
                <text x="760" y="84" fill="var(--foreground)" fontSize="10" textAnchor="middle">CRM</text>

                {/* Output 2 (Disqualified) */}
                <rect x="550" y="190" width="120" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,100,100,0.3)" strokeWidth="1.5" />
                <text x="610" y="215" fill="var(--foreground)" fontSize="12" textAnchor="middle">Disqualified</text>
                <text x="610" y="230" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">Missing Parameters</text>
                <circle cx="760" cy="220" r="20" fill="rgba(255,255,255,0.05)" stroke="var(--border)" />
                <text x="760" y="224" fill="var(--foreground)" fontSize="10" textAnchor="middle">ARCHIVE</text>
              </svg>
            </div>

            {/* Ecosystem Interlinking */}
            <div style={{ display: "flex", gap: "3rem", justifyContent: "flex-start", borderTop: "1px solid var(--border)", paddingTop: "2rem", flexWrap: "wrap" }}>
              <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Deployed In</span>
                  <Link href="/transformations" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Intelligent Lead Routing Systems →</Link>
              </div>
              <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Governed By</span>
                  <Link href="/principles" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Automation Must Reduce Complexity →</Link>
              </div>
              <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Engineered Using</span>
                  <Link href="/solutions" className="link-hover" style={{ color: "var(--foreground)", fontWeight: 500 }}>Customer Communication System →</Link>
              </div>
            </div>

          </div>

          <div style={{ textAlign: "center", marginTop: "8rem" }}>
             <h3 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Ready to deploy this architecture?</h3>
             <Link href="/start" className="btn-primary">Begin Diagnostic</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
