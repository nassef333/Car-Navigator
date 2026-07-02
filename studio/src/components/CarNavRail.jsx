function HomeIcon() {
  return (
    <svg className="cr-rail-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="8" cy="12" r="6" />
      <circle cx="16" cy="12" r="6" />
      <path d="M8 9v6M16 9v6" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

const ITEMS = [
  { id: 'home', label: 'Home', icon: <HomeIcon />, svg: true },
  { id: 'zlink', label: 'CarPlay', icon: '◉' },
  { id: 'music', label: 'Music', icon: '♫' },
  { id: 'nav', label: 'Nav', icon: '◎' },
  { id: 'phone', label: 'Phone', icon: '☎' },
  { id: 'car', label: 'Car', icon: '⬡' },
];

export default function CarNavRail({ active, onChange, accent }) {
  return (
    <nav className="cr-rail">
      {ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`cr-rail-btn ${active === item.id ? 'active' : ''} ${item.id === 'home' ? 'cr-rail-home' : ''}`}
          onClick={() => onChange(item.id)}
          title={item.label}
          style={active === item.id ? { color: accent, borderColor: `${accent}44` } : undefined}
        >
          <span className="cr-rail-icon">{item.svg ? item.icon : item.icon}</span>
          <span className="cr-rail-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
