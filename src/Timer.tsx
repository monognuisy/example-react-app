import React, { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore';
import { db, collection, onSnapshot } from './firebase';
import formatTime from './functions';
import TimerContainer from './TimerContainer';
// import TimerContainer from './TimerContainer';

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
  const [timerNum, setTimerNum] = useState(0);
  const [timerStarred, setTimerStarred] = useState<DocumentData[]>([]);

  // const timerStarred: Array<DocumentData> = [];
  // const container: Array<ReactElement> = [];

  // const tempContainer = [<TimerContainer nickname="hello" sec={60} />];
  // tempContainer.push(<TimerContainer nickname="dude" sec={30} />);

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

  const bookmark = () => {
    setTimerNum(timerNum + 1);
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

  useEffect(() => {
    onSnapshot(collection(db, 'timers'), (snapshot) => {
      setTimerStarred(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timer">
      <div className="left-box">
        {}
      </div>
      <div className="center-box">

        <div className="timer-text-box">
          <h1>{formatTime(second)}</h1>
        </div>
        <div className="timer-button-box">
          <input
            placeholder="Write down Time(second)"
            onChange={handleChange}
            className="timer-input"
          />
          <button type="button" onClick={onIncrease} className="button timer-increase">
            +
          </button>
          <button type="button" onClick={onDecrease} className="button timer-decrease">
            -
          </button>
          <button type="button" onClick={bookmark} className="button bookmark-button">
            🌟
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
      <div className="right-box">
        {timerStarred.map((item) => (
          <TimerContainer nickname={item.nickname} sec={item.sec} />
        ))}
      </div>
    </div>
  );
};

export default Timer;
