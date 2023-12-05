import React, { useState , useReducer} from 'react';
import Student from './student';

function App(){ 
  const reducer = (state , action)=>{
    switch(action.type){
      case 'add' :
        const newStudent = [...state, {
          id: Date.now(), 
          name : value,
          isHere : false
        }];

        return newStudent;
      case 'delete' :
        const filter = state.filter((e)=> e.id !== action.payload.id);
        return filter;
      case 'change' :
        const change = state.map((e)=> e.id === action.payload.id ? {...e, isHere : !e.isHere} : e);
        return change;
      default :
        return state;
    }
  }

  const initial = [];
  const [ value , setValue ] = useState('');
  const [ studentInfo , dispatch] = useReducer(reducer , initial)
  
  return(

    <>
      <h1>출석부</h1>
      <p>총 인원 : {studentInfo.length} </p>

      <input value={value} type="text" onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' onClick={()=>dispatch({type : 'add'})}>추가</button>

      <p>-------------------------</p>

        {studentInfo.map((e)=>{
          console.log(studentInfo);
            return <Student dispatch={dispatch} key={e.id}  data={e}/>
        })}

    </>

  )
}

export default App;