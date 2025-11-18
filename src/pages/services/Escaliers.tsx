import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Escaliers = () => {
  return (
    <ServiceLayout
      title="Escaliers"
      subtitle="Le mariage parfait entre sécurité, design et artisanat"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous concevons, fabriquons et posons des escaliers sur mesure en bois massif ainsi que des gardes-corps design en bois, métal ou verre. Nos créations allient esthétique, confort et sécurité, tout en reflétant le style unique de votre intérieur ou de votre extérieur. Chaque escalier ou garde-corps est pensé sur mesure, selon vos envies, votre espace et votre budget, pour devenir une véritable pièce maîtresse de votre habitat."
      image={menuiserieImage}
      features={[
        "Fabrication sur mesure et locale à Sansac-de-Marmiesse",
        "Matériaux de qualité sélectionnés avec soin",
        "Design personnalisé selon votre intérieur",
        "Pose précise et sécurisée par des menuisiers qualifiés",
        "Intervention dans tout le Cantal : Aurillac, Le Rouget, Maurs, Murat, Pers…",
      ]}
    />
  );
};

export default Escaliers;
