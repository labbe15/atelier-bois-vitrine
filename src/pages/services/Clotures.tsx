import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Clotures = () => {
  return (
    <ServiceLayout
      title="Clôtures"
      subtitle="Alliez sécurité, intimité et esthétisme avec nos clôtures en bois, PVC ou aluminium"
      description="Chez L'Atelier du Volcan, votre spécialiste en menuiserie et aménagements extérieurs dans le Cantal, nous vous proposons des clôtures sur mesure qui s'adaptent à votre style de maison et à vos besoins. Que vous recherchiez une clôture moderne, traditionnelle ou contemporaine, nous vous accompagnons dans le choix, la fabrication et la pose pour un résultat à la fois solide, harmonieux et durable."
      image={menuiserieImage}
      features={[
        "Conseils personnalisés",
        "Fabrication sur mesure",
        "Pose professionnelle dans tout le Cantal",
        "Devis gratuit et rapide",
      ]}
    />
  );
};

export default Clotures;
