const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs');

const app = express();
const PORT = 8080;
const publicPath = path.join(__dirname, 'public_html');

// Middleware de compresión de respuestas
app.use(compression());

// Configuración de la caché para archivos estáticos
const oneYear = 31557600000; // 1 año en milisegundos
app.use(express.static(publicPath, { maxAge: oneYear }));

let server;

// Intentar crear un servidor HTTP/2 seguro si se encuentran los archivos de certificado
const certPath = 'server.crt';
const keyPath = 'server.key';

if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  const http2 = require('http2');
  const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  };
  server = http2.createSecureServer(options, app);
  console.log(`Servidor HTTP/2 está corriendo en https://localhost:${PORT}`);
} else {
  // Si no se encuentran los archivos de certificado, usar un servidor HTTP estándar
  server = app.listen(PORT, () => {
    console.log(`Servidor HTTP está corriendo en http://localhost:${PORT}`);
  });
}
