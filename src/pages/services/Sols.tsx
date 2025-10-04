import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const Sols = () => {
  return (
    <ServiceLayout
      title="Sols"
      subtitle="Pose de parquets et sols en bois de qualité"
      description="Apportez chaleur et authenticité à votre intérieur avec nos sols en bois. Parquet massif, contrecollé ou stratifié, nous vous accompagnons dans le choix de l'essence, de la finition et du type de pose. Ponçage et vitrification pour redonner vie à vos parquets anciens."
      image={agencementImage}
      features={[
        "Parquet massif cloué ou collé",
        "Parquet contrecollé flottant",
        "Sol stratifié haute qualité",
        "Ponçage et vitrification",
        "Plinthes et barre de seuil",
        "Conseil sur l'entretien du bois",
      ]}
    />
  );
};

export default Sols;
