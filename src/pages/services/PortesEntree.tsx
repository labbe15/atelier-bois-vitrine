import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const PortesEntree = () => {
  return (
    <ServiceLayout
      title="Portes d'Entrée"
      subtitle="Portes d'entrée en bois massif alliant sécurité et élégance"
      description="Accueillez vos visiteurs avec une porte d'entrée sur mesure qui reflète votre personnalité. Bois massif, vitrages décoratifs, serrures multipoints, nos portes allient esthétique, isolation et sécurité. Chaque porte est unique et conçue pour valoriser votre façade."
      image={menuiserieImage}
      features={[
        "Portes pleines en bois massif",
        "Portes semi-vitrées contemporaines",
        "Isolation thermique renforcée",
        "Serrures multipoints sécurisées",
        "Finitions extérieures protégées",
        "Design classique ou moderne",
      ]}
    />
  );
};

export default PortesEntree;
