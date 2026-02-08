

## Melhorias no Hero Section

### Problema 1: Texto Redundante no Topo

**Situação atual:**
- Badge: "Soluções digitais para PMEs"
- H1: "Tudo o que hoje você faz (ou faria) em planilhas — em um sistema simples, sem dor de cabeça."
- Parágrafo: "Desenvolvimento de soluções digitais sob medida para pequenas e médias empresas, com foco em organização, controle e eficiência."

**Proposta - Opção A (Recomendada):**
- Badge: **Remover** (informação já está implícita no contexto)
- H1: **"Soluções digitais sob medida para o seu negócio"** (direto, focado no diferencial principal)
- Subheadline: **"Transformamos processos manuais e planilhas em sistemas simples, organizados e eficientes."** (mais curto e objetivo)

**Proposta - Opção B:**
- Badge: **"GRPM"** (só a marca, mais clean)
- H1: **"Sistemas sob medida que substituem suas planilhas"**
- Subheadline: **"Organização, controle e eficiência para pequenas e médias empresas."**

---

### Problema 2: Botão CTA Muito Longo no Mobile

**Situação atual:**
- "Quero transformar minha planilha em sistema" (42 caracteres)

**Proposta:**
- Desktop: manter texto atual ou usar **"Quero meu sistema sob medida"**
- Mobile: usar texto mais curto como **"Fale conosco"** ou **"Solicitar orçamento"**

Implementação técnica: usar classes responsivas para mostrar/ocultar textos diferentes:
```text
Mobile (< sm): "Solicitar orçamento"
Desktop (>= sm): "Quero meu sistema sob medida"
```

---

### Problema 3: Substituir Métricas por Diferenciais

**Situação atual:**
- "+10 Projetos entregues"
- "100% Clientes satisfeitos"
- "Rápido - Entrega ágil"

**Proposta - 3 diferenciais com ícones:**

| Diferencial | Ícone | Título | Descrição |
|-------------|-------|--------|-----------|
| Velocidade | Zap | Entrega Rápida | MVP em até 2 semanas |
| Personalização | Settings | 100% Sob Medida | Feito para seu negócio |
| IA | Sparkles | Inteligência Artificial | Automação inteligente |

---

## Detalhes Técnicos

### Arquivo a ser modificado
- `src/components/sections/Hero.tsx`

### Mudanças específicas

1. **Remover o badge** (linhas 22-28)

2. **Atualizar H1** (linhas 30-36):
   - Novo texto: "Soluções digitais sob medida para o seu negócio"

3. **Atualizar parágrafo** (linhas 38-44):
   - Novo texto: "Transformamos processos manuais e planilhas em sistemas simples, organizados e eficientes."

4. **Atualizar botão com texto responsivo** (linhas 50-57):
   - Adicionar span com classes `hidden sm:inline` e `sm:hidden` para alternar textos

5. **Substituir métricas por diferenciais** (linhas 60-76):
   - Importar ícones: `Zap`, `Settings2`, `Sparkles` do lucide-react
   - Criar 3 cards com ícone, título e descrição curta

