

## Correções: Espaçamento do Hero e Logo do Footer

### 1. Aumentar espaçamento inferior do Hero

O Hero usa `min-h-screen` mas os botões ficam muito próximos do fim do fundo azul. Será adicionado padding inferior extra para criar mais respiro entre os CTAs e o fim da seção.

**Arquivo:** `src/components/sections/Hero.tsx` (linha 20)

```tsx
// ANTES
className="relative min-h-screen flex items-center pt-24 md:pt-28 overflow-hidden bg-navy text-white"

// DEPOIS
className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-20 md:pb-28 overflow-hidden bg-navy text-white"
```

Isso adiciona `pb-20 md:pb-28` — cerca de 80-112px de espaço abaixo do conteúdo, dando mais folga entre os botões e a faixa de tagline.

### 2. Substituir logo do footer pela versão branca

A logo branca enviada (`footer-logo.png`) será copiada para `src/assets/footer-logo.png`, substituindo a versão colorida atual. O footer já tem fundo navy escuro, então a logo branca terá contraste ideal.

**Ação:** Copiar `user-uploads://footer-logo.png` para `src/assets/footer-logo.png` (sobrescrever)

Nenhuma alteração de código é necessária no `Footer.tsx` — ele já importa de `@/assets/footer-logo.png`.

---

### Resumo

| Arquivo | Ação |
|---|---|
| `src/components/sections/Hero.tsx` | Adicionar `pb-20 md:pb-28` para mais espaçamento inferior |
| `src/assets/footer-logo.png` | Substituir pela logo branca enviada |

