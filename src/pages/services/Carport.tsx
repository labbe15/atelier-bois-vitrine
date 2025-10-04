import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const Carport = () => {
  return (
    <ServiceLayout
      title="Carport"
      subtitle="Abris voiture en bois élégants et fonctionnels"
      description="Protégez votre véhicule avec un carport en bois sur mesure. Structure solide, design contemporain et intégration harmonieuse à votre habitation. Nous réalisons des carports simples ou doubles, avec options de rangement et toiture adaptée."
      image={charpenteImage}
      features={[
        "Carport simple ou double",
        "Structure en bois lamellé-collé",
        "Toiture bac acier, tuiles ou végétalisée",
        "Options de rangement intégré",
        "Éclairage et prises électriques",
        "Respect des règles d'urbanisme",
      ]}
    />
  );
};

export default Carport;
