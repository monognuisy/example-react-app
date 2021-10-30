import React from 'react';
import { Button } from 'react-bootstrap';
import { googleLogout } from '../utils/googleAuthentication';

const LogoutButton = ({ onLogout }: { onLogout: () => void}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    // 구글 로그아웃을 진행합니다.
    googleLogout();
    // onLogout 콜백을 실행합니다.
    onLogout();
  };

  return (
    <Button onClick={handleClick}>logout</Button>
  );
};

export default LogoutButton;
