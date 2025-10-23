# 📚 Guide d'administration du site - L'Atelier du Volcan

## 🔐 Accès à l'interface d'administration

### URL d'accès
Votre interface CMS est accessible à l'adresse :
```
https://votre-site.vercel.app/admin/
```

### Connexion
1. Rendez-vous sur `/admin/`
2. Cliquez sur "Login with GitHub"
3. Autorisez l'application à accéder à votre compte GitHub
4. Vous serez redirigé vers l'interface d'administration

> **Note** : Vous devez avoir accès au repository GitHub pour vous connecter.

---

## 🎨 Modifier le contenu du site

### Page d'accueil

Dans le menu de gauche, cliquez sur **"Page d'accueil"** pour modifier :

- **Titre principal** : Le grand titre affiché sur la page d'accueil
- **Sous-titre** : Le texte sous le titre principal
- **Citation** : La phrase mise en avant dans la vague verte
- **Description** : Le paragraphe explicatif
- **Points forts** : Les 4 cartes avec icônes (Devis, Pose, Matériaux, Local)
- **Sections services** : Les 4 grandes catégories de services

**Pour sauvegarder** : Cliquez sur "Publish" en haut à droite.

---

### Services

#### Structure
Cliquez sur **"Structure"** dans le menu pour modifier les services :
- Charpente
- Maison ossature bois
- Pergola
- Terrasses
- Carport

Pour chaque service, vous pouvez modifier :
- **Titre** : Nom du service
- **Sous-titre** : Description courte
- **Description** : Texte détaillé
- **Image** : Photo principale du service
- **Caractéristiques** : Liste des points forts (ajoutez/supprimez des lignes)

#### Menuiserie
Cliquez sur **"Menuiserie"** pour modifier :
- Escaliers
- Bibliothèques
- Tables
- Sols
- Portes de communication
- Mobilier sur mesure

#### Agencement
Cliquez sur **"Agencement"** pour modifier :
- Dressing
- Cuisines
- Aménagement sur mesure

#### Extension Bois
Cliquez sur **"Extension Bois"** pour modifier :
- Extension ossature bois
- Garage
- Surélévation
- Véranda
- Pool House
- Abri de jardin

---

### Réalisations

Cliquez sur **"Réalisations"** pour :
- **Ajouter** une nouvelle réalisation : "New Réalisations"
- **Modifier** une réalisation existante : Cliquez dessus
- **Supprimer** une réalisation : Trois points > Delete

Pour chaque réalisation :
- **Titre** : Nom du projet
- **Catégorie** : Structure / Menuiserie / Agencement / Extension Bois
- **Lieu** : Ville ou région
- **Description** : Détails du projet
- **Image principale** : Photo mise en avant
- **Galerie d'images** : Photos supplémentaires (optionnel)

---

### Avis clients

Cliquez sur **"Avis clients"** pour :
- **Ajouter** un nouvel avis : "New Avis clients"
- **Modifier** un avis existant
- **Supprimer** un avis

Pour chaque avis :
- **Nom du client** : Prénom et initiale du nom
- **Note** : De 1 à 5 étoiles
- **Commentaire** : Témoignage du client
- **Type de projet** : Ex: "Cuisine", "Terrasse" (optionnel)

---

## 📸 Gérer les images

### Upload d'images
1. Cliquez sur le champ "Image"
2. Cliquez sur "Choose an image"
3. Deux options :
   - **Upload** : Envoyez une nouvelle image depuis votre ordinateur
   - **Choose existing** : Sélectionnez une image déjà uploadée

### Conseils pour les images
- **Format** : JPG ou PNG
- **Taille recommandée** : 1920x1080px pour les images de services
- **Poids** : Maximum 1-2 Mo (compressez si nécessaire)
- **Nommage** : Utilisez des noms descriptifs (ex: `terrasse-bois-2024.jpg`)

Les images sont stockées dans `/public/images/uploads/`

---

## ✅ Workflow de modification

### Étape par étape
1. **Se connecter** à `/admin/`
2. **Naviguer** vers la section à modifier
3. **Cliquer** sur l'élément à éditer
4. **Modifier** le contenu dans l'éditeur
5. **Prévisualiser** (optionnel) : "Preview" en haut
6. **Publier** : Cliquer sur "Publish" en haut à droite
7. **Attendre** 1-2 minutes que Vercel redéploie le site
8. **Vérifier** que les modifications sont en ligne

### Mode brouillon
- Les modifications ne sont **pas publiées immédiatement**
- Cliquez sur "Save" pour sauvegarder sans publier
- Cliquez sur "Publish" pour mettre en ligne

---

## 🛠️ Résolution de problèmes

### Je ne peux pas me connecter
✅ Vérifiez que vous avez accès au repository GitHub
✅ Vérifiez que l'OAuth GitHub est configuré correctement
✅ Essayez en navigation privée pour vider le cache

### Mes modifications ne s'affichent pas
✅ Avez-vous cliqué sur "Publish" ?
✅ Attendez 2-3 minutes que Vercel redéploie
✅ Videz le cache de votre navigateur (Ctrl+F5)
✅ Vérifiez sur un autre appareil/navigateur

### Une image ne s'affiche pas
✅ Vérifiez que l'image est bien uploadée
✅ Vérifiez le format (JPG, PNG, WebP)
✅ Vérifiez la taille (max 2 Mo)
✅ Réessayez l'upload

### J'ai fait une erreur
✅ Rechargez la page sans sauvegarder
✅ Ou cliquez sur "Revert unpublished changes"
✅ En dernier recours, contactez le développeur

---

## 🚀 Bonnes pratiques

### Contenu
- ✅ Relisez avant de publier
- ✅ Utilisez un français correct
- ✅ Soyez concis et clair
- ✅ Mettez en avant vos forces
- ✅ Actualisez régulièrement les réalisations

### Images
- ✅ Utilisez des photos de qualité professionnelle
- ✅ Compressez les images avant upload
- ✅ Respectez l'identité visuelle
- ✅ Variez les projets présentés

### SEO
- ✅ Utilisez des titres descriptifs
- ✅ Rédigez des descriptions complètes
- ✅ Ajoutez des mots-clés pertinents
- ✅ Actualisez le contenu régulièrement

---

## 📞 Support technique

En cas de problème technique non résolu, contactez :

**Développeur** : [Votre email]
**GitHub Issues** : [Lien vers le repository]

---

## 📝 Changelog

### Version 1.0 (2025)
- ✅ Interface CMS complète
- ✅ Gestion des services
- ✅ Gestion des réalisations
- ✅ Gestion des avis clients
- ✅ Upload d'images
- ✅ Authentification GitHub

---

**Dernière mise à jour** : Octobre 2025
