import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    
    const [enter , setEnter ] = useState({
        date : '',
        title : '',
        Amount : '',
    });
    
    const ChangeHanler = (id , value)=>{
        
        if(id === 'title'){
            setEnter((prev) => ({...prev, title : value}));
        }else if(id === 'Amount'){
            setEnter((prev) => ({...prev, Amount :  value}));
        }else if(id === 'date'){
            setEnter((prev) => ({...prev, date : new Date(value) }));
        }
    };

    // useEffect(()=>{
    //     console.log(enter);
    // },[enter]);
    
    const submitHandler = (e) =>{
        e.preventDefault();
        props.func(enter);
        setEnter(()=>({
            title : '',
            Amount : '',
            date : '',
        }))
      
    };
    const date = enter.date ?  enter.date.toISOString().split('T')[0] : enter.date ;
    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enter.title} onChange={(event) => ChangeHanler('title' ,event.target.value)}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enter.Amount} onChange={(event) => ChangeHanler('Amount' ,event.target.value)}/>
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" min='2019-01-01' max='2023-12-31' value={date} onChange={(event) => ChangeHanler('date' ,event.target.value)} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}


export default ExpenseForm;