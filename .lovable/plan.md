

## Atualizar site para a identidade ThinkUp Lab

### Visao geral

A referencia mostra que o site ja tem a estrutura e layout corretos (hero com ilustracao, tags, CTA, etc.). As mudancas necessarias sao de **branding** e alguns **ajustes visuais** para alinhar com a nova identidade "ThinkUp Lab".

---

### 1. Substituir logo na header e tornar maior

- Copiar `user-uploads://THINKUP-COLORIDO.png` para `src/assets/grpm-logo.png` (sobrescrever)
- Em `Header.tsx`, aumentar o tamanho da logo para `h-10 md:h-14` (era `h-8 md:h-10`) para dar mais destaque, como solicitado
- Manter `w-auto object-contain` para nao distorcer

### 2. Adicionar faixa de tagline abaixo do Hero

Na referencia, existe uma faixa escura (navy mais escuro) logo abaixo do hero com o texto centralizado: *"Transformamos processos manuais e planilhas em sistemas simples, organizados e eficientes."*

- Adicionar esta secao em `Index.tsx`, entre `<Hero />` e `<Services />`
- Estilo: fundo navy escuro, texto branco/70, padding vertical moderado, texto centralizado

### 3. Atualizar branding de GRPM para ThinkUp Lab

Arquivos afetados:
- **`Footer.tsx`**: Atualizar alt text da logo e o copyright de "GRPM" para "ThinkUp Lab"
- **`index.html`**: Atualizar title, meta tags (og:title, og:description, twitter, author, etc.) de "GRPM" para "ThinkUp Lab"
- **`Header.tsx`**: Alt text da imagem ja diz "ThinkUp" -- manter

### 4. Atualizar logo do footer

- Copiar a mesma logo `THINKUP-COLORIDO.png` para `src/assets/footer-logo.png` (sobrescrever) para que o footer tambem tenha a marca atualizada

---

### Detalhes tecnicos

#### Header.tsx - Linha 29
```tsx
// ANTES
className="h-8 md:h-10 w-auto object-contain ..."

// DEPOIS
className="h-10 md:h-14 w-auto object-contain ..."
```

#### Index.tsx - Nova secao entre Hero e Services
```tsx
{/* Tagline strip */}
<section className="bg-navy/90 py-8 md:py-10">
  <div className="container">
    <p className="text-center text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
      Transformamos processos manuais e planilhas em sistemas simples, organizados e eficientes.
    </p>
  </div>
</section>
```

#### Footer.tsx - Linha 84
```tsx
// ANTES
<p>copyright {new Date().getFullYear()} GRPM. Todos os direitos reservados.</p>

// DEPOIS  
<p>copyright {new Date().getFullYear()} ThinkUp Lab. Todos os direitos reservados.</p>
```

#### index.html - Meta tags
Atualizar todas as referencias de "GRPM" para "ThinkUp Lab" no title, og:title, description, author, etc.

---

### Resumo das alteracoes

| Arquivo | Acao |
|---|---|
| `src/assets/grpm-logo.png` | Substituido pela logo THINKUP-COLORIDO.png |
| `src/assets/footer-logo.png` | Substituido pela mesma logo |
| `src/components/sections/Header.tsx` | Logo maior: `h-10 md:h-14` |
| `src/pages/Index.tsx` | Nova faixa de tagline abaixo do Hero |
| `src/components/sections/Footer.tsx` | Branding atualizado para ThinkUp Lab |
| `index.html` | Meta tags atualizadas para ThinkUp Lab |

