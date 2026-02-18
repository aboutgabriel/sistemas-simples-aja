
## Atualizar Página "Projetos Desenvolvidos"

### O que muda

A página `/projetos` já existe, mas o conteúdo precisa ser totalmente revisado conforme o novo briefing:

1. **Subtítulo do Hero** — Novo texto mais comercial
2. **Projeto "Eu Indico"** — Conteúdo completamente diferente (foco em condomínios, não em profissionais gerais)
3. **Projeto "Baba do Bacana"** — Conteúdo atualizado (impacto como lista de 3 itens)
4. **Novo projeto "Minha Agenda de Carnaval"** — Terceiro case adicionado, com link externo e sem screenshot (placeholder visual)
5. **Seção de impacto** — Renderizar bullet points quando o impacto for uma lista

---

### Mudanças Detalhadas

#### Hero
- Subtítulo atual: *"Cases reais que transformaram processos em sistemas. Cada projeto começa com uma dor real e termina com uma solução que funciona."*
- Subtítulo novo: *"Soluções criadas para resolver problemas reais do dia a dia. Menos improviso. Mais organização. Mais controle."*

#### Projeto 1 — Eu Indico
- Nome: `"Eu Indico"`
- Tag: `"Plataforma de Indicação"`
- Link: `"https://euindicoprof.lovable.app/"` (mantido)
- Screenshot: imagem existente `eu-indico-prof-screenshot.png`
- Dor: *"Encontrar profissionais de confiança para serviços domésticos dentro do condomínio."*
- Solução: *"Plataforma simples onde moradores podem indicar profissionais que já prestaram serviços em seus apartamentos..."*
- Funcionalidades: Cadastro de profissionais indicados / Organização por tipo de serviço / Consulta rápida e intuitiva / Ambiente exclusivo para moradores
- Impacto (lista): Redução de risco ao contratar desconhecidos / Mais segurança entre vizinhos / Processo centralizado e fácil de usar

#### Projeto 2 — Baba do Bacana
- Nome: `"Baba do Bacana"` (mantido)
- Tag: `"Sistema de Gestão"` (mantido)
- Link: `"https://babadobacana.lovable.app/"` (mantido)
- Screenshot: imagem existente `baba-do-bacana-screenshot.png`
- Dor: *"Dificuldade em controlar presença e pagamento de um grupo que joga futebol semanalmente."*
- Solução: *"Web app onde membros confirmam presença nos próximos jogos e enviam comprovantes de pagamento..."*
- Funcionalidades: Confirmação de presença / Envio de comprovante de pagamento / Registro organizado de membros / Controle de inadimplência
- Impacto (lista): Menos mensagens no WhatsApp / Menos retrabalho manual / Mais organização e previsibilidade

#### Projeto 3 — Minha Agenda de Carnaval (NOVO)
- Nome: `"Minha Agenda de Carnaval"`
- Tag: `"Plataforma de Eventos"`
- Link: `"https://minhaagendadecarnaval.lovable.app/"` (botão "Ver projeto")
- Screenshot: sem imagem disponível → usar um placeholder visual com gradiente e ícone de calendário
- Dor: *"Organizar a agenda de Carnaval em meio a centenas de atrações espalhadas por Salvador."*
- Solução: *"Plataforma onde usuários podem buscar atrações oficiais divulgadas pela Prefeitura, marcar presença e montar sua própria agenda personalizada."*
- Funcionalidades: Busca por atrações oficiais / Filtro por dia e circuito / Marcação de presença / Organização personalizada da agenda
- Impacto (lista): Planejamento mais eficiente / Melhor aproveitamento do evento / Centralização das informações em um único lugar

---

### Mudança Técnica no Componente

O campo `impact` passará a aceitar uma `string[]` (lista de itens) em vez de uma `string` simples. A renderização detecta o tipo:
- Se for lista → exibe bullet points com ícone de check dentro do card de destaque
- Mantém o mesmo visual `bg-accent` com ícone `TrendingUp`

Para o placeholder do 3º projeto (sem screenshot), será renderizado um bloco com `bg-secondary` e um ícone centralizado (ex: `Calendar`) no lugar da imagem.

---

### Arquivo Modificado

| Arquivo | Ação |
|---|---|
| `src/pages/Projetos.tsx` | Atualizar array `cases` com novos conteúdos + suporte a impacto como lista + placeholder para projeto sem imagem |

Nenhum outro arquivo precisa ser alterado — rota, App.tsx e Projects.tsx da home permanecem iguais.
