// ExpenseItem.js
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../ui/card';

export default function Expenseitem({ date, title, Amout }) {

  return (
    <Card className='expense-item'>

      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${Amout}</div>
      </div>
    </Card>
  );
}