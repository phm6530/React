import React , { useState , useEffect} from 'react';
import './App.css';


function App() {
  const [positon , Setpositon] = useState({ X : 0, Y : 0 });

  useEffect(()=>{

    const handler = (e) =>{

        Setpositon({ X : e.clientX, Y : e.clientY})

    };

    document.addEventListener('mousemove', handler);

},[]);

  return (
    <>
      <div className='circle' style={{transform: `translate(${positon.X}px , ${positon.Y}px)`}}></div>
      <button onClick={()=>Setpositon((prev)=> prev + 1)}>Click! </button>
    </>
  );
}

export default App;
