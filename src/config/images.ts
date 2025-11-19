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
export const serviceImages = {
  // Structure (6 services)
  structure: {
    "ossature-bois": "/src/assets/structure/ossature-bois.jpg",
    "charpente": "/src/assets/structure/charpente.jpg",
    "pergola": "/src/assets/structure/pergola.jpg",
    "terrasses": "/src/assets/structure/terrasse.jpg",
    "carport": "/src/assets/structure/carport.jpg",
    "isolation-exterieur": "/src/assets/structure/isolation-exterieur.jpg",
  },

  // Menuiserie Intérieure (7 services)
  menuiserieInterieur: {
    "escaliers": "/src/assets/menuiserie-interieur/escaliers.jpg",
    "bibliotheques": "/src/assets/menuiserie-interieur/bibliotheques.jpg",
    "tables": "/src/assets/menuiserie-interieur/tables.jpg",
    "sols": "/src/assets/menuiserie-interieur/sols.jpg",
    "portes-communication": "/src/assets/menuiserie-interieur/portes-communication.jpg",
    "mobilier": "/src/assets/menuiserie-interieur/mobilier.jpg",
    "verrieres": "/src/assets/menuiserie-interieur/verrieres.jpg",
  },

  // Menuiserie Extérieure (7 services)
  menuiserieExterieur: {
    "fenetres": "/src/assets/menuiserie-exterieur/fenetres.jpg",
    "volets": "/src/assets/menuiserie-exterieur/volets.jpg",
    "portes-entree": "/src/assets/menuiserie-exterieur/portes-entree.jpg",
    "portes-garage": "/src/assets/menuiserie-exterieur/portes-garage.jpg",
    "portails": "/src/assets/menuiserie-exterieur/portails.jpg",
    "clotures": "/src/assets/menuiserie-exterieur/clotures.jpg",
    "bardages": "/src/assets/menuiserie-exterieur/bardages.jpg",
  },

  // Agencement (4 services)
  agencement: {
    "dressing": "/src/assets/agencement/dressing.jpg",
    "cuisines": "/src/assets/agencement/cuisines.jpg",
    "amenagement": "/src/assets/agencement/amenagement.jpg",
    "cloisons": "/src/assets/agencement/cloisons.jpg",
  },

  // Extensions (6 services)
  extension: {
    "ossature-bois": "/src/assets/extension/ossature-bois.jpg",
    "garage": "/src/assets/extension/garage.jpg",
    "surelevation": "/src/assets/extension/surelevation.jpg",
    "veranda": "/src/assets/extension/veranda.jpg",
    "pool-house": "/src/assets/extension/pool-house.jpg",
    "abri-jardin": "/src/assets/extension/abri-jardin.jpg",
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
