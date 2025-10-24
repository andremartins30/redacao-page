import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina Silva",
      role: "Estudante ENEM 2024",
      image: "👩‍🎓",
      rating: 5,
      text: "Usei o RedaLine AI durante 3 meses e minha nota de redação subiu de 700 para 920! O feedback é muito detalhado e me ajudou a entender exatamente onde eu estava errando.",
    },
    {
      name: "Pedro Henrique Santos",
      role: "Aprovado em Medicina",
      image: "👨‍⚕️",
      rating: 5,
      text: "A correção é tão precisa quanto a de um professor particular, mas muito mais rápida e acessível. Pratiquei 2 redações por semana e fez toda a diferença!",
    },
    {
      name: "Julia Mendes",
      role: "Estudante Pré-Vestibular",
      image: "👩‍💼",
      rating: 5,
      text: "Adorei poder acompanhar minha evolução ao longo do tempo. Os gráficos me ajudaram a identificar minhas dificuldades e focar nos pontos certos.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            O Que Estudantes Dizem
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Milhares de estudantes já melhoraram suas notas com RedaLine AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 shadow-soft hover:shadow-medium transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10.000+</div>
            <div className="text-muted-foreground">Redações Corrigidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">4.9★</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Precisão da IA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-success mb-2">30s</div>
            <div className="text-muted-foreground">Tempo Médio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
