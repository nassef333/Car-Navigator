const APPS = [
  { name: 'Maps', color: '#30D158', icon: 'M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z' },
  { name: 'Music', color: '#FF375F', icon: 'M9 18V5l12-2v13' },
  { name: 'Phone', color: '#30D158', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' },
  { name: 'Messages', color: '#30D758', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
  { name: 'Calendar', color: '#FF3B30', icon: 'M3 10h18M8 2v4M16 2v4M3 4h18v18H3z' },
  { name: 'Settings', color: '#8E8E93', icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' },
  { name: 'Podcasts', color: '#BF5AF2', icon: 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { name: 'Audiobooks', color: '#FF9F0A', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20' },
];

function AppIcon({ color, path }) {
  return (
    <div className="hx-cp-icon" style={{ background: color }}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
        <path d={path} />
      </svg>
    </div>
  );
}

export default function CarPlayFull({ media }) {
  return (
    <div className="hx-carplay">
      <div className="hx-cp-header">
        <div className="hx-cp-brand">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
          <span>CarPlay</span>
        </div>
        <div className="hx-cp-device">
          <span className="hx-cp-dot" />
          {media.bluetooth.device}
        </div>
      </div>

      <div className="hx-cp-grid">
        {APPS.map((app) => (
          <button key={app.name} type="button" className="hx-cp-app">
            <AppIcon color={app.color} path={app.icon} />
            <span>{app.name}</span>
          </button>
        ))}
      </div>

      <div className="hx-cp-now">
        <div className="hx-cp-np-art" style={{ background: 'linear-gradient(135deg,#FF6482,#BF5AF2)' }} />
        <div className="hx-cp-np-info">
          <strong>Blinding Lights</strong>
          <span>The Weeknd · Now Playing</span>
        </div>
        <div className="hx-cp-np-ctrl">
          <button type="button">⏮</button>
          <button type="button" className="play">▶</button>
          <button type="button">⏭</button>
        </div>
      </div>
    </div>
  );
}
