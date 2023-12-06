
import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import {AuthContext} from './store/auto-context';


function App() {
const ctx = useContext(AuthContext);
  console.log(ctx.isLoggedIn);
  return (
        
        <>
            <MainHeader isAuthenticated={ctx.isLoggedIn} onLogout={ctx.onLogout} />
            <main>
              {!ctx.isLoggedIn && <Login />}
              {ctx.isLoggedIn && <Home />}
            </main>
            </>
  );
}

export default App;
