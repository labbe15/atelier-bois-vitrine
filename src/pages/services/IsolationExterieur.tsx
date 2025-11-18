import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const IsolationExterieur = () => {
  return (
    <ServiceLayout
      title="Isolation par l'extérieur"
      subtitle="Alliez performance thermique, esthétisme et durabilité"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous proposons l'isolation thermique par l'extérieur (ITE) et la pose de bardages sur mesure. Nos solutions associent efficacité énergétique, protection durable et design architectural, pour donner une nouvelle vie à votre façade tout en améliorant le confort thermique de votre habitat. Faire isoler votre maison par l'extérieur, c'est réduire vos dépenses énergétiques tout en valorisant votre bien avec une façade moderne, élégante et durable."
      image={charpenteImage}
      features={[
        "Améliore les performances thermiques de votre maison",
        "Supprime les ponts thermiques et réduit les déperditions de chaleur",
        "Valorise l'esthétique de la façade grâce à un bardage moderne et personnalisable",
        "Préserve la surface habitable intérieure",
        "Augmente la valeur patrimoniale de votre bien",
      ]}
    />
  );
};

export default IsolationExterieur;
