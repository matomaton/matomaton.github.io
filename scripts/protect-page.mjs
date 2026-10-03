// Encrypts a readable page from _src/ into PROTO/ with StatiCrypt.
//
// Usage (Git Bash):
//   STATICRYPT_PASSWORD='...' node scripts/protect-page.mjs _src/tripPlaner.html "Itinerary Builder"
//
// - Local images (src="images/...") are inlined as data URIs first, so
//   nothing readable is published alongside the encrypted page.
// - Uses the same salt and lock-screen styling as PROTO/chatbot-recommendations.html,
//   so "Remember me" on one protected page unlocks the others.
// - The password is read from STATICRYPT_PASSWORD and never written to disk.

import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { dirname, join, basename, extname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';

const SALT = '7e98a29110b72cbea1c72b6f7d60b1d5';
const OUT_DIR = 'PROTO';
const MIME = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml' };

const [src, label = 'this page'] = process.argv.slice(2);
const password = process.env.STATICRYPT_PASSWORD;
if (!src || !password) {
  console.error('Usage: STATICRYPT_PASSWORD=... node scripts/protect-page.mjs <_src/file.html> ["Page name"]');
  process.exit(1);
}

const srcDir = dirname(resolve(src));
let html = readFileSync(src, 'utf8');

// Inline local images
let inlined = 0;
html = html.replace(/src="(images\/[^"]+)"/g, (m, rel) => {
  const type = MIME[extname(rel).toLowerCase()];
  if (!type) return m;
  inlined++;
  return `src="data:${type};base64,${readFileSync(join(srcDir, rel)).toString('base64')}"`;
});

const tmp = mkdtempSync(join(tmpdir(), 'protect-'));
const tmpFile = join(tmp, basename(src));
writeFileSync(tmpFile, html);

// npx needs a shell on Windows, so quote args that contain spaces
const win = process.platform === 'win32';
const q = (a) => (win && /[\s&|<>^]/.test(a) ? `"${a}"` : a);

try {
  execFileSync('npx', [
    '-y', 'staticrypt', tmpFile,
    '-p', password,
    '-s', SALT,
    '-d', OUT_DIR,
    '--config', 'false',
    '--remember', '30',
    '--template-title', 'Protected case study',
    '--template-instructions', `${label} is shared privately. Enter the password you were given.`,
    '--template-button', 'View case study',
    '--template-color-primary', '#4A4A4A',
    '--template-color-secondary', '#FCFCF9',
  ].map(q), { stdio: 'inherit', shell: win });
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

// Match the chatbot prototype: noindex + Lato on the lock screen
const out = join(OUT_DIR, basename(src));
const enc = readFileSync(out, 'utf8').replace('<head>',
  '<head>\n<meta name="robots" content="noindex, nofollow">\n' +
  '<style>body,input,button{font-family:"Lato",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif !important}</style>');
writeFileSync(out, enc);

console.log(`Encrypted ${src} -> ${out} (${inlined} images inlined)`);
