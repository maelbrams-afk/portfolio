# Guide de lecture du projet

Ce projet contient un portfolio React et un serveur Node.js avec une route de vérification.

## Lancer le projet

Dans PowerShell, ouvre le dossier du projet (celui qui contient ce guide et le `package.json` principal), puis lance :

```powershell
npm.cmd run dev
```

Le portfolio est disponible sur `http://localhost:5173/`. Le serveur Node.js écoute sur le port `3001`.

Pour créer la version de production du client :

```powershell
npm.cmd --workspace client run build
```

## Où modifier le code ?

- `client/src/App.jsx` : contenu et structure du portfolio.
- `client/src/styles.css` : apparence du portfolio.
- `client/index.html` et `client/src/main.jsx` : page et point d'entrée du portfolio.
- `client/vite.config.js` : configuration du serveur de développement et du build.
- `server/index.js` : serveur Express, route `/api/health` et fichiers servis en production.
- `package.json` : commandes communes qui démarrent le client et le serveur ensemble.

Le dépôt ne contient pas les médias du jeu ni les captures associées.

## Modifier l'apparence

Dans un fichier CSS, un sélecteur comme `.about-section` vise les éléments qui portent `className="about-section"` dans React. Les valeurs commençant par `--` sont des variables CSS ; `var(--nom)` réutilise leur valeur. Les règles placées dans `@media` s'appliquent à certaines tailles d'écran ou préférences du navigateur.

Quand tu modifies une règle, commence par rechercher le nom de classe dans le JSX, puis change la règle correspondante dans la feuille CSS associée à la page.
