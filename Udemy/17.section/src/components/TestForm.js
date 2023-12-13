import {  useState } from 'react';
import FormControl from '../components/UI/FromControl'

const TestForm = (props) =>{
    
    const userDataform = {
        firstName : {value : '' , isValid : false},
        lastName : {value : '' , isValid : false},
        userEmail : {value : '' , isValid : false}
    }

    const formTouched = {
        firstName : false,
        lastName : false ,
        userEmail : false
    }
    
    const [ userData , setUserdata ] = useState(userDataform);
    const [ touched , setTouched ] = useState(formTouched);
    const [ reset , setReset] = useState(false);

    
    const pullData = (type, value) =>{
        // 벨류 값 업데이트
        setUserdata(prev => ({...prev , [type] : { ...prev[type] , value }}))
    }

    const pullIsValid = (type, isValid)=>{
        // 유효성 검사 값 넣기
        setUserdata(prev => ({...prev , [type] : { ...prev[type] , isValid }}))
    }

   const objValue = Object.values(userData);
   const isAlltrue = objValue.reduce((isValid , item) =>{
        return isValid && item.isValid;
   },true);


    const submitHandler = (e) =>{
        e.preventDefault(); 
        
        console.log('검사');
        setTouched({
            firstName : true,
            lastName : true ,
            userEmail : true
        })
        if(!isAlltrue){
            console.log('check your Data');
            return
        }

        console.log('제출');

        // 초기화
        setUserdata(userDataform)
        setReset(true);
        setTouched(formTouched)
    }

    return(
        <>
        <form onSubmit={submitHandler}>
            <div className='control-group'>

                <FormControl
                    id='firstName'
                    label='First Name'
                    type='text'
                    pullValue={pullData}
                    pullIsValid={pullIsValid}
                    touched={touched.firstName}
                    value={userDataform.firstName.value}
                    reset={reset}
                />

                <FormControl
                    id='lastName'
                    label='Last Name'
                    type='text'
                    pullValue={pullData}
                    pullIsValid={pullIsValid}
                    touched={touched.lastName}
                    value={userDataform.lastName.value}
                    reset={reset}
                />

                <FormControl
                    id='userEmail'
                    label='User Email'
                    type='email'
                    pullValue={pullData}
                    pullIsValid={pullIsValid}
                    touched={touched.userEmail}
                    value={userDataform.userEmail.value}
                    reset={reset}
                />

            </div>

            <div className='form-actions'>
                <button>Submit</button>
            </div>
            
        </form>
        </>
    )
}

export default TestForm;