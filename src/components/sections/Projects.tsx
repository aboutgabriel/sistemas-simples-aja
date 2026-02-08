import { ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    name: "Baba do Bacana",
    description: "Sistema para organização de grupo esportivo",
    link: "https://babadobacana.lovable.app/",
    features: [
      "Controle de participantes",
      "Confirmação de presença",
      "Gestão de pagamentos",
      "Interface mobile-first",
    ],
    gradient: "from-primary to-primary-dark",
  },
  {
    name: "Eu Indico Prof",
    description: "Plataforma de indicação de profissionais",
    link: "https://euindicoprof.lovable.app/",
    features: [
      "Cadastro de perfis",
      "Fluxo de indicação",
      "Interface intuitiva",
      "Busca rápida",
    ],
    gradient: "from-primary-light to-primary",
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
                      {/* Project Preview Placeholder */}
                      <div className={`h-48 md:h-64 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="relative text-center text-white">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                            <span className="text-2xl font-bold">
                              {project.name.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm opacity-80">Preview do projeto</span>
                        </div>
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
      </div>
    </section>
  );
};

export default Projects;
