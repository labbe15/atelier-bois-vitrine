import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Verrieres = () => {
  return (
    <ServiceLayout
      title="Verrières"
      subtitle="Faites entrer la lumière avec style grâce à nos verrières en bois ou en aluminium"
      description="Envie d'apporter luminosité, élégance et modernité à votre intérieur ? Chez L'Atelier du Volcan, entreprise artisanale de menuiserie dans le Cantal, nous concevons et installons des verrières sur mesure en bois ou aluminium pour sublimer vos espaces de vie. Alliant design, robustesse et finesse, nos verrières s'adaptent aussi bien aux intérieurs modernes qu'aux maisons de caractère."
      image={menuiserieImage}
      features={[
        "Fabrication sur mesure dans le Cantal",
        "Conseils personnalisés selon votre projet",
        "Produits de qualité française",
        "Pose soignée par des menuisiers expérimentés",
        "Intervention dans tout le Cantal : Aurillac, Ytrac, Murat, Maurs, Vic-sur-Cère…",
      ]}
    />
  );
};

export default Verrieres;
