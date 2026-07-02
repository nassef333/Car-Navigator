import { useMemo } from 'react';
import { resolveDrivingMode } from '../core/drivingModes.js';
import { buildThemeTokens } from '../core/themeEngine.js';

export function useAdaptiveTheme(theme, car, time, track) {
  const hour = time.getHours();
  const isNight = hour >= 20 || hour < 6;
  const drivingMode = useMemo(() => resolveDrivingMode(car, hour), [car, hour]);

  const tokens = useMemo(
    () => buildThemeTokens(theme, {
      drivingMode,
      weather: car.weather?.condition || 'clear',
      trackGradient: track?.gradient,
      isNight,
    }),
    [theme, drivingMode, car.weather?.condition, track?.gradient, isNight],
  );

  return { tokens, drivingMode, isNight };
}
