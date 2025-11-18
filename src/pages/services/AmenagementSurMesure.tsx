import ServiceLayout from "@/components/ServiceLayout";
import agencementImage from "@/assets/agencement.jpg";
import { Card, CardContent } from "@/components/ui/card";

const AmenagementSurMesure = () => {
  return (
    <ServiceLayout
      title="Aménagement sur mesure"
      subtitle="Sublimez vos espaces avec des agencements intérieurs en bois uniques"
      description="Envie d'un intérieur chaleureux, fonctionnel et à votre image ? L'Atelier du Volcan, spécialiste de la menuiserie sur mesure à Sansac-de-Marmiesse (Cantal), conçoit et réalise vos agencements intérieurs en bois et en panneaux dérivés du bois. Du salon à la cuisine, en passant par la chambre, le bureau ou les espaces professionnels, notre équipe met tout son savoir-faire au service de l'aménagement de vos espaces de vie avec élégance, précision et durabilité."
      image={agencementImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Expertise artisanale en menuiserie bois et dérivés",
        "Agencements intérieurs sur mesure pour particuliers et professionnels",
        "Large choix de matériaux et de finitions",
        "Qualité, précision et accompagnement personnalisé",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des aménagements adaptés à chaque pièce de la maison</h2>
            <p className="mb-4">
              Nous intervenons dans tous vos espaces pour créer un agencement intérieur sur mesure, fonctionnel et esthétique :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Salon :</strong> bibliothèques murales, meubles TV, rangements intégrés, habillage de cheminée</li>
              <li><strong>Chambre :</strong> dressings, têtes de lit avec rangements, bureaux intégrés</li>
              <li><strong>Bureau :</strong> meubles et étagères sur mesure pour un espace de travail organisé</li>
              <li><strong>Entrée :</strong> meubles à chaussures, patères, bancs avec rangements</li>
              <li><strong>Salle de bains :</strong> meubles vasques, rangements muraux, tablettes</li>
              <li><strong>Espaces professionnels :</strong> agencement de boutiques, bureaux, cabinets médicaux, etc.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des matériaux nobles et personnalisables</h2>
            <p className="mb-4">
              Nous travaillons avec une large gamme de matériaux pour répondre à tous les styles et tous les budgets :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Bois massif (chêne, hêtre, frêne, noyer…) pour un rendu noble et chaleureux</li>
              <li>Placage bois pour une esthétique raffinée et légère</li>
              <li>Panneaux dérivés du bois (mélaminé, stratifié, laqué) avec un large choix de couleurs, finitions et imitations de matières (bois, béton, pierre, métal, etc.)</li>
            </ul>
            <p className="mt-4">
              Chaque projet est unique et pensé pour s'intégrer harmonieusement à votre décoration intérieure.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Optimisation de l'espace et fonctionnalité</h2>
            <p className="mb-4">
              Nos aménagements sur mesure sont conçus pour optimiser chaque mètre carré et simplifier votre quotidien :
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Adaptation parfaite aux contraintes de votre espace</li>
              <li>✔️ Exploitation des volumes, niches, angles et espaces perdus</li>
              <li>✔️ Rangements intelligents et modulables</li>
              <li>✔️ Finitions soignées et esthétiques</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Fabrication artisanale et pose soignée</h2>
            <p className="mb-4">
              Chaque agencement est fabriqué à la main dans notre atelier à Sansac-de-Marmiesse, puis installé avec soin par nos menuisiers qualifiés.
            </p>
            <p>
              Nous intervenons dans tout le Cantal pour transformer vos intérieurs avec élégance et savoir-faire : Aurillac, Arpajon-sur-Cère, Ytrac, Maurs, Vic-sur-Cère, Murat et alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Créez des intérieurs uniques avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez-vous un aménagement sur mesure, pensé pour vous, qui allie esthétique, fonctionnalité et qualité artisanale.
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

export default AmenagementSurMesure;
