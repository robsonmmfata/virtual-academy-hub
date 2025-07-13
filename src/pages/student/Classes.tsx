import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Clock, Search, Filter, BookOpen } from "lucide-react";

const Classes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const subjects = [
    {
      name: "Matemática",
      classes: [
        {
          id: 1,
          title: "Funções Quadráticas - Parte 1",
          duration: "45 min",
          description: "Introdução às funções quadráticas e suas propriedades básicas",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          watched: true,
          date: "2024-01-15"
        },
        {
          id: 2,
          title: "Funções Quadráticas - Parte 2",
          duration: "50 min",
          description: "Gráficos de funções quadráticas e análise de vértices",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          watched: false,
          date: "2024-01-18"
        }
      ]
    },
    {
      name: "Português",
      classes: [
        {
          id: 3,
          title: "Análise Sintática - Termos Essenciais",
          duration: "40 min",
          description: "Sujeito e predicado: identificação e classificação",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          watched: true,
          date: "2024-01-16"
        },
        {
          id: 4,
          title: "Análise Sintática - Termos Integrantes",
          duration: "45 min",
          description: "Objeto direto, indireto e complemento nominal",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          watched: false,
          date: "2024-01-19"
        }
      ]
    },
    {
      name: "História",
      classes: [
        {
          id: 5,
          title: "Segunda Guerra Mundial - Antecedentes",
          duration: "55 min",
          description: "Causas e contexto histórico da Segunda Guerra Mundial",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          watched: false,
          date: "2024-01-17"
        }
      ]
    }
  ];

  const filteredSubjects = subjects.map(subject => ({
    ...subject,
    classes: subject.classes.filter(classItem =>
      classItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(subject => subject.classes.length > 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Minhas Aulas</h1>
          <p className="text-muted-foreground">
            Acesse suas videoaulas organizadas por matéria
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar aulas..."
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

      {/* Classes by Subject */}
      <Tabs defaultValue={subjects[0]?.name} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {subjects.map((subject) => (
            <TabsTrigger key={subject.name} value={subject.name}>
              {subject.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {subjects.map((subject) => (
          <TabsContent key={subject.name} value={subject.name} className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {subject.classes.map((classItem) => (
                <Card key={classItem.id} className="overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center relative">
                    <iframe
                      src={classItem.videoUrl}
                      title={classItem.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {!classItem.watched && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="destructive">Não assistida</Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{classItem.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {classItem.duration}
                      </div>
                    </div>
                    <CardDescription>{classItem.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Publicado em {new Date(classItem.date).toLocaleDateString('pt-BR')}
                      </span>
                      <Button size="sm" className="gap-2">
                        <Play className="h-4 w-4" />
                        {classItem.watched ? 'Reassistir' : 'Assistir'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {subject.classes.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Nenhuma aula encontrada
                </h3>
                <p className="text-muted-foreground">
                  Não há aulas disponíveis para esta matéria no momento.
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Progress Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Progresso Geral</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-primary">24</div>
              <div className="text-sm text-muted-foreground">Aulas Assistidas</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-orange-600">6</div>
              <div className="text-sm text-muted-foreground">Não Assistidas</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-green-600">80%</div>
              <div className="text-sm text-muted-foreground">Progresso Total</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Classes;