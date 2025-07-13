import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, BookOpen } from "lucide-react";

const Schedule = () => {
  const weeklySchedule = [
    {
      day: "Segunda-feira",
      classes: [
        { time: "09:00", subject: "Matemática", topic: "Funções", teacher: "Prof. Ana Silva", type: "live" },
        { time: "14:00", subject: "Português", topic: "Redação", teacher: "Prof. Maria Oliveira", type: "recorded" },
        { time: "16:00", subject: "História", topic: "Brasil Colônia", teacher: "Prof. Carlos Santos", type: "live" }
      ]
    },
    {
      day: "Terça-feira", 
      classes: [
        { time: "10:00", subject: "Química", topic: "Ligações Químicas", teacher: "Prof. João Ferreira", type: "live" },
        { time: "15:00", subject: "Física", topic: "Cinemática", teacher: "Prof. Ricardo Lima", type: "recorded" }
      ]
    },
    {
      day: "Quarta-feira",
      classes: [
        { time: "09:00", subject: "Inglês", topic: "Grammar", teacher: "Prof. Laura Costa", type: "live" },
        { time: "14:00", subject: "Matemática", topic: "Exercícios", teacher: "Prof. Ana Silva", type: "recorded" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Cronograma de Estudos</h1>
        <p className="text-muted-foreground">Sua agenda semanal de aulas e atividades</p>
      </div>

      <div className="grid gap-6">
        {weeklySchedule.map((day, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {day.day}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {day.classes.map((classItem, classIndex) => (
                  <div key={classIndex} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {classItem.time}
                      </div>
                      <div>
                        <div className="font-medium">{classItem.subject}</div>
                        <div className="text-sm text-muted-foreground">{classItem.topic}</div>
                        <div className="text-xs text-muted-foreground">{classItem.teacher}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={classItem.type === "live" ? "default" : "secondary"}>
                        {classItem.type === "live" ? (
                          <>
                            <Video className="h-3 w-3 mr-1" />
                            Ao Vivo
                          </>
                        ) : (
                          <>
                            <BookOpen className="h-3 w-3 mr-1" />
                            Gravada
                          </>
                        )}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schedule;