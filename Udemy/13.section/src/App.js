import React  , {useState , useCallback, useEffect, useMemo }from 'react';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [value , setValue ] = useState('');
  const [list, setList ] = useState([]);

  const inputHandler = (e) =>{
      setValue(e.target.value);
  }

  const result = () =>{
      setList(prev => [...prev , { name: value}])
      setValue('');
  }

  return (
    <div className="app">
        {list.map((e)=>{
            return <div>{e.name}</div>
        })}
        <input type="text" value={value} onChange={inputHandler} />
        {/* <button  onClick={result}>##</button> */}
        <Button onClick={result}>hi</Button>
    </div>
    
  );
}

export default App;
