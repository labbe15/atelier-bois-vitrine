import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";

const AbriJardin = () => {
  return (
    <ServiceLayout
      title="Abri de Jardin"
      subtitle="Abris de jardin en bois pour ranger et protéger"
      description="Gagnez de l'espace de rangement avec un abri de jardin en bois sur mesure. Pour vos outils, votre mobilier de jardin ou créer un atelier, nous construisons des abris robustes et esthétiques. Différentes tailles et styles disponibles, avec possibilité de fenêtres et d'isolation."
      image={extensionImage}
      features={[
        "Abris sur mesure de toutes tailles",
        "Ossature bois traitée",
        "Toiture bardeau ou bac acier",
        "Porte simple ou double",
        "Fenêtres et éclairage naturel",
        "Finitions et peinture au choix",
      ]}
    />
  );
};

export default AbriJardin;
