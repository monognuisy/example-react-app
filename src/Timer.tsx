import React, { useEffect, useState } from 'react';

const Timer = () => {
  const pauseTrue = {
    isPaused: true,
    str: 'Resume!',
    btnStyle: {
      backgroundColor: '#fac61c',
    },
  };
  const pauseFalse = {
    isPaused: false,
    str: 'Pause!',
    btnStyle: {
      backgroundColor: '#07c900',
    },
  };

  const [second, setSecond] = useState(0);
  const [pauseObj, setPauseObj] = useState(pauseTrue);

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

  const togglePause = () => {
    if (pauseObj.isPaused) {
      setPauseObj(pauseFalse);
    } else {
      setPauseObj(pauseTrue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTime: number = Math.abs(parseInt(e.target.value, 10));

    if (Number.isNaN(inputTime)) {
      setSecond(0);
    } else {
      setSecond(inputTime);
    }

    // 새로운 시간을 입력하면 pause
    setPauseObj(pauseTrue);
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
    // 시간이 0이면 자동적으로 pause
    if (second === 0) {
      setPauseObj(pauseTrue);
    }

    // countdown
    const interval = setInterval(() => {
      if (!pauseObj.isPaused) {
        if (second > 0) {
          setSecond((s) => s - 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [second, pauseObj]);

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
      <div className="timer-pause-box">
        <button
          type="button"
          onClick={togglePause}
          className="timer-pause"
          style={pauseObj.btnStyle}
        >
          {[pauseObj.str]}
        </button>
      </div>
    </div>
  );
};

export default Timer;
