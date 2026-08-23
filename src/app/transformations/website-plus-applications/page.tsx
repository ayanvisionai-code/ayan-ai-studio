import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getCategoryMeta } from "@/data/transformationPortfolio";
import { transformations } from "@/data/transformations";
import RoutingDiagram from "@/components/transformations/RoutingDiagram";

const category = getCategoryMeta("websites-apps");
const rongdhonu = transformations.find((t) => t.slug === "rongdhonu")!;

export const metadata: Metadata = {
  title: "Rongdhonu Operating System | Transformations | Ayan AI Studio",
  description: "A public gallery and website connected to a private administration system — the Rongdhonu Operating System, in detail.",
};

interface Shot {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

const publicShots: Shot[] = [
  { src: "/rongdhonu-home.jpg", alt: "Rongdhonu public homepage — Where Art Meets Soul", width: 1400, height: 807, caption: "What visitors see first — the organization presented as one cohesive identity, not a static brochure." },
  { src: "/rongdhonu-exhibitions.jpg", alt: "Rongdhonu exhibitions page with exhibition history and stats", width: 1400, height: 807, caption: "Exhibition history and the current program on their own dedicated page." },
  { src: "/rongdhonu-gallery.jpg", alt: "Rongdhonu gallery page with search and album filters", width: 1400, height: 807, caption: "A searchable visual archive, filterable by exhibition, ceremony or theme — captured once by an administrator, then usable indefinitely by the public." },
  { src: "/rongdhonu-catalogs.jpg", alt: "Rongdhonu exhibition catalog archive page", width: 1400, height: 807, caption: "The organization's official exhibition catalogs, archived and downloadable — public access to a record that used to live only in scattered files." },
];

const adminShot: Shot = {
  src: "/rongdhonu-dashboard.png",
  alt: "Rongdhonu administrative dashboard showing artists, artworks, exhibitions and CMS pages",
  width: 1920,
  height: 946,
  caption: "The Administration Dashboard — members, artist profiles, artwork catalogs, exhibition workflows and the organization's historical archive, all managed from one place.",
};

function SectionLabel({ number, children }: { number?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", marginBottom: "1.25rem" }}>
      {number && <span style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>{number}</span>}
      <h3 style={{ fontSize: "2.2rem", color: "var(--foreground)", fontWeight: 400, margin: 0 }}>{children}</h3>
    </div>
  );
}

function ShotBlock({ shot, priority }: { shot: Shot; priority?: boolean }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ position: "relative", width: "100%", aspectRatio: `${shot.width} / ${shot.height}`, borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", backgroundColor: "#050505" }}>
        <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 1024px) 100vw, 900px" style={{ objectFit: "contain" }} priority={priority} />
      </div>
      <figcaption style={{ marginTop: "0.9rem", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>{shot.caption}</figcaption>
    </figure>
  );
}

export default function WebsitePlusApplicationsPage() {
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

          {/* Project introduction */}
          <div style={{ marginBottom: "5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
              <span className="section-eyebrow" style={{ margin: 0 }}>{rongdhonu.type}</span>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--foreground)", border: "1px solid var(--border)", borderRadius: "100px", padding: "0.35rem 0.9rem" }}>
                Live Project
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--foreground)", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.25rem" }}>
              {rongdhonu.client}
            </h2>
            <p style={{ fontSize: "1.4rem", color: "var(--foreground)", fontStyle: "italic", maxWidth: "760px", lineHeight: 1.5, marginBottom: "1.5rem" }}>
              The public website is only one part of the system.
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", maxWidth: "800px", lineHeight: 1.7 }}>{rongdhonu.summary}</p>
          </div>

          {/* 01 — Context */}
          <div style={{ marginBottom: "6rem", maxWidth: "800px" }}>
            <h3 className="section-eyebrow">Context</h3>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--foreground)" }}>{rongdhonu.context}</p>
          </div>

          {/* 02 — The existing challenge */}
          <div className="grid-auto-lg" style={{ marginBottom: "7rem", gap: "3rem" }}>
            <div>
              <h3 className="section-eyebrow">The Existing Challenge</h3>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--foreground)" }}>{rongdhonu.challenges}</p>
            </div>
            <div className="glass-panel panel-pad-sm">
              <h3 className="section-eyebrow">Why It Happened</h3>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{rongdhonu.bottlenecks}</p>
            </div>
          </div>

          {/* What we found */}
          <div style={{ marginBottom: "7rem", maxWidth: "800px" }}>
            <h3 className="section-eyebrow">What We Found</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{rongdhonu.discovery}</p>
          </div>

          {/* 03 — The Public Experience */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="01">The Public Experience</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px", marginBottom: "3rem" }}>
              The public-facing website communicates the organization&rsquo;s gallery, exhibitions and artist community to visitors — a website connected to the system that manages the work behind it, not a standalone brochure site.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <ShotBlock shot={publicShots[0]} priority />
              <div className="grid-auto-lg" style={{ gap: "2rem" }}>
                {publicShots.slice(1).map((s) => <ShotBlock key={s.src} shot={s} />)}
              </div>
            </div>
          </div>

          {/* 04 — The Administrative System */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="02">The Administrative System</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px", marginBottom: "3rem" }}>
              The public website is only one side of the system. Behind it is an administrative layer that allows the organization to manage the information visitors see — member accounts, artist profiles, artwork catalogs, exhibition workflows, notifications and the historical archive, via a secure Administration Dashboard.
            </p>
            <ShotBlock shot={adminShot} />
          </div>

          {/* 05 — Content / Data Structure */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="03">Content &amp; Data Structure</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px", marginBottom: "1rem" }}>
              What this does for the organization: an artist profile, an artwork record, or an exhibition only has to be entered once. The same record then appears wherever it&rsquo;s needed — the public gallery, the exhibition page, the artist portal — instead of being retyped for each.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.6, maxWidth: "780px", marginBottom: "2.5rem", fontStyle: "italic" }}>
              Structurally, this is how the record types connect:
            </p>
            <div className="glass-panel panel-pad-md" style={{ background: "rgba(255,255,255,0.01)" }}>
              <RoutingDiagram nodes={rongdhonu.architecture} />
            </div>
          </div>

          {/* 06 — How the system connects */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="04">How The System Connects</SectionLabel>
            <div className="glass-panel panel-pad-md" style={{ maxWidth: "820px", borderLeft: "4px solid var(--foreground)", background: "rgba(255,255,255,0.01)" }}>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--foreground)" }}>{rongdhonu.strategy}</p>
            </div>
          </div>

          {/* 07 — Implementation */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="05">Implementation</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "800px", marginBottom: "2rem" }}>{rongdhonu.implementation}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {["Member accounts", "Artist profiles & artwork catalog", "Exhibition workflows & notifications", "Historical archive", "Public website & artist showcases", "Exhibition & artwork galleries"].map((cap) => (
                <span key={cap} style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "100px", fontSize: "0.85rem", color: "var(--foreground)" }}>
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* 08 — Transformation: Before / After */}
          <div style={{ marginBottom: "6rem" }}>
            <SectionLabel number="06">The Transformation</SectionLabel>
            <div className="grid-auto-lg" style={{ gap: "3rem", marginTop: "1.5rem" }}>
              <div className="glass-panel panel-pad-sm">
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>Before</span>
                <p style={{ marginTop: "1rem", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{rongdhonu.bottlenecks}</p>
              </div>
              <div className="glass-panel panel-pad-sm" style={{ borderLeft: "4px solid var(--foreground)", background: "rgba(255,255,255,0.01)" }}>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--foreground)" }}>After</span>
                <p style={{ marginTop: "1rem", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--foreground)" }}>{rongdhonu.results}</p>
              </div>
            </div>
          </div>

          {/* 09 — Business value */}
          <div style={{ marginBottom: "6rem", maxWidth: "800px" }}>
            <SectionLabel number="07">Business Value</SectionLabel>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)", fontStyle: "italic" }}>{rongdhonu.lessons}</p>
          </div>

          <div>
            <Link href={rongdhonu.liveLink} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "0.9rem 2rem" }}>
              {rongdhonu.ctaPrimaryButton} →
            </Link>
          </div>
        </div>
      </section>

      <footer className="section" style={{ backgroundColor: "#020202", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--foreground)", fontWeight: 400, lineHeight: 1.3, marginBottom: "1.5rem" }}>
            A website connected to the system behind it means nothing gets entered twice.
          </h2>
          <Link href="/start" className="btn-primary" style={{ padding: "1.1rem 2.75rem", marginTop: "1rem", display: "inline-block" }}>
            Discuss Your Business →
          </Link>
        </div>
      </footer>
    </main>
  );
}
