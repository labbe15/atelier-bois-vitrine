import ServiceLayout from "@/components/ServiceLayout";
import verriereImg from "@/assets/Verrière chêne.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Verrieres = () => {
  return (
    <ServiceLayout
      title="Verrières"
      subtitle="Faites entrer la lumière avec style grâce à nos verrières en bois ou en aluminium"
      description="Envie d'apporter luminosité, élégance et modernité à votre intérieur ? Chez L'Atelier du Volcan, entreprise artisanale de menuiserie dans le Cantal, nous concevons et installons des verrières sur mesure en bois ou aluminium pour sublimer vos espaces de vie. Alliant design, robustesse et finesse, nos verrières s'adaptent aussi bien aux intérieurs modernes qu'aux maisons de caractère."
      image={verriereImg}
      features={[
        "Fabrication sur mesure dans le Cantal",
        "Conseils personnalisés selon votre projet",
        "Produits de qualité française",
        "Pose soignée par des menuisiers expérimentés",
        "Intervention dans tout le Cantal : Aurillac, Ytrac, Murat, Maurs, Vic-sur-Cère…",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des verrières sur mesure pour cloisonner sans perdre la lumière</h2>
            <p className="mb-4">
              Parfaites pour séparer deux espaces tout en conservant la lumière naturelle, les verrières sont devenues incontournables dans l'aménagement intérieur contemporain.
            </p>
            <p className="mb-4">Nous réalisons des verrières sur mesure pour :</p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li>Séparer une cuisine ouverte du salon</li>
              <li>Créer un bureau vitré ou un espace de travail lumineux</li>
              <li>Aménager une salle de bains semi-ouverte</li>
              <li>Structurer les volumes dans un loft ou une grande pièce</li>
              <li>Créer une séparation élégante entre deux chambres ou espaces de vie</li>
            </ul>
            <p>
              Chaque projet est étudié en fonction de la configuration de votre habitation et de vos envies.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Bois ou aluminium : deux styles, une même exigence de qualité</h2>
            <p className="mb-4">
              Nous vous proposons deux types de verrières, en fonction du rendu souhaité :
            </p>
            <p className="mb-4">
              <strong>Verrière en bois :</strong> chaleureuse, noble et élégante, parfaite pour les intérieurs au style naturel, scandinave ou maison de campagne.
            </p>
            <p className="mb-4">
              <strong>Verrière en aluminium :</strong> fine, légère et moderne, idéale pour un style industriel, loft ou contemporain. Disponible dans une variété de coloris.
            </p>
            <p>
              Chaque verrière est composée de vitrage clair, dépoli ou opaque selon le degré d'intimité souhaité.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Une fabrication sur mesure et une pose soignée</h2>
            <p className="mb-4">
              Toutes nos verrières sont conçues sur mesure dans notre atelier à Sansac-de-Marmiesse, puis installées avec précision par nos menuisiers.
            </p>
            <p className="mb-4">Nous prenons en charge :</p>
            <ul className="space-y-2 list-none">
              <li>✔️ L'étude technique et esthétique de votre projet</li>
              <li>✔️ La fabrication artisanale de la structure</li>
              <li>✔️ Le choix du vitrage adapté</li>
              <li>✔️ La pose et les finitions impeccables</li>
              <li>✔️ L'intégration harmonieuse dans votre intérieur</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un artisan local au service de vos projets dans le Cantal</h2>
            <p>
              L'Atelier du Volcan intervient dans tout le Cantal pour transformer vos intérieurs avec élégance et savoir-faire : Aurillac, Ytrac, Arpajon-sur-Cère, Maurs, Vic-sur-Cère, Murat, et communes alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Apportez luminosité et design à votre maison</h2>
            <p className="font-semibold mb-4">
              📞 Contactez L'Atelier du Volcan dès aujourd'hui pour une étude personnalisée et un devis gratuit.
            </p>
            <p className="text-sm text-muted-foreground">
              Faites entrer la lumière avec une verrière sur mesure, conçue avec soin et élégance par votre artisan menuisier local dans le Cantal.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Verrieres;
