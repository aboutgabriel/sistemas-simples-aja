import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    problem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Apenas visual - simula o envio
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <Card className="max-w-lg mx-auto border-0 shadow-card">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Mensagem enviada!
              </h3>
              <p className="text-muted-foreground mb-6">
                Obrigado pelo contato! Vamos analisar sua necessidade e retornaremos em breve.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", company: "", contact: "", problem: "" });
                }}
              >
                Enviar outra mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground text-lg">
            Conte sobre sua necessidade e vamos encontrar a melhor solução para seu negócio.
          </p>
        </div>

        <Card className="max-w-lg mx-auto border-0 shadow-card">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nome da sua empresa"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">E-mail ou Telefone</Label>
                <Input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="Seu melhor contato"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem">Qual problema você quer resolver?</Label>
                <Textarea
                  id="problem"
                  name="problem"
                  placeholder="Descreva brevemente o que você gostaria de transformar em um sistema..."
                  value={formData.problem}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-all"
              >
                <span className="md:hidden">Enviar mensagem</span>
                <span className="hidden md:inline">Vamos conversar sobre sua necessidade</span>
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
