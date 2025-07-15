import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Plus, Search, Edit, Trash2, Users, Clock, Play } from "lucide-react";

const AdminCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Matemática Avançada",
      description: "Curso completo de matemática para ensino médio",
      category: "Exatas",
      level: "Avançado",
      duration: "120h",
      students: 45,
      teacher: "Prof. Ana Silva",
      status: "active",
      lessons: 24,
      progress: 75
    },
    {
      id: 2,
      name: "Física Moderna",
      description: "Conceitos fundamentais de física moderna",
      category: "Exatas",
      level: "Intermediário",
      duration: "80h",
      students: 32,
      teacher: "Prof. Carlos Santos",
      status: "active",
      lessons: 16,
      progress: 50
    },
    {
      id: 3,
      name: "Química Orgânica",
      description: "Estudo dos compostos orgânicos",
      category: "Exatas",
      level: "Avançado",
      duration: "100h",
      students: 28,
      teacher: "Prof. João Ferreira",
      status: "draft",
      lessons: 20,
      progress: 25
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCourse = () => {
    setEditingCourse(null);
    setIsDialogOpen(true);
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setIsDialogOpen(true);
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge variant="default">Ativo</Badge>;
      case "draft":
        return <Badge variant="secondary">Rascunho</Badge>;
      case "completed":
        return <Badge variant="outline">Concluído</Badge>;
      default:
        return <Badge variant="secondary">Desconhecido</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gerenciar Cursos</h1>
          <p className="text-muted-foreground">Administre todos os cursos da plataforma</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddCourse}>
              <Plus className="h-4 w-4 mr-2" />
              Novo Curso
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingCourse ? "Editar Curso" : "Novo Curso"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome do Curso</Label>
                  <Input id="name" defaultValue={editingCourse?.name} />
                </div>
                <div>
                  <Label htmlFor="category">Categoria</Label>
                  <Select defaultValue={editingCourse?.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Exatas">Exatas</SelectItem>
                      <SelectItem value="Humanas">Humanas</SelectItem>
                      <SelectItem value="Biológicas">Biológicas</SelectItem>
                      <SelectItem value="Tecnologia">Tecnologia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" defaultValue={editingCourse?.description} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="level">Nível</Label>
                  <Select defaultValue={editingCourse?.level}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Básico">Básico</SelectItem>
                      <SelectItem value="Intermediário">Intermediário</SelectItem>
                      <SelectItem value="Avançado">Avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration">Duração</Label>
                  <Input id="duration" placeholder="ex: 120h" defaultValue={editingCourse?.duration} />
                </div>
                <div>
                  <Label htmlFor="teacher">Professor</Label>
                  <Select defaultValue={editingCourse?.teacher}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o professor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Prof. Ana Silva">Prof. Ana Silva</SelectItem>
                      <SelectItem value="Prof. Carlos Santos">Prof. Carlos Santos</SelectItem>
                      <SelectItem value="Prof. João Ferreira">Prof. João Ferreira</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full">
                {editingCourse ? "Atualizar Curso" : "Criar Curso"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Busca e Filtros */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Exatas">Exatas</SelectItem>
                <SelectItem value="Humanas">Humanas</SelectItem>
                <SelectItem value="Biológicas">Biológicas</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Ativo</SelectItem>
                <SelectItem value="draft">Rascunho</SelectItem>
                <SelectItem value="completed">Concluído</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Cursos */}
      <div className="grid gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {course.name}
                  </CardTitle>
                  <p className="text-muted-foreground mt-1">{course.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(course.status)}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEditCourse(course)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{course.students} alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{course.lessons} aulas</span>
                </div>
                <div>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Professor: {course.teacher}</p>
                  <p className="text-sm text-muted-foreground">Categoria: {course.category}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                  <Button variant="outline" size="sm">
                    Gerenciar Aulas
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;