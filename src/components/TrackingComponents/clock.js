import { useEffect, useRef, useState } from 'react';

const AnalogClock = ({ speed }) => {
  const [time, setTime] = useState(() => {
    const currentTime = new Date();
    const initialTime = new Date(currentTime.getTime() - (2 * 60 * 60 * 1000)); // Subtract 2 hours
    return initialTime;
  });
  const timeoutRef = useRef(null);
  const lastTickRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    lastTickRef.current = Date.now();

    const tick = () => {
      const now = Date.now();
      const elapsed = now - lastTickRef.current;
      const nextTickDelay = Math.max(1000 / speed - elapsed, 0);

      setTime(prevTime => {
        const newTime = new Date(prevTime.getTime() - 1000 * speed);
        lastTickRef.current = now;
        timeoutRef.current = setTimeout(tick, nextTickDelay);
        return newTime;
      });
    };

    tick();

    return () => clearTimeout(timeoutRef.current);
  }, [speed]);

  // Calculate degrees for each hand
  const getDegrees = (current, total) => {
    const ratio = current / total;
    return ratio * 360;
  };

  const hoursDegrees = getDegrees(time.getHours() % 12, 12) - 90;
  const minutesDegrees = getDegrees(time.getMinutes(), 60) - 90;
  const secondsDegrees = getDegrees(time.getSeconds(), 60) - 90;

  return (
    <div className='h-22 flex justify-center mx-auto'>
    <div className="w-72 h-72 border-4 border-slate-400 bg-[#FE8C00] rounded-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute top-[10.188rem] w-1.5 h-16 bg-white transform origin-bottom rounded-lg"
        style={{ transform: `rotate(${hoursDegrees}deg)` }}
      />
      <div
        className="absolute top-[8.434rem] w-1.5 h-24 bg-white transform origin-bottom rounded-lg"
        style={{ transform: `rotate(${minutesDegrees}deg)`}}
      />
      <div
        className="absolute top-[7.430rem] w-0.5 h-28 bg-white transform origin-bottom rounded-lg overflow-hidden"
        style={{ transform: `rotate(${secondsDegrees}deg)`}}
      />
      <div className="absolute w-4 h-4 bg-slate-400 rounded-full"></div>
    </div>
    </div>
  );
};

export default AnalogClock;
