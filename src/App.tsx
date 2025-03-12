
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Administration from "./pages/institution/Administration";
import Faculty from "./pages/institution/Faculty";
import FacultyDepartment from "./pages/institution/FacultyDepartment";
import Contacts from "./pages/institution/Contacts";
import LegalInformation from "./pages/LegalInformation";
import InformationPage from "./pages/information/InformationPage";
import InformationSection from "./pages/information/InformationSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/information/:sectionId" element={<InformationSection />} />
          <Route path="/news" element={<div>Новини</div>} />
          <Route path="/distance-learning" element={<div>Дистанційне навчання</div>} />
          <Route path="/help-and-safety" element={<div>Допомога і безпека</div>} />
          <Route path="/institution/administration" element={<Administration />} />
          <Route path="/institution/faculty" element={<Faculty />} />
          <Route path="/institution/faculty/:departmentId" element={<FacultyDepartment />} />
          <Route path="/institution/contacts" element={<Contacts />} />
          <Route path="/legal-information" element={<LegalInformation />} />
          <Route path="/schedule" element={<div>Розклад</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
