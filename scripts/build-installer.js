#!/usr/bin/env node
/**
 * Builds FYT installer ZIP — same structure as launcher17 installers
 * Uses your existing launcher APK + theme overlay config
 */

import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const outDir = resolve(root, 'output', 'installer');

const config = JSON.parse(readFileSync(resolve(root, 'theme.config.json'), 'utf-8'));

const LAUNCHER_ZIP = resolve(root, '190001020_com.android.launcher17_installer.zip');
const LAUNCHER_FALLBACK = resolve(root, '_analysis/launcher17_020');
const LAUNCHER_ID = '190001020_com.android.launcher17';

mkdirSync(outDir, { recursive: true });

// Prepare base installer (ZIP or extracted analysis folder)
const tmpDir = resolve(outDir, '_tmp');
execSync(`rm -rf "${tmpDir}" && mkdir -p "${tmpDir}"`);

if (existsSync(LAUNCHER_ZIP)) {
  try {
    execSync(`unzip -qo "${LAUNCHER_ZIP}" -d "${tmpDir}"`, { stdio: 'pipe' });
  } catch {
    // macOS unzip exits 1 on absolute-path warnings but still extracts
    if (!existsSync(resolve(tmpDir, 'lsec6315update'))) {
      throw new Error(`Failed to extract launcher installer ZIP: ${LAUNCHER_ZIP}`);
    }
  }
} else if (existsSync(resolve(LAUNCHER_FALLBACK, 'lsec6315update'))) {
  cpSync(LAUNCHER_FALLBACK, tmpDir, { recursive: true });
} else {
  throw new Error(
    'Launcher installer source not found.\n' +
    `  Expected ZIP: ${LAUNCHER_ZIP}\n` +
    `  Or folder:    ${LAUNCHER_FALLBACK}\n` +
    '  Place the FYT launcher17 installer ZIP in the project root, or keep the extracted _analysis/launcher17_020 folder.'
  );
}

// Write theme overlay config into launcher folder
const launcherDir = resolve(tmpDir, 'launcher', LAUNCHER_ID);
mkdirSync(launcherDir, { recursive: true });

writeFileSync(resolve(launcherDir, 'theme_overlay.json'), JSON.stringify({
  ...config,
  sysProps: {
    'sys.lsec.pip_rect': `${config.layout.pipRect.x} ${config.layout.pipRect.y} ${config.layout.pipRect.x + config.layout.pipRect.w} ${config.layout.pipRect.y + config.layout.pipRect.h}`,
    'persist.lsec.pip_pkg': config.pip?.package || 'com.zjin.zlink',
  },
  canbus: {
    package: 'com.syu.canbus',
    widgets: ['CUR_SPEED', 'C_SHOW_DOOR_WINDOW', 'C_AMBIENT_LIGHT', 'C_SHOW_AIR_WINDOW'],
  },
}, null, 2));

// Copy wallpaper assets if exist
const wp = resolve(root, 'assets/wallpapers/night/wallpaper.png');
if (existsSync(wp)) {
  cpSync(wp, resolve(launcherDir, 'wallpaper_overlay.png'));
}

// Create output zip
const zipName = `ios_carplay_${LAUNCHER_ID}_installer.zip`;
const zipPath = resolve(root, 'output', zipName);
execSync(`cd "${tmpDir}" && zip -qr "${zipPath}" .`);
execSync(`rm -rf "${tmpDir}"`);

console.log(`\n✅ FYT Installer built: output/${zipName}`);
console.log(`   Structure: same as launcher17 installer`);
console.log(`   PiP rect: sys.lsec.pip_rect`);
console.log(`   ZLink pkg: ${config.pip?.package}`);
console.log(`\n📋 Install: copy ZIP to FAT32 USB → plug into FYT head unit\n`);
