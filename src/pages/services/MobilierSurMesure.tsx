import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const MobilierSurMesure = () => {
  return (
    <ServiceLayout
      title="Mobilier sur Mesure"
      subtitle="Créations uniques adaptées à votre intérieur"
      description="Donnez vie à vos idées avec nos créations de mobilier sur mesure. Bibliothèque, bureau, meuble TV, banc, table... Chaque pièce est unique et s'intègre parfaitement à votre espace. Nous travaillons avec passion le bois massif pour créer des meubles durables et intemporels."
      image={agencementImage}
      features={[
        "Création de mobilier unique",
        "Bibliothèques murales et modulables",
        "Bureaux et espaces de travail",
        "Meubles TV et rangements salon",
        "Tables et bancs",
        "Finitions et essences au choix",
      ]}
    />
  );
};

export default MobilierSurMesure;
