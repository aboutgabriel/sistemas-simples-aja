import { ArrowRight, Zap, Settings2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const differentials = [
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "MVP em até 2 semanas",
    },
    {
      icon: Settings2,
      title: "100% Sob Medida",
      description: "Feito para seu negócio",
    },
    {
      icon: Sparkles,
      title: "Inteligência Artificial",
      description: "Automação inteligente",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Soluções digitais{" "}
            <span className="text-gradient">sob medida para o seu negócio</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Transformamos processos manuais e planilhas em sistemas simples, organizados e eficientes.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-all text-base px-8 py-6"
              onClick={scrollToContact}
            >
              <span className="sm:hidden">Solicitar orçamento</span>
              <span className="hidden sm:inline">Quero meu sistema sob medida</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {differentials.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
