import { MessageSquare, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Entendimento do problema",
    description: "Conversamos para entender sua dor e como sua operação funciona hoje.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Proposta sob medida",
    description: "Criamos uma solução pensada especificamente para o seu negócio.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Desenvolvimento rápido",
    description: "Entregamos seu sistema funcionando em tempo recorde.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo simples e direto para transformar sua ideia em realidade.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-card rounded-2xl border border-primary/20 p-8 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-primary">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl border border-primary/30 bg-accent flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
