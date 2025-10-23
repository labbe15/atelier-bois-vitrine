import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceLayout from "./ServiceLayout";
import { loadServiceContent, type ServiceContent } from "@/lib/content-loader";

/**
 * Composant qui charge dynamiquement le contenu d'un service depuis JSON
 * Le client peut modifier le contenu via le CMS admin sans toucher au code
 */
const DynamicServiceLayout = () => {
  const { category, service } = useParams<{ category: string; service: string }>();
  const [content, setContent] = useState<ServiceContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      if (!category || !service) {
        setError("Paramètres de route manquants");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await loadServiceContent(category, service);
        setContent(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load service content:', err);
        setError("Impossible de charger le contenu du service");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [category, service]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-4 text-lg">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Service non trouvé</h2>
          <p className="text-muted-foreground mb-6">
            {error || "Le contenu de ce service n'est pas disponible."}
          </p>
          <a href="/" className="text-primary hover:underline">
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  // Mapping des catégories vers les images par défaut
  const getServiceImage = () => {
    // Essaie d'importer dynamiquement l'image depuis les assets
    try {
      // Si l'image commence par /src/assets, on utilise l'import statique
      if (content.image.startsWith('/src/assets/')) {
        const imageName = content.image.replace('/src/assets/', '');
        // Pour l'instant, on retourne l'image telle quelle
        // En production, il faudrait configurer Vite pour gérer les imports dynamiques
        return content.image;
      }
      return content.image;
    } catch {
      return content.image;
    }
  };

  return (
    <ServiceLayout
      title={content.title}
      subtitle={content.subtitle}
      description={content.description}
      image={getServiceImage()}
      features={content.features}
    />
  );
};

export default DynamicServiceLayout;
