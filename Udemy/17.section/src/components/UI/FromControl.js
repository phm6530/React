import { useEffect, useState } from 'react'

export default function Input(props){
    const 
    {
        id , 
        label ,  
        pullValue , 
        pullIsValid , 
        touched  : 
        parentTouched , reset
    } 
    = props;

    const [ value , setValue ] = useState('');
    const [ isValid, setIsValid ] = useState(false);
    const [ touched , setTouched ] = useState(false);
    
    useEffect(()=>{
        setTouched(parentTouched)
    },[parentTouched]);
    
    useEffect(()=>{
        setTouched(false);
        setIsValid(false);
        setValue('');
    },[reset]);

    const onChange = (e , inputType) => {

        const newValue = e.target.value;
        setValue(newValue);

        // 이메일 검사 로직
        let isValids;
        if(inputType === 'email'){
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const emailEmpty = newValue.trim() !== ''; 
            isValids = emailRegex.test(newValue) && emailEmpty
            setIsValid(isValids)

        }else{
            isValids = newValue.trim() !== ''
            setIsValid(isValids);
        }

        pullValue(id, newValue);
        pullIsValid(id, isValids);

    };

    const onBlur = () =>{
        setTouched(true);
    }
    
    const isInputValid = !isValid && touched;

    return(        
        <div className={isInputValid ? 'form-control invalid' :'form-control' }>
            <label htmlFor="firstname">{label}</label>
            <input 
                id={id}
                onChange={(e)=>onChange(e , props.type)}
                value={value}
                type={props.type}
                onBlur={onBlur}
            />
            {isInputValid && <p className='error-text'>빈칸이나 형식을 확인하세요</p>}
        </div>
    )
}