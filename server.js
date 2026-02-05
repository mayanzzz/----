/**
 * 苍鹭之影 — 本地服务
 * 从 .env 读取 OPENROUTER_API_KEY，前端通过 /env 获取
 */
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });
const env = process.env;
const PORT = Number(process.env.PORT) || 3340;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  if (req.url === '/env' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ OPENROUTER_API_KEY: env.OPENROUTER_API_KEY || '' }));
    return;
  }

  let file = req.url === '/' ? '/index.html' : req.url;
  file = path.join(__dirname, file.split('?')[0]);
  if (!path.resolve(file).startsWith(__dirname)) {
    res.writeHead(403);
    res.end();
    return;
  }
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404);
    res.end('Not Found');
    return;
  }
  const ext = path.extname(file);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

server.listen(PORT, () => {
  console.log(`苍鹭之影 http://localhost:${PORT}`);
  console.log('请打开: http://localhost:' + PORT + '/ai_studio_code%20(52).html');
});
