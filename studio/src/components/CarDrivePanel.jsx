import VehicleSchematic from './VehicleSchematic.jsx';

export default function CarDrivePanel({ data, accent }) {
  const rpmPct = Math.min(100, (data.rpm / 8000) * 100);

  return (
    <aside className="cr-drive">
      <div className="cr-drive-speed">
        <span className="cr-speed-num">{Math.round(data.speed)}</span>
        <div className="cr-speed-meta">
          <span>km/h</span>
          <strong className="cr-gear" style={{ color: accent }}>{data.gear}</strong>
        </div>
      </div>

      <div className="cr-drive-bars">
        <div className="cr-bar-item">
          <label>RPM</label>
          <div className="cr-bar"><div style={{ width: `${rpmPct}%`, background: accent }} /></div>
          <span>{Math.round(data.rpm)}</span>
        </div>
        <div className="cr-bar-item">
          <label>FUEL</label>
          <div className="cr-bar"><div style={{ width: `${data.fuel}%`, background: '#30D158' }} /></div>
          <span>{data.fuel.toFixed(0)}%</span>
        </div>
        <div className="cr-bar-item">
          <label>TEMP</label>
          <div className="cr-bar"><div style={{ width: `${Math.min(100, (data.coolant - 60) / 60 * 100)}%`, background: '#FF9F0A' }} /></div>
          <span>{data.coolant.toFixed(0)}°</span>
        </div>
      </div>

      <div className="cr-drive-vehicle">
        <VehicleSchematic data={data} accent={accent} compact />
      </div>

      <div className="cr-drive-stats">
        <span>{data.odometer.toLocaleString()} km</span>
        <span>{Math.round(data.compass)}° N</span>
      </div>
    </aside>
  );
}
