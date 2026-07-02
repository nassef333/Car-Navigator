export default function ClimateBar({ data }) {
  return (
    <div className="hx-climate">
      <button type="button" className="hx-cl-btn">⌂</button>
      <button type="button" className="hx-cl-btn">▦</button>
      <div className="hx-cl-div" />
      <button type="button" className="hx-cl-btn">🌬</button>
      <button type="button" className={`hx-cl-btn ${data.ac.on ? 'active' : ''}`}>A/C</button>
      <button type="button" className="hx-cl-btn">🪑</button>
      <div className="hx-cl-temp">
        <button type="button">◀</button>
        <span>{data.ac.tempL}°</span>
        <button type="button">▶</button>
      </div>
      <div className="hx-cl-fan">
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <span key={n} className={n <= data.ac.fan ? 'on' : ''} />
        ))}
      </div>
      <div className="hx-cl-temp">
        <button type="button">◀</button>
        <span>{data.ac.tempR}°</span>
        <button type="button">▶</button>
      </div>
      <button type="button" className={`hx-cl-btn ${data.ac.auto ? 'active' : ''}`}>AUTO</button>
      <button type="button" className="hx-cl-btn">♻</button>
      <button type="button" className="hx-cl-btn">🔥</button>
    </div>
  );
}

export function RadioWidget({ media }) {
  return (
    <div className="hx-radio">
      <div className="hx-radio-icon">📻</div>
      <div className="hx-radio-info">
        <strong>{media.radio.station}</strong>
        <span>{media.radio.freq}</span>
      </div>
      <div className="hx-radio-ctrl">
        <button type="button">⏮</button>
        <button type="button" className="play">{media.radio.playing ? '⏸' : '▶'}</button>
        <button type="button">⏭</button>
      </div>
    </div>
  );
}
