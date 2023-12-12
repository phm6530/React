import { useState } from 'react';

const SimpleInput = (props) => {
  const [ nameValue , setNameValue ] = useState('');
  const [ nameTouched , setNameTouched ]  = useState(false);

  // 빈칸이냐 검사
  const nameValueInvalid = nameValue.trim() === '';
  console.log('nameValueInvalid: ',nameValueInvalid);

  // 빈칸이고 + 사용자가 활성화 했느냐 검사
  const fromInvalid = nameValueInvalid && nameTouched;
  
  console.log('fromInvalid : ',fromInvalid);

  const onChangeHandelr = (e) =>{
      setNameTouched(true);
      setNameValue(e.target.value);
  }

  const onBlurHandler = (e) =>{
    setNameTouched(true);
}

  const onSubmitHandelr = (e) =>{
      e.preventDefault(); 
      setNameTouched(true);
      console.log(fromInvalid);
      if(nameValueInvalid) return

      setNameValue('');
      setNameTouched(false);
      console.log('제출')
  }

  return (
    <form onSubmit={onSubmitHandelr}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
            value={nameValue}
            onChange={onChangeHandelr}
            onBlur={onBlurHandler}
        />
        {fromInvalid && <div className="error-text">빈칸은 입력 불가합니다.</div>}
        
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
