import classes from './OrderFrom.module.css';
import {  useState } from 'react';

export default function FormInput(props){
    const { label, inputValue, dataType , touched , touchedHandler} = props;
    
    const [value, setValue] = useState('');
    // const [touched, setTouched] = useState(false);

    // 입력값 유효성 검사
    const isValid = value.trim() !== '';
    const inputIsInvalid = !isValid && touched;

    const onChangeHandler = (value, type) => {
        setValue(value);
        const currentIsValid = value.trim() !== ''; 
        inputValue(value, type, currentIsValid);
    }

    const onBlurHandler = (type) => {
        touchedHandler(type ,true);
    }

    return(
        <>
             <div className={`${classes.control} ${inputIsInvalid && classes.invalid}`}>
                <p>{label}</p>
                <input type="text" id={dataType} 
                    onChange={(e)=>onChangeHandler(e.target.value , dataType)} 
                    onBlur={()=>onBlurHandler(dataType)}
                    value={value}
                />   
                {inputIsInvalid && <p className={classes['error-text']}>빈칸 입력해주세요</p>}
            </div>
        </>
    )
}