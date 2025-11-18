import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Cuisines = () => {
  return (
    <ServiceLayout
      title="Cuisines"
      subtitle="Créez une cuisine à votre image, fonctionnelle et élégante"
      description="Vous rêvez d'une cuisine sur mesure qui allie esthétique, confort et qualité artisanale ? L'Atelier du Volcan, entreprise de menuiserie et d'agencement intérieur à Sansac-de-Marmiesse (Cantal), conçoit et installe des cuisines uniques, fabriquées à partir de matériaux durables et nobles. Chaque projet est pensé pour s'adapter parfaitement à votre espace, à votre style et à votre mode de vie."
      image={agencementImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Création artisanale de cuisines sur mesure",
        "Matériaux nobles et durables",
        "Design personnalisé et finitions haut de gamme",
        "Accompagnement complet de la conception à la pose",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une cuisine pensée pour votre quotidien</h2>
            <p className="mb-4">
              Votre cuisine est bien plus qu'une simple pièce : c'est le cœur de votre maison, un lieu de partage, de créativité et de convivialité.
            </p>
            <p className="mb-4">
              Nous concevons des cuisines sur mesure qui allient esthétique, fonctionnalité et qualité artisanale, en fonction de vos envies, de vos contraintes d'espace et de votre budget.
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Cuisine en bois massif : chaleureuse, noble et intemporelle</li>
              <li>Cuisine en placage bois : élégance naturelle avec une grande variété d'essences</li>
              <li>Cuisine en panneaux dérivés du bois : large choix de couleurs, finitions et imitations de matières (laqué, mat, satiné, effet béton, pierre, etc.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des agencements sur mesure et optimisés</h2>
            <p className="mb-4">
              Chaque cuisine est unique et pensée pour simplifier votre quotidien :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Meubles et rangements optimisés selon votre espace</li>
              <li>✔️ Plans de travail en bois, stratifié, quartz ou granit</li>
              <li>✔️ Îlots centraux, bars et coins repas intégrés</li>
              <li>✔️ Électroménager encastrable ou apparent</li>
              <li>✔️ Éclairage LED intégré, crédences sur mesure</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Matériaux nobles et finitions haut de gamme</h2>
            <p className="mb-4">
              Nous travaillons avec des matériaux durables et esthétiques pour créer une cuisine à la fois belle et résistante :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Bois massif (chêne, hêtre, frêne…)</li>
              <li>Placage bois pour un rendu raffiné</li>
              <li>Panneaux mélaminés, stratifiés ou laqués (finition mate, satinée, brillante)</li>
              <li>Large choix de couleurs, textures et finitions</li>
            </ul>
            <p className="mt-4">
              Chaque matériau est sélectionné pour sa qualité, sa durabilité et son esthétisme.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Fabrication artisanale et pose soignée</h2>
            <p className="mb-4">
              Toutes nos cuisines sont conçues et fabriquées à la main dans notre atelier à Sansac-de-Marmiesse, puis installées avec soin par nos menuisiers qualifiés.
            </p>
            <p>
              Nous intervenons dans tout le Cantal pour transformer vos intérieurs avec élégance et savoir-faire : Aurillac, Arpajon-sur-Cère, Ytrac, Maurs, Vic-sur-Cère, Murat et alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Créez la cuisine de vos rêves avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez-vous une cuisine unique, pensée pour vous, qui allie esthétique, fonctionnalité et qualité artisanale.
            </p>
            <p className="font-semibold">
              📞 Contactez L'Atelier du Volcan dès aujourd'hui pour une étude personnalisée et un devis gratuit.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Cuisines;
