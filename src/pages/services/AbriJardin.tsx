import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const AbriJardin = () => {
  return (
    <ServiceLayout
      title="Studio de jardin"
      subtitle="Studios de jardin en ossature bois sur mesure – Accessibles, esthétiques et durables"
      description="Chez L'Atelier du Volcan, menuisier-charpentier à Sansac-de-Marmiesse dans le Cantal (15), nous concevons et posons des studios de jardin en ossature bois sur mesure, adaptés à tous les besoins : bureau, logement d'appoint, atelier d'artiste, chambre d'amis ou studio pour personne à mobilité réduite (PMR). Chaque projet est entièrement personnalisable, fabriqué à partir de matériaux de qualité, dans le respect des normes environnementales et de construction."
      image={extensionImage}
      features={[
        "Basés à Sansac-de-Marmiesse, nous intervenons dans tout le Cantal et les départements voisins",
        "Expertise en menuiserie, construction bois et création de studios de jardin sur mesure",
        "Studios personnalisables : bardages, intérieurs, couvertures au choix",
        "Accessibilité PMR : portes élargies, accès de plain-pied, aménagements ergonomiques",
        "Accompagnement administratif complet (permis de construire, déclaration préalable)",
      ]}
    />
  );
};

export default AbriJardin;
