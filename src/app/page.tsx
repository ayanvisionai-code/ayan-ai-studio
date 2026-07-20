import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      
      {/* Chapter 1: The Reality (Emotional Hook) */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <h1 className={styles.headline}>
          <span className="text-gradient">Designing Intelligent Systems</span>
          <br />
          Behind Modern Businesses.
        </h1>
        <p className={styles.subheadline}>
          Ambitious businesses don't need more software. They need a unified Operational Core.
        </p>
        <div className={styles.ctaContainer} style={{ opacity: 0, animation: "fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.6s", textAlign: "center" }}>
          <Link href="#chaos" className={styles.primaryBtn}>
            Discover the Process
          </Link>
          <div style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--muted-foreground)", maxWidth: "400px", margin: "1.5rem auto 0" }}>
            <p style={{ margin: "0.5rem 0", color: "var(--foreground)" }}>Schedule a Business Systems Assessment.</p>
            <p>Map your operational bottlenecks. Discuss your current architecture. Create a transformation roadmap.</p>
          </div>
        </div>
      </section>

      {/* NEW: Impact Dashboard */}
      <section className={styles.section} style={{ padding: "6rem 5vw", borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.01)" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem", alignItems: "center" }}>
            <div>
              <span className={styles.sectionEyebrow}>Operational Impact</span>
              <h2 style={{ fontSize: "2rem", color: "var(--foreground)", fontWeight: 300 }}>Measurable Systems Engineered.</h2>
            </div>
            <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: "2.5rem", color: "var(--foreground)", fontWeight: 300, marginBottom: "0.5rem" }}>-70%</div>
                <div style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Avg Onboarding Time</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", color: "var(--foreground)", fontWeight: 300, marginBottom: "0.5rem" }}>99%</div>
                <div style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Manual Work Eliminated</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", color: "var(--foreground)", fontWeight: 300, marginBottom: "0.5rem" }}>12+</div>
                <div style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Core Systems Designed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="chaos" style={{ backgroundColor: "#020202" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>The Reality of Growth</span>
          <h2 className={styles.sectionTitle}>You didn't start a business to manage 15 disconnected software tools.</h2>
        </div>
        
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className={styles.chaosGrid}>
            <div className={styles.chaosCard}>
              <h3>Data Silos</h3>
              <p>Your CRM doesn't talk to your billing software. Your marketing data is isolated. Your team spends hours copying information between tabs.</p>
            </div>
            <div className={styles.chaosCard}>
              <h3>Operational Bottlenecks</h3>
              <p>High-ticket client onboarding takes days instead of hours. Manual touchpoints slow down deal momentum and cause decision fatigue.</p>
            </div>
            <div className={styles.chaosCard}>
              <h3>Brittle Automations</h3>
              <p>You have a patchwork of workflows built by former employees that break every time an API updates, creating fragile infrastructure.</p>
            </div>
          </div>
          <p style={{ marginTop: "4rem", fontSize: "1.25rem", color: "var(--muted-foreground)" }}>
            These aren't software problems. <span style={{ color: "var(--foreground)" }}>They are symptoms of a fractured Operational Core.</span>
          </p>
        </div>
      </section>

      {/* Chapter 2: The Antidote (Authority & Philosophy) */}
      <section className={styles.sectionLeft} id="philosophy">
        <div className="container">
          <span className={styles.sectionEyebrow}>Our Philosophy</span>
          <h2 className={styles.philosophyText}>
            Traditional agencies treat the symptoms. <br/>
            <span className={styles.philosophyHighlight}>They build isolated "AI automations" that add complexity.</span> <br/>
            We treat the disease. <br/>
            <span className={styles.philosophyHighlight}>We redesign your entire Operational Core.</span>
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem", marginTop: "8rem", maxWidth: "1000px" }}>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Clarity Before Code</h4>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}>We untangle your operations and map your logic before writing a single script.</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Invisible Technology</h4>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}>Technology should empower people, not replace them. The interface must be seamless.</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Long-Term Systems</h4>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}>We engineer infrastructure designed to handle your next million in revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Framework (Intellectual Property) */}
      <section className={styles.section} id="framework" style={{ backgroundColor: "#050505", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className={styles.sectionHeaderLeft} style={{ alignSelf: "flex-start", paddingLeft: "5vw" }}>
          <span className={styles.sectionEyebrow}>The Methodology</span>
          <h2 className={styles.sectionTitle}>The Connected Business Architecture</h2>
          <p style={{ marginTop: "1.5rem", color: "var(--muted-foreground)", fontSize: "1.2rem", maxWidth: "600px" }}>
            Our proprietary framework for transforming chaotic operations into synchronized intelligence.
          </p>
        </div>

        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.cbaContainer}>
            
            <div className={styles.cbaPhase}>
              <div className={styles.cbaNumber}>01</div>
              <div className={styles.cbaContent}>
                <h3>Operational Mapping</h3>
                <p>We audit your current logic. Not just the tools you use, but how information physically moves through your company. We identify the exact points of friction, manual decay, and data loss.</p>
                <div className={styles.cbaTags}>
                  <Link href="/methodologies" className={styles.cbaTag}>Process Auditing</Link>
                  <span className={styles.cbaTag}>Bottleneck Analysis</span>
                </div>
              </div>
            </div>

            <div className={styles.cbaPhase}>
              <div className={styles.cbaNumber}>02</div>
              <div className={styles.cbaContent}>
                <h3>System Architecture</h3>
                <p>We design the blueprint. We replace fragile duct-tape solutions with an enterprise-grade logic layer. We determine how your CRM, communications, and data storage will talk to each other perfectly.</p>
                <div className={styles.cbaTags}>
                  <Link href="/methodologies" className={styles.cbaTag}>Data Modeling</Link>
                  <span className={styles.cbaTag}>API Strategy</span>
                </div>
              </div>
            </div>

            <div className={styles.cbaPhase}>
              <div className={styles.cbaNumber}>03</div>
              <div className={styles.cbaContent}>
                <h3>Intelligent Orchestration</h3>
                <p>We deploy the brain. Custom AI agents and automated routing are integrated into the architecture. The Operational Core now executes complex reasoning and administrative work silently in the background.</p>
                <div className={styles.cbaTags}>
                  <Link href="/solutions" className={styles.cbaTag}>Agent Integration</Link>
                  <Link href="/solutions" className={styles.cbaTag}>Workflow Automation</Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Structured OS Visual Diagram (Apple/Stripe Quality) */}
        <div className="container">
          <div className={styles.osContainer}>
            <span className="section-eyebrow" style={{ position: "absolute", top: "3rem", left: "4rem", margin: 0 }}>System Topology Map</span>
            <svg viewBox="0 0 1200 600" style={{ width: "100%", height: "auto", maxWidth: "1000px" }}>
              <defs>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
                </radialGradient>
                <filter id="glassShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.6"/>
                </filter>
                <filter id="ambientGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="25" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <style>
                {`
                  .svg-node { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); transform-origin: center; cursor: pointer; }
                  .svg-node:hover { transform: scale(1.03); }
                  .svg-node:hover rect { stroke: rgba(255,255,255,0.3); }
                  .svg-core { animation: pulse 4s ease-in-out infinite alternate; transform-origin: center; cursor: pointer; }
                  .svg-core:hover { transform: scale(1.02); }
                  .svg-path { stroke-dasharray: 6 6; animation: dataFlow 30s linear infinite; stroke-linecap: round; }
                  @keyframes pulse {
                    0% { filter: drop-shadow(0 0 10px rgba(255,255,255,0.02)); }
                    100% { filter: drop-shadow(0 0 25px rgba(255,255,255,0.1)); }
                  }
                  @keyframes dataFlow {
                    to { stroke-dashoffset: -1000; }
                  }
                `}
              </style>

              {/* Ambient Background Glow for Core */}
              <circle cx="350" cy="300" r="150" fill="url(#coreGlow)" opacity="0.6" filter="url(#ambientGlow)" />

              {/* Base Connections (Solid subtle line) */}
              <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" fill="none">
                <path d="M 160 300 H 270" />
                <path d="M 430 300 C 500 300, 500 165, 570 165" />
                <path d="M 430 300 C 500 300, 500 255, 570 255" />
                <path d="M 430 300 C 500 300, 500 345, 570 345" />
                <path d="M 430 300 C 500 300, 500 435, 570 435" />
                <path d="M 730 165 C 800 165, 800 300, 830 300" />
                <path d="M 730 255 C 800 255, 800 300, 830 300" />
                <path d="M 730 345 C 800 345, 800 300, 830 300" />
                <path d="M 730 435 C 800 435, 800 300, 830 300" />
                <path d="M 970 300 H 1050" />
              </g>

              {/* Data Flow Connections (Animated dashed lines on top) */}
              <g stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" fill="none" className="svg-path">
                <path d="M 160 300 H 270" />
                <path d="M 430 300 C 500 300, 500 165, 570 165" />
                <path d="M 430 300 C 500 300, 500 255, 570 255" />
                <path d="M 430 300 C 500 300, 500 345, 570 345" />
                <path d="M 430 300 C 500 300, 500 435, 570 435" />
                <path d="M 730 165 C 800 165, 800 300, 830 300" />
                <path d="M 730 255 C 800 255, 800 300, 830 300" />
                <path d="M 730 345 C 800 345, 800 300, 830 300" />
                <path d="M 730 435 C 800 435, 800 300, 830 300" />
                <path d="M 970 300 H 1050" />
              </g>

              {/* Nodes */}
              
              {/* Vision */}
              <g className="svg-node" style={{ transformOrigin: "100px 300px" }}>
                <rect x="40" y="275" width="120" height="50" rx="25" fill="rgba(10,10,10,0.8)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" filter="url(#glassShadow)" />
                <text x="100" y="304" fill="var(--muted-foreground)" fontSize="13" letterSpacing="0.05em" textAnchor="middle" fontWeight="400">VISION</text>
              </g>

              {/* Operational Core (Central Node) */}
              <g className="svg-core" style={{ transformOrigin: "350px 300px" }}>
                {/* Outer Shell */}
                <rect x="270" y="235" width="160" height="130" rx="20" fill="rgba(20,20,20,0.6)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" filter="url(#glassShadow)" />
                {/* Inner Core */}
                <rect x="285" y="250" width="130" height="100" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x="350" y="295" fill="var(--foreground)" fontSize="15" textAnchor="middle" fontWeight="400" letterSpacing="0.02em">The Operational</text>
                <text x="350" y="315" fill="var(--foreground)" fontSize="15" textAnchor="middle" fontWeight="400" letterSpacing="0.02em">Core</text>
              </g>

              {/* Subsystems */}
              <g className="svg-node" style={{ transformOrigin: "650px 165px" }}>
                <rect x="570" y="145" width="160" height="40" rx="10" fill="rgba(10,10,10,0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" filter="url(#glassShadow)" />
                <text x="650" y="170" fill="rgba(255,255,255,0.7)" fontSize="13" textAnchor="middle" fontWeight="300">CRM & Data</text>
              </g>

              <g className="svg-node" style={{ transformOrigin: "650px 255px" }}>
                <rect x="570" y="235" width="160" height="40" rx="10" fill="rgba(10,10,10,0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" filter="url(#glassShadow)" />
                <text x="650" y="260" fill="rgba(255,255,255,0.7)" fontSize="13" textAnchor="middle" fontWeight="300">Customer Experience</text>
              </g>

              <g className="svg-node" style={{ transformOrigin: "650px 345px" }}>
                <rect x="570" y="325" width="160" height="40" rx="10" fill="rgba(10,10,10,0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" filter="url(#glassShadow)" />
                <text x="650" y="350" fill="rgba(255,255,255,0.7)" fontSize="13" textAnchor="middle" fontWeight="300">AI Agents</text>
              </g>

              <g className="svg-node" style={{ transformOrigin: "650px 435px" }}>
                <rect x="570" y="415" width="160" height="40" rx="10" fill="rgba(10,10,10,0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" filter="url(#glassShadow)" />
                <text x="650" y="440" fill="rgba(255,255,255,0.7)" fontSize="13" textAnchor="middle" fontWeight="300">Workflow Automation</text>
              </g>

              {/* BI */}
              <g className="svg-node" style={{ transformOrigin: "900px 300px" }}>
                <rect x="830" y="260" width="140" height="80" rx="16" fill="rgba(15,15,15,0.8)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" filter="url(#glassShadow)" />
                <text x="900" y="295" fill="rgba(255,255,255,0.8)" fontSize="14" textAnchor="middle" fontWeight="300">Business</text>
                <text x="900" y="315" fill="rgba(255,255,255,0.8)" fontSize="14" textAnchor="middle" fontWeight="300">Intelligence</text>
              </g>

              {/* Growth */}
              <g className="svg-node" style={{ transformOrigin: "1100px 300px" }}>
                <rect x="1050" y="275" width="100" height="50" rx="25" fill="var(--foreground)" stroke="var(--foreground)" strokeWidth="1" filter="url(#glassShadow)" />
                <text x="1100" y="305" fill="var(--background)" fontSize="13" textAnchor="middle" fontWeight="500" letterSpacing="0.05em">GROWTH</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Chapter 4: The Proof (Deep Dive Case Studies) */}
      <section className={styles.section} id="proof">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Proof of Concept</span>
          <h2 className={styles.sectionTitle}>Transformations, Not Projects.</h2>
        </div>

        <div className="container">
          <div className={styles.caseStudyWrapper}>
            
            {/* Case Study 1 */}
            <div className={styles.caseStudy}>
              <div className={styles.caseStudyHeader}>
                <span className="section-eyebrow" style={{ color: "var(--foreground)", border: "1px solid var(--border)", padding: "0.2rem 0.8rem", borderRadius: "100px", display: "inline-block", marginBottom: "1rem" }}>Commercial Implementation</span>
                <h3>Global Professional Services Firm</h3>
                <p>Scaling high-ticket client onboarding without increasing headcount.</p>
              </div>
              <div className={styles.caseStudyContent}>
                <div className={styles.caseStudyDetail}>
                  <h4>The Business Context & Bottleneck</h4>
                  <p>A leading consultancy was losing momentum during their onboarding phase. Bringing a new enterprise client into their ecosystem required manual data entry across 6 different tools, taking an average of 14 days and creating massive deal fatigue.</p>
                  
                  <h4>The System Architecture</h4>
                  <p>We mapped their entire lifecycle and deployed a unified client portal backed by a centralized Operational Core. We replaced manual touchpoints with an orchestrated system that automatically provisions accounts, generates bespoke contracts via AI, and synchronizes with their primary CRM in real-time.</p>
                  
                  <h4>Long-Term Impact</h4>
                  <p>The firm can now handle 5x the client volume without hiring additional administrative staff. The technology is entirely invisible to the client, providing a frictionless, white-glove experience.</p>
                </div>
                
                <div className={styles.caseStudyMetricsGrid}>
                  <div className={styles.primaryMetric}>
                    <h5>14 Days → 4 Hours</h5>
                    <span>Onboarding Time</span>
                  </div>
                  <div className={styles.secondaryMetricsWrapper}>
                    <div className={styles.secondaryMetric}>
                      <h5>Zero</h5>
                      <span>Manual Transfers</span>
                    </div>
                    <div className={styles.secondaryMetric}>
                      <h5>5x</h5>
                      <span>Capacity Increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ borderColor: "var(--border)", opacity: 0.5, margin: "2rem 0" }} />

            {/* Case Study 2 */}
            <div className={styles.caseStudy}>
              <div className={styles.caseStudyHeader}>
                <span className="section-eyebrow" style={{ color: "var(--foreground)", border: "1px solid var(--border)", padding: "0.2rem 0.8rem", borderRadius: "100px", display: "inline-block", marginBottom: "1rem" }}>Internal Demonstration</span>
                <h3>Intelligent Lead Routing</h3>
                <p>Eliminating lead decay through intelligent conversational interfaces.</p>
              </div>
              <div className={styles.caseStudyContent}>
                <div className={styles.caseStudyDetail}>
                  <h4>The Business Context & Bottleneck</h4>
                  <p>High-value leads were slipping through the cracks. Agents were overwhelmed with inbound inquiries, unable to qualify buyers fast enough, resulting in a 48-hour average response time and lost potential revenue.</p>
                  
                  <h4>The System Architecture</h4>
                  <p>We engineered a conversational AI intake system connected directly to their Operational Core. The system instantly qualifies the lead, matches their criteria against parameters, and routes a complete dossier to the appropriate agent's phone within 3 minutes.</p>
                  
                  <h4>Long-Term Impact</h4>
                  <p>Agents no longer spend hours qualifying cold leads. They only speak to buyers who match the exact criteria, allowing them to focus entirely on relationship building and closing.</p>
                </div>
                
                <div className={styles.caseStudyMetricsGrid}>
                  <div className={styles.primaryMetric}>
                    <h5>48 Hours → 3 Minutes</h5>
                    <span>Response Time</span>
                  </div>
                  <div className={styles.secondaryMetricsWrapper}>
                    <div className={styles.secondaryMetric}>
                      <h5>+32%</h5>
                      <span>Closing Rate (Projected)</span>
                    </div>
                    <div className={styles.secondaryMetric}>
                      <h5>100%</h5>
                      <span>Lead Qualification</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div style={{ textAlign: "center", marginTop: "6rem" }}>
             <Link href="/transformations" className="btn-secondary">Read Full Architectural Deep Dives</Link>
          </div>

        </div>
      </section>

      {/* Chapter 5: The Future (Vision & Invitation) */}
      <footer className={styles.section} id="vision" style={{ backgroundColor: "#020202", borderTop: "1px solid var(--border)", minHeight: "80vh", justifyContent: "center" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className={styles.sectionEyebrow}>The Vision</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 400, margin: "2rem 0", lineHeight: 1.1 }}>
            We are building the operating systems of future businesses.
          </h2>
          <p style={{ color: "var(--muted-foreground)", fontSize: "1.2rem", marginBottom: "5rem", fontWeight: 300, lineHeight: 1.6 }}>
            We don't take on projects. We seek long-term partnerships with visionary founders who want to redesign how their company operates at a fundamental level.
          </p>
          
          <Link href="/start" className={styles.primaryBtn} style={{ padding: "1.5rem 3.5rem", fontSize: "1.15rem" }}>
            Begin the Evolution
          </Link>
          <div style={{ marginTop: "1.5rem", fontSize: "0.95rem", color: "var(--muted-foreground)" }}>
            <p style={{ margin: "0.5rem 0", color: "var(--foreground)" }}>Schedule a Business Systems Assessment.</p>
            <p>Map your operational bottlenecks. Discuss your current architecture. Create a transformation roadmap.</p>
          </div>

          {/* Infrastructure / Tech Stack (Supporting Evidence) */}
          <div style={{ marginTop: "8rem" }}>
            <p style={{ color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem", marginBottom: "2rem" }}>
              Technology We Commonly Work With
            </p>
            <div className={styles.techGrid}>
              <span>OpenAI</span>
              <span>Claude</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>PostgreSQL</span>
              <span>Supabase</span>
            </div>
            <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>Technology is only the implementation layer. Business transformation is the outcome.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
