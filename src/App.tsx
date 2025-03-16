
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Helmet>
            <title>Таїровський ліцей</title>
            <meta name="description" content="Таїровський ліцей – сучасний навчальний заклад, що забезпечує якісну освіту, розвиток учнів та комфортне навчальне середовище." />
            <meta name="keywords" content="Таїровський ліцей, школа, освіта, навчання, учні, Одеса, ліцей" />
            <meta property="og:title" content="Таїровський ліцей – сучасний навчальний заклад" />
            <meta property="og:description" content="Якісна освіта, досвідчені вчителі, комфортне навчальне середовище. Приєднуйтесь до нас!" />
            <meta property="og:image" content="/og-image.png" />
            <meta property="og:url" content="https://tairivsky-lyceum.od.ua" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Таїровський ліцей" />
            <meta name="twitter:description" content="Якісна освіта, досвідчені вчителі, комфортне навчальне середовище. Приєднуйтесь до нас!" />
            <meta name="twitter:image" content="/og-image.png" />
          </Helmet>
          <Routes>
            <Route index={true} path="/" element={<Preview />} />
            <Route path="/home" element={<Index />} />
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
            <Route  path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
