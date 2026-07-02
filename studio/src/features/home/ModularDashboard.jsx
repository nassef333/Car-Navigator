import { memo } from 'react';
import { SPEED_MAX } from '../../core/constants.js';
import { aiSuggestions } from '../../carData.js';
import { IconNav, IconMusic, IconFuel, IconWeather, IconSparkle } from '../../icons/SFSymbols.jsx';

const AI_ICONS = { nav: IconNav, music: IconMusic, fuel: IconFuel, weather: IconWeather };

function SpeedHero({ car }) {
  const speedPct = Math.min(1, car.speed / SPEED_MAX);
  const circumference = 2 * Math.PI * 88;
  const offset = circumference * (1 - speedPct * 0.72);

  return (
    <div className="au-card au-dash-speed">
      <span className="au-card-label">Telemetry</span>
      <div className="au-speed-hero">
        <div className="au-speed-ring-wrap">
          <svg viewBox="0 0 200 200" className="au-speed-ring-svg">
            <defs>
              <linearGradient id="auSpeedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--au-accent)" />
                <stop offset="100%" stopColor="var(--au-secondary)" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="88" className="au-speed-ring-track"
              strokeDasharray={`${circumference * 0.72} ${circumference}`} />
            <circle cx="100" cy="100" r="88" className="au-speed-ring-fill"
              strokeDasharray={`${circumference * 0.72} ${circumference}`}
              strokeDashoffset={offset} />
          </svg>
          <div className="au-speed-center">
            <span className="au-speed-num" key={Math.round(car.speed)}>{Math.round(car.speed)}</span>
            <span className="au-speed-unit">KM/H</span>
            <span className="au-speed-rpm">{Math.round(car.rpm)} RPM</span>
          </div>
        </div>
        <div className="au-speed-stats">
          <div className="au-speed-stat"><span>GEAR</span><strong>{car.gear}</strong></div>
          <div className="au-speed-stat"><span>FUEL</span><strong>{car.fuel.toFixed(0)}%</strong></div>
          <div className="au-speed-stat"><span>ODO</span><strong>{(car.odometer / 1000).toFixed(1)}k</strong></div>
        </div>
      </div>
    </div>
  );
}

function NavigationWidget({ car }) {
  const nav = car.navigation;
  return (
    <div className="au-card au-dash-nav">
      <span className="au-card-label">Navigation</span>
      <div className="au-nav-dest">{nav.destination}</div>
      <div className="au-nav-meta">
        <span><strong>{nav.eta}</strong> ETA</span>
        <span>{nav.distance}</span>
        <span>Traffic: {nav.traffic}</span>
      </div>
      <div className="au-nav-bar"><i /></div>
    </div>
  );
}

function MusicWidget({ track, playing }) {
  return (
    <div className="au-card au-dash-music">
      <div className={`au-music-art ${playing ? 'au-music-art-spin' : ''}`} style={{ background: track.gradient }} />
      <div className="au-music-info">
        <strong>{track.title}</strong>
        <span>{track.artist}</span>
      </div>
      <div className="au-music-eq">
        {[...Array(5)].map((_, i) => (
          <i key={i} className={playing ? 'on' : ''} style={{ animationDelay: `${i * 0.1}s`, height: `${30 + i * 14}%` }} />
        ))}
      </div>
    </div>
  );
}

function WeatherWidget({ car }) {
  const w = car.weather;
  return (
    <div className="au-card au-dash-weather">
      <span className="au-card-label">Weather</span>
      <div className="au-weather-temp">{w.temp}°</div>
      <div className="au-weather-desc">{w.condition}</div>
      <div className="au-weather-row">
        <span>Humidity {w.humidity}%</span>
        <span>Wind {w.wind} km/h</span>
      </div>
    </div>
  );
}

function VehicleWidget({ car }) {
  const anyDoor = Object.values(car.doors).some(Boolean);
  return (
    <div className="au-card au-dash-vehicle">
      <span className="au-card-label">Vehicle</span>
      <div className="au-veh-mini">
        <div className="au-veh-pill"><span>COOLANT</span><strong>{car.coolant.toFixed(0)}°</strong></div>
        <div className="au-veh-pill"><span>BATTERY</span><strong>{car.battery}%</strong></div>
        <div className="au-veh-pill"><span>DOORS</span><strong style={{ color: anyDoor ? '#FF453A' : undefined }}>{anyDoor ? 'OPEN' : 'OK'}</strong></div>
        <div className="au-veh-pill"><span>HEADING</span><strong>{Math.round(car.compass)}°</strong></div>
      </div>
    </div>
  );
}

function AiStrip() {
  return (
    <div className="au-card au-dash-ai">
      <div className="au-ai-strip">
        {aiSuggestions.map((s) => {
          const Icon = AI_ICONS[s.icon] || IconSparkle;
          return (
            <div key={s.id} className="au-ai-chip">
              <div className="au-ai-chip-icon"><Icon size={14} color="var(--au-accent)" /></div>
              <div className="au-ai-chip-text">
                <strong>{s.title}</strong>
                <span>{s.subtitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(function ModularDashboard({ car, track, playing }) {
  return (
    <div className="au-dashboard au-main-enter">
      <SpeedHero car={car} />
      <NavigationWidget car={car} />
      <MusicWidget track={track} playing={playing} />
      <WeatherWidget car={car} />
      <VehicleWidget car={car} />
      <AiStrip />
    </div>
  );
});
