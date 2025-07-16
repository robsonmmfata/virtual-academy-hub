import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Users, 
  UserCheck, 
  UserX, 
  Search,
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone
} from "lucide-react";

const AdminStudents = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "João Silva",
      email: "joao@email.com",
      phone: "(11) 99999-9999",
      status: "active",
      course: "Ensino Médio",
      enrollment: "2024001",
      joinDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@email.com",
      phone: "(11) 88888-8888",
      status: "active",
      course: "Ensino Médio",
      enrollment: "2024002",
      joinDate: "2024-01-16"
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      email: "pedro@email.com",
      phone: "(11) 77777-7777",
      status: "inactive",
      course: "Ensino Médio",
      enrollment: "2024003",
      joinDate: "2024-01-17"
    },
    {
      id: 4,
      name: "Ana Costa",
      email: "ana@email.com",
      phone: "(11) 66666-6666",
      status: "active",
      course: "Ensino Médio",
      enrollment: "2024004",
      joinDate: "2024-01-18"
    }
  ]);

  // Filter students based on search and status
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (student: any) => {
    toast({
      title: "Editar Aluno",
      description: `Editando dados de ${student.name}`,
    });
  };

  const handleDelete = (student: any) => {
    setStudents(prev => prev.filter(s => s.id !== student.id));
    toast({
      title: "Aluno Removido",
      description: `${student.name} foi removido do sistema`,
      variant: "destructive",
    });
  };

  const handleSendEmail = (student: any) => {
    toast({
      title: "Email Enviado",
      description: `Email enviado para ${student.name} (${student.email})`,
    });
  };

  const handleNewStudent = () => {
    toast({
      title: "Novo Aluno",
      description: "Abrindo formulário para cadastrar novo aluno",
    });
  };

  const stats = [
    {
      title: "Total de Alunos",
      value: "1,247",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Alunos Ativos",
      value: "1,156",
      icon: UserCheck,
      color: "text-green-600"
    },
    {
      title: "Alunos Inativos",
      value: "91",
      icon: UserX,
      color: "text-red-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Gerenciar Alunos</h1>
          <p className="text-muted-foreground">Controle de alunos matriculados</p>
        </div>
        <Button onClick={handleNewStudent} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Novo Aluno
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
                  placeholder="Buscar aluno..." 
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

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Alunos</CardTitle>
          <CardDescription>
            Gerencie todos os alunos matriculados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Nome</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Telefone</th>
                  <th className="text-left p-2">Matrícula</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b">
                    <td className="p-2">
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-muted-foreground">{student.course}</div>
                      </div>
                    </td>
                    <td className="p-2">{student.email}</td>
                    <td className="p-2">{student.phone}</td>
                    <td className="p-2">{student.enrollment}</td>
                    <td className="p-2">
                      <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                        {student.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEdit(student)}
                          title="Editar aluno"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleSendEmail(student)}
                          title="Enviar email"
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDelete(student)}
                          title="Remover aluno"
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

export default AdminStudents;