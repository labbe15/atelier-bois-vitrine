import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const AmenagementSurMesure = () => {
  return (
    <ServiceLayout
      title="Aménagement sur Mesure"
      subtitle="Aménagements personnalisés pour optimiser votre espace"
      description="Transformez votre intérieur avec des aménagements sur mesure parfaitement adaptés à vos besoins. Rangements sous combles, placards intégrés, bureaux encastrés, nous créons des solutions ingénieuses pour exploiter chaque mètre carré. Fonctionnalité et esthétique au service de votre quotidien."
      image={agencementImage}
      features={[
        "Aménagement de combles et mezzanines",
        "Placards intégrés sur mesure",
        "Bureaux et espaces de travail",
        "Rangements optimisés",
        "Cloisons et séparations bois",
        "Finitions soignées et durables",
      ]}
    />
  );
};

export default AmenagementSurMesure;
