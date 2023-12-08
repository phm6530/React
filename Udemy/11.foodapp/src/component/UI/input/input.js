import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) =>{
  const { label } = props.data;
  
    return <div className={classes.input}>
        <label>{label}</label>
        <input 
          ref={ref}
          {...props.data}
        />
    </div>

})

export default Input;