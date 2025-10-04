# Guide d'utilisation - L'Atelier du Volcan

Bonjour Tristan ! 👋

Ce guide va vous expliquer comment modifier facilement le contenu de votre site web sans avoir besoin de coder.

## 🌐 Accéder à l'administration

Pour modifier le contenu de votre site, vous devez vous connecter à l'interface d'administration :

**URL d'administration** : `https://atelierduvolcan.fr/admin`

> ⚠️ **Note importante** : Le CMS Decap nécessite d'être configuré après le déploiement sur Vercel et la connexion à GitHub. Pour l'instant, vous pouvez modifier le contenu en demandant à Lovable AI de faire les changements pour vous via des prompts.

## 📝 Modifier le contenu du site

### 1. Page d'accueil

Pour modifier la page d'accueil :
- Titre principal (hero)
- Sous-titre
- Texte des highlights (Devis sous 48h, etc.)
- Images de fond

### 2. Services

Vous pouvez modifier pour chaque service :
- Le titre
- La description
- Les points forts
- Les images

Services disponibles :
- **Structure** : Charpente, Ossature bois, Pergola, Terrasses, Carport
- **Menuiserie** : Intérieur, Extérieur, Escaliers
- **Agencement** : Sols, Dressing, Cuisines, Mobilier sur mesure
- **Extension Bois** : Extension ossature bois, Surélévation

### 3. Réalisations (Galerie de projets)

Pour ajouter un nouveau projet :
1. Préparez vos photos (format JPG ou PNG, max 2MB)
2. Ajoutez le projet avec :
   - Titre du projet
   - Catégorie (Structure, Menuiserie, Agencement, Extension)
   - Lieu de réalisation
   - Description
   - Photos

### 4. Avis clients

Pour ajouter ou modifier un avis :
- Nom du client
- Note (sur 5 étoiles)
- Texte de l'avis
- Type de projet réalisé

### 5. Page À propos

Modifiez le texte de présentation de votre entreprise, votre histoire, vos valeurs.

### 6. Coordonnées

Pour changer vos coordonnées :
- Adresse
- Téléphone
- Email
- Liens réseaux sociaux (Facebook, Instagram)

Ces informations apparaissent dans le footer (pied de page) et sur la page Contact.

## 🖼️ Changer les images

### Bonnes pratiques pour les images :

1. **Format** : JPG ou PNG
2. **Taille** : Max 2MB par image
3. **Dimensions recommandées** :
   - Hero (page d'accueil) : 1920x1080px
   - Services/Réalisations : 800x800px minimum
   - Vignettes : 400x400px

### Pour uploader une image :

1. Cliquez sur "Ajouter une image" dans l'administration
2. Sélectionnez votre fichier
3. L'image est automatiquement optimisée et sauvegardée

## 💾 Sauvegarde automatique

### GitHub

Chaque modification que vous faites est automatiquement sauvegardée dans GitHub (système de version) :

- ✅ Historique complet de tous vos changements
- ✅ Possibilité de revenir en arrière si besoin
- ✅ Sauvegarde sécurisée dans le cloud

### Déploiement automatique

Une fois que vous sauvegardez vos modifications :

1. ⏱️ Vercel détecte automatiquement le changement
2. 🔄 Le site est reconstruit avec vos nouveaux contenus
3. ✅ Mise en ligne en 30 secondes environ

> **Astuce** : Vous pouvez faire plusieurs modifications avant de sauvegarder. Une fois que vous cliquez sur "Publier", toutes vos modifications seront mises en ligne en une seule fois.

## 🛠️ Configuration initiale (à faire une seule fois)

### Étape 1 : Connecter GitHub

1. Allez dans les paramètres Lovable
2. Cliquez sur "Connect to GitHub"
3. Autorisez l'application
4. Créez un nouveau repository "atelier-du-volcan"

### Étape 2 : Déployer sur Vercel

1. Créez un compte sur [Vercel.com](https://vercel.com)
2. Importez votre projet depuis GitHub
3. Cliquez sur "Deploy"
4. Votre site est en ligne !

### Étape 3 : Configurer Decap CMS

Une fois le site déployé :

1. Activez l'authentification GitHub dans les paramètres Vercel
2. Configurez l'accès à `/admin`
3. Vous pourrez alors vous connecter avec votre compte GitHub

### Étape 4 : Configurer l'envoi d'emails (Resend)

Pour que le formulaire de contact fonctionne :

1. Créez un compte sur [Resend.com](https://resend.com)
2. Validez votre domaine email dans Resend
3. Générez une clé API
4. Ajoutez la clé API dans les variables d'environnement Vercel
5. Le formulaire enverra les messages à `contact@atelier-du-volcan.com`

## ❓ Besoin d'aide ?

### En cas de problème :

1. **Vérifiez l'historique** : Dans GitHub, vous pouvez voir toutes les modifications
2. **Revenez en arrière** : Si quelque chose ne va pas, vous pouvez restaurer une version précédente
3. **Contactez le support** : Si vraiment vous êtes bloqué, contactez Lovable ou votre développeur

### Astuces pratiques :

- 📱 **Mobile** : L'administration fonctionne aussi sur mobile/tablette
- 🎨 **Prévisualisation** : Vérifiez toujours le rendu avant de publier
- 💡 **Sauvegarde régulière** : Sauvegardez vos modifications toutes les 15-20 minutes

---

**Bonne gestion de votre site ! 🎉**

N'oubliez pas : chaque modification est sauvegardée automatiquement, vous ne pouvez rien casser définitivement. N'ayez pas peur d'essayer !
