import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckSquare, 
  Clock,
  Edit,
  MessageSquare,
  Eye,
  Download,
  Star
} from "lucide-react";

const ProfessorTasks = () => {
  const pendingTasks = [
    {
      id: 1,
      title: "Exercícios de Álgebra Linear",
      student: "João Silva",
      subject: "Matemática",
      submittedDate: "2024-01-20",
      dueDate: "2024-01-22",
      status: "pending",
      grade: null
    },
    {
      id: 2,
      title: "Relatório de Física Quântica",
      student: "Maria Santos",
      subject: "Física",
      submittedDate: "2024-01-19",
      dueDate: "2024-01-21",
      status: "pending",
      grade: null
    },
    {
      id: 3,
      title: "Redação ENEM",
      student: "Pedro Costa",
      subject: "Português",
      submittedDate: "2024-01-18",
      dueDate: "2024-01-20",
      status: "late",
      grade: null
    }
  ];

  const correctedTasks = [
    {
      id: 4,
      title: "Exercícios de Trigonometria",
      student: "Ana Oliveira",
      subject: "Matemática",
      submittedDate: "2024-01-15",
      correctedDate: "2024-01-17",
      status: "corrected",
      grade: 8.5
    },
    {
      id: 5,
      title: "Análise de Texto",
      student: "Carlos Lima",
      subject: "Português",
      submittedDate: "2024-01-14",
      correctedDate: "2024-01-16",
      status: "corrected",
      grade: 9.0
    }
  ];

  const stats = [
    {
      title: "Tarefas Pendentes",
      value: "12",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      title: "Corrigidas Hoje",
      value: "8",
      icon: CheckSquare,
      color: "text-green-600"
    },
    {
      title: "Média das Notas",
      value: "8.2",
      icon: Star,
      color: "text-yellow-600"
    }
  ];

  const handleGradeTask = (taskId: number, grade: number) => {
    console.log(`Tarefa ${taskId} recebeu nota ${grade}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Corrigir Tarefas</h1>
          <p className="text-muted-foreground">Gerencie e corrija as tarefas dos alunos</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pending Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Tarefas Pendentes
          </CardTitle>
          <CardDescription>
            Tarefas que aguardam correção
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingTasks.map((task) => (
              <div key={task.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium">{task.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {task.student} • {task.subject}
                    </p>
                  </div>
                  <Badge variant={task.status === 'late' ? 'destructive' : 'secondary'}>
                    {task.status === 'late' ? 'Atrasado' : 'Pendente'}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                  <span>Entregue em: {task.submittedDate}</span>
                  <span>Prazo: {task.dueDate}</span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Visualizar
                  </Button>
                  <Button size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Corrigir
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Feedback
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Corrected Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5" />
            Tarefas Corrigidas
          </CardTitle>
          <CardDescription>
            Tarefas já corrigidas recentemente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {correctedTasks.map((task) => (
              <div key={task.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium">{task.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {task.student} • {task.subject}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">Corrigido</Badge>
                    <Badge variant="secondary">Nota: {task.grade}</Badge>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                  <span>Entregue em: {task.submittedDate}</span>
                  <span>Corrigido em: {task.correctedDate}</span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Visualizar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Editar Nota
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Feedback
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessorTasks;