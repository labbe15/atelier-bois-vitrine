import ServiceLayout from "@/components/ServiceLayout";
import mobilierImg from "@/assets/Mobilier sur mesure.jpg";
import { Card, CardContent } from "@/components/ui/card";

const MobilierSurMesure = () => {
  return (
    <ServiceLayout
      title="Mobilier sur mesure"
      subtitle="Créez un intérieur unique avec du mobilier bois sur mesure"
      description="Chez L'Atelier du Volcan, à Sansac-de-Marmiesse, nous donnons vie à vos envies d'aménagement intérieur grâce à la création de meubles en bois sur mesure. De la conception à la pose, notre équipe de menuisiers passionnés conçoit des pièces uniques, parfaitement adaptées à votre espace, à votre style et à vos besoins. Parce que chaque maison est différente, nous créons du mobilier personnalisé qui allie fonctionnalité, esthétisme et durabilité, dans le respect des traditions artisanales et des essences de bois nobles."
      image={mobilierImg}
      features={[
        "Adaptation parfaite à vos espaces et contraintes techniques",
        "Design personnalisé selon vos goûts et votre décoration",
        "Fabrication artisanale 100 % locale dans le Cantal",
        "Durabilité et qualité d'un meuble en bois massif fait pour durer",
        "Valorisation de votre intérieur grâce à une réalisation unique",
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Du mobilier adapté à chaque pièce et à chaque besoin</h2>
            <p className="mb-4">
              Nous intervenons dans toutes les pièces de la maison pour créer un mobilier en bois sur mesure fonctionnel, élégant et durable :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Bibliothèques et étagères murales</li>
              <li>Tables basses, tables à manger, bureaux</li>
              <li>Meubles TV et rangements salon</li>
              <li>Bancs et coffres de rangement</li>
              <li>Meubles d'entrée, consoles et placards</li>
              <li>Tête de lit, chevets et rangements chambre</li>
            </ul>
            <p className="mt-4">
              Chaque pièce est pensée pour optimiser l'espace, simplifier votre quotidien et embellir votre maison.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un savoir-faire artisanal local et passionné</h2>
            <p className="mb-4">
              Basés à Sansac-de-Marmiesse, au cœur du Cantal, nous fabriquons chaque meuble à la main, dans le respect des traditions de la menuiserie française.
            </p>
            <p className="mb-4">
              Nos artisans travaillent principalement le bois massif (chêne, hêtre, frêne, noyer, pin…), mais aussi le placage, le lamellé-collé ou les panneaux techniques selon le projet.
            </p>
            <p className="mb-4">Chaque meuble sur mesure est :</p>
            <ul className="space-y-2 list-none">
              <li>✔️ Dessiné en accord avec vos envies et vos contraintes d'espace</li>
              <li>✔️ Fabriqué à la main dans notre atelier avec des matériaux nobles et durables</li>
              <li>✔️ Livré et installé chez vous dans tout le Cantal</li>
              <li>✔️ Garanti d'une finition impeccable</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Un mobilier pensé pour durer</h2>
            <p className="mb-4">
              En choisissant un meuble sur mesure, vous investissez dans un objet de qualité, créé pour traverser le temps.
            </p>
            <p className="mb-4">Nos réalisations se distinguent par :</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Un bois massif noble et chaleureux</li>
              <li>Des assemblages traditionnels solides et esthétiques</li>
              <li>Des finitions soignées (vernis naturel, huile, teinte…)</li>
              <li>Un design unique qui reflète votre personnalité</li>
              <li>Un engagement écoresponsable grâce à un circuit court et local</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Transformez votre intérieur avec du mobilier unique</h2>
            <p className="mb-4">
              Offrez-vous un intérieur à votre image grâce à du mobilier en bois sur mesure conçu et fabriqué par L'Atelier du Volcan, artisan menuisier dans le Cantal.
            </p>
            <p className="font-semibold mb-4">
              📞 Contactez-nous dès aujourd'hui pour une étude personnalisée et un devis gratuit.
            </p>
            <p className="text-sm text-muted-foreground">
              Donnez vie à vos envies d'aménagement avec L'Atelier du Volcan : créateur de mobilier sur mesure en bois massif, à Sansac-de-Marmiesse.
            </p>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default MobilierSurMesure;
