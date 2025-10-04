import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";

const MenuiserieInterieur = () => {
  return (
    <ServiceLayout
      title="Menuiserie Intérieure"
      subtitle="Menuiseries intérieures sur mesure et de qualité"
      description="Embellissez votre intérieur avec nos menuiseries sur mesure. Portes, placards, lambris, parquets... Chaque élément est réalisé avec soin pour s'intégrer parfaitement à votre décoration. Nous travaillons des essences nobles et adaptons nos créations à vos envies."
      image={menuiserieImage}
      features={[
        "Portes intérieures sur mesure",
        "Placards et rangements intégrés",
        "Lambris et habillages muraux",
        "Parquets massifs et contrecollés",
        "Plinthes et moulures",
        "Finitions et lasures personnalisées",
      ]}
    />
  );
};

export default MenuiserieInterieur;
