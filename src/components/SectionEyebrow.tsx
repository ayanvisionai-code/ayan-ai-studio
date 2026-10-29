import React from "react";

interface SectionEyebrowProps {
  label: string;
  className?: string;
  variant?: "white" | "teal";
}

export default function SectionEyebrow({
  label,
  className = "",
  variant = "teal",
}: SectionEyebrowProps) {
  const isTeal = variant === "teal";
  const startColor = isTeal ? "#0FB6B8" : "white";
  const stopColor = isTeal ? "#7466DF" : "white";

  return (
    <div className={`subtitle-growrev ${className}`}>
      {/* Left line: transparent -> color */}
      <svg
        className="subtitle-growrev-line"
        viewBox="0 0 151 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H150C150.276 0.5 150.5 0.723858 150.5 1V1C150.5 1.27614 150.276 1.5 150 1.5H1C0.723857 1.5 0.5 1.27614 0.5 1V1Z"
          fill="url(#left-gradient)"
        />
        <defs>
          <linearGradient id="left-gradient" x1="0.5" y1="1" x2="150.5" y2="1" gradientUnits="userSpaceOnUse">
            <stop stopColor={startColor} stopOpacity="0" />
            <stop offset="1" stopColor={startColor} stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      <span className="subtitle-growrev-text">{label}</span>

      {/* Right line: color -> transparent */}
      <svg
        className="subtitle-growrev-line"
        viewBox="0 0 151 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H150C150.276 0.5 150.5 0.723858 150.5 1V1C150.5 1.27614 150.276 1.5 150 1.5H1C0.723857 1.5 0.5 1.27614 0.5 1V1Z"
          fill="url(#right-gradient)"
        />
        <defs>
          <linearGradient id="right-gradient" x1="0.5" y1="1" x2="150.5" y2="1" gradientUnits="userSpaceOnUse">
            <stop stopColor={stopColor} stopOpacity="0.9" />
            <stop offset="1" stopColor={stopColor} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
