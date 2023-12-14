import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { CartContext } from '../../Context/CartContext';


export default function MealItem(props){
    const { name , description , price , id} = props.data;
    // console.log(pirce)

    const ctx = useContext(CartContext);

    const MealAmount = (cnt, _ )=>{
            ctx.addItem({
                id : id,
                name,
                Amount : cnt, 
                price : price 
            })
    }

    

    return(
        <>
            <li className={classes.meal}>
                <div>
                    <h3>{name}</h3>
                    <div className={classes.description}>{description}</div>
                    <div className={classes.price}>${price}</div>
                </div>
                <div>
                    <MealItemForm Acount={MealAmount}/>
                </div>
            </li>
        </>
        
    )
}