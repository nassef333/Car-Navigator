import { memo } from 'react';
import { NAV_DESTINATIONS } from '../../core/constants.js';
import { NavIcon } from '../../icons/SFSymbols.jsx';

export default memo(function FloatingNav({ active, onChange }) {
  return (
    <nav className="au-nav">
      {NAV_DESTINATIONS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`au-nav-btn ${active === id ? 'active' : ''}`}
          onClick={() => onChange(id)}
          title={label}
        >
          <NavIcon id={id} size={22} color="currentColor" />
          <span className="au-nav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
});
