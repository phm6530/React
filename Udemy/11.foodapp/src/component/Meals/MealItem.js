import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { CartContext } from '../../Context/CartContext';


export default function MealItem(props){
    const { MealName , description , pirce , id} = props.data;
    const ctx = useContext(CartContext);
    
    const MealAmount = (cnt, _ )=>{
            ctx.addItem({
                id : id,
                name : MealName,
                Amount : cnt, 
                price : pirce 
            })
    }

    return(
        <>
            <li className={classes.meal}>
                <div>
                    <h3>{MealName}</h3>
                    <div className={classes.description}>{description}</div>
                    <div className={classes.price}>${pirce}</div>
                </div>
                <div>
                    <MealItemForm Acount={MealAmount}/>
                </div>
            </li>
        </>
        
    )
}