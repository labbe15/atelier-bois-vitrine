import porteInterieurImg from "@/assets/Porte intérieur.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const PortesCommunication = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        <img
          src={porteInterieurImg}
          alt="Portes intérieures"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "rotate(90deg)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading text-white mb-4">Portes intérieures</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Sublimez votre intérieur avec des portes élégantes et durables</p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">Chez L'Atelier du Volcan, entreprise spécialisée dans la pose de menuiseries à Sansac-de-Marmiesse, nous vous accompagnons dans le choix et la pose de vos portes intérieures. Design, robustes et parfaitement adaptées à votre intérieur, nos portes conjuguent esthétisme, confort et qualité artisanale. Que vous rénoviez une maison traditionnelle ou que vous aménagiez un intérieur contemporain, nous vous proposons une large gamme de portes bois ou aluminium sélectionnées pour leur performance et leur élégance.</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Pourquoi choisir L'Atelier du Volcan ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Conseils personnalisés selon vos besoins et votre budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Pose professionnelle et finitions soignées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Produits de qualité, durables et esthétiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Large choix de modèles et de matériaux</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
                <p className="mb-6">
                  Contactez-nous pour discuter de votre projet. Nous serons ravis d'étudier votre demande et de vous proposer un devis détaillé.
                </p>
                <Button variant="secondary" asChild className="w-full">
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Une large gamme de portes intérieures pour tous les styles</h2>
                <p className="mb-4">
                  Chez L'Atelier du Volcan, nous vous proposons de nombreux modèles de portes intérieures, sélectionnés chez nos fournisseurs pour leur design, leur performance et leur qualité :
                </p>
                <ul className="space-y-2 mb-4 list-disc pl-6">
                  <li>Portes pleines ou vitrées</li>
                  <li>Portes battantes, coulissantes ou à galandage</li>
                  <li>Portes à un vantail ou double battant</li>
                  <li>Différentes essences de bois et finitions (vernie, laquée, teintée, brute…)</li>
                  <li>Portes bois ou aluminium (pour verrières intérieures ou cloisons vitrées)</li>
                </ul>
                <p>
                  Chaque porte est adaptée à l'usage de la pièce : chambre, salon, bureau, salle de bains, ou pièce de vie.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Une pose soignée pour un résultat impeccable</h2>
                <p className="mb-4">
                  Nos menuisiers maîtrisent parfaitement la pose de portes intérieures et garantissent un résultat esthétique, fonctionnel et durable.
                </p>
                <p className="mb-4">Nous prenons en compte :</p>
                <ul className="space-y-2 list-none">
                  <li>✔️ La prise de cotes précise et l'adaptation au bâti existant</li>
                  <li>✔️ Le choix de l'ouverture : sens de la porte et encombrement</li>
                  <li>✔️ Le réglage des paumelles et la finition du bâti</li>
                  <li>✔️ L'isolation acoustique ou thermique si nécessaire</li>
                </ul>
                <p className="mt-4">
                  Chaque détail compte pour que votre porte s'intègre harmonieusement à votre intérieur.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Des portes adaptées à tous vos projets dans le Cantal</h2>
                <p className="mb-4">
                  Que vous rénoviez une maison ancienne, que vous réaménagez un appartement ou que vous construisiez une extension bois, nos portes intérieures apportent style, qualité et confort à vos espaces de vie.
                </p>
                <p>
                  Nous vous accompagnons dans toutes les communes du Cantal : Aurillac, Arpajon-sur-Cère, Sansac-de-Marmiesse, Ytrac, Maurs, Vic-sur-Cère, Murat et alentours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Transformez votre intérieur avec L'Atelier du Volcan</h2>
                <p className="font-semibold">
                  📞 Contactez L'Atelier du Volcan dès aujourd'hui pour un devis gratuit et offrez à votre maison des portes intérieures design et durables, posées avec soin et précision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortesCommunication;
