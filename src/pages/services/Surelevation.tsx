import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const Surelevation = () => {
  return (
    <ServiceLayout
      title="Surélévation"
      subtitle="Gagnez de l'espace en surélévant votre maison"
      description="Créez des pièces supplémentaires sans perdre de terrain avec une surélévation en ossature bois. Légère et rapide à monter, cette solution permet d'ajouter un ou plusieurs étages à votre habitation existante. Idéal pour créer chambres, bureau ou espace de loisirs."
      image={extensionImage}
      features={[
        "Étude de la structure existante",
        "Surélévation partielle ou totale",
        "Respect des règles d'urbanisme",
        "Isolation renforcée",
        "Toiture et zinguerie",
        "Raccordements et finitions",
      ]}
    />
  );
};

export default Surelevation;
