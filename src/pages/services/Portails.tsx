import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const Portails = () => {
  return (
    <ServiceLayout
      title="Portails"
      subtitle="Portails en bois sur mesure pour votre propriété"
      description="Délimitez et sécurisez votre propriété avec un portail en bois personnalisé. Battants ou coulissants, pleins ou ajourés, nos portails allient authenticité et durabilité. Traités contre les intempéries et motorisables, ils s'adaptent à tous les styles de maison et de terrain."
      image={menuiserieImage}
      features={[
        "Portails battants classiques",
        "Portails coulissants sur rail",
        "Design plein ou ajouré",
        "Motorisation et automatisme",
        "Traitement autoclave",
        "Quincaillerie robuste et durable",
      ]}
    />
  );
};

export default Portails;
