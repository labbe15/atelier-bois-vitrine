import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Bibliotheques = () => {
  return (
    <ServiceLayout
      title="Bibliothèques"
      subtitle="Alliez design, praticité et savoir-faire artisanal"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous concevons et fabriquons des bibliothèques sur mesure qui allient élégance, fonctionnalité et durabilité. Nos artisans menuisiers mettent leur savoir-faire au service de vos envies pour créer un mobilier design et unique, parfaitement adapté à votre intérieur et à vos besoins de rangement."
      image={menuiserieImage}
      features={[
        "Fabrication sur mesure 100 % artisanale",
        "Large choix de matériaux, coloris et finitions",
        "Design unique et durable",
        "Fabrication locale à Sansac-de-Marmiesse (Cantal)",
        "Livraison et installation dans tout le Cantal : Aurillac, Ytrac, Maurs, Vic-sur-Cère, Murat…",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des bibliothèques personnalisées selon vos goûts</h2>
            <p className="mb-4">
              Que vous souhaitiez une bibliothèque moderne, classique, murale ou intégrée, nous fabriquons votre meuble sur mesure, dans le style, la couleur et les finitions qui vous ressemblent.
            </p>
            <p className="mb-4">Nos bibliothèques peuvent être réalisées en :</p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Bois massif :</strong> pour un rendu noble, chaleureux et intemporel.</li>
              <li><strong>Placage bois :</strong> pour une esthétique haut de gamme et un excellent rapport légèreté/solidité.</li>
              <li><strong>Panneaux de particules :</strong> pour une solution économique et personnalisable, disponible dans toutes les couleurs, finitions et imitations de matières (bois, pierre, béton, métal, cuir, etc.).</li>
            </ul>
            <p>
              Grâce à la variété de nos matériaux et finitions, chaque bibliothèque devient une pièce unique, à la fois design et pratique, pensée pour s'intégrer harmonieusement à votre intérieur.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une fabrication artisanale dans le Cantal</h2>
            <p className="mb-4">
              Toutes nos bibliothèques sont conçues et fabriquées dans notre atelier à Sansac-de-Marmiesse, au cœur du Cantal.
            </p>
            <p className="mb-4">
              Nous attachons une grande importance à la qualité des matériaux, à la précision des assemblages et à la finesse des finitions.
            </p>
            <p className="mb-4">
              Nos créations peuvent être intégrées sur mesure dans un salon, un bureau, une chambre ou un espace professionnel.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Étude et conception sur mesure</li>
              <li>✔️ Fabrication locale dans le Cantal</li>
              <li>✔️ Finitions personnalisées (vernis, mat, satiné, imitation bois ou matière)</li>
              <li>✔️ Pose et ajustements réalisés par nos menuisiers</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une bibliothèque qui s'adapte à votre style et votre espace</h2>
            <p className="mb-4">
              Avec L'Atelier du Volcan, votre bibliothèque devient bien plus qu'un meuble : c'est un élément central de votre décoration intérieure, à la fois esthétique et fonctionnel.
            </p>
            <p>
              Qu'il s'agisse d'un modèle design en bois massif, d'une composition contemporaine en placage, ou d'une bibliothèque colorée et moderne en panneaux décoratifs, nous réalisons vos envies avec précision et passion.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="font-semibold mb-4">
              📞 Contactez L'Atelier du Volcan dès aujourd'hui pour une étude personnalisée et un devis gratuit.
            </p>
            <p className="text-sm text-muted-foreground">
              Donnez vie à votre projet de bibliothèque sur mesure dans le Cantal, fabriquée avec soin et élégance par votre artisan menuisier local.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Bibliotheques;
