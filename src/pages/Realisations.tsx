import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { loadRealisations, type RealisationContent } from "@/lib/content-loader";

const Realisations = () => {
  const [selectedProject, setSelectedProject] = useState<RealisationContent | null>(null);
  const [projects, setProjects] = useState<RealisationContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Tous");

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await loadRealisations();
        setProjects(data);
      } catch (error) {
        console.error('Failed to load realisations:', error);
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Chargement...</p>
      </div>
    );
  }

  // Extract unique categories from projects
  const uniqueCategories = Array.from(new Set(projects.map(p => p.category)));
  const categories = ["Tous", ...uniqueCategories];

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
