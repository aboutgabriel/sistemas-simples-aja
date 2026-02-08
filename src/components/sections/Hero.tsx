import { ArrowRight, Zap, Settings2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tags = [
    { icon: Zap, title: "Entrega Rápida" },
    { icon: Settings2, title: "100% Sob Medida" },
    { icon: Sparkles, title: "Inteligência Artificial" },
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
          {/* Tags de diferenciais */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
              >
                <tag.icon className="w-4 h-4" />
                {tag.title}
              </span>
            ))}
          </div>

          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Soluções digitais{" "}
            <span className="text-gradient">sob medida para o seu negócio</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Transformamos processos manuais e planilhas em sistemas simples, organizados e eficientes.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
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

        </div>
      </div>
    </section>
  );
};

export default Hero;
