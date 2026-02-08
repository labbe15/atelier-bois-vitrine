import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, ThumbsUp, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import { loadHomeContent, loadTestimonials, type HomeContent, type TestimonialContent } from "@/lib/content-loader";
import { heroImage, categoryImages } from "@/config/images";
import { serviceImagesMap, categoryImagesCustom, heroImageCustom } from "@/config/service-images";

// Utilisation des images depuis la configuration centralisée
const charpenteImage = categoryImagesCustom.structure;
const menuiserieImage = categoryImagesCustom.menuiserieInterieur;
const menuiserieExtImage = categoryImagesCustom.menuiserieExterieur;
const agencementImage = categoryImagesCustom.agencement;
const extensionImage = categoryImagesCustom.extension;

const Home = () => {
  const [content, setContent] = useState<HomeContent | null>(null);
  const [testimonials, setTestimonials] = useState<TestimonialContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const [homeData, testimonialsData] = await Promise.all([
          loadHomeContent(),
          loadTestimonials()
        ]);
        setContent(homeData);
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error('Failed to load content:', error);
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, []);

  // Fallback par défaut en cas d'erreur de chargement
  const highlights = content?.highlights || [
    { title: "Devis personnalisé", description: "Réponse rapide et personnalisée" },
    { title: "Pose soignée", description: "Finitions impeccables garanties" },
    { title: "Matériaux adaptés", description: "Sélection rigoureuse pour chaque projet" },
    { title: "Local & réactif", description: "Proximité et disponibilité" },
  ];

  const highlightIcons = [Clock, CheckCircle2, ThumbsUp, MapPin];

  // Mapping des images pour les services
  const serviceImages: Record<string, string> = {
    Structure: charpenteImage,
    Menuiserie: menuiserieImage,
    Agencement: agencementImage,
    "Extension Bois": extensionImage,
  };

  const services = content?.services.map(service => ({
    ...service,
    image: serviceImages[service.title] || service.image,
  })) || [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Chargement...</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section with integrated transparent navigation */}
      <section
        className="relative h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${heroImageCustom})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navigation />
        <div className="container mx-auto px-4 animate-slide-up z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            {content?.hero_title || "L'Atelier du Volcan"}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 tracking-widest text-white uppercase font-body font-light">
            {content?.hero_subtitle || "Création & rénovation sur-mesure"}
          </p>
          <Button
            size="lg"
            asChild
            className="text-lg px-10 py-7 rounded-full bg-white text-foreground hover:bg-white/90 shadow-lg font-body font-medium"
          >
            <Link to="/contact">Contactez nous</Link>
          </Button>
        </div>

        {/* Bottom Wave - Green with transparency */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-80 md:h-80" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,15 C300,40 600,55 900,60 C1050,63 1150,60 1200,55 L1200,120 L0,120 Z"
                  className="fill-primary opacity-90"></path>
          </svg>

          {/* Text inside the wave */}
          <div className="absolute bottom-8 md:bottom-6 left-0 right-0 text-center text-white px-4 pb-4 md:pb-6">
            <h2 className="text-xl md:text-3xl font-heading mb-2 md:mb-3 italic drop-shadow-lg">
              {content?.quote.text || "« Deux artisans, une même passion : le bois »"}
            </h2>
            <p className="text-xs md:text-base max-w-3xl mx-auto leading-relaxed font-body drop-shadow">
              {content?.quote.description || "Forts de nos compétences dans le domaine, nous avons choisi de mettre notre savoir-faire au service de vos envies."}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlightIcons[index] || Clock;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-base text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-12 text-primary">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto">
            {/* Structure */}
            <Card className="overflow-hidden group relative cursor-pointer h-56">
              <div className="h-full overflow-hidden relative">
                <img
                  src={charpenteImage}
                  alt="Structure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">Structure</h3>
                  <p className="text-xs text-white/80 mt-1">Survolez pour découvrir</p>
                </div>
              </div>

              {/* Hover overlay with sub-services */}
              <div className="absolute inset-0 bg-white/98 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto p-4">
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Structure</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/structure/ossature-bois" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.structure["ossature-bois"]} alt="Maison ossature bois" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Maison ossature bois</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/structure/charpente" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.structure.charpente} alt="Charpente" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Charpente</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/structure/pergola" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.structure.pergola} alt="Pergola" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Pergola</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/structure/carport" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.structure.carport} alt="Carport" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Carport</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/structure/terrasse" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.structure.terrasses} alt="Terrasse" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Terrasse</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/structure/isolation-exterieur" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.structure["isolation-exterieur"]} alt="Isolation par l'extérieur" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Isolation par l'extérieur</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Menuiserie Intérieure */}
            <Card className="overflow-hidden group relative cursor-pointer h-56">
              <div className="h-full overflow-hidden relative">
                <img
                  src={menuiserieImage}
                  alt="Menuiserie Intérieure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">Menuiserie Intérieure</h3>
                  <p className="text-xs text-white/80 mt-1">Survolez pour découvrir</p>
                </div>
              </div>

              {/* Hover overlay with sub-services */}
              <div className="absolute inset-0 bg-white/98 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto p-4">
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Menuiserie Intérieure</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/menuiserie-interieur/escaliers" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieInterieur.escaliers} alt="Escaliers" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Escaliers</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-interieur/tables" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieInterieur.tables} alt="Tables" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Tables</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-interieur/sols" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieInterieur.sols} alt="Sols" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Sols</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-interieur/portes-communication" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={menuiserieImage} alt="Portes intérieures" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Portes intérieures</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-interieur/mobilier-sur-mesure" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieInterieur.mobilier} alt="Mobilier sur mesure" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Mobilier sur mesure</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-interieur/verrieres" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieInterieur.verrieres} alt="Verrières" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Verrières</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-interieur/bibliotheques" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieInterieur.bibliotheques} alt="Bibliothèques" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Bibliothèques</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Menuiserie Extérieure */}
            <Card className="overflow-hidden group relative cursor-pointer h-56">
              <div className="h-full overflow-hidden relative">
                <img
                  src={menuiserieExtImage}
                  alt="Menuiserie Extérieure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">Menuiserie Extérieure</h3>
                  <p className="text-xs text-white/80 mt-1">Survolez pour découvrir</p>
                </div>
              </div>

              {/* Hover overlay with sub-services */}
              <div className="absolute inset-0 bg-white/98 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto p-4">
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Menuiserie Extérieure</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/menuiserie-exterieur/fenetres" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieExterieur.fenetres} alt="Fenêtres" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Fenêtres</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-exterieur/volets" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieExterieur.volets} alt="Volets & Protections solaires" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Volets & Protections solaires</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-exterieur/portes-entree" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieExterieur["portes-entree"]} alt="Portes d'entrée" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Portes d'entrée</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-exterieur/portes-garage" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieExterieur["portes-garage"]} alt="Portes de garage" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Portes de garage</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-exterieur/portails" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieExterieur.portails} alt="Portails" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Portails</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-exterieur/clotures" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieExterieur.clotures} alt="Clôtures" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Clôtures</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/menuiserie-exterieur/bardages" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.menuiserieExterieur.bardages} alt="Bardages" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Bardages</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Agencement */}
            <Card className="overflow-hidden group relative cursor-pointer h-56">
              <div className="h-full overflow-hidden relative">
                <img
                  src={agencementImage}
                  alt="Agencement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">Agencement</h3>
                  <p className="text-xs text-white/80 mt-1">Survolez pour découvrir</p>
                </div>
              </div>

              {/* Hover overlay with sub-services */}
              <div className="absolute inset-0 bg-white/98 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto p-4">
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Agencement</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/agencement/dressing" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.agencement.dressing} alt="Dressing" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Dressing</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/agencement/cuisines" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.agencement.cuisines} alt="Cuisines" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Cuisines</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/agencement/amenagement-sur-mesure" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.agencement.amenagement} alt="Aménagement sur mesure" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Aménagement sur mesure</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/agencement/amenagement-vehicules" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.agencement["amenagement-vehicules"]} alt="Aménagement des véhicules" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Aménagement des véhicules</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/agencement/cloisons" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.agencement.cloisons} alt="Cloisons" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Cloisons</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Extensions */}
            <Card className="overflow-hidden group relative cursor-pointer h-56">
              <div className="h-full overflow-hidden relative">
                <img
                  src={extensionImage}
                  alt="Extensions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">Extensions</h3>
                  <p className="text-xs text-white/80 mt-1">Survolez pour découvrir</p>
                </div>
              </div>

              {/* Hover overlay with sub-services */}
              <div className="absolute inset-0 bg-white/98 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto p-4">
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Extensions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/extension/ossature-bois" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.extension["ossature-bois"]} alt="Extension ossature bois" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Extension ossature bois</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/extension/garage" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.extension.garage} alt="Garage" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Garage</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/extension/surelevation" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.extension.surelevation} alt="Surélévation" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Surélévation</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/extension/veranda" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.extension.veranda} alt="Véranda" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Véranda</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/extension/pool-house" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.extension["pool-house"]} alt="Pool House" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Pool House</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/extension/abri-jardin" className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="h-20 overflow-hidden">
                        <img src={serviceImagesMap.extension["abri-jardin"]} alt="Studio de jardin" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-2">
                        <p className="text-xs font-medium text-center">Studio de jardin</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-12 text-primary">
            Ils nous font confiance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-sm mb-4 italic">{testimonial.text}</p>
                  <p className="font-semibold text-sm">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/avis">Voir tous les avis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit sous 48h
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
