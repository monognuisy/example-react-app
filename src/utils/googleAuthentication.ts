import {
  getAuth, signInWithPopup, signOut, GoogleAuthProvider,
} from 'firebase/auth';

// 구글 로그인
export const googleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // 팝업창을 통해 구글 로그인 진행, 진행 후 결과 값 저장
    const result = await signInWithPopup(auth, provider) ?? null;
    const credential = GoogleAuthProvider.credentialFromResult(result) ?? null;
    if (credential === null) {
      console.error('failed to signin');
      return null;
    }

    const token = credential.accessToken;
    const { user } = result;

    // 액세스 토큰과 유저 정보 반환
    return { token, user };
  } catch (error) { // 에러 발생시
    // eslint-disable-next-line
    alert(error);
    return { token: null, user: null }; // {null, null} 리턴
  }
};

// 구글 로그아웃
export const googleLogout = () => {
  const auth = getAuth();
  signOut(auth);
};
