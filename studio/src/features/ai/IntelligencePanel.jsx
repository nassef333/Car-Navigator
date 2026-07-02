import { memo } from 'react';
import { aiSuggestions } from '../../carData.js';
import { IconNav, IconMusic, IconFuel, IconWeather, IconSparkle } from '../../icons/SFSymbols.jsx';

const ICONS = { nav: IconNav, music: IconMusic, fuel: IconFuel, weather: IconWeather };

export default memo(function IntelligencePanel() {
  return (
    <div className="au-intel au-main-enter">
      <div className="au-card au-intel-hero">
        <div className="au-intel-orb">
          <div className="au-intel-orb-inner">
            <IconSparkle size={24} color="var(--au-accent)" />
          </div>
        </div>
        <h2 className="au-intel-title">Aura Intelligence</h2>
        <p className="au-intel-sub">
          Your driving context is analyzed in real time — destinations, fuel, music, and weather
          adapt automatically from CAN bus data, time of day, and your patterns.
        </p>
      </div>

      <div className="au-intel-list">
        {aiSuggestions.map((s) => {
          const Icon = ICONS[s.icon] || IconSparkle;
          return (
            <div key={s.id} className="au-card au-intel-item">
              <div className="au-intel-item-icon"><Icon size={18} color="var(--au-accent)" /></div>
              <div className="au-intel-item-body">
                <strong>{s.title}</strong>
                <span>{s.subtitle}</span>
              </div>
              <span className="au-intel-conf">{Math.round(s.confidence * 100)}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});
