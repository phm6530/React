import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from './CourseInput.module.css';


  // const FromStyle = styled.div`
  //   margin: 0.5rem 0;
  //   & label {
  //     font-weight: bold;
  //     display: block;
  //     color: ${(props) => (props.isValid ? 'red' : 'black')};
  //     margin-bottom: 0.5rem;
  //   }

  //   & input {
  //     display: block;
  //     width: 100%;
  //     border: 1px solid ${(props) => (props.isValid ? 'red' : 'black')};
  //     font: inherit;
  //     line-height: 1.5rem;
  //     padding: 0 0.25rem;
  //   }

  //   & input:focus {
  //     outline: none;
  //     background: #fad0ec;
  //     border-color: #8b005d;
  //   }
  // `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid , setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.length > 0){
      setIsValid(true);
    }
    
  };


  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
       setIsValid(false)
        return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styled['form-control']} ${!isValid && styled.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
