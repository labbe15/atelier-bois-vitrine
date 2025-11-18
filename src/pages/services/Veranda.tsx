import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Veranda = () => {
  return (
    <ServiceLayout
      title="Véranda"
      subtitle="Offrez-vous une véranda élégante et lumineuse avec L'Atelier du Volcan"
      description="Besoin d'un nouvel espace à vivre, lumineux et confortable toute l'année ? L'Atelier du Volcan, spécialiste de la menuiserie et de la charpente à Sansac-de-Marmiesse, conçoit et installe des vérandas sur mesure en aluminium ou en structure bois-aluminium dans tout le Cantal. Alliant esthétique, performance et durabilité, nos vérandas s'adaptent à tous les styles d'habitation."
      image={extensionImage}
      features={[
        "Spécialiste local en menuiserie et charpente bois à Sansac-de-Marmiesse (15)",
        "Vérandas sur mesure, durables et esthétiques",
        "Choix entre structure aluminium ou bois-aluminium",
        "Accompagnement administratif (permis, déclaration préalable)",
        "Qualité artisanale et finitions haut de gamme",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une véranda pour profiter toute l'année</h2>
            <p className="mb-4">
              La véranda offre un espace de vie supplémentaire lumineux et confortable :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Pièce de vie baignée de lumière naturelle</li>
              <li>✔️ Isolation thermique performante</li>
              <li>✔️ Utilisation toute l'année</li>
              <li>✔️ Valorisation de votre maison</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Aluminium ou bois-aluminium : deux styles au choix</h2>
            <p className="mb-4">Nous proposons :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Véranda aluminium :</strong> moderne, légère, sans entretien, large choix de coloris</li>
              <li><strong>Véranda bois-aluminium :</strong> chaleur du bois à l'intérieur, résistance de l'aluminium à l'extérieur</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Personnalisation complète</h2>
            <p className="mb-4">Choisissez :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Dimensions et forme selon votre terrain</li>
              <li>Type de vitrage (clair, teinté, à contrôle solaire)</li>
              <li>Toiture (verre, polycarbonate, tuiles)</li>
              <li>Portes et fenêtres coulissantes ou battantes</li>
              <li>Coloris et finitions</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Accompagnement administratif</h2>
            <p>
              📄 Nous vous aidons dans vos démarches : déclaration préalable de travaux ou permis de construire.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Créez votre véranda avec L'Atelier du Volcan</h2>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude gratuite et personnalisée.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Veranda;
