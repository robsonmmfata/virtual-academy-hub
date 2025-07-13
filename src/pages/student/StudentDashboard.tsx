import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  CheckSquare, 
  Clock, 
  Trophy, 
  TrendingUp,
  Calendar,
  MessageSquare,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const quickStats = [
    {
      title: "Aulas Assistidas",
      value: "24/30",
      percentage: 80,
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      title: "Tarefas Pendentes",
      value: "3",
      icon: CheckSquare,
      color: "text-orange-600"
    },
    {
      title: "Próximas Provas",
      value: "2",
      icon: Calendar,
      color: "text-red-600"
    },
    {
      title: "Mensagens",
      value: "5",
      icon: MessageSquare,
      color: "text-green-600"
    }
  ];

  const recentActivities = [
    {
      title: "Aula de Matemática - Funções Quadráticas",
      type: "Aula assistida",
      time: "Há 2 horas",
      status: "completed"
    },
    {
      title: "Tarefa de História - Revolução Industrial",
      type: "Tarefa entregue",
      time: "Ontem",
      status: "completed"
    },
    {
      title: "Simulado ENEM - Ciências da Natureza",
      type: "Prova agendada",
      time: "Amanhã, 14h",
      status: "pending"
    },
    {
      title: "Material de Física - Mecânica",
      type: "Novo material",
      time: "2 dias atrás",
      status: "new"
    }
  ];

  const upcomingClasses = [
    {
      subject: "Português",
      topic: "Análise Sintática",
      teacher: "Prof. Maria Oliveira",
      time: "14:00 - 15:30",
      date: "Hoje"
    },
    {
      subject: "Química",
      topic: "Ligações Químicas",
      teacher: "Prof. João Ferreira",
      time: "16:00 - 17:30",
      date: "Hoje"
    },
    {
      subject: "História",
      topic: "Segunda Guerra Mundial",
      teacher: "Prof. Carlos Santos",
      time: "09:00 - 10:30",
      date: "Amanhã"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Olá, João! 👋</h1>
        <p className="text-white/90">
          Bem-vindo de volta. Você tem 3 tarefas pendentes e 2 aulas para assistir hoje.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              {stat.percentage && (
                <Progress value={stat.percentage} className="mt-2" />
              )}
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
              Suas últimas atividades na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'completed' ? 'bg-green-500' :
                    activity.status === 'pending' ? 'bg-orange-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={
                        activity.status === 'completed' ? 'default' :
                        activity.status === 'pending' ? 'destructive' : 'secondary'
                      } className="text-xs">
                        {activity.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Próximas Aulas
            </CardTitle>
            <CardDescription>
              Suas aulas agendadas para hoje e amanhã
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((classItem, index) => (
                <div key={index} className="p-3 rounded-lg border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{classItem.subject}</h4>
                    <Badge variant="outline" className="text-xs">
                      {classItem.date}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{classItem.topic}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{classItem.teacher}</span>
                    <span>{classItem.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acesso Rápido</CardTitle>
          <CardDescription>
            Acesse rapidamente as principais funcionalidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/student/classes" className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-muted transition-colors">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Aulas</span>
            </Link>
            <Link to="/student/materials" className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-muted transition-colors">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Materiais</span>
            </Link>
            <Link to="/student/tasks" className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-muted transition-colors">
              <CheckSquare className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Tarefas</span>
            </Link>
            <Link to="/student/messages" className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-muted transition-colors">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Mensagens</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;