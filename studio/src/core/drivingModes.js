/** Driving mode profiles — adaptive UI behavior */

export const DRIVING_MODES = {
  PARK: {
    id: 'park',
    label: 'Park',
    motionScale: 1,
    contrast: 0.85,
    warmth: 0,
    simplify: false,
    glow: 0.6,
  },
  COMFORT: {
    id: 'comfort',
    label: 'Comfort',
    motionScale: 1,
    contrast: 0.9,
    warmth: 0.1,
    simplify: false,
    glow: 0.7,
  },
  SPORT: {
    id: 'sport',
    label: 'Sport',
    motionScale: 1.25,
    contrast: 1,
    warmth: 0.35,
    simplify: false,
    glow: 0.85,
  },
  SPORT_PLUS: {
    id: 'sport_plus',
    label: 'Sport+',
    motionScale: 1.5,
    contrast: 1.1,
    warmth: 0.55,
    simplify: true,
    glow: 1,
  },
  NIGHT: {
    id: 'night',
    label: 'Night',
    motionScale: 0.85,
    contrast: 0.75,
    warmth: -0.2,
    simplify: true,
    glow: 0.4,
  },
};

export function resolveDrivingMode(car, hour) {
  if (hour >= 21 || hour < 6) return DRIVING_MODES.NIGHT;
  if (car.speed === 0) return DRIVING_MODES.PARK;
  if (car.speed > 100) return DRIVING_MODES.SPORT_PLUS;
  if (car.speed > 60) return DRIVING_MODES.SPORT;
  return DRIVING_MODES.COMFORT;
}
