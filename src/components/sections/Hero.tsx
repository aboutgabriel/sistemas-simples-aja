import { ArrowRight, Zap, Settings2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FunnelIllustration from "@/components/ui/FunnelIllustration";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const tags = [
    { icon: Zap, title: "Entrega Rápida" },
    { icon: Settings2, title: "100% Sob Medida" },
    { icon: Sparkles, title: "Inteligência Artificial" },
  ];

  return (
    <section
      id="solucoes"
      className="relative min-h-screen flex items-center pt-24 md:pt-28 overflow-hidden bg-navy text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/10" />
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-primary/25 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-28 -right-28 w-[520px] h-[520px] bg-primary/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-24 right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex flex-wrap gap-3 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium text-white/90"
                >
                  <tag.icon className="w-4 h-4 text-primary" />
                  {tag.title}
                </span>
              ))}
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white">Soluções digitais </span>
              <span className="text-gradient">sob medida</span>
              <span className="text-white"> para o seu negócio</span>
            </h1>

            <p
              className="text-lg md:text-xl text-white/70 mb-8 max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Transformamos processos manuais e planilhas em sistemas simples, organizados e eficientes.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="rounded-xl gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-all text-base px-8 py-6"
                onClick={scrollToContact}
              >
                <span className="sm:hidden">Solicitar orçamento</span>
                <span className="hidden sm:inline">Quero meu sistema sob medida</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white transition-colors px-8 py-6"
                onClick={() => {
                  const el = document.querySelector("#como-funciona");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Como funciona
              </Button>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-in flex justify-center md:justify-end"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-full max-w-md md:max-w-lg animate-float">
              <FunnelIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
