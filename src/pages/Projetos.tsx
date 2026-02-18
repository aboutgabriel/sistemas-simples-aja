import { ExternalLink, Check, TrendingUp, ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import babaDoBacanaScreenshot from "@/assets/baba-do-bacana-screenshot.png";
import euIndicoProfScreenshot from "@/assets/eu-indico-prof-screenshot.png";

type Case = {
  name: string;
  tag: string;
  link: string;
  screenshot: string | null;
  pain: string;
  solution: string;
  features: string[];
  impact: string[];
};

const cases: Case[] = [
  {
    name: "Eu Indico",
    tag: "Plataforma de Indicação",
    link: "https://euindicoprof.lovable.app/",
    screenshot: euIndicoProfScreenshot,
    pain: "Encontrar profissionais de confiança para serviços domésticos dentro do condomínio.",
    solution:
      "Plataforma simples onde moradores podem indicar profissionais que já prestaram serviços em seus apartamentos, facilitando que outros moradores encontrem pessoas confiáveis quando precisarem.",
    features: [
      "Cadastro de profissionais indicados",
      "Organização por tipo de serviço",
      "Consulta rápida e intuitiva",
      "Ambiente exclusivo para moradores",
    ],
    impact: [
      "Redução de risco ao contratar desconhecidos",
      "Mais segurança entre vizinhos",
      "Processo centralizado e fácil de usar",
    ],
  },
  {
    name: "Baba do Bacana",
    tag: "Sistema de Gestão",
    link: "https://babadobacana.lovable.app/",
    screenshot: babaDoBacanaScreenshot,
    pain: "Dificuldade em controlar presença e pagamento de um grupo que joga futebol semanalmente.",
    solution:
      "Web app onde membros confirmam presença nos próximos jogos e enviam comprovantes de pagamento, facilitando o acompanhamento da diretoria.",
    features: [
      "Confirmação de presença",
      "Envio de comprovante de pagamento",
      "Registro organizado de membros",
      "Controle de inadimplência",
    ],
    impact: [
      "Menos mensagens no WhatsApp",
      "Menos retrabalho manual",
      "Mais organização e previsibilidade",
    ],
  },
  {
    name: "Minha Agenda de Carnaval",
    tag: "Plataforma de Eventos",
    link: "https://minhaagendadecarnaval.lovable.app/",
    screenshot: null,
    pain: "Organizar a agenda de Carnaval em meio a centenas de atrações espalhadas por Salvador.",
    solution:
      "Plataforma onde usuários podem buscar atrações oficiais divulgadas pela Prefeitura, marcar presença e montar sua própria agenda personalizada.",
    features: [
      "Busca por atrações oficiais",
      "Filtro por dia e circuito",
      "Marcação de presença",
      "Organização personalizada da agenda",
    ],
    impact: [
      "Planejamento mais eficiente",
      "Melhor aproveitamento do evento",
      "Centralização das informações em um único lugar",
    ],
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
                Soluções criadas para resolver problemas reais do dia a dia.
                Menos improviso. Mais organização. Mais controle.
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
                  {/* Screenshot or Placeholder */}
                  {project.screenshot ? (
                    <div className="rounded-xl overflow-hidden shadow-card border border-border">
                      <img
                        src={project.screenshot}
                        alt={`Screenshot do projeto ${project.name}`}
                        className="w-full h-64 md:h-80 object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="rounded-xl border border-border bg-secondary/60 h-64 md:h-80 flex flex-col items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-primary">
                        <Calendar className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {project.name}
                      </p>
                    </div>
                  )}

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
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-accent-foreground uppercase tracking-widest mb-2">
                            Impacto Gerado
                          </p>
                          <ul className="space-y-1.5">
                            {project.impact.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2 text-sm text-accent-foreground/80"
                              >
                                <Check className="w-3.5 h-3.5 text-accent-foreground flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
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
                        Ver projeto
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
