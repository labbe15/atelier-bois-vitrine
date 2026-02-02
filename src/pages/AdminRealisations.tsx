import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { loadRealisations, type RealisationContent } from "@/lib/content-loader";
import { AlertCircle, Plus, ExternalLink } from "lucide-react";

const AdminRealisations = () => {
  const [projects, setProjects] = useState<RealisationContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Gérer les réalisations
          </h1>
          <p className="text-muted-foreground text-lg">
            Ajoutez, modifiez ou supprimez les réalisations de votre portfolio
          </p>
        </div>

        {/* Info Box */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">
                  Comment ajouter une nouvelle réalisation ?
                </h3>
                <p className="text-sm text-blue-800 mb-3">
                  Cliquez sur le bouton "Ajouter une réalisation" ci-dessous. Une interface simple s'ouvrira pour remplir les informations.
                </p>
                <div className="text-xs text-blue-700 space-y-1">
                  <p>• <strong>Titre :</strong> Nom du projet</p>
                  <p>• <strong>Catégorie :</strong> Structure, Menuiserie, Agencement ou Extension</p>
                  <p>• <strong>Lieu :</strong> Ville où se situe le projet</p>
                  <p>• <strong>Description :</strong> Détails du projet</p>
                  <p>• <strong>Image :</strong> Photo du projet</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Add Button */}
        <div className="mb-8">
          <Button
            asChild
            size="lg"
            className="gap-2"
          >
            <a href="/admin" target="_blank" rel="noopener noreferrer">
              <Plus className="h-5 w-5" />
              Ajouter une réalisation
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Realisations List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Réalisations actuelles ({projects.length})
          </h2>
          
          {projects.length === 0 ? (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <p className="text-muted-foreground">
                  Aucune réalisation pour le moment. Cliquez sur "Ajouter une réalisation" pour commencer.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 p-6">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-24 w-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          📍 {project.location}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Footer Help */}
        <div className="mt-12 p-6 bg-muted rounded-lg text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Des questions sur l'ajout de réalisations ?
          </p>
          <Button
            variant="outline"
            asChild
          >
            <a href="https://www.builder.io/c/docs/projects" target="_blank" rel="noopener noreferrer">
              Consulter la documentation
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminRealisations;
