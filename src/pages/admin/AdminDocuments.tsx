import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Plus, Search, Download, Edit, Trash2, Upload, Eye, Share } from "lucide-react";

const AdminDocuments = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Manual do Professor",
      description: "Guia completo para professores",
      category: "Manual",
      type: "PDF",
      size: "2.5 MB",
      uploadDate: "15/01/2024",
      uploadedBy: "Admin Sistema",
      downloads: 45,
      status: "public"
    },
    {
      id: 2,
      name: "Regras de Avaliação",
      description: "Diretrizes para avaliação de alunos",
      category: "Política",
      type: "DOCX",
      size: "1.2 MB",
      uploadDate: "12/01/2024",
      uploadedBy: "Admin Sistema",
      downloads: 23,
      status: "public"
    },
    {
      id: 3,
      name: "Cronograma Acadêmico 2024",
      description: "Calendário oficial do ano letivo",
      category: "Cronograma",
      type: "PDF",
      size: "890 KB",
      uploadDate: "08/01/2024",
      uploadedBy: "Secretaria",
      downloads: 78,
      status: "public"
    },
    {
      id: 4,
      name: "Plano Pedagógico",
      description: "Documento interno de planejamento",
      category: "Planejamento",
      type: "PDF",
      size: "3.1 MB",
      uploadDate: "05/01/2024",
      uploadedBy: "Coordenação",
      downloads: 12,
      status: "private"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingDocument, setEditingDocument] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["Manual", "Política", "Cronograma", "Planejamento", "Formulário", "Relatório"];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddDocument = () => {
    setEditingDocument(null);
    setIsDialogOpen(true);
  };

  const handleEditDocument = (document) => {
    setEditingDocument(document);
    setIsDialogOpen(true);
  };

  const handleDeleteDocument = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  const handleDownload = (document) => {
    // Lógica para download
    console.log(`Baixando documento: ${document.name}`);
  };

  const handleShare = (document) => {
    // Lógica para compartilhamento
    console.log(`Compartilhando documento: ${document.name}`);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "public":
        return <Badge variant="default">Público</Badge>;
      case "private":
        return <Badge variant="secondary">Privado</Badge>;
      case "restricted":
        return <Badge variant="destructive">Restrito</Badge>;
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  const getFileIcon = (type) => {
    return <FileText className="h-8 w-8 text-muted-foreground" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gerenciar Documentos</h1>
          <p className="text-muted-foreground">Organize e compartilhe documentos importantes</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddDocument}>
              <Plus className="h-4 w-4 mr-2" />
              Novo Documento
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingDocument ? "Editar Documento" : "Novo Documento"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nome do Documento</Label>
                <Input id="name" defaultValue={editingDocument?.name} />
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" defaultValue={editingDocument?.description} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Categoria</Label>
                  <Select defaultValue={editingDocument?.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status">Visibilidade</Label>
                  <Select defaultValue={editingDocument?.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a visibilidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Público</SelectItem>
                      <SelectItem value="private">Privado</SelectItem>
                      <SelectItem value="restricted">Restrito</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {!editingDocument && (
                <div>
                  <Label htmlFor="file">Arquivo</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Clique para selecionar um arquivo ou arraste e solte aqui
                    </p>
                    <Input id="file" type="file" className="hidden" />
                  </div>
                </div>
              )}
              <Button className="w-full">
                {editingDocument ? "Atualizar Documento" : "Salvar Documento"}
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
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Todas as categorias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categorias</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome</SelectItem>
                <SelectItem value="date">Data</SelectItem>
                <SelectItem value="downloads">Downloads</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Documentos */}
      <div className="grid gap-4">
        {filteredDocuments.map((document) => (
          <Card key={document.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {getFileIcon(document.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-lg">{document.name}</h3>
                      <p className="text-muted-foreground text-sm">{document.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(document.status)}
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleShare(document)}
                      >
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEditDocument(document)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDeleteDocument(document.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <Badge variant="outline">{document.category}</Badge>
                    <span>{document.type}</span>
                    <span>{document.size}</span>
                    <span>{document.uploadDate}</span>
                    <span>Por: {document.uploadedBy}</span>
                    <span>{document.downloads} downloads</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDownload(document)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDocuments;