import ServiceLayout from "@/components/ServiceLayout";
import poolHouseImage from "@/assets/Pool house.jpg";
import { Card, CardContent } from "@/components/ui/card";

const PoolHouse = () => {
  return (
    <ServiceLayout
      title="Pool House"
      subtitle="Créez un espace élégant et fonctionnel autour de votre piscine"
      description="Vous rêvez d'un pool house sur mesure pour profiter pleinement de votre extérieur ? L'Atelier du Volcan, spécialiste de la menuiserie et charpente en ossature bois à Sansac-de-Marmiesse (Cantal), conçoit et installe des pools houses esthétiques, durables et entièrement personnalisables."
      image={poolHouseImage}
      features={[
        "Expertise locale en menuiserie et charpente bois dans le Cantal",
        "Réalisation sur mesure et 100 % personnalisée",
        "Matériaux durables, esthétiques et performants",
        "Accompagnement administratif complet",
        "Finition impeccable et respect des délais",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un pool house adapté à vos envies</h2>
            <p className="mb-4">
              Nous concevons des pools houses sur mesure pour sublimer votre espace piscine :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Abri de piscine avec espace détente, douche et vestiaire</li>
              <li>Pool house avec cuisine d'été et coin repas</li>
              <li>Espace bar et salon de jardin couvert</li>
              <li>Pool house fermé ou semi-ouvert selon vos besoins</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Matériaux durables et esthétiques</h2>
            <p className="mb-4">Vous pouvez personnaliser :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Structure en ossature bois</li>
              <li>Bardage extérieur : bois, composite, PVC, aluminium</li>
              <li>Toiture : tuiles, acier, EPDM, pergola bioclimatique</li>
              <li>Menuiseries : baies vitrées, portes coulissantes, fenêtres</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un espace fonctionnel et confortable</h2>
            <p>
              Nous aménageons votre pool house selon vos besoins : espace rangement, local technique piscine, douche, cuisine, bar, salon...
            </p>
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
            <h2 className="text-2xl font-semibold mb-4 text-primary">Créez votre pool house avec L'Atelier du Volcan</h2>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude gratuite et personnalisée.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default PoolHouse;
