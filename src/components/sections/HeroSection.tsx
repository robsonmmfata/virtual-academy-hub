import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Background Pattern & Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-300"></div>

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
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg shadow-large">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 text-lg"
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