
## Redesign da Ilustração Hero — Estética Fluída & Tecnológica

### O problema com o design atual

A ilustração atual usa formas geométricas rígidas (polígonos trapezoidais, blocos isométricos, linhas retas) que ficam pesadas visualmente. Não há fluidez nem movimento orgânico.

### Novo conceito visual

A nova ilustração vai abandonar o conceito literal de "funil" e adotar uma estética de **rede neural / fluxo de dados** — muito mais moderna e associada a tecnologia, IA e software. Será algo próximo das ilustrações de tech companies como Stripe, Linear e Vercel.

**Elementos do novo design:**

1. **Orbe central brilhante** — círculo com gradiente radial teal/azul escuro, com halo suave (blur), como uma fonte de energia/inteligência
2. **Linhas de fluxo curvas** — bezier curves partindo de partículas espalhadas em direção ao orbe central, simulando dados fluindo para processamento (substituem as linhas retas da rede)
3. **Partículas flutuantes** — pequenos pontos de luz com variação de tamanho e opacidade, distribuídos organicamente (não em grid), criando profundidade
4. **Arcos concêntricos** — círculos parciais ao redor do orbe, com traço tracejado e opacidade gradual, evocando "ondas" de processamento
5. **Ícones de dados flutuando** — 3 pequenos cartões/chips arredondados com ícones simples (gráfico, check, engrenagem) que orbitam o orbe, representando as saídas organizadas

**Paleta da ilustração:**
- Orbe: gradiente radial de `hsl(174, 72%, 55%)` → `hsl(210, 70%, 35%)` → `hsl(215, 40%, 15%)`
- Linhas de fluxo: teal com opacidade variando de 0.1 a 0.6
- Partículas: branco e teal claro
- Cartões flutuantes: fundo branco com borda teal suave e sombra

**Animações CSS (declaradas no index.css):**
- `animate-float` já existe — usada no container principal
- `animate-pulse` do Tailwind para o halo do orbe
- Animações inline com `style={{ animationDelay }}` para as partículas e cartões entrarem com defasagem

### Arquivos a modificar

#### 1. `src/components/ui/FunnelIllustration.tsx` — REESCRITA COMPLETA

Novo SVG com viewBox `0 0 500 500` contendo:

- **Fundo de partículas**: ~20 círculos pequenos posicionados organicamente com variação de `r` (2-6px) e `opacity` (0.2-0.7), cor teal/branco
- **Arcos concêntricos**: 3-4 `<circle>` com apenas `stroke` (sem fill), `strokeDasharray` para tracejado, centrados no orbe, raios crescentes, opacidade decrescente
- **Linhas de fluxo**: 8-10 `<path>` bezier partindo das partículas externas em direção ao centro, com gradiente de cor ao longo do traço (usando `linearGradient` de transparente → teal)
- **Orbe central**: `<circle>` com `fill="url(#orbeGrad)"` + segundo círculo menor com blur para o halo
- **Cartões flutuantes**: 3 grupos `<g>` posicionados em 3 pontos ao redor do orbe, cada um com:
  - `<rect>` arredondado branco com sombra suave
  - Ícone simples em teal (path SVG)
  - Texto de label pequeníssimo

#### 2. `src/index.css` — NENHUMA MUDANÇA NECESSÁRIA

A animação `animate-float` já existe.

### Resultado esperado

Uma ilustração elegante e fluída que remete a:
- Processamento de dados / IA
- Fluxo de informações
- Tecnologia limpa e moderna

Sem blocos pesados, sem shapes geométricos duros — tudo com curvas e transições suaves.

### Resumo

| Arquivo | Ação |
|---|---|
| `src/components/ui/FunnelIllustration.tsx` | Reescrita completa — novo conceito de orbe com fluxo de dados |
