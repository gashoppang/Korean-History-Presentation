import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { stripTypeScriptTypes } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const [source, styles] = await Promise.all([
  readFile(path.join(root, 'src', 'main.ts'), 'utf8'),
  readFile(path.join(root, 'src', 'styles.css'), 'utf8')
]);

const js = stripTypeScriptTypes(source);

await Promise.all([
  writeFile(path.join(dist, 'main.js'), js, 'utf8'),
  writeFile(path.join(dist, 'styles.css'), styles, 'utf8')
]);

console.log('Built dist/main.js and dist/styles.css');
