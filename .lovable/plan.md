
## Substituir Logo no Header

### O que será feito

A imagem enviada (`Gemini_Generated_Image_qq76h0qq76h0qq76.png`) é a nova logo oficial da GRPM — com o texto "GRPM" em tipografia geométrica com gradiente verde-teal → azul-navy. Ela será copiada para o projeto e usada no header, substituindo o quadrado com a letra "G" e o texto "GRPM".

---

### Alterações necessárias

#### 1. Copiar a imagem para `src/assets/`

O arquivo será copiado de `user-uploads://Gemini_Generated_Image_qq76h0qq76h0qq76.png` para `src/assets/grpm-logo.png`, seguindo o padrão de assets do projeto (ES6 import).

#### 2. `src/components/sections/Header.tsx` — Substituir logo

**Remover** o bloco atual:
```tsx
<a href="#" className="flex items-center gap-2">
  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
    <span className="text-primary-foreground font-bold text-lg">G</span>
  </div>
  <span className="font-bold text-xl text-primary-dark">GRPM</span>
</a>
```

**Substituir por**:
```tsx
<a href="#" className="flex items-center">
  <img
    src={grpmLogo}
    alt="GRPM"
    className="h-10 md:h-12 w-auto object-contain"
  />
</a>
```

O import da imagem será adicionado no topo do arquivo:
```tsx
import grpmLogo from "@/assets/grpm-logo.png";
```

---

### Resultado esperado

O header exibirá a logo completa com a tipografia geométrica teal/navy, sem o quadrado "G" e sem o texto separado — tudo em uma imagem só, limpa e profissional.

---

### Resumo

| Arquivo | Ação |
|---|---|
| `src/assets/grpm-logo.png` | Cópia da imagem enviada |
| `src/components/sections/Header.tsx` | Substituir logo antiga pela imagem importada |
