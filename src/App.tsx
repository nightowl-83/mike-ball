import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MobileBankingProject from "./pages/projects/MobileBankingProject";
import RuralLandMarketplaceProject from "./pages/projects/RuralLandMarketplaceProject";
import EcommerceProject from "./pages/projects/EcommerceProject";
import AnalyticsDashboardProject from "./pages/projects/AnalyticsDashboardProject";
import ColorSystem from "./pages/ColorSystem";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/mobile-banking" element={<MobileBankingProject />} />
          <Route path="/projects/rural-land-marketplace" element={<RuralLandMarketplaceProject />} />
          <Route path="/projects/ecommerce-platform" element={<EcommerceProject />} />
          <Route path="/projects/analytics-dashboard" element={<AnalyticsDashboardProject />} />
          <Route path="/color-system" element={<ColorSystem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
