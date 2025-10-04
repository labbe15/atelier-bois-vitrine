import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const ExtensionOssatureBois = () => {
  return (
    <ServiceLayout
      title="Extension Ossature Bois"
      subtitle="Agrandissez votre maison avec une extension bois"
      description="Gagnez de l'espace avec une extension en ossature bois. Rapide à mettre en œuvre, écologique et performante thermiquement, l'extension ossature bois est la solution idéale pour agrandir votre habitation. Du permis de construire à la livraison, nous gérons votre projet de A à Z."
      image={extensionImage}
      features={[
        "Étude de faisabilité et conseils",
        "Assistance pour les démarches administratives",
        "Extension plain-pied ou étage",
        "Isolation et étanchéité optimales",
        "Intégration harmonieuse à l'existant",
        "Travaux clés en main",
      ]}
    />
  );
};

export default ExtensionOssatureBois;
