# ✅ Checklist de Lancement - L'Atelier du Volcan

## Code & Architecture

- [x] Tous les fichiers de contenu JSON créés:
  - [x] content/services/structure/isolation-exterieur.json
  - [x] content/services/menuiserie/bardages.json
  - [x] content/services/agencement/cloisons.json
  - [x] content/services/agencement/amenagement-vehicules.json
  - [x] Versions publiques dans public/content/

- [x] Toutes les pages service avec contenu:
  - [x] Escaliers.tsx ✓
  - [x] Pergola.tsx ✓
  - [x] ExtensionOssatureBois.tsx ✓
  - [x] Et toutes les autres pages ✓

- [x] Images et assets:
  - [x] Tous les fichiers image existent dans src/assets/
  - [x] Noms de fichiers cohérents
  - [x] Références correctes dans service-images.ts

- [x] Configuration et sécurité:
  - [x] vercel.json avec headers de sécurité ✓
  - [x] package.json avec toutes les dépendances ✓
  - [x] .env.example documenté ✓

- [x] API endpoints:
  - [x] api/contact.ts prêt (envoie les emails via Resend)
  - [x] api/realisations.ts fonctionnel
  - [x] Validation des inputs
  - [x] Gestion des erreurs

- [x] Frontend:
  - [x] Routing complet (App.tsx)
  - [x] Navigation fonctionnelle
  - [x] Google Analytics intégré
  - [x] Téléphone: deux numéros affichés (07 50 44 50 55 / 06 08 95 61 40)
  - [x] Formulaire de contact
  - [x] Page Contact avec carte Google Maps
  - [x] Mentions légales
  - [x] Page À propos
  - [x] Page Testimonials
  - [x] Page Réalisations

## Avant le déploiement

- [ ] Créer dépôt GitHub: `atelier-bois-vitrine`
- [ ] Configurer Vercel (connecter GitHub)
- [ ] Ajouter les variables d'environnement dans Vercel:
  - [ ] `RESEND_API_KEY` (API Resend)
  - [ ] `VITE_GOOGLE_ANALYTICS_ID` (Google Analytics)
- [ ] Valider le domaine dans Resend
- [ ] Configurer le domaine personnalisé dans Vercel
- [ ] Mettre à jour les DNS chez votre registrar

## Après le déploiement (1ère semaine)

- [ ] Tester le formulaire de contact
- [ ] Vérifier la réception des emails
- [ ] Vérifier Google Analytics (attendez 24h)
- [ ] Tester tous les liens de navigation
- [ ] Vérifier le responsive design (mobile/tablet)
- [ ] Vérifier les images s'affichent correctement
- [ ] Tester tous les formulaires
- [ ] Vérifier la vitesse de chargement
- [ ] Vérifier le SEO (Search Console)
- [ ] Tester sur navigateurs différents

## Documentation

- [x] DEPLOYMENT_GUIDE.md - Guide complet de déploiement
- [x] .env.example - Variables d'environnement nécessaires

## Pré-requis techniques

- [ ] Compte GitHub
- [ ] Compte Vercel
- [ ] Compte Resend (gratuit)
- [ ] Compte Google Analytics (gratuit)
- [ ] Domaine personnel (atelierduvolcan.fr)
- [ ] Accès au DNS du domaine

## Points importants à retenir

### Resend (Emails)
- Email défaut: `onboarding@resend.dev` (en développement)
- Production: utiliser `contact@atelierduvolcan.fr` (après validation du domaine)
- Vérifier que `RESEND_API_KEY` est bien définie dans Vercel

### Google Analytics
- L'ID commence par `G-` (ex: `G-XXXXXXXXXX`)
- Les données prennent 24h à apparaître
- Les variables d'environnement sont avec le préfixe `VITE_` pour être accessibles au client

### Variables d'environnement
- `RESEND_API_KEY` - Variable privée (API)
- `VITE_GOOGLE_ANALYTICS_ID` - Variable publique (client)
- Ne pas commiter les vraies clés - utiliser les variables Vercel

### Images
- Tous les fichiers sont dans `src/assets/`
- Vite les serve automatiquement
- Noms avec accents et espaces: OK (ex: `Isolation par l_extérieur.jpg`)
- Attention: noms de fichiers sensibles à la casse sur Linux

## État actuel: PRÊT POUR LE LANCEMENT ✅

Le code est complet et fonctionnel. Il manque juste:
1. La configuration des services externes (GitHub, Vercel, Resend)
2. L'ajout des variables d'environnement dans Vercel
3. La configuration du domaine personnalisé

---

**Durée estimée pour finaliser:**
- Configuration GitHub: 5 min
- Déploiement Vercel: 10 min
- Configuration variables d'environnement: 5 min
- Configuration domaine: 15 min (DNS peut prendre quelques heures)
- **Total: ~35 minutes**
