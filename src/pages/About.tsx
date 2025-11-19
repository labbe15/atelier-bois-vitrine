import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading text-primary text-center mb-12">
          À propos de L'Atelier du Volcan
        </h1>

        <div className="prose prose-lg max-w-none mb-12">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-6">
                Installés dans une ancienne boîte de nuit mythique du Cantal, le Volcan, nous avons transformé ce lieu en notre atelier. C'est ici que nous donnons vie à vos projets, entourés de bois et d'outils, avec la même énergie que celle qui animait jadis ces murs.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Nous sommes deux artisans passionnés, unis par un amour commun pour le bois et le travail bien fait. Notre complémentarité nous permet d'aborder chaque projet avec une vision globale, de la conception à la réalisation.
              </p>
              <p className="text-lg leading-relaxed">
                Que ce soit pour de la charpente traditionnelle, de la menuiserie sur mesure, de l'agencement intérieur ou des extensions en ossature bois, nous mettons notre savoir-faire et notre exigence au service de vos envies.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Passion du bois</h3>
              <p className="text-base text-muted-foreground">
                Chaque essence, chaque texture nous inspire pour créer des réalisations uniques
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Précision</h3>
              <p className="text-base text-muted-foreground">
                Un souci du détail constant pour des finitions impeccables
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-base text-muted-foreground">
                Des matériaux sélectionnés et des techniques éprouvées
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-secondary/10">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-heading text-primary mb-4 text-center">
              Notre philosophie
            </h2>
            <p className="text-center text-lg">
              Nous croyons en un artisanat authentique, où le conseil est transparent et les finitions durables. Chaque projet est unique et mérite une attention particulière, du premier échange jusqu'à la dernière vis posée.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
