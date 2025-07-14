import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  TrendingUp,
  MessageSquare,
  Settings,
  BarChart3,
  Calendar
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total de Alunos",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Professores Ativos",
      value: "25",
      change: "+2",
      icon: GraduationCap,
      color: "text-green-600"
    },
    {
      title: "Cursos Disponíveis",
      value: "18",
      change: "+3",
      icon: BookOpen,
      color: "text-purple-600"
    },
    {
      title: "Taxa de Conclusão",
      value: "87%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const recentActivities = [
    {
      title: "Novo aluno cadastrado",
      description: "Maria Silva se inscreveu no curso de Matemática",
      time: "5 min atrás",
      type: "student"
    },
    {
      title: "Aula publicada",
      description: "Prof. Ana publicou nova aula de Física",
      time: "30 min atrás",
      type: "content"
    },
    {
      title: "Feedback recebido",
      description: "Avaliação 5 estrelas para o curso de Química",
      time: "1 hora atrás",
      type: "feedback"
    },
    {
      title: "Sistema atualizado",
      description: "Nova versão da plataforma implantada",
      time: "2 horas atrás",
      type: "system"
    }
  ];

  const upcomingEvents = [
    {
      title: "Reunião Pedagógica",
      time: "14:00 - 16:00",
      date: "Hoje",
      type: "meeting"
    },
    {
      title: "Webinar para Professores",
      time: "10:00 - 11:30",
      date: "Amanhã",
      type: "training"
    },
    {
      title: "Manutenção do Sistema",
      time: "02:00 - 04:00",
      date: "Sábado",
      type: "maintenance"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Painel Administrativo</h1>
        <p className="text-white/90">
          Bem-vindo ao centro de controle da EduVirtual. Gerencie alunos, professores e monitore o desempenho.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> em relação ao mês passado
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Atividades Recentes
            </CardTitle>
            <CardDescription>
              Últimas atividades na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'student' ? 'bg-blue-500' :
                    activity.type === 'content' ? 'bg-green-500' :
                    activity.type === 'feedback' ? 'bg-yellow-500' : 'bg-purple-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.description}</p>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Próximos Eventos
            </CardTitle>
            <CardDescription>
              Eventos agendados para os próximos dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 rounded-lg border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{event.title}</h4>
                    <Badge variant={
                      event.type === 'meeting' ? 'default' :
                      event.type === 'training' ? 'secondary' : 'destructive'
                    }>
                      {event.date}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>
            Acesse rapidamente as principais funcionalidades administrativas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col gap-2" onClick={() => window.location.href = '/admin/students'}>
              <Users className="h-5 w-5" />
              <span className="text-sm">Gerenciar Alunos</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2" onClick={() => window.location.href = '/admin/teachers'}>
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm">Gerenciar Professores</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm">Gerenciar Cursos</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2" onClick={() => window.location.href = '/admin/announcements'}>
              <MessageSquare className="h-5 w-5" />
              <span className="text-sm">Comunicados</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm">Relatórios</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Settings className="h-5 w-5" />
              <span className="text-sm">Configurações</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;