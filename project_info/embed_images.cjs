const fs = require('fs');
const path = require('path');

const dir = path.dirname(__filename);
const htmlPath = path.join(dir, 'portfolio.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

const mimeMap = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg',
  png: 'image/png', gif: 'image/gif', webp: 'image/webp'
};

let count = 0;
html = html.replace(/src="([^"]+)"/g, function(match, src) {
  if (src.startsWith('http') || src.startsWith('data:')) return match;
  
  var imgPath = path.join(dir, src);
  var exists = fs.existsSync(imgPath);
  console.log('체크:', src, '→', exists ? '있음' : '없음 (' + imgPath + ')');
  
  if (!exists) return match;
  
  var ext = path.extname(src).slice(1).toLowerCase();
  var mime = mimeMap[ext] || 'image/png';
  var b64 = fs.readFileSync(imgPath).toString('base64');
  count++;
  console.log('  임베드 완료:', src);
  return 'src="data:' + mime + ';base64,' + b64 + '"';
});

var outPath = path.join(dir, 'portfolio_print.html');
fs.writeFileSync(outPath, html, 'utf-8');
console.log('\n총', count, '개 이미지 임베드 완료 →', outPath);
