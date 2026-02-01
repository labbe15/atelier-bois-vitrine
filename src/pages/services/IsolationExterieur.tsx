import ServiceLayout from "@/components/ServiceLayout";
import isolationImg from "@/assets/Isolation par l_extérieur.jpg";
import { Card, CardContent } from "@/components/ui/card";

const IsolationExterieur = () => {
  return (
    <ServiceLayout
      title="Isolation par l'extérieur"
      subtitle="Alliez performance thermique, esthétisme et durabilité"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous proposons l'isolation thermique par l'extérieur (ITE) et la pose de bardages sur mesure. Nos solutions associent efficacité énergétique, protection durable et design architectural, pour donner une nouvelle vie à votre façade tout en améliorant le confort thermique de votre habitat. Faire isoler votre maison par l'extérieur, c'est réduire vos dépenses énergétiques tout en valorisant votre bien avec une façade moderne, élégante et durable."
      image={isolationImg}
      features={[
        "Améliore les performances thermiques de votre maison",
        "Supprime les ponts thermiques et réduit les déperditions de chaleur",
        "Valorise l'esthétique de la façade grâce à un bardage moderne et personnalisable",
        "Préserve la surface habitable intérieure",
        "Augmente la valeur patrimoniale de votre bien",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une isolation performante et esthétique</h2>
            <p className="mb-4">
              Nos équipes de menuisiers et charpentiers qualifiés assurent une pose professionnelle adaptée à chaque type de bâtiment (maison individuelle, extension, construction neuve ou rénovation).
            </p>
            <p>
              Nous vous proposons des bardages de qualité qui protègent et embellissent votre habitation tout en renforçant son isolation.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un large choix de bardages pour s'adapter à tous les styles</h2>
            <p className="mb-4">
              L'Atelier du Volcan vous propose plusieurs matériaux et finitions pour répondre à toutes vos envies esthétiques et techniques :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Bardage en lames ou panneaux composites :</strong> modernes, résistants et sans entretien.</li>
              <li><strong>Bardage en bois naturel ou teinté :</strong> chaleureux et authentique, idéal pour les maisons de caractère ou contemporaines.</li>
              <li><strong>Bardage en fibro-ciment :</strong> robuste, imputrescible et disponible en de nombreux coloris.</li>
              <li><strong>Bardage en aluminium :</strong> léger, design et durable, parfait pour une architecture moderne.</li>
              <li><strong>Bardage en PVC :</strong> économique, facile d'entretien et décliné en plusieurs teintes.</li>
              <li><strong>Bardage en acier imitation zinc :</strong> esthétique haut de gamme avec un aspect métal élégant et intemporel.</li>
            </ul>
            <p>
              Chaque finition est sélectionnée pour résister aux intempéries du Cantal et garantir une isolation thermique durable et performante.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Les avantages de l'isolation par l'extérieur</h2>
            <ul className="space-y-2 list-none">
              <li>✔️ Améliore les performances thermiques de votre maison</li>
              <li>✔️ Supprime les ponts thermiques et réduit les déperditions de chaleur</li>
              <li>✔️ Valorise l'esthétique de la façade grâce à un bardage moderne et personnalisable</li>
              <li>✔️ Préserve la surface habitable intérieure</li>
              <li>✔️ Augmente la valeur patrimoniale de votre bien</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un savoir-faire local au service de votre confort</h2>
            <p className="mb-4">
              Basé à Sansac-de-Marmiesse, L'Atelier du Volcan met tout son savoir-faire artisanal au service de vos projets dans tout le Cantal : Aurillac, Mandailles, Maurs, Le Lioran, Murat et alentours.
            </p>
            <p>
              Nos équipes assurent un accompagnement complet, du diagnostic thermique à la pose du bardage, en passant par le choix des matériaux et des finitions les plus adaptés à votre projet.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Donnez une nouvelle vie à votre maison avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Transformez votre façade, améliorez votre confort et réduisez vos consommations d'énergie grâce à une isolation par l'extérieur sur mesure, signée L'Atelier du Volcan.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude gratuite et personnalisée.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Avec L'Atelier du Volcan, optez pour une isolation performante, un bardage élégant et une pose soignée, réalisés par votre artisan menuisier-charpentier du Cantal.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default IsolationExterieur;
