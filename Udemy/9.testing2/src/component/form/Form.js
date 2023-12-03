import { useState} from 'react';
import classes from './Form.module.css';

import Popup from '../popup/popup';
import Button from '../ui/Button';

export default function Form(props){
    // const nameRef = useRef();
    // const ageRef = useRef();

    const [ popupView , setPopupView ] = useState(null);
    // console.log(popupView);
    const inistalObejct = {
        UserName : "",
        UserAge : ""
    }

    const [ value, setValue ] = useState(inistalObejct);
    
    const ChangeValue = ( key,  value) =>{
        setValue(prev => ({...prev , [key] : value }))
    }

    const Close = () =>{
        setPopupView(null);
    }

    const onSubmitData = (e) =>{
        e.preventDefault();
        // const name = nameRef.current.value;
        // const age = ageRef.current.value;
        for(const item in value){
            if(!value[item]){
                setPopupView({
                    message : '빈칸을 확인하세요'
                });
                return;
    
            }else if(+value[item] < 1){
                setPopupView({
                    message : '1보다 작은 수는 입력 불가합니다.'
                });
                return;
            }
        }
        
        props.data(value);
        setValue(inistalObejct);
    }
    
    return(
        <>
        {popupView && <Popup data={popupView} view={Close} />}
        <form className={classes.Form} onSubmit={onSubmitData}>
            
            <p>
                <label>Username</label>
                <input 
                    type="text" 
                    name="UserName"
                    value={value.UserName}
                    onChange={({target: {value} , target : {name}})=> ChangeValue(name, value) }
                    // ref={nameRef}
                />
            </p>

            <p>
                <label>Age(Years)</label>
                <input 
                    type="number" 
                    name="UserAge"
                    value={value.UserAge}
                    onChange={({target: {value} , target : {name}})=> ChangeValue(name, value) }
                    // ref={ageRef}
                />
            </p>

            <Button type='submit'>Submit</Button>
            
        </form>
        </>
    )
}