import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operating Principles | Ayan AI Studio",
  description: "The non-negotiable standards and laws of system design that govern every engagement.",
};

const principles = [
  {
    num: "01",
    title: "Business First. Technology Second.",
    desc: "Technology is a multiplier, not a savior. We never deploy AI or automation until the underlying business logic is sound. We engineer for business outcomes, not technical novelty.",
    boundary: "We do not prioritize tools over outcomes."
  },
  {
    num: "02",
    title: "Clarity Before Complexity.",
    desc: "Complexity scales exponentially. Before we build a system, we reduce the process to its absolute minimum viable steps. Elegance is found in subtraction.",
    boundary: "We do not optimize disconnected systems."
  },
  {
    num: "03",
    title: "Human Experience Above All.",
    desc: "A system that frustrates its users is a failed system, regardless of its technical brilliance. We design interfaces that feel native, intuitive, and invisible.",
    boundary: "We do not build systems that require manual maintenance."
  },
  {
    num: "04",
    title: "Long-Term Scalability.",
    desc: "We do not build fragile duct-tape solutions. Every architecture we design must be capable of supporting your next phase of revenue growth without requiring a complete rewrite.",
    boundary: "We do not patch symptoms; we redesign the core."
  },
  {
    num: "05",
    title: "Single Source of Truth.",
    desc: "Data decay happens when systems are siloed. We enforce strict data architecture where every piece of information lives in one place and syncs universally.",
    boundary: "We do not tolerate data duplication."
  }
];

export default function PrinciplesPage() {
  return (
    <main>
      <header className="page-header">
        <span className="section-eyebrow animate-fade-up">Operating Principles</span>
        <h1 className="page-title animate-fade-up delay-1">The Laws of System Design.</h1>
        <p className="page-subtitle animate-fade-up delay-2">
          These are the non-negotiable standards that dictate how we architect, engineer, and deploy business operating systems.
        </p>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
            {principles.map((p) => (
              <div key={p.num} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "3rem", alignItems: "flex-start" }}>
                <div style={{ fontSize: "3rem", color: "var(--border-hover)", fontWeight: 300, lineHeight: 1 }}>{p.num}</div>
                <div>
                  <h2 style={{ fontSize: "2rem", color: "var(--foreground)", marginBottom: "1.5rem" }}>{p.title}</h2>
                  <p style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>{p.desc}</p>
                  <div style={{ display: "inline-block", padding: "0.5rem 1rem", borderLeft: "2px solid var(--border)", color: "var(--foreground)", fontSize: "0.9rem", letterSpacing: "0.02em" }}>
                    <span style={{ color: "var(--muted-foreground)", marginRight: "0.5rem" }}>Boundary:</span>
                    {p.boundary}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel" style={{ padding: "4rem", marginTop: "8rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h3 style={{ fontSize: "2rem", color: "var(--foreground)", marginBottom: "1rem" }}>Ready to see these principles in action?</h3>
            <p style={{ marginBottom: "3rem", maxWidth: "600px" }}>Discover how we apply these laws of system design to rebuild a company's Operational Core.</p>
            <div style={{ display: "flex", gap: "2rem" }}>
              <Link href="/solutions" className="btn-primary">View Solutions</Link>
              <Link href="/transformations" className="btn-secondary">Read Transformations</Link>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
