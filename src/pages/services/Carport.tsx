import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const Carport = () => {
  return (
    <ServiceLayout
      title="Carports"
      subtitle="Protégez vos véhicules avec élégance et durabilité"
      description="Chez L'Atelier du Volcan, entreprise de charpente artisanale à Sansac-de-Marmiesse, nous concevons et réalisons des carports sur mesure en bois massif, bois lamellé-collé ou aluminium, adaptés à vos besoins et à votre habitat. Alliant solidité, esthétisme et fonctionnalité, nos carports protègent efficacement vos véhicules, camping-cars ou remorques, tout en valorisant votre propriété."
      image={charpenteImage}
      features={[
        "Fabrication sur mesure adaptée à votre terrain et à vos besoins",
        "Matériaux durables (bois massif, lamellé-collé, aluminium)",
        "Pose soignée par des charpentiers expérimentés",
        "Accompagnement administratif complet",
        "Fabrication locale à Sansac-de-Marmiesse (Cantal)",
        "Intervention dans tout le Cantal : Aurillac, Mandailles, Maurs, Murat, Polminhac…",
      ]}
    />
  );
};

export default Carport;
