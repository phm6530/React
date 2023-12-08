import classes from './Cart.module.css';
import Modal from '../Modal/Modal';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem';

export default function Cart(props){
    const ctx = useContext(CartContext);
    
    const minusMeal = (id) => {
        ctx.removeItem(id);
    }

    const plusMeal = (item) =>{
        ctx.addItem({...item , Amount : 1})
    }

    const cartItem = <ul className={classes['cart-items']}>
            {ctx.item.map((e)=>{
                return <CartItem 
                    key={e.id} 
                    data={e}
                    plus={plusMeal}
                    minus={minusMeal}
                />
            })}            
    </ul>;
    

    const closePopup = () =>{
        props.view(false);
    }

    return(
        <Modal view={closePopup}>
            {cartItem}
            <div className={classes.total}> 
                <span>Total Amount</span>
                <span>${ctx.total}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={closePopup} className={classes['button--alt']}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}