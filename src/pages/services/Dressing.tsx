import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const Dressing = () => {
  return (
    <ServiceLayout
      title="Dressing"
      subtitle="Le dressing sur mesure qui s'adapte à votre style et à votre espace"
      description="Vous rêvez d'un dressing fonctionnel, élégant et parfaitement organisé ? L'Atelier du Volcan, votre spécialiste en menuiserie et agencement intérieur à Sansac-de-Marmiesse (Cantal), conçoit et installe des dressings sur mesure alliant esthétique, praticité et qualité artisanale. Parce que chaque intérieur est unique, nous imaginons un espace de rangement personnalisé, optimisé selon vos besoins et vos envies."
      image={agencementImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Fabrication artisanale de dressings sur mesure",
        "Matériaux durables et esthétiques",
        "Optimisation des espaces et design personnalisé",
        "Accompagnement complet, de la conception à la pose",
      ]}
    />
  );
};

export default Dressing;
