import { memo } from 'react';

const SW = 1.35;

function Icon({ size = 24, color = 'currentColor', filled = false, children, viewBox = '0 0 24 24' }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" aria-hidden="true">
      {children({ color, filled, sw: SW })}
    </svg>
  );
}

export const IconHome = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" stroke={color} strokeWidth={sw} strokeLinejoin="round" />
    </>
  )}</Icon>
));

export const IconCarPlay = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <path d="M12 3c4.5 0 8 3.5 8 8s-3.5 8-8 8-8-3.5-8-8 3.5-8 8-8zm0 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" stroke={color} strokeWidth={sw} />
  )}</Icon>
));

export const IconMusic = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <path d="M9 18V6l10-2v12" stroke={color} strokeWidth={sw} strokeLinecap="round" />
      <circle cx="7" cy="18" r="2.5" stroke={color} strokeWidth={sw} />
      <circle cx="17" cy="16" r="2.5" stroke={color} strokeWidth={sw} />
    </>
  )}</Icon>
));

export const IconNav = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <path d="M12 21s6.5-4.5 6.5-10a6.5 6.5 0 1 0-13 0c0 5.5 6.5 10 6.5 10z" stroke={color} strokeWidth={sw} />
      <circle cx="12" cy="11" r="2" fill={color} />
    </>
  )}</Icon>
));

export const IconVehicle = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <path d="M5 16l1.5-5h11L19 16M7 16v2M17 16v2M6 11h12M8 8l1-2h6l1 2" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
  )}</Icon>
));

export const IconSparkle = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke={color} strokeWidth={sw} strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth={sw} />
    </>
  )}</Icon>
));

export const IconSettings = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <circle cx="12" cy="12" r="2.5" stroke={color} strokeWidth={sw} />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    </>
  )}</Icon>
));

export const IconPlay = memo((p) => (
  <Icon {...p}>{({ color }) => <path d="M8 5v14l12-8z" fill={color} />}</Icon>
));

export const IconPause = memo((p) => (
  <Icon {...p}>{({ color }) => (
    <>
      <rect x="7" y="5" width="3.5" height="14" rx="1" fill={color} />
      <rect x="13.5" y="5" width="3.5" height="14" rx="1" fill={color} />
    </>
  )}</Icon>
));

export const IconPrev = memo((p) => (
  <Icon {...p}>{({ color }) => <path d="M6 6h2v12H6zm4 6l10-6v12z" fill={color} />}</Icon>
));

export const IconNext = memo((p) => (
  <Icon {...p}>{({ color }) => <path d="M16 6h2v12h-2zm-10 6l10-6v12z" fill={color} />}</Icon>
));

export const IconPhone = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <path d="M8.5 4.5c.5 2.5 1.8 4.8 3.7 6.7s4.2 3.2 6.7 3.7l1.8-1.8c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.1.8.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.3 21.1 2.9 13.7 2.9 4.1 2.9 3.5 3.4 3 4 3h3.5c.6 0 1.1.5 1.1 1.1 0 1.4.3 2.8.8 4.1.1.4 0 .9-.3 1.2l-1.6 1.1z" stroke={color} strokeWidth={sw} strokeLinejoin="round" />
  )}</Icon>
));

export const IconFuel = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <path d="M4 8h10v12H4V8z" stroke={color} strokeWidth={sw} />
      <path d="M14 12h2l2 3v5h-4v-8z" stroke={color} strokeWidth={sw} strokeLinejoin="round" />
      <path d="M7 12h4" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    </>
  )}</Icon>
));

export const IconWeather = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <circle cx="10" cy="10" r="4" stroke={color} strokeWidth={sw} />
      <path d="M16 14a3 3 0 1 0 0-6 3.5 3.5 0 0 0-.5-1.7" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    </>
  )}</Icon>
));

export const IconCompass = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={sw} />
      <path d="M12 6l2 6-6 2 2-6 6-2z" fill={color} opacity="0.8" />
    </>
  )}</Icon>
));

export const IconCalendar = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" stroke={color} strokeWidth={sw} />
      <path d="M4 10h16M8 3v4M16 3v4" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    </>
  )}</Icon>
));

export const IconBell = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <path d="M12 4a5 5 0 0 0-5 5v3l-2 2.5h14L14 12V9a5 5 0 0 0-5-5z" stroke={color} strokeWidth={sw} strokeLinejoin="round" />
      <path d="M10 20a2 2 0 0 0 4 0" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    </>
  )}</Icon>
));

export const IconWind = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
  <path d="M4 8h12a3 3 0 1 0-3-3M4 16h14a3 3 0 1 1-3 3M4 12h16" stroke={color} strokeWidth={sw} strokeLinecap="round" />
  )}</Icon>
));

export const IconChevron = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <path d="M9 6l6 6-6 6" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
  )}</Icon>
));

export const IconSearch = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <circle cx="11" cy="11" r="6" stroke={color} strokeWidth={sw} />
      <path d="M16 16l4 4" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    </>
  )}</Icon>
));

export const IconMinus = memo((p) => (
  <Icon {...p}>{({ color, sw }) => <path d="M6 12h12" stroke={color} strokeWidth={sw} strokeLinecap="round" />}</Icon>
));

export const IconPlus = memo((p) => (
  <Icon {...p}>{({ color, sw }) => (
    <>
      <path d="M12 6v12M6 12h12" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    </>
  )}</Icon>
));

export const IconApple = memo((p) => (
  <Icon {...p}>{({ color }) => (
    <path d="M16.5 12.5c0-2.5 2-3.8 2.1-3.9-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.3 1.9 2.7 3.3 2.7 1.3 0 1.8-.9 3.4-.9 1.6 0 2 .9 3.4.9 1.4 0 2.3-1.3 3.2-2.6 1-1.5 1.4-2.9 1.4-3 0 0-2.7-1-2.7-4zm-2.5-7.3c.7-.9 1.2-2.1 1.1-3.3-1.1.1-2.3.7-3.1 1.6-.7.8-1.2 1.9-1 3.1 1.2.1 2.3-.6 3-1.4z" fill={color} />
  )}</Icon>
));

const NAV_ICONS = {
  home: IconHome,
  carplay: IconCarPlay,
  music: IconMusic,
  nav: IconNav,
  vehicle: IconVehicle,
  ai: IconSparkle,
  settings: IconSettings,
};

export function NavIcon({ id, ...props }) {
  const C = NAV_ICONS[id] || IconHome;
  return <C {...props} />;
}
