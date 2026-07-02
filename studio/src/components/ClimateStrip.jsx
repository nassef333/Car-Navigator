export default function ClimateStrip({ data, accent }) {
  return (
    <footer className="cr-climate">
      <button type="button" className="cr-cl-btn">⌂</button>
      <button type="button" className={`cr-cl-btn ${data.ac.on ? 'on' : ''}`} style={data.ac.on ? { color: accent } : undefined}>A/C</button>
      <div className="cr-cl-temp">
        <button type="button">−</button>
        <span>{data.ac.tempL}°</span>
        <button type="button">+</button>
      </div>
      <div className="cr-cl-fan">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <i key={n} className={n <= data.ac.fan ? 'on' : ''} style={n <= data.ac.fan ? { background: accent } : undefined} />
        ))}
      </div>
      <div className="cr-cl-temp">
        <button type="button">−</button>
        <span>{data.ac.tempR}°</span>
        <button type="button">+</button>
      </div>
      <button type="button" className={`cr-cl-btn ${data.ac.auto ? 'on' : ''}`} style={data.ac.auto ? { color: accent } : undefined}>AUTO</button>
      <div className="cr-cl-sep" />
      <span className="cr-cl-info">INTAKE {data.intake}°C</span>
      <span className={`cr-cl-info ${data.lights.headlight ? 'on' : ''}`}>LIGHTS</span>
    </footer>
  );
}
