import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Windows absolute path for file:// protocol
    let htmlPath = path.join(__dirname, 'export', 'portfolio_export.html');
    htmlPath = 'file:///' + htmlPath.replace(/\\/g, '/');
    
    console.log(`Loading HTML from: ${htmlPath}`);
    await page.goto(htmlPath, { waitUntil: 'networkidle0' });
    
    const outputPath = path.join(__dirname, 'export', 'portfolio_final.pdf');
    console.log(`Saving PDF to: ${outputPath}`);
    
    await page.pdf({
      path: outputPath,
      format: 'A4',
      landscape: true,
      printBackground: true
    });
    
    await browser.close();
    console.log('PDF successfully generated!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
