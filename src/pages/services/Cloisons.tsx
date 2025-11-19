import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Cloisons = () => {
  return (
    <ServiceLayout
      title="Cloisons"
      subtitle="Structurez vos espaces avec élégance et fonctionnalité"
      description="Envie de repenser vos espaces intérieurs sans engager de gros travaux ? L'Atelier du Volcan, entreprise de menuiserie sur mesure à Sansac-de-Marmiesse (Cantal), conçoit et installe des cloisons en panneaux dérivés du bois ou en aluminium, avec la possibilité d'y intégrer du vitrage pour plus de luminosité et de modernité. Alliant esthétique, robustesse et personnalisation, nos cloisons s'adaptent à tous vos projets d'aménagement intérieur, aussi bien dans une maison, un bureau, qu'un local professionnel."
      image={agencementImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Savoir-faire artisanal en menuiserie bois et aluminium",
        "Cloisons sur mesure et personnalisables",
        "Possibilité de vitrage pour plus de luminosité",
        "Finitions haut de gamme et durables",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des cloisons adaptées à tous vos besoins</h2>
            <p className="mb-4">
              Nous concevons et installons des cloisons sur mesure pour redéfinir vos espaces intérieurs avec style et fonctionnalité :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Cloisons séparatives :</strong> pour délimiter des espaces dans un open space, un loft ou une grande pièce</li>
              <li><strong>Cloisons avec vitrage :</strong> pour conserver la luminosité tout en séparant les volumes (idéal pour bureaux, ateliers, salons)</li>
              <li><strong>Cloisons décoratives :</strong> pour structurer un intérieur avec élégance et modernité</li>
              <li><strong>Cloisons techniques :</strong> pour intégrer des rangements, des portes coulissantes ou des passages</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Matériaux nobles et personnalisables</h2>
            <p className="mb-4">
              Nous proposons plusieurs matériaux pour s'adapter à votre style et à votre budget :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Panneaux dérivés du bois :</strong> mélaminé, stratifié, laqué, avec un large choix de couleurs et finitions (mat, satiné, brillant, imitation bois, béton, pierre…)</li>
              <li><strong>Aluminium :</strong> léger, moderne et résistant, idéal pour des cloisons vitrées ou un style industriel/contemporain</li>
              <li><strong>Vitrage :</strong> clair, dépoli, opaque ou décoratif, pour apporter luminosité et esthétisme</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Conception et installation sur mesure</h2>
            <p className="mb-4">
              Chaque cloison est conçue sur mesure pour s'adapter parfaitement à vos espaces et à vos envies :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Étude technique et esthétique de votre projet</li>
              <li>✔️ Fabrication artisanale et pose soignée</li>
              <li>✔️ Finitions haut de gamme</li>
              <li>✔️ Possibilité d'intégrer des portes, vitrages ou rangements</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un artisan local au service de vos projets</h2>
            <p>
              L'Atelier du Volcan intervient dans tout le Cantal pour transformer vos intérieurs avec élégance et savoir-faire : Aurillac, Arpajon-sur-Cère, Ytrac, Maurs, Vic-sur-Cère, Murat et alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Structurez vos espaces avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez-vous des cloisons sur mesure, pensées pour vous, qui allient esthétique, fonctionnalité et qualité artisanale.
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

export default Cloisons;
