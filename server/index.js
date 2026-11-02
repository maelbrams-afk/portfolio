const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_DIST = path.join(__dirname, '..', 'client', 'dist');

// Autorise le navigateur à appeler l'API, puis active la lecture du JSON.
app.use(cors());
app.use(express.json());

// Petit endpoint de diagnostic pour vérifier que le serveur répond.
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API Node.js active' });
});

// En production, Express sert les fichiers générés par Vite.
app.use(express.static(CLIENT_DIST));

// Renvoie la page du portfolio pour les autres adresses de l'application.
app.get('*', (req, res) => {
  res.sendFile(path.join(CLIENT_DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur Node.js démarré sur http://localhost:${PORT}`);
});
