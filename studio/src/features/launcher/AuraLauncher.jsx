import { useState, useMemo, memo } from 'react';
import { useCarSimulation } from '../../hooks/useCarSimulation.js';
import { useAdaptiveTheme } from '../../hooks/useAdaptiveTheme.js';
import { useMediaPlayer } from '../../hooks/useMediaPlayer.js';
import LiquidBackground from './LiquidBackground.jsx';
import StatusBar from './StatusBar.jsx';
import FloatingNav from './FloatingNav.jsx';
import ClimateBar from '../climate/ClimateBar.jsx';
import ModularDashboard from '../home/ModularDashboard.jsx';
import IntelligencePanel from '../ai/IntelligencePanel.jsx';
import MusicExperience from '../music/MusicExperience.jsx';
import CarPlayNative from '../carplay/CarPlayNative.jsx';
import VehicleView from '../vehicle/VehicleView.jsx';
import SettingsApp from '../settings/SettingsApp.jsx';

function ViewRouter({ nav, car, track, playing, progress, pct, onToggle, theme, onColorChange, pipRect }) {
  switch (nav) {
    case 'home':
      return <ModularDashboard car={car} track={track} playing={playing} />;
    case 'carplay':
      return <CarPlayNative pipRect={pipRect} />;
    case 'music':
      return (
        <MusicExperience
          track={track}
          playing={playing}
          progress={progress}
          pct={pct}
          onToggle={onToggle}
        />
      );
    case 'vehicle':
      return <VehicleView car={car} />;
    case 'ai':
      return <IntelligencePanel />;
    case 'settings':
      return <SettingsApp theme={theme} onColorChange={onColorChange} />;
    case 'nav':
      return (
        <div className="au-placeholder au-main-enter">
          <div>
            <strong>Navigation</strong>
            Headed to {car.navigation.destination} · {car.navigation.eta}
          </div>
        </div>
      );
    default:
      return (
        <div className="au-placeholder au-main-enter">
          <div><strong>{nav.toUpperCase()}</strong>Aura Module</div>
        </div>
      );
  }
}

export default memo(function AuraLauncher({
  theme,
  width,
  height,
  onColorChange,
}) {
  const [nav, setNav] = useState('home');
  const { car, time } = useCarSimulation();
  const { track, playing, progress, pct, toggle } = useMediaPlayer();
  const { tokens, drivingMode } = useAdaptiveTheme(theme, car, time, track);

  const isWide = width > 1280;
  const isDriving = drivingMode.simplify && car.speed > 40;
  const pipRect = theme.layout?.pipRect;

  const screenClass = useMemo(() => {
    const parts = ['au-screen'];
    if (isWide) parts.push('au-wide');
    if (isDriving) parts.push('driving');
    return parts.join(' ');
  }, [isWide, isDriving]);

  return (
    <div
      className={screenClass}
      style={{ width, height, ...tokens }}
    >
      <LiquidBackground />

      <StatusBar
        car={car}
        time={time}
        author={theme.author || theme.name}
        drivingMode={drivingMode}
      />

      <div className="au-body">
        <FloatingNav active={nav} onChange={setNav} />

        <main className="au-main" key={nav}>
          <ViewRouter
            nav={nav}
            car={car}
            track={track}
            playing={playing}
            progress={progress}
            pct={pct}
            onToggle={toggle}
            theme={theme}
            onColorChange={onColorChange}
            pipRect={pipRect}
          />
        </main>
      </div>

      <ClimateBar data={car} />
    </div>
  );
});
