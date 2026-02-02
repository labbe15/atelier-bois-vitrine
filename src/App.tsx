import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";

// Eager loading pour les pages principales (accès immédiat)
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// Lazy loading pour les pages secondaires (chargement à la demande)
const About = lazy(() => import("./pages/About"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Realisations = lazy(() => import("./pages/Realisations"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy loading pour toutes les pages de services
const Charpente = lazy(() => import("./pages/services/Charpente"));
const OssatureBois = lazy(() => import("./pages/services/OssatureBois"));
const Pergola = lazy(() => import("./pages/services/Pergola"));
const Terrasses = lazy(() => import("./pages/services/Terrasses"));
const Carport = lazy(() => import("./pages/services/Carport"));
const IsolationExterieur = lazy(() => import("./pages/services/IsolationExterieur"));
const Escaliers = lazy(() => import("./pages/services/Escaliers"));
const Bibliotheques = lazy(() => import("./pages/services/Bibliotheques"));
const Tables = lazy(() => import("./pages/services/Tables"));
const Sols = lazy(() => import("./pages/services/Sols"));
const PortesCommunication = lazy(() => import("./pages/services/PortesCommunication"));
const MobilierSurMesure = lazy(() => import("./pages/services/MobilierSurMesure"));
const Verrieres = lazy(() => import("./pages/services/Verrieres"));
const Fenetres = lazy(() => import("./pages/services/Fenetres"));
const Volets = lazy(() => import("./pages/services/Volets"));
const PortesEntree = lazy(() => import("./pages/services/PortesEntree"));
const PortesGarage = lazy(() => import("./pages/services/PortesGarage"));
const Portails = lazy(() => import("./pages/services/Portails"));
const Clotures = lazy(() => import("./pages/services/Clotures"));
const Bardages = lazy(() => import("./pages/services/Bardages"));
const Dressing = lazy(() => import("./pages/services/Dressing"));
const Cuisines = lazy(() => import("./pages/services/Cuisines"));
const AmenagementSurMesure = lazy(() => import("./pages/services/AmenagementSurMesure"));
const AmenagementVehicules = lazy(() => import("./pages/services/AmenagementVehicules"));
const Cloisons = lazy(() => import("./pages/services/Cloisons"));
const ExtensionOssatureBois = lazy(() => import("./pages/services/ExtensionOssatureBois"));
const Garage = lazy(() => import("./pages/services/Garage"));
const Surelevation = lazy(() => import("./pages/services/Surelevation"));
const Veranda = lazy(() => import("./pages/services/Veranda"));
const PoolHouse = lazy(() => import("./pages/services/PoolHouse"));
const AbriJardin = lazy(() => import("./pages/services/AbriJardin"));

// Composant de chargement
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="mt-4 text-lg text-muted-foreground">Chargement...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isHomePage && <Navigation />}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/avis" element={<Testimonials />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />

          {/* Structure */}
          <Route path="/structure/charpente" element={<Charpente />} />
          <Route path="/structure/ossature-bois" element={<OssatureBois />} />
          <Route path="/structure/pergola" element={<Pergola />} />
          <Route path="/structure/terrasses" element={<Terrasses />} />
          <Route path="/structure/carport" element={<Carport />} />
          <Route path="/structure/isolation-exterieur" element={<IsolationExterieur />} />

          {/* Menuiserie Intérieure */}
          <Route path="/menuiserie-interieur/escaliers" element={<Escaliers />} />
          <Route path="/menuiserie-interieur/bibliotheques" element={<Bibliotheques />} />
          <Route path="/menuiserie-interieur/tables" element={<Tables />} />
          <Route path="/menuiserie-interieur/sols" element={<Sols />} />
          <Route path="/menuiserie-interieur/portes-communication" element={<PortesCommunication />} />
          <Route path="/menuiserie-interieur/mobilier" element={<MobilierSurMesure />} />
          <Route path="/menuiserie-interieur/verrieres" element={<Verrieres />} />

          {/* Menuiserie Extérieure */}
          <Route path="/menuiserie-exterieur/fenetres" element={<Fenetres />} />
          <Route path="/menuiserie-exterieur/volets" element={<Volets />} />
          <Route path="/menuiserie-exterieur/portes-entree" element={<PortesEntree />} />
          <Route path="/menuiserie-exterieur/portes-garage" element={<PortesGarage />} />
          <Route path="/menuiserie-exterieur/portails" element={<Portails />} />
          <Route path="/menuiserie-exterieur/clotures" element={<Clotures />} />
          <Route path="/menuiserie-exterieur/bardages" element={<Bardages />} />

          {/* Agencement */}
          <Route path="/agencement/dressing" element={<Dressing />} />
          <Route path="/agencement/cuisines" element={<Cuisines />} />
          <Route path="/agencement/amenagement" element={<AmenagementSurMesure />} />
          <Route path="/agencement/amenagement-vehicules" element={<AmenagementVehicules />} />
          <Route path="/agencement/cloisons" element={<Cloisons />} />

          {/* Extension */}
          <Route path="/extension/ossature-bois" element={<ExtensionOssatureBois />} />
          <Route path="/extension/garage" element={<Garage />} />
          <Route path="/extension/surelevation" element={<Surelevation />} />
          <Route path="/extension/veranda" element={<Veranda />} />
          <Route path="/extension/pool-house" element={<PoolHouse />} />
          <Route path="/extension/abri-jardin" element={<AbriJardin />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
