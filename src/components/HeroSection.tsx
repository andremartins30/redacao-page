import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-subtle py-16 sm:py-24 lg:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-scale-in">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-sm font-medium">Baseado na Matriz Oficial do ENEM</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight animate-slide-up">
            Alcance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Nota Máxima
            </span>{" "}
            no ENEM
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Correção inteligente que analisa as{" "}
            <strong className="text-foreground">5 competências oficiais</strong> do ENEM.
            Feedback detalhado como banca examinadora em menos de 30 segundos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button
              size="lg"
              className="gradient-hero shadow-large hover:opacity-90 transition-opacity text-base sm:text-lg px-8 py-6 group"
              onClick={() => window.open("https://redacao-ia.vercel.app/login", "_blank")}
            >
              Começar Agora Grátis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-8 py-6 border-2 hover:bg-primary/5"
              onClick={() => {
                const element = document.getElementById("como-funciona");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Como Funciona
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>Correção em 30 segundos</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>Análise das 5 competências</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>Teste grátis por 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
