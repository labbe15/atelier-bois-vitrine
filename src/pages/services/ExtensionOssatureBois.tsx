import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const ExtensionOssatureBois = () => {
  return (
    <ServiceLayout
      title="Extension ossature bois"
      subtitle="Agrandissez votre maison rapidement et naturellement grâce à l'ossature bois"
      description="Vous rêvez d'un espace de vie supplémentaire sans déménager ? Avec L'Atelier du Volcan, spécialiste de la charpente et de la menuiserie bois à Sansac-de-Marmiesse (Cantal), profitez d'une extension de maison en ossature bois à la fois rapide à monter, performante thermiquement et entièrement personnalisée."
      image={extensionImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse dans le Cantal (15)",
        "Expertise artisanale en charpente et ossature bois",
        "Montage rapide et propre grâce à la préfabrication bois",
        "Isolation performante et confort durable",
        "Finitions personnalisées intérieures et extérieures",
        "Accompagnement administratif (permis, déclaration préalable)",
      ]}
    />
  );
};

export default ExtensionOssatureBois;
