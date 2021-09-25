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
    const inputTime: number = Math.abs(parseInt(e.target.value, 10));

    if (Number.isNaN(inputTime)) {
      setSecond(0);
    } else {
      setSecond(inputTime);
    }
  };

  /* eslint no-bitwise: ["error", { "allow": ["~"] }] */
  const formatTime = (sec: number):string => {
    const hourVal = ~~(sec / 3600);
    const minuteVal = ~~((sec % 3600) / 60);
    const secondVal = sec % 60;

    let resultString = (hourVal ? `${hourVal.toString()}h ` : '')
    + (minuteVal ? `${minuteVal.toString()}m ` : '');

    if (secondVal === 0 && (hourVal || minuteVal)) {
      resultString += '';
    } else {
      resultString += secondVal.toString();
    }

    return resultString;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (second > 0) {
        setSecond((s) => s - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [second]);

  return (
    <div className="timer">
      <div className="timer-text-box">
        <h1>{formatTime(second)}</h1>
      </div>
      <div className="timer-button-box">
        <input
          placeholder="Write down Time(second)"
          onChange={handleChange}
          className="timer-input"
        />
        <button type="button" onClick={onIncrease} className="timer-button">
          + 10
        </button>
        <button type="button" onClick={onDecrease} className="timer-button">
          - 10
        </button>
      </div>
    </div>
  );
};

export default Timer;
