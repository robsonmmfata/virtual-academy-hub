import { ReactNode, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  FileText, 
  CheckSquare, 
  Calendar, 
  MessageSquare, 
  LogOut, 
  Menu, 
  X,
  GraduationCap,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface StudentLayoutProps {
  children: ReactNode;
}

const StudentLayout = ({ children }: StudentLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { name: "Aulas", href: "/student/classes", icon: BookOpen },
    { name: "Materiais", href: "/student/materials", icon: FileText },
    { name: "Tarefas", href: "/student/tasks", icon: CheckSquare },
    { name: "Cronograma", href: "/student/schedule", icon: Calendar },
    { name: "Mensagens", href: "/student/messages", icon: MessageSquare },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">EduVirtual</span>
          </Link>
          <button 
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col h-full">
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted mb-3">
              <User className="h-8 w-8 text-muted-foreground" />
              <div>
                <div className="font-medium text-sm">João Silva</div>
                <div className="text-xs text-muted-foreground">3º Ano - Ensino Médio</div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4">
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex-1 lg:ml-0 ml-4">
            <h1 className="text-xl font-semibold text-foreground">Portal do Aluno</h1>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;