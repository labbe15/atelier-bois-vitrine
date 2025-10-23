# 🔧 Configuration du CMS - Guide d'installation

Ce guide explique comment configurer le CMS pour permettre à votre client de modifier le contenu du site.

---

## ⚠️ PRÉREQUIS

Le CMS nécessite :
- ✅ Un compte GitHub (pour l'authentification)
- ✅ Accès au repository GitHub `labbe15/atelier-bois-vitrine`
- ✅ Accès au projet Vercel

**Temps nécessaire** : 10-15 minutes

---

## 🚀 ÉTAPE 1 : Créer une GitHub OAuth App

### 1.1 Accéder aux paramètres développeur GitHub

1. Connectez-vous sur **GitHub.com**
2. Cliquez sur votre **avatar** en haut à droite
3. Allez dans **Settings**
4. Dans le menu de gauche, tout en bas : **Developer settings**
5. Cliquez sur **OAuth Apps**
6. Cliquez sur **New OAuth App**

**URL directe** : https://github.com/settings/developers

---

### 1.2 Remplir le formulaire OAuth App

Remplissez le formulaire avec ces informations **EXACTES** :

| Champ | Valeur à mettre |
|-------|-----------------|
| **Application name** | `Atelier du Volcan CMS` |
| **Homepage URL** | `https://atelier-bois-vitrine.vercel.app` |
| **Application description** | `CMS pour le site L'Atelier du Volcan` *(optionnel)* |
| **Authorization callback URL** | `https://atelier-bois-vitrine.vercel.app/api/callback` |

⚠️ **ATTENTION** : L'URL de callback doit se terminer par `/api/callback` exactement !

---

### 1.3 Récupérer les identifiants

1. Cliquez sur **Register application**
2. Vous verrez le **Client ID** (exemple : `Iv1.a1b2c3d4e5f6g7h8`)
3. Cliquez sur **Generate a new client secret**
4. **COPIEZ IMMÉDIATEMENT** le **Client Secret** (exemple : `ghp_xyz789abc123...`)

⚠️ **TRÈS IMPORTANT** :
- Copiez le Client Secret dans un fichier texte temporaire
- Vous ne pourrez JAMAIS le revoir après avoir quitté cette page !
- Si vous le perdez, il faudra en regénérer un nouveau

---

## 🔐 ÉTAPE 2 : Configurer les variables d'environnement Vercel

### 2.1 Accéder aux paramètres Vercel

1. Allez sur **Vercel.com** et connectez-vous
2. Sélectionnez le projet **atelier-bois-vitrine**
3. Cliquez sur **Settings** (onglet en haut)
4. Dans le menu de gauche, cliquez sur **Environment Variables**

**URL directe** : https://vercel.com/labbe15/atelier-bois-vitrine/settings/environment-variables

---

### 2.2 Ajouter les 4 variables d'environnement

Ajoutez **une par une** ces 4 variables :

#### Variable 1 : OAUTH_CLIENT_ID
```
Name:  OAUTH_CLIENT_ID
Value: [Votre Client ID de GitHub]  (ex: Iv1.a1b2c3d4e5f6g7h8)
Environment: Production, Preview, Development (cochez les 3)
```

#### Variable 2 : OAUTH_CLIENT_SECRET
```
Name:  OAUTH_CLIENT_SECRET
Value: [Votre Client Secret de GitHub]  (ex: ghp_xyz789abc123...)
Environment: Production, Preview, Development (cochez les 3)
```

#### Variable 3 : COMPLETE_URL
```
Name:  COMPLETE_URL
Value: https://atelier-bois-vitrine.vercel.app/api/callback
Environment: Production, Preview, Development (cochez les 3)
```

#### Variable 4 : ORIGIN
```
Name:  ORIGIN
Value: atelier-bois-vitrine.vercel.app
Environment: Production, Preview, Development (cochez les 3)
```

⚠️ **ATTENTION** :
- `COMPLETE_URL` : avec `https://`
- `ORIGIN` : SANS `https://`

---

### 2.3 Redéployer le site

Après avoir ajouté les 4 variables :

1. Allez dans l'onglet **Deployments**
2. Sur le dernier déploiement, cliquez sur les **3 points** (...)
3. Cliquez sur **Redeploy**
4. Cliquez sur **Redeploy** (confirmation)
5. Attendez 2-3 minutes que le déploiement se termine

---

## 👤 ÉTAPE 3 : Donner accès à votre client

Votre client doit avoir accès au repository GitHub pour pouvoir utiliser le CMS.

### Option A : Ajouter votre client comme collaborateur (RECOMMANDÉ)

1. Allez sur le repository GitHub : https://github.com/labbe15/atelier-bois-vitrine
2. Cliquez sur **Settings** (du repository)
3. Dans le menu de gauche : **Collaborators and teams**
4. Cliquez sur **Add people**
5. Entrez le **nom d'utilisateur GitHub** de votre client
6. Sélectionnez le rôle **Write** (pour qu'il puisse modifier les fichiers)
7. Cliquez sur **Add**

Votre client recevra un email d'invitation qu'il devra accepter.

### Option B : Utiliser votre compte

Si votre client n'a pas de compte GitHub ou ne veut pas en créer :
- Vous pouvez lui donner vos identifiants GitHub
- **ATTENTION** : Moins sécurisé, il aura accès à tout votre compte GitHub !

### Option C : Créer un compte GitHub pour votre client

1. Créez un nouveau compte GitHub avec l'email de votre client
2. Ajoutez ce compte comme collaborateur (Option A)
3. Donnez les identifiants à votre client

---

## ✅ ÉTAPE 4 : Tester le CMS

### 4.1 Accéder au CMS

1. Allez sur **https://atelier-bois-vitrine.vercel.app/admin/**
2. Vous devriez voir une interface avec un bouton **"Login with GitHub"**

### 4.2 Se connecter

1. Cliquez sur **Login with GitHub**
2. Si c'est la première fois, GitHub demandera d'autoriser l'application
3. Cliquez sur **Authorize [votre nom d'application]**
4. Vous serez redirigé vers l'interface du CMS

### 4.3 Faire un test

1. Dans le menu de gauche, cliquez sur **Page d'accueil**
2. Cliquez sur **Contenu principal**
3. Modifiez le **Titre principal** (ex: "TEST L'Atelier du Volcan")
4. Cliquez sur **Publish** en haut à droite
5. Attendez 2-3 minutes
6. Rafraîchissez la page d'accueil du site
7. Le titre devrait être modifié !
8. Remettez le titre original et republiez

---

## 🔍 DÉPANNAGE

### ❌ "Error: Failed to load config.yml"
**Cause** : Le fichier de configuration CMS n'est pas accessible
**Solution** : Vérifiez que le fichier `/public/admin/config.yml` existe

### ❌ "Error: Authentication failed"
**Causes possibles** :
1. Les variables d'environnement Vercel ne sont pas correctes
2. L'OAuth App GitHub n'est pas bien configurée
3. L'URL de callback ne correspond pas

**Solutions** :
1. Vérifiez les 4 variables d'environnement sur Vercel
2. Vérifiez l'URL de callback dans GitHub OAuth App
3. Redéployez le site après avoir modifié les variables

### ❌ "Error: Not authorized"
**Cause** : L'utilisateur n'a pas accès au repository GitHub
**Solution** : Ajoutez l'utilisateur comme collaborateur (voir Étape 3)

### ❌ Le bouton "Publish" ne fait rien
**Cause** : Conflit Git ou branche non à jour
**Solution** :
1. Allez sur GitHub
2. Vérifiez qu'il n'y a pas de conflits
3. Essayez de modifier un autre contenu

### ❌ Les modifications n'apparaissent pas sur le site
**Causes possibles** :
1. Le déploiement Vercel a échoué
2. Cache du navigateur
3. Les modifications sont sur une autre branche

**Solutions** :
1. Vérifiez les déploiements sur Vercel
2. Videz le cache (Ctrl+Shift+R)
3. Vérifiez que la branche dans `config.yml` est `main`

---

## 📚 RESSOURCES

- **Documentation Decap CMS** : https://decapcms.org/docs/intro/
- **Documentation GitHub OAuth** : https://docs.github.com/en/apps/oauth-apps
- **Support Vercel** : https://vercel.com/docs

---

## 📧 BESOIN D'AIDE ?

Si vous rencontrez des problèmes :

1. Vérifiez que toutes les étapes ont été suivies exactement
2. Consultez la section Dépannage ci-dessus
3. Vérifiez les logs de déploiement sur Vercel
4. Contactez le support technique

---

## ✅ CHECKLIST FINALE

Avant de donner l'accès à votre client, vérifiez que :

- [ ] GitHub OAuth App créée
- [ ] Client ID et Client Secret récupérés
- [ ] 4 variables d'environnement ajoutées sur Vercel
- [ ] Site redéployé après ajout des variables
- [ ] Client ajouté comme collaborateur sur GitHub
- [ ] Test de connexion au CMS réussi
- [ ] Test de modification de contenu réussi
- [ ] Guide utilisateur (`ADMIN_GUIDE.md`) fourni au client

---

**Dernière mise à jour** : Octobre 2025
**Version** : 1.0
