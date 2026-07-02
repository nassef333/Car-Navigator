export default function FutureDock({ car, media, accent }) {
  return (
    <footer className="nx-dock">
      <div className="nx-dock-inner">
        <div className="nx-dock-zone nx-dock-media">
          <span className="nx-dz-label">MEDIA</span>
          <div className="nx-dz-content">
            <div className="nx-dz-art" style={{ background: `linear-gradient(135deg, ${accent}, #7C4DFF)` }} />
            <div>
              <strong>Blinding Lights</strong>
              <span>{media.bluetooth.device}</span>
            </div>
            <div className="nx-dz-btns">
              <button type="button">‹</button>
              <button type="button" className="play">▶</button>
              <button type="button">›</button>
            </div>
          </div>
        </div>

        <div className="nx-dock-sep" />

        <div className="nx-dock-zone nx-dock-radio">
          <span className="nx-dz-label">RADIO</span>
          <div className="nx-dz-content compact">
            <strong>{media.radio.station}</strong>
            <span>{media.radio.freq}</span>
          </div>
        </div>

        <div className="nx-dock-sep" />

        <div className="nx-dock-zone nx-dock-climate climate">
          <span className="nx-dz-label">CLIMATE</span>
          <div className="nx-climate-row">
            <button type="button" className={car.ac.on ? 'active' : ''}>A/C</button>
            <div className="nx-temp-ctrl">
              <button type="button">−</button>
              <span>{car.ac.tempL}°</span>
              <button type="button">+</button>
            </div>
            <div className="nx-fan">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <i key={n} className={n <= car.ac.fan ? 'on' : ''} style={{ height: 4 + n * 3 }} />
              ))}
            </div>
            <button type="button" className={car.ac.auto ? 'active' : ''}>AUTO</button>
          </div>
        </div>

        <div className="nx-dock-sep nx-dock-sep-quick" />

        <div className="nx-dock-quick">
          {['Home', 'Apps', 'Nav', 'Phone'].map((q) => (
            <button key={q} type="button">{q}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}
