import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const [Show , setShow] =useState(false);

    // 새로 expense 추가하는 함수
    const newExpenseDatahandler = (ExpenseData) =>{
        const newExpense ={
            ...ExpenseData,
            id : Math.random().toString()
        }
        props.newExpense(newExpense)
    }

    const showChnage = () =>{
        setShow(false);
    }


    return (
        <div className='new-expense'>
            {!Show && <button onClick={()=>setShow(prev => !prev)}>Add New Expense</button>}
            {Show &&   <ExpenseForm cansel={showChnage} func={newExpenseDatahandler}/>}
        </div>
    )
}

export default NewExpense;