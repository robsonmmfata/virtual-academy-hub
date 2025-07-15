import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Users, BookOpen, Clock, Download, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProfessorPerformance = () => {
  const stats = [
    {
      title: "Total de Alunos",
      value: "127",
      change: "+8%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Taxa de Aprovação",
      value: "94%",
      change: "+3%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Aulas Ministradas",
      value: "56",
      change: "+12",
      icon: BookOpen,
      color: "text-purple-600"
    },
    {
      title: "Horas de Ensino",
      value: "168h",
      change: "+24h",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const classPerformance = [
    {
      class: "3º Ano A",
      subject: "Matemática",
      students: 25,
      average: 8.5,
      attendance: 92,
      completion: 88
    },
    {
      class: "3º Ano B",
      subject: "Matemática",
      students: 22,
      average: 7.8,
      attendance: 89,
      completion: 85
    },
    {
      class: "2º Ano A",
      subject: "Matemática",
      students: 28,
      average: 8.2,
      attendance: 95,
      completion: 91
    }
  ];

  const recentActivities = [
    {
      activity: "Correção de prova - 3º Ano A",
      date: "15/01/2024",
      status: "completed"
    },
    {
      activity: "Publicação de material - Funções",
      date: "14/01/2024",
      status: "completed"
    },
    {
      activity: "Aula ao vivo - Progressões",
      date: "13/01/2024",
      status: "completed"
    },
    {
      activity: "Feedback de alunos - Pendente",
      date: "12/01/2024",
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Desempenho</h1>
          <p className="text-muted-foreground">Acompanhe suas métricas e resultados</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Esta Semana</SelectItem>
              <SelectItem value="month">Este Mês</SelectItem>
              <SelectItem value="quarter">Este Trimestre</SelectItem>
              <SelectItem value="year">Este Ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Estatísticas Gerais */}
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
                <span className="text-green-600">{stat.change}</span> em relação ao período anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Desempenho por Turma */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Desempenho por Turma
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {classPerformance.map((classData, index) => (
                <div key={index} className="p-4 rounded-lg border border-border">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">{classData.class}</h4>
                      <p className="text-sm text-muted-foreground">{classData.subject}</p>
                    </div>
                    <Badge variant="outline">{classData.students} alunos</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Média da Turma</span>
                      <span className="font-medium">{classData.average}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Frequência</span>
                      <span className="font-medium">{classData.attendance}%</span>
                    </div>
                    <Progress value={classData.attendance} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span>Taxa de Conclusão</span>
                      <span className="font-medium">{classData.completion}%</span>
                    </div>
                    <Progress value={classData.completion} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Atividades Recentes */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                    <div>
                      <p className="font-medium text-sm">{activity.activity}</p>
                      <p className="text-xs text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                  <Badge variant={activity.status === 'completed' ? 'default' : 'secondary'}>
                    {activity.status === 'completed' ? 'Concluída' : 'Pendente'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Progresso Mensal */}
      <Card>
        <CardHeader>
          <CardTitle>Progresso Mensal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Gráfico de desempenho mensal</p>
              <p className="text-sm text-muted-foreground">Dados de janeiro de 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessorPerformance;