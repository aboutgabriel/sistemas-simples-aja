
## Substituir Logo no Header pela Nova Imagem

### O que será feito

A nova logo enviada tem fundo branco com as letras "GRPM" em tipografia tecnológica azul gradiente. Ela será copiada para o projeto substituindo a logo anterior, e o tamanho será ajustado para encaixar bem na header sem distorção.

---

### Observação sobre o fundo branco

A imagem tem fundo branco. O header usa `bg-background/80 backdrop-blur-md` (fundo claro/transparente). O fundo da imagem não deverá causar problema visual, mas caso o tema do site seja escuro, pode ser necessário ajustar futuramente. Por ora, a imagem será inserida como está.

---

### Alterações necessárias

#### 1. Substituir `src/assets/grpm-logo.png`

O arquivo atual será sobrescrito com a nova imagem enviada:
- **Origem:** `user-uploads://Quero_fazer_uma_logo_para_o_meu_site_...png`
- **Destino:** `src/assets/grpm-logo.png`

#### 2. `src/components/sections/Header.tsx` — Ajustar tamanho da logo

A logo atual tem `h-10 md:h-12`. Como a nova logo é uma imagem paisagem (texto horizontal largo), uma altura maior deixaria ela grande demais. O ideal é:

- **Mobile:** `h-8` (32px de altura) — proporcional e legível
- **Desktop:** `h-10` (40px de altura) — destaca o nome sem ocupar espaço excessivo
- `w-auto` e `object-contain` garantem que não haverá distorção

```tsx
// ANTES
className="h-10 md:h-12 w-auto object-contain"

// DEPOIS
className="h-8 md:h-10 w-auto object-contain"
```

---

### Resumo

| Arquivo | Ação |
|---|---|
| `src/assets/grpm-logo.png` | Substituído pela nova imagem enviada |
| `src/components/sections/Header.tsx` | Ajuste de altura: `h-8 md:h-10` para proporcionalidade |
