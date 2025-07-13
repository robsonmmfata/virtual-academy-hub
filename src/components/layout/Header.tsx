import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Estrutura de Ensino", href: "#estrutura" },
    { name: "Equipe", href: "#equipe" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl text-foreground">EduVirtual</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">Entrar</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Entrar
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;