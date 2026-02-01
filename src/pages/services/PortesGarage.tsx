import ServiceLayout from "@/components/ServiceLayout";
import porteGarageImg from "@/assets/Porte de garage.jpg";
import { Card, CardContent } from "@/components/ui/card";

const PortesGarage = () => {
  return (
    <ServiceLayout
      title="Portes de garage"
      subtitle="Alliez élégance, performance et sécurité pour votre garage"
      description="Chez L'Atelier du Volcan, nous mettons notre savoir-faire artisanal au service de vos projets de menuiserie sur mesure dans le Cantal. Spécialistes de la pose de portes de garage en aluminium, nous vous proposons des solutions esthétiques, isolantes et durables, parfaitement adaptées à votre habitation et à votre mode de vie."
      image={porteGarageImg}
      features={[
        "Fabrication sur mesure selon vos dimensions et vos envies",
        "Design contemporain avec plusieurs finitions et coloris",
        "Haute résistance aux intempéries et à la corrosion",
        "Motorisation possible pour plus de confort",
        "Isolation renforcée pour une meilleure performance énergétique",
        "Pose professionnelle garantie par notre équipe du Cantal",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des portes de garage sur mesure, adaptées à votre habitation</h2>
            <p className="mb-4">
              Chaque garage mérite une porte à la fois esthétique, performante et pratique. Nous vous proposons plusieurs types de portes de garage, selon la configuration de votre espace et vos préférences :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Porte sectionnelle :</strong> gain de place, isolation optimale, idéale pour les garages exigus.</li>
              <li><strong>Porte basculante :</strong> simplicité, robustesse et prix maîtrisé.</li>
              <li><strong>Porte enroulable :</strong> compacte et design, parfaite pour les petits espaces.</li>
              <li><strong>Porte battante :</strong> style traditionnel et authentique.</li>
            </ul>
            <p>
              Toutes nos portes sont réalisées sur mesure pour s'adapter parfaitement aux dimensions de votre garage.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">L'aluminium : un matériau moderne, résistant et esthétique</h2>
            <p className="mb-4">
              Nous privilégions l'aluminium pour ses nombreux atouts :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Résistance aux intempéries, à la corrosion et aux UV</li>
              <li>✔️ Sans entretien et durable dans le temps</li>
              <li>✔️ Design moderne et élégant</li>
              <li>✔️ Large choix de coloris et finitions (RAL, effet bois, satiné…)</li>
              <li>✔️ Isolation thermique renforcée pour limiter les déperditions d'énergie</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Motorisation et confort d'utilisation</h2>
            <p className="mb-4">
              Pour un confort optimal au quotidien, nous proposons la motorisation de votre porte de garage. Ouvrez et fermez votre garage à distance, sans effort, grâce à une télécommande ou un système connecté.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Simplicité et rapidité d'ouverture</li>
              <li>✔️ Sécurité renforcée (détection d'obstacle, verrouillage automatique)</li>
              <li>✔️ Compatible avec les systèmes domotiques</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose professionnelle dans tout le Cantal</h2>
            <p className="mb-4">
              Nos menuisiers expérimentés réalisent une installation soignée, précise et sécurisée, dans le respect des normes en vigueur. Chaque porte de garage est posée avec rigueur pour garantir un fonctionnement parfait, une isolation optimale et une longévité maximale.
            </p>
            <p>
              Nous intervenons dans tout le Cantal : Aurillac, Arpajon-sur-Cère, Sansac-de-Marmiesse, Ytrac, Maurs, Vic-sur-Cère, Murat et communes alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Équipez votre garage avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Alliant esthétisme, performance et praticité, nos portes de garage en aluminium valorisent votre maison tout en vous simplifiant le quotidien.
            </p>
            <p className="font-semibold">
              📞 Contactez L'Atelier du Volcan dès aujourd'hui pour un devis gratuit et personnalisé.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default PortesGarage;
