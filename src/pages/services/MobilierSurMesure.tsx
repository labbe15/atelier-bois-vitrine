import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const MobilierSurMesure = () => {
  return (
    <ServiceLayout
      title="Mobilier sur mesure"
      subtitle="Créez un intérieur unique avec du mobilier bois sur mesure"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous donnons vie à vos envies d'aménagement intérieur grâce à la création de meubles en bois sur mesure. De la conception à la pose, notre équipe de menuisiers passionnés conçoit des pièces uniques, parfaitement adaptées à votre espace, à votre style et à vos besoins. Parce que chaque maison est différente, nous créons du mobilier personnalisé qui allie fonctionnalité, esthétisme et durabilité, dans le respect des traditions artisanales et des essences de bois nobles."
      image={agencementImage}
      features={[
        "Adaptation parfaite à vos espaces et contraintes techniques",
        "Design personnalisé selon vos goûts et votre décoration",
        "Fabrication artisanale 100 % locale dans le Cantal",
        "Durabilité et qualité d'un meuble en bois massif fait pour durer",
        "Valorisation de votre intérieur grâce à une réalisation unique",
      ]}
    />
  );
};

export default MobilierSurMesure;
