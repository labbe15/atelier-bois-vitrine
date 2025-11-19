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
// Utilisation des noms de fichiers exacts uploadés par l'utilisateur
export const serviceImages = {
  // Structure (6 services)
  structure: {
    "ossature-bois": "/src/assets/charpente.jpg", // Fallback
    "charpente": "/src/assets/charpente.jpg",
    "pergola": "/src/assets/Pergola.jpg",
    "terrasses": "/src/assets/Terrasse.jpg",
    "carport": "/src/assets/charpente.jpg", // Fallback
    "isolation-exterieur": "/src/assets/charpente.jpg", // Fallback
  },

  // Menuiserie Intérieure (7 services)
  menuiserieInterieur: {
    "escaliers": "/src/assets/Escalier.jpg",
    "bibliotheques": "/src/assets/menuiserie.jpg", // Fallback
    "tables": "/src/assets/Table.jpg",
    "sols": "/src/assets/Sol.jpg",
    "portes-communication": "/src/assets/menuiserie.jpg", // Fallback
    "mobilier": "/src/assets/menuiserie.jpg", // Fallback
    "verrieres": "/src/assets/menuiserie.jpg", // Fallback
  },

  // Menuiserie Extérieure (7 services)
  menuiserieExterieur: {
    "fenetres": "/src/assets/Fenêtres.jpg",
    "volets": "/src/assets/Volet battant.jpg",
    "portes-entree": "/src/assets/menuiserie.jpg", // Fallback
    "portes-garage": "/src/assets/menuiserie.jpg", // Fallback
    "portails": "/src/assets/Portail.jpg",
    "clotures": "/src/assets/menuiserie.jpg", // Fallback
    "bardages": "/src/assets/BSO.jpg",
  },

  // Agencement (4 services)
  agencement: {
    "dressing": "/src/assets/Dressing.jpg",
    "cuisines": "/src/assets/Cuisine.jpg",
    "amenagement": "/src/assets/Aménagement sur mesure.jpg",
    "cloisons": "/src/assets/Cloison bois.jpg",
  },

  // Extensions (6 services)
  extension: {
    "ossature-bois": "/src/assets/extension.jpg", // Fallback
    "garage": "/src/assets/Extension garage.jpg",
    "surelevation": "/src/assets/Surélévation.jpg",
    "veranda": "/src/assets/extension.jpg", // Fallback
    "pool-house": "/src/assets/Pool house.jpg",
    "abri-jardin": "/src/assets/extension.jpg", // Fallback
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
