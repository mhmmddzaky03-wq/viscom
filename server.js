import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 5173;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let relativePath = urlPath === '/' ? 'index.html' : urlPath;
  
  // Clean leading slash
  if (relativePath.startsWith('/')) {
    relativePath = relativePath.slice(1);
  }

  let filePath = path.join(DIST_DIR, relativePath);

  // If path doesn't exist, check inside public/ or dist/
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    // If requesting an asset with extension that doesn't exist, try dist/assets/
    const possibleAsset = path.join(DIST_DIR, 'assets', path.basename(relativePath));
    if (fs.existsSync(possibleAsset) && !fs.statSync(possibleAsset).isDirectory()) {
      filePath = possibleAsset;
    } else {
      // SPA Fallback: serve dist/index.html
      filePath = path.join(DIST_DIR, 'index.html');
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`BUNGKOK server running at http://localhost:${PORT}/`);
});
