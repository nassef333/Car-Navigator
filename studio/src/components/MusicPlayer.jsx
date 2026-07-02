function fmt(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function MusicPlayer({ track, playing, progress, onToggle, accent }) {
  const pct = track.duration ? (progress / track.duration) * 100 : 0;

  return (
    <div className="cr-player">
      <div className="cr-player-art" style={{ background: track.gradient || `linear-gradient(135deg, ${accent}, #7C4DFF)` }}>
        <div className="cr-player-vinyl" />
      </div>

      <div className="cr-player-meta">
        <strong>{track.title}</strong>
        <span>{track.artist}</span>
        <div className="cr-player-source">
          <span className="cr-src active">{track.source}</span>
          <span>·</span>
          <span>{track.device}</span>
        </div>
      </div>

      <div className="cr-player-timeline">
        <span className="cr-time">{fmt(progress)}</span>
        <div className="cr-progress">
          <div className="cr-progress-fill" style={{ width: `${pct}%`, background: accent }} />
          <div className="cr-progress-knob" style={{ left: `${pct}%`, borderColor: accent }} />
        </div>
        <span className="cr-time">{fmt(track.duration)}</span>
      </div>

      <div className="cr-player-ctrl">
        <button type="button" className="cr-ctrl-sm" aria-label="Shuffle">⇄</button>
        <button type="button" className="cr-ctrl-md" aria-label="Previous">‹‹</button>
        <button
          type="button"
          className="cr-ctrl-play"
          style={{ background: accent, boxShadow: `0 4px 20px ${accent}55` }}
          onClick={onToggle}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <button type="button" className="cr-ctrl-md" aria-label="Next">››</button>
        <button type="button" className="cr-ctrl-sm" aria-label="Repeat">↻</button>
      </div>

      <div className="cr-player-eq" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <i key={i} className={playing ? 'on' : ''} style={{ animationDelay: `${i * 0.08}s` }} />
        ))}
      </div>
    </div>
  );
}
