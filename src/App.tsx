import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Realisations from "./pages/Realisations";
import Charpente from "./pages/services/Charpente";
import OssatureBois from "./pages/services/OssatureBois";
import Pergola from "./pages/services/Pergola";
import Terrasses from "./pages/services/Terrasses";
import Carport from "./pages/services/Carport";
import MenuiserieInterieur from "./pages/services/MenuiserieInterieur";
import MenuiserieExterieur from "./pages/services/MenuiserieExterieur";
import Escaliers from "./pages/services/Escaliers";
import Sols from "./pages/services/Sols";
import Dressing from "./pages/services/Dressing";
import Cuisines from "./pages/services/Cuisines";
import MobilierSurMesure from "./pages/services/MobilierSurMesure";
import ExtensionOssatureBois from "./pages/services/ExtensionOssatureBois";
import Surelevation from "./pages/services/Surelevation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <IntroAnimation />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/avis" element={<Testimonials />} />
          <Route path="/realisations" element={<Realisations />} />
          
          {/* Structure */}
          <Route path="/structure/charpente" element={<Charpente />} />
          <Route path="/structure/ossature-bois" element={<OssatureBois />} />
          <Route path="/structure/pergola" element={<Pergola />} />
          <Route path="/structure/terrasses" element={<Terrasses />} />
          <Route path="/structure/carport" element={<Carport />} />
          
          {/* Menuiserie */}
          <Route path="/menuiserie/interieur" element={<MenuiserieInterieur />} />
          <Route path="/menuiserie/exterieur" element={<MenuiserieExterieur />} />
          <Route path="/menuiserie/escaliers" element={<Escaliers />} />
          
          {/* Agencement */}
          <Route path="/agencement/sols" element={<Sols />} />
          <Route path="/agencement/dressing" element={<Dressing />} />
          <Route path="/agencement/cuisines" element={<Cuisines />} />
          <Route path="/agencement/mobilier" element={<MobilierSurMesure />} />
          
          {/* Extension */}
          <Route path="/extension/ossature-bois" element={<ExtensionOssatureBois />} />
          <Route path="/extension/surelevation" element={<Surelevation />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
