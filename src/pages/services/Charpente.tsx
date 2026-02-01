import ServiceLayout from "@/components/ServiceLayout";
import charpenteImg from "@/assets/charpente.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Charpente = () => {
  return (
    <ServiceLayout
      title="Charpentes"
      subtitle="L'expertise et la solidité au service de votre toiture"
      description="Situé à Sansac-de-Marmiesse, L'Atelier du Volcan met son savoir-faire artisanal au service de tous vos projets de charpente en bois, qu'il s'agisse de construction neuve, de rénovation ou de transformation de combles. Nos charpentiers qualifiés conçoivent, fabriquent et posent des structures robustes, durables et esthétiques, adaptées aux particularités du climat du Cantal."
      image={charpenteImg}
      features={[
        "Fabrication artisanale sur mesure dans nos ateliers du Cantal",
        "Pose soignée de charpentes traditionnelles ou fermettes avec volige",
        "Rénovation et renforcement de charpentes anciennes",
        "Transformation de combles ou création de toit-terrasse",
        "Conseils personnalisés et accompagnement administratif si nécessaire",
        "Savoir-faire local et expertise reconnue",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Fabrication et pose de charpentes en bois traditionnelles</h2>
            <p className="mb-4">
              Véritable signature de notre atelier, la charpente traditionnelle en bois massif combine authenticité, résistance et élégance architecturale.
            </p>
            <p className="mb-4">
              Fabriquée sur mesure dans nos ateliers, chaque charpente est pensée pour assurer stabilité, longévité et esthétisme, tout en respectant les exigences techniques de votre construction.
            </p>
            <p>
              Nous travaillons avec différentes essences de bois locales et nobles, soigneusement sélectionnées pour leur résistance mécanique et leur durabilité.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Pose de charpentes industrielles (fermettes)</h2>
            <p className="mb-4">
              L'Atelier du Volcan assure également la pose de charpentes dites "fermettes", une solution moderne et économique adaptée à tous types de bâtiments (maisons, extensions, garages…).
            </p>
            <p className="mb-4">
              Légères, performantes et rapides à installer, elles garantissent une excellente stabilité et un rapport qualité-prix avantageux.
            </p>
            <p>
              Nous pouvons y ajouter une volige complète, assurant une meilleure stabilité de l'ensemble avant la couverture.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Rénovation, renforcement et reconfiguration de charpentes</h2>
            <p className="mb-4">
              Votre charpente présente des signes de fatigue ou vous souhaitez optimiser vos combles ? Nos équipes interviennent pour la rénovation, le renforcement ou la transformation de charpentes existantes.
            </p>
            <p className="mb-4">Nous assurons :</p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li>Le remplacement ou le renforcement des éléments structurels</li>
              <li>La reconfiguration complète pour rendre des combles non aménageables habitables</li>
              <li>La création de terrasses de toit grâce à nos solutions d'étanchéité en EPDM</li>
              <li>Une adaptation sur mesure à chaque structure, tout en respectant le bâti existant</li>
            </ul>
            <p>
              Grâce à notre maîtrise du bois et des structures porteuses, nous redonnons solidité, fiabilité et fonctionnalité à vos charpentes, même anciennes.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Charpentes de granges : rénovation et restauration du patrimoine rural</h2>
            <p className="mb-4">
              Forts de notre expérience en charpente traditionnelle, nous réalisons également la construction, la rénovation ou la consolidation de charpentes de granges et bâtiments agricoles dans tout le Cantal.
            </p>
            <p className="mb-4">
              Nos artisans redonnent vie à ces structures anciennes en préservant leur caractère d'origine tout en les renforçant pour une meilleure solidité et durabilité.
            </p>
            <p>
              Que vous souhaitiez restaurer une grange en pierre, la transformer en habitation ou simplement sécuriser sa charpente, L'Atelier du Volcan vous accompagne avec des solutions sur mesure, respectueuses du patrimoine local.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des charpentiers passionnés et expérimentés dans le Cantal</h2>
            <p className="mb-4">
              Depuis Sansac-de-Marmiesse, L'Atelier du Volcan intervient sur l'ensemble du Cantal : Aurillac, Naucelles, Maurs, Jussac, Boisset, et leurs alentours.
            </p>
            <p>
              Nos charpentiers conjuguent tradition et innovation pour concevoir des charpentes durables, esthétiques et performantes, dans le respect des normes et des délais.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">L'Atelier du Volcan – La charpente qui allie tradition, innovation et solidité</h2>
            <p className="mb-4">
              Que vous construisiez, rénoviez ou transformiez votre maison, faites confiance à L'Atelier du Volcan, votre artisan charpentier à Sansac-de-Marmiesse.
            </p>
            <p className="mb-4">
              Nous vous accompagnons de la conception à la pose pour une charpente bois sur mesure, fiable, esthétique et durable.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude technique et un devis gratuit.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              L'Atelier du Volcan, spécialiste de la charpente traditionnelle, fermette et rénovation dans le Cantal.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Charpente;
