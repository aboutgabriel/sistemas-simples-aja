
## Redesign Completo do Site — Paleta Navy/Teal da Referência

### O que será feito

Redesign visual completo do site baseado na referência, mantendo todos os textos atuais. A paleta muda de roxo/violeta para navy/teal. Dois novos elementos visuais serão criados do zero em SVG: o funil "Big Data Funnel" e o mockup de tablet com dashboard.

---

### Nova Paleta de Cores (navy/teal)

| Token CSS | Novo valor | Cor |
|---|---|---|
| `--primary` | `174 72% 42%` | Teal/ciano (botões, destaques) |
| `--background` | `210 20% 97%` | Cinza frio claro (fundo geral) |
| `--foreground` | `215 35% 12%` | Navy escuro (textos) |
| `--secondary` | `210 15% 92%` | Cinza suave (fundos de seção) |
| `--accent` | `174 72% 88%` | Teal claro (backgrounds de destaque) |
| `--accent-foreground` | `174 72% 25%` | Teal escuro |
| `--border` | `210 15% 86%` | Cinza neutro |
| `--ring` | `174 72% 42%` | Teal |
| `--muted-foreground` | `215 20% 45%` | Cinza azulado médio |
| Gradiente `.gradient-primary` | `teal → azul-navy` | Como referência |
| Footer `bg-navy` | `hsl(215, 40%, 15%)` | Navy escuro da referência |

---

### Arquivos a criar/modificar

#### 1. `src/index.css` — SUBSTITUIÇÃO COMPLETA DA PALETA
- Todos os valores HSL de roxo/violeta substituídos por navy/teal
- `.gradient-primary` → `linear-gradient(135deg, hsl(174,72%,42%), hsl(210,70%,35%))`
- `.text-gradient` → mesmo gradiente aplicado ao texto
- `.shadow-primary` → sombra em teal
- Adicionar `@keyframes float` para animação suave do funil e tablet
- Adicionar classe `bg-navy` para o footer

#### 2. `src/components/ui/FunnelIllustration.tsx` — NOVO COMPONENTE SVG
SVG inline representando o Big Data Funnel da referência:
- **Fundo**: rede de pontos conectados (polígonos low-poly/network em linhas teal claras)
- **Topo do funil**: massa caótica de linhas entrelaçadas (bezier curves simulando papéis/dados bagunçados)
- **Funil central**: forma geométrica trapézio + triângulo em gradiente teal/navy
- **Base**: blocos 3D isométricos coloridos (teal, coral/laranja, branco) organizados, saindo do funil
- Animação leve de `float` no conjunto

#### 3. `src/components/ui/TabletMockup.tsx` — NOVO COMPONENTE SVG
SVG inline representando tablet landscape com dashboard:
- Frame do tablet: retângulo cinza-escuro com cantos arredondados + câmera
- Tela interna com fundo branco/cinza claro
- Sidebar esquerda (navy) com itens de menu
- Gráfico donut/pizza no centro com teal e laranja
- Gráfico de linhas à direita (teal, verde, laranja)
- Barras horizontais na parte inferior
- Header interno com título e botões

#### 4. `src/components/sections/Hero.tsx` — REESCRITA (layout 2 colunas)
- **Esquerda**: manter todos os textos atuais (tags, título, subtítulo, CTA)
- **Direita**: `<FunnelIllustration />` com animação float
- Layout `grid grid-cols-1 md:grid-cols-2` na seção hero
- Background da seção: `bg-background` (cinza claro da referência)
- Tags de diferenciais com bordas teal

#### 5. `src/components/sections/HowItWorks.tsx` — REFATORAÇÃO VISUAL
Baseado na seção "Como Fazemos" da referência:
- 3 cards horizontais com `border border-primary/30 rounded-2xl`
- Ícones maiores (40x40) em container com borda teal
- Remover a linha de conexão (`absolute` horizontal) — não fica bem com o novo estilo
- Cards com fundo branco, sombra suave, sem numeração em destaque
- Manter os 3 textos atuais (Entendimento do problema, Proposta sob medida, Desenvolvimento rápido)

#### 6. `src/pages/Index.tsx` — NOVA SEÇÃO ENTRE HowItWorks E Projects
Adicionar seção "Seu negócio no controle" com:
- Layout 2 colunas: texto à esquerda + `<TabletMockup />` à direita
- Título: "Seu negócio no controle" (em navy bold)
- Subtítulo: "Dashboards intuitivos para decisões inteligentes"
- Fundo: `bg-background` (cinza frio claro)

#### 7. `src/components/sections/Footer.tsx` — AJUSTE VISUAL
- Trocar `bg-foreground` por classe `bg-navy` (navy escuro específico da referência: `hsl(215,40%,15%)`)
- Adicionar ícones de LinkedIn, Twitter/X e Facebook (Lucide: `Linkedin`, `Twitter`, `Facebook`)
- Manter todos os textos e links atuais

#### 8. `src/components/sections/Header.tsx` — PEQUENO AJUSTE
- Fundo do header: `bg-white/90` (mais limpo, como referência)
- Logo: manter estrutura atual (G + GRPM) — o gradiente atualiza automaticamente para teal

#### 9. `src/components/ui/ProjectImageCarousel.tsx` — AJUSTE MÍNIMO
- Dots ativos: cor `bg-primary` (atualiza automaticamente para teal)
- Botões de nav: cores atualizam via tokens

#### 10. `src/pages/Projetos.tsx` e `src/components/sections/Projects.tsx`
- Nenhuma mudança estrutural necessária — as cores `text-primary`, `border-primary`, `gradient-primary`, `bg-accent` atualizam automaticamente via CSS tokens

---

### Estrutura visual do FunnelIllustration (SVG)

```text
┌────────────────────────────────┐
│  •──•──•──•  (rede de pontos) │
│   ╲ ╱  ╲ ╱   (linhas teal)   │
│    •    •                     │
│       ┌──────────┐            │
│       │  ~CAOS~  │ (beziers) │
│       └────┬─────┘            │
│         ╔══╧══╗               │
│         ║FUNIL║ (teal)        │
│         ╚══╤══╝               │
│      [▣] [▣] [▣]             │
│      blocos 3D isométricos    │
└────────────────────────────────┘
```

#### Estrutura visual do TabletMockup (SVG)

```text
┌──────────────────────────────────────────┐
│ ┌────────────────────────────────────┐   │
│ │ [nav] │ ◎ donut │ ╱╲ line chart  │   │
│ │ menu  │  chart  │ ▁▃▅▇ bars      │   │
│ └────────────────────────────────────┘   │
└──────────────────────────────────────────┘
```

---

### Resumo de arquivos

| Arquivo | Ação |
|---|---|
| `src/index.css` | Substituição completa da paleta para navy/teal |
| `src/components/ui/FunnelIllustration.tsx` | Novo — SVG do Big Data Funnel |
| `src/components/ui/TabletMockup.tsx` | Novo — SVG do tablet com dashboard |
| `src/components/sections/Hero.tsx` | Reescrita — 2 colunas com FunnelIllustration |
| `src/components/sections/HowItWorks.tsx` | Refatoração — cards horizontais estilo referência |
| `src/components/sections/Footer.tsx` | Ajuste — fundo navy + ícones sociais |
| `src/components/sections/Header.tsx` | Ajuste mínimo — fundo mais limpo |
| `src/pages/Index.tsx` | Nova seção "Seu negócio no controle" com TabletMockup |
