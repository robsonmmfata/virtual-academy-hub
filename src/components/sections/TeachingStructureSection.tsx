import { BookOpen, Users, Video, Clock, Award, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TeachingStructureSection = () => {
  const features = [
    {
      icon: Video,
      title: "Aulas Interativas",
      description: "Videoaulas dinâmicas com professores especializados, disponíveis 24/7 para você assistir quando quiser."
    },
    {
      icon: BookOpen,
      title: "Material Didático",
      description: "Apostilas digitais atualizadas, exercícios práticos e simulados para fixar o conteúdo."
    },
    {
      icon: Users,
      title: "Turmas Reduzidas",
      description: "Classes com poucos alunos para garantir atenção personalizada e melhor aproveitamento."
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Estude no seu ritmo, no horário que preferir, de qualquer lugar com internet."
    },
    {
      icon: Award,
      title: "Preparação ENEM",
      description: "Foco especial na preparação para ENEM e vestibulares, com simulados semanais."
    },
    {
      icon: Headphones,
      title: "Suporte Pedagógico",
      description: "Acompanhamento individual com tutores para tirar dúvidas e orientar seus estudos."
    }
  ];

  return (
    <section id="estrutura" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Estrutura de Ensino
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Metodologia comprovada que combina tecnologia, flexibilidade e excelência acadêmica 
            para garantir seu sucesso educacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 shadow-large max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para começar sua jornada?
              </h3>
              <p className="text-white/90 mb-6">
                Junte-se a centenas de estudantes que já estão construindo seu futuro conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Conhecer Planos
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Agendar Demonstração
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingStructureSection;