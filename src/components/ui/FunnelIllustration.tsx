const FunnelIllustration = () => {
  return (
    <div className="animate-float w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Fluxo de dados inteligente — tecnologia e processamento"
      >
        <defs>
          {/* Orb radial gradient */}
          <radialGradient id="orbeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(174, 72%, 65%)" />
            <stop offset="45%" stopColor="hsl(174, 72%, 42%)" />
            <stop offset="75%" stopColor="hsl(210, 70%, 35%)" />
            <stop offset="100%" stopColor="hsl(215, 40%, 15%)" />
          </radialGradient>

          {/* Halo glow gradient */}
          <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0" />
          </radialGradient>

          {/* Flow line gradients — transparent to teal */}
          <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="flow2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="flow3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(210, 70%, 60%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="flow4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(210, 70%, 55%)" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="flow5" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(174, 72%, 50%)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="flow6" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(174, 72%, 50%)" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="flow7" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="hsl(210, 70%, 60%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="flow8" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="hsl(174, 72%, 55%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(210, 70%, 55%)" stopOpacity="0.55" />
          </linearGradient>

          {/* Card shadow filter */}
          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="hsl(174, 72%, 42%)" floodOpacity="0.2" />
          </filter>

          {/* Soft blur for halo */}
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="12" />
          </filter>

          {/* Orb inner glow */}
          <filter id="orbGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Outer halo (large, blurred) ── */}
        <circle cx="250" cy="250" r="145" fill="url(#haloGrad)" filter="url(#softBlur)" />

        {/* ── Concentric dashed arcs ── */}
        <circle cx="250" cy="250" r="175" fill="none" stroke="hsl(174, 72%, 55%)" strokeWidth="1" strokeDasharray="6 10" opacity="0.18" />
        <circle cx="250" cy="250" r="140" fill="none" stroke="hsl(174, 72%, 55%)" strokeWidth="1" strokeDasharray="4 8" opacity="0.25" />
        <circle cx="250" cy="250" r="108" fill="none" stroke="hsl(174, 72%, 55%)" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.35" />
        <circle cx="250" cy="250" r="78" fill="none" stroke="hsl(174, 72%, 60%)" strokeWidth="1" strokeDasharray="2 5" opacity="0.45" />

        {/* ── Background particles (organic distribution) ── */}
        {/* Far particles */}
        <circle cx="52" cy="88" r="3" fill="hsl(174, 72%, 65%)" opacity="0.4" />
        <circle cx="430" cy="72" r="2" fill="hsl(174, 72%, 75%)" opacity="0.5" />
        <circle cx="78" cy="390" r="4" fill="hsl(210, 70%, 70%)" opacity="0.35" />
        <circle cx="448" cy="405" r="2.5" fill="hsl(174, 72%, 65%)" opacity="0.45" />
        <circle cx="145" cy="55" r="2" fill="hsl(174, 72%, 80%)" opacity="0.6" />
        <circle cx="365" cy="445" r="3" fill="hsl(174, 72%, 65%)" opacity="0.4" />
        <circle cx="470" cy="195" r="2" fill="hsl(210, 70%, 75%)" opacity="0.5" />
        <circle cx="30" cy="275" r="3.5" fill="hsl(174, 72%, 70%)" opacity="0.35" />
        <circle cx="490" cy="330" r="2" fill="hsl(174, 72%, 75%)" opacity="0.5" />
        <circle cx="210" cy="28" r="3" fill="hsl(174, 72%, 70%)" opacity="0.45" />
        <circle cx="295" cy="478" r="2.5" fill="hsl(174, 72%, 65%)" opacity="0.4" />
        <circle cx="105" cy="195" r="2" fill="hsl(174, 72%, 80%)" opacity="0.55" />
        <circle cx="402" cy="155" r="3" fill="hsl(210, 70%, 70%)" opacity="0.4" />
        <circle cx="88" cy="310" r="2" fill="hsl(174, 72%, 75%)" opacity="0.5" />
        <circle cx="420" cy="295" r="4" fill="hsl(174, 72%, 60%)" opacity="0.3" />
        {/* Mid particles */}
        <circle cx="148" cy="148" r="3.5" fill="hsl(174, 72%, 70%)" opacity="0.55" />
        <circle cx="362" cy="138" r="2.5" fill="hsl(174, 72%, 75%)" opacity="0.6" />
        <circle cx="135" cy="355" r="3" fill="hsl(210, 70%, 70%)" opacity="0.5" />
        <circle cx="375" cy="368" r="3" fill="hsl(174, 72%, 65%)" opacity="0.5" />
        <circle cx="195" cy="118" r="2" fill="hsl(174, 72%, 80%)" opacity="0.65" />
        <circle cx="318" cy="112" r="3" fill="hsl(174, 72%, 70%)" opacity="0.55" />

        {/* ── Flow lines (bezier curves toward center) ── */}
        {/* From top-left */}
        <path d="M 52 88 C 100 130, 160 180, 218 232" stroke="url(#flow1)" strokeWidth="1.5" fill="none" />
        {/* From top-right */}
        <path d="M 430 72 C 390 120, 335 170, 278 225" stroke="url(#flow2)" strokeWidth="1.5" fill="none" />
        {/* From bottom-left */}
        <path d="M 78 390 C 120 360, 168 320, 222 272" stroke="url(#flow3)" strokeWidth="1.5" fill="none" />
        {/* From bottom-right */}
        <path d="M 448 405 C 400 368, 345 325, 282 278" stroke="url(#flow4)" strokeWidth="1.5" fill="none" />
        {/* From top center */}
        <path d="M 210 28 C 220 80, 232 145, 244 208" stroke="url(#flow5)" strokeWidth="1.2" fill="none" />
        {/* From bottom center */}
        <path d="M 295 478 C 278 420, 264 355, 255 292" stroke="url(#flow6)" strokeWidth="1.2" fill="none" />
        {/* From left */}
        <path d="M 30 275 C 85 268, 150 258, 210 252" stroke="url(#flow7)" strokeWidth="1.5" fill="none" />
        {/* From right */}
        <path d="M 490 330 C 430 305, 365 278, 295 256" stroke="url(#flow8)" strokeWidth="1.5" fill="none" />
        {/* Extra subtle flows */}
        <path d="M 148 148 C 175 180, 205 210, 232 238" stroke="hsl(174, 72%, 55%)" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M 362 138 C 338 168, 305 200, 272 230" stroke="hsl(174, 72%, 55%)" strokeWidth="1" fill="none" opacity="0.35" />
        <path d="M 135 355 C 162 335, 192 312, 225 280" stroke="hsl(210, 70%, 60%)" strokeWidth="1" fill="none" opacity="0.35" />
        <path d="M 375 368 C 348 344, 316 315, 278 282" stroke="hsl(174, 72%, 55%)" strokeWidth="1" fill="none" opacity="0.35" />

        {/* ── Orb halo inner ring ── */}
        <circle cx="250" cy="250" r="62" fill="hsl(174, 72%, 55%)" opacity="0.12" />

        {/* ── Central Orb ── */}
        <circle cx="250" cy="250" r="52" fill="url(#orbeGrad)" filter="url(#orbGlow)" />
        {/* Orb highlight */}
        <circle cx="235" cy="235" r="16" fill="hsl(174, 72%, 85%)" opacity="0.2" />
        <circle cx="230" cy="230" r="7" fill="white" opacity="0.15" />

        {/* ── Floating Data Cards ── */}

        {/* Card 1 — top-right — "Relatórios" */}
        <g transform="translate(340, 118)" filter="url(#cardShadow)" style={{ animationDelay: "0.5s" }}>
          <rect x="0" y="0" width="90" height="44" rx="10" fill="white" />
          <rect x="0" y="0" width="90" height="44" rx="10" fill="none" stroke="hsl(174, 72%, 55%)" strokeWidth="1" opacity="0.4" />
          {/* Chart icon */}
          <rect x="10" y="12" width="4" height="12" rx="1" fill="hsl(174, 72%, 42%)" opacity="0.9" />
          <rect x="16" y="16" width="4" height="8" rx="1" fill="hsl(174, 72%, 42%)" opacity="0.7" />
          <rect x="22" y="10" width="4" height="14" rx="1" fill="hsl(174, 72%, 42%)" opacity="0.9" />
          <text x="34" y="21" fill="hsl(215, 35%, 20%)" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="700">Relatórios</text>
          <text x="34" y="33" fill="hsl(215, 20%, 55%)" fontSize="7" fontFamily="system-ui,sans-serif">em tempo real</text>
        </g>

        {/* Card 2 — bottom-right — "Organizado" */}
        <g transform="translate(335, 335)" filter="url(#cardShadow)" style={{ animationDelay: "1s" }}>
          <rect x="0" y="0" width="90" height="44" rx="10" fill="white" />
          <rect x="0" y="0" width="90" height="44" rx="10" fill="none" stroke="hsl(174, 72%, 55%)" strokeWidth="1" opacity="0.4" />
          {/* Check icon */}
          <circle cx="19" cy="22" r="10" fill="hsl(174, 72%, 42%)" opacity="0.12" />
          <path d="M 14 22 L 17.5 26 L 24 17" stroke="hsl(174, 72%, 42%)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="34" y="21" fill="hsl(215, 35%, 20%)" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="700">Organizado</text>
          <text x="34" y="33" fill="hsl(215, 20%, 55%)" fontSize="7" fontFamily="system-ui,sans-serif">e eficiente</text>
        </g>

        {/* Card 3 — left — "Automação" */}
        <g transform="translate(68, 218)" filter="url(#cardShadow)" style={{ animationDelay: "1.5s" }}>
          <rect x="0" y="0" width="90" height="44" rx="10" fill="white" />
          <rect x="0" y="0" width="90" height="44" rx="10" fill="none" stroke="hsl(174, 72%, 55%)" strokeWidth="1" opacity="0.4" />
          {/* Gear-like icon using circles */}
          <circle cx="19" cy="22" r="6" fill="none" stroke="hsl(174, 72%, 42%)" strokeWidth="2" />
          <circle cx="19" cy="22" r="2.5" fill="hsl(174, 72%, 42%)" />
          <line x1="19" y1="13" x2="19" y2="16" stroke="hsl(174, 72%, 42%)" strokeWidth="2" strokeLinecap="round" />
          <line x1="19" y1="28" x2="19" y2="31" stroke="hsl(174, 72%, 42%)" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="22" x2="13" y2="22" stroke="hsl(174, 72%, 42%)" strokeWidth="2" strokeLinecap="round" />
          <line x1="25" y1="22" x2="28" y2="22" stroke="hsl(174, 72%, 42%)" strokeWidth="2" strokeLinecap="round" />
          <text x="34" y="21" fill="hsl(215, 35%, 20%)" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="700">Automação</text>
          <text x="34" y="33" fill="hsl(215, 20%, 55%)" fontSize="7" fontFamily="system-ui,sans-serif">inteligente</text>
        </g>

        {/* ── Connector dots (where flows meet the orb) ── */}
        <circle cx="218" cy="232" r="3" fill="hsl(174, 72%, 65%)" opacity="0.8" />
        <circle cx="278" cy="225" r="2.5" fill="hsl(174, 72%, 65%)" opacity="0.7" />
        <circle cx="222" cy="272" r="2.5" fill="hsl(174, 72%, 65%)" opacity="0.7" />
        <circle cx="282" cy="278" r="3" fill="hsl(174, 72%, 65%)" opacity="0.8" />
        <circle cx="244" cy="208" r="2" fill="hsl(174, 72%, 70%)" opacity="0.65" />
        <circle cx="255" cy="292" r="2" fill="hsl(174, 72%, 70%)" opacity="0.65" />
        <circle cx="210" cy="252" r="2.5" fill="hsl(174, 72%, 65%)" opacity="0.7" />
        <circle cx="295" cy="256" r="2.5" fill="hsl(174, 72%, 65%)" opacity="0.7" />
      </svg>
    </div>
  );
};

export default FunnelIllustration;
