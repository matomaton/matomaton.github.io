// Encrypts a readable page from _src/<FOLDER>/ into <FOLDER>/ with StatiCrypt
// (pages directly in _src/ go to PROTO/).
//
// Usage (Git Bash):
//   STATICRYPT_PASSWORD='...' node scripts/protect-page.mjs _src/tripPlaner.html "Itinerary Builder"
//   STATICRYPT_PASSWORD='...' node scripts/protect-page.mjs _src/PROTO/foo.html "This prototype" prototype
//
// - Local images (src="images/..." or "assets/...") are inlined as data URIs first, so
//   nothing readable is published alongside the encrypted page.
// - Uses the same salt and lock-screen styling as PROTO/chatbot-recommendations.html,
//   so "Remember me" on one protected page unlocks the others.
// - The password is read from STATICRYPT_PASSWORD and never written to disk.

import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { dirname, join, basename, extname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';

// One salt (and password) per protected folder. Pages sharing a salt share "Remember me";
// a different salt keeps that folder's unlock separate. Salts aren't secret.
const FOLDERS = {
  PROTO: { salt: '7e98a29110b72cbea1c72b6f7d60b1d5', kind: 'prototype' },
  WORK:  { salt: 'de6c3178f45c2ad8850a345db40c38c5', kind: 'case study' },
};
const MIME = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml' };

const [src, labelArg, kindArg] = process.argv.slice(2);
const password = process.env.STATICRYPT_PASSWORD;
if (!src || !password) {
  console.error('Usage: STATICRYPT_PASSWORD=... node scripts/protect-page.mjs <_src/[FOLDER/]file.html> ["Page name"] [kind]');
  process.exit(1);
}

// _src/<FOLDER>/x.html -> <FOLDER>/x.html; files directly in _src/ go to PROTO/
const srcDir = dirname(resolve(src));
const parent = basename(srcDir);
const OUT_DIR = parent === '_src' ? 'PROTO' : parent;
if (!FOLDERS[OUT_DIR]) {
  console.error(`Unknown folder "${OUT_DIR}". Add it to FOLDERS in scripts/protect-page.mjs.`);
  process.exit(1);
}
const SALT = FOLDERS[OUT_DIR].salt;
const kind = kindArg ?? (parent === '_src' ? 'case study' : FOLDERS[OUT_DIR].kind);
const label = labelArg ?? `This ${kind}`;
let html = readFileSync(src, 'utf8');

// Inline local images
let inlined = 0;
html = html.replace(/src="((?:images|assets)\/[^"]+)"/g, (m, rel) => {
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
    '--template-title', `Protected ${kind}`,
    '--template-instructions', `${label} is shared privately. Enter the password you were given.`,
    '--template-button', `View ${kind}`,
    '--template-color-primary', '#4A4A4A',
    '--template-color-secondary', '#FCFCF9',
  ].map(q), { stdio: 'inherit', shell: win });
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

// Match the chatbot prototype: noindex + Lato on the lock screen
const out = join(OUT_DIR, basename(src));
let enc = readFileSync(out, 'utf8');
// StatiCrypt exits 0 even when you decline its short-password prompt
if (!enc.includes(SALT)) {
  console.error(`Not encrypted: ${out} is unchanged. (Short password? Answer "y" at the prompt.)`);
  process.exit(1);
}
enc = enc.replace('<head>',
  '<head>\n<meta name="robots" content="noindex, nofollow">\n' +
  '<style>body,input,button{font-family:"Lato",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif !important}</style>');
writeFileSync(out, enc);

console.log(`Encrypted ${src} -> ${out} (${inlined} images inlined)`);
