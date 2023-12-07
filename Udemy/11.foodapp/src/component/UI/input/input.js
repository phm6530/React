import classes from './Input.module.css';

export default function Input(props){
    const { label } = props.data;

    return <div className={classes.input}>
        <label>{label}</label>
        <input 
          {...props.data}
        />
    </div>
}