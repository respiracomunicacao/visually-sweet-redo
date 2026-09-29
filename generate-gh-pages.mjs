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

  // In the assets JS chunks, ensure dynamic chunk map has repoBase prefixed
  const assetsDir = path.join(distDir, 'assets');
  if (fs.existsSync(assetsDir)) {
    const assetFiles = fs.readdirSync(assetsDir);
    for (const file of assetFiles) {
      if (file.endsWith('.js')) {
        const filePath = path.join(assetsDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        // Replace relative asset loading like ["assets/..." with ["/visually-sweet-redo/assets/...
        // or "/assets/..." with "/visually-sweet-redo/assets/..."
        let updated = content
          .replaceAll('"assets/', `"${repoBase}/assets/`)
          .replaceAll("'/assets/", `'${repoBase}/assets/`)
          .replaceAll('"/assets/', `"${repoBase}/assets/`);

        // TanStack Start client hydration resets basepath via e.update({basepath: ""})
        // On GitHub Pages subpath (/visually-sweet-redo), resetting basepath to "" breaks route matching and causes NotFoundComponent ("Ops, algo deu errado" / 404 blink)
        updated = updated.replaceAll(
          'basepath:""',
          `basepath:window.location.pathname.startsWith("${repoBase}")?"${repoBase}":""`
        );
        updated = updated.replaceAll(
          'basepath:``',
          `basepath:window.location.pathname.startsWith("${repoBase}")?"${repoBase}":""`
        );

        // Fix Vite dynamic chunk preloader: jl=function(e){return"/"+e} -> prepending repoBase
        updated = updated.replaceAll(
          'jl=function(e){return"/"+e}',
          `jl=function(e){return"${repoBase}/"+e}`
        );

        if (updated !== content) {
          fs.writeFileSync(filePath, updated, 'utf-8');
          console.log(`Updated paths in JS chunk: ${file}`);
        }
      }
    }
  }

  // Load the built server module for true production HTML with compiled CSS & JS bundles
  const serverMod = await import('./.output/server/index.mjs');

  for (const r of routes) {
    const req = new Request('http://localhost' + r.path);
    const res = await serverMod.default.fetch(req, {
      ASSETS: { fetch: () => new Response('asset') }
    });

    if (!res.ok) {
      console.error(`Failed to SSR ${r.path}: ${res.status}`);
      continue;
    }
    let html = await res.text();

    // Adjust absolute paths for GitHub Pages base path: /visually-sweet-redo/
    html = html.replaceAll('href="/', `href="${repoBase}/`);
    html = html.replaceAll('src="/', `src="${repoBase}/`);
    html = html.replaceAll('href=\\"/', `href=\\"${repoBase}/`);
    html = html.replaceAll('src=\\"/', `src=\\"${repoBase}/`);
    // Fix manifest preload and script paths inside TSR router stream barrier: ["/assets/... -> ["/visually-sweet-redo/assets/...
    html = html.replaceAll('"/assets/', `"${repoBase}/assets/`);

    const outPath = path.join(distDir, r.file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf-8');
    console.log(`Generated production static HTML: ${r.file}`);
  }

  // SPA fallback 404.html
  const mainHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  fs.writeFileSync(path.join(distDir, '404.html'), mainHtml, 'utf-8');
  console.log('Generated: 404.html');
}

run();
