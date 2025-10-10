import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Tables = () => {
  return (
    <ServiceLayout
      title="Tables"
      subtitle="Tables en bois massif fabriquées sur mesure"
      description="Réalisez la table de vos rêves avec notre savoir-faire artisanal. Table à manger, table basse, console ou bureau, chaque pièce est unique. Nous travaillons des essences nobles en bois massif pour créer des tables robustes et élégantes qui traverseront le temps."
      image={menuiserieImage}
      features={[
        "Tables à manger sur mesure",
        "Tables basses et consoles",
        "Bureaux et plans de travail",
        "Bois massif et essences nobles",
        "Plateaux en bois brut ou travaillé",
        "Piétements personnalisés",
      ]}
    />
  );
};

export default Tables;
