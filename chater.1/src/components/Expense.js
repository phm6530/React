import Expenseitem from './Expenseitem';
import Card from './card';
import './Expense.css'


export default function Expense(props){
    
    return(
        <>
        <Card className='expenses'>
            {props.arr.map((e, index)=>{
                return (
                <Expenseitem 
                    key={index} // React에서는 각각의 요소에 key를 지정해주는 것이 좋습니다.
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