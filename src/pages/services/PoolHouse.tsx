import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const PoolHouse = () => {
  return (
    <ServiceLayout
      title="Pool House"
      subtitle="Créez un espace élégant et fonctionnel autour de votre piscine"
      description="Vous rêvez d'un pool house sur mesure pour profiter pleinement de votre extérieur ? L'Atelier du Volcan, spécialiste de la menuiserie et charpente en ossature bois à Sansac-de-Marmiesse (Cantal), conçoit et installe des pools houses esthétiques, durables et entièrement personnalisables."
      image={extensionImage}
      features={[
        "Expertise locale en menuiserie et charpente bois dans le Cantal",
        "Réalisation sur mesure et 100 % personnalisée",
        "Matériaux durables, esthétiques et performants",
        "Accompagnement administratif complet",
        "Finition impeccable et respect des délais",
      ]}
    />
  );
};

export default PoolHouse;
