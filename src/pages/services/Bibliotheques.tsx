import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Bibliotheques = () => {
  return (
    <ServiceLayout
      title="Bibliothèques"
      subtitle="Alliez design, praticité et savoir-faire artisanal"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous concevons et fabriquons des bibliothèques sur mesure qui allient élégance, fonctionnalité et durabilité. Nos artisans menuisiers mettent leur savoir-faire au service de vos envies pour créer un mobilier design et unique, parfaitement adapté à votre intérieur et à vos besoins de rangement."
      image={menuiserieImage}
      features={[
        "Fabrication sur mesure 100 % artisanale",
        "Large choix de matériaux, coloris et finitions",
        "Design unique et durable",
        "Fabrication locale à Sansac-de-Marmiesse (Cantal)",
        "Livraison et installation dans tout le Cantal : Aurillac, Ytrac, Maurs, Vic-sur-Cère, Murat…",
      ]}
    />
  );
};

export default Bibliotheques;
