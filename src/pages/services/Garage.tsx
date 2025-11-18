import ServiceLayout from "@/components/ServiceLayout";
import extensionImage from "@/assets/extension.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Garage = () => {
  return (
    <ServiceLayout
      title="Garage"
      subtitle="Agrandissez votre maison avec un garage en ossature bois, rapide et sur mesure"
      description="Besoin d'un garage fonctionnel, esthétique et durable ? L'Atelier du Volcan, votre expert en menuiserie et charpente à Sansac-de-Marmiesse (Cantal), conçoit et installe des extensions de maison à usage de garage en ossature bois adaptées à vos besoins et à l'architecture de votre habitation. Grâce à la légèreté et la modularité du bois, votre extension se monte rapidement, sans gros travaux, tout en garantissant solidité et performance énergétique."
      image={extensionImage}
      features={[
        "Entreprise locale basée à Sansac-de-Marmiesse dans le Cantal (15)",
        "Expertise artisanale en charpente et ossature bois",
        "Montage rapide et propre grâce à la préfabrication bois",
        "Matériaux esthétiques, durables et performants",
        "Finitions personnalisées (bardage, toiture, menuiseries)",
        "Accompagnement administratif",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un garage en ossature bois adapté à vos besoins</h2>
            <p className="mb-4">
              Nous concevons des garages sur mesure, selon vos besoins et la configuration de votre terrain :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Garage pour 1, 2 ou 3 voitures</li>
              <li>Garage atelier ou multifonction (rangement, bricolage, sport...)</li>
              <li>Garage avec étage aménageable (bureau, chambre d'amis, studio...)</li>
              <li>Garage accolé à la maison ou indépendant</li>
            </ul>
            <p className="mt-4">
              Chaque projet est pensé pour s'harmoniser avec l'architecture de votre habitation.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Pourquoi choisir l'ossature bois ?</h2>
            <ul className="space-y-2 list-none">
              <li>✔️ Chantier rapide et propre (montage en quelques jours)</li>
              <li>✔️ Pas de lourds travaux de maçonnerie</li>
              <li>✔️ Matériau durable, écologique et esthétique</li>
              <li>✔️ Isolation thermique performante si besoin</li>
              <li>✔️ Personnalisation totale (bardage, toiture, menuiseries)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Finitions et matériaux personnalisés</h2>
            <p className="mb-4">Vous pouvez choisir :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Bardage extérieur : bois, composite, PVC, aluminium</li>
              <li>Toiture : tuiles, acier, EPDM</li>
              <li>Porte de garage : sectionnelle, basculante, motorisée</li>
              <li>Menuiseries : fenêtres, portes, portillon</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Accompagnement administratif</h2>
            <p>
              📄 Nous vous aidons dans vos démarches : déclaration préalable de travaux ou permis de construire selon la surface de votre garage.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Créez votre garage avec L'Atelier du Volcan</h2>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude gratuite et personnalisée.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Garage;
