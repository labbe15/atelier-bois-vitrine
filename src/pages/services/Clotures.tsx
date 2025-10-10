import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Clotures = () => {
  return (
    <ServiceLayout
      title="Clôtures"
      subtitle="Clôtures en bois naturelles et résistantes"
      description="Délimitez harmonieusement votre terrain avec nos clôtures en bois sur mesure. Ganivelles, palissades, claustras ou piquets, nous proposons différents styles pour allier intimité et esthétique. Bois traité classe 4 pour une durabilité optimale face aux intempéries."
      image={menuiserieImage}
      features={[
        "Ganivelles châtaignier naturel",
        "Palissades pleines ou ajourées",
        "Claustras et brise-vue design",
        "Piquets et barrières traditionnelles",
        "Bois traité autoclave classe 4",
        "Pose avec scellement béton",
      ]}
    />
  );
};

export default Clotures;
