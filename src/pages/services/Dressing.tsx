import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const Dressing = () => {
  return (
    <ServiceLayout
      title="Dressing"
      subtitle="Dressing sur mesure pour optimiser votre espace"
      description="Rangez vos affaires avec style grâce à nos dressings sur mesure. Nous optimisons chaque centimètre carré en fonction de vos besoins et de la configuration de votre pièce. Penderies, tiroirs, étagères, tout est pensé pour un rangement efficace et élégant."
      image={agencementImage}
      features={[
        "Étude d'aménagement personnalisée",
        "Dressing d'angle et sous-pente",
        "Penderies, tiroirs et étagères modulables",
        "Choix des essences et finitions",
        "Miroirs et éclairages intégrés",
        "Installation rapide et soignée",
      ]}
    />
  );
};

export default Dressing;
