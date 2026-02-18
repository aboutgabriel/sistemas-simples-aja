import { ExternalLink, Check, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import babaDoBacanaScreenshot from "@/assets/baba-do-bacana-screenshot.png";
import euIndicoProfScreenshot from "@/assets/eu-indico-prof-screenshot.png";

const cases = [
  {
    name: "Baba do Bacana",
    tag: "Sistema de Gestão",
    link: "https://babadobacana.lovable.app/",
    screenshot: babaDoBacanaScreenshot,
    pain: "O organizador controlava tudo pelo WhatsApp e planilhas: confirmações de presença, controle de quem pagou, listas de espera. A cada pelada, era um caos de mensagens, esquecimentos e retrabalho manual.",
    solution:
      "Desenvolvemos um sistema web completo focado na rotina do organizador. Com poucos cliques, ele abre a pelada, coleta confirmações, registra pagamentos e visualiza quem está confirmado — tudo em um só lugar, acessível pelo celular.",
    features: [
      "Controle de participantes por pelada",
      "Confirmação de presença digital",
      "Gestão de pagamentos integrada",
      "Interface mobile-first",
      "Lista de espera automática",
    ],
    impact:
      "Fim do retrabalho manual. O organizador passou a ter controle centralizado das peladas, sem depender de planilhas ou grupos de WhatsApp.",
  },
  {
    name: "Eu Indico Prof",
    tag: "Plataforma de Indicação",
    link: "https://euindicoprof.lovable.app/",
    screenshot: euIndicoProfScreenshot,
    pain: "Profissionais de diversas áreas dependiam exclusivamente de indicações boca a boca, sem uma vitrine organizada. Clientes em busca de profissionais confiáveis não tinham onde consultar referências de forma rápida.",
    solution:
      "Criamos uma plataforma onde profissionais cadastram seus perfis e recebem indicações de clientes satisfeitos. O fluxo de indicação é simples e intuitivo, gerando uma rede de recomendações verificadas.",
    features: [
      "Cadastro completo de perfis profissionais",
      "Fluxo de indicação simplificado",
      "Busca rápida por área de atuação",
      "Interface intuitiva para indicadores",
      "Presença digital estruturada",
    ],
    impact:
      "Profissionais passaram a ter presença digital estruturada, conquistando novos clientes por meio de indicações verificadas e organizadas.",
  },
];

const Projetos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 md:pt-28">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-secondary/40">
          <div className="container">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o início
            </Link>
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Portfólio
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Projetos{" "}
                <span className="text-gradient">Desenvolvidos</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Cases reais que transformaram processos em sistemas. Cada projeto começa com uma dor real e termina com uma solução que funciona.
              </p>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="space-y-24">
              {cases.map((project, index) => (
                <div
                  key={project.name}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start ${
                    index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Screenshot */}
                  <div className="rounded-xl overflow-hidden shadow-card border border-border">
                    <img
                      src={project.screenshot}
                      alt={`Screenshot do projeto ${project.name}`}
                      className="w-full h-64 md:h-80 object-cover object-top"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <Badge className="gradient-primary text-primary-foreground mb-3">
                        {project.tag}
                      </Badge>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {project.name}
                      </h2>
                    </div>

                    {/* Pain */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                        O Problema
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {project.pain}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                        A Solução
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                        Funcionalidades
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-foreground/80"
                          >
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <Card className="border-0 bg-accent">
                      <CardContent className="p-4 flex gap-3 items-start">
                        <TrendingUp className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-accent-foreground uppercase tracking-widest mb-1">
                            Impacto Gerado
                          </p>
                          <p className="text-sm text-accent-foreground/80">
                            {project.impact}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Ver projeto ao vivo
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing section */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                "Cada projeto começa com uma dor real.
                <br />
                <span className="text-muted-foreground font-normal">
                  A solução nasce da simplicidade, da organização e do entendimento do processo."
                </span>
              </blockquote>
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity"
                asChild
              >
                <Link to="/#contato">
                  Quero criar uma solução para meu negócio
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projetos;
