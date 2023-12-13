import useCustunHook from '../custumhook';

const BasicForm = (props) => {
  const {
    value : name, 
    isValid : nameIsValid , 
    InputIsvalid : nameInputIsvalid ,
    Touched : setTouched, 
    setInput : setName ,
    reset : nameReset
  } = useCustunHook('');

  const {
    value : lastName, 
    isValid : lastNameIsValid , 
    InputIsvalid : lastnameInputIsvalid ,
    Touched : lastnameSetTouched, 
    setInput : setLastName ,
    reset : lastNameReset

  } = useCustunHook('');

  const {
    value : email, 
    isValid : emailIsValid , 
    InputIsvalid : emailInputIsvalid ,
    Touched : emailSetTouched, 
    setInput : setEmail ,
    reset : emailReset

  } = useCustunHook('');

  const SubmitHandler =(e) =>{
      e.preventDefault();

      // Touched 전달
      setTouched(true);
      lastnameSetTouched(true);
      emailSetTouched(true);

      if(!nameIsValid || !lastNameIsValid || !emailIsValid) return;
      nameReset();
      lastNameReset();
      emailReset();
      console.log('제출');
  }

  return (
    <form>
      <div className='control-group'>
        <div className={nameInputIsvalid ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'  
            value={name}
            onBlur={()=>setTouched(true)}
            onChange={(e)=>setName(e.target.value)}
          />
          {nameInputIsvalid && <div className="error-text">빈칸을 입력해주세요.</div>}
        </div>
        
        <div className={lastnameInputIsvalid ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='firstName'>Last Name</label>
          <input type='text' id='firstName' 
                value={lastName}
                onBlur={()=>lastnameSetTouched(true)}
                onChange={(e)=>setLastName(e.target.value)}
          />
          {lastnameInputIsvalid && <div className="error-text">빈칸을 입력해주세요.</div>}
        </div>
      </div>

      <div className={emailInputIsvalid ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='Email'>E-Mail Address</label>
        <input type='text' id='Email' 
            value={email}
            onBlur={()=>emailSetTouched(true)}
            onChange={(e)=>setEmail(e.target.value , 'email')}
        />
        {emailInputIsvalid && <div className="error-text">이메일을 입력해주세요.</div>}
      </div>

      <div className='form-actions'>
        <button onClick={SubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
