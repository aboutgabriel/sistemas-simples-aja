import { Globe, Database, Puzzle, Check, Clock, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    level: 1,
    color: "green",
    colorClass: "bg-green-500",
    borderClass: "border-green-500/30",
    icon: Globe,
    name: "Site Institucional",
    description: "Sites modernos e objetivos para apresentar sua empresa, seus serviços e facilitar o contato com clientes.",
    whenToUse: [
      "Empresas que precisam de presença digital profissional",
      "Profissionais liberais",
      "Negócios que não precisam de sistemas internos complexos",
    ],
    features: [
      "Site institucional (1 a 5 páginas)",
      "Design moderno e responsivo (mobile-first)",
      "Formulário de contato",
      "Estrutura clara de serviços e informações",
      "SEO básico",
    ],
    deadline: "5 a 10 dias úteis",
    price: "R$ 2.000",
    cta: "Quero um site profissional",
    popular: false,
  },
  {
    level: 2,
    color: "yellow",
    colorClass: "bg-yellow-500",
    borderClass: "border-yellow-500/30",
    icon: Database,
    name: "Sistema de Gestão Essencial",
    description: "Sistemas simples para substituir planilhas e organizar processos do dia a dia com mais controle e menos retrabalho.",
    whenToUse: [
      "Negócios que usam planilhas ou controles manuais",
      "Processos com etapas, status ou aprovações",
      "Necessidade de centralizar informações",
    ],
    features: [
      "Sistema com autenticação de usuários",
      "Cadastros (clientes, itens, pessoas ou registros)",
      "Fluxos pré-definidos (ex: aprovação, confirmação, status)",
      "Painel simples de controle",
      "Acesso otimizado para celular",
    ],
    deadline: "15 a 30 dias",
    price: "R$ 4.000",
    cta: "Quero sair da planilha",
    popular: true,
  },
  {
    level: 3,
    color: "blue",
    colorClass: "bg-blue-500",
    borderClass: "border-blue-500/30",
    icon: Puzzle,
    name: "Sistema Sob Medida",
    description: "Desenvolvimento de sistemas totalmente personalizados, criados especificamente para a realidade e os processos do seu negócio.",
    whenToUse: [
      "Empresas com processos próprios",
      "Operações que não se encaixam em ferramentas prontas",
      "Negócios que querem escalar com controle",
    ],
    features: [
      "Mapeamento detalhado dos processos",
      "Regras de negócio personalizadas",
      "Fluxos exclusivos",
      "Perfis e permissões avançadas",
      "Sistema preparado para evolução contínua",
    ],
    deadline: "A partir de 30 dias",
    price: "R$ 7.000",
    cta: "Quero uma solução sob medida",
    popular: false,
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solucoes" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossas Soluções
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada negócio está em um momento diferente. Por isso, oferecemos soluções em níveis — do essencial ao totalmente personalizado.
          </p>
        </div>

        {/* Cards de Serviços */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className={`relative border-0 shadow-card transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up flex flex-col ${
                service.popular ? "ring-2 ring-primary shadow-primary/20" : ""
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Badge de cor no topo */}
              <div className={`h-1.5 w-full ${service.colorClass} rounded-t-lg`} />
              
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Mais popular
                  </div>
                </div>
              )}

              <CardHeader className="pb-2 pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${service.colorClass}/10 flex items-center justify-center`}>
                    <service.icon className={`w-5 h-5 text-${service.color}-500`} />
                  </div>
                  <Badge variant="outline" className={`${service.borderClass} text-${service.color}-600`}>
                    Nível {service.level}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                {/* Accordion para detalhes */}
                <Accordion type="single" collapsible className="w-full mb-4">
                  <AccordionItem value="when" className="border-b-0">
                    <AccordionTrigger className="text-sm font-medium py-2 hover:no-underline">
                      Quando indicar
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {service.whenToUse.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="features" className="border-b-0">
                    <AccordionTrigger className="text-sm font-medium py-2 hover:no-underline">
                      O que inclui
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Prazo e Investimento */}
                <div className="mt-auto space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.deadline}</span>
                  </div>
                  
                  <div>
                    <span className="text-xs text-muted-foreground">A partir de</span>
                    <div className="text-2xl font-bold text-foreground">
                      {service.price}
                    </div>
                  </div>

                  <Button
                    className={`w-full ${
                      service.popular
                        ? "gradient-primary text-primary-foreground shadow-primary hover:opacity-90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                    onClick={scrollToContact}
                  >
                    {service.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fechamento da Seção */}
        <div className="max-w-2xl mx-auto text-center mt-16 p-8 rounded-2xl bg-card shadow-card">
          <p className="text-muted-foreground text-lg mb-6">
            Não sabe qual solução faz mais sentido para o seu negócio?
            <br />
            <span className="text-foreground font-medium">
              Ajudamos você a entender o melhor caminho antes de qualquer desenvolvimento.
            </span>
          </p>
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90"
            onClick={scrollToContact}
          >
            Quero conversar sobre minha necessidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
