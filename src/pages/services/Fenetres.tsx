import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Fenetres = () => {
  return (
    <ServiceLayout
      title="Fenêtres"
      subtitle="Des fenêtres performantes et esthétiques pour votre confort au quotidien"
      description="Chez L'Atelier du Volcan, nous mettons notre expertise au service de vos projets de rénovation ou de construction dans tout le Cantal. Spécialistes de la pose de fenêtres sur mesure, nous vous proposons une large gamme de fenêtres en bois, PVC, aluminium ou mixtes pour répondre à toutes vos envies, alliant isolation, luminosité et design."
      image={menuiserieImage}
      features={[
        "Fabrication et pose sur mesure, adaptées à votre maison",
        "Conseils personnalisés selon vos besoins et votre budget",
        "Produits certifiés et performants sur le plan énergétique",
        "Intervention dans tout le Cantal : Aurillac, Saint-Mamet, Murat, Maurs, et alentours",
        "Une entreprise locale et artisanale, reconnue pour son sérieux et la qualité de ses finitions",
      ]}
    />
  );
};

export default Fenetres;
