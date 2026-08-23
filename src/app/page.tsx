import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { transformations } from "@/data/transformations";

// Each of these slugs now has its own dedicated Transformation category page rather than
// an anchor on a single long page — see src/data/transformationPortfolio.ts.
const transformationRouteBySlug: Record<string, string> = {
  rongdhonu: "/transformations/website-plus-applications",
  agencyos: "/transformations/custom-applications",
  "lead-routing": "/transformations/automations",
};

export const metadata: Metadata = {
  title: "Ayan AI Studio | Business Systems Studio",
  description: "We build the websites, automations, and custom software businesses run on — and connect them into one system when it matters. Business understanding first, technology second.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      
      {/* Chapter 1: The Reality (Emotional Hook) */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        
        <div className={styles.heroBadge}>
          Business Systems Studio
        </div>

        <h1 className={styles.headline}>
          <span className="text-gradient">Designing Intelligent Systems</span>
          <br />
          Behind Modern Businesses.
        </h1>
        <p className={styles.subheadline}>
          Most businesses don't need more software — they need what they already have working together. We build websites, automation, and custom software individually, or connect them into one system when that's what actually moves the business forward.
        </p>

        {/* Hero Visual Integration */}
        <div className={styles.heroVisual}>
          <Image src="/home_hero_architecture_1784545430311.png" alt="Unified business operating system architecture" fill sizes="(max-width: 1100px) 100vw, 1100px" style={{ objectFit: "cover", objectPosition: "center 35%" }} priority />
          <div className={styles.heroVisualOverlay} />
        </div>
        
        <div className={styles.ctaContainer}>
          <Link href="#chaos" className={styles.primaryBtn}>
            See How We Work
          </Link>
          <div style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--muted-foreground)", maxWidth: "420px", margin: "1.5rem auto 0" }}>
            <p style={{ margin: "0.5rem 0", color: "var(--foreground)" }}>
              Prefer to talk first? <Link href="/start" style={{ color: "var(--foreground)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Schedule a Business Systems Assessment</Link>.
            </p>
            <p>A working conversation about what's slow, manual, or disconnected in your business — not a sales pitch.</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={styles.trustIndicators}>
          <span className={styles.trustItem}>Operational Architecture</span>
          <span className={styles.trustItem}>Business Transformation</span>
          <span className={styles.trustItem}>Research Driven</span>
          <span className={styles.trustItem}>Real Implementations</span>
          <span className={styles.trustItem}>Systems Thinking</span>
        </div>
      </section>

      {/* NEW: Impact Dashboard */}
      <section className={styles.section} style={{ padding: "6rem 5vw", borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.01)" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "5rem" }}>
            <div>
              <span className={styles.sectionEyebrow}>Operational Impact</span>
              <h2 style={{ fontSize: "2rem", color: "var(--foreground)", fontWeight: 300 }}>What Changes When The System Is Built Right.</h2>
              <p style={{ margin: "0.75rem auto 0", color: "var(--muted-foreground)", fontSize: "1rem", maxWidth: "420px" }}>Typical outcomes across the connected systems we've designed and shipped.</p>
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

      {/* Engagement Options: standalone services or the combined system */}
      <section className={styles.section} id="engagement" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>How We Work With You</span>
          <h2 className={styles.sectionTitle}>One piece, or the whole system.</h2>
          <p style={{ marginTop: "1.5rem", color: "var(--muted-foreground)", fontSize: "1.2rem" }}>
            Every engagement is built to the same standard — whether you need one thing done right, or all of them working together.
          </p>
        </div>

        <div className="container" style={{ maxWidth: "1400px" }}>
          <div className={`${styles.chaosGrid} ${styles.chaosGridFour}`}>
            <Link href="/solutions#websites" className={`${styles.chaosCard} ${styles.chaosCardFour}`} style={{ display: "block", textDecoration: "none" }}>
              <h3>Websites</h3>
              <p>A premium, high-converting website — built to earn trust and convert, on its own or as the front door to a larger system.</p>
            </Link>
            <Link href="/solutions#automation" className={`${styles.chaosCard} ${styles.chaosCardFour}`} style={{ display: "block", textDecoration: "none" }}>
              <h3>Automation &amp; AI Agents</h3>
              <p>Eliminate repetitive work — lead qualification, scheduling, data entry — without touching anything else you already run.</p>
            </Link>
            <Link href="/solutions#applications" className={`${styles.chaosCard} ${styles.chaosCardFour}`} style={{ display: "block", textDecoration: "none" }}>
              <h3>Custom Applications</h3>
              <p>A tool built around how your business actually operates — a client portal, an internal dashboard, a workflow no off-the-shelf software fits.</p>
            </Link>
            <Link href="/solutions#integrated" className={`${styles.chaosCard} ${styles.chaosCardFour}`} style={{ display: "block", textDecoration: "none" }}>
              <h3>Integrated Systems</h3>
              <p>Two or more of the above, engineered to work together as one connected system — so information moves between them on its own, instead of someone re-entering it by hand. The differentiator most agencies can't offer.</p>
            </Link>
          </div>
          <p style={{ marginTop: "3rem", textAlign: "center", color: "var(--muted-foreground)", fontSize: "1.05rem" }}>
            Not sure which one fits? You don't need to know yet. Tell us what's slow, manual, or breaking in your business, and we'll help you figure out whether the answer is a website, an automation, an application — or a bit of everything.
          </p>
        </div>
      </section>

      <section className={styles.section} id="chaos" style={{ backgroundColor: "#020202" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>The Reality of Growth</span>
          <h2 className={styles.sectionTitle}>You didn't start a business to manage 15 disconnected software tools.</h2>
        </div>
        
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "4rem", border: "1px solid var(--border)" }}>
            <Image src="/home_chaos_ecosystem_1784545440954.png" alt="Fractured and chaotic data ecosystem" fill sizes="(max-width: 1200px) 100vw, 1200px" style={{ objectFit: "cover", opacity: 0.7 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 0%, rgba(2,2,2,0.8) 100%)" }} />
          </div>
          <div className={styles.chaosGrid}>
            <div className={styles.chaosCard}>
              <h3>Data Silos</h3>
              <p>Your CRM doesn't talk to your billing software. Your marketing data lives somewhere else entirely. Your team spends hours a week copying the same information from one tool to another.</p>
            </div>
            <div className={styles.chaosCard}>
              <h3>Operational Bottlenecks</h3>
              <p>Bringing on a new client takes days of back-and-forth instead of hours. Every manual step in between is a place a deal can stall, or a customer can lose patience and walk.</p>
            </div>
            <div className={styles.chaosCard}>
              <h3>Brittle Automations</h3>
              <p>Someone set up a workflow that worked, once. Nobody quite remembers how it works now, and it quietly breaks the moment one of your tools changes.</p>
            </div>
          </div>
          <p style={{ marginTop: "4rem", fontSize: "1.25rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
            None of this is really a software problem. Most businesses run on a website, a CRM, spreadsheets, and a handful of tools and automations layered on over time — and when those pieces don't talk to each other, <span style={{ color: "var(--foreground)" }}>your team becomes the connection between them</span>: copying, checking, re-entering, chasing.
          </p>
          <p style={{ marginTop: "1.5rem", fontSize: "1.25rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
            We design and build the connected version instead — one system where information and work move to where they're needed on their own. <span style={{ color: "var(--foreground)" }}>We call it the Operational Core.</span>
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
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}>We spend time understanding how your business actually works before we decide what to build. The right answer is often not the one you expected.</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Invisible Technology</h4>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}>The best system doesn't ask your team to think about it. It just makes the work faster and the friction disappear.</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Long-Term Systems</h4>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}>We build for where your business is headed, not just the problem in front of you today — so you're not tearing it out and starting over in a year.</p>
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
            How we turn a tangle of tools, spreadsheets, and manual work into one connected system — in three phases.
          </p>
        </div>

        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.cbaContainer}>
            
            <div className={styles.cbaPhase}>
              <div className={styles.cbaNumber}>01</div>
              <div className={styles.cbaContent}>
                <h3>Operational Mapping</h3>
                <p>We look at how your business actually runs today — not just the tools you use, but how information and work move between people and systems. We find exactly where things slow down, get duplicated, or fall through the cracks.</p>
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
                <p>We design the blueprint for how everything should connect — replacing patched-together fixes with a proper foundation. This is where we decide exactly how your CRM, communication tools, and data should work together.</p>
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
                <p>We bring the system to life. Custom AI agents and automated workflows are built into the architecture, so routine decisions and admin work happen on their own — the Operational Core runs quietly in the background while your team focuses on the work only people can do.</p>
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
          <p style={{ textAlign: "center", color: "var(--muted-foreground)", fontSize: "1.05rem", maxWidth: "700px", margin: "0 auto 3rem" }}>
            In practice, this is what that looks like: your vision, your customer-facing tools, your data, and your growth goals all sitting on top of one connected core — instead of running as separate efforts that don't talk to each other.
          </p>
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

      {/* Chapter 4: The Proof — concise previews sourced from src/data/transformations.ts, linking to the full reports on /transformations */}
      <section className={styles.section} id="proof">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Proof of Concept</span>
          <h2 className={styles.sectionTitle}>Transformations, Not Projects.</h2>
          <p style={{ marginTop: "1.5rem", color: "var(--muted-foreground)", fontSize: "1.2rem" }}>
            Real businesses, real bottlenecks, and what changed once the underlying system was redesigned around them.
          </p>
        </div>

        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className={styles.chaosGrid}>
            {transformations.map((t) => (
              <Link key={t.slug} href={transformationRouteBySlug[t.slug] ?? "/transformations"} className={styles.chaosCard} style={{ display: "block", textDecoration: "none" }}>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>{t.type}</span>
                <h3 style={{ marginTop: "0.75rem" }}>{t.client}</h3>
                <p>{t.homepagePreview.problem}</p>
                <p style={{ marginTop: "1rem" }}>{t.homepagePreview.change}</p>
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                  {t.homepagePreview.metric ? (
                    <>
                      <div style={{ fontSize: "1.5rem", color: "var(--foreground)", fontWeight: 400 }}>{t.homepagePreview.metric.value}</div>
                      <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginTop: "0.3rem" }}>{t.homepagePreview.metric.label}</div>
                    </>
                  ) : (
                    <p style={{ color: "var(--foreground)", margin: 0 }}>{t.homepagePreview.result}</p>
                  )}
                </div>
                <span style={{ display: "inline-block", marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--foreground)" }}>Read the full report →</span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "6rem" }}>
             <Link href="/transformations" className="btn-secondary">Read the Full Transformation Reports</Link>
          </div>

        </div>
      </section>

      {/* Chapter 5: The Future (Vision & Invitation) */}
      <footer className={`${styles.section} ${styles.finalCtaSection}`} id="vision" style={{ backgroundColor: "#020202", borderTop: "1px solid var(--border)", justifyContent: "center" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className={styles.sectionEyebrow}>The Vision</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 400, margin: "2rem 0", lineHeight: 1.1 }}>
            We are building the operating systems of future businesses.
          </h2>
          <p className={styles.finalCtaText} style={{ color: "var(--muted-foreground)", fontSize: "1.2rem", fontWeight: 300, lineHeight: 1.6 }}>
            Every engagement — one piece or the whole system — starts the same way: understanding your business before deciding what to build. We work with founders who want technology that actually fits how their company operates, not another tool bolted on.
          </p>

          <Link href="/start" className={`${styles.primaryBtn} ${styles.finalCtaBtn}`}>
            Start a Conversation →
          </Link>
          <div style={{ marginTop: "1.5rem", fontSize: "0.95rem", color: "var(--muted-foreground)" }}>
            <p style={{ margin: "0.5rem 0", color: "var(--foreground)" }}>Begin with a Business Systems Assessment.</p>
            <p>A conversation about your business — what's slow, what's manual, what's breaking — so we can figure out together whether the answer is a website, an automation, an application, or all three connected. No commitment, no jargon required.</p>
          </div>

          {/* Infrastructure / Tech Stack (Supporting Evidence) */}
          <div className={styles.finalCtaTech}>
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
              <span>n8n</span>
            </div>
            <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>Technology is only the implementation layer. Business transformation is the outcome.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
