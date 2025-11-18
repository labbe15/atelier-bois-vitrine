import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Dressing = () => {
  return (
    <ServiceLayout
      title="Dressing"
      subtitle="Le dressing sur mesure qui s'adapte à votre style et à votre espace"
      description="Vous rêvez d'un dressing fonctionnel, élégant et parfaitement organisé ? L'Atelier du Volcan, votre spécialiste en menuiserie et agencement intérieur à Sansac-de-Marmiesse (Cantal), conçoit et installe des dressings sur mesure alliant esthétique, praticité et qualité artisanale. Parce que chaque intérieur est unique, nous imaginons un espace de rangement personnalisé, optimisé selon vos besoins et vos envies."
      image={agencementImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Fabrication artisanale de dressings sur mesure",
        "Matériaux durables et esthétiques",
        "Optimisation des espaces et design personnalisé",
        "Accompagnement complet, de la conception à la pose",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un dressing pensé pour chaque espace</h2>
            <p className="mb-4">
              Que vous disposiez d'une pièce dédiée, d'un espace sous pente, d'un angle inutilisé ou d'une simple niche murale, nous créons le dressing qui s'adapte parfaitement à la configuration de votre intérieur.
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Dressing chambre :</strong> avec ou sans portes, ouvert ou fermé, pour un rangement harmonieux de vos vêtements et accessoires.</li>
              <li><strong>Dressing sous pente :</strong> exploitation intelligente des volumes et espaces perdus.</li>
              <li><strong>Dressing d'angle :</strong> gain de place et optimisation maximale.</li>
              <li><strong>Dressing sur mesure :</strong> toutes configurations possibles, selon votre espace et vos besoins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un agencement fonctionnel et personnalisé</h2>
            <p className="mb-4">
              Nous imaginons ensemble un aménagement intérieur sur mesure, avec des solutions de rangement adaptées à vos habitudes et à votre garde-robe :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Penderies et tringles réglables en hauteur</li>
              <li>✔️ Étagères modulables et tiroirs compartimentés</li>
              <li>✔️ Rangements pour chaussures, accessoires et bijoux</li>
              <li>✔️ Miroirs, éclairage LED intégré</li>
              <li>✔️ Portes battantes, coulissantes ou ouvertes</li>
            </ul>
            <p className="mt-4">
              Chaque élément est conçu pour simplifier votre quotidien et sublimer votre intérieur.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Matériaux nobles et finitions de qualité</h2>
            <p className="mb-4">
              Nous travaillons principalement le bois massif, le placage bois et les panneaux dérivés du bois, pour un rendu à la fois élégant, durable et personnalisable.
            </p>
            <p className="mb-4">Vous pouvez choisir :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Le type de matériau (bois massif, placage, mélaminé, laqué…)</li>
              <li>Les couleurs et finitions (naturel, teinté, laqué, mat, brillant…)</li>
              <li>Les poignées, quincaillerie et accessoires design</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Fabrication et pose artisanale dans le Cantal</h2>
            <p className="mb-4">
              Chaque dressing est fabriqué à la main dans notre atelier à Sansac-de-Marmiesse, puis installé avec soin par nos menuisiers qualifiés. Nous intervenons dans tout le Cantal pour transformer vos intérieurs avec élégance et savoir-faire.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Optimisez vos espaces avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez-vous un dressing unique, pensé pour vous, qui allie esthétique, fonctionnalité et qualité artisanale.
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

export default Dressing;
