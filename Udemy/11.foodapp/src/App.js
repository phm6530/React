import Header from './component/UI/Header/Header'
import Meals from './component/Meals/Meals';
// import Modal from './component/Modal/Modal';
import { useState } from 'react';
import Cart from './component/Cart/Cart';

function App() {
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
