import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const PortesEntree = () => {
  return (
    <ServiceLayout
      title="Portes d'entrée"
      subtitle="Alliez sécurité, design et performance avec nos portes d'entrée en bois, PVC, aluminium, bois-aluminium ou acier"
      description="Chez L'Atelier du Volcan, nous posons des portes d'entrée sur mesure qui subliment votre façade tout en renforçant la sécurité et l'isolation de votre habitation. Basés au cœur du Cantal, nous intervenons pour tous vos projets de rénovation ou de construction neuve, avec des produits fabriqués en France et un savoir-faire artisanal reconnu."
      image={menuiserieImage}
      features={[
        "Expertise locale dans le Cantal et ses alentours",
        "Pose soignée et garantie par des menuisiers qualifiés",
        "Large gamme de portes personnalisables (dimensions, couleurs, vitrages, accessoires)",
        "Conseils sur le choix des matériaux et les performances énergétiques",
        "Devis gratuit et accompagnement sur mesure",
      ]}
    />
  );
};

export default PortesEntree;
