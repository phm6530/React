import './App.css';
import Login from './component/Login/Login';
import Nav from './component/ui/Nav';
import { AuthContext } from './conText/AuthContext';
import { useContext } from 'react';

function App() {
  const { loginData } = useContext(AuthContext);

  return (
    <>
        <Nav />
        {!loginData && <Login />}
    </>
  );
}

export default App;