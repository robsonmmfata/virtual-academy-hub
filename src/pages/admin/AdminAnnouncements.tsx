import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  MessageSquare, 
  Send,
  Plus,
  Edit,
  Trash2,
  Users,
  Clock,
  Eye
} from "lucide-react";

const AdminAnnouncements = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [recipients, setRecipients] = useState("all");
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Início do Período Letivo 2024",
      content: "Informamos que as aulas do primeiro semestre de 2024 iniciarão no dia 15/02/2024...",
      date: "2024-01-15",
      author: "Secretaria",
      recipients: "Todos os alunos",
      status: "sent",
      views: 847
    },
    {
      id: 2,
      title: "Manutenção Programada - Sistema",
      content: "Haverá manutenção programada no sistema no dia 20/01/2024 das 02:00 às 04:00...",
      date: "2024-01-12",
      author: "TI",
      recipients: "Todos os usuários",
      status: "sent",
      views: 1205
    },
    {
      id: 3,
      title: "Novo Módulo de Física Quântica",
      content: "Adicionamos um novo módulo de Física Quântica para o 3º ano...",
      date: "2024-01-10",
      author: "Coordenação",
      recipients: "Alunos do 3º ano",
      status: "draft",
      views: 0
    }
  ]);

  const handleEdit = (announcement: any) => {
    toast({
      title: "Editar Comunicado",
      description: `Editando: ${announcement.title}`,
    });
  };

  const handleDelete = (announcement: any) => {
    setAnnouncements(prev => prev.filter(a => a.id !== announcement.id));
    toast({
      title: "Comunicado Removido",
      description: `${announcement.title} foi removido`,
      variant: "destructive",
    });
  };

  const handleView = (announcement: any) => {
    toast({
      title: "Visualizar Comunicado",
      description: `Abrindo: ${announcement.title}`,
    });
  };

  const stats = [
    {
      title: "Total de Comunicados",
      value: "147",
      icon: MessageSquare,
      color: "text-blue-600"
    },
    {
      title: "Enviados Este Mês",
      value: "23",
      icon: Send,
      color: "text-green-600"
    },
    {
      title: "Visualizações Total",
      value: "12,456",
      icon: Eye,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Comunicados</h1>
          <p className="text-muted-foreground">Gerencie comunicados para alunos e professores</p>
        </div>
        <Button onClick={() => document.getElementById('announcement-form')?.scrollIntoView()} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Novo Comunicado
        </Button>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Create Announcement */}
        <Card>
          <CardHeader>
            <CardTitle>Criar Comunicado</CardTitle>
            <CardDescription>
              Envie um novo comunicado para os usuários
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Título</label>
                <Input placeholder="Título do comunicado..." />
              </div>

              <div>
                <label className="text-sm font-medium">Destinatários</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="all">Todos os usuários</option>
                  <option value="students">Apenas alunos</option>
                  <option value="teachers">Apenas professores</option>
                  <option value="year1">Alunos do 1º ano</option>
                  <option value="year2">Alunos do 2º ano</option>
                  <option value="year3">Alunos do 3º ano</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Conteúdo</label>
                <Textarea 
                  placeholder="Escreva o conteúdo do comunicado..."
                  rows={6}
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar
                </Button>
                <Button type="button" variant="outline">
                  Salvar Rascunho
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Recent Announcements */}
        <Card>
          <CardHeader>
            <CardTitle>Comunicados Recentes</CardTitle>
            <CardDescription>
              Últimos comunicados enviados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{announcement.title}</h4>
                    <Badge variant={announcement.status === 'sent' ? 'default' : 'secondary'}>
                      {announcement.status === 'sent' ? 'Enviado' : 'Rascunho'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {announcement.content}
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{announcement.author} • {announcement.date}</span>
                    <span>{announcement.views} visualizações</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEdit(announcement)}
                      title="Editar comunicado"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleView(announcement)}
                      title="Visualizar comunicado"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(announcement)}
                      title="Remover comunicado"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnnouncements;