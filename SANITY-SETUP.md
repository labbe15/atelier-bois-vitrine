# Configuration Sanity + Cloudinary

## 📦 Installation terminée

Sanity a été configuré pour gérer vos réalisations avec optimisation automatique des images.

## 🚀 Étapes pour activer Sanity

### 1. Créer un projet Sanity

```bash
# Se connecter à Sanity (créer un compte si nécessaire)
npx sanity login

# Initialiser le projet Sanity
npx sanity init --project-id YOUR_PROJECT_ID --dataset production
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
VITE_SANITY_PROJECT_ID=votre_project_id
VITE_SANITY_DATASET=production
```

### 3. Démarrer Sanity Studio

```bash
# Lancer le studio localement
npx sanity dev
```

Le studio sera accessible sur `http://localhost:3333`

### 4. Configurer Cloudinary dans Sanity

1. Allez dans votre projet Sanity sur https://sanity.io/manage
2. Allez dans **Plugins** → **Asset Source Plugins**
3. Installez **Cloudinary Asset Source**
4. Connectez votre compte Cloudinary (gratuit)

Cloudinary optimisera automatiquement vos images :
- Conversion WebP/AVIF automatique
- Redimensionnement responsive
- Compression intelligente
- CDN mondial

### 5. Déployer Sanity Studio

```bash
# Déployer le studio (accessible en ligne pour votre client)
npx sanity deploy
```

Votre studio sera accessible sur : `https://votre-projet.sanity.studio`

## 📝 Utilisation

### Pour votre client

1. Accédez à `https://votre-projet.sanity.studio`
2. Connectez-vous avec son compte
3. Cliquez sur **Réalisation** → **Créer**
4. Remplissez les champs :
   - Titre du projet
   - Catégorie (Structure, Menuiserie, etc.)
   - Localisation
   - Description
   - Image principale (uploadée via Cloudinary)
   - Galerie d'images (optionnel)
5. Cliquez sur **Publier**

Le site se mettra à jour automatiquement ! 🎉

### Schéma des réalisations

Chaque réalisation contient :
- **Titre** : Nom du projet
- **Slug** : URL automatique
- **Catégorie** : Structure, Menuiserie Intérieure/Extérieure, Agencement, Extension
- **Localisation** : Ville, Cantal
- **Description** : Texte descriptif
- **Image principale** : Photo principale optimisée
- **Galerie** : Photos supplémentaires
- **Projet mis en avant** : Affichage prioritaire
- **Date de publication** : Tri chronologique

## 🔧 Développement

### Importer les réalisations existantes

Un script d'import sera créé pour transférer vos 14 réalisations actuelles dans Sanity.

### Requêtes Sanity

Les données sont récupérées via :
```typescript
import { client, realisationsQuery } from '@/lib/sanity'

const realisations = await client.fetch(realisationsQuery)
```

### Optimisation des images

```typescript
import { urlFor } from '@/lib/sanity'

// Image responsive optimisée
<img
  src={urlFor(realisation.mainImage)
    .width(800)
    .height(600)
    .auto('format') // WebP/AVIF automatique
    .quality(85)
    .url()}
  alt={realisation.title}
/>
```

## 📚 Ressources

- [Documentation Sanity](https://www.sanity.io/docs)
- [Sanity + Cloudinary](https://www.sanity.io/plugins/sanity-plugin-cloudinary)
- [Guide d'optimisation d'images](https://www.sanity.io/docs/image-urls)

## 🎯 Prochaines étapes

1. Créer votre projet Sanity
2. Configurer les variables d'environnement
3. Importer les réalisations existantes
4. Déployer le studio pour votre client
