import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "Insights & Knowledge | Ayan AI Studio",
  description: "Deep-dive essays on Operational Design, AI Strategy, and Scaling Operations.",
};

const articles = [
  {
    category: "Business Architecture",
    title: "The Cost of Fragmented Logic",
    image: "/insight_fragmented_logic_1784545029766.png",
    alt: "Fragmented logic blocks consolidating into one unified system",
    summary:
      "Why adding another software tool can quietly make your business harder to run — and when connecting what you already have is the better architectural decision.",
    relatedSolution: { label: "Data Unification & Intelligence", href: "/solutions#integrated" },
    appliedIn: { label: "AgencyOS Case Study", href: "/transformations/custom-applications" },
    status: "Research Brief Available · Full Essay Q4",
  },
  {
    category: "AI Strategy",
    title: "Agents vs. Automations",
    image: "/insight_agents_automation_1784545044780.png",
    alt: "Comparing deterministic automation with an artificial intelligence neural agent",
    summary:
      "Should your business automate a fixed, repeatable task, or deploy an autonomous AI agent that can make contextual judgment calls? A framework for operational trade-offs.",
    relatedSolution: { label: "Intelligent Automation Systems", href: "/solutions#automation" },
    appliedIn: { label: "Lead Routing Pipeline", href: "/transformations/automations" },
    status: "Research Brief Available · Full Essay Q4",
  },
  {
    category: "Operational Design",
    title: "Designing for Invisibility",
    image: "/insight_invisible_tech_1784545056312.png",
    alt: "Invisible technology concept and minimal architecture",
    summary:
      "The highest compliment a business operating system can receive is that your team stops noticing it. What frictionless architecture looks like in real business practice.",
    relatedSolution: { label: "Operating Principles", href: "/principles" },
    appliedIn: { label: "Rongdhonu Operating System", href: "/transformations/website-plus-applications" },
    status: "Research Brief Available · Full Essay Q4",
  },
];

export default function InsightsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <header className="page-header" style={{ padding: "11rem 5vw 4rem" }}>
        <SectionEyebrow label="Knowledge Platform" variant="teal" />
        <h1 className="page-title">
          Operational <br />
          <span className="title-gradient">Intelligence &amp; Essays.</span>
        </h1>
        <p className="page-subtitle" style={{ color: "var(--growrev-text-muted)" }}>
          Essays and analyses on systems thinking, enterprise architecture, and the future of human-AI operational orchestration.
        </p>
      </header>

      <section style={{ padding: "2rem 5vw 8rem" }}>
        <div className="container" style={{ maxWidth: "1100px", display: "flex", flexDirection: "column", gap: "4rem" }}>
          {articles.map((item) => (
            <article
              key={item.title}
              className="growrev-card"
              style={{
                padding: "clamp(2rem, 5vw, 3.5rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
                <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--growrev-cyan)", fontWeight: 600 }}>
                  {item.category}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--growrev-iris)",
                    background: "rgba(116, 102, 223, 0.12)",
                    border: "1px solid rgba(116, 102, 223, 0.3)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "100px",
                  }}
                >
                  {item.status}
                </span>
              </div>

              <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                {item.title}
              </h2>

              <div style={{ position: "relative", width: "100%", height: "clamp(220px, 32vw, 380px)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--growrev-border)" }}>
                <Image src={item.image} alt={item.alt} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(10, 10, 14, 0.7) 100%)" }} />
              </div>

              <p style={{ fontSize: "1.1rem", color: "var(--growrev-text-muted)", lineHeight: 1.7, maxWidth: "860px" }}>
                {item.summary}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", paddingTop: "1.75rem", borderTop: "1px solid var(--growrev-border)" }}>
                <div>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                    Related Architecture
                  </span>
                  <Link href={item.relatedSolution.href} style={{ color: "var(--growrev-cyan)", fontSize: "0.95rem", textDecoration: "underline" }}>
                    {item.relatedSolution.label} →
                  </Link>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "var(--growrev-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                    Applied Case Study
                  </span>
                  <Link href={item.appliedIn.href} style={{ color: "var(--growrev-cyan)", fontSize: "0.95rem", textDecoration: "underline" }}>
                    {item.appliedIn.label} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
