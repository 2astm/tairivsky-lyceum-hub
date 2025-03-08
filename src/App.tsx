
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/information" element={<div>Інформація</div>} />
          <Route path="/news" element={<div>Новини</div>} />
          <Route path="/distance-learning" element={<div>Дистанційне навчання</div>} />
          <Route path="/help-and-safety" element={<div>Допомога і безпека</div>} />
          <Route path="/institution/administration" element={<div>Адміністрація</div>} />
          <Route path="/institution/faculty" element={<div>Педагогічний колектив</div>} />
          <Route path="/institution/contacts" element={<div>Контакти</div>} />
          <Route path="/schedule" element={<div>Розклад</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
