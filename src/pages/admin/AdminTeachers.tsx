import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  GraduationCap, 
  UserCheck, 
  UserX, 
  Search,
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone,
  BookOpen
} from "lucide-react";

const AdminTeachers = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Prof. Ana Silva",
      email: "ana@eduvirtual.com",
      phone: "(11) 99999-9999",
      status: "active",
      subject: "Matemática e Física",
      students: 156,
      experience: "12 anos",
      joinDate: "2023-01-15"
    },
    {
      id: 2,
      name: "Prof. Carlos Santos",
      email: "carlos@eduvirtual.com",
      phone: "(11) 88888-8888",
      status: "active",
      subject: "História e Geografia",
      students: 142,
      experience: "15 anos",
      joinDate: "2023-02-01"
    },
    {
      id: 3,
      name: "Prof. Maria Oliveira",
      email: "maria@eduvirtual.com",
      phone: "(11) 77777-7777",
      status: "active",
      subject: "Português e Literatura",
      students: 178,
      experience: "10 anos",
      joinDate: "2023-03-10"
    },
    {
      id: 4,
      name: "Prof. João Ferreira",
      email: "joao@eduvirtual.com",
      phone: "(11) 66666-6666",
      status: "inactive",
      subject: "Química e Biologia",
      students: 98,
      experience: "8 anos",
      joinDate: "2023-04-15"
    }
  ]);

  // Filter teachers based on search and status
  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || teacher.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (teacher: any) => {
    toast({
      title: "Editar Professor",
      description: `Editando dados de ${teacher.name}`,
    });
  };

  const handleDelete = (teacher: any) => {
    setTeachers(prev => prev.filter(t => t.id !== teacher.id));
    toast({
      title: "Professor Removido",
      description: `${teacher.name} foi removido do sistema`,
      variant: "destructive",
    });
  };

  const handleSendEmail = (teacher: any) => {
    toast({
      title: "Email Enviado",
      description: `Email enviado para ${teacher.name} (${teacher.email})`,
    });
  };

  const handleNewTeacher = () => {
    toast({
      title: "Novo Professor",
      description: "Abrindo formulário para cadastrar novo professor",
    });
  };

  const stats = [
    {
      title: "Total de Professores",
      value: "25",
      icon: GraduationCap,
      color: "text-blue-600"
    },
    {
      title: "Professores Ativos",
      value: "23",
      icon: UserCheck,
      color: "text-green-600"
    },
    {
      title: "Professores Inativos",
      value: "2",
      icon: UserX,
      color: "text-red-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Gerenciar Professores</h1>
          <p className="text-muted-foreground">Controle do corpo docente</p>
        </div>
        <Button onClick={handleNewTeacher} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Novo Professor
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

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar professor..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <select 
              className="px-3 py-2 border rounded-md"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="active">Ativos</option>
              <option value="inactive">Inativos</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Teachers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Professores</CardTitle>
          <CardDescription>
            Gerencie todos os professores da plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Nome</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Matéria</th>
                  <th className="text-left p-2">Alunos</th>
                  <th className="text-left p-2">Experiência</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredTeachers.map((teacher) => (
                  <tr key={teacher.id} className="border-b">
                    <td className="p-2">
                      <div>
                        <div className="font-medium">{teacher.name}</div>
                        <div className="text-sm text-muted-foreground">{teacher.phone}</div>
                      </div>
                    </td>
                    <td className="p-2">{teacher.email}</td>
                    <td className="p-2">{teacher.subject}</td>
                    <td className="p-2">{teacher.students}</td>
                    <td className="p-2">{teacher.experience}</td>
                    <td className="p-2">
                      <Badge variant={teacher.status === 'active' ? 'default' : 'secondary'}>
                        {teacher.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEdit(teacher)}
                          title="Editar professor"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleSendEmail(teacher)}
                          title="Enviar email"
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDelete(teacher)}
                          title="Remover professor"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTeachers;