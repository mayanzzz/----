/**
 * 从 .env 读取 OPENROUTER_API_KEY，生成「打开苍鹭之影.html」供直接双击打开
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '.env');
const srcPath = path.join(__dirname, 'ai_studio_code (52).html');
const outPath = path.join(__dirname, '打开苍鹭之影.html');

let key = '';
if (fs.existsSync(envPath)) {
  const text = fs.readFileSync(envPath, 'utf8');
  const m = text.match(/OPENROUTER_API_KEY\s*=\s*(.+)/);
  if (m) key = m[1].replace(/^["']|["']$/g, '').trim();
}

let html = fs.readFileSync(srcPath, 'utf8');
html = html.replace('<title>Heron | Serene Soul</title>', '<title>苍鹭之影 — 直接打开</title>');
html = html.replace('<body>', '<body>\n    <script>window.OPENROUTER_API_KEY = ' + JSON.stringify(key) + ';</script>');
html = html.replace('通过 npm start 启动时自动使用 .env 中的 OPENROUTER_API_KEY', '本页已配置，直接输入对话即可。请勿分享此文件。');

fs.writeFileSync(outPath, html, 'utf8');
console.log('已生成: 打开苍鹭之影.html');
