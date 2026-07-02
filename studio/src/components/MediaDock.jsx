export default function MediaDock({ media, theme }) {
  const m = media.music;
  const r = media.radio;
  const bt = media.bluetooth;

  return (
    <div className="w-media" style={{ background: theme.colors.bottomBar }}>
      <div className="w-media-section w-media-music">
        <div className="w-media-art" style={{ background: 'linear-gradient(135deg,#FF6482,#BF5AF2)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M9 18V5l12-2v13" /><circle cx="7" cy="18" r="2.5" /><circle cx="19" cy="17" r="2.5" /></svg>
        </div>
        <div className="w-media-info">
          <strong>{m.title}</strong>
          <span>{m.artist} · {m.source}</span>
        </div>
        <div className="w-media-btns">
          <button type="button">⏮</button>
          <button type="button" className="play">{m.playing ? '⏸' : '▶'}</button>
          <button type="button">⏭</button>
        </div>
      </div>

      <div className="w-media-div" />

      <div className="w-media-section w-media-radio">
        <div className="w-media-art radio">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF9F0A"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49" stroke="#FF9F0A" strokeWidth="1.5" fill="none" /></svg>
        </div>
        <div className="w-media-info">
          <strong>{r.on ? r.station : 'Radio'}</strong>
          <span>{r.on ? r.band : 'Off'}</span>
        </div>
      </div>

      <div className="w-media-div" />

      <div className="w-media-section w-media-bt">
        <div className={`w-bt-icon ${bt.connected ? 'on' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.5 6.5a8.5 8.5 0 0 1 11 0M9 9a5 5 0 0 1 6 0M12 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="w-media-info">
          <strong>{bt.device}</strong>
          <span>{bt.carplay ? 'Apple CarPlay · ZLink' : 'Bluetooth'}</span>
        </div>
      </div>
    </div>
  );
}
