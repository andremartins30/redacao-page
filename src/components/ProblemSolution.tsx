import { AlertCircle, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Problem */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center space-x-2 text-destructive">
              <AlertCircle className="h-6 w-6" />
              <span className="font-semibold text-lg">O Problema</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Redação vale 20% da nota do ENEM
            </h2>
            <ul className="space-y-4 text-muted-foreground text-lg">
              <li className="flex items-start space-x-3">
                <span className="text-destructive mt-1">✗</span>
                <span>Professores particulares cobram R$50-100 por correção</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-destructive mt-1">✗</span>
                <span>Demora dias ou semanas para receber feedback</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-destructive mt-1">✗</span>
                <span>Difícil acompanhar evolução e identificar padrões de erros</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-destructive mt-1">✗</span>
                <span>Sem garantia de correção baseada nos critérios oficiais</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 rounded-2xl shadow-medium animate-slide-up">
            <div className="inline-flex items-center space-x-2 text-success">
              <CheckCircle2 className="h-6 w-6" />
              <span className="font-semibold text-lg">A Solução</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              RedaLine AI revoluciona sua preparação
            </h2>
            <ul className="space-y-4 text-foreground text-lg">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Correção instantânea</strong> em menos de 30 segundos
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Análise completa</strong> das 5 competências do ENEM
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Feedback detalhado</strong> como banca examinadora oficial
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Preço acessível</strong> - corrija quantas redações quiser
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
