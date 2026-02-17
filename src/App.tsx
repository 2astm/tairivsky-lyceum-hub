
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Administration from "./pages/institution/Administration";
import Faculty from "./pages/institution/Faculty";
import FacultyDepartment from "./pages/institution/FacultyDepartment";
import Contacts from "./pages/institution/Contacts";
import Structure from "./pages/institution/Structure";
import LegalInformation from "./pages/LegalInformation";
import InformationPage from "./pages/information/InformationPage";
import InformationSection from "./pages/information/InformationSection";
import Preview from "./pages/Preview";
import DistanceLearning from "@/pages/DistanceLearning.tsx";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Schedule from "./pages/Schedule";
import HelpAndSafety from "./pages/HelpAndSafety";
import PsychologicalService from "./pages/help-safety/PsychologicalService";
import StopBullying from "./pages/help-safety/StopBullying";
import StopViolence from "./pages/help-safety/StopViolence";
import InternetSafety from "./pages/help-safety/InternetSafety";
import Psychologist from "./pages/help-safety/Psychologist";
import CareerGuidance from "./pages/career-guidance/CareerGuidance";
import Tykanka from "./pages/Tykanka";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route index={true} path="/" element={<Preview />} />
          <Route path="/home" element={<Index />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/information/:sectionId" element={<InformationSection />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news" element={<News/>} />
          <Route path="/distance-learning" element={<DistanceLearning/>} />
          <Route path="/help-and-safety" element={<HelpAndSafety />} />
          <Route path="/help-and-safety/psychological-service" element={<PsychologicalService />} />
          <Route path="/help-and-safety/stop-bullying" element={<StopBullying />} />
          <Route path="/help-and-safety/stop-violence" element={<StopViolence />} />
          <Route path="/help-and-safety/internet-safety" element={<InternetSafety />} />
          <Route path="/help-and-safety/psychologist" element={<Psychologist />} />
          <Route path="/institution/administration" element={<Administration />} />
          <Route path="/institution/faculty" element={<Faculty />} />
          <Route path="/institution/faculty/:departmentId" element={<FacultyDepartment />} />
          <Route path="/institution/contacts" element={<Contacts />} />
          <Route path="/institution/structure" element={<Structure />} />
          <Route path="/legal-information" element={<LegalInformation />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/tykanka" element={<Tykanka />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
