import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-7 w-7 text-primary" />
            <span className="text-xl sm:text-2xl font-heading font-bold">
              RedaLine<span className="text-primary">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("competencias")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Competências
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Planos
            </button>
            <Button
              className="gradient-hero shadow-medium hover:opacity-90 transition-opacity"
              onClick={() => window.open("https://redacao-ia.vercel.app/login", "_blank")}
            >
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-slide-up">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("competencias")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              Competências
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              Planos
            </button>
            <Button
              className="w-full gradient-hero"
              onClick={() => window.open("https://redacao-ia.vercel.app/login", "_blank")}
            >
              Começar Grátis
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
