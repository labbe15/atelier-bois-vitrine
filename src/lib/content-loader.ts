/**
 * Content Loader - Charge le contenu depuis les fichiers JSON du CMS
 * Permet au client de modifier le contenu via l'interface admin
 */

export interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface TestimonialContent {
  name: string;
  rating: number;
  text: string;
  project_type?: string;
}

export interface RealisationContent {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  gallery?: string[];
}

export interface HomeContent {
  hero_title: string;
  hero_subtitle: string;
  hero_image: string;
  quote: {
    text: string;
    description: string;
  };
  highlights: Array<{
    title: string;
    description: string;
  }>;
  services: Array<{
    title: string;
    description: string;
    image: string;
    link: string;
  }>;
}

/**
 * Charge le contenu de la page d'accueil
 */
export async function loadHomeContent(): Promise<HomeContent> {
  try {
    const response = await fetch('/content/home.json');
    if (!response.ok) throw new Error('Failed to load home content');
    return await response.json();
  } catch (error) {
    console.error('Error loading home content:', error);
    throw error;
  }
}

/**
 * Charge le contenu d'un service spécifique
 * @param category - structure, menuiserie, agencement, extension
 * @param service - nom du service (ex: charpente, escaliers, etc.)
 */
export async function loadServiceContent(
  category: string,
  service: string
): Promise<ServiceContent> {
  try {
    const response = await fetch(`/content/services/${category}/${service}.json`);
    if (!response.ok) throw new Error(`Failed to load service content: ${category}/${service}`);
    return await response.json();
  } catch (error) {
    console.error(`Error loading service content (${category}/${service}):`, error);
    throw error;
  }
}

/**
 * Charge tous les témoignages
 */
export async function loadTestimonials(): Promise<TestimonialContent[]> {
  try {
    // En production, vous devriez avoir un endpoint API qui liste les fichiers
    // Pour l'instant, on charge les fichiers connus
    const testimonialFiles = ['hugo-m', 'claire-d', 'nina-s'];
    const testimonials = await Promise.all(
      testimonialFiles.map(async (file) => {
        try {
          const response = await fetch(`/content/testimonials/${file}.json`);
          if (!response.ok) return null;
          return await response.json();
        } catch {
          return null;
        }
      })
    );
    return testimonials.filter((t): t is TestimonialContent => t !== null);
  } catch (error) {
    console.error('Error loading testimonials:', error);
    return [];
  }
}

/**
 * Charge toutes les réalisations depuis le CMS
 * Charge d'abord l'index pour obtenir la liste des fichiers disponibles
 */
export async function loadRealisations(): Promise<RealisationContent[]> {
  try {
    // Essayer de charger depuis l'API d'abord (production Vercel)
    try {
      const apiResponse = await fetch('/api/realisations', { method: 'GET' });
      if (apiResponse.ok) {
        return await apiResponse.json();
      }
    } catch (e) {
      // API non disponible, continuer avec index.json
    }

    // Fallback: charger depuis index.json (pour dev local et fallback)
    const indexResponse = await fetch('/content/realisations/index.json');
    if (!indexResponse.ok) throw new Error('Failed to load realisations index');

    const fileList: string[] = await indexResponse.json();
    const realisations = await Promise.all(
      fileList.map(async (file) => {
        try {
          const response = await fetch(`/content/realisations/${file}.json`);
          if (!response.ok) return null;
          return await response.json();
        } catch {
          return null;
        }
      })
    );

    return realisations.filter((r): r is RealisationContent => r !== null);
  } catch (error) {
    console.error('Error loading realisations:', error);
    return [];
  }
}
