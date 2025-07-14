import { Link, useLocation } from "react-router-dom";
import { GraduationCap, LayoutDashboard, Users, Upload, CheckSquare, MessageSquare, BarChart3, Calendar } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/professor",
    icon: LayoutDashboard,
  },
  {
    title: "Minhas Turmas",
    url: "/professor/classes",
    icon: Users,
  },
  {
    title: "Enviar Conteúdo",
    url: "/professor/upload",
    icon: Upload,
  },
  {
    title: "Corrigir Tarefas",
    url: "/professor/tasks",
    icon: CheckSquare,
  },
  {
    title: "Mensagens",
    url: "/professor/messages",
    icon: MessageSquare,
  },
  {
    title: "Cronograma",
    url: "/professor/schedule",
    icon: Calendar,
  },
  {
    title: "Desempenho",
    url: "/professor/performance",
    icon: BarChart3,
  },
];

export function ProfessorSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            EduVirtual Professor
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}