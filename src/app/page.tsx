import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { transformations } from "@/data/transformations";

// Each of these slugs now has its own dedicated Transformation category page rather than
// an anchor on a single long page — see src/data/transformationPortfolio.ts.
const transformationRouteBySlug: Record<string, string> = {
  rongdhonu: "/transformations/website-plus-applications",
  agencyos: "/transformations/custom-applications",
  "lead-routing": "/transformations/automations",
};

// Condensed pointers to the three essays already published on /insights — titles,
// categories and images are reused verbatim; blurbs are trimmed versions of the
// real copy on that page, not new claims.
const insightTeasers = [
  {
    category: "Business Architecture",
    title: "The Cost of Fragmented Logic",
    blurb: "Why adding another software tool can quietly make your business harder to run.",
    image: "/insight_fragmented_logic_1784545029766.png",
    alt: "Fragmented logic blocks consolidating into one unified system",
  },
  {
    category: "AI Strategy",
    title: "Agents vs. Automations",
    blurb: "Automate a fixed, repeatable task — or use an AI agent that can make judgment calls?",
    image: "/insight_agents_automation_1784545044780.png",
    alt: "Comparing deterministic automation with an artificial intelligence neural agent",
  },
  {
    category: "Operational Design",
    title: "Designing for Invisibility",
    blurb: "The best technology is the kind your team stops noticing.",
    image: "/insight_invisible_tech_1784545056312.png",
    alt: "Invisible technology concept",
  },
];

export const metadata: Metadata = {
  title: "Ayan AI Studio | Business Systems Studio",
  description: "We build the websites, automations, and custom software businesses run on — and connect them into one system when it matters. Business understanding first, technology second.",
};

export default function Home() {
  return (
    <main className={styles.main}>

      {/* 01 — Hero: what Ayan AI Studio does, in one screen. */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />

        <div className={styles.heroBadge}>
          Business Systems Studio
        </div>

        <h1 className={styles.headline}>
          <span className="text-gradient">Designing Intelligent Systems</span>
          <br />
          Behind Modern Businesses.
        </h1>
        <p className={styles.subheadline}>
          Most businesses don&apos;t need more software — they need what they already have working together. We build websites, automation, and custom software individually, or connect them into one system when that&apos;s what actually moves the business forward.
        </p>

        <div className={styles.heroVisual}>
          <Image src="/home_hero_architecture_1784545430311.png" alt="Unified business operating system architecture" fill sizes="(max-width: 1100px) 100vw, 1100px" style={{ objectFit: "cover", objectPosition: "center 35%" }} priority />
          <div className={styles.heroVisualOverlay} />
        </div>

        <div className={styles.ctaContainer}>
          <Link href="/start" className={styles.primaryBtn}>
            Start a Conversation →
          </Link>
          <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--muted-foreground)", maxWidth: "420px", marginLeft: "auto", marginRight: "auto" }}>
            A working conversation about what&apos;s slow, manual, or disconnected in your business — not a sales pitch.
          </p>
        </div>

        <div className={styles.trustIndicators}>
          <span className={styles.trustItem}>Operational Architecture</span>
          <span className={styles.trustItem}>Business Transformation</span>
          <span className={styles.trustItem}>Research Driven</span>
          <span className={styles.trustItem}>Real Implementations</span>
          <span className={styles.trustItem}>Systems Thinking</span>
        </div>
      </section>

      {/* 02 — The Problem: recognition. */}
      <section className={styles.section} id="problem" style={{ backgroundColor: "#020202" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>The Problem</span>
          <h2 className={styles.sectionTitle}>You didn&apos;t start a business to manage 15 disconnected software tools.</h2>
        </div>

        <div className="container" style={{ maxWidth: "1200px" }}>

          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "4rem", border: "1px solid var(--border)" }}>
            <Image src="/home_chaos_ecosystem_1784545440954.png" alt="Fractured and chaotic data ecosystem" fill sizes="(max-width: 1200px) 100vw, 1200px" style={{ objectFit: "cover", opacity: 0.7 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 0%, rgba(2,2,2,0.8) 100%)" }} />
          </div>
          <div className={styles.chaosGrid}>
            <div className={styles.chaosCard}>
              <h3>Data Silos</h3>
              <p>Your CRM doesn&apos;t talk to your billing software. Your marketing data lives somewhere else entirely. Your team spends hours a week copying the same information from one tool to another.</p>
            </div>
            <div className={styles.chaosCard}>
              <h3>Operational Bottlenecks</h3>
              <p>Bringing on a new client takes days of back-and-forth instead of hours. Every manual step in between is a place a deal can stall, or a customer can lose patience and walk.</p>
            </div>
            <div className={styles.chaosCard}>
              <h3>Brittle Automations</h3>
              <p>Someone set up a workflow that worked, once. Nobody quite remembers how it works now, and it quietly breaks the moment one of your tools changes.</p>
            </div>
          </div>
          <p style={{ marginTop: "4rem", fontSize: "1.25rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
            None of this is really a software problem. Most businesses run on a website, a CRM, spreadsheets, and a handful of tools and automations layered on over time — and when those pieces don&apos;t talk to each other, <span style={{ color: "var(--foreground)" }}>your team becomes the connection between them</span>: copying, checking, re-entering, chasing.
          </p>
        </div>
      </section>

      {/* 03 — Our Approach: problem → solution transition, typography-led, no cards. */}
      <section className={styles.sectionLeft} id="approach">
        <div className="container">
          <span className={styles.sectionEyebrow}>Our Approach</span>
          <h2 className={styles.philosophyText}>
            Traditional agencies treat the symptoms. <br />
            <span className={styles.philosophyHighlight}>They build isolated &quot;AI automations&quot; that add complexity.</span> <br />
            We treat the disease. <br />
            <span className={styles.philosophyHighlight}>We redesign your entire Operational Core.</span>
          </h2>

          <div style={{ maxWidth: "760px", marginTop: "4rem" }}>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
              We design and build the connected version instead — one system where information and work move to where they&apos;re needed on their own. We call it the <span style={{ color: "var(--foreground)" }}>Operational Core</span>.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.7, marginTop: "1.5rem" }}>
              One piece, or the whole system: every engagement is built to the same standard, whether you need a single piece done right or all of them working together.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — What We Build: concise capability overview, links out to Services for depth. */}
      <section className={styles.section} id="what-we-build">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>What We Build</span>
          <h2 className={styles.sectionTitle}>Websites, automation, applications — connected when it counts.</h2>
        </div>

        <div className="container" style={{ maxWidth: "1400px" }}>
          <div className={`${styles.chaosGrid} ${styles.chaosGridFour}`}>
            <Link href="/solutions#websites" className={`${styles.chaosCard} ${styles.chaosCardFour}`} style={{ display: "block", textDecoration: "none" }}>
              <h3>Websites</h3>
              <p>A premium, high-converting website — built to earn trust and convert, on its own or as the front door to a larger system.</p>
            </Link>
            <Link href="/solutions#automation" className={`${styles.chaosCard} ${styles.chaosCardFour}`} style={{ display: "block", textDecoration: "none" }}>
              <h3>Automation &amp; AI Agents</h3>
              <p>Eliminate repetitive work — lead qualification, scheduling, data entry — without touching anything else you already run.</p>
            </Link>
            <Link href="/solutions#applications" className={`${styles.chaosCard} ${styles.chaosCardFour}`} style={{ display: "block", textDecoration: "none" }}>
              <h3>Custom Applications</h3>
              <p>A tool built around how your business actually operates — a client portal, an internal dashboard, a workflow no off-the-shelf software fits.</p>
            </Link>
            <Link href="/solutions#integrated" className={`${styles.chaosCard} ${styles.chaosCardFour}`} style={{ display: "block", textDecoration: "none" }}>
              <h3>Integrated Systems</h3>
              <p>Two or more of the above, engineered to work together as one connected system — so information moves between them on its own, instead of someone re-entering it by hand.</p>
            </Link>
          </div>
          <p style={{ marginTop: "3rem", textAlign: "center", color: "var(--muted-foreground)", fontSize: "1.05rem" }}>
            Not sure which one fits? Tell us what&apos;s slow, manual, or breaking in your business — we&apos;ll help you figure out the rest.
          </p>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/solutions" style={{ color: "var(--foreground)", fontSize: "0.95rem", textDecoration: "underline", textUnderlineOffset: "3px" }}>Explore All Services →</Link>
          </div>
        </div>
      </section>

      {/* 05 — Transformations, Not Projects: proof, structured as before → built → result. */}
      <section className={styles.section} id="proof">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Proof of Concept</span>
          <h2 className={styles.sectionTitle}>Transformations, Not Projects.</h2>
          <p style={{ marginTop: "1.5rem", color: "var(--muted-foreground)", fontSize: "1.2rem" }}>
            Real businesses, real bottlenecks, and what changed once the underlying system was redesigned around them.
          </p>
        </div>

        <div className="container" style={{ maxWidth: "1200px" }}>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "3.5rem", marginBottom: "5rem", paddingBottom: "3rem", borderBottom: "1px solid var(--border)" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.9rem", color: "var(--foreground)", fontWeight: 300 }}>-70%</div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.3rem" }}>Avg Onboarding Time</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.9rem", color: "var(--foreground)", fontWeight: 300 }}>99%</div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.3rem" }}>Manual Work Eliminated</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.9rem", color: "var(--foreground)", fontWeight: 300 }}>12+</div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.3rem" }}>Core Systems Designed</div>
            </div>
          </div>

          <div className={styles.chaosGrid}>
            {transformations.map((t) => (
              <Link key={t.slug} href={transformationRouteBySlug[t.slug] ?? "/transformations"} className={styles.chaosCard} style={{ display: "block", textDecoration: "none" }}>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>{t.type}</span>
                <h3 style={{ marginTop: "0.75rem" }}>{t.client}</h3>

                <span style={{ display: "block", marginTop: "1.5rem", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)", opacity: 0.7 }}>Before</span>
                <p style={{ marginTop: "0.4rem" }}>{t.homepagePreview.problem}</p>

                <span style={{ display: "block", marginTop: "1.25rem", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)", opacity: 0.7 }}>What We Built</span>
                <p style={{ marginTop: "0.4rem" }}>{t.homepagePreview.change}</p>

                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                  <span style={{ display: "block", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)", opacity: 0.7, marginBottom: "0.5rem" }}>Result</span>
                  {t.homepagePreview.metric ? (
                    <>
                      <div style={{ fontSize: "1.5rem", color: "var(--foreground)", fontWeight: 400 }}>{t.homepagePreview.metric.value}</div>
                      <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-foreground)", marginTop: "0.3rem" }}>{t.homepagePreview.metric.label}</div>
                    </>
                  ) : (
                    <p style={{ color: "var(--foreground)", margin: 0 }}>{t.homepagePreview.result}</p>
                  )}
                </div>
                <span style={{ display: "inline-block", marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--foreground)" }}>Read the full report →</span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "6rem" }}>
             <Link href="/transformations" className="btn-secondary">Read the Full Transformation Reports</Link>
          </div>

        </div>
      </section>

      {/* 06 — How It Works: the process, conceptual and short. Deeper diagrams live on /methodologies. */}
      <section className={styles.section} id="how-it-works" style={{ backgroundColor: "#050505", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className={styles.sectionHeaderLeft} style={{ alignSelf: "flex-start", paddingLeft: "5vw" }}>
          <span className={styles.sectionEyebrow}>How It Works</span>
          <h2 className={styles.sectionTitle}>The Connected Business Architecture.</h2>
          <p style={{ marginTop: "1.5rem", color: "var(--muted-foreground)", fontSize: "1.2rem", maxWidth: "600px" }}>
            How we turn a tangle of tools, spreadsheets, and manual work into one connected system — in three phases.
          </p>
        </div>

        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.cbaContainer}>

            <div className={styles.cbaPhase}>
              <div className={styles.cbaNumber}>01</div>
              <div className={styles.cbaContent}>
                <h3>Operational Mapping</h3>
                <p>We study how your business actually runs today — where information and work slow down, get duplicated, or fall through the cracks.</p>
              </div>
            </div>

            <div className={styles.cbaPhase}>
              <div className={styles.cbaNumber}>02</div>
              <div className={styles.cbaContent}>
                <h3>System Architecture</h3>
                <p>We design the blueprint for how everything should connect — replacing patched-together fixes with a proper foundation.</p>
              </div>
            </div>

            <div className={styles.cbaPhase}>
              <div className={styles.cbaNumber}>03</div>
              <div className={styles.cbaContent}>
                <h3>Intelligent Orchestration</h3>
                <p>Custom AI agents and automated workflows come online, so routine decisions and admin work happen on their own — while your team focuses on the work only people can do.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="container" style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/methodologies" style={{ color: "var(--foreground)", fontSize: "0.95rem", textDecoration: "underline", textUnderlineOffset: "3px" }}>Explore the Full Methodology →</Link>
        </div>
      </section>

      {/* 07 — Why Ayan AI Studio: differentiation, not generic claims. */}
      <section className={styles.section} id="why-us">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Why Ayan AI Studio</span>
          <h2 className={styles.sectionTitle}>Business First. Technology Second.</h2>
          <p style={{ marginTop: "1.5rem", color: "var(--muted-foreground)", fontSize: "1.2rem" }}>
            Technology is a multiplier, not a savior — we engineer for business outcomes, not technical novelty.
          </p>
        </div>

        <div className="container" style={{ maxWidth: "1000px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem", textAlign: "left" }}>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Clarity Before Code</h4>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}>We spend time understanding how your business actually works before we decide what to build. The right answer is often not the one you expected.</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Invisible Technology</h4>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}>The best system doesn&apos;t ask your team to think about it. It just makes the work faster and the friction disappear.</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Long-Term Systems</h4>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}>We build for where your business is headed, not just the problem in front of you today — so you&apos;re not tearing it out and starting over in a year.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/principles" style={{ color: "var(--foreground)", fontSize: "0.95rem", textDecoration: "underline", textUnderlineOffset: "3px" }}>Explore All Operating Principles →</Link>
          </div>
        </div>
      </section>

      {/* 08 — Innovation / Authority: a taste of the research, not the whole Lab. */}
      <section className={styles.section} id="insights">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Insights &amp; Research</span>
          <h2 className={styles.sectionTitle}>Every Transformation Begins as Research.</h2>
          <p style={{ marginTop: "1.5rem", color: "var(--muted-foreground)", fontSize: "1.2rem" }}>
            Every transformation we deliver begins with observation, prototyping, and internal validation inside our own <Link href="/lab" style={{ color: "var(--foreground)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Innovation Lab</Link> before it ever reaches a client.
          </p>
        </div>

        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className={styles.chaosGrid}>
            {insightTeasers.map((item) => (
              <Link key={item.title} href="/insights" style={{ display: "block", textDecoration: "none" }}>
                <div className="insight-image" style={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)" }}>
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 380px" style={{ objectFit: "cover", opacity: 0.9 }} />
                </div>
                <span style={{ display: "block", marginTop: "1.25rem", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>{item.category}</span>
                <h3 style={{ fontSize: "1.3rem", color: "var(--foreground)", marginTop: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>{item.blurb}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/insights" className="btn-secondary">Explore Insights &amp; Research →</Link>
          </div>
        </div>
      </section>

      {/* 09 — Final CTA: the natural conclusion, no new explanation required. */}
      <footer className={`${styles.section} ${styles.finalCtaSection}`} id="vision" style={{ backgroundColor: "#020202", borderTop: "1px solid var(--border)", justifyContent: "center" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className={styles.sectionEyebrow}>The Vision</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 400, margin: "2rem 0", lineHeight: 1.1 }}>
            We are building the operating systems of future businesses.
          </h2>
          <p className={styles.finalCtaText} style={{ color: "var(--muted-foreground)", fontSize: "1.2rem", fontWeight: 300, lineHeight: 1.6 }}>
            Every engagement — one piece or the whole system — starts the same way: understanding your business before deciding what to build. We work with founders who want technology that actually fits how their company operates, not another tool bolted on.
          </p>

          <Link href="/start" className={`${styles.primaryBtn} ${styles.finalCtaBtn}`}>
            Start a Conversation →
          </Link>
          <div style={{ marginTop: "1.5rem", fontSize: "0.95rem", color: "var(--muted-foreground)" }}>
            <p style={{ margin: "0.5rem 0", color: "var(--foreground)" }}>Begin with a Business Systems Assessment.</p>
            <p>A conversation about your business — what&apos;s slow, what&apos;s manual, what&apos;s breaking — so we can figure out together whether the answer is a website, an automation, an application, or all three connected. No commitment, no jargon required.</p>
          </div>

          <div className={styles.finalCtaTech}>
            <p style={{ color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem", marginBottom: "2rem" }}>
              Technology We Commonly Work With
            </p>
            <div className={styles.techGrid}>
              <span>OpenAI</span>
              <span>Claude</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>PostgreSQL</span>
              <span>Supabase</span>
              <span>n8n</span>
            </div>
            <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>Technology is only the implementation layer. Business transformation is the outcome.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
