import { memo } from 'react';
import { IconPlay, IconPause, IconPrev, IconNext } from '../../icons/SFSymbols.jsx';

function fmt(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default memo(function MusicExperience({ track, playing, progress, pct, onToggle }) {
  const activeLyric = track.lyrics?.reduce((acc, l) => (progress >= l.time ? l : acc), track.lyrics[0]);

  return (
    <div className="au-music-view au-main-enter">
      <div className="au-card au-music-hero">
        <div
          className={`au-music-hero-art ${playing ? 'au-playing' : ''}`}
          style={{ background: track.gradient }}
        />
        <div className="au-music-wave">
          {[...Array(24)].map((_, i) => (
            <i
              key={i}
              className={playing ? 'on' : ''}
              style={{
                height: `${20 + Math.sin(i * 0.8) * 15 + 15}%`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="au-card au-music-detail">
        <span className="au-card-label">Now Playing</span>
        <h2>{track.title}</h2>
        <p>{track.artist} · {track.album}</p>
        <p style={{ fontSize: 11, opacity: 0.6 }}>{track.source} · {track.device}</p>

        <div className="au-music-progress">
          <time>{fmt(progress)}</time>
          <div className="au-progress">
            <div className="au-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <time>{fmt(track.duration)}</time>
        </div>

        <div className="au-music-ctrl">
          <button type="button" className="au-ctrl-btn" aria-label="Previous"><IconPrev size={18} /></button>
          <button type="button" className="au-ctrl-btn play" onClick={onToggle} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? <IconPause size={22} color="#000" /> : <IconPlay size={22} color="#000" />}
          </button>
          <button type="button" className="au-ctrl-btn" aria-label="Next"><IconNext size={18} /></button>
        </div>

        <div className="au-lyrics">
          {track.lyrics?.map((l) => (
            <p key={l.time} className={`au-lyric ${activeLyric?.time === l.time ? 'active' : ''}`}>
              {l.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
});
