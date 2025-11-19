import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import poolHouseImage from "@/assets/Pool house.jpg";
import garageImage from "@/assets/Extension garage.jpg";
import fenetresImage from "@/assets/Fenêtres.jpg";
import cloisonsImage from "@/assets/Cloison bois.jpg";
import dressingImage from "@/assets/Dressing.jpg";
import cuisineImage from "@/assets/Cuisine.jpg";
import escalierImage from "@/assets/Escalier.jpg";
import pergolaImage from "@/assets/Pergola.jpg";
import portailImage from "@/assets/Portail.jpg";
import solImage from "@/assets/Sol.jpg";
import surelevationImage from "@/assets/Surélévation.jpg";
import tableImage from "@/assets/Table.jpg";
import terrasseImage from "@/assets/Terrasse.jpg";
import voletsImage from "@/assets/Volet roulant.jpg";

const Realisations = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Pool House sur mesure",
      category: "Extension",
      location: "Cantal",
      description: "Création d'un pool house élégant et fonctionnel pour profiter pleinement de l'espace piscine.",
      image: poolHouseImage,
    },
    {
      title: "Extension garage",
      category: "Extension",
      location: "Cantal",
      description: "Extension garage en ossature bois, montage rapide et sur mesure.",
      image: garageImage,
    },
    {
      title: "Fenêtres sur mesure",
      category: "Menuiserie Extérieure",
      location: "Cantal",
      description: "Installation de fenêtres performantes et esthétiques pour un confort optimal.",
      image: fenetresImage,
    },
    {
      title: "Cloisons bois",
      category: "Agencement",
      location: "Cantal",
      description: "Cloisons en bois pour structurer vos espaces avec élégance et fonctionnalité.",
      image: cloisonsImage,
    },
    {
      title: "Dressing sur mesure",
      category: "Agencement",
      location: "Cantal",
      description: "Dressing fonctionnel et élégant adapté à votre style et à votre espace.",
      image: dressingImage,
    },
    {
      title: "Cuisine sur mesure",
      category: "Agencement",
      location: "Cantal",
      description: "Cuisine à votre image, fonctionnelle et élégante en bois de qualité.",
      image: cuisineImage,
    },
    {
      title: "Escalier en bois massif",
      category: "Menuiserie Intérieure",
      location: "Cantal",
      description: "Escalier sur mesure alliant sécurité, design et artisanat.",
      image: escalierImage,
    },
    {
      title: "Pergola",
      category: "Structure",
      location: "Cantal",
      description: "Pergola sur mesure pour profiter de votre extérieur en toute saison.",
      image: pergolaImage,
    },
    {
      title: "Portail sur mesure",
      category: "Menuiserie Extérieure",
      location: "Cantal",
      description: "Portail coulissant alliant sécurité, élégance et confort au quotidien.",
      image: portailImage,
    },
    {
      title: "Sol en bois",
      category: "Agencement",
      location: "Cantal",
      description: "Pose de sol offrant chaleur, élégance et confort à votre intérieur.",
      image: solImage,
    },
    {
      title: "Surélévation ossature bois",
      category: "Extension",
      location: "Cantal",
      description: "Surélévation pour gagner de l'espace sans déménager.",
      image: surelevationImage,
    },
    {
      title: "Table sur mesure",
      category: "Menuiserie Intérieure",
      location: "Cantal",
      description: "Table en bois massif alliant design, authenticité et qualité artisanale.",
      image: tableImage,
    },
    {
      title: "Terrasse en bois",
      category: "Structure",
      location: "Cantal",
      description: "Terrasse en bois créant un espace extérieur chaleureux et durable.",
      image: terrasseImage,
    },
    {
      title: "Volets roulants",
      category: "Menuiserie Extérieure",
      location: "Cantal",
      description: "Volets et protections solaires alliant confort, sécurité et esthétisme.",
      image: voletsImage,
    },
  ];

  const categories = ["Tous", "Structure", "Menuiserie Intérieure", "Menuiserie Extérieure", "Agencement", "Extension"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Nos Réalisations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets terminés
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-base text-muted-foreground line-clamp-2">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading text-primary">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedProject && (
              <div>
                <img
                  src={selectedProject.image}
                  loading="lazy" 
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{selectedProject.location}</span>
                </div>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Realisations;
