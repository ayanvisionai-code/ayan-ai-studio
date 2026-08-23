import Link from "next/link";
import { Metadata } from "next";
import { getCategoryMeta, getEntriesByCategory } from "@/data/transformationPortfolio";
import ProjectStory from "@/components/transformations/ProjectStory";

const category = getCategoryMeta("websites");
const entries = getEntriesByCategory("websites");

export const metadata: Metadata = {
  title: "Websites | Transformations | Ayan AI Studio",
  description: "Digital experiences designed around how a business needs to present itself, attract customers and guide them toward action.",
};

export default function WebsitesTransformationPage() {
  return (
    <main>
      <header className="page-header" style={{ paddingBottom: "3rem" }}>
        <Link href="/transformations" className="link-hover" style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
          ← Transformations
        </Link>
        <div style={{ marginTop: "2rem" }}>
          <span className="section-eyebrow animate-fade-up">{category.number} — {category.navLabel}</span>
          <h1 className="page-title animate-fade-up delay-1">A website should do more than exist.</h1>
          <p className="page-subtitle animate-fade-up delay-2" style={{ maxWidth: "720px" }}>
            We design digital experiences around the way a business needs to be understood and experienced — not a template with the name swapped in.
          </p>
        </div>
      </header>

      {/* The business problem, before any project is shown */}
      <section className="section" style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--foreground)", marginBottom: "1.5rem" }}>
            A business can have a genuinely good product or service and still struggle to communicate its value online. A weak website makes a business look less trustworthy, harder to understand, harder to find, and visually indistinguishable from competitors — and it usually leaves the business dependent on someone else for even small content changes.
          </p>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>
            The four projects below solve that problem differently, because the businesses behind them are different. What they share is the same approach: understand what the business needs to communicate, design the experience around that, and build something the business can actually use — not just look at.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "9rem" }}>
            {entries.map((entry, i) => (
              <div key={entry.slug} style={{ borderTop: i > 0 ? "1px solid var(--border)" : "none", paddingTop: i > 0 ? "9rem" : 0 }}>
                <ProjectStory entry={entry} index={i + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="section" style={{ backgroundColor: "#020202", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--foreground)", fontWeight: 400, lineHeight: 1.3, marginBottom: "1.5rem" }}>
            A stronger website is often the first system a business needs.
          </h2>
          <Link href="/start" className="btn-primary" style={{ padding: "1.1rem 2.75rem", marginTop: "1rem", display: "inline-block" }}>
            Discuss Your Website →
          </Link>
        </div>
      </footer>
    </main>
  );
}
