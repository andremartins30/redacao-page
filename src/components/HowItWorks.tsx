import { Upload, Brain, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. Envie sua redação",
      description: "Cole o texto da sua redação ou faça upload. Rápido e simples.",
      color: "primary",
    },
    {
      icon: Brain,
      title: "2. IA analisa 5 competências",
      description:
        "Nossa IA avalia cada competência do ENEM com precisão de banca examinadora.",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "3. Receba feedback completo",
      description:
        "Nota estimada, pontos fortes, erros detalhados e sugestões de melhoria em 30s.",
      color: "accent",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Como Funciona?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para melhorar sua redação e aumentar sua nota
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClass =
              step.color === "primary"
                ? "from-primary to-primary-dark"
                : step.color === "secondary"
                ? "from-secondary to-purple-600"
                : "from-accent to-cyan-600";

            return (
              <div
                key={index}
                className="relative text-center animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                {/* Icon Circle */}
                <div className="relative mb-6 inline-block">
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-large group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
