
## Substituir Screenshots dos Projetos por Imagens Reais

### O que será feito

As 9 imagens enviadas pelo usuário são screenshots reais dos 3 projetos (3 por projeto). O objetivo é substituir as imagens antigas e o placeholder do "Minha Agenda de Carnaval" por imagens reais, tanto na home quanto na página `/projetos`.

---

### Imagens disponíveis e seleção

**Eu Indico** (3 imagens enviadas):
- `eu-indico-1.jpeg` — Tela inicial do app (home screen com "Quero indicar / Quero encontrar") — **principal**
- `eu-indico-2.jpeg` — Formulário de cadastro do profissional
- `eu-indico-3.jpeg` — Formulário de depoimento

**Baba do Bacana** (3 imagens enviadas):
- `baba-bacana-1.jpeg` — Tela de login com PIN e logo — **principal**
- `baba-bacana-2.jpeg` — Dashboard com próximo jogo e confirmação
- `baba-bacana-3.jpeg` — Tela de pagamentos

**Minha Agenda de Carnaval** (3 imagens enviadas):
- `agenda-carnaval-1.jpeg` — Tela inicial "Monte sua agenda do Carnaval" — **principal**
- `agenda-carnaval-2.jpeg` — Tela de login/cadastro
- `agenda-carnaval-3.jpeg` — Listagem de atrações com filtros

---

### Estratégia de uso das imagens

**Na home (`Projects.tsx`):**
- 1 imagem principal por projeto no carrossel
  - Baba do Bacana → `baba-bacana-2.jpeg` (dashboard — mais representativo funcionalmente)
  - Eu Indico → `eu-indico-1.jpeg` (tela inicial — mais impactante visualmente)
  - Minha Agenda de Carnaval → `agenda-carnaval-1.jpeg` (tela inicial — mais impactante) + adicionar este projeto ao carrossel

**Na página de projetos (`Projetos.tsx`):**
- Usar a mesma imagem principal por projeto (consistência visual)
- Substituir o `screenshot: null` do Carnaval por `agenda-carnaval-1.jpeg`
- Substituir as imagens antigas (`baba-do-bacana-screenshot.png` e `eu-indico-prof-screenshot.png`) pelas novas

---

### Arquivos a serem modificados

| Arquivo | Ação |
|---|---|
| `src/assets/eu-indico-1.jpeg` | Copiar da área de uploads |
| `src/assets/baba-bacana-2.jpeg` | Copiar da área de uploads |
| `src/assets/agenda-carnaval-1.jpeg` | Copiar da área de uploads |
| `src/components/sections/Projects.tsx` | Atualizar imports + adicionar Minha Agenda ao carrossel + usar novas imagens |
| `src/pages/Projetos.tsx` | Atualizar imports + substituir screenshots antigos pelas novas imagens |

---

### Detalhes técnicos

- As imagens são screenshots de mobile (formato vertical/portrait), o que funciona bem com `object-cover object-top` já usado — a parte superior da tela (mais relevante) ficará visível.
- Os arquivos antigos `baba-do-bacana-screenshot.png` e `eu-indico-prof-screenshot.png` não serão deletados, mas deixarão de ser importados nos arquivos atualizados.
- A home terá 3 slides no carrossel (em vez de 2 atuais), adicionando "Minha Agenda de Carnaval".
