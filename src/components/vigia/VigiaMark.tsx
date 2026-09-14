export function VigiaMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      role="img"
      aria-label="Vigia"
    >
      <defs>
        <linearGradient id="vigia-stroke" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {/* Outer aperture — a watchful ring, drawn as two open arcs */}
      <path
        d="M20 3.5a16.5 16.5 0 0 1 15.4 10.6M35.4 25.9A16.5 16.5 0 0 1 20 36.5M4.6 25.9A16.5 16.5 0 0 1 4.6 14.1"
        stroke="url(#vigia-stroke)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Inner V, cut as a single confident stroke */}
      <path
        d="M13 14.5 20 27l7-12.5"
        stroke="var(--primary)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="10.5" r="1.6" fill="var(--primary)" />
    </svg>
  );
}
