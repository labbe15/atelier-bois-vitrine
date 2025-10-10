import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const PortesCommunication = () => {
  return (
    <ServiceLayout
      title="Portes de Communication"
      subtitle="Portes intérieures sur mesure en bois massif"
      description="Harmonisez votre intérieur avec nos portes de communication sur mesure. Portes pleines, vitrées, coulissantes ou battantes, nous créons des portes intérieures qui allient esthétique et fonctionnalité. Essences variées, finitions soignées et quincaillerie de qualité."
      image={menuiserieImage}
      features={[
        "Portes pleines en bois massif",
        "Portes vitrées et semi-vitrées",
        "Portes coulissantes et galandage",
        "Portes battantes classiques",
        "Finitions et teintes personnalisées",
        "Pose d'huisseries et quincaillerie",
      ]}
    />
  );
};

export default PortesCommunication;
