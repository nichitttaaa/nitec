import { useEffect, useState } from 'react';

const TimerPage = () => {
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(100);

  useEffect(() => {

    const timerMs = 100
    setProgress(100)

    const delay = (timerMs / seconds / 1000) * 100
    if (progress > 0 && seconds > 0) {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 0) {

          return prev - delay;
        } else {
          setSeconds(0);
          return 100;
        }
      });
    }, timerMs);
     return ()=>{
       clearInterval(interval)
     }
    }
  }, [seconds]);
  return (
    <div className="flex gap-4  flex-col  px-10 py-10">
      <h1>Elipsed Time:{progress.toFixed(2)}</h1>
      <h1>{seconds}s</h1>
      <label htmlFor="Duration">Duration:</label>
      <input
        type="range"
        value={seconds}
        onChange={(e) => {
          setSeconds(+e.target.value);
        }}
        id="Duration"
        name="Duration"
        min={0}
        max={30}
      />
      <button
        onClick={() => {
          setSeconds(0);
          setProgress(100);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerPage;
