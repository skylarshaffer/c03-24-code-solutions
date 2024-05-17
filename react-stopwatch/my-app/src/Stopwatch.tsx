import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handlePlayClick() {
    setIntervalId(
      setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000)
    );
  }

  function handlePauseClick() {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }

  return (
    <div className="container">
      <div
        style={{ cursor: intervalId ? '' : 'pointer' }}
        className="stopwatch"
        onClick={() => {
          intervalId || setCount(0);
        }}>
        <span>{count}</span>
      </div>
      <FaPlay
        style={{ display: intervalId ? 'none' : '' }}
        onClick={handlePlayClick}
      />
      <FaPause
        style={{ display: intervalId ? '' : 'none' }}
        onClick={handlePauseClick}
      />
    </div>
  );
}
