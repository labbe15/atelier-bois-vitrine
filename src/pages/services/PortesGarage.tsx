import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const PortesGarage = () => {
  return (
    <ServiceLayout
      title="Portes de garage"
      subtitle="Alliez élégance, performance et sécurité pour votre garage"
      description="Chez L'Atelier du Volcan, nous mettons notre savoir-faire artisanal au service de vos projets de menuiserie sur mesure dans le Cantal. Spécialistes de la pose de portes de garage en aluminium, nous vous proposons des solutions esthétiques, isolantes et durables, parfaitement adaptées à votre habitation et à votre mode de vie."
      image={menuiserieImage}
      features={[
        "Fabrication sur mesure selon vos dimensions et vos envies",
        "Design contemporain avec plusieurs finitions et coloris",
        "Haute résistance aux intempéries et à la corrosion",
        "Motorisation possible pour plus de confort",
        "Isolation renforcée pour une meilleure performance énergétique",
        "Pose professionnelle garantie par notre équipe du Cantal",
      ]}
    />
  );
};

export default PortesGarage;
