import Link from "next/link";
import { Metadata } from "next";
import SectionEyebrow from "@/components/SectionEyebrow";

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
      <header className="page-header" style={{ padding: "11rem 5vw 4rem" }}>
        <SectionEyebrow label="Core Philosophy" variant="teal" />
        <h1 className="page-title">
          The Laws of <br />
          <span className="title-gradient">System Design.</span>
        </h1>
        <p className="page-subtitle" style={{ color: "var(--growrev-text-muted)" }}>
          These are the non-negotiable standards that govern how we architect, engineer, and deploy modern business operating systems.
        </p>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
            {principles.map((p) => (
              <div key={p.num} className="grid-num-col" style={{ alignItems: "flex-start" }}>
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

          <div className="growrev-card" style={{ marginTop: "8rem", padding: "4rem 2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SectionEyebrow label="Get Started" variant="teal" />
            <h3 style={{ fontSize: "2rem", color: "#FFFFFF", margin: "1rem 0" }}>Ready to put these principles into action?</h3>
            <p style={{ marginBottom: "2.5rem", maxWidth: "600px", color: "var(--growrev-text-muted)" }}>Discover how we apply these laws of system design to rebuild a company&apos;s Operational Core.</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.25rem 2rem" }}>
              <Link href="/solutions" className="btn-growrev-primary">View Solutions &amp; Architecture →</Link>
              <Link href="/transformations" className="btn-growrev-secondary">Read Transformations</Link>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
