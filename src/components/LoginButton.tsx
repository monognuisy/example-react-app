// LoginButton.tsx
import type { User } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { googleLogin } from '../utils/googleAuthentication';

// eslint-disable-next-line
const LoginButton = ({ onLogin }: { onLogin: ({ token, user }: {token: string | null, user: User | null }) => void}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    // 버튼에 기본으로 지정되어있는 이벤트를 실행하지 않습니다.
    e.preventDefault();
    // 이벤트가 다른 DOM 객체로 전파되지 않도록 막습니다.
    e.stopPropagation();

    // await: 구글 로그인 팝업을 띄우고 결과값을 받아올 때까지 대기합니다.
    const result = await googleLogin();
    if (result === null) {
      console.error('login failed');
      return;
    }
    const { token, user } = result;

    // onLogin 함수에 token과 user값을 전달해줍니다.
    onLogin({
      token: token ?? null,
      user: user ?? null,
    });
    console.log(token, user);
  };

  return (
    <Button onClick={handleClick}>sign in with google</Button>
  );
};

export default LoginButton;
