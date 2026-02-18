
## Nova Página: Projetos Desenvolvidos

### Visão Geral

Criar uma página dedicada `/projetos` com cases detalhados de cada projeto, mantendo a seção resumida na home com um botão CTA "Ver todos os projetos".

---

### Estrutura de Arquivos

```text
src/
  pages/
    Index.tsx          (existente - adicionar CTA)
    Projetos.tsx       (novo - página dedicada)
  components/
    sections/
      Projects.tsx     (existente - adicionar botão CTA)
```

---

### 1. Atualização da Seção Home (`Projects.tsx`)

Adicionar um botão CTA abaixo do carrossel que leva para `/projetos`:

```text
[Carrossel existente com os 2 cards]

"Ver todos os projetos com detalhes"  → link para /projetos
```

---

### 2. Nova Rota em `App.tsx`

```text
<Route path="/projetos" element={<Projetos />} />
```

---

### 3. Nova Página `src/pages/Projetos.tsx`

A página terá as seguintes seções, em ordem:

**Header fixo** (mesmo componente da home)

**Hero da Página**
- Título: "Projetos Desenvolvidos"
- Subtítulo: "Cases reais que transformaram processos em sistemas."

**Cards de Cases Detalhados**

Cada case terá:
- Screenshot do projeto (imagem existente)
- Tag com o tipo de solução (ex: "Sistema de Gestão")
- Dor que resolve (ex: "O organizador controlava tudo pelo WhatsApp e planilhas...")
- Solução criada (parágrafo descritivo)
- Lista de funcionalidades principais com ícone de check
- Impacto gerado (destaque visual, ex: caixa com cor de accent)
- Botão "Ver projeto" → link externo

**Case 1: Baba do Bacana**
- Dor: Organização de grupos esportivos via WhatsApp e planilhas, sem controle de presenças e pagamentos
- Solução: Sistema web completo com gestão de participantes e confirmação digital
- Impacto: Fim do retrabalho manual, controle centralizado dos peladas

**Case 2: Eu Indico Prof**
- Dor: Profissionais dependiam de indicações boca a boca sem uma vitrine organizada
- Solução: Plataforma de cadastro e indicação, com busca rápida
- Impacto: Profissionais passaram a ter presença digital estruturada

**Seção de Encerramento**
- Texto:
  > "Cada projeto começa com uma dor real.
  > A solução nasce da simplicidade, da organização e do entendimento do processo."
- Botão CTA: "Quero criar uma solução para meu negócio" → scroll/link para formulário de contato

**Footer** (mesmo componente da home)

---

### Detalhes Visuais

- Design 100% coerente com a home: mesmas cores, tipografia, espaçamentos e componentes (`Card`, `Button`, `Badge`)
- Cards dispostos em coluna única, alternando imagem à esquerda e à direita em desktop (layout lado a lado com `md:grid-cols-2`)
- Destaque do impacto em caixa com `bg-accent` e ícone `TrendingUp`
- Botão CTA final com `gradient-primary` e sombra `shadow-primary`
- Mobile-first: tudo em coluna única no mobile, layout 2 colunas a partir de `md`

---

### Mudanças Técnicas

| Arquivo | Ação |
|---|---|
| `src/App.tsx` | Adicionar rota `/projetos` |
| `src/components/sections/Projects.tsx` | Adicionar botão "Ver todos os projetos" usando `Link` do react-router-dom |
| `src/pages/Projetos.tsx` | Criar página completa com Header, casos, encerramento e Footer |
