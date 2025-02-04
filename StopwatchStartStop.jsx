import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime(time + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Stopwatch: {time}s</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)} style={{ marginLeft: '10px' }}>
        Stop
      </button>
      <button onClick={() => { setTime(0); setRunning(false); }} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
