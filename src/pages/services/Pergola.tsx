import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const Pergola = () => {
  return (
    <ServiceLayout
      title="Pergola"
      subtitle="Pergolas sur mesure pour profiter de votre extérieur"
      description="Créez un espace de vie extérieur agréable avec nos pergolas en bois sur mesure. Qu'elles soient bioclimatiques, traditionnelles ou contemporaines, nos pergolas s'adaptent à votre jardin et à vos besoins. Protection solaire, espace convivial et esthétique garantis."
      image={charpenteImage}
      features={[
        "Pergola bioclimatique avec lames orientables",
        "Pergola traditionnelle en bois massif",
        "Pergola adossée ou autoportée",
        "Choix des essences de bois",
        "Installation de stores et éclairages",
        "Étude d'intégration paysagère",
      ]}
    />
  );
};

export default Pergola;
