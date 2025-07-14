import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentLayout from "./components/layout/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import Classes from "./pages/student/Classes";
import Materials from "./pages/student/Materials";
import Tasks from "./pages/student/Tasks";
import Schedule from "./pages/student/Schedule";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProfessorLayout from "./components/layout/ProfessorLayout";
import ProfessorDashboard from "./pages/professor/ProfessorDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentLayout><StudentDashboard /></StudentLayout>} />
          <Route path="/student/classes" element={<StudentLayout><Classes /></StudentLayout>} />
          <Route path="/student/materials" element={<StudentLayout><Materials /></StudentLayout>} />
          <Route path="/student/tasks" element={<StudentLayout><Tasks /></StudentLayout>} />
          <Route path="/student/schedule" element={<StudentLayout><Schedule /></StudentLayout>} />
          <Route path="/student/messages" element={<StudentLayout><div className="text-center py-12"><h2 className="text-xl font-bold mb-2">Mensagens</h2><p className="text-muted-foreground">Sistema de mensagens em desenvolvimento...</p></div></StudentLayout>} />
          <Route path="/professor" element={<ProfessorLayout />}>
            <Route index element={<ProfessorDashboard />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
