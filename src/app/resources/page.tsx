import { Metadata } from "next";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "Resources | Ayan AI Studio",
  description: "Downloadable templates, guides, and frameworks for operational design.",
};

export default function ResourcesPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <header className="page-header" style={{ padding: "11rem 5vw 4rem" }}>
        <SectionEyebrow label="Toolkits &amp; Frameworks" variant="teal" />
        <h1 className="page-title">
          Open <span className="title-gradient">Resources &amp; Toolkits.</span>
        </h1>
        <p className="page-subtitle" style={{ color: "var(--growrev-text-muted)" }}>
          Transparent engineering assets. Access our internal frameworks, audit templates, and architectural blueprints.
        </p>
      </header>

      <section className="section" style={{ padding: "2rem 5vw 8rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div className="grid-auto-md" style={{ gap: "2.5rem" }}>

            <div className="growrev-card" style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ padding: "0.4rem 0.9rem", background: "rgba(15, 182, 184, 0.12)", border: "1px solid rgba(15, 182, 184, 0.3)", borderRadius: "100px", alignSelf: "flex-start", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--growrev-cyan)", fontWeight: 600 }}>Figma Framework</div>
              <h2 style={{ fontSize: "1.6rem", color: "#FFFFFF", fontWeight: 500 }}>The Data Decay Map</h2>
              <p style={{ fontSize: "1.05rem", color: "var(--growrev-text-muted)", flexGrow: 1, lineHeight: 1.6 }}>A visual system design map for auditing where customer data is delayed, duplicated, or manually re-entered across operations.</p>
              <span className="btn-pill-arrow" style={{ alignSelf: "flex-start", opacity: 0.7 }}>Available Q4 · Pre-release</span>
            </div>

            <div className="growrev-card" style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ padding: "0.4rem 0.9rem", background: "rgba(116, 102, 223, 0.12)", border: "1px solid rgba(116, 102, 223, 0.3)", borderRadius: "100px", alignSelf: "flex-start", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--growrev-iris)", fontWeight: 600 }}>Notion Architecture</div>
              <h2 style={{ fontSize: "1.6rem", color: "#FFFFFF", fontWeight: 500 }}>AI Readiness Checklist</h2>
              <p style={{ fontSize: "1.05rem", color: "var(--growrev-text-muted)", flexGrow: 1, lineHeight: 1.6 }}>Do not purchase new AI subscriptions blindly. Use this diagnostic matrix to verify if your underlying business workflows are sound enough to automate.</p>
              <span className="btn-pill-arrow" style={{ alignSelf: "flex-start", opacity: 0.7 }}>Available Q4 · Pre-release</span>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
