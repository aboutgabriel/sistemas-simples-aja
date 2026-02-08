

## Ajustar Texto do Botao para Mobile

### Problema

O botao de envio do formulario de contato possui o texto "Vamos conversar sobre sua necessidade" que e muito longo para telas mobile, causando quebra de linha ou texto apertado.

### Solucao

Usar texto responsivo no botao:
- **Mobile**: Texto curto "Enviar mensagem"
- **Desktop**: Texto completo "Vamos conversar sobre sua necessidade"

### Arquivo

`src/components/sections/Contact.tsx` (linhas 132-139)

### Mudanca

```text
Antes:
  <Button ...>
    Vamos conversar sobre sua necessidade
    <Send ... />
  </Button>

Depois:
  <Button ...>
    <span className="md:hidden">Enviar mensagem</span>
    <span className="hidden md:inline">Vamos conversar sobre sua necessidade</span>
    <Send ... />
  </Button>
```

### Resultado

- Em telas pequenas (mobile): "Enviar mensagem" + icone
- Em telas maiores (tablet/desktop): "Vamos conversar sobre sua necessidade" + icone

