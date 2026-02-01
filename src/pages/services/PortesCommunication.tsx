import ServiceLayout from "@/components/ServiceLayout";
import porteInterieurImg from "@/assets/Porte intérieur.jpg";
import { Card, CardContent } from "@/components/ui/card";

const PortesCommunication = () => {
  return (
    <ServiceLayout
      title="Portes intérieures"
      subtitle="Sublimez votre intérieur avec des portes élégantes et durables"
      description="Chez L'Atelier du Volcan, entreprise spécialisée dans la pose de menuiseries à Sansac-de-Marmiesse, nous vous accompagnons dans le choix et la pose de vos portes intérieures. Design, robustes et parfaitement adaptées à votre intérieur, nos portes conjuguent esthétisme, confort et qualité artisanale. Que vous rénoviez une maison traditionnelle ou que vous aménagiez un intérieur contemporain, nous vous proposons une large gamme de portes bois ou aluminium sélectionnées pour leur performance et leur élégance."
      image={porteInterieurImg}
      features={[
        "Conseils personnalisés selon vos besoins et votre budget",
        "Pose professionnelle et finitions soignées",
        "Produits de qualité, durables et esthétiques",
        "Large choix de modèles et de matériaux",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une large gamme de portes intérieures pour tous les styles</h2>
            <p className="mb-4">
              Chez L'Atelier du Volcan, nous vous proposons de nombreux modèles de portes intérieures, sélectionnés chez nos fournisseurs pour leur design, leur performance et leur qualité :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li>Portes pleines ou vitrées</li>
              <li>Portes battantes, coulissantes ou à galandage</li>
              <li>Portes à un vantail ou double battant</li>
              <li>Différentes essences de bois et finitions (vernie, laquée, teintée, brute…)</li>
              <li>Portes bois ou aluminium (pour verrières intérieures ou cloisons vitrées)</li>
            </ul>
            <p>
              Chaque porte est adaptée à l'usage de la pièce : chambre, salon, bureau, salle de bains, ou pièce de vie.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose soignée pour un résultat impeccable</h2>
            <p className="mb-4">
              Nos menuisiers maîtrisent parfaitement la pose de portes intérieures et garantissent un résultat esthétique, fonctionnel et durable.
            </p>
            <p className="mb-4">Nous prenons en compte :</p>
            <ul className="space-y-2 list-none">
              <li>✔️ La prise de cotes précise et l'adaptation au bâti existant</li>
              <li>✔️ Le choix de l'ouverture : sens de la porte et encombrement</li>
              <li>✔️ Le réglage des paumelles et la finition du bâti</li>
              <li>✔️ L'isolation acoustique ou thermique si nécessaire</li>
            </ul>
            <p className="mt-4">
              Chaque détail compte pour que votre porte s'intègre harmonieusement à votre intérieur.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des portes adaptées à tous vos projets dans le Cantal</h2>
            <p className="mb-4">
              Que vous rénoviez une maison ancienne, que vous réaménagez un appartement ou que vous construisiez une extension bois, nos portes intérieures apportent style, qualité et confort à vos espaces de vie.
            </p>
            <p>
              Nous vous accompagnons dans toutes les communes du Cantal : Aurillac, Arpajon-sur-Cère, Sansac-de-Marmiesse, Ytrac, Maurs, Vic-sur-Cère, Murat et alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Transformez votre intérieur avec L'Atelier du Volcan</h2>
            <p className="font-semibold">
              📞 Contactez L'Atelier du Volcan dès aujourd'hui pour un devis gratuit et offrez à votre maison des portes intérieures design et durables, posées avec soin et précision.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default PortesCommunication;
