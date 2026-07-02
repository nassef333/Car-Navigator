/** CAN bus simulation — com.syu.canbus */

export const initialCarData = {
  speed: 0,
  rpm: 820,
  fuel: 68,
  coolant: 88,
  intake: 22,
  odometer: 45230,
  gear: 'P',
  tirePressure: { fl: 2.4, fr: 2.4, rl: 2.3, rr: 2.3 },
  battery: 87,
  doors: { fl: false, fr: false, rl: false, rr: false, trunk: false, hood: false },
  lights: { headlight: true, highBeam: false, turnL: false, turnR: false },
  ac: { on: true, tempL: 22, tempR: 22, fan: 3, auto: true, mode: 'auto' },
  compass: 357,
  altitude: 160,
  wheelAngle: 0,
  weather: { condition: 'clear', temp: 24, humidity: 42, wind: 12 },
  navigation: {
    destination: 'Downtown Dubai',
    eta: '18 min',
    distance: '12.4 km',
    traffic: 'light',
  },
};

let tick = 0;

export function simulateDrive(data) {
  tick += 1;
  const moving = data.speed > 0;
  const speed = moving
    ? Math.min(140, data.speed + (Math.random() > 0.35 ? 2 : -1))
    : Math.random() > 0.88 ? 4 : 0;

  const doors = { ...data.doors };
  if (tick === 8) doors.fl = true;
  if (tick === 16) doors.fl = false;

  return {
    ...data,
    speed,
    rpm: speed === 0 ? 750 + Math.random() * 150 : 1100 + speed * 42 + Math.random() * 300,
    fuel: Math.max(5, data.fuel - (moving ? 0.008 : 0)),
    coolant: 85 + speed * 0.08 + Math.random() * 2,
    gear: speed === 0 ? 'P' : speed < 25 ? 'D' : speed > 80 ? 'S' : 'D',
    doors,
    wheelAngle: moving ? Math.sin(tick * 0.3) * 12 : 0,
    compass: (data.compass + (moving ? 1 : 0)) % 360,
  };
}

export const mediaState = {
  radio: { station: 'FM 90.9', freq: '90.9 MHz', playing: true },
  bluetooth: { connected: true, device: 'iPhone 17 Pro', carplay: true },
};

export const defaultTrack = {
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  album: 'After Hours',
  duration: 200,
  source: 'Apple Music',
  device: 'iPhone 17 Pro',
  gradient: 'linear-gradient(135deg, #FF6482 0%, #BF5AF2 50%, #5E5CE6 100%)',
  lyrics: [
    { time: 0, text: "Yeah" },
    { time: 8, text: "I've been tryna call" },
    { time: 12, text: "I've been on my own for long enough" },
    { time: 18, text: "Maybe you can show me how to love, maybe" },
    { time: 26, text: "I'm goin' through withdrawals" },
    { time: 32, text: "You don't even have to do too much" },
    { time: 38, text: "You can turn me on with just a touch, baby" },
  ],
};

export const aiSuggestions = [
  {
    id: 'dest',
    type: 'navigation',
    title: 'Headed to Downtown Dubai?',
    subtitle: 'Traffic is light · 18 min ETA',
    confidence: 0.92,
    icon: 'nav',
  },
  {
    id: 'fuel',
    type: 'alert',
    title: 'Fuel sufficient for 340 km',
    subtitle: 'Nearest station 4.2 km ahead',
    confidence: 0.88,
    icon: 'fuel',
  },
  {
    id: 'music',
    type: 'media',
    title: 'Continue your evening playlist',
    subtitle: 'Synthwave · 24 tracks',
    confidence: 0.76,
    icon: 'music',
  },
  {
    id: 'weather',
    type: 'weather',
    title: 'Clear skies tonight',
    subtitle: '24°C · Perfect for a drive',
    confidence: 0.95,
    icon: 'weather',
  },
];

export const notifications = [
  { id: 1, app: 'Messages', title: 'Sarah', body: 'Running 5 min late', time: '2m' },
  { id: 2, app: 'Calendar', title: 'Team sync', body: 'Starts in 45 minutes', time: '12m' },
];
