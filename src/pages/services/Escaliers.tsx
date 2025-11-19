import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Escaliers = () => {
  return (
    <ServiceLayout
      title="Escaliers"
      subtitle="Le mariage parfait entre sécurité, design et artisanat"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous concevons, fabriquons et posons des escaliers sur mesure en bois massif ainsi que des gardes-corps design en bois, métal ou verre. Nos créations allient esthétique, confort et sécurité, tout en reflétant le style unique de votre intérieur ou de votre extérieur. Chaque escalier ou garde-corps est pensé sur mesure, selon vos envies, votre espace et votre budget, pour devenir une véritable pièce maîtresse de votre habitat."
      image={menuiserieImage}
      features={[
        "Fabrication sur mesure et locale à Sansac-de-Marmiesse",
        "Matériaux de qualité sélectionnés avec soin",
        "Design personnalisé selon votre intérieur",
        "Pose précise et sécurisée par des menuisiers qualifiés",
        "Intervention dans tout le Cantal : Aurillac, Le Rouget, Maurs, Murat, Pers…",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des escaliers en bois massif sur mesure</h2>
            <p className="mb-4">
              L'escalier est bien plus qu'un simple élément fonctionnel : c'est un élément de décoration à part entière.
            </p>
            <p className="mb-4">
              Nos escaliers en bois massif sont réalisés avec des essences nobles soigneusement sélectionnées (chêne, frêne, hêtre, sapin, etc.), pour garantir solidité, longévité et élégance naturelle.
            </p>
            <ul className="space-y-2 list-none mb-4">
              <li>✔️ Escaliers droits ou quart-tournants</li>
              <li>✔️ Finitions personnalisées</li>
              <li>✔️ Conception sur mesure selon vos contraintes d'espace</li>
              <li>✔️ Fabrication 100 % artisanale</li>
            </ul>
            <p>
              Nos artisans menuisiers allient savoir-faire traditionnel et design contemporain pour créer un escalier à la fois robuste et harmonieux.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des gardes-corps design et sécurisés</h2>
            <p className="mb-4">
              Parce que la sécurité ne doit jamais compromettre le style, L'Atelier du Volcan propose une large gamme de gardes-corps sur mesure en bois, métal ou verre.
            </p>
            <p className="mb-4">
              Adaptés à vos escaliers, terrasses, mezzanines ou balcons, ils apportent lignes épurées et élégance à votre intérieur comme à votre extérieur.
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Bois :</strong> chaleureux et intemporel, parfait pour une ambiance naturelle.</li>
              <li><strong>Métal :</strong> moderne, robuste et personnalisable selon vos envies.</li>
              <li><strong>Verre :</strong> lumineux et design, idéal pour agrandir visuellement l'espace.</li>
            </ul>
            <p>
              Nos gardes-corps sont conçus pour respecter les normes de sécurité, tout en sublimant votre architecture.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un savoir-faire artisanal au service de vos projets</h2>
            <p className="mb-4">
              Depuis Sansac-de-Marmiesse, L'Atelier du Volcan met toute son expertise au service de vos projets d'aménagement intérieur.
            </p>
            <p>
              Chaque escalier ou garde-corps est fabriqué sur mesure, avec le souci du détail, de la qualité et de l'harmonie.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="font-semibold mb-4">
              📞 Contactez L'Atelier du Volcan dès aujourd'hui pour une étude personnalisée et un devis gratuit.
            </p>
            <p className="text-sm text-muted-foreground">
              Offrez à votre intérieur un escalier en bois massif élégant et un garde-corps design, conçus avec passion par votre artisan menuisier du Cantal.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Escaliers;
