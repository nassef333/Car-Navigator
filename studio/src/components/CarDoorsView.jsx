function DoorPanel({ x, y, w, h, open, label, rotate = 0 }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate})`}>
      <rect
        x={0} y={0} width={w} height={h} rx={3}
        fill={open ? 'rgba(255,69,58,0.55)' : 'rgba(0,229,255,0.12)'}
        stroke={open ? '#FF453A' : 'rgba(0,229,255,0.35)'}
        strokeWidth={open ? 2.5 : 1.2}
        className={open ? 'door-open' : ''}
      />
      {open && (
        <path
          d={`M ${w} 0 Q ${w + 14} ${h / 2} ${w} ${h}`}
          fill="none"
          stroke="#FF453A"
          strokeWidth="1.5"
          opacity="0.7"
        />
      )}
      <text x={w / 2} y={h + 12} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="8" fontWeight="600">{label}</text>
    </g>
  );
}

export default function CarDoorsView({ data }) {
  const d = data.doors;
  const dirs = ['N', 'E', 'S', 'W'];
  const compassRot = -data.compass;

  return (
    <div className="hx-car-view">
      <div className="hx-car-stats-row">
        <div><span>↕</span><strong>{data.altitude.toFixed(0)}m</strong><small>Altitude</small></div>
        <div><span>🧭</span><strong>{Math.round(data.compass)}°</strong><small>Heading</small></div>
        <div><span>◎</span><strong>{data.wheelAngle.toFixed(0)}°</strong><small>Steering</small></div>
      </div>

      <div className="hx-car-stage">
        <svg className="hx-compass-ring" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <g transform={`rotate(${compassRot} 100 100)`}>
            {dirs.map((dir, i) => {
              const a = (i * 90 - 90) * Math.PI / 180;
              const x = 100 + Math.cos(a) * 78;
              const y = 100 + Math.sin(a) * 78;
              return (
                <text key={dir} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
                  fill={dir === 'N' ? '#FF9F0A' : 'rgba(255,255,255,0.35)'} fontSize="11" fontWeight="700">{dir}</text>
              );
            })}
            <path d="M 100 30 L 96 48 L 100 44 L 104 48 Z" fill="#FF9F0A" />
          </g>
        </svg>

        <svg className="hx-car-svg" viewBox="0 0 200 280">
          {/* shadow */}
          <ellipse cx="100" cy="140" rx="55" ry="90" fill="rgba(0,0,0,0.4)" />
          {/* body */}
          <path
            d="M 70 40 Q 100 30 130 40 L 145 80 Q 150 140 145 200 L 130 240 Q 100 250 70 240 L 55 200 Q 50 140 55 80 Z"
            fill="url(#bodyGrad)"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a5568" />
              <stop offset="50%" stopColor="#718096" />
              <stop offset="100%" stopColor="#4a5568" />
            </linearGradient>
          </defs>
          {/* windshield */}
          <path d="M 75 55 L 125 55 L 135 95 L 65 95 Z" fill="rgba(0,229,255,0.08)" stroke="rgba(0,229,255,0.2)" strokeWidth="0.8" />
          {/* rear window */}
          <path d="M 68 175 L 132 175 L 138 210 L 62 210 Z" fill="rgba(0,229,255,0.06)" stroke="rgba(0,229,255,0.15)" strokeWidth="0.8" />

          <DoorPanel x={48} y={100} w={18} h={55} open={d.fl} label="FL" />
          <DoorPanel x={134} y={100} w={18} h={55} open={d.fr} label="FR" />
          <DoorPanel x={48} y={165} w={18} h={45} open={d.rl} label="RL" />
          <DoorPanel x={134} y={165} w={18} h={45} open={d.rr} label="RR" />
          <DoorPanel x={78} y={28} w={44} h={14} open={d.hood} label="HOOD" />
          <DoorPanel x={72} y={238} w={56} h={12} open={d.trunk} label="TRUNK" />
        </svg>
      </div>

      <div className="hx-door-legend">
        {[
          ['FL', d.fl], ['FR', d.fr], ['RL', d.rl], ['RR', d.rr], ['Trunk', d.trunk],
        ].map(([l, open]) => (
          <span key={l} className={open ? 'open' : 'closed'}>{l} {open ? 'OPEN' : 'OK'}</span>
        ))}
      </div>
    </div>
  );
}
