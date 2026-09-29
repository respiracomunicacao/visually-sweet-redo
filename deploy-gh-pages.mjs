import { execSync } from 'node:child_process';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist-gh-pages');

console.log('Initializing git in dist-gh-pages...');
execSync('git init', { cwd: dist, stdio: 'inherit' });
execSync('git config user.name "respiracomunicacao"', { cwd: dist, stdio: 'inherit' });
execSync('git config user.email "contato@respiracomunicacao.com.br"', { cwd: dist, stdio: 'inherit' });
execSync('git checkout -B gh-pages', { cwd: dist, stdio: 'inherit' });
execSync('git add -A', { cwd: dist, stdio: 'inherit' });
execSync('git commit -m "Deploy to GitHub Pages"', { cwd: dist, stdio: 'inherit' });

const remote = execSync('git remote get-url origin', { cwd: process.cwd() }).toString().trim();
console.log('Remote configured, pushing to gh-pages branch...');

try {
  execSync('git remote remove origin', { cwd: dist, stdio: 'ignore' });
} catch {}

execSync(`git remote add origin ${remote}`, { cwd: dist, stdio: 'inherit' });
execSync('git push -f origin gh-pages', { cwd: dist, stdio: 'inherit' });

console.log('Deploy to gh-pages completed successfully!');
