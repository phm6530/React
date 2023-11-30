import Expenseitem  from './Expenseitem';
import Card from '../ui/card';
import './Expense.css'
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

export default function Expense(props){
    const [fitlerYear , setFilterYear] = useState('All');
    
    const ExpenseYear = (year) =>{
        setFilterYear(year);
    }
    
    const filterData = fitlerYear === 'All' 
    ? props.arr 
    : props.arr.filter((e)=> e.date.toLocaleString('kr-KR').slice(0,4) === fitlerYear);
     
    

    // useEffect(()=>{
    //     console.log(Year);
    // },[Year]);
    
    return(
        <>
        <Card className='expenses'>
            <ExpensesFilter selected={fitlerYear} ExpenseYear={ExpenseYear}/>
            {filterData.length === 0 ? 'No data' : filterData.map((e, idx) => <Expenseitem key={idx} data={e} />)}
        </Card>
        </>
    )
}