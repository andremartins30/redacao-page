import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Competencias = () => {
  const competencias = [
    {
      number: 1,
      title: "Domínio da Norma Culta",
      description:
        "Avaliação da gramática, ortografia, acentuação e pontuação segundo a norma padrão do português.",
      examples: ["Concordância verbal e nominal", "Regência", "Pontuação adequada"],
    },
    {
      number: 2,
      title: "Compreensão do Tema",
      description:
        "Análise do desenvolvimento do tema proposto dentro dos limites estruturais do texto dissertativo-argumentativo.",
      examples: ["Pertinência ao tema", "Tipo textual correto", "Sem fuga ou tangenciamento"],
    },
    {
      number: 3,
      title: "Argumentação",
      description:
        "Avaliação da seleção, organização e interpretação de informações, fatos e argumentos em defesa do ponto de vista.",
      examples: [
        "Dados e repertório sociocultural",
        "Argumentos consistentes",
        "Desenvolvimento lógico",
      ],
    },
    {
      number: 4,
      title: "Coesão Textual",
      description:
        "Análise dos mecanismos linguísticos que garantem a conexão entre as partes do texto e a progressão das ideias.",
      examples: ["Conectivos adequados", "Referências anafóricas", "Progressão temática"],
    },
    {
      number: 5,
      title: "Proposta de Intervenção",
      description:
        "Avaliação da proposta de solução para o problema abordado, respeitando os direitos humanos e sendo detalhada.",
      examples: [
        "Agente, ação, meio/modo",
        "Detalhamento da proposta",
        "Respeito aos direitos humanos",
      ],
    },
  ];

  return (
    <section id="competencias" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            As 5 Competências do ENEM
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa IA analisa cada competência em detalhes, fornecendo nota e feedback específicos
            para cada uma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {competencias.map((comp, index) => (
            <Card
              key={comp.number}
              className="border-2 hover:border-primary/50 transition-all shadow-soft hover:shadow-medium group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    {comp.number}
                  </div>
                  <CardTitle className="text-xl font-heading">{comp.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{comp.description}</p>
                <div className="space-y-2">
                  {comp.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{example}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* CTA Card */}
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 shadow-large hover:shadow-xl transition-all flex items-center justify-center animate-slide-up">
            <CardContent className="text-center py-12">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">Análise Completa</h3>
                <p className="text-muted-foreground mb-6">
                  Receba avaliação detalhada de todas as competências em uma única correção
                </p>
              </div>
              <button
                onClick={() => window.open("https://redacao-ia.vercel.app/login", "_blank")}
                className="inline-flex items-center px-6 py-3 rounded-lg gradient-hero text-white font-semibold shadow-medium hover:opacity-90 transition-opacity"
              >
                Testar Agora Grátis
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Competencias;
