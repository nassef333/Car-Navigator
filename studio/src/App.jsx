import { useState, useEffect, useCallback } from 'react';
import FytPreview from './components/FytPreview.jsx';
import ThemeEditor from './components/ThemeEditor.jsx';
import { defaultTheme, RESOLUTIONS } from './defaultTheme.js';

const NAV = [
  { id: 'themes', label: 'الثيمات', icon: '◉' },
  { id: 'colors', label: 'الألوان', icon: '◐' },
  { id: 'layout', label: 'المقاسات', icon: '▣' },
  { id: 'guide', label: 'التثبيت', icon: '↑' },
];

export default function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [resolution, setResolution] = useState('1280x720');
  const [scale, setScale] = useState(0.72);
  const [nav, setNav] = useState('themes');

  useEffect(() => {
    fetch('/theme.config.json')
      .then((r) => r.json())
      .then((c) => {
        setTheme((p) => ({
          ...p,
          name: c.name ?? p.name,
          nameAr: c.nameAr ?? p.nameAr,
          author: c.author ?? p.author,
          colors: { ...p.colors, ...c.colors },
          layout: { ...p.layout, ...c.layout },
          pip: c.pip ?? p.pip,
          wallpaper: c.wallpaper ?? p.wallpaper,
          baseLauncher: c.target?.baseLauncher ?? p.baseLauncher,
        }));
      })
      .catch(() => {});
  }, []);

  const setColor = useCallback((k, v) => {
    setTheme((p) => ({ ...p, colors: { ...p.colors, [k]: v } }));
  }, []);

  const setLayout = useCallback((k, v) => {
    setTheme((p) => ({ ...p, layout: { ...p.layout, [k]: Number(v) } }));
  }, []);

  const setPip = useCallback((pipRect) => {
    setTheme((p) => ({ ...p, layout: { ...p.layout, pipRect } }));
  }, []);

  const setAuthor = useCallback((author) => {
    setTheme((p) => ({ ...p, author }));
  }, []);

  const exportTheme = useCallback(() => {
    const blob = new Blob([JSON.stringify({
      name: theme.name,
      nameAr: theme.nameAr,
      author: theme.author,
      version: '3.0.0',
      target: { platform: 'FYT', resolution, baseLauncher: theme.baseLauncher },
      colors: theme.colors,
      layout: theme.layout,
      pip: theme.pip,
      sysProps: {
        'sys.lsec.pip_rect': `${theme.layout.pipRect.x} ${theme.layout.pipRect.y} ${theme.layout.pipRect.x + theme.layout.pipRect.w} ${theme.layout.pipRect.y + theme.layout.pipRect.h}`,
        'persist.lsec.pip_pkg': theme.pip?.package || 'com.zjin.zlink',
      },
    }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'theme.config.json';
    a.click();
  }, [theme, resolution]);

  const res = RESOLUTIONS[resolution];

  return (
    <div className="studio">
      <div className="window">
        <header className="titlebar">
          <div className="traffic">
            <span className="r" /><span className="y" /><span className="g" />
          </div>
          <span className="titlebar-name">FYT Theme Studio · {theme.author || theme.name}</span>
          <div className="titlebar-actions">
            <select value={resolution} onChange={(e) => setResolution(e.target.value)}>
              {Object.entries(RESOLUTIONS).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
            <button type="button" className="btn-blue" onClick={exportTheme}>تصدير الثيم</button>
          </div>
        </header>

        <div className="window-body">
          <nav className="sidebar">
            {NAV.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                className={`nav-item ${nav === id ? 'active' : ''}`}
                onClick={() => setNav(id)}
              >
                <span className="nav-icon">{icon}</span>
                {label}
              </button>
            ))}
          </nav>

          <div className="workspace">
            <aside className="panel">
              <ThemeEditor
                section={nav}
                theme={theme}
                onColorChange={setColor}
                onLayoutChange={setLayout}
                onPipChange={setPip}
                onNameChange={(n) => setTheme((p) => ({ ...p, name: n }))}
                onNameArChange={(n) => setTheme((p) => ({ ...p, nameAr: n }))}
                onAuthorChange={setAuthor}
                resolution={res}
              />
            </aside>

            <section className="preview-zone">
              <div className="preview-header">
                <h2>{theme.nameAr || theme.name}</h2>
                <div className="zoom">
                  <input type="range" min="0.4" max="0.8" step="0.01" value={scale} onChange={(e) => setScale(+e.target.value)} />
                  <span>{Math.round(scale * 100)}%</span>
                </div>
              </div>
              <div className="preview-center">
                <FytPreview
                  theme={theme}
                  width={res.width}
                  height={res.height}
                  scale={scale}
                  onColorChange={setColor}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
