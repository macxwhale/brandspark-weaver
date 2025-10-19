import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EastAfrica from "./pages/destinations/EastAfrica";
import SouthernAfrica from "./pages/destinations/SouthernAfrica";
import NorthAfrica from "./pages/destinations/NorthAfrica";
import EuropeAsia from "./pages/destinations/EuropeAsia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations/east-africa" element={<EastAfrica />} />
          <Route path="/destinations/southern-africa" element={<SouthernAfrica />} />
          <Route path="/destinations/north-africa" element={<NorthAfrica />} />
          <Route path="/destinations/europe-asia" element={<EuropeAsia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
