const PRESETS = [
  { id: 'hyper', name: 'HyperDrive', nameAr: 'هايبر', primary: '#00E5FF' },
  { id: 'carplay', name: 'CarPlay', nameAr: 'كاربلاي', primary: '#0A84FF' },
];

const COLORS = [
  { key: 'primary', label: 'لون التمييز' },
  { key: 'textPrimary', label: 'النص' },
  { key: 'bottomBar', label: 'شريط الميديا' },
];

const PIP_FIELDS = [
  { key: 'x', label: 'PiP X', min: 200, max: 600 },
  { key: 'y', label: 'PiP Y', min: 0, max: 80 },
  { key: 'w', label: 'PiP Width', min: 800, max: 1700 },
  { key: 'h', label: 'PiP Height', min: 400, max: 650 },
];

export default function ThemeEditor({
  section, theme, onColorChange, onLayoutChange, onNameChange, onNameArChange, onAuthorChange,
  onPipChange, resolution,
}) {
  if (section === 'guide') {
    return (
      <div className="editor-content">
        <h3 className="panel-heading">تثبيت على FYT</h3>
        <ol className="steps">
          <li>الثيم مبني على <strong>launcher17</strong> — نفس هيكل ZIP اللي عندك</li>
          <li>شغّل <code>npm run build-installer</code></li>
          <li>انسخ ZIP للفلاشة (FAT32)</li>
          <li>وصّل بشاشة FYT — التثبيت تلقائي</li>
        </ol>
        <h3 className="panel-heading">PiP / ZLink</h3>
        <p className="note">
          نافذة CarPlay تستخدم <code>com.lsec.pipdie</code> و
          <code> sys.lsec.pip_rect</code> — نفس launcher17.
          تطبيق ZLink: <code>{theme.pip?.package}</code>
        </p>
        <h3 className="panel-heading">CAN Bus</h3>
        <p className="note">
          بيانات السيارة من <code>com.syu.canbus</code> — السرعة،
          الأبواب، الأضواء، A/C. لازم يكون مثبت على الشاشة.
        </p>
        <div className="spec-card">
          <div><span>الدقة</span><strong>{resolution.width}×{resolution.height}</strong></div>
          <div><span>Launcher</span><strong>{theme.baseLauncher}</strong></div>
        </div>
      </div>
    );
  }

  if (section === 'themes') {
    return (
      <div className="editor-content">
        <h3 className="panel-heading">الثيمات</h3>
        <div className="theme-grid">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className="theme-card"
              onClick={() => {
                onColorChange('primary', p.primary);
                onNameChange(p.name);
                onNameArChange(p.nameAr);
              }}
            >
              <div className="theme-card-preview" style={{ background: '#000' }}>
                <div className="theme-card-dot" style={{ background: p.primary }} />
              </div>
              <span>{p.nameAr}</span>
            </button>
          ))}
        </div>
        <h3 className="panel-heading">الاسم</h3>
        <div className="field-group">
          <label className="field-label">اسم الثيم</label>
          <input className="field" value={theme.name} onChange={(e) => onNameChange(e.target.value)} />
          <input className="field" value={theme.nameAr} onChange={(e) => onNameArChange(e.target.value)} dir="rtl" placeholder="الاسم بالعربي" />
        </div>
        <div className="field-group">
          <label className="field-label">المصمم</label>
          <input className="field" value={theme.author || ''} onChange={(e) => onAuthorChange(e.target.value)} />
        </div>
      </div>
    );
  }

  if (section === 'colors') {
    return (
      <div className="editor-content">
        <h3 className="panel-heading">الألوان</h3>
        <div className="color-list">
          {COLORS.map(({ key, label }) => (
            <label key={key} className="color-item">
              <span>{label}</span>
              <div className="color-picker-wrap">
                <span className="hex">{theme.colors[key]}</span>
                <span className="swatch" style={{ background: theme.colors[key] }}>
                  <input type="color" value={theme.colors[key]?.startsWith('#') ? theme.colors[key] : '#000000'} onChange={(e) => onColorChange(key, e.target.value)} />
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (section === 'layout') {
    return (
      <div className="editor-content">
        <h3 className="panel-heading">CarPlay</h3>
        <p className="note">CarPlay بحجمه الطبيعي — يملأ الجانب الأيمن من الشاشة بالكامل.</p>
        <div className="slider-item">
          <div className="slider-label">
            <span>عرض لوحة السيارة</span>
            <span className="val">{theme.layout.leftPanelWidth || theme.layout.widgetColumnWidth}px</span>
          </div>
          <input type="range" min="420" max="600" value={theme.layout.leftPanelWidth || theme.layout.widgetColumnWidth} onChange={(e) => onLayoutChange('leftPanelWidth', e.target.value)} />
        </div>
      </div>
    );
  }

  return null;
}
