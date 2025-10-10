import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Fenetres = () => {
  return (
    <ServiceLayout
      title="Fenêtres"
      subtitle="Fenêtres en bois alliant charme et performance"
      description="Apportez lumière et caractère à votre habitation avec nos fenêtres en bois sur mesure. Fabriquées avec des essences durables et des vitrages performants, elles garantissent isolation thermique et acoustique. Du modèle traditionnel aux ouvertures contemporaines, nous créons des fenêtres adaptées à votre architecture."
      image={menuiserieImage}
      features={[
        "Fenêtres à la française",
        "Fenêtres oscillo-battantes",
        "Fenêtres à soufflet",
        "Double et triple vitrage",
        "Essences résistantes aux intempéries",
        "Finitions extérieures protégées",
      ]}
    />
  );
};

export default Fenetres;
