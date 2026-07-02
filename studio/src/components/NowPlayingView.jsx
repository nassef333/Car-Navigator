export default function NowPlayingView({ track, playing, progress, onToggle, accent }) {
  const pct = track.duration ? (progress / track.duration) * 100 : 0;
  const m = Math.floor(progress / 60);
  const s = Math.floor(progress % 60).toString().padStart(2, '0');
  const dm = Math.floor(track.duration / 60);
  const ds = Math.floor(track.duration % 60).toString().padStart(2, '0');

  return (
    <div className="cr-now-playing">
      <div className="cr-np-art" style={{ background: track.gradient }}>
        <div className="cr-np-disc" />
      </div>
      <div className="cr-np-info">
        <span className="cr-np-label">NOW PLAYING</span>
        <h2>{track.title}</h2>
        <p>{track.artist} · {track.album}</p>
        <div className="cr-np-progress">
          <span>{m}:{s}</span>
          <div className="cr-progress"><div className="cr-progress-fill" style={{ width: `${pct}%`, background: accent }} /></div>
          <span>{dm}:{ds}</span>
        </div>
        <div className="cr-np-ctrl">
          <button type="button">‹‹</button>
          <button type="button" className="play" style={{ background: accent }} onClick={onToggle}>
            {playing ? '❚❚' : '▶'}
          </button>
          <button type="button">››</button>
        </div>
      </div>
    </div>
  );
}
