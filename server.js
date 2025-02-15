const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
const apiProxy = httpProxy.createProxyServer();
const PORT = process.env.PORT || 4200;

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/apps/recipe-app/browser')));

app.get("/api/*", function(req, res){ 
  apiProxy.web(req, res, { target: 'http://localhost:3000/' });
});

// Handle fallback for Angular routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/apps/recipe-app/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`Angular app is running at http://localhost:${PORT}`);
});
