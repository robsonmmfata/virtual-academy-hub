import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Educação de qualidade
            <span className="block text-accent">onde você estiver</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Prepare-se para o futuro com nossa plataforma de ensino médio 100% virtual. 
            Metodologia inovadora, professores qualificados e flexibilidade total.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Assistir Apresentação
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-white/80">Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">25+</div>
              <div className="text-white/80">Professores Especializados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-white/80">Aprovação no ENEM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;