import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Sols = () => {
  return (
    <ServiceLayout
      title="Sols"
      subtitle="Offrez chaleur, élégance et confort à votre intérieur"
      description="Chez L'Atelier du Volcan, entreprise artisanale de pose de menuiserie à Sansac-de-Marmiesse, nous donnons vie à vos projets d'aménagement intérieur avec la pose de sols sur mesure : bois massif, vinyle à clipser, contrecollé, stratifié ou OSB. Nous intervenons dans tout le Cantal pour transformer vos pièces en espaces chaleureux, esthétiques et durables. Nos menuisiers qualifiés assurent une installation soignée et durable, avec nivelage et renforcement du plancher si nécessaire, pour garantir une base parfaitement stable et un résultat irréprochable."
      image={agencementImage}
      features={[
        "Expertise locale à Sansac-de-Marmiesse",
        "Conseils personnalisés selon vos goûts et votre budget",
        "Pose soignée par des menuisiers qualifiés",
        "Matériaux durables et finitions haut de gamme",
        "Intervention dans tout le Cantal : Aurillac, Arpajon sur cère, Maurs, Vic-sur-Cère, Murat...",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Le bois massif – L'authenticité et la noblesse naturelle</h2>
            <p className="mb-4">
              Chaleureux, robuste et intemporel, le parquet en bois massif apporte une âme unique à votre intérieur. Chaque lame est sélectionnée avec soin pour offrir un aspect naturel et une longévité exceptionnelle.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ 100 % bois véritable</li>
              <li>✔️ Réparable et durable</li>
              <li>✔️ Idéal pour les maisons de caractère ou contemporaines</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Le parquet contrecollé – Le compromis idéal</h2>
            <p className="mb-4">
              Composé de plusieurs couches de bois, le parquet contrecollé offre une excellente stabilité et une pose rapide. Il allie authenticité du bois et facilité d'entretien, tout en étant compatible avec le chauffage au sol.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Esthétique naturelle</li>
              <li>✔️ Bonne résistance dans le temps</li>
              <li>✔️ Pose flottante ou collée</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Le sol stratifié – Le design à prix doux</h2>
            <p className="mb-4">
              Résistant, moderne et économique, le sol stratifié imite parfaitement le bois ou d'autres matériaux tout en restant facile à entretenir. Idéal pour les espaces de vie fréquentés, il combine style, praticité et budget maîtrisé.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Large choix de finitions</li>
              <li>✔️ Entretien simple</li>
              <li>✔️ Excellente résistance aux chocs et rayures</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Le vinyle à clipser – Le confort moderne</h2>
            <p className="mb-4">
              Souple, étanche et agréable sous le pied, le sol vinyle à clipser est une solution contemporaine et polyvalente. Il s'adapte à toutes les pièces, y compris les salles d'eau et cuisines, tout en offrant un confort acoustique et thermique optimal.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Résistant à l'humidité</li>
              <li>✔️ Installation rapide et propre</li>
              <li>✔️ Nombreux designs et coloris</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">L'OSB – Le style brut et contemporain</h2>
            <p className="mb-4">
              Pour un intérieur au look industriel ou naturel, le sol en OSB (panneaux de bois compressé) est une alternative originale et durable. Il peut être laissé brut, verni ou peint selon le rendu souhaité.
            </p>
            <p className="mb-4">
              L'OSB est aussi utilisé comme support technique avant la pose d'un autre revêtement (stratifié, vinyle, contrecollé, etc.). Après un nivelage ou un renforcement du plancher existant, l'OSB offre une surface stable et résistante, prête à accueillir le revêtement final dans les meilleures conditions.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Parfait pour rattraper les irrégularités d'un sol ancien</li>
              <li>✔️ Renforce la structure du plancher</li>
              <li>✔️ Garantit une pose propre, durable et plane</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose professionnelle et durable</h2>
            <p className="mb-4">
              Avant toute installation, nos experts évaluent la planéité et la solidité de votre plancher. Si nécessaire, nous procédons au nivelage, au renforcement ou à la réparation du support pour assurer une pose parfaite et durable.
            </p>
            <p>
              Chaque chantier est réalisé avec précision, propreté et soin du détail, dans le respect des délais convenus.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Transformez vos sols avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Apportez du cachet, du confort et de la valeur à votre maison grâce à un sol posé sur mesure par des professionnels passionnés.
            </p>
            <p className="font-semibold">
              📞 Contactez L'Atelier du Volcan dès aujourd'hui pour un devis gratuit et redonnez vie à vos espaces avec des revêtements de sol bois et vinyle posés dans les règles de l'art.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Sols;
