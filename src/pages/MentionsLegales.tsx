import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Mentions Légales
          </h1>
          <p className="text-muted-foreground">
            Informations légales et conditions d'utilisation
          </p>
        </div>

        <div className="space-y-6">
          {/* Éditeur du site */}
          <Card>
            <CardHeader>
              <CardTitle>1. Éditeur du site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Raison sociale :</strong> L'Atelier du Volcan</p>
              <p><strong>Forme juridique :</strong> [À compléter : SARL, EURL, Auto-entrepreneur, etc.]</p>
              <p><strong>Capital social :</strong> [À compléter si société]</p>
              <p><strong>SIRET :</strong> [À compléter]</p>
              <p><strong>Numéro TVA intracommunautaire :</strong> [À compléter si applicable]</p>
              <p><strong>Adresse du siège social :</strong><br />
                Les 4 routes d'Albussac<br />
                15130 Sansac-de-Marmiesse<br />
                France
              </p>
              <p><strong>Téléphone :</strong> 07 50 44 50 55 / 06 08 95 61 40</p>
              <p><strong>Email :</strong> contact@atelier-du-volcan.com</p>
              <p><strong>Directeur de la publication :</strong> [À compléter : Nom du gérant/responsable]</p>
            </CardContent>
          </Card>

          {/* Hébergeur */}
          <Card>
            <CardHeader>
              <CardTitle>2. Hébergement du site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong><br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723<br />
                États-Unis
              </p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a></p>
            </CardContent>
          </Card>

          {/* Propriété intellectuelle */}
          <Card>
            <CardHeader>
              <CardTitle>3. Propriété intellectuelle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
              </p>
              <p>
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique ou tout autre support quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </CardContent>
          </Card>

          {/* Protection des données personnelles */}
          <Card>
            <CardHeader>
              <CardTitle>4. Protection des données personnelles (RGPD)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">4.1 Responsable du traitement</h3>
                <p>Le responsable du traitement des données est L'Atelier du Volcan.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4.2 Données collectées</h3>
                <p>Les données personnelles collectées via le formulaire de contact sont :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Message</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4.3 Finalité du traitement</h3>
                <p>
                  Ces données sont collectées uniquement pour répondre à vos demandes de contact et de devis.
                  Elles ne seront en aucun cas communiquées à des tiers sans votre consentement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4.4 Durée de conservation</h3>
                <p>
                  Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4.5 Vos droits</h3>
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d'opposition</li>
                </ul>
                <p className="mt-2">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@atelier-du-volcan.com" className="text-primary hover:underline">contact@atelier-du-volcan.com</a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>5. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ce site n'utilise pas de cookies de suivi ou de cookies publicitaires.
              </p>
              <p>
                Les seuls cookies utilisés sont des cookies techniques essentiels au fonctionnement du site.
              </p>
            </CardContent>
          </Card>

          {/* Liens hypertextes */}
          <Card>
            <CardHeader>
              <CardTitle>6. Liens hypertextes</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Les liens hypertextes présents sur ce site peuvent renvoyer vers d'autres sites internet.
                L'Atelier du Volcan ne saurait être tenu responsable du contenu de ces sites tiers.
              </p>
            </CardContent>
          </Card>

          {/* Droit applicable */}
          <Card>
            <CardHeader>
              <CardTitle>7. Droit applicable et juridiction compétente</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </CardContent>
          </Card>

          {/* Médiation */}
          <Card>
            <CardHeader>
              <CardTitle>8. Médiation de la consommation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Conformément à l'article L.612-1 du Code de la consommation, nous proposons un dispositif de médiation de la consommation.
              </p>
              <p className="mt-2">
                L'entité de médiation retenue est :<br />
                [À compléter : Nom du médiateur de la consommation]
              </p>
            </CardContent>
          </Card>

          {/* Assurance */}
          <Card>
            <CardHeader>
              <CardTitle>9. Assurance professionnelle</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Assureur :</strong> [À compléter]</p>
              <p><strong>Numéro de contrat :</strong> [À compléter]</p>
              <p><strong>Garanties :</strong> Responsabilité civile professionnelle et décennale</p>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground text-center pt-6 border-t">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
