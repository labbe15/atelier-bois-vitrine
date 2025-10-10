import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const Garage = () => {
  return (
    <ServiceLayout
      title="Garage"
      subtitle="Garages en ossature bois robustes et esthétiques"
      description="Protégez vos véhicules et gagnez de l'espace de stockage avec un garage en ossature bois. Construction rapide, isolation possible, et esthétique soignée. Simple, double ou avec espace atelier, nous concevons votre garage selon vos besoins et en harmonie avec votre maison."
      image={extensionImage}
      features={[
        "Garage simple ou double",
        "Ossature bois résistante",
        "Toiture bardeau ou tuile",
        "Isolation optionnelle",
        "Porte sectionnelle motorisée",
        "Finitions intérieures et extérieures",
      ]}
    />
  );
};

export default Garage;
