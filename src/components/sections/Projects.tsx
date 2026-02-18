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
import euIndicoScreenshot from "@/assets/eu-indico-1.jpeg";
import babaBacanaScreenshot from "@/assets/baba-bacana-2.jpeg";
import agendaCarnavalScreenshot from "@/assets/agenda-carnaval-1.jpeg";

const projects = [
  {
    name: "Eu Indico",
    description: "Plataforma de indicação de profissionais para condomínios",
    link: "https://euindicoprof.lovable.app/",
    screenshot: euIndicoScreenshot,
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
    screenshot: babaBacanaScreenshot,
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
    screenshot: agendaCarnavalScreenshot,
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

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.name} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="overflow-hidden border-0 shadow-card">
                    <CardContent className="p-0">
                      {/* Project Screenshot */}
                      <div className="h-48 md:h-64 relative overflow-hidden">
                        <img 
                          src={project.screenshot} 
                          alt={`Screenshot do projeto ${project.name}`}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* Project Info */}
                      <div className="p-6 md:p-8">
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
