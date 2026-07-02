const RPM_MAX = 8000;

export default function HudCluster({ data, accent }) {
  const rpmPct = Math.min(1, data.rpm / RPM_MAX);
  const circumference = 2 * Math.PI * 88;
  const rpmOffset = circumference * (1 - rpmPct * 0.75);

  return (
    <div className="nx-hud-cluster">
      <div className="nx-hud-label">TELEMETRY</div>

      <div className="nx-speed-ring">
        <svg viewBox="0 0 220 220" className="nx-ring-svg">
          <defs>
            <linearGradient id="nxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={accent} />
              <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
          </defs>
          <circle cx="110" cy="110" r="96" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
          <circle cx="110" cy="110" r="88" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6"
            strokeDasharray={`${circumference * 0.75} ${circumference}`} transform="rotate(135 110 110)" strokeLinecap="round" />
          <circle cx="110" cy="110" r="88" fill="none" stroke="url(#nxGrad)" strokeWidth="6"
            strokeDasharray={`${circumference * 0.75 * rpmPct} ${circumference}`} transform="rotate(135 110 110)" strokeLinecap="round" className="nx-rpm-arc" />
          <circle cx="110" cy="110" r="72" fill="none" stroke={accent} strokeWidth="1" opacity="0.2" />
        </svg>
        <div className="nx-speed-center">
          <span className="nx-speed-value">{Math.round(data.speed)}</span>
          <span className="nx-speed-unit">KM/H</span>
          <span className="nx-rpm-readout">{Math.round(data.rpm)} RPM</span>
        </div>
      </div>

      <div className="nx-pills">
        <div className="nx-pill">
          <span className="nx-pill-key">GEAR</span>
          <span className="nx-pill-val gear">{data.gear}</span>
        </div>
        <div className="nx-pill">
          <span className="nx-pill-key">FUEL</span>
          <div className="nx-pill-bar"><div style={{ width: `${data.fuel}%`, background: accent }} /></div>
          <span className="nx-pill-val">{data.fuel.toFixed(0)}%</span>
        </div>
        <div className="nx-pill">
          <span className="nx-pill-key">TEMP</span>
          <span className="nx-pill-val">{data.coolant.toFixed(0)}°C</span>
        </div>
        <div className="nx-pill">
          <span className="nx-pill-key">INTAKE</span>
          <span className="nx-pill-val">{data.intake}°C</span>
        </div>
      </div>
    </div>
  );
}
