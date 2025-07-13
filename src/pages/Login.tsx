import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication simulation
    if (credentials.username && credentials.password) {
      if (credentials.username === "admin" && credentials.password === "admin") {
        navigate("/admin");
        toast({
          title: "Login realizado!",
          description: "Bem-vindo ao painel administrativo.",
        });
      } else if (credentials.username === "professor" && credentials.password === "prof123") {
        navigate("/professor");
        toast({
          title: "Login realizado!",
          description: "Bem-vindo ao portal do professor.",
        });
      } else {
        navigate("/student");
        toast({
          title: "Login realizado!",
          description: "Bem-vindo ao portal do aluno.",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl">EduVirtual</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Entrar na Plataforma</h1>
          <p className="text-muted-foreground mt-2">
            Acesse sua conta para continuar seus estudos
          </p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Digite suas credenciais para acessar a plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
                  Usuário
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={credentials.username}
                  onChange={handleInputChange}
                  placeholder="Digite seu usuário"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={handleInputChange}
                    placeholder="Digite sua senha"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-primary hover:text-primary/80 text-sm">
                Esqueceu sua senha?
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Credenciais de Demonstração</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <strong>Aluno:</strong> qualquer usuário/senha
            </div>
            <div>
              <strong>Professor:</strong> professor / prof123
            </div>
            <div>
              <strong>Admin:</strong> admin / admin
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm">
            ← Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;