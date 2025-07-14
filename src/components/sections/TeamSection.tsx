import { Card, CardContent } from "@/components/ui/card";
import { Mail, Star } from "lucide-react";
import profAnaImage from "@/assets/prof-ana.jpg";

const TeamSection = () => {
  const teachers = [
    {
      name: "Prof. Ana Silva",
      subject: "Matemática e Física",
      image: profAnaImage,
      experience: "12 anos de experiência",
      rating: 4.9,
      description: "Especialista em preparação para vestibulares, com foco em metodologias ativas."
    },
    {
      name: "Prof. Carlos Santos",
      subject: "História e Geografia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "15 anos de experiência",
      rating: 4.8,
      description: "Mestre em História, especializado em ENEM e vestibulares militares."
    },
    {
      name: "Prof. Maria Oliveira",
      subject: "Português e Literatura",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: "10 anos de experiência",
      rating: 5.0,
      description: "Doutora em Letras, focada em redação e interpretação de textos."
    },
    {
      name: "Prof. João Ferreira",
      subject: "Química e Biologia",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "8 anos de experiência",
      rating: 4.9,
      description: "Biomédico e professor, especialista em ciências da natureza."
    },
    {
      name: "Prof. Laura Costa",
      subject: "Inglês e Espanhol",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      experience: "7 anos de experiência",
      rating: 4.8,
      description: "Poliglota com certificações internacionais, foco em conversação."
    },
    {
      name: "Prof. Ricardo Lima",
      subject: "Filosofia e Sociologia",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      experience: "11 anos de experiência",
      rating: 4.9,
      description: "PhD em Filosofia, especializado em pensamento crítico e redação."
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Equipe Pedagógica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professores especializados e dedicados, comprometidos com o seu sucesso acadêmico. 
            Cada um com vasta experiência e paixão pelo ensino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{teacher.name}</h3>
                    <p className="text-primary font-medium">{teacher.subject}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{teacher.experience}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{teacher.rating}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {teacher.description}
                  </p>

                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm font-medium">Enviar mensagem</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-muted-foreground">Professores Especialistas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">4.9</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">120+</div>
            <div className="text-muted-foreground">Horas de Formação/Mês</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação dos Alunos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;