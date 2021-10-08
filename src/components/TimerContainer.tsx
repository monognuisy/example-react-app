import React, { useState } from 'react';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import formatTime from '../utils/functions';
import { db } from '../firebase';

type TimerContainerProps = {
  nickname: string,
  sec: number,
  id: string
  setTime: Function,
  setPause: Function,
};

const TimerContainer = ({
  nickname, sec, id, setTime, setPause,
}: TimerContainerProps) => {
  const [newName, setNewName] = useState('');

  const renameTimer = async () => {
    const docRef = doc(db, 'timers', id);
    const payload = {
      nickname: newName,
      sec,
      id,
    };
    setDoc(docRef, payload);
  };

  const deleteTimer = async () => {
    const docRef = doc(db, 'timers', id);
    deleteDoc(docRef);
  };

  const loadTimer = () => {
    setTime(sec);
    setPause({
      isPaused: true,
      str: 'Resume!',
      btnStyle: {
        backgroundColor: '#fac61c',
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  return (
    <div className="timer-data">
      <h2>{nickname}</h2>
      <h3>{formatTime(sec)}</h3>
      <input placeholder="Change Name" onChange={handleChange} />
      <button type="button" onClick={renameTimer}>Rename</button>
      <button type="button" onClick={loadTimer}>Load</button>
      <button type="button" onClick={deleteTimer}>Delete</button>
    </div>
  );
};

export default TimerContainer;
