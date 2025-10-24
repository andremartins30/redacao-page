import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Essencial",
      price: "19",
      description: "Ideal para quem está começando a praticar",
      features: [
        "15 correções por mês",
        "Análise das 5 competências",
        "Nota estimada por competência",
        "Suporte básico por email",
      ],
      cta: "Começar Teste Grátis",
      highlighted: false,
    },
    {
      name: "Profissional",
      price: "39",
      description: "Perfeito para preparação intensiva",
      badge: "Mais Popular",
      features: [
        "50 correções por mês",
        "Análise completa + sugestões",
        "Relatórios de progresso",
        "Histórico de evolução",
        "Suporte prioritário",
      ],
      cta: "Começar Teste Grátis",
      highlighted: true,
    },
    {
      name: "Intensivo",
      price: "69",
      description: "Para quem busca nota 1000",
      features: [
        "Correções ilimitadas",
        "Análise avançada com repertório",
        "Sugestões personalizadas de melhoria",
        "Banco de redações modelo",
        "Suporte VIP por WhatsApp",
      ],
      cta: "Começar Teste Grátis",
      highlighted: false,
    },
  ];

  return (
    <section id="planos" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Planos Para Sua Aprovação
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para acelerar sua preparação. Teste grátis por 7 dias!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.highlighted
                  ? "border-2 border-primary shadow-large scale-105 md:scale-110"
                  : "border-2 hover:border-primary/30 shadow-soft hover:shadow-medium"
              } transition-all animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center space-x-1 gradient-hero text-white px-4 py-1 rounded-full text-sm font-semibold shadow-medium">
                    <Sparkles className="h-4 w-4" />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              <CardHeader className={plan.highlighted ? "pt-8" : ""}>
                <CardTitle className="text-2xl font-heading mb-2">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl sm:text-5xl font-bold">R$ {plan.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "gradient-hero shadow-medium"
                      : "bg-foreground hover:bg-foreground/90"
                  }`}
                  size="lg"
                  onClick={() => window.open("https://redacao-ia.vercel.app/login", "_blank")}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground">
            <CheckCircle2 className="inline h-5 w-5 text-success mr-2" />
            Teste grátis por 7 dias • Cancele quando quiser • Garantia de satisfação
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
