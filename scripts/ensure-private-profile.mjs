import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const privateFile = join(root, 'src/app/core/data/profile.private.ts');
const exampleFile = join(root, 'src/app/core/data/profile.private.example.ts');

if (!existsSync(privateFile)) {
  copyFileSync(exampleFile, privateFile);
  console.log('Created profile.private.ts from example — add your personal details.');
}
