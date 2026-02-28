import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import HowItWorks from "@/components/sections/HowItWorks";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import TabletMockup from "@/components/ui/TabletMockup";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        {/* Tagline strip */}
        <section className="bg-navy/90 py-8 md:py-10">
          <div className="container">
            <p className="text-center text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
              Transformamos processos manuais e planilhas em sistemas simples, organizados e eficientes.
            </p>
          </div>
        </section>

        <Services />
        <HowItWorks />

        {/* ── Seção: Seu negócio no controle ── */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent border border-primary/30 text-accent-foreground text-sm font-medium mb-4">
                  Visualização de dados
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Seu negócio no{" "}
                  <span className="text-gradient">controle</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Dashboards intuitivos para decisões inteligentes. Veja seus dados de forma clara, em qualquer dispositivo.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Relatórios em tempo real",
                    "Indicadores personalizados para o seu negócio",
                    "Acesso via computador, tablet ou celular",
                    "Exportação de dados com um clique",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                      <span className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity"
                  onClick={scrollToContact}
                >
                  Quero meu dashboard
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Right: tablet */}
              <div className="flex justify-center">
                <TabletMockup />
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
