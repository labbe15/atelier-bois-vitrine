import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const OssatureBois = () => {
  return (
    <ServiceLayout
      title="Ossature Bois"
      subtitle="Construction en ossature bois écologique et performante"
      description="L'ossature bois est une technique de construction moderne, rapide et écologique. Idéale pour les maisons, extensions ou bâtiments agricoles, elle offre d'excellentes performances thermiques et acoustiques. Nous maîtrisons cette technique de A à Z, du montage des murs à la pose du pare-pluie."
      image={charpenteImage}
      features={[
        "Construction de maison ossature bois complète",
        "Extensions et agrandissements",
        "Surélévations",
        "Bâtiments agricoles et annexes",
        "Isolation haute performance",
        "Respect de la RT 2020",
      ]}
    />
  );
};

export default OssatureBois;
