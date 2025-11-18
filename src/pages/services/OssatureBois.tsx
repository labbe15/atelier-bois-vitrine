import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";

const OssatureBois = () => {
  return (
    <ServiceLayout
      title="Maisons à ossature bois"
      subtitle="Alliez performance, rapidité et esthétisme avec une maison bois signée L'Atelier du Volcan"
      description="Basé à Sansac-de-Marmiesse, L'Atelier du Volcan conçoit et réalise des maisons à ossature bois modernes et performantes, parfaitement adaptées au climat du Cantal. Bien loin du simple chalet de montagne, la maison à ossature bois est aujourd'hui une habitation contemporaine, au design soigné et aux performances thermiques inégalées. Grâce à notre savoir-faire en menuiserie et charpente, nous assurons jusqu'à 80 % des travaux de construction, garantissant ainsi une coordination fluide, des délais maîtrisés et aucune mauvaise surprise."
      image={charpenteImage}
      features={[
        "Fabrication et pose locales à Sansac-de-Marmiesse (Cantal)",
        "Maisons performantes, modernes et durables",
        "Isolation thermique haut de gamme = économies d'énergie",
        "Construction rapide et maîtrisée",
        "Un seul interlocuteur pour 80 % du chantier",
        "Accompagnement de confiance pour les corps de métier restants",
        "Conception design & Permis de construire",
      ]}
    />
  );
};

export default OssatureBois;
