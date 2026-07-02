export default function ZLinkPip({ theme, media, rect }) {
  return (
    <div
      className="w-pip"
      style={{
        left: rect.x,
        top: rect.y,
        width: rect.w,
        height: rect.h,
        borderRadius: theme.layout.pipCornerRadius,
      }}
    >
      <div className="w-pip-chrome">
        <div className="w-pip-label">
          <span className="w-pip-dot" />
          {theme.pip?.label || 'ZLink · CarPlay'}
          <span className="w-pip-live">LIVE</span>
        </div>
        <div className="w-pip-actions">
          <button type="button" title="Resize">⤢</button>
          <button type="button" title="Close">✕</button>
        </div>
      </div>

      <div className="w-pip-body">
        <div className="w-iphone-frame">
          <div className="w-iphone-notch" />
          <div className="w-iphone-screen">
            <div className="w-carplay">
              <div className="w-carplay-grid">
                {[
                  { l: 'Maps', c: '#30D158', i: '🗺' },
                  { l: 'Music', c: '#FF375F', i: '🎵' },
                  { l: 'Phone', c: '#30D158', i: '📞' },
                  { l: 'Messages', c: '#30D158', i: '💬' },
                  { l: 'Calendar', c: '#FF3B30', i: '📅' },
                  { l: 'Settings', c: '#8E8E93', i: '⚙' },
                ].map((a) => (
                  <div key={a.l} className="w-cp-app">
                    <div className="w-cp-icon" style={{ background: a.c }}>{a.i}</div>
                    <span>{a.l}</span>
                  </div>
                ))}
              </div>
              <div className="w-carplay-status">
                <span>{media.bluetooth.device}</span>
                <span className="w-bt-connected">● Connected</span>
              </div>
            </div>
          </div>
          <div className="w-iphone-home" />
        </div>

        <div className="w-pip-hint">
          PiP · {theme.pip?.package || 'com.zjin.zlink'}
          <br />
          <small>sys.lsec.pip_rect = {rect.x} {rect.y} {rect.x + rect.w} {rect.y + rect.h}</small>
        </div>
      </div>
    </div>
  );
}
