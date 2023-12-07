import classes from './Cart.module.css';
import Modal from '../Modal/Modal';

export default function Cart(props){
    const cartItem = <ul className={classes['cart-items']}>
            <li>aa</li>
    </ul>;
    
    const closePopup = () =>{
        props.view(false);
    }

    return(
        <Modal view={closePopup}>
            {cartItem}
            <div className={classes.total}> 
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button onClick={closePopup} className={classes['button--alt']}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}