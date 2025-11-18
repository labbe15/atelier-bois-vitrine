import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const Charpente = () => {
  return (
    <ServiceLayout
      title="Charpentes"
      subtitle="L'expertise et la solidité au service de votre toiture"
      description="Situé à Sansac-de-Marmiesse, L'Atelier du Volcan met son savoir-faire artisanal au service de tous vos projets de charpente en bois, qu'il s'agisse de construction neuve, de rénovation ou de transformation de combles. Nos charpentiers qualifiés conçoivent, fabriquent et posent des structures robustes, durables et esthétiques, adaptées aux particularités du climat du Cantal."
      image={charpenteImage}
      features={[
        "Fabrication artisanale sur mesure dans nos ateliers du Cantal",
        "Pose soignée de charpentes traditionnelles ou fermettes avec volige",
        "Rénovation et renforcement de charpentes anciennes",
        "Transformation de combles ou création de toit-terrasse",
        "Conseils personnalisés et accompagnement administratif si nécessaire",
        "Savoir-faire local et expertise reconnue",
      ]}
    />
  );
};

export default Charpente;
