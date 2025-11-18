import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const AmenagementSurMesure = () => {
  return (
    <ServiceLayout
      title="Aménagement sur mesure"
      subtitle="Sublimez vos espaces avec des agencements intérieurs en bois uniques"
      description="Envie d'un intérieur chaleureux, fonctionnel et à votre image ? L'Atelier du Volcan, spécialiste de la menuiserie sur mesure à Sansac-de-Marmiesse (Cantal), conçoit et réalise vos agencements intérieurs en bois et en panneaux dérivés du bois. Du salon à la cuisine, en passant par la chambre, le bureau ou les espaces professionnels, notre équipe met tout son savoir-faire au service de l'aménagement de vos espaces de vie avec élégance, précision et durabilité."
      image={agencementImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Expertise artisanale en menuiserie bois et dérivés",
        "Agencements intérieurs sur mesure pour particuliers et professionnels",
        "Large choix de matériaux et de finitions",
        "Qualité, précision et accompagnement personnalisé",
      ]}
    />
  );
};

export default AmenagementSurMesure;
