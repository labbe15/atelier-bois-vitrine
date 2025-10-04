import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Escaliers = () => {
  return (
    <ServiceLayout
      title="Escaliers"
      subtitle="Escaliers sur mesure alliant fonctionnalité et esthétique"
      description="Créez une liaison élégante entre vos étages avec un escalier sur mesure. Escalier droit, quart tournant, colimaçon ou suspendu, nous adaptons le design à votre intérieur. Bois massif, métal et verre peuvent être combinés pour un résultat unique."
      image={menuiserieImage}
      features={[
        "Escalier droit et quart tournant",
        "Escalier deux quarts tournant",
        "Escalier colimaçon et hélicoïdal",
        "Escalier suspendu et design",
        "Garde-corps et rampes sur mesure",
        "Rénovation d'escaliers existants",
      ]}
    />
  );
};

export default Escaliers;
