import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const Pergola = () => {
  return (
    <ServiceLayout
      title="Pergolas"
      subtitle="L'alliance du confort, du design et de la durabilité"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous concevons et installons des pergolas sur mesure qui s'adaptent à vos envies et à votre mode de vie. Qu'elles soient en bois ou en aluminium bioclimatique ou classique, nos pergolas allient esthétisme, robustesse et fonctionnalité, pour vous permettre de profiter de votre extérieur en toute saison. Véritable extension de la maison, la pergola devient un espace de détente, de convivialité et de confort, tout en valorisant l'architecture de votre habitation."
      image={charpenteImage}
      features={[
        "Fabrication et pose sur mesure dans le Cantal",
        "Large choix de matériaux : bois, aluminium bioclimatique ou classique",
        "Options haut de gamme (LED, stores, verre coulissant)",
        "Accompagnement pour les démarches administratives",
        "Intervention dans tout le Cantal : Aurillac, Naucelles, Maurs, Jussac, Ytrac…",
        "Savoir-faire artisanal local à Sansac-de-Marmiesse",
      ]}
    />
  );
};

export default Pergola;
