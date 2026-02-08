import { 
  Users, 
  CreditCard, 
  UserCheck, 
  Calendar, 
  LayoutDashboard 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Users,
    title: "Sistemas de Cadastro",
    description: "Organize clientes, fornecedores e contatos de forma simples e eficiente.",
  },
  {
    icon: CreditCard,
    title: "Controle de Pagamentos",
    description: "Gerencie entradas, saídas e cobranças com total visibilidade.",
  },
  {
    icon: UserCheck,
    title: "Gestão de Participantes",
    description: "Controle membros, usuários ou participantes do seu negócio.",
  },
  {
    icon: Calendar,
    title: "Agendamentos",
    description: "Confirmação de presença e gestão de agenda integrada.",
  },
  {
    icon: LayoutDashboard,
    title: "Painéis de Controle",
    description: "Visualize seus dados em dashboards simples e intuitivos.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que a GRPM faz
          </h2>
          <p className="text-muted-foreground text-lg">
            Criamos sistemas personalizados para resolver problemas do dia a dia de negócios, 
            substituindo planilhas, controles manuais e processos confusos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group border-0 shadow-card hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
