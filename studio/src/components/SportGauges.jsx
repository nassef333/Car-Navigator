const RPM_MAX = 8000;

export default function SportGauges({ data }) {
  const rpmPct = Math.min(1, data.rpm / RPM_MAX);
  const fuelPct = data.fuel / 100;
  const tempPct = Math.min(1, (data.coolant - 60) / 60);

  return (
    <div className="hx-gauges">
      <div className="hx-rpm-arc">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" strokeLinecap="round"
            strokeDasharray="188 314" transform="rotate(135 60 60)" />
          <circle cx="60" cy="60" r="50" fill="none" stroke="url(#rpmGrad)" strokeWidth="8" strokeLinecap="round"
            strokeDasharray={`${188 * rpmPct} 314`} transform="rotate(135 60 60)" />
          <defs>
            <linearGradient id="rpmGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="70%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#FF453A" />
            </linearGradient>
          </defs>
        </svg>
        <div className="hx-rpm-val">
          <span className="hx-rpm-num">{Math.round(data.rpm)}</span>
          <span className="hx-rpm-label">RPM</span>
        </div>
      </div>

      <div className="hx-speed-core">
        <span className="hx-speed-num">{Math.round(data.speed)}</span>
        <span className="hx-speed-unit">km/h</span>
      </div>

      <div className="hx-gear-box">
        <span className="hx-gear-letter">{data.gear}</span>
        <span className="hx-gear-label">GEAR</span>
      </div>

      <div className="hx-mini-gauges">
        <div className="hx-mini">
          <div className="hx-mini-bar"><div className="hx-mini-fill fuel" style={{ width: `${fuelPct * 100}%` }} /></div>
          <span className="hx-mini-icon">⛽</span>
          <span className="hx-mini-val">{data.fuel.toFixed(0)}%</span>
          <span className="hx-mini-lbl">FUEL</span>
        </div>
        <div className="hx-mini">
          <div className="hx-mini-bar"><div className="hx-mini-fill temp" style={{ width: `${tempPct * 100}%` }} /></div>
          <span className="hx-mini-icon">🌡</span>
          <span className="hx-mini-val">{data.coolant.toFixed(0)}°</span>
          <span className="hx-mini-lbl">TEMP</span>
        </div>
        <div className="hx-mini">
          <span className="hx-mini-icon">💨</span>
          <span className="hx-mini-val">{data.intake}°</span>
          <span className="hx-mini-lbl">INTAKE</span>
        </div>
      </div>
    </div>
  );
}
