import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const PoolHouse = () => {
  return (
    <ServiceLayout
      title="Pool House"
      subtitle="Pool houses en bois pour sublimer votre espace piscine"
      description="Aménagez un espace convivial autour de votre piscine avec un pool house en ossature bois. Cuisine d'été, vestiaire, local technique et espace détente, nous créons un lieu fonctionnel et esthétique. Design contemporain ou traditionnel, intégration paysagère soignée."
      image={extensionImage}
      features={[
        "Pool house avec cuisine d'été",
        "Vestiaire et douche",
        "Local technique piscine",
        "Espace détente et salon",
        "Pergola ou terrasse couverte",
        "Raccordements eau et électricité",
      ]}
    />
  );
};

export default PoolHouse;
