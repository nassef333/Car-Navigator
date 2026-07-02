import { useState, useEffect } from 'react';

export default function AnalogClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const s = now.getSeconds() * 6;
  const m = now.getMinutes() * 6 + now.getSeconds() * 0.1;
  const h = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;

  return (
    <div className="w-clock">
      <img src="/clock_bg.png" alt="" className="w-clock-bg" draggable={false} />
      <svg className="w-clock-hands" viewBox="0 0 200 200">
        <line x1="100" y1="100" x2="100" y2="55" stroke="#fff" strokeWidth="3" strokeLinecap="round" transform={`rotate(${h} 100 100)`} />
        <line x1="100" y1="100" x2="100" y2="40" stroke="#fff" strokeWidth="2" strokeLinecap="round" transform={`rotate(${m} 100 100)`} />
        <line x1="100" y1="100" x2="100" y2="30" stroke="#0A84FF" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${s} 100 100)`} />
        <circle cx="100" cy="100" r="4" fill="#fff" />
      </svg>
      <div className="w-clock-digital">
        {now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
}
