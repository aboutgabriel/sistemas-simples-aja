import { Linkedin, Twitter, Facebook } from "lucide-react";
import grpmLogo from "@/assets/grpm-logo.png";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#investimento", label: "Investimento" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-8">
              <img
                src={grpmLogo}
                alt="GRPM"
                className="h-48 md:h-60 w-auto object-contain transition-transform duration-300 ease-out hover:scale-105 hover:opacity-90"
              />
            </div>

            <p className="text-white/60 text-sm mb-6 max-w-sm">
              Transformando planilhas em sistemas simples e eficientes para pequenas e médias empresas.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Entre em contato pelo formulário</p>
              <p>ou através das nossas redes sociais.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} GRPM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
