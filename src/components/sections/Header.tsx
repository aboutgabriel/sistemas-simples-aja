import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import grpmLogo from "@/assets/grpm-logo.png";

const navLinks = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img src={grpmLogo} alt="GRPM" className="h-18 md:h-24 w-auto object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Button
          className="hidden md:inline-flex gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity"
          onClick={() => scrollToSection("#contato")}
        >
          Fale Conosco
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border py-4">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="gradient-primary text-primary-foreground w-full mt-2"
              onClick={() => scrollToSection("#contato")}
            >
              Fale Conosco
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
