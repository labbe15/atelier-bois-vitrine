import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const PortesGarage = () => {
  return (
    <ServiceLayout
      title="Portes de Garage"
      subtitle="Portes de garage en bois robustes et esthétiques"
      description="Protégez vos véhicules avec style grâce à nos portes de garage en bois sur mesure. Battantes, basculantes ou sectionnelles, elles combinent robustesse et design. Motorisation possible pour plus de confort. Traitement du bois adapté à une utilisation extérieure intensive."
      image={menuiserieImage}
      features={[
        "Portes battantes traditionnelles",
        "Portes basculantes débordantes",
        "Portes sectionnelles modernes",
        "Motorisation et automatisation",
        "Bois traité haute résistance",
        "Isolation et sécurité renforcées",
      ]}
    />
  );
};

export default PortesGarage;
