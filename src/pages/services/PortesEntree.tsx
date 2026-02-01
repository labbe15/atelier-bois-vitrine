import ServiceLayout from "@/components/ServiceLayout";
import porteEntreeImg from "@/assets/Porte d_entrée.jpg";
import { Card, CardContent } from "@/components/ui/card";

const PortesEntree = () => {
  return (
    <ServiceLayout
      title="Portes d'entrée"
      subtitle="Alliez sécurité, design et performance avec nos portes d'entrée en bois, PVC, aluminium, bois-aluminium ou acier"
      description="Chez L'Atelier du Volcan, nous posons des portes d'entrée sur mesure qui subliment votre façade tout en renforçant la sécurité et l'isolation de votre habitation. Basés au cœur du Cantal, nous intervenons pour tous vos projets de rénovation ou de construction neuve, avec des produits fabriqués en France et un savoir-faire artisanal reconnu."
      image={porteEntreeImg}
      features={[
        "Expertise locale dans le Cantal et ses alentours",
        "Pose soignée et garantie par des menuisiers qualifiés",
        "Large gamme de portes personnalisables (dimensions, couleurs, vitrages, accessoires)",
        "Conseils sur le choix des matériaux et les performances énergétiques",
        "Devis gratuit et accompagnement sur mesure",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une large gamme de portes d'entrée adaptées à votre maison</h2>
            <p className="mb-4">
              Chaque maison mérite une porte d'entrée à la hauteur de son style et de ses exigences. Nous vous proposons un large choix de matériaux et de designs :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Porte d'entrée en bois :</strong> chaleur et authenticité, idéale pour les maisons traditionnelles ou contemporaines.</li>
              <li><strong>Porte d'entrée en PVC :</strong> excellent rapport qualité-prix, sans entretien, performante en isolation.</li>
              <li><strong>Porte d'entrée en aluminium :</strong> design moderne, robuste et durable, disponible dans de nombreux coloris.</li>
              <li><strong>Porte d'entrée mixte bois-aluminium :</strong> alliance du charme du bois à l'intérieur et de la résistance de l'aluminium à l'extérieur.</li>
              <li><strong>Porte d'entrée en acier :</strong> haute sécurité et robustesse maximale.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Sécurité, isolation et confort</h2>
            <p className="mb-4">
              Votre porte d'entrée est bien plus qu'un simple accès : elle assure la sécurité de votre famille et l'isolation de votre maison.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Isolation thermique et phonique performante</li>
              <li>✔️ Serrures multipoints et systèmes anti-effraction</li>
              <li>✔️ Étanchéité optimale à l'air et à l'eau</li>
              <li>✔️ Résistance aux intempéries et aux UV</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Personnalisation et esthétisme</h2>
            <p className="mb-4">
              Nos portes d'entrée sont entièrement personnalisables pour s'adapter à vos goûts et à votre façade :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Large choix de coloris et finitions (laqué, satiné, effet bois, etc.)</li>
              <li>Vitrages (clair, opaque, décoratif) pour apporter de la lumière</li>
              <li>Poignées, heurtoirs et accessoires au design soigné</li>
              <li>Dimensions sur mesure pour une adaptation parfaite</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose professionnelle dans tout le Cantal</h2>
            <p className="mb-4">
              Nos menuisiers expérimentés réalisent une installation soignée et garantie, dans le respect des règles de l'art. Chaque pose est effectuée avec précision pour garantir une étanchéité parfaite, une sécurité optimale et un fonctionnement irréprochable.
            </p>
            <p>
              Nous intervenons dans tout le Cantal : Aurillac, Arpajon-sur-Cère, Sansac-de-Marmiesse, Ytrac, Maurs, Vic-sur-Cère, Murat et communes alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Sublimez votre entrée avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez à votre maison une porte d'entrée design, sécurisée et performante, posée avec soin et expertise par L'Atelier du Volcan.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default PortesEntree;
