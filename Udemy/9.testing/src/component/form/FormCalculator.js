import React ,{ useState } from 'react';

export default function FormCalculator(props){
    const initalData = {
        'current-savings' : '',
        'yearly-contribution' : '',
        'expected-return' : '',
        'duration' : ''
    }
    const MSG = {
        'current-savings' : '현재 절감액' ,
        'yearly-contribution' : '연간 절감액',
        'expected-return' : '예상 이자 ',
        'duration' : '투자기간'
    }

    const [fromData , setFromData ] = useState(initalData);

    const formHandler = ( id , e) =>{
        setFromData(prev => ({...prev , [id] : +e}));
    }

    const reset = () =>{
        setFromData(initalData);
        props.reset(null);
    }
    
    const formSubmit = (e)=>{
        e.preventDefault();
        for(const item in initalData){
            if(!fromData[item]){
                alert(`${MSG[item]}을 입력하세요`); 
                return;
            } 
        }
        props.calculateHandler(fromData);
    }

    // console.log(props.calculateHandler);
    return(
        <>
         <form className="form" onSubmit={formSubmit}>
            <div className="input-group">
            <p>
                <label htmlFor="current-savings">현재 절감액 ($)</label>
                <input type="number" 
                value={fromData['current-savings']} 
                id="current-savings" 
                onChange={({ target: { value } }) => formHandler('current-savings', value)}/>
            </p>
            <p>
                <label htmlFor="yearly-contribution">연간 절감액 ($)</label>
                <input type="number" 
                     value={fromData['yearly-contribution']} 
                     id="yearly-contribution" onChange={({ target: { value } }) => formHandler('yearly-contribution', value)}/>
            </p>
            </div>
            <div className="input-group">
            <p>
                <label htmlFor="expected-return">
                예상 이자 (%, 년간)
                </label>
                <input type="number" 
                value={fromData['expected-return']}
                id="expected-return" onChange={(event) => formHandler('expected-return', event.target.value)}/>
            </p>
            <p>
                <label htmlFor="duration">투자기간 (years)</label>
                <input type="number" 
                 value={fromData['duration']}
                 id="duration" onChange={(event) => formHandler('duration', event.target.value)}/>

            </p>
            </div>
            <p className="actions">
                <button type='reset' className="buttonAlt" onClick={reset}>Reset</button>
                <button type="submit" className="button">Submit</button>
            </p>
      </form>
      </>
    )
}