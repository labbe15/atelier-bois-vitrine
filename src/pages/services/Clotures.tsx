import ServiceLayout from "@/components/ServiceLayout";
import clotureImg from "@/assets/Clôture.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Clotures = () => {
  return (
    <ServiceLayout
      title="Clôtures"
      subtitle="Alliez sécurité, intimité et esthétisme avec nos clôtures en bois, PVC ou aluminium"
      description="Chez L'Atelier du Volcan, votre spécialiste en menuiserie et aménagements extérieurs dans le Cantal, nous vous proposons des clôtures sur mesure qui s'adaptent à votre style de maison et à vos besoins. Que vous recherchiez une clôture moderne, traditionnelle ou contemporaine, nous vous accompagnons dans le choix, la fabrication et la pose pour un résultat à la fois solide, harmonieux et durable."
      image={clotureImg}
      features={[
        "Conseils personnalisés",
        "Fabrication sur mesure",
        "Pose professionnelle dans tout le Cantal",
        "Devis gratuit et rapide",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une large gamme de clôtures adaptées à vos besoins</h2>
            <p className="mb-4">
              Nous vous proposons plusieurs types de clôtures, selon vos goûts, votre budget et le niveau d'intimité souhaité :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Clôture en bois :</strong> chaleureuse et naturelle, idéale pour les maisons de caractère ou les jardins paysagers. Disponible en lames horizontales, verticales ou en claustra.</li>
              <li><strong>Clôture en PVC :</strong> économique, sans entretien et durable. Parfaite pour un rendu sobre et moderne.</li>
              <li><strong>Clôture en aluminium :</strong> design, résistante et sans entretien. Large choix de coloris et de styles (ajouré, plein, contemporain, classique).</li>
            </ul>
            <p>
              Chaque clôture est fabriquée sur mesure pour s'adapter parfaitement aux dimensions de votre terrain.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Sécurité, intimité et esthétisme</h2>
            <p className="mb-4">
              Nos clôtures répondent à plusieurs besoins essentiels :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Délimiter votre propriété et sécuriser votre terrain</li>
              <li>✔️ Préserver votre intimité des regards extérieurs</li>
              <li>✔️ Embellir votre jardin et valoriser votre maison</li>
              <li>✔️ Résister aux intempéries et aux UV pour une longévité optimale</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Personnalisation et design</h2>
            <p className="mb-4">
              Nos clôtures sont entièrement personnalisables pour s'harmoniser avec votre maison et votre jardin :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Hauteur et longueur sur mesure</li>
              <li>Large choix de coloris et finitions</li>
              <li>Différents styles : contemporain, traditionnel, minimaliste</li>
              <li>Options : lames pleines ou ajourées, avec ou sans soubassement, portillon intégré</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose professionnelle et durable</h2>
            <p className="mb-4">
              Nos menuisiers qualifiés réalisent une installation soignée et solide, dans le respect des règles de l'art. Chaque clôture est posée avec précision pour garantir stabilité, alignement parfait et durabilité.
            </p>
            <p>
              Nous intervenons dans tout le Cantal : Aurillac, Arpajon-sur-Cère, Sansac-de-Marmiesse, Ytrac, Maurs, Vic-sur-Cère, Murat et communes alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Sécurisez et embellissez votre jardin avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez sécurité, intimité et esthétisme à votre extérieur grâce à une clôture sur mesure, conçue et posée avec soin par L'Atelier du Volcan.
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

export default Clotures;
