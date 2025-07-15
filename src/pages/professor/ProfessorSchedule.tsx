import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, Edit, Trash2, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProfessorSchedule = () => {
  const [scheduleItems, setScheduleItems] = useState([
    {
      id: 1,
      day: "Segunda-feira",
      time: "09:00",
      subject: "Matemática",
      topic: "Funções Quadráticas",
      class: "3º Ano A",
      students: 25,
      type: "live"
    },
    {
      id: 2,
      day: "Segunda-feira",
      time: "14:00",
      subject: "Matemática",
      topic: "Exercícios Práticos",
      class: "3º Ano B",
      students: 22,
      type: "recorded"
    },
    {
      id: 3,
      day: "Terça-feira",
      time: "10:00",
      subject: "Matemática",
      topic: "Progressões",
      class: "2º Ano A",
      students: 28,
      type: "live"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const daysOfWeek = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];

  const handleAddSchedule = () => {
    setEditingItem(null);
    setIsDialogOpen(true);
  };

  const handleEditSchedule = (item) => {
    setEditingItem(item);
    setIsDialogOpen(true);
  };

  const handleDeleteSchedule = (id) => {
    setScheduleItems(scheduleItems.filter(item => item.id !== id));
  };

  const scheduleByDay = daysOfWeek.map(day => ({
    day,
    items: scheduleItems.filter(item => item.day === day)
  }));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Cronograma de Aulas</h1>
          <p className="text-muted-foreground">Gerencie suas aulas e horários</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddSchedule}>
              <Plus className="h-4 w-4 mr-2" />
              Nova Aula
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingItem ? "Editar Aula" : "Nova Aula"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="day">Dia da Semana</Label>
                <Select defaultValue={editingItem?.day}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o dia" />
                  </SelectTrigger>
                  <SelectContent>
                    {daysOfWeek.map(day => (
                      <SelectItem key={day} value={day}>{day}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="time">Horário</Label>
                <Input id="time" type="time" defaultValue={editingItem?.time} />
              </div>
              <div>
                <Label htmlFor="subject">Matéria</Label>
                <Input id="subject" defaultValue={editingItem?.subject} />
              </div>
              <div>
                <Label htmlFor="topic">Tópico</Label>
                <Input id="topic" defaultValue={editingItem?.topic} />
              </div>
              <div>
                <Label htmlFor="class">Turma</Label>
                <Input id="class" defaultValue={editingItem?.class} />
              </div>
              <div>
                <Label htmlFor="type">Tipo de Aula</Label>
                <Select defaultValue={editingItem?.type}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="live">Ao Vivo</SelectItem>
                    <SelectItem value="recorded">Gravada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">
                {editingItem ? "Atualizar Aula" : "Criar Aula"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {scheduleByDay.map((daySchedule) => (
          <Card key={daySchedule.day}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {daySchedule.day}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {daySchedule.items.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Nenhuma aula agendada para este dia
                </p>
              ) : (
                <div className="space-y-3">
                  {daySchedule.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {item.time}
                        </div>
                        <div>
                          <div className="font-medium">{item.subject}</div>
                          <div className="text-sm text-muted-foreground">{item.topic}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{item.class}</Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Users className="h-3 w-3" />
                              {item.students} alunos
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={item.type === "live" ? "default" : "secondary"}>
                          {item.type === "live" ? "Ao Vivo" : "Gravada"}
                        </Badge>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEditSchedule(item)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDeleteSchedule(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfessorSchedule;