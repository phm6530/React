import Input from '../ui/Input';
import Button from '../ui/Button'
import { useEffect, useReducer, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../conText/AuthContext';

const Reducer = (state, action)=>{
    switch(action.type){
        case 'USER_INPUT' :
            return {...state , idValue : action.idValue , isIdValid : action.idValue.includes('@') && action.idValue.trim().length > 6};
        case 'USER_PASSWORD' :
            return {...state , passwordValue : action.passwordValue , isPasswordValid : action.passwordValue.trim().length > 6};
        default : 
            return state
    }
}

export default function Login(){
    const [formValid , setFormValid] = useState(false);
    const [inputValues , dispatch] = useReducer(Reducer , {
        idValue : '',
        isIdValid : false , 
        passwordValue : '',
        isPasswordValid : false
    })

    const ctx = useContext(AuthContext);
    

    // 디바운싱 구현
    useEffect(()=>{
        const deBounce = setTimeout(()=>{
            setFormValid(inputValues.isIdValid && inputValues.isPasswordValid);
        },1000);
        
        return ()=>{
            clearTimeout(deBounce);
            console.log('클린업');
        }
    },[inputValues]);

    
    const userEmail = (e) =>{
        dispatch({type:'USER_INPUT' , idValue : e.target.value})
    }

    const userPassword = (e) =>{
        dispatch({type:'USER_PASSWORD' , passwordValue : e.target.value})
    }


    return(
        <>
            <Input 
                data={{
                    type:'email',
                    value : inputValues.idValue,
                    onchange : userEmail
                }}
            />

            <Input 
                data={{
                    type:'password',
                    value : inputValues.passwordValue,
                    onchange : userPassword
                }}
            />
            <Button
                data={{
                    type : 'submit',
                    value: 'Submit',
                    onClick : ()=>ctx.onLogin(),
                    disabled : !formValid
                }}
            />

        </>
    )
            
        
}