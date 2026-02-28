import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import headerLogo from "@/assets/grpm-logo.png";

const navLinks = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img
            src={headerLogo}
            alt="ThinkUp"
            className="h-10 md:h-14 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Button
          className="hidden md:inline-flex rounded-full px-5 gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity"
          onClick={() => scrollToSection("#contato")}
        >
          Fale Conosco
        </Button>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-b border-border py-4">
          <div className="container flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </button>
            ))}

            <Button
              className="rounded-full gradient-primary text-primary-foreground w-full mt-2 hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection("#contato")}
            >
              Fale Conosco
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
