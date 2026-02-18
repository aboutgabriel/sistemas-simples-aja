
## Galeria de Screenshots por Projeto (Formato Vertical + Autoplay)

### Visão Geral

Cada projeto passará a exibir as suas 3 imagens em um mini carrossel vertical, tanto na home quanto na página `/projetos`. As imagens vão passar automaticamente (autoplay em loop) e o usuário também pode navegar manualmente com setas ou dots indicadores.

---

### Novo Formato Visual das Imagens

As imagens são screenshots de celular (formato portrait/vertical). Em vez de cortá-las horizontalmente com `object-top`, serão exibidas em um container proporcional ao formato mobile, mostrando a imagem completa sem corte.

- Container com proporção `aspect-[9/16]` (formato de tela de celular)
- `object-contain` com fundo neutro (bg-secondary) para não distorcer
- Ou `object-cover` centralizado se preferir preencher sem fundo

---

### Comportamento do Mini Carrossel

- **Autoplay**: troca de imagem a cada 3 segundos automaticamente
- **Loop**: volta para a primeira imagem após a última
- **Navegação manual**: setas laterais (prev/next) e/ou dots indicadores na base
- **Pausar ao hover** (boa prática de UX)

---

### Imagens por Projeto

Cada projeto terá um array `screenshots: string[]` com as 3 imagens na ordem que fizer mais sentido narrativo:

**Eu Indico:**
1. `eu-indico-1.jpeg` — Tela inicial (home com "Quero indicar / Quero encontrar")
2. `eu-indico-2.jpeg` — Formulário de cadastro do profissional
3. `eu-indico-3.jpeg` — Formulário de depoimento

**Baba do Bacana:**
1. `baba-bacana-2.jpeg` — Dashboard com próximo jogo e confirmação
2. `baba-bacana-1.jpeg` — Tela de login com PIN e logo
3. `baba-bacana-3.jpeg` — Tela de pagamentos

**Minha Agenda de Carnaval:**
1. `agenda-carnaval-1.jpeg` — Tela inicial
2. `agenda-carnaval-2.jpeg` — Tela de login/cadastro
3. `agenda-carnaval-3.jpeg` — Listagem de atrações com filtros

---

### Novo Componente: `ProjectImageCarousel`

Será criado um componente reutilizável `src/components/ui/ProjectImageCarousel.tsx` que encapsula toda a lógica de autoplay, navegação e dots. Isso mantém os arquivos `Projects.tsx` e `Projetos.tsx` limpos.

```text
Props:
  - images: string[]      → array de URLs das imagens
  - alt: string           → texto alternativo base
  - className?: string    → classes extras para o container externo
```

Internamente usa estado `currentIndex` com `useEffect` para o autoplay via `setInterval`. Ao fazer hover (`onMouseEnter`/`onMouseLeave`), pausa o timer.

---

### Mudanças em cada arquivo

#### `src/components/ui/ProjectImageCarousel.tsx` — NOVO
Componente com mini carrossel: autoplay de 3s, setas, dots, pausa no hover, formato vertical.

#### `src/components/sections/Projects.tsx`
- Adicionar imports das 3 imagens de cada projeto (`eu-indico-2.jpeg`, `eu-indico-3.jpeg`, `baba-bacana-1.jpeg`, `baba-bacana-3.jpeg`, `agenda-carnaval-2.jpeg`, `agenda-carnaval-3.jpeg`)
- Substituir campo `screenshot` por `screenshots: string[]`
- Substituir o `<img>` atual pelo novo `<ProjectImageCarousel>`
- Ajustar altura do container para comportar o formato vertical

#### `src/pages/Projetos.tsx`
- Adicionar imports das 6 novas imagens
- Substituir campo `screenshot` por `screenshots: string[]` no tipo `Case`
- Substituir o bloco de `<img>` (e o placeholder) pelo `<ProjectImageCarousel>`
- Container da imagem com proporção vertical adequada

---

### Detalhes Visuais do Container

**Na home** (carrossel de projetos):
- Container de imagem com `aspect-[9/19]` ou altura fixa `h-80 md:h-96` mais estreito
- O card ficará mais alto, mas visualmente elegante mostrando o formato mobile real

**Na página `/projetos`**:
- Container com `aspect-[9/19]` alinhado ao topo da grid lado a lado com o texto
- Dots de navegação abaixo das imagens em cor primária

---

### Arquivos Modificados

| Arquivo | Ação |
|---|---|
| `src/components/ui/ProjectImageCarousel.tsx` | Criar — componente reutilizável de galeria vertical com autoplay |
| `src/components/sections/Projects.tsx` | Atualizar — usar `screenshots[]` + `ProjectImageCarousel` + novos imports |
| `src/pages/Projetos.tsx` | Atualizar — usar `screenshots[]` + `ProjectImageCarousel` + novos imports |
| `src/assets/eu-indico-2.jpeg` | Copiar do upload |
| `src/assets/eu-indico-3.jpeg` | Copiar do upload |
| `src/assets/baba-bacana-1.jpeg` | Copiar do upload |
| `src/assets/baba-bacana-3.jpeg` | Copiar do upload |
| `src/assets/agenda-carnaval-2.jpeg` | Copiar do upload |
| `src/assets/agenda-carnaval-3.jpeg` | Copiar do upload |
