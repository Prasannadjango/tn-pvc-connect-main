import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AiPvcGroups from "./pages/AiPvcGroups.tsx";
import Anubrindha from "./pages/Anubrindha.tsx";
import Benefits from "./pages/Benefits.tsx";
import Clients from "./pages/Clients.tsx";
import Contractors from "./pages/Contractors.tsx";
import Index from "./pages/Index.tsx";
import Labour from "./pages/Labour.tsx";
import Network from "./pages/Network.tsx";
import NotFound from "./pages/NotFound.tsx";
import SiranthanSiran from "./pages/SiranthanSiran.tsx";
import Srinivasan from "./pages/Srinivasan.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/network" element={<Network />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/labour" element={<Labour />} />
          <Route path="/ai-pvc-groups" element={<AiPvcGroups />} />
          <Route path="/siranthan-siran" element={<SiranthanSiran />} />
          <Route path="/srinivasan" element={<Srinivasan />} />
          <Route path="/anubrindha" element={<Anubrindha />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
