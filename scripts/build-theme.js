#!/usr/bin/env node
/**
 * Builds a theme asset package from theme.config.json
 * Output: output/<theme-name>/ folder ready for APK integration
 */

import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const config = JSON.parse(readFileSync(resolve(root, 'theme.config.json'), 'utf-8'));
const slug = config.name.toLowerCase().replace(/\s+/g, '-');
const outDir = resolve(root, 'output', slug);

mkdirSync(outDir, { recursive: true });
mkdirSync(resolve(outDir, 'wallpapers', 'day'), { recursive: true });
mkdirSync(resolve(outDir, 'wallpapers', 'night'), { recursive: true });
mkdirSync(resolve(outDir, 'drawable'), { recursive: true });
mkdirSync(resolve(outDir, 'colors'), { recursive: true });

writeFileSync(resolve(outDir, 'theme.config.json'), JSON.stringify(config, null, 2));

const colorsXml = generateColorsXml(config.colors);
writeFileSync(resolve(outDir, 'colors', 'theme_colors.xml'), colorsXml);

const readme = generateReadme(config);
writeFileSync(resolve(outDir, 'INSTALL.md'), readme);

const assetsDir = resolve(root, 'assets');
if (existsSync(assetsDir)) {
  cpSync(assetsDir, resolve(outDir, 'assets'), { recursive: true, force: true });
}

console.log(`\n✅ Theme package built: output/${slug}/`);
console.log(`   Name: ${config.name} (${config.nameAr || ''})`);
console.log(`   Resolution: ${config.target?.resolution || '1920x720'}`);
console.log(`\n📁 Contents:`);
console.log(`   - theme.config.json`);
console.log(`   - colors/theme_colors.xml  (for Android res/values/)`);
console.log(`   - wallpapers/day/ & wallpapers/night/`);
console.log(`   - INSTALL.md`);
console.log(`\n💡 Next: Replace wallpapers and integrate with your FYT launcher APK.\n`);

function generateColorsXml(colors) {
  const entries = Object.entries(colors)
    .map(([key, value]) => {
      const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      return `    <color name="theme_${snakeKey}">${value}</color>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- FYT Theme: ${config.name} -->
${entries}
</resources>
`;
}

function generateReadme(config) {
  return `# ${config.name} — FYT Theme

## التثبيت / Installation

### الطريقة 1: عبر Launcher66 (Modded)
1. حمّل Launcher66 من: https://github.com/vasyl91/FYT-Launcher-Mod
2. فك APK بـ apktool: \`apktool d launcher66.apk\`
3. استبدل الخلفيات في \`res/drawable/\` بصور من مجلد wallpapers/
4. أضف colors/theme_colors.xml إلى \`res/values/\`
5. أعد بناء وتوقيع APK
6. ثبّت عبر USB (FAT32) أو updater المدمج

### الطريقة 2: FYT Factory
1. اذهب إلى https://fytfactory.mariodantas.com
2. اختر Launcher مناسب لدقتك
3. حمّل installer ZIP
4. استبدل الموارد داخل APK قبل التثبيت

### الطريقة 3: خلفيات فقط
1. افتح إعدادات Launcher66 > Night Mode
2. اختر wallpaper picker
3. حدّد صور day/night من هذا المجلد

## المواصفات
- Platform: FYT (${(config.target?.chipsets || []).join(', ')})
- Resolution: ${config.target?.resolution || '1920x720'}
- Version: ${config.version || '1.0.0'}
`;
}
