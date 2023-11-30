import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    
    // 새로 expense 추가하는 함수
    const newExpenseDatahandler = (ExpenseData) =>{
        const newExpense ={
            ...ExpenseData,
            id : Math.random().toString()
        }
        props.newExpense(newExpense)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm func={newExpenseDatahandler} />
        </div>
    )
}

export default NewExpense;