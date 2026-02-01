import ServiceLayout from "@/components/ServiceLayout";
import imgSurElev from "@/assets/Surélévation.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Surelevation = () => {
  return (
    <ServiceLayout
      title="Surélévation"
      subtitle="Gagnez de l'espace sans déménager grâce à la surélévation en ossature bois"
      description="Besoin d'agrandir votre maison sans empiéter sur votre terrain ? L'Atelier du Volcan, spécialiste de la charpente et de la menuiserie sur mesure à Sansac-de-Marmiesse (Cantal), vous propose des surélévations de maison en ossature bois à la fois rapides, esthétiques et durables."
      image={imgSurElev}
      features={[
        "Entreprise locale basée à Sansac-de-Marmiesse dans le Cantal (15)",
        "Expertise artisanale en charpente et ossature bois",
        "Surélévation rapide, propre et durable",
        "Matériaux esthétiques et performants",
        "Finitions intérieures et extérieures personnalisées",
        "Aide aux démarches administratives",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Pourquoi surélever votre maison en ossature bois ?</h2>
            <p className="mb-4">
              La surélévation est la solution idéale pour agrandir votre maison sans perdre d'espace extérieur :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Gagner des m² sans consommer de terrain</li>
              <li>✔️ Chantier rapide et léger grâce à l'ossature bois</li>
              <li>✔️ Pas besoin de fondations supplémentaires</li>
              <li>✔️ Performance thermique et acoustique</li>
              <li>✔️ Valorisation de votre bien immobilier</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des surélévations adaptées à tous les projets</h2>
            <p className="mb-4">Nous réalisons :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Surélévation complète de la maison</li>
              <li>Surélévation partielle (une pièce, un étage supplémentaire)</li>
              <li>Création de chambres, suite parentale, bureau, espace enfants</li>
              <li>Aménagement de combles perdus</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Matériaux et finitions personnalisés</h2>
            <p className="mb-4">Choisissez :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Bardage extérieur : bois, composite, PVC, aluminium</li>
              <li>Toiture : tuiles, acier, EPDM</li>
              <li>Menuiseries : fenêtres, portes, volets</li>
              <li>Aménagements intérieurs : cloisons, parquet, peinture</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Accompagnement administratif</h2>
            <p>
              📄 Nous vous assistons dans vos démarches : permis de construire, étude de faisabilité technique, respect des normes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Surélever votre maison avec L'Atelier du Volcan</h2>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude gratuite et personnalisée.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Surelevation;
