// Configuration centralisée de toutes les images du site
// Remplacez les chemins par vos propres images

// Page d'accueil
export const heroImage = "/src/assets/hero-wood.jpg";

// Images par catégorie pour les cartes principales
export const categoryImages = {
  structure: "/src/assets/charpente.jpg",
  menuiserieInterieur: "/src/assets/menuiserie.jpg",
  menuiserieExterieur: "/src/assets/menuiserie.jpg",
  agencement: "/src/assets/agencement.jpg",
  extension: "/src/assets/extension.jpg",
};

// Images spécifiques pour chaque service
// Noms de fichiers simplifiés (ex: cuisine.jpg, escaliers.jpg, etc.)
// Si le fichier n'existe pas, le fallback utilisera l'image de catégorie
export const serviceImages = {
  // Structure (6 services)
  structure: {
    "ossature-bois": "/src/assets/ossature-bois.jpg",
    "charpente": "/src/assets/charpente.jpg",
    "pergola": "/src/assets/pergola.jpg",
    "terrasses": "/src/assets/terrasse.jpg",
    "carport": "/src/assets/carport.jpg",
    "isolation-exterieur": "/src/assets/isolation.jpg",
  },

  // Menuiserie Intérieure (7 services)
  menuiserieInterieur: {
    "escaliers": "/src/assets/escaliers.jpg",
    "bibliotheques": "/src/assets/bibliotheques.jpg",
    "tables": "/src/assets/tables.jpg",
    "sols": "/src/assets/sols.jpg",
    "portes-communication": "/src/assets/portes.jpg",
    "mobilier": "/src/assets/mobilier.jpg",
    "verrieres": "/src/assets/verrieres.jpg",
  },

  // Menuiserie Extérieure (7 services)
  menuiserieExterieur: {
    "fenetres": "/src/assets/fenetres.jpg",
    "volets": "/src/assets/volets.jpg",
    "portes-entree": "/src/assets/portes-entree.jpg",
    "portes-garage": "/src/assets/portes-garage.jpg",
    "portails": "/src/assets/portails.jpg",
    "clotures": "/src/assets/clotures.jpg",
    "bardages": "/src/assets/bardages.jpg",
  },

  // Agencement (4 services)
  agencement: {
    "dressing": "/src/assets/dressing.jpg",
    "cuisines": "/src/assets/cuisine.jpg",
    "amenagement": "/src/assets/amenagement.jpg",
    "cloisons": "/src/assets/cloisons.jpg",
  },

  // Extensions (6 services)
  extension: {
    "ossature-bois": "/src/assets/extension-ossature.jpg",
    "garage": "/src/assets/garage.jpg",
    "surelevation": "/src/assets/surelevation.jpg",
    "veranda": "/src/assets/veranda.jpg",
    "pool-house": "/src/assets/pool-house.jpg",
    "abri-jardin": "/src/assets/studio-jardin.jpg",
  },
};

// Fonction helper pour récupérer l'image d'un service
export const getServiceImage = (category: string, serviceName: string): string => {
  const categoryKey = category as keyof typeof serviceImages;
  const serviceKey = serviceName as string;

  if (serviceImages[categoryKey] && serviceImages[categoryKey][serviceKey]) {
    return serviceImages[categoryKey][serviceKey];
  }

  // Fallback sur l'image de la catégorie
  return categoryImages[categoryKey] || categoryImages.structure;
};
