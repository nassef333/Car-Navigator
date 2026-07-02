import { useState, useEffect } from 'react';
import { initialCarData, simulateDrive } from '../carData.js';

export function useCarSimulation(intervalMs = 1000) {
  const [car, setCar] = useState(initialCarData);
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => {
      setCar((d) => simulateDrive(d));
      setTime(new Date());
    }, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);

  return { car, time };
}
