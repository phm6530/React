import classes from './Header.module.css';
import { useSelector , useDispatch } from 'react-redux';
import {authActions} from '../store/redux_slice';

const Header = () => {

  const isLogin = useSelector(state => state.AuthSlice.isAuth);
  const dispatch = useDispatch()

  // dispatch 로그아웃
  const logoutHandler = () => {
      dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
          {isLogin && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
  
};

export default Header;
