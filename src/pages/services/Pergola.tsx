import ServiceLayout from "@/components/ServiceLayout";
import pergolaImage from "@/assets/Pergola.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Pergola = () => {
  return (
    <ServiceLayout
      title="Pergolas"
      subtitle="L'alliance du confort, du design et de la durabilité"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous concevons et installons des pergolas sur mesure qui s'adaptent à vos envies et à votre mode de vie. Qu'elles soient en bois ou en aluminium bioclimatique ou classique, nos pergolas allient esthétisme, robustesse et fonctionnalité, pour vous permettre de profiter de votre extérieur en toute saison. Véritable extension de la maison, la pergola devient un espace de détente, de convivialité et de confort, tout en valorisant l'architecture de votre habitation."
      image={pergolaImage}
      features={[
        "Fabrication et pose sur mesure dans le Cantal",
        "Large choix de matériaux : bois, aluminium bioclimatique ou classique",
        "Options haut de gamme (LED, stores, verre coulissant)",
        "Accompagnement pour les démarches administratives",
        "Intervention dans tout le Cantal : Aurillac, Naucelles, Maurs, Jussac, Ytrac…",
        "Savoir-faire artisanal local à Sansac-de-Marmiesse",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des pergolas adaptées à vos besoins et à votre style</h2>
            <p className="mb-4">
              L'Atelier du Volcan conçoit des pergolas 100 % personnalisées, que ce soit pour ombrager une terrasse, protéger un spa ou créer un coin repas extérieur.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Pergolas en bois</h3>
            <p className="mb-4">
              Chaleureuses, naturelles et authentiques, elles s'intègrent parfaitement dans un environnement traditionnel ou contemporain. Réalisées en bois massif ou lamellé-collé, elles offrent solidité et élégance naturelle.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Pergolas en aluminium bioclimatiques</h3>
            <p className="mb-4">
              Modernes et innovantes, elles sont équipées de lames orientables qui régulent la lumière et la température selon vos besoins. Possibilité d'ajouter un bandeau LED intégré pour une ambiance lumineuse le soir, ainsi que des stores verticaux ou coulissants en verre pour une protection optimale contre le vent et la pluie.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Pergolas aluminium classiques</h3>
            <p>
              Fixes ou adossées, elles combinent design épuré, résistance et facilité d'entretien, tout en offrant un excellent rapport qualité/prix.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des finitions et options sur mesure</h2>
            <p className="mb-4">
              Nos pergolas sont entièrement personnalisables pour répondre à vos envies :
            </p>
            <ul className="space-y-2 mb-4 list-none">
              <li>✔️ Bandeaux LED intégrés pour un éclairage d'ambiance discret et élégant</li>
              <li>✔️ Stores verticaux pour vous protéger du soleil ou du vis-à-vis</li>
              <li>✔️ Coulissants en verre pour fermer partiellement ou totalement l'espace</li>
              <li>✔️ Large choix de coloris, finitions et dimensions</li>
              <li>✔️ Intégration harmonieuse à votre façade ou votre terrasse</li>
            </ul>
            <p>
              Chaque pergola est conçue et posée par nos menuisiers-charpentiers qualifiés, avec un souci constant du détail, de la qualité et de la durabilité.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Accompagnement administratif</h2>
            <p className="mb-4">
              Selon la surface de votre pergola, L'Atelier du Volcan vous accompagne également dans la préparation du dossier administratif :
            </p>
            <p className="mb-4">
              📄 Déclaration préalable de travaux ou permis de construire.
            </p>
            <p>
              Nous vous aidons à constituer un dossier complet, conforme à la réglementation en vigueur dans votre commune du Cantal.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Donnez vie à votre projet de pergola avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Créez un espace extérieur élégant, confortable et durable grâce à une pergola sur mesure conçue et posée par L'Atelier du Volcan.
            </p>
            <p className="mb-4">
              Nos artisans vous accompagnent à chaque étape, du conseil à la réalisation, pour une pergola unique, adaptée à votre style de vie et à votre maison.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude personnalisée et un devis gratuit.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              L'Atelier du Volcan, votre spécialiste des pergolas bois et aluminium dans le Cantal, au service de vos envies d'extérieur.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Pergola;
