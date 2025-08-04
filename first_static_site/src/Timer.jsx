import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return
    const timerId = setInterval(() => {
        setSeconds(s => s + 1)
    }, 1000)
    return () => clearInterval(timerId)
  },[isRunning])

  return (
    <div>
      <h2>Timer</h2>
      <p>Time passed: {seconds} seconds</p>
      <button onClick={() => setIsRunning(cur => !cur)}>
        {isRunning ? "Pause Timer" : "Resume Timer"}
      </button>
      <button onClick={() => setSeconds(0)}>Reset Timer</button>
    </div>
  );
}

export default Timer;
