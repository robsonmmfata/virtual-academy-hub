import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  CheckSquare, 
  MessageSquare,
  Calendar,
  Upload,
  FileText,
  TrendingUp,
  Clock
} from "lucide-react";

const ProfessorDashboard = () => {
  const stats = [
    {
      title: "Minhas Turmas",
      value: "8",
      description: "Turmas ativas",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Alunos Total",
      value: "156",
      description: "Em todas as turmas",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Aulas Publicadas",
      value: "24",
      description: "Este mês",
      icon: BookOpen,
      color: "text-purple-600"
    },
    {
      title: "Tarefas Pendentes",
      value: "12",
      description: "Para correção",
      icon: CheckSquare,
      color: "text-orange-600"
    }
  ];

  const myClasses = [
    {
      subject: "Matemática - 1º Ano",
      students: 28,
      nextClass: "Hoje, 14:00",
      topic: "Funções Quadráticas",
      status: "active"
    },
    {
      subject: "Matemática - 2º Ano",
      students: 32,
      nextClass: "Amanhã, 10:00",
      topic: "Logaritmos",
      status: "active"
    },
    {
      subject: "Física - 3º Ano",
      students: 25,
      nextClass: "Quarta, 16:00",
      topic: "Mecânica Quântica",
      status: "active"
    }
  ];

  const recentActivities = [
    {
      title: "Tarefa entregue",
      description: "João Silva entregou exercícios de álgebra",
      time: "5 min atrás",
      type: "submission"
    },
    {
      title: "Mensagem recebida",
      description: "Maria Santos enviou uma dúvida sobre física",
      time: "15 min atrás",
      type: "message"
    },
    {
      title: "Aula assistida",
      description: "25 alunos assistiram a aula de funções",
      time: "1 hora atrás",
      type: "class"
    },
    {
      title: "Material baixado",
      description: "PDF de exercícios foi baixado 42 vezes",
      time: "2 horas atrás",
      type: "download"
    }
  ];

  const upcomingTasks = [
    {
      title: "Corrigir provas de Matemática",
      deadline: "Hoje",
      priority: "high",
      count: "18 provas"
    },
    {
      title: "Preparar aula de Física",
      deadline: "Amanhã",
      priority: "medium",
      count: "Mecânica"
    },
    {
      title: "Enviar notas do bimestre",
      deadline: "Sexta-feira",
      priority: "high",
      count: "3 turmas"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Bem-vindo, Prof. Ana! 👩‍🏫</h1>
        <p className="text-white/90">
          Você tem 12 tarefas para corrigir e 3 aulas agendadas para hoje.
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
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Minhas Turmas
            </CardTitle>
            <CardDescription>
              Suas turmas ativas e próximas aulas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myClasses.map((classItem, index) => (
                <div key={index} className="p-3 rounded-lg border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{classItem.subject}</h4>
                    <Badge variant="secondary">
                      {classItem.students} alunos
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{classItem.topic}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>Próxima aula: {classItem.nextClass}</span>
                    <Badge variant="outline" className="text-xs">
                      {classItem.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Atividades Recentes
            </CardTitle>
            <CardDescription>
              Últimas atividades dos seus alunos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'submission' ? 'bg-green-500' :
                    activity.type === 'message' ? 'bg-blue-500' :
                    activity.type === 'class' ? 'bg-purple-500' : 'bg-orange-500'
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
      </div>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Tarefas Pendentes
          </CardTitle>
          <CardDescription>
            Suas próximas tarefas e prazos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div className="flex-1">
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-sm text-muted-foreground">{task.count}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={task.priority === 'high' ? 'destructive' : 'secondary'}>
                    {task.deadline}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>
            Acesse rapidamente as principais funcionalidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col gap-2" onClick={() => window.location.href = '/professor/upload'}>
              <Upload className="h-5 w-5" />
              <span className="text-sm">Enviar Conteúdo</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2" onClick={() => window.location.href = '/professor/tasks'}>
              <CheckSquare className="h-5 w-5" />
              <span className="text-sm">Corrigir Tarefas</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <MessageSquare className="h-5 w-5" />
              <span className="text-sm">Mensagens</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <FileText className="h-5 w-5" />
              <span className="text-sm">Relatórios</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessorDashboard;