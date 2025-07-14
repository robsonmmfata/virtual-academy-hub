import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload, 
  Video, 
  FileText, 
  BookOpen, 
  CheckSquare, 
  Plus,
  Calendar,
  Users
} from "lucide-react";

const ProfessorUpload = () => {
  const recentUploads = [
    {
      title: "Aula de Matemática - Funções",
      type: "video",
      date: "2024-01-15",
      size: "125 MB",
      status: "published"
    },
    {
      title: "Exercícios de Física",
      type: "document",
      date: "2024-01-14",
      size: "2.3 MB",
      status: "published"
    },
    {
      title: "Simulado ENEM",
      type: "document",
      date: "2024-01-13",
      size: "1.8 MB",
      status: "draft"
    }
  ];

  const handleFileUpload = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de upload
    console.log("Arquivo enviado!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Enviar Conteúdo</h1>
          <p className="text-muted-foreground">Faça upload de aulas, materiais e exercícios</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Novo Conteúdo
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Enviar Arquivo
            </CardTitle>
            <CardDescription>
              Selecione o tipo de conteúdo e faça o upload
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFileUpload} className="space-y-4">
              <div>
                <Label htmlFor="content-type">Tipo de Conteúdo</Label>
                <select className="w-full p-2 border rounded-md">
                  <option value="video">Vídeo Aula</option>
                  <option value="document">Documento/PDF</option>
                  <option value="exercise">Lista de Exercícios</option>
                  <option value="exam">Prova/Simulado</option>
                </select>
              </div>

              <div>
                <Label htmlFor="title">Título</Label>
                <Input id="title" placeholder="Digite o título do conteúdo" />
              </div>

              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea 
                  id="description" 
                  placeholder="Descreva o conteúdo..." 
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="subject">Matéria</Label>
                <select className="w-full p-2 border rounded-md">
                  <option value="mathematics">Matemática</option>
                  <option value="physics">Física</option>
                  <option value="chemistry">Química</option>
                  <option value="biology">Biologia</option>
                  <option value="history">História</option>
                  <option value="geography">Geografia</option>
                  <option value="portuguese">Português</option>
                  <option value="english">Inglês</option>
                </select>
              </div>

              <div>
                <Label htmlFor="file">Arquivo</Label>
                <Input id="file" type="file" accept=".pdf,.doc,.docx,.mp4,.avi,.mov" />
              </div>

              <Button type="submit" className="w-full">
                Enviar Conteúdo
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Uploads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Uploads Recentes
            </CardTitle>
            <CardDescription>
              Seus conteúdos enviados recentemente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUploads.map((upload, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {upload.type === 'video' ? (
                      <Video className="h-8 w-8 text-blue-500" />
                    ) : (
                      <FileText className="h-8 w-8 text-green-500" />
                    )}
                    <div>
                      <h4 className="font-medium">{upload.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {upload.size} • {upload.date}
                      </p>
                    </div>
                  </div>
                  <Badge variant={upload.status === 'published' ? 'default' : 'secondary'}>
                    {upload.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <Video className="h-12 w-12 mx-auto mb-4 text-blue-500" />
            <h3 className="font-medium mb-2">Aula ao Vivo</h3>
            <p className="text-sm text-muted-foreground">Iniciar transmissão ao vivo</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <CheckSquare className="h-12 w-12 mx-auto mb-4 text-green-500" />
            <h3 className="font-medium mb-2">Criar Tarefa</h3>
            <p className="text-sm text-muted-foreground">Nova tarefa para alunos</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h3 className="font-medium mb-2">Agendar Aula</h3>
            <p className="text-sm text-muted-foreground">Agendar nova aula</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfessorUpload;