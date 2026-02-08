const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#investimento", label: "Investimento" },
  { href: "#contato", label: "Contato" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl">GRPM</span>
            </div>
            <p className="text-background/70 text-sm">
              Transformando planilhas em sistemas simples e eficientes para pequenas e médias empresas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>Entre em contato pelo formulário</p>
              <p>ou através das nossas redes sociais.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} GRPM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
