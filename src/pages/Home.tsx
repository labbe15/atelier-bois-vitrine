import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, ThumbsUp, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import { loadHomeContent, loadTestimonials, type HomeContent, type TestimonialContent } from "@/lib/content-loader";
import heroImage from "@/assets/hero-wood.jpg";
import charpenteImage from "@/assets/charpente.jpg";
import menuiserieImage from "@/assets/menuiserie.jpg";
import agencementImage from "@/assets/agencement.jpg";
import extensionImage from "@/assets/extension.jpg";

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${heroImage})`,
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
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={service.link}>En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
