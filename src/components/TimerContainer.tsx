import React, { useState } from 'react';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import formatTime from '../utils/functions';
import { db } from '../firebase';

type TimerContainerProps = {
  nickname: string,
  sec: number,
  id: string
};

const TimerContainer = ({ nickname, sec, id }: TimerContainerProps) => {
  const [newName, setNewName] = useState('');

  const rename = async () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  return (
    <div className="timer-data">
      <h2>{nickname}</h2>
      <h3>{formatTime(sec)}</h3>
      <input placeholder="Change Name" onChange={handleChange} />
      <button type="button" onClick={rename}>Rename</button>
      <button type="button" onClick={deleteTimer}>delete</button>
    </div>
  );
};

export default TimerContainer;
