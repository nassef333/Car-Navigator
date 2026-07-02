import { memo } from 'react';
import { IconApple } from '../../icons/SFSymbols.jsx';

export default memo(function CarPlayNative({ pipRect }) {
  return (
    <div className="au-carplay au-main-enter">
      <div className="au-carplay-frame">
        <header className="au-carplay-head">
          <div className="au-carplay-title">
            <IconApple size={16} color="#fff" />
            <span>CarPlay Ultra</span>
          </div>
          <div className="au-carplay-live">
            <span className="au-status-dot" />
            ZLink Active
          </div>
        </header>
        <div className="au-carplay-viewport">
          <iframe
            title="ZLink CarPlay"
            src="/zlink-mock.html"
            className="au-carplay-iframe"
            sandbox="allow-scripts allow-same-origin"
          />
          <div className="au-carplay-mask" />
        </div>
      </div>
    </div>
  );
});
