import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Comece Hoje Sua Jornada Para Nota 1000</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Pronto Para Alcançar a Nota Máxima no ENEM?
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl mb-8 text-white/90 leading-relaxed">
            Junte-se a milhares de estudantes que já melhoraram suas redações com RedaLine AI.
            Comece seu teste gratuito agora e veja a diferença!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl text-base sm:text-lg px-8 py-6 group font-bold"
              onClick={() => window.open("https://redacao-ia.vercel.app/login", "_blank")}
            >
              Começar Teste Grátis de 7 Dias
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-white/80">
            ✓ Sem cartão de crédito necessário ✓ Cancele quando quiser ✓ Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
