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
// Pour le moment, utilisation des photos de catégorie comme fallback
// Remplacez par les chemins individuels une fois les photos uploadées
export const serviceImages = {
  // Structure (6 services)
  structure: {
    "ossature-bois": "/src/assets/charpente.jpg",
    "charpente": "/src/assets/charpente.jpg",
    "pergola": "/src/assets/charpente.jpg",
    "terrasses": "/src/assets/charpente.jpg",
    "carport": "/src/assets/charpente.jpg",
    "isolation-exterieur": "/src/assets/charpente.jpg",
  },

  // Menuiserie Intérieure (7 services)
  menuiserieInterieur: {
    "escaliers": "/src/assets/menuiserie.jpg",
    "bibliotheques": "/src/assets/menuiserie.jpg",
    "tables": "/src/assets/menuiserie.jpg",
    "sols": "/src/assets/menuiserie.jpg",
    "portes-communication": "/src/assets/menuiserie.jpg",
    "mobilier": "/src/assets/menuiserie.jpg",
    "verrieres": "/src/assets/menuiserie.jpg",
  },

  // Menuiserie Extérieure (7 services)
  menuiserieExterieur: {
    "fenetres": "/src/assets/menuiserie.jpg",
    "volets": "/src/assets/menuiserie.jpg",
    "portes-entree": "/src/assets/menuiserie.jpg",
    "portes-garage": "/src/assets/menuiserie.jpg",
    "portails": "/src/assets/menuiserie.jpg",
    "clotures": "/src/assets/menuiserie.jpg",
    "bardages": "/src/assets/menuiserie.jpg",
  },

  // Agencement (4 services)
  agencement: {
    "dressing": "/src/assets/agencement.jpg",
    "cuisines": "/src/assets/agencement.jpg",
    "amenagement": "/src/assets/agencement.jpg",
    "cloisons": "/src/assets/agencement.jpg",
  },

  // Extensions (6 services)
  extension: {
    "ossature-bois": "/src/assets/extension.jpg",
    "garage": "/src/assets/extension.jpg",
    "surelevation": "/src/assets/extension.jpg",
    "veranda": "/src/assets/extension.jpg",
    "pool-house": "/src/assets/extension.jpg",
    "abri-jardin": "/src/assets/extension.jpg",
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
