function DoorIcon({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M7 2h10v20H7V2z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="12" r="1" fill={open ? '#FF453A' : 'currentColor'} />
    </svg>
  );
}

export default function CarWidgets({ data, theme }) {
  const anyDoorOpen = Object.values(data.doors).some(Boolean);

  return (
    <div className="w-car-panel">
      <div className="w-speed-ring">
        <svg viewBox="0 0 120 120" className="w-speed-svg">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
          <circle
            cx="60" cy="60" r="52"
            fill="none"
            stroke={theme.colors.primary}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${(data.speed / 120) * 327} 327`}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="w-speed-val">
          <span className="w-speed-num">{Math.round(data.speed)}</span>
          <span className="w-speed-unit">km/h</span>
        </div>
      </div>

      <div className="w-car-stats">
        <div className="w-stat">
          <span className="w-stat-label">RPM</span>
          <span className="w-stat-val">{Math.round(data.rpm)}</span>
        </div>
        <div className="w-stat">
          <span className="w-stat-label">Fuel</span>
          <span className="w-stat-val">{data.fuel.toFixed(0)}%</span>
        </div>
        <div className="w-stat">
          <span className="w-stat-label">Gear</span>
          <span className="w-stat-val">{data.gear}</span>
        </div>
      </div>

      <div className="w-car-icons">
        <div className={`w-icon-badge ${data.lights.headlight ? 'on' : ''}`} title="Headlights">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
        </div>
        <div className={`w-icon-badge ${data.ac.on ? 'on' : ''}`} title="A/C">
          <span>{data.ac.temp}°</span>
        </div>
        <div className={`w-icon-badge ${anyDoorOpen ? 'warn' : ''}`} title="Doors">
          <DoorIcon open={anyDoorOpen} />
        </div>
        <div className={`w-icon-badge ${data.handbrake ? 'on' : ''}`} title="Handbrake">P</div>
        <div className={`w-icon-badge ${!data.seatbelt ? 'warn' : ''}`} title="Seatbelt">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 22v-8l6-3 6 3v8H6z" /></svg>
        </div>
      </div>

      <div className="w-doors-row">
        {[
          { k: 'fl', l: 'FL' }, { k: 'fr', l: 'FR' },
          { k: 'rl', l: 'RL' }, { k: 'rr', l: 'RR' },
        ].map(({ k, l }) => (
          <span key={k} className={`w-door ${data.doors[k] ? 'open' : ''}`}>{l}</span>
        ))}
      </div>
    </div>
  );
}
