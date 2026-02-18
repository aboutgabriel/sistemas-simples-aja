import { ExternalLink, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectImageCarousel from "@/components/ui/ProjectImageCarousel";
import euIndico1 from "@/assets/eu-indico-1.jpeg";
import euIndico2 from "@/assets/eu-indico-2.jpeg";
import euIndico3 from "@/assets/eu-indico-3.jpeg";
import babaBacana2 from "@/assets/baba-bacana-2.jpeg";
import babaBacana1 from "@/assets/baba-bacana-1.jpeg";
import babaBacana3 from "@/assets/baba-bacana-3.jpeg";
import agendaCarnaval1 from "@/assets/agenda-carnaval-1.jpeg";
import agendaCarnaval2 from "@/assets/agenda-carnaval-2.jpeg";
import agendaCarnaval3 from "@/assets/agenda-carnaval-3.jpeg";

const projects = [
  {
    name: "Eu Indico",
    description: "Plataforma de indicação de profissionais para condomínios",
    link: "https://euindicoprof.lovable.app/",
    screenshots: [euIndico1, euIndico2, euIndico3],
    features: [
      "Cadastro de profissionais indicados",
      "Organização por tipo de serviço",
      "Consulta rápida e intuitiva",
      "Ambiente exclusivo para moradores",
    ],
  },
  {
    name: "Baba do Bacana",
    description: "Sistema para organização de grupo esportivo",
    link: "https://babadobacana.lovable.app/",
    screenshots: [babaBacana2, babaBacana1, babaBacana3],
    features: [
      "Confirmação de presença",
      "Envio de comprovante de pagamento",
      "Registro organizado de membros",
      "Controle de inadimplência",
    ],
  },
  {
    name: "Minha Agenda de Carnaval",
    description: "Planejamento de atrações do Carnaval de Salvador",
    link: "https://minhaagendadecarnaval.lovable.app/",
    screenshots: [agendaCarnaval1, agendaCarnaval2, agendaCarnaval3],
    features: [
      "Busca por atrações oficiais",
      "Filtro por dia e circuito",
      "Marcação de presença",
      "Organização personalizada da agenda",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Projetos Desenvolvidos
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça algumas soluções que já desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="max-w-sm mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.name}>
                  <Card className="overflow-hidden border-0 shadow-card">
                    <CardContent className="p-0">
                      {/* Project Screenshots Carousel */}
                      <ProjectImageCarousel
                        images={project.screenshots}
                        alt={project.name}
                        className="p-3"
                      />

                      {/* Project Info */}
                      <div className="p-6 md:p-8 pt-4">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                          {project.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Ver projeto
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

        <div className="flex justify-center mt-10">
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity"
            asChild
          >
            <Link to="/projetos">
              Ver todos os projetos com detalhes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
