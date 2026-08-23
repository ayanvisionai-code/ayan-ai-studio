import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Knowledge | Ayan AI Studio",
  description: "Deep-dive essays on Operational Design, AI Strategy, and Scaling Operations.",
};

export default function InsightsPage() {
  return (
    <main>
      <header className="page-header">
        <span className="section-eyebrow animate-fade-up">Knowledge Platform</span>
        <h1 className="page-title animate-fade-up delay-1">Operational Intelligence.</h1>
        <p className="page-subtitle animate-fade-up delay-2">
          Essays and analyses on system thinking, business architecture, and the future of human-AI orchestration.
        </p>
      </header>

      <section className="section">
        <div className="container insights-container" style={{ maxWidth: "1000px" }}>

          <div className="insights-stack" style={{ display: "flex", flexDirection: "column" }}>

            <article className="glass-panel panel-pad-md insight-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="section-eyebrow" style={{ margin: 0 }}>Business Architecture</span>
              </div>
              <h2 className="insight-title" style={{ color: "var(--foreground)" }}>The Cost of Fragmented Logic</h2>

              {/* Insight Visual */}
              <div className="insight-image" style={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", margin: "1rem 0" }}>
                <Image src="/insight_fragmented_logic_1784545029766.png" alt="Fragmented logic blocks consolidating into one unified system" fill style={{ objectFit: "cover", opacity: 0.9 }} />
              </div>

              <p>Why adding another software tool can quietly make your business harder to run — and when connecting what you already have is the better move.</p>
              <div className="insight-meta-row" style={{ marginTop: "1rem" }}>
                <div className="insight-meta-group">
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Related Solution</span>
                    <Link href="/solutions#integrated" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Data Unification & Intelligence →</Link>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Applied In</span>
                    <Link href="/transformations/custom-applications" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>AgencyOS →</Link>
                  </div>
                </div>
                <span className="btn-secondary insight-status" style={{ opacity: 0.5, cursor: "not-allowed" }}>Full Essay Coming Soon</span>
              </div>
            </article>

            <article className="glass-panel panel-pad-md insight-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="section-eyebrow" style={{ margin: 0 }}>AI Strategy</span>
              </div>
              <h2 className="insight-title" style={{ color: "var(--foreground)" }}>Agents vs. Automations</h2>

              {/* Insight Visual */}
              <div className="insight-image" style={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", margin: "1rem 0" }}>
                <Image src="/insight_agents_automation_1784545044780.png" alt="Comparing deterministic automation with an artificial intelligence neural agent" fill style={{ objectFit: "cover", opacity: 0.9 }} />
              </div>

              <p>Should your business automate a fixed, repeatable task, or use an AI agent that can make judgment calls? Here's how to think about the difference — and what each one actually costs you.</p>
              <div className="insight-meta-row" style={{ marginTop: "1rem" }}>
                <div className="insight-meta-group">
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Related Solution</span>
                    <Link href="/solutions#automation" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Customer Communication System →</Link>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Research</span>
                    <Link href="/lab" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Autonomous Client Diagnostics →</Link>
                  </div>
                </div>
                <span className="btn-secondary insight-status" style={{ opacity: 0.5, cursor: "not-allowed" }}>Full Essay Coming Soon</span>
              </div>
            </article>

            <article className="glass-panel panel-pad-md insight-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="section-eyebrow" style={{ margin: 0 }}>Operational Design</span>
              </div>
              <h2 className="insight-title" style={{ color: "var(--foreground)" }}>Designing for Invisibility</h2>

              {/* Insight Visual */}
              <div className="insight-image" style={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", margin: "1rem 0" }}>
                <Image src="/insight_invisible_tech_1784545056312.png" alt="Invisible technology concept" fill style={{ objectFit: "cover", opacity: 0.9 }} />
              </div>

              <p>The best technology is the kind your team stops noticing. What that looks like in practice, and why it matters for how your business runs day to day.</p>
              <div className="insight-meta-row" style={{ marginTop: "1rem" }}>
                <div className="insight-meta-group">
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Governing Principle</span>
                    <Link href="/principles" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Invisible Technology →</Link>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Applied In</span>
                    <Link href="/transformations/automations" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Intelligent Lead Routing →</Link>
                  </div>
                </div>
                <span className="btn-secondary insight-status" style={{ opacity: 0.5, cursor: "not-allowed" }}>Full Essay Coming Soon</span>
              </div>
            </article>

          </div>

        </div>
      </section>
    </main>
  );
}
