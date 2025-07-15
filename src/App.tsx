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
import StudentMessages from "./pages/student/StudentMessages";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminTeachers from "./pages/admin/AdminTeachers";
import AdminAnnouncements from "./pages/admin/AdminAnnouncements";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminReports from "./pages/admin/AdminReports";
import AdminDocuments from "./pages/admin/AdminDocuments";
import AdminSettings from "./pages/admin/AdminSettings";
import ProfessorLayout from "./components/layout/ProfessorLayout";
import ProfessorDashboard from "./pages/professor/ProfessorDashboard";
import ProfessorUpload from "./pages/professor/ProfessorUpload";
import ProfessorTasks from "./pages/professor/ProfessorTasks";
import ProfessorMessages from "./pages/professor/ProfessorMessages";
import ProfessorSchedule from "./pages/professor/ProfessorSchedule";
import ProfessorPerformance from "./pages/professor/ProfessorPerformance";
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
          <Route path="/student/messages" element={<StudentLayout><StudentMessages /></StudentLayout>} />
          <Route path="/professor" element={<ProfessorLayout />}>
            <Route index element={<ProfessorDashboard />} />
            <Route path="upload" element={<ProfessorUpload />} />
            <Route path="tasks" element={<ProfessorTasks />} />
            <Route path="messages" element={<ProfessorMessages />} />
            <Route path="schedule" element={<ProfessorSchedule />} />
            <Route path="performance" element={<ProfessorPerformance />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="teachers" element={<AdminTeachers />} />
            <Route path="announcements" element={<AdminAnnouncements />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="documents" element={<AdminDocuments />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
