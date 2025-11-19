import ServiceLayout from "@/components/ServiceLayout";
import fenetresImage from "@/assets/Fenêtres.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Fenetres = () => {
  return (
    <ServiceLayout
      title="Fenêtres"
      subtitle="Des fenêtres performantes et esthétiques pour votre confort au quotidien"
      description="Chez L'Atelier du Volcan, nous mettons notre expertise au service de vos projets de rénovation ou de construction dans tout le Cantal. Spécialistes de la pose de fenêtres sur mesure, nous vous proposons une large gamme de fenêtres en bois, PVC, aluminium ou mixtes pour répondre à toutes vos envies, alliant isolation, luminosité et design."
      image={fenetresImage}
      features={[
        "Fabrication et pose sur mesure, adaptées à votre maison",
        "Conseils personnalisés selon vos besoins et votre budget",
        "Produits certifiés et performants sur le plan énergétique",
        "Intervention dans tout le Cantal : Aurillac, Saint-Mamet, Murat, Maurs, et alentours",
        "Une entreprise locale et artisanale, reconnue pour son sérieux et la qualité de ses finitions",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Fenêtres en bois, PVC, aluminium ou mixtes : le choix de la performance</h2>
            <p className="mb-4">
              Nous vous accompagnons dans le choix de vos fenêtres, en fonction de votre style architectural, de vos exigences énergétiques et de votre budget :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Fenêtres en bois :</strong> charme authentique, excellente isolation thermique et acoustique, entretien naturel.</li>
              <li><strong>Fenêtres en PVC :</strong> économiques, durables, sans entretien, haute performance énergétique.</li>
              <li><strong>Fenêtres en aluminium :</strong> design moderne, fines, robustes, idéales pour grandes surfaces vitrées.</li>
              <li><strong>Fenêtres mixtes bois-aluminium :</strong> allient l'élégance du bois côté intérieur et la résistance de l'alu côté extérieur.</li>
            </ul>
            <p>
              Chaque fenêtre est fabriquée sur mesure pour s'adapter parfaitement aux dimensions de vos ouvertures.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une isolation optimale pour un confort durable</h2>
            <p className="mb-4">
              Nos fenêtres garantissent un confort thermique et acoustique élevé, tout au long de l'année :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Double ou triple vitrage performant</li>
              <li>✔️ Réduction de votre facture énergétique grâce à une excellente isolation</li>
              <li>✔️ Protection contre le bruit extérieur pour un intérieur calme</li>
              <li>✔️ Résistance aux intempéries et aux variations climatiques du Cantal</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose soignée, réalisée par des professionnels</h2>
            <p className="mb-4">
              Nos menuisiers qualifiés assurent une installation précise et durable, dans le respect des normes en vigueur. Chaque détail compte pour garantir :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Une étanchéité parfaite à l'air et à l'eau</li>
              <li>✔️ Une finition soignée et harmonieuse</li>
              <li>✔️ Un fonctionnement optimal de vos fenêtres (ouverture, fermeture, ventilation)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">L'Atelier du Volcan, votre partenaire fenêtres dans le Cantal</h2>
            <p className="mb-4">
              Gagnez en luminosité, en confort et en économies d'énergie grâce à des fenêtres performantes et esthétiques, posées avec soin par notre équipe locale.
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

export default Fenetres;
