import React from "react";

/**
 * High-end dimensional/3D-style icons for Ayan AI Studio's 4 core services,
 * inspired by GrowRev's layered hardware & software iconography.
 */

export function AutomationIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="48"
      height="48"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="auto-base" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A2624" />
          <stop offset="1" stopColor="#0B1311" />
        </linearGradient>
        <linearGradient id="auto-cyan" x1="12" y1="12" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00F0C8" />
          <stop offset="1" stopColor="#0FB6B8" />
        </linearGradient>
        <linearGradient id="auto-green" x1="20" y1="10" x2="44" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DFF32" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
        <filter id="auto-glow" x="4" y="4" width="46" height="46" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background soft pill */}
      <rect x="2" y="2" width="50" height="50" rx="12" fill="url(#auto-base)" stroke="#1F3A34" strokeWidth="1.2" />

      {/* Isometric processing block 1 (Top Left) */}
      <path d="M16 19L24 14L32 19L24 24L16 19Z" fill="#1C3833" stroke="#2DD4BF" strokeWidth="1" />
      <path d="M16 19V27L24 32V24L16 19Z" fill="#132623" />
      <path d="M24 24V32L32 27V19L24 24Z" fill="#172F2B" />

      {/* Isometric processing block 2 (Bottom Right) */}
      <path d="M26 29L34 24L42 29L34 34L26 29Z" fill="url(#auto-cyan)" />
      <path d="M26 29V37L34 42V34L26 29Z" fill="#0A7C7D" />
      <path d="M34 34V42L42 37V29L34 34Z" fill="#06595A" />

      {/* Active connecting circuit beam */}
      <path d="M24 21L34 31" stroke="url(#auto-green)" strokeWidth="2.5" strokeLinecap="round" filter="url(#auto-glow)" />

      {/* Pulse energy node */}
      <circle cx="29" cy="26" r="3" fill="#FFFFFF" />
      <circle cx="29" cy="26" r="5" stroke="#7DFF32" strokeWidth="1.5" opacity="0.8" />
    </svg>
  );
}

export function WebDevIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="48"
      height="48"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="web-base" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#172033" />
          <stop offset="1" stopColor="#0B101D" />
        </linearGradient>
        <linearGradient id="web-blue" x1="10" y1="10" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3984F6" />
          <stop offset="1" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="web-cyan" x1="18" y1="20" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Background card */}
      <rect x="2" y="2" width="50" height="50" rx="12" fill="url(#web-base)" stroke="#1E2E4A" strokeWidth="1.2" />

      {/* 3D Browser window frame */}
      <rect x="10" y="12" width="34" height="28" rx="6" fill="#0D1526" stroke="#2563EB" strokeWidth="1.5" />

      {/* Top window bar & dots */}
      <path d="M10 18H44" stroke="#1E293B" strokeWidth="1" />
      <circle cx="15" cy="15.5" r="1.5" fill="#EF4444" />
      <circle cx="19.5" cy="15.5" r="1.5" fill="#F59E0B" />
      <circle cx="24" cy="15.5" r="1.5" fill="#10B981" />

      {/* Web Layout Wireframe */}
      <rect x="14" y="22" width="12" height="13" rx="2" fill="url(#web-cyan)" opacity="0.9" />
      <rect x="29" y="22" width="11" height="3" rx="1.5" fill="#60A5FA" />
      <rect x="29" y="27" width="9" height="2.5" rx="1" fill="#475569" />
      <rect x="29" y="32" width="11" height="2.5" rx="1" fill="#475569" />

      {/* Conversion boost arrow accent */}
      <path d="M37 38L44 31M44 31H39M44 31V36" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LocalSeoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="48"
      height="48"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="seo-base" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#15281E" />
          <stop offset="1" stopColor="#0B1610" />
        </linearGradient>
        <linearGradient id="pin-grad" x1="20" y1="10" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="0.6" stopColor="#059669" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* Background card */}
      <rect x="2" y="2" width="50" height="50" rx="12" fill="url(#seo-base)" stroke="#1B382A" strokeWidth="1.2" />

      {/* Isometric radar / location grid plane */}
      <ellipse cx="27" cy="38" rx="15" ry="6.5" fill="#0D1E16" stroke="#10B981" strokeWidth="1.2" />
      <ellipse cx="27" cy="38" rx="8" ry="3.5" stroke="#34D399" strokeWidth="0.9" opacity="0.7" strokeDasharray="2 2" />

      {/* Vertical radar beam */}
      <line x1="27" y1="26" x2="27" y2="38" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

      {/* 3D Dimensional Map Pin Marker */}
      <path
        d="M27 12C22.58 12 19 15.58 19 20C19 25.5 27 32 27 32C27 32 35 25.5 35 20C35 15.58 31.42 12 27 12Z"
        fill="url(#pin-grad)"
        stroke="#6EE7B7"
        strokeWidth="1.2"
      />
      <circle cx="27" cy="19.5" r="3.2" fill="#042F20" stroke="#A7F3D0" strokeWidth="1" />
      <circle cx="27" cy="19.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function ChatAssistantsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="48"
      height="48"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="chat-base" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#221936" />
          <stop offset="1" stopColor="#100C1C" />
        </linearGradient>
        <linearGradient id="bubble-main" x1="12" y1="12" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="bubble-reply" x1="22" y1="24" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Background card */}
      <rect x="2" y="2" width="50" height="50" rx="12" fill="url(#chat-base)" stroke="#322252" strokeWidth="1.2" />

      {/* Main AI chat bubble (Left) */}
      <path
        d="M13 18C13 14.6863 15.6863 12 19 12H32C35.3137 12 38 14.6863 38 18V26C38 29.3137 35.3137 32 32 32H20L14 36V32.4C13.4 31.6 13 30.2 13 29V18Z"
        fill="url(#bubble-main)"
        stroke="#C084FC"
        strokeWidth="1.2"
      />

      {/* Intelligent AI Waveform / Dots inside */}
      <circle cx="21" cy="22" r="2" fill="#FFFFFF" />
      <circle cx="26" cy="22" r="2" fill="#E9D5FF" />
      <circle cx="31" cy="22" r="2" fill="#FFFFFF" />

      {/* Secondary assistant response bubble (Lower right) */}
      <path
        d="M26 29C26 26.7909 27.7909 25 30 25H39C41.2091 25 43 26.7909 43 29V34C43 36.2091 41.2091 38 39 38H35L31 41V38.5C28 38.5 26 36.5 26 34V29Z"
        fill="url(#bubble-reply)"
        stroke="#7DD3FC"
        strokeWidth="1"
      />

      {/* Sparkle spark */}
      <path d="M35 29.5V33.5M33 31.5H37" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
