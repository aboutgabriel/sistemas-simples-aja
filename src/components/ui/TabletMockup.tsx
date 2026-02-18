const TabletMockup = () => {
  return (
    <div className="animate-float w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 560 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
        aria-label="Dashboard em tablet — exemplo de sistema organizado"
      >
        <defs>
          <linearGradient id="tabletFrame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(215, 25%, 22%)" />
            <stop offset="100%" stopColor="hsl(215, 30%, 14%)" />
          </linearGradient>
          <linearGradient id="donutTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 72%, 42%)" />
            <stop offset="100%" stopColor="hsl(174, 72%, 55%)" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(174, 72%, 42%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(174, 72%, 42%)" stopOpacity="0.7" />
          </linearGradient>
          <clipPath id="screen">
            <rect x="38" y="28" width="484" height="344" rx="4" />
          </clipPath>
        </defs>

        {/* ── Tablet frame ── */}
        <rect x="8" y="8" width="544" height="384" rx="28" fill="url(#tabletFrame)" />
        {/* Screen bezel */}
        <rect x="22" y="18" width="516" height="364" rx="18" fill="hsl(215, 30%, 10%)" />
        {/* Camera */}
        <circle cx="280" cy="13" r="4" fill="hsl(215, 25%, 22%)" />
        <circle cx="280" cy="13" r="2" fill="hsl(215, 20%, 35%)" />
        {/* Side button */}
        <rect x="552" y="80" width="6" height="40" rx="3" fill="hsl(215, 25%, 28%)" />
        <rect x="552" y="135" width="6" height="24" rx="3" fill="hsl(215, 25%, 28%)" />

        {/* ── Screen background ── */}
        <rect x="30" y="22" width="500" height="356" rx="12" fill="hsl(210, 20%, 97%)" clipPath="url(#screen)" />

        {/* ── Internal dashboard header ── */}
        <rect x="30" y="22" width="500" height="42" rx="4" fill="white" />
        <text x="52" y="47" fill="hsl(215, 35%, 12%)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">Dashboard</text>
        {/* Header right buttons */}
        <rect x="420" y="32" width="50" height="22" rx="6" fill="hsl(174, 72%, 42%)" />
        <text x="445" y="47" textAnchor="middle" fill="white" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="600">Exportar</text>
        <rect x="478" y="32" width="38" height="22" rx="6" fill="hsl(210, 15%, 92%)" />
        <text x="497" y="47" textAnchor="middle" fill="hsl(215, 35%, 40%)" fontSize="9" fontFamily="system-ui,sans-serif">Filtros</text>
        {/* Separator */}
        <line x1="30" y1="64" x2="530" y2="64" stroke="hsl(210,15%,88%)" strokeWidth="1" />

        {/* ── Left sidebar ── */}
        <rect x="30" y="64" width="90" height="316" fill="hsl(215, 40%, 18%)" />
        {/* Sidebar logo */}
        <rect x="42" y="76" width="28" height="28" rx="6" fill="hsl(174, 72%, 42%)" />
        <text x="56" y="95" textAnchor="middle" fill="white" fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">G</text>
        {/* Sidebar nav items */}
        {[
          { y: 118, label: "Início", active: true },
          { y: 146, label: "Vendas", active: false },
          { y: 174, label: "Clientes", active: false },
          { y: 202, label: "Estoque", active: false },
          { y: 230, label: "Finanças", active: false },
          { y: 258, label: "Relatórios", active: false },
        ].map((item) => (
          <g key={item.y}>
            {item.active && (
              <rect x="30" y={item.y - 10} width="90" height="26" fill="hsl(174, 72%, 42%)" opacity="0.2" />
            )}
            <rect x="34" y={item.y - 8} width="4" height="22" rx="2" fill={item.active ? "hsl(174, 72%, 42%)" : "transparent"} />
            <text x="75" y={item.y + 8} textAnchor="middle" fill={item.active ? "hsl(174, 72%, 65%)" : "hsl(215, 20%, 55%)"} fontSize="9" fontFamily="system-ui,sans-serif" fontWeight={item.active ? "600" : "400"}>
              {item.label}
            </text>
          </g>
        ))}

        {/* ── Main content area ── */}

        {/* KPI cards row */}
        {[
          { x: 132, label: "Receita", value: "R$48k", color: "hsl(174, 72%, 42%)" },
          { x: 232, label: "Pedidos", value: "1.243", color: "hsl(210, 70%, 45%)" },
          { x: 332, label: "Clientes", value: "892", color: "hsl(30, 90%, 55%)" },
          { x: 432, label: "Conversão", value: "24%", color: "hsl(145, 60%, 42%)" },
        ].map((kpi) => (
          <g key={kpi.x}>
            <rect x={kpi.x} y="72" width="88" height="52" rx="8" fill="white" />
            <rect x={kpi.x + 2} y="72" width="4" height="52" rx="2" fill={kpi.color} />
            <text x={kpi.x + 12} y="90" fill="hsl(215, 20%, 50%)" fontSize="8" fontFamily="system-ui,sans-serif">{kpi.label}</text>
            <text x={kpi.x + 12} y="108" fill="hsl(215, 35%, 12%)" fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">{kpi.value}</text>
          </g>
        ))}

        {/* ── Donut chart ── */}
        <rect x="132" y="134" width="158" height="140" rx="10" fill="white" />
        <text x="152" y="152" fill="hsl(215, 35%, 12%)" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="600">Distribuição de Vendas</text>
        {/* Donut */}
        <circle cx="211" cy="215" r="44" fill="none" stroke="hsl(210, 15%, 90%)" strokeWidth="20" />
        <circle cx="211" cy="215" r="44" fill="none" stroke="hsl(174, 72%, 42%)" strokeWidth="20"
          strokeDasharray="138 138" strokeDashoffset="0" transform="rotate(-90 211 215)" />
        <circle cx="211" cy="215" r="44" fill="none" stroke="hsl(30, 90%, 55%)" strokeWidth="20"
          strokeDasharray="66 210" strokeDashoffset="-138" transform="rotate(-90 211 215)" />
        <circle cx="211" cy="215" r="44" fill="none" stroke="hsl(145, 60%, 42%)" strokeWidth="20"
          strokeDasharray="32 244" strokeDashoffset="-204" transform="rotate(-90 211 215)" />
        {/* Center label */}
        <circle cx="211" cy="215" r="26" fill="white" />
        <text x="211" y="211" textAnchor="middle" fill="hsl(215,35%,12%)" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">50%</text>
        <text x="211" y="223" textAnchor="middle" fill="hsl(215,20%,50%)" fontSize="7" fontFamily="system-ui,sans-serif">principal</text>
        {/* Legend */}
        <rect x="152" y="256" width="8" height="8" rx="2" fill="hsl(174, 72%, 42%)" />
        <text x="164" y="264" fill="hsl(215, 20%, 50%)" fontSize="8" fontFamily="system-ui,sans-serif">Produto A</text>
        <rect x="210" y="256" width="8" height="8" rx="2" fill="hsl(30, 90%, 55%)" />
        <text x="222" y="264" fill="hsl(215, 20%, 50%)" fontSize="8" fontFamily="system-ui,sans-serif">Produto B</text>

        {/* ── Line chart ── */}
        <rect x="300" y="134" width="220" height="140" rx="10" fill="white" />
        <text x="318" y="152" fill="hsl(215, 35%, 12%)" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="600">Crescimento Mensal</text>
        {/* Chart area */}
        {/* Y axis ticks */}
        {[250, 225, 200, 175].map((y, i) => (
          <g key={y}>
            <line x1="320" y1={y} x2="508" y2={y} stroke="hsl(210,15%,92%)" strokeWidth="1" />
            <text x="318" y={y + 3} textAnchor="end" fill="hsl(215,20%,60%)" fontSize="7" fontFamily="system-ui,sans-serif">{(3-i)*20}k</text>
          </g>
        ))}
        {/* Teal line */}
        <polyline
          points="330,242 360,230 390,218 420,205 450,195 480,178 505,162"
          fill="none" stroke="hsl(174, 72%, 42%)" strokeWidth="2.5" strokeLinejoin="round"
        />
        {/* Area fill */}
        <polygon
          points="330,242 360,230 390,218 420,205 450,195 480,178 505,162 505,252 330,252"
          fill="url(#lineGrad)" opacity="0.4"
        />
        {/* Navy secondary line */}
        <polyline
          points="330,248 360,240 390,235 420,228 450,222 480,215 505,200"
          fill="none" stroke="hsl(210, 70%, 50%)" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="4 2"
        />
        {/* Data points */}
        {[[330,242],[360,230],[390,218],[420,205],[450,195],[480,178],[505,162]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="white" stroke="hsl(174, 72%, 42%)" strokeWidth="2" />
        ))}
        {/* X axis labels */}
        {["Jan","Mar","Mai","Jul","Set","Nov","Dez"].map((m, i) => (
          <text key={m} x={330 + i * 29.2} y="268" textAnchor="middle" fill="hsl(215,20%,60%)" fontSize="7" fontFamily="system-ui,sans-serif">{m}</text>
        ))}

        {/* ── Horizontal bar chart ── */}
        <rect x="132" y="284" width="388" height="88" rx="10" fill="white" />
        <text x="152" y="302" fill="hsl(215, 35%, 12%)" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="600">Top Categorias</text>
        {[
          { label: "Software", pct: 0.82, color: "hsl(174, 72%, 42%)" },
          { label: "Consultoria", pct: 0.65, color: "hsl(210, 70%, 45%)" },
          { label: "Suporte", pct: 0.41, color: "hsl(30, 90%, 55%)" },
        ].map((bar, i) => (
          <g key={bar.label}>
            <text x="152" y={318 + i * 18} fill="hsl(215, 20%, 50%)" fontSize="8" fontFamily="system-ui,sans-serif">{bar.label}</text>
            <rect x="210" y={308 + i * 18} width="290" height="10" rx="5" fill="hsl(210, 15%, 93%)" />
            <rect x="210" y={308 + i * 18} width={290 * bar.pct} height="10" rx="5" fill={bar.color} />
            <text x={214 + 290 * bar.pct} y={318 + i * 18} fill={bar.color} fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="600">{Math.round(bar.pct * 100)}%</text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default TabletMockup;
