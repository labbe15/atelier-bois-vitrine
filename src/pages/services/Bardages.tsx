import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Bardages = () => {
  return (
    <ServiceLayout
      title="Bardages"
      subtitle="Protégez et valorisez votre façade avec un bardage sur mesure"
      description="Vous souhaitez moderniser l'aspect extérieur de votre maison ou améliorer son isolation thermique ? L'Atelier du Volcan, votre spécialiste en menuiserie et charpente à Sansac-de-Marmiesse (Cantal), réalise la pose de bardages sur mesure, adaptés à tous les styles d'architecture. Alliant esthétique, performance et durabilité, nos bardages en bois, composite, aluminium, PVC, fibro ciment ou acier imitation zinc offrent une solution idéale pour embellir et protéger votre habitation."
      image={menuiserieImage}
      features={[
        "Entreprise locale à Sansac-de-Marmiesse (Cantal 15)",
        "Expertise artisanale en menuiserie et charpente bois",
        "Large choix de bardages : bois, composite, aluminium, PVC, acier…",
        "Pose sur mesure et finitions de qualité",
        "Conseils personnalisés pour un rendu esthétique et durable",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une large gamme de bardages adaptés à votre projet</h2>
            <p className="mb-4">
              Nous vous proposons plusieurs types de bardages, en fonction de votre style architectural, de vos exigences techniques et de votre budget :
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Bardage bois :</strong> chaleureux, naturel et authentique. Idéal pour les maisons de caractère ou les extensions bois. Disponible en différentes essences (mélèze, douglas, épicéa, red cedar…).</li>
              <li><strong>Bardage composite :</strong> imitation bois, sans entretien, résistant aux intempéries et aux UV. Parfait pour un rendu moderne et durable.</li>
              <li><strong>Bardage aluminium :</strong> design contemporain, léger et sans entretien. Large choix de coloris et finitions.</li>
              <li><strong>Bardage PVC :</strong> économique, facile d'entretien et résistant. Idéal pour un rendu sobre et moderne.</li>
              <li><strong>Bardage fibro-ciment :</strong> résistant, incombustible et disponible dans de nombreux aspects (bois, pierre, béton…).</li>
              <li><strong>Bardage acier imitation zinc :</strong> élégant, durable et moderne, pour un style industriel ou contemporain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Isolation thermique par l'extérieur et embellissement de façade</h2>
            <p className="mb-4">
              La pose d'un bardage est l'occasion idéale pour améliorer l'isolation thermique de votre maison grâce à une isolation par l'extérieur (ITE).
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Réduction des ponts thermiques et de la facture énergétique</li>
              <li>✔️ Amélioration du confort thermique été comme hiver</li>
              <li>✔️ Protection de la façade contre les intempéries</li>
              <li>✔️ Modernisation esthétique de votre maison</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Pose sur mesure et finitions de qualité</h2>
            <p className="mb-4">
              Nos charpentiers et menuisiers expérimentés réalisent une installation soignée, durable et esthétique, dans le respect des règles de l'art. Chaque bardage est posé avec précision pour garantir étanchéité, ventilation et longévité.
            </p>
            <p className="mb-4">Nous prenons en charge :</p>
            <ul className="space-y-2 list-none">
              <li>✔️ L'étude technique et esthétique de votre projet</li>
              <li>✔️ La préparation et l'isolation de la façade si nécessaire</li>
              <li>✔️ La pose du bardage avec ossature ventilée</li>
              <li>✔️ Les finitions (angles, jonctions, habillages)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un artisan local au service de vos projets dans le Cantal</h2>
            <p>
              L'Atelier du Volcan intervient dans tout le Cantal pour transformer vos façades avec élégance et savoir-faire : Aurillac, Ytrac, Arpajon-sur-Cère, Maurs, Vic-sur-Cère, Murat, et communes alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Modernisez et protégez votre maison avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Offrez une nouvelle jeunesse à votre façade grâce à un bardage sur mesure, posé avec soin et expertise par L'Atelier du Volcan.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude personnalisée et un devis gratuit.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Bardages;
