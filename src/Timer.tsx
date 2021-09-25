import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [second, setSecond] = useState(0);

  const onIncrease = () => {
    setSecond((n) => n + 10);
  };

  const onDecrease = () => {
    if (second < 10) {
      setSecond(0);
    } else {
      setSecond((n) => n - 10);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTime: number = parseInt(e.target.value, 10);

    if (Number.isNaN(inputTime)) {
      setSecond(0);
    } else {
      setSecond(inputTime);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (second > 0) {
        setSecond((s) => s - 1);
      }
    }, 1000);
    return (() => clearInterval(interval));
  }, [second]);

  return (
    <div className="timer">
      <div className="timer-text-box">
        <h1>{second}</h1>
      </div>
      <div className="timer-button-box">
        <button type="button" onClick={onIncrease}>+10</button>
        <button type="button" onClick={onDecrease}>-10</button>
      </div>
      <input placeholder="Write down Time(second)" onChange={handleChange} />
    </div>
  );
};

export default Timer;
