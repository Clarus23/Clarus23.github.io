import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const htmlPath = join(__dirname, 'portfolio.html');
let html = readFileSync(htmlPath, 'utf-8');

// src="..." 패턴을 찾아 파일이면 Base64로 교체
html = html.replace(/src="([^"]+)"/g, (match, src) => {
  if (src.startsWith('http') || src.startsWith('data:')) return match;

  const imgPath = join(__dirname, src);
  if (!existsSync(imgPath)) {
    console.warn('파일 없음, 건너뜀:', imgPath);
    return match;
  }

  const ext = extname(src).slice(1).toLowerCase();
  const mimeMap = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif', svg: 'image/svg+xml', webp: 'image/webp' };
  const mime = mimeMap[ext] || 'image/png';
  const b64 = readFileSync(imgPath).toString('base64');
  console.log(`임베드: ${src} (${mime})`);
  return `src="data:${mime};base64,${b64}"`;
});

const outPath = join(__dirname, 'portfolio_print.html');
writeFileSync(outPath, html, 'utf-8');
console.log('\n완료! 생성된 파일:', outPath);
console.log('브라우저로 열고 Ctrl+P → PDF로 저장하세요.');
