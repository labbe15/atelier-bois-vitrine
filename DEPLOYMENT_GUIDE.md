# Guide de déploiement - L'Atelier du Volcan

## Configuration finale avant le lancement en production

Avant de lancer votre site en production, suivez ce guide étape par étape.

---

## 1. Configuration GitHub

### Étape 1: Créer le dépôt GitHub
1. Allez sur https://github.com/new
2. Créez un nouveau dépôt nommé `atelier-bois-vitrine` (ou similaire)
3. Clonez le dépôt en local et poussez votre code

### Étape 2: Pousser le code
```bash
git add .
git commit -m "Initial commit - site atelier du volcan"
git push origin main
```

---

## 2. Déploiement sur Vercel

### Étape 1: Connecter Vercel à GitHub
1. Allez sur https://vercel.com
2. Cliquez sur "New Project"
3. Sélectionnez votre dépôt GitHub `atelier-bois-vitrine`
4. Vercel détectera automatiquement que c'est un projet Vite

### Étape 2: Configurer les variables d'environnement

Pendant le déploiement (ou après, dans Settings > Environment Variables):

#### ✅ VARIABLES REQUISES pour le contact:
```
RESEND_API_KEY = [votre_cle_api_resend]
```

**Comment obtenir cette clé:**
1. Allez sur https://resend.com
2. Créez un compte (gratuit)
3. Allez dans Settings > API Keys
4. Créez une nouvelle clé API
5. Copiez-la dans Vercel

#### ✅ VARIABLES RECOMMANDÉES pour Google Analytics:
```
VITE_GOOGLE_ANALYTICS_ID = G-XXXXXXXXXX
```

**Comment obtenir cet ID:**
1. Allez sur https://analytics.google.com/
2. Créez une nouvelle propriété pour `atelierduvolcan.fr`
3. Récupérez l'ID au format `G-XXXXXXXXXX`
4. Copiez-le dans Vercel

#### ⚠️ VARIABLES OPTIONNELLES (CMS/Admin - si vous utilisez Netlify CMS):
```
OAUTH_CLIENT_ID = [votre_github_oauth_id]
OAUTH_CLIENT_SECRET = [votre_github_oauth_secret]
COMPLETE_URL = https://atelierduvolcan.fr
ORIGIN = https://atelierduvolcan.fr
```

**Ces variables sont nécessaires SEULEMENT si vous voulez utiliser l'admin CMS.**

---

## 3. Configuration Resend (pour les emails de contact)

### Étape 1: Valider votre domaine
1. Connectez-vous sur https://resend.com
2. Allez dans "Domains"
3. Ajoutez votre domaine `atelierduvolcan.fr`
4. Suivez les étapes de vérification DNS

### Étape 2: Configurer l'email de contact
L'email par défaut dans `api/contact.ts` est:
```
from: "L'Atelier du Volcan <onboarding@resend.dev>"
```

**En production**, mettez à jour `api/contact.ts` ligne 60:
```typescript
from: "L'Atelier du Volcan <contact@atelierduvolcan.fr>",
```

(Après avoir validé votre domaine dans Resend)

### Étape 3: Configurer l'email destinataire
Vérifiez que `contact@atelier-du-volcan.com` est correcte dans `api/contact.ts` ligne 61.

---

## 4. Configuration du domaine personnalisé

### Dans Vercel Dashboard:
1. Allez dans votre projet
2. Settings > Domains
3. Ajoutez votre domaine `atelierduvolcan.fr`
4. Suivez les instructions pour configurer les DNS chez votre registrar

---

## 5. Configuration Google Search Console

Pour améliorer le SEO et suivre votre indexation:

1. Allez sur https://search.google.com/search-console/
2. Ajoutez votre propriété `https://atelierduvolcan.fr`
3. Vérifiez la propriété (via DNS ou fichier HTML)
4. Soumettez le sitemap: `https://atelierduvolcan.fr/sitemap.xml`

---

## 6. Checklist avant le lancement

- [ ] Code poussé sur GitHub
- [ ] Projet créé sur Vercel
- [ ] `RESEND_API_KEY` configurée dans Vercel
- [ ] `VITE_GOOGLE_ANALYTICS_ID` configurée dans Vercel (optionnel mais recommandé)
- [ ] Domaine personnalisé configuré dans Vercel
- [ ] DNS mis à jour chez votre registrar
- [ ] Resend: domaine validé
- [ ] Email de contact testé (formulaire Contact)
- [ ] Google Analytics connecté (attendez 24h pour voir les données)
- [ ] Google Search Console configuré

---

## 7. Tester avant le lancement complet

### Test du formulaire de contact:
1. Allez sur https://atelierduvolcan.fr/contact
2. Remplissez et envoyez un message
3. Vérifiez que vous recevez l'email

### Test Google Analytics:
1. Allez sur https://analytics.google.com
2. Ouvrez https://atelierduvolcan.fr dans une fenêtre différente
3. Attendez quelques secondes
4. Rechargez Analytics - vous devriez voir un visiteur en temps réel

### Test de performance:
```bash
npm run build
npm run preview
```

---

## 8. Après le lancement

### Suivi recommandé:
1. **Google Analytics** - Consultez chaque semaine pour suivre les visiteurs
2. **Resend** - Vérifiez que les emails sont envoyés correctement
3. **Google Search Console** - Suivez l'indexation et les erreurs

### Maintenance:
- Mettez à jour le contenu des services régulièrement
- Ajoutez de nouvelles réalisations dans la section portfolio
- Répondez aux avis clients sur les plateformes (Google My Business, Facebook)

---

## 9. En cas de problème

### Contact form ne fonctionne pas:
- Vérifiez que `RESEND_API_KEY` est correctement configurée dans Vercel
- Vérifiez les logs dans Vercel Deployments
- Testez en local: `npm run dev`

### Images cassées:
- Les images en `/src/assets/` sont servies automatiquement par Vite
- Vérifiez que les fichiers existent et ont les bons noms (casse sensible)

### Google Analytics ne montre pas de données:
- Attendez 24h après le déploiement
- Vérifiez que `VITE_GOOGLE_ANALYTICS_ID` est correctement défini
- Ouvrez la console (F12) et cherchez les erreurs de script

---

## Support

- **Documentation Vercel**: https://vercel.com/docs
- **Documentation Resend**: https://resend.com/docs
- **Documentation Google Analytics**: https://support.google.com/analytics
