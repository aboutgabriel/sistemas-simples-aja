import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Soluções digitais para PMEs
          </div>

          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Tudo o que hoje você faz (ou faria) em planilhas —{" "}
            <span className="text-gradient">em um sistema simples, sem dor de cabeça.</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Desenvolvimento de soluções digitais sob medida para pequenas e médias empresas, 
            com foco em organização, controle e eficiência.
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
              Quero transformar minha planilha em sistema
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div 
            className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">+10</div>
              <div className="text-sm">Projetos entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm">Clientes satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">Rápido</div>
              <div className="text-sm">Entrega ágil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
