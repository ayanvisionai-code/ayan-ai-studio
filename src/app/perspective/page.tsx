import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perspective | Ayan AI Studio",
  description: "How we analyze problems, make decisions, and view the future of business operations.",
};

export default function PerspectivePage() {
  return (
    <main>
      <header className="page-header" style={{ paddingBottom: "4rem" }}>
        <span className="section-eyebrow animate-fade-up">Our Perspective</span>
        <h1 className="page-title animate-fade-up delay-1">Chaos is not a symptom of growth.<br/>It is a symptom of design.</h1>
        <p className="page-subtitle animate-fade-up delay-2">
          Most businesses reach a point where revenue increases, but velocity decreases. This is the operational paradox.
        </p>
        
        {/* Business Ecosystem Diagram */}
        <div className="glass-panel animate-fade-up delay-3" style={{ maxWidth: "1000px", margin: "4rem auto 0", padding: "4rem", display: "flex", justifyContent: "center", background: "rgba(255,255,255,0.02)" }}>
          <svg width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 100 L250 50 L400 100 L550 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <path d="M100 100 L250 150 L400 100 L550 150" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <path d="M250 50 L250 150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M400 100 L550 150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Nodes */}
            <circle cx="100" cy="100" r="6" fill="var(--muted-foreground)" />
            <circle cx="250" cy="50" r="8" fill="var(--foreground)" />
            <circle cx="250" cy="150" r="8" fill="var(--foreground)" />
            <circle cx="400" cy="100" r="10" fill="var(--foreground)" />
            <circle cx="550" cy="50" r="6" fill="var(--muted-foreground)" />
            <circle cx="550" cy="150" r="6" fill="var(--muted-foreground)" />

            {/* Glowing active pulse on central node */}
            <circle cx="400" cy="100" r="24" fill="var(--foreground)" opacity="0.05" />
            <circle cx="400" cy="100" r="48" fill="var(--foreground)" opacity="0.02" />
          </svg>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div>
              <h2 className="section-title">The Operational Core</h2>
              <p style={{ marginBottom: "2rem", fontSize: "1.15rem", color: "var(--foreground)", lineHeight: 1.7 }}>
                Every business has an <strong>Operational Core</strong>—the central nervous system where data, human decisions, and workflows intersect. In most companies, this core is fractured.
              </p>
              <p style={{ marginBottom: "2rem", fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                We spent years observing high-growth companies hit invisible ceilings. The symptoms were always the same: executives spending weekends untangling data, sales teams fighting their CRM, and customer onboarding taking days instead of minutes. 
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                The default corporate reaction is to buy more software. But if you apply perfect logic to a broken process, you only automate the chaos. This realization forced us to abandon traditional software implementation and pioneer a new discipline entirely: Business Architecture.
              </p>
            </div>

            {/* Operational Complexity Map */}
            <div className="glass-panel" style={{ padding: "3rem", background: "rgba(255,255,255,0.01)" }}>
              <h5 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "2rem", textAlign: "center" }}>Fragmented vs. Architected</h5>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {/* Fragmented */}
                <div style={{ position: "relative", height: "100px" }}>
                  <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path d="M20 50 Q 80 10, 150 50 T 280 50" stroke="rgba(255,100,100,0.4)" strokeWidth="2" fill="none" />
                    <path d="M20 20 Q 100 90, 180 30 T 280 80" stroke="rgba(255,100,100,0.3)" strokeWidth="2" fill="none" />
                    <path d="M40 80 Q 120 20, 200 70 T 260 20" stroke="rgba(255,100,100,0.2)" strokeWidth="2" fill="none" />
                    <circle cx="20" cy="50" r="4" fill="rgba(255,100,100,0.8)" />
                    <circle cx="150" cy="50" r="4" fill="rgba(255,100,100,0.8)" />
                    <circle cx="280" cy="50" r="4" fill="rgba(255,100,100,0.8)" />
                  </svg>
                  <span style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", fontSize: "0.7rem", color: "rgba(255,100,100,0.8)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Chaos (Software Patching)</span>
                </div>

                {/* Architected */}
                <div style={{ position: "relative", height: "100px" }}>
                  <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path d="M20 50 L 280 50" stroke="var(--foreground)" strokeWidth="2" fill="none" />
                    <path d="M80 50 L 80 20 L 220 20 L 220 50" stroke="var(--muted-foreground)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                    <path d="M120 50 L 120 80 L 180 80 L 180 50" stroke="var(--muted-foreground)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                    
                    <rect x="16" y="46" width="8" height="8" fill="var(--foreground)" />
                    <rect x="146" y="46" width="8" height="8" fill="var(--foreground)" />
                    <rect x="276" y="46" width="8" height="8" fill="var(--foreground)" />
                  </svg>
                  <span style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", fontSize: "0.7rem", color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Orchestration (Business Architecture)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "4rem", marginTop: "8rem", marginBottom: "8rem", borderLeft: "4px solid var(--foreground)", display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h3 style={{ fontSize: "1.75rem", color: "var(--foreground)", marginBottom: "1.5rem" }}>Our Diagnostic Approach</h3>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>Before we write a single line of code, we map the physics of your business. How does data move? Where does human decision-making create bottlenecks? Where is information lost?</p>
              <ul style={{ listStyleType: "none", padding: 0, color: "var(--foreground)", fontSize: "0.95rem", lineHeight: 2 }}>
                <li style={{ display: "flex", gap: "1rem" }}><span style={{ color: "var(--muted-foreground)" }}>—</span> We do not automate broken processes.</li>
                <li style={{ display: "flex", gap: "1rem" }}><span style={{ color: "var(--muted-foreground)" }}>—</span> We do not recommend software before understanding operations.</li>
                <li style={{ display: "flex", gap: "1rem" }}><span style={{ color: "var(--muted-foreground)" }}>—</span> We do not implement technology without business architecture.</li>
              </ul>
            </div>
            
            {/* Diagnostic Flow */}
            <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {["Map the Physics", "Isolate the Bottleneck", "Architect the Logic", "Deploy the System"].map((step, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "24px", height: "24px", border: "1px solid var(--border)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "var(--muted-foreground)" }}>{idx + 1}</div>
                  <span style={{ fontSize: "0.95rem", color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{step}</span>
                  {idx < 3 && <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />}
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            {/* Transformation Journey Graphic */}
            <div className="glass-panel" style={{ padding: "4rem 3rem", background: "rgba(255,255,255,0.01)" }}>
              <svg width="100%" height="250" viewBox="0 0 300 250" fill="none">
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Background grid */}
                <path d="M0 50 H 300 M0 100 H 300 M0 150 H 300 M0 200 H 300" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M100 0 V 250 M200 0 V 250" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 4" />

                {/* Growth curve */}
                <path d="M 20 230 Q 150 200, 280 40" stroke="var(--foreground)" strokeWidth="3" fill="none" />
                <path d="M 20 230 Q 150 200, 280 40 L 280 250 L 20 250 Z" fill="url(#grad)" />
                
                {/* Milestones */}
                <circle cx="100" cy="188" r="5" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2" />
                <circle cx="200" cy="116" r="5" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2" />
                <circle cx="280" cy="40" r="5" fill="var(--foreground)" />
                
                <text x="100" y="210" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle" letterSpacing="0.05em">ARCHITECTURE</text>
                <text x="200" y="138" fill="var(--muted-foreground)" fontSize="10" textAnchor="middle" letterSpacing="0.05em">IMPLEMENTATION</text>
                <text x="280" y="25" fill="var(--foreground)" fontSize="10" textAnchor="end" letterSpacing="0.05em" fontWeight="bold">ORCHESTRATION</text>
              </svg>
            </div>

            <div>
              <h2 className="section-title">The Future: Invisible Orchestration</h2>
              <p style={{ marginBottom: "2rem", fontSize: "1.15rem", color: "var(--foreground)", lineHeight: 1.7 }}>
                We are moving away from the era of manual data entry and into the era of continuous orchestration.
              </p>
              
              <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "12px", overflow: "hidden", margin: "2rem 0", border: "1px solid var(--border)" }}>
                <Image src="/perspective_vision_1784545461369.png" alt="Visionary business transformation and invisible orchestration" fill style={{ objectFit: "cover", opacity: 0.9 }} />
              </div>

              <p style={{ marginBottom: "2rem", fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                Over the next decade, the most successful companies will not be those with the most software, but those with the most cohesive Operational Core. We are engineering a future defined by <strong>Human-AI Collaboration</strong>, where deterministic workflows and probabilistic reasoning operate seamlessly together.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                The hallmark of a perfect system is invisibility. When your architecture is correct, technology disappears into the background, surfacing only when human intuition, empathy, or strategy is required.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "2rem", borderTop: "1px solid var(--border)", paddingTop: "4rem", marginTop: "8rem" }}>
            <div style={{ flex: 1 }} className="glass-panel" style={{ padding: "3rem" }}>
              <span className="section-eyebrow">Next Chapter</span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Our Operating Principles</h3>
              <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "var(--muted-foreground)" }}>Discover the non-negotiable laws that govern our engineering.</p>
              <Link href="/principles" className="link-hover">Read Principles →</Link>
            </div>
            <div style={{ flex: 1 }} className="glass-panel" style={{ padding: "3rem" }}>
              <span className="section-eyebrow">Ecosystem</span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>The Connected Architecture</h3>
              <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "var(--muted-foreground)" }}>See how the Operational Core is mapped and rebuilt.</p>
              <Link href="/methodologies" className="link-hover">Explore Methodology →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
