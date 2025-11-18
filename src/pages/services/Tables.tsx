import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Tables = () => {
  return (
    <ServiceLayout
      title="Tables"
      subtitle="Le savoir-faire artisanal au service de vos intérieurs"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous créons des tables en bois sur mesure qui allient design, authenticité et qualité artisanale. Chaque pièce est pensée et fabriquée dans notre atelier pour refléter votre style et s'intégrer harmonieusement à votre intérieur, qu'il soit moderne, rustique ou contemporain. Nos artisans menuisiers mettent leur passion du bois au service de la fabrication de tables basses, tables à manger design et tables de ferme massives, réalisées avec des essences nobles et des finitions haut de gamme."
      image={menuiserieImage}
      features={[
        "Fabrication 100 % sur mesure dans notre atelier à Sansac-de-Marmiesse",
        "Design contemporain ou traditionnel selon vos envies",
        "Finitions soignées (vernis, huile, teinte, patine, brossage…)",
        "Meubles durables et écoresponsables",
      ]}
    />
  );
};

export default Tables;
