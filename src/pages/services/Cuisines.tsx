import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";

const Cuisines = () => {
  return (
    <ServiceLayout
      title="Cuisines"
      subtitle="Cuisines sur mesure fonctionnelles et esthétiques"
      description="Créez la cuisine de vos rêves avec nos réalisations sur mesure. Meubles en bois massif, plan de travail adapté, optimisation de l'espace... Nous concevons votre cuisine en fonction de vos habitudes et de votre style. Modernité et tradition se marient pour un résultat unique."
      image={agencementImage}
      features={[
        "Conception 3D de votre projet",
        "Meubles en bois massif ou plaqué",
        "Plans de travail bois, pierre ou composite",
        "Îlot central et coin repas",
        "Électroménager intégré",
        "Suivi et coordination des corps de métier",
      ]}
    />
  );
};

export default Cuisines;
