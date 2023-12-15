import classes from './Counter.module.css';
import { useState } from 'react';
import {  useSelector , useDispatch } from 'react-redux'
import { INCREMENT , TOGGLE, DECREMENT } from '../store/index';


const Counter = () => {
  const [num ,setNum] = useState(0);
  
  const counter = useSelector(state => state.count);
  const counterView = useSelector(state => state.showCounter);
  
  const dispatch =  useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type: TOGGLE });
  };
  
  const incrementHandlers = () =>{
    dispatch({type: INCREMENT , amount : num})
  }


  const decrementHandler = () =>{
    dispatch({type: DECREMENT})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterView && <div className={classes.value}>{counter}</div>}
      <div>
          <input type="text" onChange={(e)=>setNum(+e.target.value)} />
          <button style={{margin: '1rem'}} onClick={incrementHandlers}>Increment by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
