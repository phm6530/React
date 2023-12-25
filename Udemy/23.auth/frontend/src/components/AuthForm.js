import { Form , useSearchParams , Link , useActionData , useNavigation  } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData();
  const useNav = useNavigation();
  console.log('data :' , data);
  const errMsg = data && Object.values(data.errors);
  
  const submitting = useNav.state === 'submitting';


  const [ isParamLogin ] = useSearchParams();
  const isLogin = isParamLogin.get('mode') === 'login';
  
  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <ul>
          {data && errMsg.map((e, idx)=> <li key={idx}>{e}</li>)}
        </ul>
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${ isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={submitting}>
            {submitting ? 'submitting...' : 'Save'}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
