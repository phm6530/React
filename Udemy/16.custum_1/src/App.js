import React, { useState, useEffect, useRef } from 'react';
import useCustomHook from './component/custumHook';
import './App.css';

function App() {
  const [plus] = useCustomHook('minus');
  const [minus] = useCustomHook('plus');
  // const [stop, setStop] = useState(false);/

  return (
    <>
      <div> minus : {minus} </div>
      <div> plus : {plus}</div>
      {/* <button onClick={() => setStop((prev) => !prev)}>버튼</button> */}
    </>
  );
}

export default App;