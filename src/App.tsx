import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Escaliers from "./pages/services/Escaliers";
import Bibliotheques from "./pages/services/Bibliotheques";
import Tables from "./pages/services/Tables";
import Sols from "./pages/services/Sols";
import PortesCommunication from "./pages/services/PortesCommunication";
import MobilierSurMesure from "./pages/services/MobilierSurMesure";
import Fenetres from "./pages/services/Fenetres";
import Volets from "./pages/services/Volets";
import PortesEntree from "./pages/services/PortesEntree";
import PortesGarage from "./pages/services/PortesGarage";
import Portails from "./pages/services/Portails";
import Clotures from "./pages/services/Clotures";
import Dressing from "./pages/services/Dressing";
import Cuisines from "./pages/services/Cuisines";
import AmenagementSurMesure from "./pages/services/AmenagementSurMesure";
import ExtensionOssatureBois from "./pages/services/ExtensionOssatureBois";
import Garage from "./pages/services/Garage";
import Surelevation from "./pages/services/Surelevation";
import Veranda from "./pages/services/Veranda";
import PoolHouse from "./pages/services/PoolHouse";
import AbriJardin from "./pages/services/AbriJardin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isHomePage && <Navigation />}
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
        
        {/* Menuiserie Intérieure */}
        <Route path="/menuiserie-interieur/escaliers" element={<Escaliers />} />
        <Route path="/menuiserie-interieur/bibliotheques" element={<Bibliotheques />} />
        <Route path="/menuiserie-interieur/tables" element={<Tables />} />
        <Route path="/menuiserie-interieur/sols" element={<Sols />} />
        <Route path="/menuiserie-interieur/portes-communication" element={<PortesCommunication />} />
        <Route path="/menuiserie-interieur/mobilier" element={<MobilierSurMesure />} />
        
        {/* Menuiserie Extérieure */}
        <Route path="/menuiserie-exterieur/fenetres" element={<Fenetres />} />
        <Route path="/menuiserie-exterieur/volets" element={<Volets />} />
        <Route path="/menuiserie-exterieur/portes-entree" element={<PortesEntree />} />
        <Route path="/menuiserie-exterieur/portes-garage" element={<PortesGarage />} />
        <Route path="/menuiserie-exterieur/portails" element={<Portails />} />
        <Route path="/menuiserie-exterieur/clotures" element={<Clotures />} />
        
        {/* Agencement */}
        <Route path="/agencement/dressing" element={<Dressing />} />
        <Route path="/agencement/cuisines" element={<Cuisines />} />
        <Route path="/agencement/amenagement" element={<AmenagementSurMesure />} />
        
        {/* Extension */}
        <Route path="/extension/ossature-bois" element={<ExtensionOssatureBois />} />
        <Route path="/extension/garage" element={<Garage />} />
        <Route path="/extension/surelevation" element={<Surelevation />} />
        <Route path="/extension/veranda" element={<Veranda />} />
        <Route path="/extension/pool-house" element={<PoolHouse />} />
        <Route path="/extension/abri-jardin" element={<AbriJardin />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <IntroAnimation />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
