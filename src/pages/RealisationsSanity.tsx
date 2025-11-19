import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { client, realisationsQuery, urlFor, type Realisation } from "@/lib/sanity";

const RealisationsSanity = () => {
  const [selectedProject, setSelectedProject] = useState<Realisation | null>(null);
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les réalisations depuis Sanity
  useEffect(() => {
    const fetchRealisations = async () => {
      try {
        setLoading(true);
        const data = await client.fetch<Realisation[]>(realisationsQuery);
        setRealisations(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement des réalisations:', err);
        setError('Impossible de charger les réalisations');
      } finally {
        setLoading(false);
      }
    };

    fetchRealisations();
  }, []);

  const categories = ["Tous", "Structure", "Menuiserie Intérieure", "Menuiserie Extérieure", "Agencement", "Extension"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous"
    ? realisations
    : realisations.filter(p => p.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">Chargement des réalisations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-destructive">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Nos Réalisations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos projets terminés, optimisés et gérés facilement
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
          {filteredProjects.map((project) => (
            <Card
              key={project._id}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <img
                  src={urlFor(project.mainImage)
                    .width(600)
                    .height(400)
                    .auto('format')
                    .quality(85)
                    .url()}
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
                  {project.location && (
                    <span className="text-xs text-muted-foreground">{project.location}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-base text-muted-foreground line-clamp-2">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Aucune réalisation dans cette catégorie
            </p>
          </div>
        )}

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
                  src={urlFor(selectedProject.mainImage)
                    .width(1200)
                    .height(800)
                    .auto('format')
                    .quality(90)
                    .url()}
                  loading="lazy"
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.location && (
                    <span className="text-sm text-muted-foreground">{selectedProject.location}</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{selectedProject.description}</p>

                {/* Galerie supplémentaire */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Galerie</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={urlFor(image)
                            .width(600)
                            .height(400)
                            .auto('format')
                            .quality(85)
                            .url()}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default RealisationsSanity;
