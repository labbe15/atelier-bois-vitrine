import ServiceLayout from "@/components/ServiceLayout";
import extensionImg from "@/assets/Extension.jpg";
import { Card, CardContent } from "@/components/ui/card";

const ExtensionOssatureBois = () => {
  return (
    <ServiceLayout
      title="Extension ossature bois"
      subtitle="Agrandissez votre maison rapidement et naturellement grâce à l'ossature bois"
      description="Vous rêvez d'un espace de vie supplémentaire sans déménager ? Avec L'Atelier du Volcan, spécialiste de la charpente et de la menuiserie bois à Sansac-de-Marmiesse (Cantal), profitez d'une extension de maison en ossature bois à la fois rapide à monter, performante thermiquement et entièrement personnalisée."
      image={extensionImg}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Expertise artisanale en menuiserie et charpente bois",
        "Montage rapide et propre grâce à la préfabrication bois",
        "Isolation performante et confort durable",
        "Finitions personnalisées intérieures et extérieures",
        "Accompagnement administratif (permis, déclaration préalable)",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une extension de maison rapide, propre et durable</h2>
            <p className="mb-4">
              L'extension en ossature bois offre de nombreux avantages pour agrandir votre maison :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Chantier rapide : montage en quelques jours grâce à la préfabrication</li>
              <li>✔️ Chantier propre et sec, sans gros travaux de maçonnerie</li>
              <li>✔️ Isolation thermique et phonique performante</li>
              <li>✔️ Matériau écologique, renouvelable et durable</li>
              <li>✔️ Personnalisation totale de l'esthétique et des finitions</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des extensions sur mesure pour tous vos besoins</h2>
            <p className="mb-4">
              Nous concevons des extensions en ossature bois adaptées à vos envies et à la configuration de votre terrain :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Extension de plain-pied : cuisine, salon, chambre supplémentaire, bureau</li>
              <li>Extension en étage : chambres, salle de bains, suite parentale</li>
              <li>Véranda bois-vitrée pour profiter de la lumière naturelle</li>
              <li>Studio indépendant ou espace professionnel</li>
            </ul>
            <p className="mt-4">
              Chaque extension est conçue pour s'harmoniser parfaitement avec votre maison existante.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Finitions intérieures et extérieures personnalisées</h2>
            <p className="mb-4">Vous pouvez personnaliser :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Le bardage extérieur (bois, composite, PVC, aluminium)</li>
              <li>La toiture (tuiles, acier, membrane EPDM)</li>
              <li>Les menuiseries (fenêtres, portes, volets)</li>
              <li>Les revêtements intérieurs (lambris, placo, parquet, carrelage)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Accompagnement administratif complet</h2>
            <p className="mb-4">
              Nous vous accompagnons dans vos démarches administratives :
            </p>
            <p>
              📄 Déclaration préalable de travaux ou permis de construire, selon la surface de votre extension.
            </p>
            <p className="mt-4">
              Nous vous guidons pas à pas pour que votre projet se déroule en toute sérénité, dans le respect des règles d'urbanisme locales.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Agrandissez votre maison avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez-vous un espace de vie supplémentaire, conçu avec soin et expertise par L'Atelier du Volcan.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude gratuite et personnalisée.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default ExtensionOssatureBois;
