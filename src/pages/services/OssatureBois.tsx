import ServiceLayout from "@/components/ServiceLayout";
import maisonOssatureImg from "@/assets/Maison ossature bois.jpeg";
import { Card, CardContent } from "@/components/ui/card";

const OssatureBois = () => {
  return (
    <ServiceLayout
      title="Maisons à ossature bois"
      subtitle="Alliez performance, rapidité et esthétisme avec une maison bois signée L'Atelier du Volcan"
      description="Basé à Sansac-de-Marmiesse, L'Atelier du Volcan conçoit et réalise des maisons à ossature bois modernes et performantes, parfaitement adaptées au climat du Cantal. Bien loin du simple chalet de montagne, la maison à ossature bois est aujourd'hui une habitation contemporaine, au design soigné et aux performances thermiques inégalées. Grâce à notre savoir-faire en menuiserie et charpente, nous assurons jusqu'à 80 % des travaux de construction, garantissant ainsi une coordination fluide, des délais maîtrisés et aucune mauvaise surprise."
      image={charpenteImage}
      features={[
        "Fabrication et pose locales à Sansac-de-Marmiesse (Cantal)",
        "Maisons performantes, modernes et durables",
        "Isolation thermique haut de gamme = économies d'énergie",
        "Construction rapide et maîtrisée",
        "Un seul interlocuteur pour 80 % du chantier",
        "Accompagnement de confiance pour les corps de métier restants",
        "Conception design & Permis de construire",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une construction bois sur mesure, rapide et écologique</h2>
            <p className="mb-4">
              La maison à ossature bois offre de nombreux avantages :
            </p>
            <ul className="space-y-2 mb-4">
              <li>Une rapidité de mise en œuvre exceptionnelle grâce à une préfabrication précise et un chantier propre.</li>
              <li>Une isolation thermique inégalée, synonyme de confort toute l'année et d'économies d'énergie durables.</li>
              <li>Un matériau écologique, renouvelable et naturellement régulateur d'humidité.</li>
              <li>Une structure légère et solide, adaptable à tout type de terrain, même en pente.</li>
            </ul>
            <p>
              Nos charpentiers expérimentés conçoivent une structure robuste et parfaitement étanche, pour une maison saine, durable et personnalisée.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des finitions extérieures esthétiques et résistantes</h2>
            <p className="mb-4">
              L'Atelier du Volcan vous propose un large choix de bardages pour habiller votre maison et lui donner le style que vous souhaitez :
            </p>
            <ul className="space-y-2 mb-4">
              <li><strong>Panneaux ou lames composites :</strong> modernes, durables et sans entretien.</li>
              <li><strong>Bois naturel ou teinté :</strong> chaleureux, authentique et intemporel.</li>
              <li><strong>Fibro-ciment :</strong> résistant et personnalisable.</li>
              <li><strong>Aluminium ou PVC :</strong> design contemporain et grande longévité.</li>
              <li><strong>Acier imitation zinc :</strong> finition élégante et haut de gamme.</li>
            </ul>
            <p>
              Chaque bardage est choisi pour sa résistance au climat cantalien et sa valeur esthétique durable.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un intérieur personnalisable selon vos envies</h2>
            <p className="mb-4">
              À l'intérieur, tout est entièrement personnalisable :
            </p>
            <ul className="space-y-2 mb-4">
              <li><strong>Cloisons et doublages en panneaux de bois,</strong> disponibles dans toutes les teintes et imitations de matière (chêne, pierre, béton, métal, etc.)</li>
              <li><strong>Ou doublages en placo</strong> pour une finition classique et économique.</li>
            </ul>
            <p>
              Vous choisissez le style, nous assurons la mise en œuvre artisanale et soignée.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des couvertures adaptées à tous les projets</h2>
            <p className="mb-4">
              En toiture, nous proposons plusieurs finitions selon vos envies architecturales :
            </p>
            <ul className="space-y-2 mb-4">
              <li><strong>Bac acier</strong> pour un look industriel et contemporain</li>
              <li><strong>Tuiles</strong> pour une esthétique traditionnelle</li>
              <li><strong>Toiture plate en EPDM,</strong> idéale pour les maisons modernes ou les extensions.</li>
            </ul>
            <p>
              Chaque solution garantit une étanchéité parfaite et une durabilité maximale.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une gestion complète du projet pour votre tranquillité</h2>
            <p className="mb-4">
              L'Atelier du Volcan prend en charge 80 % des travaux de votre maison à ossature bois : charpente, menuiseries, bardage, isolation, toiture, sols, cloisons, aménagement intérieur…
            </p>
            <p className="mb-4">
              Cette maîtrise globale permet de réduire les délais, éviter les problèmes de coordination entre artisans et prévenir les malfaçons.
            </p>
            <p className="mb-4">
              Pour les 20 % restants (maçonnerie, plomberie, électricité, carrelage), nous vous orientons vers des entreprises partenaires locales avec lesquelles nous travaillons régulièrement et en toute confiance.
            </p>
            <p>
              Vous bénéficiez ainsi d'un projet maîtrisé de A à Z, sans stress ni imprévu.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Accompagnement administratif simplifié</h2>
            <p>
              Pour les maisons de moins de 150 m², L'Atelier du Volcan peut également préparer votre dossier de permis de construire, afin de vous simplifier la vie et d'accélérer la concrétisation de votre projet.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Construisez votre maison bois avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez-vous une maison contemporaine, confortable et respectueuse de l'environnement, entièrement réalisée par des artisans locaux passionnés.
            </p>
            <p className="mb-4">
              Avec L'Atelier du Volcan, votre maison à ossature bois dans le Cantal devient un projet simple, rapide et durable — conçu pour aujourd'hui et pensé pour demain.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude gratuite et personnalisée.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              L'Atelier du Volcan, constructeur et artisan de confiance à Sansac-de-Marmiesse, au cœur du Cantal.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default OssatureBois;
