/** Adaptive color engine — extracts accent from context */

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')}`;
}

function mix(a, b, t) {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  return rgbToHex(
    ca.r + (cb.r - ca.r) * t,
    ca.g + (cb.g - ca.g) * t,
    ca.b + (cb.b - ca.b) * t,
  );
}

export function buildThemeTokens(theme, context) {
  const { drivingMode, weather, trackGradient, isNight } = context;
  const base = theme.colors.primary;
  const accent = theme.colors.accent || '#7C4DFF';

  let primary = base;
  if (drivingMode.warmth > 0) {
    primary = mix(base, '#FF6B35', drivingMode.warmth * 0.4);
  }
  if (isNight) {
    primary = mix(primary, '#5E8FFF', 0.25);
  }
  if (weather === 'rain') {
    primary = mix(primary, '#64D2FF', 0.2);
  }

  const surface = isNight ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.05)';
  const glass = isNight ? 'rgba(12,14,20,0.72)' : 'rgba(18,22,30,0.65)';
  const motionDur = `${(0.45 / drivingMode.motionScale).toFixed(2)}s`;

  return {
    '--au-accent': primary,
    '--au-accent-soft': `${primary}33`,
    '--au-accent-glow': `${primary}55`,
    '--au-secondary': accent,
    '--au-surface': surface,
    '--au-glass': glass,
    '--au-glass-border': 'rgba(255,255,255,0.08)',
    '--au-text': theme.colors.textPrimary || '#FFFFFF',
    '--au-text-dim': theme.colors.textSecondary || 'rgba(255,255,255,0.45)',
    '--au-bg': theme.colors.background || '#030508',
    '--au-motion': motionDur,
    '--au-glow-intensity': drivingMode.glow,
    '--au-contrast': drivingMode.contrast,
    '--au-warmth': drivingMode.warmth,
    '--au-art-gradient': trackGradient || `linear-gradient(135deg, ${primary}, ${accent})`,
    '--au-radius': `${theme.layout?.cornerRadius || 16}px`,
    '--au-radius-lg': `${(theme.layout?.cornerRadius || 16) + 8}px`,
  };
}
