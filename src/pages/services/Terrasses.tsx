import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const Terrasses = () => {
  return (
    <ServiceLayout
      title="Terrasses"
      subtitle="Créez un espace extérieur chaleureux et durable"
      description="Chez L'Atelier du Volcan, entreprise de menuiserie et charpente à Sansac-de-Marmiesse, nous concevons et posons des terrasses en bois sur mesure, adaptées à votre maison, à votre terrain et à vos envies. Nos réalisations allient esthétisme, solidité et confort d'utilisation, pour transformer votre extérieur en un véritable lieu de vie convivial."
      image={charpenteImage}
      features={[
        "Fabrication et pose sur mesure",
        "Bois de qualité : exotique, européen ou composite plein",
        "Design personnalisé selon vos envies",
        "Intervention dans tout le Cantal : Aurillac, Pleaux, Murat, Maurs, Le Rouget, St Mamet…",
        "Savoir-faire artisanal local à Sansac-de-Marmiesse",
      ]}
    />
  );
};

export default Terrasses;
