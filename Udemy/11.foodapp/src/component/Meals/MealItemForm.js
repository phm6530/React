import classes from './MealItemForm.module.css';
import Input from '../UI/input/input'
import {useRef} from 'react';


export default function MealItemForm(props){
    const AmountRef = useRef();

    const submitHandlr = (e) =>{
        e.preventDefault();
        props.Acount(+AmountRef.current.value);
    }

    return(
        <>
            <form className={classes.form} onSubmit={submitHandlr}>
                    <Input
                        ref={AmountRef}
                        data={{
                            label : 'Amount',
                            type : 'number',
                            defaultValue : '1',
                            min : '1',
                            max : '5'
                        }}

                    />
                    <button>+ Add</button>
            </form>
        </>
    )
}