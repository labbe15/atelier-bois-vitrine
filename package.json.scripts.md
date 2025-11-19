# Scripts à ajouter dans package.json

Ajoutez ces scripts dans la section "scripts" de votre `package.json` :

```json
"scripts": {
  "dev": "vite --host 127.0.0.1",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview",
  "sanity:dev": "sanity dev",
  "sanity:deploy": "sanity deploy",
  "sanity:start": "sanity start"
}
```

Ensuite vous pourrez lancer :
- `npm run sanity:dev` - Démarre Sanity Studio localement
- `npm run sanity:deploy` - Déploie Sanity Studio en ligne
