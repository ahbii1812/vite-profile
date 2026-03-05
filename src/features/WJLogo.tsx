const PARTICLES = [
  { cx: 78, cy: 82, r: 2, delay: 0 },
  { cx: 180, cy: 52, r: 1.5, delay: 0.7 },
  { cx: 328, cy: 68, r: 2, delay: 1.3 },
  { cx: 418, cy: 148, r: 1.5, delay: 0.4 },
  { cx: 388, cy: 328, r: 2, delay: 0.9 },
  { cx: 252, cy: 432, r: 1.5, delay: 1.6 },
  { cx: 72, cy: 355, r: 2, delay: 0.55 },
  { cx: 35, cy: 222, r: 1.5, delay: 1.1 },
  { cx: 118, cy: 415, r: 2, delay: 2.0 },
  { cx: 408, cy: 78, r: 1.5, delay: 0.25 },
  { cx: 445, cy: 268, r: 1.5, delay: 1.8 },
  { cx: 155, cy: 448, r: 2, delay: 0.8 },
];

export default function WJLogo() {
  return (
    <div className="wj-logo-root">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="wj-svg"
        aria-label="WJ Logo"
      >
        <defs>
          {/* Letter gradient — sky → indigo → purple */}
          <linearGradient id="wjLetterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="45%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          {/* Arc gradient — fades in/out */}
          <linearGradient
            id="wjArcGrad"
            gradientUnits="userSpaceOnUse"
            x1="55"
            y1="250"
            x2="445"
            y2="250"
          >
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="30%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="70%" stopColor="#a78bfa" stopOpacity="1" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="wjGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle glow for rings */}
          <filter id="wjSoftGlow" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2.5"
              result="blur"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Card background ── */}
        <rect x="20" y="20" width="460" height="460" rx="52" fill="#0b1120" />
        <rect
          x="20"
          y="20"
          width="460"
          height="460"
          rx="52"
          fill="none"
          stroke="url(#wjLetterGrad)"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* ── Outer rotating dashed ring ── */}
        <circle
          cx="250"
          cy="250"
          r="198"
          fill="none"
          stroke="url(#wjArcGrad)"
          strokeWidth="1.5"
          strokeDasharray="55 18 8 18"
          filter="url(#wjSoftGlow)"
          className="wj-ring-outer"
        />

        {/* ── Inner rotating dashed ring (reverse) ── */}
        <circle
          cx="250"
          cy="250"
          r="175"
          fill="none"
          stroke="url(#wjArcGrad)"
          strokeWidth="1"
          strokeDasharray="30 14 6 14"
          opacity="0.5"
          className="wj-ring-inner"
        />

        {/* ── Floating particles ── */}
        {PARTICLES.map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#60a5fa"
            className="wj-particle"
            style={{ animationDelay: `${p.delay}s` }}
          />
        ))}

        {/* ── Corner bracket accents ── */}
        <path
          d="M 68,68 L 100,68 M 68,68 L 68,100"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M 432,68 L 400,68 M 432,68 L 432,100"
          stroke="#c084fc"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M 68,432 L 100,432 M 68,432 L 68,400"
          stroke="#c084fc"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M 432,432 L 400,432 M 432,432 L 432,400"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />

        {/* ── Pulse ring behind letters ── */}
        <circle
          cx="250"
          cy="258"
          r="105"
          fill="none"
          stroke="#6366f1"
          strokeWidth="1"
          opacity="0.15"
          className="wj-pulse"
        />

        {/* ── "mr." label ── */}
        <text
          x="250"
          y="170"
          textAnchor="middle"
          fill="#94a3b8"
          fontSize="20"
          fontFamily="system-ui, sans-serif"
          letterSpacing="8"
          opacity="0"
          className="wj-label-mr"
        >
          mr.
        </text>

        {/* ── W letter ──
             Path segments (single subpath, all L):
             M 90,205  → L 135,315  → L 180,240  → L 225,315  → L 270,205
             Approx total length ≈ 480 */}
        <path
          d="M 90,205 L 135,315 L 180,240 L 225,315 L 270,205"
          fill="none"
          stroke="url(#wjLetterGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#wjGlow)"
          className="wj-w"
        />

        {/* ── J letter ──
             Two subpaths; total length ≈ 380
             Subpath 1 (top bar): M 295,205 L 395,205   (100px)
             Subpath 2 (stem):    M 350,205 L 350,318 Q 350,352 318,358 Q 282,364 276,334  (~280px) */}
        <path
          d="M 295,205 L 395,205 M 350,205 L 350,318 Q 350,355 315,360 Q 278,365 272,332"
          fill="none"
          stroke="url(#wjLetterGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#wjGlow)"
          className="wj-j"
        />

        {/* ── Divider ── */}
        <line
          x1="130"
          y1="378"
          x2="370"
          y2="378"
          stroke="url(#wjLetterGrad)"
          strokeWidth="1"
          opacity="0.25"
          className="wj-divider"
        />

        {/* ── "FRONTEND DEV" tagline ── */}
        <text
          x="250"
          y="406"
          textAnchor="middle"
          fill="#475569"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
          letterSpacing="6"
          className="wj-label-tag"
        >
          FRONTEND DEV
        </text>
      </svg>
    </div>
  );
}
