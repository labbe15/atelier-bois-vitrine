import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const Veranda = () => {
  return (
    <ServiceLayout
      title="Véranda"
      subtitle="Vérandas en bois pour profiter de la lumière naturelle"
      description="Créez un espace de vie lumineux et chaleureux avec une véranda en bois sur mesure. Structure en bois et grandes surfaces vitrées pour profiter de la vue et de la luminosité. Isolation performante pour une utilisation toute l'année. Conception sur mesure adaptée à votre architecture."
      image={extensionImage}
      features={[
        "Structure bois et aluminium",
        "Grandes surfaces vitrées",
        "Isolation thermique renforcée",
        "Toiture en verre ou polycarbonate",
        "Ouvertures et ventilation",
        "Intégration harmonieuse à la maison",
      ]}
    />
  );
};

export default Veranda;
