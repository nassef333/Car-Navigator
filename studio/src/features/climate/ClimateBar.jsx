import { memo } from 'react';
import { IconMinus, IconPlus } from '../../icons/SFSymbols.jsx';

export default memo(function ClimateBar({ data }) {
  const ac = data.ac;
  return (
    <footer className="au-climate">
      <button type="button" className="au-climate-btn">⌂</button>
      <button type="button" className={`au-climate-btn ${ac.on ? 'on' : ''}`}>A/C</button>

      <div className="au-climate-temp">
        <button type="button" aria-label="Decrease left temp"><IconMinus size={14} /></button>
        <span>{ac.tempL}°</span>
        <button type="button" aria-label="Increase left temp"><IconPlus size={14} /></button>
      </div>

      <div className="au-climate-fan">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <i
            key={n}
            className={n <= ac.fan ? 'on' : ''}
            style={{ height: `${8 + n * 3}px` }}
          />
        ))}
      </div>

      <div className="au-climate-temp">
        <button type="button" aria-label="Decrease right temp"><IconMinus size={14} /></button>
        <span>{ac.tempR}°</span>
        <button type="button" aria-label="Increase right temp"><IconPlus size={14} /></button>
      </div>

      <button type="button" className={`au-climate-btn ${ac.auto ? 'on' : ''}`}>AUTO</button>

      <div className="au-climate-sep" />
      <span className="au-climate-info">INTAKE {data.intake}°C</span>
      <span className={`au-climate-info ${data.lights.headlight ? 'on' : ''}`}>LIGHTS</span>
    </footer>
  );
});
