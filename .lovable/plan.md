

## Reestruturação das Seções de Serviços e Investimento

### Visão Geral da Mudança

A proposta consolida as seções "Serviços" e "Investimento" em uma única seção mais completa e informativa, com 3 níveis de serviço claramente definidos, cada um com suas características, prazos e investimentos.

---

### Estrutura Nova da Seção

**Header da Seção:**
- Titulo: "Nossas Soluções"
- Subtitulo: "Cada negócio está em um momento diferente. Por isso, oferecemos soluções em níveis — do essencial ao totalmente personalizado."

**3 Cards de Serviço:**

| Nível | Cor | Titulo | Prazo | Investimento | CTA |
|-------|-----|--------|-------|--------------|-----|
| 1 | Verde | Site Institucional | 5-10 dias úteis | R$ 2.000 | "Quero um site profissional" |
| 2 | Amarelo | Sistema de Gestão Essencial | 15-30 dias | R$ 4.000 | "Quero sair da planilha" |
| 3 | Azul | Sistema Sob Medida | A partir de 30 dias | R$ 7.000 | "Quero uma solução sob medida" |

**Cada card incluirá:**
- Indicador visual de cor (badge colorido)
- Titulo e descrição curta
- Seção "Quando indicar" (lista de casos de uso)
- Seção "O que inclui" (lista de features)
- Prazo estimado
- Investimento estimado (destacado)
- Botão CTA específico

**Fechamento da Seção:**
- Texto: "Não sabe qual solução faz mais sentido para o seu negócio? Ajudamos você a entender o melhor caminho antes de qualquer desenvolvimento."
- CTA Final: "Quero conversar sobre minha necessidade" (leva para contato)

---

### Mudanças nos Arquivos

**1. Remover seção Pricing separada**
- Arquivo: `src/pages/Index.tsx`
- Remover import e uso do componente `<Pricing />`

**2. Reescrever completamente `Services.tsx`**
- Nova estrutura com os 3 níveis de serviço
- Cards expandidos com todas as informações
- Seções colapsáveis ou tabs para "Quando indicar" e "O que inclui"
- Indicadores visuais de cor (verde, amarelo, azul)
- CTAs individuais por serviço
- CTA final da seção

**3. Arquivo `Pricing.tsx` pode ser deletado**
- Conteudo será absorvido pelo novo Services.tsx

---

### Detalhes Técnicos de Implementação

**Componente Services.tsx - Nova Estrutura:**

```text
services = [
  {
    level: 1,
    color: "green",
    icon: Globe,
    name: "Site Institucional",
    description: "Sites modernos e objetivos...",
    whenToUse: [
      "Empresas que precisam de presença digital profissional",
      "Profissionais liberais",
      "Negócios que não precisam de sistemas internos complexos"
    ],
    features: [
      "Site institucional (1 a 5 páginas)",
      "Design moderno e responsivo (mobile-first)",
      "Formulário de contato",
      "Estrutura clara de serviços e informações",
      "SEO básico"
    ],
    deadline: "5 a 10 dias úteis",
    price: "R$ 2.000",
    cta: "Quero um site profissional"
  },
  // ... outros 2 serviços
]
```

**Layout dos Cards:**
- Cards verticais em mobile (1 coluna)
- Cards lado a lado em desktop (3 colunas)
- Cada card com altura flexivel para acomodar conteudo variado
- Badge colorido no topo de cada card indicando o nível
- Accordion ou lista para "Quando indicar" e "O que inclui"

**Cores dos Níveis:**
- Verde (#22C55E): Site Institucional - mais simples
- Amarelo (#EAB308): Sistema Essencial - intermediario (destaque como popular)
- Azul (#3B82F6): Sistema Sob Medida - mais completo

**Icones sugeridos (lucide-react):**
- Site Institucional: `Globe` ou `Layout`
- Sistema Essencial: `Database` ou `ClipboardList`
- Sistema Sob Medida: `Puzzle` ou `Settings2`

---

### Navegação do Site (Atualização)

O Header precisará ser atualizado para refletir a nova estrutura:
- Remover link "Investimento" (será absorvido em Serviços)
- Manter link "Soluções" ou "Serviços" apontando para `#solucoes`

