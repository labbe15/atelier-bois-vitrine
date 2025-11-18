import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const PortesCommunication = () => {
  return (
    <ServiceLayout
      title="Portes intérieures"
      subtitle="Sublimez votre intérieur avec des portes élégantes et durables"
      description="Chez L'Atelier du Volcan, entreprise spécialisée dans la pose de menuiseries à Sansac-de-Marmiesse, nous vous accompagnons dans le choix et la pose de vos portes intérieures. Design, robustes et parfaitement adaptées à votre intérieur, nos portes conjuguent esthétisme, confort et qualité artisanale. Que vous rénoviez une maison traditionnelle ou que vous aménagiez un intérieur contemporain, nous vous proposons une large gamme de portes bois ou aluminium sélectionnées pour leur performance et leur élégance."
      image={menuiserieImage}
      features={[
        "Conseils personnalisés selon vos besoins et votre budget",
        "Pose professionnelle et finitions soignées",
        "Produits de qualité, durables et esthétiques",
        "Large choix de modèles et de matériaux",
      ]}
    />
  );
};

export default PortesCommunication;
