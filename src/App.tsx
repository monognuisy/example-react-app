import type { User } from 'firebase/auth';
import React, { useState } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import './style/App.css';
import Timer from './components/Timer';

const App = () => {
  const [state, setState] = useState<{
    token: string | null;
    user: User | null;
    isLoggedIn: boolean;
  }>({
    token: JSON.parse(localStorage.getItem('token') ?? '{}') ?? null,
    user: JSON.parse(localStorage.getItem('user') ?? '{}') ?? null,
    isLoggedIn: !!(JSON.parse(localStorage.getItem('user') ?? '{}') ?? null),
  });

  // App state에 token과 user, login여부를 설정한다.
  const setAuth = ({ token, user }: { token: string | null, user: User | null}) => {
    setState({
      token,
      user,
      isLoggedIn: !!user,
    });

    // localStorage에 'token'과 'user'를 키로 갖도록 token과 user 정보를 저장합니다.
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div className="App">
      {
        state.isLoggedIn
          ? (
            <div>
              <Timer />
              <LogoutButton onLogout={() => setAuth({
                token: null,
                user: null,
              })}
              />
            </div>
          )
          : <LoginButton onLogin={setAuth} />
      }
    </div>
  );
};

export default App;
