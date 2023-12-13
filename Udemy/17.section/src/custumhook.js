import { useState } from 'react';

const useCustunHook = () =>{
    const [value , setValue] = useState('');
    const [isValid , setIsValid] = useState(false);
    const [Touched , setTouched ]  = useState(false);

    const setInput = (e , type) =>{
        setValue(e);
        if(type === 'email'){
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const emailEmpty = e.trim() !== '';
            const emailInput = emailRegex.test(e) && emailEmpty;
            setIsValid(emailInput);
        }else{
            setIsValid(e.trim() !== '');
        }
    }
    
    const InputIsvalid = !isValid && Touched;

    return {
        value : value, 
        isValid : isValid,
        InputIsvalid : InputIsvalid,
        Touched : setTouched ,
        setInput : setInput
    };
}

export default useCustunHook;