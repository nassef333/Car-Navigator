export default function Waveform({ color, bars = 24 }) {
  return (
    <div className="waveform" aria-hidden="true">
      {Array.from({ length: bars }, (_, i) => (
        <span
          key={i}
          className="wave-bar"
          style={{
            '--i': i,
            '--color': color,
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
    </div>
  );
}
