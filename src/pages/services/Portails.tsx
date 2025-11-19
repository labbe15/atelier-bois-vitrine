import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Portails = () => {
  return (
    <ServiceLayout
      title="Portails"
      subtitle="Alliez sécurité, élégance et confort au quotidien"
      description="Chez L'Atelier du Volcan, nous concevons et posons des portails coulissants et battants adaptés à tous les styles d'habitation et à tous les budgets. Situés au cœur du Cantal, nous mettons notre savoir-faire artisanal au service de vos extérieurs pour allier esthétique, robustesse et praticité."
      image={menuiserieImage}
      features={[
        "Entreprise locale du Cantal – une équipe proche de vous, réactive et à l'écoute",
        "Fabrication sur mesure – pour un portail unique, adapté à votre maison",
        "Pose soignée – réalisée par nos menuisiers expérimentés",
        "Matériaux de qualité – durables, esthétiques et résistants aux intempéries",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Portail battant ou portail coulissant : faites le bon choix</h2>
            <p className="mb-4">
              Nous vous accompagnons dans le choix du portail le mieux adapté à votre terrain, votre style et votre budget :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Portail battant :</strong> élégant et traditionnel, idéal pour les grandes entrées. S'ouvre vers l'intérieur ou l'extérieur selon la configuration du terrain.</li>
              <li><strong>Portail coulissant :</strong> pratique et moderne, parfait pour les terrains en pente ou les entrées étroites. Gain de place et facilité d'utilisation.</li>
            </ul>
            <p>
              Chaque portail est fabriqué sur mesure pour s'adapter parfaitement aux dimensions de votre entrée.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Matériaux de qualité : aluminium, bois ou acier</h2>
            <p className="mb-4">
              Nous proposons plusieurs matériaux, en fonction de vos goûts et de vos exigences :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Portail en aluminium :</strong> moderne, résistant, sans entretien, disponible dans une large gamme de coloris et finitions.</li>
              <li><strong>Portail en bois :</strong> chaleureux et authentique, parfait pour les maisons de caractère.</li>
              <li><strong>Portail en acier :</strong> robuste et sécurisé, idéal pour une protection renforcée.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Motorisation et domotique pour plus de confort</h2>
            <p className="mb-4">
              Pour un confort optimal au quotidien, nous proposons la motorisation de votre portail. Ouvrez et fermez votre portail à distance, sans effort, grâce à une télécommande, un digicode ou une application mobile.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Simplicité et rapidité d'ouverture</li>
              <li>✔️ Sécurité renforcée (détection d'obstacle, verrouillage automatique, feu clignotant)</li>
              <li>✔️ Compatible avec les systèmes domotiques</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Personnalisation et design</h2>
            <p className="mb-4">
              Nos portails sont entièrement personnalisables pour s'harmoniser avec votre habitation et refléter votre style :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Large choix de couleurs et finitions (RAL, effet bois, satiné, etc.)</li>
              <li>Différents styles : contemporain, traditionnel, minimaliste, classique</li>
              <li>Options de décoration : lames, traverses, inserts, vitrages</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose professionnelle dans tout le Cantal</h2>
            <p className="mb-4">
              Nos menuisiers expérimentés assurent une installation soignée, sécurisée et durable, dans le respect des normes en vigueur. Chaque portail est posé avec précision pour garantir un fonctionnement parfait et une longévité optimale.
            </p>
            <p>
              Nous intervenons dans tout le Cantal : Aurillac, Arpajon-sur-Cère, Sansac-de-Marmiesse, Ytrac, Maurs, Vic-sur-Cère, Murat et communes alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Valorisez votre entrée avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez sécurité, élégance et confort à votre maison grâce à un portail sur mesure, conçu et posé avec soin par L'Atelier du Volcan.
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

export default Portails;
