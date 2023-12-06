import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

function Auth(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로컬스토리지로 로그인 구현
  useEffect(() => {
    const userLocalLogin = localStorage.getItem('isLogin');
    if (userLocalLogin === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isLogin', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLogin');
    setIsLoggedIn(false);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { Auth as default, AuthContext };