import React  , {useState ,  useMemo,}from 'react';
import Button from './components/UI/Button/Button';
import Demo from './components/Demo';


import './App.css';

function App() {
  const [Name , setName ] = useState('변경 전');

  const listItem = useMemo(()=>{
    return [5,4,2,7,10];
  },[]);

  

  return (
    <div className="app">
        <Demo title={Name} item={listItem}/>
        <Button onClick={() => setName('변경 됨')}>Change List</Button>
    </div>
  );
}

export default App;
