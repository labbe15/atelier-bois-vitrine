import ServiceLayout from "@/components/ServiceLayout";
import vehiculesImg from "@/assets/Aménagement véhicules.jpg";
import { Card, CardContent } from "@/components/ui/card";

const AmenagementVehicules = () => {
  return (
    <ServiceLayout
      title="Aménagement des véhicules"
      subtitle="Aménagement de fourgons et vans sur mesure – L'Atelier du Volcan (Cantal)"
      description="Transformez votre fourgon, votre van ou votre utilitaire professionnel en un espace unique, pratique et parfaitement optimisé grâce au savoir-faire de L'Atelier du Volcan, votre spécialiste de la menuiserie sur mesure à Sansac-de-Marmiesse. Que vous soyez particulier, voyageur, professionnel du loisir ou artisan, nous concevons et installons des aménagements robustes, esthétiques et parfaitement adaptés à vos besoins."
      image={vehiculesImg}
      features={[
        "Aménagements 100 % personnalisables selon vos envies",
        "Adaptation à tous les types de fourgons et vans",
        "Espaces de vie optimisés pour voyager en toute liberté",
        "Aménagement professionnel pour utilitaires d'artisans",
        "Savoir-faire local et finitions irréprochables",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un aménagement 100 % personnalisable selon vos envies</h2>
            <p className="mb-4">
              Nous travaillons exclusivement avec des panneaux de bois de qualité, disponibles dans un large choix d'essences, de finitions, de teintes et d'imitation matière pour créer une véritable ambiance intérieure. Vous choisissez le style : bois massif, placage, décors modernes ou esprit chalet, tout est possible.
            </p>
            <p>
              Nos aménagements s'adaptent à tous les types de fourgons et vans : Renault Trafic, Peugeot Expert, VW Transporter, Mercedes Vito, Ford Transit, Master, Jumpers, etc.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des espaces de vie optimisés pour voyager en toute liberté</h2>
            <p className="mb-4">
              L'Atelier du Volcan crée des aménagements intelligents et fonctionnels :
            </p>
            <h3 className="text-xl font-semibold mb-3 text-primary/80">✔ Espace nuit sur mesure</h3>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li>Lits fixes ou modulables</li>
              <li>Banquettes convertibles</li>
              <li>Coffres intégrés</li>
              <li>Plateformes gain de place</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-primary/80">✔ Espace détente ou salon</h3>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li>Banquettes, assises et rangements</li>
              <li>Table rabattable ou amovible</li>
              <li>Habillages intérieurs isolants et esthétiques</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-primary/80">✔ Cuisine compacte et fonctionnelle</h3>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li>Plans de travail adaptés</li>
              <li>Rangements optimisés (tiroirs, niches, placards)</li>
              <li>Intégration possible de réchaud, frigo ou évier (installations hors fluides)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-primary/80">✔ Rangements sur mesure intelligents</h3>
            <ul className="space-y-2 list-disc pl-6">
              <li>Meubles hauts</li>
              <li>Tiroirs coulissants</li>
              <li>Placards de grande contenance</li>
              <li>Habillage complet du fourgon</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Aménagement professionnel pour utilitaires d'artisans</h2>
            <p className="mb-4">
              Artisans du BTP, services, entretien, paysagistes, ou auto-entrepreneurs : L'Atelier du Volcan réalise également des aménagements robustes, ergonomiques et durables pour optimiser votre outil de travail.
            </p>
            <p className="mb-4">Nous réalisons :</p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li>Étagères en bois renforcé</li>
              <li>Rangements adaptés à vos outils et machines</li>
              <li>Cloisonnements sur mesure</li>
              <li>Plans de travail et établis intégrés</li>
              <li>Tiroirs sécurisés et systèmes d'organisation</li>
            </ul>
            <p>
              Un aménagement bien pensé, c'est plus de productivité, moins de pertes de temps et un véhicule mieux organisé.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Savoir-faire local, réactivité et finitions irréprochables</h2>
            <p className="mb-4">
              Installés à Sansac-de-Marmiesse, dans le Cantal, nous réalisons tous les aménagements sur mesure dans notre atelier, avec un véritable souci du détail. Chaque élément est fabriqué et posé par nos soins, garantissant :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔ Solidité et durabilité</li>
              <li>✔ Optimisation de chaque centimètre</li>
              <li>✔ Esthétique soignée</li>
              <li>✔ Pose rapide et propre</li>
              <li>✔ Matériaux de qualité professionnelle</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Pourquoi choisir L'Atelier du Volcan pour votre aménagement van ou fourgon ?</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>Expertise en menuiserie sur mesure</li>
              <li>Création adaptée à tous les modèles de véhicules</li>
              <li>Large choix de matériaux, essences et couleurs</li>
              <li>Solutions pour particuliers comme professionnels</li>
              <li>Accompagnement de la conception à la pose</li>
              <li>Fabrication locale dans le Cantal</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Donnez vie à votre projet de van aménagé ou d'utilitaire optimisé</h2>
            <p className="mb-4">
              Que vous souhaitiez créer un van confortable pour voyager, un fourgon fonctionnel pour travailler, ou un espace polyvalent pensé pour durer, L'Atelier du Volcan met son expérience et sa créativité au service de votre projet.
            </p>
            <p className="font-semibold">
              👉 Étude gratuite et devis sur demande. Contactez L'Atelier du Volcan et transformez votre véhicule selon vos besoins.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default AmenagementVehicules;
