import Expenseitem from './Expenseitem';
import './ExpenseList.css';

export default function ExpenseList(props){
    
    if(props.items.length === 0){
        return <div className='expenses-list__fallback'>Found No Expenses</div>;
    }

    return(
        <>
        <ul className='expenses-list'>
            {props.items.map((e, idx) => <Expenseitem key={idx} data={e} />)}
        </ul>
        </>
    )
}