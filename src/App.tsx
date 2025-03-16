
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Routes, Route, HashRouter} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Administration from "./pages/institution/Administration";
import Faculty from "./pages/institution/Faculty";
import FacultyDepartment from "./pages/institution/FacultyDepartment";
import Contacts from "./pages/institution/Contacts";
import LegalInformation from "./pages/LegalInformation";
import InformationPage from "./pages/information/InformationPage";
import InformationSection from "./pages/information/InformationSection";
import Preview from "./pages/Preview";
import DistanceLearning from "@/pages/DistanceLearning.tsx";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Schedule from "./pages/Schedule";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route index={true} path="/" element={<Preview />} />
          <Route path="/home" element={<Index />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/information/:sectionId" element={<InformationSection />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news" element={<News/>} />
          <Route path="/distance-learning" element={<DistanceLearning/>} />
          <Route path="/help-and-safety" element={<div>Допомога і безпека</div>} />
          <Route path="/institution/administration" element={<Administration />} />
          <Route path="/institution/faculty" element={<Faculty />} />
          <Route path="/institution/faculty/:departmentId" element={<FacultyDepartment />} />
          <Route path="/institution/contacts" element={<Contacts />} />
          <Route path="/legal-information" element={<LegalInformation />} />
          <Route path="/schedule" element={<Schedule />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route  path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
