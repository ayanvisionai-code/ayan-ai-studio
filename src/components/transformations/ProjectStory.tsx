import Image from "next/image";
import Link from "next/link";
import type { TransformationEntry, TransformationImage } from "@/data/transformationPortfolio";

function ImageFrame({
  image,
  priority,
  sizes = "(max-width: 900px) 100vw, 700px",
}: {
  image: TransformationImage;
  priority?: boolean;
  /** Override when this frame is displayed wider than the default half-width pairing — e.g. a full-width hero. */
  sizes?: string;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: `${image.width} / ${image.height}`,
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid var(--border)",
          backgroundColor: "#050505",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          placeholder={image.blurDataURL ? "blur" : "empty"}
          blurDataURL={image.blurDataURL}
          style={{ objectFit: "contain" }}
        />
      </div>
      {image.caption && (
        <figcaption style={{ marginTop: "0.85rem", fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function StatusBadge({ status, label }: { status: "live" | "concept"; label: string }) {
  return (
    <span
      style={{
        fontSize: "0.7rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: status === "live" ? "var(--foreground)" : "var(--muted-foreground)",
        border: "1px solid var(--border)",
        borderRadius: "100px",
        padding: "0.35rem 0.9rem",
      }}
    >
      {label}
    </span>
  );
}

/**
 * Rich, editorial single-project case study — the recovered "old" detailed style,
 * reused across the multi-project Websites category page. Alternates which side
 * carries the image vs. the narrative text for visual rhythm; on narrow viewports
 * everything stacks in natural reading order (no CSS reverse tricks).
 */
export default function ProjectStory({ entry, index }: { entry: TransformationEntry; index: number }) {
  const [primary, second, ...remainder] = entry.images;
  // When skipApproachVisual is set, no image is consumed for the Approach pairing —
  // every remaining image (including what would have been "third") flows into the closing grid instead.
  const third = entry.skipApproachVisual ? undefined : remainder[0];
  const rest = entry.skipApproachVisual ? remainder : remainder.slice(1);
  const imageFirst = index % 2 === 1;

  return (
    <article id={entry.slug} style={{ scrollMarginTop: "8rem" }}>
      <header style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <span style={{ fontSize: "1rem", color: "var(--muted-foreground)" }}>{String(index).padStart(2, "0")}</span>
            <span className="section-eyebrow" style={{ margin: 0 }}>{entry.type}</span>
          </div>
          <StatusBadge status={entry.status} label={entry.statusLabel} />
        </div>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--foreground)", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.25rem" }}>
          {entry.title}
        </h2>
        <p style={{ fontSize: "1.4rem", color: "var(--foreground)", fontStyle: "italic", maxWidth: "760px", lineHeight: 1.5, marginBottom: "1rem" }}>
          {entry.oneLiner}
        </p>
        <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", maxWidth: "700px" }}>{entry.businessContext}</p>
      </header>

      {primary && (
        <div style={{ marginBottom: "4rem" }}>
          <ImageFrame image={primary} priority={index === 1} sizes="(max-width: 1100px) 100vw, 1100px" />
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {/* The business need, paired with a supporting visual */}
        <div className="grid-auto-lg" style={{ gap: "3rem", alignItems: "center" }}>
          {imageFirst && second ? (
            <>
              <ImageFrame image={second} />
              <div>
                <h3 className="section-eyebrow">The Business Need</h3>
                <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--foreground)" }}>{entry.challenge}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="section-eyebrow">The Business Need</h3>
                <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--foreground)" }}>{entry.challenge}</p>
              </div>
              {second && <ImageFrame image={second} />}
            </>
          )}
        </div>

        {/* The approach, paired with a second supporting visual — unless that visual is naturally
            tall/portrait, in which case it gets its own full-width block instead of a squeezed column. */}
        {third && third.layout === "full" ? (
          <div>
            <h3 className="section-eyebrow">The Approach</h3>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)", maxWidth: "760px", marginBottom: "2rem" }}>{entry.solution}</p>
            <ImageFrame image={third} sizes="(max-width: 1100px) 100vw, 1100px" />
          </div>
        ) : (
          <div className="grid-auto-lg" style={{ gap: "3rem", alignItems: "center" }}>
            {!imageFirst && third ? (
              <>
                <ImageFrame image={third} />
                <div>
                  <h3 className="section-eyebrow">The Approach</h3>
                  <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{entry.solution}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="section-eyebrow">The Approach</h3>
                  <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{entry.solution}</p>
                </div>
                {third && <ImageFrame image={third} />}
              </>
            )}
          </div>
        )}

        {/* Any remaining curated visuals */}
        {rest.length > 0 && (
          <div className="grid-auto-lg" style={{ gap: "1.5rem" }}>
            {rest.map((img) => (
              <ImageFrame key={img.src} image={img} />
            ))}
          </div>
        )}

        {/* Project-specific capability callouts — only present when there's something genuinely distinct */}
        {entry.highlights && entry.highlights.length > 0 && (
          <div className="grid-auto-md" style={{ gap: "1.5rem" }}>
            {entry.highlights.map((h) => (
              <div key={h.label} className="glass-panel" style={{ padding: "clamp(1.25rem, 5vw, 2.25rem)" }}>
                <h4 style={{ fontSize: "0.95rem", color: "var(--foreground)", marginBottom: "0.75rem" }}>{h.label}</h4>
                <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--muted-foreground)" }}>{h.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Business value */}
        <div className="glass-panel panel-pad-md" style={{ borderLeft: "4px solid var(--foreground)", background: "rgba(255,255,255,0.01)" }}>
          <h3 className="section-eyebrow" style={{ color: "var(--foreground)" }}>Business Value</h3>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>{entry.value}</p>
        </div>

        {/* Capabilities */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          {entry.capabilities.map((cap) => (
            <span
              key={cap}
              style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "100px", fontSize: "0.85rem", color: "var(--foreground)" }}
            >
              {cap}
            </span>
          ))}
        </div>

        {entry.liveUrl && entry.ctaLabel && (
          <div>
            <Link href={entry.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "0.9rem 2rem" }}>
              {entry.ctaLabel} →
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

export { ImageFrame, StatusBadge };
