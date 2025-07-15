import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Send, Search, MessageSquare, User, Book } from "lucide-react";

const StudentMessages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      teacher: "Prof. Ana Silva",
      subject: "Matemática",
      lastMessage: "Sua dúvida sobre a questão 5 é muito comum...",
      time: "14:30",
      unread: 1,
      online: true
    },
    {
      id: 2,
      teacher: "Prof. Carlos Santos",
      subject: "História",
      lastMessage: "Ótima pergunta sobre o Brasil Colônia!",
      time: "13:15",
      unread: 0,
      online: false
    },
    {
      id: 3,
      teacher: "Prof. Maria Oliveira",
      subject: "Português",
      lastMessage: "Parabéns pela redação, muito bem estruturada.",
      time: "12:45",
      unread: 2,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "student",
      content: "Professora, não consegui entender a questão 5 da tarefa de matemática. Poderia me ajudar?",
      time: "14:25"
    },
    {
      id: 2,
      sender: "teacher",
      content: "Claro! A questão 5 trata de equações quadráticas. Vou explicar passo a passo.",
      time: "14:27"
    },
    {
      id: 3,
      sender: "teacher",
      content: "Para resolver ax² + bx + c = 0, usamos a fórmula de Bhaskara: x = (-b ± √(b²-4ac)) / 2a",
      time: "14:28"
    },
    {
      id: 4,
      sender: "student",
      content: "Entendi! Mas como faço para identificar os valores de a, b e c?",
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
        <p className="text-muted-foreground">Converse com seus professores</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Lista de Conversas */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Professores
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar professores..." className="pl-10" />
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
                    <div className="flex items-center gap-2">
                      <div className="font-medium text-sm">{conversation.teacher}</div>
                      {conversation.online && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      {conversation.unread > 0 && (
                        <Badge variant="destructive" className="text-xs">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <Book className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {conversation.subject}
                    </span>
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
              {conversations[selectedChat]?.teacher}
              <Badge variant="outline">
                <Book className="h-3 w-3 mr-1" />
                {conversations[selectedChat]?.subject}
              </Badge>
              {conversations[selectedChat]?.online && (
                <Badge variant="default" className="text-xs">
                  Online
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "student" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === "student"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="text-sm">{message.content}</div>
                    <div
                      className={`text-xs mt-1 ${
                        message.sender === "student"
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

export default StudentMessages;