import './Char.css';
import Chartbar from './Chartbar';

export default function Chat(props){
    console.log(props.ChartDate);
    const setingMonth = [
        {label : 'Jan', value : 0},
        {label : 'Feb', value : 0},
        {label : 'Mar', value : 0},
        {label : 'Apr', value : 0},
        {label : 'May', value : 0},
        {label : 'Jun', value : 0},
        {label : 'Jul', value : 0},
        {label : 'Aug', value : 0},
        {label : 'Sep', value : 0},
        {label : 'Oct', value : 0},
        {label : 'Nov', value : 0},
        {label : 'Dev', value : 0}
    ]


    for(const item of props.ChartDate){
        const MonthSelect = item.date.getMonth();
        setingMonth[MonthSelect].value += item.Amount;
    }

    const arrAmout = setingMonth.map((e)=>e.value);
    const MaxValue = Math.max(...arrAmout);
    

    
    return(
        <div className='chart'>
            {setingMonth.map((data,idx) => <Chartbar MaxValue={MaxValue} key={idx} label={data.label} value={data.value}/>)}
        </div>
    )
}