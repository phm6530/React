// ExpenseItem.js
import React  from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../ui/card';

export default function Expenseitem(props) {

  
  return (
    <li>
      <Card className='expense-item'>

        <ExpenseDate date={props.data.date}/>

        <div className='expense-item__description'>

          <h2>{props.data.title}</h2>
          <div className='expense-item__price'>${props.data.Amount}</div>

          <button onClick={()=>{
            const changeTitle = prompt('What is Change the product');
            props.ExpenseYear(changeTitle);
          }}>Change Title</button>
        </div>

      </Card>
    </li>
  );
}