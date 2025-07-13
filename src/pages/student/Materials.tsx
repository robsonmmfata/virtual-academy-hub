import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search, Filter, FileText, Eye, Calendar } from "lucide-react";

const Materials = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const materials = [
    {
      id: 1,
      title: "Apostila de Matemática - Funções",
      subject: "Matemática",
      type: "PDF",
      size: "2.5 MB",
      description: "Material completo sobre funções quadráticas, exponenciais e logarítmicas",
      downloadUrl: "#",
      uploadDate: "2024-01-10",
      downloads: 45
    },
    {
      id: 2,
      title: "Exercícios de Português - Análise Sintática",
      subject: "Português",
      type: "PDF",
      size: "1.8 MB",
      description: "Lista de exercícios sobre análise sintática com gabarito comentado",
      downloadUrl: "#",
      uploadDate: "2024-01-12",
      downloads: 32
    },
    {
      id: 3,
      title: "Resumo - Segunda Guerra Mundial",
      subject: "História",
      type: "PDF",
      size: "3.2 MB",
      description: "Resumo completo com mapas e cronologia da Segunda Guerra Mundial",
      downloadUrl: "#",
      uploadDate: "2024-01-15",
      downloads: 28
    },
    {
      id: 4,
      title: "Tabela Periódica Completa",
      subject: "Química",
      type: "PDF",
      size: "1.1 MB",
      description: "Tabela periódica atualizada com propriedades dos elementos",
      downloadUrl: "#",
      uploadDate: "2024-01-08",
      downloads: 67
    },
    {
      id: 5,
      title: "Fórmulas de Física - Mecânica",
      subject: "Física",
      type: "PDF",
      size: "0.9 MB",
      description: "Compilação de fórmulas essenciais de mecânica clássica",
      downloadUrl: "#",
      uploadDate: "2024-01-14",
      downloads: 23
    },
    {
      id: 6,
      title: "Simulado ENEM - Ciências da Natureza",
      subject: "Simulado",
      type: "PDF",
      size: "4.1 MB",
      description: "Simulado completo com 45 questões e gabarito comentado",
      downloadUrl: "#",
      uploadDate: "2024-01-16",
      downloads: 89
    }
  ];

  const filteredMaterials = materials.filter(material =>
    material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const subjectColors = {
    "Matemática": "bg-blue-100 text-blue-800",
    "Português": "bg-green-100 text-green-800",
    "História": "bg-purple-100 text-purple-800",
    "Química": "bg-red-100 text-red-800",
    "Física": "bg-orange-100 text-orange-800",
    "Simulado": "bg-yellow-100 text-yellow-800"
  };

  const handleDownload = (material: any) => {
    // Simulate download
    console.log(`Downloading ${material.title}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Materiais de Estudo</h1>
          <p className="text-muted-foreground">
            Baixe apostilas, exercícios e materiais complementares
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar materiais..."
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

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <Card key={material.id} className="hover:shadow-medium transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge 
                  className={subjectColors[material.subject] || "bg-gray-100 text-gray-800"}
                  variant="secondary"
                >
                  {material.subject}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  {material.type}
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">{material.title}</CardTitle>
              <CardDescription>{material.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {/* File Info */}
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Tamanho: {material.size}</span>
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {material.downloads} downloads
                  </div>
                </div>

                {/* Upload Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Adicionado em {new Date(material.uploadDate).toLocaleDateString('pt-BR')}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleDownload(material)}
                    className="flex-1"
                    size="sm"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            Nenhum material encontrado
          </h3>
          <p className="text-muted-foreground">
            Tente ajustar sua pesquisa ou verifique se há novos materiais disponíveis.
          </p>
        </div>
      )}

      {/* Download Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Estatísticas de Download</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-primary">{materials.length}</div>
              <div className="text-sm text-muted-foreground">Total de Materiais</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-green-600">
                {materials.reduce((acc, mat) => acc + mat.downloads, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total de Downloads</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-blue-600">
                {(materials.reduce((acc, mat) => acc + parseFloat(mat.size), 0)).toFixed(1)} MB
              </div>
              <div className="text-sm text-muted-foreground">Tamanho Total</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-purple-600">6</div>
              <div className="text-sm text-muted-foreground">Matérias</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Materials;