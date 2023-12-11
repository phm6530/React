import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({
    loginData : false , 
    onLogin : ()=>{}
})

const AuthProvider = (props) =>{
    const [loginData , setLoginData] = useState(false);

    const onLogin = () =>{
        localStorage.setItem('Login' , '1');
        setLoginData(true);
    }
  
    const onLogOut = () =>{
      localStorage.removeItem('Login');
      setLoginData(false);
    }
  
    // 로컬 확인
    useEffect(()=>{
      const localLoginData = localStorage.getItem('Login');
      if(localLoginData === '1'){
        setLoginData(true);
      }
    },[]);

    const contextValue = {
        loginData : loginData,
        onLogin : onLogin,
        onLogOut : onLogOut
    }

    return(
      <AuthContext.Provider value={contextValue}>
          {props.children}
      </AuthContext.Provider>
    )
}

export { AuthProvider , AuthContext }