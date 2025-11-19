import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import charpenteImage from "@/assets/charpente.jpg";
import menuiserieImage from "@/assets/menuiserie.jpg";
import agencementImage from "@/assets/agencement.jpg";
import extensionImage from "@/assets/extension.jpg";

const Realisations = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Charpente traditionnelle",
      category: "Structure",
      location: "Sansac de Marmiesse",
      description: "Réalisation d'une charpente traditionnelle en chêne pour une maison de caractère. Taille et assemblage à l'ancienne.",
      image: charpenteImage,
    },
    {
      title: "Cuisine sur mesure",
      category: "Agencement",
      location: "Aurillac",
      description: "Conception et installation d'une cuisine complète en bois massif avec plan de travail en chêne.",
      image: agencementImage,
    },
    {
      title: "Extension ossature bois",
      category: "Extension",
      location: "Polminhac",
      description: "Extension de 30m² en ossature bois, isolation haute performance et bardage douglas.",
      image: extensionImage,
    },
    {
      title: "Menuiserie extérieure",
      category: "Menuiserie",
      location: "Vic-sur-Cère",
      description: "Fenêtres et volets en bois sur mesure pour une rénovation complète.",
      image: menuiserieImage,
    },
    {
      title: "Terrasse en bois",
      category: "Structure",
      location: "Arpajon-sur-Cère",
      description: "Terrasse en bois exotique de 50m² avec garde-corps intégré.",
      image: charpenteImage,
    },
    {
      title: "Dressing sur mesure",
      category: "Agencement",
      location: "Ytrac",
      description: "Dressing modulable optimisant l'espace sous combles avec finitions soignées.",
      image: agencementImage,
    },
    {
      title: "Pergola bioclimatique",
      category: "Structure",
      location: "Crandelles",
      description: "Pergola en bois avec lames orientables pour profiter du jardin toute l'année.",
      image: charpenteImage,
    },
    {
      title: "Escalier intérieur",
      category: "Menuiserie",
      location: "Aurillac",
      description: "Escalier quart tournant en chêne massif avec contremarches intégrées.",
      image: menuiserieImage,
    },
    {
      title: "Carport double",
      category: "Structure",
      location: "Sansac de Marmiesse",
      description: "Carport double en ossature bois et toiture bac acier anthracite.",
      image: charpenteImage,
    },
    {
      title: "Mobilier sur mesure",
      category: "Agencement",
      location: "Naucelles",
      description: "Bibliothèque murale et bureau intégrés en noyer massif.",
      image: agencementImage,
    },
    {
      title: "Surélévation",
      category: "Extension",
      location: "Saint-Paul-des-Landes",
      description: "Surélévation ossature bois pour création de deux chambres et salle de bains.",
      image: extensionImage,
    },
    {
      title: "Bardage bois",
      category: "Menuiserie",
      location: "Laroquebrou",
      description: "Pose de bardage en mélèze pour isolation extérieure et ravalement de façade.",
      image: menuiserieImage,
    },
  ];

  const categories = ["Tous", "Structure", "Menuiserie", "Agencement", "Extension"];
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
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
