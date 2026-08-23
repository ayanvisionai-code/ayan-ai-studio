import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getCategoryMeta } from "@/data/transformationPortfolio";
import { transformations } from "@/data/transformations";
import RoutingDiagram from "@/components/transformations/RoutingDiagram";

const category = getCategoryMeta("applications");
const agencyos = transformations.find((t) => t.slug === "agencyos")!;

export const metadata: Metadata = {
  title: "AgencyOS | Transformations | Ayan AI Studio",
  description: "A custom business operations platform for digital agencies — AgencyOS, in detail.",
};

interface Shot {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

const dashboardShot: Shot = {
  src: "/agencyos-dashboard.png",
  alt: "AgencyOS unified dashboard showing leads, clients, active projects and outstanding invoices",
  width: 1906,
  height: 953,
  caption: "The central workspace — leads, clients, active projects, team members, overdue items and outstanding invoices, visible from one screen the moment an agency owner logs in.",
};

const clientShot: Shot = {
  src: "/agencyos-client-redacted.png",
  alt: "AgencyOS client directory with contact details redacted",
  width: 1920,
  height: 948,
  caption: "The client directory — company, contact and history in one place. Contact details are shown redacted here for privacy; the real interface displays them to authorized team members only.",
};

const projectShot: Shot = {
  src: "/agencyos-projects.png",
  alt: "AgencyOS project management and delivery board",
  width: 1920,
  height: 948,
  caption: "Active projects with status and client, tracked from kickoff through delivery.",
};

const dealShots: Shot[] = [
  { src: "/agencyos-proposals.jpg", alt: "AgencyOS proposals list with status from draft to viewed", width: 1400, height: 677, caption: "Sales proposals and estimates, from draft through sent and viewed." },
  { src: "/agencyos-contracts.jpg", alt: "AgencyOS contracts list with version and status", width: 1400, height: 696, caption: "Signed and draft client agreements, versioned and tracked by status." },
  { src: "/agencyos-invoices.jpg", alt: "AgencyOS invoices list with paid and partially paid status", width: 1400, height: 690, caption: "Billing tied directly to the client record — draft, partially-paid and paid states tracked in one place." },
];

const messagesShot: Shot = {
  src: "/agencyos-messages.jpg",
  alt: "AgencyOS team messaging with group and direct conversations",
  width: 1400,
  height: 688,
  caption: "Direct and group messaging inside the same workspace — team coordination without switching to a separate chat tool.",
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

export default function CustomApplicationsPage() {
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
              <span className="section-eyebrow" style={{ margin: 0 }}>Custom Business Operations Platform</span>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--foreground)", border: "1px solid var(--border)", borderRadius: "100px", padding: "0.35rem 0.9rem" }}>
                Live Project
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--foreground)", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.25rem" }}>
              AgencyOS
            </h2>
            <p style={{ fontSize: "1.4rem", color: "var(--foreground)", fontStyle: "italic", maxWidth: "760px", lineHeight: 1.5, marginBottom: "1.5rem" }}>
              Software designed around how an agency actually works.
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", maxWidth: "800px", lineHeight: 1.7 }}>{agencyos.summary}</p>
          </div>

          {/* 01 — Project context */}
          <div style={{ marginBottom: "6rem", maxWidth: "800px" }}>
            <h3 className="section-eyebrow">Project Context</h3>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--foreground)" }}>{agencyos.context}</p>
          </div>

          {/* 02 — The operational problem */}
          <div className="grid-auto-lg" style={{ marginBottom: "7rem", gap: "3rem" }}>
            <div>
              <h3 className="section-eyebrow">The Operational Problem</h3>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--foreground)" }}>{agencyos.challenges}</p>
            </div>
            <div className="glass-panel panel-pad-sm">
              <h3 className="section-eyebrow">Why It Happened</h3>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{agencyos.bottlenecks}</p>
            </div>
          </div>

          <div style={{ marginBottom: "7rem", maxWidth: "800px" }}>
            <h3 className="section-eyebrow">What We Found</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{agencyos.discovery}</p>
          </div>

          {/* 03 — The System (dashboard) */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="01">The System</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px", marginBottom: "3rem" }}>
              This is the central workspace from which the agency manages its operational information — instead of switching between a separate CRM, invoicing tool, project tracker and chat app.
            </p>
            <ShotBlock shot={dashboardShot} priority />
          </div>

          {/* 04 — Client management */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="02">Client Management</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px", marginBottom: "3rem" }}>
              Every client&rsquo;s company, contact history and status lives in one directory, connected to the same record used by proposals, contracts, projects and invoices — instead of a spreadsheet nobody kept current.
            </p>
            <ShotBlock shot={clientShot} />
          </div>

          {/* 05 — Project management */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="03">Project Management</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px", marginBottom: "3rem" }}>
              Projects sit in the same workspace as the client that commissioned them — status and delivery tracked against the agency&rsquo;s actual workload, not a generic task board disconnected from who it&rsquo;s for.
            </p>
            <ShotBlock shot={projectShot} />
          </div>

          {/* 06 — Contracts / Proposals / Invoices */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="04">Contracts, Proposals &amp; Invoices</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px", marginBottom: "3rem" }}>
              The commercial side of agency work — what was proposed, what was signed, and what was billed — tracked through its own status, instead of living across email threads and separate documents.
            </p>
            <div className="grid-auto-lg" style={{ gap: "2rem" }}>
              {dealShots.map((s) => <ShotBlock key={s.src} shot={s} />)}
            </div>
          </div>

          {/* 07 — Team communication */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="05">Files, Messages &amp; Team</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px", marginBottom: "3rem" }}>
              Team coordination happens in the same place as the work itself, rather than a separate chat app disconnected from the clients and projects being discussed.
            </p>
            <ShotBlock shot={messagesShot} />
          </div>

          {/* 08 — System relationship / workflow */}
          <div style={{ marginBottom: "8rem" }}>
            <SectionLabel number="06">How The Pieces Fit Together</SectionLabel>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px", marginBottom: "1rem" }}>
              What this means for the agency: a lead moving through the sales pipeline, becoming an onboarded client, assigned to a project workspace, is the same connected record from the first message to the final invoice — not five separate systems that have to be kept in sync by hand.
            </p>
            <div className="glass-panel panel-pad-md" style={{ marginTop: "2rem", background: "rgba(255,255,255,0.01)" }}>
              <RoutingDiagram nodes={agencyos.architecture} />
            </div>
          </div>

          {/* 09 — Transformation: Before / After */}
          <div style={{ marginBottom: "6rem" }}>
            <SectionLabel number="07">The Transformation</SectionLabel>
            <div className="grid-auto-lg" style={{ gap: "3rem", marginTop: "1.5rem" }}>
              <div className="glass-panel panel-pad-sm">
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>Before</span>
                <p style={{ marginTop: "1rem", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{agencyos.bottlenecks}</p>
              </div>
              <div className="glass-panel panel-pad-sm" style={{ borderLeft: "4px solid var(--foreground)", background: "rgba(255,255,255,0.01)" }}>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--foreground)" }}>After</span>
                <p style={{ marginTop: "1rem", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--foreground)" }}>{agencyos.results}</p>
              </div>
            </div>
          </div>

          {/* 10 — Business value */}
          <div style={{ marginBottom: "5rem", maxWidth: "800px" }}>
            <SectionLabel number="08">Business Value</SectionLabel>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)", fontStyle: "italic", marginBottom: "1.5rem" }}>{agencyos.lessons}</p>
            {agencyos.endingNote && (
              <div className="glass-panel panel-pad-sm" style={{ borderLeft: "4px solid var(--foreground)", background: "rgba(255,255,255,0.01)" }}>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--foreground)", margin: 0 }}>{agencyos.endingNote}</p>
              </div>
            )}
          </div>

          <div>
            <Link href={agencyos.liveLink} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "0.9rem 2rem" }}>
              {agencyos.ctaPrimaryButton} →
            </Link>
          </div>
        </div>
      </section>

      <footer className="section" style={{ backgroundColor: "#020202", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--foreground)", fontWeight: 400, lineHeight: 1.3, marginBottom: "1.5rem" }}>
            When off-the-shelf software doesn&rsquo;t fit, the right answer is software built around the work.
          </h2>
          <Link href="/start" className="btn-primary" style={{ padding: "1.1rem 2.75rem", marginTop: "1rem", display: "inline-block" }}>
            Discuss Your Business →
          </Link>
        </div>
      </footer>
    </main>
  );
}
