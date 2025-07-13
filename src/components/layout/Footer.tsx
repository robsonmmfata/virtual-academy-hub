import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">EduVirtual</span>
            </div>
            <p className="text-muted-foreground">
              Educação de qualidade, onde você estiver. Transformando o futuro através do ensino virtual.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Úteis</h3>
            <div className="flex flex-col gap-2">
              <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre Nós
              </a>
              <a href="#estrutura" className="text-muted-foreground hover:text-foreground transition-colors">
                Metodologia
              </a>
              <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                Portal do Aluno
              </Link>
              <Link to="/professor" className="text-muted-foreground hover:text-foreground transition-colors">
                Portal do Professor
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@eduvirtual.edu.br</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 EduVirtual. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;