export function IconNav({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.5" fill={color} />
    </svg>
  );
}

export function IconMusic({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 19V6l12-2v13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="19" r="3" fill={color} /><circle cx="19" cy="17" r="3" fill={color} />
    </svg>
  );
}

export function IconPhone({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function IconSettings({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function IconRadio({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2" fill={color} />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconApps({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="2" fill={color} />
      <rect x="14" y="3" width="7" height="7" rx="2" fill={color} />
      <rect x="3" y="14" width="7" height="7" rx="2" fill={color} />
      <rect x="14" y="14" width="7" height="7" rx="2" fill={color} opacity="0.5" />
    </svg>
  );
}

export function IconPlay({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function IconPause({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

export function IconPrev({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
    </svg>
  );
}

export function IconNext({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M16 18h2V6h-2zM6 18l8.5-6L6 6z" />
    </svg>
  );
}

export function IconSignal({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="1" y="14" width="4" height="8" rx="1" opacity="0.4" />
      <rect x="7" y="10" width="4" height="12" rx="1" opacity="0.6" />
      <rect x="13" y="6" width="4" height="16" rx="1" opacity="0.8" />
      <rect x="19" y="2" width="4" height="20" rx="1" />
    </svg>
  );
}

export function IconBattery({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 14" fill="none">
      <rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke={color} strokeWidth="1" opacity="0.4" />
      <rect x="2" y="2" width="17" height="10" rx="2" fill={color} />
      <path d="M25 4.5v5a2 2 0 0 0 0-5z" fill={color} opacity="0.4" />
    </svg>
  );
}

export function IconWifi({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path d="M7.05 13.05a7 7 0 0 1 9.9 0" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M3.05 9.05a12 12 0 0 1 17.9 0" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

const ICON_MAP = { nav: IconNav, music: IconMusic, phone: IconPhone, settings: IconSettings, radio: IconRadio, apps: IconApps };

export function AppIcon({ id, size = 28, color = '#fff' }) {
  const Icon = ICON_MAP[id] || IconApps;
  return <Icon size={size} color={color} />;
}

export function IconChevron({ size = 14, color = '#C7C7CC' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShare({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="16 6 12 2 8 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="2" x2="12" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
