import type { User } from 'firebase/auth';
import React from 'react';
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
    token: null,
    user: null,
    isLoggedIn: !!user,
  });

  // App state에 token과 user, login여부를 설정한다.
  const setAuth = ({ token, user }: { token: string | null, user: User | null}) => {
    setState({
      token,
      user,
      isLoggedIn: !!user,
    });
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
