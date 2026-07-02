export const defaultTheme = {
  name: 'Ahmed Nassef',
  nameAr: 'أحمد ناصف',
  author: 'Ahmed Nassef',
  colors: {
    primary: '#3B9EFF',
    accent: '#7C4DFF',
    background: '#030508',
    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255,255,255,0.45)',
    bottomBar: 'rgba(0,0,0,0.5)',
  },
  layout: {
    widgetColumnWidth: 228,
    leftPanelWidth: 228,
    centerPanelWidth: 380,
    carplayWidth: 640,
    bottomBarHeight: 52,
    cornerRadius: 14,
    pipRect: { x: 640, y: 20, w: 628, h: 520 },
  },
  pip: { package: 'com.zjin.zlink', label: 'CarPlay', fullScreen: true },
  baseLauncher: 'com.android.launcher17',
};

export const RESOLUTIONS = {
  '1280x720': { width: 1280, height: 720, label: '1280 × 720 (FYT)' },
  '1920x720': { width: 1920, height: 720, label: '1920 × 720' },
};

export const HOTSEAT_APPS = [];
