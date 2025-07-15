import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Send, Search, MessageSquare, User } from "lucide-react";

const ProfessorMessages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      student: "Maria Silva",
      lastMessage: "Professor, tenho dúvidas sobre a tarefa de matemática",
      time: "14:30",
      unread: 2,
      subject: "Matemática"
    },
    {
      id: 2,
      student: "João Santos",
      lastMessage: "Obrigado pela explicação!",
      time: "13:15",
      unread: 0,
      subject: "Física"
    },
    {
      id: 3,
      student: "Ana Costa",
      lastMessage: "Quando será a próxima aula?",
      time: "12:45",
      unread: 1,
      subject: "Química"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "student",
      content: "Professor, tenho dúvidas sobre a tarefa de matemática. Poderia me ajudar?",
      time: "14:25"
    },
    {
      id: 2,
      sender: "professor",
      content: "Claro! Qual é exatamente sua dúvida? Posso explicar melhor.",
      time: "14:27"
    },
    {
      id: 3,
      sender: "student",
      content: "É sobre a questão 5, não entendi como resolver a equação.",
      time: "14:30"
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Adicionar lógica para enviar mensagem
      setNewMessage("");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Mensagens</h1>
        <p className="text-muted-foreground">Converse com seus alunos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Lista de Conversas */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Conversas
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar conversas..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation, index) => (
                <div
                  key={conversation.id}
                  className={`p-3 cursor-pointer hover:bg-muted/50 border-b ${
                    selectedChat === index ? "bg-muted" : ""
                  }`}
                  onClick={() => setSelectedChat(index)}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-sm">{conversation.student}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      {conversation.unread > 0 && (
                        <Badge variant="destructive" className="text-xs">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">
                    {conversation.subject}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {conversation.lastMessage}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Área de Chat */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {conversations[selectedChat]?.student}
              <Badge variant="outline">{conversations[selectedChat]?.subject}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "professor" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === "professor"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="text-sm">{message.content}</div>
                    <div
                      className={`text-xs mt-1 ${
                        message.sender === "professor"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Separator />
            <div className="p-4">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Digite sua mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="min-h-[40px] resize-none"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfessorMessages;