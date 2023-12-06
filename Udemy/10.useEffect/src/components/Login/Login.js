import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { AuthContext } from '../../store/auto-context';

const reducer = (state , action) =>{
  switch(action.type){
    case 'EMAIL_INPUT' :
      return {...state, value : action.val , isValid : action.val.includes('@') };
    case 'EMAIL_BLUR' :
      return {...state , value : state.value , isValid : state.isValid};
    case 'PASSWORD_INPUT' : 
      return {...state,  password : action.password , passwordIsValid : action.password.trim().length > 6};
    default :
      return state;
  }

}

const Login = (props) => {
  const authCtx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailIsValid , dispatch] = useReducer(reducer , {
      value : "",
      isValid : undefined,
      password : "",
      passwordIsValid : undefined
  })



  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('check');
      setFormIsValid(emailIsValid.value && emailIsValid.passwordIsValid);
    }, 1000);
  
    return () => {
      console.log('cleanup');
      clearTimeout(identifier);
    };
  }, [emailIsValid.value, emailIsValid.passwordIsValid]);
 
  
  const emailChangeHandler = (event) => {
    dispatch({type: 'EMAIL_INPUT', val : event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatch({type:'PASSWORD_INPUT' , password : event.target.value});
  };

  const validateEmailHandler = () => {
    dispatch({type: 'EMAIL_BLUR'});
  };

  // const validatePasswordHandler = () => {
  //   dispatch({type: });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailIsValid.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            emailIsValid.passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={emailIsValid.password}
            onChange={passwordChangeHandler}
            // onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
