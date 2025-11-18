import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Portails = () => {
  return (
    <ServiceLayout
      title="Portails"
      subtitle="Alliez sécurité, élégance et confort au quotidien"
      description="Chez L'Atelier du Volcan, nous concevons et posons des portails coulissants et battants adaptés à tous les styles d'habitation et à tous les budgets. Situés au cœur du Cantal, nous mettons notre savoir-faire artisanal au service de vos extérieurs pour allier esthétique, robustesse et praticité."
      image={menuiserieImage}
      features={[
        "Entreprise locale du Cantal – une équipe proche de vous, réactive et à l'écoute",
        "Fabrication sur mesure – pour un portail unique, adapté à votre maison",
        "Pose soignée – réalisée par nos menuisiers expérimentés",
        "Matériaux de qualité – durables, esthétiques et résistants aux intempéries",
      ]}
    />
  );
};

export default Portails;
