import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const Charpente = () => {
  return (
    <ServiceLayout
      title="Charpente"
      subtitle="Charpente traditionnelle et moderne pour tous types de projets"
      description="Nous réalisons des charpentes traditionnelles et modernes adaptées à chaque projet. Que ce soit pour une construction neuve, une rénovation ou une extension, nous mettons notre expertise au service de la solidité et de l'esthétique de votre toiture. Travail du bois massif, assemblages soignés et respect des techniques ancestrales."
      image={charpenteImage}
      features={[
        "Charpente traditionnelle en bois massif",
        "Charpente fermette industrielle",
        "Couverture et zinguerie",
        "Traitement du bois et protection",
        "Étude et calculs de charge",
        "Respect des normes DTU",
      ]}
    />
  );
};

export default Charpente;
