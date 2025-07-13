import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    "Ensino 100% online com qualidade presencial",
    "Horários flexíveis para estudar quando quiser",
    "Professores especializados e dedicados",
    "Plataforma moderna e intuitiva",
    "Suporte pedagógico personalizado",
    "Preparação completa para ENEM e vestibulares"
  ];

  return (
    <section id="sobre" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sobre a EduVirtual
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos uma escola de ensino médio 100% virtual, comprometida em oferecer 
                educação de excelência com a flexibilidade que você precisa. Nossa metodologia 
                inovadora combina tecnologia de ponta com o melhor da pedagogia tradicional.
              </p>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Há mais de 5 anos transformamos a vida de estudantes em todo o Brasil, 
                oferecendo uma experiência educacional completa, personalizada e acessível. 
                Nossos alunos têm a liberdade de estudar no seu ritmo, sem abrir mão da 
                qualidade do ensino.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center"
                alt="Estudante usando tecnologia para estudar"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 hero-gradient opacity-20"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-medium border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;