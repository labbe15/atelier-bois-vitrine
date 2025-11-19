import ServiceLayout from "@/components/ServiceLayout";
import charpenteImage from "@/assets/charpente.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Carport = () => {
  return (
    <ServiceLayout
      title="Carports"
      subtitle="Protégez vos véhicules avec élégance et durabilité"
      description="Chez L'Atelier du Volcan, entreprise de charpente artisanale à Sansac-de-Marmiesse, nous concevons et réalisons des carports sur mesure en bois massif, bois lamellé-collé ou aluminium, adaptés à vos besoins et à votre habitat. Alliant solidité, esthétisme et fonctionnalité, nos carports protègent efficacement vos véhicules, camping-cars ou remorques, tout en valorisant votre propriété."
      image={charpenteImage}
      features={[
        "Fabrication sur mesure adaptée à votre terrain et à vos besoins",
        "Matériaux durables (bois massif, lamellé-collé, aluminium)",
        "Pose soignée par des charpentiers expérimentés",
        "Accompagnement administratif complet",
        "Fabrication locale à Sansac-de-Marmiesse (Cantal)",
        "Intervention dans tout le Cantal : Aurillac, Mandailles, Maurs, Murat, Polminhac…",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des carports sur mesure, pour tous les besoins</h2>
            <p className="mb-4">
              Chaque carport est entièrement personnalisé, selon vos envies et la configuration de votre terrain :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li>Carport simple ou double</li>
              <li>Carport adossé à la maison ou indépendant</li>
              <li>Petits abris pour motos ou remorques</li>
              <li>Grandes structures pour camping-cars ou véhicules professionnels</li>
            </ul>
            <p>
              Nos charpentiers conçoivent des ouvrages robustes, esthétiques et durables.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des matériaux nobles et performants</h2>
            <p className="mb-4">
              Nous proposons une large gamme de structures et de couvertures, pour un résultat à la fois élégant et pérenne :
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Structure au choix :</h3>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Bois massif :</strong> chaleureux, traditionnel et naturel</li>
              <li><strong>Bois lamellé-collé :</strong> stable, résistant et idéal pour les grandes portées</li>
              <li><strong>Aluminium :</strong> moderne, léger et sans entretien</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Couverture au choix :</h3>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Acier :</strong> résistant et économique</li>
              <li><strong>Tuile :</strong> harmonieuse avec votre toiture existante</li>
              <li><strong>EPDM :</strong> membrane étanche, parfaite pour les toits plats contemporains</li>
            </ul>
            <p className="mt-4">
              Chaque carport est conçu pour s'intégrer parfaitement à votre environnement, avec des finitions soignées et un design en harmonie avec votre maison.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un accompagnement complet, de la conception au dossier administratif</h2>
            <p className="mb-4">
              Au-delà de la fabrication et de la pose, L'Atelier du Volcan vous accompagne également dans la préparation du dossier administratif :
            </p>
            <p>
              📄 Déclaration préalable de travaux ou permis de construire, selon la surface de votre carport.
            </p>
            <p className="mt-4">
              Nous vous guidons pas à pas pour que votre projet se déroule en toute sérénité, dans le respect des règles d'urbanisme locales.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Votre carport sur mesure avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Alliez esthétique, praticité et protection durable grâce à un carport conçu sur mesure par L'Atelier du Volcan.
            </p>
            <p className="mb-4">
              Nos charpentiers créent des abris élégants et résistants, parfaitement intégrés à votre environnement et à votre budget.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude gratuite et personnalisée.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              L'Atelier du Volcan, votre spécialiste des carports en bois et aluminium dans le Cantal, au service de vos projets sur mesure.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Carport;
