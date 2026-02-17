import fs from 'fs';
const content = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Clarus23.github.io/',
})
`;
fs.writeFileSync('vite.config.js', content, 'utf8');
console.log('Fixed vite.config.js');
