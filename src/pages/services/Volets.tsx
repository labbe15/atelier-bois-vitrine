import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Volets = () => {
  return (
    <ServiceLayout
      title="Volets"
      subtitle="Volets en bois traditionnels et contemporains"
      description="Protégez et embellissez vos façades avec nos volets en bois sur mesure. Battants, pliants ou coulissants, nos volets allient authenticité et robustesse. Traités contre les intempéries et personnalisables en couleur, ils s'intègrent harmonieusement à tous les styles architecturaux."
      image={menuiserieImage}
      features={[
        "Volets battants traditionnels",
        "Volets pliants et persiennes",
        "Volets coulissants sur rail",
        "Traitement autoclave et lasure",
        "Quincaillerie de qualité",
        "Coloris et finitions au choix",
      ]}
    />
  );
};

export default Volets;
