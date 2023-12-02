import { useState } from 'react';
import classes from './Form.module.css';

import Popup from '../popup/popup';
import Button from '../ui/Button';

export default function Form(props){
    const [ popupView , setPopupView ] = useState(true);
    const [msg, setMsg] = useState('');

    const inistalObejct = {
        UserName : "",
        UserAge : ""
    }

    const [ value, setValue ] = useState(inistalObejct);
    
    const ChangeValue = ( key,  value) =>{
        setValue(prev => ({...prev , [key] : value }))
    }

    const Close = () =>{
        setPopupView(true);
    }

    const onSubmitData = (e) =>{
        e.preventDefault();
        for(const item in value){
            if(!value[item]){
                setMsg('빈칸을 확인하세요');
                setPopupView(false);
                return;
            }else if(+value[item] < 1){
                setMsg('1보다 작은 수는 입력 불가합니다.');
                setPopupView(false);
                return;
            }
        }
        props.data(value);
        setValue(inistalObejct);
    }
    
    return(
        <>
        {!popupView && <Popup message={msg} view={Close} onConfirm={Close} />}
        <form className={classes.Form} onSubmit={onSubmitData}>
            
            <p>
                <label>Username</label>
                <input 
                    type="text" 
                    name="UserName"
                    value={value.UserName}
                    onChange={({target: {value} , target : {name}})=> ChangeValue(name, value) }
                />
            </p>

            <p>
                <label>Age(Years)</label>
                <input 
                    type="number" 
                    name="UserAge"
                    value={value.UserAge}
                    onChange={({target: {value} , target : {name}})=> ChangeValue(name, value) }
                />
            </p>

            <Button type='submit'>Submit</Button>
            
        </form>
        </>
    )
}