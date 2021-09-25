import React, { useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  const onIncrease = () => {
    setTime((n) => n + 1);
  };

  const onDecrease = () => {
    setTime((n) => n - 1);
  };

  return (
    <div className="timer">
      <div className="timer-text-box">
        <h1>{time}</h1>
      </div>
      <div className="timer-button-box">
        <button type="button" onClick={onIncrease}>+</button>
        <button type="button" onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Timer;
