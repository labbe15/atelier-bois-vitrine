import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const Cuisines = () => {
  return (
    <ServiceLayout
      title="Cuisines"
      subtitle="Créez une cuisine à votre image, fonctionnelle et élégante"
      description="Vous rêvez d'une cuisine sur mesure qui allie esthétique, confort et qualité artisanale ? L'Atelier du Volcan, entreprise de menuiserie et d'agencement intérieur à Sansac-de-Marmiesse (Cantal), conçoit et installe des cuisines uniques, fabriquées à partir de matériaux durables et nobles. Chaque projet est pensé pour s'adapter parfaitement à votre espace, à votre style et à votre mode de vie."
      image={agencementImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Création artisanale de cuisines sur mesure",
        "Matériaux nobles et durables",
        "Design personnalisé et finitions haut de gamme",
        "Accompagnement complet de la conception à la pose",
      ]}
    />
  );
};

export default Cuisines;
