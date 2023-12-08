import Header from './component/UI/Header/Header'
import Meals from './component/Meals/Meals';
// import Modal from './component/Modal/Modal';
import { useContext, useState } from 'react';
import Cart from './component/Cart/Cart';
import { CartContext } from './Context/CartContext';


function App() {
  const ctx = useContext(CartContext);
  const [view, setView] = useState(false);
  
  const ModalHandler = (e)=>{
      setView(e);
  }

  return (
    <>
      {view && <Cart  view={ModalHandler}/>}
      <Header view={ModalHandler}/>
        <main>
          <Meals/>
        </main>
    </>
  );
}

export default App;
