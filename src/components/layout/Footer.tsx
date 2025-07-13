import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl">EduVirtual</span>
            </div>
            <p className="text-gray-300">
              Educação de qualidade, onde você estiver. Transformando o futuro através do ensino virtual.
            </p>
          </div>

          {/* Quick Links */}
            <div className="space-y-4">
            <h3 className="font-semibold text-white">Links Úteis</h3> 
            <div className="flex flex-col gap-2">
              <a href="#sobre" className="text-gray-300 hover:text-accent transition-colors">
                Sobre Nós
              </a>
              <a href="#estrutura" className="text-gray-300 hover:text-accent transition-colors">
                Metodologia
              </a>
              <Link to="/login" className="text-gray-300 hover:text-accent transition-colors">
                Portal do Aluno
              </Link>
              <Link to="/professor" className="text-gray-300 hover:text-accent transition-colors">
                Portal do Professor
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contato</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>contato@eduvirtual.edu.br</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors transform hover:scale-110">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EduVirtual. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;