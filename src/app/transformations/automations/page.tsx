import Link from "next/link";
import { Metadata } from "next";
import { getCategoryMeta, getEntriesByCategory } from "@/data/transformationPortfolio";
import { StatusBadge } from "@/components/transformations/ProjectStory";
import RoutingDiagram from "@/components/transformations/RoutingDiagram";

const category = getCategoryMeta("automation");
const leadRouting = getEntriesByCategory("automation")[0];

export const metadata: Metadata = {
  title: "Automations | Transformations | Ayan AI Studio",
  description: "Processes that evaluate information, make routine decisions and move work forward without constant manual intervention.",
};

export default function AutomationsPage() {
  return (
    <main>
      <header className="page-header" style={{ paddingBottom: "3rem" }}>
        <Link href="/transformations" className="link-hover" style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
          ← Transformations
        </Link>
        <div style={{ marginTop: "2rem" }}>
          <span className="section-eyebrow animate-fade-up">{category.number} — {category.navLabel}</span>
          <h1 className="page-title animate-fade-up delay-1">{category.title}</h1>
          <p className="page-subtitle animate-fade-up delay-2" style={{ maxWidth: "720px" }}>{category.description}</p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>

          <div style={{ marginBottom: "5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
              <span className="section-eyebrow" style={{ margin: 0 }}>{leadRouting.type}</span>
              <StatusBadge status={leadRouting.status} label={leadRouting.statusLabel} />
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--foreground)", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.25rem" }}>
              {leadRouting.title}
            </h2>
            <p style={{ fontSize: "1.4rem", color: "var(--foreground)", fontStyle: "italic", maxWidth: "760px", lineHeight: 1.5, marginBottom: "1rem" }}>
              {leadRouting.oneLiner}
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", maxWidth: "760px", lineHeight: 1.7 }}>{leadRouting.businessContext}</p>
          </div>

          {/* The problem */}
          <div style={{ marginBottom: "6rem", maxWidth: "800px" }}>
            <h3 className="section-eyebrow">The Problem</h3>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--foreground)" }}>{leadRouting.challenge}</p>
          </div>

          {/* How it works, in plain language */}
          <div style={{ marginBottom: "4rem" }}>
            <h3 className="section-eyebrow">How It Works</h3>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)", maxWidth: "800px" }}>
              A request enters the system. The system evaluates the information it contains. The appropriate path is determined. The request moves to the next action — automatically, unless it genuinely needs a person&rsquo;s judgment.
            </p>
          </div>

          {/* Visual flow */}
          <div className="glass-panel panel-pad-md" style={{ marginBottom: "4rem", background: "rgba(255,255,255,0.01)" }}>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)", display: "block", marginBottom: "1rem" }}>
              The Actual Workflow
            </span>
            {leadRouting.diagramNodes && <RoutingDiagram nodes={leadRouting.diagramNodes} />}
          </div>

          {/* The approach, in more detail */}
          <div style={{ marginBottom: "6rem", maxWidth: "800px" }}>
            <h3 className="section-eyebrow">The Approach</h3>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{leadRouting.solution}</p>
            {leadRouting.verifiedNote && (
              <p style={{ marginTop: "1.5rem", fontSize: "0.95rem", lineHeight: 1.6, color: "var(--muted-foreground)", fontStyle: "italic" }}>{leadRouting.verifiedNote}</p>
            )}
          </div>

          {/* Capabilities */}
          <div style={{ marginBottom: "5rem", display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {leadRouting.capabilities.map((cap) => (
              <span key={cap} style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "100px", fontSize: "0.85rem", color: "var(--foreground)" }}>
                {cap}
              </span>
            ))}
          </div>

          {/* Business value */}
          <div style={{ marginBottom: "3rem" }}>
            <h3 className="section-eyebrow">Business Value</h3>
            <div className="glass-panel panel-pad-md" style={{ maxWidth: "800px", borderLeft: "4px solid var(--foreground)", background: "rgba(255,255,255,0.01)" }}>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{leadRouting.value}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="section" style={{ backgroundColor: "#020202", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--foreground)", fontWeight: 400, lineHeight: 1.3, marginBottom: "1.5rem" }}>
            Some work doesn&rsquo;t need a person until judgment is genuinely required.
          </h2>
          <Link href="/start" className="btn-primary" style={{ padding: "1.1rem 2.75rem", marginTop: "1rem", display: "inline-block" }}>
            Discuss Your Business →
          </Link>
        </div>
      </footer>
    </main>
  );
}
