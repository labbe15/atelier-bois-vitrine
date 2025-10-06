import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, ThumbsUp, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-wood.jpg";
import charpenteImage from "@/assets/charpente.jpg";
import menuiserieImage from "@/assets/menuiserie.jpg";
import agencementImage from "@/assets/agencement.jpg";
import extensionImage from "@/assets/extension.jpg";

const Home = () => {
  const highlights = [
    { icon: Clock, title: "Devis personnalisé", description: "Réponse rapide et personnalisée" },
    { icon: CheckCircle2, title: "Pose soignée", description: "Finitions impeccables garanties" },
    { icon: ThumbsUp, title: "Matériaux adaptés", description: "Sélection rigoureuse pour chaque projet" },
    { icon: MapPin, title: "Local & réactif", description: "Proximité et disponibilité" },
  ];

  const services = [
    {
      title: "Structure",
      description: "Charpente, ossature bois, pergola, terrasses et carport",
      image: charpenteImage,
      link: "/structure/charpente",
    },
    {
      title: "Menuiserie",
      description: "Menuiserie intérieure, extérieure et escaliers sur mesure",
      image: menuiserieImage,
      link: "/menuiserie/interieur",
    },
    {
      title: "Agencement",
      description: "Dressing, cuisines, mobilier sur mesure et sols",
      image: agencementImage,
      link: "/agencement/cuisines",
    },
    {
      title: "Extension Bois",
      description: "Extension ossature bois et surélévation",
      image: extensionImage,
      link: "/extension/ossature-bois",
    },
  ];

  const testimonials = [
    {
      name: "Claire D.",
      text: "Très satisfaite de notre terrasse en bois. Travail soigné et équipe professionnelle.",
      rating: 5,
    },
    {
      name: "Hugo M.",
      text: "Excellente prestation pour notre cuisine sur mesure. À l'écoute et de bon conseil.",
      rating: 5,
    },
    {
      name: "Nina S.",
      text: "Extension réalisée dans les temps avec une qualité remarquable. Je recommande !",
      rating: 5,
    },
  ];

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
            l'atelier du volcan
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 tracking-widest text-white uppercase font-body font-light">
            Création & rénovation sur-mesure
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
          <svg className="relative block w-full h-64 md:h-80" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,15 C300,40 600,55 900,60 C1050,63 1150,60 1200,55 L1200,120 L0,120 Z" 
                  className="fill-primary opacity-90"></path>
          </svg>
          
          {/* Text inside the wave */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white px-4 pb-6">
            <h2 className="text-2xl md:text-3xl font-heading mb-3 italic drop-shadow-lg">
              « Deux artisans, une même passion : le bois »
            </h2>
            <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-body drop-shadow">
              Forts de nos compétences dans le domaine, nous avons choisi de mettre notre savoir-faire au service de vos envies. 
              Implantés sur la commune de Sansac de Marmiesse, notre atelier à trouvé sa place dans l'ancienne boîte de nuit du Volcan.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <highlight.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
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
