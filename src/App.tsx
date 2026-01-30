import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import MarketingHubProject from "./pages/projects/MarketingHubProject";
import RuralLandMarketplaceProject from "./pages/projects/RuralLandMarketplaceProject";
import GamingNewsSiteProject from "./pages/projects/GamingNewsSiteProject";
import IntelligenceOverInventoryProject from "./pages/projects/IntelligenceOverInventoryProject";
import StyleGuide from "./pages/StyleGuide";
import CardPlayground from "./pages/CardPlayground";
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
          <Route path="/about" element={<About />} />
          <Route path="/projects/marketing-hub" element={<MarketingHubProject />} />
          <Route path="/projects/rural-land-marketplace" element={<RuralLandMarketplaceProject />} />
          <Route path="/projects/gaming-news-site" element={<GamingNewsSiteProject />} />
          <Route path="/projects/intelligence-over-inventory" element={<IntelligenceOverInventoryProject />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/playground" element={<CardPlayground />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
