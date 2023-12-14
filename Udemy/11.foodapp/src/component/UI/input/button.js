import classes from './button.module.css';
export default function Button(props){
    
    return(
        <>
            <button 
                className={classes.button}
                // disabled={props.disabled} 
            >{props.label}
            </button>
        </>
    )
}