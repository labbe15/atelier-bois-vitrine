import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Bibliotheques = () => {
  return (
    <ServiceLayout
      title="Bibliothèques"
      subtitle="Bibliothèques sur mesure pour sublimer vos livres"
      description="Créez un espace de rangement élégant et fonctionnel avec nos bibliothèques sur mesure. Murales, modulables ou intégrées, elles s'adaptent parfaitement à votre intérieur. Choisissez parmi différentes essences de bois, finitions et configurations pour un résultat unique qui valorise votre collection."
      image={menuiserieImage}
      features={[
        "Bibliothèques murales sur mesure",
        "Modules modulables et évolutifs",
        "Bibliothèques encastrées",
        "Étagères ajustables",
        "Finitions personnalisées",
        "Intégration d'éclairage LED",
      ]}
    />
  );
};

export default Bibliotheques;
