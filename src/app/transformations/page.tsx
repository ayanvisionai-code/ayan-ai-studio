import Link from "next/link";
import { Metadata } from "next";
import { transformationCategories } from "@/data/transformationPortfolio";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Transformations | Ayan AI Studio",
  description:
    "Real websites, applications and systems, organized by the kind of business problem they solve. Choose a category to see the full case studies.",
};

export default function TransformationsPage() {
  return (
    <main>
      <header className="page-header" style={{ paddingBottom: "3rem" }}>
        <span className="section-eyebrow animate-fade-up">Transformations</span>
        <h1 className="page-title animate-fade-up delay-1">Different businesses need different systems.</h1>
        <p className="page-subtitle animate-fade-up delay-2" style={{ maxWidth: "720px" }}>
          The work ranges from a single premium website, to a public experience with a real system behind it, to dedicated software, to processes that run on their own. Choose the kind of transformation you&rsquo;re curious about — each one has its own detailed case studies.
        </p>
      </header>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className={styles.categoryGrid}>
            {transformationCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.route}
                className={styles.categoryCard}
              >
                <span style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>{cat.number}</span>
                <h2 style={{ fontSize: "1.4rem", color: "var(--foreground)", fontWeight: 400, margin: "0.6rem 0 0.75rem", lineHeight: 1.25 }}>{cat.navLabel}</h2>
                <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.55 }}>{cat.description}</p>
                <span className={styles.categoryLink} style={{ fontSize: "0.95rem", color: "var(--foreground)" }}>View the work →</span>
              </Link>
            ))}
          </div>

          <p style={{ marginTop: "3rem", fontSize: "0.95rem", color: "var(--muted-foreground)", maxWidth: "720px" }}>
            Each business chooses the level appropriate to its problem — not every engagement needs all four. Some need a stronger front door. Some need the system behind it too.
          </p>
        </div>
      </section>

      <footer className="section" style={{ backgroundColor: "#020202", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: "var(--foreground)", fontWeight: 400, lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Your business may not need more software.
            <br />
            It may need a better way for everything to work together.
          </h2>
          <Link href="/start" className="btn-primary" style={{ padding: "1.1rem 2.75rem", marginTop: "1rem", display: "inline-block" }}>
            Discuss Your Business →
          </Link>
        </div>
      </footer>
    </main>
  );
}
