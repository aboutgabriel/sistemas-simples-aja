const FunnelIllustration = () => {
  return (
    <div className="animate-float w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 400 480"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl"
        aria-label="Big Data Funnel - transformação de dados caóticos em insights organizados"
      >
        <defs>
          <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 72%, 42%)" />
            <stop offset="100%" stopColor="hsl(210, 70%, 35%)" />
          </linearGradient>
          <linearGradient id="funnelGradSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(210, 70%, 28%)" />
            <stop offset="100%" stopColor="hsl(174, 72%, 35%)" />
          </linearGradient>
          <linearGradient id="blockTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 72%, 50%)" />
            <stop offset="100%" stopColor="hsl(174, 72%, 36%)" />
          </linearGradient>
          <linearGradient id="blockNavy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 70%, 45%)" />
            <stop offset="100%" stopColor="hsl(215, 40%, 28%)" />
          </linearGradient>
          <linearGradient id="blockOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(30, 90%, 60%)" />
            <stop offset="100%" stopColor="hsl(20, 85%, 48%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Network background (dots + lines) ── */}
        <g opacity="0.35">
          {/* Lines */}
          <line x1="30" y1="30" x2="100" y2="60" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="100" y1="60" x2="170" y2="25" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="170" y1="25" x2="260" y2="55" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="260" y1="55" x2="370" y2="30" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="30" y1="30" x2="60" y2="90" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="60" y1="90" x2="130" y2="75" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="130" y1="75" x2="200" y2="100" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="200" y1="100" x2="310" y2="80" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="310" y1="80" x2="370" y2="30" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="100" y1="60" x2="130" y2="75" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="170" y1="25" x2="200" y2="100" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="260" y1="55" x2="310" y2="80" stroke="hsl(174,72%,42%)" strokeWidth="1" />
          <line x1="60" y1="90" x2="200" y2="100" stroke="hsl(174,72%,42%)" strokeWidth="0.5" />

          {/* Dots */}
          {[
            [30,30],[100,60],[170,25],[260,55],[370,30],
            [60,90],[130,75],[200,100],[310,80]
          ].map(([cx,cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4" fill="hsl(174,72%,42%)" />
          ))}
        </g>

        {/* ── Chaotic data at the top (messy bezier lines = raw data) ── */}
        <g opacity="0.7" filter="url(#glow)">
          {/* Scattered document-like rectangles */}
          <rect x="120" y="100" width="40" height="28" rx="3" fill="white" stroke="hsl(210,70%,35%)" strokeWidth="1.5" transform="rotate(-12, 140, 114)" />
          <rect x="160" y="95" width="36" height="24" rx="3" fill="white" stroke="hsl(174,72%,55%)" strokeWidth="1.5" transform="rotate(8, 178, 107)" />
          <rect x="200" y="105" width="44" height="30" rx="3" fill="white" stroke="hsl(210,70%,35%)" strokeWidth="1.5" transform="rotate(-5, 222, 120)" />
          <rect x="230" y="98" width="38" height="26" rx="3" fill="white" stroke="hsl(174,72%,42%)" strokeWidth="1.5" transform="rotate(15, 249, 111)" />
          <rect x="150" y="118" width="42" height="28" rx="3" fill="hsl(174,72%,95%)" stroke="hsl(174,72%,42%)" strokeWidth="1.5" transform="rotate(-20, 171, 132)" />
          <rect x="185" y="115" width="36" height="22" rx="3" fill="hsl(210,20%,97%)" stroke="hsl(210,70%,35%)" strokeWidth="1.5" transform="rotate(10, 203, 126)" />

          {/* Lines inside docs */}
          <line x1="125" y1="108" x2="148" y2="108" stroke="hsl(215,35%,60%)" strokeWidth="1" />
          <line x1="125" y1="112" x2="142" y2="112" stroke="hsl(215,35%,60%)" strokeWidth="1" />
          <line x1="164" y1="102" x2="184" y2="102" stroke="hsl(215,35%,60%)" strokeWidth="1" />
          <line x1="164" y1="106" x2="178" y2="106" stroke="hsl(215,35%,60%)" strokeWidth="1" />

          {/* Chaos bezier strokes */}
          <path d="M 130 135 C 155 120, 175 145, 200 130 C 225 115, 245 140, 265 125" stroke="hsl(174,72%,55%)" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M 140 140 C 160 155, 185 128, 210 148 C 235 168, 255 135, 270 150" stroke="hsl(210,70%,50%)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M 125 148 C 150 138, 170 158, 205 142 C 240 126, 260 155, 275 140" stroke="hsl(174,72%,42%)" strokeWidth="1" fill="none" opacity="0.4" />
        </g>

        {/* ── Label: dados desorganizados ── */}
        <text x="200" y="92" textAnchor="middle" fill="hsl(215,35%,45%)" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="500">
          Dados desorganizados
        </text>

        {/* ── Funnel body ── */}
        {/* Trapezoid top part */}
        <polygon
          points="100,160 300,160 260,260 140,260"
          fill="url(#funnelGrad)"
          opacity="0.95"
        />
        {/* Side shadow for 3D effect */}
        <polygon
          points="260,260 300,160 315,170 275,265"
          fill="url(#funnelGradSide)"
          opacity="0.7"
        />

        {/* Funnel lower cone */}
        <polygon
          points="140,260 260,260 200,330"
          fill="url(#funnelGrad)"
          opacity="0.95"
        />
        {/* Cone side */}
        <polygon
          points="260,260 275,265 200,335 200,330"
          fill="url(#funnelGradSide)"
          opacity="0.7"
        />

        {/* Funnel neck connector */}
        <rect x="192" y="328" width="16" height="22" fill="url(#funnelGrad)" rx="2" />
        <rect x="208" y="330" width="7" height="18" fill="url(#funnelGradSide)" rx="1" opacity="0.7" />

        {/* Funnel label */}
        <text x="200" y="218" textAnchor="middle" fill="white" fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700" letterSpacing="1">
          BIG DATA
        </text>
        <text x="200" y="236" textAnchor="middle" fill="white" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="500" opacity="0.85">
          FUNNEL
        </text>

        {/* ── Arrow lines going into funnel ── */}
        <g stroke="hsl(174,72%,80%)" strokeWidth="1.5" fill="none" opacity="0.6">
          <line x1="140" y1="152" x2="155" y2="162" markerEnd="url(#arrow)" />
          <line x1="200" y1="150" x2="200" y2="162" />
          <line x1="260" y1="152" x2="245" y2="162" />
        </g>

        {/* ── 3D Isometric blocks at the base ── */}
        {/* Block 1 — Teal (left) */}
        <g transform="translate(98, 355)">
          {/* Top face */}
          <polygon points="0,-18 28,0 0,18 -28,0" fill="hsl(174,72%,55%)" />
          {/* Right face */}
          <polygon points="28,0 0,18 0,46 28,28" fill="hsl(174,72%,38%)" />
          {/* Left face */}
          <polygon points="-28,0 0,18 0,46 -28,28" fill="hsl(174,72%,30%)" />
        </g>

        {/* Block 2 — Navy (center, taller) */}
        <g transform="translate(200, 345)">
          {/* Top face */}
          <polygon points="0,-22 32,0 0,22 -32,0" fill="hsl(210,70%,52%)" />
          {/* Right face */}
          <polygon points="32,0 0,22 0,58 32,36" fill="hsl(210,70%,36%)" />
          {/* Left face */}
          <polygon points="-32,0 0,22 0,58 -32,36" fill="hsl(215,40%,25%)" />
          {/* Small icon on top */}
          <text x="0" y="6" textAnchor="middle" fill="white" fontSize="13" fontFamily="system-ui">✓</text>
        </g>

        {/* Block 3 — Orange (right) */}
        <g transform="translate(302, 358)">
          {/* Top face */}
          <polygon points="0,-18 28,0 0,18 -28,0" fill="hsl(30,90%,65%)" />
          {/* Right face */}
          <polygon points="28,0 0,18 0,46 28,28" fill="hsl(20,85%,48%)" />
          {/* Left face */}
          <polygon points="-28,0 0,18 0,46 -28,28" fill="hsl(20,85%,40%)" />
        </g>

        {/* Labels under blocks */}
        <text x="98" y="418" textAnchor="middle" fill="hsl(174,72%,35%)" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">Relatórios</text>
        <text x="200" y="422" textAnchor="middle" fill="hsl(210,70%,35%)" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">Sistemas</text>
        <text x="302" y="418" textAnchor="middle" fill="hsl(20,85%,42%)" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">Insights</text>

        {/* Bottom label */}
        <text x="200" y="458" textAnchor="middle" fill="hsl(215,35%,45%)" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="500">
          Dados organizados &amp; eficientes
        </text>
      </svg>
    </div>
  );
};

export default FunnelIllustration;
