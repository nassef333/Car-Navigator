import { memo } from 'react';
import { IconWind } from '../../icons/SFSymbols.jsx';

export default memo(function StatusBar({ car, time, author, drivingMode }) {
  return (
    <header className="au-status">
      <div className="au-status-left">
        <div className="au-status-pill">
          <span className="au-status-dot" />
          <span>CAN</span>
        </div>
        <span>BT</span>
        <span style={{ opacity: 0.3 }}>·</span>
        <span style={{ color: '#30D158' }}>ZLink</span>
      </div>

      <div className="au-status-center">
        <time className="au-status-time">
          {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
        </time>
        <span className="au-status-brand">{author}</span>
      </div>

      <div className="au-status-right">
        <span className="au-mode-chip">{drivingMode.label}</span>
        <IconWind size={14} color="var(--au-text-dim)" />
        <span>{car.weather?.temp}°</span>
        <span className="au-status-speed">{Math.round(car.speed)}</span>
        <span className="au-status-gear">{car.gear}</span>
      </div>
    </header>
  );
});
