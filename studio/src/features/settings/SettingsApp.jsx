import { memo, useState } from 'react';
import { IconSearch, IconMinus, IconPlus } from '../../icons/SFSymbols.jsx';

const CATEGORIES = [
  { id: 'appearance', label: 'Appearance' },
  { id: 'display', label: 'Display' },
  { id: 'performance', label: 'Performance' },
  { id: 'car', label: 'Vehicle' },
  { id: 'developer', label: 'Developer' },
];

const ACCENTS = ['#3B9EFF', '#00E5FF', '#BF5AF2', '#FF6482', '#30D158', '#FF9F0A'];

function Toggle({ on, onToggle }) {
  return (
    <button type="button" className={`au-toggle ${on ? 'on' : ''}`} onClick={onToggle} aria-pressed={on} />
  );
}

export default memo(function SettingsApp({ theme, onColorChange }) {
  const [cat, setCat] = useState('appearance');
  const [perfMode, setPerfMode] = useState(false);
  const [animations, setAnimations] = useState(true);
  const [devMode, setDevMode] = useState(false);

  return (
    <div className="au-settings au-main-enter">
      <div className="au-card au-settings-nav">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={cat === c.id ? 'active' : ''}
            onClick={() => setCat(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="au-card au-settings-panel">
        <div className="au-settings-search">
          <IconSearch size={16} color="var(--au-text-dim)" />
          <input type="text" placeholder="Search settings…" />
        </div>

        {cat === 'appearance' && (
          <>
            <div className="au-settings-group">
              <h3>Accent Color</h3>
              <div className="au-color-swatches">
                {ACCENTS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`au-swatch ${theme.colors.primary === c ? 'active' : ''}`}
                    style={{ background: c }}
                    onClick={() => onColorChange?.('primary', c)}
                    aria-label={`Accent ${c}`}
                  />
                ))}
              </div>
            </div>
            <div className="au-settings-group">
              <h3>Motion</h3>
              <div className="au-setting-row">
                <span>Fluid animations</span>
                <Toggle on={animations} onToggle={() => setAnimations((v) => !v)} />
              </div>
            </div>
          </>
        )}

        {cat === 'display' && (
          <div className="au-settings-group">
            <h3>Head Unit</h3>
            <div className="au-setting-row"><span>Resolution</span><span>1280 × 720</span></div>
            <div className="au-setting-row"><span>Launcher</span><span>launcher17</span></div>
            <div className="au-setting-row"><span>PiP Package</span><span>com.zjin.zlink</span></div>
          </div>
        )}

        {cat === 'performance' && (
          <div className="au-settings-group">
            <h3>Rendering</h3>
            <div className="au-setting-row">
              <span>Performance mode</span>
              <Toggle on={perfMode} onToggle={() => setPerfMode((v) => !v)} />
            </div>
            <div className="au-setting-row"><span>Target FPS</span><span>60</span></div>
            <div className="au-setting-row"><span>GPU acceleration</span><span>Enabled</span></div>
          </div>
        )}

        {cat === 'car' && (
          <div className="au-settings-group">
            <h3>CAN Bus</h3>
            <div className="au-setting-row"><span>Package</span><span>com.syu.canbus</span></div>
            <div className="au-setting-row"><span>Speed signal</span><span>CUR_SPEED</span></div>
            <div className="au-setting-row"><span>Doors</span><span>C_SHOW_DOOR_WINDOW</span></div>
            <div className="au-setting-row"><span>Climate</span><span>C_SHOW_AIR_WINDOW</span></div>
          </div>
        )}

        {cat === 'developer' && (
          <div className="au-settings-group">
            <h3>Debug</h3>
            <div className="au-setting-row">
              <span>Developer mode</span>
              <Toggle on={devMode} onToggle={() => setDevMode((v) => !v)} />
            </div>
            {devMode && (
              <>
                <div className="au-setting-row"><span>Chipset</span><span>UIS7862</span></div>
                <div className="au-setting-row"><span>Theme version</span><span>3.0.0</span></div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
});
