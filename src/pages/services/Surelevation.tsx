import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const Surelevation = () => {
  return (
    <ServiceLayout
      title="Surélévation"
      subtitle="Gagnez de l'espace sans déménager grâce à la surélévation en ossature bois"
      description="Besoin d'agrandir votre maison sans empiéter sur votre terrain ? L'Atelier du Volcan, spécialiste de la charpente et de la menuiserie sur mesure à Sansac-de-Marmiesse (Cantal), vous propose des surélévations de maison en ossature bois à la fois rapides, esthétiques et durables."
      image={extensionImage}
      features={[
        "Entreprise locale basée à Sansac-de-Marmiesse dans le Cantal (15)",
        "Expertise artisanale en charpente et ossature bois",
        "Surélévation rapide, propre et durable",
        "Matériaux esthétiques et performants",
        "Finitions intérieures et extérieures personnalisées",
        "Aide aux démarches administratives",
      ]}
    />
  );
};

export default Surelevation;
