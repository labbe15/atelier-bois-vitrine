import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const Veranda = () => {
  return (
    <ServiceLayout
      title="Véranda"
      subtitle="Offrez-vous une véranda élégante et lumineuse avec L'Atelier du Volcan"
      description="Besoin d'un nouvel espace à vivre, lumineux et confortable toute l'année ? L'Atelier du Volcan, spécialiste de la menuiserie et de la charpente à Sansac-de-Marmiesse, conçoit et installe des vérandas sur mesure en aluminium ou en structure bois-aluminium dans tout le Cantal. Alliant esthétique, performance et durabilité, nos vérandas s'adaptent à tous les styles d'habitation."
      image={extensionImage}
      features={[
        "Spécialiste local en menuiserie et charpente bois à Sansac-de-Marmiesse (15)",
        "Vérandas sur mesure, durables et esthétiques",
        "Choix entre structure aluminium ou bois-aluminium",
        "Accompagnement administratif (permis, déclaration préalable)",
        "Qualité artisanale et finitions haut de gamme",
      ]}
    />
  );
};

export default Veranda;
