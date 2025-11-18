import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Terrasses = () => {
  return (
    <ServiceLayout
      title="Terrasses"
      subtitle="Créez un espace extérieur chaleureux et durable"
      description="Chez L'Atelier du Volcan, entreprise de menuiserie et charpente à Sansac-de-Marmiesse, nous concevons et posons des terrasses en bois sur mesure, adaptées à votre maison, à votre terrain et à vos envies. Nos réalisations allient esthétisme, solidité et confort d'utilisation, pour transformer votre extérieur en un véritable lieu de vie convivial."
      image={charpenteImage}
      features={[
        "Fabrication et pose sur mesure",
        "Bois de qualité : exotique, européen ou composite plein",
        "Design personnalisé selon vos envies",
        "Intervention dans tout le Cantal : Aurillac, Pleaux, Murat, Maurs, Le Rouget, St Mamet…",
        "Savoir-faire artisanal local à Sansac-de-Marmiesse",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des terrasses en bois de toutes essences</h2>
            <p className="mb-4">
              Nous travaillons avec une large gamme d'essences de bois, soigneusement sélectionnées pour leur résistance naturelle et leur beauté intemporelle :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Bois exotique :</strong> esthétique haut de gamme, durable et résistant à l'humidité.</li>
              <li><strong>Bambou :</strong> écologique, moderne et ultra résistant.</li>
              <li><strong>Pin sylvestre :</strong> économique et traité pour durer dans le temps.</li>
              <li><strong>Douglas :</strong> naturellement imputrescible, idéal pour les extérieurs.</li>
              <li><strong>Frêne thermo-traité :</strong> bois local stabilisé, à la teinte élégante et durable.</li>
            </ul>
            <p>
              Chaque essence possède son charme unique, permettant de concevoir une terrasse naturelle, élégante et durable, qu'elle soit de plain-pied, sur pilotis ou suspendue.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Le composite : l'alliance du design et de la praticité</h2>
            <p className="mb-4">
              Vous souhaitez une terrasse sans entretien et résistante aux intempéries ? Nous proposons également des terrasses en composite plein, un matériau moderne qui imite parfaitement le bois tout en garantissant stabilité, durabilité et facilité d'entretien.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Aucune écharde, aucun traitement nécessaire</li>
              <li>✔️ Résistance aux UV, à l'humidité et aux variations de température</li>
              <li>✔️ Nombreux coloris et finitions disponibles</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose soignée par des artisans expérimentés</h2>
            <p className="mb-4">
              Nos menuisiers-charpentiers assurent une pose professionnelle et durable, dans le respect des normes et de votre environnement. Selon la configuration de votre terrain, nous réalisons :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li>Des terrasses de plain-pied, parfaitement intégrées à votre maison</li>
              <li>Des terrasses surélevées ou sur pilotis, idéales pour les terrains en pente</li>
              <li>Des structures sur mesure avec garde-corps, escaliers ou pergolas assortis</li>
            </ul>
            <p>
              Chaque terrasse est conçue pour résister au climat du Cantal et s'intégrer harmonieusement à votre extérieur.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Offrez à votre extérieur une terrasse unique et durable</h2>
            <p className="mb-4">
              Faites confiance à L'Atelier du Volcan pour la conception et la pose de votre terrasse en bois ou composite.
            </p>
            <p className="mb-4">
              Nous vous accompagnons de la conception à la réalisation, avec des matériaux nobles, une finition impeccable et un résultat à la hauteur de vos attentes.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude personnalisée et un devis gratuit.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              L'Atelier du Volcan, votre artisan menuisier et charpentier dans le Cantal, crée des terrasses sur mesure alliant nature, confort et élégance.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Terrasses;
