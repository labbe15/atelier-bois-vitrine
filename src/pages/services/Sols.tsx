import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const Sols = () => {
  return (
    <ServiceLayout
      title="Sols"
      subtitle="Offrez chaleur, élégance et confort à votre intérieur"
      description="Chez L'Atelier du Volcan, entreprise artisanale de pose de menuiserie à Sansac-de-Marmiesse, nous donnons vie à vos projets d'aménagement intérieur avec la pose de sols sur mesure : bois massif, vinyle à clipser, contrecollé, stratifié ou OSB. Nous intervenons dans tout le Cantal pour transformer vos pièces en espaces chaleureux, esthétiques et durables. Nos menuisiers qualifiés assurent une installation soignée et durable, avec nivelage et renforcement du plancher si nécessaire, pour garantir une base parfaitement stable et un résultat irréprochable."
      image={agencementImage}
      features={[
        "Expertise locale à Sansac-de-Marmiesse",
        "Conseils personnalisés selon vos goûts et votre budget",
        "Pose soignée par des menuisiers qualifiés",
        "Matériaux durables et finitions haut de gamme",
        "Intervention dans tout le Cantal : Aurillac, Arpajon sur cère, Maurs, Vic-sur-Cère, Murat...",
      ]}
    />
  );
};

export default Sols;
