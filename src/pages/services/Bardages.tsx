import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Bardages = () => {
  return (
    <ServiceLayout
      title="Bardages"
      subtitle="Protégez et valorisez votre façade avec un bardage sur mesure"
      description="Vous souhaitez moderniser l'aspect extérieur de votre maison ou améliorer son isolation thermique ? L'Atelier du Volcan, votre spécialiste en menuiserie et charpente à Sansac-de-Marmiesse (Cantal), réalise la pose de bardages sur mesure, adaptés à tous les styles d'architecture. Alliant esthétique, performance et durabilité, nos bardages en bois, composite, aluminium, PVC, fibro ciment ou acier imitation zinc offrent une solution idéale pour embellir et protéger votre habitation."
      image={menuiserieImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Expertise artisanale en menuiserie et charpente bois",
        "Large choix de bardages : bois, composite, aluminium, PVC, acier…",
        "Pose sur mesure et finitions de qualité",
        "Conseils personnalisés pour un rendu esthétique et durable",
      ]}
    />
  );
};

export default Bardages;
