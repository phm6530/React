import classes from './Button.module.css';

export default function Button(props){
    
    return(
        <button 
            type={props.type} 
            className={classes['btnStyleType_1']}
            onClick={props.onClick}
        >
            {props.children}

        </button>
    )
}