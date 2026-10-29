import Link from "next/link";
import { Metadata } from "next";
import { transformationCategories } from "@/data/transformationPortfolio";
import SectionEyebrow from "@/components/SectionEyebrow";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Transformations | Ayan AI Studio",
  description:
    "Real websites, applications and systems, organized by the kind of business problem they solve. Choose a category to see the full case studies.",
};

export default function TransformationsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <header className="page-header" style={{ padding: "11rem 5vw 4rem" }}>
        <SectionEyebrow label="Case Studies &amp; Reports" variant="teal" />
        <h1 className="page-title">
          Different businesses need <br />
          <span className="title-gradient">different systems.</span>
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "760px", color: "var(--growrev-text-muted)" }}>
          The work ranges from flagship digital experiences, to curatorial public portals, to dedicated operational applications, to autonomous workflow engines. Explore the case studies by discipline.
        </p>
      </header>

      <section style={{ padding: "2rem 5vw 8rem" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className={styles.categoryGrid}>
            {transformationCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.route}
                className={styles.categoryCard}
              >
                <span className={styles.categoryNumber}>{cat.number}</span>
                <h2 className={styles.categoryTitle}>{cat.navLabel}</h2>
                <p className={styles.categoryDesc}>{cat.description}</p>
                <div className={styles.categoryLink}>
                  <span className="btn-pill-arrow">
                    View Case Studies <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p style={{ marginTop: "4rem", textAlign: "center", fontSize: "1rem", color: "var(--growrev-text-muted)", maxWidth: "760px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Each engagement is scoped around the exact problem — not every business needs all four disciplines. Some need a credible front door. Some need the connected operational core behind it.
          </p>
        </div>
      </section>

      <footer className="section" style={{ backgroundColor: "#030304", borderTop: "1px solid var(--growrev-border)", textAlign: "center", padding: "6rem 5vw" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <SectionEyebrow label="Start a Project" variant="teal" />
          <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", color: "#FFFFFF", fontWeight: 500, lineHeight: 1.2, margin: "1rem 0 1.5rem" }}>
            Your business may not need more software. <br />
            <span className="title-gradient">It may need a connected system.</span>
          </h2>
          <Link href="/start" className="btn-growrev-primary" style={{ marginTop: "1rem", display: "inline-flex" }}>
            Discuss Your Business Operations →
          </Link>
        </div>
      </footer>
    </main>
  );
}
