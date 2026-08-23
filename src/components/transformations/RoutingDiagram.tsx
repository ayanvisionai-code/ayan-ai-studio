import { Fragment } from "react";

export default function RoutingDiagram({ nodes }: { nodes: string[] }) {
  const nodeWidth = 150;
  const gap = 40;
  const totalWidth = nodes.length * nodeWidth + (nodes.length - 1) * gap;
  return (
    <>
      <div className="diagram-desktop-view" style={{ overflowX: "auto", padding: "1rem 0" }}>
        <svg
          viewBox={`0 0 ${totalWidth} 120`}
          style={{ width: "100%", minWidth: "640px", height: "auto", maxWidth: "900px", display: "block", margin: "0 auto" }}
        >
          {nodes.map((node, i) => {
            const x = i * (nodeWidth + gap);
            return (
              <g key={node}>
                {i < nodes.length - 1 && (
                  <line
                    x1={x + nodeWidth}
                    y1={60}
                    x2={x + nodeWidth + gap}
                    y2={60}
                    stroke="var(--border-hover)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                )}
                <rect
                  x={x}
                  y={30}
                  width={nodeWidth}
                  height={60}
                  rx="10"
                  fill={i === 0 || i === nodes.length - 1 ? "rgba(255,255,255,0.04)" : "rgba(10,10,10,0.8)"}
                  stroke={i === 0 || i === nodes.length - 1 ? "var(--foreground)" : "var(--border-hover)"}
                  strokeWidth="1"
                />
                <text
                  x={x + nodeWidth / 2}
                  y={64}
                  fill={i === 0 || i === nodes.length - 1 ? "var(--foreground)" : "rgba(255,255,255,0.75)"}
                  fontSize="11"
                  textAnchor="middle"
                  fontWeight="400"
                  letterSpacing="0.01em"
                >
                  {node.length > 18 ? node.slice(0, 16) + "…" : node}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Mobile: the desktop chain forces >=640px of horizontal scroll to see
          every node, which on a phone leaves only 1-2 nodes visible at a time.
          Recompose the same sequence as a vertical flow instead — same nodes,
          same endpoint emphasis (first/last), same order, no scrolling. Reuses
          the .flow-* utilities built for the Solutions page diagrams. */}
      <div className="diagram-mobile-view flow-mobile">
        {nodes.map((node, i) => {
          const isEndpoint = i === 0 || i === nodes.length - 1;
          return (
            <Fragment key={node}>
              {i > 0 && <div className="flow-arrow-down">↓</div>}
              <div className={isEndpoint ? "flow-node" : "flow-node flow-node--muted"}>{node}</div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
