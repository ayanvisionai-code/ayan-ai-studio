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
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            
            <article className="glass-panel" style={{ padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="section-eyebrow" style={{ margin: 0 }}>Business Architecture</span>
                <span style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>Oct 12, 2026</span>
              </div>
              <h2 style={{ fontSize: "2rem", color: "var(--foreground)" }}>The Cost of Fragmented Logic</h2>
              
              {/* Insight Visual */}
              <div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "12px", overflow: "hidden", margin: "1rem 0" }}>
                <Image src="/insight_fragmented_logic_1784545029766.png" alt="Fragmented logic blocks consolidating into one unified system" fill style={{ objectFit: "cover", opacity: 0.9 }} />
              </div>
              
              <p>Why buying another SaaS tool usually decreases productivity, and how to centralize your company's operational logic before scaling.</p>
              <div style={{ display: "flex", gap: "2rem", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Related Solution</span>
                    <Link href="/solutions" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Data Unification & Intelligence →</Link>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Applied In</span>
                    <Link href="/transformations" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Global Professional Services Firm →</Link>
                  </div>
                </div>
                <Link href="#" className="btn-secondary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem" }}>Read Essay</Link>
              </div>
            </article>

            <article className="glass-panel" style={{ padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="section-eyebrow" style={{ margin: 0 }}>AI Strategy</span>
                <span style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>Sep 28, 2026</span>
              </div>
              <h2 style={{ fontSize: "2rem", color: "var(--foreground)" }}>Agents vs. Automations</h2>
              
              {/* Insight Visual */}
              <div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "12px", overflow: "hidden", margin: "1rem 0" }}>
                <Image src="/insight_agents_automation_1784545044780.png" alt="Comparing deterministic automation with an artificial intelligence neural agent" fill style={{ objectFit: "cover", opacity: 0.9 }} />
              </div>
              
              <p>Understanding the fundamental difference between deterministic workflows (Zapier) and probabilistic reasoning (LLM Agents), and when to deploy each.</p>
              <div style={{ display: "flex", gap: "2rem", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Related Solution</span>
                    <Link href="/solutions" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Customer Communication System →</Link>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Research</span>
                    <Link href="/lab" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Autonomous Diagnostics Prototype →</Link>
                  </div>
                </div>
                <Link href="#" className="btn-secondary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem" }}>Read Essay</Link>
              </div>
            </article>

            <article className="glass-panel" style={{ padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="section-eyebrow" style={{ margin: 0 }}>Operational Design</span>
                <span style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>Sep 15, 2026</span>
              </div>
              <h2 style={{ fontSize: "2rem", color: "var(--foreground)" }}>Designing for Invisibility</h2>
              
              {/* Insight Visual */}
              <div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "12px", overflow: "hidden", margin: "1rem 0" }}>
                <Image src="/insight_invisible_tech_1784545056312.png" alt="Invisible technology concept" fill style={{ objectFit: "cover", opacity: 0.9 }} />
              </div>
              
              <p>The ultimate goal of enterprise technology is to disappear. A breakdown of the UX principles required to build systems that humans actually want to use.</p>
              <div style={{ display: "flex", gap: "2rem", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Governing Principle</span>
                    <Link href="/principles" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Invisible Technology →</Link>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "0.2rem" }}>Applied In</span>
                    <Link href="/transformations" className="link-hover" style={{ color: "var(--foreground)", fontSize: "0.85rem" }}>Global Professional Services Firm →</Link>
                  </div>
                </div>
                <Link href="#" className="btn-secondary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem" }}>Read Essay</Link>
              </div>
            </article>

          </div>

        </div>
      </section>
    </main>
  );
}
