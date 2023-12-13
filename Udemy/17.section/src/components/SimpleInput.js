import { useState } from 'react';

const SimpleInput = (props) => {  
  const [ nameValue , setNameValue ] = useState('');
  const [ nameTouched , setNameTouched ]  = useState(false);

  const [ emailValue , setEmailValue ] = useState('');
  const [ emailTouched , setEmailTouched ]  = useState(false);

  // 빈칸이면 true 를 반환함
  const nameInput = nameValue.trim() !== '' ;
  const nameInputIsvalid = !nameInput && nameTouched;
  

  // 빈칸이거나 @를 포함하지않으면 false를 반환함
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const emailEmpty = emailValue.trim() !== '';
  const emailInput = emailRegex.test(emailValue) && emailEmpty;
  const emailInputIsvalid = !emailInput && emailTouched;

  const formIsValid = nameInput && emailInput;
  
  const onChangeHandelr = (e) =>{
      setNameTouched(true);
      setNameValue(e.target.value);
  }

  const onChangeEmailHandelr = (e) =>{
    setEmailTouched(true);
    setEmailValue(e.target.value);
  }

  const onSubmitHandelr = (e) =>{
      e.preventDefault(); 
      setNameTouched(true);
      setEmailTouched(true);

      if(!formIsValid) return

      setNameValue('');
      setEmailValue('');
      setNameTouched(false);
      setEmailTouched(false);
      console.log('제출')
  }


  const nameClass = nameInputIsvalid ? 'form-control invalid' : 'form-control';
  const emailClass = emailInputIsvalid ? 'form-control invalid' : 'form-control';

  const emailAlert = () =>{
    if(!emailEmpty){
      return '이메일을 기재해주세요.'
    }
    if(!emailInput){
      return '이메일을 형식을 확인해주세요.'
      }
  }

  return (
    <form onSubmit={onSubmitHandelr}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
            value={nameValue}
            onChange={onChangeHandelr}
            onBlur={()=>setNameTouched(true)}
        />
        {nameInputIsvalid && <div className="error-text">빈칸을 입력해주세요.</div>}
      </div>

      <div className={emailClass}>
        <label htmlFor='name'>Your Email</label>

        <input type='email' id='email' 
            value={emailValue}
            onChange={onChangeEmailHandelr}
            onBlur={()=>setEmailTouched(true)}
        />
          {emailInputIsvalid && <div className="error-text">{emailAlert()}</div>}
      </div>


      <div className="form-actions">
        <button   disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
