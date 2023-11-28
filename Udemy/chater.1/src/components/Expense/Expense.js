import Expenseitem from './Expenseitem';
import Card from '../ui/card';
import './Expense.css'


export default function Expense(props){
    
    return(
        <>
        <Card className='expenses'>
            {props.arr.map((e, index)=>{
                return (
                <Expenseitem 
                    key={index} 
                    date={e.date}
                    title={e.title}
                    Amout={e.Amout}
                />
                )
            })}
        </Card>
        </>
    )
}