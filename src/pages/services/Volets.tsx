import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Volets = () => {
  return (
    <ServiceLayout
      title="Volets & Protections solaires"
      subtitle="Alliez confort, sécurité et esthétisme avec nos volets et stores sur mesure"
      description="Chez L'Atelier du Volcan, votre expert en menuiserie dans le Cantal, nous vous accompagnons dans le choix et la pose de volets battants, volets roulants, brise-soleil et stores adaptés à votre habitation et à votre style. Forts de notre savoir-faire artisanal et de notre exigence de qualité, nous sélectionnons pour vous des produits durables, performants et esthétiques, conçus pour résister aux conditions climatiques de notre belle région."
      image={menuiserieImage}
      features={[
        "Expertise locale dans la menuiserie sur mesure",
        "Produits de qualité, garantis et durables",
        "Installation professionnelle et finitions soignées",
        "Conseils personnalisés selon votre habitat et votre budget",
      ]}
    />
  );
};

export default Volets;
