# Configuration CMS & Email - L'Atelier du Volcan

## 📧 Configuration de l'envoi d'emails (Resend)

### Étape 1 : Créer un compte Resend
1. Rendez-vous sur [resend.com](https://resend.com)
2. Créez un compte gratuit
3. Validez votre domaine email (contact@atelier-du-volcan.com)

### Étape 2 : Obtenir la clé API
1. Dans le tableau de bord Resend, allez dans **API Keys**
2. Cliquez sur **Create API Key**
3. Donnez-lui un nom (ex: "Atelier du Volcan Production")
4. Copiez la clé générée (elle commence par `re_`)

### Étape 3 : Ajouter la clé dans Lovable
1. La clé sera demandée lors du déploiement
2. Elle sera stockée de manière sécurisée dans les secrets Lovable Cloud
3. Les emails seront automatiquement envoyés à : **contact@atelier-du-volcan.com**

⚠️ **Important** : 
- N'oubliez pas de valider votre domaine dans Resend
- Sans validation, les emails iront uniquement à l'adresse `onboarding@resend.dev`
- La validation peut prendre quelques minutes

---

## 🎨 Accès au CMS Decap

### URL d'administration
👉 **https://votresite.com/admin**

### Première connexion

1. **Connecter GitHub** (une seule fois)
   - Le CMS utilise GitHub pour stocker les contenus
   - Lors de la première visite, cliquez sur "Login with GitHub"
   - Autorisez l'application Decap CMS

2. **Activer Git Gateway dans Vercel** (une seule fois)
   - Dans les paramètres Vercel de votre projet
   - Activez "Git Gateway" pour permettre l'authentification
   - Suivez les instructions de configuration

---

## 📝 Que pouvez-vous modifier via le CMS ?

### 1. Page d'accueil
- Titre principal (hero)
- Sous-titre
- Image de fond principale
- Citation et description
- Points forts (4 éléments)
- Sections de services (images, titres, descriptions)

### 2. Services (tous modifiables)
- **Structure** : Charpente, Ossature bois, Pergola, Terrasses, Carport
- **Menuiserie** : Intérieur, Extérieur, Escaliers
- **Agencement** : Sols, Dressing, Cuisines, Mobilier sur mesure
- **Extension Bois** : Extension ossature bois, Surélévation

Pour chaque service :
- Titre et sous-titre
- Description complète
- Image principale
- Liste des caractéristiques

### 3. Réalisations (galerie de projets)
- ➕ **Ajouter un nouveau projet**
- ✏️ **Modifier un projet existant**
- 🗑️ **Supprimer un projet**
- 📸 **Changer les photos**

Informations par projet :
- Titre
- Catégorie (Structure, Menuiserie, Agencement, Extension Bois)
- Lieu de réalisation
- Description
- Image principale
- Galerie d'images (optionnel)

### 4. Avis clients
- ➕ **Ajouter un avis**
- ✏️ **Modifier un avis**
- 🗑️ **Supprimer un avis**

Informations par avis :
- Nom du client
- Note (1 à 5 étoiles)
- Commentaire
- Type de projet (optionnel)

---

## 📸 Gestion des images

### Formats acceptés
- JPG, PNG, WebP
- Taille recommandée : max 2MB par image
- Les images sont automatiquement optimisées

### Dimensions recommandées
- **Hero (page d'accueil)** : 1920x1080px
- **Services** : 800x800px minimum
- **Réalisations** : 1200x800px
- **Vignettes** : 400x400px

### Upload d'images
1. Dans le CMS, cliquez sur le champ image
2. Soit :
   - Glissez-déposez votre image
   - Cliquez pour sélectionner un fichier
3. L'image est automatiquement uploadée dans `/public/images/uploads/`

---

## 💾 Publication des modifications

### Workflow
1. **Modifier** le contenu dans le CMS
2. **Prévisualiser** vos changements
3. Cliquer sur **"Publish"** ou **"Publier"**
4. ⏱️ **Attendre 30 secondes** → Le site se met à jour automatiquement !

### Que se passe-t-il en arrière-plan ?
1. ✅ Vos modifications sont sauvegardées dans GitHub
2. 🔄 Vercel détecte le changement
3. 🚀 Le site est reconstruit avec vos nouveaux contenus
4. ✨ Mise en ligne automatique

---

## 🔐 Sécurité & Sauvegarde

### GitHub = Historique complet
- Chaque modification est sauvegardée automatiquement
- Vous pouvez voir l'historique de tous vos changements
- Possibilité de revenir en arrière si besoin

### Accès restreint
- Seules les personnes avec accès GitHub peuvent modifier le contenu
- Les visiteurs du site ne peuvent pas accéder au CMS
- URL : `/admin` (protégée par authentification)

---

## ❓ Problèmes courants

### Le formulaire de contact ne fonctionne pas
✅ **Solution** : Vérifiez que la clé Resend est bien configurée et que le domaine est validé

### Je ne peux pas me connecter au CMS
✅ **Solution** : 
- Vérifiez que Git Gateway est activé dans Vercel
- Assurez-vous d'avoir les droits d'accès au repo GitHub

### Les images ne s'affichent pas après upload
✅ **Solution** : 
- Attendez que le déploiement Vercel soit terminé (30 sec)
- Videz le cache de votre navigateur

### Mes modifications ne sont pas visibles
✅ **Solution** : 
- Vérifiez que vous avez bien cliqué sur "Publish"
- Attendez 30 secondes pour le rebuild automatique
- Rafraîchissez la page (Ctrl+F5)

---

## 📞 Besoin d'aide ?

Si vous rencontrez un problème :
1. Consultez ce guide
2. Vérifiez l'historique GitHub pour voir si les modifications ont été enregistrées
3. Contactez votre développeur si le problème persiste

---

**🎉 Vous êtes prêt à gérer votre site en toute autonomie !**

N'oubliez pas : tout est sauvegardé, vous ne pouvez rien casser définitivement.
