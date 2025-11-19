import ServiceLayout from "@/components/ServiceLayout";
import menuiserieImage from "@/assets/menuiserie.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Tables = () => {
  return (
    <ServiceLayout
      title="Tables"
      subtitle="Le savoir-faire artisanal au service de vos intérieurs"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous créons des tables en bois sur mesure qui allient design, authenticité et qualité artisanale. Chaque pièce est pensée et fabriquée dans notre atelier pour refléter votre style et s'intégrer harmonieusement à votre intérieur, qu'il soit moderne, rustique ou contemporain. Nos artisans menuisiers mettent leur passion du bois au service de la fabrication de tables basses, tables à manger design et tables de ferme massives, réalisées avec des essences nobles et des finitions haut de gamme."
      image={menuiserieImage}
      features={[
        "Fabrication 100 % sur mesure dans notre atelier à Sansac-de-Marmiesse",
        "Design contemporain ou traditionnel selon vos envies",
        "Finitions soignées (vernis, huile, teinte, patine, brossage…)",
        "Meubles durables et écoresponsables",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Des créations uniques en bois massif ou placage</h2>
            <p className="mb-4">
              Que vous rêviez d'une grande table à manger familiale, d'une table de ferme authentique ou d'une table basse élégante et contemporaine, nous réalisons vos envies sur mesure.
            </p>
            <ul className="space-y-2 mb-4 list-disc pl-6">
              <li><strong>Tables à manger en bois massif :</strong> robustes, chaleureuses et intemporelles, elles sont conçues pour durer et traverser les générations.</li>
              <li><strong>Tables en placage bois :</strong> idéales pour un rendu haut de gamme à l'esthétique raffinée, tout en offrant légèreté et modernité.</li>
              <li><strong>Tables basses sur mesure :</strong> conçues pour s'adapter à vos espaces de vie et à votre style décoratif.</li>
              <li><strong>Tables de ferme massives :</strong> symboles d'authenticité et de convivialité, elles incarnent le charme du mobilier traditionnel revisité avec élégance.</li>
            </ul>
            <p>
              Chaque table est fabriquée à la main dans notre atelier, avec un souci du détail et une finition irréprochable.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">La signature L'Atelier du Volcan : qualité, design et durabilité</h2>
            <p className="mb-4">
              Le bois est notre matière d'expression. Nous sélectionnons avec soin les essences locales et durables : chêne, frêne, hêtre, noyer ou pin massif.
            </p>
            <p className="mb-4">
              Nos réalisations allient solidité, esthétisme et savoir-faire artisanal, pour créer un mobilier unique et personnalisé.
            </p>
            <ul className="space-y-2 list-none">
              <li>✔️ Fabrication 100 % sur mesure dans notre atelier à Sansac-de-Marmiesse</li>
              <li>✔️ Design contemporain ou traditionnel selon vos envies</li>
              <li>✔️ Finitions soignées (vernis, huile, teinte, patine, brossage…)</li>
              <li>✔️ Meubles durables et écoresponsables</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un artisan local au cœur du Cantal</h2>
            <p className="mb-4">
              Basé à Sansac-de-Marmiesse, L'Atelier du Volcan conçoit et fabrique l'ensemble de ses meubles dans le Cantal, avec un engagement fort pour la qualité, la durabilité et l'esthétique.
            </p>
            <p>
              Nos créations sur mesure sont pensées pour s'adapter parfaitement à votre intérieur, qu'il s'agisse d'une maison de campagne, d'un chalet de montagne ou d'un appartement moderne. Nous livrons et installons nos réalisations dans tout le Cantal : Aurillac, Saint-Flour, Murat, Maurs, Vic-sur-Cère et alentours.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Créez la table de vos rêves avec L'Atelier du Volcan</h2>
            <p className="mb-4">
              Chaque table raconte une histoire. Avec L'Atelier du Volcan, donnez vie à un mobilier unique, à la fois pratique, esthétique et durable, conçu pour vous accompagner au quotidien.
            </p>
            <p className="font-semibold">
              📞 Contactez-nous dès aujourd'hui pour une étude personnalisée et un devis gratuit.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Découvrez le plaisir d'une table en bois sur mesure, fabriquée avec passion dans le Cantal, par L'Atelier du Volcan, votre artisan créateur de mobilier design et authentique.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default Tables;
