import { Link, useLocation } from "react-router-dom";
import { GraduationCap, LayoutDashboard, Users, BookOpen, BarChart3, Settings, MessageSquare, FileText } from "lucide-react";
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
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Gerenciar Alunos",
    url: "/admin/students",
    icon: Users,
  },
  {
    title: "Gerenciar Professores",
    url: "/admin/teachers",
    icon: GraduationCap,
  },
  {
    title: "Gerenciar Cursos",
    url: "/admin/courses",
    icon: BookOpen,
  },
  {
    title: "Relatórios",
    url: "/admin/reports",
    icon: BarChart3,
  },
  {
    title: "Comunicados",
    url: "/admin/announcements",
    icon: MessageSquare,
  },
  {
    title: "Documentos",
    url: "/admin/documents",
    icon: FileText,
  },
  {
    title: "Configurações",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            EduVirtual Admin
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