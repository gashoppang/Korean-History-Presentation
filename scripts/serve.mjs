import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requestedPort = Number(process.env.PORT || process.argv.at(-1)) || 4173;

const build = spawnSync(process.execPath, ['--disable-warning=ExperimentalWarning', 'scripts/build.mjs'], {
  cwd: root,
  stdio: 'inherit'
});

if (build.status !== 0) {
  process.exit(build.status || 1);
}

const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.svg', 'image/svg+xml; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8']
]);

const server = createServer((request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(url.pathname);
  const target = pathname === '/' ? '/index.html' : pathname;
  const normalized = normalize(target).replace(/^(\.\.[/\\])+/, '');
  const filePath = join(root, normalized);

  if (!filePath.startsWith(root + sep) && filePath !== root) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  const resolved = existsSync(filePath) && statSync(filePath).isFile() ? filePath : join(root, 'index.html');
  response.writeHead(200, { 'Content-Type': types.get(extname(resolved)) || 'application/octet-stream' });
  createReadStream(resolved).pipe(response);
});

server.listen(requestedPort, () => {
  console.log(`Korean History Presentation running at http://localhost:${requestedPort}`);
});
