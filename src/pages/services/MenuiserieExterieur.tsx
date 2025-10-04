import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const MenuiserieExterieur = () => {
  return (
    <ServiceLayout
      title="Menuiserie Extérieure"
      subtitle="Menuiseries extérieures durables et esthétiques"
      description="Protégez et valorisez votre habitation avec nos menuiseries extérieures. Fenêtres, volets, portes d'entrée, bardages... Nous utilisons des bois traités et durables pour garantir longévité et performance. Isolation thermique et acoustique optimales."
      image={menuiserieImage}
      features={[
        "Fenêtres en bois sur mesure",
        "Volets battants et roulants",
        "Portes d'entrée en bois massif",
        "Bardages Douglas, Mélèze, Red Cedar",
        "Clins et claires-voies",
        "Traitement et protection longue durée",
      ]}
    />
  );
};

export default MenuiserieExterieur;
