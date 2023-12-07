import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';


export default function MealItem(props){
    const { MealName , description , pirce } = props.data;
    
    return(
        <>
            <li className={classes.meal}>
                <div>
                    <h3>{MealName}</h3>
                    <div className={classes.description}>{description}</div>
                    <div className={classes.price}>${pirce}</div>
                </div>
                <div>
                    <MealItemForm/>
                </div>
            </li>
        </>
        
    )
}