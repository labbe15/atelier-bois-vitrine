import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const Terrasses = () => {
  return (
    <ServiceLayout
      title="Terrasses"
      subtitle="Terrasses en bois pour sublimer votre extérieur"
      description="Profitez de votre jardin avec une terrasse en bois sur mesure. Nous réalisons des terrasses adaptées à tous les terrains, avec une attention particulière portée à la structure, au drainage et au choix des essences. Bois européen, bois exotique ou bois composite, nous vous conseillons selon vos besoins."
      image={charpenteImage}
      features={[
        "Terrasses en bois européen (Douglas, Mélèze)",
        "Terrasses en bois exotique (Ipé, Cumaru)",
        "Terrasses en bois composite",
        "Structure porteuse adaptée au terrain",
        "Garde-corps et escaliers intégrés",
        "Entretien et traitement du bois",
      ]}
    />
  );
};

export default Terrasses;
