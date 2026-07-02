const APPS = [
  { n: 'Maps', c: '#34C759' },
  { n: 'Music', c: '#FF2D55' },
  { n: 'Phone', c: '#34C759' },
  { n: 'Messages', c: '#34C759' },
  { n: 'Calendar', c: '#FF3B30' },
  { n: 'Settings', c: '#636366' },
  { n: 'Podcasts', c: '#BF5AF2' },
  { n: 'Now Playing', c: '#FF9F0A' },
];

export default function CarPlayPanel({ media, accent }) {
  return (
    <div className="nx-cp-portal">
      <div className="nx-cp-frame">
        <header className="nx-cp-head">
          <div className="nx-cp-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19z" /></svg>
            Apple CarPlay
          </div>
          <div className="nx-cp-device">
            <span className="nx-cp-dot" style={{ background: accent, boxShadow: `0 0 10px ${accent}` }} />
            {media.bluetooth.device}
          </div>
        </header>

        <div className="nx-cp-apps">
          {APPS.map((a) => (
            <button key={a.n} type="button" className="nx-cp-app">
              <div className="nx-cp-app-icon" style={{ background: a.c, boxShadow: `0 8px 24px ${a.c}44` }}>
                {a.n[0]}
              </div>
              <span>{a.n}</span>
            </button>
          ))}
        </div>

        <footer className="nx-cp-foot">
          <div className="nx-cp-art" />
          <div>
            <strong>Blinding Lights</strong>
            <span>The Weeknd</span>
          </div>
          <div className="nx-cp-ctrl">
            <button type="button">‹</button>
            <button type="button" className="play">▶</button>
            <button type="button">›</button>
          </div>
        </footer>
      </div>
      <div className="nx-cp-tag">ZLINK · FULL DISPLAY</div>
    </div>
  );
}
