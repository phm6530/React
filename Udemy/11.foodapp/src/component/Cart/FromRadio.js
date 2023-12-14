import classes from './OrderFrom.module.css';
import { useState } from 'react';

export default function FormRadio(props){
    const {inputValue : setRadio , touched} = props;

    const [value, setValue] = useState('');

    const isValid = value.trim() !== '';
    const inputIsInvalid = !isValid && touched;

    const onChangeHandler = (value, type) => {
        setValue(value)
        const currentIsValid = value.trim() !== ''; 
        setRadio(value, type, currentIsValid);
    }

    return(
        <>
         <div className={classes.control}>
                <p>결제수단</p>
                <label>
                    <input type="radio" name='payMent' value={'카드'} onChange={(e)=>onChangeHandler(e.target.value , 'payMent')} />
                    카드
                </label>
                <label>
                    <input type="radio" name='payMent'  value={'무통장 입금'} onChange={(e)=>onChangeHandler(e.target.value , 'payMent')}/>
                    무통장 입금
                </label>
                <label>
                    <input type="radio" name='payMent'   value={'기타'} onChange={(e)=>onChangeHandler(e.target.value , 'payMent')}/>
                    기타
                </label>
                {inputIsInvalid && <p className={classes['error-text']}>결제수단을 선택해주세요.</p>}
            </div>

        </>
    )
}