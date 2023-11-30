import Card from '../ui/card';
import './Expense.css'
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import Chart from '../Chart/Chat'


export default function Expense(props){
    const [fitlerYear , setFilterYear] = useState('2023');
    
    const ExpenseYear = (year) =>{
        setFilterYear(year);
    }
    
    const filterData = props.arr.filter((e)=> e.date.toLocaleString('kr-KR').slice(0,4) === fitlerYear);

    
    return(
        <>
        <Card className='expenses'>
            <ExpensesFilter selected={fitlerYear} ExpenseYear={ExpenseYear}/>
            <Chart ChartDate={filterData} />
            <ExpenseList items={filterData}/>
        </Card>
        </>
    )
}