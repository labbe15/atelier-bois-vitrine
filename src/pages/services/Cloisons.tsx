import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const Cloisons = () => {
  return (
    <ServiceLayout
      title="Cloisons"
      subtitle="Structurez vos espaces avec élégance et fonctionnalité"
      description="Envie de repenser vos espaces intérieurs sans engager de gros travaux ? L'Atelier du Volcan, entreprise de menuiserie sur mesure à Sansac-de-Marmiesse (Cantal), conçoit et installe des cloisons en panneaux dérivés du bois ou en aluminium, avec la possibilité d'y intégrer du vitrage pour plus de luminosité et de modernité. Alliant esthétique, robustesse et personnalisation, nos cloisons s'adaptent à tous vos projets d'aménagement intérieur, aussi bien dans une maison, un bureau, qu'un local professionnel."
      image={agencementImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Savoir-faire artisanal en menuiserie bois et aluminium",
        "Cloisons sur mesure et personnalisables",
        "Possibilité de vitrage pour plus de luminosité",
        "Finitions haut de gamme et durables",
      ]}
    />
  );
};

export default Cloisons;
