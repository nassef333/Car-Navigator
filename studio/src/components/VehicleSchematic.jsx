function DoorNode({ x, y, label, open, accent, r = 14 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle r={r} fill={open ? 'rgba(255,59,92,0.2)' : 'rgba(255,255,255,0.04)'} stroke={open ? '#FF3B5C' : accent} strokeWidth="1" opacity={open ? 1 : 0.5} />
      <text textAnchor="middle" dominantBaseline="middle" fill={open ? '#FF3B5C' : 'rgba(255,255,255,0.55)'} fontSize={r > 10 ? 7 : 6} fontWeight="700">{label}</text>
    </g>
  );
}

export default function VehicleSchematic({ data, accent, compact }) {
  const d = data.doors;

  if (compact) {
    return (
      <svg viewBox="0 0 200 240" className="cr-veh-compact">
        <path
          d="M 75 40 L 125 40 Q 138 52 140 78 L 143 130 Q 142 168 130 188 L 118 200 Q 100 206 82 200 L 70 188 Q 58 168 57 130 L 60 78 Q 62 52 75 40 Z"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />
        {d.fl && <path d="M 58 88 L 70 88 L 70 140 L 58 140 Z" fill="rgba(255,59,92,0.4)" stroke="#FF3B5C" />}
        {d.fr && <path d="M 130 88 L 142 88 L 142 140 L 130 140 Z" fill="rgba(255,59,92,0.4)" stroke="#FF3B5C" />}
        {d.rl && <path d="M 58 145 L 70 145 L 70 182 L 58 182 Z" fill="rgba(255,59,92,0.4)" stroke="#FF3B5C" />}
        {d.rr && <path d="M 130 145 L 142 145 L 142 182 L 130 182 Z" fill="rgba(255,59,92,0.4)" stroke="#FF3B5C" />}
        <DoorNode x={38} y={114} label="FL" open={d.fl} accent={accent} r={10} />
        <DoorNode x={162} y={114} label="FR" open={d.fr} accent={accent} r={10} />
        <DoorNode x={38} y={164} label="RL" open={d.rl} accent={accent} r={10} />
        <DoorNode x={162} y={164} label="RR" open={d.rr} accent={accent} r={10} />
      </svg>
    );
  }

  return (
    <div className="au-veh-diagram">
      <div className="au-veh-diagram-head">
        <span className="au-card-label">Vehicle Status</span>
        <span className="au-veh-diagram-meta">{Math.round(data.compass)}° N · {data.altitude}m</span>
      </div>
      <div className="au-veh-diagram-stage">
        <svg viewBox="0 0 320 360" className="au-veh-diagram-svg">
          <ellipse cx="160" cy="180" rx="100" ry="130" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.15" strokeDasharray="4 6" />
          <path d="M 120 60 L 200 60 Q 220 80 225 120 L 230 200 Q 228 260 210 290 L 190 310 Q 160 320 130 310 L 110 290 Q 95 260 90 200 L 95 120 Q 100 80 120 60 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
          {d.fl && <path d="M 95 130 L 112 130 L 112 220 L 95 220 Z" fill="rgba(255,59,92,0.35)" stroke="#FF3B5C" strokeWidth="1.5" />}
          {d.fr && <path d="M 208 130 L 225 130 L 225 220 L 208 220 Z" fill="rgba(255,59,92,0.35)" stroke="#FF3B5C" strokeWidth="1.5" />}
          <DoorNode x={55} y={175} label="FL" open={d.fl} accent={accent} />
          <DoorNode x={265} y={175} label="FR" open={d.fr} accent={accent} />
        </svg>
      </div>
    </div>
  );
}
