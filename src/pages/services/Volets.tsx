import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Volets = () => {
  return (
    <ServiceLayout
      title="Volets & Protections solaires"
      subtitle="Alliez confort, sécurité et esthétisme avec nos volets et stores sur mesure"
      description="Chez L'Atelier du Volcan, votre expert en menuiserie dans le Cantal, nous vous accompagnons dans le choix et la pose de volets battants, volets roulants, brise-soleil et stores adaptés à votre habitation et à votre style. Forts de notre savoir-faire artisanal et de notre exigence de qualité, nous sélectionnons pour vous des produits durables, performants et esthétiques, conçus pour résister aux conditions climatiques de notre belle région."
      image={menuiserieImage}
      features={[
        "Expertise locale dans la menuiserie sur mesure",
        "Produits de qualité, garantis et durables",
        "Installation professionnelle et finitions soignées",
        "Conseils personnalisés selon votre habitat et votre budget",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Volets battants : le charme de la tradition</h2>
            <p className="mb-4">
              Élégants et intemporels, nos volets battants en bois ou en aluminium subliment votre façade tout en offrant sécurité, isolation et protection solaire.
            </p>
            <p className="mb-4">Disponibles dans de nombreux coloris et finitions, ils s'adaptent aussi bien aux maisons de caractère qu'aux constructions contemporaines.</p>
            <ul className="space-y-2 list-none">
              <li>✔️ Esthétique soignée</li>
              <li>✔️ Résistants aux intempéries</li>
              <li>✔️ Entretien facile (surtout pour l'aluminium)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Volets roulants : confort et praticité au quotidien</h2>
            <p className="mb-4">
              Discrets, modernes et faciles à manipuler, les volets roulants allient isolation thermique, sécurité renforcée et gain de place. Nous proposons des volets roulants manuels ou motorisés, en PVC ou aluminium, avec une excellente performance énergétique.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Isolation thermique et phonique optimale</li>
              <li>✔️ Gain de place (pas d'encombrement extérieur)</li>
              <li>✔️ Motorisation disponible pour un confort maximal</li>
              <li>✔️ Sécurité anti-intrusion renforcée</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Brise-soleil et stores : maîtrisez la lumière avec style</h2>
            <p className="mb-4">
              Pour vous protéger efficacement du soleil tout en profitant de la luminosité naturelle, nous installons des brise-soleil orientables et des stores extérieurs sur mesure.
            </p>
            <p className="mb-4">
              Parfaits pour terrasses, vérandas, baies vitrées ou fenêtres exposées plein sud, ils apportent confort thermique et modernité à votre façade.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Réduction de la chaleur et des éblouissements</li>
              <li>✔️ Gestion intelligente de la luminosité</li>
              <li>✔️ Design contemporain</li>
              <li>✔️ Résistance aux UV et aux intempéries</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose professionnelle et des finitions impeccables</h2>
            <p className="mb-4">
              Nos menuisiers qualifiés réalisent une installation soignée, durable et esthétique, dans le respect des règles de l'art. Chaque intervention est menée avec précision, pour garantir un fonctionnement optimal et une intégration harmonieuse à votre façade.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Protégez et embellissez votre maison avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez confort, sécurité et esthétisme à votre habitation grâce à nos solutions de volets et protections solaires, adaptées à votre budget et à votre style.
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

export default Volets;
