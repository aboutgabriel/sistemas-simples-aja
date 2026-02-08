import { Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Soluções Simples / MVPs",
    price: "R$ 500",
    description: "Ideal para validar ideias e resolver problemas pontuais",
    features: [
      "Funcionalidade principal",
      "Design responsivo",
      "Entrega em até 2 semanas",
      "Suporte pós-entrega",
    ],
    popular: false,
  },
  {
    name: "Sistemas Personalizados",
    price: "R$ 1.000",
    description: "Para negócios que precisam de uma solução completa",
    features: [
      "Múltiplas funcionalidades",
      "Painel administrativo",
      "Integrações básicas",
      "Design premium",
      "Treinamento de uso",
    ],
    popular: true,
  },
  {
    name: "Evoluções e Melhorias",
    price: "Sob avaliação",
    description: "Continue evoluindo seu sistema existente",
    features: [
      "Novas funcionalidades",
      "Otimizações",
      "Correções",
      "Análise personalizada",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="investimento" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Investimento
          </h2>
          <p className="text-muted-foreground text-lg">
            Valores estimados para dar uma ideia do investimento. 
            O valor final depende da complexidade e das funcionalidades do projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative border-0 shadow-card transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up ${
                plan.popular ? "ring-2 ring-primary shadow-primary/20" : ""
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Mais popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">a partir de</span>
                  <div className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "gradient-primary text-primary-foreground shadow-primary hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  onClick={scrollToContact}
                >
                  Solicitar orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
