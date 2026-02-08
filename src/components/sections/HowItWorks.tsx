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
    <section id="como-funciona" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo simples e direto para transformar sua ideia em realidade.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Icon container */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-accent" />
                  <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center shadow-card">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
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
