import classes from './MealItemForm.module.css';
import Input from '../UI/input/input'

export default function MealItemForm(){
    return(
        <>
            <form className={classes.form}>
                    <Input
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