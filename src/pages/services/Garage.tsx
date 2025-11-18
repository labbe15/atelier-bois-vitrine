import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const Garage = () => {
  return (
    <ServiceLayout
      title="Garage"
      subtitle="Agrandissez votre maison avec un garage en ossature bois, rapide et sur mesure"
      description="Besoin d'un garage fonctionnel, esthétique et durable ? L'Atelier du Volcan, votre expert en menuiserie et charpente à Sansac-de-Marmiesse (Cantal), conçoit et installe des extensions de maison à usage de garage en ossature bois adaptées à vos besoins et à l'architecture de votre habitation. Grâce à la légèreté et la modularité du bois, votre extension se monte rapidement, sans gros travaux, tout en garantissant solidité et performance énergétique."
      image={extensionImage}
      features={[
        "Entreprise locale basée à Sansac-de-Marmiesse dans le Cantal (15)",
        "Expertise artisanale en charpente et ossature bois",
        "Montage rapide et propre grâce à la préfabrication bois",
        "Matériaux esthétiques, durables et performants",
        "Finitions personnalisées (bardage, toiture, menuiseries)",
        "Accompagnement administratif",
      ]}
    />
  );
};

export default Garage;
