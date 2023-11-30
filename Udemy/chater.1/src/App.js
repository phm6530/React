// App.js
import React, {useState} from 'react';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css';

function App() {
  const DUMMY_EXPENSE = [
    {
      date: new Date(),
      title: 'A - Book',
      Amount: 294.67
    },
    {
      date: new Date(),
      title: 'B - Book',
      Amount: 1294.67
    },
    {
      date: new Date(),
      title: 'Car Insurance',
      Amount: 194.67
    },
    {
      date: new Date(),
      title: 'D - Book',
      Amount: 394.67
    },
    {
      date: new Date('2020-11-1'),
      title: 'E - Book',
      Amount: 394.67
    }
  ];

  // 추가
  const [arr , setArr] = useState(DUMMY_EXPENSE);
  const addExpense = (addObject)=>{
      setArr(prev => {
        return [addObject , ...prev]
        
      });
  }

  
  

  return ( 
    <>
      <NewExpense newExpense={addExpense}/>
      <Expense  
        arr={arr}
      />
    </>
  );
}

export default App;