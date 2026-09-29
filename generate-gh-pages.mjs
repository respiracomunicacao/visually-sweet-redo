import fs from 'node:fs';
import path from 'node:path';

const repoBase = '/visually-sweet-redo';
const routes = [
  { path: '/', file: 'index.html' },
  { path: '/quem-somos', file: 'quem-somos/index.html' },
  { path: '/solucoes', file: 'solucoes/index.html' },
  { path: '/equipe', file: 'equipe/index.html' },
  { path: '/novidades', file: 'novidades/index.html' },
  { path: '/contato', file: 'contato/index.html' },
];

async function run() {
  const distDir = path.join(process.cwd(), 'dist-gh-pages');
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  const publicDir = path.join(process.cwd(), '.output', 'public');
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, distDir, { recursive: true });
  }

  // Create .nojekyll
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

  for (const r of routes) {
    const res = await fetch('http://127.0.0.1:3001' + r.path);
    if (!res.ok) {
      console.error(`Failed to fetch ${r.path}: ${res.status}`);
      continue;
    }
    let html = await res.text();

    // Adjust absolute paths for GitHub Pages base path
    html = html.replaceAll('href="/', `href="${repoBase}/`);
    html = html.replaceAll('src="/', `src="${repoBase}/`);
    html = html.replaceAll('href=\\"/', `href=\\"${repoBase}/`);
    html = html.replaceAll('src=\\"/', `src=\\"${repoBase}/`);

    const outPath = path.join(distDir, r.file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf-8');
    console.log(`Generated: ${r.file}`);
  }

  // SPA fallback 404.html
  const mainHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  fs.writeFileSync(path.join(distDir, '404.html'), mainHtml, 'utf-8');
  console.log('Generated: 404.html');
}

run();
