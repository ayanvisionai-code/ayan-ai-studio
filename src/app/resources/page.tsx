import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Ayan AI Studio",
  description: "Downloadable templates, guides, and frameworks for operational design.",
};

export default function ResourcesPage() {
  return (
    <main>
      <header className="page-header">
        <span className="section-eyebrow animate-fade-up">Intellectual Property</span>
        <h1 className="page-title animate-fade-up delay-1">Open Resources.</h1>
        <p className="page-subtitle animate-fade-up delay-2">
          We believe in transparent engineering. Access our internal templates, audit frameworks, and system design files to begin your own operational transformation.
        </p>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div className="grid-auto-md" style={{ gap: "2rem" }}>

            <div className="glass-panel panel-pad-md" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "4px", alignSelf: "flex-start", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Figma Template</div>
              <h2 style={{ fontSize: "1.5rem", color: "var(--foreground)" }}>The Data Decay Map</h2>
              <p style={{ fontSize: "1rem", flexGrow: 1 }}>A visual framework for auditing where data is lost or manually transferred within your current operations.</p>
              <span className="btn-secondary" style={{ alignSelf: "flex-start", fontSize: "0.9rem", padding: "0.5rem 1.5rem", opacity: 0.5, cursor: "not-allowed" }}>Coming Soon</span>
            </div>

            <div className="glass-panel panel-pad-md" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "4px", alignSelf: "flex-start", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Notion Framework</div>
              <h2 style={{ fontSize: "1.5rem", color: "var(--foreground)" }}>AI Readiness Checklist</h2>
              <p style={{ fontSize: "1rem", flexGrow: 1 }}>Don't buy AI tools yet. Use this checklist to determine if your underlying business logic is sound enough to automate.</p>
              <span className="btn-secondary" style={{ alignSelf: "flex-start", fontSize: "0.9rem", padding: "0.5rem 1.5rem", opacity: 0.5, cursor: "not-allowed" }}>Coming Soon</span>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
