import React from 'react';
import formatTime from './functions';

type TimerContainerProps = {
  nickname: string,
  sec: number
};

const TimerContainer = ({ nickname, sec }: TimerContainerProps) => (
  <div className="timer-data">
    <h3>{nickname}</h3>
    <h3>{formatTime(sec)}</h3>
    <input />
    <button type="button">Rename</button>
    <button type="button">delete</button>
  </div>
);

export default TimerContainer;
