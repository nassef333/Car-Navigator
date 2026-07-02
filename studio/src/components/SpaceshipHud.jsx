const RPM_MAX = 8000;
const SPEED_MAX = 260;

function MercedesDial({ value, max, label, unit, type, redlineFrom }) {
  const pct = Math.min(1, value / max);
  const cx = 150;
  const cy = 150;
  const r = 110;
  const startAngle = 135;
  const sweep = 270;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const arcPoint = (angle, radius = r) => ({
    x: cx + radius * Math.cos(toRad(angle)),
    y: cy + radius * Math.sin(toRad(angle)),
  });
  const describeArc = (from, to, radius = r) => {
    const s = arcPoint(from, radius);
    const e = arcPoint(to, radius);
    const large = to - from > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${radius} ${radius} 0 ${large} 1 ${e.x} ${e.y}`;
  };
  const valueAngle = startAngle + sweep * pct;
  const redPct = redlineFrom ? redlineFrom / max : 1;
  const redAngle = startAngle + sweep * redPct;
  const ticks = type === 'rpm' ? 8 : 13;

  return (
    <div className="mb-dial">
      <svg viewBox="0 0 300 300" className="mb-dial-svg">
        <defs>
          <radialGradient id={`mbFace-${type}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2a2a2e" />
            <stop offset="85%" stopColor="#141416" />
            <stop offset="100%" stopColor="#0a0a0c" />
          </radialGradient>
          <linearGradient id={`mbRing-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a8a8f" />
            <stop offset="50%" stopColor="#d4d4d8" />
            <stop offset="100%" stopColor="#6a6a6f" />
          </linearGradient>
        </defs>

        <circle cx={cx} cy={cy} r={r + 18} fill="none" stroke={`url(#mbRing-${type})`} strokeWidth="1.5" opacity="0.35" />
        <circle cx={cx} cy={cy} r={r + 4} fill={`url(#mbFace-${type})`} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {Array.from({ length: ticks + 1 }, (_, i) => {
          const a = startAngle + (sweep / ticks) * i;
          const major = i % (type === 'rpm' ? 2 : 2) === 0;
          const inner = major ? r - 14 : r - 8;
          const p1 = arcPoint(a, inner);
          const p2 = arcPoint(a, r + 2);
          const isRed = type === 'rpm' && a >= redAngle;
          return (
            <line
              key={i}
              x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
              stroke={isRed ? '#E10600' : 'rgba(255,255,255,0.45)'}
              strokeWidth={major ? 1.5 : 0.8}
              opacity={major ? 1 : 0.6}
            />
          );
        })}

        <path d={describeArc(startAngle, startAngle + sweep)} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" strokeLinecap="round" />

        {type === 'rpm' && redPct < 1 && (
          <path d={describeArc(redAngle, startAngle + sweep)} fill="none" stroke="rgba(225,6,0,0.25)" strokeWidth="8" strokeLinecap="round" />
        )}

        <path
          d={describeArc(startAngle, valueAngle)}
          fill="none"
          stroke={type === 'rpm' && pct >= redPct ? '#E10600' : '#ffffff'}
          strokeWidth="6"
          strokeLinecap="round"
          className="mb-dial-arc"
        />

        <line
          x1={cx} y1={cy}
          x2={arcPoint(valueAngle, r - 20).x}
          y2={arcPoint(valueAngle, r - 20).y}
          stroke={type === 'rpm' && pct >= redPct ? '#E10600' : '#fff'}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <circle cx={cx} cy={cy} r="6" fill="#1a1a1c" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      </svg>

      <div className="mb-dial-readout">
        <span className="mb-dial-value">{type === 'rpm' ? Math.round(value) : Math.round(value)}</span>
        <span className="mb-dial-unit">{unit}</span>
        <span className="mb-dial-label">{label}</span>
      </div>
    </div>
  );
}

export default function SpaceshipHud({ data, author }) {
  const driveMode = data.speed > 80 ? 'SPORT+' : data.speed > 40 ? 'SPORT' : 'COMFORT';

  return (
    <div className="mb-cockpit">
      <div className="mb-ambient" />

      <header className="mb-head">
        <div className="mb-brand">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3 L12 7 M12 17 L12 21 M3 12 L7 12 M17 12 L21 12" />
            <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
          </svg>
          <span>MBUX</span>
          <em>Sport Instrument</em>
        </div>
        <span className="mb-drive-mode">{driveMode}</span>
        <span className="mb-pilot">{author}</span>
      </header>

      <div className="mb-stage">
        <MercedesDial
          type="rpm"
          value={data.rpm}
          max={RPM_MAX}
          label="RPM"
          unit="rpm"
          redlineFrom={6500}
        />

        <div className="mb-center">
          <span className="mb-gear">{data.gear}</span>
          <span className="mb-gear-label">DRIVE</span>
          <div className="mb-center-stats">
            <div><span>ODO</span><strong>{data.odometer.toLocaleString()}</strong></div>
            <div><span>EXT</span><strong>{data.intake}°C</strong></div>
          </div>
        </div>

        <MercedesDial
          type="speed"
          value={data.speed}
          max={SPEED_MAX}
          label="SPEED"
          unit="km/h"
        />
      </div>

      <footer className="mb-footer">
        <div className="mb-stat">
          <span>Fuel</span>
          <div className="mb-stat-bar"><i style={{ width: `${data.fuel}%` }} /></div>
          <strong>{data.fuel.toFixed(0)}%</strong>
        </div>
        <div className="mb-stat">
          <span>Coolant</span>
          <strong>{data.coolant.toFixed(0)}°C</strong>
        </div>
        <div className="mb-stat">
          <span>Heading</span>
          <strong>{Math.round(data.compass)}°</strong>
        </div>
        <div className="mb-stat">
          <span>Steering</span>
          <strong>{data.wheelAngle.toFixed(0)}°</strong>
        </div>
      </footer>
    </div>
  );
}
