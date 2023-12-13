import { useReducer } from 'react';

const useCustunHook = () =>{
    const initalData = {
        value : '',
        isValid : false,
        Touched : false
    }

    const reducer = (state , action) =>{
        switch(action.type){
            case 'ISVALID' :
                let isValid ;
                if(action.inputType === 'email'){
                    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                    const emailEmpty = action.value.trim() !== '';
                    const emailInput = emailRegex.test(action.value) && emailEmpty;
                    isValid = emailInput;
                }else{
                    isValid = action.value.trim() !== '';
                }
                return {...state , value : action.value  , isValid : isValid  };
            case 'BLUR' :
                return {...state , Touched : action.isTouched };
            case 'RESET' :
                return {...initalData};
            default :
                return state;
        }
    }

    const [state, dispatch] = useReducer( reducer , initalData );

    const setInput = (value , type) =>{
        dispatch({type : 'ISVALID' , value , inputType : type})
    }
    
    const setTouched = (isTrue) => {
        dispatch({ type: 'BLUR' , isTouched : isTrue});
    };

    const reset = () =>{
        dispatch({ type : 'RESET' });
    }

    const InputIsvalid = !state.isValid && state.Touched;
    // console.log('state.isValid : ', state.isValid);
    return {
        value : state.value, 
        isValid : state.isValid,
        InputIsvalid : InputIsvalid,
        Touched : setTouched ,
        setInput : setInput,
        reset
    };
}

export default useCustunHook;