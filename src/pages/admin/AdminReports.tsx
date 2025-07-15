import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, TrendingUp, Users, BookOpen, Download, FileText, Calendar, Filter } from "lucide-react";


const AdminReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedReport, setSelectedReport] = useState("overview");

  const reportTypes = [
    { value: "overview", label: "Visão Geral" },
    { value: "students", label: "Relatório de Alunos" },
    { value: "teachers", label: "Relatório de Professores" },
    { value: "courses", label: "Relatório de Cursos" },
    { value: "financial", label: "Relatório Financeiro" },
    { value: "performance", label: "Relatório de Desempenho" }
  ];

  const overviewStats = [
    {
      title: "Total de Acessos",
      value: "15.247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Novos Cadastros",
      value: "324",
      change: "+8%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Cursos Concluídos",
      value: "89",
      change: "+15%",
      icon: BookOpen,
      color: "text-purple-600"
    },
    {
      title: "Taxa de Satisfação",
      value: "96%",
      change: "+2%",
      icon: BarChart3,
      color: "text-orange-600"
    }
  ];

  const recentReports = [
    {
      name: "Relatório Mensal - Janeiro 2024",
      type: "Geral",
      date: "31/01/2024",
      status: "Concluído",
      size: "2.4 MB"
    },
    {
      name: "Análise de Desempenho - Q4 2023",
      type: "Performance",
      date: "15/01/2024",
      status: "Concluído",
      size: "1.8 MB"
    },
    {
      name: "Relatório Financeiro - Dezembro",
      type: "Financeiro",
      date: "05/01/2024",
      status: "Processando",
      size: "-"
    },
    {
      name: "Estatísticas de Uso - Semana 3",
      type: "Uso",
      date: "22/01/2024",
      status: "Concluído",
      size: "986 KB"
    }
  ];

  const quickStats = [
    { label: "Alunos Ativos", value: "1,247", trend: "+5%" },
    { label: "Professores", value: "25", trend: "+2" },
    { label: "Aulas Ministradas", value: "3,456", trend: "+12%" },
    { label: "Horas de Conteúdo", value: "8,923h", trend: "+8%" }
  ];

  const handleGenerateReport = () => {
    // Lógica para gerar relatório
    console.log(`Gerando relatório: ${selectedReport} para período: ${selectedPeriod}`);
  };

  const handleDownloadReport = (reportName) => {
    // Lógica para download
    console.log(`Baixando relatório: ${reportName}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Relatórios</h1>
          <p className="text-muted-foreground">Gere e acesse relatórios detalhados da plataforma</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros Avançados
          </Button>
          <Button onClick={handleGenerateReport}>
            <FileText className="h-4 w-4 mr-2" />
            Gerar Relatório
          </Button>
        </div>
      </div>

      {/* Configurações de Relatório */}
      <Card>
        <CardHeader>
          <CardTitle>Configurar Relatório</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Tipo de Relatório</label>
              <Select value={selectedReport} onValueChange={setSelectedReport}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Período</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Esta Semana</SelectItem>
                  <SelectItem value="month">Este Mês</SelectItem>
                  <SelectItem value="quarter">Este Trimestre</SelectItem>
                  <SelectItem value="year">Este Ano</SelectItem>
                  <SelectItem value="custom">Período Personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Formato</label>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
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
                <span className="text-green-600">{stat.change}</span> vs período anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Relatórios Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Relatórios Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{report.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">{report.type}</Badge>
                      <span className="text-xs text-muted-foreground">{report.date}</span>
                      {report.size && <span className="text-xs text-muted-foreground">({report.size})</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={report.status === "Concluído" ? "default" : "secondary"}>
                      {report.status}
                    </Badge>
                    {report.status === "Concluído" && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDownloadReport(report.name)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Métricas Detalhadas */}
        <Card>
          <CardHeader>
            <CardTitle>Métricas do Período</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="font-medium">{stat.label}</span>
                  <div className="text-right">
                    <div className="font-bold">{stat.value}</div>
                    <div className="text-sm text-green-600">{stat.trend}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Tendências */}
      <Card>
        <CardHeader>
          <CardTitle>Tendências e Análises</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Gráfico de tendências será exibido aqui</p>
              <p className="text-sm text-muted-foreground">Selecione um tipo de relatório para visualizar</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReports;