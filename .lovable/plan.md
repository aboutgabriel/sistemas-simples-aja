

## Mover Diferenciais para Tags acima do Titulo

### Visao Geral

Transformar os 3 diferenciais (Entrega Rapida, 100% Sob Medida, Inteligencia Artificial) em badges/tags compactas posicionadas acima do titulo principal, similar ao design anterior que tinha "Solucoes exclusivas para PMEs".

---

### Mudanca Visual

**Antes (atual):**
```text
[Titulo: Solucoes digitais sob medida...]
[Subtitulo]
[Botao CTA]
[Cards grandes com icones no final da secao]
```

**Depois (proposta):**
```text
[Tags: Entrega Rapida | 100% Sob Medida | IA]  <-- NOVO
[Titulo: Solucoes digitais sob medida...]
[Subtitulo]
[Botao CTA]
```

---

### Detalhes Tecnicos

**Arquivo:** `src/components/sections/Hero.tsx`

**Mudancas:**

1. **Adicionar tags acima do H1** (antes da linha 40):
   - Criar um container flex com 3 badges inline
   - Cada badge tera icone pequeno + texto curto
   - Estilo: fundo semi-transparente, borda sutil, texto pequeno
   - Separados por espacamento ou divisor visual

2. **Remover a grid de cards no final** (linhas 70-86):
   - Deletar o bloco que renderiza os cards grandes com descricoes

3. **Simplificar o array de diferenciais**:
   - Manter apenas `icon` e `title` (remover `description`)

**Estrutura das Tags:**
```text
<div className="flex flex-wrap justify-center gap-3 mb-6">
  {tags.map(...)}
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 
                     rounded-full bg-primary/10 border border-primary/20 
                     text-sm font-medium text-primary">
      <Icon className="w-4 h-4" />
      {title}
    </span>
</div>
```

**Resultado esperado:**
- Visual mais clean e compacto no topo
- Tags funcionam como "credenciais" visuais rapidas
- Titulo fica mais destacado sem competir com cards abaixo

