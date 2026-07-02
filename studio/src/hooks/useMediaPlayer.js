import { useState, useEffect, useCallback } from 'react';
import { defaultTrack } from '../carData.js';

export function useMediaPlayer(track = defaultTrack) {
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(42);

  useEffect(() => {
    if (!playing) return undefined;
    const t = setInterval(() => {
      setProgress((p) => (p >= track.duration ? 0 : p + 1));
    }, 1000);
    return () => clearInterval(t);
  }, [playing, track.duration]);

  const toggle = useCallback(() => setPlaying((p) => !p), []);
  const pct = track.duration ? (progress / track.duration) * 100 : 0;

  return { track, playing, progress, pct, toggle };
}
