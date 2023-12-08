import React  , {useState , useEffect, useMemo }from 'react';
import Button from './components/UI/Button/Button';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
  const [value , setValue ] = useState('');
  const [bulian, setBulian ] = useState(false);
  const userObj = useMemo(()=>{
    return [
      {
        user : bulian ? 'Hyunmin'  : 'hy'
      }
    ]
  },[bulian])

  useEffect(()=>{
    console.log('App mount');
  },[userObj]);

  const inputHandler = (e) =>{
      setValue(e.target.value);
  }

  // const result = () =>{
  //     setList(prev => [...prev , { user: value}])
  //     setValue('');
  // }
  
  return (
    <div className="app">
        {userObj[0].user}
        <input type="text" value={value} onChange={inputHandler} />
        <Button onClick={() => setBulian(!bulian)}>hi</Button>
    </div>
  );
}

export default App;
