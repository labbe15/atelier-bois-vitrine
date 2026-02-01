import ServiceLayout from "@/components/ServiceLayout";
import studioJardinImg from "@/assets/Studio de jardin.jpg";
import { Card, CardContent } from "@/components/ui/card";

const AbriJardin = () => {
  return (
    <ServiceLayout
      title="Studio de jardin"
      subtitle="Studios de jardin en ossature bois sur mesure – Accessibles, esthétiques et durables"
      description="Chez L'Atelier du Volcan, menuisier-charpentier à Sansac-de-Marmiesse dans le Cantal (15), nous concevons et posons des studios de jardin en ossature bois sur mesure, adaptés à tous les besoins : bureau, logement d'appoint, atelier d'artiste, chambre d'amis ou studio pour personne à mobilité réduite (PMR). Chaque projet est entièrement personnalisable, fabriqué à partir de matériaux de qualité, dans le respect des normes environnementales et de construction."
      image={studioJardinImg}
      features={[
        "Basés à Sansac-de-Marmiesse, nous intervenons dans tout le Cantal et les départements voisins",
        "Expertise en menuiserie, construction bois et création de studios de jardin sur mesure",
        "Studios personnalisables : bardages, intérieurs, couvertures au choix",
        "Accessibilité PMR : portes élargies, accès de plain-pied, aménagements ergonomiques",
        "Accompagnement administratif complet (permis de construire, déclaration préalable)",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un studio de jardin adapté à tous vos besoins</h2>
            <p className="mb-4">
              Nous concevons des studios de jardin sur mesure pour tous les usages :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Bureau de jardin ou espace de télétravail</li>
              <li>Studio indépendant pour ados ou chambre d'amis</li>
              <li>Atelier d'artiste, salle de musique, salle de sport</li>
              <li>Logement d'appoint ou studio locatif</li>
              <li>Studio PMR accessible et confortable</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Construction rapide en ossature bois</h2>
            <ul className="space-y-2 list-none">
              <li>✔️ Montage rapide et propre</li>
              <li>✔️ Isolation thermique et phonique performante</li>
              <li>✔️ Matériaux écologiques et durables</li>
              <li>✔️ Personnalisation totale</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Personnalisation complète</h2>
            <p className="mb-4">Choisissez :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Dimensions et surface selon votre terrain</li>
              <li>Bardage extérieur : bois, composite, PVC, aluminium</li>
              <li>Toiture : tuiles, acier, EPDM</li>
              <li>Menuiseries : fenêtres, portes, baies vitrées</li>
              <li>Aménagement intérieur : isolation, électricité, plomberie</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Accessibilité PMR</h2>
            <p>
              Nous concevons des studios accessibles aux personnes à mobilité réduite avec accès de plain-pied, portes élargies et aménagements ergonomiques.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Accompagnement administratif</h2>
            <p>
              📄 Nous vous aidons dans vos démarches : déclaration préalable de travaux ou permis de construire selon la surface.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Créez votre studio de jardin avec L'Atelier du Volcan</h2>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude gratuite et personnalisée.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default AbriJardin;
