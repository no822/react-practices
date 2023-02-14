import {createContext, useState} from "react";

let logoutTimer;

export const AuthContext = createContext({
  token: '',
  isLogged: false,
  loginHandler: () => {
  },
  logoutHandler: () => {
  },
});

const calculateRemainingTime = expires => {
  const currentTime = new Date().getTime();
  const expiresTime = new Date(expires).getTime();

  return expiresTime - currentTime;
}

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expireTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 0) {
    localStorage.removeItem('token');
    localStorage.removeItem('expireTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };

}
// 토큰 만료기간을 입력받아서 계산
// 만료기간이 지나면 localStorage에서 토큰이 삭제되어야함
// 새로고침 되어도 만료기간은 유지되어야 함
const AuthProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [authToken, setAuthToken] = useState(initialToken);
  const isLogged = !!authToken;

  const logoutHandler = () => {
    setAuthToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expireTime');

    if (logoutTimer) {
      console.log('clear')
      clearTimeout(logoutTimer);
    }
  }

  const loginHandler = (token, expires) => {
    setAuthToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expireTime', expires);
    const remainTime = calculateRemainingTime(expires);
    logoutTimer = setTimeout(logoutHandler, remainTime);
  }


  const ctxValue = {
    token: authToken,
    isLogged,
    loginHandler,
    logoutHandler,
  };

  return (
      <AuthContext.Provider value={ctxValue}>
        {props.children}
      </AuthContext.Provider>
  );
}


export default AuthProvider;