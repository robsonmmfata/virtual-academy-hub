import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckSquare, 
  Clock, 
  Search, 
  Filter, 
  AlertCircle, 
  CheckCircle,
  Calendar,
  FileText,
  Upload
} from "lucide-react";

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tasks = [
    {
      id: 1,
      title: "Exercícios de Matemática - Funções Quadráticas",
      subject: "Matemática",
      description: "Resolver lista de 15 exercícios sobre funções quadráticas",
      dueDate: "2024-01-25",
      status: "pending",
      priority: "high",
      points: 10,
      submissionType: "file"
    },
    {
      id: 2,
      title: "Redação - Texto Dissertativo Argumentativo",
      subject: "Português",
      description: "Produzir texto dissertativo sobre 'Tecnologia na Educação'",
      dueDate: "2024-01-28",
      status: "pending",
      priority: "medium",
      points: 15,
      submissionType: "text"
    },
    {
      id: 3,
      title: "Pesquisa sobre Segunda Guerra Mundial",
      subject: "História",
      description: "Elaborar relatório sobre as causas da Segunda Guerra Mundial",
      dueDate: "2024-01-20",
      status: "completed",
      priority: "low",
      points: 12,
      submissionType: "file",
      grade: 9.5,
      submittedDate: "2024-01-18"
    },
    {
      id: 4,
      title: "Laboratório Virtual - Reações Químicas",
      subject: "Química",
      description: "Completar experimentos virtuais sobre reações químicas",
      dueDate: "2024-01-30",
      status: "pending",
      priority: "medium",
      points: 8,
      submissionType: "online"
    },
    {
      id: 5,
      title: "Exercícios de Física - Cinemática",
      subject: "Física",
      description: "Resolver problemas sobre movimento uniforme e uniformemente variado",
      dueDate: "2024-01-22",
      status: "submitted",
      priority: "high",
      points: 10,
      submissionType: "file",
      submittedDate: "2024-01-21"
    }
  ];

  const pendingTasks = tasks.filter(task => task.status === "pending");
  const submittedTasks = tasks.filter(task => task.status === "submitted");
  const completedTasks = tasks.filter(task => task.status === "completed");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="h-4 w-4 text-orange-500" />;
      case "submitted": return <CheckSquare className="h-4 w-4 text-blue-500" />;
      case "completed": return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const TaskCard = ({ task }: { task: any }) => {
    const daysLeft = getDaysUntilDue(task.dueDate);
    
    return (
      <Card className="hover:shadow-medium transition-shadow">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              {getStatusIcon(task.status)}
              <Badge variant="secondary">{task.subject}</Badge>
            </div>
            <Badge className={getPriorityColor(task.priority)} variant="secondary">
              {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Média" : "Baixa"}
            </Badge>
          </div>
          <CardTitle className="text-lg">{task.title}</CardTitle>
          <CardDescription>{task.description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                Prazo: {new Date(task.dueDate).toLocaleDateString('pt-BR')}
              </div>
              <span className="font-medium text-primary">{task.points} pontos</span>
            </div>

            {task.status === "pending" && (
              <div className={`text-sm p-2 rounded ${
                daysLeft <= 2 ? 'bg-red-50 text-red-700' : 
                daysLeft <= 5 ? 'bg-yellow-50 text-yellow-700' : 
                'bg-green-50 text-green-700'
              }`}>
                {daysLeft === 0 ? "Vence hoje!" : 
                 daysLeft < 0 ? `Atrasado por ${Math.abs(daysLeft)} dias` :
                 `${daysLeft} dias restantes`}
              </div>
            )}

            {task.status === "completed" && task.grade && (
              <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                <span className="text-sm text-green-700">Nota:</span>
                <span className="font-bold text-green-800">{task.grade}/10</span>
              </div>
            )}

            {task.submittedDate && (
              <div className="text-sm text-muted-foreground">
                Enviado em {new Date(task.submittedDate).toLocaleDateString('pt-BR')}
              </div>
            )}

            <div className="flex gap-2">
              {task.status === "pending" && (
                <>
                  <Button size="sm" className="flex-1">
                    <Upload className="h-4 w-4 mr-2" />
                    Enviar Tarefa
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </>
              )}
              {task.status === "submitted" && (
                <Button variant="outline" size="sm" className="w-full">
                  Aguardando Correção
                </Button>
              )}
              {task.status === "completed" && (
                <Button variant="outline" size="sm" className="w-full">
                  Ver Feedback
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tarefas</h1>
          <p className="text-muted-foreground">
            Gerencie suas tarefas e acompanhe o progresso
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar tarefas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">{pendingTasks.length}</div>
                <div className="text-sm text-muted-foreground">Pendentes</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">{submittedTasks.length}</div>
                <div className="text-sm text-muted-foreground">Enviadas</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <div className="text-2xl font-bold">{completedTasks.length}</div>
                <div className="text-sm text-muted-foreground">Concluídas</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div>
                <div className="text-2xl font-bold">
                  {tasks.filter(task => getDaysUntilDue(task.dueDate) <= 2 && task.status === "pending").length}
                </div>
                <div className="text-sm text-muted-foreground">Urgentes</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks Tabs */}
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pendentes ({pendingTasks.length})</TabsTrigger>
          <TabsTrigger value="submitted">Enviadas ({submittedTasks.length})</TabsTrigger>
          <TabsTrigger value="completed">Concluídas ({completedTasks.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {pendingTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
          {pendingTasks.length === 0 && (
            <div className="text-center py-12">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Todas as tarefas em dia!
              </h3>
              <p className="text-muted-foreground">
                Você não tem tarefas pendentes no momento.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="submitted" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {submittedTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {completedTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tasks;